# Prompt: Remake codelabs.se in a cinematic "open‑world crime‑drama" style

> Copy everything below the line into the executing LLM. It is self‑contained.

---

## 0. Your role

You are a senior creative technologist: part art director, part Next.js/Tailwind engineer. You are redesigning **codelabs.se**, the site of Code Labs AB, a small Stockholm engineering consultancy (platform engineering, DevOps, cloud, Kubernetes, internal tooling, reliability, AI enablement). The new look borrows the **mood of modern open‑world crime‑drama game marketing**, the style people link to the GTA VI trailers and key art: sun‑soaked painted poster art, neon nights, saturated sunset gradients, grid collages of bold illustrated characters, a game‑UI HUD feel, a cinematic "loading screen" pace.

The site still has to work as a **real recruiting and sales site**. Under the costume it is a credible consultancy. Engineers should want to join, and clients should still trust it.

## 1. Hard guardrails (read first)

This is a **style homage, not a copy**. These rules are mandatory:

1. **No Rockstar or GTA intellectual property.** Do not use the words "Grand Theft Auto", "GTA", "Rockstar", "Vice City", "Leonida" or "Los Santos". Do not use the Roman numeral "VI" logo treatment, the Rockstar "R" star, the "Pricedown" font or lookalikes of the GTA wordmark. Do not use real game characters (e.g. Lucia, Jason), screenshots, trailer frames or the game's music.
2. **All characters are original.** They are stylized portraits of the **real Code Labs team**, made from their own team photos in `public/assets/team/`. Before publishing, the team approves each portrait (and consents to being shown this way).
3. **Generic genre vocabulary is fine and encouraged:** poster grid collage, painted realism, neon, palm silhouettes, sunset gradients, "wanted"‑style stars, HUD, minimap, phone UI, "mission" framing, loading screens, character‑select screens.
4. **Client logos** (Mojang, DICE, Klarna, SVT, ICA, TUI, NetEnt, Pricer, PriceRunner, Kindred, H&M, Zebware) must stay **unaltered and legible**. Never stylize, recolor in a misleading way or put them in "crime" contexts. Show them in a neutral "Known associates / Trusted by" strip with plain treatment (monochrome white is OK).
5. **Tone:** playful and cinematic, never glorifying crime. Use "missions", "crew", "case files", "operations" and "the city". Avoid "heist", "steal", "rob" and "gang", especially near client names.
6. **All factual content stays true.** Services, benefits, team roles, blog posts and the contact email (`contact@codelabs.se`) keep their current meaning. You restyle and re‑voice them. You do not invent claims, numbers, clients or testimonials.

## 2. What exists today (analysis of the repo)

**Stack:** Next.js 15.4 (App Router), React 19, TypeScript, Tailwind CSS v4 (CSS‑first via `@import 'tailwindcss'` in `src/app/globals.css`, plus a legacy `tailwind.config.js`), `@tailwindcss/typography`, `next/font/google` (Plus Jakarta Sans, Outfit, IBM Plex Mono), `gray-matter` and `markdown-to-jsx` for the blog, Swiper, Headless UI, Heroicons, `sharp`.

**Routes**
| Route | File | Renders |
|---|---|---|
| `/` | `src/app/page.tsx` | `components/site/home-page.tsx` (~700 lines) |
| `/careers` | `src/app/careers/page.tsx` | `components/site/careers-page.tsx` |
| `/team` | `src/app/team/page.tsx` | `components/site/team-page.tsx` |
| `/blog` | `src/app/blog/page.tsx` | lists `src/_posts/*.md` (≈30 posts, 2020–2026, Swedish and English) |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | markdown post |
| `robots.ts`, `sitemap.ts`, `seo.ts` | SEO helpers. **Keep them working.** |

**Layout:** `src/app/layout.tsx` (fonts, JSON‑LD Organization/WebSite, `<Navbar/>`, `<Footer/>`).

**Design layer**
- `src/app/globals.css`: CSS variables for a calm, warm‑beige, muted‑green "Scandinavian editorial" look (`--color-page #f3f0e8`, `--color-brand-blue #1d6b57`, etc.) and utility classes (`site-card`, `site-card-dark`, `site-pill`, `site-kicker`, `site-button-primary/secondary`, `site-reveal*`, `section-white/blue/dark/mint`, `site-orb-*`, `stripe-sheen`, `hero-surface`).
- `src/app/components/site/design.ts`: `accentStyles` keyed by `AccentTone = "blue" | "violet" | "mint" | "coral"`, rotated via `getToneByIndex`.
- `DESIGN.md`: a leftover "Meta Store" design doc that does not match the site. **Replace it** with the new design system doc.

**Content source of truth:** `src/app/components/site/site-data.ts`. It holds the nav items, client logos, `servicePillars` (Platform & Cloud, DevOps & DX, Product/Tools/Integrations, AI Rollout & Agentic Workflows), `environments`, `workScenarios`, selected work, principles (Hands‑on, Small‑company closeness, Low‑ego competence, Growth with structure), culture items, benefits (wellness allowance, food, healthcare, pension, car leasing, certifications…), career areas and team members:
- Kami Gerami: Platform, cloud, and AI enablement
- Pär Berge: Platform engineering and cloud migration
- Tommy Malmqvist: Infrastructure, reliability, and modernization
- Love Kempe Lundin: Full‑stack delivery and product implementation
- Max Povalinsky: Senior SRE and observability
- Angelica Törnros: Recruitment and people
- Mauricio Saez: DevOps and collaborative delivery
- Mimmi & Penny: Office morale (the office dogs)

Team groups for `/team`: "Platform, cloud, and modernization", "Reliability, delivery, and calmer production systems", "Product breadth and the human side of the company".

**Home sections today:** hero (headline "Build wider engineering judgment without disappearing into a giant consultancy." with the `entourage.jpeg` team photo), services (`#services`), client logo strip, dark "environments" block, consulting advantages, selected work (`#selected-work`), how we work (`#how-we-work`), culture/life section with recent "life" blog posts, closing CTA.

**Assets:** `public/assets/team/*` (team photos), `public/assets/blogg/*` (≈130 event photos: KubeCon Amsterdam 2026, Iceland, bowling, ping‑pong, shuffleboard, dinners, Ghana donation…), `public/assets/video/*.mp4` (grill, rally, iceland, waterfall), customer logos and testimonials, `public/assets/paint/*` (splash SVGs), `public/assets/logo/codelabs.svg` and `codelabs_white.svg`.

**Legacy/dead code:** `src/app/components/{Home,Team,Careers,Intro,Graphics,Data}/*` and `/TeamData.tsx` at the repo root seem to be pre‑redesign components. Verify with a grep for imports. Delete what's unused, or leave it alone, but don't build on it.

## 3. Creative direction

### 3.1 Concept: "CODE LABS: STOCKHOLM NIGHTS"
Present the company as the cast of an original open‑world game set in a stylized, sun‑and‑neon version of **Stockholm**: Slussen and Södermalm cliffs at golden hour, Gamla Stan under neon, the archipelago (skärgården) with speedboats at sunset, server‑room glow, rooftop dinners. This is our own world, not a fake Miami. The Stockholm twist makes it original and on‑brand. You can add a few palm trees for the vibe ("palms in Stockholm" is a fun, self‑aware joke), but keep the city recognizably Nordic.

The visitor should feel like they're watching a **game trailer, then browsing the in‑game menu**:
- Home = trailer and key art.
- Services = mission select.
- Selected work = case files.
- Team = character select.
- Careers = "Join the crew", with the benefits shown as character perks.
- Blog = in‑game news site / social feed ("Stockholm Nights Newswire").

### 3.2 Visual language
- **Key art style:** painted semi‑realistic illustration, the "airbrushed poster" look: strong rim light, saturated warm skin tones, teal shadows, film grain, slight halftone in the darks. Characters are confident, mid‑action, cropped tight in a **multi‑panel poster grid** (3×3 or asymmetric 5–7 panels separated by thin black gutters).
- **Palette (define as CSS tokens):**
  - `--sunset-pink #FF3E8A`, `--sunset-orange #FF8A3D`, `--sunset-gold #FFC94A`
  - `--neon-cyan #2EE6F0`, `--neon-violet #8B5CF6`, `--ocean-teal #0E7C86`
  - `--night-900 #0B0714` (base background), `--night-800 #150D24`, `--night-700 #23163A`
  - `--sand-50 #FFF4E6` (light text and paper), `--ink-100 #E9E3F5` (muted text)
  - Signature gradient: `linear-gradient(180deg, #2B0F4C 0%, #B5247A 45%, #FF8A3D 75%, #FFC94A 100%)` (the sunset sky)
  - Keep **WCAG AA**. Body text on `--night-900` uses `--sand-50` / `--ink-100`. Neon colors are for accents and display text only, never small body text.
- **Typography (Google Fonts via `next/font`):**
  - Display: **Anton** or **Bebas Neue**, condensed uppercase, tight tracking. Use it for the poster titles.
  - Script accent: **Yellowtail** or **Mr Dafoe**, for one or two words per section only (e.g. *Stockholm*, *crew*), in neon pink with a glow.
  - Body: **Inter** or **Manrope**.
  - HUD/mono: **JetBrains Mono** or **IBM Plex Mono**, for labels, stats and "mission" metadata.
- **Textures:** subtle film grain overlay (an SVG noise filter, not a big PNG), scanline or VHS shimmer on hover for cards, halftone dots on section edges, light leaks on the hero.
- **Motifs:**
  - "Wanted"‑style **star ratings**, reused as *seniority/skill stars* on character cards (playful, e.g. "Kubernetes ★★★★★").
  - A **minimap**: a circular stylized Stockholm map in the corner of the nav that highlights the current section/page.
  - A **phone UI**: the contact CTA opens an in‑game smartphone overlay with "Contacts → Code Labs" and the mailto link, LinkedIn, Instagram and GitHub.
  - **Loading screens**: route transitions show a full‑bleed key‑art panel, a tip line ("TIP: Pair programming doubles your stamina.") and a spinner. Max 600 ms, skipped under `prefers-reduced-motion`.
  - **"MISSION PASSED"** toast: a fun micro‑interaction on CTA clicks or at the bottom of a case file ("Respect +").
  - Big **tilted ribbon titles** and poster‑style **release badges** ("Now hiring · Stockholm · 2026").

### 3.3 Copy voice
Short, punchy, trailer‑like headlines. Underneath, keep the existing sincere, concrete explanation (reuse the current `site-data.ts` text, lightly tightened). Examples:
- Hero: **"WELCOME TO STOCKHOLM NIGHTS."** / Sub: *"A small crew of engineers taking on platform, cloud and DevOps missions across the city's biggest systems."* / CTAs: **"Join the crew"** (→ `/careers`) and **"Call the crew"** (opens the phone UI / `mailto:contact@codelabs.se`).
- Services → **"Choose your mission"**: four mission cards (one per `servicePillars` item). Each has a difficulty, a "loadout" (tech tags) and a "Reward" line (the `candidateFocus` text).
- Selected work → **"Case files"**: dossier cards with a redacted‑bar style, "Location: Gaming / Retail / Media…", "Objective" (challenge) and "Outcome" (contribution).
- How we work → **"Crew code"**: the four principles as tarot/poster cards.
- Client logos → **"Known associates"** (neutral treatment, see guardrail 4).
- Team → **"Select your character"**.
- Careers → **"Join the crew"**, with benefits as **"Perks"** and career areas as **"Skill trees"**.
- Blog → **"Newswire"**: post previews styled as an in‑game news site and social feed.

## 4. Image and character production plan

Generate assets with an image model that supports **image reference / character consistency** (e.g. GPT‑image, Midjourney `--cref`, Flux + IP‑Adapter/LoRA). Save the outputs as **WebP** (and AVIF if possible) under `public/assets/stockholm-nights/`, with file names exactly as listed. Keep the source PNGs out of the repo.

### 4.1 Global style anchor (prefix every prompt)
> *Original painted key‑art illustration for an open‑world crime‑drama video game poster, semi‑realistic airbrushed style, dramatic golden‑hour rim lighting, saturated sunset palette of magenta, orange and gold with teal shadows, subtle film grain and halftone, cinematic composition, confident expressions, high detail, 2020s game marketing aesthetic, set in a stylized Stockholm, Sweden.*

**Negative / avoid:** *logos, brand names, text, watermarks, real game characters, Roman numerals, weapons, guns, blood, drugs, police violence, money piles, sexualized poses, deformed hands.*

Engineering props replace the usual crime props: laptops, mechanical keyboards, server racks, terminal glow on faces, coffee cups, conference lanyards, headsets, a Tesla (Pär's), speedboats, electric scooters.

### 4.2 Character portraits (one per team member)
For each person in `site-data.ts` → `teamMembers`, use their photo in `public/assets/team/` as the face/identity reference. Keep the likeness recognizable and flattering.

| File | Reference | Scene / prop idea |
|---|---|---|
| `crew-kami.webp` | `team/kami.jpeg` | Rooftop over Södermalm at dusk, laptop with glowing AI/agent graphs, wind in jacket |
| `crew-paer.webp` | `team/paer.jpeg` | Leaning on a white electric SUV (no logos) at Slussen, cloud‑migration architecture projected in neon |
| `crew-tommy.webp` | `team/tommy.jpeg` | Server room lit pink and cyan, cables over shoulder, calm "I fixed prod" smile |
| `crew-love.webp` | `team/love.jpeg` | Neon‑lit Gamla Stan alley, holding a phone showing a slick React UI |
| `crew-max.webp` | `team/max_povalinsky.jpg` | Night control room full of observability dashboards, headset on |
| `crew-angelica.webp` | `team/angelica.jpeg` | Archipelago speedboat at sunset, clipboard/tablet, "recruiter" boss energy |
| `crew-mauricio.webp` | `team/mauricio.jpeg` | Pipeline conveyor of glowing containers at the harbor, collaborative pose |
| `crew-mimmi-penny.webp` | `team/mimmi-penny.jpg` | The two office dogs in tiny sunglasses on the back seat of a convertible: the comic‑relief panel |

Outputs per person: **portrait 4:5 (1600×2000)** for character select, plus a **square crop 1:1 (1000×1000)** for cards. Keep lighting, grain and color grade identical across the set so they read as one cast.

### 4.3 Key art and scenes
| File | Ratio / size | Description |
|---|---|---|
| `key-art-grid.webp` | 16:9, 2880×1620 | **Hero poster**: asymmetric 7‑panel grid with the crew portraits plus a Stockholm skyline panel, thin black gutters, a large empty area for the headline |
| `key-art-grid-mobile.webp` | 9:16, 1080×1920 | Vertical version of the poster for mobile |
| `city-sunset.webp` | 21:9, 3360×1440 | Stockholm skyline (Stadshuset, Riddarholmen, Söder cliffs) at sunset with a few cheeky palms in the foreground, water reflections |
| `city-night-neon.webp` | 21:9 | Same view at night, neon signage (no readable brand text), light trails |
| `mission-platform.webp` | 3:2 | Glowing Kubernetes‑like hex clusters floating over the harbor |
| `mission-devops.webp` | 3:2 | Neon CI/CD pipeline as a highway interchange at night |
| `mission-product.webp` | 3:2 | Giant holographic UI panels over Sergels torg |
| `mission-ai.webp` | 3:2 | An agent swarm as fireflies over the archipelago at dusk |
| `loading-1..4.webp` | 16:9 | Four loading‑screen paintings: archipelago boat, rooftop dinner, KubeCon‑style conference hall, server room |
| `careers-hero.webp` | 16:9 | The crew walking toward the camera on Skeppsbron at golden hour (the "squad walk") |
| `newswire-header.webp` | 21:9 | TV‑news studio set with a "Newswire" vibe (no readable text) |
| `og-default.webp` | 1200×630 | OG/Twitter image: poster grid plus space for the Code Labs logo (composite the real logo in code or Figma, not with AI) |
| `minimap.svg` | vector | Hand‑drawn simplified Stockholm map (islands, water), made in SVG by hand or by tracing, not AI |

### 4.4 Blog and event photos
Don't regenerate the real event photos. Give them a consistent **CSS/treatment pass** instead: duotone or sunset color grade on hover, film grain, a "polaroid / phone camera" frame for the social‑feed look. Keep the originals viewable at full color in the post body.

### 4.5 Alt text
Every generated image gets descriptive alt text that says it's an illustration, e.g. *"Illustrated portrait of Tommy Malmqvist in a neon‑lit server room."*

## 5. Page‑by‑page spec

### Global
- **Navbar:** a dark translucent HUD bar with the white Code Labs logo on the left; nav items in mono uppercase; a small **minimap** circle that highlights the current section; the **"Call the crew"** button opens the phone UI. Mobile: a full‑screen "pause menu" overlay (Resume / Missions / Case files / Crew / Join / Newswire / Contact).
- **Footer:** a "credits roll" style: "A Code Labs production · Stockholm", socials, email, sitemap links, a small "Press START to join" CTA.
- **Background:** `--night-900` with the grain overlay. Sections alternate between night scenes and sunset gradients.
- **Motion:** scroll‑reveal (keep the existing `site-reveal` idea and restyle it), parallax on the hero panels, glitch/scanline on card hover. **Everything respects `prefers-reduced-motion`.**

### `/` Home
1. **Trailer hero:** full‑viewport `key-art-grid` with a slow Ken Burns pan per panel. Huge Anton headline "WELCOME TO STOCKHOLM NIGHTS", a script accent "*Code Labs presents*", a sub line, two CTAs, and a poster‑style badge ("Now recruiting · Stockholm"). Optional: a muted autoplay loop built from `video/*.mp4` with a sunset color grade, behind a "Watch the trailer" button (lazy‑loaded; never blocks LCP).
2. **Known associates:** client logos marquee (neutral).
3. **Choose your mission:** the 4 service pillars as mission cards with scene image, difficulty stars, loadout tags and reward text.
4. **The city (environments):** horizontally scrolling "districts" (Gaming District, Retail Strip, Enterprise Harbor, Media Quarter, Product Row), each with its context tags.
5. **Case files:** selected work as dossiers.
6. **Crew code:** the principles plus consulting advantages.
7. **Meet the crew teaser:** 4 character cards linking to `/team`.
8. **Life in the city:** recent "life" blog posts in the Newswire/social‑feed style.
9. **Final CTA:** sunset panel, "Ready for your next mission?" with Join / Call.

### `/team`: Character select
- A full‑screen character‑select UI: a row of portrait thumbnails; the selected one shows a big portrait with name, role (class), a short bio (`summary` / `humanDetail`), skill stars and a "Special ability" line. Keyboard navigable (arrow keys plus focus states) and a plain grid fallback on mobile.
- Group sections from `teamGroups` become "Factions".
- Mimmi & Penny get a special "Secret characters unlocked" card.

### `/careers`: Join the crew
- Hero with `careers-hero` (the squad walk).
- "Why this city": consulting advantages.
- **Skill trees**: career areas as connected node diagrams (SVG).
- **Perks**: the benefits grid as perk icons with short descriptions. All benefit facts stay exactly as in `site-data.ts`.
- If the salary calculator exists in the current careers flow, restyle it as an in‑game "Earnings" screen with the same logic.
- Open roles / application CTA → mailto. End with "MISSION PASSED" when the CTA is clicked.

### `/blog`: Newswire
- Header `newswire-header`, a breaking‑news ticker with the latest post titles, posts as a mixed feed of news articles and social posts (based on whether the post has an image), filters by year/tag if cheap.
- `/blog/[slug]`: readable article layout. Prose on a dark surface with the `@tailwindcss/typography` `prose-invert` variant, restyled headings, images framed. **Readability beats theme here.**

## 6. Engineering requirements
- Keep Next.js App Router, TypeScript and Tailwind v4. Put all new tokens as CSS variables and `@theme` in `globals.css`. Rewrite `design.ts` so `AccentTone` becomes e.g. `"pink" | "orange" | "cyan" | "violet"`, and update all call sites.
- Keep `site-data.ts` as the single content source. Add fields (e.g. `stars`, `specialAbility`, `portraitUrl`, `missionImage`) instead of hard‑coding copy in components. Split `home-page.tsx` into section components under `components/site/home/`.
- Use `next/image` for everything, with `priority` only on the hero and correct `sizes`. Hero LCP image under 250 KB on mobile.
- Load fonts via `next/font/google` with `display: swap`, subset `latin` (plus `latin-ext` for å/ä/ö in names and Swedish posts).
- Build the phone UI, pause menu and character select as accessible client components: Headless UI Dialog / Tabs, focus trap, Esc to close, ARIA labels.
- Respect `prefers-reduced-motion` everywhere (no Ken Burns, no glitch, no loading screens).
- Accessibility: AA contrast, visible focus rings (neon outline), semantic headings (one h1 per page), alt text.
- SEO: keep `buildPageMetadata`, JSON‑LD, `sitemap.ts` and `robots.ts`. Update titles and descriptions so they still say "engineering consultancy in Stockholm" (the theme must not hurt search). Set `siteConfig.defaultOgImage` to the new OG image.
- Performance budget: Lighthouse mobile ≥ 90 for Performance, Accessibility, Best Practices and SEO on `/`, `/team`, `/careers` and `/blog`. No layout shift from fonts or images.
- Don't add heavy dependencies. Framer Motion (or `motion`) is acceptable for the character select and transitions; otherwise use CSS. No WebGL unless it's lazy‑loaded and optional.
- Remove unused legacy components (verify by import graph) and replace `DESIGN.md` with the new "Stockholm Nights" design system (tokens, type scale, components, motion rules, image style guide, guardrails from §1).
- `npm run build` and `npm run lint` must pass.

## 7. Execution phases (do them in order, commit after each)
1. **Audit:** confirm the analysis in §2, map every content field in `site-data.ts` to its new section, and list the dead code.
2. **Design system:** tokens, fonts, grain/halftone utilities, buttons (neon pill and "HUD" button), cards (mission, dossier, character, perk, news), star rating, ribbon title, badge. Build a hidden `/styleguide` route to review them (exclude it from the sitemap and set `noindex`).
3. **Assets:** generate images per §4 (or, if you can't generate images, create **clearly labeled placeholders** at the exact file names and sizes, plus a `public/assets/stockholm-nights/PROMPTS.md` with the full prompt for each file so a human can generate them).
4. **Global chrome:** navbar with minimap, pause menu, phone UI, footer credits, loading‑screen transition.
5. **Pages:** Home → Team → Careers → Blog list → Blog post.
6. **Polish:** motion, reduced‑motion, a11y pass, Lighthouse, OG images, metadata, `DESIGN.md`.
7. **QA:** screenshots at 390 px, 768 px, 1280 px and 1920 px for every page. Check the guardrails in §1 one by one and report each as pass/fail.

## 8. Deliverables
- The code changes, committed per phase with clear messages.
- `public/assets/stockholm-nights/` with images (or labeled placeholders) and `PROMPTS.md`.
- The new `DESIGN.md`.
- A short report: what changed, screenshots, Lighthouse scores, guardrail checklist results, and an open list of portraits waiting for team approval.

