import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://estate-app-rp89.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
