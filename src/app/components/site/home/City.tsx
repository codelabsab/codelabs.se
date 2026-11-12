import Image from "next/image";
import { assetBase, districts } from "@/app/components/site/site-data";
import { toneStyles, toneVar } from "@/app/components/site/design";
import { SectionHeading } from "@/app/components/site/ui";

export default function City() {
  return (
    <section id="city" className="section section-dusk overflow-hidden">
      <div className="site-container">
        <SectionHeading
          kicker="Where we have worked · the map"
          title="The city"
          description="Every district is an industry we know from the inside. More environments means better pattern recognition."
        />

        {/* Game map with a topology overlay. Decorative: the cards below carry the content. */}
        <div className="reveal relative mt-12 hidden city-map aspect-[21/7] overflow-hidden border border-white/15 md:block" aria-hidden="true">
          <Image src={`${assetBase}/city-night-neon.webp`} alt="" fill sizes="(min-width: 1280px) 1250px, 100vw" className="object-cover opacity-60" />
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            <polyline
              points={districts.map((district) => `${district.x},${district.y}`).join(" ")}
              fill="none"
              stroke="var(--color-neon-cyan)"
              strokeWidth="0.5"
              strokeDasharray="1.5 1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {districts.map((district, index) => (
            <span
              key={district.district}
              className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
              style={{ left: `${district.x}%`, top: `${district.y}%` }}
            >
              <span className="status-dot blink mx-auto block h-3 w-3" style={{ "--dot": toneStyles[district.tone].color, animationDelay: `${index * 0.2}s` } as React.CSSProperties} />
              <span className="mono mt-2 block whitespace-nowrap bg-night-900/80 px-2 py-1 text-[11px] uppercase tracking-[0.12em] text-sand-50">
                {district.district}
              </span>
            </span>
          ))}
        </div>

        <ul
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-color:var(--color-sunset-pink)_transparent]"
          tabIndex={0}
          data-arrow-scroll
          aria-label="Districts, scroll horizontally"
        >
          {districts.map((district) => {
            const tone = toneStyles[district.tone];
            return (
              <li key={district.district} className="card w-[19rem] shrink-0 snap-start p-6 sm:w-[22rem]" style={toneVar(district.tone)}>
                <p className={`mono text-[11px] uppercase tracking-[0.14em] ${tone.text}`}>
                  <span className="status-dot mr-2" style={{ "--dot": tone.color } as React.CSSProperties} />
                  District
                </p>
                <h3 className="display mt-2 text-3xl">{district.district}</h3>
                <p className="mt-1 text-sm font-bold text-sand-50">{district.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-100">{district.description}</p>
                <p className="mt-4 flex flex-wrap gap-1.5">
                  {district.contexts.map((context) => (
                    <span key={context} className="tag">
                      {context}
                    </span>
                  ))}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
