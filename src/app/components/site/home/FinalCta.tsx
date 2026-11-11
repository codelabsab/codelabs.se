import Image from "next/image";
import Link from "next/link";
import { PageCrewButton } from "@/app/components/site/chrome/triggers";
import { assetBase } from "@/app/components/site/site-data";

export default function FinalCta({
  title = "Your next mission is waiting.",
  body = "Whether you want to join a small crew that does real platform, SRE, DevOps and AI work, or you need one in your corner, start here.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section-sunset relative isolate overflow-hidden py-24 sm:py-32">
      <Image
        src={`${assetBase}/city-sunset.webp`}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-bottom"
      />
      <div className="site-container">
        <div className="reveal mx-auto max-w-3xl border border-white/15 bg-night-900/90 p-8 text-center backdrop-blur-sm sm:p-12">
          <p className="script -rotate-2 text-4xl">Ready?</p>
          <h2 className="display mt-2 text-5xl sm:text-7xl">{title}</h2>
          <p className="lede mx-auto mt-5 max-w-xl">{body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/careers" className="btn-neon">
              Join the crew
            </Link>
            <PageCrewButton />
          </div>
        </div>
      </div>
    </section>
  );
}
