import { NavLinkItem } from "./NavLinkItem";
import { ServicesTrigger } from "./ServicesMenu";

export function DesktopNav({ items, activeSection, servicesOpen, onToggleServices }) {
  return (
    <nav className="hidden items-center gap-4 lg:flex xl:gap-6" aria-label="Primary">
      {items.map((item) => {
        const id = item.href.split("#")[1];
        if (id === "services") {
          return (
            <ServicesTrigger
              key={item.href}
              open={servicesOpen}
              active={activeSection === "services"}
              onToggle={onToggleServices}
            />
          );
        }

        return (
          <NavLinkItem key={item.href} href={item.href} active={id ? activeSection === id : false}>
            {item.label}
          </NavLinkItem>
        );
      })}
    </nav>
  );
}
