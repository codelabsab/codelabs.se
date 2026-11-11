"use client";

import Link from "next/link";
import { useEffect } from "react";
import { TerminalFrame } from "@/app/components/site/ui";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="section-glow flex min-h-[calc(100svh-4rem)] items-center">
      <div className="site-container py-20 text-center">
        <p className="kicker !text-crit">HTTP 500</p>
        <h1 className="display mt-3 text-[clamp(3rem,11vw,8rem)] leading-[0.9] !text-crit">CrashLoopBackOff</h1>
        <p className="lede mt-4">Something broke on our side. On-call has been paged.</p>
        <TerminalFrame title="kubectl get pods" className="mx-auto mt-8 max-w-2xl text-left">
          <pre>
            <code>
              {"NAME          READY   STATUS             RESTARTS\n"}
              <span className="text-crit">{"this-page     0/1     CrashLoopBackOff   5"}</span>
              {error.digest ? `\n# digest: ${error.digest}` : ""}
            </code>
          </pre>
        </TerminalFrame>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button type="button" className="btn-neon" onClick={reset}>
            Restart the pod
          </button>
          <Link href="/" className="btn-hud">
            Respawn at home
          </Link>
        </div>
      </div>
    </main>
  );
}
