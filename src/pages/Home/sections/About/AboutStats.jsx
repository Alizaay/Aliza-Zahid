import { getIcon } from "../../../../lib/icons";

export function AboutStats({ stats = [] }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
      {stats.map((stat) => {
        const Icon = getIcon(stat.icon);
        return (
          <div key={stat.id} className="rounded-2xl border border-brand/35 bg-[rgb(7_18_38_/_0.72)] px-4 py-5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan/40 hover:shadow-[0_10px_28px_rgb(20_124_255_/_0.16)]">
            <span className="mb-3 inline-block text-cyan drop-shadow-[0_0_10px_rgb(0_217_255_/_0.7)]">
              <Icon size={22} />
            </span>
            <p className="font-display text-2xl font-semibold">{stat.value}</p>
            <p className="mt-1 text-xs text-muted">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
