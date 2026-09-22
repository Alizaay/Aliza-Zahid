export const apiEndpoints = {
  health: "/health",
  login: "/auth/login",
  me: "/auth/me",
  content: "/content",
  project: (slug) => `/content/projects/${slug}`,
  contentSlice: (slice) => `/content/${slice}`,
  projects: "/content/projects",
  projectById: (id) => `/content/projects/${id}`,
  reset: "/content/reset",
  uploads: "/uploads",
  uploadFile: (filename) => `/uploads/${filename}`,
};
