import {createAction, props} from '@ngrx/store';
import {Cart, Product} from '../model';

export const load = createAction(
  '[Load Page] Cart',
  props<{cart: Cart}>()
);

export const productDetails = createAction(
  '[Product Details] Load',
  props<{product: Product}>()
);

// const newLoadAction = load({cart: })
