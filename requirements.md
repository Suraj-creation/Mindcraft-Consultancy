# MindCraft Consultancy Services — Website Requirements

> **Status:** Canonical strategic source of truth for the MindCraft website.
> **Scope:** Strategy, content architecture, information architecture, interaction model, and communication objectives. Page-level and system-level detail lives in `/specs/`. Factual coverage is tracked in `content-inventory.md` and `source-traceability.md`.
> **Authoritative source documents:**
> 1. `MindCraft Consultancy Services - Corporate Profile (1).md`
> 2. `industry-verticals-geography.md`
>
> **Golden rule:** Preserve every material fact from the source documents; radically improve how it is communicated. The Corporate Profile is a *source of truth*, not a sitemap. Do not invent, contradict, or fabricate. See `/specs/25-content-integrity.md`.

---

## 0. How to read this document set

```
requirements.md            ← this file: the "why" and the strategic model
design-principles.md        ← the design philosophy + hard "do / do-not" constraints
sitemap.md                  ← the final page architecture at a glance
content-inventory.md        ← every source fact → destination + treatment (matrix)
source-traceability.md      ← proof of source coverage (fact → page → section → component)
/specs/01…26                ← implementation-grade specs per page and per system
```

A developer/designer should be able to build the entire site from `/specs/` without making major strategic decisions. When a `/specs/` file and this file disagree, **this file and `design-principles.md` win**, and the discrepancy should be corrected.

---

## 1. The company, understood (deep context)

### A. What is MindCraft?
MindCraft Consultancy Services ("MindCraft") is a **Nairobi, Kenya–headquartered consultancy** that combines **four integrated capabilities — Business Consulting, Market Research, AI Training, and AI Enterprise Solutions** — with **deep, founding expertise in Life Sciences** and a **deliberate primary focus on the African continent**, while also serving Europe and the United States. It was **established in 2026**.

Its defining idea (from the Profile, §1): it was founded to close a specific market gap — *the absence of a single trusted partner that combines deep sector expertise with practical, applied AI capability.* MindCraft exists at that intersection: **sector depth × applied AI**, delivered with **African context at a global standard**.

### B. What does MindCraft actually do?
It helps organizations move along a single value chain:

```
UNDERSTAND the market  →  DECIDE the strategy  →  IMPLEMENT with AI  →  EMBED the capability  →  create measurable IMPACT
   Market Research          Business Consulting      AI Enterprise Solns      AI Training
```
(Canonical chain order used everywhere: Market Research → Business Consulting → AI Enterprise Solutions → AI Training → Impact. Note the header tagline/footer signature line preserves the *source* order — "Business Consulting · Market Research · AI Training · AI Enterprise Solutions" — deliberately; see `/specs/18` §3.6.)

The four pillars are **not four vendors** — they are one integrated engagement. Clients "frequently engage MindCraft across two or more pillars simultaneously" (Profile §4). Example arc from the source: *market research informs a business strategy, which is operationalized through an AI enterprise solution, and embedded through an AI training program.* This connective spine is the site's signature idea (see §7).

Concretely, per pillar (full scope in `/specs/06–09`):
- **Business Consulting** — strategy, digital & AI transformation strategy, org design & change, process/systems design, policy & regulatory advisory.
- **Market Research** — primary research, secondary/desk research, program & impact research (MEL), data/analytics & knowledge products.
- **AI Training & Digital Literacy** — foundations & executive briefings, applied function-specific training, responsible/governed AI, capability multiplication (train-the-trainer), flexible delivery formats.
- **AI Enterprise Solutions** — AI strategy & architecture, custom AI/analytics, conversational AI, process automation, and **Life Sciences–specific AI solutions**.

### C. Who is MindCraft for?
Multinational corporations, regional enterprises, public institutions, and development partners (Profile §5):
- Pharmaceutical, medical device, diagnostics & healthcare companies operating in / entering African markets
- Hospitals, hospital groups & private healthcare providers
- Chemical & agrochemical manufacturers and distributors
- Automotive manufacturers, dealers & aftermarket distributors
- Banks, insurers & financial services institutions
- Government ministries, departments & regulatory agencies
- NGOs, international development organizations, UN agencies & donor-funded programs
- Academic & research institutions, startups & innovation hubs

### D. Why does MindCraft exist?
To close the "single trusted partner" gap (sector depth + applied AI). **Vision:** *to be Africa's most trusted partner for AI-powered business growth — recognized globally for combining deep Life Sciences expertise with practical, ethical and impactful AI adoption.* **Mission:** *to equip organizations across Africa, Europe and the US with the market intelligence, strategic advisory and AI capability they need to compete, grow and lead — with a special commitment to advancing Life Sciences enterprises in and around Africa.*

### E. What makes MindCraft different? (Profile §7 — verbatim substance, five differentiators)
1. **Deep Life Sciences heritage** — core expertise, not a generalist add-on → faster onboarding, sharper questions, context from day one.
2. **Pan-African footprint with local fluency** — on-ground knowledge + regulatory/cultural fluency + international standards; rare among both global and purely local firms.
3. **One partner, four integrated capabilities** — research → strategy → AI → training as one coherent engagement, not four disconnected vendors.
4. **Applied, decision-ready outputs** — built for implementation, not theory.
5. **Responsible, governed AI by design** — privacy, ethics, governance embedded; critical for regulated industries.

> **Honesty constraint:** MindCraft was founded in 2026. Credibility comes from *clarity + specialization + methodology + professionalism + domain understanding* — never from fabricated clients, metrics, testimonials, case studies, awards, or partnerships. See §12 and `/specs/25`.

---

## 2. The comprehension ladder (F — what a visitor understands, over time)

The architecture is engineered so understanding accrues at these checkpoints. Every homepage decision is measured against this ladder.

| Time | The visitor should understand… | Delivered by |
|---|---|---|
| **5 s** | "MindCraft is a Nairobi-based consultancy that combines business consulting, market research, AI training and enterprise AI — with deep Life Sciences expertise and an African focus." | Hero: headline + one-line positioning + four-pillar signature line |
| **15 s** | The four capabilities and that they connect into one journey (understand → decide → build → implement → impact). | Hero sub + the "connected capabilities" spine module (scan level) |
| **30 s** | Life Sciences is the *deep* specialization; many other industries are served (breadth); Africa is the primary focus with Europe & US reach. | Life Sciences feature band + industries breadth strip + geography band |
| **1 min** | How the pillars interlock on a real engagement; who MindCraft serves; how an engagement runs. | Value-chain module (explore level) + who-we-serve + how-we-work preview |
| **3 min** | Enough depth in one capability/industry/geography to feel "they understand *my* situation," and exactly how to start a conversation. | Progressive disclosure into pillar/industry/geography detail + the Explorer + Contact |

**The one-sentence test (brief §43):**
- *On landing, they should immediately understand that* **MindCraft is a Nairobi-headquartered consultancy that combines market research, business consulting, AI training and enterprise AI, with deep Life Sciences expertise and Africa as its primary focus.**
- *Within one minute, they should understand that* **MindCraft can take them from a market question through strategy, capability-building and real AI implementation to measurable impact.**
- *If they want to investigate further, they should be able to* **explore any capability, industry (with Life Sciences going deepest), or geography on demand — without reading walls of text.**
- *If they are interested in engaging, they should be able to* **start a conversation from anywhere in two clicks, optionally pre-scoped to their industry, region and need.**

---

## 3. The questions the site must answer (brief §18)

The IA is organized around visitor questions, not corporate headings.

| Visitor question | Answered by |
|---|---|
| What does MindCraft do? | Home + What We Do |
| Can they help *my* industry? | Industries (+ Explorer) |
| Do they *really* understand Life Sciences? | Industries → Life Sciences (deep) |
| Can they help us enter / operate in Africa? | Where We Work (+ Explorer) |
| Can they actually *implement* AI (not just talk)? | What We Do → AI Enterprise Solutions |
| Can they train our people? | What We Do → AI Training |
| Can they help us understand a market? | What We Do → Market Research |
| Can they help us make strategic decisions? | What We Do → Business Consulting |
| Do the capabilities connect, or is it four vendors? | Home spine + What We Do (value chain) |
| How would an engagement actually work? | How We Work |
| Who are they / can I trust a 2026 firm? | About (honest founding-firm framing) |
| Can I talk to them? | Contact (reachable everywhere) |

---

## 4. Content inventory (summary — full matrix in `content-inventory.md`)

The full matrix maps **every material source fact** to a destination, visibility level, and presentation treatment, proving comprehensiveness without text-dumping. Summary of destinations:

| Source cluster | Primary destination | Visibility | Presentation |
|---|---|---|---|
| Positioning / "at a glance" | Home | Primary | Hero + signature line |
| Vision / Mission / Values | About | Secondary | Editorial blocks |
| Founding gap / 2026 / Nairobi HQ | Home (scan) + About (depth) | Primary/Secondary | Positioning + narrative |
| Four pillars + interconnection | Home + What We Do | Primary | Value-chain spine + pillar pages |
| Pillar sub-capabilities + deliverables | Pillar detail pages | On-demand | Accordions / detail panels |
| Life Sciences sub-sectors + focus areas | Industries → Life Sciences | Primary (deep) | Interactive ecosystem + panels |
| Broader + expanded industries | Industries (overview) | Secondary (breadth) | Filterable explorer grid + panels |
| Geographic footprint + African regions/countries | Where We Work | Primary | Regional map/selector + country lists on demand |
| Target clients | How We Work + Home (audience paths) | Secondary | Grouped chips / audience selector |
| Delivery modalities | How We Work | Secondary | Compact list / matrix |
| Differentiators (5) | Home (scan) + How We Work (depth) | Primary | Editorial statements |
| Engagement process (6 stages) | How We Work | Primary | Horizontal process diagram |
| Team & partnerships | About | Secondary | Honest narrative block |
| Contact details | Contact + Footer | Primary | Form + details |

> **Rule of two failures** (`source-traceability.md`): the matrix must prevent **(A)** information loss through over-simplification and **(B)** information dumping through lack of design. Every fact has a deliberate home *and* a deliberate visibility level.

---

## 5. The MindCraft mind map (conceptual model — improved from the brief's starter)

The brief's starter tree separated WHAT / WHERE / WHO. That is a *directory*, not a *story*. The improved model puts the **integrated value chain at the center** and treats industries, geography and clients as the *dimensions* an engagement is filtered through.

```
                         ┌──────────────────────────────────────────┐
                         │   MINDCRAFT — one partner, four powers    │
                         │  sector depth × applied AI, African-rooted │
                         └───────────────────┬──────────────────────┘
                                             │
        ┌────────────────────────────────────┼────────────────────────────────────┐
        │                    THE ENGINE (what we do, as a chain)                    │
        │                                                                           │
        │   MARKET RESEARCH → BUSINESS CONSULTING → AI ENTERPRISE → AI TRAINING     │
        │      (understand)        (decide)          (implement)     (embed)        │
        │                          ↳ loops back to IMPACT & the next question       │
        └───────────────────────────────────┬───────────────────────────────────────┘
                                             │  every engagement is filtered by 3 dimensions
        ┌───────────────────────┬────────────┴────────────┬───────────────────────┐
        │      INDUSTRY         │        GEOGRAPHY          │        AUDIENCE        │
        │  ── Life Sciences ──  │  Africa (primary focus)   │  CxO / Strategy /      │
        │   (DEEP: 6 sub-       │  ▸ East ▸ West ▸ South ▸  │  Commercial / Life-Sci │
        │    sectors, heritage) │    North                  │  / Reg & Access / CIO  │
        │  ── Broader (breadth) │  Europe · United States   │  / HR-L&D / Gov / NGO  │
        │   19 verticals        │                           │  / Academia            │
        └───────────────────────┴───────────────────────────┴───────────────────────┘
                                             │
                          ┌──────────────────┴──────────────────┐
                          │  HOW WE WORK  →  START A CONVERSATION │
                          │  Discovery→…→Follow-up · Delivery     │
                          │  modalities · Differentiators         │
                          └──────────────────────────────────────┘
```

**Why this is better:** it makes the *breadth* (industries × geography) legible *and* keeps the *integration story* (the engine) at the heart — solving the brief's central complaint that the four pillars felt like unrelated cards and that breadth felt like text. The **Explorer** (`/specs/13`) is the interactive expression of "one engine, filtered by three dimensions."

---

## 6. Page architecture (final decision — rationale in `/specs/01`)

Minimum viable page count that communicates the whole company. **13 real routes** + utility. No per-persona pages; no per-industry pages (industries beyond Life Sciences are handled by an explorer, not 20 pages).

| # | Route | Page | Primary question it answers |
|---|---|---|---|
| 1 | `/` | Home | What is MindCraft & what does it do? |
| 2 | `/what-we-do` | Capabilities overview (the engine) | What can they do & how does it connect? |
| 3 | `/what-we-do/business-consulting` | Business Consulting | Can they help us decide? |
| 4 | `/what-we-do/market-research` | Market Research | Can they help us understand a market? |
| 5 | `/what-we-do/ai-training` | AI Training & Digital Literacy | Can they train our people? |
| 6 | `/what-we-do/ai-enterprise-solutions` | AI Enterprise Solutions | Can they actually build/implement AI? |
| 7 | `/industries` | Industries overview | Can they help *my* industry? |
| 8 | `/industries/life-sciences` | Life Sciences (deep) | Do they truly understand Life Sciences? |
| 9 | `/where-we-work` | Geography | Can they help us in Africa / our region? |
| 10 | `/how-we-work` | How We Work (process, delivery, differentiators, who we serve) | How does an engagement run & who do they serve? |
| 11 | `/about` | About (identity, vision, mission, values, heritage, team, partnerships) | Who are they; can I trust a 2026 firm? |
| 12 | `/contact` | Contact | Can I talk to them? |
| 13 | `/explore` | Industry × Geography × Capability Explorer (signature) | Can they help with *my exact* situation? |
| — | `/privacy`, `/terms` | Utility | *Required-future content* — see `/specs/18`, do not fabricate |

Full per-page objective / audience / hierarchy / exclusions / desktop & mobile behavior / relationships is specified in `/specs/03–16`.

---

## 7. The signature idea: capabilities as a connected engine (brief §10)

The single most important structural decision. The four pillars are represented as a **value chain**, not a card grid:

```
   A MARKET QUESTION
        ↓
   MARKET RESEARCH            turn complexity into decision-ready intelligence
        ↓
   BUSINESS CONSULTING        turn intelligence into a strategy & a plan
        ↓
   AI ENTERPRISE SOLUTIONS    operationalize the plan into working systems
        ↓
   AI TRAINING                embed capability so adoption sticks
        ↓
   MEASURABLE IMPACT ──→ informs the next question (the loop)
```

Rules for its expression (detailed in `/specs/21`):
- On **Home** it is a **scan-level** interactive spine: each node is one line; hovering/selecting a node reveals a one-sentence "what happens here."
- On **What We Do** it becomes the page's organizing structure; each node links to its pillar page.
- It must read as **relationships and outcomes**, not categories. Entry point is a *question/outcome*, not a menu.
- It must be honest: entry can happen at any node (clients engage single pillars too — Profile §4 & §6). The chain shows *how they connect*, not that all four are mandatory.

---

## 8. Life Sciences vs. broader industries — different status by design (brief §12–13)

**Life Sciences communicates DEPTH. Everything else communicates BREADTH. That asymmetry is strategic and must be visible.**

- **Life Sciences** — dedicated page (`/industries/life-sciences`), "core expertise / founding heritage" status, an **interactive ecosystem** of the 6 sub-sectors (Pharmaceuticals, Medical Devices, Medical Diagnostics, Medical Equipment, Surgical Consumables, Hospitals & Healthcare Providers), each revealing its *illustrative focus areas* (from Profile §2 table) and relevant capabilities/AI solutions on demand. It also anchors the Life Sciences–specific AI solutions (Profile §4 Pillar 4).
- **Broader industries** — a single **filterable explorer grid** on `/industries` (no standalone pages). Must include **both** the original Profile verticals and the expanded list from `industry-verticals-geography.md`, without losing any:
  - *Original (Profile):* Chemicals, Agrochemicals, Automotive, Banking & Finance
  - *Expanded:* Food & Agribusiness, Beverages, Telecommunications & Technology, Tours/Travel & Hospitality, Financial Services, Energy & Renewable Energy, Construction/Real Estate & Infrastructure, Transport/Logistics & Warehousing, Manufacturing, Mining & Extractives, Healthcare & Wellness, Retail & Consumer Goods, Education & Training, Professional & Business Services, Environmental/Waste & Water Management
- **Category reconciliation (explicit, non-destructive):** *Financial Services* is the broad category; *Banking & Finance* is retained as its source-supported focus within it (do not drop the original). *Healthcare & Wellness* is distinct from clinical *Life Sciences* and sits in the broader grid. No claim of equal depth across all industries — only Life Sciences (and, where source supports it, the four original verticals) carries illustrative focus-area detail; newly-added verticals are presented as served industries with capability mapping, not fabricated depth. See `/specs/10`, `/specs/11`, `/specs/25`.

---

## 9. Geography as an experience (brief §14)

Africa is a strategic position, not an address. Communicate **Nairobi → East Africa → Africa → Global**, with Europe and the US represented.

- A **lightweight interactive regional model** (four African regions) — *not* a giant country text block. Selecting a region reveals its country list on demand.
- Regions and countries **exactly** as given in `industry-verticals-geography.md` (East 10, West 16, Southern 14, North 5) — see `content-inventory.md` for the full lists and `/specs/12` for treatment. The Profile's "particular depth" markets (Kenya, Nigeria, South Africa, Egypt, Ghana, Ethiopia, Tanzania, Uganda, Rwanda, Morocco, Côte d'Ivoire, Zambia) are surfaced as emphasis, honestly labeled as focus markets rather than offices.
- Europe and US get concise, source-accurate framing (who MindCraft serves there and why).
- **No fabricated offices.** HQ is Nairobi; other geographies are *served*, with a growing network of associates/partners (Profile §3, §9).

---

## 10. The Explorer — Industry × Geography × Capability (brief §15, signature)

A restrained "consultancy intelligence interface" (not a gimmick) that lets a visitor compose:

```
   [ INDUSTRY ]  ×  [ GEOGRAPHY ]  ×  [ CAPABILITY ]  →  a focused, source-true response
   e.g. Pharmaceuticals × Kenya × Market Research
   e.g. Financial Services × West Africa × AI Enterprise Solutions
   e.g. Medical Devices × Africa × Business Consulting
```

- Output is composed **only** from source-supported focus areas + pillar scope + geography facts. Where a specific combination has no source-specific detail, it degrades gracefully to the general capability statement for that industry/region — **never fabricates** a case study, metric, or client. See `/specs/13` and `/specs/25`.
- It is the interactive embodiment of the mind map (§5). Home teases it; `/what-we-do` and `/industries` link into it; it lives at `/explore`.
- Lightweight: pure data + client-side filtering. No heavy 3D/WebGL.

---

## 11. Content strategy & governance (brief §8, §21, §41 — full detail in `/specs/02`)

**Principle:** *Show the essential. Let the visitor choose the depth.* The problem was never missing information — it was too much shown at once.

**Disclosure ladder (applied everywhere):**
```
SCAN      one line / one number / one visual        (always visible)
UNDERSTAND  a short editorial statement, 1–3 sentences
EXPLORE    user selects an item (card, node, region, filter)
DETAIL     panel / drawer / accordion / dedicated page reveals depth
ENGAGE     contextual CTA to start a conversation about that item
```

**Content length system (hard limits):**
| Layer | Limit |
|---|---|
| Hero headline | ≤ 9 words |
| Hero supporting line | ≤ 24 words |
| Section heading | 1 short sentence / phrase |
| Section supporting text | 1–3 concise sentences |
| Card | title + one-line explanation (+ optional interaction) |
| Detail panel / drawer | deeper copy, still scannable (bullets, short paras) |
| Dedicated page body | may go substantially deeper, still governed by disclosure |

**Content governance rule (brief §41):** every sentence must do at least one of — explain MindCraft · establish credibility · clarify a capability · clarify an industry · clarify geographic relevance · clarify the engagement model · move toward a relevant action. If it does none, cut it.

---

## 12. Integrity & anti-fabrication (brief §16, §28 — enforced in `/specs/25`)

**Never invent:** client logos/names, testimonials, case studies, revenue, headcount, market statistics, success percentages, projects, awards, certifications, partnerships, years of experience, physical offices beyond Nairobi HQ, "deployed" systems, or quantified outcomes.

**Design anti-slop (brief §16, enforced in `design-principles.md` §"Do Not"):** no glowing purple/blue gradients, abstract AI brains, floating particles, robot imagery, data-stream décor, excessive glassmorphism/neon, glowing spheres, gratuitous 3D, endless rounded cards, everything-in-a-card, generic "AI-powered future" copy, fake dashboards.

**Where numbers would normally go**, use honest substitutes: the four-pillar model, the six Life Sciences sub-sectors, the four African regions + N countries served, the six-stage process, the five differentiators. These are *real, source-supported* structural facts.

---

## 13. Audience paths (brief §19)

No per-persona pages. Instead, a lightweight **audience self-select** (on Home and/or in the Explorer) routes visitors to the most relevant capability/industry entry point. Personas map to destinations:

| Audience | Best first destination |
|---|---|
| CEO / Managing Director | What We Do (the engine) → How We Work |
| Strategy leader | Business Consulting |
| Commercial leader | Market Research + AI Enterprise |
| Life Sciences executive | Life Sciences |
| Regulatory / market-access leader | Life Sciences + Business Consulting (policy/regulatory) |
| CIO / CTO | AI Enterprise Solutions |
| HR / L&D leader | AI Training |
| Government / regulator | How We Work + Business Consulting (policy) |
| NGO / development org | Market Research (program & impact / MEL) |
| Research / academic institution | Market Research + About (partnerships) |

---

## 14. Conversion (brief §35)

- **Primary CTA (site-wide):** **"Start a Conversation."** Consultative, not SaaS ("Sign up"/"Get started" are banned). Alternate context-scoped labels allowed: *"Discuss your challenge," "Talk to us about [industry/region]."*
- **Secondary CTA:** contextual exploration ("Explore capabilities," "See how we work," "Explore your market") — always leads somewhere real (brief §34: no decorative buttons).
- Contact is reachable from the header (persistent), the footer, and contextual end-of-section CTAs. The Explorer's output ends in a pre-scoped "Start a conversation about this" action.

---

## 15. Responsive, performance, accessibility (first-class — `/specs/20`, `/specs/22`, `/specs/23`)

- **Responsive is designed, not retrofitted.** Target widths: 320, 375, 390, 414, 768, 1024, 1280, 1440. Mobile quality = desktop quality. No horizontal overflow, no clipped text, no disappearing content, no broken maps/modals.
- **Performance:** lightweight by default. No WebGL/Three.js/particle systems/large video. Every dependency justifies itself. Maps and the Explorer are data + SVG/CSS, not heavy engines.
- **Accessibility:** semantic HTML, keyboard operability, visible focus, contrast, correct heading order, accessible accordions/modals/drawers/forms, `prefers-reduced-motion` honored, meaningful alt text, ARIA only where needed.

---

## 16. Self-critique checkpoint (brief §46 — to be answered after specs, before code)

Recorded in `/specs/26-qa.md` as a gate. Each must be answerable "yes":
1. Is there still too much content anywhere? Can the homepage explain MindCraft faster?
2. Are there unnecessary pages / repeated information?
3. Is Life Sciences visibly *deeper* than other industries?
4. Is Africa strategically represented (not a country dump)?
5. Is the four-pillar *relationship* obvious (engine, not cards)?
6. Can a visitor explore without reading everything?
7. Does it feel like a serious consultancy, not an AI template?
8. Is anything visually impressive but strategically meaningless? (remove it)
9. Does every page / section / interaction have a reason to exist?
10. Has any source fact been lost, and has any unsupported claim crept in? (cross-check `source-traceability.md`)

---

## 17. Definition of done (this specification phase)

- [x] Both source documents read line-by-line and fully mapped.
- [ ] `content-inventory.md` accounts for every material source fact.
- [ ] `source-traceability.md` proves coverage with no loss and no fabrication.
- [ ] `sitemap.md`, `design-principles.md` complete.
- [ ] `/specs/01–26` complete and internally consistent with this file.
- [ ] Self-critique gate (§16) passed and recorded in `/specs/26`.
- [ ] **Stop for approval before implementation.**
