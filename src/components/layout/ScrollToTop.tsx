import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If the URL has a hash, let the browser / page handle the anchor.
    // (e.g. /services#corporate-law — we don't want to jump to top there.)
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}