import { usePageTitle } from "../../hooks/usePageTitle";
import { useSiteData } from "../../hooks/useSiteContent";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Experience } from "./sections/Experience/Experience";
import { FAQ } from "./sections/FAQ/FAQ";
import { Hero } from "./sections/Hero/Hero";
import { Process } from "./sections/Process/Process";
import { Projects } from "./sections/Projects/Projects";
import { Services } from "./sections/Services/Services";
import { Technologies } from "./sections/Technologies/Technologies";
import { Testimonials } from "./sections/Testimonials/Testimonials";
import { TrustBar } from "./sections/TrustBar/TrustBar";

export function Home() {
  const { site } = useSiteData();
  usePageTitle();

  return (
    <>
      <Hero profile={site.profile} contact={site.contact} />
      <TrustBar companies={site.companies} />
      <Services services={site.services} />
      <About profile={site.profile} />
      <Experience experience={site.profile.experience} education={site.profile.education} />
      <Technologies technologies={site.technologies} />
      <Process steps={site.process} />
      <Projects projects={site.projects} preview />
      <Testimonials testimonials={site.testimonials} />
      <FAQ faqs={site.faqs} />
      <Contact contact={site.contact} socialLinks={site.socialLinks} />
    </>
  );
}
