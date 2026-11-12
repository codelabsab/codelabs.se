# Stockholm On-Call: copy-paste prompts for the scene art

**All of these images have now been generated and are in place.** The prompts
are kept for regenerating or replacing one. The mission images were delivered
in portrait (3:4) and the cards are built for that, so ask for 3:4 there, not
the 3:2 written in the blocks.

These were the images on this branch that were labelled placeholders. Each
block is **complete on its own**: paste one block into the image model
(Gemini, GPT-image, Midjourney, Flux) and generate. Do not mix blocks.

The style wording matches `docs/crew-image-prompts.md`, so the scenes sit next
to the crew portraits as one set.

## How to use

1. Paste one block and ask for the listed **aspect ratio**.
2. **Attach one finished image as a style reference** so the look matches:
   `public/assets/stockholm-oncall/key-art-grid.webp` works well. Tell the
   model: *"Match the illustration style of the attached image. Do not copy
   its people or layout."* Only ever attach our own images, never game art.
3. Export as **WebP** and save it at the path in the block, overwriting the
   placeholder. Keep the file name exactly as written.
4. Any size at or above the listed size is fine as long as the aspect ratio is
   right. The listed size is what the site serves.
5. Add the file name to the `FINAL` list at the top of
   `scripts/generate-placeholders.mjs`. Otherwise the next run of that script
   overwrites your image with a placeholder again.

Models without a negative-prompt field (Gemini, GPT-image) read the `Avoid:`
line inside the prompt. For Midjourney, move that line after `--no`.

**People in these scenes are anonymous** (from behind or in silhouette) on
purpose. A recognizable team member would need their approval, like the
portraits did.

If a result contains readable text, a logo or a recognizable real person or
game character, regenerate it.

## Checklist

| Done | File | Ratio | Size |
|---|---|---|---|
| [x] | `mission-platform.webp` | 3:2 | 1800×1200 |
| [x] | `mission-devops.webp` | 3:2 | 1800×1200 |
| [x] | `mission-sre.webp` | 3:2 | 1800×1200 |
| [x] | `mission-ai.webp` | 3:2 | 1800×1200 |
| [x] | `mission-tools.webp` | 3:2 | 1800×1200 |
| [x] | `city-sunset.webp` | 21:9 | 3360×1440 |
| [x] | `city-night-neon.webp` | 21:9 | 3360×1440 |
| [x] | `loading-1.webp` | 16:9 | 1920×1080 |
| [x] | `loading-2.webp` | 16:9 | 1920×1080 |
| [x] | `loading-3.webp` | 16:9 | 1920×1080 |
| [x] | `loading-4.webp` | 16:9 | 1920×1080 |
| [x] | `loading-5.webp` | 16:9 | 1920×1080 |
| [x] | `newswire-header.webp` | 21:9 | 2520×1080 |
| [x] | `error-404.webp` | 16:9 | 1920×1080 |
| [x] | `key-art-grid-mobile.webp` (optional) | 9:16 | 1080×1920 |

---

## Missions (home page, "Choose your mission")

Shown at the top of each mission card. A small tag sits in the top-left corner and the bottom edge fades into the card, so keep the subject in the middle band.

### `mission-platform.webp`

**Save to:** `public/assets/stockholm-oncall/mission-platform.webp` · **Ratio:** 3:2 · **Size:** 1800×1200

```
Original environment key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture in the darks.

Lighting: golden hour. Sky gradient from deep violet at the top through magenta and orange to gold at the horizon, teal shadows, neon cyan glow from screens and lights.

Scene: Stockholm's harbor reimagined as a container platform. Tall gantry cranes stack glowing shipping containers into neat, orderly clusters of three and five on the quay, each container softly lit from within in cyan, magenta and gold. One container hangs mid-air from a crane. Calm water in the foreground reflects the lights; the Stockholm skyline with its city-hall tower and church spires sits small on the horizon.

Composition: wide shot, the container clusters centered, cranes framing left and right. Top-left corner and bottom 20% calm and uncluttered.

Set in a stylized Stockholm, Sweden. Aspect ratio 3:2. No text anywhere.

Avoid: logos, brand names, readable text, letters, numbers, signage with words, watermark, signature, recognizable real people, existing video game characters, Roman numerals, weapons, blood, drugs, police, money, cigarettes, nonsense code glyphs on screens, photorealistic photo look. Any screen shows only abstract charts, bars and blocks. Any person is an anonymous figure seen from behind or in silhouette.
```

### `mission-devops.webp`

**Save to:** `public/assets/stockholm-oncall/mission-devops.webp` · **Ratio:** 3:2 · **Size:** 1800×1200

```
Original environment key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture in the darks.

Lighting: night. Deep violet-black sky, magenta and cyan neon as the main light sources, teal shadows, small warm gold window lights.

Scene: a multi-level highway interchange at night seen from above at a three-quarter angle, drawn as a delivery pipeline. Light trails flow along the lanes in one direction, passing through a series of glowing gate arches. Most gates glow green, one glows red with the traffic behind it queued up. Lane markings are simple shapes (circles, triangles, squares), never letters. Stockholm rooftops and water in the dark distance.

Composition: the interchange sweeps from bottom-left to top-right, the red gate near the center. Top-left corner and bottom 20% calm.

Set in a stylized Stockholm, Sweden. Aspect ratio 3:2. No text anywhere.

Avoid: logos, brand names, readable text, letters, numbers, signage with words, watermark, signature, recognizable real people, existing video game characters, Roman numerals, weapons, blood, drugs, police, money, cigarettes, nonsense code glyphs on screens, photorealistic photo look. Any screen shows only abstract charts, bars and blocks. Any person is an anonymous figure seen from behind or in silhouette.
```

### `mission-sre.webp`

**Save to:** `public/assets/stockholm-oncall/mission-sre.webp` · **Ratio:** 3:2 · **Size:** 1800×1200

```
Original environment key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture in the darks.

Lighting: night. Deep violet-black sky, magenta and cyan neon as the main light sources, teal shadows, small warm gold window lights.

Scene: a lighthouse on a small rocky skerry in the Stockholm archipelago at night. Its warm gold beam sweeps across a dark sea whose waves are drawn as glowing line graphs and latency curves in cyan, green and magenta. A single engineer in a hooded jacket stands on the gallery of the lighthouse on watch, seen from behind, a small phone glow in one hand. Distant city lights on the horizon.

Composition: lighthouse on the right third, beam sweeping left across the frame, graph-waves filling the lower middle. Top-left corner and bottom 20% calm.

Set in a stylized Stockholm, Sweden. Aspect ratio 3:2. No text anywhere.

Avoid: logos, brand names, readable text, letters, numbers, signage with words, watermark, signature, recognizable real people, existing video game characters, Roman numerals, weapons, blood, drugs, police, money, cigarettes, nonsense code glyphs on screens, photorealistic photo look. Any screen shows only abstract charts, bars and blocks. Any person is an anonymous figure seen from behind or in silhouette.
```

### `mission-ai.webp`

**Save to:** `public/assets/stockholm-oncall/mission-ai.webp` · **Ratio:** 3:2 · **Size:** 1800×1200

```
Original environment key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture in the darks.

Lighting: golden hour. Sky gradient from deep violet at the top through magenta and orange to gold at the horizon, teal shadows, neon cyan glow from screens and lights.

Scene: dusk over the Stockholm archipelago. A swarm of hundreds of small glowing fireflies drifts in from the left over the water, loose and scattered. They funnel through a tall, slim glowing cyan gate standing in the water, like a checkpoint, and come out the other side in tidy ordered lines of green light heading toward the city skyline on the right. A single engineer stands on a jetty beside the gate, seen from behind, watching.

Composition: gate just right of center, scattered swarm on the left, ordered lines on the right. Top-left corner and bottom 20% calm.

Set in a stylized Stockholm, Sweden. Aspect ratio 3:2. No text anywhere.

Avoid: logos, brand names, readable text, letters, numbers, signage with words, watermark, signature, recognizable real people, existing video game characters, Roman numerals, weapons, blood, drugs, police, money, cigarettes, nonsense code glyphs on screens, photorealistic photo look. Any screen shows only abstract charts, bars and blocks. Any person is an anonymous figure seen from behind or in silhouette.
```

### `mission-tools.webp`

**Save to:** `public/assets/stockholm-oncall/mission-tools.webp` · **Ratio:** 3:2 · **Size:** 1800×1200

```
Original environment key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture in the darks.

Lighting: night. Deep violet-black sky, magenta and cyan neon as the main light sources, teal shadows, small warm gold window lights.

Scene: a neon-lit workshop at night with a big window onto Stockholm rooftops. On a central workbench, glowing modular blocks in cyan, magenta, orange and violet are being snapped together into a larger machine, connected by thin lines of light. Two engineers work at the bench, seen from behind. Shelves of tidy parts, a mechanical keyboard, a coffee cup and a small yellow rubber duck on the bench.

Composition: the workbench and blocks dead center, so the image still reads when cropped to a tall narrow strip through the middle. Top-left corner calm.

Set in a stylized Stockholm, Sweden. Aspect ratio 3:2. No text anywhere.

Avoid: logos, brand names, readable text, letters, numbers, signage with words, watermark, signature, recognizable real people, existing video game characters, Roman numerals, weapons, blood, drugs, police, money, cigarettes, nonsense code glyphs on screens, photorealistic photo look. Any screen shows only abstract charts, bars and blocks. Any person is an anonymous figure seen from behind or in silhouette.
```

---

## City panoramas

### `city-sunset.webp`

**Save to:** `public/assets/stockholm-oncall/city-sunset.webp` · **Ratio:** 21:9 · **Size:** 3360×1440

```
Original environment key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture in the darks.

Lighting: golden hour. Sky gradient from deep violet at the top through magenta and orange to gold at the horizon, teal shadows, neon cyan glow from screens and lights.

Scene: a wide panorama of central Stockholm from across the water at sunset: the city-hall tower with its three-crown spire, the dark spire of Riddarholmen church, the gabled houses of Gamla Stan and the cliffs of Södermalm. A big low sun sits behind the skyline. Every window glows like a small dashboard tile. Faint thin lines of cyan light connect rooftops like a network topology. A few cheeky palm trees stand in silhouette at the far left and far right foreground, a self-aware joke. Calm water with long reflections.

Composition: used as the background of the closing call-to-action, with a dark text panel covering the center. Keep the middle 40% of the width simple (water, low skyline, sky) and put the landmarks, palms and sun toward the left and right thirds. The bottom quarter is water.

Set in a stylized Stockholm, Sweden. Aspect ratio 21:9. No text anywhere.

Avoid: logos, brand names, readable text, letters, numbers, signage with words, watermark, signature, recognizable real people, existing video game characters, Roman numerals, weapons, blood, drugs, police, money, cigarettes, nonsense code glyphs on screens, photorealistic photo look. Any screen shows only abstract charts, bars and blocks. Any person is an anonymous figure seen from behind or in silhouette.
```

### `city-night-neon.webp`

**Save to:** `public/assets/stockholm-oncall/city-night-neon.webp` · **Ratio:** 21:9 · **Size:** 3360×1440

```
Original environment key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture in the darks.

Lighting: night. Deep violet-black sky, magenta and cyan neon as the main light sources, teal shadows, small warm gold window lights.

Scene: the same wide panorama of central Stockholm from across the water, now at night. Skyline in near-silhouette with small lit windows in cyan, gold and magenta. Bridges carry thin light trails styled like data packets. Shapeless neon glows on a few buildings, no words. Still dark water with soft reflections.

Composition: used at 60% opacity behind map labels, so keep it dark, low-contrast and evenly detailed across the full width, with no single focal point. Skyline in the middle band, sky above, water below.

Set in a stylized Stockholm, Sweden. Aspect ratio 21:9. No text anywhere.

Avoid: logos, brand names, readable text, letters, numbers, signage with words, watermark, signature, recognizable real people, existing video game characters, Roman numerals, weapons, blood, drugs, police, money, cigarettes, nonsense code glyphs on screens, photorealistic photo look. Any screen shows only abstract charts, bars and blocks. Any person is an anonymous figure seen from behind or in silhouette.
```

---

## Loading screens

Shown full-screen for half a second during page changes, with a tip in the bottom-left and a spinner bottom-right. Keep the bottom quarter dark and quiet and the subject centered (phones crop to the middle).

### `loading-1.webp`

**Save to:** `public/assets/stockholm-oncall/loading-1.webp` · **Ratio:** 16:9 · **Size:** 1920×1080

```
Original environment key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture in the darks.

Lighting: night. Deep violet-black sky, magenta and cyan neon as the main light sources, teal shadows, small warm gold window lights.

Scene: on call at 3 AM. A dark apartment with a floor-to-ceiling window over Stockholm's night skyline. An engineer in a hoodie sits at a desk seen from behind, lit by a laptop showing abstract graphs, a phone on the desk glowing red with an alert, a mug of coffee beside it. Completely calm body language.

Composition: figure and desk centered, city filling the window behind. Bottom 25% dark floor and shadow.

Set in a stylized Stockholm, Sweden. Aspect ratio 16:9. No text anywhere.

Avoid: logos, brand names, readable text, letters, numbers, signage with words, watermark, signature, recognizable real people, existing video game characters, Roman numerals, weapons, blood, drugs, police, money, cigarettes, nonsense code glyphs on screens, photorealistic photo look. Any screen shows only abstract charts, bars and blocks. Any person is an anonymous figure seen from behind or in silhouette.
```

### `loading-2.webp`

**Save to:** `public/assets/stockholm-oncall/loading-2.webp` · **Ratio:** 16:9 · **Size:** 1920×1080

```
Original environment key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture in the darks.

Lighting: night. Deep violet-black sky, magenta and cyan neon as the main light sources, teal shadows, small warm gold window lights.

Scene: the main hall of a huge cloud-native tech conference. Thousands of attendees in silhouette from behind, lanyards catching the light. A vast stage with three giant screens showing abstract diagrams of connected hexagons and flowing lines. Magenta and cyan stage lighting cutting through haze.

Composition: stage and screens in the upper center, crowd silhouettes across the lower half. Bottom 25% dark.

Set in a stylized Stockholm, Sweden. Aspect ratio 16:9. No text anywhere.

Avoid: logos, brand names, readable text, letters, numbers, signage with words, watermark, signature, recognizable real people, existing video game characters, Roman numerals, weapons, blood, drugs, police, money, cigarettes, nonsense code glyphs on screens, photorealistic photo look. Any screen shows only abstract charts, bars and blocks. Any person is an anonymous figure seen from behind or in silhouette.
```

### `loading-3.webp`

**Save to:** `public/assets/stockholm-oncall/loading-3.webp` · **Ratio:** 16:9 · **Size:** 1920×1080

```
Original environment key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture in the darks.

Lighting: golden hour. Sky gradient from deep violet at the top through magenta and orange to gold at the horizon, teal shadows, neon cyan glow from screens and lights.

Scene: a rooftop dinner in Stockholm at sunset. A long table with food and glasses under strings of warm lights, a small group of friends seen from behind and in silhouette, laughing and toasting. The skyline with church spires and water glowing behind them.

Composition: table centered, skyline and sun above it. Bottom 25% dark rooftop floor.

Set in a stylized Stockholm, Sweden. Aspect ratio 16:9. No text anywhere.

Avoid: logos, brand names, readable text, letters, numbers, signage with words, watermark, signature, recognizable real people, existing video game characters, Roman numerals, weapons, blood, drugs, police, money, cigarettes, nonsense code glyphs on screens, photorealistic photo look. Any screen shows only abstract charts, bars and blocks. Any person is an anonymous figure seen from behind or in silhouette.
```

### `loading-4.webp`

**Save to:** `public/assets/stockholm-oncall/loading-4.webp` · **Ratio:** 16:9 · **Size:** 1920×1080

```
Original environment key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture in the darks.

Lighting: night. Deep violet-black sky, magenta and cyan neon as the main light sources, teal shadows, small warm gold window lights.

Scene: hackathon night in a small office. A long table crowded with open laptops glowing cyan, pizza boxes, energy drinks and sticky notes. A whiteboard on the wall covered in architecture boxes and arrows, no words. A handful of engineers seen from behind, one pointing at the whiteboard. Dark windows with city lights.

Composition: table and whiteboard centered. Bottom 25% dark.

Set in a stylized Stockholm, Sweden. Aspect ratio 16:9. No text anywhere.

Avoid: logos, brand names, readable text, letters, numbers, signage with words, watermark, signature, recognizable real people, existing video game characters, Roman numerals, weapons, blood, drugs, police, money, cigarettes, nonsense code glyphs on screens, photorealistic photo look. Any screen shows only abstract charts, bars and blocks. Any person is an anonymous figure seen from behind or in silhouette.
```

### `loading-5.webp`

**Save to:** `public/assets/stockholm-oncall/loading-5.webp` · **Ratio:** 16:9 · **Size:** 1920×1080

```
Original environment key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture in the darks.

Lighting: golden hour. Sky gradient from deep violet at the top through magenta and orange to gold at the horizon, teal shadows, neon cyan glow from screens and lights.

Scene: a small open motorboat crossing the Stockholm archipelago at golden hour, seen from behind and slightly above, leaving a bright wake. A few passengers in silhouette, one with an arm raised. Rocky pine-covered islands with red wooden cottages on both sides, a low sun ahead.

Composition: boat centered heading away toward the sun. Bottom 25% dark water.

Set in a stylized Stockholm, Sweden. Aspect ratio 16:9. No text anywhere.

Avoid: logos, brand names, readable text, letters, numbers, signage with words, watermark, signature, recognizable real people, existing video game characters, Roman numerals, weapons, blood, drugs, police, money, cigarettes, nonsense code glyphs on screens, photorealistic photo look. Any screen shows only abstract charts, bars and blocks. Any person is an anonymous figure seen from behind or in silhouette.
```

---

## Page backgrounds

### `newswire-header.webp`

**Save to:** `public/assets/stockholm-oncall/newswire-header.webp` · **Ratio:** 21:9 · **Size:** 2520×1080

```
Original environment key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture in the darks.

Lighting: night. Deep violet-black sky, magenta and cyan neon as the main light sources, teal shadows, small warm gold window lights.

Scene: an empty TV-news studio set at night. A curved anchor desk with a glowing magenta edge, two empty chairs, studio cameras in silhouette. Behind the desk a huge video wall made of many tiles, each showing a different abstract dashboard: line charts, bar charts, heatmaps and maps of dots, no words or numbers.

Composition: used at 50% opacity behind a headline on the left. Put the desk and brightest tiles on the right half; keep the left half darker and simpler. Bottom 20% dark.

Set in a stylized Stockholm, Sweden. Aspect ratio 21:9. No text anywhere.

Avoid: logos, brand names, readable text, letters, numbers, signage with words, watermark, signature, recognizable real people, existing video game characters, Roman numerals, weapons, blood, drugs, police, money, cigarettes, nonsense code glyphs on screens, photorealistic photo look. Any screen shows only abstract charts, bars and blocks. Any person is an anonymous figure seen from behind or in silhouette.
```

### `error-404.webp`

**Save to:** `public/assets/stockholm-oncall/error-404.webp` · **Ratio:** 16:9 · **Size:** 1920×1080

```
Original environment key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture in the darks.

Lighting: night. Deep violet-black sky, magenta and cyan neon as the main light sources, teal shadows, small warm gold window lights.

Scene: a long empty bridge over dark water in Stockholm at night, receding into fog. A lone engineer with a backpack stands small on the bridge, seen from behind, holding up a phone that projects a holographic street map. The map is glitching: tiles missing, lines broken into scattered cyan and magenta fragments. Faint city lights far away.

Composition: used at 60% opacity behind large centered text. Keep the figure and hologram small and in the lower-right third; the center and upper half are mostly dark sky and fog.

Set in a stylized Stockholm, Sweden. Aspect ratio 16:9. No text anywhere.

Avoid: logos, brand names, readable text, letters, numbers, signage with words, watermark, signature, recognizable real people, existing video game characters, Roman numerals, weapons, blood, drugs, police, money, cigarettes, nonsense code glyphs on screens, photorealistic photo look. Any screen shows only abstract charts, bars and blocks. Any person is an anonymous figure seen from behind or in silhouette.
```

---

## Optional: `key-art-grid-mobile.webp`

**No page uses this file today.** The hero builds its poster from the
individual crew images at every screen size, so you can skip this one. It only
matters if a vertical poster is wanted later, for example for social posts.

**Save to:** `public/assets/stockholm-oncall/key-art-grid-mobile.webp` · **Ratio:** 9:16 · **Size:** 1080×1920

Attach the six approved square portraits (`crew-kami-square.webp`,
`crew-paer-square.webp`, `crew-tommy-square.webp`, `crew-love-square.webp`,
`crew-max-square.webp`, `crew-mauricio-square.webp`) plus
`crew-mimmi-penny-square.webp` as references.

```
Original poster illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture in the darks.

Lighting: golden hour. Sky gradient from deep violet at the top through magenta and orange to gold at the horizon, teal shadows, neon cyan glow from screens and lights.

A vertical poster made of comic-style panels separated by thin black gutters. The top third is an empty dark violet area with no content, reserved for a headline. Below it, an asymmetric grid of seven panels: one wide panel of the gabled houses of Gamla Stan, Stockholm, at sunset, and one panel for each of the six people in the attached reference portraits, each in the same outfit and setting as in their reference, plus the two French bulldogs in sunglasses in a small corner panel. Keep every face clearly recognizable and matching its reference.

Aspect ratio 9:16. No text anywhere.

Avoid: logos, brand names, readable text, letters, numbers, signage with words, watermark, signature, existing video game characters, Roman numerals, weapons, blood, drugs, police, money, cigarettes, nonsense code glyphs on screens, photorealistic photo look. Any screen shows only abstract charts, bars and blocks.
```
