import * as fromShoppingList from '../store/reducers/shopping-list.reducers';
import * as fromAuth from '../store/reducers/auth.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppSate {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppSate> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer,
};
