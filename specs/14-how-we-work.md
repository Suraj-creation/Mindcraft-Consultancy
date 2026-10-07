# 14 — How We Work

> Parent: `requirements.md` (§1E differentiators, §7 the engine, §13 audience paths, §14 conversion), `design-principles.md`, `sitemap.md`, `content-inventory.md` (§9 delivery, §10 differentiators, §11 process, §8 clients), `source-traceability.md` §G, `specs/01`, `specs/02`, `specs/15` (Who We Serve module — embedded, not duplicated), `specs/19`, `specs/25`. Source: Corporate Profile §6 (delivery), §7 (differentiators), §8 (process), §5 (clients).
> Disclosure role: **UNDERSTAND + DETAIL** (process diagram + per-node panels; delivery matrix; editorial differentiator statements; embedded Who We Serve).

---

## 1. Route & meta
- **Route:** `/how-we-work`
- **Parent:** top-level (primary nav item 5 of 6).
- **Nav position:** `Home · What We Do · Industries · Where We Work · **How We Work** · About` + persistent `Start a Conversation`.
- **Canonical owner of:** the **6-stage engagement process** (content-inventory §11), the **7 delivery modalities** (§9), the **5 differentiators in DEPTH** (§10 — Home carries the scan version), and the **Who We Serve** section (renders the module specced in `specs/15`). No other page restates these in full; Home teases process + differentiators + audience paths and links here.
- **Value-chain note:** this page is the "how an engagement runs" wrapper around the engine (Market Research → Business Consulting → AI Enterprise Solutions → AI Training → Impact), not a pillar page.

## 2. Objective
Convince a serious buyer that engaging MindCraft is structured, low-risk and adaptable: show *how* an engagement runs (a clear six-stage process), *how* it can be delivered (flexible modalities), *why* MindCraft is the right partner (five differentiators, in depth), and *who* it serves — then convert with a Start-a-Conversation CTA. Communicate method and professionalism as the credibility substitute for a 2026 firm (no fabricated proof, `specs/25`).

## 3. Primary visitor question
"How would an engagement with MindCraft actually work — and who do they serve?"

## 4. Primary audience
- CEOs / Managing Directors and strategy leaders evaluating a partner and de-risking a first engagement (primary).
- Procurement / operations owners assessing delivery format, scope and cadence.
- Government / regulator and NGO / development-sector buyers checking fit and process rigor.
- Secondary: any pillar/industry visitor arriving to confirm "how they work" before contacting.

## 5. What visitor should understand
1. Engagements follow a clear, repeatable six-stage process: Discovery → Proposal → Design → Delivery → Evaluation → Follow-up.
2. Delivery is flexible — in-person, virtual, hybrid; short courses to multi-month programs; retainer, one-off, or integrated across all four pillars.
3. Five differentiators explain why MindCraft is credible: Life Sciences heritage, pan-African footprint with local fluency, one partner with four integrated capabilities, applied decision-ready outputs, responsible governed AI.
4. MindCraft serves eight source-defined client groups, and each can find its best first step (embedded Who We Serve, `specs/15`).
5. Engagement can start at any pillar or any stage — the process shows structure, not a mandatory four-pillar bundle.

## 6. Hero
- **Eyebrow (mono):** `HOW WE WORK`
- **Headline (≤9 words):** *A clear path from question to impact.* (7 words)
- **Supporting line (≤24 words):** *One structured process, flexible delivery and five reasons to trust the work — designed around your context, from first conversation to measurable impact.* (22 words)
- **Primary CTA:** `Start a Conversation` → `/contact`
- **Secondary CTA:** `See what we do` → `/what-we-do`
- **Visual:** editorial header block, top hairline rule; a quiet mono locator line beneath the H1: `DISCOVERY → PROPOSAL → DESIGN → DELIVERY → EVALUATION → FOLLOW-UP` (anchors to the process section S1). No decorative graphics (`specs/19` §4).

## 7. Section sequence
Each: purpose · content/copy · approx words · visual · interaction · source facts.

### S1 — The engagement process (signature: `ProcessDiagram`)
- **Purpose:** show the six-stage engagement as a legible horizontal path with per-node depth on demand.
- **Content/copy:** eyebrow `01 — THE ENGAGEMENT` · heading *How an engagement runs* · intro (1 sentence): *Every engagement follows the same six stages, scaled to the scope of your challenge.* Then the six nodes with source descriptions (corrected spelling, meaning preserved, `specs/25` §5):
  1. **Discovery** — *An initial consultation to understand your needs, objectives, market context and success measures.*
  2. **Proposal** — *A tailored scope of work, methodology, timeline and budget across the relevant pillar(s).*
  3. **Design** — *Co-development of content, research instruments or solution architecture, with your input and validation.*
  4. **Delivery** — *Execution of training, advisory, research or AI-solution implementation, with regular progress check-ins.*
  5. **Evaluation** — *Feedback collection, quality assurance, impact assessment and final reporting.*
  6. **Follow-up** — *Optional ongoing support, coaching, refresher training or solution-enhancement engagements.*
- **Word count:** ~30 (intro) + node scan lines; each detail panel ~25–35 words.
- **Visual:** `ProcessDiagram` — horizontal hairline track with six numbered nodes (mono stage numbers `01…06`, accent connectors); active node marked with accent rule. Node = title + one-line scan; selecting reveals the source description in a `DetailPanel` beneath the track. Optional quiet note that Follow-up loops back toward the next question (the engine loop, `requirements.md` §7).
- **Interaction:** `select` → per-node `DetailPanel` (no route change); keyboard-operable (roving tabindex across nodes, Enter/Space opens, Esc collapses). Reduced-motion: instant reveal. Default state may show node 1 (Discovery) expanded.
- **Source facts:** Profile §8 (six stages + descriptions); Profile §4 intro (relevant pillar(s), engage 2+); loop from `requirements.md` §7.

### S2 — How we deliver (delivery modalities)
- **Purpose:** show engagement is shaped to the client's operating context; all seven source modalities, compactly.
- **Content/copy:** eyebrow `02 — DELIVERY` · heading *Delivery shaped to your context* · intro (1 sentence): *We design each engagement around how your teams actually work.* The seven modalities (Profile §6, corrected spelling), each a short label + one-line:
  1. **In-person** — *Workshops, training and advisory sessions across African, European and US locations.*
  2. **Virtual** — *Online training, webinars and remote advisory support.*
  3. **Hybrid** — *Programs combining in-person and virtual delivery.*
  4. **Short courses & longer programs** — *From 1–5 day courses to structured programs spanning weeks to months.*
  5. **Retainer advisory** — *Ongoing strategic, research or AI support on a retained basis.*
  6. **One-off & scoped projects** — *Single consulting assignments and clearly scoped projects.*
  7. **Integrated engagements** — *Custom engagements combining Business Consulting, Market Research, AI Training and AI Enterprise Solutions as needed.*
- **Word count:** ~20 (intro) + 7 one-liners (each ≤16 words).
- **Visual:** compact **matrix/list** — a two-column responsive list (label · one-line) separated by hairlines; mono row markers. Not cards-in-cards (`specs/19` §3.4). Optional light grouping: *Formats* (1–4) · *Commercial model* (5–7).
- **Interaction:** static (scan-level); item 7 ("Integrated engagements") links to `/what-we-do` (ties to the engine). No hover-dependent content.
- **Source facts:** Profile §6 (all seven modalities); item 7 ties to Profile §4 integration.

### S3 — Why MindCraft (5 differentiators — DEPTH)
- **Purpose:** the editorial DEPTH version of the five differentiators (Home carries the scan version, `specs/03` / content-inventory §10).
- **Content/copy:** eyebrow `03 — WHY MINDCRAFT` · heading *Five reasons the work holds up* · then five editorial statements (each: short title + 1–2 sentence DEPTH statement, ≤~60 words each; hedged, no fabricated proof, `specs/25`):
  1. **Deep Life Sciences heritage** — *Our core expertise is built on Life Sciences — pharmaceuticals, medical devices, diagnostics, equipment, surgical consumables and hospitals. That heritage means faster onboarding, sharper questions and recommendations grounded in real industry context from day one, not a generalist framework retrofitted to your sector.*
  2. **Pan-African footprint with local fluency** — *Headquartered in Nairobi and structured for reach across all African countries, we combine on-ground market knowledge, regulatory awareness and cultural fluency with international consulting standards — a combination rare among both global consultancies and purely local firms.*
  3. **One partner, four integrated capabilities** — *Most organizations need research to inform strategy, strategy to guide AI investment, and training to make adoption stick. We are deliberately structured to deliver Business Consulting, Market Research, AI Training and AI Enterprise Solutions as one coherent engagement, not four disconnected vendors.*
  4. **Applied, decision-ready outputs** — *Every deliverable — a research report, a training curriculum, a deployed enterprise solution — is designed to be immediately usable. Built for implementation, not left as a theoretical framework.*
  5. **Responsible, governed AI by design** — *We embed data privacy, ethics and governance into every AI training program and enterprise solution, so adoption stays safe, compliant and sustainable — particularly critical for regulated industries such as pharmaceuticals, healthcare and banking.*
- **Word count:** ~30 (heading/intro) + five statements (≤~60 words each; deep-page block limit `specs/02` §3).
- **Visual:** `DifferentiatorList` in DEPTH mode — five editorial blocks separated by hairline rules; mono index `01…05`; asymmetric layout (title column / statement column, e.g., 4/8). One item may render on a deliberate ink band (≤1–2 per page, `specs/19` §2) for emphasis. No icons-as-decoration; line icon optional per item.
- **Interaction:** static (editorial). Differentiators 1–2 may link contextually to `/industries/life-sciences` and `/where-we-work`; 3 to `/what-we-do`; 5 to `/what-we-do/ai-enterprise-solutions` (no dead ends, meaningful link text).
- **Source facts:** Profile §7 (all five, verbatim substance, spelling corrected, condensed within limits).

### S4 — Who we serve (embedded module from `specs/15`)
- **Purpose:** let visitors recognize themselves among the eight source-defined client groups and route to the best first step — reinforcing the engagement story with the range of clients.
- **Content/copy:** rendered by the **Who We Serve module** (`specs/15`) in its How-We-Work framing:
  - eyebrow `WHO WE SERVE` · heading *The organizations we work with* · intro: *MindCraft serves multinationals, regional enterprises, public institutions and development partners — unified by a need for credible intelligence, sound strategy and practical AI.*
  - the eight `ClientChips` and their destination map (see `specs/15` — do not duplicate the list here).
- **Word count:** intro ~28 + chip labels (module-owned).
- **Visual:** `ClientChips` / `AudienceSelector` (`specs/19` §3.3, §3.12) — selecting a chip reveals its one-line source description + a `Go to [destination]` link via inline `DetailPanel` (no route change until the link).
- **Interaction:** `select` (roving tabindex, `aria-pressed`), inline panel + destination link; optional pre-scope carries `interest`/`region` into `/contact` or `/explore` per `specs/15` §Audience-map / `specs/16` §8.6. No dead ends.
- **Source facts:** Profile §5 (all eight client groups); persona→destination map (`requirements.md` §13). **Integrity:** client *types* only — no fabricated client names, logos or testimonials (`specs/25` §2); framing is "organizations we serve," never "our clients"/"trusted by."
- **Single-source note:** this section **renders** `specs/15`; it does not restate or fork the data (`clients.ts` is the single source, `specs/01` §7).

### S5 — Founding-year partnership (honest value framing)
- **Purpose:** convert the "2026 firm" question into a positive, source-supported value proposition — without implying longevity or fabricating track record.
- **Content/copy:** eyebrow `04 — WORKING WITH US NOW` · heading *A partner invested from the start* · statement (1–2 sentences, source §9): *MindCraft was established in 2026. Clients engaging us in our founding years benefit from senior-level attention, competitive engagement terms and a partner genuinely invested in building a long-term track record of impact.*
- **Word count:** ~40.
- **Visual:** quiet editorial block; mono caption `ESTABLISHED 2026`. No metrics, no "proven," no counts (`specs/25` §2).
- **Interaction:** static; optional link to `/about` (heritage, team, partnerships) for the trust narrative.
- **Source facts:** Profile §9 (founding-year value framing; established 2026). Team/partnership detail lives on About (single source) — referenced, not restated here.

### S6 — Closing CTA band (Start a Conversation)
- **Purpose:** convert after the visitor understands process, delivery, differentiators and fit.
- **Content/copy:** heading (≤8 words): *Ready to scope your engagement?* · one supporting line: *Tell us your challenge and we'll suggest the right starting point.*
- **Word count:** ~16.
- **Visual:** ink band (≤1–2 per page total, coordinate with S3), accent primary CTA.
- **Interaction:** `Start a Conversation` → `/contact`; secondary `Explore your situation` → `/explore`.
- **Source facts:** contact (Profile §10); Explorer (`requirements.md` §10).

## 8. Signature module detail — `ProcessDiagram`

### 8.1 Data model
```ts
type ProcessStage = {
  index: number;          // 1..6
  id: "discovery" | "proposal" | "design" | "delivery" | "evaluation" | "follow-up";
  name: string;           // "Discovery" ...
  scanLine: string;       // ≤ ~10-word node summary
  detail: string;         // source description (corrected spelling), ~25–35 words
  optional?: boolean;     // true for "follow-up" (source: "Optional ongoing support…")
  source: "P";
};
```
- **Integrity invariants:** no stage carries a duration promise, price, metric, or outcome claim; "Delivery" and "Evaluation" describe activity, not results (`specs/25` §2). Follow-up flagged `optional` (source says "Optional").
- Data lives in `src/data/process.ts` (single source, `specs/25` §7).

### 8.2 States
- **Diagram:** default (node 1 expanded) · a node selected/expanded · reduced-motion (instant panel swap).
- **Node:** default · hover · focus-visible (accent ring, `specs/22` §5) · selected (accent rule + `aria-expanded="true"`).
- **DetailPanel:** collapsed · expanded (`role="region"`, `aria-labelledby` = node heading; focus not obscured by sticky header, `specs/22` §5).

### 8.3 Copy templates (per node)
- **Node scan (mono number + name):** `0[n] — [Name]` + `scanLine`.
- **Detail body:** the source `detail` sentence (already ≤35 words). No embellishment; no added claims.
- **Follow-up caption (mono):** `OPTIONAL` (source-accurate).

## 9. Components used
`Header`, `Footer`; `Eyebrow`, `Tag`; editorial header block + `.section` (`specs/19` §2); `ProcessDiagram` + `DetailPanel` (S1); delivery list/matrix built from `<ul>`/hairlines (S2); `DifferentiatorList` DEPTH mode (S3, `specs/19` §3.12); `ClientChips`/`AudienceSelector` + `DetailPanel` from the embedded `specs/15` module (S4); ink-band CTA + `Button` (S5, S6); `Link` for contextual cross-links. All line-based, hairline structure, single accent — no charts/WebGL (`specs/19` §4, `/specs/23`).

## 10. Progressive-disclosure mapping
```
SCAN        Hero H1 + mono process locator line
UNDERSTAND  Process intro; delivery intro; differentiator titles; who-we-serve intro
EXPLORE     Select a process node; select a client chip
DETAIL      Node DetailPanel (source description); chip description + destination; full differentiator statements
ENGAGE      Contextual links + closing "Start a Conversation" band
```
No two adjacent layers carry the same weight (`specs/02` §4).

## 11. Content excluded & why
- **Full pillar sub-capabilities & deliverables** — owned by the four pillar pages (`specs/06–09`); referenced via S2 item 7 → `/what-we-do`, not restated (single source, `specs/01` §7).
- **Full country lists / geography detail** — owned by `/where-we-work` (`specs/12`); differentiator 2 links there, no country dump here.
- **Team bios, vision/mission/values, partnership detail** — owned by `/about` (`specs/04`); S5 references it. No invented named people or partner logos (`specs/25` §3).
- **Any metric, success rate, project/client count, "proven"/"deployed" claim, duration or price promise** — prohibited (`specs/25` §2); credibility carried by the process, delivery range and differentiators instead.
- **Per-persona pages / a separate Clients page** — replaced by the embedded Who We Serve module (`sitemap.md`, `specs/15`).

## 12. Desktop behavior (≥1024)
- **S1 ProcessDiagram** renders horizontally: six nodes across a single hairline track; the selected node's `DetailPanel` opens beneath the full track (no route change). Numbers/connectors in mono/accent.
- **S2 Delivery** as a two-column hairline matrix (label · one-line), optionally grouped Formats / Commercial model.
- **S3 Differentiators** as five stacked editorial blocks with asymmetric title/statement split; one may sit on an ink band.
- **S4 Who We Serve** chips in a flowing 2–4 column arrangement; inline description panel beside/below.
- Generous section rhythm (`specs/19` §1.3, desktop `space-10/11`).

## 13. Mobile behavior (320–414)
- **S1 ProcessDiagram** renders **vertically** (top→bottom): six stacked nodes on a vertical hairline track; tapping a node expands its `DetailPanel` in place (no hover reliance; `specs/01` §8). Numbers stay visible; no horizontal overflow at 320.
- **S2 Delivery** collapses to a single-column hairline list (label then one-line).
- **S3 Differentiators** stack full-width; ink-band item remains legible.
- **S4 Who We Serve** chips wrap or scroll horizontally; selecting opens a compact inline panel (or bottom-sheet) with a full-width destination button; targets ≥44px.
- **S6 CTA** buttons full-width. No clipped text, no disappearing content (`requirements.md` §15).

## 14. Internal links
- **Primary convert:** `Start a Conversation` (hero + S6) → `/contact`.
- **Engine:** S2 item 7 + "See what we do" → `/what-we-do`.
- **Differentiators (S3):** 1 → `/industries/life-sciences`; 2 → `/where-we-work`; 3 → `/what-we-do`; 5 → `/what-we-do/ai-enterprise-solutions`.
- **Who We Serve (S4):** eight destinations per `specs/15` map (life-sciences, industries, pillars, about) — optionally pre-scoping `/contact` or `/explore`.
- **S5:** → `/about`. **S6 secondary:** `Explore your situation` → `/explore`.
- **← Linked from:** Home (process preview, differentiator scan, audience paths), every pillar page, About, footer (Company group).

## 15. SEO metadata
- **`<title>` (≤60):** `How We Work — Process & Delivery | MindCraft` (46)
- **Meta description (150–160):** `See how a MindCraft engagement runs: a six-stage process, flexible in-person, virtual and hybrid delivery, and the five reasons our Africa-focused, Life Sciences work holds up.` (172 → trim to:) `How a MindCraft engagement runs: a six-stage process, flexible delivery, and five reasons our Africa-focused, Life Sciences consulting and AI work holds up.` (154)
- **H1 (one):** `A clear path from question to impact.`
- **Canonical:** `/how-we-work`.
- **OG:** title "How MindCraft Works — Process, Delivery, Differentiators"; description as meta; image = hairline six-stage process motif (mono `DISCOVERY → … → FOLLOW-UP`, no stock/AI imagery); type `website`; url `/how-we-work`.

## 16. Conversion objective
Move an evaluating buyer from "how does this work?" to a scoped conversation. Primary success = `Start a Conversation` (hero + S6) → `/contact`. Secondary = a Who-We-Serve chip routing to the right pillar/industry, optionally pre-scoping `/contact`/`/explore`; and differentiator/engine links deepening intent before contact.

## 17. Acceptance criteria (testable)
1. **Process:** all **six** stages appear in source order (Discovery → Proposal → Design → Delivery → Evaluation → Follow-up), each with its source description (corrected spelling, meaning preserved); Follow-up flagged optional.
2. `ProcessDiagram` renders **horizontally on desktop** and **vertically on mobile**; nodes are keyboard-operable (roving tabindex, Enter/Space, Esc), with `aria-expanded` and a `role="region"` detail panel; reduced-motion swaps instantly.
3. **Delivery:** all **seven** modalities appear (Profile §6), compact list/matrix, no data dropped; item 7 links to `/what-we-do`.
4. **Differentiators:** all **five** appear in DEPTH form (title + 1–2 sentence statement), source-faithful and condensed within `specs/02` limits; Home's scan version is not duplicated verbatim here.
5. **Who We Serve** is rendered by the `specs/15` module (all eight groups, single-source `clients.ts`), not re-listed or forked; every chip resolves to a real destination.
6. **Anti-fabrication:** grep of rendered copy shows zero metrics, percentages, client names, "proven"/"deployed"/"trusted by", project/client/year counts, or duration/price promises (`specs/25` §2); "our clients" absent.
7. Exactly one `<h1>` (`A clear path from question to impact.`); logical heading order (H1 → H2 sections → H3 stages/differentiators/client groups); mono eyebrows are not headings (`specs/22` §4).
8. Every CTA and contextual link resolves to a real route (no dead ends); primary CTA site-wide is `Start a Conversation` → `/contact`.
9. No horizontal overflow at 320px; touch targets ≥44px; visible accent focus ring on all controls; `prefers-reduced-motion` honored.
10. Ink bands ≤2 on the page; no large rounded cards; hairline structure and single accent throughout (`specs/19`).
11. All source facts from Profile §5, §6, §7, §8 are present and placed (cross-checks `source-traceability.md` §G with no Failure-A loss and no Failure-B dumping).
