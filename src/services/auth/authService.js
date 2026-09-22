import { apiClient } from "../api/apiClient";
import { apiEndpoints } from "../api/apiEndpoints";

export const authService = {
  login: async (payload) => {
    const { data } = await apiClient.post(apiEndpoints.login, payload);
    return data;
  },
  me: async () => {
    const { data } = await apiClient.get(apiEndpoints.me);
    return data;
  },
};
