import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:5000",
  mode: "cors",
  headers: { "Access-Control-Allow-Origin": true },
});

export default instance;
