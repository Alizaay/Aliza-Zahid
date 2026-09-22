import { useEffect } from "react";
import { seoConfig } from "../config/seoConfig";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | AlizaDev` : seoConfig.defaultTitle;
  }, [title]);
}
