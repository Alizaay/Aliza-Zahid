import { cn } from "../../utils/cn";

export function Card({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag className={cn("glow-card card-lift p-6", className)} {...props}>
      {children}
    </Tag>
  );
}
