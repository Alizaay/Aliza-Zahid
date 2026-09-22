import { SlideUp } from "../../../../components/animations/SlideUp";
import { Section } from "../../../../components/layout/Section";
import { AboutContent } from "./AboutContent";
import { AboutImage } from "./AboutImage";

export function About({ profile }) {
  return (
    <Section id="about">
      <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-4">
        <SlideUp>
          <AboutImage profile={profile} />
        </SlideUp>
        <SlideUp delay={0.08}>
          <AboutContent profile={profile} />
        </SlideUp>
      </div>
    </Section>
  );
}
