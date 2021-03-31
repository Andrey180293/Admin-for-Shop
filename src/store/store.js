import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import dataReducer from "./reducers/data";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  data: dataReducer,
});

let store = createStore(reducers, applyMiddleware(logger, thunkMiddleware));

//store.subscribe(() => console.log(store.getState()));
export default store;
