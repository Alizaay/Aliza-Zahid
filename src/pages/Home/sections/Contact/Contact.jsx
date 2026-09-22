import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineClock, HiOutlineEnvelope, HiOutlineGlobeAlt, HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";
import { HighlightTitle } from "../../../../components/common/HighlightTitle";
import { SectionBadge } from "../../../../components/common/SectionBadge";
import { SocialLinks } from "../../../../components/common/SocialLinks";
import { Section } from "../../../../components/layout/Section";
import { Button } from "../../../../components/ui/Button";

export function Contact({ contact, socialLinks }) {
  return (
    <Section id="contact">
      <div className="glow-card overflow-hidden px-6 py-12 sm:px-10">
        <SectionBadge>Contact</SectionBadge>
        <HighlightTitle text="Let’s Build Something Amazing" accent="Something Amazing" className="max-w-3xl text-3xl sm:text-5xl" />
        <p className="mt-4 max-w-2xl text-muted">{contact.description}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Info icon={HiOutlinePhone} title={contact.phone} label="Call directly" href={`tel:${contact.phone}`} />
          <Info icon={FaWhatsapp} title={contact.phone} label="Chat on WhatsApp" href={contact.whatsapp} />
          <Info icon={HiOutlineEnvelope} title={contact.emails[0]} label={contact.emails[1]} href={`mailto:${contact.emails[0]}`} />
          <Info icon={HiOutlineMapPin} title={contact.location} label={contact.availability} href={`https://maps.google.com/?q=${encodeURIComponent(contact.location)}`} />
          <Info icon={HiOutlineGlobeAlt} title={contact.website} label="Portfolio website" href={`https://${contact.website}`} />
          <Info icon={HiOutlineClock} title={contact.hours} label={contact.response} href={contact.whatsapp} />
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SocialLinks links={socialLinks} />
          <Button href={contact.whatsapp}>Start on WhatsApp</Button>
        </div>
      </div>
    </Section>
  );
}

function Info({ icon: Icon, title, label, href }) {
  return (
    <a href={href} className="flex items-start gap-3 rounded-2xl border border-line bg-canvas/60 p-4 transition hover:border-cyan/40 hover:shadow-[0_8px_24px_rgb(20_124_255_/_0.16)]">
      <span className="icon-glow h-10 w-10">
        <Icon size={16} />
      </span>
      <span>
        <span className="block text-sm font-semibold break-all">{title}</span>
        <span className="block text-xs text-muted">{label}</span>
      </span>
    </a>
  );
}
