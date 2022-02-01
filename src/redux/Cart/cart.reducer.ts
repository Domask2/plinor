import { cartTypes, CartAction, ICart } from './cart.types';
import cartArray   from './data';
import { addTodoItem } from './cart.helper';

export type TInitialState = typeof initialState;

const initialState = {
  cart: cartArray as ICart[],
};

export const cartReducer = (state = initialState, action: CartAction): TInitialState => {
  switch (action.type) {
    case cartTypes.ADD_TODO_SAGA:
      return {
        ...state,
        cart: addTodoItem([...state.cart], action.payload),
      };
    default:
      return state;
  }
};
