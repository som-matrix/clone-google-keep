import { combineReducers } from "redux";
import keepReducer from "./keepNotesType";

export const rootReducer = combineReducers({
  notes: keepReducer,
});
