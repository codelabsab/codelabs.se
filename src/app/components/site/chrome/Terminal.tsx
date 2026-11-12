"use client";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { emit } from "@/app/components/site/chrome/events";
import {
  careerReasons,
  crew,
  crewYaml,
  missions,
  terminalHelp,
} from "@/app/components/site/site-data";

type Line = { kind: "in" | "out"; text: string };

const table = (rows: string[][]) => {
  const widths = rows[0].map((_, column) => Math.max(...rows.map((row) => row[column].length)));
  return rows.map((row) => row.map((cell, column) => cell.padEnd(widths[column] + 3)).join("").trimEnd()).join("\n");
};

const banner: Line = {
  kind: "out",
  text: "codelabs console — type `help`. Output is for fun; the crew is real.",
};

export default function Terminal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>([banner]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  function run(raw: string): string | null {
    const command = raw.trim().replace(/\s+/g, " ");
    const lower = command.toLowerCase();
    if (lower === "help") {
      return table(terminalHelp.map(([name, description]) => [name, description]));
    }
    if (lower === "kubectl get crew") {
      return table([
        ["NAME", "CLASS", "FACTION", "STATUS"],
        ...crew.map((member) => [member.slug, member.classSlug, member.faction, member.secret ? "Napping" : "Running"]),
      ]);
    }
    if (lower.startsWith("kubectl describe crew")) {
      const name = lower.split(" ")[3];
      const member = crew.find((entry) => entry.slug === name || entry.slug.startsWith(`${name}-`));
      return member && name
        ? crewYaml(member)
        : `Error from server (NotFound): crew "${name ?? ""}" not found. Try: kubectl get crew`;
    }
    if (lower === "kubectl get missions") {
      return table([
        ["NAME", "PAGER-LEVEL", "SERVICE"],
        ...missions.map((mission) => [mission.id, "★".repeat(mission.severity), mission.title]),
      ]);
    }
    if (lower === "kubectl logs careers") {
      return [
        ...careerReasons.map((reason) => `level=info msg=${JSON.stringify(reason.title)} source=careers`),
        'level=info msg="hiring" roles="sre,platform,devops,ai" city=stockholm',
        "hint: run `sudo join`",
      ].join("\n");
    }
    if (lower === "sudo join") {
      router.push("/careers");
      onClose();
      return "[sudo] permission granted. Opening /careers ...";
    }
    if (lower === "ping codelabs") {
      setTimeout(() => emit("cl:phone"), 500);
      return "PING codelabs.se: 64 bytes, time=fast enough\n--- 1 packet transmitted, 1 received, 0% packet loss ---\nOpening contact ...";
    }
    if (lower === "uptime") {
      const now = new Date().toTimeString().slice(0, 8);
      return ` ${now} up since the last fika, 1 user, load average: calm, calm, calm\n# demo output, not an SLA`;
    }
    if (lower === "whoami") return "guest (future crew member?)";
    if (lower === "clear") {
      setLines([]);
      return null;
    }
    if (lower === "exit") {
      onClose();
      return null;
    }
    if (lower.startsWith("kubectl")) {
      return `error: unknown command. Supported: kubectl get crew | get missions | describe crew <name> | logs careers`;
    }
    return command ? `command not found: ${command.split(" ")[0]}. Type \`help\`.` : "";
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const input = value;
    setValue("");
    const output = run(input);
    if (input.trim().toLowerCase() === "clear") return;
    setLines((current) => [
      ...current,
      { kind: "in", text: input },
      ...(output ? [{ kind: "out" as const, text: output }] : []),
    ]);
  }

  return (
    <Dialog open={open} onClose={onClose} initialFocus={inputRef} className="relative z-50">
      <DialogBackdrop className="fade-in fixed inset-0 bg-night-900/70" />
      <div className="fixed inset-x-0 top-0 p-3 sm:p-6">
        <DialogPanel className="terminal fade-in mx-auto max-w-4xl">
          <div className="terminal-bar">
            <i aria-hidden="true" />
            <i aria-hidden="true" />
            <i aria-hidden="true" />
            <DialogTitle as="span">crew@stockholm: ~ (console)</DialogTitle>
            <button type="button" onClick={onClose} className="ml-auto px-2 text-ink-100 hover:text-sunset-pink">
              esc
            </button>
          </div>
          <div ref={scrollRef} className="terminal-body max-h-[55vh] overflow-y-auto" aria-live="polite">
            {lines.map((line, index) => (
              <pre key={index} className="!p-0 whitespace-pre-wrap">
                {line.kind === "in" ? <span className="text-ok">$ </span> : null}
                <span className={line.kind === "in" ? "text-sand-50" : "text-ink-100"}>{line.text}</span>
              </pre>
            ))}
            <form onSubmit={onSubmit} className="mt-1 flex items-center gap-2">
              <label htmlFor="console-input" className="text-ok">
                <span className="sr-only">Console command</span>
                <span aria-hidden="true">$</span>
              </label>
              <input
                id="console-input"
                ref={inputRef}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                className="mono w-full bg-transparent text-[13px] text-sand-50 caret-sunset-pink outline-none"
              />
            </form>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
