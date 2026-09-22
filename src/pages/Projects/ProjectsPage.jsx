import { SectionHeading } from "../../components/common/SectionHeading";
import { Container } from "../../components/ui/Container";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useSiteData } from "../../hooks/useSiteContent";
import { Projects } from "../Home/sections/Projects/Projects";

export function ProjectsPage() {
  const { site } = useSiteData();
  usePageTitle("Projects");

  return (
    <>
      <section className="border-b border-line/60 pt-28 pb-12 sm:pt-32">
        <Container>
          <SectionHeading
            kicker="Portfolio"
            title="Completed products and work currently in development."
            description="Company platforms, dashboards, commerce, and industrial systems — each managed from the AlizaDev dashboard."
          />
        </Container>
      </section>
      <Projects projects={site.projects} />
    </>
  );
}
