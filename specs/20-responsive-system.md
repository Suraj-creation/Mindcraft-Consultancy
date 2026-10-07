# 20 — Responsive System

> Parents: `requirements.md` §15 (responsive/perf/a11y — first-class, designed not retrofitted), `design-principles.md` ("MOBILE QUALITY = DESKTOP QUALITY"; decision test #5), `specs/01-information-architecture.md` §8 (mobile IA), `specs/02-content-strategy.md` (length rules — copy never shrinks type to fit), `specs/19-design-system.md` §1.3–§1.4 (tokens, breakpoints, grid), §3 (all components), `specs/25-content-integrity.md` (no content lost on any width).
>
> **Mandate:** responsive is *designed*, not a squeeze of desktop. Every fact reachable on desktop is reachable on mobile through the same disclosure ladder. No horizontal overflow, no clipped text, no disappearing content, no broken grids/maps/modals — at any target width. Copy limits (`specs/02` §3) are absolute; when space is tight we push depth into disclosure (drawer/accordion), never reduce type below the scale in `specs/19` §1.2.
>
> Companion files: `specs/21-interaction-system.md` (the interaction model these layouts host), `specs/19` (tokens), `specs/22` (a11y), `specs/23` (performance / SVG-only maps).

---

## 1. Purpose

Define one consistent, buildable responsive system for the whole site so that:

1. Every layout is verified at the eight target widths and adapts through a single set of breakpoints (aligned to `specs/19` §1.4).
2. Type and space scale *fluidly* (`clamp()`) between breakpoints — no jarring jumps, no fixed-px hero on small screens.
3. Every major component has one specified responsive behavior (not ad-hoc per page).
4. The mobile quality checklist (`requirements.md` §15, brief §30) is enforced and testable.
5. Assets (SVG maps, optional photography) scale correctly and cheaply (`specs/23`).

This file governs *layout adaptation*. Interaction adaptation (hover→tap, panel→bottom-sheet, tabs→accordion, side-by-side→stepper) is specified here at the **layout** level and in `specs/21` at the **interaction** level; they must agree.

---

## 2. Principles

- **One design, many widths.** The same content, hierarchy, and disclosure ladder at 320 and at 1440. Mobile is a first-class layout.
- **Fluid over fixed.** Prefer `clamp()` and fractional grids to hard breakpoint jumps. Breakpoints handle *structural* reflow (columns collapse, map→list); fluid tokens handle *continuous* scaling (type, space, gutter).
- **Reflow, never remove.** When horizontal space runs out, components change *shape* (horizontal→vertical, grid→1-col, map→chips, tabs→accordion, side-by-side→stepper) — they never drop information (`specs/25`).
- **Touch-first at small widths.** No hover-only affordance below `lg`; every interaction has a tap/keyboard path (`specs/21`). Minimum touch target 44×44 (`specs/19` §3.1).
- **Whitespace stays structural.** Section rhythm compresses (`--space-8/9` mobile → `--space-10/11` desktop) but never collapses to cramped; hairlines still carry structure (no boxing-everything-in-cards to "organize" mobile).
- **No horizontal scroll, ever** (except *deliberately* scrollable, clearly-affordanced strips: filter chip rails, industry name strips). The page body never scrolls sideways.
- **Content-length limits are width-independent.** A headline that is ≤9 words stays ≤9 words on mobile; we wrap and clamp type, we do not truncate meaning (`specs/02` §3).

---

## 3. The breakpoint & width system

### 3.1 Breakpoints (canonical — align to `specs/19` §1.4)

| Token | Min width | Primary role |
|---|---|---|
| `sm` | **375px** | small-phone baseline; single column locked in |
| `md` | **768px** | tablet / large phone landscape; 2-col grids, side-by-side pairs appear |
| `lg` | **1024px** | small laptop; full desktop layout — hover affordances, inline panels, multi-column grids, side-by-side Explorer |
| `xl` | **1280px** | laptop/desktop; wider container, more grid columns |
| `2xl` | **1440px** | large desktop; max container / wide modules (maps, Explorer) |

Below `sm` (i.e. **320–374px**) is the **hardening floor**: no dedicated breakpoint, but every layout must remain overflow-free and legible here. This is the width at which "no horizontal overflow" is judged.

### 3.2 Design & test widths (must be verified at each)

```
320   375   390   414   768   1024   1280   1440
 └── phones ──┘      │      │        │        └ large desktop
 (hardening floor)   │      │        └ desktop
                     │      └ small laptop (lg — desktop layout begins)
                     └ tablet / phone-landscape (md)
```

| Width | Class | Expected layout state |
|---|---|---|
| 320 | phone (floor) | single column; all modules in mobile shape; **primary overflow test** |
| 375 | phone (`sm`) | single column baseline |
| 390 | phone | single column (iPhone-class) |
| 414 | large phone | single column; grids *may* go 2-col only if no clipping (e.g. industry grid) |
| 768 | tablet (`md`) | 2-col grids; side-by-side pairs (Europe/US panels); spine may stay vertical or go compact-horizontal per component |
| 1024 | small laptop (`lg`) | **full desktop layout**: horizontal spine, inline panels, side-by-side Explorer, hover affordances |
| 1280 | desktop (`xl`) | wider container; grids 3–4 col |
| 1440 | large desktop (`2xl`) | max container; wide modules full-bleed within `--container-wide` |

Rule: a change in layout **shape** happens only at `md`, `lg`, `xl`, `2xl`. Continuous scaling (type/space/gutter) happens everywhere via `clamp()`.

### 3.3 Where the desktop layout "turns on"

The full desktop interaction model (hover reveal available, inline side panels, horizontal diagrams, side-by-side selectors) activates at **`lg` (1024)**. `md` (768) is a genuine intermediate: 2-column grids and side-by-side panel *pairs* appear, but hover is still not required and complex modules (Explorer, EcosystemMap) may remain in their mobile/stacked shape until `lg`. Per-component rules in §5 state the exact turn-on point.

---

## 4. Fluid type, space, container & grid

### 4.1 Fluid type (clamp) — from `specs/19` §1.2

Type uses the `clamp()` scale already defined in `specs/19` §1.2 (`--fs-h1` … `--fs-eyebrow`). Rules:

- **Never below the min.** Body stays `--fs-body` (16px) minimum; captions/labels never below `--fs-caption` (13px) / eyebrow 12px. No shrinking type to avoid a wrap.
- **Hero is fluid, not oversized on mobile.** `--fs-h1: clamp(2.9rem, 2.1rem + 4vw, 5rem)` — at 320px this resolves to ≈2.9rem (~46px), which must fit within the gutter without overflow and without dominating the first viewport (guards the "oversized hero on mobile" anti-pattern, §7).
- **Measure control.** Body max line length 60–72ch (`--container-text: 720px`); large display lines ≤40ch. On narrow screens the container gutter naturally shortens the measure — good.
- **Letter-spacing** on large Fraunces headings (−0.01 to −0.02em) applies at all widths; mono tracking +0.08em constant.

### 4.2 Fluid space — from `specs/19` §1.3

- **Section vertical rhythm:** mobile `--space-8` (64) / `--space-9` (96); desktop `--space-10` (128) / `--space-11` (160). Interpolate with `clamp()` between `md` and `xl` so rhythm grows smoothly rather than jumping.
- **Intra-component spacing** uses the 4px scale; compress by one step on mobile where needed (e.g. card padding `--space-5`→`--space-4`), never below `--space-3` for tap-comfortable rows.

### 4.3 Container & gutter

- **Page gutter:** `clamp(20px, 5vw, 64px)` (`specs/19` §1.4). At 320 → 20px each side; at 1440 → 64px.
- **Containers:** `--container-text: 720px` (reading), `--container: 1200px` (default), `--container-wide: 1360px` (maps/Explorer full-bleed). Container is `min(100% − 2×gutter, <container>)` so it never causes overflow at any width.
- **Wide modules** (`GeoModule`, `Explorer`, `EcosystemMap`, `IndustryExplorerGrid`) may use `--container-wide` from `lg` up; below `lg` they use the default container / full-width-minus-gutter.

### 4.4 12-column grid & collapse rules

Grid = 12 columns, gap 24px desktop / 16px mobile (`specs/19` §1.4). Editorial asymmetry (7/5, 8/4) encouraged where it adds meaning.

| Width | Grid behavior |
|---|---|
| 320–767 (< `md`) | **1 column.** All 12-col splits collapse to a single stacked column. Asymmetric pairs (e.g. 8/4 hero text + annotation) stack: primary block first, annotation/motif second. |
| 768–1023 (`md`) | **2 columns** for enumerable grids (industry cards, differentiator pairs, Europe/US panels side-by-side). Editorial 12-col *asymmetry* generally still stacks or uses a gentle 8/4 where it fits. |
| 1024+ (`lg`+) | **Full 12-col** with asymmetric splits (7/5, 8/4) as designed per page. |
| 1280+ (`xl`) | wider gutters/container; card grids may go 3→4 columns. |

**Collapse order rule:** when a multi-column block stacks, the *content-primary* column comes first (text before decorative motif; selector before result; question/heading before annotation). No content is visually orphaned or hidden by the collapse.

---

## 5. Per-component responsive behavior

Each component below states: desktop (`lg`+) shape → intermediate (`md`) → mobile (< `md`, judged at 320). Components are those defined in `specs/19` §3 and the signature modules (`specs/03`, `05`, `10`, `11`, `12`, `13`, `14`). Interaction detail (focus, ARIA, timing) lives in `specs/21`; here we specify **layout shape** only.

### 5.1 `Header` → `MobileMenu` (`specs/19` §3.9, `specs/17`)

- **`lg`+:** full horizontal header — wordmark + 6-item nav + persistent `Start a Conversation` CTA; "What We Do" and "Industries" expose hover/focus dropdowns. Sticky; hairline appears on scroll.
- **`md`:** same horizontal header if it fits without crowding; otherwise collapse to hamburger. Nav item spacing may compress; CTA stays visible.
- **< `md` (mobile):** wordmark + hamburger only; CTA collapses into the menu (or a compact pinned CTA if header height allows). Tapping the hamburger opens a **full-screen menu** with the 6 items, nested sub-items (What We Do → 4 pillars; Industries → Life Sciences), and the `Start a Conversation` CTA **pinned** at the bottom. Menu is full-viewport, scroll-locked behind it, `Esc`/close returns focus to the hamburger (`specs/21`).
- **Targets:** hamburger, nav rows, CTA all ≥44px.

### 5.2 `ValueChainSpine` — horizontal → vertical (`specs/03` S1, `specs/05` S1)

- **`lg`+:** **horizontal** hairline spine; six nodes left→right with mono labels, accent-600 markers, loop arrow from Impact back to "a market question." Select/hover reveals the node one-liner (and, on What-We-Do, the pillar link).
- **`md`:** horizontal if six nodes fit legibly within the container; else switch to vertical early. Prefer vertical at `md` to avoid cramped labels.
- **< `md` (mobile):** **vertical** spine, top→bottom; nodes are tappable full-width rows; selecting a row expands the one-sentence reveal inline (and pillar link on What-We-Do); the loop is shown by a returning connector at the base. **No hover dependency.** Node rows ≥44px.
- **Integrity:** all six nodes and their one-liners present at every width; nothing dropped.

### 5.3 `EcosystemMap` + `SubSectorPanel` — map → list/stepper (`specs/11`)

- **`lg`+:** SVG line **ecosystem diagram** (central Life Sciences hub + six sub-sector nodes) on one side; selecting a node opens `SubSectorPanel` as an **inline expanding region** beside/below the map (no route change). Hover highlights nodes (not required).
- **`md`:** map may render compact; panel opens inline below the map (full-width region). If the diagram becomes cramped, fall back to the mobile node-list form.
- **< `md` (mobile):** the diagram degrades to a **tappable node list** (six sub-sector rows, names always visible — no reliance on reading a small SVG). Selecting a node opens `SubSectorPanel` as a **bottom-sheet `Drawer`** (max-height 85vh, scrollable, drag/close handle). One node/panel at a time. Deep-link hash (`#pharmaceuticals`) still selects + opens on load.
- **Integrity:** every sub-sector, its focus areas, capability mapping, and LS-AI-on-demand reachable at every width.

### 5.4 `IndustryExplorerGrid` + `IndustryPanel` — grid columns → 1-col + filters as chips/drawer (`specs/10`)

- **`xl`+:** 4-column card grid; filter chips + text search inline above the grid; `IndustryPanel` opens as an **inline expanding region** (grid reflows, no route change).
- **`lg`:** 3-column grid; same inline panel + inline filters.
- **`md`:** 2-column grid; filter chips in a **horizontally scrollable rail** if they exceed one line; panel inline (full-width region below grid) or bottom-sheet — inline preferred at `md`.
- **< `md` (mobile):** **1 column** (2 at 414 *only if* cards don't clip). Filter chips = horizontally scrollable **chip rail** (clearly affordanced; the only permitted horizontal scroll); search full-width above. Selecting a card opens `IndustryPanel` as a **bottom-sheet `Drawer`** (85vh, scrollable, drag/close), focus-trapped, `Esc`/overlay closes, focus returns to card. No hover reliance; source markers (`●`/`○`) always visible.
- **Empty-search state** ("No industry matches — see all industries") renders identically across widths (`specs/21` §6).

### 5.5 `GeoModule` / `RegionSelector` / `CountryList` / `FocusMarkers` — map → region chips + bottom-sheet CountryList (`specs/12`)

- **`lg`+:** SVG Africa line-map left; `RegionSelector` (four region controls) + region counts right. Selecting a region (map path **or** chip — equivalent) opens that region's `CountryList` in a panel beside/below the map (no route change; state URL-encoded `?region=…`). `FocusMarkers` toggle overlays the 12 depth markets. Europe/US = two side-by-side `RegionPanel`s.
- **`md`:** compact map; region chips as the primary control; `CountryList` opens as a full-width region below; Europe/US panels may stay side-by-side or stack.
- **< `md` (mobile):** map renders compact/simplified (or is secondary); **primary control = four region chips** in a horizontally scrollable rail (no hover reliance). Selecting a chip opens a **bottom-sheet `CountryList`** (85vh, scrollable, drag/close, focus-trapped, `Esc`/overlay closes, focus returns to chip); region count in the sheet header. `FocusMarkers` = a toggle chip; depth markets shown as an accent-dotted list. Europe/US = stacked collapsible `RegionPanel`s (bottom-sheet on open).
- **Integrity:** country lists shown **one region at a time** at every width — never all 45 at once; counts (East 10 / West 16 / Southern 14 / North 5 = 45) intact; "focus markets, not offices" caption present.

### 5.6 `Explorer` — side-by-side selectors → stacked stepper (`specs/13` owns logic; layout here)

- **`lg`+:** three selectors **side-by-side** — `[ INDUSTRY ] × [ GEOGRAPHY ] × [ CAPABILITY ]` — with the composed result region below/beside. State is URL-encoded (`/explore?industry=…&geo=…&capability=…`), deep-link/refresh-safe (`specs/01` §6, `specs/13`, `specs/21` §5).
- **`md`:** selectors may stay in a row if they fit, else begin the stepper; result below.
- **< `md` (mobile):** **stacked stepper** — Industry → Geography → Capability → Result — one step visible/active at a time with a clear progress affordance and back control. Each step is a full-width tappable list/chip set (44px rows). The result step shows the composed, source-true response and the pre-scoped `Start a conversation about this` CTA. URL state still updates per step (refresh returns to the same composed state).
- **Degraded/empty result** (combination without source-specific detail) shows the honest general capability statement at every width (`specs/25` §6, `specs/21` §6) — never fabricates.

### 5.7 `ProcessDiagram` — horizontal → vertical (`specs/14`, previewed `specs/03` S8)

- **`lg`+:** **horizontal** process rail — six stages (Discovery · Proposal · Design · Delivery · Evaluation · Follow-up) with mono labels and accent step markers. On the full How-We-Work page each stage may expand to a detail panel; on Home it is names-only.
- **`md`:** horizontal if six stages fit; else vertical.
- **< `md` (mobile):** **vertical** numbered sequence, top→bottom; each stage a row; on How-We-Work, tapping a stage expands its detail inline (accordion) or bottom-sheet. Home preview stays names-only.

### 5.8 `Accordion` / `Tabs` — tabs → accordion on mobile (`specs/19` §3.5–§3.6)

- **`lg`+:** grouped content (e.g. pillar capability groups) may use **`Tabs`** (roving tabindex, `role=tablist`, accent 2px active underline). `Accordion` used where sequential disclosure fits better (pillar sub-capabilities + deliverables).
- **`md`:** tabs allowed if labels fit on one row without wrapping into ambiguity; otherwise degrade to accordion.
- **< `md` (mobile):** **`Tabs` degrade to `Accordion`** (`specs/19` §3.6). Accordion headers are full-width `<button>`s ≥44px; single- or multi-open per page spec; only the chevron rotates (reduced-motion respects). No content is lost in the tabs→accordion swap — each tab panel becomes an accordion item.

### 5.9 `DetailPanel` → `Drawer` / bottom-sheet (`specs/19` §3.7)

- **`lg`+:** DETAIL opens as an **inline side panel / expanding region** beside or below its selector (no route change, no focus trap; focus moves in, `Esc` closes, focus returns).
- **`md`:** inline expanding region (full-width below selector) preferred; bottom-sheet acceptable for dense panels.
- **< `md` (mobile):** **bottom-sheet `Drawer`** — slides up, max-height 85vh, scrollable, drag/close affordance, focus-trapped (`aria-modal`), `Esc`/overlay-click closes, focus returns to trigger. Used by `SubSectorPanel`, `IndustryPanel`, `CountryList`, `RegionPanel`, Explorer result on small widths.

### 5.10 `Footer` — columns → stacked / accordion (`specs/19` §3.10, `specs/18`)

- **`lg`+:** multi-column grouped links (Capabilities · Industries · Geography · Company) + contact block + brand line + utility row; hairline top rule.
- **`md`:** 2-column groups + contact block.
- **< `md` (mobile):** groups **stack** vertically; long link groups may become **collapsible accordion sections** (headers ≥44px) to keep the footer scannable; contact block and brand line always visible (not collapsed); utility (Privacy/Terms, marked future) at the bottom. No horizontal overflow; links ≥44px tap height.

### 5.11 `ContactForm` — single column (`specs/19` §3.11, `specs/16`)

- **All widths:** **single-column** form (label-above-field, never placeholder-as-label). Inputs full-width within `--container-text`; 44px min height; visible focus ring; required marked in label; error text below field with `aria-describedby`/`aria-invalid`.
- **`lg`+:** the form may sit in a 7/5 editorial split beside contact details / Nairobi block; the *form itself stays single-column*. Related side content stacks above/below the form on mobile.
- **Mobile:** form fields full-width, comfortable spacing (`--space-4/5`), submit button full-width 44px; no two fields side-by-side (avoids cramped inputs).

### 5.12 Base components (buttons, chips, cards, eyebrow/tags)

- **`Button`:** full-width stacked on mobile CTA rows (primary on top); auto width in desktop CTA rows. Min 44×44 all widths (`specs/19` §3.1). Arrow-motion on hover only where a pointer exists (`specs/21`).
- **`Chip`:** wrap to full-width tappable rows on mobile where used as audience/self-select; horizontally scrollable rail where used as filters. 44px tap height on mobile.
- **`Card`:** flat, hairline, `--radius-1`; grid reflows per §4.4 / §5.4. Card internal padding compresses one step on mobile. Never used to wrap whole sections (guards "everything-in-a-card").
- **`Eyebrow`/`Tag`:** mono labels wrap; never truncated. Country/industry tag rows wrap to multi-line rather than overflow.

---

## 6. Mobile quality checklist (enforced at 320–414; brief §30, `requirements.md` §15)

Every page/module must pass **all** of the following at 320, 375, 390, 414:

- [ ] **No horizontal overflow / no accidental horizontal scroll.** Body never scrolls sideways. `overflow-x` audited; the *only* horizontal scroll allowed is a clearly-affordanced chip/name rail (filters, industry strip), never the page.
- [ ] **No clipped text.** Headlines, labels, country/industry names, CTAs wrap fully; nothing cut off, ellipsised unintentionally, or hidden behind another element.
- [ ] **No disappearing content.** Everything reachable on desktop is reachable on mobile (through drawer/accordion/stepper). No fact removed to "fit."
- [ ] **No broken grids/maps/modals.** Grids reflow to 1-col cleanly; SVG maps scale/degrade to lists without overlap; drawers/bottom-sheets open, scroll, and close correctly; no overlapping panels.
- [ ] **44px touch targets.** All interactive elements (buttons, chips, nav rows, accordion headers, map nodes, drawer close) ≥44×44 with adequate spacing (no mis-tap crowding).
- [ ] **No hover-only interactions.** Every reveal/select/detail has a tap and keyboard path (`specs/21`); nothing requires a pointer hover to access content.
- [ ] **Readable type.** Body ≥16px; labels ≥12–13px; comfortable line-height (1.6 body); measure not too long. No shrink-to-fit.
- [ ] **No oversized hero.** Hero `--fs-h1` clamps down; hero does not overwhelm the first mobile viewport or push all content below the fold; CTAs reachable with minimal scroll.
- [ ] **No tiny buttons.** All CTAs full-width or comfortably sized, 44px min height, legible label.
- [ ] **Spine vertical; maps → chips; Explorer → stepper; tabs → accordion; panels → bottom-sheet** (per §5) — verified per module.
- [ ] **Section rhythm compresses but stays generous** (`--space-8/9`); layout does not feel cramped or boxed.

---

## 7. Image & asset responsive strategy (`specs/19` §4, `specs/23`)

- **SVG maps & diagrams (primary):** Africa line-map, ValueChainSpine, EcosystemMap, ProcessDiagram, depth/breadth motif, Nairobi ring motif are **SVG/CSS** — they scale to any width with `viewBox` + `preserveAspectRatio` and `width:100%`. No WebGL, no tile maps, no globe (`design-principles.md` Do-Not; `specs/23`). On mobile, complex SVGs may **swap to a simplified variant or a tappable list** (per §5.3/§5.5) rather than shrinking to illegibility. All meaningful SVGs carry `<title>`/alt; decorative motifs `aria-hidden`.
- **Photography (optional, only if used; `specs/19` §4):** documentary/human African business/clinical contexts, duotone toward ink+accent. If any photo is used it must ship **responsive `srcset` + `sizes`** (multiple widths, e.g. 640/960/1280/1920), `loading="lazy"` (except LCP hero if photographic), `decoding="async"`, correct intrinsic `width`/`height` to prevent layout shift, and meaningful `alt`. **No stock AI/robot/hologram imagery. No fabricated people as team/clients** (`specs/25`).
- **Icons:** `lucide-react` line icons (`specs/19` §1.6) are vector — scale freely; sizes 20/24; never sole carrier of meaning.
- **Fonts:** self-hosted `woff2`, Latin-subset, `font-display: swap`; preload the two most critical faces (`specs/19` §5). Fluid type means no per-width font swaps.
- **Coordinate/grid motifs:** CSS/SVG hairline decoration only, `aria-hidden`, must not introduce overflow at 320.

---

## 8. Accessibility & reduced-motion (responsive-specific; full a11y in `specs/22`, motion in `specs/21`)

- **Reflow WCAG 1.4.10:** content usable at 320px width without loss of information or functionality and without two-dimensional scrolling (except the allowed chip rails). This is the acceptance floor.
- **Zoom / text-spacing:** layout survives 200% browser zoom and WCAG 1.4.12 text-spacing overrides without clipping or overlap (fluid tokens + wrapping, no fixed-height text containers).
- **Touch target size:** ≥44×44 (WCAG 2.5.5 / target guidance) on all pointer-coarse widths.
- **Focus visibility** preserved in every responsive shape — including inside drawers, steppers, accordions, and chip rails (focus ring 2px accent, 2px offset; `specs/19` §3.1).
- **Orientation:** works in portrait and landscape; no content locked to one orientation.
- **`prefers-reduced-motion: reduce`** (detail in `specs/21`): drawer/bottom-sheet slide, spine/map reveals, scroll-reveal, and stepper transitions become **instant state changes** (no transforms) — the *responsive shape is identical*, only the animation is removed. Reduced-motion must be honored at every breakpoint.
- **No hover-only content** at any width (also §6); pointer: coarse never blocks access.

---

## 9. Acceptance criteria (testable)

Verified at **320, 375, 390, 414, 768, 1024, 1280, 1440** unless a width is specified.

1. **Breakpoints match `specs/19` §1.4** exactly (sm375 / md768 / lg1024 / xl1280 / 2xl1440); layout shape changes occur only at these; continuous scaling is `clamp()`-driven.
2. **No horizontal page overflow at 320** (and all widths): automated `document.documentElement.scrollWidth <= clientWidth`; the only sideways scroll is an affordanced chip/name rail.
3. **No clipped or truncated meaning:** all headlines, labels, country/industry names, and CTAs fully visible and wrapped; copy still within `specs/02` §3 word limits (type not shrunk to fit).
4. **No disappearing content:** a fact reachable at 1440 is reachable at 320 via drawer/accordion/stepper (spot-check every signature module).
5. **Grid collapse:** 12-col → 1-col below `md`, 2-col at `md`, full asymmetric at `lg`+ (§4.4); content-primary column comes first on stack.
6. **Per-component shapes verified (§5):** Header→MobileMenu (full-screen, pinned CTA); ValueChainSpine horizontal→vertical; EcosystemMap map→node-list+bottom-sheet; IndustryExplorerGrid 4/3/2/1-col + chip-rail filters + bottom-sheet panel; GeoModule map→region chips + bottom-sheet CountryList (one region at a time); Explorer side-by-side→stacked stepper (Industry→Geography→Capability→Result); ProcessDiagram horizontal→vertical; Tabs→Accordion on mobile; DetailPanel→bottom-sheet; Footer columns→stacked/accordion; ContactForm single-column at all widths.
7. **Touch targets ≥44×44** on all interactive elements at pointer-coarse widths, with non-crowded spacing.
8. **No hover-only interaction** anywhere: every reveal/select/detail operable by tap and keyboard (cross-check `specs/21`).
9. **Type never below floor:** body ≥16px, caption/label ≥12–13px at every width; hero clamps down and does not overflow or dominate the first mobile viewport.
10. **SVG maps/diagrams scale** via `viewBox` and degrade to lists where specified; **no WebGL/tile/globe** dependency present (`specs/23`).
11. **Any photograph (if used) ships `srcset`/`sizes`, lazy-loads, and reserves intrinsic dimensions** (zero layout shift); no AI/stock/robot imagery; no fabricated people (`specs/25`).
12. **Reflow at 320 and 200% zoom** loses no information or function; text-spacing overrides do not clip (`specs/22`, WCAG 1.4.10/1.4.12).
13. **`prefers-reduced-motion: reduce`** yields identical responsive shapes with animations replaced by instant state changes, at every breakpoint (verify Header menu, drawers, spine/map reveals, stepper).
14. **Mobile quality checklist (§6) passes** on every page at 320/375/390/414 (no overflow, no clip, no missing content, no broken map/grid/modal, 44px targets, readable type, no oversized hero, no tiny buttons).
15. **Integrity preserved across widths:** country counts (45), six LS sub-sectors, five differentiators, six process stages, and all industry records render at every width; Explorer degraded/empty states show honest fallbacks, never fabricated content (`specs/25`).
