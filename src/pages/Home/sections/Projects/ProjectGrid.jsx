import { SlideUp } from "../../../../components/animations/SlideUp";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project, index) => (
        <SlideUp key={project.id} delay={index * 0.04}>
          <ProjectCard project={project} />
        </SlideUp>
      ))}
    </div>
  );
}
