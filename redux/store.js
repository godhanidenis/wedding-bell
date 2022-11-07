import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";
import shopReducer from "./ducks/shop_register";
import watcherSaga from "./sagas/rootSaga";

const reducer = combineReducers({
  shopReducer: shopReducer,
});

let composeEnhancers = compose;
if (typeof window !== "undefined") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const sagaMiddleWares = createSagaMiddleware();
const middleWares = [sagaMiddleWares];

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleWares))
);
export const getStore = () => {
  return store;
};

sagaMiddleWares.run(watcherSaga);

export default store;
