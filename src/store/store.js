import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import dataReducer from "./reducers/data";
import ProductsReducer from "./reducers/products";

import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  data: dataReducer,
  products: ProductsReducer,
});

let store = createStore(reducers, applyMiddleware(logger, thunkMiddleware));

//store.subscribe(() => console.log(store.getState()));
export default store;
