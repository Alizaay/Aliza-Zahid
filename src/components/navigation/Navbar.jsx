import { useEffect, useRef, useState } from "react";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useSiteData } from "../../hooks/useSiteContent";
import { cn } from "../../utils/cn";
import { Logo } from "../common/Logo";
import { ThemeToggle } from "../common/ThemeToggle";
import { Button } from "../ui/Button";
import { DesktopNav } from "./DesktopNav";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileNav } from "./MobileNav";
import { ServicesBar } from "./ServicesMenu";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const headerRef = useRef(null);
  const { site } = useSiteData();
  const activeSection = useActiveSection();
  const scrollY = useScrollPosition();

  useEffect(() => {
    if (!servicesOpen) return undefined;

    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-line/50 bg-canvas/80 backdrop-blur-xl",
        scrollY > 12 && "border-cyan/15 shadow-[0_10px_40px_rgb(2_8_23_/_0.45)]",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between lg:h-[72px]">
        <Logo />
        <DesktopNav
          items={site.navigation}
          activeSection={activeSection}
          servicesOpen={servicesOpen}
          onToggleServices={() => {
            setOpen(false);
            setServicesOpen((value) => !value);
          }}
        />
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="/#contact" className="min-h-10 px-5 text-xs">
            Let’s Talk
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <MobileMenuButton
            open={open}
            onToggle={() => {
              setServicesOpen(false);
              setOpen((value) => !value);
            }}
          />
        </div>
      </div>
      {servicesOpen && <ServicesBar services={site.services} onSelect={() => setServicesOpen(false)} />}
      <MobileNav
        items={site.navigation}
        open={open}
        onClose={() => setOpen(false)}
        activeSection={activeSection}
        services={site.services}
      />
    </header>
  );
}
