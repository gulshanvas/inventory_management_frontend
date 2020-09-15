import { createReducer, on } from '@ngrx/store';
import { addProduct, bulkAddProduct } from '../actions/product.actions';
import { Product } from '../models/product';

export const initialState = [];

const _addProductReducer = createReducer(
  initialState,
  on(addProduct, (state, action: any) => [...state, action.product]),
);

const _bulkAddProductReducer = createReducer(
  initialState,
  on(bulkAddProduct, (state, action: any) => action.products),
);

export function addProductReducer(state, action) {
  return _addProductReducer(state, action);
}

export function bulkAddProductReducer(state, action) {
  return _bulkAddProductReducer(state, action);
}