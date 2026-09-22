import { ProjectCard } from "../Home/sections/Projects/ProjectCard";

export function RelatedProjects({ projects }) {
  if (!projects.length) return null;
  return (
    <div className="mt-14">
      <h2 className="mb-6 font-display text-2xl font-semibold">Related projects</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
