export type AccentTone = "blue" | "violet" | "mint" | "coral";

type AccentStyle = {
  accent: string;
  eyebrow: string;
  pill: string;
  pillSoft: string;
  badge: string;
  icon: string;
  card: string;
  border: string;
  link: string;
};

export const accentStyles: Record<AccentTone, AccentStyle> = {
  blue: {
    accent: "var(--color-brand-blue)",
    eyebrow: "text-[var(--color-brand-blue)]",
    pill: "border-[rgba(37,99,235,0.18)] bg-[var(--color-surface-tint-blue)] text-[var(--color-brand-blue)]",
    pillSoft:
      "border-[rgba(37,99,235,0.12)] bg-[rgba(37,99,235,0.08)] text-[var(--color-brand-blue)]",
    badge:
      "border-[rgba(37,99,235,0.16)] bg-[rgba(37,99,235,0.08)] text-[var(--color-ink-900)]",
    icon: "bg-[rgba(37,99,235,0.1)] text-[var(--color-brand-blue)]",
    card: "bg-[linear-gradient(180deg,rgba(243,247,255,0.9)_0%,rgba(255,255,255,0.98)_100%)]",
    border: "border-[rgba(37,99,235,0.14)]",
    link: "text-[var(--color-brand-blue)] hover:text-[var(--color-brand-indigo)]",
  },
  violet: {
    accent: "var(--color-brand-violet)",
    eyebrow: "text-[var(--color-brand-violet)]",
    pill: "border-[rgba(139,92,246,0.2)] bg-[var(--color-surface-tint-violet)] text-[var(--color-brand-violet)]",
    pillSoft:
      "border-[rgba(139,92,246,0.12)] bg-[rgba(139,92,246,0.08)] text-[var(--color-brand-violet)]",
    badge:
      "border-[rgba(91,91,214,0.16)] bg-[rgba(91,91,214,0.08)] text-[var(--color-ink-900)]",
    icon: "bg-[rgba(139,92,246,0.12)] text-[var(--color-brand-indigo)]",
    card: "bg-[linear-gradient(180deg,rgba(247,244,255,0.94)_0%,rgba(255,255,255,0.98)_100%)]",
    border: "border-[rgba(91,91,214,0.14)]",
    link: "text-[var(--color-brand-indigo)] hover:text-[var(--color-brand-violet)]",
  },
  mint: {
    accent: "var(--color-brand-mint)",
    eyebrow: "text-[var(--color-brand-mint)]",
    pill: "border-[rgba(20,184,166,0.2)] bg-[var(--color-surface-tint-mint)] text-[var(--color-brand-mint)]",
    pillSoft:
      "border-[rgba(20,184,166,0.12)] bg-[rgba(20,184,166,0.08)] text-[var(--color-brand-mint)]",
    badge:
      "border-[rgba(20,184,166,0.16)] bg-[rgba(20,184,166,0.08)] text-[var(--color-ink-900)]",
    icon: "bg-[rgba(20,184,166,0.12)] text-[var(--color-brand-mint)]",
    card: "bg-[linear-gradient(180deg,rgba(241,252,250,0.95)_0%,rgba(255,255,255,0.98)_100%)]",
    border: "border-[rgba(20,184,166,0.16)]",
    link: "text-[var(--color-brand-mint)] hover:text-[var(--color-brand-blue)]",
  },
  coral: {
    accent: "var(--color-brand-coral)",
    eyebrow: "text-[var(--color-brand-coral)]",
    pill: "border-[rgba(249,115,96,0.2)] bg-[rgba(249,115,96,0.1)] text-[var(--color-brand-coral)]",
    pillSoft:
      "border-[rgba(249,115,96,0.12)] bg-[rgba(249,115,96,0.08)] text-[var(--color-brand-coral)]",
    badge:
      "border-[rgba(249,115,96,0.16)] bg-[rgba(249,115,96,0.08)] text-[var(--color-ink-900)]",
    icon: "bg-[rgba(249,115,96,0.12)] text-[var(--color-brand-coral)]",
    card: "bg-[linear-gradient(180deg,rgba(255,247,244,0.94)_0%,rgba(255,255,255,0.98)_100%)]",
    border: "border-[rgba(249,115,96,0.16)]",
    link: "text-[var(--color-brand-coral)] hover:text-[var(--color-brand-blue)]",
  },
};

export const defaultToneOrder: AccentTone[] = ["blue", "violet", "mint", "coral"];

export function getToneByIndex(index: number, tones = defaultToneOrder): AccentTone {
  return tones[index % tones.length] ?? "blue";
}
