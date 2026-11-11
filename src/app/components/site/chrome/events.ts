/** Tiny event bus so server-rendered sections can open client overlays. */
export type ChromeEvent = "cl:phone" | "cl:terminal" | "cl:menu" | "cl:toast";

export type ToastDetail = { title: string; sub?: string };

export function emit(name: ChromeEvent, detail?: ToastDetail) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(name, { detail }));
  }
}
