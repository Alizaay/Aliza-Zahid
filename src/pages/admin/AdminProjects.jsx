import toast from "react-hot-toast";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useProjectMutations } from "../../hooks/useProjects";
import { useSiteData } from "../../hooks/useSiteContent";
import { routePaths } from "../../routes/routePaths";
import { getApiError } from "../../services/api/apiError";

export function AdminProjects() {
  const { site } = useSiteData();
  const { remove } = useProjectMutations();

  async function onDelete(id) {
    if (!window.confirm("Delete this project?")) return;
    try {
      await remove.mutateAsync(id);
      toast.success("Project deleted.");
    } catch (error) {
      toast.error(getApiError(error, "Delete failed."));
    }
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-2xl font-semibold">Projects</h2>
        <Button to={routePaths.adminProjectNew}>New project</Button>
      </div>
      <div className="grid gap-4">
        {site.projects.map((project) => (
          <Card key={project.id} className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-20 w-full overflow-hidden rounded-xl border border-line bg-panel-elevated sm:w-28">
              {project.thumbnail ? (
                <img src={project.thumbnail} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="grid h-full place-items-center text-[10px] text-muted">No image</div>
              )}
            </div>
            <div className="flex-1">
              <p className="font-display text-lg font-semibold">{project.title}</p>
              <p className="text-sm text-muted">{project.category} · {project.status} · {project.year}</p>
            </div>
            <div className="flex gap-2">
              <Button to={routePaths.adminProjectEdit(project.id)} variant="secondary" className="min-h-10 px-4 text-xs">
                Edit
              </Button>
              <Button variant="danger" className="min-h-10 px-4 text-xs" onClick={() => onDelete(project.id)}>
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
