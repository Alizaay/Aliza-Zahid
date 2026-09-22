import { getTechIcon } from "../../../../lib/techIcons";

export function TechnologyCard({ technology }) {
  const Icon = getTechIcon(technology.id);

  return (
    <div className="flex items-center gap-3 rounded-xl border border-line bg-panel px-3 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-cyan/40 hover:shadow-[0_8px_24px_rgb(20_124_255_/_0.14)]">
      {technology.logo ? (
        <img src={technology.logo} alt="" className="h-8 w-8 rounded object-contain" />
      ) : (
        <span className="grid h-8 w-8 place-items-center rounded bg-panel-elevated text-cyan">
          <Icon size={16} />
        </span>
      )}
      <div>
        <p className="text-sm font-medium">{technology.name}</p>
        <p className="text-xs text-muted">{technology.experience}</p>
      </div>
    </div>
  );
}
