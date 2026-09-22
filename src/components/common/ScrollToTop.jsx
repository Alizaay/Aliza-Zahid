import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../../utils/scrollToSection";

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const timer = window.setTimeout(() => scrollToSection(location.hash), 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    return undefined;
  }, [location.pathname, location.hash]);

  return null;
}
