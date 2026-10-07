# 15 — Who We Serve (Target Clients module)

> Parent: `requirements.md` §13 (audience paths → destinations), `content-inventory.md` §8 (the 8 client groups), `source-traceability.md` §G, `/specs/25` (no fabricated client names/logos), `/specs/02` (length/voice). This is a **reusable content module**, not a standalone page. It lives as the **Who We Serve** section inside `/how-we-work` (`/specs/14`) and as an **audience self-select** on Home (`/specs/03`). Component: `AudienceSelector` / `ClientChips` (`/specs/19` §3.12).

---

## Purpose
Let a visitor recognize themselves in one of MindCraft's eight source-defined client groups and route to the most relevant entry point — without per-persona pages (`requirements.md` §13). It communicates **who MindCraft serves** (breadth of client types) and turns self-recognition into a scoped next step. It uses **client group *types* only** — never fabricated client names, logos, or testimonials (`/specs/25` §2).

## Placements
1. **Home — audience self-select** (`/specs/03`). Scan-level: a compact `AudienceSelector` ("Where do you fit?") that routes each audience to its best first destination (§Audience→destination map). Purpose on Home: help a first-time visitor branch quickly into the site.
2. **How We Work — "Who We Serve" section** (`/specs/14`, S-WhoWeServe). Understand-level: the same eight groups as `ClientChips`, framed as "the organizations we serve," reinforcing the engagement story with the range of clients. Same data, same destinations; slightly fuller intro line.
> Single source: the eight groups + their destination map are defined **once** in `src/data/clients.ts` and consumed by both placements (no duplication, `/specs/01` §7). Home = self-select framing; How We Work = who-we-serve framing.

## Data — the eight client groups (all, `content-inventory.md` §8; P §5)
Exact source substance (spelling corrected, meaning preserved). Each is a *client type*, not a named client.
1. **Pharmaceutical, medical device, diagnostics & healthcare companies** operating in or entering African markets.
2. **Hospitals, hospital groups & private healthcare providers.**
3. **Chemical & agrochemical manufacturers and distributors.**
4. **Automotive manufacturers, dealers & aftermarket distributors.**
5. **Banks, insurers & financial services institutions.**
6. **Government ministries, departments & regulatory agencies.**
7. **NGOs, international development organizations, UN agencies & donor-funded programs.**
8. **Academic & research institutions, startups & innovation hubs.**

```ts
type AudienceGroup = {
  id: string;             // "pharma-healthcare" ...
  label: string;          // short chip label (≤5 words)
  full: string;           // full source description (one line)
  source: "P";
  destination: { href: string; label: string }; // best first destination
  scope?: { industry?: string; interest?: string; geo?: string }; // optional pre-scope for /contact or /explore
};
```
- **Integrity:** no `clientName`, `logo`, `testimonial`, or `metric` fields exist in the schema (`/specs/25` §7). Labels describe *categories* of organization only.

## Audience → destination map
Derived by joining the 8 source client groups (P §5) with the persona→destination table (`requirements.md` §13). Where a group spans multiple personas, the destination is the closest single best first step; secondary paths are reachable from that destination.

| # | Audience group (chip label) | Best first destination | Why |
|---|---|---|---|
| 1 | Life Sciences & healthcare companies | `/industries/life-sciences` | deepest sector fit; core heritage |
| 2 | Hospitals & healthcare providers | `/industries/life-sciences` (Hospitals & Healthcare sub-sector) | operational strategy, patient-experience, workforce |
| 3 | Chemicals & agrochemicals | `/industries` (Chemicals / Agrochemicals cards) | source-supported vertical detail |
| 4 | Automotive | `/industries` (Automotive card) | source-supported vertical detail |
| 5 | Banks, insurers & financial services | `/what-we-do/ai-enterprise-solutions` | risk/fraud analytics, automation, conversational AI |
| 6 | Government & regulators | `/how-we-work` (+ Business Consulting policy/regulatory) | process + policy/regulatory advisory (`requirements.md` §13) |
| 7 | NGOs & development organizations | `/what-we-do/market-research` (Program & Impact / MEL) | baseline/midline/endline, MEL, needs assessments |
| 8 | Academic & research institutions | `/what-we-do/market-research` (+ `/about` partnerships) | research fit + building academic partnerships |

- **Additional persona routes** (`requirements.md` §13) reachable from the above, surfaced as secondary links where natural: CEO/MD → `/what-we-do` → `/how-we-work`; Strategy leader → `/what-we-do/business-consulting`; Commercial leader → `/what-we-do/market-research` + AI Enterprise; Regulatory/market-access → `/industries/life-sciences` + Business Consulting; CIO/CTO → `/what-we-do/ai-enterprise-solutions`; HR/L&D → `/what-we-do/ai-training`.
- **Optional pre-scope:** selecting a group may carry `scope` into `/contact` (prefill area of interest/region, `/specs/16` §8.6) or `/explore` (pre-set industry) where a clean mapping exists (e.g., group 1 → `interest=life-sciences`; group 5 → `interest=ai-enterprise-solutions`; group 7 → `interest=market-research`).

## Copy
- **Home eyebrow (mono):** `WHO WE SERVE`
- **Home heading (≤8 words):** `Where do you fit?`
- **Home intro (1 sentence):** `Choose the closest fit and we'll point you to the most relevant place to start.`
- **How We Work eyebrow:** `WHO WE SERVE`
- **How We Work heading (≤8 words):** `The organizations we work with`
- **How We Work intro (1–2 sentences):** `MindCraft serves multinationals, regional enterprises, public institutions and development partners — unified by a need for credible intelligence, sound strategy and practical AI.`
- **Chip labels:** as the map above (≤5 words each). Each chip's accessible name includes the full source description (`full`) for screen readers.
- **Integrity note:** no chip implies an existing client relationship; framing is "organizations we serve / are built to serve," never "our clients" or "trusted by" (`/specs/25` §2).

## States / interaction
- **`ClientChips` (How We Work):** default · hover · focus-visible · selected (accent border + accent-100 wash). Selecting a chip reveals its one-line `full` description + a `Go to [destination]` link (inline `DetailPanel`, no route change until the link is clicked). Keyboard: roving tabindex within the group, Enter/Space selects, `aria-pressed`.
- **`AudienceSelector` (Home):** same chips; selecting routes (or reveals a compact "Start here → [destination]" affordance) — Home keeps it lightweight (scan-level), so selection may navigate directly on the destination link.
- **Reduced-motion:** panel reveal is instant (no transform).
- **No dead ends:** every chip resolves to a real destination (no decorative chips, `design-principles.md`).

## Components
`AudienceSelector` / `ClientChips` (built on `Chip`, `/specs/19` §3.3); `DetailPanel` for the inline description + destination link (`/specs/19` §3.7); `Button`/`Link` for the destination CTA. Data from `src/data/clients.ts` (single source). No cards-in-cards; hairline/chip structure only.

## Desktop & mobile behavior
- **Desktop (≥1024):** eight chips in a flowing 2–4 column arrangement; selecting a chip opens an inline description panel beside/below with the destination link. Hover previews; click/keyboard selects.
- **Mobile (320–414):** chips wrap or scroll horizontally (no hover reliance); selecting opens a compact inline panel (or bottom-sheet on Home) with the destination link as a full-width button. No overflow at 320; targets ≥44px.

## Acceptance criteria
1. All **eight** source client groups appear, worded from source (spelling corrected, meaning preserved) — no group dropped.
2. Data comes from a **single** `clients.ts` and is consumed by **both** placements (Home self-select + How We Work Who-We-Serve); no duplicated hardcoded lists.
3. Each group maps to a **real destination** per the Audience→destination map; every chip link resolves (no dead ends).
4. **No fabricated client names, logos, testimonials, or metrics** anywhere in the module or its data schema (`/specs/25` §2/§7); framing never claims existing clients ("our clients"/"trusted by" absent).
5. Chips are keyboard-operable with `aria-pressed`; each chip's accessible name conveys the full description.
6. Optional pre-scope (`scope`) carries into `/contact`/`/explore` where defined, prefilling interest/region.
7. Mobile: no hover dependence, no overflow at 320, targets ≥44px; reduced-motion honored.
8. Module is a section (not a route); it does not introduce a `/who-we-serve` page or duplicate `/how-we-work` content.
