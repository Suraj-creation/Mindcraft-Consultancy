# MindCraft — Comprehensive Multi-Page Sitemap

> The definitive site architecture for MindCraft Consultancy Services. Derived directly from the sitemap diagram and operational requirements.
> Rationale and information architecture in `/specs/01-information-architecture.md`; per-page specifications in `/specs/03–16` and `/specs/27-insights.md`. Navigation and routing specifications in `/specs/17-navigation.md`.

---

## 1. Route Tree & Canonical Hierarchy

```
/                                   01. Home (Editorial hub, comprehension ladder & journey previews)
│
├── /about                          02. About (Identity, founding gap, vision/mission, heritage & network)
│
├── /what-we-do                     03. What We Do (The integrated capabilities engine)
│   ├── /what-we-do/business-consulting      Pillar 1: Business Consulting (Strategy, digital, change, policy)
│   ├── /what-we-do/market-research          Pillar 2: Market Research (Primary, secondary, impact, analytics)
│   ├── /what-we-do/ai-training              Pillar 3: AI Training & Digital Literacy (Executive, governance, champions)
│   └── /what-we-do/ai-enterprise-solutions  Pillar 4: AI Enterprise Solutions (Strategy, custom AI, automation)
│
├── /industries                     04. Industries (Core Life Sciences prominence + broader industry grid)
│   └── /industries/life-sciences            Deep Specialization: Life Sciences (Six sub-sectors & AI)
│
├── /where-we-work                  05. Where We Work (Nairobi HQ, Africa pan-continent, Europe & US reach)
│
├── /how-we-work                    06. How We Work (Six-stage engagement process, delivery models & clients)
│
├── /explore                        07. Explore (Signature interactive Industry × Geography × Capability composer)
│
├── /insights                       08. Insights (Editorial index, analytical perspectives & strategic research)
│
├── /contact                        09. Contact (Start a Conversation, pre-scoped inquiry & advisory dispatch)
│
└── (utility / legal — required future specifications)
    ├── /privacy                    Privacy policy & data stewardship
    └── /terms                      Terms of advisory engagement
```

---

## 2. Navigation Architecture

### 2.1 Primary Navigation (Desktop Header)
The primary navigation spans 8 top-level routes plus a persistent, high-contrast CTA button:

```
[ MindCraft ]   Home · About · What We Do ▾ · Industries ▾ · Where We Work · How We Work · Explore · Insights   [ Start a Conversation ]
```

1. **Brand Wordmark:** `MindCraft` (Editorial serif typography, links to `/`).
2. **Home:** Direct link to `/`.
3. **About:** Direct link to `/about`.
4. **What We Do:** Top-level link to `/what-we-do` with rich disclosure mega-panel linking to:
   - *Capabilities Overview* (`/what-we-do`)
   - *Business Consulting* (`/what-we-do/business-consulting`)
   - *Market Research* (`/what-we-do/market-research`)
   - *AI Training & Digital Literacy* (`/what-we-do/ai-training`)
   - *AI Enterprise Solutions* (`/what-we-do/ai-enterprise-solutions`)
5. **Industries:** Top-level link to `/industries` with dropdown:
   - *Life Sciences (Core Expertise)* (`/industries/life-sciences`)
   - *All Industries & Verticals* (`/industries`)
6. **Where We Work:** Direct link to `/where-we-work`.
7. **How We Work:** Direct link to `/how-we-work`.
8. **Explore:** Direct link to the signature interactive tool (`/explore`).
9. **Insights:** Direct link to editorial publications and research (`/insights`).
10. **Primary CTA Button:** `Start a Conversation` (`/contact`), high-contrast ink/accent button.

### 2.2 Mobile Navigation (Drawer)
Triggered by an accessible hamburger toggle (`Menu`), opening a full-height editorial drawer with hierarchical sub-links, direct telephone/email details, and a pinned conversion CTA.

---

## 3. Structural Page Breakdown (Section-by-Section)

Each page in the sitemap is structured around a deliberate, scan-friendly sequence that prioritizes visual intelligence (interactive diagrams, architecture maps, timelines, progressive disclosure drawers) over dense prose.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   01. HOME (Route: /)                                            │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Navbar: Global persistent navigation bar with quick links and conversion trigger.              │
│ 2. Hero: Nairobi anchor, bold editorial typography, value proposition & dual CTAs.               │
│ 3. Integrated Capabilities: Interactive 4-pillar overview (Research, Strategy, Systems, Skills). │
│ 4. How the Engine Connects: Interactive Value Chain Spine (Market Question → Impact Loop).        │
│ 5. Life Sciences Heritage: Dedicated foundational depth band spotlighting 6 clinical domains.   │
│ 6. Africa at the Center: Cartographic pan-African footprint + European & US reach corridors.     │
│ 7. Explore: Interactive 3-slot composer teaser (Industry × Geography × Capability).              │
│ 8. How We Work: 6-stage lifecycle preview (Discovery through Post-Engagement Follow-Up).        │
│ 9. Who We Serve: Persona-oriented routing chips (CEOs, Strategy, Life Sciences, Regulators).     │
│ 10. Insights: Curated editorial perspective teasers with reading time and category tags.         │
│ 11. Start a Conversation: High-impact dark ink band with direct conversion inquiry trigger.      │
│ 12. Footer: Global 5-column directory, credentials, Nairobi office contact, and legal notes.    │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   02. ABOUT (Route: /about)                                      │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Navbar                                                                                        │
│ 2. About Header: Editorial introduction framing the 2026 Nairobi-founded advisory perspective.   │
│ 3. Our Story: The founding gap narrative (bridging strategic domain depth with applied AI).       │
│ 4. Vision, Mission & Values: Interactive tabbed deck (Excellence, Integrity, African Context).  │
│ 5. Life Sciences Heritage: Archival timeline & scientific discipline underpinning all sectors.   │
│ 6. Africa & Global Perspective: Strategic thesis on African innovation scaling into global markets│
│ 7. What Sets MindCraft Apart: 5 structural differentiators with visual architectural cards.      │
│ 8. Team & Network: Senior advisory leadership core + specialized global practitioner network.    │
│ 9. Start a Conversation: Contextual engagement invitation.                                       │
│ 10. Footer                                                                                       │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              03. WHAT WE DO (Route: /what-we-do)                                 │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Navbar                                                                                        │
│ 2. Hero / Capability Positioning: The unified value engine thesis.                              │
│ 3. The Integrated Engine: Interactive full-scale value chain diagram.                            │
│ 4. How the Capabilities Connect: Real-world engagement journey walkthroughs.                     │
│ 5. Capability Explorer: 4-pillar interactive matrix with scope accordions and deliverables.      │
│ 6. Industry × Geography × Capability Link: Direct bridge to the `/explore` composer.             │
│ 7. Why the Integrated Model Matters: Comparison matrix (Siloed vendors vs. Unified MindCraft).   │
│ 8. Start a Conversation: Scoped capability inquiry trigger.                                     │
│ 9. Footer                                                                                        │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

   ├── SUBPAGE: Business Consulting (/what-we-do/business-consulting)
   │   • Hero & Approach: Strategic advisory anchored in operational execution.
   │   • 5 Core Disciplines: Corporate Strategy, Digital/AI Transformation, Org Design, Process, Policy.
   │   • How Consulting Connects to Research & AI: Cross-pillar synergy diagrams.
   │   • Start a Conversation & Footer.
   │
   ├── SUBPAGE: Market Research (/what-we-do/market-research)
   │   • Hero & Methodological Framework: Qualitative, quantitative and desk rigor.
   │   • 4 Research Pillars: Primary Research, Desk Intelligence, Impact Studies, Analytics Products.
   │   • Decision-Ready Outputs: Deliverable archetypes (feasibility decks, dashboards, market maps).
   │   • Start a Conversation & Footer.
   │
   ├── SUBPAGE: AI Training & Digital Literacy (/what-we-do/ai-training)
   │   • Hero & Pedagogical Philosophy: Human-centered, workflow-embedded capability building.
   │   • 5 Curriculum Modules: Executive AI, Functional AI, Responsible AI Governance, Champions, Custom.
   │   • Delivery Formats & Audiences: Intensive bootcamps, executive retreats, ongoing mentorship.
   │   • Start a Conversation & Footer.
   │
   └── SUBPAGE: AI Enterprise Solutions (/what-we-do/ai-enterprise-solutions)
       • Hero & Engineering Rigor: Enterprise-grade models built for private cloud & secure environments.
       • 6 Solution Suites: Architecture, Custom Analytics, Conversational Agents, Automation, Integration, LS AI.
       • Deliverable Systems: Architecture blueprints, production APIs, automated pipelines.
       • Start a Conversation & Footer.
```

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               04. INDUSTRIES (Route: /industries)                                │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Navbar                                                                                        │
│ 2. Hero: Asymmetric positioning (deep foundational Life Sciences + breadth across 20+ sectors). │
│ 3. Life Sciences — Core Expertise: Heroic spotlight showcasing why Life Sciences is our heritage.│
│ 4. Industry Explorer Grid: Interactive filterable sector grid across 6 macro-domains:            │
│    - Healthcare & Life Sciences                                                                  │
│    - Financial Services & FinTech                                                                │
│    - Agriculture & AgTech                                                                        │
│    - Energy, Resources & Utilities                                                               │
│    - Manufacturing, Industrial & Logistics                                                       │
│    - Public Sector, Multilateral & Development Agencies                                          │
│ 5. Compose Your Situation: Deep link to pre-filter `/explore` with chosen industry.              │
│ 6. Start a Conversation: Industry-targeted advisory inquiry.                                     │
│ 7. Footer                                                                                        │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘

   └── SUBPAGE: Life Sciences (/industries/life-sciences)
       • Hero: Clinical depth, regulatory compliance, and market commercialization in emerging markets.
       • 6 Sub-Sectors: Pharmaceuticals, Medical Devices, Diagnostics, Equipment, Consumables, Hospitals.
       • 4 Capabilities in Life Sciences: Tailored matrix showing Research, Strategy, AI & Training in LS.
       • Life Sciences-Specific AI: Pharmacovigilance NLP, diagnostic triage, supply-chain forecasting.
       • Start a Conversation & Footer.
```

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                             05. WHERE WE WORK (Route: /where-we-work)                            │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Navbar                                                                                        │
│ 2. Hero: Nairobi headquarters anchoring pan-African execution with international corridors.     │
│ 3. Nairobi / Headquarters: East African innovation hub, strategic laboratory & advisory desk.   │
│ 4. Pan-African Coverage: 4 regions (East, West, Southern, North Africa) with key focus markets. │
│ 5. Global Reach (Europe & United States): Cross-border capital, clinical trials & market entry.  │
│ 6. Focus Market Intelligence: Interactive country profiles (Kenya, Nigeria, SA, Rwanda, Egypt). │
│ 7. What Our Geographic Reach Enables: Global standard compliance married to local street reality.│
│ 8. Start a Conversation: Geographically scoped engagement dispatch.                             │
│ 9. Footer                                                                                        │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              06. HOW WE WORK (Route: /how-we-work)                               │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Navbar                                                                                        │
│ 2. Hero: Structured, disciplined methodology from problem definition to sustained impact.       │
│ 3. Six-Stage Engagement Lifecycle: Interactive timeline (Discovery, Proposal, Design,           │
│    Delivery, Evaluation, Continuous Evolution).                                                  │
│ 4. Delivery Models: Flexible engagement formats (Dedicated Taskforce, Retainer, Capability Hub).│
│ 5. Why MindCraft: 5 operational pillars of difference (Senior-led, no black-box AI, contextual). │
│ 6. Who We Serve: Client archetype cards with customized engagement entry paths.                 │
│ 7. Start a Conversation: Direct engagement kickoff.                                             │
│ 8. Footer                                                                                        │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 07. EXPLORE (Route: /explore)                                    │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Navbar                                                                                        │
│ 2. Hero / Composer Header: Interactive 3-way matrix composer.                                    │
│ 3. Three-Slot Interactive Selector:                                                              │
│    - Slot A: Select Industry (20+ sectors grouped into 6 clusters)                              │
│    - Slot B: Select Geography (Nairobi HQ, East/West/South/North Africa, Europe, US)             │
│    - Slot C: Select Capability (Business Consulting, Research, AI Training, AI Solutions)        │
│ 4. Live Synthesis Result Card: Generates real-time custom advisory brief including:              │
│    - Strategic Context & Operational Realities                                                   │
│    - Recommended Engagement Playbook                                                             │
│    - Typical Deliverable Suite                                                                   │
│ 5. How to Read the Synthesis: Methodological guidance on applying the insight.                   │
│ 6. Curated Starting Combinations: 4 pre-assembled high-demand advisory scenarios.                │
│ 7. Start a Conversation About This: Pre-populates contact modal with exact selected parameters.   │
│ 8. Footer                                                                                        │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                08. INSIGHTS (Route: /insights)                                   │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Navbar                                                                                        │
│ 2. Hero: MindCraft Editorial & Research Desk — rigorous African economic and technological analysis│
│ 3. Insights Landing: Featured lead analysis with executive briefing card and reading telemetry.  │
│ 4. Editorial Filter Bar: By discipline (Life Sciences, AI Strategy, Market Intel, Policy).       │
│ 5. Curated Article Grid: Publication cards with abstract, author pedigree, and key takeaways.    │
│ 6. Research & Knowledge Products: Downloadable briefing papers and executive dossiers.           │
│ 7. Start a Conversation: Commission bespoke research or intelligence analysis.                   │
│ 8. Footer                                                                                        │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 09. CONTACT (Route: /contact)                                    │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. Navbar                                                                                        │
│ 2. Start a Conversation Header: Open, transparent, consultative invitation.                      │
│ 3. Pre-Scoped Inquiry Form: 4-step interactive advisory inquiry builder:                         │
│    - Step 1: Area of Interest (Capability / Sector / Region)                                     │
│    - Step 2: Organizational Profile & Current Challenge                                         │
│    - Step 3: Target Timelines & Delivery Format                                                  │
│    - Step 4: Contact Coordinates                                                                 │
│ 4. Direct Office Coordinates: Physical location (Nairobi, Kenya), verified direct email, hours.   │
│ 5. Advisory Response Commitment: Senior review within 24-48 hours.                                │
│ 6. Closing Brand Statement: "Building AI-powered growth for Life Sciences and industry."         │
│ 7. Footer                                                                                        │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Cross-Page Link Architecture & Journey Routing

| Origin Page | Canonical Cross-Links | Strategic User Journey |
|---|---|---|
| **Home (`/`)** | Every top-level page + `/explore` + `/contact` | Hub overview → routes to depth or direct contact |
| **About (`/about`)** | `/how-we-work`, `/industries/life-sciences`, `/contact` | Trust validation → methodology → conversion |
| **What We Do (`/what-we-do`)** | 4 subpages, `/explore`, `/how-we-work`, `/contact` | Architectural overview → deep technical subpage → engagement |
| **Each Pillar Subpage** | Sibling pillars, `/industries`, `/explore`, `/contact` | Value chain loop → industry application → conversion |
| **Industries (`/industries`)**| `/industries/life-sciences`, `/explore`, `/contact` | Macro sectors → specialized clinical depth → customized mix |
| **Life Sciences (`/industries/life-sciences`)** | `/what-we-do/ai-enterprise-solutions`, `/where-we-work`, `/contact` | Sector depth → tech solutions → localized delivery |
| **Where We Work (`/where-we-work`)** | `/explore`, `/industries`, `/contact` | Geographic reach → regional composition → conversion |
| **How We Work (`/how-we-work`)** | `/what-we-do`, `/about`, `/contact` | Delivery transparency → firm credentials → engagement |
| **Explore (`/explore`)** | Pre-populated `/contact`, relevant pillar pages | Interactive experimentation → immediate scoped dispatch |
| **Insights (`/insights`)** | `/what-we-do/market-research`, `/contact` | Thought leadership → advisory consultation |
| **Contact (`/contact`)** | `/explore`, `/what-we-do` | Engagement conversion with contextual backlinks |

---

## 5. Architectural & Design Directives

1. **Visual-First Density:** Minimize walls of prose. Replace text blocks with scannable visual structures: interactive process rails, card matrices, visual diagrams, data tags, and photographic portraits.
2. **Warm Editorial Aesthetic:** Palette anchored in warm paper (`#FBF9F4` / `oklch(97% 0.01 80)`), deep carbon ink (`#1A1816`), and rich ochre terracotta accent (`#C25E2E`).
3. **No AI Tropes:** Strictly forbid generic AI clichés (purple/cyan gradients, glowing outlines, floating pseudo-3D blobs, placeholder lorem ipsum, ungrounded vanity statistics).
4. **Authenticity & Integrity:** All claims reflect MindCraft's authentic 2026 founding profile, Nairobi headquarters, and genuine capability scope without simulated case studies or fake testimonials.
