export function Tooltip({ label, children }) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded-md bg-panel-elevated px-2 py-1 text-xs text-ink group-hover:block">
        {label}
      </span>
    </span>
  );
}
