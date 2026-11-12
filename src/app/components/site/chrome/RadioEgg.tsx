"use client";

import { useState } from "react";

// UI-only easter egg. No audio is loaded or played.
const stations = [
  { name: "Pager FM", now: "Now playing: silence. Nothing is on fire." },
  { name: "Kube Radio", now: "Now playing: 99 pods of YAML on the wall." },
  { name: "Lo-Fi Logs", now: "Now playing: level=info beats to deploy to." },
];

export default function RadioEgg() {
  const [index, setIndex] = useState(0);
  const station = stations[index];
  return (
    <div className="mt-6 border border-white/10 bg-night-800 p-3">
      <div className="flex items-center justify-between gap-3">
        <p className="mono text-[11px] uppercase tracking-[0.14em] text-sunset-gold">
          <span aria-hidden="true">((•)) </span>
          {station.name}
        </p>
        <button
          type="button"
          className="mono border border-white/20 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-sand-50 hover:border-neon-cyan"
          onClick={() => setIndex((index + 1) % stations.length)}
        >
          Next station
        </button>
      </div>
      <p className="mono mt-2 text-xs text-ink-100" aria-live="polite">
        {station.now} <span className="text-ink-300">(no audio, just vibes)</span>
      </p>
    </div>
  );
}
