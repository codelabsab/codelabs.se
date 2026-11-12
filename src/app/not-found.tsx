import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NotFoundPath from "@/app/components/site/NotFoundPath";
import { assetBase } from "@/app/components/site/site-data";
import { TerminalFrame } from "@/app/components/site/ui";

export const metadata: Metadata = {
  title: "404 · Route not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      <Image
        src={`${assetBase}/error-404.webp`}
        alt="Illustration of a lone engineer on an empty bridge at night, a map hologram glitching beside them."
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-night-900/60" />
      <div className="site-container py-20 text-center">
        <p className="kicker !text-crit">HTTP 404</p>
        <h1 className="display mt-3 text-[clamp(3.5rem,13vw,10rem)] leading-[0.88] !text-crit">Route not found</h1>
        <TerminalFrame title="kubectl" className="mx-auto mt-8 max-w-2xl text-left">
          <pre>
            <code>
              <span className="text-ok">$ </span>kubectl get page{"\n"}
              <NotFoundPath />
            </code>
          </pre>
        </TerminalFrame>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-neon">
            Respawn at home
          </Link>
          <Link href="/blog" className="btn-hud">
            Check the Newswire
          </Link>
        </div>
      </div>
    </main>
  );
}
