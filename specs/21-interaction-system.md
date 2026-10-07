# 21 — Interaction System

> Parents: `requirements.md` (§7 the engine, §10 the Explorer, §11 disclosure ladder, §14 conversion, §15 accessibility/reduced-motion), `design-principles.md` (motion principles + the Do-Not list), `specs/01-information-architecture.md` (§4 depth model, §8 mobile IA), `specs/02-content-strategy.md` (disclosure ladder + length limits), `specs/19-design-system.md` (motion tokens §1.7, all components §3), `specs/20-responsive-system.md` (**already written** — component responsive *shape*; this file must stay consistent with it), `specs/25-content-integrity.md` (honest fallbacks, no fabrication).
>
> **Division of labor.** `specs/20` owns *layout shape* (horizontal→vertical, grid→1-col, map→list, tabs→accordion, side-by-side→stepper, panel→bottom-sheet). **This file owns the *interaction* inside those shapes**: trigger, visual response, timing, keyboard, focus, ARIA, and `prefers-reduced-motion` fallback. Where the two touch, they agree; `specs/20` is authoritative on shape, this file on behavior. `specs/22` owns the full a11y test matrix; the a11y stated here is the interaction-level contract.
>
> **Buildable without further strategic decisions.** No new copy is authored here beyond micro-labels already implied by referenced specs; all copy obeys `specs/02`; all tokens/components are those defined in `specs/19`; all dynamic content obeys `specs/25`.

---

## 1. Purpose

Define **one consistent progressive-disclosure interaction model** for the whole MindCraft site, so that every interactive element — from a nav dropdown to the Explorer — behaves the same way, is fully keyboard-operable, and is reduced-motion-safe. Specifically:

1. Establish the site-wide disclosure sequence **SCAN → UNDERSTAND → EXPLORE → DETAIL → ENGAGE** and map every interaction to a rung on it (`requirements.md` §11, `specs/01` §4, `specs/02` §4).
2. Specify **every reusable interaction pattern** used on the site with a single canonical behavior (trigger, response, timing, keyboard, focus, ARIA, reduced-motion).
3. Provide a **motion inventory** bound to the `specs/19` §1.7 tokens, and explicitly **ban the `design-principles` Do-Not motion list**.
4. Specify the **signature-module interactions** (ValueChainSpine, EcosystemMap, IndustryExplorerGrid, GeoModule, Explorer, ProcessDiagram) at the UX/state level, referencing (never duplicating) their owning specs.
5. Define **honest loading / empty / error / degraded states** for interactive modules — fallbacks only, never fabricated content (`specs/25`).
6. Enforce the governing rule (brief §22): **every interaction must solve an information-density problem, not add novelty.**

---

## 2. Principles

- **Interaction is disclosure, not decoration (brief §22).** Every interactive element exists to *reveal depth on demand* so the scan layer stays light. If an interaction does not move the visitor down (or back up) the disclosure ladder or toward engagement, it is cut (`design-principles.md` decision test #1; "INTERACTION WITH PURPOSE > INTERACTION FOR SHOW").
- **Motion clarifies, never performs.** All motion is reveal, emphasis, or spatial continuity (a panel comes *from* its trigger). Durations 150–400ms, `--ease-out`; scroll-reveal ≤12px translate (`specs/19` §1.7). Nothing loops, floats, parallaxes, or draws attention to itself.
- **One behavior per pattern.** A pattern (accordion, drawer, chip) behaves identically everywhere it appears; page specs reference this file rather than re-inventing.
- **Keyboard parity is mandatory.** Everything operable by pointer is operable by keyboard, in a predictable order, with a visible 2px accent focus ring, 2px offset (`specs/19` §3.1). No hover-only content at any width (`specs/20` §2, §6).
- **Touch parity is mandatory.** No affordance requires hover below `lg`; hover is always an *enhancement* over a click/tap that already works (`specs/20` §3.3). All targets ≥44×44.
- **Focus is never lost.** Opening a disclosure moves focus predictably in; closing returns it to the trigger. Route changes move focus to the new page's `<h1>` / main landmark.
- **Reduced-motion is a first-class path, not a downgrade.** With `prefers-reduced-motion: reduce`, the *same content and the same responsive shape* appear; only transforms/opacity transitions are replaced by instant state changes (`specs/20` §8). No functionality is removed.
- **Honesty over animation.** Loading/empty/error/degraded states show truthful fallbacks (`specs/25`); interactions never manufacture a case study, metric, client, or "example project," and never stage "AI computation" theater (`specs/13` §11).

---

## 3. Disclosure ladder (interaction contract)

The site-wide ladder (`requirements.md` §11, `specs/02` §4) mapped to the interaction that performs each rung. **Rule: no two adjacent rungs carry the same weight of copy; each interaction step down adds detail, each step up removes it.**

| Rung | What the visitor does | Interaction that performs it | Always visible? | Owning patterns (§4) |
|---|---|---|---|---|
| **SCAN** | Reads one line / one number / one visual | Static render; sticky nav orientation; scroll-reveal brings the next scan block in | Yes | Scroll-reveal (4.9), Sticky nav (4.10) |
| **UNDERSTAND** | Reads a 1–3 sentence editorial statement | Static render; hover/focus *preview* of a node one-liner (enhancement only) | Yes | Hover/focus reveal (4.1) |
| **EXPLORE** | Selects an item (card, node, region, chip, filter, tab, step) | Select→panel, tab switch, chip/filter toggle, region/node selection, Explorer step | On demand | 4.2, 4.4, 4.6, 4.7, 4.11 |
| **DETAIL** | Reads the revealed depth for the selected item | Accordion expand, DetailPanel/inline region, Drawer/bottom-sheet, Modal (rare) | On demand | 4.3, 4.5, 4.8 |
| **ENGAGE** | Starts a (optionally pre-scoped) conversation | CTA click with arrow motion; form interaction; pre-scoped Explorer/panel CTAs | On demand | 4.12, 4.13 |

**Reversibility.** Every step *down* has an explicit step *up*: close panel/drawer/modal (`Esc` + control), collapse accordion, deselect chip/tab, stepper "Back," browser back/forward (state is URL-encoded where a spec requires it — spine deep-links, Explorer, geography, LS hash). No disclosure is a one-way trap.

---

## 4. Per-pattern detail

Each pattern below specifies: **Trigger · Visual response · Timing · Keyboard · Focus · ARIA · Reduced-motion.** Timing values are the `specs/19` §1.7 tokens: `--dur-fast 150ms`, `--dur 240ms`, `--dur-slow 400ms`, `--ease-out cubic-bezier(.2,.8,.2,1)`, `--ease-in-out cubic-bezier(.4,0,.2,1)`. Components referenced are from `specs/19` §3.

### 4.1 Hover / focus reveal (enhancement only)

Used for: spine node one-liner *preview* on desktop, card hairline→accent + `paper-2` wash, nav item underline, differentiator emphasis, map path highlight. **This pattern never gates content that is not otherwise reachable by click/tap** (`specs/20` §6).

- **Trigger:** pointer `:hover` **or** keyboard `:focus-visible` on the element (parity required — the same visual state fires for both).
- **Visual response:** hairline border → `accent-600`; optional background → `paper-2`; underline grows; a node's one-line preview may fade/appear. Displacement ≤4px (e.g., CTA arrow) or none.
- **Timing:** `--dur-fast` (150ms), `--ease-out`, on `color/background/border/transform/opacity` only.
- **Keyboard:** `:focus-visible` reproduces the hover state identically; Tab order is DOM order.
- **Focus:** visible 2px accent ring, 2px offset, on every hoverable interactive element.
- **ARIA:** none extra for pure emphasis. If hover *previews* content that is authoritatively opened by click (spine), the click/select path (4.2/4.7) carries the ARIA; the hover preview is `aria-hidden` decorative or simply a visual state.
- **Reduced-motion:** color/border state changes remain (instant, no transition); no transform/translate; arrow does not slide.

### 4.2 Select → panel (inline)

Used for: EcosystemMap sub-sector → `SubSectorPanel` (desktop), IndustryExplorerGrid card → `IndustryPanel` (desktop/`lg`), GeoModule region → `CountryList` (desktop), Explorer selection → result region. Desktop/`lg`+ shape is an **inline expanding region** beside/below the selector; **no route change** (`specs/19` §3.7, `specs/20` §5.9). Mobile shape is a Drawer (4.5).

- **Trigger:** click/`Enter`/`Space` (or arrow-key select within a roving group, 4.7) on the selectable item.
- **Visual response:** selected item → accent border + `accent-100` wash (selected state); the inline `DetailPanel` region expands open below/beside the selector; grid/map reflows to make room (no overlap, no layout jump that hides the trigger). Only **one** panel/item selected at a time within a group; selecting another **swaps** content in place.
- **Timing:** panel open = `--dur` (240ms) height/opacity, `--ease-out`; selected-state color = `--dur-fast`.
- **Keyboard:** item activatable by `Enter`/`Space`; after open, focus moves to the panel (see Focus); `Esc` closes and returns focus to the trigger.
- **Focus:** on open, focus moves to the panel container (or its heading, `tabIndex=-1`); inline panels **do not trap** focus (Tab can leave into the page). Close returns focus to the triggering item.
- **ARIA:** trigger has `aria-expanded` + `aria-controls` pointing to the panel id; panel `role="region"` + `aria-labelledby` (its heading). Grouped selectors also expose selected state per 4.7. Not `aria-modal` (inline, non-trapping).
- **Reduced-motion:** panel appears/disappears instantly (no height/opacity transition); selected-state color still applies; content and shape unchanged.

### 4.3 Accordion expand

Used for: pillar sub-capabilities + deliverables (pillar pages `specs/06–09`), footer link groups on mobile (`specs/20` §5.10), tabs→accordion degradation on mobile (4.4), ProcessDiagram stage detail on mobile. Component: `Accordion`/`AccordionItem` (`specs/19` §3.5).

- **Trigger:** click/`Enter`/`Space` on the header `<button>`.
- **Visual response:** collapsible region expands; chevron rotates 90–180°; header may take an accent left-rule when open. Single- or multi-open per the owning page spec.
- **Timing:** region height/opacity `--dur` (240ms) `--ease-out`; chevron rotate `--dur-fast`.
- **Keyboard:** header is a real `<button>`; `Enter`/`Space` toggles. Within a group: `Down`/`Up` (or `Left`/`Right` where horizontal) move between headers, `Home`/`End` jump to first/last (`specs/19` §3.5).
- **Focus:** focus stays on the header on toggle (content revealed below it); visible focus ring on the header. No focus trap (in-flow content).
- **ARIA:** header `<button>` `aria-expanded`, `aria-controls`; region `role="region"` + `aria-labelledby`. Chevron `aria-hidden`.
- **Reduced-motion:** region shows/hides instantly; chevron flips instantly (no rotate transition).

### 4.4 Tab switch

Used for: grouped content at `lg`+ (e.g., pillar capability groups, geography region grouping) where sequential accordion is not preferred. **Degrades to Accordion (4.3) below `md`** (`specs/20` §5.8) — each tab panel becomes an accordion item; no content lost. Component: `Tabs` (`specs/19` §3.6).

- **Trigger:** click/`Enter`/`Space` on a tab; arrow keys within the tablist.
- **Visual response:** active tab gets the 2px `accent-600` underline; its `tabpanel` becomes visible, the others hidden. Optional ≤8px cross-fade of panel content.
- **Timing:** underline slide/appear `--dur-fast`; panel cross-fade `--dur-fast`–`--dur`, `--ease-out`.
- **Keyboard:** roving tabindex — only the active tab is in Tab order; `Left`/`Right` (horizontal) or `Up`/`Down` move and (per WAI-ARIA automatic-activation) switch panels; `Home`/`End` to ends; `Tab` from the tablist moves into the active `tabpanel`.
- **Focus:** roving tabindex keeps one stop; moving arrow keys moves focus and selection together; the panel is reachable by `Tab` after the tablist.
- **ARIA:** `role="tablist"` (with `aria-label`), `role="tab"` + `aria-selected` + `aria-controls`, `role="tabpanel"` + `aria-labelledby`; inactive panels `hidden`.
- **Reduced-motion:** no underline slide (instant), no cross-fade; instant panel swap.

### 4.5 Drawer / bottom-sheet

Used for: all DETAIL on mobile (< `md`) — `SubSectorPanel`, `IndustryPanel`, `CountryList`, `RegionPanel`, Explorer result — via the `Drawer` bottom-sheet (`specs/19` §3.7, `specs/20` §5.9). Max-height 85vh, scrollable, drag/close handle.

- **Trigger:** tap/`Enter`/`Space` on the item (chip, card, region chip, node row) that owns the detail.
- **Visual response:** sheet slides up from the bottom over a scrim; drag handle + close (`X`) affordance at top; body scrolls within 85vh; page behind is scroll-locked. One sheet at a time; selecting a new item closes the current and opens the next.
- **Timing:** slide-up + scrim fade `--dur-slow` (400ms) `--ease-out`; close `--dur` `--ease-out`.
- **Keyboard:** open by `Enter`/`Space`; `Esc` closes; close button and drag handle are focusable; content is fully tabbable within the trap.
- **Focus:** focus **trapped** inside the sheet while open (first focusable / heading receives focus on open, Tab cycles within); on close, focus returns to the trigger.
- **ARIA:** `role="dialog"` `aria-modal="true"` + `aria-labelledby` (sheet heading); scrim click closes; close button `aria-label` (e.g., "Close"). Overlay uses `--shadow-overlay`.
- **Reduced-motion:** no slide/scrim animation — sheet appears/removes instantly; scroll-lock, focus-trap, `Esc`, scrim-close all still apply. Shape identical to `specs/20` §5.9.

### 4.6 Filter / chip toggle

Used for: IndustryExplorerGrid filter chips (`specs/10`), Explorer selector chips and starting-point chips (`specs/13`), AudienceSelector chips (`specs/03` S6), FocusMarkers toggle (`specs/12`). Component: `Chip` (`specs/19` §3.3).

- **Trigger:** click/tap/`Enter`/`Space`. Filter chips **toggle** (on/off); audience chips are **links** (navigate); selector chips **set state** (single-select within a dimension).
- **Visual response:** selected → accent border + `accent-100` wash; the governed collection (grid/result) updates live (no reload). On mobile, filter chips live in a horizontally scrollable rail (the only permitted horizontal scroll, clearly affordanced — `specs/20` §2/§5.4).
- **Timing:** chip state `--dur-fast`; downstream grid/result reflow ≤ `--dur`, `--ease-out` (or instant under reduced-motion).
- **Keyboard:** each chip focusable; `Enter`/`Space` toggles/activates. Filter rails are a simple tab sequence (not roving) unless acting as a single-select group, in which case use roving tabindex (4.7). Horizontal chip rails scroll into view on focus (`scrollIntoView`, no motion under reduced-motion).
- **Focus:** visible ring on each chip; focus never scrolls the page body sideways (only the affordanced rail).
- **ARIA:** toggle filter chip = `<button>` with `aria-pressed`; single-select dimension = `role="radio"` in a `role="radiogroup"` **or** `aria-pressed` group with roving tabindex (pick one per component and keep consistent); navigational audience chip = `<a>` with meaningful text (`specs/02` §9). FocusMarkers = toggle `<button>` `aria-pressed`.
- **Reduced-motion:** chip color state instant; downstream update instant (no reflow animation).

### 4.7 Region / node selection (roving-tabindex diagram groups)

Used for: ValueChainSpine nodes, EcosystemMap sub-sector nodes, GeoModule region paths/chips. These are **selectable groups over a diagram** where map/graphic and list/chip forms are equivalent controls (`specs/11` §8.3, `specs/12` §8.4, `specs/03` S1).

- **Trigger:** click on node/path/row; or arrow-key move within the roving group then `Enter`/`Space` to select. **Map path and its paired chip/row are equivalent** — both select the same item and mark it active (`specs/12` §8.4).
- **Visual response:** hovered/focused node = accent highlight; selected node = accent fill + connector/marker emphasis; selecting reveals the item's DETAIL via 4.2 (inline) or 4.5 (mobile drawer). One selection at a time; selecting another swaps.
- **Timing:** node emphasis `--dur-fast`; connector/marker emphasis ≤ `--dur`; reveal per 4.2/4.5.
- **Keyboard:** roving tabindex — one Tab stop for the group; `Arrow` keys move active node (following the visual/spine order), `Home`/`End` to ends, `Enter`/`Space` selects; `Esc` closes any opened panel/sheet and returns focus to the node.
- **Focus:** the active node is the single tab stop; focus ring on it; on panel open, focus behavior follows 4.2 (inline, non-trapping) or 4.5 (drawer, trapping).
- **ARIA:** container `role="group"`/`role="listbox"` (per component) with `aria-label`; nodes as `role="option"`/`button` with `aria-selected`/`aria-pressed`; SVG paths that are interactive get an accessible name (`<title>` / `aria-label`) and are keyboard-reachable, or are mirrored by an equivalent list of buttons (preferred for robustness — the diagram is decorative-plus, the buttons are authoritative). Decorative connectors/motifs `aria-hidden`.
- **Reduced-motion:** no connector-draw or marker animation; node/selection color changes instant; reveal instant.

### 4.8 Modal (rare)

Used only where truly necessary (`specs/19` §3.8) — e.g., an image or a share of an Explorer result. **Panels/drawers are strongly preferred; do not use a modal for standard DETAIL.**

- **Trigger:** explicit click/`Enter`/`Space` on a control whose label states the outcome.
- **Visual response:** centered dialog over a scrim (`--shadow-overlay`); page scroll-locked.
- **Timing:** open `--dur` opacity + ≤8px scale/translate, `--ease-out`; close `--dur-fast`.
- **Keyboard:** `Esc` closes; `Tab`/`Shift+Tab` cycle within; overlay click closes.
- **Focus:** trapped; focus moves to the dialog (heading or first control) on open; returns to trigger on close.
- **ARIA:** `role="dialog"` `aria-modal="true"` + `aria-labelledby` (+ `aria-describedby` if needed); close button `aria-label`.
- **Reduced-motion:** no scale/translate/opacity animation — instant open/close; trap, `Esc`, overlay-close, focus-restore unchanged.

### 4.9 Scroll-reveal

Used for: section entrances across all pages (`specs/03` §11, `specs/05` §11). Purpose is *pacing the scan layer*, not spectacle.

- **Trigger:** element enters the viewport (IntersectionObserver, ~10–15% threshold). **Fires once**; never re-hides on scroll-up; never tied to scroll position (no parallax/scrubbing).
- **Visual response:** fade in + translate ≤12px (up). Content is present in the DOM and readable even if the observer never fires (progressive enhancement — no content depends on JS motion).
- **Timing:** `--dur-slow` (400ms) `--ease-out`; small stagger (≤80ms) allowed within a single group, never a cascade down the whole page.
- **Keyboard:** n/a (not interactive). Keyboard focus into an off-screen element scrolls it into view via the browser and reveals it immediately.
- **Focus:** n/a.
- **ARIA:** none; purely presentational.
- **Reduced-motion:** **no transform, no fade — content is rendered in final state immediately** (this is the default fallback and the primary correctness case). Verified per `specs/20` §8.

### 4.10 Sticky nav

Used for: `Header` (`specs/19` §3.9, `specs/17`, `specs/20` §5.1).

- **Trigger:** page scroll (header stays pinned); scroll past threshold adds a hairline bottom rule (and optional subtle background) to separate from content.
- **Visual response:** persistent header; on-scroll a `1px` `--color-line` bottom rule appears; active-route item shows the accent underline/marker. No shrink/hide-on-scroll gimmick.
- **Timing:** hairline/background fade `--dur-fast` `--ease-out`.
- **Keyboard:** standard link/`<button>` semantics; a **"Skip to content"** link is the first focusable element (`specs/22`); dropdowns per 4.4/hover-focus (see §6.7 nav dropdown note).
- **Focus:** focus order = skip-link → wordmark → nav items → dropdowns → CTA. Active-route indicated by `aria-current="page"`.
- **ARIA:** `<header>`/`<nav aria-label="Primary">`; active item `aria-current="page"`.
- **Reduced-motion:** hairline/background appears instantly; no transition.

**Nav dropdown (What We Do / Industries).** Trigger: hover **and** focus on desktop opens the panel; on keyboard, the top item is a `<button>` `aria-expanded`/`aria-haspopup` toggled by `Enter`/`Space`/`Down`, `Esc` closes and returns focus to the trigger, `Tab` moves through items then out. Never hover-only. On mobile it becomes a nested section in the full-screen menu (4.5-style overlay via `MobileMenu`), CTA pinned, `Esc`/close returns focus to the hamburger (`specs/20` §5.1).

### 4.11 Explorer step (stepper)

Used for: `Explorer` on mobile — the side-by-side selectors reflow to a **stacked stepper** Industry → Geography → Capability → Result (`specs/13` §13, `specs/20` §5.6). Interaction/state UX only; composition logic and fallbacks are owned by `specs/13` (§6).

- **Trigger:** select within a step (tappable list/chip set) advances to (or enables) the next step; a persistent **Back** control returns to the prior step; progress affordance shows position.
- **Visual response:** one step active at a time; selection updates the persistent mono "selection summary" line; the Result step renders the composed, source-true output (§6.5) with the pre-scoped CTA. URL state updates on each step (§5).
- **Timing:** step transition ≤ `--dur` slide/opacity `--ease-out`; result render instant (client-side, synchronous — no artificial loading, `specs/13` §8.7).
- **Keyboard:** each step's options operable by `Enter`/`Space` (roving where a single-select group); Back is a `<button>`; focus moves to the newly active step's heading on advance.
- **Focus:** on step change, move focus to the new step container/heading (`tabIndex=-1`); Back returns focus to the prior step's selection.
- **ARIA:** each step labeled; the summary line is a `role="status"`/`aria-live="polite"` region announcing the current composition; the result region is `aria-live="polite"` so recomputed output is announced.
- **Reduced-motion:** no slide — instant step swaps; identical shape and content (`specs/20` §8).

### 4.12 CTA arrow motion

Used for: contextual CTA rows and primary/secondary buttons with a trailing `arrow-right` (`specs/19` §3.2).

- **Trigger:** `:hover`/`:focus-visible` on the button/link.
- **Visual response:** the lucide `arrow-right` translates +4px on the x-axis; button may shift to `accent-500`/ink wash per variant.
- **Timing:** `--dur-fast` (150ms) `transform`, `--ease-out`.
- **Keyboard:** `:focus-visible` reproduces the state; activation on `Enter` (link) / `Enter`+`Space` (button).
- **Focus:** 2px accent ring, 2px offset.
- **ARIA:** arrow icon `aria-hidden`; the link/button text is the accessible name (verb-led, ≤4 words, `specs/02` §3). Every CTA has a real destination/action — no decorative buttons (`design-principles.md` Do-Not).
- **Reduced-motion:** **no arrow translate**; color/state change only (`specs/19` §3.2).

### 4.13 Form interaction

Used for: `ContactForm` and all inputs (`specs/19` §3.11, `specs/16`, `specs/20` §5.11). Single-column at all widths; label-above (never placeholder-as-label).

- **Trigger:** focus into field; typing; blur (validation); submit.
- **Visual response:** focused field shows 2px accent focus ring; on blur/submit, invalid fields show error text below the field (ink/error color) and `aria-invalid`; valid submit shows an honest confirmation state (no fabricated "we'll respond in N hours" promise — `specs/25`). Submit button shows `loading`/`aria-busy` during async submit.
- **Timing:** focus ring instant; error appearance `--dur-fast`; no decorative field animation.
- **Keyboard:** full keyboard entry; `Tab`/`Shift+Tab` between fields; `Enter` submits from a text field where appropriate; the submit button is a real `<button type="submit">`.
- **Focus:** on submit with errors, focus moves to the first invalid field and its error is announced; on success, focus moves to the confirmation message (`role="status"`).
- **ARIA:** each input has a programmatic `<label>`; required marked in the label (not color alone); errors linked via `aria-describedby` + `aria-invalid`; live validation summary uses `role="alert"`/`aria-live="assertive"` for the first error, `polite` for the success confirmation. Pre-scoped params (industry/geo/interest) hydrate fields from the URL (`specs/13` §14, `specs/16`).
- **Reduced-motion:** no animated transitions; instant error/confirmation appearance.

---

## 5. Explorer interaction & state UX (URL-encoded, deep-link/refresh-safe)

> Interaction and state UX only. Composition/degradation **logic** and copy templates are owned by `specs/13` (§8.3–§8.5) and must not be duplicated here; integrity by `specs/25` §6.

- **Selectors → compose → result → pre-scoped CTA.** Three selectors — `[ INDUSTRY ] × [ GEOGRAPHY ] × [ CAPABILITY ]` — each set via the chip/select pattern (4.6) or roving group. Any change **recomputes the result live** (no submit button, no "Generate" — deterministic client-side filtering; `specs/13` §11). The result ends in a **pre-scoped** `Start a conversation about this` → `/contact?industry=…&geo=…&interest=…` (4.12/4.13) plus "Go deeper" links to canonical pages (`specs/13` §14).
- **Live region.** Result region + selection summary are `aria-live="polite"` so recomputed output is announced (§4.11).
- **URL-encoded state (interaction contract, per `specs/01` §6 + `specs/13` §8.6):**
  - Every selection writes `/explore?industry=<id>&geo=<country|region|africa>&capability=<pillarId>`; unset dimensions are omitted.
  - On load, params **hydrate** selectors and render the composed result (refresh-safe).
  - Each change **replaces** history state so **Back/Forward walks prior compositions** without breaking.
  - Invalid/unknown params **degrade to unset** — never error; result still renders (GENERAL at worst).
  - Same URL ⇒ same result (pure function of params + static data); shareable.
  - `geo`/`capability`/`industry` ids are shared with `/where-we-work`, the pillar pages, and `/industries` (single source, `specs/13` §8.6).
- **Starting-point chips (`specs/13` S4):** selecting a chip sets all three selectors + URL + result in one action; keyboard-operable (4.6).
- **Geography sub-selection:** choosing Africa reveals four region controls; choosing a region optionally reveals its `CountryList` to pick a country — reusing `RegionSelector`/`CountryList` from `GeoModule` (4.2/4.5/4.7); country lists stay region-gated (never all 45).
- **Desktop vs mobile shape:** side-by-side selectors at `lg`+ with the result region below (4.2); stacked **stepper** below `md` (4.11) — same state, same URL behavior (`specs/20` §5.6).

---

## 6. Per-signature-module interaction

Behavior at the interaction level; **shape** is owned by `specs/20` §5, **content/logic** by each module's spec. All six share: mono labels, hairline structure, accent for active/selected, SVG/CSS line diagrams (no heavy libs, no WebGL — `specs/19` §4, `specs/23`), roving-tabindex keyboard, reduced-motion safety.

### 6.1 ValueChainSpine (the engine) — shared Home + What-We-Do

Owner: `specs/03` S1 (Home, **scan**), `specs/05` S1 (What-We-Do, **explore**); shape `specs/20` §5.2.

- **Shared behavior:** six nodes (A market question → Market Research → Business Consulting → AI Enterprise Solutions → AI Training → Measurable impact, looping back). Node select (4.7) reveals its **one-sentence** "what happens here" (≤16 words, copy fixed in `specs/03`/`specs/05`). One node active at a time; selecting another swaps the reveal.
- **Home (scan level):** hover/focus *previews* the one-liner (4.1); click/`Enter` selects and pins it. Nodes have **no pillar links** here. The module as a whole links to `/what-we-do`.
- **What-We-Do (explore level):** same component at fuller fidelity — selecting a node reveals the one-liner **plus a "Go to pillar →" link** (`/what-we-do/<pillar>`); framing nodes (market question, impact) have no link. No route change until the link is clicked.
- **Orientation:** **horizontal** hairline spine at `lg`+ (six nodes L→R, accent-600 markers, loop arrow Impact→question); **vertical** full-width tappable rows below `md`, reveal expands inline, loop shown by a returning connector at the base (`specs/20` §5.2). No hover dependency on mobile.
- **Reveal transition:** `--dur` fade/height, `--ease-out`; node emphasis `--dur-fast`. **Reduced-motion:** instant reveal, no connector/loop animation.
- **Integrity:** all six nodes + one-liners present at every width; nothing dropped (`specs/20` §5.2).

### 6.2 EcosystemMap + SubSectorPanel (Life Sciences) — deep

Owner: `specs/11` §8; shape `specs/20` §5.3.

- **Behavior:** six sub-sector nodes around a presentational "Life Sciences" hub (hub not selectable). Select a node (4.7) → `SubSectorPanel` opens with focus areas + capability application + LS-AI-on-demand (`specs/11` §8.4). One at a time; selecting another swaps (desktop) / opens a new sheet (mobile).
- **Deep-link:** `/industries/life-sciences#<subsector>` selects that node and opens its panel on load; changing selection updates the hash (history-safe) (`specs/11` §8.3).
- **Desktop (`lg`+):** inline expanding `SubSectorPanel` beside/below the map (4.2); hover highlights connectors (enhancement, 4.1).
- **Mobile (< `md`):** map degrades to a **vertical list of six tappable chips** (names always visible); select → bottom-sheet `Drawer` (4.5) with focus-trap, `Esc`/overlay close, focus return.
- **Reduced-motion:** no connector-draw/marker animation; panel/sheet instant.
- **Integrity:** every sub-sector's focus areas reachable at every width; at most one sub-sector's areas visible at once (no 30-bullet wall — `specs/11` §18).

### 6.3 IndustryExplorerGrid + IndustryPanel (industries breadth)

Owner: `specs/10`; shape `specs/20` §5.4.

- **Behavior:** filter chips (4.6, toggle) + text search filter the card grid live; selecting a card opens `IndustryPanel` (4.2 inline at `lg`/`md`; 4.5 bottom-sheet on mobile) showing capability mapping. Source markers (`●` source-supported focus areas / `○` capability-mapping-only) **always visible** — the honest depth-vs-breadth signal (`specs/25` §5), never hover-gated.
- **Search/filter:** typing filters instantly (client-side); no reload. Empty result shows the honest empty state (§7.2).
- **Reduced-motion:** grid reflow + panel instant.
- **Integrity:** broader verticals expose **no invented focus areas**; panel copy is capability *mapping* only (`specs/25` §5).

### 6.4 GeoModule (geography) — region select → CountryList

Owner: `specs/12` §8; shape `specs/20` §5.5.

- **Behavior:** four region controls (map path **or** chip — equivalent, 4.7); selecting a region opens that region's `CountryList` **on demand** (never all 45; one region at a time). `FocusMarkers` toggle (4.6) overlays the 12 depth markets; selecting a marker deep-links to its region list with the market emphasized. Europe/US = `RegionPanel`s (disclose; bottom-sheet on mobile).
- **State:** selected region URL-encodable `/where-we-work?region=<id>` and reused by `/explore?geo=<country|region>` (`specs/12` §8.4).
- **Desktop (`lg`+):** SVG Africa map + selector; `CountryList` panel beside/below (4.2); hover highlights paths (4.1).
- **Mobile (< `md`):** compact/secondary map; **four region chips** (scrollable rail) primary; select → bottom-sheet `CountryList` (4.5), count in the sheet header.
- **Reduced-motion:** no path/marker animation; list/sheet instant.
- **Integrity:** counts intact (East 10 / West 16 / Southern 14 / North 5 = 45); "focus markets, not offices" caption always present; no office beyond Nairobi (`specs/12` §18, `specs/25` §2).

### 6.5 Explorer (Industry × Geography × Capability) — signature

Owner: `specs/13`; interaction/state UX detailed in **§5** above. Interaction summary: selectors (4.6/4.7) → live compose → result region (4.2 desktop / 4.11 stepper mobile) → pre-scoped CTA (4.12/4.13). URL-encoded, deep-link/refresh-safe (§5). Result recomputes synchronously (no loading state; `specs/13` §8.7). Degraded/empty output is the **honest general capability statement** (§7.3, `specs/13` §8.3–§8.5, `specs/25` §6) — never a fabricated case/metric/client/example.

### 6.6 ProcessDiagram (engagement process)

Owner: `specs/14` §S1 (ProcessDiagram) / previewed `specs/03` S8; shape `specs/20` §5.7.

- **Behavior:** six stages (Discovery · Proposal · Design · Delivery · Evaluation · Follow-up). **Home preview:** names-only, static, non-interactive rail linking to `/how-we-work`. **How-We-Work page:** each stage is selectable and expands its detail — inline accordion (4.3) or panel (4.2) at `lg`+, accordion/bottom-sheet on mobile.
- **Orientation:** **horizontal** rail with mono labels + accent step markers at `lg`+; **vertical** numbered sequence below `md` (`specs/20` §5.7).
- **Reduced-motion:** instant expand; no marker animation.
- **Integrity:** stage detail phrased as process/offering, never as completed-project results (`specs/25`).

---

## 7. State handling — loading / empty / error / degraded (honest fallbacks only)

Governing rule: **fallbacks are truthful; interactions never fabricate content** (`specs/25` §2, §6). No spinner theater implying "AI computation"; the Explorer and other client-side modules compute synchronously and need **no loading state** (`specs/13` §8.7, §11).

### 7.1 Loading
- **Client-side modules (Explorer, spine, ecosystem, geography, industry filter):** synchronous — **no loading state**; result/selection renders instantly. Do not add artificial delay or "generating…" affordance (`specs/13` §11).
- **Async only where real (ContactForm submit, any lazy-loaded route/asset):** show a minimal, honest busy state — button `loading` + `aria-busy="true"`, disabled during submit; for a lazy route, a lightweight skeleton or "Loading…" text in a `role="status"`. No fabricated progress percentages.
- **Fonts/images:** `font-display: swap`; images reserve intrinsic `width`/`height` (no layout shift); no motion required (`specs/20` §7).

### 7.2 Empty
- **Industry search/filter with no match:** honest message — "No industry matches — see all industries" — with a reset control returning the full grid (`specs/20` §5.4). Rendered identically across widths.
- **Geography, no region selected:** the idle state shows the intro + region counts (not an error) — selecting a region is the next step (`specs/12` §8.3).
- **Explorer, nothing/partly picked:** neutral prompt "Pick a capability to see how MindCraft applies to your situation." + starting-point chips (`specs/13` §8.5) — never blank, never fabricated.

### 7.3 Degraded (the core integrity behavior)
- **Explorer combination without source-specific detail:** the result **reduces** along `SPECIFIC → SEMI-SPECIFIC → MAPPED → GENERAL` and states the general capability plainly (with the honest "general capability mapping" caption for broader verticals) — **never below GENERAL, never a fabricated case/metric/client/example** (`specs/13` §8.3, `specs/25` §6). Geography frames reach only; it never emits a market statistic.
- **Broader verticals everywhere (Explorer, IndustryExplorerGrid):** capability *mapping* only; no invented focus areas; source markers make the depth-vs-breadth status visible (`specs/25` §5).
- **LS/geography where source lacks sub-specificity:** fall back to the general LS/region statement, marked `derived` and reviewed against `specs/25` (`specs/11` §9.3, `specs/13` §8.5).

### 7.4 Error
- **JS disabled / observer never fires:** all content is present in the DOM and readable; scroll-reveal (4.9) is enhancement only; disclosure content is server/statically rendered where feasible so nothing is JS-gated to the point of loss (`specs/25` — no content may disappear).
- **Invalid URL state (Explorer/geography/LS hash):** degrade the offending param to unset and render the safe default; never throw a visible error (`specs/13` §8.6).
- **Form submit failure:** honest error via `role="alert"` — "Something went wrong sending your message. Please try again or email us." (email is the real Nairobi contact, `specs/16`) — no fabricated ticket numbers/SLAs.
- **Missing required-future content (e.g., Privacy/Terms):** honest placeholder or route omitted from nav until provided — never fabricated legal text (`specs/25` §9).

### 7.5 State handling — cross-cutting rules
- Every state (loading/empty/error/degraded) is **keyboard-reachable and announced** (`role="status"`/`alert` as appropriate).
- No state removes content that exists at another width or selection (`specs/20` §6, `specs/25`).
- No state introduces horizontal overflow at 320 (`specs/20` §6).

---

## 8. Accessibility & reduced-motion rules

- **Keyboard operability (universal):** every interaction in §4–§7 is fully operable by keyboard with the documented keys; roving tabindex for diagram/tab groups; `Esc` closes every overlay/drawer/modal and returns focus to the trigger. Skip-to-content link first in Tab order (`specs/22`).
- **Focus visibility:** 2px `--color-focus` (accent) ring, 2px offset, on **every** focusable element, preserved inside drawers, steppers, accordions, chip rails, and diagrams (`specs/19` §3.1, `specs/20` §8).
- **Focus management:** move focus **in** on open (panel heading / drawer / dialog / new stepper step), **back** to trigger on close, and to the new page `<h1>`/main on route change. Inline panels do not trap; drawers/modals do.
- **ARIA discipline:** use native elements first (`<button>`, `<a>`, `<label>`); add ARIA only where needed (accordions, tabs, dialogs, live regions, roving groups); `aria-current="page"` for active nav; decorative motifs/connectors/icons `aria-hidden`; meaningful SVGs carry `<title>`/accessible name (`specs/02` §9, `specs/19` §4).
- **Live regions:** Explorer result + selection summary and any async status use `aria-live="polite"`; hard errors use `role="alert"`; success confirmations `role="status"`.
- **Touch & target size:** ≥44×44 on all interactive elements at pointer-coarse widths; no hover-only content at any width; the only sideways scroll is an affordanced chip/name rail (`specs/20` §2, §6).
- **`prefers-reduced-motion: reduce` (global fallback):** every animation in the Motion Inventory (§9) becomes an **instant state change** — no transform, no opacity transition, no slide/scale/rotate/connector-draw/arrow-slide/parallax — while the **responsive shape, content, focus behavior, and ARIA are identical** (`specs/20` §8). This is the default-correct path; motion is the enhancement. Verified per breakpoint (Header menu, drawers, spine/map reveals, tabs, stepper, scroll-reveal, CTA arrow).
- **Reflow / zoom / text-spacing:** interactions remain operable at 320px reflow, 200% zoom, and WCAG 1.4.12 text-spacing overrides — no clipping, no lost function (`specs/20` §8, `specs/22`).

### Banned motion (from `design-principles.md` Do-Not — explicitly prohibited here)
Motion must clarify, never decorate. **Never** implement: floating particles / matrix rain / meaningless data streams; parallax spectacle or scroll-scrubbed hero animation; floating orbs / glowing spheres; animated "AI brain"/robot/hologram effects; glowing purple/blue gradient sweeps; gratuitous 3D / WebGL motion; meaningless animated dashboards / fake live charts; auto-playing looping background motion; carousels/marquees that move on their own; bounce/elastic/overshoot easings; motion that runs independent of a user trigger or a single scroll-into-view reveal; any animation that continues after it has served its clarifying purpose. Displacement stays ≤12px (scroll-reveal) / ≤4px (hover/arrow); durations stay within 150–400ms.

---

## 9. Motion inventory (element → property → duration → easing)

All durations are `specs/19` §1.7 tokens; all easings `--ease-out` unless noted. **Every row's reduced-motion fallback is: instant state change, no transform/opacity transition.** Motion is applied to `transform`/`opacity`/`color`/`background`/`border` only (compositor-friendly; no layout-thrashing properties animated except explicit height on accordions/panels which use height+opacity with `will-change` sparingly).

| Element / event | Property animated | Duration | Easing | Reduced-motion |
|---|---|---|---|---|
| Hover/focus emphasis (card, node, nav item) | color, background, border | `--dur-fast` (150) | `--ease-out` | instant color change |
| CTA arrow (hover/focus) | transform (translateX +4px) | `--dur-fast` (150) | `--ease-out` | no translate; color only |
| Chip/filter toggle (select) | border, background (accent-100 wash) | `--dur-fast` (150) | `--ease-out` | instant |
| Spine/ecosystem/geo node emphasis | color, border, marker fill | `--dur-fast` (150) | `--ease-out` | instant |
| Select→panel inline open (DetailPanel) | height, opacity | `--dur` (240) | `--ease-out` | instant show/hide |
| Grid/map reflow on filter/select | opacity (+ layout reflow) | `--dur` (240) | `--ease-out` | instant reflow |
| Accordion expand/collapse | height, opacity | `--dur` (240) | `--ease-out` | instant |
| Accordion chevron | transform (rotate) | `--dur-fast` (150) | `--ease-out` | instant flip |
| Tab switch — active underline | transform/width (slide) | `--dur-fast` (150) | `--ease-out` | instant |
| Tab panel cross-fade | opacity | `--dur-fast`–`--dur` | `--ease-out` | instant swap |
| Drawer / bottom-sheet open | transform (translateY), scrim opacity | `--dur-slow` (400) | `--ease-out` | instant appear |
| Drawer / bottom-sheet close | transform, opacity | `--dur` (240) | `--ease-out` | instant remove |
| Modal (rare) open | opacity, transform (≤8px scale/translate) | `--dur` (240) | `--ease-out` | instant |
| Modal close | opacity | `--dur-fast` (150) | `--ease-out` | instant |
| Stepper step transition (Explorer mobile) | transform (translateX), opacity | ≤ `--dur` (240) | `--ease-out` | instant step swap |
| Scroll-reveal (section entrance, once) | opacity, transform (translateY ≤12px) | `--dur-slow` (400) | `--ease-out` | rendered final immediately |
| Sticky header on-scroll rule/bg | opacity | `--dur-fast` (150) | `--ease-out` | instant |
| Nav dropdown / MobileMenu open | opacity, transform (≤8px) | `--dur` (240) | `--ease-out` | instant |
| Form focus ring | (outline — no transition needed) | instant | — | instant |
| Form error / success appearance | opacity | `--dur-fast` (150) | `--ease-out` | instant |
| Explorer result recompute | opacity (≤ swap) | `--dur-fast` (150) | `--ease-out` | instant swap |

> Not in this inventory ⇒ not animated. Anything on the §8 banned list is prohibited regardless of duration/easing.

---

## 10. Acceptance criteria (testable)

Verified across the eight widths (320/375/390/414/768/1024/1280/1440) and with `prefers-reduced-motion` both off and on.

1. **Every interaction is keyboard-operable** with the documented keys (Tab/Shift+Tab, Enter/Space, Arrow/Home/End for roving groups, `Esc` to close) and a visible 2px accent focus ring — no pointer-only path exists anywhere (§4–§7, §8).
2. **Every interaction is reduced-motion-safe:** with `prefers-reduced-motion: reduce`, all §9 motion becomes instant state changes; content, responsive shape, focus behavior, and ARIA are unchanged (§8, `specs/20` §8).
3. **No hover-only content at any width;** every reveal/select/detail has a tap + keyboard path; the only sideways scroll is an affordanced chip/name rail (`specs/20` §6).
4. **Disclosure ladder holds:** each pattern maps to its rung (§3); no two adjacent rungs carry equal copy weight; every step down has an explicit step up (close/collapse/deselect/back), and state-bearing modules (spine, Explorer, geography, LS) survive Back/Forward and refresh.
5. **Focus management correct:** focus moves into panels/drawers/dialogs/new stepper steps on open, returns to the trigger on close, and to the new page `<h1>`/main on route change; inline panels don't trap, drawers/modals do (§4.2/4.5/4.8, §8).
6. **ARIA correct per pattern:** `aria-expanded`/`aria-controls` on disclosure triggers; `role="region"`+`aria-labelledby` on panels; tab roles + `aria-selected`; `role="dialog"`+`aria-modal` on drawers/modals; `aria-pressed`/radio semantics on chips; `aria-current="page"` on active nav; live regions on Explorer result/summary and async status; decorative motion/connectors/icons `aria-hidden` (§4, §8).
7. **Signature modules behave per §6:** spine node-select reveals a one-sentence line (Home scan / What-We-Do explore with pillar links), horizontal desktop / vertical mobile; ecosystem/geo/industry select→panel with one item open at a time; ProcessDiagram names-only on Home, expandable on How-We-Work.
8. **Explorer state UX:** selectors compose live with no reload and no submit/"Generate" button; URL encodes all three dimensions; load hydrates selectors+result; refresh preserves; Back/Forward walks compositions; invalid params degrade to unset without error; result ends in a pre-scoped `Start a conversation about this` (§5, `specs/13`).
9. **Honest states:** client-side modules show no artificial loading; empty/degraded states render truthful fallbacks (empty-search reset, Explorer GENERAL fallback + honest caption); **no interaction outputs a fabricated case study, metric, client, "proven"/"deployed" claim, example project, or market statistic** — grep of rendered dynamic strings → zero hits (§7, `specs/25` §2/§6).
10. **Banned motion absent:** no particles, parallax spectacle, floating orbs/glowing spheres, AI-brain/robot motion, gradient sweeps, gratuitous 3D/WebGL, auto-playing loops, marquees/auto-carousels, or overshoot/bounce easing; scroll-reveal fires once (never scrubbed), displacement ≤12px, all durations 150–400ms `--ease-out` (§8, §9).
11. **Motion inventory is the whole set:** any animated element appears in §9 with an approved token/easing and a reduced-motion fallback; anything not listed is not animated.
12. **Purpose test:** every interactive element demonstrably serves disclosure/engagement (maps to a §3 rung or a §4.12/4.13 action); none exists for novelty (brief §22, `design-principles.md` decision test #1).
13. **Consistency with `specs/20`:** interaction shapes (spine H→V, tabs→accordion, panel→bottom-sheet, Explorer side-by-side→stepper, map→chips) match the responsive spec exactly; no contradictions.
14. **Reflow/zoom/text-spacing:** all interactions remain operable and non-clipping at 320px reflow, 200% zoom, and WCAG 1.4.12 text-spacing overrides (§8, `specs/22`, `specs/20` §8).
