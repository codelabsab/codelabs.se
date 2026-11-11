"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { emit } from "@/app/components/site/chrome/events";
import { incidentRounds } from "@/app/components/site/site-data";

const DURATION = 60;

function shuffled<T>(items: T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index--) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

export default function OnCallGame() {
  const [run, setRun] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rounds = useMemo(() => shuffled(incidentRounds), [run]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [seconds, setSeconds] = useState(DURATION);

  const done = seconds <= 0 || index >= rounds.length;

  useEffect(() => {
    if (done) return;
    const timer = setInterval(() => setSeconds((value) => value - 1), 1000);
    return () => clearInterval(timer);
  }, [done]);

  useEffect(() => {
    if (done && correct > 0) emit("cl:toast", { title: "Mission passed", sub: "Shift survived · Respect +" });
    // Fire once when the shift ends.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  if (done) {
    const answered = Math.max(index, 1);
    // A game score dressed up as an SLO. Not a real availability figure.
    const slo = (99 + 0.9 * (correct / Math.max(answered, rounds.length))).toFixed(2);
    return (
      <div className="terminal-body" aria-live="polite">
        <p className="text-ok">RESOLVED · shift over</p>
        <p className="mt-2">
          handled={correct}/{rounds.length} alerts · SLO kept: {slo}% <span className="text-ink-300">(game score)</span>
        </p>
        <p className="display mt-6 text-4xl !text-sunset-gold">Mission passed</p>
        <p className="mt-2 font-sans text-base text-sand-50">Want to do this for real? Join the crew.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/careers" className="btn-neon btn-sm">
            Join the crew
          </Link>
          <button
            type="button"
            className="btn-hud btn-sm"
            onClick={() => {
              setRun(run + 1);
              setIndex(0);
              setPicked(null);
              setCorrect(0);
              setSeconds(DURATION);
            }}
          >
            Take another shift
          </button>
        </div>
      </div>
    );
  }

  const round = rounds[index];
  const answered = picked !== null;

  return (
    <div className="terminal-body">
      <div className="flex items-center justify-between gap-4 text-xs text-ink-300">
        <span>
          alert {index + 1}/{rounds.length} · handled {correct}
        </span>
        <span className={seconds <= 10 ? "text-crit" : "text-sunset-gold"} role="timer">
          {seconds}s left on shift
        </span>
      </div>
      <p className="mt-4">
        <span className="text-crit">FIRING</span> [{round.severity}] <span className="text-sand-50">{round.alert}</span>
      </p>
      <p className="mt-1 font-sans text-[15px] leading-relaxed text-ink-100">{round.detail}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.14em] text-neon-cyan">Your first move?</p>
      <ul className="mt-2 space-y-2">
        {round.options.map((option, optionIndex) => {
          const isAnswer = optionIndex === round.answer;
          const state = !answered
            ? "border-white/20 hover:border-neon-cyan"
            : isAnswer
              ? "border-ok bg-ok/10 text-sand-50"
              : optionIndex === picked
                ? "border-crit bg-crit/10"
                : "border-white/10 opacity-60";
          return (
            <li key={option}>
              <button
                type="button"
                disabled={answered}
                onClick={() => {
                  setPicked(optionIndex);
                  if (isAnswer) setCorrect(correct + 1);
                }}
                className={`w-full border px-3 py-2.5 text-left font-sans text-sm leading-snug transition-colors ${state}`}
              >
                <span className="mono mr-2 text-ink-300">{String.fromCharCode(97 + optionIndex)})</span>
                {option}
                {answered && isAnswer ? <span className="sr-only"> (correct)</span> : null}
              </button>
            </li>
          );
        })}
      </ul>
      <div aria-live="polite">
        {answered ? (
          <div className="mt-4">
            <p className={picked === round.answer ? "text-ok" : "text-crit"}>
              {picked === round.answer ? "ACK · good call" : "ESCALATED · not quite"}
            </p>
            <p className="mt-1 font-sans text-sm leading-relaxed text-ink-100">{round.why}</p>
            <button
              type="button"
              autoFocus
              className="btn-hud btn-sm mt-4"
              onClick={() => {
                setPicked(null);
                setIndex(index + 1);
              }}
            >
              Next alert
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
