// Client-side deterrents against casual copying / inspecting.
// Note: nothing shipped to a browser is truly uncopyable — this only slows
// down casual snooping.

export function initCodeGuard() {
  if (typeof window === "undefined") return;

  // Block right-click context menu
  window.addEventListener("contextmenu", (e) => e.preventDefault());

  // Block text selection & drag
  window.addEventListener("selectstart", (e) => e.preventDefault());
  window.addEventListener("dragstart", (e) => e.preventDefault());
  window.addEventListener("copy", (e) => e.preventDefault());
  window.addEventListener("cut", (e) => e.preventDefault());

  // Block common devtools shortcuts
  window.addEventListener("keydown", (e) => {
    const key = e.key?.toLowerCase();
    if (e.key === "F12") return e.preventDefault();
    if (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) return e.preventDefault();
    if (e.metaKey && e.altKey && ["i", "j", "c"].includes(key)) return e.preventDefault();
    if (e.ctrlKey && ["u", "s"].includes(key)) return e.preventDefault();
    if (e.metaKey && ["u", "s"].includes(key)) return e.preventDefault();
  });

  // Silence the console
  try {
    const noop = () => {};
    const methods: (keyof Console)[] = [
      "log",
      "info",
      "warn",
      "error",
      "debug",
      "trace",
      "dir",
      "table",
      "group",
      "groupCollapsed",
      "groupEnd",
    ];
    for (const m of methods) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (console as any)[m] = noop;
    }
    const clear = () => {
      try {
        console.clear();
      } catch {}
    };
    clear();
    setInterval(clear, 1500);
  } catch {}
}
