import { getIcon } from "../../../../lib/icons";

const items = [
  { icon: "Shield", title: "Secure & Reliable", text: "We build secure and reliable solutions you can trust." },
  { icon: "Rocket", title: "Scalable Solutions", text: "Our solutions grow with your business." },
  { icon: "Bulb", title: "Innovation Focused", text: "We use the latest technologies to drive innovation." },
  { icon: "Person", title: "Client-Centric Approach", text: "Your success is our priority at every step." },
];

export function ServiceHighlights() {
  return (
    <div className="mt-10 grid gap-5 rounded-2xl border border-brand/30 bg-[rgb(7_18_38_/_0.7)] px-5 py-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const Icon = getIcon(item.icon);
        return (
          <div key={item.title} className="flex items-start gap-3 rounded-xl p-1 transition hover:bg-cyan/5">
            <span className="icon-glow-round h-11 w-11 shrink-0">
              <Icon size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="mt-1 text-xs leading-5 text-muted">{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
