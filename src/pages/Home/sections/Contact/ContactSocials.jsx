import { SocialLinks } from "../../../../components/common/SocialLinks";

export function ContactSocials({ links, availability }) {
  return (
    <div className="mt-8">
      <SocialLinks links={links} />
      <p className="mt-6 text-sm text-cyan">{availability}</p>
    </div>
  );
}
