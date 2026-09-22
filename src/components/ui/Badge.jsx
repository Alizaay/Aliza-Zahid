import { cn } from "../../utils/cn";

export function Badge({ children, tone = "cyan", className }) {
  const tones = {
    cyan: "bg-brand/15 text-cyan",
    violet: "bg-violet/20 text-[#c4b5fd]",
    muted: "border border-line text-muted",
  };

  return (
    <span className={cn("inline-flex rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide uppercase", tones[tone], className)}>
      {children}
    </span>
  );
}
