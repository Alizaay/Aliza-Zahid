export function TimelineCard({ kicker, title, place, period, location, detail, tone = "cyan", last = false }) {
  const dot = tone === "violet" ? "bg-violet shadow-[0_0_14px_rgb(124_58_237_/_0.7)]" : "bg-cyan shadow-[0_0_14px_rgb(0_217_255_/_0.7)]";
  const line = tone === "violet" ? "bg-violet/40" : "bg-cyan/40";

  return (
    <article className="relative pl-8">
      <span className={`absolute top-2 left-[5px] h-3 w-3 rounded-full ${dot}`} />
      {!last && <span className={`absolute top-5 bottom-[-1.25rem] left-[10px] w-px ${line}`} />}
      <div className="glow-card card-lift p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-[11px] tracking-[0.2em] text-cyan uppercase">{kicker}</p>
          <p className="text-xs font-semibold text-cyan">{period}</p>
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted">{place}</p>
        {location && <p className="mt-1 text-xs text-muted/80">{location}</p>}
        <p className="mt-3 text-sm leading-6 text-muted">{detail}</p>
      </div>
    </article>
  );
}
