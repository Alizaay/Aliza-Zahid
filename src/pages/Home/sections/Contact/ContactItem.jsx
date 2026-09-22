import { Card } from "../../../../components/ui/Card";
import { externalLinkProps } from "../../../../utils/externalLink";

export function ContactItem({ label, value, href, icon: Icon }) {
  return (
    <Card as="a" href={href} className="block h-full" {...externalLinkProps(href)}>
      {Icon && (
        <span className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl border border-line bg-panel-elevated text-cyan">
          <Icon size={18} />
        </span>
      )}
      <p className="text-xs tracking-[0.18em] text-muted uppercase">{label}</p>
      <p className="mt-2 font-display text-lg font-semibold break-all">{value}</p>
    </Card>
  );
}
