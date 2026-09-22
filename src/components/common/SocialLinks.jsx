import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { externalLinkProps } from "../../utils/externalLink";

const icons = { github: FaGithub, linkedin: FaLinkedinIn };

export function SocialLinks({ links = [] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => {
        const Icon = icons[link.id] || FaLinkedinIn;
        return (
          <a
            key={link.id}
            href={link.href}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-muted transition hover:-translate-y-0.5 hover:border-cyan hover:text-cyan hover:shadow-[0_8px_20px_rgb(0_217_255_/_0.16)]"
            {...externalLinkProps(link.href)}
          >
            <Icon /> {link.label}
          </a>
        );
      })}
    </div>
  );
}
