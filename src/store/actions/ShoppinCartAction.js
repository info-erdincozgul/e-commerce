export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const setCart = (cart) => {
  return { type: SET_CART, payload: cart };
};

export const setPayment = (payment) => {
  return { type: SET_PAYMENT, payload: payment };
};

export const setAddress = (address) => {
  return { type: SET_ADDRESS, payload: address };
};

export const removeFromCart = (productId) => {
  return { type: REMOVE_FROM_CART, payload: productId };
};
