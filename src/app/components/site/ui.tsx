import type { ReactNode } from "react";
import { logRainLines } from "@/app/components/site/site-data";
import { severityTone, toneStyles, type Tone } from "@/app/components/site/design";

/** Star rating. On missions and case files the stars are a pager level. */
export function Stars({
  value,
  max = 5,
  label,
  tone,
  className = "",
}: {
  value: number;
  max?: number;
  label: string;
  tone?: Tone;
  className?: string;
}) {
  const color = toneStyles[tone ?? severityTone(value)].color;
  return (
    <span role="img" aria-label={label} className={`inline-flex gap-0.5 ${className}`}>
      {Array.from({ length: max }, (_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
          <path
            d="M10 1.6l2.5 5.4 5.9.7-4.4 4 1.2 5.8L10 14.6l-5.2 2.9L6 11.7l-4.4-4 5.9-.7z"
            fill={index < value ? color : "none"}
            stroke={index < value ? color : "rgba(233,227,245,0.35)"}
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  script,
  description,
  align = "left",
  as: Tag = "h2",
}: {
  kicker: string;
  title: ReactNode;
  script?: string;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={`section-head reveal max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div>
        <p className="kicker">{kicker}</p>
        {script ? (
          <p aria-hidden="true" className="script mt-4 -mb-2 -rotate-2 text-4xl sm:text-5xl">
            {script}
          </p>
        ) : null}
        <Tag className="display mt-3 text-5xl sm:text-6xl lg:text-7xl">{title}</Tag>
      </div>
      {description ? <p className="lede mt-6">{description}</p> : null}
    </div>
  );
}

export function TerminalFrame({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`terminal not-prose ${className}`}>
      <div className="terminal-bar">
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}

/** Dimmed scrolling log stream behind dark sections. Decorative only. */
export function LogRain() {
  const lines = [...logRainLines, ...logRainLines, ...logRainLines];
  return (
    <div className="log-rain" aria-hidden="true">
      <div>
        {[0, 1].map((copy) => (
          <div key={copy} className="grid grid-cols-1 gap-x-16 px-6 md:grid-cols-2 xl:grid-cols-3">
            {lines.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** HUD meter. Decorative: always paired with a label or tooltip saying so. */
export function HudBar({
  label,
  fill,
  tone,
  title,
}: {
  label: string;
  fill: number;
  tone: Tone;
  title?: string;
}) {
  return (
    <span className="flex items-center gap-2" title={title}>
      <span className="mono text-[10px] uppercase tracking-[0.14em] text-ink-300">{label}</span>
      <span className="hud-bar" style={{ "--bar": toneStyles[tone].color } as React.CSSProperties}>
        <span style={{ width: `${fill}%` }} />
      </span>
    </span>
  );
}

export function Redacted({ width = "6rem" }: { width?: string }) {
  return <span className="redacted" style={{ width }} aria-hidden="true" />;
}

const iconPaths: Record<string, string> = {
  sliders: "M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M6 14v6",
  piggy: "M4 12a7 6 0 0 1 14-1l2 1v3l-2 1a7 6 0 0 1-2 2v2h-3v-1h-3v1H7v-2a6 6 0 0 1-3-6zM9 6a3 2 0 0 1 5 0",
  laptop: "M5 6h14v9H5zM3 18h18",
  heart: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.500-7 10-7 10z",
  fork: "M7 3v7a2 2 0 0 0 4 0V3M9 3v18M17 3c-2 2-2 6 0 8v10",
  shield: "M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6zM9 12l2 2 4-4",
  stroller: "M5 5a8 8 0 0 1 8 8H5zM13 13h5l2-7M8 19a1.500 1.500 0 1 0 0-.01M16 19a1.500 1.500 0 1 0 0-.01",
  medal: "M8 3l4 7 4-7M12 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10z",
  car: "M4 14l2-6h12l2 6v4H4zM7 18v2M17 18v2M7 14h.01M17 14h.01",
  book: "M5 4h9a4 4 0 0 1 4 4v12H9a4 4 0 0 1-4-4zM9 4v16",
  arrow: "M5 12h14M13 6l6 6-6 6",
};

export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={iconPaths[name] ?? iconPaths.arrow} />
    </svg>
  );
}
