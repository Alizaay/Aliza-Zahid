import { HiOutlineArrowRight, HiOutlineCheckCircle } from "react-icons/hi";
import { Card } from "../../../../components/ui/Card";
import { getIcon } from "../../../../lib/icons";

export function ServiceCard({ service }) {
  const Icon = getIcon(service.icon);

  return (
    <Card as="article" id={service.id} className="group flex h-full scroll-mt-28 flex-col text-center">
      <span className="icon-glow mx-auto mb-5 h-14 w-14 transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_28px_rgb(0_217_255_/_0.5)]">
        <Icon size={26} />
      </span>
      <h3 className="font-display text-xl font-semibold">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
      <ul className="mt-5 flex-1 space-y-2 text-left">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <HiOutlineCheckCircle className="mt-0.5 shrink-0 text-cyan" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href="/#contact" className="mt-6 inline-flex items-center justify-center gap-1 text-sm font-semibold text-cyan transition group-hover:gap-2">
        Read More <HiOutlineArrowRight />
      </a>
    </Card>
  );
}
