import {
  GET_LOADING,
  GET_FAILURE,
  FETCH_NOTES_SUCCESS,
  CREATE_NOTE_SUCCESS,
} from "../constants/actions";
import { fetchNotes, createNotes } from "../apis/notes";
export const keepAction = () => async (dispatch) => {
  dispatch({
    type: GET_LOADING,
  });
  const getResponse = await fetchNotes();
  try {
    dispatch({
      type: FETCH_NOTES_SUCCESS,
      payload: {
        notes: getResponse,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_FAILURE,
      errorMessage: getResponse.send(error).status(409),
    });
  }
};

export const postKeepAction = (newNote) => async (dispatch) => {
  dispatch({
    type: GET_LOADING,
  });
  const postResponse = await createNotes(newNote);
  try {
    dispatch({
      type: CREATE_NOTE_SUCCESS,
      payload: {
        note: postResponse,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_FAILURE,
      errorMessage: postResponse.send(error).status(409),
    });
  }
};
