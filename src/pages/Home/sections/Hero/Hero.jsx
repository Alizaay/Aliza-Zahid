import { SlideUp } from "../../../../components/animations/SlideUp";
import { Container } from "../../../../components/ui/Container";
import { HeroArt } from "./HeroArt";
import { HeroContactBar } from "./HeroContactBar";
import { HeroContent } from "./HeroContent";

export function Hero({ profile, contact }) {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-10 sm:pt-28">
      <div className="circuit-edge left-0" />
      <div className="circuit-edge right-0" />
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
          <SlideUp>
            <HeroContent profile={profile} />
          </SlideUp>
          <SlideUp delay={0.1}>
            <HeroArt />
          </SlideUp>
        </div>
        <SlideUp delay={0.16}>
          <HeroContactBar contact={contact} />
        </SlideUp>
      </Container>
    </section>
  );
}
