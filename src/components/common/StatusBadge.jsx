import { Badge } from "../ui/Badge";

export function StatusBadge({ status }) {
  const developing = status === "in-development";
  return <Badge tone={developing ? "violet" : "cyan"}>{developing ? "In development" : "Completed"}</Badge>;
}
