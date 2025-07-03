import axios from "axios";

const ApiConnection = axios.create({
  baseURL: "https://passwordmanager-backend-dg52.onrender.com",
});
export default ApiConnection;
