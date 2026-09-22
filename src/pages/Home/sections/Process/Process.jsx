import { SlideUp } from "../../../../components/animations/SlideUp";
import { HighlightTitle } from "../../../../components/common/HighlightTitle";
import { SectionBadge } from "../../../../components/common/SectionBadge";
import { Section } from "../../../../components/layout/Section";

export function Process({ steps = [] }) {
  return (
    <Section id="process">
      <div className="mb-10 max-w-2xl">
        <SectionBadge>Development Process</SectionBadge>
        <HighlightTitle text="A Clear Path From Idea To Launch" accent="Idea To Launch" className="text-3xl sm:text-5xl" />
        <p className="mt-4 text-muted">
          Six focused stages. No mystery, no leftover architecture, and a product that can keep moving after launch.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <SlideUp key={step.id} delay={index * 0.04}>
            <article className="glow-card card-lift h-full p-6">
              <div className="flex items-center justify-between">
                <p className="font-display text-sm tracking-[0.2em] text-cyan">{step.step}</p>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-cyan/30 text-xs text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
            </article>
          </SlideUp>
        ))}
      </div>
    </Section>
  );
}
