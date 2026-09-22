import { cn } from "../../utils/cn";

export function HighlightTitle({
  as: Tag = "h2",
  text,
  accent,
  className,
}) {
  if (!accent || !text.includes(accent)) {
    return <Tag className={cn("font-display font-semibold tracking-tight text-ink", className)}>{text}</Tag>;
  }

  const [before, after] = text.split(accent);
  return (
    <Tag className={cn("font-display font-semibold tracking-tight text-ink", className)}>
      {before}
      <span className="gradient-text">{accent}</span>
      {after}
    </Tag>
  );
}
