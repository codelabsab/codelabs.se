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
    pill: "border-[rgba(29,107,87,0.16)] bg-[rgba(29,107,87,0.08)] text-[var(--color-brand-blue)]",
    pillSoft:
      "border-[rgba(29,107,87,0.12)] bg-[rgba(29,107,87,0.06)] text-[var(--color-brand-blue)]",
    badge:
      "border-[rgba(29,107,87,0.12)] bg-[rgba(255,253,248,0.78)] text-[var(--color-ink-900)]",
    icon: "bg-[rgba(29,107,87,0.1)] text-[var(--color-brand-blue)]",
    card: "bg-[linear-gradient(180deg,rgba(255,253,248,0.94)_0%,rgba(250,248,242,0.98)_100%)]",
    border: "border-[rgba(29,107,87,0.14)]",
    link: "text-[var(--color-brand-blue)] hover:text-[var(--color-brand-indigo)]",
  },
  violet: {
    accent: "var(--color-brand-indigo)",
    eyebrow: "text-[var(--color-brand-indigo)]",
    pill: "border-[rgba(53,95,84,0.18)] bg-[rgba(53,95,84,0.08)] text-[var(--color-brand-indigo)]",
    pillSoft:
      "border-[rgba(53,95,84,0.12)] bg-[rgba(53,95,84,0.06)] text-[var(--color-brand-indigo)]",
    badge:
      "border-[rgba(53,95,84,0.12)] bg-[rgba(248,246,240,0.82)] text-[var(--color-ink-900)]",
    icon: "bg-[rgba(53,95,84,0.1)] text-[var(--color-brand-indigo)]",
    card: "bg-[linear-gradient(180deg,rgba(248,246,240,0.94)_0%,rgba(255,253,248,0.98)_100%)]",
    border: "border-[rgba(53,95,84,0.14)]",
    link: "text-[var(--color-brand-indigo)] hover:text-[var(--color-brand-blue)]",
  },
  mint: {
    accent: "var(--color-brand-mint)",
    eyebrow: "text-[var(--color-brand-mint)]",
    pill: "border-[rgba(47,138,116,0.18)] bg-[rgba(47,138,116,0.08)] text-[var(--color-brand-mint)]",
    pillSoft:
      "border-[rgba(47,138,116,0.12)] bg-[rgba(47,138,116,0.06)] text-[var(--color-brand-mint)]",
    badge:
      "border-[rgba(47,138,116,0.12)] bg-[rgba(252,254,251,0.86)] text-[var(--color-ink-900)]",
    icon: "bg-[rgba(47,138,116,0.12)] text-[var(--color-brand-mint)]",
    card: "bg-[linear-gradient(180deg,rgba(247,252,249,0.96)_0%,rgba(255,253,248,0.98)_100%)]",
    border: "border-[rgba(47,138,116,0.16)]",
    link: "text-[var(--color-brand-mint)] hover:text-[var(--color-brand-blue)]",
  },
  coral: {
    accent: "var(--color-brand-coral)",
    eyebrow: "text-[var(--color-brand-coral)]",
    pill: "border-[rgba(154,109,70,0.18)] bg-[rgba(154,109,70,0.08)] text-[var(--color-brand-coral)]",
    pillSoft:
      "border-[rgba(154,109,70,0.12)] bg-[rgba(154,109,70,0.06)] text-[var(--color-brand-coral)]",
    badge:
      "border-[rgba(154,109,70,0.12)] bg-[rgba(252,248,242,0.84)] text-[var(--color-ink-900)]",
    icon: "bg-[rgba(154,109,70,0.12)] text-[var(--color-brand-coral)]",
    card: "bg-[linear-gradient(180deg,rgba(252,248,242,0.96)_0%,rgba(255,253,248,0.98)_100%)]",
    border: "border-[rgba(154,109,70,0.16)]",
    link: "text-[var(--color-brand-coral)] hover:text-[var(--color-brand-blue)]",
  },
};

export const defaultToneOrder: AccentTone[] = ["blue", "violet", "mint", "coral"];

export function getToneByIndex(index: number, tones = defaultToneOrder): AccentTone {
  return tones[index % tones.length] ?? "blue";
}
