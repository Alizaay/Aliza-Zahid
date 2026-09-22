export function SectionBadge({ children, tone = "cyan", align = "left" }) {
  const color = tone === "violet" ? "text-[#c4b5fd]" : "text-cyan";
  const line = tone === "violet" ? "bg-violet" : "bg-cyan";

  return (
    <p className={`mb-3 inline-flex items-center gap-3 font-display text-xs font-semibold tracking-[0.28em] uppercase ${color} ${align === "center" ? "mx-auto" : ""}`}>
      <span className={`h-px w-8 ${line} shadow-[0_0_12px_currentColor]`} />
      {children}
      {align === "center" && <span className={`h-px w-8 ${line} shadow-[0_0_12px_currentColor]`} />}
    </p>
  );
}
