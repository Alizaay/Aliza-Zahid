import { TechBadge } from "../../components/common/TechBadge";

export function ProjectTechnologies({ technologies = [] }) {
  return (
    <div className="mt-8">
      <h2 className="font-display text-2xl font-semibold">Technologies</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
    </div>
  );
}
