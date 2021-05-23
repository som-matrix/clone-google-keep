import api from "./api";

// All the action to the local dev server
export const fetchNotes = () => {
  return api.get("/posts");
};
export const createNotes = (newNote) => {
  return api.post("/posts", newNote);
};
