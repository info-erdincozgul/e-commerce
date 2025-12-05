import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
  REMOVE_FROM_CART,
} from "../actions/ShoppinCartAction";

const initialState = {
  cart: [],
  payment: [],
  address: [],
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      const { count, product } = action.payload;

      const checked =
        action.payload.checked !== undefined ? action.payload.checked : true;

      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingProductIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          count: updatedCart[existingProductIndex].count + count,
          checked: checked,
        };

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              count: count,
              checked: checked,
              product: product,
            },
          ],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };

    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };

    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

  

    default:
      return state;
  }
};

export default shoppingCartReducer;
