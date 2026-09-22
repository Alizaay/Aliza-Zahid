import { HiOutlineEnvelope, HiOutlineGlobeAlt, HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";

export function HeroContactBar({ contact }) {
  const items = [
    { icon: HiOutlinePhone, title: contact.phone, label: "Call / WhatsApp", href: contact.whatsapp },
    {
      icon: HiOutlineEnvelope,
      title: contact.emails[0],
      extra: contact.emails[1],
      label: "Email",
      href: `mailto:${contact.emails[0]}`,
    },
    {
      icon: HiOutlineGlobeAlt,
      title: contact.website || "https://aliza-zahid.vercel.app/",
      label: "Website",
      href: contact.website || "https://aliza-zahid.vercel.app/",
    },
    { icon: HiOutlineMapPin, title: contact.availability, label: "Let’s Build Something Amazing", href: "/#contact" },
  ];

  return (
    <div className="mt-10 grid gap-4 rounded-2xl border border-brand/40 bg-[rgb(7_18_38_/_0.72)] px-5 py-5 shadow-[0_0_40px_rgb(20_124_255_/_0.14)] sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a key={item.title} href={item.href} className="flex items-center gap-3 rounded-xl p-1 transition hover:bg-cyan/5">
            <span className="icon-glow-round h-12 w-12 shrink-0">
              <Icon size={18} />
            </span>
            <span>
              <span className="block text-sm font-semibold break-all text-ink">{item.title}</span>
              {item.extra && <span className="block text-xs break-all text-muted">{item.extra}</span>}
              <span className="block text-xs text-muted">{item.label}</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
