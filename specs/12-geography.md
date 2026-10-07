# 12 — Where We Work (Geographic Footprint & Global Corridors)

> Parents: `requirements.md` §9, `content-inventory.md` §6, `source-traceability.md` §E, `specs/01-information-architecture.md`, `specs/25-content-integrity.md`.
> Role in IA: Demonstrates that Africa is MindCraft's **primary strategic position, not just an office address**. Disclosure role: **EXPLORE + DETAIL**.
> Visual-First Requirement: Interactive cartographic footprint, region-by-region country accordions, international corridor maps, and verified focus market profiles.

---

## 1. Route & Meta
- **Route:** `/where-we-work`
- **Page title (browser):** `Where We Work — Nairobi HQ, Pan-Africa & Global Corridors | MindCraft`
- **Component file:** `src/pages/WhereWeWork.tsx`
- **Nav state:** "Where We Work" active.

---

## 2. Objective & Purpose
Establish MindCraft's geographical authority: anchored at our Nairobi headquarters, delivering advisory mandates across the four major economic zones of Africa, and operating seamless commercial and research corridors into Europe and the United States. Ensure 100% honesty: Nairobi is our sole physical headquarters, supported by trusted in-country associate networks across 12 primary focus markets.

---

## 3. Structural Section Stack (Derived from Sitemap)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                   01. NAVBAR                                     │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                    02. HERO                                      │
├──────────────────────────────────────────────────────────────────────────────────┤
│                           03. NAIROBI / HEADQUARTERS                             │
├──────────────────────────────────────────────────────────────────────────────────┤
│                     04. AFRICA (EAST, WEST, SOUTHERN, NORTH)                     │
├──────────────────────────────────────────────────────────────────────────────────┤
│                          05. EUROPE & UNITED STATES                              │
├──────────────────────────────────────────────────────────────────────────────────┤
│                               06. FOCUS MARKETS                                  │
├──────────────────────────────────────────────────────────────────────────────────┤
│                    07. WHAT OUR GEOGRAPHIC REACH ENABLES                         │
├──────────────────────────────────────────────────────────────────────────────────┤
│                            08. START A CONVERSATION                              │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                   09. FOOTER                                     │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Section Specifications

### Section 01 — NAVBAR
- Persistent global navigation bar with "Where We Work" active.

---

### Section 02 — HERO (Geographic Positioning)
- **Eyebrow (mono):** `WHERE WE WORK · NAIROBI ANCHOR · CONTINENTAL REACH`
- **Display Headline:** "Rooted in Nairobi. Focused on Africa. Connected globally."
- **Supporting Statement (≤24 words):** "Headquartered in Nairobi, we operate across all African countries, with growing depth in key focus markets — and active corridors to Europe and the US."
- **Visual Motif:** Progressive coordinate rings expanding from Nairobi (`-1.2921° S, 36.8219° E`) outward to continental and transatlantic vectors.

---

### Section 03 — NAIROBI / HEADQUARTERS (Strategic Command Center)
- **Eyebrow (mono):** `GLOBAL HEADQUARTERS`
- **Headline:** "Nairobi: The gateway to African innovation and commerce."
- **Visual Design:** High-contrast editorial feature card detailing:
  - Strategic role as East Africa's economic, logistical, and technological hub.
  - Houses the central research desk, AI systems architecture lab, and advisory leadership.
  - Coordination nexus for cross-border African regulatory engagements.

---

### Section 04 — AFRICA (East, West, Southern, North)
- **Eyebrow (mono):** `01 — PAN-AFRICAN COVERAGE`
- **Headline:** "Four regions, unified by rigorous on-ground execution."
- **Visual Component:** Interactive 4-quadrant regional selector:
  1. **East Africa (10 Countries):** Kenya (Hub), Uganda, Tanzania, Rwanda, Ethiopia, Burundi, South Sudan, Somalia, Djibouti, Eritrea.
  2. **West Africa (15 Countries):** Nigeria (Focus), Ghana (Focus), Côte d'Ivoire (Focus), Senegal, Cameroon, Benin, Togo, Burkina Faso, Mali, Niger, Guinea, Sierra Leone, Liberia, Mauritania, The Gambia.
  3. **Southern Africa (14 Countries):** South Africa (Focus), Zambia (Focus), Zimbabwe, Botswana, Namibia, Mozambique, Angola, Malawi, Lesotho, Eswatini, Madagascar, Mauritius, Seychelles, Comoros.
  4. **North Africa (6 Countries):** Egypt (Focus), Morocco (Focus), Algeria, Tunisia, Libya, Sudan.
- **Interactions:** Clicking any region highlights the territory and renders an organized country grid with focus markets elevated.

---

### Section 05 — EUROPE & UNITED STATES (Cross-Border Corridors)
- **Eyebrow (mono):** `02 — INTERNATIONAL CORRIDORS`
- **Headline:** "Bridging African markets with global capital and science."
- **Visual Architecture:** 2 structured corridor briefing cards:
  - **European Union & UK Corridors:** Supporting European pharmaceutical manufacturers, developmental finance institutions, and technology providers with Africa market-entry feasibility, local regulatory alignment, and partner vetting.
  - **United States Corridors:** Advising US healthcare enterprises, institutional investors, and philanthropic foundations on clinical research infrastructure, supply chain integrity, and digital transformation in emerging markets.

---

### Section 06 — FOCUS MARKETS (The 12 Depth Economies)
- **Eyebrow (mono):** `03 — OPERATIONAL DEPTH`
- **Headline:** "Particular depth across 12 major African economies."
- **Visual Component:** 12 structured market intelligence badges (clearly labeled `FOCUS MARKETS · ASSOCIATE NETWORK · NOT INDEPENDENT OFFICES`):
  - *Kenya · Nigeria · South Africa · Egypt · Ghana · Ethiopia*
  - *Tanzania · Uganda · Rwanda · Morocco · Côte d'Ivoire · Zambia*
- **Visual Details:** Key commercial indicators, regulatory authorities, and primary engagement disciplines.

---

### Section 07 — WHAT OUR GEOGRAPHIC REACH ENABLES (Strategic Value Proposition)
- **Eyebrow (mono):** `04 — INSTITUTIONAL ADVANTAGE`
- **Headline:** "Local reality meets international advisory standards."
- **Visual Component:** 3 architectural pillar cards:
  1. **Street-Level Feasibility:** Primary fieldwork conducted in local languages and cultural contexts, not remote assumptions.
  2. **Harmonized Multi-Country Studies:** Single methodology executed simultaneously across diverse regulatory regimes.
  3. **Frictionless Capital Deployment:** Reliable intelligence that de-risks foreign direct investment and clinical trials.

---

### Section 08 — START A CONVERSATION (Geographically Scoped Inquiry)
- **Headline:** "Discuss your target market or regional expansion."
- **Supporting Copy:** "Tell us which countries or regional trade corridors you are evaluating."
- **CTA:** `Start a Market Conversation` (`/contact?topic=geography`).

---

### Section 09 — FOOTER
- Global structural directory.
