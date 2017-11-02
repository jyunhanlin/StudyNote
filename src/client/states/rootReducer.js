import { combineReducers } from 'redux';

import { queryText, notes } from './post-reducers';

const rootReducer = combineReducers({
  queryText,
  notes,
});

export default rootReducer;
