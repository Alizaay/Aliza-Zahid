import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { TechBadge } from "../../../../components/common/TechBadge";
import { getProjectImage } from "../../../../data/projectImages";
import { routePaths } from "../../../../routes/routePaths";
import { externalLinkProps } from "../../../../utils/externalLink";
import { cn } from "../../../../utils/cn";
import { ProjectStatus } from "./ProjectStatus";

export function ProjectCard({ project }) {
  const developing = project.status === "in-development";
  const image = getProjectImage(project);

  return (
    <article className={cn(developing ? "glow-card-violet" : "glow-card", "card-lift group overflow-hidden")}>
      <div className="relative h-52 overflow-hidden border-b border-line bg-panel-elevated">
        {image ? (
          <img
            src={image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center text-sm text-muted">Preview coming soon</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/40 to-transparent opacity-0 transition group-hover:opacity-100" />
        <div className="absolute top-4 right-4">
          <ProjectStatus status={project.status} />
        </div>
      </div>
      <div className="p-6">
        <Link to={routePaths.projectDetails(project.slug)}>
          <h3 className="font-display text-xl font-semibold transition group-hover:text-cyan">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.category}</p>
        </Link>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan"
            {...externalLinkProps(project.liveUrl)}
          >
            Live Website <HiOutlineArrowUpRight />
          </a>
        ) : (
          <Link to={routePaths.projectDetails(project.slug)} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cyan">
            View case study <HiOutlineArrowUpRight />
          </Link>
        )}
      </div>
    </article>
  );
}
