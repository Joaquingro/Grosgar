import apiClient from "./axios-client";
import { API_ENDPOINTS } from "./endpoints";

export const authApi = {
  login: async (email, password) => {
    const { data } = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN(), { email, password });
    console.log(data);
    localStorage.setItem("token", data.data.token);
    return data;
  },

  register: async (registerData) => {
    const { data } = await apiClient.post(API_ENDPOINTS.AUTH.REGISTER(), registerData);
    return data;
  },

  verify: async (token) => {
    const { data } = await apiClient.get(`${API_ENDPOINTS.AUTH.VERIFY()}?token=${token}`);
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
