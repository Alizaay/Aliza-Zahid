import { apiClient } from "../api/apiClient";
import { apiEndpoints } from "../api/apiEndpoints";

export const contentService = {
  getSite: async () => {
    const { data } = await apiClient.get(apiEndpoints.content);
    return data;
  },
  saveSlice: async (slice, value) => {
    const { data } = await apiClient.put(apiEndpoints.contentSlice(slice), { value });
    return data;
  },
  reset: async () => {
    const { data } = await apiClient.post(apiEndpoints.reset);
    return data;
  },
};
