# 05 — What We Do / Capabilities Overview (`/what-we-do`)

> Parents: `requirements.md` (§7 the engine, §1B value chain), `design-principles.md`, `sitemap.md`, `specs/01-information-architecture.md`, `specs/02-content-strategy.md`, `specs/19-design-system.md`, `specs/25-content-integrity.md`.
> Role in IA: **"The Integrated Engine"** — the unifying overview for the four capabilities. Disclosure role: **UNDERSTAND + EXPLORE**.
> Visual-First Requirement: Interactive value-chain spine, structural synergy diagrams, comparison matrix, and seamless subpage navigation.

---

## 1. Route & Meta
- **Route:** `/what-we-do`
- **Page title (browser):** `What We Do — Integrated Capabilities | MindCraft`
- **Component file:** `src/pages/WhatWeDo.tsx`
- **Nav state:** "What We Do" active (parent of the four pillar subpages).

---

## 2. Objective & Purpose
Present MindCraft's four core disciplines not as separate service silos, but as **one integrated value engine**:
`Market Research → Business Consulting → AI Enterprise Solutions → AI Training → Measurable Impact (Closed Loop)`.
The visitor grasps how each capability reinforces the others, inspects the 4 pillar cards, and effortlessly navigates to the specialized subpages or to the 3-way `/explore` composer.

---

## 3. Structural Section Stack (Derived from Sitemap)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                   01. NAVBAR                                     │
├──────────────────────────────────────────────────────────────────────────────────┤
│                       02. HERO / CAPABILITY POSITIONING                          │
├──────────────────────────────────────────────────────────────────────────────────┤
│                            03. THE INTEGRATED ENGINE                             │
├──────────────────────────────────────────────────────────────────────────────────┤
│                       04. HOW THE CAPABILITIES CONNECT                           │
├──────────────────────────────────────────────────────────────────────────────────┤
│                            05. CAPABILITY EXPLORER                               │
├──────────────────────────────────────────────────────────────────────────────────┤
│                 06. INDUSTRY × GEOGRAPHY × CAPABILITY LINK                       │
├──────────────────────────────────────────────────────────────────────────────────┤
│                    07. WHY THE INTEGRATED MODEL MATTERS                          │
├──────────────────────────────────────────────────────────────────────────────────┤
│                            08. START A CONVERSATION                              │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                   09. FOOTER                                     │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Section Specifications

### Section 01 — NAVBAR
- Persistent navigation header with What We Do mega-menu disclosure.

---

### Section 02 — HERO / CAPABILITY POSITIONING
- **Eyebrow (mono):** `WHAT WE DO · UNIFIED ADVISORY & APPLIED AI`
- **Display Headline:** "One engine, from inquiry to operational impact."
- **Supporting Statement (≤24 words):** "Market research, business consulting, enterprise AI solutions, and executive AI training functioning as one continuous value chain."
- **Primary Action:** `Explore the Engine` (scroll cue) · `Start a Conversation` (`/contact`).

---

### Section 03 — THE INTEGRATED ENGINE (The Value Chain Spine)
- **Eyebrow (mono):** `01 — VALUE ENGINE`
- **Headline:** "How our four capabilities create continuous value."
- **Visual Architecture:** Interactive horizontal `ValueChainSpine` displaying 5 sequential nodes looping back:
  1. **Market Research (Understand):** "Turn market complexity into empirical, decision-ready intelligence."
  2. **Business Consulting (Decide):** "Translate market intelligence into actionable corporate strategy and operating models."
  3. **AI Enterprise Solutions (Implement):** "Operationalize strategy into robust, secure software systems and automated workflows."
  4. **AI Training & Digital Literacy (Embed):** "Upskill executive teams and workforce champions to ensure enduring adoption."
  5. **Measurable Business Impact (Evolve):** "Operational gains shape the next strategic questions — closing the continuous loop."
- **Interaction:** Clicking any node reveals operational inputs, typical outputs, and a direct link to the respective pillar subpage.

---

### Section 04 — HOW THE CAPABILITIES CONNECT (Cross-Pillar Handoffs)
- **Eyebrow (mono):** `02 — SYSTEMIC INTEGRATION`
- **Headline:** "From one question to compound institutional impact."
- **Visual Component:** Concrete engagement journey walkthroughs demonstrating real handoffs:
  - *Journey A: Market Entry to Automated Operations:* Research sizes the market → Strategy designs the operating model → AI automates local distribution.
  - *Journey B: Clinical AI Adoption:* Research evaluates physician workflows → AI Solutions engineers diagnostic assistance → AI Training trains clinical staff.
- **Visual Design:** Step progression cards connected with directional arrows and data flow tags.

---

### Section 05 — CAPABILITY EXPLORER (The 4 Pillar Subpages)
- **Eyebrow (mono):** `03 — DISCIPLINE DIRECTORY`
- **Headline:** "Inspect our specialized practices."
- **Visual Architecture:** 4 authoritative pillar feature cards with direct subpage links:
  1. **Business Consulting (`/what-we-do/business-consulting`):**
     - Scope: Corporate Strategy · Digital/AI Transformation · Organizational Design · Process Optimization · Regulatory Advisory.
     - Action: `Explore Business Consulting →`
  2. **Market Research (`/what-we-do/market-research`):**
     - Scope: Primary Quantitative & Qualitative Research · Desk Intelligence · Program & Impact Evaluation · Data Products.
     - Action: `Explore Market Research →`
  3. **AI Training & Digital Literacy (`/what-we-do/ai-training`):**
     - Scope: Executive AI Briefings · Function-Specific Workflows · Responsible AI Governance · AI Champions Network.
     - Action: `Explore AI Training →`
  4. **AI Enterprise Solutions (`/what-we-do/ai-enterprise-solutions`):**
     - Scope: Private Cloud Architecture · Predictive Analytics · Conversational Agents · RPA · Life Sciences AI.
     - Action: `Explore AI Solutions →`

---

### Section 06 — INDUSTRY × GEOGRAPHY × CAPABILITY LINK (The Explorer Bridge)
- **Eyebrow (mono):** `04 — DYNAMIC SYNTHESIS`
- **Headline:** "Compose your exact challenge."
- **Visual Component:** Highlighting the interactive 3-slot matrix composer:
  - Connects What We Do directly with `/explore`.
  - Copy: "See how these four capabilities apply to your specific sector and geographic market in Africa or globally."
- **Action:** `Launch the Interactive Explorer →` (`/explore`).

---

### Section 07 — WHY THE INTEGRATED MODEL MATTERS (Comparison Matrix)
- **Eyebrow (mono):** `05 — STRATEGIC ADVANTAGE`
- **Headline:** "Why an integrated model outperforms fragmented vendors."
- **Visual Component:** Scannable 2-column comparative analysis table:
  - *Fragmented Multi-Vendor Approach:* Handoff friction, lost context between research and tech build, uncoordinated training, high overhead.
  - *The MindCraft Integrated Model:* Single institutional memory, strategy informed by empirical data, software designed for immediate user adoption, unified accountability.

---

### Section 08 — START A CONVERSATION (Scoped Capability Inquiry)
- **Headline:** "Discuss an integrated or single-pillar engagement."
- **Supporting Copy:** "Whether you need a full strategic transformation or targeted research, our senior partners are ready to engage."
- **CTA:** `Start a Conversation` (`/contact`).

---

### Section 09 — FOOTER
- Global structural directory.
