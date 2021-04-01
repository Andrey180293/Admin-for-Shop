import {
  SET_PRODUCTS,
  UPDATE_PRICE,
  UPDATE_NAME,
} from "../action-creators/products";

const initialization = {
  products: null,
};

function ProductsReducer(state = initialization, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case UPDATE_PRICE:
      return {
        ...state,
        products: [
          ...state.products.filter((el, i) => el.id !== action.payload.id),
          action.payload,
        ],
      };
    case UPDATE_NAME:
      return {
        ...state,
        products: [
          ...state.products.filter((el, i) => el.id !== action.payload.id),
          action.payload,
        ],
      };
    default:
      return state;
  }
}

export default ProductsReducer;
