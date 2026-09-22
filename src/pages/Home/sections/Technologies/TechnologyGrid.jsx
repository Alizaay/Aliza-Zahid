import { SlideUp } from "../../../../components/animations/SlideUp";
import { TechnologyCategory } from "./TechnologyCategory";

export function TechnologyGrid({ groups }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {groups.map(([title, items], index) => (
        <SlideUp key={title} delay={index * 0.05}>
          <TechnologyCategory title={title} items={items} />
        </SlideUp>
      ))}
    </div>
  );
}
