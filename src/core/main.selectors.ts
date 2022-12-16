import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState, Cart} from './model';
import {CartState} from './reducers';


export const selectAppState = createFeatureSelector<AppState>('detailsReducer');
export const checkId = createSelector( selectAppState, state => state.details );


export const selectCartState = createFeatureSelector<CartState>('cart');
export const areCartLoaded = createSelector(
  selectCartState,
  state => state.allCartLoaded
)
