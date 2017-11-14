import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../shared/states/rootReducer';

const initStore = (plainPartialState) => {
  const preloadedState = plainPartialState ? {} : undefined;

  return createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware));
};

export default initStore;
