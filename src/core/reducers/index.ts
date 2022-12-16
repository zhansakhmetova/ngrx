import {AppState, Cart} from '../model';
import {combineReducers, createReducer, on} from '@ngrx/store';
import {CartActions} from '../action-types';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export const initialState: AppState = {
  cart: undefined,
  details: undefined,
};

export interface CartState  extends EntityState<Cart> {
  allCartLoaded: boolean;
}

export const adapter = createEntityAdapter<Cart>();

export const initialCartState = adapter.getInitialState({
  allCartLoaded: false
})

export const cartReducer = createReducer(
  initialCartState,
  on(CartActions.cartLoaded,
    (state, action) => adapter.setAll(
      action.cart,
      {...state, allCartLoaded: true}
    ))
);


export const detailsReducer = createReducer(
  initialState,
  on(CartActions.productDetails, (state, action) => {
    return {
      details: action.details
    };
  })
);


