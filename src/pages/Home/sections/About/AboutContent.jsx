import { HighlightTitle } from "../../../../components/common/HighlightTitle";
import { SectionBadge } from "../../../../components/common/SectionBadge";

export function AboutContent({ profile }) {
  return (
    <div>
      <SectionBadge>About Me</SectionBadge>
      <HighlightTitle text={profile.aboutTitle} accent={profile.aboutAccent} className="text-3xl sm:text-5xl" />
      <div className="mt-5 space-y-4 text-sm leading-7 text-muted sm:text-base">
        {profile.biography.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
