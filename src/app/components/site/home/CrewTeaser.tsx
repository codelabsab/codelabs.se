import Image from "next/image";
import Link from "next/link";
import { crew } from "@/app/components/site/site-data";
import { toneStyles } from "@/app/components/site/design";
import { SectionHeading } from "@/app/components/site/ui";

/** Compact roster strip. The full character sheets live on /team. */
export default function CrewTeaser() {
  return (
    <section id="crew" className="section section-night halftone-top">
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="Team · character select" script="Meet the" title="Crew" />
          <Link href="/team" className="btn-hud reveal">
            Select your character
          </Link>
        </div>
        <ul className="reveal mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {crew
            .filter((member) => !member.secret)
            .map((member) => (
              <li key={member.slug}>
                <Link
                  href="/team"
                  className="group relative block aspect-[3/4] overflow-hidden border border-white/15 hover:border-sunset-pink focus-visible:border-sunset-pink"
                >
                  <Image
                    src={member.squareUrl}
                    alt={member.portraitAlt}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night-900 via-night-900/85 to-transparent px-3 pb-3 pt-10">
                    <span className={`mono block text-[10px] uppercase tracking-[0.12em] ${toneStyles[member.tone].text}`}>
                      {member.class}
                    </span>
                    <span className="display block text-xl leading-tight">{member.name}</span>
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
