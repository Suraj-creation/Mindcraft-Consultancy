# 17 — Navigation (Header, Mega-Panels, Mobile Drawer & Routing)

> Parents: `requirements.md` (§6, §14), `design-principles.md`, `sitemap.md`, `specs/01-information-architecture.md`, `specs/19-design-system.md`.
> Role in IA: Defines the persistent navigation framework, desktop mega-panels, mobile editorial drawer, keyboard accessibility, and single-page application routing behavior across all routes.

---

## 1. Navigational Objectives & Standards

The navigation system provides effortless wayfinding and conversion across all 14 canonical routes:
1. **Single-Interaction Reachability:** Any canonical route is reachable in ≤2 interactions from any position on the site.
2. **Lean & Balanced Top-Level Hierarchy:** 8 primary destinations + 1 high-contrast persistent CTA:
   `Home · About · What We Do ▾ · Industries ▾ · Where We Work · How We Work · Explore · Insights` + `[Start a Conversation]`.
3. **Structured Mega-Panels:** Deep hierarchies under *What We Do* and *Industries* are revealed through elegant, accessible dropdown panels.
4. **Persistent Conversion Access:** The canonical CTA `Start a Conversation` is permanently accessible in both desktop header and mobile viewport.
5. **No AI-Slop Chrome:** Pure typographic and geometric restraint — clean hairline dividers, warm paper/ink contrast, smooth subtle transitions, zero distracting glowing borders or floating glassmorphism.
6. **Mobile Parity:** The mobile drawer delivers full desktop parity with zero loss of depth or navigational options.

---

## 2. Desktop Header Architecture (Viewport ≥ 1024px)

```
┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [Wordmark: MindCraft]     Home   About   What We Do ▾   Industries ▾   Where We Work   How We Work   Explore   Insights     │
│                                                                                     [ Start a Conversation ]          │
└───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Anatomical Elements
- **Wordmark (Left):** Editorial serif typography (`font-serif font-bold tracking-tight text-xl text-neutral-900`), linking to `/`.
- **Navigation Cluster (Center):** 8 top-level links rendered in refined body typography with active indicator hairlines:
  1. `Home` → `/`
  2. `About` → `/about`
  3. `What We Do` → `/what-we-do` (Triggers Capabilities Mega-Panel)
  4. `Industries` → `/industries` (Triggers Industries Dropdown)
  5. `Where We Work` → `/where-we-work`
  6. `How We Work` → `/how-we-work`
  7. `Explore` → `/explore`
  8. `Insights` → `/insights`
- **Conversion Anchor (Right):** Primary high-contrast button `Start a Conversation` (`/contact`), styled with terracotta accent background (`#C25E2E`) and crisp white text.

### 2.2 Dropdown & Mega-Panel Specifications

#### A. What We Do Mega-Panel (Anchored to `What We Do`)
A multi-column structured panel presenting the integrated capabilities engine:
- **Header:** `Capabilities Overview` (`/what-we-do`) with subhead: *"Four integrated disciplines forming one continuous value chain."*
- **The 4 Pillar Links (Grid Display):**
  1. **Business Consulting (`/what-we-do/business-consulting`):** Strategy formulation, target operating models, and digital transformation.
  2. **Market Research (`/what-we-do/market-research`):** Primary empirical fieldwork, desk intelligence, and market feasibility.
  3. **AI Training & Digital Literacy (`/what-we-do/ai-training`):** Executive enablement, function-specific AI workflows, and governance.
  4. **AI Enterprise Solutions (`/what-we-do/ai-enterprise-solutions`):** Private architecture, predictive analytics, and automated workflows.
- **Contextual Bridge (Footer of panel):** Link to `/explore` with copy: *"Compose your custom mix in the Interactive Explorer →"*.

#### B. Industries Dropdown (Anchored to `Industries`)
A focused disclosure panel reinforcing the asymmetric specialization:
- **Spotlight Row:** **Life Sciences (`/industries/life-sciences`)**
  - Highlighted with a specialized mono tag: `CORE HERITAGE`.
  - Copy: *"Pharmaceuticals, medical devices, clinical diagnostics, and healthcare provider systems."*
- **Divider:** Hairline horizontal rule.
- **Secondary Row:** **All Industries & Verticals (`/industries`)**
  - Copy: *"Explore our depth across 20+ diversified economic sectors from financial services to energy."*

---

## 3. Mobile Navigation (Viewport < 1024px)

### 3.1 Mobile Bar (Header)
```
┌────────────────────────────────────────────────────────┐
│ [Wordmark: MindCraft]                         [☰ Menu] │
└────────────────────────────────────────────────────────┘
```
- Height: 64px, anchored sticky at top of viewport.
- Background: Warm editorial paper (`#FBF9F4` / `oklch(97% 0.01 80)`) with 1px bottom border.
- Right: Accessible hamburger toggle button (`aria-label="Toggle navigation menu"`, 44×44px touch target).

### 3.2 Mobile Drawer (Full-Screen Overlay)
- Smooth slide-down or slide-in transition (`ease-out`, duration 250ms).
- **Navigation Sections:**
  - `Home` (`/`)
  - `About` (`/about`)
  - `What We Do` (Expandable accordion revealing overview + 4 subpages)
  - `Industries` (Expandable accordion revealing Life Sciences + All Industries)
  - `Where We Work` (`/where-we-work`)
  - `How We Work` (`/how-we-work`)
  - `Explore` (`/explore`)
  - `Insights` (`/insights`)
- **Direct Credentials Desk:**
  - Headquarters: Nairobi, Kenya
  - Email: `info@mindcraftconsultancy.com`
- **Pinned Bottom CTA:** Full-width button `Start a Conversation` (`/contact`), 48px height, ensuring 100% conversion access.

---

## 4. SPA Routing & Transition Model

1. **Browser History & State Sync:**
   - Standard browser Back/Forward navigation functions with zero state desynchronization.
   - All page transitions execute scroll-to-top (`window.scrollTo(0, 0)`) automatically.
2. **Subpage Slide Transitions:**
   - Clicking a subpage (e.g. from `/what-we-do` into `/what-we-do/business-consulting` or `/explore`) renders an elegant, high-performance fade/slide transition.
3. **Deep-Link State Preservation:**
   - Direct query parameters (such as `/explore?industry=pharmaceuticals` or `/contact?topic=ai-solutions`) are preserved and initialize component state seamlessly.
4. **Active Route Indicators:**
   - Active navigation links receive an underline accent rule (`border-b-2 border-[#C25E2E]`) and bold font weight.

---

## 5. Accessibility & Keyboard Operations

- **Skip Link:** Visually hidden `#main` skip link positioned as the first element in DOM order; reveals on `Tab` focus.
- **Dropdown Keyboard Navigation:**
  - `Enter` or `Space` toggles dropdowns.
  - `Escape` closes active dropdown and returns focus to trigger button.
  - Arrow keys (`Up` / `Down`) cycle through menu items.
- **Focus Rings:** High-contrast 2px focus ring (`outline: 2px solid #C25E2E; outline-offset: 2px`) for keyboard focus states.
