import apiClient from "./axios-client";
import { API_ENDPOINTS } from "./endpoints";

export const authApi = {
  login: async (email, password) => {
    const { response } = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN(), { email, password });
    localStorage.setItem("token", response.data.token);
    return response;
  },

  register: async (registerData) => {
    const { data } = await apiClient.post(API_ENDPOINTS.AUTH.REGISTER(), registerData);
    return data;
  },

  logout: async () => {
    await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT());
    localStorage.removeItem("token");
  },

  getProfile: async () => {
    const { data } = await apiClient.get(API_ENDPOINTS.AUTH.ME());
    return data;
  },
};
