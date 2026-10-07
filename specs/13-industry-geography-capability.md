# 13 — The Explorer (Industry × Geography × Capability)

> Parent: `requirements.md` §5 (mind map), §10 (the Explorer, signature), `design-principles.md` (restraint, no gimmicks), `content-inventory.md` §3–6 (industries, LS focus areas, geography), `source-traceability.md` §C–F, `/specs/01` §6 (URL state), `/specs/02` §7 (degraded-state copy), `/specs/25` §6 (dynamic-content integrity). Governs `/explore`. This is the **signature** page: the interactive embodiment of "one engine, filtered by three dimensions." Lightweight — **pure data + client-side filtering; no WebGL, no heavy map, no charts** (`/specs/19` §4, `/specs/23`).

---

## 1. Route & meta
- **Route:** `/explore` (query-parameterized, see §8.6).
- **Nav:** Top-level primary navigation item (`Explore` between `How We Work` and `Insights`). Also surfaced contextually from Home ("Explore your situation"), `/what-we-do`, `/industries`, `/where-we-work`. Directly reachable and deep-linkable at `/explore`.
- **Disclosure role:** EXPLORE → DETAIL → ENGAGE (the composition tool).
- **Canonical ownership:** owns **no** primary facts — it *composes* from the canonical data files (`pillars.ts`, `industries.ts`, `lifeSciences.ts`, `geography.ts`). It restates nothing; it recombines and links back to canonical pages.

## 2. Objective
Let a visitor compose **[Industry] × [Geography] × [Capability]** and receive a focused, source-true response describing how MindCraft applies that capability to that industry in that geography — ending in a pre-scoped "Start a conversation about this." Where a specific combination has no source-specific detail, the output **degrades gracefully** to the general capability statement — it **never fabricates** a case study, metric, client, or example project (`/specs/25` §6).

## 3. Primary visitor question
"Can they help with *my exact* situation — my industry, in my region, for the capability I need?"

## 4. Primary audience
Decision-makers who already know their context and want a fast relevance check: Life Sciences and diversified-industry executives, market-access/regulatory leaders, commercial leaders, CIOs/CTOs, and public/development-sector program leads scoping a specific market question.

## 5. What visitor should understand
1. MindCraft's four capabilities apply across many industries and geographies — this tool shows *how*, for their specific pick.
2. Life Sciences (and the four original verticals) carry deeper, source-specific detail; other verticals show how the four capabilities *apply* (honest breadth, not invented depth).
3. The response is composed from real, source-supported facts — no fabricated proof.
4. Any composition can become a **pre-scoped conversation** in one click.

## 6. Hero
- **Eyebrow (mono):** `EXPLORE`
- **H1 (≤9 words):** `Compose your situation.`
- **Supporting line (≤24 words):** `Pick an industry, a geography and a capability. See how MindCraft applies — grounded only in what we actually do, never invented.`
- **Primary CTA:** none separate — the composer *is* the hero's action (selectors sit directly beneath the H1).
- **Secondary CTA:** `See all capabilities` → `/what-we-do`.
- **Visual:** three hairline selector columns (desktop) under a mono formula line `INDUSTRY  ×  GEOGRAPHY  ×  CAPABILITY  →  RESULT`. No decorative graphics; the interface *is* the visual (cartographic/coordinate restraint, `/specs/19` §4).

## 7. Section sequence
Each: purpose · content/copy · approx words · visual · interaction · source facts.

### S1 — Hero + composer (signature, above the fold)
- **Purpose:** state what the tool does and present the three selectors immediately.
- **Copy:** as §6 + mono formula line.
- **Words:** ~30 + labels.
- **Visual:** `Explorer` composer — three selector groups (Industry / Geography / Capability), each a labeled control; a persistent mono "selection summary" line reflecting current picks.
- **Interaction:** selecting in any column updates URL state (§8.6) and the result region (S2) live; no page reload; no submit button required (result recomputes on each change). See §8.
- **Source facts:** four pillars (P §4); industries (P §2, E); geographies (P §3, E).

### S2 — Result region (composed output)
- **Purpose:** the focused, source-true response for the current composition.
- **Copy:** generated from templates in §8.4 (title, capability-in-industry statement, geography note, "what this looks like" bullets sourced from focus areas OR the graceful-degradation fallback, deliverable-type note as offering).
- **Words:** ~70–120 (bounded; disclosure-governed).
- **Visual:** hairline result panel; mono result header showing the composition (e.g., `PHARMACEUTICALS × KENYA × MARKET RESEARCH`); accent rule marks the active result.
- **Interaction:** recomputes on any selector change; "Start a conversation about this" (pre-scoped) + "Go deeper" links to canonical pages (§14). Empty/partial states handled per §8.3.
- **Source facts:** LS sub-sector focus areas (P §2); 4 original verticals' focus areas (P §2); pillar scope (P §4); geography facts (P §3, E); generic capability mappings for verticals without source depth (`derived`, `/specs/25` §5).

### S3 — How to read this (integrity note, quiet)
- **Purpose:** honesty — set expectation that output is composed from real capability, not case studies.
- **Copy:** one line: `Every result is composed from what MindCraft does. Where we have no sector-specific detail for a combination, we say so plainly rather than invent one.`
- **Words:** ~28.
- **Visual:** small mono-captioned hairline note beneath the result.
- **Interaction:** static.
- **Source facts:** integrity posture (`/specs/25` §6) — not a fabricated claim.

### S4 — Suggested starting points (guided entry)
- **Purpose:** help visitors who don't know where to start; showcase the range without a wall.
- **Copy:** heading `Try a starting point`; 3–4 example chips (real, source-supported combinations), e.g.:
  - `Pharmaceuticals × Kenya × Market Research`
  - `Medical Devices × Africa × Business Consulting`
  - `Financial Services × West Africa × AI Enterprise Solutions`
  - `Hospitals & Healthcare × Africa × AI Training`
- **Words:** ~10 + chips.
- **Visual:** row of selectable `Chip`s.
- **Interaction:** selecting a chip sets all three selectors + updates URL + result. Keyboard-operable.
- **Source facts:** industries (P §2, E), geography (P §3, E), pillars (P §4) — chips only combine existing data-file items.

### S5 — Closing CTA band
- **Purpose:** convert regardless of whether a composition was made.
- **Copy:** `Have a specific challenge in mind?`
- **Words:** ~6.
- **Visual:** ink band (≤1 per page), accent CTA.
- **Interaction:** `Start a Conversation` → `/contact` (pre-scoped with current composition if any).
- **Source facts:** contact (P §10).

## 8. Signature module detail — `Explorer`

### 8.1 The three selectors (data sources)

**A. INDUSTRY selector**
Grouped, so depth vs. breadth stays visible:
- **Group 1 — Life Sciences (deep, source focus areas):** Pharmaceuticals · Medical Devices · Medical Diagnostics · Medical Equipment · Surgical Consumables · Hospitals & Healthcare Providers. *(6, `source:"P"`, each carries focus areas.)*
- **Group 2 — Original verticals (source focus areas):** Chemicals · Agrochemicals · Automotive · Banking & Finance *(within Financial Services)*. *(4, `source:"P"`, each carries focus areas.)*
- **Group 3 — Broader verticals (breadth, capability mapping only — no invented focus areas):** Food & Agribusiness · Beverages · Telecommunications & Technology · Tours, Travel & Hospitality · Financial Services · Energy & Renewable Energy · Construction, Real Estate & Infrastructure · Transport, Logistics & Warehousing · Manufacturing · Mining & Extractives · Healthcare & Wellness · Retail & Consumer Goods · Education & Training · Professional & Business Services · Environmental, Waste & Water Management. *(15, `source:"E"`, `hasFocusAreas:false`.)*
- Optional `Any industry` (unset) — see §8.3.
- **Category note:** Financial Services is the broad category; Banking & Finance is retained as its source-supported focus (do not drop it) — Explorer surfaces Banking & Finance detail when Financial Services is chosen (`content-inventory.md` §5, `requirements.md` §8).

**B. GEOGRAPHY selector**
Two-level (region → optional country), all from `geography.ts` (`content-inventory.md` §6):
- **Africa (primary)** — and its four regions: East Africa (10) · West Africa (16) · Southern Africa (14) · North Africa (5). Selecting a region optionally reveals its country list to pick one country (e.g., Kenya). 12 depth markets flagged.
- **Europe** (source-accurate remit).
- **United States** (source-accurate remit).
- Optional `Anywhere we work` (unset).
- **Rule:** country lists are region-gated (never all 45 at once); reuse the `/where-we-work` region/country data (single source, `/specs/12`).

**C. CAPABILITY selector (the four pillars)**
Market Research · Business Consulting · AI Enterprise Solutions · AI Training. *(Chain order per cross-cutting decision; each maps to its pillar page and scope, `source:"P"`, P §4.)* Optional `Any capability` (unset).

### 8.2 Data model
```ts
type PillarId = "market-research" | "business-consulting"
              | "ai-enterprise-solutions" | "ai-training";

type Industry = {
  id: string;                 // "pharmaceuticals" ...
  name: string;
  group: "life-sciences" | "original" | "broader";
  source: "P" | "E";
  hasFocusAreas: boolean;     // true for LS(6) + original(4); false for broader(15)
  focusAreas?: string[];      // ONLY when hasFocusAreas; verbatim-substance source items
  contains?: string[];        // e.g., Financial Services -> ["Banking & Finance"]
};

type GeoSelection =
  | { level: "region"; regionId: "east"|"west"|"southern"|"north"|"europe"|"us"; name: string }
  | { level: "country"; regionId: "east"|"west"|"southern"|"north"; country: string; isDepthMarket: boolean }
  | { level: "africa"; name: "Africa" }
  | null;                     // "Anywhere we work"

type Pillar = {
  id: PillarId;
  name: string;
  generalStatement: string;   // the fallback capability statement (source: P §4)
  offeringNote: string;       // deliverable TYPES phrased as offerings, never results
  industryHooks?: Partial<Record<string, string>>; // optional source-supported per-industry line
};

type Composition = { industry: Industry|null; geo: GeoSelection; capability: Pillar|null };
```
- **Integrity invariants (enforced by test):** no record contains a metric, client name, testimonial, "deployed"/"proven" field; `focusAreas` exist **only** where `hasFocusAreas`; `derived` mappings reviewed against `/specs/25` §2/§5.

### 8.3 Composition & output logic
The result is built by resolving detail from most-specific to general, then assembling copy from §8.4:

```
1. Require CAPABILITY to produce a full result.
   - If capability is unset → show a prompt: "Pick a capability to see how it applies." (S2 prompt state)
2. Resolve INDUSTRY detail:
   a. industry set AND hasFocusAreas AND capability has an industryHook for it
        → SPECIFIC: use source focus areas relevant to the capability + hook line.
   b. industry set AND hasFocusAreas (no capability-specific hook)
        → SEMI-SPECIFIC: name the industry's source focus areas + general capability statement.
   c. industry set AND NOT hasFocusAreas (broader vertical)
        → MAPPED: general capability statement applied to the named industry
          ("how our [capability] applies to [industry]") — NO invented focus areas.
   d. industry unset ("Any industry")
        → GENERAL: pillar generalStatement only.
3. Resolve GEOGRAPHY note:
   - country  → "in [country][, one of our focus markets]" (depth-market flag if true)
   - region   → "across [region] ([N] countries)"
   - africa   → "across Africa — our primary focus, all African countries"
   - europe/us→ source-accurate remit line for that region
   - null     → "across the markets we work in (Africa, Europe and the US)"
4. Compose title + statement + focus/mapping bullets + geography note + offeringNote.
5. Append pre-scoped "Start a conversation about this" + "Go deeper" links (§14).
```

**Graceful degradation rule (the core integrity behavior).** Detail only ever *reduces*; it never fabricates:
```
SPECIFIC  →  SEMI-SPECIFIC  →  MAPPED  →  GENERAL
(never below GENERAL; never a fabricated case/metric/client/example project)
```
When a combination has no source-specific detail, the output states the general capability statement plainly and says so — it does not invent one (`/specs/25` §6). Geography never manufactures market statistics; it only frames reach.

### 8.4 Output copy templates (composed, source-true)
Placeholders in `[...]`. All templates avoid metrics, client names, and "proven/deployed" claims. Deliverables appear as **offerings**, never results.

**Result header (mono):** `[INDUSTRY] × [GEOGRAPHY] × [CAPABILITY]` (uppercase; unset dimensions render as `ANY INDUSTRY` / `ANYWHERE WE WORK`).

**Result title (Fraunces):**
`[Capability] for [industry], [geography phrase].`
e.g. `Market Research for Pharmaceuticals, in Kenya.`

**SPECIFIC (2a) body:**
> `For [industry], our [capability] work typically centers on [1–3 source focus areas relevant to the capability]. [Capability generalStatement, condensed.] [Geography note.]`
> Bullets (from source focus areas, ≤20 words each, corrected spelling): `[focus area]`, `[focus area]`, `[focus area]`.
> Offering line: `[offeringNote — deliverable types as what you receive, not results].`

**SEMI-SPECIFIC (2b) body:**
> `We bring Life-Sciences-grade rigor to [industry]. [Capability generalStatement.] [Geography note.]`
> Bullets: the industry's source focus areas (labeled as areas we work across), + capability offeringNote.

**MAPPED (2c) body (broader verticals — honest breadth):**
> `We serve [industry] as one of the diversified industries we work across. Here is how our [capability] applies: [capability generalStatement]. [Geography note.]`
> Caption (mono): `GENERAL CAPABILITY MAPPING — [industry] is a served industry; detail is tailored during a conversation.`
> (No focus-area bullets — none exist in source for broader verticals.)

**GENERAL (2d) body (no industry chosen):**
> `[Capability generalStatement.] We apply this across Life Sciences and diversified industries. [Geography note.]`

**Geography note templates:**
- country (depth market): `in [country] — one of our focus markets in [region].`
- country (non-depth): `in [country], part of [region] where we have active engagement capability.`
- region: `across [region] — [N] countries where we work.`
- africa: `across Africa, our primary focus, with active engagement capability in all African countries.`
- europe: `for European clients seeking African and emerging-market intelligence, expansion and partnerships, plus AI training and digital-transformation advisory.`
- us: `for US organizations — particularly in Life Sciences and healthcare — needing African and global market-entry research, competitive intelligence and AI-enabled solutions.`
- null: `across the markets we work in — Africa (our primary focus), Europe and the United States.`

**Pre-scoped CTA (always):** `Start a conversation about this` → `/contact?industry=[id]&geo=[value]&interest=[capabilityId]` (see §14, `/specs/16`).

### 8.5 Fallback templates (explicit, for the degradation path)
- **No capability yet:** `Pick a capability to see how MindCraft applies to your situation.` (neutral prompt; no fabricated content).
- **Broader vertical + any capability:** the MAPPED template (2c) — general mapping + honest caption.
- **Combination with no sector detail:** never blank, never invented — always resolves to at least GENERAL (2d) plus the geography frame; the S3 integrity note reinforces this.
- **Europe/US + LS industry:** use the region remit line (source-accurate) rather than inventing local market facts.

### 8.6 URL-encoded state (deep-linking, refresh-safe)
- Encode all three dimensions as query params: `/explore?industry=pharmaceuticals&geo=kenya&capability=market-research`.
- `geo` accepts a country id (`kenya`), a region id (`west`|`east`|`southern`|`north`|`europe`|`us`), or `africa`. Unset dimensions are omitted.
- On load, params hydrate the selectors and render the composed result (refresh-safe).
- Every selector change replaces history state (so back/forward walks prior compositions without breaking).
- Invalid/unknown param values degrade to unset (never error); the result still renders (GENERAL at worst).
- State is shareable; the same URL reproduces the same result (pure function of params + static data).
- Interop: `geo` values reuse `/where-we-work` region/country ids (`/specs/12`); `capability` values reuse pillar ids (`/specs/05`); `industry` ids reuse `/industries` ids (`/specs/10`).

### 8.7 States
- **Composer:** idle (nothing picked → S2 shows prompt + S4 starting points) · partial (some picks) · complete (all three) · from-URL (hydrated).
- **Result region:** prompt (no capability) · composed (SPECIFIC/SEMI/MAPPED/GENERAL) · reduced-motion (instant swap, no fade).
- **Chips/selectors:** default · hover · selected (accent border + accent-100 wash) · focus-visible.
- No loading state needed (client-side, synchronous).

## 9. Components used
`Header`, `Footer`; `Eyebrow`, `Tag`, `Chip`; `Button`; `Explorer` (composer + result); three selector controls (grouped `Select`/listbox or chip-groups) sharing the `Chip` pattern; `DetailPanel` for the result region (no route change); region→country sub-selector reusing `RegionSelector`/`CountryList` from `GeoModule` (`/specs/12`); ink-band CTA (S5). All per `/specs/19`; pure data + client-side filtering, no charts/WebGL (`/specs/23`).

## 10. Progressive-disclosure mapping
```
SCAN        Hero: "Compose your situation" + formula line
UNDERSTAND  The three selectors and what they mean
EXPLORE     Pick Industry × Geography × Capability (or a starting-point chip)
DETAIL      Composed result: capability-in-industry-in-geography (source-true)
ENGAGE      Pre-scoped "Start a conversation about this" + "Go deeper" links
```

## 11. Content excluded & why
- **Case studies / example projects / named clients / metrics in output** — prohibited (`/specs/25` §6); output is capability composition only.
- **Invented focus areas for the 15 broader verticals** — prohibited (`/specs/25` §5); those resolve to MAPPED (general) copy.
- **Market statistics per geography** — prohibited; geography only frames reach, never quantifies a market.
- **A full restatement of pillar/industry/geography content** — owned by canonical pages; Explorer composes short statements and links out (single source, `/specs/01` §7).
- **Heavy 3D/WebGL/animated globe** — banned (`requirements.md` §10, `/specs/19` §4).
- **A submit/"Generate" button implying computation/AI** — avoided; result is deterministic client-side filtering (no "AI magic" theater).

## 12. Desktop behavior (≥1024)
- Hero + three selector columns side by side under the formula line (`INDUSTRY × GEOGRAPHY × CAPABILITY → RESULT`).
- Result region appears beneath the composer as a hairline `DetailPanel`, updating live on each change (no route change; URL state updates).
- Geography selector: choosing Africa reveals four region controls; choosing a region optionally reveals its `CountryList` inline to pick a country.
- Starting-point chips (S4) in a single row; integrity note (S3) as a quiet caption under the result.

## 13. Mobile behavior (320–414)
- Composer becomes a **stacked stepper**: Industry → Geography → Capability → Result (per `/specs/01` §8).
- Each step is a full-width tappable group; geography region/country use tappable chips + a bottom-sheet `CountryList` (no hover reliance).
- Result renders below the stepper; "Start a conversation about this" is a full-width primary button; "Go deeper" links stacked.
- Starting-point chips horizontally scrollable; no horizontal overflow at 320; targets ≥44px.
- URL state still updates so a shared link reopens the same composition on mobile.

## 14. Internal links
- **Pre-scoped convert:** `Start a conversation about this` → `/contact?industry=[id]&geo=[value]&interest=[capabilityId]` (prefills interest + region, `/specs/16` §8.6).
- **Go deeper (contextual):** capability → its pillar page (`/what-we-do/[pillar]`); Life Sciences industry → `/industries/life-sciences#[subsector]`; broader industry → `/industries`; geography → `/where-we-work?region=[regionId]`.
- **Secondary:** `See all capabilities` → `/what-we-do`.
- **← Linked from:** Home ("Explore your situation"), `/what-we-do`, `/industries`, `/where-we-work` (all with optional pre-set params).

## 15. SEO metadata
- **`<title>` (≤60):** `Explore Capabilities by Industry & Region | MindCraft` (52)
- **Meta description (150–160):** `Compose your industry, geography and capability to see how MindCraft applies its market research, consulting, AI training and enterprise AI across Africa, Europe and the US.` (176 → trim to:) `Compose an industry, geography and capability to see how MindCraft applies research, consulting, AI training and enterprise AI across Africa, Europe and the US.` (156)
- **H1 (one):** `Compose your situation.`
- **Canonical:** `/explore` (query params non-canonical; base URL is canonical to avoid duplicate indexing).
- **OG:** title "Explore MindCraft by Industry, Geography & Capability"; description as above; image = hairline `INDUSTRY × GEOGRAPHY × CAPABILITY` formula motif (no stock/AI imagery); type `website`; url `/explore`.

## 16. Conversion objective
Convert a specific, self-identified need into a **pre-scoped conversation**: every composed result and the closing band carry the composition into `/contact` (industry + geography + capability → prefilled interest/region). Secondary success = deeper navigation into the relevant canonical page.

## 17. Acceptance criteria (testable)
1. Three selectors present with exact data: Industry (6 LS + 4 original + 15 broader = 25, grouped), Geography (Africa + 4 regions + optional 45 countries + Europe + US), Capability (4 pillars).
2. Selecting any combination renders a result with **no reload**; result is a pure function of the three selections.
3. **Graceful degradation:** a broader vertical (e.g., Manufacturing) yields the MAPPED template (general capability mapping + honest caption) with **no invented focus areas**; a combination with no sector detail never renders blank and never below GENERAL.
4. **Anti-fabrication:** output contains no case study, metric/percentage, client name, "proven"/"deployed" claim, or example project — grep of rendered result strings → zero hits (`/specs/25` §2/§6).
5. LS (6) and original (4) industries expose source focus areas; broader (15) expose none (schema `hasFocusAreas` gate enforced by test).
6. Financial Services surfaces Banking & Finance source detail (original vertical not dropped).
7. **URL state:** `/explore?industry=…&geo=…&capability=…` hydrates selectors and result on load; refresh preserves state; back/forward walks prior compositions; invalid params degrade to unset without error.
8. Every result ends in a **pre-scoped** `Start a conversation about this` linking to `/contact` with `industry`, `geo`, and `interest` params matching the composition.
9. Starting-point chips set all three selectors + URL + result; keyboard-operable.
10. Geography country lists are region-gated (never all 45 at once); reuse `/where-we-work` data (single source).
11. No WebGL / heavy map / chart library / "Generate" button; result is instant client-side filtering.
12. Mobile: stacked stepper (Industry→Geography→Capability→Result); no hover reliance; no overflow at 320; targets ≥44px.
13. One `<h1>` (`Compose your situation.`); logical heading order; `prefers-reduced-motion` swaps result instantly (no transform).
14. Geography never emits a market statistic; only reach framing appears.
