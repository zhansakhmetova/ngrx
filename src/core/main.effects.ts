import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CartActions} from './action-types';
import {concatMap, map, shareReplay, tap} from 'rxjs/operators';
import {GeneralService} from './general.service';
import {cartLoaded} from './cart.actions';

@Injectable()
export class MainEffects {
  savedDetail$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(CartActions.productDetails),
        tap(action => {
          localStorage.setItem('details', JSON.stringify(action.details));
        })
      ),
    {dispatch: false}
  );

  loadCourses$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(CartActions.cartLoading),
        concatMap(action => this.general.getCart()),
        shareReplay(),
        map(cart => cartLoaded({cart}))
      )
  );


  constructor(private actions$: Actions, private general: GeneralService) {
  }
}
