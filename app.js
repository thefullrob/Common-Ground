const runtimeStyle = document.createElement("style");
runtimeStyle.textContent = `
  .top-row { display: grid; gap: 8px; justify-items: center; }
  .nav-row, .stage-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 8px; }
  .stage-btn.locked { color: #8b94a7; }
  .stage-btn.unlocked-pulse { animation: hardUnlockPulse 1s ease-in-out infinite; box-shadow: 0 0 0 0 rgba(17, 24, 39, 0.2); }
  @keyframes hardUnlockPulse {
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(17, 24, 39, 0.24); }
    50% { transform: scale(1.06); box-shadow: 0 0 0 8px rgba(17, 24, 39, 0.05); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(17, 24, 39, 0); }
  }
  .top-action.active, .stage-btn.active { background: #111827; color: #fff; border-color: #111827; }
  .top h1, #subtitle, #summary { display: none !important; }
  .hud { display: grid; gap: 8px; justify-items: start; }
  .timer-wrap { display: grid; gap: 6px; width: min(220px, 100%); }
  .timer-wrap[hidden] { display: none; }
  .timer-label { font-size: 0.85rem; font-weight: 900; color: #7a5a35; letter-spacing: 0.02em; }
  .timer-bar { width: 100%; height: 10px; border-radius: 999px; overflow: hidden; background: #eadfc9; border: 1px solid rgba(122, 90, 53, 0.18); }
  .timer-fill { width: 100%; height: 100%; background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%); transform-origin: left center; transition: transform 120ms linear, background 120ms linear; }
  .top { padding-top: 2px; }
  .top-row { justify-content: center; }
  .launch-screen {
    position: fixed;
    inset: 0;
    background:
      radial-gradient(circle at top, rgba(255,255,255,0.72) 0, transparent 34%),
      linear-gradient(180deg, #f7f0df 0%, #efe3cb 52%, #e6d5b7 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    z-index: 4200;
  }
  .launch-screen[hidden] { display: none; }
  .launch-card {
    width: min(420px, 100%);
    display: grid;
    gap: 18px;
    justify-items: center;
    text-align: center;
    color: #111827;
  }
  .launch-mark {
    width: 190px;
    height: 170px;
    position: relative;
    filter: drop-shadow(0 18px 30px rgba(91, 59, 24, 0.10));
  }
  .launch-circle {
    position: absolute;
    width: 108px;
    height: 108px;
    border-radius: 50%;
    border: 6px solid #5b3820;
    background: rgba(255, 250, 240, 0.18);
  }
  .launch-circle-a {
    top: 2px;
    left: 41px;
  }
  .launch-circle-b {
    left: 10px;
    top: 60px;
  }
  .launch-circle-c {
    right: 10px;
    top: 60px;
  }
  .launch-title { display: none; }
  .launch-wordmark {
    color: #231815;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(2.3rem, 6vw, 3.2rem);
    line-height: 0.9;
    letter-spacing: 0.01em;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    margin-top: -4px;
  }  .launch-copy {
    max-width: 28ch;
    color: #5f4525;
    font-size: 1.05rem;
    line-height: 1.45;
    font-weight: 700;
  }
  .launch-actions {
    width: min(240px, 100%);
    display: grid;
    gap: 18px;
  }
  .launch-primary, .launch-secondary {
    min-height: 58px;
    border-radius: 999px;
    font-size: 1.02rem;
    font-weight: 800;
  }
  .launch-primary {
    background: #51341f;
    color: #fffaf0;
    border: 1px solid #51341f;
  }
  .launch-secondary {
    background: rgba(255,249,240,0.62);
    color: #51341f;
    border: 1px solid rgba(81, 52, 31, 0.34);
  }
  .launch-meta {
    display: grid;
    gap: 4px;
    color: #5f4525;
  }
  .launch-date {
    font-size: 1.1rem;
    font-weight: 700;
  }
  .launch-number {
    font-size: 0.98rem;
    font-weight: 700;
    color: #7a5a35;
  }
  #undo-btn { background: linear-gradient(180deg, #fffdf8 0%, #f5ead7 100%); color: #162033; }
  #undo-btn:disabled { background: linear-gradient(180deg, #f4eee3 0%, #ede3d2 100%); color: #6b7280; }
  .archive-list, .badge-list { display: grid; gap: 10px; }
  .archive-item, .badge-item { border: 1px solid #e8e0d3; border-radius: 16px; background: #faf6ee; padding: 12px; display: grid; gap: 6px; text-align: left; }
  .archive-date, .badge-title { font-size: 0.88rem; font-weight: 900; color: #162033; }
  .archive-meta, .badge-copy { font-size: 0.84rem; color: #4b5563; line-height: 1.35; }
  .badge-item.locked { opacity: 0.6; }
  .pill-row { display: flex; flex-wrap: wrap; gap: 6px; }
  .mini-pill { border-radius: 999px; border: 1px solid #d8cfbe; background: #fffdf8; padding: 4px 8px; font-size: 0.72rem; font-weight: 900; color: #435066; }
  .modal-overlay { position: fixed; inset: 0; background: rgba(22, 32, 51, 0.52); display: flex; align-items: center; justify-content: center; padding: 18px; z-index: 4000; }
  .modal-overlay[hidden] { display: none; }
  .modal-card { width: min(420px, 100%); background: #fffdf8; border: 1px solid #d8cfbe; border-radius: 22px; padding: 18px; box-shadow: 0 20px 40px rgba(15, 23, 42, 0.18); display: grid; gap: 12px; }
  .modal-card h2 { margin: 0; font-size: 1.4rem; letter-spacing: 0.03em; text-align: center; }
  .modal-copy { color: #435066; font-size: 0.94rem; line-height: 1.45; text-align: center; }
  .modal-actions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
  .modal-primary { background: #111827; color: #fff; border-color: #111827; }
  .slot.wrong .tile { background: #fee2e2; border-color: #dc2626; box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.12); }
  .circle.wrong-circle { border-color: #dc2626 !important; background: rgba(239, 68, 68, 0.12) !important; }
  .slot.wrong::before, .slot.wrong::after { background: #dc2626; }
  #slot-S1.revealed .tile { background: #efd9f8; border-color: #a855f7; }
  #slot-S2.revealed .tile { background: #dff5ec; border-color: #10b981; }
  #slot-S3.revealed .tile { background: #dbeafe; border-color: #3b82f6; }
  #slot-S4.revealed .tile { background: #fde7bf; border-color: #d97706; }
`;
document.head.appendChild(runtimeStyle);
runtimeStyle.textContent += `
  .badge-list { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
  .badge-item { background: #fffdf8; text-align: center; gap: 8px; padding: 12px 10px; }
  .badge-item .pill-row { justify-content: center; }
  .badge-item.unlocked { cursor: pointer; transition: transform 120ms ease, box-shadow 120ms ease; }
  .badge-item.unlocked:hover { transform: translateY(-1px); box-shadow: 0 10px 18px rgba(15, 23, 42, 0.07); }
  .badge-visual, .badge-reward-art, .badge-detail-art {
    background-image: url("badges.png");
    background-repeat: no-repeat;
    background-size: 400% 300%;
    background-color: #f4eee3;
    box-shadow: inset 0 0 0 1px rgba(216, 207, 190, 0.7);
  }
  .badge-visual { width: 100%; aspect-ratio: 1 / 1; border-radius: 20px; }
  .badge-item.locked .badge-visual { filter: grayscale(1) saturate(0.5); opacity: 0.55; }
  .badge-copy { min-height: 34px; }
  .badge-reward-card, .badge-detail-card {
    width: min(380px, 100%);
    background: #fffdf8;
    border: 1px solid #d8cfbe;
    border-radius: 24px;
    padding: 18px;
    box-shadow: 0 24px 42px rgba(15, 23, 42, 0.22);
    display: grid;
    gap: 18px;
    justify-items: center;
    text-align: center;
  }
  .badge-reward-card { animation: badgeRise 360ms ease; }
  .badge-reward-kicker {
    font-size: 0.8rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #b45309;
  }
  .badge-reward-card h2, .badge-detail-card h2 { margin: 0; font-size: 1.5rem; letter-spacing: 0.03em; }
  .badge-reward-art { width: 220px; aspect-ratio: 1 / 1; border-radius: 26px; }
  .badge-detail-card { width: min(460px, 100%); }
  .badge-detail-art { width: min(300px, 74vw); aspect-ratio: 1 / 1; border-radius: 28px; }
  .badge-reward-copy { color: #435066; font-size: 0.95rem; line-height: 1.45; }
  @keyframes badgeRise {
    0% { opacity: 0; transform: translateY(22px) scale(0.94); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  @media (max-width: 560px) {
    .badge-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .badge-reward-art { width: 180px; }
    .badge-detail-art { width: min(250px, 72vw); }
  }
`;
const SLOTS = ["S1", "S2", "S3", "S4"];
const BASE_LIVES = 3;
const HARD_TIMER_MS = 45000;
const HARD_LIFELINE_BONUS_MS = 15000;
const TUTORIAL_KEY = "common-ground-tutorial-seen";
const STATS_KEY = "common-ground-stats-v2";
// Share metadata: update these three values if you ever refresh the public branding.
const APP_URL = "https://thefullrob.github.io/Common-Ground/";
const SHARE_TITLE = "Common Ground â€” The Daily Overlap Puzzle";
const SHARE_DESCRIPTION = "Find the hidden overlap between three categories. Play todayâ€™s puzzle in under 2 minutes.";
const DAILY_SETS = [...(window.COMMON_GROUND_DAILY_SETS || [])].sort((a, b) => a.date.localeCompare(b.date));
const BADGE_IMAGE_FILES = {
  "first-light": "badges-first-light.png",
  "threepeater": "badge-threepeater.png",
  "ten-toes-down": "badge-ten-toes-down.png",
  "quarter-club": "badge-quarter-club.png",
  "on-a-roll": "badge-on-a-roll.png",
  "weekender": "badge-weekender.png",
  "monthly-momentum": "badge-monthly-momentum.png",
  "clean-sheet": "badge-clean-sheet.png",
  "hard-truths": "badge-hard-truths.png",
  "pressure-player": "badge-pressure-player.png",
  "no-net": "badge-no-net.png",
  "puzzle-scout": "badge-puzzle-scout.png"
};const BADGES = [
  { key: "first-light", title: "First Light", copy: "Complete your first daily set.", test: (m) => m.dailySetsCompleted >= 1 },
  { key: "threepeater", title: "Threepeater", copy: "Complete 3 daily sets.", test: (m) => m.dailySetsCompleted >= 3 },
  { key: "ten-toes-down", title: "Ten Toes Down", copy: "Complete 10 daily sets.", test: (m) => m.dailySetsCompleted >= 10 },
  { key: "quarter-club", title: "Quarter Club", copy: "Complete 25 daily sets.", test: (m) => m.dailySetsCompleted >= 25 },
  { key: "on-a-roll", title: "On A Roll", copy: "Hit a 3-day streak.", test: (m) => m.visibleDailyStreak >= 3 || m.bestDailyStreak >= 3 },
  { key: "weekender", title: "Weekender", copy: "Hit a 7-day streak.", test: (m) => m.visibleDailyStreak >= 7 || m.bestDailyStreak >= 7 },
  { key: "monthly-momentum", title: "Monthly Momentum", copy: "Hit a 30-day streak.", test: (m) => m.visibleDailyStreak >= 30 || m.bestDailyStreak >= 30 },
  { key: "hard-truths", title: "Hard Truths", copy: "Finish 10 hard puzzles.", test: (m) => m.hardPuzzlesCompleted >= 10 },
  { key: "pressure-player", title: "Pressure Player", copy: "Finish 25 hard puzzles.", test: (m) => m.hardPuzzlesCompleted >= 25 },
  { key: "clean-sheet", title: "Clean Sheet", copy: "Complete a daily set without using the hard lifeline.", test: (m) => m.cleanSheetDays >= 1 },
  { key: "no-net", title: "No Net", copy: "Finish 10 hard puzzles without lifeline.", test: (m) => m.hardWithoutLifeline >= 10 },
  { key: "puzzle-scout", title: "Puzzle Scout", copy: "Solve 10 total puzzles.", test: (m) => m.lifetimePuzzlesSolved >= 10 }
];

function resolveLiveDayIndex(dayStamp = getLocalDayStamp()) {
  if (!DAILY_SETS.length) return 0;
  const exactIndex = DAILY_SETS.findIndex((entry) => entry.date === dayStamp);
  if (exactIndex !== -1) return exactIndex;
  for (let i = DAILY_SETS.length - 1; i >= 0; i -= 1) {
    if (DAILY_SETS[i].date <= dayStamp) return i;
  }
  return 0;
}

let activeDayIndex = resolveLiveDayIndex();
let activeStage = "easy";
let activeSection = "today";
let currentTiles = [];
let tileById = {};
let state;
let stats = null;
let dayStates = {};
let touchDrag = null;
let suppressClickUntil = 0;
let slotLayoutRaf = 0;
let hardUnlockPulseActive = false;
let sharedAudioCtx = null;
let badgeUnlockQueue = [];
let activeBadgeUnlock = null;
let currentCalendarDay = getLocalDayStamp();
let deferredInstallPrompt = null;
let homeScreenReturnToLifeline = false;
let hardTimerInterval = null;
let midnightRolloverTimeout = null;

const boardEl = document.getElementById("board");
const slots = Array.from(document.querySelectorAll(".slot"));
const circleEls = {
  A: document.getElementById("circle-A"),
  B: document.getElementById("circle-B"),
  C: document.getElementById("circle-C")
};
const bankEl = document.getElementById("bank");
const bankGridEl = document.getElementById("bank-grid");
const messageEl = document.getElementById("message");
const livesEl = document.getElementById("lives");
const livesLabelEl = document.getElementById("lives-label");
const timerWrapEl = document.getElementById("timer-wrap");
const timerLabelEl = document.getElementById("timer-label");
const timerFillEl = document.getElementById("timer-fill");
const summaryEl = document.getElementById("summary");
const subtitleEl = document.getElementById("subtitle");
const launchScreenEl = document.getElementById("launch-screen");
const launchPlayBtn = document.getElementById("launch-play");
const launchHowBtn = document.getElementById("launch-how");
const launchDateEl = document.getElementById("launch-date");
const launchNumberEl = document.getElementById("launch-number");
const labelAEl = document.getElementById("label-A");
const labelBEl = document.getElementById("label-B");
const labelCEl = document.getElementById("label-C");
const todayBtn = document.getElementById("today-btn");
const archiveBtn = document.getElementById("archive-btn");
const statsBtn = document.getElementById("stats-btn");
const badgesBtn = document.getElementById("badges-btn");
const easyBtn = document.getElementById("easy-btn");
const hardBtn = document.getElementById("hard-btn");
const undoBtn = document.getElementById("undo-btn");
const clearBtn = document.getElementById("clear-btn");
const submitBtn = document.getElementById("submit-btn");
const sharePanelEl = document.getElementById("share-panel");
const sharePreviewEl = document.getElementById("share-preview");
const shareBtn = document.getElementById("share-btn");
const tutorialEl = document.getElementById("tutorial");
const tutorialStartBtn = document.getElementById("tutorial-start");
const tutorialSkipBtn = document.getElementById("tutorial-skip");
const statsModalEl = document.getElementById("stats-modal");
const statsGridEl = document.getElementById("stats-grid");
const statsPuzzleListEl = document.getElementById("stats-puzzle-list");
const statsCloseBtn = document.getElementById("stats-close");
const statsResetBtn = document.getElementById("stats-reset");
const archiveModalEl = document.getElementById("archive-modal");
const archiveListEl = document.getElementById("archive-list");
const archiveCloseBtn = document.getElementById("archive-close");
const badgesModalEl = document.getElementById("badges-modal");
const badgeListEl = document.getElementById("badge-list");
const badgesCloseBtn = document.getElementById("badges-close");
const badgeUnlockModalEl = document.getElementById("badge-unlock-modal");
const badgeUnlockTitleEl = document.getElementById("badge-unlock-title");
const badgeUnlockArtEl = document.getElementById("badge-unlock-art");
const badgeUnlockCopyEl = document.getElementById("badge-unlock-copy");
const badgeUnlockCloseBtn = document.getElementById("badge-unlock-close");
const badgeDetailModalEl = document.getElementById("badge-detail-modal");
const badgeDetailTitleEl = document.getElementById("badge-detail-title");
const badgeDetailArtEl = document.getElementById("badge-detail-art");
const badgeDetailCopyEl = document.getElementById("badge-detail-copy");
const badgeDetailCloseBtn = document.getElementById("badge-detail-close");
const lifelineModalEl = document.getElementById("lifeline-modal");
const homeScreenModalEl = document.getElementById("home-screen-modal");
const homeScreenBtn = document.getElementById("home-screen-btn");
const homeScreenTriggerEls = Array.from(document.querySelectorAll("[data-home-screen-trigger]"));
const useLifelineBtn = document.getElementById("use-lifeline-btn");
const homeScreenCloseBtn = document.getElementById("home-screen-close");
const homeScreenUseBtn = document.getElementById("home-screen-use");
const homeScreenCopyEl = document.getElementById("home-screen-copy");

function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }
function capitalize(value) { return value.charAt(0).toUpperCase() + value.slice(1); }
function formatLongDate(dayStamp) { const [y, m, d] = dayStamp.split("-").map(Number); return new Date(y, m - 1, d).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }); }
function formatShortDate(dayStamp) { const [y, m, d] = dayStamp.split("-").map(Number); return new Date(y, m - 1, d).toLocaleDateString(undefined, { month: "short", day: "numeric" }); }
function getLocalDayStamp(date = new Date()) { return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`; }
function shiftDayStamp(dayStamp, amount) { const [y, m, d] = dayStamp.split("-").map(Number); const date = new Date(y, m - 1, d); date.setDate(date.getDate() + amount); return getLocalDayStamp(date); }
function getLiveDayStamp() {
  if (!DAILY_SETS.length) return getLocalDayStamp();
  return DAILY_SETS[resolveLiveDayIndex()].date;
}
function createEmptyStats() { return { startedAt: new Date().toISOString(), firstLifelinePromptSeen: false, seenBadgeKeys: [], dayHistory: {} }; }
function safeGetStorage(key) { try { return localStorage.getItem(key); } catch (err) { return null; } }
function safeSetStorage(key, value) { try { localStorage.setItem(key, value); } catch (err) {} }
function normalizeDayRecord(day, value = {}) { return { date: day, easy: value.easy || null, hard: value.hard || null, usedHardLifeline: Boolean(value.usedHardLifeline), completedDailySet: Boolean(value.completedDailySet), completedWithoutLifeline: Boolean(value.completedWithoutLifeline), streakEligible: value.streakEligible ?? Boolean(value.completedDailySet && day === getLiveDayStamp()), lastPlayedAt: value.lastPlayedAt || null }; }
function loadStats() { try { const raw = safeGetStorage(STATS_KEY); if (!raw) return createEmptyStats(); const parsed = JSON.parse(raw); const history = {}; Object.entries(parsed.dayHistory || {}).forEach(([day, value]) => { history[day] = normalizeDayRecord(day, value); }); return { ...createEmptyStats(), ...parsed, seenBadgeKeys: Array.isArray(parsed.seenBadgeKeys) ? parsed.seenBadgeKeys : [], dayHistory: history }; } catch (err) { return createEmptyStats(); } }
function saveStats() { safeSetStorage(STATS_KEY, JSON.stringify(stats)); }
function getDayRecord(day, create = false) { if (!stats.dayHistory[day] && create) stats.dayHistory[day] = normalizeDayRecord(day); return stats.dayHistory[day] || null; }
function getActiveSet() { return DAILY_SETS[activeDayIndex]; }
function getActiveDate() { return getActiveSet()?.date || null; }
function getActivePuzzle() { return getActiveSet()?.[activeStage] || null; }
function getStageKey(day = getActiveDate(), stage = activeStage) { return `${day}:${stage}`; }
function getStageRecord(day = getActiveDate(), stage = activeStage) { const record = getDayRecord(day, false); return record ? record[stage] : null; }
function isHardUnlocked(day = getActiveDate()) { return Boolean(getStageRecord(day, "easy")?.status === "solved"); }
function getActiveMaxLives() { const record = getDayRecord(getActiveDate(), false); return BASE_LIVES + (activeStage === "hard" && record?.usedHardLifeline ? 1 : 0); }
function shuffle(arr) { const out = [...arr]; for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; } return out; }
function createState() { return { placements: Object.fromEntries(SLOTS.map((slot) => [slot, null])), tileLocation: Object.fromEntries(currentTiles.map((tile) => [tile.id, null])), selectedTileId: null, lockedTiles: new Set(), revealedSlots: new Set(), wrongSlots: new Set(), wrongCircles: new Set(), livesUsed: 0, tries: 0, solved: false, failed: false, history: [], bankOrder: shuffle(currentTiles.map((tile) => tile.id)), timerRemainingMs: activeStage === "hard" ? HARD_TIMER_MS : null, lastTimerTickAt: null }; }
function snap() { return { placements: deepClone(state.placements), tileLocation: deepClone(state.tileLocation), selectedTileId: state.selectedTileId, lockedTiles: [...state.lockedTiles], revealedSlots: [...state.revealedSlots], wrongSlots: [...state.wrongSlots], wrongCircles: [...state.wrongCircles], livesUsed: state.livesUsed, tries: state.tries, solved: state.solved, failed: state.failed, bankOrder: [...state.bankOrder], timerRemainingMs: state.timerRemainingMs, lastTimerTickAt: state.lastTimerTickAt }; }
function restorePlayableState(snapshot, history = []) { if (!snapshot) return createState(); return { placements: deepClone(snapshot.placements), tileLocation: deepClone(snapshot.tileLocation), selectedTileId: snapshot.selectedTileId, lockedTiles: new Set(snapshot.lockedTiles || []), revealedSlots: new Set(snapshot.revealedSlots || []), wrongSlots: new Set(snapshot.wrongSlots || []), wrongCircles: new Set(snapshot.wrongCircles || []), livesUsed: snapshot.livesUsed || 0, tries: snapshot.tries || 0, solved: Boolean(snapshot.solved), failed: Boolean(snapshot.failed), history: [...history], bankOrder: [...(snapshot.bankOrder || currentTiles.map((tile) => tile.id))], timerRemainingMs: snapshot.timerRemainingMs ?? (activeStage === "hard" ? HARD_TIMER_MS : null), lastTimerTickAt: null }; }
function buildSolvedState(result) { const solvedState = createState(); solvedState.timerRemainingMs = activeStage === "hard" ? (result?.timerRemainingMs ?? solvedState.timerRemainingMs) : null; solvedState.tries = result?.tries || 1; solvedState.livesUsed = Math.min(result?.tries || 1, getActiveMaxLives()); solvedState.solved = true; solvedState.wrongSlots = new Set(); solvedState.wrongCircles = new Set(); SLOTS.forEach((slot) => { solvedState.revealedSlots.add(slot); const tile = currentTiles.find((entry) => entry.correctSlot === slot); if (!tile) return; solvedState.placements[slot] = tile.id; solvedState.tileLocation[tile.id] = slot; solvedState.lockedTiles.add(tile.id); }); solvedState.bankOrder = currentTiles.map((tile) => tile.id).filter((id) => solvedState.tileLocation[id] === null); return solvedState; }
function buildFailedState(result) { const failedState = buildSolvedState(result); failedState.solved = false; failedState.failed = true; failedState.livesUsed = getActiveMaxLives(); failedState.timerRemainingMs = activeStage === "hard" ? (result?.timerRemainingMs ?? 0) : null; return failedState; }
function saveCurrentStageState() { const finalized = getStageRecord(); if (finalized && (finalized.status === "solved" || finalized.status === "failed")) return; dayStates[getStageKey()] = snap(); }
function pushUndo() { state.history.push(snap()); if (state.history.length > 100) state.history.shift(); }
function undo() { if (!state.history.length || state.solved || state.failed) return; const nextHistory = [...state.history]; const snapshot = nextHistory.pop(); state = restorePlayableState(snapshot, nextHistory); setMessage(); render(); }
function hasProgress() { return state.tries > 0 || Object.values(state.tileLocation).some((value) => value !== null) || state.revealedSlots.size > 0; }
function allPlaced() { return SLOTS.every((slot) => Boolean(state.placements[slot])); }
function correctSlots() { return SLOTS.filter((slot) => { const id = state.placements[slot]; return id && tileById[id].correctSlot === slot; }); }
function setMessage(text = "", color = "#172033") { messageEl.textContent = text; messageEl.style.color = color; }
function setSummary(text = "") { if (summaryEl) summaryEl.textContent = text; }
function getDerivedStats() {
  const records = Object.values(stats.dayHistory || {}).map((entry) => normalizeDayRecord(entry.date || "", entry));
  const completedDays = records.filter((entry) => entry.streakEligible).map((entry) => entry.date).sort();
  const runByDay = {};
  let best = 0; let previous = null; let run = 0;
  completedDays.forEach((day) => { run = previous && shiftDayStamp(previous, 1) === day ? run + 1 : 1; runByDay[day] = run; best = Math.max(best, run); previous = day; });
  const liveDay = getLiveDayStamp(); const yesterday = shiftDayStamp(liveDay, -1);
  const visibleDailyStreak = runByDay[liveDay] || runByDay[yesterday] || 0;
  const dailySetsCompleted = completedDays.length;
  const hardPuzzlesCompleted = records.filter((entry) => entry.hard?.status === "solved").length;
  const lifetimePuzzlesSolved = records.reduce((sum, entry) => sum + (entry.easy?.status === "solved" ? 1 : 0) + (entry.hard?.status === "solved" ? 1 : 0), 0);
  const cleanSheetDays = records.filter((entry) => entry.completedDailySet && !entry.usedHardLifeline).length;
  const hardWithoutLifeline = records.filter((entry) => entry.hard?.status === "solved" && !entry.usedHardLifeline).length;
  const meta = { dailySetsCompleted, hardPuzzlesCompleted, lifetimePuzzlesSolved, cleanSheetDays, hardWithoutLifeline, visibleDailyStreak, bestDailyStreak: best };
  meta.unlockedBadges = BADGES.filter((badge) => badge.test(meta));
  meta.badgeCount = meta.unlockedBadges.length;
  meta.records = records;
  return meta;
}
function applyBadgeArt(el, key) {
  if (!el) return;
  const file = BADGE_IMAGE_FILES[key];
  const isModalBadge = el.classList.contains("badge-reward-art") || el.classList.contains("badge-detail-art");
  el.style.backgroundImage = file ? `url("${file}")` : "none";
  el.style.backgroundSize = isModalBadge ? "112% auto" : "118% auto";
  el.style.backgroundPosition = isModalBadge ? "center 14%" : "center 12%";
  el.style.backgroundRepeat = "no-repeat";
  el.style.backgroundColor = "#f8f4ec";
  el.style.border = "1px solid #e1d8c8";
}
function openBadgeDetail(key) {
  const badge = BADGES.find((entry) => entry.key === key);
  if (!badge) return;
  badgeDetailTitleEl.textContent = badge.title;
  badgeDetailCopyEl.textContent = badge.copy;
  badgeDetailModalEl.hidden = false;
  window.requestAnimationFrame(() => applyBadgeArt(badgeDetailArtEl, badge.key));
}
function closeBadgeDetail() { badgeDetailModalEl.hidden = true; }
function showNextBadgeUnlock() {
  if (activeBadgeUnlock || !badgeUnlockQueue.length) return;
  activeBadgeUnlock = badgeUnlockQueue.shift();
  badgeUnlockTitleEl.textContent = activeBadgeUnlock.title;
  badgeUnlockCopyEl.textContent = activeBadgeUnlock.copy;
  badgeUnlockModalEl.hidden = false;
  window.requestAnimationFrame(() => applyBadgeArt(badgeUnlockArtEl, activeBadgeUnlock.key));
  playTone("success");
  vibrate([35, 25, 35, 25, 60]);
}
function closeBadgeUnlock() {
  badgeUnlockModalEl.hidden = true;
  activeBadgeUnlock = null;
  if (badgeUnlockQueue.length) window.setTimeout(showNextBadgeUnlock, 120);
}
function queueNewBadges() {
  const meta = getDerivedStats();
  const seen = new Set(stats.seenBadgeKeys || []);
  const queued = meta.unlockedBadges.filter((badge) => !seen.has(badge.key) && badge.key !== activeBadgeUnlock?.key && !badgeUnlockQueue.some((entry) => entry.key === badge.key));
  if (!queued.length) return;
  stats.seenBadgeKeys = [...new Set([...(stats.seenBadgeKeys || []), ...queued.map((badge) => badge.key)])];
  saveStats();
  badgeUnlockQueue.push(...queued);
  showNextBadgeUnlock();
}
function renderStats() {
  const meta = getDerivedStats();
  const items = [["Daily Streak", meta.visibleDailyStreak], ["Best Daily", meta.bestDailyStreak], ["Daily Sets", meta.dailySetsCompleted], ["Hard Clears", meta.hardPuzzlesCompleted], ["Solved", meta.lifetimePuzzlesSolved], ["Badges", meta.badgeCount]];
  statsGridEl.innerHTML = items.map(([label, value]) => `<div class="stats-item"><div class="stats-label">${label}</div><div class="stats-value">${value}</div></div>`).join("");
  statsPuzzleListEl.innerHTML = meta.records.sort((a, b) => b.date.localeCompare(a.date)).map((record) => { const easyStatus = record.easy ? capitalize(record.easy.status) : "Open"; const hardStatus = record.hard ? capitalize(record.hard.status) : (record.easy?.status === "solved" ? "Open" : "Locked"); return `<div class="stats-puzzle-item"><div class="stats-puzzle-title">${formatLongDate(record.date)}</div><div class="stats-puzzle-meta">Easy: ${easyStatus}${record.easy?.tries ? ` (${record.easy.tries}/${BASE_LIVES})` : ""}</div><div class="stats-puzzle-meta">Hard: ${hardStatus}${record.usedHardLifeline ? " - Lifeline used" : ""}</div></div>`; }).join("") || `<div class="stats-puzzle-item"><div class="stats-puzzle-meta">No stats yet. Finish a day and we will track it here.</div></div>`;
}
function renderBadges() {
  if (!badgeListEl) return;
  const meta = getDerivedStats();
  badgeListEl.innerHTML = BADGES.map((badge) => {
    const unlocked = badge.test(meta);
    return `<button type="button" class="badge-item${unlocked ? " unlocked" : " locked"}" data-badge-key="${badge.key}" ${unlocked ? "" : "disabled"}><div class="badge-title">${badge.title}</div><div class="badge-visual" data-badge-art="${badge.key}"></div><div class="badge-copy">${badge.copy}</div><div class="pill-row"><span class="mini-pill">${unlocked ? "Unlocked" : "Locked"}</span></div></button>`;
  }).join("");
  badgeListEl.querySelectorAll("[data-badge-art]").forEach((el) => {
    try {
      applyBadgeArt(el, el.dataset.badgeArt);
    } catch (error) {
      el.style.background = "linear-gradient(180deg, #faf6ee, #efe7d8)";
      el.style.border = "1px solid #d8cfbe";
    }
  });
}
function renderArchive() {
  const liveIndex = resolveLiveDayIndex();
  const archiveSets = DAILY_SETS.slice(0, liveIndex).reverse();
  archiveListEl.innerHTML = archiveSets.map((set) => {
    const record = getDayRecord(set.date, false);
    const easyStatus = record?.easy?.status ? capitalize(record.easy.status) : "Open";
    const hardStatus = record?.hard?.status ? capitalize(record.hard.status) : (record?.easy?.status === "solved" ? "Open" : "Locked");
    return `<button class="archive-item" data-date="${set.date}"><div class="archive-date">${formatLongDate(set.date)}</div><div class="archive-meta">Easy: ${easyStatus} - Hard: ${hardStatus}</div></button>`;
  }).join("") || `<div class="archive-item"><div class="archive-meta">Archive days will appear here as your queue grows.</div></div>`;
}
function openStats() { renderStats(); statsModalEl.hidden = false; }
function closeStats() { statsModalEl.hidden = true; }
function openArchive() { renderArchive(); archiveModalEl.hidden = false; }
function closeArchive() { archiveModalEl.hidden = true; }
function openBadges() {
  if (!badgesModalEl) return;
  badgesModalEl.hidden = false;
  try {
    renderBadges();
  } catch (error) {
    if (badgeListEl) {
      badgeListEl.innerHTML = `<div class="stats-puzzle-item"><div class="stats-puzzle-meta">Badges are loading, but the art could not be rendered in this browser state. Refresh once and try again.</div></div>`;
    }
  }
}
function closeBadges() { badgesModalEl.hidden = true; }
function closeLifelineModals() { lifelineModalEl.hidden = true; homeScreenModalEl.hidden = true; }
function isStandaloneMode() { return window.matchMedia?.("(display-mode: standalone)")?.matches || window.navigator.standalone === true; }
function isIosDevice() { return /iPad|iPhone|iPod/.test(window.navigator.userAgent) || (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1); }
function openHomeScreenHelp(message = null, returnToLifeline = false) {
  homeScreenReturnToLifeline = returnToLifeline;
  if (homeScreenCopyEl) {
    homeScreenCopyEl.innerHTML = message || (isIosDevice()
      ? "On iPhone, tap <strong>Share</strong>, then <strong>Add to Home Screen</strong>."
      : "Open your browser menu and choose <strong>Add to Home screen</strong> or <strong>Install app</strong>."
    );
  }
  if (homeScreenCloseBtn) homeScreenCloseBtn.textContent = returnToLifeline ? "Back" : "Close";
  if (homeScreenUseBtn) homeScreenUseBtn.hidden = !returnToLifeline;
  lifelineModalEl.hidden = true;
  homeScreenModalEl.hidden = false;
}
async function triggerAddToHomeScreen(event) {
  const returnToLifeline = event?.currentTarget?.id === "home-screen-btn";
  if (isStandaloneMode()) {
    openHomeScreenHelp("This app is already on your home screen.", returnToLifeline);
    return;
  }
  if (deferredInstallPrompt) {
    const promptEvent = deferredInstallPrompt;
    deferredInstallPrompt = null;
    try {
      await promptEvent.prompt();
      await promptEvent.userChoice;
    } catch (err) {}
    return;
  }
  openHomeScreenHelp(null, returnToLifeline);
}
function resetStats() { stats = createEmptyStats(); dayStates = {}; badgeUnlockQueue = []; activeBadgeUnlock = null; saveStats(); closeBadgeUnlock(); closeBadgeDetail(); loadDay(activeDayIndex, "easy", activeSection); }
function updateProgressRecord(date, stage, status) { const record = getDayRecord(date, true); if (record[stage]?.status === "solved") return; record[stage] = { status, tries: state.tries, usedLifeline: Boolean(record.usedHardLifeline) }; record.lastPlayedAt = new Date().toISOString(); record.completedDailySet = Boolean(record.easy?.status === "solved" && record.hard?.status === "solved"); record.completedWithoutLifeline = record.completedDailySet && !record.usedHardLifeline; record.streakEligible = record.completedDailySet && activeSection === "today" && date === getLiveDayStamp(); saveStats(); queueNewBadges(); }
function formatTryCount(count) {
  return `${count} ${count === 1 ? "try" : "tries"}`;
}
function formatShareTryLine() {
  if (!state) return "";
  return state.solved
    ? `Solved in ${formatTryCount(state.tries)}`
    : `Missed in ${formatTryCount(state.tries)}`;
}
function buildShareTitle() {
  return `Common Ground #${getPuzzleNumber(getActiveDate())} - ${capitalize(activeStage)}`;
}
function buildShareGrid() {
  if (!state) return "";
  if (!state.solved) return "\u{1F7E5}\u{1F7E5}\u{1F7E5}";
  if (state.tries === 1) return "\u{1F7E9}\u{2B1C}\u{2B1C}";
  if (state.tries === 2) return "\u{1F7E5}\u{1F7E9}\u{2B1C}";
  return "\u{1F7E5}\u{1F7E5}\u{1F7E9}";
}
// Share-sheet text stays lean because rich previews already show the title and art.
// Clipboard text keeps a slightly clearer CTA because it may travel without a preview.
function buildShareText(mode = "web") {
  const difficulty = capitalize(activeStage);
  const grid = buildShareGrid();
  const summary = state.solved
    ? `Solved today's ${difficulty} in ${formatTryCount(state.tries)}`
    : `Missed today's ${difficulty} in ${formatTryCount(state.tries)}`;
  if (mode === "clipboard") {
    return `${grid}\n${summary}\n\nTry today's puzzle:\n${APP_URL}`;
  }
  return `${grid}\n${summary}\n\nCan you solve it?`;
}
function updateShareUi() { const finished = state.solved || state.failed; sharePanelEl.hidden = !finished; if (!finished) { sharePreviewEl.textContent = ""; shareBtn.textContent = "Share Results"; return; } sharePreviewEl.textContent = buildShareText("web"); }
async function copyShareResults() {
  const shareText = buildShareText("web");
  const clipboardText = buildShareText("clipboard");
  const url = APP_URL;
  try {
    if (navigator.share) { await navigator.share({ title: buildShareTitle(), text: shareText, url }); setMessage("Share sheet opened.", "#1f7a4f"); return; }
    const payload = clipboardText;
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(payload);
    else { const input = document.createElement("textarea"); input.value = payload; input.setAttribute("readonly", "true"); input.style.position = "absolute"; input.style.left = "-9999px"; document.body.appendChild(input); input.select(); document.execCommand("copy"); input.remove(); }
    shareBtn.textContent = "Copied"; setMessage("Results copied to clipboard.", "#1f7a4f"); window.setTimeout(() => { shareBtn.textContent = "Share Results"; }, 1400);
  } catch (err) { if (err?.name !== "AbortError") setMessage("Could not share results on this device.", "#991b1b"); }
}
function updateColorProgress() {
  if (state.failed) {
    document.documentElement.style.setProperty("--a-alpha", "0.18");
    document.documentElement.style.setProperty("--b-alpha", "0.18");
    document.documentElement.style.setProperty("--c-alpha", "0.18");
    return;
  }
  if (!state.solved) {
    document.documentElement.style.setProperty("--a-alpha", "0");
    document.documentElement.style.setProperty("--b-alpha", "0");
    document.documentElement.style.setProperty("--c-alpha", "0");
    return;
  }
  document.documentElement.style.setProperty("--a-alpha", "0.42");
  document.documentElement.style.setProperty("--b-alpha", "0.42");
  document.documentElement.style.setProperty("--c-alpha", "0.42");
}
function updateLives() { const maxLives = getActiveMaxLives(); const left = Math.max(0, maxLives - state.livesUsed); livesLabelEl.textContent = `Tries Left: ${left}`; livesEl.style.gridTemplateColumns = `repeat(${maxLives}, 1fr)`; livesEl.style.width = `${maxLives * 34}px`; livesEl.innerHTML = ""; for (let i = 0; i < maxLives; i++) { const seg = document.createElement("div"); seg.className = "life" + (i < left ? " on" : ""); livesEl.appendChild(seg); } updateTimerUi(); }
function getHardTimerCap(day = getActiveDate()) {
  const record = getDayRecord(day, false);
  return HARD_TIMER_MS + (record?.usedHardLifeline ? HARD_LIFELINE_BONUS_MS : 0);
}
function formatTimerLabel(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}
function isTimerPaused() {
  return document.hidden || !hardTimerInterval || !homeScreenModalEl.hidden || !lifelineModalEl.hidden || !statsModalEl.hidden || !archiveModalEl.hidden || !badgesModalEl.hidden || !badgeUnlockModalEl.hidden || !badgeDetailModalEl.hidden || !tutorialEl.hidden || !launchScreenEl.hidden;
}
function updateTimerUi() {
  const showTimer = activeStage === "hard" && Boolean(timerWrapEl);
  if (!timerWrapEl || !timerLabelEl || !timerFillEl) return;
  timerWrapEl.hidden = !showTimer;
  if (!showTimer) return;
  const cap = getHardTimerCap();
  const remaining = Math.max(0, state?.timerRemainingMs ?? cap);
  timerLabelEl.textContent = `Time Left: ${formatTimerLabel(remaining)}`;
  timerLabelEl.style.color = remaining <= 15000 ? "#b91c1c" : remaining <= 30000 ? "#b45309" : "#7a5a35";
  timerFillEl.style.transform = `scaleX(${Math.max(0, Math.min(1, remaining / cap))})`;
}
function syncHardTimer() {
  if (!state || activeStage !== "hard" || state.solved || state.failed) {
    if (state) state.lastTimerTickAt = null;
    return;
  }
  if (isTimerPaused()) {
    state.lastTimerTickAt = null;
    return;
  }
  const now = Date.now();
  if (!state.lastTimerTickAt) {
    state.lastTimerTickAt = now;
    return;
  }
  const elapsed = now - state.lastTimerTickAt;
  if (elapsed < 120) return;
  state.lastTimerTickAt = now;
  state.timerRemainingMs = Math.max(0, (state.timerRemainingMs ?? getHardTimerCap()) - elapsed);
  if (state.timerRemainingMs <= 0) {
    state.timerRemainingMs = 0;
    if (getActiveMaxLives() === BASE_LIVES && maybeOfferLifeline()) {
      render();
      return;
    }
    revealFailureBoard("Time expired. Solution revealed.");
  }
}
function updateHeaderUi() {
  const day = getActiveDate();
  if (subtitleEl) subtitleEl.textContent = `${activeSection === "today" ? "Today" : "Archive"} - ${formatLongDate(day)}`;
  todayBtn?.classList.toggle("active", activeSection === "today");
  archiveBtn?.classList.toggle("active", activeSection === "archive");
  easyBtn?.classList.toggle("active", activeStage === "easy");
  const hardUnlocked = isHardUnlocked(day);
  hardBtn.disabled = !hardUnlocked; hardBtn.classList.toggle("locked", !hardUnlocked); hardBtn.classList.toggle("active", activeStage === "hard");
  hardBtn.classList.toggle("unlocked-pulse", hardUnlockPulseActive && hardUnlocked && activeStage !== "hard");
  const record = getDayRecord(day, false);
  if (record?.completedDailySet) setSummary(`Daily set complete${record.usedHardLifeline ? " with lifeline" : ""}.`);
  else if (record?.easy?.status === "solved" && !record?.hard) setSummary("Easy complete. Hard is unlocked.");
  else if (record?.hard?.status === "failed") setSummary("Hard missed for this day.");
  else if (record?.easy?.status === "failed") setSummary("Easy missed for this day.");
  else setSummary(`${capitalize(activeStage)} puzzle - ${getActivePuzzle().title}`);
}
function updateButtons() { const finalized = Boolean(getStageRecord()?.status); const ready = allPlaced() && !state.solved && !state.failed && state.livesUsed < getActiveMaxLives(); submitBtn.disabled = !ready || finalized; submitBtn.classList.toggle("ready", ready && !finalized); undoBtn.disabled = !state.history.length || state.solved || state.failed || finalized; clearBtn.disabled = !hasProgress() || finalized; }
function playTone(type) {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;
  try {
    if (!sharedAudioCtx || sharedAudioCtx.state === "closed") sharedAudioCtx = new AudioCtx();
    const ctx = sharedAudioCtx;
    if (ctx.state === "suspended") ctx.resume().catch(() => {});
    const notes = type === "success" ? [523.25, 659.25, 783.99] : type === "incorrect" ? [330, 247, 196] : [220, 180, 140];
    notes.forEach((freq, i) => {
      const startAt = ctx.currentTime + i * 0.08;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type === "success" ? "triangle" : type === "incorrect" ? "square" : "sawtooth";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, startAt);
      gain.gain.exponentialRampToValueAtTime(type === "success" ? 0.03 : type === "incorrect" ? 0.018 : 0.02, startAt + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, startAt + 0.17);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startAt);
      osc.stop(startAt + 0.18);
    });
  } catch (err) {}
}
function vibrate(pattern) { if (navigator.vibrate) navigator.vibrate(pattern); }
function computeSlotLayout() {
  const boardRect = boardEl.getBoundingClientRect(); if (!boardRect.width || !boardRect.height) return false;
  const circles = Object.fromEntries(Object.entries(circleEls).map(([key, el]) => { const rect = el.getBoundingClientRect(); return [key, { x: rect.left - boardRect.left + (rect.width / 2), y: rect.top - boardRect.top + (rect.height / 2), r: rect.width / 2 }]; }));
  if (Object.values(circles).some((circle) => !circle.r || circle.r < 20)) return false;
  const sums = { S1: { x: 0, y: 0, n: 0 }, S2: { x: 0, y: 0, n: 0 }, S3: { x: 0, y: 0, n: 0 }, S4: { x: 0, y: 0, n: 0 } };
  const inside = (pointX, pointY, circle) => ((pointX - circle.x) ** 2) + ((pointY - circle.y) ** 2) <= circle.r ** 2;
  const step = Math.max(3, Math.round(boardRect.width / 110));
  for (let y = step / 2; y < boardRect.height; y += step) { for (let x = step / 2; x < boardRect.width; x += step) { const inA = inside(x, y, circles.A); const inB = inside(x, y, circles.B); const inC = inside(x, y, circles.C); let key = null; if (inA && inB && !inC) key = "S1"; else if (inA && inC && !inB) key = "S2"; else if (inB && inC && !inA) key = "S3"; else if (inA && inB && inC) key = "S4"; if (!key) continue; sums[key].x += x; sums[key].y += y; sums[key].n += 1; } }
  if (Object.values(sums).some((sum) => sum.n === 0)) return false;
  slots.forEach((slotEl) => { const sum = sums[slotEl.dataset.slot]; const width = slotEl.offsetWidth || 44; const height = slotEl.offsetHeight || 44; slotEl.style.left = `${(sum.x / sum.n) - (width / 2)}px`; slotEl.style.top = `${(sum.y / sum.n) - (height / 2)}px`; slotEl.style.right = "auto"; slotEl.style.transform = "none"; });
  return true;
}
function scheduleSlotLayout() { if (slotLayoutRaf) cancelAnimationFrame(slotLayoutRaf); slotLayoutRaf = requestAnimationFrame(() => { slotLayoutRaf = 0; if (!computeSlotLayout()) { slotLayoutRaf = requestAnimationFrame(() => { slotLayoutRaf = 0; computeSlotLayout(); }); } }); }
function makeTile(tileId) {
  const tile = tileById[tileId]; const el = document.createElement("div"); el.className = "tile"; if (tile.label.length >= 10) el.classList.add("long-text"); if (tile.label.length >= 14) el.classList.add("very-long-text"); el.dataset.tileId = tile.id; el.draggable = !state.lockedTiles.has(tile.id) && !state.solved && !state.failed; el.innerHTML = `<div class="text">${tile.label}</div>`;
  if (state.selectedTileId === tile.id) el.classList.add("selected"); if (state.lockedTiles.has(tile.id)) el.classList.add("locked");
  el.addEventListener("click", () => { if (Date.now() < suppressClickUntil) return; if (state.solved || state.failed || state.lockedTiles.has(tile.id)) return; state.selectedTileId = state.selectedTileId === tile.id ? null : tile.id; setMessage(); render(); });
  el.addEventListener("pointerdown", (e) => startTouchDrag(e, tile.id));
  el.addEventListener("dragstart", (e) => { if (state.solved || state.failed || state.lockedTiles.has(tile.id)) { e.preventDefault(); return; } state.selectedTileId = tile.id; e.dataTransfer.setData("text/plain", tile.id); e.dataTransfer.effectAllowed = "move"; render(); });
  return el;
}
function getDropTarget(clientX, clientY) { const hit = document.elementFromPoint(clientX, clientY); if (!hit) return null; const slot = hit.closest(".slot"); if (slot) return slot; if (hit.closest("#bank")) return bankEl; const boardRect = boardEl.getBoundingClientRect(); const insideBoard = clientX >= boardRect.left && clientX <= boardRect.right && clientY >= boardRect.top && clientY <= boardRect.bottom; if (!insideBoard) return null; let nearestSlot = null; let nearestDistance = Infinity; slots.forEach((slotEl) => { if (slotEl.classList.contains("has-tile") || slotEl.classList.contains("revealed")) return; const rect = slotEl.getBoundingClientRect(); const centerX = rect.left + (rect.width / 2); const centerY = rect.top + (rect.height / 2); const distance = Math.hypot(clientX - centerX, clientY - centerY); if (distance < nearestDistance) { nearestDistance = distance; nearestSlot = slotEl; } }); const isTouchViewport = window.matchMedia?.("(max-width: 768px)")?.matches; const snapRadius = isTouchViewport ? Math.max(60, Math.min(boardRect.width, boardRect.height) * 0.16) : Math.max(42, Math.min(boardRect.width, boardRect.height) * 0.12); return nearestDistance <= snapRadius ? nearestSlot : null; }
function createGhost(tileId) { const ghost = document.createElement("div"); ghost.className = "drag-ghost"; ghost.textContent = tileById[tileId].label; document.body.appendChild(ghost); return ghost; }
function positionGhost(ghost, clientX, clientY) { ghost.style.left = `${clientX - ghost.offsetWidth / 2}px`; ghost.style.top = `${clientY - ghost.offsetHeight / 2}px`; }
function startTouchDrag(e, tileId) { if (e.pointerType !== "touch" || state.solved || state.failed || state.lockedTiles.has(tileId)) return; touchDrag = { tileId, startX: e.clientX, startY: e.clientY, moved: false, ghost: null }; window.addEventListener("pointermove", onTouchDragMove); window.addEventListener("pointerup", onTouchDragEnd); window.addEventListener("pointercancel", onTouchDragEnd); }
function onTouchDragMove(e) { if (!touchDrag || e.pointerType !== "touch") return; const distance = Math.hypot(e.clientX - touchDrag.startX, e.clientY - touchDrag.startY); if (!touchDrag.moved && distance > 6) { touchDrag.moved = true; touchDrag.ghost = createGhost(touchDrag.tileId); } if (touchDrag.moved && touchDrag.ghost) positionGhost(touchDrag.ghost, e.clientX, e.clientY); }
function onTouchDragEnd(e) { if (!touchDrag || e.pointerType !== "touch") return; window.removeEventListener("pointermove", onTouchDragMove); window.removeEventListener("pointerup", onTouchDragEnd); window.removeEventListener("pointercancel", onTouchDragEnd); if (touchDrag.moved) { suppressClickUntil = Date.now() + 350; const target = getDropTarget(e.clientX, e.clientY); let moved = false; if (target?.classList.contains("slot")) { pushUndo(); moved = moveTileToSlot(touchDrag.tileId, target.dataset.slot); } else if (target === bankEl) { pushUndo(); moved = moveTileToPool(touchDrag.tileId); } if (moved) { state.selectedTileId = null; setMessage(); render(); } } if (touchDrag.ghost) touchDrag.ghost.remove(); touchDrag = null; }
function moveTileToSlot(tileId, slot) { if (!tileById[tileId] || !SLOTS.includes(slot) || state.solved || state.failed || state.lockedTiles.has(tileId)) return false; const from = state.tileLocation[tileId]; if (from === slot) return true; const occupant = state.placements[slot]; if (occupant && state.lockedTiles.has(occupant)) return false; state.placements[slot] = tileId; state.tileLocation[tileId] = slot; if (from) { state.placements[from] = occupant || null; if (occupant) state.tileLocation[occupant] = from; } else if (occupant) { state.tileLocation[occupant] = null; } saveCurrentStageState(); return true; }
function moveTileToPool(tileId) { if (!tileById[tileId] || state.solved || state.failed || state.lockedTiles.has(tileId)) return false; const slot = state.tileLocation[tileId]; if (!slot) return true; state.placements[slot] = null; state.tileLocation[tileId] = null; saveCurrentStageState(); return true; }
function shakeBoard() { boardEl.classList.remove("shake"); void boardEl.offsetWidth; boardEl.classList.add("shake"); }
function activateHardLifeline() { const record = getDayRecord(getActiveDate(), true); if (record.usedHardLifeline) return; record.usedHardLifeline = true; if (activeStage === "hard") state.timerRemainingMs = Math.min(HARD_TIMER_MS + HARD_LIFELINE_BONUS_MS, (state.timerRemainingMs ?? 0) + HARD_LIFELINE_BONUS_MS); stats.firstLifelinePromptSeen = true; saveStats(); closeLifelineModals(); setMessage("Lifeline activated. One extra try and +15 seconds.", "#b45309"); render(); }
function maybeOfferLifeline() { if (activeStage !== "hard") return false; const record = getDayRecord(getActiveDate(), true); if (record.usedHardLifeline) return false; if (stats.firstLifelinePromptSeen) { activateHardLifeline(); return true; } lifelineModalEl.hidden = false; return true; }
function finishWin() { state.solved = true; state.failed = false; SLOTS.forEach((slot) => { state.revealedSlots.add(slot); const tileId = state.placements[slot]; if (tileId) state.lockedTiles.add(tileId); }); updateProgressRecord(getActiveDate(), activeStage, "solved"); const record = getDayRecord(getActiveDate(), false); if (activeStage === "easy" && !record?.completedDailySet) { hardUnlockPulseActive = true; window.setTimeout(() => { hardUnlockPulseActive = false; render(); }, 2200); } setMessage(activeStage === "easy" && !record?.completedDailySet ? "Easy cleared. Hard is unlocked." : record?.completedDailySet ? "Daily set complete." : `${capitalize(activeStage)} solved.`, "#1f7a4f"); playTone("success"); vibrate([40, 30, 70]); render(); }
function revealFailureBoard(reason = "Out of tries. Solution revealed.") { state.failed = true; state.solved = false; state.selectedTileId = null; state.placements = Object.fromEntries(SLOTS.map((slot) => [slot, null])); state.tileLocation = Object.fromEntries(currentTiles.map((tile) => [tile.id, null])); state.lockedTiles = new Set(); state.revealedSlots = new Set(SLOTS); currentTiles.forEach((tile) => { if (!tile.correctSlot) return; state.placements[tile.correctSlot] = tile.id; state.tileLocation[tile.id] = tile.correctSlot; state.lockedTiles.add(tile.id); }); updateProgressRecord(getActiveDate(), activeStage, "failed"); setMessage(reason, "#991b1b"); playTone("fail"); vibrate([120, 60, 120]); render(); }
function submitAnswers() { if (!allPlaced() || state.solved || state.failed || state.livesUsed >= getActiveMaxLives()) return; state.tries += 1; const correctSet = new Set(correctSlots()); const wrongSlots = []; const wrongCircles = new Set(); const slotToCircles = { S1: ["A", "B"], S2: ["A", "C"], S3: ["B", "C"], S4: ["A", "B", "C"] }; SLOTS.forEach((slot) => { const tileId = state.placements[slot]; if (!tileId) return; if (correctSet.has(slot)) { state.revealedSlots.add(slot); state.lockedTiles.add(tileId); } else { wrongSlots.push(slot); slotToCircles[slot].forEach((circle) => wrongCircles.add(circle)); } }); if (state.revealedSlots.size === SLOTS.length) { finishWin(); return; } state.livesUsed += 1; state.history = []; shakeBoard(); if (state.livesUsed >= BASE_LIVES && activeStage === "hard" && getActiveMaxLives() === BASE_LIVES && maybeOfferLifeline()) { render(); return; } if (state.livesUsed >= getActiveMaxLives()) { revealFailureBoard(); return; } state.wrongSlots = new Set(wrongSlots); state.wrongCircles = wrongCircles; playTone("incorrect"); vibrate([45, 35, 45]); render(); window.setTimeout(() => { wrongSlots.forEach((slot) => { const tileId = state.placements[slot]; if (!tileId) return; state.placements[slot] = null; state.tileLocation[tileId] = null; }); state.wrongSlots = new Set(); state.wrongCircles = new Set(); const remaining = SLOTS.length - state.revealedSlots.size; setMessage(`${remaining} ${remaining === 1 ? "spot is" : "spots are"} still wrong.`, "#b91c1c"); render(); }, 900); }
function resetCurrentPuzzle() { if (getStageRecord()?.status) return; const tries = state.tries; const livesUsed = state.livesUsed; const timerRemainingMs = state.timerRemainingMs; state = createState(); state.tries = tries; state.livesUsed = livesUsed; state.timerRemainingMs = timerRemainingMs; dayStates[getStageKey()] = snap(); setMessage(); render(); }
function render() { syncHardTimer(); bankGridEl.innerHTML = ""; const order = Array.isArray(state.bankOrder) && state.bankOrder.length ? state.bankOrder : currentTiles.map((tile) => tile.id); order.forEach((tileId) => { if (state.tileLocation[tileId] === null) bankGridEl.appendChild(makeTile(tileId)); }); Object.entries(circleEls).forEach(([key, el]) => { el.classList.toggle("wrong-circle", state.wrongCircles?.has(key)); }); slots.forEach((slotEl) => { const slot = slotEl.dataset.slot; slotEl.classList.remove("revealed", "locked", "drag-target", "has-tile", "wrong"); slotEl.querySelector(".tile")?.remove(); const tileId = state.placements[slot]; if (tileId) { slotEl.classList.add("has-tile"); slotEl.appendChild(makeTile(tileId)); } if (state.revealedSlots.has(slot)) slotEl.classList.add("revealed"); if (state.wrongSlots?.has(slot)) slotEl.classList.add("wrong"); if (tileId && state.lockedTiles.has(tileId)) slotEl.classList.add("locked"); }); boardEl.classList.toggle("failed", state.failed); updateHeaderUi(); updateColorProgress(); updateLives(); updateButtons(); updateShareUi(); scheduleSlotLayout(); saveCurrentStageState(); }
function loadDay(dayIndex, stage = "easy", section = "today") { if (!DAILY_SETS.length) return; activeDayIndex = Math.max(0, Math.min(dayIndex, DAILY_SETS.length - 1)); activeSection = section; if (stage === "hard" && !isHardUnlocked(DAILY_SETS[activeDayIndex].date)) stage = "easy"; activeStage = stage; const puzzle = getActivePuzzle(); currentTiles = puzzle.tiles.map((tile, index) => ({ id: `t${index + 1}`, label: tile.label, correctSlot: tile.correctSlot })); tileById = Object.fromEntries(currentTiles.map((tile) => [tile.id, tile])); labelAEl.textContent = puzzle.labels.A; labelBEl.textContent = puzzle.labels.B; labelCEl.textContent = puzzle.labels.C; const record = getStageRecord(); state = record?.status === "solved" ? buildSolvedState(record) : record?.status === "failed" ? buildFailedState(record) : restorePlayableState(dayStates[getStageKey()]); setMessage(); render(); }
function switchStage(stage) { if (stage === activeStage) return; if (stage === "hard" && !isHardUnlocked()) return; if (stage === "hard") hardUnlockPulseActive = false; loadDay(activeDayIndex, stage, activeSection); }
function goToToday() {
  const todayIndex = resolveLiveDayIndex();
  loadDay(todayIndex, isHardUnlocked(DAILY_SETS[todayIndex].date) ? "hard" : "easy", "today");
}
function openArchiveDay(day) { const index = DAILY_SETS.findIndex((entry) => entry.date === day); if (index === -1) return; closeArchive(); loadDay(index, "easy", "archive"); }
slots.forEach((slotEl) => { slotEl.addEventListener("click", () => { if (state.solved || state.failed) return; const slot = slotEl.dataset.slot; if (!state.selectedTileId) { const occupant = state.placements[slot]; if (occupant && !state.lockedTiles.has(occupant)) { pushUndo(); moveTileToPool(occupant); setMessage(); render(); } return; } pushUndo(); if (moveTileToSlot(state.selectedTileId, slot)) { state.selectedTileId = null; setMessage(); render(); } }); slotEl.addEventListener("dragover", (e) => { e.preventDefault(); slotEl.classList.add("drag-target"); }); slotEl.addEventListener("dragleave", () => slotEl.classList.remove("drag-target")); slotEl.addEventListener("drop", (e) => { e.preventDefault(); slotEl.classList.remove("drag-target"); const tileId = e.dataTransfer.getData("text/plain"); if (!tileId) return; pushUndo(); if (moveTileToSlot(tileId, slotEl.dataset.slot)) { state.selectedTileId = null; setMessage(); render(); } }); });
bankEl.addEventListener("dragover", (e) => e.preventDefault());
bankEl.addEventListener("drop", (e) => { e.preventDefault(); const tileId = e.dataTransfer.getData("text/plain"); if (!tileId) return; pushUndo(); if (moveTileToPool(tileId)) { state.selectedTileId = null; setMessage(); render(); } });
undoBtn?.addEventListener("click", undo); clearBtn?.addEventListener("click", resetCurrentPuzzle); submitBtn?.addEventListener("click", submitAnswers); shareBtn?.addEventListener("click", copyShareResults); todayBtn?.addEventListener("click", goToToday); archiveBtn?.addEventListener("click", openArchive); statsBtn?.addEventListener("click", openStats); badgesBtn?.addEventListener("click", openBadges); easyBtn?.addEventListener("click", () => switchStage("easy")); hardBtn?.addEventListener("click", () => switchStage("hard")); tutorialStartBtn?.addEventListener("click", dismissTutorial); tutorialSkipBtn?.addEventListener("click", dismissTutorial); launchPlayBtn?.addEventListener("click", closeLaunchScreen); launchHowBtn?.addEventListener("click", () => { closeLaunchScreen(); tutorialEl.hidden = false; }); statsCloseBtn?.addEventListener("click", closeStats); archiveCloseBtn?.addEventListener("click", closeArchive); badgesCloseBtn?.addEventListener("click", closeBadges); badgeUnlockCloseBtn?.addEventListener("click", closeBadgeUnlock); badgeDetailCloseBtn?.addEventListener("click", closeBadgeDetail); statsResetBtn?.addEventListener("click", () => { if (window.confirm("Reset all local daily progress, stats, and badges on this device?")) resetStats(); }); homeScreenTriggerEls.forEach((button) => button?.addEventListener("click", triggerAddToHomeScreen)); useLifelineBtn?.addEventListener("click", activateHardLifeline); homeScreenCloseBtn?.addEventListener("click", () => { homeScreenModalEl.hidden = true; if (homeScreenReturnToLifeline) { lifelineModalEl.hidden = false; } homeScreenReturnToLifeline = false; }); homeScreenUseBtn?.addEventListener("click", activateHardLifeline);
archiveListEl?.addEventListener("click", (e) => { const button = e.target.closest(".archive-item[data-date]"); if (!button) return; openArchiveDay(button.dataset.date); });
badgeListEl?.addEventListener("click", (e) => { const button = e.target.closest(".badge-item.unlocked[data-badge-key]"); if (!button) return; openBadgeDetail(button.dataset.badgeKey); });
function getPuzzleNumber(day = getLiveDayStamp()) {
  const index = DAILY_SETS.findIndex((entry) => entry.date === day);
  return index === -1 ? DAILY_SETS.length : index + 1;
}
function updateLaunchUi() {
  const liveDay = getLiveDayStamp();
  if (launchDateEl) launchDateEl.textContent = formatLongDate(liveDay);
  if (launchNumberEl) launchNumberEl.textContent = `No. ${getPuzzleNumber(liveDay)}`;
}
function handleCalendarDayChange() {
  const localDay = getLocalDayStamp();
  if (localDay === currentCalendarDay) return;
  currentCalendarDay = localDay;
  updateLaunchUi();
  if (!DAILY_SETS.length) return;
  if (activeSection === "today") {
    goToToday();
  } else {
    updateHeaderUi();
    renderArchive();
  }
}

function scheduleMidnightRollover() {
  if (midnightRolloverTimeout) window.clearTimeout(midnightRolloverTimeout);
  const now = new Date();
  const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 50);
  const delay = Math.max(250, nextMidnight.getTime() - now.getTime());
  midnightRolloverTimeout = window.setTimeout(() => {
    handleCalendarDayChange();
    scheduleMidnightRollover();
  }, delay);
}

function dismissTutorial() {
  tutorialEl.hidden = true;
  safeSetStorage(TUTORIAL_KEY, "1");
}
function closeLaunchScreen() {
  if (launchScreenEl) launchScreenEl.hidden = true;
}
[statsModalEl, archiveModalEl, badgesModalEl, badgeUnlockModalEl, badgeDetailModalEl].forEach((modal) => { modal?.addEventListener("click", (e) => { if (e.target !== modal) return; if (modal === statsModalEl) closeStats(); if (modal === archiveModalEl) closeArchive(); if (modal === badgesModalEl) closeBadges(); if (modal === badgeUnlockModalEl) closeBadgeUnlock(); if (modal === badgeDetailModalEl) closeBadgeDetail(); }); });
window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); deferredInstallPrompt = e; }); window.addEventListener("appinstalled", () => { deferredInstallPrompt = null; }); window.addEventListener("resize", scheduleSlotLayout); window.addEventListener("load", () => { scheduleSlotLayout(); handleCalendarDayChange(); scheduleMidnightRollover(); }); window.addEventListener("visibilitychange", () => { if (!document.hidden) { handleCalendarDayChange(); scheduleMidnightRollover(); } }); window.addEventListener("keydown", (e) => { if (e.key !== "Escape") return; closeStats(); closeArchive(); closeBadges(); closeLifelineModals(); closeBadgeUnlock(); closeBadgeDetail(); });
window.setInterval(handleCalendarDayChange, 60000);
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

hardTimerInterval = window.setInterval(() => {
  if (!state) return;
  const before = state.timerRemainingMs;
  syncHardTimer();
  updateTimerUi();
  if (activeStage === "hard" && before !== state.timerRemainingMs && !state.solved && !state.failed) saveCurrentStageState();
}, 250);

stats = loadStats();
updateLaunchUi();
tutorialEl.hidden = true;
if (DAILY_SETS.length) loadDay(activeDayIndex, "easy", "today"); else setMessage("No daily sets are available yet.", "#991b1b");
if (state) render();
document.body.classList.remove("app-loading");
document.body.classList.add("app-ready");












































