/**
 * Common Ground — Daily Social Post Automation
 * 
 * What this does every day (run via GitHub Actions at 8am):
 * 1. Reads today's puzzle categories from daily-sets-reviewed.js
 * 2. Generates a branded 1080x1080 social graphic as an SVG→PNG
 * 3. Uploads the image to your GitHub repo (overwrites social-post-today.png)
 * 4. Updates your Google Sheet with today's date, categories, and post copy
 * 
 * Then Make.com triggers at 9am, reads the sheet, and posts to Facebook.
 * 
 * Setup:
 * 1. Add this file to your GitHub repo as: scripts/daily-social-automation.js
 * 2. Add the GitHub Action workflow (see bottom of this file)
 * 3. Add these GitHub Secrets in your repo Settings → Secrets:
 *    - GOOGLE_SHEETS_ID       (from your sheet URL)
 *    - GOOGLE_SERVICE_ACCOUNT (JSON key from Google Cloud Console)
 *    - GH_TOKEN               (GitHub personal access token with repo scope)
 * 
 * Install dependencies (add to package.json):
 *   npm install @googleapis/sheets sharp
 */

const { google } = require('@googleapis/sheets');
const sharp = require('sharp');
const https = require('https');

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const GITHUB_USER   = 'thefullrob';
const GITHUB_REPO   = 'Common-Ground';
const GITHUB_BRANCH = 'main';
const IMAGE_PATH    = 'social-post-today.png'; // always same filename = same URL

const SHEET_ID      = process.env.GOOGLE_SHEETS_ID;
const GH_TOKEN      = process.env.GH_TOKEN;
const SERVICE_ACCT  = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

// ─── STEP 1: GET TODAY'S PUZZLE ──────────────────────────────────────────────

async function getTodaysPuzzle() {
  const today = new Date().toISOString().split('T')[0];

  const jsText = await fetch(
    `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${GITHUB_BRANCH}/daily-sets-reviewed.js`
  ).then(r => r.text());

  // Use eval in a controlled way to parse the JS array
  let sets;
  const script = jsText.replace('window.COMMON_GROUND_DAILY_SETS = ', 'sets = ');
  eval(script);

  const todaySet = sets.find(s => s.date === today);
  if (!todaySet) throw new Error(`No puzzle found for ${today}`);

  return {
    date: todaySet.date,
    puzzleNumber: sets.length - sets.indexOf(todaySet),
    categoryA: todaySet.easy.labels.A,
    categoryB: todaySet.easy.labels.B,
    categoryC: todaySet.easy.labels.C,
    title: todaySet.easy.title,
  };
}

// ─── STEP 2: GENERATE SOCIAL IMAGE ───────────────────────────────────────────

function generateSVG(puzzle) {
  const { categoryA, categoryB, categoryC, date, puzzleNumber } = puzzle;

  // Format date nicely: 2026-03-27 → March 27, 2026
  const dateObj = new Date(date + 'T12:00:00');
  const dateFormatted = dateObj.toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });

  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Georgia');
    </style>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1080" fill="#E8DCC8"/>

  <!-- Top eyebrow -->
  <text x="540" y="110" font-family="Georgia, serif" font-size="32" font-weight="400"
    fill="#7a5c3a" text-anchor="middle" letter-spacing="8">DAILY PUZZLE · #${puzzleNumber}</text>

  <!-- Main title -->
  <text x="540" y="210" font-family="Georgia, serif" font-size="130" font-weight="700"
    fill="#2c1a0e" text-anchor="middle" letter-spacing="4">COMMON</text>
  <text x="540" y="330" font-family="Georgia, serif" font-size="130" font-weight="700"
    fill="#2c1a0e" text-anchor="middle" letter-spacing="4">GROUND</text>

  <!-- Subtitle -->
  <text x="540" y="390" font-family="Georgia, serif" font-size="36" font-style="italic"
    fill="#7a5c3a" text-anchor="middle">Can you find what they share?</text>

  <!-- Venn diagram circles -->
  <ellipse cx="420" cy="590" rx="200" ry="200" fill="#2c1a0e" opacity="0.08"/>
  <ellipse cx="660" cy="590" rx="200" ry="200" fill="#2c1a0e" opacity="0.08"/>
  <ellipse cx="540" cy="450" rx="200" ry="200" fill="#2c1a0e" opacity="0.08"/>

  <ellipse cx="420" cy="590" rx="200" ry="200" fill="none" stroke="#2c1a0e" stroke-width="3.5" opacity="0.45"/>
  <ellipse cx="660" cy="590" rx="200" ry="200" fill="none" stroke="#2c1a0e" stroke-width="3.5" opacity="0.45"/>
  <ellipse cx="540" cy="450" rx="200" ry="200" fill="none" stroke="#2c1a0e" stroke-width="3.5" opacity="0.45"/>

  <!-- Center overlap -->
  <circle cx="540" cy="538" r="72" fill="#7a5c3a" opacity="0.12"/>
  <text x="540" y="528" font-family="Georgia, serif" font-size="22" font-weight="700"
    fill="#2c1a0e" text-anchor="middle" opacity="0.6">COMMON</text>
  <text x="540" y="552" font-family="Georgia, serif" font-size="22" font-weight="700"
    fill="#2c1a0e" text-anchor="middle" opacity="0.6">GROUND</text>
  <text x="540" y="582" font-family="Georgia, serif" font-size="40"
    fill="#7a5c3a" text-anchor="middle">?</text>

  <!-- Category A pill (bottom left) -->
  <rect x="90" y="752" width="${Math.max(260, categoryA.length * 22 + 60)}" height="60" rx="30" fill="#2c1a0e"/>
  <text x="${90 + Math.max(260, categoryA.length * 22 + 60) / 2}" y="790"
    font-family="Georgia, serif" font-size="28" font-weight="700"
    fill="#E8DCC8" text-anchor="middle">${categoryA.toUpperCase()}</text>

  <!-- Category B pill (bottom center) -->
  <rect x="${540 - Math.max(260, categoryB.length * 22 + 60) / 2}" y="752"
    width="${Math.max(260, categoryB.length * 22 + 60)}" height="60" rx="30" fill="#2c1a0e"/>
  <text x="540" y="790"
    font-family="Georgia, serif" font-size="28" font-weight="700"
    fill="#E8DCC8" text-anchor="middle">${categoryB.toUpperCase()}</text>

  <!-- Category C pill (bottom right) -->
  <rect x="${990 - Math.max(260, categoryC.length * 22 + 60)}" y="752"
    width="${Math.max(260, categoryC.length * 22 + 60)}" height="60" rx="30" fill="#2c1a0e"/>
  <text x="${990 - Math.max(260, categoryC.length * 22 + 60) / 2}" y="790"
    font-family="Georgia, serif" font-size="28" font-weight="700"
    fill="#E8DCC8" text-anchor="middle">${categoryC.toUpperCase()}</text>

  <!-- Divider -->
  <line x1="340" y1="870" x2="740" y2="870" stroke="#7a5c3a" stroke-width="1" opacity="0.4"/>

  <!-- CTA -->
  <text x="540" y="910" font-family="Georgia, serif" font-size="28" letter-spacing="4"
    fill="#7a5c3a" text-anchor="middle">PLAY FREE TODAY</text>
  <text x="540" y="960" font-family="Georgia, serif" font-size="42" font-weight="700"
    fill="#2c1a0e" text-anchor="middle">commongroundpuzzle.com</text>

  <!-- Hashtags -->
  <text x="540" y="1010" font-family="Georgia, serif" font-size="24"
    fill="#7a5c3a" text-anchor="middle" opacity="0.6">#CommonGround · #DailyPuzzle · #BrainTeaser</text>

  <!-- Date -->
  <text x="540" y="1050" font-family="Georgia, serif" font-size="22"
    fill="#7a5c3a" text-anchor="middle" opacity="0.5">${dateFormatted}</text>
</svg>`.trim();
}

async function generatePNG(svgString) {
  const pngBuffer = await sharp(Buffer.from(svgString))
    .resize(1080, 1080)
    .png()
    .toBuffer();
  return pngBuffer;
}

// ─── STEP 3: UPLOAD IMAGE TO GITHUB ──────────────────────────────────────────

async function uploadToGitHub(pngBuffer) {
  const base64 = pngBuffer.toString('base64');
  const apiUrl = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${IMAGE_PATH}`;

  // Get current file SHA (needed to overwrite)
  let sha;
  try {
    const existing = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${GH_TOKEN}`,
        'Accept': 'application/vnd.github+json',
      }
    }).then(r => r.json());
    sha = existing.sha;
  } catch (e) {
    sha = undefined; // File doesn't exist yet, that's fine
  }

  const body = {
    message: `Daily social post image — ${new Date().toISOString().split('T')[0]}`,
    content: base64,
    branch: GITHUB_BRANCH,
    ...(sha ? { sha } : {})
  };

  const response = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${GH_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`GitHub upload failed: ${err}`);
  }

  return `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${GITHUB_BRANCH}/${IMAGE_PATH}`;
}

// ─── STEP 4: UPDATE GOOGLE SHEET ─────────────────────────────────────────────

async function updateGoogleSheet(puzzle, imageUrl) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: SERVICE_ACCT.client_email,
      private_key: SERVICE_ACCT.private_key,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
const sheets = google.sheets({ version: 'v4', auth });

  const postCopy = `🧩 Puzzle #${puzzle.puzzleNumber} — Can you find the Common Ground between ${puzzle.categoryA}, ${puzzle.categoryB}, and ${puzzle.categoryC}? Play free at commongroundpuzzle.com`;

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: 'Daily Puzzle!A:G',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [[
        puzzle.date,
        puzzle.puzzleNumber,
        puzzle.categoryA,
        puzzle.categoryB,
        puzzle.categoryC,
        postCopy,
        imageUrl,
      ]]
    }
  });
  console.log(`✅ Sheet updated for ${puzzle.date}`);
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  try {
    console.log('🔍 Getting today\'s puzzle...');
    const puzzle = await getTodaysPuzzle();
    console.log(`📅 Found: ${puzzle.date} — ${puzzle.categoryA} + ${puzzle.categoryB} + ${puzzle.categoryC}`);

    console.log('🎨 Generating social image...');
    const svg = generateSVG(puzzle);
    const png = await generatePNG(svg);

    console.log('📤 Uploading to GitHub...');
    const imageUrl = await uploadToGitHub(png);
    console.log(`✅ Image live at: ${imageUrl}`);

    console.log('📊 Updating Google Sheet...');
    await updateGoogleSheet(puzzle, imageUrl);

    console.log('🎉 All done! Make.com will post to Facebook at 9am.');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();

/**
 * ─── GITHUB ACTIONS WORKFLOW ──────────────────────────────────────────────────
 * 
 * Create this file in your repo: .github/workflows/daily-social-post.yml
 * 
 * ---
 * name: Daily Social Post
 * on:
 *   schedule:
 *     - cron: '0 12 * * *'   # Runs at 8am ET (12pm UTC) every day
 *   workflow_dispatch:         # Also allows manual trigger
 * 
 * jobs:
 *   generate-post:
 *     runs-on: ubuntu-latest
 *     steps:
 *       - uses: actions/checkout@v4
 *       - uses: actions/setup-node@v4
 *         with:
 *           node-version: '20'
 *       - run: npm install @googleapis/sheets sharp
 *       - run: node scripts/daily-social-automation.js
 *         env:
 *           GOOGLE_SHEETS_ID: ${{ secrets.GOOGLE_SHEETS_ID }}
 *           GOOGLE_SERVICE_ACCOUNT: ${{ secrets.GOOGLE_SERVICE_ACCOUNT }}
 *           GH_TOKEN: ${{ secrets.GH_TOKEN }}
 */

