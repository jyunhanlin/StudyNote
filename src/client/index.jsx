import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import StudyNote from './components/StudyNotes';
import rootReducer from './states/rootReducer';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


ReactDOM.render(
  <Provider store={store}>
    <StudyNote />
  </Provider>,
  document.getElementById('app'),
);
