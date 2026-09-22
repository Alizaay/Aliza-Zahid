import { useState } from "react";
import { SlideUp } from "../../../../components/animations/SlideUp";
import { HighlightTitle } from "../../../../components/common/HighlightTitle";
import { SectionBadge } from "../../../../components/common/SectionBadge";
import { Section } from "../../../../components/layout/Section";

export function Testimonials({ testimonials = [] }) {
  return (
    <Section id="testimonials">
      <div className="mb-10 max-w-2xl">
        <SectionBadge>Testimonials</SectionBadge>
        <HighlightTitle text="What Clients Say About The Work" accent="The Work" className="text-3xl sm:text-5xl" />
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item, index) => (
          <SlideUp key={item.id} delay={index * 0.06}>
            <TestimonialCard item={item} />
          </SlideUp>
        ))}
      </div>
    </Section>
  );
}

function TestimonialCard({ item }) {
  const [broken, setBroken] = useState(false);
  const showImage = Boolean(item.image) && !broken;

  return (
    <article className="glow-card card-lift overflow-hidden">
      <div className="relative aspect-[4/3] bg-panel-elevated">
        {showImage ? (
          <img
            src={item.image}
            alt={`${item.name} testimonial for ${item.project}`}
            className="h-full w-full object-cover object-top"
            onError={() => setBroken(true)}
          />
        ) : (
          <p className="grid h-full place-items-center px-6 text-center text-sm leading-7 text-muted">“{item.quote}”</p>
        )}
      </div>
      <footer className="border-t border-line/60 px-5 py-4">
        <p className="font-display text-sm font-semibold">{item.name}</p>
        <p className="mt-1 text-xs text-cyan">{item.project}</p>
      </footer>
    </article>
  );
}
