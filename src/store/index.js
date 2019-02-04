// Main Imports
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// Reducer Imports
import topics from './reducers/topics';
import user from './reducers/user';
import ui from './reducers/ui';

const root = combineReducers({
  topics,
  user,
  ui
});

const logger = createLogger({
  collapsed: (getState, action) => (action.hasOwnProperty('type') && action.type.includes('@@redux-form'))
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(root, /* preloadedState, */ composeEnhancers(
  applyMiddleware(logger, thunk)
));

export default store;
