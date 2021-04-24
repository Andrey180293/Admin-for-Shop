import {
  SET_PRODUCTS,
  UPDATE_PRICE,
  UPDATE_NAME,
  SET_OPEN_SNACKBAR,
  SET_SNACKBAR_MESSAGE,
  SET_ISLOADING,
} from "../action-creators/products";

const initialization = {
  products: null,
  isOpenSnackBar: false,
  snackBarMessage: null,
  isLoading: false,
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
          ...state.products.filter((el, i) => el._id !== action.payload._id),
          action.payload,
        ],
      };
    case UPDATE_NAME:
      return {
        ...state,
        products: [
          ...state.products.filter((el, i) => el._id !== action.payload._id),
          action.payload,
        ],
      };
    case SET_OPEN_SNACKBAR:
      return {
        ...state,
        isOpenSnackBar: action.payload,
      };
    case SET_SNACKBAR_MESSAGE:
      return {
        ...state,
        snackBarMessage: action.payload,
      };
    case SET_ISLOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
}

export default ProductsReducer;
