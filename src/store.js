import { createStore, applyMiddleware, compose } from 'redux';
import client from './apolloClient';
import reducers from './reducers';

const middlewares = applyMiddleware(client.middleware());
const devToolsExtension = (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

const enhancers = compose(middlewares, devToolsExtension);
const initialState = {};

const store = createStore( reducers, initialState, enhancers );

export default store;
