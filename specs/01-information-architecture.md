# 01 — Information Architecture

> Parent: `requirements.md` (§5 mind map, §6 page architecture, §7 the engine). At-a-glance reference: `sitemap.md`.
> This specification defines the organizational rationale, canonical navigation model, page inventory, and visual-first interaction rules across MindCraft's digital ecosystem.

---

## 1. Organizing Principle

MindCraft's architecture is organized around a foundational thesis:
**An integrated delivery engine, filtered across three strategic dimensions, validated through intellectual authority, and resolved in direct human conversation.**

1. **The Integrated Engine (What We Do):**
   `Market Research → Business Consulting → AI Enterprise Solutions → AI Training → Measurable Impact (Closed Loop)`.
   Rather than four disconnected vendor silos, capability pillars interlock to take clients from initial market uncertainty to operationalized, embedded intelligence.
2. **Three Strategic Dimensions (How Engagements are Scoped):**
   - **Industry Vertical:** Deepest in Life Sciences (asymmetric foundational core), spanning 20+ diversified economic sectors.
   - **Geography:** Centered in Nairobi, Kenya, with pan-African execution (East, West, Southern, North) and verified corridors to Europe and the United States.
   - **Capability Need:** Scoped flexibly across strategy, quantitative intelligence, custom software systems, and executive capability transfer.
3. **Intellectual Authority & Trust (Why & How We Deliver):**
   - **About:** Transparent 2026 founding narrative, bridging sector depth with applied AI; vision, mission, and senior partner pedigree.
   - **How We Work:** Structured 6-stage lifecycle, transparent engagement modalities, and institutional governance.
   - **Insights:** Rigorous editorial intelligence and research briefings establishing continental market authority.
4. **Interactive Synthesis & Action:**
   - **Explore:** The interactive embodiment of the 3-way matrix (`Industry × Geography × Capability`), generating tailored advisory syntheses.
   - **Contact (Start a Conversation):** Frictionless conversion, accepting pre-scoped parameters from any node in the journey.

---

## 2. Canonical Page Inventory

| Route | Page Name | Disclosure Role | Primary Function & Strategic Purpose |
|---|---|---|---|
| `/` | **Home** | SCAN + UNDERSTAND | Editorial hub; owns the 5s–30s comprehension ladder; previews all capabilities and routes visitors seamlessly to depth. |
| `/about` | **About** | UNDERSTAND | Institutional trust; details the 2026 founding gap, Life Sciences heritage, vision/mission, and leadership network. |
| `/what-we-do` | **What We Do** | UNDERSTAND + EXPLORE | The unified engine; illustrates the value chain, cross-pillar integration, and systemic methodology. |
| `/what-we-do/business-consulting` | **Business Consulting** | DETAIL | Pillar 1: Corporate strategy, digital transformation, organizational design, process systems, and regulatory policy. |
| `/what-we-do/market-research` | **Market Research** | DETAIL | Pillar 2: Primary research, secondary intelligence, program impact evaluation, and decision-ready data products. |
| `/what-we-do/ai-training` | **AI Training & Digital Literacy** | DETAIL | Pillar 3: Executive AI literacy, function-specific enablement, responsible AI governance, and champion mentorship. |
| `/what-we-do/ai-enterprise-solutions` | **AI Enterprise Solutions** | DETAIL | Pillar 4: AI systems architecture, predictive analytics, conversational agents, workflow automation, and Life Sciences AI. |
| `/industries` | **Industries** | EXPLORE | Sector overview; asymmetric structure showcasing core Life Sciences prominence alongside a 20+ sector explorer grid. |
| `/industries/life-sciences` | **Life Sciences** | DETAIL | Specialization crown; deep clinical and commercial focus spanning 6 sub-sectors, healthcare providers, and regulatory nuances. |
| `/where-we-work` | **Where We Work** | EXPLORE + DETAIL | Geographic footprint; Nairobi global HQ, pan-African operational network, and verified corridors into Europe and the US. |
| `/how-we-work` | **How We Work** | UNDERSTAND + DETAIL | Methodology; six-stage engagement lifecycle, delivery formats, five core differentiators, and target client archetypes. |
| `/explore` | **Explore** | EXPLORE → SYNTHESIS | Interactive composer; dynamic 3-slot matrix (`Industry × Geography × Capability`) with live contextual synthesis and dispatch. |
| `/insights` | **Insights** | UNDERSTAND + DETAIL | Editorial and research desk; deep executive briefings, sector reports, economic perspectives, and knowledge dossiers. |
| `/contact` | **Contact** | ENGAGE | Conversion terminal; 4-step consultative inquiry builder with pre-populated contextual parameters and Nairobi desk facts. |

---

## 3. Navigation & Wayfinding Model

### 3.1 Primary Header Navigation
The desktop header provides single-click access to core destinations, with progressive disclosure for deep hierarchies:

```
[ MindCraft ]   Home · About · What We Do ▾ · Industries ▾ · Where We Work · How We Work · Explore · Insights   [ Start a Conversation ]
```

- **Top-Level Direct Routes:** `Home`, `About`, `Where We Work`, `How We Work`, `Explore`, `Insights`.
- **Hierarchical Mega-Panels / Dropdowns:**
  - **What We Do ▾:** Reveals the overarching engine overview plus direct links to the 4 specialized capability pillars (`Business Consulting`, `Market Research`, `AI Training & Digital Literacy`, `AI Enterprise Solutions`).
  - **Industries ▾:** Highlights `Life Sciences (Core Expertise)` as an asymmetric primary destination alongside `All Industries & Verticals`.
- **Persistent Conversion Trigger:** `Start a Conversation` (`/contact`), rendered as an authoritative, high-contrast button anchored on the far right.

### 3.2 Mobile Navigation (Full-Screen Editorial Drawer)
- Clean, accessible hamburger trigger (`aria-label="Toggle navigation menu"`).
- Slides in as an authoritative full-height editorial surface (`--paper-warm` background, `--ink-carbon` typography).
- Displays primary links with clear typography, expandable sub-menus for What We Do and Industries, direct Nairobi contact credentials, and a full-width pinned `Start a Conversation` CTA.

---

## 4. Visual-First Information Architecture (Anti-Slop Directives)

1. **Eliminate Prose Bloat:**
   Replace dense, multi-paragraph corporate essays with scannable, visually intelligent modules:
   - Interactive process rails and step timelines (e.g., 6-stage lifecycle).
   - Architectural flowcharts and connected SVG spines (e.g., value chain loop).
   - Dynamic 3-slot selector matrices (e.g., Explore composer).
   - Structured glance strips and data tag arrays.
   - Clean tabular matrices for delivery models and comparison frameworks.
2. **Asymmetric Visual Hierarchy:**
   - Life Sciences is visually distinct from generic industry listings through elevated layout cards, deep clinical metadata, and specialized tags.
   - Nairobi headquarters is highlighted as the primary strategic nexus, with regional corridors extending outward.
3. **Progressive Disclosure:**
   Visitors move through clearly demarcated depth layers:
   ```
   LEVEL 1: SCAN (Hero, glance strips, high-contrast editorial thesis)
     └── LEVEL 2: UNDERSTAND (Interactive spines, category overviews, 1-line capability summaries)
           └── LEVEL 3: EXPLORE (Interactive grids, 3-slot matrices, regional maps)
                 └── LEVEL 4: DETAIL (Deep subpage drawers, technical deliverables, curriculum modules)
                       └── LEVEL 5: ENGAGE (Pre-scoped consultative dispatch into Contact)
   ```

---

## 5. Cross-Linking & Journey Integrity Rules

- **Zero Dead Ends:** Every single page and subpage concludes with a high-impact contextual next step or conversion invitation.
- **Cross-Pillar Synergy:** Every capability subpage links to its preceding and succeeding nodes in the value chain, illustrating real-world handoffs.
- **Deep-Linked Explorer:** Selecting an industry, region, or capability anywhere across the site enables deep-linking into `/explore` with pre-filled state (e.g., `/explore?industry=pharmaceuticals&capability=ai-solutions`).
- **Context-Aware Contact:** Triggering "Start a Conversation" from any specific subpage or explorer state automatically passes the context into the contact inquiry builder.

---

## 6. Content Ownership & Anti-Duplication Matrix

To ensure crisp editorial focus and avoid redundant content blocks, every critical institutional fact has exactly one canonical home:

| Content Domain | Canonical Home | Referenced Elsewhere As |
|---|---|---|
| Deep capability deliverables & curriculum | Pillar Subpages (`/what-we-do/*`) | 1-line summaries on Overview; actionable tags on Explore |
| 6 Life Sciences clinical sub-sectors | `/industries/life-sciences` | Tag strip on Home; prominent highlight on `/industries` |
| 20+ broader industry verticals | `/industries` | Filter chips in Explorer; sector tags in Insights |
| Pan-African country lists & regional breakdown | `/where-we-work` | Geography chips in Explorer; summary badge in Footer |
| 6-stage delivery lifecycle & delivery models | `/how-we-work` | Interactive process preview on Home |
| Founding gap, values & leadership credentials | `/about` | Credibility markers on Home; closing notes on Contact |
| Editorial briefings & whitepapers | `/insights` | Featured insight teaser on Home |
| Operational credentials & physical office desk | `/contact` | Global footer contact block |
