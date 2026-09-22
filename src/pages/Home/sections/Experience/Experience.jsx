import { SlideUp } from "../../../../components/animations/SlideUp";
import { HighlightTitle } from "../../../../components/common/HighlightTitle";
import { SectionBadge } from "../../../../components/common/SectionBadge";
import { Section } from "../../../../components/layout/Section";
import { TimelineCard } from "./TimelineCard";

export function Experience({ experience = [], education = [] }) {
  return (
    <Section id="experience">
      <div className="mb-10 max-w-2xl">
        <SectionBadge>Education | Experience</SectionBadge>
        <HighlightTitle
          text="The Path Behind The Work"
          accent="The Work"
          className="text-3xl sm:text-5xl"
        />
        <p className="mt-4 text-muted">
          Roles that shaped delivery, and the academic foundation behind every product.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <SectionBadge>Experience</SectionBadge>
          <h3 className="mb-6 font-display text-2xl font-semibold">Professional Journey</h3>
          <div className="space-y-5">
            {experience.map((item, index) => (
              <SlideUp key={item.id || item.role} delay={index * 0.05}>
                <TimelineCard
                  kicker="Role"
                  title={item.role}
                  place={item.company}
                  period={item.period}
                  location={item.location}
                  detail={item.detail}
                  last={index === experience.length - 1}
                />
              </SlideUp>
            ))}
          </div>
        </div>

        <div>
          <SectionBadge tone="violet">Education</SectionBadge>
          <h3 className="mb-6 font-display text-2xl font-semibold">Academic Background</h3>
          <div className="space-y-5">
            {education.map((item, index) => (
              <SlideUp key={item.id || item.degree} delay={index * 0.05}>
                <TimelineCard
                  kicker="Study"
                  title={item.degree}
                  place={item.institution}
                  period={item.period}
                  location={item.location}
                  detail={item.detail}
                  tone="violet"
                  last={index === education.length - 1}
                />
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
