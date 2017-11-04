import { combineReducers } from 'redux';

import { modal, queryText, notes } from './post-reducers';

const rootReducer = combineReducers({
  modal,
  queryText,
  notes,
});

export default rootReducer;
