import {
  LOADING,
  FAILURE,
  SUCCESS,
  GET_LOADING,
  GET_FAILURE,
  FETCH_NOTES_SUCCESS,
  CREATE_NOTE_SUCCESS,
} from "../constants/actions";
const initState = {
  uiState: "",
  allNotes: [],
  errorMessage: "",
};

const keepReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LOADING:
      return {
        ...state,
        uiState: LOADING,
      };
    case GET_FAILURE:
      return {
        ...state,
        uiState: FAILURE,
        errorMessage: action.payload.errorMessage,
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        allNotes: action.payload.notes,
      };
    case CREATE_NOTE_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        keepNote: action.payload.note,
      };
    default:
      return state;
  }
};

export default keepReducer;
