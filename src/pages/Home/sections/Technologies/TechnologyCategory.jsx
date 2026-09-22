import { HiOutlineCheckCircle } from "react-icons/hi";
import { getIcon } from "../../../../lib/icons";

const categoryMeta = {
  Frontend: { icon: "Code", tone: "cyan" },
  Backend: { icon: "Server", tone: "green" },
  "Cloud & Database": { icon: "Cloud", tone: "violet" },
};

export function TechnologyCategory({ title, items }) {
  const meta = categoryMeta[title] || { icon: "Spark", tone: "cyan" };
  const Icon = getIcon(meta.icon);
  const violet = meta.tone === "violet";

  return (
    <article className={violet ? "glow-card-violet card-lift p-5" : "glow-card card-lift p-5"}>
      <div className="mb-3 flex items-center gap-3">
        <span className={`icon-glow h-9 w-9 ${violet ? "border-violet/40 text-[#c4b5fd]" : ""}`}>
          <Icon size={16} />
        </span>
        <h3 className="font-display text-lg font-semibold">{title}</h3>
      </div>
      <ul className="space-y-1.5 text-sm text-muted">
        {items.map((technology) => (
          <li key={technology.id} className="flex items-center gap-2">
            <HiOutlineCheckCircle className="text-cyan" />
            {technology.name}
          </li>
        ))}
      </ul>
    </article>
  );
}
