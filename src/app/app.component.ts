import {Component, OnInit} from '@angular/core';
import {GeneralService} from '../core/general.service';
import {Store} from '@ngrx/store';
import {AppState} from '../core/reducers';
import {tap} from 'rxjs/operators';
import {load, productDetails} from '../core/reducers/cart.actions';
import {Cart, Details} from '../core/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx';
  loading: boolean;
  cartData$: Cart;
  productData: Details;

  constructor(private general: GeneralService, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.loading = true;
    this.general.getCart()
      .pipe(
        tap(cart => {
          this.store.dispatch(load({cart}));
        })
      )
      .subscribe((res) => {
        this.cartData$ = res;
        this.loading = false;
      });
  }


  getProduct(id) {
    this.general.getProducts(id)
      .pipe(
        tap(product => {
          this.store.dispatch(productDetails({product}));
        })
      )
      .subscribe((res) => {
        debugger
        console.log(res);
        this.productData = res;
      });
  }

}
