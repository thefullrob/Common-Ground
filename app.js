const runtimeStyle = document.createElement("style");
runtimeStyle.textContent = `
  .top-row { display: grid; gap: 8px; justify-items: center; }
  .nav-row, .stage-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 8px; }
  .game-wordmark { text-align: center; color: #5f4525; font-family: Georgia, "Times New Roman", serif; font-size: 0.98rem; line-height: 1; letter-spacing: 0.16em; font-weight: 800; text-transform: uppercase; margin-bottom: 2px; opacity: 0.88; }
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
  .archive-item { position: relative; overflow: hidden; transition: transform 140ms ease, box-shadow 140ms ease, border-color 140ms ease; }
  .archive-item:hover { transform: translateY(-1px); box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08); }
  .archive-item.complete { background: linear-gradient(180deg, #f2fbf4 0%, #e5f7ea 100%); border-color: #9fd0ab; box-shadow: inset 0 0 0 1px rgba(86, 170, 102, 0.12); }
  .archive-item.failed { background: linear-gradient(180deg, #fff3f1 0%, #fde5e1 100%); border-color: #e6b0a9; box-shadow: inset 0 0 0 1px rgba(220, 38, 38, 0.08); }
  .archive-item.open { background: #faf6ee; }
  .archive-item-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
  .archive-status { display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; padding: 5px 10px; font-size: 0.72rem; font-weight: 900; letter-spacing: 0.03em; text-transform: uppercase; white-space: nowrap; }
  .archive-status.complete { background: rgba(34, 197, 94, 0.14); color: #166534; }
  .archive-status.failed { background: rgba(239, 68, 68, 0.12); color: #b91c1c; }
  .archive-status.open { background: rgba(148, 163, 184, 0.12); color: #526074; }
  .archive-date, .badge-title { font-size: 0.88rem; font-weight: 900; color: #162033; }
  .archive-meta, .badge-copy { font-size: 0.84rem; color: #4b5563; line-height: 1.35; }
  .archive-item.complete .archive-date { color: #14532d; }
  .archive-item.failed .archive-date { color: #991b1b; }
  .archive-item.complete .archive-meta { color: #2f5d3a; }
  .archive-item.failed .archive-meta { color: #7f1d1d; }
  .archive-card { width: min(560px, 100%); }
  .archive-toolbar { display: grid; grid-template-columns: 48px minmax(0, 1fr) 48px; gap: 10px; align-items: center; }
  .archive-nav { min-height: 48px; padding: 0; font-size: 1.6rem; line-height: 1; border-radius: 999px; }
  .archive-month-label { min-height: 48px; border: 1px solid #d8cfbe; border-radius: 16px; background: #fffdf8; display: grid; place-items: center; font-size: 1.18rem; font-weight: 900; color: #162033; }
  .archive-weekdays { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 8px; padding: 0 4px; }
  .archive-weekdays div { text-align: center; font-size: 0.74rem; font-weight: 900; letter-spacing: 0.04em; text-transform: uppercase; color: #8a8f99; }
  .archive-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 10px 8px; }
  .archive-day-spacer { min-height: 82px; }
  .archive-day { border: none; background: transparent; box-shadow: none; padding: 0; display: grid; justify-items: center; gap: 6px; border-radius: 16px; }
  .archive-day:hover { transform: none; box-shadow: none; }
  .archive-day:disabled { opacity: 1; cursor: default; }
  .archive-day-number { font-size: 0.78rem; font-weight: 900; color: #7b818b; line-height: 1; }
  .archive-day.muted .archive-day-number { color: #c0c4cc; }
  .archive-marker { width: 42px; height: 36px; display: grid; place-items: center; }
  .archive-venn { position: relative; width: 34px; height: 28px; }
  .archive-venn-circle { position: absolute; width: 18px; height: 18px; border-radius: 999px; border: 2px solid #c9c2b6; background: transparent; }
  .archive-venn-circle.a { top: 0; left: 8px; }
  .archive-venn-circle.b { left: 0; top: 10px; }
  .archive-venn-circle.c { right: 0; top: 10px; }
  .archive-day.open .archive-venn-circle { border-color: #cfc7bb; background: rgba(255, 253, 248, 0.35); }
  .archive-day.failed .archive-venn-circle { border-color: #dc2626; background: rgba(248, 113, 113, 0.38); }
  .archive-day.complete .archive-venn-circle.a { border-color: #5b74a8; background: rgba(155, 188, 236, 0.92); }
  .archive-day.complete .archive-venn-circle.b { border-color: #b54f88; background: rgba(233, 172, 203, 0.92); }
  .archive-day.complete .archive-venn-circle.c { border-color: #56a774; background: rgba(191, 237, 194, 0.95); }
  .archive-day.todayish .archive-day-number { color: #162033; }
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
  .difficulty-panel { border: 1px solid #e3d8c6; border-radius: 18px; background: linear-gradient(180deg, #fffcf5 0%, #f7efe0 100%); padding: 12px; display: grid; gap: 10px; }
  .difficulty-panel[hidden] { display: none; }
  .difficulty-kicker { font-size: 0.72rem; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; text-align: center; color: #7a5a35; }
  .difficulty-grid { display: grid; gap: 8px; }
  .difficulty-item { border: 1px solid rgba(216, 207, 190, 0.82); border-radius: 14px; background: rgba(255, 255, 255, 0.72); padding: 10px; display: grid; gap: 6px; }
  .difficulty-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
  .difficulty-label { font-size: 0.82rem; font-weight: 900; color: #162033; }
  .difficulty-rate { font-size: 1.25rem; font-weight: 900; color: #162033; line-height: 1; }
  .difficulty-meta { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
  .difficulty-note { font-size: 0.78rem; color: #5a6476; line-height: 1.25; }
  .difficulty-meter { display: inline-flex; align-items: center; gap: 5px; }
  .difficulty-dot { width: 14px; height: 14px; border-radius: 999px; border: 2px solid #d4ccbf; background: transparent; }
  .difficulty-dot.filled.easy-a { border-color: #8b5cf6; background: rgba(168, 85, 247, 0.72); }
  .difficulty-dot.filled.easy-b { border-color: #10b981; background: rgba(16, 185, 129, 0.72); }
  .difficulty-dot.filled.easy-c { border-color: #3b82f6; background: rgba(59, 130, 246, 0.72); }
  .difficulty-dot.filled.hard-a { border-color: #d97706; background: rgba(245, 158, 11, 0.72); }
  .difficulty-dot.filled.hard-b { border-color: #ef4444; background: rgba(239, 68, 68, 0.72); }
  .difficulty-dot.filled.hard-c { border-color: #a855f7; background: rgba(168, 85, 247, 0.72); }
  .difficulty-tier { font-size: 0.78rem; font-weight: 900; color: #7a5a35; white-space: nowrap; }
  .celebration-lights { display: flex; justify-content: center; gap: 10px; padding-top: 4px; }
  .celebration-lights span { width: 10px; height: 10px; border-radius: 999px; background: #f59e0b; box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.35); animation: celebrationGlow 1.4s ease-in-out infinite; }
  .celebration-lights span:nth-child(2) { background: #10b981; animation-delay: 0.16s; }
  .celebration-lights span:nth-child(3) { background: #3b82f6; animation-delay: 0.32s; }
  .celebration-lights span:nth-child(4) { background: #ec4899; animation-delay: 0.48s; }
  .celebration-lights span:nth-child(5) { background: #f59e0b; animation-delay: 0.64s; }
  @keyframes celebrationGlow {
    0%, 100% { transform: translateY(0) scale(0.92); box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.14); opacity: 0.82; }
    50% { transform: translateY(-4px) scale(1.18); box-shadow: 0 0 18px 4px rgba(245, 158, 11, 0.26); opacity: 1; }
  }
  .miss-lights { display: flex; justify-content: center; gap: 10px; padding-top: 4px; }
  .miss-lights span { width: 10px; height: 10px; border-radius: 999px; background: #ef4444; box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.2); animation: missGlow 1.8s ease-in-out infinite; }
  .miss-lights span:nth-child(2) { background: #f97316; animation-delay: 0.18s; }
  .miss-lights span:nth-child(3) { background: #94a3b8; animation-delay: 0.36s; }
  .miss-lights span:nth-child(4) { background: #f97316; animation-delay: 0.54s; }
  .miss-lights span:nth-child(5) { background: #ef4444; animation-delay: 0.72s; }
  @keyframes missGlow {
    0%, 100% { transform: translateY(0) scale(0.94); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.1); opacity: 0.7; }
    50% { transform: translateY(-2px) scale(1.08); box-shadow: 0 0 12px 2px rgba(239, 68, 68, 0.18); opacity: 0.92; }
  }
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
const HARD_TIMER_MS = 30000;
const HARD_LIFELINE_BONUS_MS = 15000;
const TUTORIAL_KEY = "common-ground-tutorial-seen";
const STATS_KEY = "common-ground-stats-v2";
// Share metadata: update these three values if you ever refresh the public branding.
const APP_URL = "https://commongroundpuzzle.com/";
const SHARE_TITLE = "Common Ground: The Daily Connection Game";
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
const trackedPuzzleStarts = new Set();
const puzzleStartTimes = new Map();
let archiveMonthKey = null;
let hardTimerInterval = null;
let midnightRolloverTimeout = null;
let dailyCompleteTimeout = null;
let hardMissedTimeout = null;

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
const launchCopyEl = document.getElementById("launch-copy");
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
const archivePrevBtn = document.getElementById("archive-prev");
const archiveNextBtn = document.getElementById("archive-next");
const archiveMonthLabelEl = document.getElementById("archive-month-label");
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
const hardReadyModalEl = document.getElementById("hard-ready-modal");
const hardReadyCopyEl = document.getElementById("hard-ready-copy");
const hardReadyStartBtn = document.getElementById("hard-ready-start");
const hardReadyZenBtn = document.getElementById("hard-ready-zen");
const dailyCompleteModalEl = document.getElementById("daily-complete-modal");
const dailyCompleteCopyEl = document.getElementById("daily-complete-copy");
const dailyCompleteDifficultyEl = document.getElementById("daily-complete-difficulty");
const dailyCompleteDifficultyGridEl = document.getElementById("daily-complete-difficulty-grid");
const dailyCompleteStatsBtn = document.getElementById("daily-complete-stats");
const dailyCompleteShareBtn = document.getElementById("daily-complete-share");
const dailyCompleteArchiveBtn = document.getElementById("daily-complete-archive");
const dailyCompleteCloseBtn = document.getElementById("daily-complete-close");
const hardMissedModalEl = document.getElementById("hard-missed-modal");
const hardMissedCopyEl = document.getElementById("hard-missed-copy");
const hardMissedDifficultyEl = document.getElementById("hard-missed-difficulty");
const hardMissedDifficultyGridEl = document.getElementById("hard-missed-difficulty-grid");
const hardMissedStatsBtn = document.getElementById("hard-missed-stats");
const hardMissedShareBtn = document.getElementById("hard-missed-share");
const hardMissedArchiveBtn = document.getElementById("hard-missed-archive");
const hardMissedRetryBtn = document.getElementById("hard-missed-retry");

function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }
function capitalize(value) { return value.charAt(0).toUpperCase() + value.slice(1); }
function formatLongDate(dayStamp) { const [y, m, d] = dayStamp.split("-").map(Number); return new Date(y, m - 1, d).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }); }
function formatShortDate(dayStamp) { const [y, m, d] = dayStamp.split("-").map(Number); return new Date(y, m - 1, d).toLocaleDateString(undefined, { month: "short", day: "numeric" }); }
function formatMonthYear(monthKey) { const [y, m] = monthKey.split("-").map(Number); return new Date(y, m - 1, 1).toLocaleDateString(undefined, { month: "long", year: "numeric" }); }
function getLocalDayStamp(date = new Date()) { return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`; }
function shiftDayStamp(dayStamp, amount) { const [y, m, d] = dayStamp.split("-").map(Number); const date = new Date(y, m - 1, d); date.setDate(date.getDate() + amount); return getLocalDayStamp(date); }
function getMonthKey(dayStamp) { return dayStamp.slice(0, 7); }
function shiftMonthKey(monthKey, amount) { const [y, m] = monthKey.split("-").map(Number); const date = new Date(y, m - 1 + amount, 1); return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`; }
function getMonthDayStamp(monthKey, day) { return `${monthKey}-${String(day).padStart(2, "0")}`; }
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
function trackEvent(name, params = {}) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
function getAnalyticsParams(extra = {}) {
  return {
    puzzle_date: getActiveDate(),
    difficulty: capitalize(activeStage),
    section: activeSection,
    ...extra
  };
}
function getPuzzleStartKey(day = getActiveDate(), stage = activeStage) {
  return `${day}:${stage}`;
}
function rememberPuzzleStart(day = getActiveDate(), stage = activeStage) {
  const key = getPuzzleStartKey(day, stage);
  if (!puzzleStartTimes.has(key)) puzzleStartTimes.set(key, Date.now());
}
function getPuzzleElapsedMs(day = getActiveDate(), stage = activeStage) {
  const startedAt = puzzleStartTimes.get(getPuzzleStartKey(day, stage));
  return Number.isFinite(startedAt) ? Math.max(0, Date.now() - startedAt) : null;
}
function getDaysSinceLastPlay() {
  const timestamps = Object.values(stats?.dayHistory || {})
    .map((record) => record?.lastPlayedAt ? Date.parse(record.lastPlayedAt) : NaN)
    .filter((value) => Number.isFinite(value))
    .sort((a, b) => b - a);
  if (!timestamps.length) return null;
  return Math.max(0, Math.floor((Date.now() - timestamps[0]) / 86400000));
}
function trackReturnVisit() {
  const liveDay = getLiveDayStamp();
  const meta = getDerivedStats();
  const visitKey = `common-ground-visit:${liveDay}`;
  if (safeGetStorage(visitKey) === "1") return;
  safeSetStorage(visitKey, "1");
  const visitParams = {
    puzzle_date: liveDay,
    daily_streak: meta.visibleDailyStreak,
    best_daily_streak: meta.bestDailyStreak,
    daily_sets_completed: meta.dailySetsCompleted,
    days_since_last_play: getDaysSinceLastPlay()
  };
  trackEvent("daily_streak", visitParams);
  if (meta.lifetimePuzzlesAttempted > 0 || meta.dailySetsCompleted > 0) {
    trackEvent("return_user", visitParams);
  }
}
function normalizeFailureReason(reason = "") {
  const normalized = String(reason).toLowerCase();
  if (normalized.includes("time")) return "time_expired";
  if (normalized.includes("give up")) return "give_up";
  return "out_of_tries";
}
function trackPuzzleStart(day = getActiveDate(), stage = activeStage) {
  const key = `${day}:${stage}`;
  rememberPuzzleStart(day, stage);
  if (trackedPuzzleStarts.has(key)) return;
  trackedPuzzleStarts.add(key);
  trackEvent("puzzle_start", {
    puzzle_date: day,
    difficulty: capitalize(stage),
    section: activeSection
  });
}
function getActiveSet() { return DAILY_SETS[activeDayIndex]; }
function getActiveDate() { return getActiveSet()?.date || null; }
function getActivePuzzle() { return getActiveSet()?.[activeStage] || null; }
function getPuzzleByStage(day = getActiveDate(), stage = activeStage) {
  const set = DAILY_SETS.find((entry) => entry.date === day);
  return set?.[stage] || null;
}
function getStageKey(day = getActiveDate(), stage = activeStage) { return `${day}:${stage}`; }
function getStageRecord(day = getActiveDate(), stage = activeStage) { const record = getDayRecord(day, false); return record ? record[stage] : null; }
function isHardUnlocked(day = getActiveDate()) { return Boolean(getStageRecord(day, "easy")?.status === "solved"); }
function getActiveMaxLives() { const record = getDayRecord(getActiveDate(), false); return BASE_LIVES + (activeStage === "hard" && record?.usedHardLifeline ? 1 : 0); }
function shuffle(arr) { const out = [...arr]; for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; } return out; }
function createState() { return { placements: Object.fromEntries(SLOTS.map((slot) => [slot, null])), tileLocation: Object.fromEntries(currentTiles.map((tile) => [tile.id, null])), selectedTileId: null, lockedTiles: new Set(), revealedSlots: new Set(), wrongSlots: new Set(), wrongCircles: new Set(), livesUsed: 0, tries: 0, solved: false, failed: false, practiceMode: false, history: [], bankOrder: shuffle(currentTiles.map((tile) => tile.id)), timerRemainingMs: activeStage === "hard" ? HARD_TIMER_MS : null, lastTimerTickAt: null }; }
function snap() { return { placements: deepClone(state.placements), tileLocation: deepClone(state.tileLocation), selectedTileId: state.selectedTileId, lockedTiles: [...state.lockedTiles], revealedSlots: [...state.revealedSlots], wrongSlots: [...state.wrongSlots], wrongCircles: [...state.wrongCircles], livesUsed: state.livesUsed, tries: state.tries, solved: state.solved, failed: state.failed, practiceMode: state.practiceMode, bankOrder: [...state.bankOrder], timerRemainingMs: state.timerRemainingMs, lastTimerTickAt: state.lastTimerTickAt }; }
function restorePlayableState(snapshot, history = []) { if (!snapshot) return createState(); return { placements: deepClone(snapshot.placements), tileLocation: deepClone(snapshot.tileLocation), selectedTileId: snapshot.selectedTileId, lockedTiles: new Set(snapshot.lockedTiles || []), revealedSlots: new Set(snapshot.revealedSlots || []), wrongSlots: new Set(snapshot.wrongSlots || []), wrongCircles: new Set(snapshot.wrongCircles || []), livesUsed: snapshot.livesUsed || 0, tries: snapshot.tries || 0, solved: Boolean(snapshot.solved), failed: Boolean(snapshot.failed), practiceMode: Boolean(snapshot.practiceMode), history: [...history], bankOrder: [...(snapshot.bankOrder || currentTiles.map((tile) => tile.id))], timerRemainingMs: snapshot.timerRemainingMs ?? (activeStage === "hard" ? HARD_TIMER_MS : null), lastTimerTickAt: null }; }
function buildSolvedState(result) { const solvedState = createState(); solvedState.timerRemainingMs = activeStage === "hard" ? (result?.timerRemainingMs ?? solvedState.timerRemainingMs) : null; solvedState.tries = result?.tries || 1; solvedState.livesUsed = Math.min(result?.tries || 1, getActiveMaxLives()); solvedState.solved = true; solvedState.wrongSlots = new Set(); solvedState.wrongCircles = new Set(); SLOTS.forEach((slot) => { solvedState.revealedSlots.add(slot); const tile = currentTiles.find((entry) => entry.correctSlot === slot); if (!tile) return; solvedState.placements[slot] = tile.id; solvedState.tileLocation[tile.id] = slot; solvedState.lockedTiles.add(tile.id); }); solvedState.bankOrder = currentTiles.map((tile) => tile.id).filter((id) => solvedState.tileLocation[id] === null); return solvedState; }
function buildFailedState(result) {
  const failedState = createState();
  failedState.solved = false;
  failedState.failed = true;
  failedState.tries = result?.tries || getActiveMaxLives();
  failedState.livesUsed = getActiveMaxLives();
  failedState.timerRemainingMs = activeStage === "hard" ? (result?.timerRemainingMs ?? 0) : null;
  if (activeStage === "hard") {
    failedState.lastTimerTickAt = null;
    return failedState;
  }
  failedState.revealedSlots = new Set(SLOTS);
  currentTiles.forEach((tile) => {
    if (!tile.correctSlot) return;
    failedState.placements[tile.correctSlot] = tile.id;
    failedState.tileLocation[tile.id] = tile.correctSlot;
    failedState.lockedTiles.add(tile.id);
  });
  failedState.bankOrder = currentTiles.map((tile) => tile.id).filter((id) => failedState.tileLocation[id] === null);
  return failedState;
}
function saveCurrentStageState() { const finalized = getStageRecord(); if (!state?.practiceMode && finalized && (finalized.status === "solved" || finalized.status === "failed")) return; dayStates[getStageKey()] = snap(); }
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
  const easyPuzzlesAttempted = records.filter((entry) => entry.easy?.status === "solved" || entry.easy?.status === "failed").length;
  const hardPuzzlesAttempted = records.filter((entry) => entry.hard?.status === "solved" || entry.hard?.status === "failed").length;
  const lifetimePuzzlesAttempted = easyPuzzlesAttempted + hardPuzzlesAttempted;
  const hardPuzzlesCompleted = records.filter((entry) => entry.hard?.status === "solved").length;
  const lifetimePuzzlesSolved = records.reduce((sum, entry) => sum + (entry.easy?.status === "solved" ? 1 : 0) + (entry.hard?.status === "solved" ? 1 : 0), 0);
  const cleanSheetDays = records.filter((entry) => entry.completedDailySet && !entry.usedHardLifeline).length;
  const hardWithoutLifeline = records.filter((entry) => entry.hard?.status === "solved" && !entry.usedHardLifeline).length;
  const meta = { dailySetsCompleted, easyPuzzlesAttempted, hardPuzzlesAttempted, lifetimePuzzlesAttempted, hardPuzzlesCompleted, lifetimePuzzlesSolved, cleanSheetDays, hardWithoutLifeline, visibleDailyStreak, bestDailyStreak: best };
  meta.unlockedBadges = BADGES.filter((badge) => badge.test(meta));
  meta.badgeCount = meta.unlockedBadges.length;
  meta.records = records;
  return meta;
}
function formatSolveRate(solved, attempted) {
  if (!attempted) return "—";
  return `${Math.round((solved / attempted) * 100)}%`;
}
function getDifficultyPercent(day = getActiveDate(), stage = activeStage) {
  const percent = Number(getPuzzleByStage(day, stage)?.difficultyEstimate);
  return Number.isFinite(percent) ? Math.max(0, Math.min(100, Math.round(percent))) : null;
}
function getDifficultyBars(percent, stage) {
  if (!Number.isFinite(percent)) return 0;
  const max = stage === "easy" ? 95 : 85;
  const min = stage === "easy" ? 70 : 35;
  const normalized = 1 - ((percent - min) / (max - min));
  return Math.max(1, Math.min(5, Math.round((normalized * 4) + 1)));
}
function getDifficultyLabel(percent, stage) {
  const bars = getDifficultyBars(percent, stage);
  const labels = stage === "easy"
    ? ["Gentle", "Friendly", "Tricky", "Tough", "Brutal"]
    : ["Manageable", "Spicy", "Tough", "Brutal", "Savage"];
  return labels[bars - 1];
}
function renderDifficultyItem(stage, percent) {
  const bars = getDifficultyBars(percent, stage);
  const dotClasses = stage === "easy"
    ? ["easy-a", "easy-b", "easy-c", "easy-a", "easy-b"]
    : ["hard-a", "hard-b", "hard-c", "hard-a", "hard-b"];
  const dots = Array.from({ length: 5 }, (_, index) => `<span class="difficulty-dot${index < bars ? ` filled ${dotClasses[index]}` : ""}"></span>`).join("");
  return `<div class="difficulty-item"><div class="difficulty-head"><div class="difficulty-label">${capitalize(stage)}</div><div class="difficulty-rate">${percent}%</div></div><div class="difficulty-meta"><div class="difficulty-note">Estimated clear rate</div><div class="difficulty-tier">${bars}/5 ${getDifficultyLabel(percent, stage)}</div></div><div class="difficulty-meter" aria-hidden="true">${dots}</div></div>`;
}
function renderDifficultyGrid(targetEl, items) {
  if (!targetEl) return;
  const visibleItems = items.filter((item) => Number.isFinite(item.percent));
  targetEl.innerHTML = visibleItems.map((item) => renderDifficultyItem(item.stage, item.percent)).join("");
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
  const items = [
    { label: "Daily Streak", value: meta.visibleDailyStreak },
    { label: "Best Daily", value: meta.bestDailyStreak },
    { label: "Daily Sets", value: meta.dailySetsCompleted },
    { label: "Overall Solve", value: formatSolveRate(meta.lifetimePuzzlesSolved, meta.lifetimePuzzlesAttempted), note: meta.lifetimePuzzlesAttempted ? `${meta.lifetimePuzzlesSolved} of ${meta.lifetimePuzzlesAttempted} tried` : "No completed attempts yet" },
    { label: "Hard Solve", value: formatSolveRate(meta.hardPuzzlesCompleted, meta.hardPuzzlesAttempted), note: meta.hardPuzzlesAttempted ? `${meta.hardPuzzlesCompleted} of ${meta.hardPuzzlesAttempted} hard` : "No hard attempts yet" },
    { label: "Badges", value: meta.badgeCount }
  ];
  statsGridEl.innerHTML = items.map(({ label, value, note = "" }) => `<div class="stats-item"><div class="stats-label">${label}</div><div class="stats-value">${value}</div>${note ? `<div class="stats-note">${note}</div>` : ""}</div>`).join("");
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
  const liveDay = getLiveDayStamp();
  const archiveSets = DAILY_SETS.filter((set) => set.date < liveDay);
  if (!archiveSets.length) {
    if (archiveMonthLabelEl) archiveMonthLabelEl.textContent = "Archive";
    if (archivePrevBtn) archivePrevBtn.disabled = true;
    if (archiveNextBtn) archiveNextBtn.disabled = true;
    archiveListEl.innerHTML = `<div class="stats-puzzle-item"><div class="stats-puzzle-meta">Archive days will appear here as your queue grows.</div></div>`;
    return;
  }
  const monthKeys = [...new Set(archiveSets.map((set) => getMonthKey(set.date)))].sort();
  if (!archiveMonthKey || !monthKeys.includes(archiveMonthKey)) archiveMonthKey = monthKeys[monthKeys.length - 1];
  const monthIndex = monthKeys.indexOf(archiveMonthKey);
  if (archiveMonthLabelEl) archiveMonthLabelEl.textContent = formatMonthYear(archiveMonthKey);
  if (archivePrevBtn) archivePrevBtn.disabled = monthIndex <= 0;
  if (archiveNextBtn) archiveNextBtn.disabled = monthIndex === -1 || monthIndex >= monthKeys.length - 1;
  const archiveSetMap = new Map(archiveSets.map((set) => [set.date, set]));
  const [year, month] = archiveMonthKey.split("-").map(Number);
  const firstDay = new Date(year, month - 1, 1);
  const firstWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstWeekday; i += 1) cells.push(`<div class="archive-day-spacer" aria-hidden="true"></div>`);
  for (let day = 1; day <= daysInMonth; day += 1) {
    const dayStamp = getMonthDayStamp(archiveMonthKey, day);
    const set = archiveSetMap.get(dayStamp);
    const isPlayableArchiveDay = Boolean(set);
    const record = isPlayableArchiveDay ? getDayRecord(dayStamp, false) : null;
    const isComplete = Boolean(record?.completedDailySet);
    const isAttempted = Boolean(record?.easy?.status || record?.hard?.status);
    const stateClass = isComplete ? "complete" : isAttempted ? "failed" : "open";
    const mutedClass = isPlayableArchiveDay ? "todayish" : "muted";
    cells.push(
      isPlayableArchiveDay
        ? `<button class="archive-day ${stateClass} ${mutedClass}" data-date="${dayStamp}" aria-label="${formatLongDate(dayStamp)}"><div class="archive-marker"><div class="archive-venn" aria-hidden="true"><span class="archive-venn-circle a"></span><span class="archive-venn-circle b"></span><span class="archive-venn-circle c"></span></div></div><div class="archive-day-number">${day}</div></button>`
        : `<button class="archive-day open muted" disabled aria-hidden="true"><div class="archive-marker"></div><div class="archive-day-number">${day}</div></button>`
    );
  }
  archiveListEl.innerHTML = cells.join("");
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
function openDailyCompleteModal() {
  if (!dailyCompleteModalEl) return;
  if (dailyCompleteCopyEl) {
    dailyCompleteCopyEl.textContent = `You finished today's Common Ground set for ${formatLongDate(getActiveDate())}. Come back tomorrow for a new pair of categories.`;
  }
  if (dailyCompleteDifficultyEl && dailyCompleteDifficultyGridEl) {
    const items = [
      { stage: "easy", percent: getDifficultyPercent(getActiveDate(), "easy") },
      { stage: "hard", percent: getDifficultyPercent(getActiveDate(), "hard") }
    ];
    renderDifficultyGrid(dailyCompleteDifficultyGridEl, items);
    dailyCompleteDifficultyEl.hidden = items.every((item) => !Number.isFinite(item.percent));
  }
  dailyCompleteModalEl.hidden = false;
}
function closeDailyCompleteModal() {
  if (dailyCompleteTimeout) {
    window.clearTimeout(dailyCompleteTimeout);
    dailyCompleteTimeout = null;
  }
  if (dailyCompleteModalEl) dailyCompleteModalEl.hidden = true;
}
function scheduleDailyCompleteModal(delayMs = 3000) {
  if (!dailyCompleteModalEl) return;
  if (dailyCompleteTimeout) window.clearTimeout(dailyCompleteTimeout);
  dailyCompleteTimeout = window.setTimeout(() => {
    dailyCompleteTimeout = null;
    openDailyCompleteModal();
  }, delayMs);
}
function openHardMissedModal() {
  if (!hardMissedModalEl) return;
  if (hardMissedCopyEl) hardMissedCopyEl.textContent = "You can try Hard again just for fun. Practice mode has no timer and does not count toward streaks or badges.";
  if (hardMissedDifficultyEl && hardMissedDifficultyGridEl) {
    const percent = getDifficultyPercent(getActiveDate(), "hard");
    renderDifficultyGrid(hardMissedDifficultyGridEl, [{ stage: "hard", percent }]);
    hardMissedDifficultyEl.hidden = !Number.isFinite(percent);
  }
  hardMissedModalEl.hidden = false;
}
function closeHardMissedModal() {
  if (hardMissedTimeout) {
    window.clearTimeout(hardMissedTimeout);
    hardMissedTimeout = null;
  }
  if (hardMissedModalEl) hardMissedModalEl.hidden = true;
}
function scheduleHardMissedModal(delayMs = 3000) {
  if (!hardMissedModalEl) return;
  if (hardMissedTimeout) window.clearTimeout(hardMissedTimeout);
  hardMissedTimeout = window.setTimeout(() => {
    hardMissedTimeout = null;
    openHardMissedModal();
  }, delayMs);
}
function openHardReadyModal() {
  if (!hardReadyModalEl) return;
  if (hardReadyCopyEl) hardReadyCopyEl.textContent = `You have ${Math.round(HARD_TIMER_MS / 1000)} seconds to complete this puzzle.`;
  hardReadyModalEl.hidden = false;
}
function closeHardReadyModal() {
  if (hardReadyModalEl) hardReadyModalEl.hidden = true;
}
function startHardPracticeMode() {
  if (activeStage !== "hard") return;
  closeHardMissedModal();
  state = createState();
  state.practiceMode = true;
  state.timerRemainingMs = null;
  state.lastTimerTickAt = null;
  setMessage("Practice Mode - no timer, no streak or badge credit.", "#7a5a35");
  render();
}
function startHardZenMode() {
  closeHardReadyModal();
  loadDay(activeDayIndex, "hard", activeSection);
  state.practiceMode = true;
  state.timerRemainingMs = null;
  state.lastTimerTickAt = null;
  setMessage("Zen Mode - no timer, no streak or badge credit.", "#7a5a35");
  render();
}
function beginHardTimedMode() {
  closeHardReadyModal();
  loadDay(activeDayIndex, "hard", activeSection);
}
function handleHardStageRequest() {
  if (activeStage === "hard" || !isHardUnlocked()) return;
  const hardRecord = getStageRecord(getActiveDate(), "hard");
  if (hardRecord?.status) {
    switchStage("hard");
    return;
  }
  openHardReadyModal();
}
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
function updateProgressRecord(date, stage, status) {
  const record = getDayRecord(date, true);
  const wasCompletedDailySet = Boolean(record.completedDailySet);
  if (record[stage]?.status === "solved") return;
  record[stage] = { status, tries: state.tries, usedLifeline: Boolean(record.usedHardLifeline) };
  record.lastPlayedAt = new Date().toISOString();
  record.completedDailySet = Boolean(record.easy?.status === "solved" && record.hard?.status === "solved");
  record.completedWithoutLifeline = record.completedDailySet && !record.usedHardLifeline;
  record.streakEligible = record.completedDailySet && activeSection === "today" && date === getLiveDayStamp();
  if (status === "solved" && record.completedDailySet && !wasCompletedDailySet) {
    trackEvent("daily_complete", {
      puzzle_date: date,
      difficulty: capitalize(stage),
      tries_used: state.tries,
      used_lifeline: Boolean(record.usedHardLifeline),
      section: activeSection
    });
  }
  saveStats();
  updateLaunchUi();
  queueNewBadges();
}
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
function getShareSummaryLine() {
  const difficulty = capitalize(activeStage);
  const verb = state.solved ? "Solved" : "Missed";
  if (state.practiceMode) {
    return `${verb} ${difficulty} in ${formatTryCount(state.tries)} (practice mode)`;
  }
  const activeDate = getActiveDate();
  const isLiveToday = activeSection === "today" && activeDate === getLiveDayStamp();
  if (isLiveToday) {
    return `${verb} today's ${difficulty} in ${formatTryCount(state.tries)}`;
  }
  return `${verb} ${formatShortDate(activeDate)} ${difficulty} in ${formatTryCount(state.tries)}`;
}
// Share-sheet text stays lean because rich previews already show the title and art.
// Clipboard text keeps a slightly clearer CTA because it may travel without a preview.
function buildShareText(mode = "web") {
  const grid = buildShareGrid();
  const summary = getShareSummaryLine();
  if (mode === "clipboard") {
    return `${grid}\n${summary}\n\nTry today's puzzle:\n${APP_URL}`;
  }
  return `${grid}\n${summary}\n\nCan you solve it?`;
}
function shouldUseNativeShare() {
  const ua = navigator.userAgent || "";
  const mobileLike = /Android|iPhone|iPad|iPod/i.test(ua);
  return mobileLike && typeof navigator.share === "function";
}
function updateShareUi() { const finished = state.solved || state.failed; sharePanelEl.hidden = !finished; if (!finished) { sharePreviewEl.textContent = ""; shareBtn.textContent = "Share Results"; return; } sharePreviewEl.textContent = buildShareText("web"); }
async function copyShareResults() {
  const shareText = buildShareText("web");
  const clipboardText = buildShareText("clipboard");
  const url = APP_URL;
  trackEvent("share_click", getAnalyticsParams({ tries_used: state?.tries ?? null, solved: Boolean(state?.solved), practice_mode: Boolean(state?.practiceMode) }));
  try {
    if (shouldUseNativeShare()) { await navigator.share({ title: buildShareTitle(), text: shareText, url }); setMessage("Share sheet opened.", "#1f7a4f"); return; }
    const payload = clipboardText;
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(payload);
    else { const input = document.createElement("textarea"); input.value = payload; input.setAttribute("readonly", "true"); input.style.position = "absolute"; input.style.left = "-9999px"; document.body.appendChild(input); input.select(); document.execCommand("copy"); input.remove(); }
    shareBtn.textContent = "Copied"; setMessage("Results copied to clipboard. Paste anywhere.", "#1f7a4f"); window.setTimeout(() => { shareBtn.textContent = "Share Results"; }, 1400);
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
  return document.hidden || !hardTimerInterval || !homeScreenModalEl.hidden || !lifelineModalEl.hidden || !statsModalEl.hidden || !archiveModalEl.hidden || !badgesModalEl.hidden || !badgeUnlockModalEl.hidden || !badgeDetailModalEl.hidden || !tutorialEl.hidden || !launchScreenEl.hidden || !hardMissedModalEl.hidden || !hardReadyModalEl.hidden;
}
function updateTimerUi() {
  const showTimer = activeStage === "hard" && !state?.practiceMode && Boolean(timerWrapEl);
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
    revealFailureBoard("Time expired.");
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
  if (state?.practiceMode) setSummary("Practice Mode - no streak or badge credit.");
  else if (record?.completedDailySet) setSummary(`Daily set complete${record.usedHardLifeline ? " with lifeline" : ""}.`);
  else if (record?.easy?.status === "solved" && !record?.hard) setSummary("Easy complete. Hard is unlocked.");
  else if (record?.hard?.status === "failed") setSummary("Hard missed for this day.");
  else if (record?.easy?.status === "failed") setSummary("Easy missed for this day.");
  else setSummary(`${capitalize(activeStage)} puzzle - ${getActivePuzzle().title}`);
}
function updateButtons() { const finalized = Boolean(getStageRecord()?.status) && !state.practiceMode; undoBtn.disabled = !state.history.length || state.solved || state.failed || finalized; clearBtn.disabled = !hasProgress() || finalized; }
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
function getTileFaceLabel(tile) {
  if (!tile) return "";
  return (state?.solved || state?.failed) && tile.revealLabel ? tile.revealLabel : tile.label;
}
function makeTile(tileId) {
  const tile = tileById[tileId];
  const displayLabel = getTileFaceLabel(tile);
  const el = document.createElement("div");
  el.className = "tile";
  if (!/[A-Za-z]/.test(displayLabel)) el.classList.add("emoji-face");
  if (/[A-Za-z]/.test(displayLabel) && displayLabel.length >= 10) el.classList.add("long-text");
  if (/[A-Za-z]/.test(displayLabel) && displayLabel.length >= 14) el.classList.add("very-long-text");
  el.dataset.tileId = tile.id;
  el.draggable = !state.lockedTiles.has(tile.id) && !state.solved && !state.failed;
  el.innerHTML = `<div class="text">${displayLabel}</div>`;
  if (state.selectedTileId === tile.id) el.classList.add("selected"); if (state.lockedTiles.has(tile.id)) el.classList.add("locked");
  el.addEventListener("click", () => { if (Date.now() < suppressClickUntil) return; if (state.solved || state.failed || state.lockedTiles.has(tile.id)) return; state.selectedTileId = state.selectedTileId === tile.id ? null : tile.id; setMessage(); render(); });
  el.addEventListener("pointerdown", (e) => startTouchDrag(e, tile.id));
  el.addEventListener("dragstart", (e) => { if (state.solved || state.failed || state.lockedTiles.has(tile.id)) { e.preventDefault(); return; } state.selectedTileId = tile.id; e.dataTransfer.setData("text/plain", tile.id); e.dataTransfer.effectAllowed = "move"; render(); });
  return el;
}
function getDropTarget(clientX, clientY) { const hit = document.elementFromPoint(clientX, clientY); if (!hit) return null; const slot = hit.closest(".slot"); if (slot) return slot; if (hit.closest("#bank")) return bankEl; const boardRect = boardEl.getBoundingClientRect(); const insideBoard = clientX >= boardRect.left && clientX <= boardRect.right && clientY >= boardRect.top && clientY <= boardRect.bottom; if (!insideBoard) return null; let nearestSlot = null; let nearestDistance = Infinity; slots.forEach((slotEl) => { if (slotEl.classList.contains("has-tile") || slotEl.classList.contains("revealed")) return; const rect = slotEl.getBoundingClientRect(); const centerX = rect.left + (rect.width / 2); const centerY = rect.top + (rect.height / 2); const distance = Math.hypot(clientX - centerX, clientY - centerY); if (distance < nearestDistance) { nearestDistance = distance; nearestSlot = slotEl; } }); const isTouchViewport = window.matchMedia?.("(max-width: 768px)")?.matches; const snapRadius = isTouchViewport ? Math.max(60, Math.min(boardRect.width, boardRect.height) * 0.16) : Math.max(42, Math.min(boardRect.width, boardRect.height) * 0.12); return nearestDistance <= snapRadius ? nearestSlot : null; }
function createGhost(tileId) { const ghost = document.createElement("div"); ghost.className = "drag-ghost"; ghost.textContent = tileById[tileId].label; document.body.appendChild(ghost); return ghost; }
function positionGhost(ghost, clientX, clientY) { ghost.style.left = `${clientX - ghost.offsetWidth / 2}px`; ghost.style.top = `${clientY - ghost.offsetHeight / 2}px`; }
function maybeAutoSubmitAfterPlacement() {
  if (!allPlaced() || state.solved || state.failed || state.livesUsed >= getActiveMaxLives()) return;
  window.setTimeout(() => {
    if (allPlaced() && !state.solved && !state.failed && state.livesUsed < getActiveMaxLives()) submitAnswers();
  }, 90);
}
function startTouchDrag(e, tileId) { if (e.pointerType !== "touch" || state.solved || state.failed || state.lockedTiles.has(tileId)) return; touchDrag = { tileId, startX: e.clientX, startY: e.clientY, moved: false, ghost: null }; window.addEventListener("pointermove", onTouchDragMove); window.addEventListener("pointerup", onTouchDragEnd); window.addEventListener("pointercancel", onTouchDragEnd); }
function onTouchDragMove(e) { if (!touchDrag || e.pointerType !== "touch") return; const distance = Math.hypot(e.clientX - touchDrag.startX, e.clientY - touchDrag.startY); if (!touchDrag.moved && distance > 6) { touchDrag.moved = true; touchDrag.ghost = createGhost(touchDrag.tileId); } if (touchDrag.moved && touchDrag.ghost) positionGhost(touchDrag.ghost, e.clientX, e.clientY); }
function onTouchDragEnd(e) { if (!touchDrag || e.pointerType !== "touch") return; window.removeEventListener("pointermove", onTouchDragMove); window.removeEventListener("pointerup", onTouchDragEnd); window.removeEventListener("pointercancel", onTouchDragEnd); if (touchDrag.moved) { suppressClickUntil = Date.now() + 350; const target = getDropTarget(e.clientX, e.clientY); let moved = false; if (target?.classList.contains("slot")) { pushUndo(); moved = moveTileToSlot(touchDrag.tileId, target.dataset.slot); } else if (target === bankEl) { pushUndo(); moved = moveTileToPool(touchDrag.tileId); } if (moved) { state.selectedTileId = null; setMessage(); render(); if (target?.classList.contains("slot")) maybeAutoSubmitAfterPlacement(); } } if (touchDrag.ghost) touchDrag.ghost.remove(); touchDrag = null; }
function moveTileToSlot(tileId, slot) { if (!tileById[tileId] || !SLOTS.includes(slot) || state.solved || state.failed || state.lockedTiles.has(tileId)) return false; const from = state.tileLocation[tileId]; if (from === slot) return true; const occupant = state.placements[slot]; if (occupant && state.lockedTiles.has(occupant)) return false; state.placements[slot] = tileId; state.tileLocation[tileId] = slot; if (from) { state.placements[from] = occupant || null; if (occupant) state.tileLocation[occupant] = from; } else if (occupant) { state.tileLocation[occupant] = null; } saveCurrentStageState(); return true; }
function moveTileToPool(tileId) { if (!tileById[tileId] || state.solved || state.failed || state.lockedTiles.has(tileId)) return false; const slot = state.tileLocation[tileId]; if (!slot) return true; state.placements[slot] = null; state.tileLocation[tileId] = null; saveCurrentStageState(); return true; }
function shakeBoard() { boardEl.classList.remove("shake"); void boardEl.offsetWidth; boardEl.classList.add("shake"); }
function activateHardLifeline() { const record = getDayRecord(getActiveDate(), true); if (record.usedHardLifeline) return; record.usedHardLifeline = true; if (activeStage === "hard") state.timerRemainingMs = Math.min(HARD_TIMER_MS + HARD_LIFELINE_BONUS_MS, (state.timerRemainingMs ?? 0) + HARD_LIFELINE_BONUS_MS); stats.firstLifelinePromptSeen = true; saveStats(); closeLifelineModals(); setMessage("Lifeline activated. One extra try and +15 seconds.", "#b45309"); render(); }
function maybeOfferLifeline() { if (activeStage !== "hard") return false; const record = getDayRecord(getActiveDate(), true); if (record.usedHardLifeline) return false; if (stats.firstLifelinePromptSeen) { activateHardLifeline(); return true; } lifelineModalEl.hidden = false; return true; }
function finishWin() { state.solved = true; state.failed = false; SLOTS.forEach((slot) => { state.revealedSlots.add(slot); const tileId = state.placements[slot]; if (tileId) state.lockedTiles.add(tileId); }); const elapsedMs = getPuzzleElapsedMs(); const baseParams = getAnalyticsParams({ tries_used: state.tries, timer_remaining_ms: activeStage === "hard" ? state.timerRemainingMs : null, practice_mode: Boolean(state.practiceMode) }); trackEvent("puzzle_solved", baseParams); if (!state.practiceMode) { trackEvent("puzzle_complete", { ...baseParams, time_to_complete_ms: elapsedMs }); if (Number.isFinite(elapsedMs)) trackEvent("time_to_complete", { ...baseParams, time_to_complete_ms: elapsedMs }); } if (state.practiceMode) { setMessage("Practice complete.", "#1f7a4f"); playTone("success"); vibrate([40, 30, 70]); render(); return; } updateProgressRecord(getActiveDate(), activeStage, "solved"); const record = getDayRecord(getActiveDate(), false); const completedDailySet = Boolean(record?.completedDailySet); if (activeStage === "easy" && !completedDailySet) { hardUnlockPulseActive = true; window.setTimeout(() => { hardUnlockPulseActive = false; render(); }, 2200); } setMessage(activeStage === "easy" && !completedDailySet ? "Easy cleared. Hard is unlocked." : completedDailySet ? "Daily set complete." : `${capitalize(activeStage)} solved.`, "#1f7a4f"); playTone("success"); vibrate([40, 30, 70]); render(); if (completedDailySet) scheduleDailyCompleteModal(3000); }
function revealFailureBoard(reason = "Out of tries.") {
  state.failed = true;
  state.solved = false;
  state.selectedTileId = null;
  if (!state.practiceMode) {
    trackEvent("puzzle_fail", getAnalyticsParams({
      tries_used: state.tries,
      timer_remaining_ms: activeStage === "hard" ? state.timerRemainingMs : null,
      failure_reason: normalizeFailureReason(reason)
    }));
  }
  if (activeStage === "hard" && !state.practiceMode) {
    state.lastTimerTickAt = null;
    updateProgressRecord(getActiveDate(), activeStage, "failed");
    setMessage("Today's Hard puzzle got away.", "#991b1b");
    playTone("fail");
    vibrate([120, 60, 120]);
    render();
    scheduleHardMissedModal(3000);
    return;
  }
  state.placements = Object.fromEntries(SLOTS.map((slot) => [slot, null]));
  state.tileLocation = Object.fromEntries(currentTiles.map((tile) => [tile.id, null]));
  state.lockedTiles = new Set();
  state.revealedSlots = new Set(SLOTS);
  currentTiles.forEach((tile) => { if (!tile.correctSlot) return; state.placements[tile.correctSlot] = tile.id; state.tileLocation[tile.id] = tile.correctSlot; state.lockedTiles.add(tile.id); });
  if (!state.practiceMode) updateProgressRecord(getActiveDate(), activeStage, "failed");
  setMessage(state.practiceMode ? "Practice over. Solution revealed." : reason, "#991b1b");
  playTone("fail");
  vibrate([120, 60, 120]);
  render();
}
function submitAnswers() { if (!allPlaced() || state.solved || state.failed || state.livesUsed >= getActiveMaxLives()) return; state.tries += 1; const correctSet = new Set(correctSlots()); const wrongSlots = []; const wrongCircles = new Set(); const slotToCircles = { S1: ["A", "B"], S2: ["A", "C"], S3: ["B", "C"], S4: ["A", "B", "C"] }; SLOTS.forEach((slot) => { const tileId = state.placements[slot]; if (!tileId) return; if (correctSet.has(slot)) { state.revealedSlots.add(slot); state.lockedTiles.add(tileId); } else { wrongSlots.push(slot); slotToCircles[slot].forEach((circle) => wrongCircles.add(circle)); } }); if (state.revealedSlots.size === SLOTS.length) { finishWin(); return; } state.livesUsed += 1; state.history = []; shakeBoard(); if (state.livesUsed >= BASE_LIVES && activeStage === "hard" && getActiveMaxLives() === BASE_LIVES && maybeOfferLifeline()) { render(); return; } if (state.livesUsed >= getActiveMaxLives()) { revealFailureBoard(); return; } state.wrongSlots = new Set(wrongSlots); state.wrongCircles = wrongCircles; playTone("incorrect"); vibrate([45, 35, 45]); render(); window.setTimeout(() => { wrongSlots.forEach((slot) => { const tileId = state.placements[slot]; if (!tileId) return; state.placements[slot] = null; state.tileLocation[tileId] = null; }); state.wrongSlots = new Set(); state.wrongCircles = new Set(); const remaining = SLOTS.length - state.revealedSlots.size; setMessage(`${remaining} ${remaining === 1 ? "spot is" : "spots are"} still wrong.`, "#b91c1c"); render(); }, 900); }
function resetCurrentPuzzle() { if (getStageRecord()?.status && !state.practiceMode) return; const tries = state.tries; const livesUsed = state.livesUsed; const timerRemainingMs = state.timerRemainingMs; const practiceMode = state.practiceMode; state = createState(); state.tries = tries; state.livesUsed = livesUsed; state.practiceMode = practiceMode; state.timerRemainingMs = practiceMode ? null : timerRemainingMs; dayStates[getStageKey()] = snap(); setMessage(practiceMode ? "Practice Mode - no timer, no streak or badge credit." : ""); render(); }
function render() { syncHardTimer(); bankGridEl.innerHTML = ""; const order = Array.isArray(state.bankOrder) && state.bankOrder.length ? state.bankOrder : currentTiles.map((tile) => tile.id); order.forEach((tileId) => { if (state.tileLocation[tileId] === null) bankGridEl.appendChild(makeTile(tileId)); }); Object.entries(circleEls).forEach(([key, el]) => { el.classList.toggle("wrong-circle", state.wrongCircles?.has(key)); }); slots.forEach((slotEl) => { const slot = slotEl.dataset.slot; slotEl.classList.remove("revealed", "locked", "drag-target", "has-tile", "wrong"); slotEl.querySelector(".tile")?.remove(); const tileId = state.placements[slot]; if (tileId) { slotEl.classList.add("has-tile"); slotEl.appendChild(makeTile(tileId)); } if (state.revealedSlots.has(slot)) slotEl.classList.add("revealed"); if (state.wrongSlots?.has(slot)) slotEl.classList.add("wrong"); if (tileId && state.lockedTiles.has(tileId)) slotEl.classList.add("locked"); }); boardEl.classList.toggle("failed", state.failed); updateHeaderUi(); updateColorProgress(); updateLives(); updateButtons(); updateShareUi(); scheduleSlotLayout(); saveCurrentStageState(); }
function loadDay(dayIndex, stage = "easy", section = "today") {
  if (!DAILY_SETS.length) return;
  closeDailyCompleteModal();
  closeHardMissedModal();
  activeDayIndex = Math.max(0, Math.min(dayIndex, DAILY_SETS.length - 1));
  activeSection = section;
  if (stage === "hard" && !isHardUnlocked(DAILY_SETS[activeDayIndex].date)) stage = "easy";
  activeStage = stage;
  const puzzle = getActivePuzzle();
  currentTiles = puzzle.tiles.map((tile, index) => ({ id: `t${index + 1}`, label: tile.label, revealLabel: tile.revealLabel || null, correctSlot: tile.correctSlot }));
  tileById = Object.fromEntries(currentTiles.map((tile) => [tile.id, tile]));
  labelAEl.textContent = puzzle.labels.A;
  labelBEl.textContent = puzzle.labels.B;
  labelCEl.textContent = puzzle.labels.C;
  const record = getStageRecord();
  state = record?.status === "solved" ? buildSolvedState(record) : record?.status === "failed" ? buildFailedState(record) : restorePlayableState(dayStates[getStageKey()]);
  if (!record?.status) trackPuzzleStart(getActiveDate(), activeStage);
  setMessage();
  render();
  if (record?.status === "failed" && activeStage === "hard") openHardMissedModal();
}
function switchStage(stage) { if (stage === activeStage) return; if (stage === "hard" && !isHardUnlocked()) return; if (stage === "hard") hardUnlockPulseActive = false; loadDay(activeDayIndex, stage, activeSection); }
function goToToday() {
  const todayIndex = resolveLiveDayIndex();
  loadDay(todayIndex, isHardUnlocked(DAILY_SETS[todayIndex].date) ? "hard" : "easy", "today");
}
function openArchiveDay(day) { const index = DAILY_SETS.findIndex((entry) => entry.date === day); if (index === -1) return; closeArchive(); loadDay(index, "easy", "archive"); }
slots.forEach((slotEl) => { slotEl.addEventListener("click", () => { if (state.solved || state.failed) return; const slot = slotEl.dataset.slot; if (!state.selectedTileId) { const occupant = state.placements[slot]; if (occupant && !state.lockedTiles.has(occupant)) { pushUndo(); moveTileToPool(occupant); setMessage(); render(); } return; } pushUndo(); if (moveTileToSlot(state.selectedTileId, slot)) { state.selectedTileId = null; setMessage(); render(); maybeAutoSubmitAfterPlacement(); } }); slotEl.addEventListener("dragover", (e) => { e.preventDefault(); slotEl.classList.add("drag-target"); }); slotEl.addEventListener("dragleave", () => slotEl.classList.remove("drag-target")); slotEl.addEventListener("drop", (e) => { e.preventDefault(); slotEl.classList.remove("drag-target"); const tileId = e.dataTransfer.getData("text/plain"); if (!tileId) return; pushUndo(); if (moveTileToSlot(tileId, slotEl.dataset.slot)) { state.selectedTileId = null; setMessage(); render(); maybeAutoSubmitAfterPlacement(); } }); });
bankEl.addEventListener("dragover", (e) => e.preventDefault());
bankEl.addEventListener("drop", (e) => { e.preventDefault(); const tileId = e.dataTransfer.getData("text/plain"); if (!tileId) return; pushUndo(); if (moveTileToPool(tileId)) { state.selectedTileId = null; setMessage(); render(); } });
undoBtn?.addEventListener("click", undo); clearBtn?.addEventListener("click", resetCurrentPuzzle); shareBtn?.addEventListener("click", copyShareResults); todayBtn?.addEventListener("click", goToToday); archiveBtn?.addEventListener("click", openArchive); statsBtn?.addEventListener("click", openStats); badgesBtn?.addEventListener("click", openBadges); easyBtn?.addEventListener("click", () => switchStage("easy")); hardBtn?.addEventListener("click", handleHardStageRequest); tutorialStartBtn?.addEventListener("click", dismissTutorial); tutorialSkipBtn?.addEventListener("click", dismissTutorial); launchPlayBtn?.addEventListener("click", closeLaunchScreen); launchHowBtn?.addEventListener("click", () => { closeLaunchScreen(); tutorialEl.hidden = false; }); statsCloseBtn?.addEventListener("click", closeStats); archiveCloseBtn?.addEventListener("click", closeArchive); badgesCloseBtn?.addEventListener("click", closeBadges); badgeUnlockCloseBtn?.addEventListener("click", closeBadgeUnlock); badgeDetailCloseBtn?.addEventListener("click", closeBadgeDetail); statsResetBtn?.addEventListener("click", () => { if (window.confirm("Reset all local daily progress, stats, and badges on this device?")) resetStats(); }); homeScreenTriggerEls.forEach((button) => button?.addEventListener("click", triggerAddToHomeScreen)); useLifelineBtn?.addEventListener("click", activateHardLifeline); homeScreenCloseBtn?.addEventListener("click", () => { homeScreenModalEl.hidden = true; if (homeScreenReturnToLifeline) { lifelineModalEl.hidden = false; } homeScreenReturnToLifeline = false; }); homeScreenUseBtn?.addEventListener("click", activateHardLifeline); hardReadyStartBtn?.addEventListener("click", beginHardTimedMode); hardReadyZenBtn?.addEventListener("click", startHardZenMode); dailyCompleteCloseBtn?.addEventListener("click", closeDailyCompleteModal); dailyCompleteShareBtn?.addEventListener("click", copyShareResults); dailyCompleteStatsBtn?.addEventListener("click", () => { closeDailyCompleteModal(); openStats(); }); dailyCompleteArchiveBtn?.addEventListener("click", () => { closeDailyCompleteModal(); openArchive(); }); hardMissedRetryBtn?.addEventListener("click", startHardPracticeMode); hardMissedShareBtn?.addEventListener("click", copyShareResults); hardMissedStatsBtn?.addEventListener("click", () => { closeHardMissedModal(); openStats(); }); hardMissedArchiveBtn?.addEventListener("click", () => { closeHardMissedModal(); openArchive(); });
archiveListEl?.addEventListener("click", (e) => { const button = e.target.closest(".archive-day[data-date]"); if (!button) return; openArchiveDay(button.dataset.date); });
archivePrevBtn?.addEventListener("click", () => { if (!archiveMonthKey) return; archiveMonthKey = shiftMonthKey(archiveMonthKey, -1); renderArchive(); });
archiveNextBtn?.addEventListener("click", () => { if (!archiveMonthKey) return; archiveMonthKey = shiftMonthKey(archiveMonthKey, 1); renderArchive(); });
badgeListEl?.addEventListener("click", (e) => { const button = e.target.closest(".badge-item.unlocked[data-badge-key]"); if (!button) return; openBadgeDetail(button.dataset.badgeKey); });
function getPuzzleNumber(day = getLiveDayStamp()) {
  const orderedDates = DAILY_SETS
    .map((entry) => entry.date)
    .slice()
    .sort((a, b) => a.localeCompare(b));
  const index = orderedDates.indexOf(day);
  return index === -1 ? orderedDates.length : index + 1;
}
function updateLaunchUi() {
  const liveDay = getLiveDayStamp();
  const streak = getDerivedStats().visibleDailyStreak;
  if (launchDateEl) launchDateEl.textContent = formatLongDate(liveDay);
  if (launchNumberEl) launchNumberEl.textContent = `No. ${getPuzzleNumber(liveDay)}`;
  if (launchCopyEl) launchCopyEl.textContent = `Keep your ${streak}-day streak alive.`;
}
function handleCalendarDayChange() {
  const localDay = getLocalDayStamp();
  if (localDay === currentCalendarDay) return;
  currentCalendarDay = localDay;
  updateLaunchUi();
  trackReturnVisit();
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
[statsModalEl, archiveModalEl, badgesModalEl, badgeUnlockModalEl, badgeDetailModalEl, dailyCompleteModalEl, hardMissedModalEl, hardReadyModalEl].forEach((modal) => { modal?.addEventListener("click", (e) => { if (e.target !== modal) return; if (modal === statsModalEl) closeStats(); if (modal === archiveModalEl) closeArchive(); if (modal === badgesModalEl) closeBadges(); if (modal === badgeUnlockModalEl) closeBadgeUnlock(); if (modal === badgeDetailModalEl) closeBadgeDetail(); if (modal === dailyCompleteModalEl) closeDailyCompleteModal(); if (modal === hardMissedModalEl) closeHardMissedModal(); if (modal === hardReadyModalEl) closeHardReadyModal(); }); });
window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); deferredInstallPrompt = e; }); window.addEventListener("appinstalled", () => { deferredInstallPrompt = null; }); window.addEventListener("resize", scheduleSlotLayout); window.addEventListener("load", () => { scheduleSlotLayout(); handleCalendarDayChange(); scheduleMidnightRollover(); }); window.addEventListener("visibilitychange", () => { if (!document.hidden) { handleCalendarDayChange(); scheduleMidnightRollover(); } }); window.addEventListener("keydown", (e) => { if (e.key !== "Escape") return; closeStats(); closeArchive(); closeBadges(); closeLifelineModals(); closeBadgeUnlock(); closeBadgeDetail(); closeDailyCompleteModal(); closeHardMissedModal(); closeHardReadyModal(); });
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
trackReturnVisit();
updateLaunchUi();
tutorialEl.hidden = true;
if (DAILY_SETS.length) loadDay(activeDayIndex, "easy", "today"); else setMessage("No daily sets are available yet.", "#991b1b");
document.body.classList.remove("app-loading");
document.body.classList.add("app-ready");












































