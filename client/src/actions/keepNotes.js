import * as api from "../api/api";

export const keepAction = () => async (dispatch) => {
  try {
    const { data } = await api.fetchNotes();

    dispatch({
      type: "FETCH_ALL",
      payload: {
        keepNotes: data,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const postKeepAction = (newNote) => async (dispatch) => {
  try {
    const { data } = await api.createNotes(newNote);
    console.log(data);
    dispatch({
      type: "CREATE_NOTE",
      payload: {
        keepNotes: data,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const postPhoto = (photo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("photo", photo);
    await api.createPhoto(photo, formData);
  } catch (error) {
    dispatch(error.message);
  }
};
