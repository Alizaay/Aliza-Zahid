import { apiClient } from "../api/apiClient";
import { apiEndpoints } from "../api/apiEndpoints";

export const mediaService = {
  list: async () => {
    const { data } = await apiClient.get(apiEndpoints.uploads);
    return data;
  },
  upload: async (file) => {
    const form = new FormData();
    form.append("file", file);
    const { data } = await apiClient.post(apiEndpoints.uploads, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  },
  remove: async (filename) => {
    const { data } = await apiClient.delete(apiEndpoints.uploadFile(filename));
    return data;
  },
};
