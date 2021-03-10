export const LOAD_CANDY = 'LOAD_CANDY';

export const ADD_TO_CART = 'ADD_TO_CART';

export const CANDY_TO_CART = 'CANDY_TO_CART';

export const CHECK_OUT = 'CHECK_OUT';

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const BACK_TO_LISTING = 'BACK_TO_LISTING';

export function loadCandy(candy) {
  return {
    type: LOAD_CANDY,
    candy
  };
}

export function candyToCart(id, amount) {
  return {
    type: CANDY_TO_CART,
    id,
    amount
  }
}

export function addToCart(candy) {
  return {
    type: ADD_TO_CART,
    candy
  }
}

export function checkOut() {
  return {
    type: CHECK_OUT
  }
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

export function backToListing(id, amount) {
  return {
    type: BACK_TO_LISTING,
    id,
    amount
  }
}
