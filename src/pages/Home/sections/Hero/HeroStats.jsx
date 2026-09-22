export function HeroStats({ stats = [] }) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {stats.slice(0, 3).map((stat) => (
        <div key={stat.id} className="rounded-xl border border-line bg-panel px-4 py-4">
          <p className="font-display text-2xl font-semibold text-cyan">{stat.value}</p>
          <p className="mt-1 text-xs text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
