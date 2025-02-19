import { getEnvVar } from "../utils/env";

const caimServer = getEnvVar("VITE_API_BASE_URL");

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: () => `${caimServer}/api/auth/login`,
    REGISTER: () => `${caimServer}/api/auth/register`,
    LOGOUT: () => `${caimServer}/auth/logout`,
    REFRESH: () => `${caimServer}/auth/refresh`,
    ME: () => `${caimServer}/auth/me`,
  },
};
