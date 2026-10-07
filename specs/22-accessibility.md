# 22 — Accessibility

> Parents: `requirements.md` §15 (accessibility first-class), `design-principles.md`, `specs/02-content-strategy.md` §9, `specs/19-design-system.md` (tokens, focus ring, component a11y notes), `specs/20-responsive-system.md`, `specs/21-interaction-system.md`, `specs/25-content-integrity.md`. Governs every page and component. **Target: WCAG 2.2 Level AA** across all routes, at all supported widths (320→1440), keyboard-only and screen-reader operable.
>
> Buildable without further strategic decisions. Where a value is cited (contrast, focus ring), it comes from `specs/19`; do not re-litigate.

---

## 1. Purpose & targets

**Purpose.** Make the "editorial intelligence report" fully perceivable, operable, understandable, and robust for keyboard, screen-reader, low-vision, motor-impaired, cognitive, and reduced-motion users — without adding decorative ARIA. Accessibility is designed in (semantic structure + disclosure), not retrofitted.

**Targets (all must hold on every route):**
- **WCAG 2.2 AA** — no failures on any Level A or AA success criterion.
- **axe-core: 0 serious/critical violations** per page (moderate reviewed and justified or fixed).
- **Keyboard-only: 100% of interactions operable** — nav dropdowns, mobile menu, accordions, tabs, panels/drawers, modal, Explorer, maps/selectors, forms — with visible focus and no traps except intended modal/drawer traps.
- **Screen-reader pass** on NVDA+Firefox, VoiceOver+Safari, and (spot) TalkBack+Chrome: name/role/state announced for every control; disclosure state changes announced; no orphaned or duplicated content.
- **Contrast** meets AA using `specs/19` values (§6 below).
- **Reduced motion** honored globally (§9).

---

## 2. Standards & conformance model

- **Conformance:** WCAG 2.2 AA. Track the AA criteria most at risk for this design in §12 checklist.
- **New in 2.2 we explicitly satisfy:** 2.4.11 **Focus Not Obscured (Minimum)** (sticky header must not hide the focused element — see §5); 2.4.13 **Focus Appearance** (ring meets size/contrast — §5); 2.5.7 **Dragging Movements** (map/region selection and drawer close never require dragging — a tap/click/keyboard alternative always exists — §8, §10); 2.5.8 **Target Size (Minimum)** (≥24×24 CSS px; we use 44×44 per `specs/19`); 3.3.7 **Redundant Entry** and 3.3.8 **Accessible Authentication** (contact form asks nothing twice; no cognitive-test CAPTCHA).
- **ARIA usage rule:** prefer native HTML semantics; add ARIA only where native elements cannot express the pattern (accordion/tabs/dialog/roving groups). No `role`/`aria-*` that native markup already provides. No ARIA on decorative elements.

---

## 3. Semantic HTML & landmark structure

Every page uses one consistent landmark skeleton so SR users can jump reliably:

```
<header> (banner)          — Wordmark, primary nav, CTA   (role banner implicit)
  <nav aria-label="Primary">
<main id="main">           — one per page; skip-link target
  <h1> … page content in <section>s (each with an accessible name)
<footer> (contentinfo)
  <nav aria-label="Footer">
```

Rules:
- Exactly **one `<header>`, one `<main>`, one `<footer>`** per page.
- `<nav>` elements carry distinct `aria-label` ("Primary", "Footer", and on mobile "Mobile"); the mega-panel dropdowns are inside Primary nav, not new landmarks.
- **Sections** that are meaningful navigation targets use `<section aria-labelledby="…">` pointing at their heading (mono eyebrow is decorative; the `<h2>` is the accessible name).
- Lists are real `<ul>/<ol>/<li>` (pillar nodes, country lists, differentiators, delivery modalities, sub-sector tags).
- The value-chain spine, process diagram, ecosystem, and geo map are `<svg>` or list-based (§8) — never presentational `<div>` soup carrying meaning.
- Buttons that act = `<button>`; things that navigate = `<a href>`. Never a `<div onClick>`. Explorer/audience/industry chips that navigate are links; chips that toggle state are `<button aria-pressed>` (`specs/19` §3.3).

---

## 4. Headings — one H1, correct order

- **Exactly one `<h1>` per page** = the page's primary-question answer (H1 text is specified per page in `specs/03–16`; see also `specs/24` table).
- Heading order is strictly nested, **no skipped levels**: H1 → H2 (each section) → H3 (items within, e.g., differentiator titles, accordion group headings, region names). Visual size is controlled by the type scale (`specs/19` §1.2), **not** by picking a heading level for appearance.
- Mono eyebrows (e.g., `01 — HOW WE CREATE VALUE`) are **not** headings; they are `<p>`/`<span>` styled labels. The real heading follows.
- Accordion group headers are wrapped so the `<button>` sits inside the appropriate heading level (`<h3><button aria-expanded>…</button></h3>`) — preserves the outline while remaining operable.
- Off-screen (visually-hidden) headings may be added where a region needs a programmatic name but the design shows none (e.g., an SR-only `<h2>` "Explorer results").

Acceptance: heading-order audit (axe / HeadingsMap) shows one H1 and a contiguous outline per page.

---

## 5. Focus visibility, appearance & management

**Visible focus (2.4.7, 2.4.13).** Every focusable element shows the accent focus ring on `:focus-visible`: **2px solid `--color-focus` (`#B5502E`) with 2px offset** (`specs/19` §1.1, §3.1). The ring:
- has ≥3:1 contrast against both the adjacent background and the component (accent on paper and on ink-bg both verified in §6);
- is at least a 2px-thick perimeter (meets 2.4.13 minimum area);
- is never removed without an equal-or-better replacement (no `outline:none` without `:focus-visible` styling).

**Focus not obscured (2.4.11).** The sticky `<header>` must not hide a focused element. Implement `scroll-margin-top` (= header height) on all focusable targets / section anchors, and ensure programmatic focus scrolls the element clear of the sticky header.

**Focus management rules (move / return / trap):**

| Interaction | On open | While open | On close |
|---|---|---|---|
| **Nav dropdown / mega-panel** (desktop) | focus stays on trigger; panel items reachable via Tab/Arrow | Esc closes; focus stays in nav | returns to trigger |
| **Mobile full-screen menu** | move focus to first menu item (or close button); **trap** within menu; body scroll locked | Tab cycles inside; Esc closes | return focus to hamburger |
| **Accordion** | no focus move (inline expand) | Tab enters revealed region | — (collapse leaves focus on header) |
| **Tabs** | roving tabindex; arrow keys switch | Tab moves to panel content | — |
| **Inline DetailPanel** (desktop side panel) | move focus to panel heading; **no trap** (inline, non-modal) | Esc closes | return to trigger (chip/node) |
| **Drawer / bottom-sheet** (mobile) | move focus into sheet; **trap**; scroll-lock; `aria-modal="true"` | Esc + overlay-click close; drag handle has button equivalent | return to trigger |
| **Modal** (rare) | move focus to first control/heading; **trap**; scroll-lock | Esc + overlay-click close | return to invoking element |
| **Explorer result reveal** | move focus to results heading (SR-only `<h2>` ok); no trap | Esc not required (inline) | selections persist |

No keyboard trap anywhere except the intended modal/drawer/mobile-menu traps (2.1.2). All traps are escapable with Esc.

---

## 6. Color, contrast & don't-rely-on-color

Contrast targets use `specs/19` §1.1 tokens; **verify each real usage** at build:

| Usage | Tokens | Required | Design value |
|---|---|---|---|
| Body text on paper | `ink-700`/`ink-900` on `paper` | ≥4.5:1 (AA) | ~7:1+ (per `specs/19`) |
| Secondary/caption on paper | `ink-500` on `paper` | ≥4.5:1 | ~4.5:1 — **verify captions never drop below**; `ink-300` is decorative only, never for text conveying meaning |
| Text on ink band | `on-ink-900` on `ink-bg` | ≥4.5:1 | ~7:1+ |
| Accent text on paper | `accent-600` on `paper` | ≥4.5:1 | verify each instance; if a small accent label fails, use `ink-700` and reserve accent for ≥18.66px bold or non-text |
| Accent as non-text (rules, markers, focus ring, active tab underline) | `accent-600` | ≥3:1 (1.4.11) | verify against paper and ink-bg |
| Focus ring | `--color-focus` | ≥3:1 vs adjacent | verified paper + ink |
| Error text/border | `error` (`#A23A2E`) | ≥4.5:1 text / ≥3:1 border | verify on paper |
| Disabled controls | `ink-300` | exempt from contrast, but never the only signal | pair with `disabled`/`aria-disabled` |

**Don't-rely-on-color (1.4.1):**
- Active/selected states carry a **second cue** beyond accent color: an underline/rule (active tab = 2px accent underline), a border change (selected chip = accent border + wash **and** `aria-pressed`/`aria-current`), a filled marker, or a checkmark.
- Map region selection is conveyed by accent fill **plus** an active outline/label **plus** the open CountryList — not color alone.
- Depth-market accent dots are paired with the text label and the "focus markets" caption.
- Required form fields are marked in the **label text** (not just a colored asterisk); errors use text + icon + `aria-invalid`, not red alone.
- Data-viz categories (`--dv-*`) are distinguished by position/label, not hue alone.

---

## 7. Forms accessibility (Contact + Explorer inputs)

Applies to `ContactForm` (`specs/16`) and any Explorer selects.

- **Labels:** every field has a visible `<label for>` **above** the field (never placeholder-as-label; `specs/19` §3.11). Required state stated in the label ("Email (required)").
- **Grouping:** related controls (e.g., region/geo choices) use `<fieldset><legend>`.
- **Errors (3.3.1 / 3.3.3):** on invalid submit, each field gets `aria-invalid="true"` and `aria-describedby` pointing to a specific, text error message ("Enter a valid email address"), rendered below the field with error color **and** an icon/text prefix. An error **summary** at the top of the form lists errors as links to fields; focus moves to the summary on failed submit.
- **Success:** confirmation is a live-announced message (`role="status"`), focus moved to it.
- **Input purpose (1.3.5):** `autocomplete` set on name/email/organization.
- **No redundant entry (3.3.7):** never re-ask information already provided in the same flow (e.g., pre-scoped industry/region from Explorer/geo deep-link is pre-filled and editable, not re-requested).
- **No cognitive CAPTCHA (3.3.8):** if spam protection is needed, use honeypot / token, not an image/logic puzzle.
- **Touch targets:** inputs and submit ≥44×44 (`specs/19`); tap target spacing adequate.

---

## 8. Diagrams, maps & data — text alternatives (the map/diagram approach)

The signature modules encode real relationships; each needs a non-visual equivalent.

**Africa map / `GeoModule` (`specs/12`):**
- The SVG has `role="img"` **or** is `aria-hidden` with an adjacent operable control set — the design ships the **operable control set as primary**: the four regions are also rendered as a **`RegionSelector` list of `<button>`s** (roving tabindex) so map interaction never depends on clicking SVG paths or on hover.
- **List fallback for country data:** country data is a real `<ul>` inside `CountryList`, revealed per selected region with an SR-announced region name + count ("West Africa, 16 countries"). Countries are never image-only.
- Region SVG paths, if individually operable, mirror the button state (`aria-pressed`/`aria-current`) and have accessible names; otherwise paths are `aria-hidden` and the buttons carry all semantics.
- **No dragging (2.5.7):** selecting a region = click/tap/Enter; there is no drag-to-select.
- A concise SVG `<title>`/`<desc>` describes the map's meaning ("Map of Africa's four regions; select a region to list its countries").

**Value-chain spine (`specs/03`, `specs/05`) & process diagram (`specs/14`):**
- Rendered as an ordered structure: an `<ol>` of nodes (each node = heading/label + its one-line description) with the SVG connectors `aria-hidden`. The "loop back to a new question" is stated in text, not only drawn.
- Node "what happens here" reveals are programmatically associated (button `aria-expanded` + region, or always-rendered text for SR with visual progressive reveal).

**Ecosystem (Life Sciences, `specs/11`):** the six sub-sectors are a real list of controls; each sub-sector's focus areas are a disclosed `<ul>` (never an SVG-only cluster). Selection announces the sub-sector name.

**Explorer (`specs/13`):** each of the three slots is a labelled listbox/select or a group of chips with a clear accessible name ("Industry", "Geography", "Capability"); the composed result is a text region with an SR-only heading; degraded/fallback states are plain text (never an empty visual).

General: all meaningful graphics have text alternatives that convey the **meaning**; decorative motifs (coordinate hairlines, Nairobi lat/long, connector lines, ring motif) are `aria-hidden="true"` and have empty/no alt.

---

## 9. Motion & `prefers-reduced-motion`

- Global: `@media (prefers-reduced-motion: reduce)` disables transforms, scroll-reveal translate/fade, chevron rotation animation, arrow nudge, node emphasis motion, drawer slide — state changes become **instant** (opacity/visibility only, or no animation). No parallax, no autoplaying motion (`design-principles.md` bans particles/heavy anim).
- No animation exceeds `--dur-slow` (400ms); scroll-reveal translate ≤12px (`specs/19` §1.7, `specs/21`).
- Nothing flashes more than 3×/sec (2.3.1) — trivially satisfied (no flashing content exists).
- No content is **only** revealed by hover/focus without a persistent path (1.4.13): hover reveals (spine node one-liners, map region hover) are duplicated by click/tap/keyboard-select, and revealed content is dismissable, hoverable, and persistent.

---

## 10. Keyboard operability — global rules

- Logical DOM order = visual reading order (1.3.2); tab order follows it at every breakpoint.
- **Skip link:** first focusable element is a visually-hidden-until-focused "Skip to main content" → `#main` (2.4.1). A second skip link to the primary nav is optional.
- All interactive components operable with keyboard alone: Enter/Space activate buttons; Arrow keys drive roving groups (tabs, region selector, accordion group nav via Home/End as specced in `specs/19` §3.5–3.6); Esc closes menus/panels/drawers/modals.
- Sticky header never obscures the focused item (§5, 2.4.11).
- Drawer close, region select, and any gesture-driven action always have a non-gesture equivalent (2.5.7); all targets ≥44×44 (exceeds 2.5.8's 24px).
- Character-key shortcuts, if any, are avoidable/remappable (2.1.4) — none are planned.

---

## 11. Screen-reader expectations (name / role / state)

Every control announces a meaningful **name**, correct **role**, and current **state**:
- Nav dropdown trigger: "What We Do, button, collapsed/expanded".
- Accordion header: "[Group], button, collapsed/expanded".
- Tab: "[Tab], tab, selected", within "tablist".
- Chip toggle: "[Label], toggle button, pressed/not pressed"; chip link: "[Label], link".
- Region button: "[Region], button" → on select, CountryList announced via focus move + region name/count.
- Drawer/modal: "dialog" with an `aria-label`/`aria-labelledby`; opening announced; Esc documented via visible close button.
- Live regions: form errors summary (`role="alert"` on submit), success (`role="status"`), Explorer result updates (`aria-live="polite"` on the results container so recomposing announces the new focused response without stealing focus mid-typing).
- Icon-only controls (hamburger, close, chevrons where alone) have `aria-label`; decorative lucide icons are `aria-hidden` (icons never sole carrier of meaning — `specs/19` §1.6).
- Reading order and language: `<html lang="en">`; foreign place names (Côte d'Ivoire etc.) render correctly; acronyms expanded on first use in visible copy (`specs/02` §9) so SR users hear the full term.

---

## 12. WCAG 2.2 AA at-risk checklist (design-specific)

| SC | Criterion | Where it bites here | Requirement |
|---|---|---|---|
| 1.1.1 | Non-text content | maps, spine, icons, motifs | meaningful → text alt; decorative → `aria-hidden` |
| 1.3.1 | Info & relationships | headings, lists, form labels, tables-as-components | native semantics; §3/§4/§7 |
| 1.3.2 | Meaningful sequence | responsive reflow | DOM order = reading order at all widths |
| 1.4.1 | Use of color | active/selected/error/map/dv | second cue always (§6) |
| 1.4.3 | Contrast (min) | captions, accent text, ink band | §6 table verified |
| 1.4.10 | Reflow | 320px / 400% zoom | no horizontal scroll (`specs/20`) |
| 1.4.11 | Non-text contrast | rules, markers, focus ring, borders | ≥3:1 (§6) |
| 1.4.13 | Content on hover/focus | spine/map hover reveals | dismissable, hoverable, persistent (§9) |
| 2.1.1/2.1.2 | Keyboard / no trap | all modules | §10, §5 |
| 2.4.1 | Bypass blocks | every page | skip link (§10) |
| 2.4.3 | Focus order | menus, drawers | logical + managed (§5) |
| 2.4.7 | Focus visible | all controls | accent ring (§5) |
| 2.4.11 | Focus not obscured | sticky header | scroll-margin (§5) |
| 2.4.13 | Focus appearance | ring size/contrast | 2px/2px offset (§5) |
| 2.5.7 | Dragging | map, drawer | tap/keyboard alt (§8/§10) |
| 2.5.8 | Target size | all targets | ≥44px (`specs/19`) |
| 3.2.3/3.2.4 | Consistent nav/ID | header/footer across pages | identical order & labels |
| 3.3.1/3.3.3 | Error id & suggestion | form | §7 |
| 3.3.7/3.3.8 | Redundant entry / auth | form + deep-link prefill | §7 |
| 4.1.2/4.1.3 | Name/role/value + status msgs | all widgets, live regions | §11 |

---

## 13. Per-component a11y checklist

**Header / Primary nav & dropdown**
- [ ] `<header>` banner, `<nav aria-label="Primary">`; wordmark link to `/`.
- [ ] Dropdown triggers `<button aria-expanded aria-controls>`; Esc closes; arrow-key item nav; focus returns to trigger.
- [ ] Active route marked `aria-current="page"` + non-color cue (accent underline/marker).
- [ ] Persistent CTA is a real link/button to `/contact`; visible focus.

**Mobile menu**
- [ ] Hamburger `<button aria-expanded aria-controls aria-label>`; opens full-screen menu; focus moves in; **trapped**; body scroll locked; Esc closes; focus returns.
- [ ] Nested sub-items reachable; CTA reachable; targets ≥44px.

**Accordion (pillar capabilities / deliverables)**
- [ ] Header is `<button>` inside correct heading level; `aria-expanded`, `aria-controls`; region `aria-labelledby`.
- [ ] Home/End/Arrow move between headers; only chevron animates (reduced-motion respects).

**Tabs**
- [ ] `role=tablist/tab/tabpanel`; roving tabindex; arrow-key switch; `aria-selected`; active underline (non-color cue); degrades to accordion on mobile.

**DetailPanel / Drawer / Modal**
- [ ] Inline panel: focus to heading, no trap, Esc closes, return focus.
- [ ] Drawer/Modal: `role=dialog` + `aria-modal`, trap, scroll-lock, Esc + overlay close, focus restore, labelled.

**Explorer**
- [ ] Three slots labelled (Industry/Geography/Capability); keyboard-selectable; result region has SR-only heading + `aria-live="polite"`; degraded state is plain text; state deep-link doesn't strand focus.

**GeoModule (map + selector + country list + focus markers)**
- [ ] Regions operable as `<button>` list (not map-only, not hover-only); selection announces region + count.
- [ ] Country data as real list; one region open at a time; focus-markers toggle is a labelled button; depth markers labelled text + accent dot.
- [ ] SVG `<title>/<desc>`; decorative paths `aria-hidden`; no drag required.

**ProcessDiagram / ValueChainSpine / Ecosystem**
- [ ] Ordered/real list structure; connectors `aria-hidden`; node reveals programmatically associated; loop/relationship stated in text.

**Forms**
- [ ] Labels above; required in label; `aria-invalid`/`aria-describedby` on error; error summary + focus; success `role=status`; autocomplete set.

**Global**
- [ ] Skip link; one H1; landmark set; focus ring everywhere; `lang="en"`; reduced-motion honored; no `div onClick`.

---

## 14. Testing method & tools

- **Automated:** `axe-core` (via `@axe-core/playwright` or DevTools) on **every route** at 320 / 768 / 1280 widths; **Lighthouse a11y ≥ 95**; ESLint `jsx-a11y` in CI; contrast checked with a token-level report (each `specs/19` pair) plus per-usage spot checks.
- **Keyboard-only:** unplug mouse; traverse every route; verify skip link, focus order, all interactions (§13), Esc behavior, no unintended trap, sticky header never hides focus.
- **Screen reader:** NVDA + Firefox and VoiceOver + Safari full pass on Home, a pillar page, Life Sciences, Where We Work, Explorer, Contact; TalkBack spot check on mobile Home + GeoModule.
- **Zoom/reflow:** 200% and 400% browser zoom, and 320px width — no horizontal scroll, no clipped/overlapping content, no lost functionality.
- **Reduced motion:** OS setting on → confirm no transforms/scroll-reveal; state still changes.
- **Manual heuristics:** color-blind simulation (verify §6 second-cues); focus-obscured check with sticky header.

---

## 15. Acceptance criteria (testable, with thresholds)

1. **axe-core: 0 serious + 0 critical** violations on every route (320/768/1280); moderate items triaged to zero-or-justified.
2. **Lighthouse Accessibility ≥ 95** on every route.
3. **Keyboard-only pass:** 100% of interactions in §13 operable; skip link works; no unintended trap; intended traps (mobile menu, drawer, modal) escapable with Esc; sticky header never obscures focus (2.4.11).
4. **Screen-reader pass:** every control announces correct name/role/state on NVDA+Firefox and VoiceOver+Safari; disclosure open/close and Explorer result changes announced; no orphaned/duplicated content.
5. **Contrast:** all text meets ≥4.5:1 (≥3:1 large), all non-text UI ≥3:1, using `specs/19` values; per-usage report shows zero failures (captions/accent text explicitly verified).
6. **One `<h1>` per page**, contiguous heading outline, no skipped levels — verified by audit.
7. **Don't-rely-on-color:** every active/selected/error/map state has a verified non-color cue.
8. **Maps/diagrams:** country data reachable as a list; map operable via buttons + keyboard (no hover/drag dependency); meaningful graphics have text alternatives, decorative ones `aria-hidden`.
9. **Forms:** labels present, errors programmatically linked with suggestions + summary, success announced, no redundant entry, no cognitive CAPTCHA.
10. **Reduced motion** fully honored; **reflow** clean at 320px and 400% zoom (no horizontal scroll, no loss).
11. **Targets ≥44×44**; focus ring = 2px accent + 2px offset everywhere.
