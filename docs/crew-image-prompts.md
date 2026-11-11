# Stockholm On‑Call: copy‑paste image prompts for the crew

Each block below is **complete on its own**. Paste one block into the image model, attach the listed reference photo(s) and generate. Don't mix blocks.

The look we're after: **open‑world action‑game loading‑screen art**. Think bold ink outlines, cel‑shaded realism, airbrushed gradients, hyper‑saturated sunset colors, heroic poses. Every character, scene and design is our own.

---

## How to use

**Before you start:** each person approves their portrait and agrees to be shown this way (checklist at the bottom).

| Model | How to attach the reference | Extra settings |
|---|---|---|
| **GPT‑image / ChatGPT** | Upload the reference photo(s) in the same message as the prompt | Ask for "portrait 4:5" or "square 1:1". Upscale afterwards |
| **Midjourney v7** | Use `--oref <photo url>` (omni reference) or `--cref <photo url>` on older versions | Add `--ar 4:5` or `--ar 1:1`, `--ow 100` (or `--cw 80`), `--style raw`. Paste the negative line after `--no` |
| **Flux / SDXL** (ComfyUI) | PuLID or InstantID / IP‑Adapter FaceID with the photo | Identity weight around 0.8. Put the negative line in the negative prompt |

**Output:** 4:5 → upscale and export as **1600×2000 WebP**. 1:1 → **1000×1000 WebP** with the `-square` suffix. Drop the files into `public/assets/stockholm-oncall/`, overwriting the placeholders.

**Consistency tip:** generate Kami first. When you're happy with it, attach it as a **style reference** (Midjourney `--sref`, or "match the style of image 2" in GPT‑image) for everyone else. Only ever use **our own generated images** as style references, never game art.

### Copyright guardrails (why the prompts are written this way)
- The prompts describe the *style* in generic terms and never name a game, studio or character. **Don't add** "GTA", "Grand Theft Auto", "Rockstar", "Vice City", "Lucia", "Jason" or "VI", and don't add "in the style of …" with a game name.
- **Never upload screenshots or game art** as a reference. Upload only our team photos and our own previous outputs.
- If a result looks like a specific known game character, or a logo, wordmark or readable text appears, **regenerate it**.
- Real readable UI is added in HTML on top later, so screens in the images stay abstract.

---

## 1. Kami Gerami: AI & Platform Engineer

**Reference:** `public/assets/team/kami.jpeg` (main). `kami.png` is an earlier illustrated version, OK as a second reference.

### `crew-kami.webp` (4:5)
```
Original character key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture. Dramatic golden-hour rim light in magenta, orange and gold, teal shadows, neon cyan glow from screens.

Subject: the man in the reference photo, keep his face, bone structure, skin tone and expression clearly recognizable and flattering. Shaved head, full dark well-groomed beard, confident calm look. Outfit: light-wash denim jacket over a grey t-shirt, dark slim jeans, carrying a black leather laptop bag.

Pose: three-quarter body, striding toward the camera with total confidence, slight low camera angle, heroic.
Scene: a rooftop over Södermalm, Stockholm, at dusk, the city skyline and water glowing behind him. A holographic agent-workflow graph of glowing nodes and arrows floats beside him in neon cyan. An open laptop on a ledge shows an abstract GPU-cluster dashboard of bars and heatmaps.
Role vibe: AI & Platform Engineer, the strategist of the crew.

Vertical 4:5 composition, character fills about 75% of the frame height, face in the upper third, clean edges for cut-out use. No text anywhere.
```

### `crew-kami-square.webp` (1:1)
```
Original character portrait illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, airbrushed gradients, hyper-saturated colors, subtle film grain. Golden-hour magenta/orange rim light, teal shadows, neon cyan accents.

Subject: the man in the reference photo, recognizable and flattering. Shaved head, full dark groomed beard, denim jacket over grey t-shirt. Chest-up, three-quarter view, confident half-smile, looking just past the camera.
Background: Stockholm rooftop at dusk, soft blurred skyline, a faint holographic node graph glowing cyan behind his shoulder.

Square 1:1, face centered in the frame, head and shoulders, generous headroom. No text anywhere.
```

**Negative / `--no`:**
```
logos, brand names, readable text, letters, numbers, watermark, signature, existing video game characters, Roman numerals, weapons, guns, knives, blood, drugs, police, money, cigarettes, sexualized pose, extra fingers, deformed hands, distorted face, nonsense code on screens, photorealistic photo
```

---

## 2. Pär Berge: Platform Engineer / Cloud Migration

**Reference:** `public/assets/team/paer2.jpeg` (clear face, best). Don't use `paer.jpeg` for identity: it shows him far away in a bike helmet.

### `crew-paer.webp` (4:5)
```
Original character key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture. Dramatic golden-hour rim light in magenta, orange and gold, teal shadows, neon cyan glow.

Subject: the man in the reference photo, keep his face, skin tone, short tousled light-brown hair, light stubble and big friendly grin clearly recognizable and flattering. Outfit: navy checked flannel shirt with sleeves rolled up, dark jeans, a smartwatch.

Pose: three-quarter body, leaning back against the front of a sleek white electric SUV with no logos or badges, arms loosely crossed, relaxed and confident, slight low angle.
Scene: Slussen, Stockholm, at sunset, water and bridges behind him. A stream of glowing shipping-container shapes flows from an old brick data center, across a bridge and up into a luminous cloud in the sky, like a migration in progress. A mountain-bike helmet hangs on the car's side mirror as a small personal detail.
Role vibe: Platform Engineer who moves whole systems to the cloud.

Vertical 4:5 composition, character fills about 75% of the frame height, face in the upper third. No text anywhere.
```

### `crew-paer-square.webp` (1:1)
```
Original character portrait illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, airbrushed gradients, hyper-saturated colors, subtle film grain. Golden-hour magenta/orange rim light, teal shadows, neon cyan accents.

Subject: the man in the reference photo, recognizable and flattering, short tousled light-brown hair, light stubble, big warm grin, navy checked flannel shirt. Chest-up, three-quarter view.
Background: blurred Slussen waterfront at sunset, a faint line of glowing containers rising into a cloud behind him.

Square 1:1, face centered, head and shoulders, generous headroom. No text anywhere.
```

**Negative / `--no`:** *(same as Kami)*
```
logos, brand names, car badges, readable text, letters, numbers, watermark, signature, existing video game characters, Roman numerals, weapons, guns, knives, blood, drugs, police, money, cigarettes, sexualized pose, extra fingers, deformed hands, distorted face, nonsense code on screens, photorealistic photo
```

---

## 3. Tommy Malmqvist: Infrastructure & Modernization

**Reference:** `public/assets/team/tommy.jpeg` (likeness) plus `tommy.png` (closer face, earlier illustration). If you can, get a recent close‑up photo: `tommy.jpeg` is a full‑body shot from a distance.

### `crew-tommy.webp` (4:5)
```
Original character key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture. Rim light in hot pink and neon cyan, deep teal shadows.

Subject: the man in the reference photos, keep his face, skin tone, short dark tousled hair, stubble and slim athletic build clearly recognizable and flattering. Outfit: dark charcoal zip hoodie over a dusty-pink t-shirt, dark jeans, work gloves tucked in a back pocket.

Pose: three-quarter body, standing in the middle of a data-center aisle, a coil of network cables slung over one shoulder, a calm satisfied "production is fixed" smile.
Scene: long server aisle lit pink and cyan, racks with blinking LEDs on both sides. Behind him an old beige legacy server rack is being rolled away on a trolley, retired. Light haze, dramatic perspective.
Role vibe: Infrastructure & Modernization, the one who quietly makes old systems new.

Vertical 4:5 composition, character fills about 75% of the frame height, face in the upper third. No text anywhere.
```

### `crew-tommy-square.webp` (1:1)
```
Original character portrait illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, airbrushed gradients, hyper-saturated colors, subtle film grain. Hot pink and neon cyan rim light, teal shadows.

Subject: the man in the reference photos, recognizable and flattering, short dark tousled hair, stubble, charcoal hoodie, network cables over one shoulder, calm confident smile. Chest-up, three-quarter view.
Background: blurred server aisle with pink and cyan LEDs.

Square 1:1, face centered, head and shoulders, generous headroom. No text anywhere.
```

**Negative / `--no`:**
```
logos, brand names, readable text, letters, numbers, watermark, signature, existing video game characters, Roman numerals, weapons, guns, knives, blood, drugs, police, money, cigarettes, sexualized pose, extra fingers, deformed hands, distorted face, nonsense code on screens, photorealistic photo
```

---

## 4. Love Kempe Lundin: Full‑Stack Engineer

**Reference:** `public/assets/team/love.jpeg`

### `crew-love.webp` (4:5)
```
Original character key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture. Neon magenta and cyan lighting with a warm orange glow from street lamps.

Subject: the man in the reference photo, keep his face, skin tone, swept-back light-brown hair, short beard and easy smile clearly recognizable and flattering. Outfit: crisp white open-collar shirt with sleeves rolled, slim dark chinos, aviator sunglasses pushed up on his head, a black backpack on one shoulder.

Pose: three-quarter body, walking down the alley holding a tablet in one hand, glancing up from it toward the camera with a cool half-smile.
Scene: a narrow cobblestone alley in Gamla Stan, Stockholm, at night, old ochre and red facades lit by neon signs with no readable text. Glowing lines of light connect the tablet to windows and lamps around him like API calls. The tablet shows an abstract sleek app interface of cards and shapes.
Role vibe: Full-Stack Engineer who makes the product feel good.

Vertical 4:5 composition, character fills about 75% of the frame height, face in the upper third. No text anywhere.
```

### `crew-love-square.webp` (1:1)
```
Original character portrait illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, airbrushed gradients, hyper-saturated colors, subtle film grain. Neon magenta and cyan light, warm orange street-lamp glow.

Subject: the man in the reference photo, recognizable and flattering, swept-back light-brown hair, short beard, aviator sunglasses on, white open-collar shirt, confident smile. Chest-up, three-quarter view.
Background: blurred neon Gamla Stan alley at night with thin glowing connection lines.

Square 1:1, face centered, head and shoulders, generous headroom. No text anywhere.
```

**Negative / `--no`:**
```
logos, brand names, readable text, letters, numbers, watermark, signature, existing video game characters, Roman numerals, weapons, guns, knives, blood, drugs, police, money, cigarettes, sexualized pose, extra fingers, deformed hands, distorted face, nonsense code on screens, photorealistic photo
```

---

## 5. Max Povalinsky: SRE / Observability

**Reference:** `public/assets/team/max_povalinsky.jpg`. It's a side profile; a front‑facing photo would give much better likeness.

### `crew-max.webp` (4:5)
```
Original character key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture. Cool cyan and violet screen light on his face, warm magenta rim light from behind.

Subject: the man in the reference photo, keep his face, skin tone and profile clearly recognizable and flattering. Long dark hair tied back in a low bun, calm focused expression. Outfit: black puffer jacket open over a dark t-shirt, mustard-yellow scarf as his signature color accent, a slim headset around his neck.

Pose: three-quarter body, sitting relaxed and leaning back in a control-room chair, one hand holding a smartphone that is buzzing and glowing red with an incoming alert, completely unbothered, maybe holding a coffee in the other hand.
Scene: a night-time operations control room, a wall of large screens showing abstract latency line graphs, heatmaps and green/amber/red status tiles (no readable text). Through a window behind, the Stockholm skyline at night.
Role vibe: Senior SRE, the calmest person in any incident.

Vertical 4:5 composition, character fills about 75% of the frame height, face in the upper third. No text anywhere.
```

### `crew-max-square.webp` (1:1)
```
Original character portrait illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, airbrushed gradients, hyper-saturated colors, subtle film grain. Cyan screen light on his face, magenta rim light.

Subject: the man in the reference photo, recognizable and flattering, long dark hair in a low bun, mustard-yellow scarf, black jacket, headset around his neck, calm unbothered look. Chest-up, three-quarter view.
Background: blurred wall of monitoring graphs and status tiles.

Square 1:1, face centered, head and shoulders, generous headroom. No text anywhere.
```

**Negative / `--no`:**
```
logos, brand names, readable text, letters, numbers, watermark, signature, existing video game characters, Roman numerals, weapons, guns, knives, blood, drugs, police, money, cigarettes, sexualized pose, extra fingers, deformed hands, distorted face, nonsense code on screens, photorealistic photo
```

---

## 6. Mauricio Saez: DevOps Engineer

**Reference:** `public/assets/team/mauricio.jpeg` (main). `mauricio.png` is an earlier illustration that shows round glasses. Ask Mauricio whether he wants glasses, and add *"round black glasses"* to the prompt if yes.

### `crew-mauricio.webp` (4:5)
```
Original character key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture. Dramatic sunset light in orange, magenta and gold, teal shadows, green accent lights.

Subject: the man in the reference photo, keep his face, skin tone, thick dark swept-back hair and big warm smile clearly recognizable and flattering. Outfit: dark navy knit sweater, dark trousers, a high-visibility vest worn open over the sweater as a playful harbor-worker nod.

Pose: three-quarter body, open and welcoming, one arm gesturing toward the line behind him as if inviting the viewer to join, smiling.
Scene: a container harbor in Stockholm at sunset, cranes in silhouette. A long conveyor pipeline carries glowing cube-shaped build artifacts past a row of checkpoints, each lighting up with a green checkmark symbol. Water reflecting the sky.
Role vibe: DevOps Engineer who makes delivery smooth and collaborative.

Vertical 4:5 composition, character fills about 75% of the frame height, face in the upper third. No text anywhere.
```

### `crew-mauricio-square.webp` (1:1)
```
Original character portrait illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, airbrushed gradients, hyper-saturated colors, subtle film grain. Orange and magenta sunset light, teal shadows, green accent glow.

Subject: the man in the reference photo, recognizable and flattering, thick dark swept-back hair, big warm smile, dark navy knit sweater. Chest-up, three-quarter view.
Background: blurred harbor cranes at sunset and a line of glowing green checkmark lights.

Square 1:1, face centered, head and shoulders, generous headroom. No text anywhere.
```

**Negative / `--no`:**
```
logos, brand names, readable text, letters, numbers, watermark, signature, existing video game characters, Roman numerals, weapons, guns, knives, blood, drugs, police, money, cigarettes, sexualized pose, extra fingers, deformed hands, distorted face, nonsense code on screens, photorealistic photo
```

---

## 7. Angelica Törnros: People Lead / Recruiter

**Reference:** `public/assets/team/angelica.jpeg`. She's far away and wearing a riding helmet, so **get a clear, recent, front‑facing photo first** and fill in hair details from it. The prompt keeps hair generic for that reason.

### `crew-angelica.webp` (4:5)
```
Original character key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, posterized shadows, hyper-saturated colors, subtle film grain and halftone texture. Golden-hour rim light in gold, orange and magenta, teal shadows, sea spray sparkle.

Subject: the woman in the reference photo, keep her face, skin tone, hairstyle and hair color exactly as in the reference, clearly recognizable and flattering, bright confident smile. Outfit: tailored dark navy jacket over a white top, slim trousers, sunglasses, smart and sporty.

Pose: three-quarter body, standing at the helm of a small open speedboat, one hand on the windshield frame, the other holding a tablet, wind in her hair, "assembling the team" boss energy.
Scene: the Stockholm archipelago at golden hour, red wooden cottages and pine islands, white wake behind the boat. The tablet shows an abstract crew roster of portrait circles and glowing cards (no readable text). A riding crop rests on the dashboard as a small personal detail.
Role vibe: People Lead and Recruiter, the one who builds the crew.

Vertical 4:5 composition, character fills about 75% of the frame height, face in the upper third. No text anywhere.
```

### `crew-angelica-square.webp` (1:1)
```
Original character portrait illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, airbrushed gradients, hyper-saturated colors, subtle film grain. Golden-hour gold and magenta rim light, teal shadows.

Subject: the woman in the reference photo, hairstyle and hair color as in the reference, recognizable and flattering, bright confident smile, navy tailored jacket, wind in her hair. Chest-up, three-quarter view.
Background: blurred archipelago water and islands at golden hour.

Square 1:1, face centered, head and shoulders, generous headroom. No text anywhere.
```

**Negative / `--no`:**
```
logos, brand names, readable text, letters, numbers, watermark, signature, existing video game characters, Roman numerals, weapons, guns, knives, blood, drugs, police, money, cigarettes, sexualized pose, revealing clothing, extra fingers, deformed hands, distorted face, nonsense UI text, photorealistic photo
```

---

## 8. Mimmi & Penny: Morale Officers (secret characters)

**Reference:** `public/assets/team/mimmi-penny.jpg`. Get the owner's OK before publishing.

### `crew-mimmi-penny.webp` (4:5)
```
Original character key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, smooth airbrushed gradients, hyper-saturated colors, subtle film grain and halftone texture. Pink and cyan neon rim light, warm sunset glow.

Subject: the two dogs in the reference photo, two fawn French bulldogs with dark black face masks and big upright bat ears, keep their markings, proportions and expressions recognizable and adorable.

Pose: both sitting side by side on top of a server cabinet like bosses, each wearing tiny dark sunglasses. The dog on the left wears a small on-call pager clipped to its collar, glowing with an alert light. The dog on the right sits proud with its chest out.
Scene: a server room with pink and cyan LEDs, a rubber duck and a coffee mug on the cabinet next to them, a cozy dog blanket draped over the edge.
Role vibe: Morale Officers, secret unlockable characters, pure comic relief.

Vertical 4:5 composition, both dogs fully in frame, filling about 70% of the height. No text anywhere.
```

### `crew-mimmi-penny-square.webp` (1:1)
```
Original character portrait illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, airbrushed gradients, hyper-saturated colors, subtle film grain. Pink and cyan neon rim light.

Subject: the two fawn French bulldogs from the reference photo, dark black masks, bat ears, tiny dark sunglasses, one with a glowing pager on its collar, side by side, looking straight into the camera like bosses.
Background: blurred pink and cyan server-room lights.

Square 1:1, both heads centered, generous headroom. No text anywhere.
```

**Negative / `--no`:**
```
logos, brand names, readable text, letters, numbers, watermark, signature, existing video game characters, humans, weapons, extra legs, deformed paws, distorted faces, photorealistic photo
```

---

## 9. Group images that use the crew

Generate these **after** the eight portraits are approved. Attach the approved portraits as references so the faces match.

### `key-art-grid.webp` (16:9, export 2880×1620)
```
Original video-game key-art poster in the style of modern open-world action-game marketing: an asymmetric grid of 7 rectangular illustrated panels separated by thin black gutters, each panel a bold cel-shaded character illustration with clean black ink outlines, airbrushed gradients, hyper-saturated sunset magenta, orange and gold with teal shadows, neon cyan accents, subtle film grain and halftone.

Panels (use the attached character illustrations as the exact likeness for each person): the AI & Platform Engineer in a denim jacket on a rooftop; the Platform Engineer in a flannel shirt by a white car; the SRE with long hair in a bun and a mustard scarf in front of monitoring screens; the DevOps Engineer smiling at a sunset harbor; the Full-Stack Engineer with aviators in a neon alley; the People Lead on a speedboat; and one panel of the Stockholm skyline at sunset with every window glowing like a dashboard tile, two French bulldogs in sunglasses tucked into the corner of one panel.

Layout: keep the left 40% of the whole image as one large dark, low-detail panel of a dusky sky, empty for a headline. Panels sit on the right 60%. No text, letters, numbers or logos anywhere.
```

### `key-art-grid-mobile.webp` (9:16, export 1080×1920)
```
Original video-game key-art poster in the style of modern open-world action-game marketing, vertical: an asymmetric grid of 6 rectangular illustrated panels separated by thin black gutters, bold cel-shaded characters with clean black ink outlines, airbrushed gradients, hyper-saturated sunset magenta, orange and gold with teal shadows, neon cyan accents, film grain and halftone.

Use the attached character illustrations as the exact likeness for each person: AI & Platform Engineer in denim jacket, Platform Engineer in flannel, SRE with hair bun and mustard scarf, DevOps Engineer at a harbor, Full-Stack Engineer with aviators, People Lead on a speedboat; two French bulldogs in sunglasses in one corner.

Layout: keep the top third as one dark, low-detail dusky sky panel, empty for a headline. Panels fill the lower two thirds. No text, letters, numbers or logos anywhere.
```

### `careers-hero.webp` (16:9, export 1920×1080)
```
Original cinematic key-art illustration in the style of modern open-world action-game loading-screen art: bold clean black ink outlines, cel-shaded semi-realistic rendering, airbrushed gradients, hyper-saturated golden-hour magenta, orange and gold, teal shadows, film grain.

Use the attached character illustrations as the exact likeness of each person. The whole crew walks side by side toward the camera in slow-motion "squad walk" formation along the Skeppsbron waterfront in Stockholm at golden hour: the AI & Platform Engineer in the center in his denim jacket, the others around him carrying laptops, coffee cups and a headset, confident and smiling, two French bulldogs in sunglasses trotting in front. Behind them, the windows of Gamla Stan light up one by one like a city booting up, with light trails on the water.

Wide 16:9, low camera angle, characters fill the lower two thirds, a clear calm area of sky in the top left for a headline. No text, letters, numbers or logos anywhere.
```

**Negative for all group images:**
```
logos, brand names, readable text, letters, numbers, Roman numerals, watermark, signature, existing video game characters, weapons, guns, blood, drugs, police, money, sexualized poses, extra fingers, deformed hands, distorted faces, mismatched faces, photorealistic photo
```

---

## Photo quality notes (fix these for better likeness)

| Person | Current reference | Recommendation |
|---|---|---|
| Kami | `kami.jpeg` (good, full body) | OK as is |
| Pär | `paer.jpeg` is in a bike helmet | Use `paer2.jpeg` |
| Tommy | `tommy.jpeg` is far away | Add a close, front‑facing photo |
| Love | `love.jpeg` (good) | OK as is |
| Max | `max_povalinsky.jpg` is a side profile | Add a front‑facing photo |
| Mauricio | `mauricio.jpeg` (good) | Confirm glasses or no glasses |
| Angelica | `angelica.jpeg` is far away with a helmet | **Needs** a close, front‑facing photo |
| Mimmi & Penny | `mimmi-penny.jpg` (good) | OK as is |

## Approval checklist
- [ ] Kami Gerami
- [ ] Pär Berge
- [ ] Tommy Malmqvist
- [ ] Love Kempe Lundin
- [ ] Max Povalinsky
- [ ] Mauricio Saez
- [ ] Angelica Törnros
- [ ] Mimmi & Penny (owner approval)
