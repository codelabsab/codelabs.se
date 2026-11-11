# Prompt: Remake codelabs.se as a cinematic open‑world game, built around AI Engineering, SRE, DevOps and Platform work

> Copy everything below the line into the executing LLM. It is self‑contained.

---

## 0. Your role and the core idea

You are a senior creative technologist: part art director, part Next.js/Tailwind engineer, and someone who has actually been on call. You are redesigning **codelabs.se**, the site of Code Labs AB, a small Stockholm engineering consultancy. Its work is **AI engineering and agentic workflows, SRE and observability, DevOps and CI/CD, platform engineering, cloud (Azure/GCP), Kubernetes, infrastructure as code, internal tooling and developer experience**.

The new look borrows the **mood of modern open‑world crime‑drama game marketing**, the style people link to the GTA VI trailers and key art: sun‑soaked painted posters, neon nights, saturated sunset gradients, grid collages of bold illustrated characters, a game‑UI HUD feel, a cinematic trailer pace.

**The key rule of this redesign: the game is the costume, engineering is the body.** Every game mechanic on the site maps to a real engineering concept:
- The HUD is an observability dashboard.
- Missions are incidents, migrations and rollouts.
- Character classes are engineering roles.
- The skill trees list real tools.
- "Wanted stars" become on‑call severity levels.

A senior SRE should scroll the site, grin at the in‑jokes and think *"these people actually know the craft"*. If a game element doesn't carry engineering meaning, cut it or make it carry some.

The site still has to work as a **real recruiting and sales site**. It targets two audiences:
1. **Senior engineers** (SRE, platform, DevOps, AI engineers) who are thinking about consulting.
2. **Engineering leaders** buying platform, reliability, delivery or AI‑adoption help.

## 1. Hard guardrails (read first)

**Intellectual property and tone**
1. **This is a style homage, not a copy.** Do not use the words "Grand Theft Auto", "GTA", "Rockstar", "Vice City", "Leonida" or "Los Santos". Do not use the "VI" logo treatment, the Rockstar star, the Pricedown font or lookalikes of the GTA wordmark. Do not use real game characters (e.g. Lucia, Jason), screenshots, trailer frames or the game's music.
2. **All characters are original.** They are stylized portraits of the **real Code Labs team**, made from their own photos in `public/assets/team/`. Each person approves their portrait (and consents to being shown this way) before it's published.
3. **Client logos** (Mojang, DICE, Klarna, SVT, ICA, TUI, NetEnt, Pricer, PriceRunner, Kindred, H&M, Zebware) stay **unaltered and legible**, in a neutral "Trusted by" strip (monochrome white is OK). Never put them in a "crime" or "incident" context.
4. **Tone:** playful and cinematic, never glorifying crime. Use "missions", "crew", "case files", "operations", "on call" and "the city". Avoid "heist", "steal", "rob" and "gang".

**Technical credibility**

5. **No fake facts.** Services, benefits, roles, posts and `contact@codelabs.se` keep their current meaning. Don't invent clients, numbers, uptime figures, MTTR improvements, certifications or testimonials. Any decorative metric (the HUD, dashboards, the terminal) is **clearly decorative**: make it obviously playful (e.g. `coffee_level 87%`, `pager_noise: low`) or label it `demo`. It must never look like a claimed result.
6. **Technical details must be correct.** Commands, YAML, PromQL, Terraform, log lines and Kubernetes objects shown anywhere must be **syntactically valid and plausible**. Senior engineers notice mistakes. No buzzword soup like "AI‑powered blockchain DevOps". No "10x engineer" clichés.
7. **AI is shown honestly.** Present it as engineering: evals, guardrails, observability, cost and latency, human‑in‑the‑loop, governance. Don't show it as magic. Keep the existing line *"This is not AI as theatre."* and make it a visible motto.

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
- `globals.css`: CSS variables for a calm, warm‑beige, muted‑green editorial look, plus utility classes (`site-card`, `site-card-dark`, `site-pill`, `site-kicker`, `site-button-primary/secondary`, `site-reveal*`, `section-white/blue/dark/mint`, `site-orb-*`, `stripe-sheen`, `hero-surface`).
- `components/site/design.ts`: `accentStyles` keyed by `AccentTone = "blue" | "violet" | "mint" | "coral"`.
- `DESIGN.md`: a leftover "Meta Store" design doc that does not match the site. **Replace it.**

**Content source of truth:** `src/app/components/site/site-data.ts`
- `servicePillars`: **Platform & Cloud** (Azure, GCP, Kubernetes, IaC), **DevOps & Developer Experience** (build systems, CI/CD, automation, testing, code quality), **Product, Tools & Integrations** (React, Next.js, Node.js, .NET, APIs, internal tools), **AI Rollout & Agentic Workflows** (enterprise AI adoption, governance, automation, agentic workflows: *"This is not AI as theatre."*).
- `environments`: Gaming and developer enablement (Mojang, DICE, build systems); Retail/e‑commerce/SaaS (Pricer, Adlibris, PriceRunner, Topgolf); Enterprise platform engineering (Tele2/TDC, NetEnt, Azure, Kubernetes, worker‑node optimization, pipelines); Media and public systems (SVT, ICA, reliability, observability); Product and web (Finflow, Nordiska Galleriet, Tupi).
- `workScenarios` and selected work: modernizing delivery, platform and cloud with real operational stakes, developer tooling, AI‑adjacent delivery, hackathon‑born projects.
- Principles: Hands‑on, Small‑company closeness, Low‑ego competence, Growth with structure. Plus culture items, benefits, career areas (Cloud platforms & Kubernetes, CI/CD & delivery engineering, Internal tooling & integrations, Reliability & observability, Modernization & full‑stack, AI & agentic workflows).
- Team (six people plus the office dogs; Angelica Törnros has left Code Labs, so remove her from `site-data.ts` and don't create a portrait):
  - Kami Gerami: Platform, cloud, and AI enablement
  - Pär Berge: Platform engineering and cloud migration
  - Tommy Malmqvist: Infrastructure, reliability, and modernization
  - Love Kempe Lundin: Full‑stack delivery and product implementation
  - Max Povalinsky: Senior SRE and observability
  - Mauricio Saez: DevOps and collaborative delivery
  - Mimmi & Penny: Office morale (the office dogs)

**Relevant blog content to surface:** KubeCon Amsterdam 2026, Workflow Manager, Rust OCPP, Elixir posts, Ansible/Docker orchestration, Foodify with ChatGPT, hackathons. These are proof of real engineering activity; feature them.

**Assets:** team photos, ≈130 event photos in `public/assets/blogg/`, videos in `public/assets/video/`, customer logos, `public/assets/logo/codelabs.svg` and `codelabs_white.svg`.

**Legacy code:** `src/app/components/{Home,Team,Careers,Intro,Graphics,Data}/*` and the root `/TeamData.tsx` appear unused. Verify with an import grep. Remove what's dead; don't build on it.

## 3. Creative direction

### 3.1 Concept: "CODE LABS: STOCKHOLM ON‑CALL"
The concept is an original open‑world game set in a neon‑and‑sunset **Stockholm that runs on infrastructure**. The city *is* a production system:
- The bridges are network links.
- The harbor is a container port (Kubernetes jokes write themselves).
- The metro map is a CI/CD pipeline.
- The skyline's lit windows are dashboards.
- The archipelago is a multi‑region cloud.

The crew are the engineers who keep the city running, ship new districts and bring AI into it without burning it down.

Tagline options (pick one; A/B test later):
- **"Keep the city running."**
- **"Stockholm never goes down. We make sure of it."**
- **"Production is the open world."**

### 3.2 The game‑to‑engineering mapping (use it everywhere)
| Game element | Engineering meaning | Where it appears |
|---|---|---|
| **HUD** (health, armor, minimap) | Observability: **Health = SLO compliance, Armor = error budget remaining**, minimap = service topology / site map | Navbar and hero |
| **Wanted stars ★–★★★★★** | **Incident severity / pager level** (SEV‑1 = five stars) | Mission cards and case files |
| **Missions** | Real engagement types: migration, incident response, platform build, pipeline rescue, AI rollout | Services |
| **Mission briefing** | Problem statement, constraints, "loadout" (stack), success criteria | Service and case pages |
| **"MISSION PASSED"** | Deploy succeeded / postmortem closed / SLO restored | Micro‑interactions |
| **"WASTED" / "BUSTED"** screens | 404 page = `HTTP 404 · Route not found · kubectl get page → NotFound`, 500 page = "Pod CrashLoopBackOff, our on‑call has been paged" | Error pages |
| **Character classes** | **SRE, Platform Engineer, DevOps Engineer, AI Engineer, Full‑Stack Engineer, Infrastructure Engineer** | Team page |
| **Skill trees** | Real tool progressions, e.g. `Docker → Kubernetes → Operators/CRDs → Multi‑cluster`, `Prompting → RAG → Evals → Agent orchestration → Governance` | Careers |
| **Perks** | Real benefits from `site-data.ts` | Careers |
| **Radio stations** | Optional playful ambient "stations": *Pager FM*, *Kube Radio*, *Lo‑Fi Logs* (UI only, no copyrighted audio) | Footer easter egg |
| **Cheat codes** | A hidden terminal: type `kubectl get crew` or `sudo join` | Easter egg |
| **Loading‑screen tips** | Real, useful engineering tips | Route transitions |
| **Districts on the map** | Industries and environments (Gaming District, Retail Strip, Enterprise Harbor, Media Quarter, Product Row) | Home "The city" section |
| **Newswire / in‑game social feed** | The blog: tech posts and crew life | Blog |

### 3.3 Visual language
- **Key art:** painted semi‑realistic illustration, the "airbrushed poster" look: strong rim light, saturated warm skin tones, teal shadows, film grain, halftone in the darks. Characters are confident, mid‑action, in a **multi‑panel poster grid** with thin black gutters. **Every panel holds a real engineering prop or scene:** terminal glow on faces, server racks, Grafana‑like dashboards (no real logos), on‑call phone with a pager alert, whiteboard with an architecture diagram, mechanical keyboard, laptop stickers made of generic shapes (no real brand stickers).
- **Palette (CSS tokens):**
  - Sunset: `--sunset-pink #FF3E8A`, `--sunset-orange #FF8A3D`, `--sunset-gold #FFC94A`
  - Neon: `--neon-cyan #2EE6F0`, `--neon-violet #8B5CF6`, `--ocean-teal #0E7C86`
  - Night: `--night-900 #0B0714` (base), `--night-800 #150D24`, `--night-700 #23163A`
  - Light: `--sand-50 #FFF4E6`, `--ink-100 #E9E3F5`
  - Signal colors that **double as observability semantics**: `--ok #3DDC97` (healthy), `--warn #FFC94A` (degraded), `--crit #FF3E5F` (paging), `--info #2EE6F0`. Use them consistently, like a dashboard.
  - Sunset gradient: `linear-gradient(180deg, #2B0F4C 0%, #B5247A 45%, #FF8A3D 75%, #FFC94A 100%)`
  - Keep WCAG AA. Neon is for accents and display text, never small body text.
- **Typography (`next/font/google`):**
  - Display: **Anton** or **Bebas Neue**, uppercase poster titles.
  - Script accent: **Yellowtail** or **Mr Dafoe**, one or two words per section.
  - Body: **Inter** or **Manrope**.
  - HUD/terminal: **JetBrains Mono**. Used a lot, because terminals and dashboards are our "game UI".
- **Textures:** SVG‑noise film grain, scanlines on hover, halftone section edges, light leaks on the hero, and a faint **log‑stream rain** (scrolling, dimmed, real‑looking structured log lines) behind dark sections.

### 3.4 Engineering‑native UI components (build these)
1. **Ops HUD (navbar):**
   - Left: the white Code Labs logo.
   - Center: nav items in mono uppercase.
   - Right: a **circular minimap** drawn as a service‑topology graph of the site's pages (nodes light up for the current route), plus two small bars, **SLO** (health, green) and **Error budget** (armor, cyan). They are decorative but hint at the meaning in a tooltip ("Our job: keep yours full").
   - CTA: **"Page the crew"**, which opens the phone UI.
2. **Phone UI (contact):** an in‑game smartphone overlay with apps:
   - **Contacts**: `contact@codelabs.se` via mailto.
   - **Pager**: a fake incoming alert, `SEV‑3 · Your platform needs love · Ack?` → leads to mailto.
   - **Jobs**: links to `/careers`.
   - **Social**: LinkedIn, Instagram, GitHub.
3. **Mission card:** title, severity stars, **briefing** (problem), **loadout** (tech tags), **objective**, **reward** (what you grow as an engineer), and a mono footer like `region: eu-north-1 · on-call: shared`.
4. **Case‑file dossier:** a postmortem‑style layout with **Context → Problem → What we did → Outcome → What we learned**. Use a blameless‑postmortem tone and redacted‑bar styling for anything confidential. Only qualitative outcomes unless real numbers exist in `site-data.ts`.
5. **Character card / character select:** portrait, name, class (role), skill stars per real competency, a "Special ability" line and a "Main quest" (role description), plus a **`kubectl describe` view** toggle that shows the same profile as YAML:
   ```yaml
   apiVersion: crew.codelabs.se/v1
   kind: Engineer
   metadata:
     name: max-povalinsky
     labels: { class: sre, city: stockholm }
   spec:
     focus: [observability, reliability, incident-response]
     onCall: true
   ```
   (Generate it from `site-data.ts`; it must be valid YAML.)
6. **Terminal easter egg:** press `` ` `` or `~` to open a game‑console‑style terminal. Supported commands:
   - `help`
   - `kubectl get crew` (lists the team as a table)
   - `kubectl get missions`
   - `kubectl logs careers`
   - `sudo join` (opens careers)
   - `ping codelabs` (opens contact)
   - `uptime` (a joke answer)
   - `exit`
   
   Make it keyboard accessible, keep it out of the tab order until opened, and lazy‑load it.
7. **Loading screens:** full‑bleed key art plus one **real tip**, e.g.:
   - "TIP: Alert on symptoms, not causes."
   - "TIP: Your error budget is a feature, spend it."
   - "TIP: Pin your base images."
   - "TIP: Evals before vibes. Measure your LLM pipeline."
   - "TIP: Runbooks are love letters to future you."
   - "TIP: If it isn't in Git, it doesn't exist."
   - "TIP: Rollbacks should be boring."
   
   Max 600 ms. Skipped under reduced motion.
8. **Incident mini‑game (optional, phase 6):** "Can you survive on‑call?", a 60‑second in‑browser game. Alerts pop up (`HighLatencyP99`, `PodOOMKilled`, `CertExpiringSoon`, `LLMTokenCostSpike`, `DiskPressure`) and you pick the right first action from three options. The score is shown as "SLO kept: 99.x%". The finish screen says: **"MISSION PASSED — want to do this for real? Join the crew."** Every answer must be technically sound. Keep it under 30 KB of JS, lazy‑loaded.
9. **Error pages:** a stylized "WASTED"‑like screen, but with our own wording: `404 · ROUTE NOT FOUND` with `Error from server (NotFound): pages "<path>" not found`, and a "Respawn at home" button. The 500 page: `CrashLoopBackOff — on-call has been paged`.

### 3.5 Copy voice
The voice is short, punchy and trailer‑like on top, with a sincere, concrete engineering explanation underneath (reuse the `site-data.ts` text, tightened). Use engineer‑native humor; never mock clients.

- **Hero:**
  - Headline: **"KEEP THE CITY RUNNING."**
  - Script accent: *Stockholm on‑call.*
  - Sub: *"Code Labs is a small crew of platform, SRE, DevOps and AI engineers. We build the cloud foundations, delivery pipelines and AI workflows that Stockholm's busiest systems run on."*
  - CTAs: **"Join the crew"** and **"Page the crew"**.
- **Services → "Choose your mission":**
  - **Platform & Cloud** → *Mission: Build the City* (Kubernetes, Azure, GCP, Terraform/IaC, GitOps).
  - **DevOps & DX** → *Mission: Ship Faster, Sleep Better* (CI/CD, build systems, test automation, code quality, developer flow).
  - **SRE & Observability** → *Mission: Keep the Lights On* (SLOs, alerting, incident response, observability, capacity, postmortems). Surface this as its own mission: it already exists in `environments`, the reliability career area and Max/Tommy's roles. Base its text on that existing content.
  - **AI Rollout & Agentic Workflows** → *Mission: Bring AI to the City, Safely* (rollout, governance, evals, agentic workflows, LLM observability and cost control; "not AI as theatre").
  - **Product, Tools & Integrations** → *Side quests that matter* (internal tools, APIs, React/Next.js, .NET, integrations).
- **Environments → "The city":** districts with context tags.
- **Selected work → "Case files"** (postmortem format).
- **Principles → "Crew code"**, plus a **"Runbook"** section on how an engagement works: *Recon → Briefing → Deploy → Operate → Handover*.
- **Careers → "Join the crew"**, with skill trees and perks.
- **Blog → "Newswire"**, with tech posts tagged `#kubernetes #elixir #rust #ai #devops` and life posts tagged `#crewlife`.

## 4. Image and character production plan

Use an image model that supports **image reference / character consistency** (GPT‑image, Midjourney `--cref`, Flux + IP‑Adapter/LoRA). Output WebP (plus AVIF if possible) to `public/assets/stockholm-oncall/` with the exact file names below. Keep source PNGs out of the repo.

### 4.1 Style anchor (prefix every prompt)
> *Original painted key‑art illustration for an open‑world crime‑drama video game poster, reimagined around software engineers keeping a city's infrastructure running. Semi‑realistic airbrushed style, dramatic golden‑hour rim lighting, saturated magenta/orange/gold sunset palette with teal shadows, neon cyan accents from screens and dashboards, subtle film grain and halftone, cinematic composition, confident expressions, high detail, set in a stylized Stockholm, Sweden.*

**Negative / avoid:** *logos, brand names, readable text, watermarks, real game characters, Roman numerals, weapons, guns, blood, drugs, police, money piles, sexualized poses, deformed hands, nonsense code glyphs on screens.* Screens show **abstract** dashboards, graphs and terminal blocks. Never fake readable code; add real readable UI in HTML on top if it's needed.

**Props library:** laptops with terminal glow, server racks with blinking LEDs, observability dashboards (latency graphs, heatmaps), on‑call phones showing an alert, whiteboards with architecture boxes and arrows, shipping containers at the harbor (the Kubernetes pun), cable bundles, headsets, coffee, conference lanyards, a GPU rig glowing for AI work, a "rubber duck" on a desk.

### 4.2 Crew portraits (one per team member)
Use each person's photo in `public/assets/team/` as the identity reference. Keep the likeness flattering and recognizable.

| File | Ref | Class | Scene |
|---|---|---|---|
| `crew-kami.webp` | `team/kami.jpeg` | **AI & Platform Engineer** | Rooftop over Södermalm at dusk. A holographic agent‑workflow graph (nodes and arrows) floats beside him, a laptop with a GPU‑cluster dashboard |
| `crew-paer.webp` | `team/paer.jpeg` | **Platform Engineer / Cloud Migration** | At Slussen beside a white electric SUV (no logos). Behind him, a stream of glowing containers moves from an old data center across a bridge into a cloud |
| `crew-tommy.webp` | `team/tommy.jpeg` | **Infrastructure & Modernization** | In a server aisle lit pink and cyan, cables over his shoulder, calm "prod is fixed" smile, a legacy rack being retired behind him |
| `crew-love.webp` | `team/love.jpeg` | **Full‑Stack Engineer** | In a neon Gamla Stan alley, holding a tablet with an abstract UI, API connection lines drawn in light around him |
| `crew-max.webp` | `team/max_povalinsky.jpg` | **SRE / Observability** | In a night control room with walls of latency and heatmap graphs, headset on, phone buzzing with a pager alert, unbothered |
| `crew-mauricio.webp` | `team/mauricio.jpeg` | **DevOps Engineer** | At the container harbor at sunset, conveyor pipelines of glowing build artifacts, green checkmark lights along the line |
| `crew-mimmi-penny.webp` | `team/mimmi-penny.jpg` | **Morale Officers** (secret characters) | The two office dogs in tiny sunglasses on a server cabinet, one wearing an on‑call pager collar |

For each person, output a **4:5 portrait (1600×2000)** and a **1:1 crop (1000×1000)**. The whole set uses identical grading so it reads as one cast.

### 4.3 Key art and scenes
| File | Size | Description |
|---|---|---|
| `key-art-grid.webp` | 2880×1620 | **Hero poster:** a 7‑panel grid: the six crew portraits plus a panel of Stockholm's skyline with every window glowing like dashboard tiles, and a big empty area for the headline |
| `key-art-grid-mobile.webp` | 1080×1920 | Vertical version |
| `city-sunset.webp` | 3360×1440 | Stockholm skyline at sunset, cheeky palms in the foreground, faint light lines connecting buildings like a network topology |
| `city-night-neon.webp` | 3360×1440 | The same view at night, light trails on the bridges styled like data packets |
| `mission-platform.webp` | 3:2 | The harbor as a container platform: cranes stacking glowing containers into neat clusters |
| `mission-devops.webp` | 3:2 | A highway interchange at night as a CI/CD pipeline: lanes labeled with shapes (no text), green and red lights like build status |
| `mission-sre.webp` | 3:2 | A lighthouse in the archipelago at night sweeping a beam over a dark sea of graphs; an engineer on watch |
| `mission-ai.webp` | 3:2 | An agent swarm of fireflies over the archipelago at dusk, flowing through a glowing gate (guardrails/evals) before reaching the city |
| `mission-tools.webp` | 3:2 | A neon workshop where engineers assemble tools from glowing modular blocks |
| `loading-1..5.webp` | 16:9 | Loading paintings: on‑call at 3 AM with city lights, KubeCon‑style conference hall, rooftop crew dinner, hackathon night, archipelago boat trip |
| `careers-hero.webp` | 16:9 | The crew squad‑walking toward the camera on Skeppsbron at golden hour, laptops and coffee, with the city's lights booting up behind them |
| `newswire-header.webp` | 21:9 | A news‑studio set with a wall of abstract dashboards (no readable text) |
| `error-404.webp` | 16:9 | A lone engineer on an empty bridge at night, lost, a map hologram glitching |
| `og-default.webp` | 1200×630 | A poster‑grid crop. The real Code Labs logo and title are composited in code, not by AI |
| `minimap.svg` | vector | A hand‑built simple Stockholm islands map in SVG, used as the base for the topology minimap |

### 4.4 Real photos
Don't regenerate event photos (KubeCon, hackathons, dinners). Give them a consistent CSS treatment instead: a sunset duotone on hover, grain, and a "phone camera" frame in the feed. They stay full color in post bodies. These are our **proof of life**, so show them proudly.

### 4.5 Alt text
Every image is described as an illustration and names its content, e.g. *"Illustrated portrait of Max Povalinsky, SRE, in a control room full of monitoring graphs."*

## 5. Page‑by‑page spec

### Global
- **Ops HUD navbar** (§3.4.1).
- Mobile **pause menu**: Resume / Missions / Case files / Crew / Join / Newswire / Page us.
- **Footer as a credits roll:** "A Code Labs production · Stockholm · Built with Next.js, deployed with care". Include the socials, email, links, the "Pager FM" radio easter egg and a terminal hint ("Press ~ for console").
- **Background:** `--night-900` with grain and the faint log‑stream rain on dark sections. Sections alternate between night scenes and sunset gradients.
- **Motion:** scroll‑reveal, hero parallax, scanline/glitch on card hover. All of it respects `prefers-reduced-motion`.

### `/`: Trailer and mission select
1. **Trailer hero:** `key-art-grid` with a slow Ken Burns pan per panel, the headline, the script accent, the sub line, two CTAs and a badge ("Now recruiting · SRE · Platform · AI engineers"). Optional: a muted loop from `video/*.mp4` with a sunset grade, lazy‑loaded and never blocking LCP.
2. **Trusted by:** the neutral client logo marquee.
3. **Choose your mission:** the five mission cards (§3.5).
4. **The city:** horizontal district map built from `environments`, styled like a game map with a topology overlay.
5. **Case files:** dossiers in postmortem format.
6. **Runbook:** how an engagement works (*Recon → Briefing → Deploy → Operate → Handover*), drawn as a pipeline with stage status lights.
7. **Crew code:** the principles plus consulting advantages ("more environments = better pattern recognition", framed as "XP from many maps").
8. **Meet the crew:** a teaser of four character cards → `/team`.
9. **Survive on‑call?** The optional incident mini‑game teaser.
10. **From the Newswire:** latest tech and life posts.
11. **Final CTA:** sunset panel. "Your next mission is waiting." Join the crew / Page the crew.

### `/team`: Character select
- A full‑screen select UI with thumbnails. The active character shows the big portrait, name, class, bio, skill stars, special ability and the **`kubectl describe` YAML toggle**. Keyboard navigable, with a grid fallback on mobile.
- `teamGroups` become **Factions**: *Platform & Cloud*, *Reliability & Delivery*, *Product & Crew Life* (Mimmi & Penny live here).
- Mimmi & Penny appear as **"Secret characters unlocked"**.
- Closing line: *"Serious engineering does not need to feel sterile."* (existing copy).

### `/careers`: Join the crew
- `careers-hero` squad walk. Headline: **"JOIN THE CREW."** Sub based on the existing *"A consulting career for engineers who want more range."*
- **Choose your class:** the career areas as classes (SRE, Platform, DevOps, AI Engineer, Full‑Stack/Modernization, Internal Tooling).
- **Skill trees:** an interactive SVG tree per class with real progressions (e.g. SRE: `Monitoring → SLOs & error budgets → Incident command → Chaos/resilience → Capacity & cost`; AI: `LLM APIs → RAG → Evals & guardrails → Agentic workflows → AI governance & rollout`). Node labels only; don't claim certifications we don't offer.
- **Perks:** the benefits grid with perk icons, facts exactly as in `site-data.ts` (wellness allowance, food benefit, pension, healthcare, parental pay, car leasing, upskilling and certifications…).
- **Side quests:** conferences (KubeCon), meetups, hackathons and internal projects, linked to the real blog posts.
- If a salary calculator exists, restyle it as the **"Earnings" screen** with the same logic.
- CTA → mailto, followed by a "MISSION PASSED · Application sent?" toast.

### `/blog`: Newswire
- `newswire-header` plus a **ticker** of the latest titles in a mono font.
- Filter chips: `#all #tech #ai #kubernetes #devops #crewlife`. Derive tags from frontmatter if it exists; otherwise classify by a slug/keyword map in code.
- Tech posts render as "news articles"; life posts render as "social posts" with photo frames.
- `/blog/[slug]`: readable dark article with `prose-invert`. Code blocks get a terminal‑window frame with traffic‑light dots and a filename tab. **Readability wins over the theme.**

## 6. Engineering requirements
- Keep Next.js App Router, TypeScript and Tailwind v4. Tokens go in `globals.css` (`@theme`). Rewrite `design.ts` with new tones (`"pink" | "orange" | "cyan" | "violet"`) plus status tones (`ok | warn | crit | info`), and update all call sites.
- **`site-data.ts` remains the single content source.** Extend the types: `class`, `skills: {name, stars}[]`, `specialAbility`, `portraitUrl`, `missionImage`, `severity`, `loadout`, `briefing`, `reward`, `skillTree`. Add an **SRE & Observability** pillar built only from existing facts. Split `home-page.tsx` into `components/site/home/*`.
- Build the terminal, phone UI, character select, pause menu and mini‑game as accessible client components (Headless UI Dialog/Tabs, focus trap, Esc to close, ARIA). Lazy‑load them with `next/dynamic`.
- `next/image` everywhere, with `priority` only on the hero. Hero LCP image under 250 KB on mobile.
- Fonts via `next/font/google`, `display: swap`, subsets `latin` and `latin-ext` (å/ä/ö).
- `prefers-reduced-motion`: no Ken Burns, glitch, log rain or loading screens.
- Accessibility: AA contrast, neon focus rings, one h1 per page, alt text, and decorative HUD elements marked `aria-hidden`.
- **SEO:** keep `buildPageMetadata`, JSON‑LD, `sitemap.ts` and `robots.ts`. Titles and descriptions stay keyword‑rich and *non‑game*: "Platform engineering, SRE, DevOps and AI engineering consultancy in Stockholm". Add `Service` JSON‑LD entries for each pillar. Set the new OG image. The game copy lives in headings and visuals, never in place of searchable descriptions.
- **Performance budget:** Lighthouse mobile ≥ 90 for all four categories on `/`, `/team`, `/careers` and `/blog`. No CLS from fonts or images. JS added for the eggs and mini‑game stays lazy and out of the initial bundle.
- Dependencies: `motion` (Framer Motion) is OK. Don't add others without a reason. No WebGL unless it's optional and lazy.
- Custom `not-found.tsx` and `error.tsx` per §3.4.9.
- Remove dead legacy components. Replace `DESIGN.md` with the **"Stockholm On‑Call" design system**: tokens, type scale, components, the mapping table from §3.2, motion rules, the image style guide and the guardrails from §1.
- `npm run build` and `npm run lint` must pass.

## 7. Execution phases (commit after each)
1. **Audit:** confirm §2, map every `site-data.ts` field to its new section, list dead code, and draft the extended data types.
2. **Design system:** tokens, fonts, textures, buttons, mission/dossier/character/perk/news cards, stars, HUD bars, terminal frame. Add a hidden `/styleguide` route (`noindex`, not in the sitemap).
3. **Content and copy:** extend `site-data.ts`, write the mission/case‑file/skill‑tree/tip copy, then do a **technical accuracy review** of every command, YAML block, alert name and tip.
4. **Assets:** generate images per §4. If you can't generate images, create **clearly labeled placeholders** at the exact names and sizes, plus `public/assets/stockholm-oncall/PROMPTS.md` with the full prompt for each file.
5. **Global chrome:** Ops HUD, pause menu, phone UI, terminal, footer credits, loading screens, error pages.
6. **Pages:** Home → Team → Careers → Blog list → Blog post. Then the optional incident mini‑game.
7. **Polish and QA:** reduced motion, an a11y pass, Lighthouse, metadata and JSON‑LD, `DESIGN.md`. Take screenshots at 390, 768, 1280 and 1920 px for every page. Report pass/fail for each guardrail in §1, including the credibility rules (no fake metrics, valid code).

## 8. Deliverables
- Code changes, committed per phase with clear messages.
- `public/assets/stockholm-oncall/` with images (or labeled placeholders) and `PROMPTS.md`.
- The new `DESIGN.md`.
- A short report: what changed, screenshots, Lighthouse scores, the guardrail checklist, a list of every decorative/demo metric and where it's labeled, and the portraits awaiting team approval.
