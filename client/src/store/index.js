// import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '.';

// const middleware = [
//   thunk
// ]
// const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(rootReducer, withDevTools(
//   applyMiddleware(...middleware)
// ))

import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
