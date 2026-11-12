"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { TerminalFrame } from "@/app/components/site/ui";

// The mini-game ships as its own lazy chunk and only loads when started.
const OnCallGame = dynamic(() => import("@/app/components/site/game/OnCallGame"), {
  ssr: false,
  loading: () => <p className="terminal-body">Paging on-call ...</p>,
});

export default function OnCallTeaser() {
  const [started, setStarted] = useState(false);
  return (
    <section id="on-call" className="section section-dusk">
      <div className="site-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal">
          <p className="kicker">Mini-game · 60 seconds</p>
          <h2 className="display mt-3 text-5xl sm:text-6xl">
            Can you survive <span className="text-crit">on-call?</span>
          </h2>
          <p className="lede mt-5">
            Alerts fire. You pick the right first move. Every answer is something we would defend in a real
            postmortem.
          </p>
          <p className="mono mt-4 text-xs text-ink-300">The score is a game score, not anyone&apos;s real SLO.</p>
        </div>
        <TerminalFrame title="pager — demo incident simulator" className="reveal">
          {started ? (
            <OnCallGame />
          ) : (
            <div className="terminal-body">
              <p>
                <span className="text-crit">FIRING</span> alertname=YouAreOnCall severity=page
              </p>
              <p className="text-ink-300">annotations: summary=&quot;8 alerts are waiting. Pick the right first action.&quot;</p>
              <button type="button" className="btn-neon mt-6" onClick={() => setStarted(true)}>
                Acknowledge and start
              </button>
            </div>
          )}
        </TerminalFrame>
      </div>
    </section>
  );
}
