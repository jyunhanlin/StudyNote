

export function modal(state = false, action) {
  switch (action.type) {
    case 'SET_MODAL':
      return !state;
    default:
      return state;
  }
}


export function queryText(state = '', action) {
  switch (action.type) {
    case 'SET_QUERY_TEXT':
      return action.queryText;
    default:
      return state;
  }
}

const initNoteState = {
  isLoading: false,
  notes: [],
};

export function notes(state = initNoteState, action) {
  switch (action.type) {
    case 'START_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'END_LOADING':
      return {
        ...state,
        isLoading: false,
      };
    case 'END_LIST_NOTES':
      return {
        ...state,
        notes: action.notes,
      };
    default:
      return state;
  }
}
