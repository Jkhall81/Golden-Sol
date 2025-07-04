import { useEffect } from "react";

export function useTrackPage(pageName?: string) {
  useEffect(() => {
    fetch("/api/track", {
      method: "POST",
      body: JSON.stringify({
        page: pageName || window.location.pathname,
        screen: `${window.innerWidth}x${window.innerHeight}`,
        event: "pageview",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [pageName]);
}
