import { useState } from "react";
import { HighlightTitle } from "../../../../components/common/HighlightTitle";
import { SectionBadge } from "../../../../components/common/SectionBadge";
import { Section } from "../../../../components/layout/Section";
import { cn } from "../../../../utils/cn";

export function FAQ({ faqs = [] }) {
  const [open, setOpen] = useState(faqs[0]?.id || "");

  return (
    <Section id="faq">
      <div className="mb-10 max-w-2xl">
        <SectionBadge>FAQ</SectionBadge>
        <HighlightTitle text="Questions Before We Start" accent="We Start" className="text-3xl sm:text-5xl" />
      </div>
      <div className="space-y-3">
        {faqs.map((item) => {
          const active = open === item.id;
          return (
            <article key={item.id} className="glow-card overflow-hidden">
              <button
                type="button"
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                onClick={() => setOpen(active ? "" : item.id)}
              >
                <span className="font-display text-base font-semibold">{item.question}</span>
                <span className="grid h-7 w-7 place-items-center rounded-full border border-cyan/30 text-cyan">{active ? "–" : "+"}</span>
              </button>
              <div className={cn("px-5 pb-5 text-sm leading-7 text-muted", !active && "hidden")}>
                {item.answer}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
