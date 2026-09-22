import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { Button } from "../ui/Button";
import { NavLinkItem } from "./NavLinkItem";
import { ServicesMobileList } from "./ServicesMenu";

export function MobileNav({ items, open, onClose, activeSection, services = [] }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  if (!open) return null;

  return (
    <div className="border-t border-line/60 bg-panel lg:hidden">
      <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
        {items.map((item) => {
          const id = item.href.split("#")[1];
          if (id === "services") {
            return (
              <div key={item.href}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-muted"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((value) => !value)}
                >
                  Services
                  <HiChevronDown className={`transition ${servicesOpen ? "rotate-180 text-cyan" : ""}`} size={16} />
                </button>
                {servicesOpen && <ServicesMobileList services={services} onSelect={onClose} />}
              </div>
            );
          }

          return (
            <NavLinkItem
              key={item.href}
              href={item.href}
              active={id ? activeSection === id : false}
              onClick={onClose}
            >
              <span className="block rounded-xl px-4 py-3">{item.label}</span>
            </NavLinkItem>
          );
        })}
        <Button href="/#contact" className="mt-2" onClick={onClose}>
          Let’s Talk
        </Button>
      </nav>
    </div>
  );
}
