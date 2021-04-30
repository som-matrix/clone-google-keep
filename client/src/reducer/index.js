import { combineReducers } from "redux";
import keepReducer from "./keepNotes";

export const rootReducer = combineReducers({
  notes: keepReducer,
});
