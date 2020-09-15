import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product';

export const addProduct = createAction('[] AddProduct', props<{ product: Product }>());

export const bulkAddProduct = createAction('[] AddBulkProduct', props<{ products: Product[] }>());
