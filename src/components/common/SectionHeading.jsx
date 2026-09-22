import { cn } from "../../utils/cn";
import { SectionBadge } from "./SectionBadge";

export function SectionHeading({ kicker, title, description, align = "left", className }) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {kicker && <SectionBadge>{kicker}</SectionBadge>}
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-muted">{description}</p>}
    </div>
  );
}
