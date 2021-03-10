import { combineReducers } from 'redux';

import { LOAD_CANDY, ADD_TO_CART, CANDY_TO_CART, CHECK_OUT, REMOVE_FROM_CART, BACK_TO_LISTING } from './actions';

function storeReducer(state = [], action) {
  switch (action.type) {
    case LOAD_CANDY:
      if (state.length > 0)
        return state;
      return action.candy;
    case CANDY_TO_CART:
      return state.map( candy => (
        candy.id === action.id ? {
          ...candy,
          inStock: candy.inStock - action.amount
        } : candy
      ));
    case BACK_TO_LISTING:
      return state.map( candy => (
        candy.id === action.id ? {
          ...candy,
          inStock: candy.inStock + action.amount
        } : candy
      ));
    default:
      return state;
  }
}

function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      let inCart = false;
      state.forEach((item, i) => {
        if (item.id === action.candy.id)
          inCart = true;
      });
      if (!inCart){
        return [
          ...state,
          action.candy
        ];
      }
      else {
        return state.map( candy => (
          candy.id === action.candy.id ? {
            ...candy,
            amount: candy.amount + action.candy.amount
          } : candy
        ));
      }
    case CHECK_OUT:
      return []
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  candy: storeReducer,
  cart: cartReducer
});

export default rootReducer;
