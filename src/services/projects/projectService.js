import { apiClient } from "../api/apiClient";
import { apiEndpoints } from "../api/apiEndpoints";

export const projectService = {
  listFromContent: async () => {
    const { data } = await apiClient.get(apiEndpoints.content);
    return data.projects || [];
  },
  getBySlug: async (slug) => {
    const { data } = await apiClient.get(apiEndpoints.project(slug));
    return data;
  },
  create: async (payload) => {
    const { data } = await apiClient.post(apiEndpoints.projects, payload);
    return data;
  },
  update: async (id, payload) => {
    const { data } = await apiClient.put(apiEndpoints.projectById(id), payload);
    return data;
  },
  remove: async (id) => {
    const { data } = await apiClient.delete(apiEndpoints.projectById(id));
    return data;
  },
};
