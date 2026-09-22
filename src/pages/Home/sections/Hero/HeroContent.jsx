import { HighlightTitle } from "../../../../components/common/HighlightTitle";
import { getIcon } from "../../../../lib/icons";

export function HeroContent({ profile }) {
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <div>
      <p className="text-base text-ink">Hi, I’m</p>
      <h1 className="mt-1 font-display text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-[4.6rem]">
        <span className="text-ink">{first} </span>
        <span className="gradient-text">{last}</span>
      </h1>
      <p className="mt-4 text-[11px] font-medium tracking-[0.18em] text-ink/80 uppercase">
        {profile.roles.join("  |  ")}
      </p>
      <HighlightTitle
        as="p"
        text={profile.headline}
        accent={profile.headlineAccent}
        className="mt-6 text-2xl leading-snug sm:text-[2rem]"
      />
      <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">{profile.description}</p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {(profile.heroServices || []).map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <div key={item.id} className="rounded-xl border border-brand/40 bg-[rgb(7_18_38_/_0.7)] px-2 py-4 text-center shadow-[0_0_18px_rgb(20_124_255_/_0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan/50">
              <span className="mx-auto mb-2 grid h-9 w-9 place-items-center text-cyan">
                <Icon size={20} />
              </span>
              <p className="text-[10px] leading-4 font-medium text-ink">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
