import Image from "next/image";
import Link from "next/link";
import type { PostMetadata } from "@/app/components/Blog/PostMetadata";
import {
  caseFileOutcomeNote,
  type CaseFile,
  type CrewMember,
  type Mission,
  type Perk,
} from "@/app/components/site/site-data";
import { toneStyles, toneVar } from "@/app/components/site/design";
import { Icon, Redacted, Stars } from "@/app/components/site/ui";

/* ---------- Mission card ---------- */

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="mono text-[11px] uppercase tracking-[0.14em] text-ink-300">{label}</dt>
      <dd className="mt-1 text-sm leading-relaxed text-ink-100">{children}</dd>
    </div>
  );
}

export function MissionCard({ mission, wide = false }: { mission: Mission; wide?: boolean }) {
  const tone = toneStyles[mission.tone];
  return (
    <article
      className={`card card-hover scanlines reveal flex flex-col ${wide ? "lg:flex-row" : ""}`}
      style={toneVar(mission.tone)}
    >
      <div className={`relative shrink-0 overflow-hidden ${wide ? "aspect-[3/2] lg:aspect-auto lg:w-2/5" : "aspect-[3/2]"}`}>
        <Image
          src={mission.missionImage}
          alt={mission.imageAlt}
          fill
          sizes={wide ? "(min-width: 1024px) 34vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-800 via-transparent to-transparent" />
        <span className={`mono absolute left-3 top-3 border bg-night-900/80 px-2 py-1 text-[10px] uppercase tracking-[0.14em] ${tone.text} ${tone.border}`}>
          {mission.sideQuest ? "Side quest" : "Mission"}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className={`mono text-xs uppercase tracking-[0.14em] ${tone.text}`}>{mission.title}</p>
          <span className="flex items-center gap-2" title="Pager level: a playful difficulty rating, not a measured figure.">
            <span className="mono text-[10px] uppercase tracking-[0.14em] text-ink-300">Pager level</span>
            <Stars value={mission.severity} label={`Pager level ${mission.severity} of 5`} />
          </span>
        </div>
        <h3 className="display mt-3 text-3xl sm:text-4xl">{mission.missionTitle}</h3>
        <dl className="mt-5 flex-1 space-y-4">
          <Field label="Briefing">{mission.briefing}</Field>
          <div>
            <dt className="mono text-[11px] uppercase tracking-[0.14em] text-ink-300">Loadout</dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {mission.loadout.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </dd>
          </div>
          <Field label="Objective">{mission.objective}</Field>
          <Field label="Reward (what you grow)">{mission.reward}</Field>
        </dl>
        <p className="mono mt-5 border-t border-white/10 pt-3 text-[11px] text-ink-300">{mission.meta}</p>
      </div>
    </article>
  );
}

/* ---------- Case-file dossier (blameless postmortem format) ---------- */

export function CaseFileCard({ file }: { file: CaseFile }) {
  const rows: Array<[string, React.ReactNode]> = [
    ["Context", file.context],
    ["Problem", file.challenge],
    ["What we did", file.contribution],
    [
      "Outcome",
      <>
        <Redacted width="5rem" /> <Redacted width="8rem" /> <Redacted width="3rem" />
        <span className="mt-1 block text-xs text-ink-300">{caseFileOutcomeNote}</span>
      </>,
    ],
    ["What you would learn", file.candidateAngle],
  ];
  return (
    <article className="card reveal p-6 sm:p-7">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-white/20 pb-4">
        <p className="mono text-xs text-sunset-gold">
          {file.id} · {file.location}
        </p>
        <span className="flex items-center gap-2" title="Pager level: a playful rating, not a measured severity.">
          <span className="mono text-[10px] uppercase tracking-[0.14em] text-ink-300">Pager level</span>
          <Stars value={file.severity} label={`Pager level ${file.severity} of 5`} />
        </span>
      </header>
      <p className="kicker mt-5">{file.eyebrow} · blameless postmortem</p>
      <h3 className="mt-2 text-xl font-extrabold leading-snug text-sand-50 sm:text-2xl">{file.title}</h3>
      <dl className="mt-5 space-y-4">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
            <dt className="mono pt-0.5 text-[11px] uppercase tracking-[0.14em] text-neon-cyan">{label}</dt>
            <dd className="text-sm leading-relaxed text-ink-100">{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

/* ---------- Character card ---------- */

export function SkillStars({ member }: { member: CrewMember }) {
  return (
    <ul className="space-y-1.5" title="Skill stars are playful, not a performance review.">
      {member.skills.map((skill) => (
        <li key={skill.name} className="flex items-center justify-between gap-4">
          <span className="mono text-xs text-ink-100">{skill.name}</span>
          <Stars value={skill.stars} tone="warn" label={`${skill.name}: ${skill.stars} of 5 stars`} />
        </li>
      ))}
    </ul>
  );
}

export function CharacterCard({ member, detailed = false }: { member: CrewMember; detailed?: boolean }) {
  const tone = toneStyles[member.tone];
  return (
    <article className="card card-hover scanlines reveal flex h-full flex-col" style={toneVar(member.tone)}>
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={member.portraitUrl}
          alt={member.portraitAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-800 via-night-800/10 to-transparent" />
        {member.secret ? (
          <span className="badge absolute left-3 top-3">Secret characters unlocked</span>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className={`mono text-[11px] uppercase tracking-[0.14em] ${tone.text}`}>{member.class}</p>
          <h3 className="display mt-1 text-3xl">{member.name}</h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <p className="text-sm leading-relaxed text-ink-100">
          <span className="mono block text-[11px] uppercase tracking-[0.14em] text-ink-300">Main quest</span>
          {member.role}
        </p>
        {detailed ? <p className="text-sm leading-relaxed text-ink-100">{member.summary}</p> : null}
        <SkillStars member={member} />
        <p className="mt-auto border-t border-white/10 pt-3 text-sm text-sand-50">
          <span className="mono block text-[11px] uppercase tracking-[0.14em] text-sunset-gold">Special ability</span>
          {member.specialAbility}
        </p>
      </div>
    </article>
  );
}

/* ---------- Perk card ---------- */

export function PerkCard({ perk }: { perk: Perk }) {
  return (
    <article className="card card-hover reveal flex gap-4 p-5">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-sunset-gold/60 bg-sunset-gold/10 text-sunset-gold">
        <Icon name={perk.icon} />
      </span>
      <div>
        <p className="mono text-[10px] uppercase tracking-[0.14em] text-ok">Perk unlocked</p>
        <h3 className="mt-1 font-extrabold text-sand-50">{perk.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-100">{perk.description}</p>
      </div>
    </article>
  );
}

/* ---------- Newswire cards ---------- */

const authorAvatar = (author: string) => `/assets/team/${author.split(" ")[0]?.toLowerCase()}.jpeg`;

export function Tags({ tags }: { tags: string[] }) {
  return (
    <p className="mono flex flex-wrap gap-x-2 text-xs text-neon-cyan">
      {tags.map((tag) => (
        <span key={tag}>#{tag}</span>
      ))}
    </p>
  );
}

/** Tech posts read as news articles; life posts as social posts in a phone-camera frame. */
export function NewsCard({ post, priority = false }: { post: PostMetadata; priority?: boolean }) {
  if (post.kind === "tech") {
    return (
      <article className="card card-hover group flex h-full flex-col" style={toneVar("cyan")}>
        <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.og_image}
              alt=""
              fill
              priority={priority}
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="photo-grade object-cover"
            />
            <span className="mono absolute left-0 top-3 bg-crit px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-night-900">
              Tech desk
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <p className="mono text-[11px] text-ink-300">
              <time dateTime={post.date}>{post.date}</time> · {post.author}
            </p>
            <h3 className="mt-2 text-xl font-extrabold leading-snug text-sand-50 group-hover:text-neon-cyan">
              {post.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-100">{post.description}</p>
            <div className="mt-4">
              <Tags tags={post.tags} />
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="card card-hover group flex h-full flex-col" style={toneVar("pink")}>
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col p-4">
        <div className="flex items-center gap-3">
          <Image
            src={authorAvatar(post.author)}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full border border-sunset-pink/60 object-cover"
          />
          <p className="text-sm">
            <span className="block font-bold text-sand-50">{post.author}</span>
            <span className="mono text-[11px] text-ink-300">
              @codelabs · <time dateTime={post.date}>{post.date}</time>
            </span>
          </p>
        </div>
        <div className="relative mt-4 aspect-square overflow-hidden rounded-sm border-[6px] border-sand-50 bg-sand-50">
          <Image
            src={post.og_image}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 92vw"
            className="photo-grade object-cover"
          />
        </div>
        <h3 className="mt-4 text-lg font-extrabold leading-snug text-sand-50 group-hover:text-sunset-pink">
          {post.title}
        </h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-100">{post.description}</p>
        <div className="mt-3">
          <Tags tags={post.tags} />
        </div>
      </Link>
    </article>
  );
}
