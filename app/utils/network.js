import axios from "axios";

const Base = process.env.URL || "https://www.instagram.com/";

const instanceAxios = axios.create({
  baseURL: Base,
  headers: {
    "x-ig-app-id": "936619743392459",
  },
});

instanceAxios.interceptors.response.use(
  (response) => response,
  
  (error) => error.response
);

export default instanceAxios;