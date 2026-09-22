import { StatusBadge } from "../../components/common/StatusBadge";
import { Container } from "../../components/ui/Container";

export function ProjectHero({ project }) {
  return (
    <section className="border-b border-line/60 pt-28 pb-12 sm:pt-32">
      <Container>
        <StatusBadge status={project.status} />
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-muted">{project.summary}</p>
        <p className="mt-3 text-xs tracking-[0.18em] text-muted uppercase">
          {project.category} · {project.year}
        </p>
        {(project.hero || project.thumbnail) && (
          <img
            src={project.hero || project.thumbnail}
            alt={project.title}
            className="mt-8 max-h-[420px] w-full rounded-2xl border border-line object-cover"
          />
        )}
      </Container>
    </section>
  );
}
