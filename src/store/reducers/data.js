import {
  SET_CATEGORY,
  SET_ABOUT,
  SET_NAME,
  SET_AMOUNT,
  SET_PRICE,
  SET_IMAGES,
  SET_PROPERTIES,
} from "../action-creators/data";

const initialization = {
  id: 25,
  amount: 1,
  category: null,
  name: null,
  price: null,
  about: "",
  img: null,
  imgValue: null,
  properties: null,
};

function dataReducer(state = initialization, action) {
  switch (action.type) {
    case SET_ABOUT:
      return {
        ...state,
        about: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case SET_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };
    case SET_IMAGES:
      const imgArray = (action) => {
        return action && action.split(",").map((el) => el.replace(/\s/g, ""));
      };
      return {
        ...state,
        img: imgArray(action.payload),
        imgValue: action.payload,
      };

    case SET_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
      };

    default:
      return state;
  }
}

export default dataReducer;
