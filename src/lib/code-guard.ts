// Client-side deterrents. NOTE: This does not truly prevent code theft —
// anything shipped to the browser can ultimately be read. This just makes
// casual copying inconvenient and brands the console.

export function installCodeGuard() {
  if (typeof window === "undefined") return;
  if ((window as unknown as { __guardInstalled?: boolean }).__guardInstalled) return;
  (window as unknown as { __guardInstalled?: boolean }).__guardInstalled = true;

  const banner = "%c🐢 Built by Mindslot and a turtle";
  const style =
    "background:#111;color:#fff;font-size:20px;padding:12px 18px;border-radius:8px;font-weight:700;";

  try {
    // Wipe anything already logged, then print the branded banner.
    console.clear();
    console.log(banner, style);
    console.log(
      "%cNothing to see here. Source is minified for a reason.",
      "color:#888;font-size:12px;",
    );
  } catch {
    /* noop */
  }

  // Re-print the banner if devtools clears/updates.
  const rebrand = () => {
    try {
      console.clear();
      console.log(banner, style);
    } catch {
      /* noop */
    }
  };
  setInterval(rebrand, 2000);

  // Silence other console output in production.
  const noop = () => {};
  ["log", "info", "warn", "debug", "trace", "table"].forEach((k) => {
    try {
      (console as unknown as Record<string, unknown>)[k] = noop;
    } catch {
      /* noop */
    }
  });

  // Block right-click.
  window.addEventListener("contextmenu", (e) => e.preventDefault());

  // Block text selection & drag.
  window.addEventListener("selectstart", (e) => {
    const t = e.target as HTMLElement | null;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
    e.preventDefault();
  });
  window.addEventListener("dragstart", (e) => e.preventDefault());
  window.addEventListener("copy", (e) => {
    const t = e.target as HTMLElement | null;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
    e.preventDefault();
  });

  // Block common devtools shortcuts.
  window.addEventListener("keydown", (e) => {
    const k = e.key.toLowerCase();
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(k)) ||
      (e.metaKey && e.altKey && ["i", "j", "c"].includes(k)) ||
      (e.ctrlKey && k === "u") ||
      (e.metaKey && k === "u") ||
      (e.ctrlKey && k === "s") ||
      (e.metaKey && k === "s")
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
}
