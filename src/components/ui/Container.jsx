import { cn } from "../../utils/cn";

export function Container({ as: Tag = "div", className, children }) {
  return <Tag className={cn("container-page", className)}>{children}</Tag>;
}
