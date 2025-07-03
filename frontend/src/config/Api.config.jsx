import axios from "axios";

const ApiConnection = axios.create({
  baseURL: "http://localhost:8000",
});
export default ApiConnection;
