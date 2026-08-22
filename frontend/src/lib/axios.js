import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api",
    withCredentials: true,
});

// Store for the getToken function
let getTokenFn = null;

export const setGetToken = (fn) => {
  getTokenFn = fn;
};

// Add interceptor
axiosInstance.interceptors.request.use(async (config) => {
  try {
    if (getTokenFn) {
      const token = await getTokenFn();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log("✅ Clerk token added to request");
      }
    }
  } catch (error) {
    console.error("❌ Error getting Clerk token:", error);
  }
  return config;
});

export default axiosInstance;