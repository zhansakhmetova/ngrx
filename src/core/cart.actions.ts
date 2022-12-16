import {createAction, props} from '@ngrx/store';
import {Cart, Details} from './model';

export const cartLoading = createAction(
  '[Cart Page] Loading',
);

export const cartLoaded = createAction(
  '[Cart Page] Loaded',
  props<{ cart: Cart[] }>()
);

export const productDetails = createAction(
  '[Product Details] Info',
  props<{ details: Details }>()
);
