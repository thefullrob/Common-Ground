const fs = require("fs");
const path = require("path");
const vm = require("vm");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const DAILY_PATH = path.join(ROOT, "daily-sets-reviewed.js");
const INDEX_PATH = path.join(ROOT, "index.html");
const IMAGE_NAME = "social-post-today.png";
const IMAGE_PATH = path.join(ROOT, IMAGE_NAME);
const SITE_URL = "https://commongroundpuzzle.com/";
const IMAGE_URL = `https://raw.githubusercontent.com/thefullrob/Common-Ground/main/${IMAGE_NAME}`;

function getEasternDateStamp(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const lookup = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${lookup.year}-${lookup.month}-${lookup.day}`;
}

function loadDailySets() {
  const code = fs.readFileSync(DAILY_PATH, "utf8");
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: "daily-sets-reviewed.js" });
  if (!Array.isArray(sandbox.window.COMMON_GROUND_DAILY_SETS)) {
    throw new Error("COMMON_GROUND_DAILY_SETS was not found");
  }
  return sandbox.window.COMMON_GROUND_DAILY_SETS;
}

function getLivePuzzle(sets) {
  const today = getEasternDateStamp();
  const exact = sets.find((entry) => entry.date === today);
  if (exact) return exact;

  const past = sets
    .filter((entry) => entry.date <= today)
    .sort((a, b) => b.date.localeCompare(a.date));
  if (!past.length) throw new Error(`No live puzzle found for ${today}`);
  return past[0];
}

function getPuzzleNumber(sets, puzzle) {
  const sorted = [...sets].sort((a, b) => a.date.localeCompare(b.date));
  return sorted.findIndex((entry) => entry.date === puzzle.date) + 1;
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pillWidth(text) {
  return Math.min(360, Math.max(190, text.length * 18 + 46));
}

function pillFontSize(text) {
  if (text.length > 17) return 17;
  if (text.length > 13) return 20;
  if (text.length > 10) return 23;
  return 27;
}

function formatDate(dateStamp) {
  const date = new Date(`${dateStamp}T12:00:00-04:00`);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/New_York"
  }).format(date);
}

function getCategoryLayout(labels) {
  const items = [labels.A, labels.B, labels.C].map((text) => ({
    text,
    safeText: escapeXml(text.toUpperCase()),
    width: pillWidth(text),
    fontSize: pillFontSize(text)
  }));
  let gap = 16;
  let total = items.reduce((sum, item) => sum + item.width, 0) + gap * 2;
  if (total > 1000) {
    gap = 10;
    const overflow = total - 1000;
    const shrink = Math.ceil(overflow / 3);
    items.forEach((item) => {
      item.width = Math.max(170, item.width - shrink);
      item.fontSize = Math.max(15, item.fontSize - 2);
    });
    total = items.reduce((sum, item) => sum + item.width, 0) + gap * 2;
  }
  let x = (1080 - total) / 2;
  return items.map((item) => {
    const out = { ...item, x };
    x += item.width + gap;
    return out;
  });
}

function generateSvg(puzzle, puzzleNumber) {
  const labels = puzzle.easy.labels;
  const categoryLayout = getCategoryLayout(labels);
  const dateText = formatDate(puzzle.date);
  const titleText = escapeXml(puzzle.easy.title);

  const pills = categoryLayout.map((item) => `
    <rect x="${item.x}" y="750" width="${item.width}" height="62" rx="31" fill="#2f2118"/>
    <text x="${item.x + item.width / 2}" y="782" font-family="Georgia, serif" font-size="${item.fontSize}" font-weight="700" fill="#f1e7d2" text-anchor="middle" dominant-baseline="middle">${item.safeText}</text>`).join("");

  return `<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow" cx="50%" cy="36%" r="70%">
        <stop offset="0%" stop-color="#fbf4df"/>
        <stop offset="55%" stop-color="#e8dcc8"/>
        <stop offset="100%" stop-color="#cdbb9c"/>
      </radialGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#2f2118" flood-opacity="0.18"/>
      </filter>
    </defs>
    <rect width="1080" height="1080" fill="url(#glow)"/>
    <rect x="56" y="56" width="968" height="968" rx="38" fill="none" stroke="#2f2118" stroke-width="3" opacity="0.12"/>
    <text x="540" y="104" font-family="Georgia, serif" font-size="30" fill="#7a5c3a" text-anchor="middle" letter-spacing="7">DAILY PUZZLE · #${puzzleNumber}</text>
    <text x="540" y="208" font-family="Georgia, serif" font-size="126" font-weight="700" fill="#2f2118" text-anchor="middle" letter-spacing="4">COMMON</text>
    <text x="540" y="326" font-family="Georgia, serif" font-size="126" font-weight="700" fill="#2f2118" text-anchor="middle" letter-spacing="4">GROUND</text>
    <text x="540" y="386" font-family="Georgia, serif" font-size="34" font-style="italic" fill="#7a5c3a" text-anchor="middle">Can you find what they share?</text>

    <g filter="url(#shadow)">
      <ellipse cx="416" cy="586" rx="198" ry="198" fill="#6abf8f" opacity="0.22"/>
      <ellipse cx="664" cy="586" rx="198" ry="198" fill="#bfa7ef" opacity="0.22"/>
      <ellipse cx="540" cy="446" rx="198" ry="198" fill="#8db8e8" opacity="0.22"/>
      <ellipse cx="416" cy="586" rx="198" ry="198" fill="none" stroke="#2f2118" stroke-width="4" opacity="0.55"/>
      <ellipse cx="664" cy="586" rx="198" ry="198" fill="none" stroke="#2f2118" stroke-width="4" opacity="0.55"/>
      <ellipse cx="540" cy="446" rx="198" ry="198" fill="none" stroke="#2f2118" stroke-width="4" opacity="0.55"/>
      <circle cx="540" cy="538" r="73" fill="#2f2118" opacity="0.1"/>
      <text x="540" y="526" font-family="Georgia, serif" font-size="22" font-weight="700" fill="#2f2118" text-anchor="middle" opacity="0.62">COMMON</text>
      <text x="540" y="552" font-family="Georgia, serif" font-size="22" font-weight="700" fill="#2f2118" text-anchor="middle" opacity="0.62">GROUND</text>
      <text x="540" y="586" font-family="Georgia, serif" font-size="42" fill="#7a5c3a" text-anchor="middle">?</text>
    </g>

    ${pills}
    <text x="540" y="862" font-family="Georgia, serif" font-size="25" fill="#7a5c3a" text-anchor="middle">${escapeXml(titleText)}</text>
    <line x1="340" y1="900" x2="740" y2="900" stroke="#7a5c3a" stroke-width="1" opacity="0.35"/>
    <text x="540" y="940" font-family="Georgia, serif" font-size="28" letter-spacing="4" fill="#7a5c3a" text-anchor="middle">PLAY FREE TODAY</text>
    <text x="540" y="990" font-family="Georgia, serif" font-size="42" font-weight="700" fill="#2f2118" text-anchor="middle">commongroundpuzzle.com</text>
    <text x="540" y="1036" font-family="Georgia, serif" font-size="23" fill="#7a5c3a" text-anchor="middle" opacity="0.62">${dateText}</text>
  </svg>`;
}

async function writeSocialImage(puzzle, puzzleNumber) {
  const svg = generateSvg(puzzle, puzzleNumber);
  await sharp(Buffer.from(svg)).resize(1080, 1080).png().toFile(IMAGE_PATH);
}

function updateIndex(puzzle) {
  const cacheBust = puzzle.date.replace(/-/g, "");
  let html = fs.readFileSync(INDEX_PATH, "utf8");
  html = html
    .replace(/<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${IMAGE_URL}?v=${cacheBust}" />`)
    .replace(/<meta name="twitter:image" content="[^"]*"\s*\/>/, `<meta name="twitter:image" content="${IMAGE_URL}?v=${cacheBust}" />`)
    .replace(/<meta property="og:image:width" content="[^"]*"\s*\/>/, `<meta property="og:image:width" content="1080" />`)
    .replace(/<meta property="og:image:height" content="[^"]*"\s*\/>/, `<meta property="og:image:height" content="1080" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${SITE_URL}" />`);
  fs.writeFileSync(INDEX_PATH, html, "utf8");
}

async function main() {
  const sets = loadDailySets();
  const puzzle = getLivePuzzle(sets);
  const puzzleNumber = getPuzzleNumber(sets, puzzle);
  await writeSocialImage(puzzle, puzzleNumber);
  updateIndex(puzzle);
  console.log(`Generated ${IMAGE_NAME} for ${puzzle.date} (#${puzzleNumber})`);
  console.log(`Categories: ${puzzle.easy.labels.A} + ${puzzle.easy.labels.B} + ${puzzle.easy.labels.C}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
