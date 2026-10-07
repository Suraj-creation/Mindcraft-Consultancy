# 04 — About (`/about`)

> Parents: `requirements.md` (§1 company context, §12 integrity), `design-principles.md` (credibility model for a 2026 firm), `specs/01-information-architecture.md`, `specs/02-content-strategy.md`, `specs/19-design-system.md`, `specs/25-content-integrity.md`.
> Role in IA: the **trust page** for a 2026 firm. Disclosure role: **UNDERSTAND** (editorial narrative). Canonical home for identity, vision, mission, values, founding gap, heritage, team, partnerships (`specs/01` §7).
> All quoted copy is final and length-checked against `specs/02` §3. Citations reference `content-inventory.md` clusters (*CI §n*) and the Profile (*P §n*). Anti-fabrication is strictly enforced (`specs/25`).

---

## 1. Route & meta
- **Route:** `/about`
- **Page title (browser):** `About MindCraft — Nairobi Consultancy` (≤60 chars)
- **Component file:** `src/pages/About.tsx`
- **Nav state:** "About" active.

## 2. Objective / purpose
Build trust in a newly established (2026) firm through **editorial storytelling**, not a corporate essay — telling why MindCraft exists (the founding gap), what it believes (vision, mission, values), where its depth comes from (Life Sciences heritage), how it is structured (core team + growing network), and how it is building partnerships. Credibility comes from clarity, specialization, methodology and honesty — never from fabricated proof (`design-principles.md` credibility model; `specs/25`).

## 3. Primary visitor question(s)
- Who are they, and can I trust a firm founded in 2026?
- Why does MindCraft exist? What gap does it fill?
- What do they believe / stand for (vision, mission, values)?
- Where does their Life Sciences depth come from?
- Who actually does the work (team, network, partnerships)?

## 4. Primary audience
Evaluators doing due diligence before engaging: CEOs/Managing Directors, strategy and Life Sciences executives, procurement/legal reviewers, and development-sector/academic partners assessing credibility (`requirements.md` §13). Also anyone arriving from Home's differentiators wanting the "who are they" story.

## 5. What the visitor should understand (by scan / 1 min)
- **Scan:** MindCraft is a Nairobi-headquartered consultancy founded in 2026 to close a specific market gap — one trusted partner combining deep sector expertise with applied AI; Life Sciences is its heritage; Africa is its primary focus, with Europe and US reach.
- **1 min:** Its vision, mission and five values; that depth is real (Life Sciences heritage) while it is honest about being new (core team + growing associate/partner network; partnerships in progress); and that founding-year clients get senior attention and a partner invested for the long term.

---

## 6. Hero
- **Eyebrow (mono):** `ABOUT · EST. 2026 · NAIROBI, KENYA` (CI §1, P §1)
- **Headline (Fraunces, ≤9 words):** **"Built to close a real gap."** (6 words — the founding-gap idea, P §1)
- **Supporting line (≤24 words):** "MindCraft was founded in 2026 to be the single trusted partner that combines deep sector expertise with practical, applied AI." (20 words; CI §1, P §1)
- **Primary CTA:** `Start a Conversation` → `/contact`
- **Secondary CTA:** `See how we work` → `/how-we-work`

---

## 7. Section sequence

> Editorial storytelling: each section is a short editorial block (≤~90 words per deep-page block, `specs/02` §3), separated by whitespace and hairline rules — not a wall of prose. `source facts covered` cite CI clusters.

### Section 1 — WHO WE ARE (identity)
- **Purpose:** State plainly what MindCraft is and its at-a-glance facts.
- **Heading (≤8 words):** "A Nairobi consultancy with sector depth."
- **Copy (≤90 words):** "MindCraft Consultancy Services is a Nairobi, Kenya–headquartered consultancy. We combine four integrated capabilities — Business Consulting, Market Research, AI Training and AI Enterprise Solutions — for organizations across diversified industries. Our heritage and core expertise are in Life Sciences, and our primary focus is the African continent, with service delivery reaching Europe and the United States." (CI §1; P §1)
- **Component:** `GlanceStrip` of real facts — `Founded 2026 · Nairobi, Kenya · Core expertise: Life Sciences · Africa · Europe · USA · Four integrated pillars`. (Real structural facts in lieu of metrics; CI §1)
- **Interaction:** static; strip facts are non-interactive tags. **CTA:** none (narrative continues).
- **Visual treatment:** editorial header block + horizontal `GlanceStrip` with mono tags and hairline dividers.
- **Source facts covered:** CI §1 (identity, four pillars, Nairobi, 2026, LS core, Africa/Europe/USA); P §1.

### Section 2 — WHY WE EXIST (the founding gap)
- **Purpose:** Tell the origin — the specific gap MindCraft was built to close (the emotional/strategic core of the story). (`requirements.md` §1D)
- **Heading (≤8 words):** "The gap we were built for."
- **Copy (≤90 words):** "Most organizations must choose between consultancies with deep sector knowledge and technologists who can actually build AI — rarely both. MindCraft was founded in 2026 to close that gap: a single, trusted partner that pairs deep sector expertise with practical, applied artificial intelligence. We sit at that intersection — sector depth × applied AI — delivered with African context at a global standard." (CI §1; P §1)
- **Component:** `OriginNarrative` — an editorial pull-statement (Fraunces) with a mono annotation ("sector depth × applied AI").
- **Interaction:** static. **CTA:** none.
- **Visual treatment:** asymmetric editorial grid (wide statement + narrow mono annotation); optional single accent rule. No decoration.
- **Source facts covered:** CI §1 (founding gap, 2026, intersection positioning); P §1.

### Section 3 — VISION & MISSION
- **Purpose:** State what MindCraft aims for and how — retaining every distinct source claim (`specs/25` §5).
- **Heading (≤8 words):** "Our vision and mission."
- **Vision copy (condensed, all claims retained):** "To be Africa's most trusted partner for AI-powered business growth — recognized globally for combining deep Life Sciences expertise with practical, ethical and impactful AI adoption." (retains: Africa's most-trusted; global recognition; LS depth; practical + ethical + impactful AI. CI §2; P §1)
- **Mission copy (condensed, all claims retained):** "To equip organizations across Africa, Europe and the United States with the market intelligence, strategic advisory and AI capability they need to compete, grow and lead — with a special commitment to advancing Life Sciences enterprises in and around Africa." (retains: Africa/Europe/US scope; the three capabilities; LS commitment. CI §2; P §1)
- **Component:** two `EditorialBlock`s (Vision / Mission), each mono-labeled.
- **Interaction:** static. **CTA:** none.
- **Visual treatment:** two stacked editorial blocks with mono eyebrows `VISION` / `MISSION`; generous whitespace; serif for the statements.
- **Source facts covered:** CI §2 (vision, mission); P §1. Condensed, not distorted (`specs/25` §5).

### Section 4 — WHAT WE VALUE (five values)
- **Purpose:** Present the five core values as tight one-liners (condensed, not dumped).
- **Heading (≤8 words):** "Five values that shape our work."
- **Component:** `ValueList` — five items, each title ≤5 words + one line ≤16 words:
  1. **Sector depth** — "Advice grounded in real industry knowledge, not generic frameworks."
  2. **Applied rigor** — "Research and AI outputs that are decision-ready, not academic."
  3. **African context, global standard** — "World-class consulting delivered with authentic local understanding."
  4. **Responsible AI** — "Every solution built on data privacy, ethics and governance."
  5. **Client partnership** — "Long-term relationships built on measurable, repeatable value."
- **Interaction:** static one-liners. **CTA:** none.
- **Visual treatment:** hairline-separated list with mono numerals `01–05` in accent; no cards.
- **Source facts covered:** CI §2 (five values); P §1. All five retained, condensed.

### Section 5 — WHERE OUR DEPTH COMES FROM (Life Sciences heritage)
- **Purpose:** Explain that Life Sciences depth is real and founding — the credibility anchor — and link to the deep LS page.
- **Heading (≤8 words):** "Life Sciences is our founding heritage."
- **Copy (≤90 words):** "Life Sciences is where MindCraft began and where our depth runs deepest. Our consultants, researchers and AI solution architects bring direct working knowledge of clinical, regulatory, market-access and commercial dynamics — across pharmaceuticals, medical devices, diagnostics, equipment, surgical consumables, and hospitals. That heritage means faster onboarding, sharper questions, and recommendations grounded in real context from day one." (CI §1, §3; P §1, §2, §7-1)
- **Component:** editorial block + mono sub-sector tag row (names only; depth lives on `/industries/life-sciences`).
- **Interaction:** static; sub-sector names link to the LS page. **CTA:** `Explore Life Sciences` → `/industries/life-sciences`.
- **Visual treatment:** editorial block with an accent rule to signal elevated status; mono sub-sector tags.
- **Source facts covered:** CI §1 (LS core/heritage), CI §3 (six sub-sectors — names), CI §10 (differentiator 1); P §1, §2, §7.

### Section 6 — AFRICAN FOCUS, GLOBAL REACH
- **Purpose:** Frame geography as identity — Nairobi-rooted, African-focused, globally fluent — and link to Where We Work.
- **Heading (≤8 words):** "Rooted in Africa, fluent globally."
- **Copy (≤90 words):** "From our Nairobi headquarters we combine on-the-ground market knowledge with international consulting standards. Africa is our primary focus — we maintain engagement capability across all African countries — while we also serve clients in Europe and the United States. This lets us help organizations navigate complex, fast-evolving and often under-researched markets with both local insight and global rigor." (CI §1, §6; P §1, §3, §7-2)
- **Component:** editorial block + compact geo reference (Africa · Europe · United States mono tags); no map here (map is on `/where-we-work`).
- **Interaction:** static; tags link to `/where-we-work`. **CTA:** `Explore where we work` → `/where-we-work`.
- **Visual treatment:** editorial block; optional subtle coordinate motif (`aria-hidden`).
- **Source facts covered:** CI §1, §6 (Nairobi HQ; Africa primary; all African countries; Europe; US), CI §10 (differentiator 2); P §1, §3. No fabricated offices.

### Section 7 — HOW WE ARE STRUCTURED (team model)
- **Purpose:** Present the team honestly — core team + growing network — with no invented people or bios (`specs/25` §3).
- **Heading (≤8 words):** "A core team, a wider network."
- **Copy (≤90 words):** "MindCraft is built around a core team of consulting, market-research and AI/technology professionals with direct experience across Life Sciences and diversified industries in African, European and US markets. This core is supported by a growing network of associate consultants, subject-matter experts and in-country research partners across Africa — so we can scale multi-country, multi-sector engagements while keeping quality and methodology consistent." (CI §12; P §9)
- **Component:** `TeamNarrative` + subtle `NetworkMotif` (line/coordinate network diagram, `aria-hidden`) — **no photos, no named bios.**
- **Interaction:** static. **CTA:** none.
- **Visual treatment:** editorial block beside a restrained hairline network motif (nodes = associates/partners, abstract, not people).
- **Source facts covered:** CI §12 (core team + growing network across Africa/Europe/US); P §9. No fabricated named team members.

### Section 8 — PARTNERSHIPS IN PROGRESS (honest new-firm framing)
- **Purpose:** State partnership-building as *in progress* and frame founding-year value honestly (`specs/25` §3).
- **Heading (≤8 words):** "Partnerships we are actively building."
- **Copy (≤90 words):** "As a firm founded in 2026, MindCraft is actively building formal academic, technology and industry-association partnerships to strengthen our research infrastructure, AI capability and reach across priority African markets. Clients who engage us in these founding years benefit from senior-level attention, competitive terms, and a partner genuinely invested in building a long-term track record of impact." (CI §12; P §9)
- **Component:** `PartnershipNote` — text only; **no partner logos or names** (they do not yet exist; `specs/25` §3).
- **Interaction:** static. **CTA:** none.
- **Visual treatment:** editorial note; mono label `IN PROGRESS`; no logo wall.
- **Source facts covered:** CI §12 (building partnerships; founding-year value framing); P §9. No fabricated partners.

### Section 9 — CLOSING / CONVERSION (ink band + brand line)
- **Purpose:** Convert trust into a conversation; no dead end (`specs/01` §5).
- **Heading (≤8 words):** "Let's build something that lasts."
- **Copy (1 sentence):** "If our approach fits your challenge, we'd like to hear from you." (honest; no promise of metrics)
- **Brand line (source verbatim allowed):** "Building AI-powered growth for Life Sciences and industry across Africa and beyond." (CI §13; P closing)
- **Interaction:** primary CTA → `/contact`; secondary → `/how-we-work`. **CTA:** `Start a Conversation` · `See how we work`.
- **Visual treatment:** deliberate **ink band** (`--color-ink-bg`, on-ink text, accent CTA) — the one ink band on this page (`specs/19` §2).
- **Source facts covered:** CI §13 (contact intent, brand line); P §10, closing.

> **Footer** (global, `specs/18`) follows.

---

## 8. Interactive elements / components used (from `specs/19`)
- `Hero`, `Eyebrow`, `Button`.
- `GlanceStrip` (Section 1 — real-fact strip).
- `OriginNarrative` / `EditorialBlock` (Sections 2, 3, 5, 6).
- `ValueList` (Section 4).
- Mono sub-sector `Tag`s (Section 5), geo `Tag`s (Section 6).
- `TeamNarrative` + `NetworkMotif` (Section 7).
- `PartnershipNote` (Section 8).
- Ink band + `BrandLine` + `Button` (Section 9).
About is intentionally low-interaction (editorial UNDERSTAND level) — no accordions, selectors, or maps.

## 9. Progressive-disclosure mapping
- **SCAN:** hero, section headings, `GlanceStrip` facts, value titles, sub-sector names.
- **UNDERSTAND (always visible):** the editorial blocks (this page's core layer — it is an UNDERSTAND page).
- **EXPLORE / DETAIL (leaves About):** links out to `/industries/life-sciences` (LS depth), `/where-we-work` (geography detail), `/how-we-work` (process/delivery/differentiator depth). About itself holds no accordions or on-demand detail — its purpose is the narrative.
- **ENGAGE:** hero + closing CTAs, persistent header.

## 10. Content deliberately EXCLUDED (and why)
- **Pillar sub-capabilities / deliverables** — canonical home is pillar pages; About references capabilities by name only (no duplication; `specs/01` §7).
- **Six-stage process detail** — canonical home is How We Work; About links there (avoid thin repetition).
- **Country lists / regional selector / map** — canonical home is Where We Work; About carries geography as identity, not a directory.
- **Named team members, bios, photos** — none exist and none may be invented (`specs/25` §3).
- **Partner names / logos** — partnerships are in progress; no logo wall (`specs/25` §3).
- **Any metric, client, testimonial, case study, award, "years of experience," "proven"** — prohibited (`specs/25` §2). Founding-year value framing is allowed because it is source-supported and honest.

## 11. Desktop behavior
- Sticky `Header` + persistent CTA.
- Editorial single-column reading measure (`--container-text` ~720px) for narrative blocks; asymmetric grid for the founding-gap statement (wide statement + narrow annotation) and the team section (narrative + network motif).
- Section rhythm `--space-10/11`; hairline rules and mono eyebrows separate sections; whitespace-led, no boxing.
- One deliberate ink band (closing). Scroll-reveal fade+translate ≤12px.

## 12. Mobile behavior (320–414px)
- Header → hamburger full-screen menu; CTA pinned.
- Single column; section rhythm `--space-8/9`; reading measure full width with comfortable gutters.
- `GlanceStrip` wraps to a two-column tag list; `ValueList` stacks; team `NetworkMotif` scales down or is hidden if it would crowd (decorative, `aria-hidden`), narrative always retained.
- CTAs full-width, 44px; no horizontal overflow at 320px.

## 13. Internal links / relationship to other pages
- **Outbound:** `/industries/life-sciences` (Section 5), `/where-we-work` (Section 6), `/how-we-work` (hero secondary + closing), `/contact` (hero + closing + header).
- **Inbound (typical):** Home differentiators/founding facts, footer "Company" group, How We Work (trust → depth).
- **Role:** the trust anchor (`sitemap.md` relationships: About → How We Work + Contact). No dead ends.

## 14. SEO metadata (source-accurate)
- **`<title>` (≤60):** `About MindCraft — Nairobi Consultancy` (37 chars)
- **Meta description (150–160):** "MindCraft is a Nairobi consultancy founded in 2026 to pair deep Life Sciences expertise with applied AI across Africa, Europe and the United States." (150 chars)
- **Single `<h1>`:** "Built to close a real gap." (hero headline)
- **Heading order:** H1 (hero) → H2 per section → H3 for value titles. No skipped levels.
- **OG title:** "About MindCraft Consultancy Services"
- **OG description:** "Why MindCraft exists: one trusted partner combining sector depth with applied AI — Life Sciences heritage, Nairobi HQ, African focus, global reach."
- No fabricated schema (no founding-date claims beyond 2026; no fake ratings/awards).

## 15. Conversion objective
Convert evaluated trust into a conversation. Primary: `Start a Conversation` → `/contact` (hero + closing). Secondary: deepen confidence via `/how-we-work`, `/industries/life-sciences`, or `/where-we-work`. Success = a due-diligence visitor leaves understanding *why* MindCraft exists and *why a 2026 firm is credible*, then contacts or explores depth.

## 16. Acceptance criteria
- [ ] Reads as **editorial storytelling** (origin → beliefs → depth → structure), not a corporate essay or digitized PDF.
- [ ] Founded **2026** and **Nairobi HQ** stated plainly; no implication of longevity or "years of experience."
- [ ] The **founding gap** (sector depth × applied AI, single trusted partner) is the narrative core.
- [ ] Vision and Mission retain **every distinct source claim** (Africa's most-trusted; global recognition; LS depth; ethical + practical + impactful AI / Africa-Europe-US scope; LS commitment) — verified against `specs/25` §5.
- [ ] All **five values** present as tight one-liners; none dropped, none dumped.
- [ ] Life Sciences heritage framed as **real and founding**; links to the deep LS page.
- [ ] African focus + global reach framed as **identity**, not a directory; no country dump; no offices beyond Nairobi.
- [ ] Team presented honestly (**core team + growing network**) with **no named people, bios, or photos**.
- [ ] Partnerships presented as **in progress**; **no partner logos or names**.
- [ ] Zero fabrication: no clients, testimonials, case studies, metrics, awards, or "proven"/numeric-result language (`specs/25` §2).
- [ ] All copy within `specs/02` §3 limits (hero headline ≤9; supporting ≤24; headings ≤8; value lines ≤16; deep blocks ≤~90 words).
- [ ] Exactly one `<h1>`; logical heading order; meta title ≤60; description 150–160 chars.
- [ ] Closing routes to Contact (and How We Work) — no dead end; persistent header CTA present.
- [ ] Fully usable and overflow-free at 320px; decorative network motif `aria-hidden`; `prefers-reduced-motion` honored.
