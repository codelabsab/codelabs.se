#!/usr/bin/env node
/**
 * Generates the LABELLED PLACEHOLDER art in public/assets/stockholm-oncall/.
 *
 * These are stand-ins at the exact file names and sizes the site expects.
 * Final art is produced with an image model from the prompts in
 * public/assets/stockholm-oncall/PROMPTS.md and dropped in over these files.
 *
 *   node scripts/generate-placeholders.mjs
 *
 * Crew placeholders are the team's existing photos with a colour grade.
 * Scene placeholders are procedural SVG. Nothing here is AI generated.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT = "public/assets/stockholm-oncall";
const TEAM = "public/assets/team";
fs.mkdirSync(OUT, { recursive: true });

const C = {
  night: "#0B0714",
  night8: "#150D24",
  night7: "#23163A",
  pink: "#FF3E8A",
  orange: "#FF8A3D",
  gold: "#FFC94A",
  cyan: "#2EE6F0",
  violet: "#8B5CF6",
  teal: "#0E7C86",
  sand: "#FFF4E6",
  ok: "#3DDC97",
  crit: "#FF3E5F",
};

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const label = (w, h, name) => {
  const fs_ = Math.max(13, Math.round(w / 95));
  const text = `PLACEHOLDER · ${name} · final art: see PROMPTS.md`;
  const bw = text.length * fs_ * 0.62 + fs_ * 1.6;
  return `<g font-family="DejaVu Sans Mono, monospace" font-size="${fs_}">
    <rect x="${fs_}" y="${h - fs_ * 3}" width="${bw}" height="${fs_ * 2}" fill="${C.night}" fill-opacity=".82" stroke="${C.gold}" stroke-width="1"/>
    <text x="${fs_ * 1.8}" y="${h - fs_ * 1.65}" fill="${C.gold}">${text}</text></g>`;
};

const defs = (night) => `<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    ${
      night
        ? `<stop offset="0" stop-color="#07040F"/><stop offset=".55" stop-color="#1B0F3A"/><stop offset=".85" stop-color="#4B1B6B"/><stop offset="1" stop-color="#8A2472"/>`
        : `<stop offset="0" stop-color="#2B0F4C"/><stop offset=".45" stop-color="#B5247A"/><stop offset=".75" stop-color="#FF8A3D"/><stop offset="1" stop-color="#FFC94A"/>`
    }
  </linearGradient>
  <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${night ? "#2A1150" : "#7A1E6A"}"/><stop offset="1" stop-color="${C.night}"/>
  </linearGradient>
  <radialGradient id="glow"><stop offset="0" stop-color="${C.gold}" stop-opacity=".9"/><stop offset="1" stop-color="${C.gold}" stop-opacity="0"/></radialGradient>
  <radialGradient id="cy"><stop offset="0" stop-color="${C.cyan}" stop-opacity=".9"/><stop offset="1" stop-color="${C.cyan}" stop-opacity="0"/></radialGradient>
  <pattern id="half" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="5" cy="5" r="1.6" fill="#000" fill-opacity=".35"/></pattern>
  <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" seed="4"/><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .09 0"/></filter>
</defs>`;

function skyline(w, horizon, r, { night, scale = 1 }) {
  let out = "";
  const lit = night ? [C.cyan, C.gold, C.pink] : [C.gold, C.sand];
  let x = -20;
  const unit = (w / 60) * scale;
  let landmarkAt = w * (0.3 + r() * 0.1);
  let towerDone = false;
  while (x < w + 20) {
    const bw = unit * (0.8 + r() * 1.6);
    const bh = unit * (1.2 + r() * 3.2);
    if (!towerDone && x > landmarkAt) {
      // City-hall style tower: tall shaft, lantern, thin spire.
      const tw = unit * 1.3;
      const th = unit * 8.5;
      out += `<rect x="${x}" y="${horizon - th}" width="${tw}" height="${th}" fill="${C.night}"/>`;
      out += `<rect x="${x + tw * 0.2}" y="${horizon - th - unit * 1.1}" width="${tw * 0.6}" height="${unit * 1.1}" fill="${C.night}"/>`;
      out += `<path d="M${x + tw * 0.2} ${horizon - th - unit * 1.1} L${x + tw / 2} ${horizon - th - unit * 3} L${x + tw * 0.8} ${horizon - th - unit * 1.1}Z" fill="${C.night}"/>`;
      out += `<circle cx="${x + tw / 2}" cy="${horizon - th - unit * 3.1}" r="${unit * 0.14}" fill="${C.gold}"/>`;
      x += tw + unit * 0.2;
      towerDone = true;
      continue;
    }
    out += `<rect x="${x}" y="${horizon - bh}" width="${bw}" height="${bh + 2}" fill="${C.night}"/>`;
    if (r() > 0.78) {
      // church spire
      out += `<path d="M${x + bw * 0.3} ${horizon - bh} L${x + bw * 0.5} ${horizon - bh - unit * (2 + r() * 2.5)} L${x + bw * 0.7} ${horizon - bh}Z" fill="${C.night}"/>`;
    }
    const cols = Math.floor(bw / (unit * 0.36));
    const rows = Math.floor(bh / (unit * 0.42));
    for (let i = 0; i < cols; i++)
      for (let j = 0; j < rows; j++)
        if (r() > (night ? 0.45 : 0.6)) {
          out += `<rect x="${x + unit * 0.14 + i * unit * 0.36}" y="${horizon - bh + unit * 0.16 + j * unit * 0.42}" width="${unit * 0.16}" height="${unit * 0.2}" fill="${lit[Math.floor(r() * lit.length)]}" fill-opacity="${0.5 + r() * 0.5}"/>`;
        }
    x += bw + unit * 0.12;
  }
  return out;
}

function palm(x, base, size, lean = 1) {
  const top = [x + lean * size * 0.18, base - size];
  let out = `<path d="M${x} ${base} Q${x + lean * size * 0.05} ${base - size * 0.55} ${top[0]} ${top[1]}" stroke="${C.night}" stroke-width="${size * 0.045}" fill="none" stroke-linecap="round"/>`;
  for (let a = -160; a <= -20; a += 23) {
    const rad = (a * Math.PI) / 180;
    const ex = top[0] + Math.cos(rad) * size * 0.42;
    const ey = top[1] + Math.sin(rad) * size * 0.16 + size * 0.16;
    out += `<path d="M${top[0]} ${top[1]} Q${(top[0] + ex) / 2} ${top[1] - size * 0.2} ${ex} ${ey}" stroke="${C.night}" stroke-width="${size * 0.035}" fill="none" stroke-linecap="round"/>`;
  }
  return out;
}

function sun(cx, cy, rad) {
  let out = `<circle cx="${cx}" cy="${cy}" r="${rad * 2.4}" fill="url(#glow)" opacity=".5"/><circle cx="${cx}" cy="${cy}" r="${rad}" fill="${C.gold}"/>`;
  for (let i = 0; i < 5; i++) {
    const y = cy + rad * (0.15 + i * 0.18);
    out += `<rect x="${cx - rad}" y="${y}" width="${rad * 2}" height="${rad * (0.03 + i * 0.018)}" fill="#E0457E"/>`;
  }
  return out;
}

function reflections(w, horizon, h, r, color) {
  let out = "";
  for (let i = 0; i < 46; i++) {
    const y = horizon + 8 + r() * (h - horizon - 16);
    const len = w * (0.02 + r() * 0.1);
    out += `<rect x="${r() * w}" y="${y}" width="${len}" height="2" fill="${color}" fill-opacity="${0.12 + r() * 0.3}"/>`;
  }
  return out;
}

function figure(x, base, size, fill = C.night) {
  return `<g fill="${fill}"><circle cx="${x}" cy="${base - size * 0.9}" r="${size * 0.09}"/><path d="M${x - size * 0.13} ${base - size * 0.78} h${size * 0.26} l${size * 0.03} ${size * 0.42} h-${size * 0.08} l-${size * 0.02} ${size * 0.36} h-${size * 0.05} l-${size * 0.01} -${size * 0.36} l-${size * 0.01} ${size * 0.36} h-${size * 0.05} l-${size * 0.02} -${size * 0.36} h-${size * 0.08}Z"/></g>`;
}

const sparkline = (x, y, w, h, r, color) => {
  let d = "";
  for (let i = 0; i <= 12; i++) d += `${i ? "L" : "M"}${x + (w * i) / 12} ${y + h * (0.2 + r() * 0.7)}`;
  return `<path d="${d}" fill="none" stroke="${color}" stroke-width="${Math.max(2, h / 22)}" stroke-linejoin="round"/>`;
};

const motifs = {
  platform(w, h, hz, r) {
    let out = "";
    const u = w / 40;
    const cols = [C.cyan, C.pink, C.orange, C.gold, C.violet];
    for (let s = 0; s < 3; s++)
      for (let i = 0; i < 5; i++)
        for (let j = 0; j < 2 + Math.floor(r() * 4); j++)
          out += `<rect x="${w * 0.36 + s * u * 7.4 + i * u * 1.4}" y="${hz - (j + 1) * u * 0.72 + u * 1.6}" width="${u * 1.3}" height="${u * 0.64}" fill="${cols[Math.floor(r() * cols.length)]}" fill-opacity=".9" stroke="${C.night}" stroke-width="2"/>`;
    // crane
    out += `<path d="M${w * 0.2} ${hz + u * 1.6} V${hz - u * 9} H${w * 0.42} M${w * 0.2} ${hz - u * 9} L${w * 0.14} ${hz - u * 7.4} M${w * 0.36} ${hz - u * 9} V${hz - u * 4}" stroke="${C.night}" stroke-width="${u * 0.3}" fill="none"/>`;
    out += `<rect x="${w * 0.36 - u * 0.65}" y="${hz - u * 4}" width="${u * 1.3}" height="${u * 0.64}" fill="${C.cyan}"/>`;
    return out;
  },
  devops(w, h, hz, r) {
    let out = "";
    for (let i = 0; i < 4; i++) {
      const y0 = hz + (h - hz) * (0.2 + i * 0.22);
      const d = `M-20 ${y0} C${w * 0.3} ${y0 - h * 0.25}, ${w * 0.55} ${y0 + h * 0.1}, ${w + 20} ${hz - h * (0.02 + i * 0.07)}`;
      out += `<path d="${d}" stroke="${C.night7}" stroke-width="${h * 0.07}" fill="none"/><path d="${d}" stroke="${i % 2 ? C.pink : C.cyan}" stroke-width="3" stroke-dasharray="26 22" fill="none"/>`;
    }
    for (let i = 0; i < 12; i++)
      out += `<circle cx="${w * (0.08 + i * 0.075)}" cy="${hz + (h - hz) * (0.1 + r() * 0.3)}" r="${h * 0.011}" fill="${r() > 0.2 ? C.ok : C.crit}"/>`;
    return out;
  },
  sre(w, h, hz, r) {
    const x = w * 0.7;
    const u = h / 20;
    let out = `<path d="M${x} ${hz - u * 7.4} L${-w * 0.1} ${hz - u * 3} L${-w * 0.1} ${hz + u * 3.5}Z" fill="${C.gold}" fill-opacity=".22"/>`;
    out += `<path d="M${x - u * 0.9} ${hz + u} L${x - u * 0.55} ${hz - u * 7} h${u * 1.1} L${x + u * 0.9} ${hz + u}Z" fill="${C.night}"/>`;
    out += `<rect x="${x - u * 0.7}" y="${hz - u * 8}" width="${u * 1.4}" height="${u}" fill="${C.gold}"/><path d="M${x - u * 0.8} ${hz - u * 8} L${x} ${hz - u * 9} L${x + u * 0.8} ${hz - u * 8}Z" fill="${C.night}"/>`;
    out += `<ellipse cx="${x}" cy="${hz + u}" rx="${u * 3}" ry="${u * 0.5}" fill="${C.night}"/>`;
    for (let i = 0; i < 4; i++)
      out += sparkline(w * 0.04, hz + u * (1.6 + i * 1.5), w * 0.56, u * 1.3, r, [C.cyan, C.ok, C.pink, C.gold][i]);
    return out;
  },
  ai(w, h, hz, r) {
    const gx = w * 0.62;
    const u = h / 20;
    let out = "";
    for (let i = 0; i < 90; i++) {
      const x = r() * gx * 0.95;
      const y = hz - u * 6 + (r() - 0.5) * u * (9 * (1 - x / gx) + 1.2);
      out += `<circle cx="${x}" cy="${y}" r="${u * (0.08 + r() * 0.12)}" fill="${C.gold}"/><circle cx="${x}" cy="${y}" r="${u * 0.45}" fill="url(#glow)" opacity=".5"/>`;
    }
    for (let i = 0; i < 14; i++)
      out += `<circle cx="${gx + u + (i * (w - gx - u)) / 14}" cy="${hz - u * 6 + Math.sin(i) * u * 0.4}" r="${u * 0.12}" fill="${C.ok}"/>`;
    out += `<path d="M${gx - u * 0.4} ${hz + u} V${hz - u * 8.5} A${u * 1.6} ${u * 1.6} 0 0 1 ${gx + u * 2.8} ${hz - u * 8.5} V${hz + u}" stroke="${C.cyan}" stroke-width="${u * 0.35}" fill="none"/>`;
    out += `<circle cx="${gx + u * 1.2}" cy="${hz - u * 6}" r="${u * 3}" fill="url(#cy)" opacity=".35"/>`;
    return out;
  },
  tools(w, h, hz, r) {
    const u = h / 14;
    let out = "";
    const cols = [C.cyan, C.pink, C.orange, C.violet, C.gold];
    for (let i = 0; i < 9; i++)
      for (let j = 0; j < 4; j++)
        if (r() > 0.35) {
          const c = cols[Math.floor(r() * cols.length)];
          out += `<rect x="${w * 0.14 + i * u * 1.15}" y="${hz - u * 3.6 + j * u * 1.15}" width="${u}" height="${u}" rx="${u * 0.12}" fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="3"/>`;
        }
    out += figure(w * 0.1, hz + u * 2.4, u * 3.4) + figure(w * 0.86, hz + u * 2.4, u * 3.4);
    return out;
  },
  conference(w, h, hz, r) {
    const u = h / 18;
    let out = `<rect x="${w * 0.2}" y="${hz - u * 9}" width="${w * 0.6}" height="${u * 6}" fill="${C.night8}" stroke="${C.cyan}" stroke-width="3"/>`;
    out += sparkline(w * 0.24, hz - u * 8, w * 0.52, u * 4, r, C.pink);
    for (let j = 0; j < 4; j++)
      for (let i = 0; i < 16 + j * 3; i++)
        out += `<circle cx="${(w * (i + 0.5)) / (16 + j * 3)}" cy="${hz + u * (0.4 + j * 1.5)}" r="${u * (0.3 + j * 0.1)}" fill="${C.night}"/>`;
    return out;
  },
  rooftop(w, h, hz, r) {
    const u = h / 18;
    let out = `<path d="M0 ${hz - u * 5} Q${w / 2} ${hz - u * 2.4} ${w} ${hz - u * 5}" stroke="${C.night}" stroke-width="3" fill="none"/>`;
    for (let i = 1; i < 20; i++) {
      const t = i / 20;
      const y = hz - u * 5 + 4 * t * (1 - t) * u * 2.6;
      out += `<circle cx="${w * t}" cy="${y + u * 0.3}" r="${u * 0.16}" fill="${C.gold}"/><circle cx="${w * t}" cy="${y + u * 0.3}" r="${u * 0.6}" fill="url(#glow)" opacity=".5"/>`;
    }
    out += `<rect x="${w * 0.25}" y="${hz + u * 1.2}" width="${w * 0.5}" height="${u * 0.3}" fill="${C.night}"/>`;
    for (let i = 0; i < 6; i++) out += figure(w * (0.28 + i * 0.088), hz + u * 1.6, u * 3);
    return out;
  },
  hackathon(w, h, hz, r) {
    const u = h / 18;
    let out = "";
    for (let i = 0; i < 6; i++) {
      const x = w * (0.1 + i * 0.16);
      out += figure(x, hz + u * 3, u * 3.4);
      out += `<rect x="${x + u * 0.5}" y="${hz + u * 1.2}" width="${u * 1.6}" height="${u * 1}" fill="${C.cyan}" fill-opacity=".85"/><circle cx="${x + u * 1.3}" cy="${hz + u * 1.6}" r="${u * 2.2}" fill="url(#cy)" opacity=".3"/>`;
    }
    out += `<rect x="0" y="${hz + u * 2.3}" width="${w}" height="${u * 0.3}" fill="${C.night}"/>`;
    return out;
  },
  boat(w, h, hz) {
    const u = h / 18;
    const x = w * 0.42;
    const y = hz + u * 2.2;
    return `<path d="M${x} ${y} l${u * 6} 0 l${u * 1.6} -${u * 0.9} l-${u * 8.6} 0Z" fill="${C.night}"/><path d="M${x + u * 1.6} ${y - u * 0.9} l${u * 0.8} -${u * 0.8} h${u * 2} l${u * 0.6} ${u * 0.8}Z" fill="${C.night}"/><path d="M${x} ${y} q-${u * 4} ${u * 0.2} -${u * 9} ${u * 1.2} M${x} ${y + u * 0.2} q-${u * 3} ${u * 0.8} -${u * 7} ${u * 2.4}" stroke="${C.sand}" stroke-opacity=".6" stroke-width="3" fill="none"/>`;
  },
  oncall(w, h, hz) {
    const u = h / 18;
    const x = w * 0.72;
    return `${figure(x, h - u * 1, u * 6)}<rect x="${x + u * 0.9}" y="${h - u * 4.4}" width="${u * 0.8}" height="${u * 1.3}" rx="${u * 0.1}" fill="${C.crit}"/><circle cx="${x + u * 1.3}" cy="${h - u * 3.8}" r="${u * 2.4}" fill="${C.crit}" fill-opacity=".14"/>`;
  },
  squad(w, h, hz) {
    const u = h / 18;
    let out = "";
    for (let i = 0; i < 7; i++) out += figure(w * (0.26 + i * 0.08), h - u * (1 + (i % 2) * 0.4), u * (7.4 - Math.abs(3 - i) * 0.3));
    return out;
  },
  studio(w, h, hz, r) {
    const u = h / 12;
    let out = `<rect width="${w}" height="${h}" fill="${C.night8}"/>`;
    const cols = [C.cyan, C.pink, C.ok, C.gold, C.violet];
    for (let i = 0; i < 9; i++)
      for (let j = 0; j < 3; j++) {
        const x = w * 0.03 + i * w * 0.106;
        const y = u * 0.6 + j * u * 2.5;
        out += `<rect x="${x}" y="${y}" width="${w * 0.096}" height="${u * 2.2}" fill="${C.night}" stroke="${C.night7}" stroke-width="2"/>`;
        out += sparkline(x + 10, y + 10, w * 0.096 - 20, u * 2.2 - 20, r, cols[Math.floor(r() * cols.length)]);
      }
    out += `<path d="M${w * 0.18} ${h} L${w * 0.24} ${h - u * 2.6} H${w * 0.76} L${w * 0.82} ${h}Z" fill="${C.night7}" stroke="${C.pink}" stroke-width="3"/>`;
    return out;
  },
  bridge(w, h, hz, r) {
    const u = h / 18;
    let out = `<path d="M0 ${hz + u * 2} H${w}" stroke="${C.night}" stroke-width="${u * 0.7}"/><path d="M0 ${hz + u * 2} Q${w / 2} ${hz - u * 9} ${w} ${hz + u * 2}" stroke="${C.night}" stroke-width="${u * 0.35}" fill="none"/>`;
    for (let i = 1; i < 24; i++) {
      const t = i / 24;
      out += `<path d="M${w * t} ${hz + u * 2} V${hz + u * 2 - 4 * t * (1 - t) * u * 5.5}" stroke="${C.night}" stroke-width="3"/>`;
    }
    out += figure(w * 0.5, hz + u * 1.7, u * 2.6, C.sand);
    for (let i = 0; i < 16; i++)
      out += `<rect x="${w * 0.53 + r() * u * 4}" y="${hz - u * 3 + r() * u * 3}" width="${u * (0.4 + r() * 2)}" height="${u * 0.14}" fill="${r() > 0.5 ? C.cyan : C.pink}"/>`;
    return out;
  },
  topology(w, h, hz, r) {
    let out = "";
    const pts = Array.from({ length: 9 }, (_, i) => [w * (0.08 + i * 0.105), hz - h * (0.12 + r() * 0.22)]);
    for (let i = 0; i < pts.length - 1; i++)
      out += `<path d="M${pts[i][0]} ${pts[i][1]} L${pts[i + 1][0]} ${pts[i + 1][1]}" stroke="${C.cyan}" stroke-opacity=".5" stroke-width="2"/>`;
    for (const [x, y] of pts) out += `<circle cx="${x}" cy="${y}" r="${h * 0.006}" fill="${C.cyan}"/>`;
    return out;
  },
};

function scene({ name, w, h, night = false, seed = 1, motif, palms = false, horizon = 0.66, noSky = false }) {
  const r = rng(seed);
  const hz = h * horizon;
  let body = "";
  if (!noSky) {
    body += `<rect width="${w}" height="${h}" fill="url(#sky)"/>`;
    if (night) {
      for (let i = 0; i < 120; i++) body += `<circle cx="${r() * w}" cy="${r() * hz * 0.8}" r="${0.6 + r() * 1.4}" fill="${C.sand}" fill-opacity="${0.3 + r() * 0.6}"/>`;
    } else {
      body += sun(w * 0.68, hz - h * 0.06, h * 0.17);
    }
    body += skyline(w, hz, r, { night });
    body += `<rect y="${hz}" width="${w}" height="${h - hz}" fill="url(#water)"/>`;
    body += reflections(w, hz, h, r, night ? C.cyan : C.gold);
  }
  if (motif) body += motifs[motif](w, h, hz, r);
  if (palms) body += palm(w * 0.06, h, h * 0.8, 1) + palm(w * 0.13, h, h * 0.55, 1) + palm(w * 0.95, h, h * 0.7, -1);
  body += `<rect width="${w}" height="${h}" fill="url(#half)" opacity=".5"/><rect width="${w}" height="${h}" filter="url(#grain)"/>`;
  body += label(w, h, name);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${defs(night)}${body}</svg>`;
}

const webp = (img, file, quality = 74) => img.webp({ quality, effort: 5 }).toFile(path.join(OUT, file));

const scenes = [
  { name: "city-sunset.webp", w: 3360, h: 1440, seed: 11, palms: true, motif: "topology" },
  { name: "city-night-neon.webp", w: 3360, h: 1440, seed: 11, night: true, motif: "topology" },
  { name: "mission-platform.webp", w: 1800, h: 1200, seed: 21, motif: "platform" },
  { name: "mission-devops.webp", w: 1800, h: 1200, seed: 22, night: true, motif: "devops", horizon: 0.5 },
  { name: "mission-sre.webp", w: 1800, h: 1200, seed: 23, night: true, motif: "sre", horizon: 0.6 },
  { name: "mission-ai.webp", w: 1800, h: 1200, seed: 24, motif: "ai" },
  { name: "mission-tools.webp", w: 1800, h: 1200, seed: 25, night: true, motif: "tools" },
  { name: "loading-1.webp", w: 1920, h: 1080, seed: 31, night: true, motif: "oncall" },
  { name: "loading-2.webp", w: 1920, h: 1080, seed: 32, night: true, motif: "conference", horizon: 0.72 },
  { name: "loading-3.webp", w: 1920, h: 1080, seed: 33, motif: "rooftop" },
  { name: "loading-4.webp", w: 1920, h: 1080, seed: 34, night: true, motif: "hackathon" },
  { name: "loading-5.webp", w: 1920, h: 1080, seed: 35, motif: "boat", horizon: 0.58 },
  { name: "careers-hero.webp", w: 1920, h: 1080, seed: 41, motif: "squad", horizon: 0.7 },
  { name: "newswire-header.webp", w: 2520, h: 1080, seed: 42, motif: "studio", noSky: true },
  { name: "error-404.webp", w: 1920, h: 1080, seed: 43, night: true, motif: "bridge", horizon: 0.62 },
];

const crewFiles = [
  ["kami", "kami.jpeg"],
  ["paer", "paer.jpeg"],
  ["tommy", "tommy.jpeg"],
  ["love", "love.jpeg"],
  ["max", "max_povalinsky.jpg"],
  ["mauricio", "mauricio.jpeg"],
  ["angelica", "angelica.jpeg"],
  ["mimmi-penny", "mimmi-penny.jpg"],
];

function gradeOverlay(w, h, name) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">${defs(false)}
    <linearGradient id="rim" x1="1" y1="0" x2="0" y2=".4"><stop offset="0" stop-color="${C.pink}" stop-opacity=".55"/><stop offset=".5" stop-color="${C.pink}" stop-opacity="0"/></linearGradient>
    <linearGradient id="teal" x1="0" y1="1" x2=".6" y2="0"><stop offset="0" stop-color="${C.teal}" stop-opacity=".6"/><stop offset=".6" stop-color="${C.teal}" stop-opacity="0"/></linearGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset=".55" stop-color="${C.night}" stop-opacity="0"/><stop offset="1" stop-color="${C.night}" stop-opacity=".85"/></linearGradient>
    <rect width="${w}" height="${h}" fill="url(#rim)"/><rect width="${w}" height="${h}" fill="url(#teal)"/>
    <rect width="${w}" height="${h}" fill="url(#half)" opacity=".35"/><rect width="${w}" height="${h}" fill="url(#fade)"/>
    <rect width="${w}" height="${h}" filter="url(#grain)"/>${label(w, h, name)}</svg>`);
}

async function crewImage(src, w, h, name) {
  const sunset = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">${defs(false)}<rect width="${w}" height="${h}" fill="url(#sky)"/></svg>`,
  );
  const base = await sharp(path.join(TEAM, src))
    .rotate()
    .resize(w, h, { fit: "cover", position: sharp.strategy.attention })
    .modulate({ saturation: 1.25, brightness: 1.04 })
    .linear(1.12, -10)
    .composite([
      { input: sunset, blend: "soft-light" },
      { input: gradeOverlay(w, h, name), blend: "over" },
    ])
    .png()
    .toBuffer();
  return sharp(base);
}

async function main() {
  for (const s of scenes) {
    await webp(sharp(Buffer.from(scene(s))), s.name, 70);
    console.log("scene", s.name);
  }

  const squares = {};
  for (const [id, src] of crewFiles) {
    await webp(await crewImage(src, 1600, 2000, `crew-${id}.webp`), `crew-${id}.webp`, 72);
    const sq = await crewImage(src, 1000, 1000, `crew-${id}-square.webp`);
    await webp(sq, `crew-${id}-square.webp`, 72);
    squares[id] = await (await crewImage(src, 1000, 1000, "")).png().toBuffer();
    console.log("crew", id);
  }

  // Hero poster: 7 crew panels + skyline panel, headline area left empty.
  const city = await sharp(path.join(OUT, "city-sunset.webp")).png().toBuffer();
  async function poster(w, h, panels, name) {
    const layers = [];
    for (const [id, x, y, pw, ph] of panels) {
      const src = id === "city" ? city : squares[id];
      layers.push({
        input: await sharp(src).resize(Math.round(pw), Math.round(ph), { fit: "cover", position: "top" }).png().toBuffer(),
        left: Math.round(x),
        top: Math.round(y),
      });
    }
    layers.push({ input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">${label(w, h, name)}</svg>`) });
    return sharp({ create: { width: w, height: h, channels: 3, background: "#000000" } }).composite(layers).png().toBuffer();
  }
  const g = 10;
  const W = 2880;
  const H = 1620;
  const x0 = W * 0.44;
  const cw = (W - x0 - g * 4) / 4;
  const rh = (H - g * 4) / 3;
  const P = (id, c, r_, cs = 1, rs = 1) => [id, x0 + g + c * (cw + g) - g, g + r_ * (rh + g), cw * cs + g * (cs - 1), rh * rs + g * (rs - 1)];
  const desktop = await poster(
    W,
    H,
    [P("max", 0, 0, 1, 2), P("kami", 1, 0), P("city", 2, 0, 2, 1), P("paer", 1, 1), P("tommy", 2, 1, 1, 2), P("angelica", 3, 1), P("love", 0, 2), P("mauricio", 1, 2), P("mimmi-penny", 3, 2)],
    "key-art-grid.webp",
  );
  await webp(sharp(desktop), "key-art-grid.webp", 72);

  const MW = 1080;
  const MH = 1920;
  const my0 = MH * 0.36;
  const mcw = (MW - g * 4) / 3;
  const mrh = (MH - my0 - g * 4) / 3;
  const M = (id, c, r_, cs = 1, rs = 1) => [id, g + c * (mcw + g), my0 + g + r_ * (mrh + g), mcw * cs + g * (cs - 1), mrh * rs + g * (rs - 1)];
  const mobile = await poster(
    MW,
    MH,
    [M("city", 0, 0, 2, 1), M("max", 2, 0, 1, 2), M("kami", 0, 1), M("paer", 1, 1), M("tommy", 0, 2), M("angelica", 1, 2), M("mauricio", 2, 2)],
    "key-art-grid-mobile.webp",
  );
  await webp(sharp(mobile), "key-art-grid-mobile.webp", 70);

  // OG image: poster crop with the REAL logo + title composited in code.
  const logo = await sharp("public/assets/logo/codelabs_white.svg", { density: 300 }).resize({ width: 300 }).png().toBuffer();
  const ogCrop = await sharp(desktop).extract({ left: Math.round(x0), top: 0, width: W - Math.round(x0), height: H }).resize(640, 630, { fit: "cover" }).png().toBuffer();
  const ogText = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <linearGradient id="f" x1="0" x2="1"><stop offset=".42" stop-color="${C.night}"/><stop offset=".62" stop-color="${C.night}" stop-opacity="0"/></linearGradient>
    <rect width="1200" height="630" fill="url(#f)"/>
    <g font-family="DejaVu Sans, sans-serif" font-weight="bold">
      <text x="60" y="300" font-size="58" fill="${C.sand}">KEEP THE CITY</text>
      <text x="60" y="366" font-size="58" fill="${C.pink}">RUNNING.</text>
      <text x="60" y="430" font-size="23" fill="${C.sand}" font-weight="normal">Platform engineering · SRE · DevOps · AI</text>
      <text x="60" y="464" font-size="23" fill="${C.sand}" font-weight="normal">Engineering consultancy in Stockholm</text>
    </g></svg>`);
  const og = await sharp({ create: { width: 1200, height: 630, channels: 3, background: C.night } })
    .composite([{ input: ogCrop, left: 560, top: 0 }, { input: ogText }, { input: logo, left: 60, top: 110 }])
    .png()
    .toBuffer();
  await webp(sharp(og), "og-default.webp", 82);
  await sharp(og).jpeg({ quality: 84 }).toFile(path.join(OUT, "og-default.jpg"));
  console.log("done");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
