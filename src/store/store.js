import {
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

import clientReducer from "./reducers/ClientReducer";
import productReducer from "./reducers/ProductReducer";
import shoppingCartReducer from "./reducers/ShoppingCartReducer";

const reducers = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

export const myStore = createStore(reducers, applyMiddleware(thunk, logger));
