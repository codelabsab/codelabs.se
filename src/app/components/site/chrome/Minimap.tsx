/**
 * Circular minimap: a hand-drawn Stockholm (islands) with the site's pages
 * drawn on top as a service-topology graph. The current node lights up.
 * The island shapes mirror public/assets/stockholm-oncall/minimap.svg.
 */
export const islands = [
  "M8 38q10-8 24-4q6 4 2 10q-12 6-24 2q-6-3-2-8z", // Kungsholmen
  "M34 4h40q6 10-2 24q-14 8-30 4q-10-8-8-28z", // Norrmalm
  "M48 44q6-3 10 1q2 6-4 8q-7 1-8-4q0-3 2-5z", // Gamla Stan
  "M20 62q22-10 52-4q10 6 4 18q-26 14-54 4q-8-8-2-18z", // Södermalm
  "M72 34q12-6 24 0q4 8-4 12q-12 4-22-2q-2-6 2-10z", // Djurgården
  "M63 44q4-2 6 1q0 4-4 4q-3-1-2-5z", // Skeppsholmen
];

export const mapNodes = {
  home: { x: 53, y: 48, label: "Home" },
  missions: { x: 50, y: 18, label: "Missions" },
  cases: { x: 20, y: 42, label: "Case files" },
  runbook: { x: 84, y: 40, label: "Runbook" },
  team: { x: 36, y: 72, label: "Crew" },
  careers: { x: 62, y: 76, label: "Join" },
  blog: { x: 82, y: 64, label: "Newswire" },
} as const;

export type MapNode = keyof typeof mapNodes;

export default function Minimap({ active, size = 44 }: { active: MapNode; size?: number }) {
  const home = mapNodes.home;
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
      className="shrink-0 rounded-full border border-neon-cyan/50 bg-[#0a1a2b] shadow-[0_0_18px_-4px_var(--color-neon-cyan)]"
    >
      <g fill="#1d2f4a" stroke="#35557a" strokeWidth="1">
        {islands.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {Object.entries(mapNodes).map(([id, node]) =>
        id === "home" ? null : (
          <line
            key={id}
            x1={home.x}
            y1={home.y}
            x2={node.x}
            y2={node.y}
            stroke={id === active ? "var(--color-sunset-pink)" : "rgba(46,230,240,0.45)"}
            strokeWidth={id === active ? 2.4 : 1.2}
          />
        ),
      )}
      {Object.entries(mapNodes).map(([id, node]) => (
        <circle
          key={id}
          cx={node.x}
          cy={node.y}
          r={id === active ? 7 : 4}
          fill={id === active ? "var(--color-sunset-pink)" : "var(--color-neon-cyan)"}
          className={id === active ? "blink" : undefined}
        />
      ))}
    </svg>
  );
}
