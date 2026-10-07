// Verifies the design-system palette against the contrast floors in specs/22-accessibility.md.
// Run: node scripts/check-contrast.mjs   (exits 1 on any failure)

const TOKENS = {
  ground: [0.272, 0.04, 160],
  ground2: [0.236, 0.04, 162],
  groundDeep: [0.205, 0.036, 162],
  raised: [0.305, 0.042, 160],
  surface: [0.33, 0.044, 160],
  surface2: [0.38, 0.046, 160],
  emerald: [0.345, 0.072, 158],
  ink: [0.94, 0.02, 88],
  inkStrong: [0.975, 0.016, 90],
  ink2: [0.835, 0.022, 88],
  ink3: [0.735, 0.022, 90],
  line: [0.375, 0.04, 160],
  line2: [0.465, 0.042, 160],
  lineStrong: [0.6, 0.04, 160],
  accent: [0.82, 0.128, 84],
  accent2: [0.88, 0.105, 90],
  accentDeep: [0.7, 0.125, 76],
  grass: [0.885, 0.072, 92],
  green: [0.8, 0.12, 152],
};

const srgb = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);

function oklchToLinearRgb([L, C, Hdeg]) {
  const h = (Hdeg * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

// Out-of-gamut channels clip on real displays, which changes the rendered contrast.
// Report it so a token is never signed off on a ratio the screen cannot reproduce.
const outOfGamut = (t) => oklchToLinearRgb(TOKENS[t]).some((c) => c < -0.001 || c > 1.001);

function luminance(token) {
  const [r, g, b] = oklchToLinearRgb(TOKENS[token]).map((c) => Math.min(1, Math.max(0, c)));
  const lin = [r, g, b].map(srgb).map((v) => {
    const x = Math.min(1, Math.max(0, v));
    return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}

function ratio(a, b) {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
}

// [foreground, background, floor, label]
const CHECKS = [
  ['ink', 'ground', 7, 'body text on ground'],
  ['ink', 'ground2', 7, 'body text on deep band'],
  ['ink', 'surface', 7, 'body text on surface'],
  ['inkStrong', 'ground', 7, 'headings on ground'],
  ['ink2', 'ground', 4.5, 'secondary text on ground'],
  ['ink2', 'surface', 4.5, 'secondary text on surface'],
  ['ink3', 'ground', 4.5, 'captions on ground'],
  ['ink3', 'surface', 4.5, 'captions on surface'],
  ['accent', 'ground', 4.5, 'accent as text on ground'],
  ['accent', 'surface', 4.5, 'accent as text on surface'],
  ['accent2', 'ground', 4.5, 'accent hover as text'],
  ['grass', 'ground', 4.5, 'grass numerals on ground'],
  ['green', 'ground', 4.5, 'highland support marks'],
  ['groundDeep', 'accent', 4.5, 'ground-deep text on gold fill (CTA)'],
  ['ink', 'emerald', 7, 'body text on emerald band'],
  ['ink2', 'emerald', 4.5, 'secondary text on emerald band'],
  ['accent', 'emerald', 4.5, 'gold as text on emerald band'],  // Non-text: rules, markers, focus ring — WCAG 1.4.11
  ['line', 'ground', 1.3, 'hairline on ground (decorative)'],
  ['line2', 'ground', 2, 'structural hairline on ground'],
  ['lineStrong', 'ground', 3, 'meaning-bearing border (selected/active)'],
  ['accent', 'ground', 3, 'focus ring on ground'],
  ['accent', 'surface', 3, 'focus ring on surface'],
];

let failed = 0;
console.log('\n  MindCraft palette — WCAG contrast\n');
for (const [fg, bg, floor, label] of CHECKS) {
  const r = ratio(fg, bg);
  const ok = r >= floor;
  if (!ok) failed++;
  console.log(
    `  ${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2).padStart(5)}:1  (need ${String(floor).padStart(3)})  ${label}`
  );
}

const gamut = Object.keys(TOKENS).filter(outOfGamut);
if (gamut.length) console.log(`\n  out of sRGB gamut: ${gamut.join(', ')}`);

console.log(failed ? `\n  ${failed} check(s) failed\n` : '\n  all checks passed\n');
process.exit(failed ? 1 : 0);
