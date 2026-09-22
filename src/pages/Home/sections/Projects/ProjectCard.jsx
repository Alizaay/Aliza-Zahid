import { HiOutlineArrowUpRight, HiOutlineClock } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { TechBadge } from "../../../../components/common/TechBadge";
import { routePaths } from "../../../../routes/routePaths";
import { cn } from "../../../../utils/cn";
import { ProjectStatus } from "./ProjectStatus";

export function ProjectCard({ project }) {
  const developing = project.status === "in-development";
  const fallback = developing ? "/images/project-dash-mockup.png" : "/images/project-web-mockup.png";
  const image = project.thumbnail || project.hero || fallback;

  return (
    <article className={cn(developing ? "glow-card-violet" : "glow-card", "card-lift group overflow-hidden")}>
      <Link to={routePaths.projectDetails(project.slug)} className="block">
        <div className="relative h-52 overflow-hidden border-b border-line bg-panel-elevated">
          <img
            src={image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas/40 to-transparent opacity-0 transition group-hover:opacity-100" />
          <div className="absolute top-4 right-4">
            <ProjectStatus status={project.status} />
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold transition group-hover:text-cyan">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.category}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
          {developing ? (
            <p className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#c4b5fd]">
              <HiOutlineClock /> Live Preview Soon
            </p>
          ) : (
            <p className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan">
              View case study <HiOutlineArrowUpRight />
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}
