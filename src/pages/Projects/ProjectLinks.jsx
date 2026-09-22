import { Button } from "../../components/ui/Button";

export function ProjectLinks({ project }) {
  if (!project.liveUrl && !project.githubUrl) return null;
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {project.liveUrl && <Button href={project.liveUrl}>Live preview</Button>}
      {project.githubUrl && (
        <Button href={project.githubUrl} variant="secondary">
          GitHub
        </Button>
      )}
    </div>
  );
}
