import Image from "next/image";
import Link from "next/link";
import { PageCrewButton } from "@/app/components/site/chrome/triggers";
import { assetBase, crew, hudChips, tagline } from "@/app/components/site/site-data";
import { toneStyles } from "@/app/components/site/design";

const bySlug = (slug: string) => crew.find((member) => member.slug === slug)!;

// Asymmetric poster grid: 4 columns × 3 rows, thin black gutters.
const panels = [
  { member: bySlug("max-povalinsky"), area: "col-start-1 row-start-1 row-span-2", priority: true },
  { member: bySlug("tommy-malmqvist"), area: "col-start-2 row-start-1" },
  { member: null, area: "col-start-3 col-span-2 row-start-1", priority: true },
  { member: bySlug("mimmi-penny"), area: "col-start-2 row-start-2" },
  { member: bySlug("kami-gerami"), area: "col-start-3 row-start-2 row-span-2" },
  { member: bySlug("love-kempe-lundin"), area: "col-start-1 row-start-3" },
  { member: bySlug("mauricio-saez"), area: "col-start-2 row-start-3" },
  { member: bySlug("par-berge"), area: "col-start-4 row-start-2 row-span-2" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black lg:min-h-[calc(100svh-4rem)]">
      {/* Key-art poster */}
      <div className="grid aspect-[4/3] grid-cols-4 grid-rows-3 gap-1 bg-black p-1 sm:aspect-[16/9] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[58%] lg:gap-1.5 lg:p-1.5">
        {panels.map((panel, index) => {
          const tall = panel.area.includes("row-span-2");
          return (
            <div key={index} className={`relative overflow-hidden ${panel.area}`}>
              <Image
                src={panel.member ? (tall ? panel.member.portraitUrl : panel.member.squareUrl) : `${assetBase}/hero-city.webp`}
                alt={
                  panel.member
                    ? panel.member.portraitAlt
                    : "Illustration of the gabled houses of Gamla Stan at sunset, windows lit, with the two office dogs in sunglasses out front."
                }
                fill
                priority={panel.priority}
                sizes={panel.member ? "(min-width: 1024px) 15vw, 25vw" : "(min-width: 1024px) 29vw, 50vw"}
                className="kenburns object-cover object-top"
                style={{ animationDelay: `${index * -2.7}s`, "--kb-origin": `${30 + ((index * 17) % 40)}% 30%` } as React.CSSProperties}
              />
            </div>
          );
        })}
      </div>
      {/* Light leak + readability gradients */}
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-night-900 from-[40%] via-night-900/40 via-[47%] to-transparent to-[56%] lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-sunset-orange/30 mix-blend-screen blur-3xl" aria-hidden="true" />

      <div className="site-container relative bg-night-900 pb-16 pt-10 lg:flex lg:min-h-[calc(100svh-4rem)] lg:items-center lg:bg-transparent lg:py-20">
        {/* Stay inside the dark area left of the poster at every desktop width. */}
        <div className="max-w-2xl lg:max-w-[23rem] xl:max-w-md">
          <p className="badge">
            <span className="status-dot blink" />
            Now recruiting · SRE · Platform · AI engineers
          </p>
          <p className="script mt-8 -rotate-3 text-4xl sm:text-5xl">Stockholm on-call.</p>
          <h1 className="display mt-2 text-[clamp(3.6rem,11vw,8.5rem)] leading-[0.88] lg:text-[clamp(5rem,9vw,8rem)]">
            {tagline.replace(".", "")}
            <span className="text-sunset-pink">.</span>
          </h1>
          <p className="lede mt-6 max-w-xl">
            Code Labs is a small crew of platform, SRE, DevOps and AI engineers. We build the cloud foundations,
            delivery pipelines and AI workflows that Stockholm&apos;s busiest systems run on.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/careers" className="btn-neon">
              Join the crew
            </Link>
            <PageCrewButton />
          </div>
          <ul className="mt-10 flex flex-wrap gap-2" aria-hidden="true" title="Decorative demo values. Not real metrics.">
            <li className="mono border border-white/20 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-ink-300">demo hud</li>
            {hudChips.map((chip) => (
              <li key={chip.key} className="mono border border-white/10 bg-night-800/80 px-2 py-1 text-[11px] text-ink-100">
                {chip.key} <span className={toneStyles[chip.tone].text}>{chip.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
