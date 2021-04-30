const initState = {
  keepNotes: [],
};

const keepReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        keepNotes: action.payload,
      };
    case "CREATE_NOTE":
      return {
        ...state,
        keepNotes: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default keepReducer;
