export type AccentTone = "pink" | "orange" | "cyan" | "violet";
export type StatusTone = "ok" | "warn" | "crit" | "info";
export type Tone = AccentTone | StatusTone;

type ToneStyle = {
  /** Raw CSS colour, for `style={{ "--tone": ... }}` and SVG strokes. */
  color: string;
  /** Text utility that keeps AA contrast on the night backgrounds. */
  text: string;
  border: string;
  bg: string;
};

export const toneStyles: Record<Tone, ToneStyle> = {
  pink: {
    color: "var(--color-sunset-pink)",
    text: "text-sunset-pink",
    border: "border-sunset-pink/50",
    bg: "bg-sunset-pink/10",
  },
  orange: {
    color: "var(--color-sunset-orange)",
    text: "text-sunset-orange",
    border: "border-sunset-orange/50",
    bg: "bg-sunset-orange/10",
  },
  cyan: {
    color: "var(--color-neon-cyan)",
    text: "text-neon-cyan",
    border: "border-neon-cyan/50",
    bg: "bg-neon-cyan/10",
  },
  violet: {
    color: "var(--color-neon-violet)",
    // The raw violet is too dark for text on night-900; use the soft variant.
    text: "text-violet-soft",
    border: "border-neon-violet/60",
    bg: "bg-neon-violet/15",
  },
  ok: {
    color: "var(--color-ok)",
    text: "text-ok",
    border: "border-ok/50",
    bg: "bg-ok/10",
  },
  warn: {
    color: "var(--color-warn)",
    text: "text-warn",
    border: "border-warn/50",
    bg: "bg-warn/10",
  },
  crit: {
    color: "var(--color-crit)",
    text: "text-crit",
    border: "border-crit/50",
    bg: "bg-crit/10",
  },
  info: {
    color: "var(--color-info)",
    text: "text-info",
    border: "border-info/50",
    bg: "bg-info/10",
  },
};

const accentCycle: AccentTone[] = ["pink", "cyan", "orange", "violet"];

export function getToneByIndex(index: number, tones: Tone[] = accentCycle): Tone {
  return tones[index % tones.length];
}

/** Severity (1–5 stars) mapped onto dashboard semantics. */
export function severityTone(stars: number): StatusTone {
  if (stars >= 5) return "crit";
  if (stars >= 3) return "warn";
  return "ok";
}

export function toneVar(tone: Tone): React.CSSProperties {
  return { "--tone": toneStyles[tone].color } as React.CSSProperties;
}
