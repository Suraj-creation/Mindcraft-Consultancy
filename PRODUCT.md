# PRODUCT.md — MindCraft Consultancy Services

> Product truth only. Every visual decision lives in `DESIGN.md`.
> Every claim here traces to `MindCraft Consultancy Services - Corporate Profile (1).md`.
> Nothing may be added to this file that the source documents do not support.

---

## What it is

A Nairobi, Kenya-headquartered consultancy providing integrated **Business Consulting, Market Research, AI Training and AI Enterprise Solutions** to organisations across diversified industry verticals.

Established **2026**. Founded to close a specific gap: the absence of a single trusted partner that combines deep sector expertise with practical, applied artificial intelligence capability.

**Vision** — "To be Africa's most trusted partner for AI-powered business growth — recognized globally for combining deep Life Sciences expertise with practical, ethical and impactful artificial intelligence adoption."

**Mission** — "To equip organizations across Africa, Europe and the United States with the market intelligence, strategic advisory and AI capability they need to compete, grow and lead in their industries — with a special commitment to advancing Life Sciences enterprises operating in and around the African continent."

**Closing brand line** — "Building AI-powered growth for Life Sciences and industry across Africa and beyond."

---

## Who it serves

Multinational corporations, regional enterprises, public institutions and development partners — unified by a shared need for credible market intelligence, sound strategic advisory and practical AI capability.

- Pharmaceutical, medical device, diagnostics and healthcare companies operating in or entering African markets
- Hospitals, hospital groups and private healthcare providers
- Chemical and agrochemical manufacturers and distributors
- Automotive manufacturers, dealers and aftermarket distributors
- Banks, insurers and financial services institutions
- Government ministries, departments and regulatory agencies
- NGOs, international development organisations, UN agencies and donor-funded programmes
- Academic and research institutions, startups and innovation hubs

**The visitor.** A senior decision-maker evaluating a consultancy — a CxO, a Life Sciences director, an NGO programme manager. They skim first, then investigate depth. They should feel *recognised*, not marketed to: "these people understand my world," not "impressive website."

**The use scene.** Daytime desk and mobile evaluation. Often a shared screen in a meeting. This is a considered B2B purchase with a long decision cycle, not an impulse conversion.

---

## The four capabilities

Presented in the source in this order, but the canonical **chain order** used across the site is: Market Research → Business Consulting → AI Enterprise Solutions → AI Training → Impact, which loops back to the next question.

| Pillar | Source positioning |
|---|---|
| **Business Consulting** | "Strategic and management advisory that helps organizations make better decisions, restructure for growth, and execute change with confidence — grounded in Life Sciences and cross-industry best practice." |
| **Market Research** | "Rigorous primary and secondary research that turns market complexity into decision-ready intelligence — purpose-built for Life Sciences and diversified industry clients operating in African and international markets." |
| **AI Training & Digital Literacy** | "Practical, hands-on AI capability-building for individuals, teams and organizations — designed to build real AI literacy and internal champions, not just awareness." |
| **AI Enterprise Solutions** | "End-to-end design, build and integration of AI-powered systems that operationalize insight into everyday business workflows — from market intelligence platforms to patient- and customer-facing AI tools." |

Clients frequently engage across two or more pillars simultaneously. The integration is the product: "one coherent, integrated engagement rather than four disconnected vendors."

---

## Life Sciences — the core specialisation

"Life Sciences is the founding heritage and core specialization of MindCraft."

Six sub-sectors: **Pharmaceuticals · Medical Devices · Medical Diagnostics · Medical Equipment · Surgical Consumables · Hospitals & Healthcare Providers**

Life-Sciences-specific AI, from source:
- AI-assisted pharmacovigilance and adverse-event monitoring
- Regulatory intelligence automation across African and international regulators
- AI-powered KOL identification and market-access analytics

**This asymmetry is load-bearing.** Life Sciences must visibly carry more depth than any other vertical, because it does. Other industries get a panel; Life Sciences gets a page and an ecosystem.

---

## Geography

Headquartered in Nairobi. Three geographies: **Africa (primary) · Europe · United States**.

Africa is a **strategic position, not an address**. The model is Nairobi → East Africa → Africa → Global.

45 countries across four regions: **East 10 · West 16 · Southern 14 · North 5**.

12 focus markets: Kenya, Nigeria, South Africa, Egypt, Ghana, Ethiopia, Tanzania, Uganda, Rwanda, Morocco, Côte d'Ivoire, Zambia.

These are **focus markets and an associate network — never independent offices.** Nairobi is the only office.

---

## How an engagement runs

Six stages: **Discovery → Proposal → Design → Delivery → Evaluation → Follow-up**

Seven delivery modalities: in-person · virtual · hybrid · short courses (1–5 days) · longer programmes (weeks–months) · retainers · scoped one-off projects.

No invented methodology names. This is how an engagement runs, not a branded framework.

---

## The five differentiators

1. **Deep Life Sciences heritage** — sector expertise, not generalist frameworks
2. **Pan-African footprint with local fluency** — on-ground knowledge plus international standards
3. **One partner, four integrated capabilities** — not four disconnected vendors
4. **Applied, decision-ready outputs** — built for implementation, not theory
5. **Responsible, governed AI by design** — privacy, ethics and governance embedded

---

## Voice

An intelligent senior consultant: precise, confident, plain-spoken. African-rooted, globally fluent. Short sentences. Active voice. Specific nouns. No hype, no filler, no exclamation marks.

Three words: **rigorous · grounded · quietly confident**. The emotional goal is credibility and calm authority.

The source voice defines itself by negation with unusual frequency — "not generic frameworks," "not academic exercises," "not just awareness," "rather than four disconnected vendors." Precision is the register, not warmth.

Primary CTA is fixed: **"Start a conversation."** Never "Get started" or "Learn more."

---

## Content integrity — hard constraints

Founded 2026. The site never pretends otherwise.

**Never fabricate:** client names or logos · "Trusted by" sections · testimonials · case studies · any metric, percentage or outcome figure · revenue or headcount · project, client or deployment counts · awards · certifications · named partners · years of experience · **any office beyond Nairobi**.

**Banned words:** "proven," "leading," "trusted by," "our clients," "we helped [X]," "over N years," "unlock the power of AI," "cutting-edge," "next-generation," "in today's fast-paced world."

**Deliverables are phrased as offerings, never as track record.** "Solutions built to deliver X," never "We delivered X."

**Credibility comes from** specialisation, methodology, specificity, domain language and geographic intelligence — not fabricated proof. The real structural facts do the work: four pillars, six sub-sectors, four regions, 45 countries, 12 focus markets, six stages, five differentiators.

Partnerships are "actively building," never listed as existing. The team is "a core team and a growing network of associates and partners" — no fabricated bios.

---

## Technical constraints

React 19 + Vite + Tailwind v4 + `motion` + lucide-react. Custom `history.pushState` router, no react-router.

**Performance budget (CI-blocking):** LCP ≤2.0s with the hero *heading* as the LCP element (text, not an image) · CLS ≤0.02 · INP ≤150ms · initial JS ≤110KB gzipped · total transfer ≤350KB · critical fonts ≤80KB · `motion` ≤18KB · third-party 0KB.

**Banned dependencies:** Three.js/WebGL · Mapbox/Leaflet/any tile map · globe libraries · particle/canvas effect libraries · Lottie · chart libraries. Data visualisation is hand-built SVG/CSS.

**Accessibility:** WCAG 2.2 AA at every route and width. Body text ≥7:1, secondary ≥4.5:1, non-text ≥3:1. Lighthouse a11y ≥95, axe 0 serious/critical at 320/768/1280. Reduced-motion is a first-class path.

Contact form endpoint is unresolved — `TODO: required-future config`. Privacy/Terms are reserved routes, `noindex` until real content exists. Never fabricate legal text.
