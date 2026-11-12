import type { Metadata } from "next";
import getPostMetadata from "@/app/components/Blog/getPostMetadata";
import { CaseFileCard, CharacterCard, MissionCard, NewsCard, PerkCard } from "@/app/components/site/cards";
import { PageCrewButton, TerminalButton } from "@/app/components/site/chrome/triggers";
import { caseFiles, crew, crewYaml, missions, perks } from "@/app/components/site/site-data";
import { toneStyles, type Tone } from "@/app/components/site/design";
import { HudBar, SectionHeading, Stars, TerminalFrame } from "@/app/components/site/ui";

// Internal review route: not in the sitemap, not indexed.
export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
};

const swatches = [
  ["night-900", "#0B0714"],
  ["night-800", "#150D24"],
  ["night-700", "#23163A"],
  ["sunset-pink", "#FF3E8A"],
  ["sunset-orange", "#FF8A3D"],
  ["sunset-gold", "#FFC94A"],
  ["neon-cyan", "#2EE6F0"],
  ["neon-violet", "#8B5CF6"],
  ["ocean-teal", "#0E7C86"],
  ["sand-50", "#FFF4E6"],
  ["ink-100", "#E9E3F5"],
  ["ok", "#3DDC97"],
  ["warn", "#FFC94A"],
  ["crit", "#FF3E5F"],
  ["info", "#2EE6F0"],
];

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-white/10 py-12">
      <h2 className="kicker mb-6">{title}</h2>
      {children}
    </section>
  );
}

export default function Styleguide() {
  const posts = getPostMetadata();
  const tech = posts.find((post) => post.kind === "tech")!;
  const life = posts.find((post) => post.kind === "life")!;
  return (
    <main className="site-container py-16">
      <SectionHeading
        as="h1"
        kicker="Internal · noindex"
        script="Stockholm on-call"
        title="Styleguide"
        description="Tokens and components of the design system. The written spec lives in DESIGN.md."
      />

      <Block title="Colour tokens">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {swatches.map(([name, hex]) => (
            <li key={name} className="border border-white/15">
              <span className="block h-16" style={{ background: hex }} />
              <span className="mono block p-2 text-[11px] text-ink-100">
                --color-{name}
                <br />
                {hex}
              </span>
            </li>
          ))}
        </ul>
        <div className="section-sunset mt-4 h-24 border border-white/15" role="img" aria-label="Sunset gradient" />
      </Block>

      <Block title="Type">
        <p className="display text-7xl">Anton display</p>
        <p className="script mt-4 text-5xl">Yellowtail accent</p>
        <p className="lede mt-4">Manrope body. Sincere, concrete engineering copy sits under every punchy headline.</p>
        <p className="mono mt-4 text-sm">JetBrains Mono · labels, HUD, terminals · kubectl get crew</p>
      </Block>

      <Block title="Buttons, badge, ribbon, tags">
        <div className="flex flex-wrap items-center gap-4">
          <a href="#" className="btn-neon">
            Neon pill
          </a>
          <PageCrewButton />
          <a href="#" className="btn-neon btn-sm">
            Small
          </a>
          <TerminalButton className="btn-hud btn-sm">Open console</TerminalButton>
          <span className="badge">
            <span className="status-dot blink" />
            Release badge
          </span>
          <span className="tag">loadout-tag</span>
          <span className="ribbon text-2xl">Ribbon title</span>
        </div>
      </Block>

      <Block title="Stars (pager level) and HUD bars (decorative)">
        <div className="flex flex-wrap items-center gap-8">
          {[1, 3, 5].map((value) => (
            <Stars key={value} value={value} label={`Pager level ${value} of 5`} />
          ))}
          <HudBar label="SLO" fill={96} tone="ok" />
          <HudBar label="Budget" fill={78} tone="info" />
          {(Object.keys(toneStyles) as Tone[]).map((tone) => (
            <span key={tone} className={`mono text-xs ${toneStyles[tone].text}`}>
              <span className="status-dot mr-2" style={{ "--dot": toneStyles[tone].color } as React.CSSProperties} />
              {tone}
            </span>
          ))}
        </div>
      </Block>

      <Block title="Terminal frame">
        <TerminalFrame title="kubectl get crew max-povalinsky -o yaml" className="max-w-2xl">
          <pre>
            <code>{crewYaml(crew.find((member) => member.slug === "max-povalinsky")!)}</code>
          </pre>
        </TerminalFrame>
      </Block>

      <Block title="Mission card">
        <div className="space-y-6">
          <MissionCard mission={missions[2]} />
          <MissionCard mission={missions[3]} reverse />
        </div>
      </Block>

      <Block title="Case-file dossier">
        <div className="max-w-3xl">
          <CaseFileCard file={caseFiles[0]} />
        </div>
      </Block>

      <Block title="Character, perk and news cards">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CharacterCard member={crew[4]} />
          <NewsCard post={tech} />
          <NewsCard post={life} />
          <div className="space-y-4">
            <PerkCard perk={perks[3]} />
            <PerkCard perk={perks[9]} />
          </div>
        </div>
      </Block>
    </main>
  );
}
