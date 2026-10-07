# DESIGN.md — MindCraft Visual World

> **Status:** committed visual world. Supersedes the warm-paper direction and `specs/19-design-system.md`.
> Product truth lives in `PRODUCT.md`. This file owns every visual decision.
> Contrast is verified, not asserted: `node scripts/check-contrast.mjs`.

---

## 1. The world

**Volcanic ground, ivory ink, terracotta punctuation.**

Nairobi sits at 1,795m on the shoulder of the Rift Valley. The ground there is volcanic — dark, mineral, tinted toward the highland forest that grows on it. The soil that surrounds it is laterite: terracotta red. The season turns the grass to ochre and back.

That is the palette. Not a mood board of Africa — the actual geology of the one place this firm is anchored to.

### Why this replaced warm paper

The previous direction was warm ivory paper + charcoal + terracotta, justified as "the physical language of intelligence documents. Not screens. Not UI chrome. Documents."

Three things were wrong with it.

**It had no meaning argument.** Every other element of the old system was justified by what MindCraft *is*. The colour was justified by what a physical object is. No line anywhere tied terracotta to Life Sciences, to research, to Africa, to AI, or to Nairobi. An unargued earth tone is decoration — which the system's own Africa test forbids.

**It contradicted its own opening rule.** The system banned importing "the cream/coral/navy trinity," then specified warm ivory and terracotta — functionally cream and coral. It failed its own recognition test on page one.

**It under-represented half the company.** Two of four pillars are AI Enterprise Solutions and AI Training. Half this firm builds and deploys software. A pure paper metaphor describes the research half and ignores the engineering half — the exact "four disconnected vendors" failure, transposed into visual identity.

A deep mineral ground reads as **both**: the register of a field dossier *and* of an instrument at work. And in a category where essentially every competitor ships a white page, it is the single cheapest way to pass the recognition test.

### The recognition test

Remove the logo and all company text. The page should still read as a serious African intelligence, consulting and AI firm. Recognisability comes from composition, typography, information architecture, materiality and editorial rhythm — never from a logo.

---

## 2. Colour

OKLCH throughout. Neutrals are tinted toward the highland-green hue so nothing is a dead grey. Never pure black, never pure white.

```css
/* Ground — volcanic black tinted toward forest green */
--color-ground:       oklch(0.198 0.016 158);  /* page floor */
--color-ground-2:     oklch(0.178 0.020 162);  /* deep band */
--color-ground-deep:  oklch(0.162 0.022 162);  /* deepest — terminal beats, CTA */
--color-raised:       oklch(0.238 0.020 158);  /* raised band */
--color-surface:      oklch(0.256 0.022 158);  /* surface */
--color-surface-2:    oklch(0.300 0.024 158);  /* raised surface */

/* Ink — warm ivory */
--color-ink:          oklch(0.928 0.020 84);   /* body            14.64:1 */
--color-ink-strong:   oklch(0.968 0.016 86);   /* headings        16.50:1 */
--color-ink-2:        oklch(0.782 0.018 84);   /* secondary        9.11:1 */
--color-ink-3:        oklch(0.642 0.016 88);   /* captions         5.43:1 */

/* Lines — highland-green tint, three weights by job */
--color-line:         oklch(0.318 0.020 158);  /* decorative separation */
--color-line-2:       oklch(0.410 0.024 158);  /* structure        2.08:1 */
--color-line-strong:  oklch(0.505 0.026 158);  /* meaning-bearing  3.12:1 */

/* Accent — terracotta / laterite, tuned bright for a dark ground */
--color-accent:       oklch(0.672 0.132 44);   /* as text          5.81:1 */
--color-accent-2:     oklch(0.742 0.118 48);   /* hover            7.62:1 */
--color-accent-deep:  oklch(0.560 0.140 40);
--color-accent-tint:  oklch(0.300 0.060 40);   /* selection wash */

/* Support — data and annotation only, never chrome */
--color-grass:        oklch(0.792 0.092 84);   /* dry grass — numerals, data  9.39:1 */
--color-green:        oklch(0.660 0.070 158);  /* highland — support marks    6.01:1 */
```

### Rules

- **The accent is punctuation, not background.** Active states, the selected node, structural numerals in a real sequence, the primary CTA, the Nairobi marker. If terracotta is filling area, it is wrong.
- **Text on the accent is `--color-ground-deep`, never white.** White on this terracotta is 3.12:1 and fails. Dark ground on it is 6.18:1.
- **Three line weights, three jobs.** Decorative separation uses `--color-line`. Structure uses `--color-line-2`. Anything conveying state or meaning — a selected node, an active border — uses `--color-line-strong`, which clears WCAG 1.4.11's 3:1 floor.
- **Grass and green are data colours.** They annotate numerals, chart marks and support indicators. They never become surfaces or chrome.
- **No fourth brand tone.** No purple, no blue, no neon. Use `color-mix()` for variation before adding a name.

### Contrast floors

Body ≥7:1 · secondary ≥4.5:1 · accent-as-text ≥4.5:1 · non-text and focus ring ≥3:1. Every pairing is machine-checked; a token change that breaks a floor fails the build.

---

## 3. Typography

**Bricolage Grotesque** (display, `opsz 12–96`, `wght 300–800`) · **Literata** (body, `opsz 7–72`) · **Spline Sans Mono** (400/500).

Optical sizing is enabled. These are the reason to use variable faces at all — without `font-optical-sizing: auto` large display type renders with body-weight detail and reads flat.

Banned: Inter · Fraunces · Cormorant · DM Sans · Playfair · Space Mono · IBM Plex · Instrument · Lora · Syne · Plus Jakarta Sans · Outfit · Roboto.

### Scale

Fluid, each step ≥1.25× its neighbour so hierarchy survives at every width.

| Token | Value |
|---|---|
| `--text-eyebrow` | 0.75rem |
| `--text-caption` | 0.8125rem |
| `--text-body-sm` | 0.875rem |
| `--text-body` | 1.0625rem |
| `--text-lead` | `clamp(1.16rem, 1.02rem + 0.62vw, 1.44rem)` |
| `--text-h5` | `clamp(1.09rem, 0.97rem + 0.53vw, 1.37rem)` |
| `--text-h4` | `clamp(1.36rem, 1.16rem + 0.84vw, 1.85rem)` |
| `--text-h3` | `clamp(1.50rem, 1.20rem + 1.30vw, 2.40rem)` |
| `--text-h2` | `clamp(1.90rem, 1.40rem + 2.00vw, 3.00rem)` |
| `--text-h1` | `clamp(2.30rem, 1.50rem + 3.80vw, 4.40rem)` |
| `--text-display` | `clamp(2.65rem, 1.70rem + 4.70vw, 5.10rem)` |

Tuned 2026-09 to cut vertical scroll: the original clamps hit their ceiling on any viewport wider than ~1225px, so every normal desktop saw the max value on every page — "fluid" in name only. Min/mid/max are scaled down by the same factor per tier, so the curve's shape and crossover point are unchanged; only the absolute sizes are smaller. Body, lead, caption and eyebrow are untouched — this was a heading-scale problem, not a copy problem.

`--text-display` exists for rare editorial statements and large structural numerals. It is the top of the range — if nothing on the site reaches it, the typography has collapsed to heading-and-body and will read as weak no matter what the palette does.

### Role assignment — the rule that was being broken

The previous build used mono **405 times**, more than display (143) and body (111) combined, and put **539 type instances at ≤12px against 152 at ≥3xl.** That is the primary cause of "boring." A page of tiny uppercase labels has no range.

- **Display** carries headings and any large editorial statement. Weights 300–500, tracking −0.018em, −0.026em at h1 and above.
- **Body** carries all reading text. Measure 65–75ch. Light type on a dark ground needs slightly more leading than on paper — 1.62 baseline.
- **Mono carries data, and only data.** Coordinates, country counts, sequence indices in a real chain, tabular numerals, the Explorer formula line. Mono as a costume for "technical" is banned. It is not for nav links, buttons, footers or section labels.
- **No eyebrow above a heading.** The heading carries its own weight. Mono labels survive only where they state a fact the reader needs — `1°17′S, 36°49′E`, `45 COUNTRIES`, `01–06` in the actual process sequence. A label that only announces what the heading already says is deleted.
- **Section numbers only where the sequence is information.** The value chain and the six engagement stages are ordered and the order matters — they keep their numerals. Parallel items do not get numbered.

---

## 4. Composition

Containers: `--container-text: 720px` · `--container: 1200px` · `--container-wide: 1360px` · `--gutter: clamp(20px, 5vw, 72px)`.

The previous build used a single container **69 times** and one section padding **33 times**. Uniformity at that scale *is* the templated feeling. Vary both deliberately.

Band rhythm, three weights: `--band-tight` · `--band` · `--band-loose`. A section that matters gets more room above it. More space above a heading than below — the gap is what signals a new section.

### Match composition to content — never repeat one layout

| Content | Form | Never |
|---|---|---|
| The four capabilities | Connected spine — one flow | Four equal cards |
| Process / method | Horizontal spine (desktop), vertical (mobile) | Six identical cards |
| Life Sciences | Ecosystem with selectable sub-sectors | A list |
| Geography | Line map + region disclosure | All 45 countries at once |
| Industry taxonomy | Structured list, Life Sciences elevated | A uniform grid |
| Differentiators | Editorial blocks split by hairlines, asymmetric | Five cards |
| Explorer | Three hairline selectors; the interface *is* the visual | A SaaS dashboard |
| Statements | Asymmetric editorial block | Centred hero text |

Editorial asymmetry is encouraged — 7/5, 8/4, offset annotation splits — wherever it carries meaning.

**Cards mean "these are separate, parallel, equal items."** Most information here is not that. Ask whether it needs containing before containing it. Never nest a card in a card.

---

## 5. Shape, elevation, material

Radius `0` by default, `3px` for interactive controls, pill only for small chips. Large rounded corners are not this world.

**Declare elevation once — border or surface, never both plus a shadow.** The previous build paired a hairline with `shadow-sm` 44 times; that is the ghost card. On this ground, depth comes from the six-step surface ramp and from hairlines. Shadows are reserved for things that genuinely overlay: dropdowns, drawers, modals.

Material comes from the ground ramp and hairline structure. No grain filter, no noise overlay, no glass as decoration.

**Browser surfaces are part of the design.** Selection, caret, scrollbars, focus rings and tabular numerals ship with defaults that belong to no design system. All are themed from the palette.

---

## 6. Motion

`--dur-fast: 150ms` · `--dur: 240ms` · `--dur-slow: 400ms` · `--ease: cubic-bezier(.2,.8,.2,1)` · `--ease-q: cubic-bezier(.16,1,.3,1)`.

Motion clarifies; it never performs. Transform and opacity only — never width, height, padding or margin. Use `grid-template-rows: 0fr → 1fr` for disclosure.

**One authored moment per page, not the same entrance on every section.** A uniform fade-up applied to eleven sections is scattered effect, not motion design. Displacement ≤12px on reveal, ≤4px on hover.

Reduced motion is a first-class path: state changes become instant, nothing is lost. Scroll reveal is JS-gated so content is visible without JS.

Banned: parallax · scroll-hijacking · cursor trails · looping ambient motion · text scramble · bounce and elastic easing · anything that runs without a user trigger.

---

## 7. Imagery

Documentary, not decorative. African business and clinical environments, people at work, infrastructure, Nairobi as a business hub. Muted and slightly desaturated so the image never fights the ground.

Never: safari or wildlife · "tribal" patterns · decorative continent silhouettes · flags · handshake stock · people pointing at holograms · glowing AI screens · robots · circuit boards.

Maps are SVG line work only — no tile engines, no WebGL. Africa as path groups by region. Nairobi as a terracotta dot with its coordinate.

---

## 8. Before sign-off

- Could this be mistaken for Anthropic, an AI startup, or a consulting template? Any yes means redesign.
- Remove the logo — is it still identifiably a serious African intelligence firm?
- Is Life Sciences visibly deeper than every other vertical?
- Do the four capabilities read as one connected system rather than four cards?
- Does mono appear only on data?
- Does anything reach `--text-display`?
- Is the accent still scarce enough to read as punctuation?
- Zero fabricated clients, metrics, testimonials or offices?
- `node scripts/check-contrast.mjs` passes?
- Keyboard-operable throughout, reduced-motion honoured, no horizontal overflow at 320px?

---

## 9. Skills

Typography `/typeset` · colour `/colorize` · layout `/layout` · motion `/animate`, `/design-motion-principles` · amplification `/bolder` · final pass `/polish`, `/high-end-visual-design` · anti-slop `/design-taste-frontend` · technical `/audit`, `/web-design-guidelines`.
