import { HighlightTitle } from "../../../../components/common/HighlightTitle";
import { SectionBadge } from "../../../../components/common/SectionBadge";
import { Section } from "../../../../components/layout/Section";
import { ServiceGrid } from "./ServiceGrid";
import { ServiceHighlights } from "./ServiceHighlights";

export function Services({ services }) {
  return (
    <Section id="services">
      <div className="relative mb-12 text-center">
        <SectionBadge align="center">Services</SectionBadge>
        <HighlightTitle
          text="Solutions That Drive Real Impact"
          accent="Drive Real Impact"
          className="mx-auto max-w-3xl text-3xl sm:text-5xl"
        />
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          We build powerful, scalable, and future-ready digital solutions tailored to help your business grow, innovate, and lead.
        </p>
        <div className="pointer-events-none absolute -top-8 right-0 hidden h-36 w-36 rounded-full bg-cyan/10 blur-2xl lg:block" />
      </div>
      <ServiceGrid services={services} />
      <ServiceHighlights />
    </Section>
  );
}
