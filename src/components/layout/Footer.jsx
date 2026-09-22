import { useSiteData } from "../../hooks/useSiteContent";
import { Logo } from "../common/Logo";
import { SocialLinks } from "../common/SocialLinks";
import { Container } from "../ui/Container";

export function Footer() {
  const { site } = useSiteData();

  return (
    <footer className="border-t border-line/70 bg-panel">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              Software Developer, AI Solutions Expert, and Tech Entrepreneur building digital products that drive success.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-muted">
            {site.navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-cyan">
                {item.label}
              </a>
            ))}
          </nav>
          <div>
            <p className="text-sm font-semibold">{site.contact.phone}</p>
            <p className="mt-1 text-sm text-muted">{site.contact.emails[0]}</p>
            <p className="mt-1 text-sm text-muted">{site.contact.location}</p>
            <div className="mt-4">
              <SocialLinks links={site.socialLinks} />
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-line/60 pt-6 text-xs text-muted">
          © {new Date().getFullYear()} {site.profile.name} · {site.profile.brand}. Building digital products that drive success.
        </p>
      </Container>
    </footer>
  );
}
