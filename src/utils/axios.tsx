import axios from "axios";

// const API_BASE_URL = `${process.env.REACT_APP_BASE_URL}`;
const API_BASE_URL = "https://";

const customFetch = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

customFetch.interceptors.request.use(
  (config) => {
    // const token = JSON.parse(localStorage.getItem("access_token"));
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customFetch;
