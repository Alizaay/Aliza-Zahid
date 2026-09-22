import { SlideUp } from "../../../../components/animations/SlideUp";
import { ServiceCard } from "./ServiceCard";

export function ServiceGrid({ services }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {services.map((service, index) => (
        <SlideUp key={service.id} delay={index * 0.05}>
          <ServiceCard service={service} />
        </SlideUp>
      ))}
    </div>
  );
}
