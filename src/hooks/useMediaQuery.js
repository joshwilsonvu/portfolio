import { useState, useEffect, useMemo } from "react";

export function useMediaQuery(query) {
  const isClient = typeof window !== "undefined";
  const mql = useMemo(() => isClient && matchMedia(query), [isClient, query]);
  const [matches, setMatches] = useState(isClient && mql.matches);
  useEffect(() => {
    if (isClient) {
      function listener(e) {
        setMatches(!!e.matches);
      }
      mql.addEventListener("change", listener);
      return () => mql.removeEventListener("change", listener);
    }
  }, [isClient, mql]);
  return !!matches;
}

export function useIsDesktop() {
  return useMediaQuery("screen and (min-width: 600px)");
}

export function useReduceMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
