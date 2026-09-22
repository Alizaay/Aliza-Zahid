import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fallbackSite } from "../data/site";
import { projectService } from "../services/projects/projectService";
import { useSiteData } from "./useSiteContent";

export function useProjects() {
  const { site } = useSiteData();
  return {
    projects: site.projects || fallbackSite.projects,
    isLoading: false,
  };
}

export function useProject(slug) {
  const { site } = useSiteData();
  const project = (site.projects || []).find((item) => item.slug === slug);

  return {
    data: project,
    isLoading: false,
    isError: Boolean(slug) && !project,
  };
}

export function useProjectMutations() {
  const queryClient = useQueryClient();
  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["site-content"] });

  const create = useMutation({
    mutationFn: projectService.create,
    onSuccess: invalidate,
  });
  const update = useMutation({
    mutationFn: ({ id, payload }) => projectService.update(id, payload),
    onSuccess: invalidate,
  });
  const remove = useMutation({
    mutationFn: projectService.remove,
    onSuccess: invalidate,
  });

  return { create, update, remove };
}
