# 03 — Homepage (`/`)

> Parents: `requirements.md`, `design-principles.md`, `sitemap.md`, `specs/01-information-architecture.md`, `specs/02-content-strategy.md`, `specs/19-design-system.md`, `specs/25-content-integrity.md`.
> Role in IA: The foundational **editorial hub**. Disclosure role: **SCAN + UNDERSTAND**. Owns the 5s–30s comprehension ladder, previews every canonical branch, and routes visitors cleanly to depth.
> Visual-First Requirement: Prioritize diagrams, visual timelines, interactive selectors, and scannable metrics over dense text walls.

---

## 1. Route & Meta
- **Route:** `/`
- **Page title (browser):** `MindCraft Consultancy Services — Nairobi, Kenya`
- **Component file:** `src/pages/Home.tsx` (or orchestrated in `App.tsx`)
- **Nav state:** "Home" active.

---

## 2. Objective & Comprehension Ladder

1. **At 5 seconds (Hero):** The visitor instantly understands that MindCraft is a Nairobi-headquartered advisory firm combining business strategy, market intelligence, AI systems, and AI training — with deep Life Sciences heritage and an African geographic center.
2. **At 15 seconds (Engine & Capabilities):** The visitor grasps that these four capabilities function as one connected value loop from initial market question to sustained operational impact.
3. **At 30 seconds (Life Sciences & Continental Reach):** The visitor recognizes that Life Sciences is our foundational core (not an afterthought) and that our footprint spans the African continent with active corridors to Europe and the US.
4. **At 60 seconds (Interactive Exploration & Process):** The visitor explores their exact combination of needs via the interactive composer, inspects our structured 6-stage delivery model, reviews curated insights, and initiates a conversation.

---

## 3. Structural Section Stack (Derived from Sitemap)

The homepage consists of 10 structured content sections, framed by the global Navbar and Footer:

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                   01. NAVBAR                                     │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                    02. HERO                                      │
├──────────────────────────────────────────────────────────────────────────────────┤
│                           03. INTEGRATED CAPABILITIES                            │
├──────────────────────────────────────────────────────────────────────────────────┤
│                           04. HOW THE ENGINE CONNECTS                            │
├──────────────────────────────────────────────────────────────────────────────────┤
│                           05. LIFE SCIENCES HERITAGE                             │
├──────────────────────────────────────────────────────────────────────────────────┤
│                             06. AFRICA AT THE CENTER                             │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                  07. EXPLORE                                     │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                08. HOW WE WORK                                   │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                09. WHO WE SERVE                                  │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                  10. INSIGHTS                                    │
├──────────────────────────────────────────────────────────────────────────────────┤
│                            11. START A CONVERSATION                              │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                   12. FOOTER                                     │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Section Specifications

### Section 01 — NAVBAR (Global Persistent Header)
- **Purpose:** Provide persistent brand anchor, primary wayfinding, and quick conversion trigger.
- **Visual Components:** Typographic wordmark `MindCraft`, 8 primary nav links (`Home`, `About`, `What We Do ▾`, `Industries ▾`, `Where We Work`, `How We Work`, `Explore`, `Insights`), and high-contrast CTA button `Start a Conversation`.
- **Interactions:** Dropdown reveals on hover/focus; hamburger menu trigger on mobile viewports.

---

### Section 02 — HERO (The Founding Thesis)
- **Eyebrow (mono):** `NAIROBI, KENYA · EST. 2026 · ADVISORY & APPLIED AI`
- **Display Headline:** "Sector depth, meet applied AI."
- **Supporting Thesis (concise, ≤24 words):** "A Nairobi-based consultancy uniting market research, business strategy, enterprise AI, and executive training — anchored in Life Sciences and built for Africa."
- **Visual Signature Array:** 4 mono coordinate tags:
  `Business Consulting · Market Research · AI Training · AI Enterprise Solutions`
- **Actions:**
  - Primary CTA: `Start a Conversation` (triggers modal or navigates to `/contact`).
  - Secondary CTA: `Explore Capabilities` (navigates to `/what-we-do`).
- **Visual Treatment:** Warm editorial paper background (`#FBF9F4`), deep carbon typography, subtle hairline grid accents, and Nairobi coordinates (`-1.2921° S, 36.8219° E`).

---

### Section 03 — INTEGRATED CAPABILITIES (The Four Pillars)
- **Eyebrow (mono):** `01 — CAPABILITY SUITE`
- **Headline:** "Four disciplines. One unified advisory partner."
- **Visual Architecture:** 4 interactive pillar cards arranged horizontally (or responsive 2x2 grid):
  1. **Market Research:** Primary fieldwork, desk intelligence, impact evaluation & knowledge products.
  2. **Business Consulting:** Corporate strategy, digital transformation, organizational design & policy advisory.
  3. **AI Training & Digital Literacy:** Executive AI foundations, functional workflows, governance & AI champions.
  4. **AI Enterprise Solutions:** Private AI architecture, predictive analytics, conversational agents & process automation.
- **Visual Features:** Lucide icon accents, mono indexing (`[01]` to `[04]`), and direct links to dedicated subpages.

---

### Section 04 — HOW THE ENGINE CONNECTS (The Value Chain Loop)
- **Eyebrow (mono):** `02 — VALUE ARCHITECTURE`
- **Headline:** "How the engine turns inquiry into impact."
- **Visual Component:** Interactive `ValueChainSpine` rendered as a continuous horizontal rail:
  - **Node 01: The Market Question:** Formulation of core strategic or commercial uncertainty.
  - **Node 02: Market Research:** Empirical validation, sizing, and stakeholder discovery.
  - **Node 03: Business Consulting:** Translation into actionable strategy, target operating models, and roadmaps.
  - **Node 04: AI Enterprise Solutions:** Custom model deployment, data integration, and workflow automation.
  - **Node 05: AI Training & Literacy:** Capability transfer, human adoption, and executive governance.
  - **Node 06: Measurable Impact:** Operational efficiencies, margin expansion, and new market capture (loops back to new questions).
- **Interactions:** Selecting or hovering any node reveals a concise explanatory dossier and highlights cross-node data flows.

---

### Section 05 — LIFE SCIENCES HERITAGE (Foundational Clinical Depth)
- **Eyebrow (mono):** `03 — FOUNDATIONAL DEPTH`
- **Headline:** "Life Sciences is our foundational heritage."
- **Supporting Statement:** "Clinical fluency, regulatory rigor, and commercial acumen embedded into every advisory mandate."
- **Visual Component:** 6 structured domain badges with specialized clinical metadata:
  - *Pharmaceuticals & Biologics*
  - *Medical Devices & Diagnostics*
  - *Healthcare Providers & Hospital Networks*
  - *Public Health & Global Health Programs*
  - *Biotechnology & Clinical Research*
  - *Digital Health & Telemedicine Ecosystems*
- **Action:** `Explore Life Sciences Specialization →` (routes to `/industries/life-sciences`).

---

### Section 06 — AFRICA AT THE CENTER (Geographic Strategic Nexus)
- **Eyebrow (mono):** `04 — GEOGRAPHIC FOOTPRINT`
- **Headline:** "Centered in Nairobi. Active across the continent."
- **Visual Component:** Interactive cartographic footprint displaying:
  - **Global Headquarters:** Nairobi, Kenya (Innovation hub, research desk, and advisory core).
  - **Pan-African Execution:** East Africa (Kenya, Uganda, Tanzania, Rwanda), West Africa (Nigeria, Ghana, Senegal), Southern Africa (South Africa, Zambia), and North Africa (Egypt, Morocco).
  - **Global Corridors:** Direct engagement channels into European and North American markets.
- **Action:** `View Geographic Reach →` (routes to `/where-we-work`).

---

### Section 07 — EXPLORE (Interactive 3-Slot Composer)
- **Eyebrow (mono):** `05 — INTERACTIVE COMPOSER`
- **Headline:** "Compose your exact challenge."
- **Visual Component:** Compact 3-way selector preview:
  `[ Select Industry ]  ×  [ Select Geography ]  ×  [ Select Capability ]`
- **Dynamic Feedback:** Generates an immediate preview synthesis showing how MindCraft approaches that exact permutation, accompanied by a direct button to launch the full `/explore` composer.

---

### Section 08 — HOW WE WORK (The 6-Stage Delivery Lifecycle)
- **Eyebrow (mono):** `06 — DELIVERY METHODOLOGY`
- **Headline:** "A disciplined, senior-led engagement lifecycle."
- **Visual Component:** Horizontal 6-stage progression rail:
  1. *01. Discovery & Diagnostics*
  2. *02. Strategic Formulation*
  3. *03. Architecture & Systems Design*
  4. *04. Collaborative Implementation*
  5. *05. Knowledge Transfer & Enablement*
  6. *06. Continuous Impact Evaluation*
- **Action:** `Learn About Our Process →` (routes to `/how-we-work`).

---

### Section 09 — WHO WE SERVE (Target Client Archetypes)
- **Eyebrow (mono):** `07 — CLIENT ARCHETYPES`
- **Headline:** "Built for leaders navigating high-stakes change."
- **Visual Component:** Interactive role-based routing matrix:
  - *Chief Executive Officers & Board Directors*
  - *Chief Technology & Information Officers*
  - *Commercial & Market Access Leaders*
  - *Heads of Strategy & Corporate Development*
  - *Chief People & Learning Officers*
  - *Regulators, Ministries & Multilateral Agencies*
- **Interactions:** Clicking any archetype presents tailored challenges, typical engagement scopes, and relevant starting routes.

---

### Section 10 — INSIGHTS (Editorial Perspectives & Intelligence)
- **Eyebrow (mono):** `08 — STRATEGIC INTELLIGENCE`
- **Headline:** "Perspectives from the intersection of industry and AI."
- **Visual Component:** Curated 3-card editorial grid:
  - *Briefing 01: "AI in African Life Sciences: Overcoming Regulatory Fragmentation"*
  - *Briefing 02: "Building Sovereign Enterprise AI Systems in Emerging Markets"*
  - *Briefing 03: "Commercial Strategy in East African Healthcare 2026–2030"*
- **Visual Details:** Category badges, estimated reading times, publication dates, and author bylines.
- **Action:** `Read All Insights →` (routes to `/insights`).

---

### Section 11 — START A CONVERSATION (Conversion Terminal)
- **Eyebrow (mono):** `09 — ENGAGEMENT DESK`
- **Headline:** "Initiate an advisory conversation."
- **Visual Treatment:** Rich, immersive dark carbon ink band (`#1A1816` background, `#FBF9F4` typography, terracotta accents).
- **Interactive Component:** Direct pre-scoped consultation dispatch or modal trigger, supported by direct contact coordinates:
  - Headquarters: Nairobi, Kenya
  - Direct Advisory Inquiries: `info@mindcraftconsultancy.com`
  - Response SLA: Senior partner acknowledgment within 24 business hours.

---

### Section 12 — FOOTER (Global Structural Directory)
- **Visual Architecture:** 5-column directory grouping Capabilities, Industries, Geography, Institutional Credentials, and Legal/Utility policies, concluding with the copyright and official Nairobi address.
