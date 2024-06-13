import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle the 401 error here
      console.log("Unauthorized: Invalid credentials.");
      // Suppress the default error
      // return Promise.reject(new Error("Unauthorized: Invalid credentials."));
    }
    // return Promise.reject(error);
  }
);

export default axiosInstance;
