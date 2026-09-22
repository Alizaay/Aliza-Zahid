import { useParams } from "react-router-dom";
import { Container } from "../../components/ui/Container";
import { LoadingSpinner } from "../../components/ui/LoadingSpinner";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useProject } from "../../hooks/useProjects";
import { useSiteData } from "../../hooks/useSiteContent";
import { ProjectFeatures } from "./ProjectFeatures";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectHero } from "./ProjectHero";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectOverview } from "./ProjectOverview";
import { ProjectTechnologies } from "./ProjectTechnologies";
import { RelatedProjects } from "./RelatedProjects";

export function ProjectDetails() {
  const { slug } = useParams();
  const { data: project, isLoading } = useProject(slug);
  const { site } = useSiteData();
  usePageTitle(project?.title);

  if (isLoading && !project) {
    return (
      <div className="container-page pt-32">
        <LoadingSpinner label="Loading project" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container-page pt-32">
        <p className="text-muted">Project not found.</p>
      </div>
    );
  }

  const related = site.projects.filter((item) => item.slug !== project.slug && item.category === project.category).slice(0, 2);

  return (
    <>
      <ProjectHero project={project} />
      <section className="section-space pt-12">
        <Container>
          <ProjectOverview project={project} />
          <ProjectFeatures features={project.features} />
          <ProjectTechnologies technologies={project.technologies} />
          <ProjectGallery screenshots={project.screenshots} title={project.title} />
          <ProjectLinks project={project} />
          <RelatedProjects projects={related} />
        </Container>
      </section>
    </>
  );
}
