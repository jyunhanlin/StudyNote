import {
  listNotes as listNotesFromAPI,
  createNote as createNoteFromAPI,
} from '../api/api';

export function setQueryText(queryText = '') {
  return {
    type: 'SET_QUERY_TEXT',
    queryText,
  };
}

function startLoading() {
  return {
    type: 'START_LOADING',
  };
}

function endLoading() {
  return {
    type: 'END_LOADING',
  };
}

function endListNotes(notes) {
  return {
    type: 'END_LIST_NOTES',
    notes,
  };
}


export function listNotes(queryText, loading = false) {
  return (dispatch, getState) => {
    if (!loading) {
      dispatch(startLoading());
    }
    return listNotesFromAPI(queryText).then((notes) => {
      dispatch(endListNotes(notes));
      dispatch(endLoading());
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Error list notes', err);
      dispatch(endLoading());
    });
  };
}

export function createNote(notes) {
  return (dispatch, getState) => {
    dispatch(startLoading());

    return createNoteFromAPI(notes).then(() => {
      dispatch(listNotes(getState().queryText), true);
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Error creating note', err);
      dispatch(endLoading());
    });
  };
}
