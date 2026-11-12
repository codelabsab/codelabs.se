# Stockholm On-Call: design system

The design system for codelabs.se. The site borrows the mood of open-world
game marketing (painted poster art, neon nights, HUD chrome) and applies it to
an engineering consultancy.

**The one rule: the game is the costume, engineering is the body.** Every game
element maps to a real engineering concept. If an element carries no
engineering meaning, cut it or make it carry some.

Review the components live at `/styleguide` (noindex, not in the sitemap).

---

## 1. Guardrails

These are mandatory. Check them before every release.

**Intellectual property and tone**

1. **Style homage, not a copy.** Never use the names, wordmarks, logo
   treatments, fonts, characters, screenshots, trailer frames or music of any
   existing game or studio. Generic genre vocabulary is fine: poster grid,
   neon, palms, sunset gradients, HUD, minimap, phone UI, missions, loading
   screens, character select.
2. **All characters are original** stylized portraits of the real Code Labs
   team, made from their own photos. Each person approves their portrait and
   consents to being shown this way before it is published. The current set
   is approved; any new or replaced portrait needs approval again.
3. **Client logos stay unaltered and legible**, in a neutral "Trusted by"
   strip. Plain white monochrome is the only treatment. Never place them in a
   "crime" or "incident" context.
4. **Tone:** playful and cinematic, never glorifying crime. Use *missions,
   crew, case files, operations, on call, the city*. Do not use *heist, steal,
   rob, gang*.

**Technical credibility**

5. **No fake facts.** Do not invent clients, numbers, uptime figures, MTTR
   improvements, certifications or testimonials. Decorative metrics must be
   obviously playful or labelled `demo`, and must never read as a result.
6. **Technical details are correct.** Every command, YAML block, log line,
   alert name and tip must be syntactically valid and plausible to a senior
   engineer. No buzzword soup.
7. **AI is shown honestly**, as engineering: evals, guardrails, observability,
   cost and latency, human-in-the-loop, governance. The motto *"This is not AI
   as theatre."* stays visible.

### Decorative elements and where they are labelled

| Element | Where | How it is marked |
|---|---|---|
| SLO / Budget HUD bars | Navbar | No numbers, `aria-hidden`, tooltip "Decorative HUD…" |
| HUD chips (`coffee_level 87%`…) | Home hero | Leading `demo hud` chip, `aria-hidden`, tooltip |
| Pager-level stars | Mission cards, case files | Labelled "Pager level", tooltip "playful rating" |
| Skill stars | Character cards | Tooltip "playful, not a performance review" |
| Log-stream rain | Dark sections | `aria-hidden`, 11% opacity, last line `demo=true` |
| Pager alert in the phone | Phone UI | "Incoming · demo alert" |
| Runbook "stage passed" lights | Home runbook | Describes the process, not a client result |
| Mini-game score "SLO kept" | On-call game | "(game score)" + note under the teaser |
| Console output | Terminal | Banner "Output is for fun"; `uptime` prints `# demo output, not an SLA` |
| Case-file outcomes | Case files | Redacted bars + "We do not publish client numbers" |

---

## 2. The game-to-engineering mapping

| Game element | Engineering meaning | Where |
|---|---|---|
| HUD (health, armor, minimap) | Health = SLO compliance, armor = error budget, minimap = service topology of the site | Navbar |
| Stars ★–★★★★★ | Pager level / incident severity | Mission cards, case files |
| Missions | Engagement types: platform build, pipeline rescue, reliability, AI rollout | Home `#services` |
| Mission briefing | Problem, loadout (stack), objective, reward (what you grow) | Mission cards |
| "MISSION PASSED" | Deploy succeeded / page acknowledged | Toast on CTAs and game end |
| Error screens | `404 Route not found` with a kubectl NotFound error; `500 CrashLoopBackOff` | `not-found.tsx`, `error.tsx` |
| Character classes | SRE, Platform, DevOps, AI, Full-Stack | `/team` |
| `kubectl describe` view | The same profile as valid YAML | `/team` |
| Skill trees | Real tool progressions | `/careers` |
| Perks | The real benefits | `/careers` |
| Radio stations | UI-only joke, no audio | Footer |
| Cheat codes | Console: press `` ` `` or `~` | Global |
| Loading-screen tips | Real engineering advice | Route transitions |
| Districts | Industries we have worked in | Home "The city" |
| Newswire | The blog | `/blog` |

---

## 3. Tokens

Defined in `src/app/globals.css` under `@theme inline`, so every token is also
a Tailwind utility (`bg-night-900`, `text-sunset-pink`, `border-ok/50`).

### Colour

| Token | Hex | Use |
|---|---|---|
| `night-900` | `#0B0714` | Base background |
| `night-800` | `#150D24` | Cards, bars |
| `night-700` | `#23163A` | Raised surfaces |
| `sunset-pink` | `#FF3E8A` | Primary accent, script, active state |
| `sunset-orange` | `#FF8A3D` | Secondary accent |
| `sunset-gold` | `#FFC94A` | Badges, ribbons, stars |
| `neon-cyan` | `#2EE6F0` | Kickers, links, HUD |
| `neon-violet` | `#8B5CF6` | Borders and fills only |
| `violet-soft` | `#BCA6FF` | Violet when used as text (AA on night) |
| `ocean-teal` | `#0E7C86` | Shadows in art |
| `sand-50` | `#FFF4E6` | Headings, strong text |
| `ink-100` | `#E9E3F5` | Body text |
| `ink-300` | `#B9AFD0` | Muted labels |

**Signal colours double as observability semantics. Use them like a dashboard,
never as decoration.**

| Token | Hex | Meaning |
|---|---|---|
| `ok` | `#3DDC97` | Healthy, passed, correct |
| `warn` | `#FFC94A` | Degraded, attention |
| `crit` | `#FF3E5F` | Paging, error, wrong |
| `info` | `#2EE6F0` | Informational |

Gradients: `--gradient-sunset` (`#2B0F4C → #B5247A → #FF8A3D → #FFC94A`,
top to bottom) and `--gradient-neon` (pink → orange, buttons).

**Contrast:** body text is `ink-100` or `sand-50` on night surfaces. Neon is
for accents and display text, never small body text. Never set text directly
on the sunset gradient; put it in a `night-900/90` panel.

`design.ts` exposes the tones in code: accent tones `pink | orange | cyan |
violet` and status tones `ok | warn | crit | info`, plus `severityTone(stars)`.

### Type

| Role | Font | Class | Notes |
|---|---|---|---|
| Display | Anton | `.display` | Uppercase, line-height 0.95. Poster titles only. |
| Script accent | Yellowtail | `.script` | One or two words per section, pink with glow, slightly rotated |
| Body | Manrope | default | 16px / 1.65. `.lede` is 18px. |
| HUD / terminal | JetBrains Mono | `.mono`, `.kicker` | Labels, metadata, tags, all terminal content |

Scale: hero `clamp(3.6rem, 11vw, 8.5rem)`; section title `text-5xl → 7xl`;
card title `text-3xl`; body `text-sm`/`text-base`; labels `11px` mono,
uppercase, `0.14em` tracking.

Fonts load through `next/font/google` with `display: swap` and the `latin` +
`latin-ext` subsets. The font variables are set on `<html>`.

### Texture

- **Grain:** inline SVG noise on `body::after`, 7% opacity, never interactive.
- **Halftone edges:** `.halftone-top` / `.halftone-bottom` on sections.
- **Scanlines:** `.scanlines` on cards, on hover and focus only.
- **Log rain:** `<LogRain />` behind dark sections.

---

## 4. Components

| Component | File | Notes |
|---|---|---|
| Buttons | `globals.css` | `.btn-neon` (primary pill), `.btn-hud` (clipped-corner outline), `.btn-sm` |
| Badge, ribbon, tag | `globals.css` | `.badge` release badge, `.ribbon` tilted title, `.tag` loadout tag |
| Stars, HudBar, TerminalFrame, LogRain, SectionHeading, Icon | `site/ui.tsx` | Stars always take an accessible `label` |
| Mission, case-file, character, perk and news cards | `site/cards.tsx` | Tech posts are "news articles", life posts are "social posts" |
| Ops HUD navbar + minimap | `site/chrome/OpsHud.tsx`, `Minimap.tsx` | Minimap follows route and home section |
| Phone UI, pause menu, console | `site/chrome/*` | Headless UI dialogs, lazy-loaded on first open |
| Toast, loading screen | `site/chrome/Overlays.tsx` | Fired with `emit("cl:toast", …)` from `chrome/events.ts` |
| Character select | `site/CharacterSelect.tsx` | Headless UI tabs; card grid below `md` |
| Skill trees | `site/SkillTrees.tsx` | SVG, one tree per class, described in `aria-label` |
| On-call mini-game | `site/game/OnCallGame.tsx` | Lazy chunk, loads when started |

Section backgrounds alternate: `.section-night`, `.section-dusk`,
`.section-glow`, and `.section-sunset` for closing CTAs.

---

## 5. Content

`src/app/components/site/site-data.ts` is the single content source.

The top of the file holds the facts (services, environments, selected work,
principles, benefits, career areas, team). The **Stockholm On-Call** block
below derives the game layer from those facts and adds only voice and
decoration:

| Fact | Game layer | Rendered in |
|---|---|---|
| `servicePillars` (+ reliability area) | `missions` | Home missions, Service JSON-LD, console |
| `environments` | `districts` | Home "The city" |
| `selectedWork` | `caseFiles` | Home case files |
| `howWeWorkPrinciples`, `consultingAdvantages` | used directly | Crew code, careers |
| new, grounded in existing copy | `runbook` | Home runbook |
| `teamMembers`, `teamGroups` | `crew`, `factions`, `crewYaml()` | Team, hero, console |
| `careerAreas` | `careerClasses` (skill trees) | Careers |
| `benefits`, `benefitThemes` | `perks` | Careers |
| `careerReasons`, `growthSupport`, `workScenarios` | used directly | Careers |
| `lifeSignals` and real posts | `sideQuests` | Careers |
| slug map | `techPostTags` | Newswire filters |

Copy voice: a short trailer-style headline, then the sincere, concrete
explanation underneath. SEO titles and descriptions stay plain and
keyword-rich; game copy lives in headings and visuals only.

---

## 6. Motion

| Motion | Rule |
|---|---|
| Scroll reveal | `.reveal`, CSS scroll-driven (`animation-timeline: view()`); content is simply visible where unsupported |
| Ken Burns | Hero panels only, 22s, alternating |
| Scanlines | Card hover / focus |
| Marquee | Logo strip and news ticker; pauses on hover and focus |
| Loading screen | Internal navigation only, max 600 ms |
| Toast | 3.6 s, `role="status"` |

**`prefers-reduced-motion: reduce` turns off** Ken Burns, scanlines, log rain,
marquee scrolling (it wraps instead), reveals and loading screens.

---

## 7. Accessibility

- AA contrast on all text. One `h1` per page.
- Focus ring: 2px `neon-cyan` outline with offset on every focusable element.
- Decorative HUD, log rain and map overlays are `aria-hidden`.
- Dialogs trap focus and close on Esc. The console is not in the tab order
  until opened.
- Star ratings and skill trees carry text alternatives.
- A skip link jumps to `#main`.

---

## 8. Image style guide

Art direction, the full prompt for every file, and the portrait approval
checklist live in `public/assets/stockholm-oncall/PROMPTS.md`.

- Painted, semi-realistic "airbrushed poster" look: strong rim light, warm
  skin tones, teal shadows, film grain, halftone in the darks.
- Every panel holds a real engineering prop or scene.
- Screens show abstract dashboards. Never fake readable code or logos.
- No weapons, violence, money piles or sexualized poses.
- Alt text says the image is an illustration and names what it shows.
- Real event photos are never regenerated; they only get a CSS grade.

All art is final. `scripts/generate-placeholders.mjs` lists every file in
`FINAL` and now only rebuilds the OG image; `PROMPTS.md` and
`docs/scene-image-prompts.md` hold the prompts for replacing one.
