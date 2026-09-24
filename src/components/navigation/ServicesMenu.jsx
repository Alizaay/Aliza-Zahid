import { HiChevronDown } from "react-icons/hi2";
import { getIcon } from "../../lib/icons";
import { cn } from "../../utils/cn";

export function ServicesTrigger({ open, active, onToggle }) {
  return (
    <button
      type="button"
      className={cn(
        "relative inline-flex items-center gap-1 text-sm font-medium tracking-wide transition",
        open || active
          ? "text-cyan after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-cyan after:shadow-[0_0_8px_#00d9ff]"
          : "text-muted hover:text-ink",
      )}
      aria-expanded={open}
      aria-haspopup="true"
      onClick={onToggle}
    >
      Services
      <HiChevronDown className={cn("transition duration-300", open && "rotate-180")} size={14} />
    </button>
  );
}

export function ServicesBar({ services = [], onSelect }) {
  return (
    <div className="hidden border-t border-line/60 bg-panel lg:block">
      <nav className="container-page grid grid-cols-4 gap-2 py-3" aria-label="Services">
        {services.map((service) => {
          const Icon = getIcon(service.icon);
          return (
            <a
              key={service.id}
              href={`/#${service.id}`}
              className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm text-ink/90 transition hover:bg-cyan/10 hover:text-cyan"
              onClick={onSelect}
            >
              <Icon size={16} className="shrink-0 text-cyan" />
              {service.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export function ServicesMobileList({ services = [], onSelect }) {
  return (
    <div className="ml-4 flex flex-col border-l border-line/60 pl-2">
      {services.map((service) => {
        const Icon = getIcon(service.icon);
        return (
          <a
            key={service.id}
            href={`/#${service.id}`}
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-muted hover:text-cyan"
            onClick={onSelect}
          >
            <Icon size={16} className="text-cyan" />
            {service.title}
          </a>
        );
      })}
    </div>
  );
}
