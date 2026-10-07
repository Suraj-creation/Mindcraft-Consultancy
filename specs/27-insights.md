# 27 — Insights (`/insights`)

> Parents: `requirements.md`, `design-principles.md`, `sitemap.md`, `specs/01-information-architecture.md`, `specs/02-content-strategy.md`, `specs/19-design-system.md`, `specs/25-content-integrity.md`.
> Role in IA: The **intellectual authority & research desk**. Disclosure role: **UNDERSTAND + DETAIL**. Canonical destination for MindCraft's strategic perspectives, market analyses, and policy briefings across Africa and global corridors.
> Visual-First Requirement: Curated publication cards with reading telemetry, category filters, and executive briefings—zero AI fluff.

---

## 1. Route & Meta
- **Route:** `/insights`
- **Page title (browser):** `Insights & Research Desk — MindCraft Consultancy Services`
- **Component file:** `src/pages/Insights.tsx`
- **Nav state:** "Insights" active.

---

## 2. Objective & Purpose
Establish MindCraft's rigorous intellectual credibility as a 2026 African advisory firm. Rather than generic blog posts or automated summaries, the Insights desk delivers deep, grounded analyses on real African economic dynamics, Life Sciences regulatory evolution, and sovereign enterprise AI architectures. Every piece reflects senior practitioner authorship and methodological rigor.

---

## 3. Structural Section Stack (Derived from Sitemap)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                   01. NAVBAR                                     │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                    02. HERO                                      │
├──────────────────────────────────────────────────────────────────────────────────┤
│                              03. INSIGHTS LANDING                                │
├──────────────────────────────────────────────────────────────────────────────────┤
│                               04. EDITORIAL INDEX                                │
├──────────────────────────────────────────────────────────────────────────────────┤
│                            05. START A CONVERSATION                              │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                   06. FOOTER                                     │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Section Specifications

### Section 01 — NAVBAR
- Global persistent header with "Insights" indicated as active.

---

### Section 02 — HERO (The Research Desk Manifesto)
- **Eyebrow (mono):** `EDITORIAL & RESEARCH DESK · NAIROBI, KENYA`
- **Display Headline:** "Rigorous perspectives for high-stakes decisions."
- **Supporting Statement (≤24 words):** "Independent analysis, sector intelligence, and strategic viewpoints from the frontier of African industry, Life Sciences, and applied AI."
- **Visual Treatment:** High-contrast editorial layout with subtle hairline accents and reading category indicators.

---

### Section 03 — INSIGHTS LANDING (Featured Flagship Analysis)
- **Purpose:** Spotlight MindCraft's signature current research initiative.
- **Featured Dossier:**
  - **Category Badge:** `LIFE SCIENCES & REGULATORY STRATEGY`
  - **Title:** *"Harmonization and Sovereignty: Navigating African Pharmaceutical Regulation in 2026."*
  - **Abstract:** "An empirical assessment of the African Medicines Agency (AMA) rollout, national regulatory divergence across Kenya, Nigeria, and South Africa, and the commercial implications for global pharma manufacturers."
  - **Metadata:** `April 2026 · 12 min read · Research Directorate · Nairobi Desk`
  - **Interactive Action:** Full dossier preview drawer / reading drawer with key findings and policy takeaways.

---

### Section 04 — EDITORIAL INDEX (Categorized Perspective Grid)
- **Purpose:** Provide structured, filterable access to specialized publications.
- **Filter Categories (Interactive Chips):**
  1. `All Perspectives`
  2. `Life Sciences & Health`
  3. `Enterprise AI & Systems`
  4. `Market Intelligence & Trade`
  5. `Policy & Governance`
- **Curated Articles Matrix (6 Archetypal Publications):**
  1. **"The Sovereignty Imperative in Enterprise AI"**
     - *Focus:* Why African corporations are shifting away from public multi-tenant clouds toward private, localized LLM deployments.
     - *Tags:* `AI Enterprise Solutions · Data Governance`
  2. **"Cold-Chain Logistics & Vaccine Distribution in East Africa"**
     - *Focus:* Route optimization and IoT predictive monitoring across the Northern and Central transport corridors.
     - *Tags:* `Life Sciences · Logistics`
  3. **"From Informal Trade to Structured Commerce"**
     - *Focus:* Utilizing primary fieldwork and mobile data analytics to quantify FMCG distribution velocity in West Africa.
     - *Tags:* `Market Research · FMCG`
  4. **"Executive AI Literacy: Moving Beyond Prompt Engineering"**
     - *Focus:* How C-suites in Nairobi and Johannesburg are structuring AI transformation taskforces and governance committees.
     - *Tags:* `AI Training · Leadership`
  5. **"Energy Transition & Grid Modernization in Southern Africa"**
     - *Focus:* Renewable microgrids, tariff structures, and industrial demand modeling.
     - *Tags:* `Energy & Utilities · Infrastructure`
  6. **"Cross-Border Capital Flows & Regulatory Compliance"**
     - *Focus:* Legal, foreign exchange, and policy frameworks for pan-African corporate expansion.
     - *Tags:* `Business Consulting · Finance`
- **Visual Design:** Grid cards with mono issue identifiers (`[BRIEF-01]` to `[BRIEF-06]`), publication date, reading time estimates, and clear call-to-read triggers.

---

### Section 05 — START A CONVERSATION (Custom Intelligence Inquiry)
- **Headline:** "Commission bespoke intelligence or discuss a perspective."
- **Supporting Copy:** "Our advisory team conducts proprietary research, market entry feasibility studies, and confidential policy assessments."
- **CTA:** `Start an Advisory Conversation` (`/contact?topic=insights`).

---

### Section 06 — FOOTER
- Global structural directory.
