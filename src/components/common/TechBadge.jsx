export function TechBadge({ label }) {
  return (
    <span className="inline-flex items-center rounded-md border border-brand/30 bg-[rgb(7_18_38_/_0.9)] px-2.5 py-1 text-[11px] font-medium text-cyan">
      {label}
    </span>
  );
}
