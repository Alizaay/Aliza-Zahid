import { HighlightTitle } from "../../../../components/common/HighlightTitle";
import { SectionBadge } from "../../../../components/common/SectionBadge";
import { Section } from "../../../../components/layout/Section";
import { Button } from "../../../../components/ui/Button";
import { getIcon } from "../../../../lib/icons";
import { TechOrbit } from "./TechOrbit";
import { TechnologyCategory } from "./TechnologyCategory";

const values = [
  { icon: "Code", title: "Modern Stack", text: "Up-to-date technologies for best performance." },
  { icon: "Bolt", title: "High Performance", text: "Optimized for speed and efficiency." },
  { icon: "Shield", title: "Secure & Reliable", text: "Security-first approach for every solution." },
  { icon: "Cloud", title: "Cloud Ready", text: "Deployed on leading cloud platforms." },
  { icon: "Rocket", title: "Scalable Solutions", text: "Built to grow with your business." },
  { icon: "Users", title: "Expert Team", text: "Skilled professionals with proven experience." },
];

const trust = [
  { value: "25+", label: "Technologies", text: "Modern & Reliable" },
  { value: "15+", label: "Projects Delivered", text: "Across the Globe" },
  { value: "Modern Architecture", label: "", text: "Scalable & Maintainable" },
  { value: "Cloud Ready", label: "", text: "AWS • Firebase • Vercel" },
  { value: "AI Powered", label: "", text: "OpenAI API Integration" },
  { value: "Enterprise Grade", label: "", text: "Secure • Scalable • Fast" },
];

export function Technologies({ technologies }) {
  const grouped = technologies.reduce((acc, item) => {
    const key = item.category === "Database" || item.category === "Cloud / Tools" ? "Cloud & Database" : item.category;
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
  const groups = Object.entries(grouped);

  return (
    <Section id="technology">
      <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.1fr_0.95fr]">
        <div>
          <SectionBadge>Technology We Use</SectionBadge>
          <HighlightTitle text="Our Technology Expertise" accent="Expertise" className="text-3xl sm:text-4xl" />
          <p className="mt-4 text-sm leading-7 text-muted">
            We use modern, scalable, and secure technologies to build digital solutions that perform in production.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {values.map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <div key={item.title} className="flex gap-2">
                  <span className="text-cyan"><Icon size={18} /></span>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs leading-5 text-muted">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Button href="/#projects" variant="secondary" className="mt-6">
            Explore Our Capabilities →
          </Button>
        </div>
        <TechOrbit technologies={technologies} />
        <div className="space-y-4">
          {groups.map(([title, items]) => (
            <TechnologyCategory key={title} title={title} items={items} />
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-4 rounded-2xl border border-brand/30 bg-[rgb(7_18_38_/_0.7)] px-5 py-6 sm:grid-cols-3 lg:grid-cols-6">
        {trust.map((item) => (
          <div key={item.value} className="text-center">
            <p className="font-display text-lg font-semibold text-cyan">{item.value}</p>
            {item.label && <p className="text-xs text-ink">{item.label}</p>}
            <p className="text-xs text-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
