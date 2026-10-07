# 19 — Design System

> ## ⚠️ SUPERSEDED — do not implement from this file
>
> **The authoritative visual system is `DESIGN.md` at the repo root, with `CLAUDE.md` §4–§6.**
> This document predates both and conflicts with them on several points. It is retained
> only as a record of the original token and component thinking.
>
> Known contradictions, so nobody re-introduces them:
>
> | This file says | Actual system |
> |---|---|
> | Display **Fraunces**, body **Inter**, mono **IBM Plex Mono** | **Bricolage Grotesque · Literata · Spline Sans Mono.** Fraunces, Inter and IBM Plex are on CLAUDE.md's banned list as AI-monoculture defaults. |
> | Warm-paper palette; `ink-500 #5B6470`, `ink-300 #9AA3AD`, `surface #FFFFFF` | Dark **volcanic-forest** ground with warm-ivory ink. Those greys are cool blue-grey (hue ≈210) and pure white, both of which the system forbids. |
> | `--radius-1: 4px` | **3px** |
> | Hex values throughout | **OKLCH** throughout |
> | Accordions animate `height` | `grid-template-rows: 0fr → 1fr` — height animation is banned |
>
> Ten other specs cite this file's token names. Where they do, read the value from
> `DESIGN.md` instead. Contrast is machine-verified: `node scripts/check-contrast.mjs`.

> Parent: `design-principles.md` (philosophy) + `requirements.md`. This was the implementation-grade token & component spec for the **"Editorial intelligence report"** language. Stack: **React 19 + Vite + Tailwind v4 + `motion` + lucide-react**. Tailwind v4 uses CSS-first config via `@theme` in `src/index.css`.

---

## 1. Design tokens

### 1.1 Color (near-monochrome ink + one earthen accent)
Warm paper, ink text, a single deliberate accent (terracotta/sienna) used sparingly. No purple/blue "AI" gradients.

```
/* Neutrals — warm ink & paper */
--color-ink-900: #14181C;   /* primary text, near-black (not pure) */
--color-ink-700: #2B3138;   /* strong text / headings on paper */
--color-ink-500: #5B6470;   /* secondary text */
--color-ink-300: #9AA3AD;   /* muted / captions */
--color-line:    #E4DFD6;   /* hairline rules / borders on paper */
--color-paper:   #FAF7F2;   /* page background (warm) */
--color-paper-2: #F2ECE3;   /* subtle alt surface */
--color-surface: #FFFFFF;   /* raised surface (used sparingly) */

/* Accent — terracotta / sienna (earthen, African, non-AI) */
--color-accent-600: #B5502E;  /* primary accent: active, key numbers, rules */
--color-accent-500: #C56A3E;  /* hover */
--color-accent-100: #F3E2D7;  /* accent wash (very sparing) */

/* Ink-mode (dark sections used deliberately, e.g., Home hero footer band) */
--color-ink-bg:   #14181C;   /* dark background */
--color-ink-bg-2: #1B2026;
--color-on-ink-900: #F5F1EA; /* text on dark */
--color-on-ink-500: #A7AEB6;

/* Data-viz categorical (restrained, derived — NO rainbow) */
--dv-1: #14181C;  /* ink */
--dv-2: #B5502E;  /* accent */
--dv-3: #6B7A73;  /* muted slate-green */
--dv-4: #C9A15A;  /* ochre */
--dv-5: #8C8177;  /* warm grey */
/* Sequential (maps/intensity): tint the accent 100→600 */

/* Feedback */
--color-success: #3E6B4F;
--color-error:   #A23A2E;
--color-focus:   #B5502E;  /* focus ring uses accent */
```
**Contrast:** body text `ink-700`/`ink-900` on `paper` ≥ 7:1; `ink-500` on paper ≥ 4.5:1; on-ink text ≥ 7:1 on `ink-bg`. Accent on paper (`accent-600`) ≥ 4.5:1 for text; verify each usage (`/specs/22`).

### 1.2 Typography
Three families (all open-source, self-hosted `woff2`, `font-display: swap`):
- **Display serif — "Fraunces"** (variable; use opt-size, weights 300–500, low softness) for headings, hero, editorial pull-quotes. Gives institutional-editorial character without trend-chasing.
- **Body / UI — "Inter"** (variable) for body, nav, buttons, labels, forms.
- **Mono — "IBM Plex Mono"** for eyebrow labels, data, coordinates, country/index tags, section numbers (the "intelligence" texture).

> If Fraunces feels too expressive in review, fallback display = **"Newsreader"** (same slots). Decision recorded here so a dev doesn't re-litigate: **primary = Fraunces.**

**Type scale** (rem, 16px base; modular ≈ 1.2–1.25, tightened at small sizes). Fluid via `clamp()`:
```
--fs-eyebrow: 0.75rem;                 /* 12px, mono, tracked +0.08em, uppercase */
--fs-caption: 0.8125rem;               /* 13px */
--fs-body-sm: 0.875rem;                /* 14px */
--fs-body:    1rem;                     /* 16px, line-height 1.6 */
--fs-body-lg: 1.125rem;                /* 18px, lead paragraphs, lh 1.55 */
--fs-h6: clamp(1.05rem, 1rem + .3vw, 1.2rem);
--fs-h5: clamp(1.2rem, 1.1rem + .5vw, 1.45rem);
--fs-h4: clamp(1.45rem, 1.3rem + .8vw, 1.85rem);
--fs-h3: clamp(1.8rem, 1.5rem + 1.4vw, 2.5rem);
--fs-h2: clamp(2.25rem, 1.8rem + 2.2vw, 3.4rem);
--fs-h1: clamp(2.9rem, 2.1rem + 4vw, 5rem);      /* hero */
--fs-display: clamp(3.4rem, 2.2rem + 6vw, 6.5rem); /* rare, big editorial numbers/statements */
```
**Rules:** headings = Fraunces, weight 300–450, line-height 1.05–1.15, letter-spacing −0.01em to −0.02em on large sizes. Body = Inter 400/500, lh 1.6. Eyebrows/labels/data = IBM Plex Mono, uppercase, tracking +0.08em. Measure (line length) 60–72ch for body; ≤ 40ch for large display lines.

### 1.3 Spacing scale (4px base)
```
--space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
--space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px;
--space-9: 96px; --space-10: 128px; --space-11: 160px;
```
Section vertical rhythm: mobile `--space-8/9`; desktop `--space-10/11`. Whitespace is structural — err generous.

### 1.4 Layout & grid
- **Containers:** `--container-text: 720px` (reading); `--container: 1200px` (default); `--container-wide: 1360px` (maps/explorer full-bleed); page gutter `clamp(20px, 5vw, 64px)`.
- **Grid:** 12-column, column gap `24px` (desktop) / `16px` (mobile). Editorial **asymmetry encouraged** (e.g., 7/5 or 8/4 splits, offset annotations) where it adds meaning.
- **Breakpoints** (align `/specs/20`): `sm 375`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1440`. Design verified at 320/375/390/414/768/1024/1280/1440.

### 1.5 Radius, borders, elevation
- **Radius philosophy:** minimal. `--radius-0: 0` (default for editorial blocks, rules, inputs), `--radius-1: 4px` (cards, buttons), `--radius-pill` only for small chips/tags. **No large rounded cards.**
- **Borders:** `1px solid var(--color-line)` hairlines are the primary separators. Accent rule `2px var(--color-accent-600)` for emphasis (e.g., active tab, section marker).
- **Elevation:** flat by default. Shadows are rare and subtle — reserved for overlays (modal/drawer/dropdown): `--shadow-overlay: 0 8px 40px -12px rgba(20,24,28,.28)`. No card drop-shadows on the page surface.

### 1.6 Iconography
- **lucide-react**, stroke 1.5, size 20/24. Line icons only (matches editorial line language). No filled/glossy/3D icons, no "AI brain" clichés.
- Icons support labels; never the sole carrier of meaning.

### 1.7 Motion tokens
```
--dur-fast: 150ms; --dur: 240ms; --dur-slow: 400ms;
--ease-out: cubic-bezier(.2,.8,.2,1);
--ease-in-out: cubic-bezier(.4,0,.2,1);
```
Principles: motion clarifies (reveal, emphasis, panel open), never decorates. Scroll-reveal = subtle fade+translate ≤ 12px. Respect `prefers-reduced-motion: reduce` → disable transforms, keep instant state changes. Use `motion` library sparingly; prefer CSS for simple transitions. (Full inventory: `/specs/21`.)

---

## 2. Grid & section system
- **Section shell:** vertical padding per §1.3; optional top hairline rule; optional mono **section number** (e.g., `01 — What we do`) as eyebrow.
- **Editorial header block:** eyebrow (mono) → heading (Fraunces) → 1–3 sentence intro (Inter), left-aligned, max 640px. Reused across pages for consistency.
- **Dark "ink band":** used deliberately (e.g., Home closing, a differentiator statement) — `--color-ink-bg` background, `--color-on-ink-*` text, accent for emphasis. Use ≤ 1–2 per page.

---

## 3. Component library (canonical — page specs reference these)

For each: purpose, anatomy, states, a11y, responsive. Build as React components in `src/components/`.

### 3.1 Buttons (`Button`)
- **Variants:** `primary` (accent-600 bg, on-accent text, radius-1), `secondary` (ink outline 1px, transparent), `ghost` (text + underline-on-hover), `link` (inline). Sizes `md` (default, 44px min height) / `sm`.
- **States:** hover (accent-500 / ink wash), focus-visible (2px accent focus ring, 2px offset), active, disabled (ink-300, no pointer), loading (spinner, aria-busy).
- **Rules:** every button has a real action (no decorative). Min touch target 44×44. Verb-led labels ≤4 words.

### 3.2 Link & CTA row
Contextual CTA pattern at section ends: primary + optional secondary; arrow icon (lucide `arrow-right`) animates 4px on hover (reduced-motion: none).

### 3.3 Eyebrow / Tag / Chip
- **Eyebrow:** mono uppercase label, ink-500, tracking +0.08em.
- **Tag:** small mono label with hairline border (country codes, "Core expertise").
- **Chip (selectable):** used in Explorer/audience/industry filters; states default/hover/selected (accent border + accent-100 wash); keyboard-focusable, `aria-pressed`.

### 3.4 Card (`Card`) — use sparingly
Flat, `--radius-1`, `1px` hairline, no shadow. Anatomy: optional icon/eyebrow → title (≤5 words) → one-liner (≤16 words) → optional affordance (chevron/"Explore"). Hover: hairline → accent, subtle bg `paper-2`. Reserved for enumerable objects (pillars, sub-sectors, industries). Never wrap whole sections in cards.

### 3.5 Accordion (`Accordion` / `AccordionItem`)
For pillar sub-capabilities & deliverables. Anatomy: button header (heading + chevron) → collapsible region. States: collapsed/expanded/hover/focus. **A11y:** header is a real `<button>`, `aria-expanded`, `aria-controls`, region `role="region"` + `aria-labelledby`; arrow/Home/End key support within group; only visual chevron rotates (reduced-motion respects). Single- or multi-open per page spec.

### 3.6 Tabs (`Tabs`)
For grouping (e.g., pillar capability groups on wide screens, or geography regions). Roving tabindex, `role="tablist/tab/tabpanel"`, `aria-selected`, arrow-key nav, active underline = accent 2px. On mobile, tabs may degrade to accordion.

### 3.7 Panel / Drawer (`DetailPanel`, `Drawer`)
Progressive DETAIL container (industry panel, sub-sector detail, region detail).
- **Desktop:** inline side panel or expanding region beside the selector (no route change).
- **Mobile:** bottom-sheet `Drawer` (slides up), max-height 85vh, scrollable, drag/close affordance.
- **A11y:** focus moves into panel on open; `Esc` closes; focus returns to trigger; `aria-modal` only when it traps (drawer overlay) — inline panels do not trap.

### 3.8 Modal (`Modal`) — rare
Only when truly needed (e.g., full Explorer result share, or an image). Focus-trapped, `role="dialog"` `aria-modal="true"`, `Esc` + overlay-click close, scroll-lock, focus restore. Overlay uses `--shadow-overlay`. Prefer panels/drawers over modals.

### 3.9 Navigation (`Header`, `MobileMenu`) — full spec `/specs/17`
Persistent header: wordmark + primary nav + CTA. Desktop: hover/focus dropdown for "What We Do" & "Industries." Mobile: hamburger → full-screen menu, nested items, pinned CTA. Active route state = accent underline/marker. Sticky with subtle hairline on scroll.

### 3.10 Footer (`Footer`) — full spec `/specs/18`
Grouped links + contact block + brand line + utility. Ink band or paper-2 background; hairline top rule.

### 3.11 Forms (`ContactForm`, inputs) — full spec `/specs/16`
Inputs: `--radius-1`, 1px hairline, ink text, label above (never placeholder-as-label), 44px min height, visible focus ring. Error text ink/error color below field, `aria-describedby`, `aria-invalid`. Required marked in label. Select/textarea consistent.

### 3.12 Signature modules (specced in their own files)
- `ValueChainSpine` (`/specs/05`, `/specs/03`) — the engine.
- `EcosystemMap` + `SubSectorPanel` (`/specs/11`) — Life Sciences.
- `IndustryExplorerGrid` + `IndustryPanel` (`/specs/10`).
- `GeoModule` / `RegionSelector` / `CountryList` / `FocusMarkers` (`/specs/12`).
- `Explorer` (Industry×Geography×Capability) (`/specs/13`).
- `ProcessDiagram` (`/specs/14`).
- `GlanceStrip`, `DifferentiatorList`, `AudienceSelector` (`/specs/03`, `/specs/14`, `/specs/15`).

All signature modules share: mono eyebrow/labels, hairline structure, accent for active/selected, line-based diagrams (SVG/CSS, no heavy libs — `/specs/23`), keyboard + reduced-motion support.

---

## 4. Imagery & graphics policy
- **Preferred:** typographic layouts, hairline diagrams, line maps of Africa (SVG), coordinate/grid motifs, restrained data-viz.
- **Photography (optional, if used):** documentary, human, African business/clinical/market contexts — desaturated/duotone toward ink+accent for cohesion. **No stock "AI/robot/hologram" imagery.** Never fabricate people as named team/clients.
- **Maps:** simplified vector Africa (regions as paths); no heavy tile maps, no WebGL globe.
- All meaningful graphics have alt/`<title>`; decorative ones `aria-hidden`.

## 5. Theming implementation notes (Tailwind v4)
- Define tokens under `@theme` in `src/index.css` so they become Tailwind utilities (`bg-paper`, `text-ink-700`, `border-line`, `text-accent-600`, `font-display`, `font-mono`, spacing/`rounded-*`).
- Register font families: `--font-display: "Fraunces", ...`, `--font-sans: "Inter", ...`, `--font-mono: "IBM Plex Mono", ...`.
- Self-host fonts in `src/assets/fonts`; preload the two most critical faces; subset to Latin.
- Provide `.section`, `.container`, `.container-wide`, `.editorial-header`, `.ink-band` utility classes/components for consistency.

## 6. Design-system acceptance criteria
- Tokens defined once, consumed everywhere (no ad-hoc hex/px in components).
- No component uses a banned pattern (`design-principles.md` Do-Not list).
- All interactive components meet a11y (`/specs/22`) and 44px targets.
- Radius stays minimal; no large rounded floating cards; hairlines carry structure.
- Palette holds near-monochrome + single accent; no rainbow, no AI gradients.
- Everything legible and usable 320→1440 (`/specs/20`).
