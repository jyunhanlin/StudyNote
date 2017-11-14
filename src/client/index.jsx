import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { BrowserRouter } from 'react-router-dom';

import StudyNote from '../shared/components/StudyNotes';
import rootReducer from '../shared/states/rootReducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloadedState = window.__PRELOADED_STATE__;
/* eslint-enable no-underscore-dangle */

const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <StudyNote />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
