import axios from "axios";

// Update baseURL to point to your local backend
axios.defaults.baseURL = "http://localhost:5000";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
