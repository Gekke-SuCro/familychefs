import axios from "axios";

export const apiConfig = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiConfig.interceptors.request.use(
    (config) => {
        // Add authorization token or modify headers if necessary
        return config;
    },
    (error) => Promise.reject(error)
);

apiConfig.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);