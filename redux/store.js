import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';


const reducer = combineReducers({
	
});

const sagaMiddleWares = createSagaMiddleware();

const middleWares = [sagaMiddleWares];

if (process.env.NODE_ENV === 'development') {
	middleWares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleWares)));

sagaMiddleWares.run(watcherSaga);

export default store;
