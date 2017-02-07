import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';

// our packages
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

// instantiate epic middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

// pick debug or dummy enchancer
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const prepareRouterMiddleware = routerMiddleware(browserHistory);
const middlewares = composeEnchancers(
    applyMiddleware(epicMiddleware),
    applyMiddleware(prepareRouterMiddleware),
);

const store = createStore(rootReducer, middlewares);

export default store;
