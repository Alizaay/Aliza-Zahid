import { useMemo, useState } from "react";
import { HighlightTitle } from "../../../../components/common/HighlightTitle";
import { SectionBadge } from "../../../../components/common/SectionBadge";
import { Section } from "../../../../components/layout/Section";
import { Button } from "../../../../components/ui/Button";
import { getIcon } from "../../../../lib/icons";
import { routePaths } from "../../../../routes/routePaths";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectGrid } from "./ProjectGrid";

const completedMeta = [
  { icon: "Bolt", label: "High Performance Websites" },
  { icon: "Window", label: "Modern & Responsive Designs" },
  { icon: "Shield", label: "Secure & Scalable Solutions" },
  { icon: "Spark", label: "Real Results Driven" },
];

const developingMeta = [
  { icon: "Spark", label: "Advanced Features" },
  { icon: "Command", label: "Clean Architecture" },
  { icon: "Rocket", label: "Scalable Solutions" },
  { icon: "Globe", label: "Future Ready" },
];

const trust = [
  { icon: "Spark", label: "Modern Technologies" },
  { icon: "Design", label: "Pixel Perfect Design" },
  { icon: "Bolt", label: "Performance Optimized" },
  { icon: "Globe", label: "SEO Friendly" },
  { icon: "Smartphone", label: "Mobile Responsive" },
  { icon: "Shield", label: "Secure & Reliable" },
  { icon: "Chat", label: "24/7 Support" },
];

export function Projects({ projects, preview = false }) {
  const [filter, setFilter] = useState("all");
  const completed = projects.filter((item) => item.status === "completed");
  const developing = projects.filter((item) => item.status === "in-development");
  const visible = useMemo(() => {
    if (preview) return projects;
    if (filter === "all") return projects;
    return projects.filter((item) => item.status === filter);
  }, [filter, preview, projects]);

  if (!preview) {
    return (
      <Section id="projects" className="pt-8">
        <ProjectFilters value={filter} onChange={setFilter} />
        <ProjectGrid projects={visible} />
      </Section>
    );
  }

  return (
    <Section id="projects">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <SectionBadge>Featured Projects</SectionBadge>
          <HighlightTitle text={`${completed.length} Digital Solutions Built. Delivered.`} accent="Delivered" className="text-3xl sm:text-4xl" />
          <p className="mt-4 text-sm text-muted">Creating Real Impact.</p>
          <Button href="/#projects" variant="secondary" className="mt-5">
            Completed Projects
          </Button>
          <div className="mt-6 space-y-2">
            {completedMeta.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <p key={item.label} className="flex items-center gap-2 text-sm text-muted">
                  <Icon className="text-cyan" /> {item.label}
                </p>
              );
            })}
          </div>
          <div className="glow-card mt-6 grid grid-cols-2 gap-3 p-4">
            <Stat value={`${completed.length}+`} label="Projects Completed" />
            <Stat value="10+" label="Happy Clients" />
            <Stat value="100%" label="Client Satisfaction" />
            <Stat value="On-Time" label="Delivery" />
          </div>
        </div>
        <ProjectGrid projects={completed} />
      </div>

      {developing.length > 0 && (
      <div className="mt-20 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <SectionBadge tone="violet">In Development</SectionBadge>
          <HighlightTitle text="Innovative Solutions In The Making" accent="In The Making" className="text-3xl sm:text-4xl" />
          <Button href="/projects" variant="secondary" className="mt-5 border-violet/50 text-[#c4b5fd]">
            In Development Projects
          </Button>
          <div className="mt-6 space-y-2">
            {developingMeta.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <p key={item.label} className="flex items-center gap-2 text-sm text-muted">
                  <Icon className="text-[#c4b5fd]" /> {item.label}
                </p>
              );
            })}
          </div>
        </div>
        <ProjectGrid projects={developing} />
      </div>
      )}

      <div className="glow-card mt-12 grid gap-4 px-5 py-6 sm:grid-cols-2 lg:grid-cols-7">
        {trust.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <div key={item.label} className="text-center">
              <Icon className="mx-auto mb-2 text-cyan" />
              <p className="text-xs text-muted">{item.label}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <Button to={routePaths.projects} variant="secondary">
          View all project pages
        </Button>
      </div>
    </Section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display text-lg font-semibold text-cyan">{value}</p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}
