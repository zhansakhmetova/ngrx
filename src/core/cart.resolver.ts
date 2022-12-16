import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AppState} from './model';
import {select, Store} from '@ngrx/store';
import {areCartLoaded} from './main.selectors';
import {filter, finalize, first, tap} from 'rxjs/operators';
import {cartLoading} from './cart.actions';


@Injectable()
export class CartResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.store.pipe(
      select(areCartLoaded),
      tap((cartLoaded) => {
        if (!this.loading && !cartLoaded) {
          this.store.dispatch(cartLoading());
        }
      }),
      filter(cartLoaded => cartLoaded),
      first(),
      finalize(() => this.loading = false)
    );
  }
}
