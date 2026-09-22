import { HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";
import { SlideUp } from "../../../../components/animations/SlideUp";
import { ContactItem } from "./ContactItem";

export function ContactInfo({ contact }) {
  const items = [
    { label: "Phone / WhatsApp", value: contact.phone, href: contact.whatsapp, icon: HiOutlinePhone },
    ...contact.emails.map((email) => ({
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      icon: HiOutlineEnvelope,
    })),
    {
      label: "Location",
      value: contact.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(contact.location)}`,
      icon: HiOutlineMapPin,
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((item) => (
        <SlideUp key={`${item.label}-${item.value}`}>
          <ContactItem {...item} />
        </SlideUp>
      ))}
    </div>
  );
}
