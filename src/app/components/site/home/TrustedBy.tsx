import Image from "next/image";
import { clientLogos } from "@/app/components/site/site-data";

/** Neutral client strip. Logos are unaltered apart from a plain white monochrome. */
export default function TrustedBy() {
  return (
    <section aria-labelledby="trusted-by" className="trusted border-y border-white/10 bg-night-800 py-8">
      <h2 id="trusted-by" className="kicker text-center !text-ink-100">
        Trusted by
      </h2>
      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <ul className="marquee items-center gap-x-14 gap-y-6 px-7">
          {[0, 1].map((copy) =>
            clientLogos.map((logo) => (
              <li key={`${copy}-${logo.name}`} data-dup={copy ? "" : undefined} aria-hidden={copy ? true : undefined} className="shrink-0">
                <Image
                  src={logo.src}
                  alt={copy ? "" : logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-6 w-auto opacity-80 brightness-0 invert"
                />
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  );
}
