import { FaWhatsapp } from "react-icons/fa";
import { useSiteData } from "../../hooks/useSiteContent";
import { externalLinkProps } from "../../utils/externalLink";

export function WhatsAppFloat() {
  const { site } = useSiteData();
  const href = site.contact.whatsapp;

  return (
    <a
      href={href}
      className="fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgb(37_211_102_/_0.45)] transition hover:scale-105"
      aria-label="Chat on WhatsApp"
      {...externalLinkProps(href)}
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
