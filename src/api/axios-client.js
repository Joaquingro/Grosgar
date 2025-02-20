import axios from "axios";
// import { API_ENDPOINTS } from "./endpoints";
import { getEnvVar } from "../utils/env";

const apiClient = axios.create({
  baseURL: getEnvVar("VITE_API_BASE_URL"),
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token a cada solicitud
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para manejar respuestas y errores
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!error.response) {
      console.error("🚨 Error de red:", error.message);
      return Promise.reject(new Error("No se pudo conectar con el servidor. Inténtalo más tarde."));
    }

    // const originalRequest = error.config;
    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;

    //   try {
    //     const { data } = await apiClient.post(API_ENDPOINTS.AUTH.REFRESH());
    //     localStorage.setItem("token", data.token);
    //     apiClient.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`;
    //     return apiClient(originalRequest); // Reintentar la solicitud original
    //   } catch (refreshError) {
    //     // window.location.href = "/login";
    //     return Promise.reject(refreshError);
    //   }
    // }

    return Promise.reject(error);
  }
);

export default apiClient;
