# Stockholm On-Call: image prompts

**Status.** Final art is in place for: all crew portraits and squares except
Angelica, `key-art-grid.webp`, `hero-city.webp` (a crop of the key art, used as
the hero's city panel) and `careers-hero.webp`. Those names are listed in
`FINAL` in `scripts/generate-placeholders.mjs` and are never overwritten.

Everything else is still a **labelled placeholder** produced by
`node scripts/generate-placeholders.mjs` (procedural SVG scenes, and Angelica's
existing photo with a colour grade): `crew-angelica*.webp`,
`key-art-grid-mobile.webp`, `city-*.webp`, `mission-*.webp`, `loading-*.webp`,
`newswire-header.webp`, `error-404.webp`.

To ship more final art: generate each file with an image model that supports
**image reference / character consistency** (GPT-image, Midjourney `--cref`,
Flux + IP-Adapter/LoRA), export **WebP** at the listed size and overwrite the
file with the same name, then add that name to `FINAL` in the script so it is
never regenerated. No code changes are needed. Keep source PNGs out of
the repo.

**Before any crew portrait is published, the person in it approves the image
and consents to being shown this way.** See the checklist at the end.

## Style anchor (prefix every prompt)

> Original painted key-art illustration for an open-world crime-drama video game
> poster, reimagined around software engineers keeping a city's infrastructure
> running. Semi-realistic airbrushed style, dramatic golden-hour rim lighting,
> saturated magenta/orange/gold sunset palette with teal shadows, neon cyan
> accents from screens and dashboards, subtle film grain and halftone, cinematic
> composition, confident expressions, high detail, set in a stylized Stockholm,
> Sweden.

## Negative prompt (append to every prompt)

> logos, brand names, readable text, watermarks, real game characters, Roman
> numerals, weapons, guns, blood, drugs, police, money piles, sexualized poses,
> deformed hands, nonsense code glyphs on screens

Screens show **abstract** dashboards, graphs and terminal blocks. Never fake
readable code; real readable UI is added in HTML on top where needed.

**Props library:** laptops with terminal glow, server racks with blinking LEDs,
observability dashboards (latency graphs, heatmaps), on-call phones showing an
alert, whiteboards with architecture boxes and arrows, shipping containers at
the harbor, cable bundles, headsets, coffee, conference lanyards, a GPU rig
glowing for AI work, a rubber duck on a desk.

## Crew portraits

Use the reference photo as the identity reference. Keep the likeness flattering
and recognizable. Output **two files per person** with identical grading across
the whole set: a 4:5 portrait (1600×2000) and a 1:1 crop (1000×1000, `-square`).

| Files | Reference | Class | Scene prompt (after the style anchor) |
|---|---|---|---|
| `crew-kami.webp`, `crew-kami-square.webp` | `public/assets/team/kami.jpeg` | AI & Platform Engineer | Portrait of the referenced man on a rooftop over Södermalm at dusk. A holographic agent-workflow graph of nodes and arrows floats beside him; an open laptop shows an abstract GPU-cluster dashboard. Wind in his jacket. |
| `crew-paer.webp`, `crew-paer-square.webp` | `public/assets/team/paer.jpeg` | Platform Engineer / Cloud Migration | Portrait of the referenced man at Slussen beside a white electric SUV with no logos. Behind him a stream of glowing containers moves from an old data center across a bridge into a cloud. |
| `crew-tommy.webp`, `crew-tommy-square.webp` | `public/assets/team/tommy.jpeg` | Infrastructure & Modernization | Portrait of the referenced man in a server aisle lit pink and cyan, cables over his shoulder, a calm "prod is fixed" smile, a legacy rack being retired behind him. |
| `crew-love.webp`, `crew-love-square.webp` | `public/assets/team/love.jpeg` | Full-Stack Engineer | Portrait of the referenced man in a neon-lit Gamla Stan alley, holding a tablet with an abstract UI, API connection lines drawn in light around him. |
| `crew-max.webp`, `crew-max-square.webp` | `public/assets/team/max_povalinsky.jpg` | SRE / Observability | Portrait of the referenced man in a night control room with walls of abstract latency and heatmap graphs, headset on, phone buzzing with a pager alert, completely unbothered. |
| `crew-mauricio.webp`, `crew-mauricio-square.webp` | `public/assets/team/mauricio.jpeg` | DevOps Engineer | Portrait of the referenced man at the container harbor at sunset, conveyor pipelines of glowing build artifacts, green checkmark lights along the line, open collaborative pose. |
| `crew-angelica.webp`, `crew-angelica-square.webp` | `public/assets/team/angelica.jpeg` | People Lead / Recruiter | Portrait of the referenced woman on an archipelago speedboat at golden hour, holding a tablet showing an abstract crew roster, "assembling the team" energy. |
| `crew-mimmi-penny.webp`, `crew-mimmi-penny-square.webp` | `public/assets/team/mimmi-penny.jpg` | Morale Officers (secret characters) | The two referenced office dogs in tiny sunglasses sitting on a server cabinet, one wearing an on-call pager on its collar. Comic-relief panel. |

## Key art and scenes

| File | Size | Scene prompt (after the style anchor) |
|---|---|---|
| `key-art-grid.webp` | 2880×1620 | Hero poster: asymmetric 7-panel grid of the crew portraits plus one panel of Stockholm's skyline with every window glowing like dashboard tiles. Thin black gutters. Leave the left 40% empty and dark for a headline. |
| `key-art-grid-mobile.webp` | 1080×1920 | Vertical version of the same poster. Leave the top third empty and dark for a headline. |
| `city-sunset.webp` | 3360×1440 | Stockholm skyline (City Hall tower, Riddarholmen, the Söder cliffs) at sunset, a few cheeky palm trees in the foreground, water reflections, faint light lines connecting buildings like a network topology. |
| `city-night-neon.webp` | 3360×1440 | The same view at night, neon signage with no readable text, light trails on the bridges styled like data packets. |
| `mission-platform.webp` | 1800×1200 | The harbor as a container platform: cranes stacking glowing containers into neat clusters. |
| `mission-devops.webp` | 1800×1200 | A highway interchange at night as a CI/CD pipeline: lanes marked with shapes (no text), green and red lights like build status. |
| `mission-sre.webp` | 1800×1200 | A lighthouse in the archipelago at night sweeping its beam over a dark sea of abstract graphs; an engineer on watch. |
| `mission-ai.webp` | 1800×1200 | A swarm of fireflies (agents) over the archipelago at dusk, flowing through a glowing gate (guardrails and evals) before reaching the city. |
| `mission-tools.webp` | 1800×1200 | A neon workshop where engineers assemble tools from glowing modular blocks. |
| `loading-1.webp` | 1920×1080 | On call at 3 AM: an engineer at a window, phone glowing, city lights below. |
| `loading-2.webp` | 1920×1080 | A large cloud-native conference hall, huge abstract screens, crowd in silhouette. |
| `loading-3.webp` | 1920×1080 | Rooftop crew dinner at sunset, string lights, Stockholm behind. |
| `loading-4.webp` | 1920×1080 | Hackathon night: laptops glowing on a long table, whiteboard full of boxes and arrows. |
| `loading-5.webp` | 1920×1080 | Archipelago boat trip at golden hour. |
| `careers-hero.webp` | 1920×1080 | The crew walking toward the camera on Skeppsbron at golden hour with laptops and coffee, the city's lights booting up behind them. |
| `newswire-header.webp` | 2520×1080 | A TV-news studio set with a wall of abstract dashboards. No readable text. |
| `error-404.webp` | 1920×1080 | A lone engineer on an empty bridge at night, lost, a map hologram glitching beside them. |

## Not AI generated

| File | How it is made |
|---|---|
| `og-default.webp`, `og-default.jpg` | Composited in code by `scripts/generate-placeholders.mjs`: a crop of the poster grid plus the **real** Code Labs logo and title. Re-run the script after the final `key-art-grid.webp` lands. The JPEG twin is what `siteConfig.defaultOgImage` points at, for scrapers that do not read WebP. |
| `minimap.svg` | Hand-drawn simplified Stockholm islands. Mirrored in `src/app/components/site/chrome/Minimap.tsx`. |

Real event photos in `public/assets/blogg/` are never regenerated. They get a
CSS treatment only (sunset grade on hover, phone-camera frame in the feed) and
stay full colour inside posts.

## Alt text

Alt text lives in `site-data.ts` (`portraitAlt`, `imageAlt`) and in the page
components. It always says the image is an illustration and names its content,
e.g. *"Illustrated portrait of Max Povalinsky, SRE, in a control room full of
monitoring graphs."* Update it if a final scene differs from the prompt.

## Portrait approval checklist

- [ ] Kami Gerami
- [ ] Pär Berge
- [ ] Tommy Malmqvist
- [ ] Love Kempe Lundin
- [ ] Max Povalinsky
- [ ] Mauricio Saez
- [ ] Angelica Törnros
- [ ] Mimmi & Penny (owner approval)
