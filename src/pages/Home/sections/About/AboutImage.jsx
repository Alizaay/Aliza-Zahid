import { FloatingElement } from "../../../../components/animations/FloatingElement";
import { getIcon } from "../../../../lib/icons";
import portrait from "../../../../assets/images/about-portrait.png";

const cardSlots = [
  { id: "projects", className: "top-6 -left-2 sm:-left-10", delay: false },
  { id: "experience", className: "top-28 -right-2 sm:-right-12", delay: true },
  { id: "clients", className: "bottom-28 -left-1 hidden sm:-left-8 sm:block", delay: false },
  { id: "satisfaction", className: "right-0 bottom-8 hidden sm:-right-6 sm:block", delay: true },
];

export function AboutImage({ profile }) {
  const src = profile.image || portrait;
  const stats = profile.stats || [];

  return (
    <div className="relative mx-auto max-w-[400px] px-2 sm:px-6">
      <div className="absolute top-1/2 left-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-cyan/25 shadow-[0_24px_70px_rgb(0_217_255_/_0.16)]">
        <img
          src={src}
          alt={profile.imageAlt || profile.name}
          className="relative aspect-[3/4] w-full object-cover object-[center_12%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/55 via-transparent to-transparent" />
      </div>

      {cardSlots.map((slot) => {
        const stat = stats.find((item) => item.id === slot.id);
        if (!stat) return null;
        const Icon = getIcon(stat.icon);

        return (
          <FloatingElement key={stat.id} delay={slot.delay} className={`portrait-stat absolute z-10 min-w-[148px] ${slot.className}`}>
            <span className="mb-1 inline-flex text-cyan">
              <Icon size={16} />
            </span>
            <p className="font-display text-lg leading-none font-semibold">{stat.value}</p>
            <p className="mt-1 text-[11px] text-muted">{stat.label}</p>
          </FloatingElement>
        );
      })}
    </div>
  );
}
