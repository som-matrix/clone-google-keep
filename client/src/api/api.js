import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchNotes = () => axios.get(url);
export const createNotes = (newNote) => axios.post(url, newNote);
export const createPhoto = (photo) => axios.post(url, photo);
