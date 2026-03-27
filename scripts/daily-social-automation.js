const { GoogleAuth } = require('google-auth-library');
const { google } = require('@googleapis/sheets');
const sharp = require('sharp');

const GITHUB_USER   = 'thefullrob';
const GITHUB_REPO   = 'Common-Ground';
const GITHUB_BRANCH = 'main';
const IMAGE_PATH    = 'social-post-today.png';

const SHEET_ID     = process.env.GOOGLE_SHEETS_ID;
const GH_TOKEN     = process.env.GH_TOKEN;
const SERVICE_ACCT = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

async function getTodaysPuzzle() {
  const today = new Date().toISOString().split('T')[0];

  const jsText = await fetch(
    `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${GITHUB_BRANCH}/daily-sets-reviewed.js`
  ).then(r => r.text());

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

function generateSVG(puzzle) {
  const { categoryA, categoryB, categoryC, date, puzzleNumber } = puzzle;
  const dateObj = new Date(date + 'T12:00:00');
  const dateFormatted = dateObj.toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });

  return `<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1080" height="1080" fill="#E8DCC8"/>
  <text x="540" y="110" font-family="Georgia, serif" font-size="32" font-weight="400" fill="#7a5c3a" text-anchor="middle" letter-spacing="8">DAILY PUZZLE · #${puzzleNumber}</text>
  <text x="540" y="210" font-family="Georgia, serif" font-size="130" font-weight="700" fill="#2c1a0e" text-anchor="middle" letter-spacing="4">COMMON</text>
  <text x="540" y="330" font-family="Georgia, serif" font-size="130" font-weight="700" fill="#2c1a0e" text-anchor="middle" letter-spacing="4">GROUND</text>
  <text x="540" y="390" font-family="Georgia, serif" font-size="36" font-style="italic" fill="#7a5c3a" text-anchor="middle">Can you find what they share?</text>
  <ellipse cx="420" cy="590" rx="200" ry="200" fill="#2c1a0e" opacity="0.08"/>
  <ellipse cx="660" cy="590" rx="200" ry="200" fill="#2c1a0e" opacity="0.08"/>
  <ellipse cx="540" cy="450" rx="200" ry="200" fill="#2c1a0e" opacity="0.08"/>
  <ellipse cx="420" cy="590" rx="200" ry="200" fill="none" stroke="#2c1a0e" stroke-width="3.5" opacity="0.45"/>
  <ellipse cx="660" cy="590" rx="200" ry="200" fill="none" stroke="#2c1a0e" stroke-width="3.5" opacity="0.45"/>
  <ellipse cx="540" cy="450" rx="200" ry="200" fill="none" stroke="#2c1a0e" stroke-width="3.5" opacity="0.45"/>
  <circle cx="540" cy="538" r="72" fill="#7a5c3a" opacity="0.12"/>
  <text x="540" y="528" font-family="Georgia, serif" font-size="22" font-weight="700" fill="#2c1a0e" text-anchor="middle" opacity="0.6">COMMON</text>
  <text x="540" y="552" font-family="Georgia, serif" font-size="22" font-weight="700" fill="#2c1a0e" text-anchor="middle" opacity="0.6">GROUND</text>
  <text x="540" y="582" font-family="Georgia, serif" font-size="40" fill="#7a5c3a" text-anchor="middle">?</text>
  <rect x="90" y="752" width="${Math.max(260, categoryA.length * 22 + 60)}" height="60" rx="30" fill="#2c1a0e"/>
  <text x="${90 + Math.max(260, categoryA.length * 22 + 60) / 2}" y="790" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#E8DCC8" text-anchor="middle">${categoryA.toUpperCase()}</text>
  <rect x="${540 - Math.max(260, categoryB.length * 22 + 60) / 2}" y="752" width="${Math.max(260, categoryB.length * 22 + 60)}" height="60" rx="30" fill="#2c1a0e"/>
  <text x="540" y="790" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#E8DCC8" text-anchor="middle">${categoryB.toUpperCase()}</text>
  <rect x="${990 - Math.max(260, categoryC.length * 22 + 60)}" y="752" width="${Math.max(260, categoryC.length * 22 + 60)}" height="60" rx="30" fill="#2c1a0e"/>
  <text x="${990 - Math.max(260, categoryC.length * 22 + 60) / 2}" y="790" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#E8DCC8" text-anchor="middle">${categoryC.toUpperCase()}</text>
  <line x1="340" y1="870" x2="740" y2="870" stroke="#7a5c3a" stroke-width="1" opacity="0.4"/>
  <text x="540" y="910" font-family="Georgia, serif" font-size="28" letter-spacing="4" fill="#7a5c3a" text-anchor="middle">PLAY FREE TODAY</text>
  <text x="540" y="960" font-family="Georgia, serif" font-size="42" font-weight="700" fill="#2c1a0e" text-anchor="middle">commongroundpuzzle.com</text>
  <text x="540" y="1010" font-family="Georgia, serif" font-size="24" fill="#7a5c3a" text-anchor="middle" opacity="0.6">#CommonGround · #DailyPuzzle · #BrainTeaser</text>
  <text x="540" y="1050" font-family="Georgia, serif" font-size="22" fill="#7a5c3a" text-anchor="middle" opacity="0.5">${dateFormatted}</text>
</svg>`;
}

async function generatePNG(svgString) {
  return await sharp(Buffer.from(svgString)).resize(1080, 1080).png().toBuffer();
}

async function uploadToGitHub(pngBuffer) {
  const base64 = pngBuffer.toString('base64');
  const apiUrl = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${IMAGE_PATH}`;

  let sha;
  try {
    const existing = await fetch(apiUrl, {
      headers: { 'Authorization': `Bearer ${GH_TOKEN}`, 'Accept': 'application/vnd.github+json' }
    }).then(r => r.json());
    sha = existing.sha;
  } catch (e) { sha = undefined; }

  const response = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${GH_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: `Daily social post image — ${new Date().toISOString().split('T')[0]}`,
      content: base64,
      branch: GITHUB_BRANCH,
      ...(sha ? { sha } : {})
    })
  });

  if (!response.ok) throw new Error(`GitHub upload failed: ${await response.text()}`);
  return `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${GITHUB_BRANCH}/${IMAGE_PATH}`;
}

async function updateGoogleSheet(puzzle, imageUrl) {
  const auth = new GoogleAuth({
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
