# 10 — Industries (Overview)

> Parent: `requirements.md` §8 (depth-vs-breadth), `sitemap.md`, `content-inventory.md` §3–§5, `source-traceability.md` §C–§D. Governs the `/industries` route. Depth (Life Sciences) lives in `/specs/11`; this page owns **breadth** and the depth→breadth handoff. Copy obeys `/specs/02`; integrity obeys `/specs/25`; components from `/specs/19`.

---

## 1. Route & meta
- **Route:** `/industries`
- **Nav:** primary nav item "Industries" (has one sub-page: Life Sciences). Desktop dropdown exposes "Industries overview" + "Life Sciences."
- **Disclosure role:** EXPLORE (breadth grid + panels) with a prominent Life Sciences feature that hands off to DETAIL on `/industries/life-sciences`.
- **Canonical ownership:** this page owns the **breadth** industry list (4 original verticals + 15 expanded). Life Sciences sub-sector/focus-area depth is owned by `/specs/11` and only *named + linked* here.

## 2. Objective
Prove MindCraft can help *this visitor's* industry — while making the strategic asymmetry unmistakable: **Life Sciences = deep, founding heritage**; **all other industries = broad, capability-mapped**, without fabricating depth for the expanded verticals.

## 3. Primary visitor question
"Can they help *my* industry?" — and, secondarily, "Do they go deep in Life Sciences, or is this a generalist list?"

## 4. Primary audience
Commercial, strategy and market-access leaders across sectors; Life Sciences executives arriving to confirm depth; cross-industry buyers (banking, chemicals, automotive, agribusiness, energy, telco, etc.) checking coverage.

## 5. What visitor should understand
1. Life Sciences is the founding heritage and deepest specialization (elevated, dedicated page).
2. MindCraft serves a wide, named set of industries with the same methodology.
3. Depth is honest: only Life Sciences and the four original verticals carry illustrative source focus areas; the expanded verticals are served with capability mapping, not invented sector detail.
4. Any industry can be composed with a geography and a capability in the Explorer.

## 6. Hero
- **Eyebrow (mono):** `INDUSTRIES`
- **H1 (≤9 words):** `Deep in Life Sciences. Broad across industry.`
- **Supporting line (≤24 words):** `Life Sciences is our founding heritage and deepest expertise. We apply the same rigor across a wide set of industries and markets.`
- **Primary CTA:** `Explore Life Sciences` → `/industries/life-sciences`
- **Secondary CTA:** `Compose your situation` → `/explore`
- **Visual:** left editorial text block; right a hairline "depth vs breadth" motif — one tall accent-marked column (Life Sciences) beside a lighter multi-cell grid (breadth). No decoration; encodes the asymmetry.

## 7. Section sequence
Each: purpose · content/copy · approx words · visual · interaction · source facts.

### S1 — Hero (as §6)
- **Purpose:** state the depth/breadth thesis in 5s.
- **Copy:** hero block above.
- **Words:** ~40.
- **Visual:** depth-vs-breadth hairline motif.
- **Interaction:** static; CTAs link.
- **Source facts:** LS = core expertise & founding heritage (P §1, §2); diversified verticals (P §2, E).

### S2 — Life Sciences feature band (DEPTH, elevated)
- **Purpose:** give Life Sciences visibly superior status *before* the breadth grid; hand off to the deep page.
- **Copy:** eyebrow `CORE EXPERTISE`; heading `Life Sciences — our founding heritage`; intro (1–3 sentences): `Our consultants, researchers and AI architects bring clinical, regulatory, market-access and commercial context across six Life Sciences sub-sectors. This is where MindCraft goes deepest.` Then the six sub-sector **names only** as a hairline row (Pharmaceuticals · Medical Devices · Medical Diagnostics · Medical Equipment · Surgical Consumables · Hospitals & Healthcare Providers).
- **Words:** ~55 + 6 labels.
- **Visual:** full-width band, accent top rule; six labelled cells (names only, no focus-area detail here — that is owned by `/specs/11`); a single accent "Core expertise" tag.
- **Interaction:** entire band is a link affordance; each sub-sector name deep-links to `/industries/life-sciences#<subsector>`. Primary CTA `Explore Life Sciences`.
- **Source facts:** six sub-sectors (P §2); regulatory fluency / clinical & commercial context (P §1); differentiator 1 (P §7).

### S3 — Breadth framing (honest depth statement)
- **Purpose:** set expectations before the grid so breadth never reads as false depth.
- **Copy:** heading `Industries we serve`; intro: `Beyond Life Sciences, we extend the same research, strategy and AI methodology across a diversified set of industries. Selecting an industry shows how our four capabilities apply.`
- **Words:** ~40.
- **Visual:** editorial header block + a mono legend: `● source focus areas` (original verticals) vs `○ capability mapping` (expanded verticals).
- **Interaction:** static intro; legend explains the two card treatments used in S4.
- **Source facts:** "same rigor and methodology" (P §2); depth-vs-breadth rule (`requirements.md` §8, `/specs/25` §5).

### S4 — Industry Explorer Grid (BREADTH, signature module)
- **Purpose:** the filterable grid of all served industries; selecting one opens its panel.
- **Copy:** filter/search controls + cards (each = name + one-liner). See §8 for full behavior and §9 for data.
- **Words:** card one-liners ≤16 words each; controls minimal.
- **Visual:** `IndustryExplorerGrid` — responsive flat card grid, hairline borders, mono category tags; the four original verticals carry a subtle `●` source marker.
- **Interaction:** filter chips (All · Source-detail · By capability) + text search; select a card → `IndustryPanel` (inline on desktop, bottom-sheet on mobile).
- **Source facts:** 4 original verticals + focus areas (P §2); 15 expanded verticals (E); Financial Services ⊃ Banking & Finance (`requirements.md` §8).

### S5 — Compose your situation (Explorer teaser)
- **Purpose:** route to the signature Explorer to combine industry × geography × capability.
- **Copy:** heading `Your industry, your market, your need`; one line: `Combine any industry with a region and a capability to see how we would approach it.`
- **Words:** ~25.
- **Visual:** compact three-token motif `[ INDUSTRY ] × [ GEOGRAPHY ] × [ CAPABILITY ]`.
- **Interaction:** CTA `Open the Explorer` → `/explore` (pre-selects industry if a panel is open).
- **Source facts:** multi-country / cross-sector composition (P §3, §4).

### S6 — Closing CTA band
- **Purpose:** convert.
- **Copy:** `Not sure where your industry fits? Talk to us.`
- **Words:** ~10.
- **Visual:** ink band (≤1 per page), accent CTA.
- **Interaction:** `Start a Conversation` → `/contact` (pre-scoped with last-selected industry if any).
- **Source facts:** contact / integrated offering (P §4, §10).

## 8. Signature module detail — `IndustryExplorerGrid` + `IndustryPanel`

### 8.1 Data model (per industry record)
```ts
type IndustryRecord = {
  id: string;               // slug, e.g. "banking-finance"
  name: string;             // display name
  group: "life-sciences" | "original" | "expanded";
  source: "P" | "E" | "derived";
  oneLiner: string;         // ≤16 words, card copy
  hasSourceFocus: boolean;  // true → show source focus areas; false → capability mapping only
  focusAreas?: string[];    // ONLY for hasSourceFocus (4 original verticals). Never invented.
  capabilityMapping: {      // how the 4 pillars apply; generic for expanded verticals
    marketResearch: string;
    businessConsulting: string;
    aiEnterprise: string;
    aiTraining: string;
  };
  contains?: string[];      // e.g. Financial Services contains ["Banking & Finance"]
  relatedCapabilities: PillarId[]; // links to pillar pages
};
```
- Life Sciences is **not** a card in this grid (it is the elevated feature band S2 + its own page). Optionally a single "See Life Sciences →" affordance may sit at grid start; it links out, never opens a panel.

### 8.2 States
- **Grid:** default · filtered (chip active) · searching (query) · empty-search (honest "No industry matches — see all industries" reset).
- **Card:** default · hover (hairline→accent, bg `paper-2`) · focus-visible · selected (accent left rule) · has-source-detail marker (`●`).
- **Panel:** closed · opening · open · closing. Desktop = inline expanding region beside/under the grid (no route change); mobile = `Drawer` bottom-sheet.

### 8.3 Selection behavior
- Selecting a card opens its `IndustryPanel`; only one open at a time (desktop inline replaces; mobile drawer stacks over).
- Filter "Source-detail" narrows to the 4 original verticals (the only cards with `focusAreas`).
- Filter "By capability" lets a visitor pick a pillar; grid highlights industries whose `relatedCapabilities` include it (never hides breadth — dims non-matches).
- `Esc` / overlay-click / close button dismisses the panel; focus returns to the triggering card.
- Selecting "Open the Explorer" from a panel deep-links `/explore?industry=<id>`.

### 8.4 Panel content
- **Header:** industry name + source marker (`● Source focus areas` or `○ Capability mapping`).
- **If `hasSourceFocus`:** a "Focus areas" list rendered from `focusAreas` (source-true, e.g. Banking & Finance → digital transformation advisory, customer analytics, AI-driven risk & fraud analytics, process automation).
- **Capability mapping (all industries):** four short lines — Market Research · Business Consulting · AI Enterprise Solutions · AI Training — each a *generalized* statement of how the pillar applies (no fabricated sector-specific claim for expanded verticals; see `/specs/25` §5).
- **`contains` note (Financial Services only):** "Includes Banking & Finance" with its retained source focus areas surfaced.
- **CTAs:** `Open in Explorer` → `/explore?industry=<id>`; `Talk to us about <industry>` → `/contact?industry=<id>`.
- **Cross-links:** `relatedCapabilities` chips → pillar pages.

## 9. Full data listing (build-ready)

### 9.1 Life Sciences (feature band only — names, deep page owns detail)
Pharmaceuticals · Medical Devices · Medical Diagnostics · Medical Equipment · Surgical Consumables · Hospitals & Healthcare Providers. (Full focus areas in `/specs/11` §9.)

### 9.2 Original verticals (P §2) — `hasSourceFocus: true`, `source: "P"`
| id | Name | Source focus areas (corrected OCR, meaning preserved) |
|---|---|---|
| `chemicals` | Chemicals | Market studies; regulatory compliance tracking; supply chain & distributor intelligence |
| `agrochemicals` | Agrochemicals | Crop-protection market sizing; farmer/agronomist insight studies; distribution & channel strategy |
| `automotive` | Automotive | Dealer network studies; aftermarket & parts distribution research; customer experience analytics |
| `banking-finance` | Banking & Finance | Digital transformation advisory; customer analytics; AI-driven risk & fraud analytics; process automation |

> **Reconciliation:** Banking & Finance is retained as its own source-detail record **and** referenced inside Financial Services via `contains`. It is never dropped.

### 9.3 Expanded verticals (E) — `hasSourceFocus: false`, `source: "E"`, capability mapping only
1. Food & Agribusiness
2. Beverages
3. Telecommunications & Technology
4. Tours, Travel & Hospitality
5. Financial Services  *(broad; `contains: ["Banking & Finance"]`)*
6. Energy & Renewable Energy
7. Construction, Real Estate & Infrastructure
8. Transport, Logistics & Warehousing
9. Manufacturing
10. Mining & Extractives
11. Healthcare & Wellness  *(distinct from clinical Life Sciences — labeled as such)*
12. Retail & Consumer Goods
13. Education & Training
14. Professional & Business Services
15. Environmental, Waste & Water Management

**Grid total = 19 cards** (4 original + 15 expanded). Life Sciences excluded from grid (elevated separately).

### 9.4 Generic capability-mapping template (expanded verticals; `source: "derived"`)
Reviewed against `/specs/25` §5 — generalized, no sector-specific depth claim:
- **Market Research:** "Market sizing, customer and channel insight, and competitive intelligence for the sector."
- **Business Consulting:** "Strategy, market-entry, operating-model and process advisory."
- **AI Enterprise Solutions:** "Custom analytics, automation and conversational AI applied to the sector's workflows."
- **AI Training:** "Executive briefings and function-specific AI capability building for the sector's teams."

## 10. Components used
`Header`, `Footer` (global); `Eyebrow`, `Tag`, `Chip`; `Button` (primary/secondary/ghost); `Card` (industry cards); `IndustryExplorerGrid` (S4); `IndustryPanel` / `DetailPanel` + `Drawer` (mobile); `LifeSciencesFeature` band (S2); Explorer teaser motif (S5); ink-band CTA (S6). All per `/specs/19`.

## 11. Progressive-disclosure mapping
```
SCAN        Hero thesis (depth vs breadth) + LS names row
UNDERSTAND  LS feature intro + breadth framing (honest legend)
EXPLORE     IndustryExplorerGrid — filter/search/select
DETAIL      IndustryPanel (focus areas OR capability mapping) / LS deep page
ENGAGE      Panel CTA + closing ink-band "Start a Conversation"
```
No two adjacent layers carry equal copy weight (`/specs/02` §4).

## 12. Content excluded & why
- **Life Sciences focus-area detail** — owned by `/specs/11`; only names + links here (single canonical home, `/specs/01` §7).
- **Standalone pages for the 19 breadth verticals** — banned (sprawl / false depth, `sitemap.md`); handled by grid + panels.
- **Invented focus areas for the 15 expanded verticals** — prohibited (`/specs/25` §5); capability mapping only.
- **Client names, logos, metrics, case studies** — prohibited (`/specs/25` §2).
- **Full country lists / geography detail** — owned by `/where-we-work` (`/specs/12`); reachable via Explorer.

## 13. Desktop behavior (≥1024)
- Hero as 7/5 asymmetric split (text / motif).
- LS feature band full-width with six-cell row; hover raises accent hairline per cell.
- Grid = 3–4 columns; `IndustryPanel` opens as an inline expanding region (grid reflows; no route change; page scroll preserved). Filter chips + search inline above grid.
- Hover reveals affordances but is never *required* (all actions also click/keyboard-operable).

## 14. Mobile behavior (320–414)
- Hero stacks: text then motif; CTAs full-width, stacked.
- LS band: six sub-sector names as a 2-column tappable list; whole band tappable to deep page.
- Grid = 1 column (2 at 414 if it fits without clipping); filter chips horizontally scrollable; search full-width.
- `IndustryPanel` opens as a **bottom-sheet `Drawer`** (max-height 85vh, scrollable, drag/close handle), focus trapped, `Esc`/overlay closes, focus returns to card. **No hover reliance** — selection is tap; markers/labels always visible.
- No horizontal overflow at 320; touch targets ≥44px.

## 15. Internal links
- → `/industries/life-sciences` (hero CTA, S2 band, each sub-sector deep-link).
- → `/explore` (S5, panel "Open in Explorer"; deep-links industry state).
- → pillar pages `/what-we-do/*` (panel `relatedCapabilities` chips).
- → `/contact` (closing band + panel "Talk to us about <industry>").
- ← linked from Home industries strip, `/what-we-do`, `/where-we-work`, footer ("All industries").

## 16. SEO metadata
- **`<title>` (≤60):** `Industries We Serve | MindCraft Consultancy` (49)
- **Meta description (150–160):** `MindCraft brings deep Life Sciences expertise and broad cross-industry capability — from pharma and medical devices to banking, energy and agribusiness across Africa.` (159)
- **H1 (one):** `Deep in Life Sciences. Broad across industry.`
- **OG:** title "Industries We Serve — MindCraft"; description as above (≤200); image = editorial depth-vs-breadth motif (no stock/AI imagery); type `website`; url `/industries`.

## 17. Conversion objective
Move the visitor either **deeper** (into Life Sciences — the differentiator) or **wider then convert** (industry panel → Explorer or pre-scoped Contact). Every panel and the closing band end in a real, pre-scopable action.

## 18. Acceptance criteria (testable)
1. Life Sciences is visibly elevated above the breadth grid (dedicated feature band + deep-page link) and is **not** a card in the grid.
2. Grid contains exactly **19** industry records (4 original + 15 expanded); Life Sciences excluded.
3. All **four** original verticals render their **source** focus areas verbatim-in-meaning (OCR corrected), and none is dropped in the merge.
4. **Banking & Finance** exists both as its own source-detail record and is referenced inside **Financial Services** via `contains`.
5. **Healthcare & Wellness** is present in the grid and labeled distinct from clinical Life Sciences.
6. The 15 expanded verticals show **capability mapping only** — no fabricated focus areas (grep panels/data for invented sector claims → zero).
7. No client names, logos, testimonials, metrics, case studies anywhere (incl. meta/OG).
8. Selecting a card opens exactly one panel; desktop inline (no route change), mobile bottom-sheet; keyboard + `Esc` + focus-return all work.
9. Every CTA resolves to a real route; industry state deep-links into `/explore` and `/contact`.
10. No horizontal overflow and all touch targets ≥44px across 320/375/390/414/768/1024/1280/1440.
11. One `<h1>`; logical heading order; `prefers-reduced-motion` honored on panel/card transitions.
