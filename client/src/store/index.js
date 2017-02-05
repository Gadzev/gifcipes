import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';

// our packages
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

// instantiate epic middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

// pick debug or dummy enchancer
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(rootReducer, composeEnchancers(applyMiddleware(epicMiddleware)));

export default store;
