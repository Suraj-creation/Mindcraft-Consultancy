# 00 — Technology Architecture Decision Record

> **Status:** Approved for implementation · **Date:** 2026-09-03
> **Scope:** Production frontend + serverless boundary on Azure Static Web Apps Standard
> **Governs:** all implementation decisions; supersedes any conflicting framework assumption in `specs/19`
> **Sources verified:** React 19.2, Vite 8, Astro 6, Tailwind 4.3, Azure SWA docs (learn.microsoft.com, 2026-03-25), TypeScript 7.0, Node 24 LTS — all confirmed against official primary sources, September 2026.
> **Legend:** `[VERIFIED]` = confirmed against official docs · `[REC]` = architectural recommendation · `[INFER]` = reasoned inference

---

## 0. Executive verdict

Build the site as an **Astro 6 static site whose interactive modules are React 19 islands** — not as a React SPA. This is a *refinement of the specs, not a departure*: every interactive component (Explorer, ValueChainSpine, GeoModule, EcosystemMap, IndustryExplorerGrid, ProcessDiagram, Header/MobileMenu, Accordion, Tabs, Drawer, ContactForm) is still written in React/TypeScript with Tailwind v4 and lucide. What changes is the **shell**: static editorial content ships as zero-JS HTML; only islands hydrate. This is the cleanest path to hitting the JS budgets (`specs/23` §2), the prerender/SEO mandate (`specs/23` §6, `specs/24`), and the WCAG 2.2 AA target (`specs/22`) on ~$9/month static hosting.

### What changes from the original hypothesis

| Item | Original hypothesis | Decision | Reason |
|---|---|---|---|
| Site framework | React SPA + Vite | **Astro 6** | Natively delivers prerender + islands; 0-JS static sections meet budget |
| React | React 19 | **React 19** ✓ | Kept — all islands are React |
| Routing | React Router | **Astro file routing** | Astro replaces the router; URL state in islands uses `history.replaceState` directly |
| Zustand | Proposed | **Removed at launch** | No cross-island global state exists; Explorer state is URL-encoded |
| TanStack Query | Proposed | **Removed at launch** | No client data fetching for core content; reintroduce only for a future authed portal |
| Three.js / R3F | Proposed (selective) | **Removed** | Banned by `design-principles.md` and `specs/23` §4 — no 3D requirement exists |
| Tailwind v4 | Proposed | **Tailwind v4** ✓ | Matches `specs/19` §5 verbatim; confirmed stable GA (4.3.x) `[VERIFIED]` |
| Motion library | Motion for React | **CSS-first; Motion optional** | 90% of the `specs/21` §9 motion inventory is CSS-expressible; Motion via `LazyMotion`+`m` if a sequence requires it |
| CMS | "potentially later" | **No CMS at launch** | Typed TS data files + Astro content collections (Zod) cover all integrity requirements |

---

## 1. The two constraints that determine everything

**1. Prerendered HTML is non-negotiable.**
`specs/23` §6: *"client-only rendering is not acceptable for the primary routes."*
`specs/24` §3.1: *"client-only meta (helmet without prerender) is not sufficient."*
A plain Vite React SPA ships an empty shell — it requires a separate SSG step (vite-react-ssg, React Router v7 prerender) to fix this. Astro's default output *is* prerendered HTML. One tool, no plugins.

**2. Islands architecture is already specified.**
`specs/23` §3.2: *"no hydration of static sections that never change — hydrate only interactive islands."*
That is a precise definition of partial/selective hydration. Astro implements this natively with `client:*` directives. A React SPA hydrates the whole component tree, requiring manual splitting discipline to approximate it. Astro makes the correct behavior the default.

---

## 2. Verified current versions (September 2026)

| Technology | Latest stable | Source |
|---|---|---|
| React | 19.2.x | react.dev/versions `[VERIFIED]` |
| React Compiler | 1.0 (stable, prod-recommended) | react.dev/blog/2025/10/07/react-compiler-1 `[VERIFIED]` |
| Astro | 6.x (6.3–6.4 minor) | astro.build/blog/astro-6 `[VERIFIED]` |
| Vite | 8.x (Rolldown default) | vite.dev/blog/announcing-vite8 `[VERIFIED]` |
| Tailwind CSS | 4.3.x | tailwindcss.com/blog/tailwindcss-v4-3 `[VERIFIED]` |
| Motion | 12.43–13.x | motion.dev (v13 Aug 2026) `[VERIFIED]` |
| Base UI | 1.7.0 | base-ui.com/react/overview/releases `[VERIFIED]` |
| Radix Primitives | 2.x (WorkOS-maintained) | radix-ui.com `[VERIFIED]` |
| React Aria Components | 1.21.0 | react-aria.adobe.com `[VERIFIED]` |
| lucide-react | 1.39.x | lucide.dev `[VERIFIED]` |
| Vitest | 4.x (browser mode stable) | npmjs.com/package/vitest `[VERIFIED]` |
| Playwright | 1.57.x | playwright.dev `[VERIFIED]` |
| @axe-core/playwright | 4.13.x | npmjs.com `[VERIFIED]` |
| TypeScript | 7.0 (Go-native compiler) | github.com/microsoft/TypeScript `[VERIFIED]` |
| Node LTS | 24 (Active LTS; 22 = Maintenance) | nodejs.org `[VERIFIED]` |
| Azure SWA Standard | ~$9/app/mo, 100 GB included, $0.20/GB overage | learn.microsoft.com/azure/static-web-apps/quotas `[VERIFIED]` |

**Azure SWA price note:** The exact "$9" is corroborated but the pricing page is JS-rendered. Confirm in the Azure portal before contracting. `[VERIFIED caveat]`
**Dedicated plan:** retired October 31 2025. Only Free and Standard plans remain. `[VERIFIED]`

---

## 3. Recommended stack

| Technology | Category | Purpose | Why selected | Alternative considered | Why rejected |
|---|---|---|---|---|---|
| **Astro 6** | Framework / router / prerender | Static shell, file routing, islands, content collections, per-route `<head>` | Natively delivers prerender + islands; 0-JS static sections; official Azure SWA deploy guide exists `[VERIFIED]` | React SPA + vite-react-ssg; Next.js | SPA needs an extra SSG step + hydrates whole tree; Next hybrid is Preview on SWA with hard limits (250 MB cap, no ISR cache, no SWA CLI) `[VERIFIED]` |
| **React 19** | Island UI runtime | All interactive modules | Spec-aligned; mature a11y ecosystem; Compiler 1.0 removes manual memoisation | Preact, Svelte, Vue | Spec/team are React; Preact risks lib compat; Svelte/Vue discard written specs |
| **TypeScript 7 (strict)** | Language | Type safety; typed domain/data models | Explorer integrity + data-file governance depend on types; Explorer anti-fabrication invariants are enforced by the schema | JS + JSDoc | Weaker guarantees for integrity rules |
| **Tailwind CSS 4.3** | Styling / tokens | Design tokens via `@theme`; utilities | Matches `specs/19` §5 verbatim; purges to ≤30 KB; 0 runtime JS | CSS Modules; CSS-in-JS | Token drift risk; runtime cost |
| **Headless primitives** — **Base UI 1.x** (default) or Radix Primitives 2.x; React Aria if a11y-max | Accessible behaviour | Dialog/Drawer, DropdownMenu, Tabs, Accordion — focus-trap + roving tabindex | WCAG 2.2 AA focus management (2.4.11/2.4.13); hand-rolling focus traps is the top a11y-regression risk | Hand-roll everything; MUI/Chakra | Hand-rolling is error-prone; styled kits fight the editorial look |
| **lucide-react 1.39** | Icons | Stroke line icons | Matches editorial line language; per-icon tree-shake ≤6 KB | Icon fonts; SVG sprite | Worse a11y/CLS; sprite is the fallback if bundle grows |
| **Motion (optional at launch)** | Orchestrated animation | Only where CSS cannot express a sequence | `specs/21` §9 motion inventory is 90% CSS; add with `LazyMotion`+`m` under ≤18 KB cap | GSAP; anime.js; CSS-only | GSAP/anime heavier than needed; CSS-only is the launch default |
| **Zod** | Validation | Content-collection schemas, Explorer URL params, contact-form + Function input | Build-time integrity gate; native to Astro collections; Astro 6 imports from `astro/zod` | io-ts; valibot | Zod already in the Astro toolchain |
| **Vitest 4 + React Testing Library** | Unit/component test | Explorer composition/degradation, domain logic, components | Vite-native (shares pipeline); browser mode stable; fast | Jest | Extra config; slower; separate transform |
| **Playwright 1.57 + @axe-core/playwright 4.13** | E2E + automated a11y | Deep links, keyboard nav, reduced-motion, mobile shapes, axe per route | Multi-browser, parallel, traces; axe integration satisfies `specs/22` §14 | Cypress | Single-engine; weaker parallelism/traces |
| **ESLint (jsx-a11y) + Prettier** | Quality gates | Lint, format, a11y lint | `specs/22` mandates `jsx-a11y` in CI | Biome | ESLint has the a11y plugin maturity |
| **Azure Static Web Apps (Standard)** | Hosting | Global static delivery, TLS, PR previews, managed Functions | Static + serverless; ~$9/mo; no always-on server; 10 PR preview environments | App Service; Vercel/Netlify | App Service = always-on server not needed; Azure is the chosen platform |
| **Azure Functions (managed, Node 22)** *(added when contact form ships)* | Serverless API | Contact submission; later AI proxy | Included in Standard; `/api` route; no separate resource | BYO linked backend | Managed is simplest; switch to BYO+Key Vault when AI keys or scale demand it |

**Content at launch:** typed TypeScript data files + Astro content collections (Zod schemas) + MDX for editorial bodies. **No CMS.** `[REC]`

---

## 4. Architecture diagram

```
                      ┌──────────────────────────────────────────────┐
  Author / Git        │  Repository: Astro 6 + React islands + data   │
  ─────────────       │  content/*.ts (Zod)  ·  components/react/*.tsx │
       │ push/PR      │  pages/*.astro        ·  domain/*.ts (pure TS) │
       ▼              └──────────────┬───────────────────────────────┘
  GitHub Actions                     │  Azure/static-web-apps-deploy@v1
  typecheck                          │
  → ESLint (jsx-a11y)                ▼
  → Vitest (unit + component)  ┌─────────────────────────────────┐
  → astro build                │  Static output: dist/            │
  → Playwright + axe           │  per-route .html + hashed        │
  → bundle-budget gate ────────│  JS/CSS/woff2/SVG assets         │
       │                       └──────────────┬──────────────────┘
       └──────────────────────────────────────┘
                                              │ deploy
                             ┌────────────────▼──────────────────────────┐
  Browser ◀── global edge ──│    AZURE STATIC WEB APPS (Standard)         │
  prerendered HTML           │  staticwebapp.config.json:                 │
  paints text LCP;           │    globalHeaders (CSP + security headers)  │
  islands hydrate            │    trailingSlash policy                    │
                              │    responseOverrides (noindex 404)         │
                              │  free TLS · custom domain · PR previews   │
                              └──────┬─────────────────────────────┬──────┘
                                     │ /api/*  (added later)        │
                                     ▼                              ▼
                          ┌──────────────────────┐    (no server needed
                          │  Azure Functions       │     to render the site
                          │  managed, Node 22      │     at launch)
                          │  /api/contact → email  │
                          │  /api/ai → LLM (later) │
                          └──────────┬─────────────┘
                                     ▼
              External services (added progressively):
              email (ACS / Resend)  ·  CRM (HubSpot)
              LLM provider (Anthropic)  ·  cookieless analytics (optional)
```

At launch the serverless column does not exist. The site is 100% static files. The Function layer is added the day the contact form goes live — no frontend changes required.

---

## 5. Static / client / serverless / external boundary

| Layer | What lives here | When |
|---|---|---|
| **Static (0 JS)** | All 13 routes' editorial content; nav/footer markup; SEO `<head>` (title/desc/canonical/OG/Twitter/JSON-LD); sitemap; robots.txt; SVG maps/diagrams | Launch |
| **Client islands** | ValueChainSpine, EcosystemMap + SubSectorPanel, IndustryExplorerGrid, GeoModule, **Explorer**, ProcessDiagram, Header/MobileMenu, Accordion/Tabs, Drawer, ContactForm — hydrated `client:visible` or `client:idle` unless above-the-fold (`client:load`) | Launch |
| **Serverless** | Contact submission; AI proxy; email/CRM integration; future auth | Added later |
| **External** | LLM provider; email; CRM; optional cookieless analytics | Added later |

---

## 6. Technology decision matrix

Scores 1–5 (5 best), weighted for MindCraft's constraints (static-first, tight JS budgets, WCAG 2.2 AA, ~$9/mo, React spec).

| Option | MindCraft fit | Perf | Static host | Design | A11y | Maintain | Scale | DX | Cost | Ecosystem | **Total /50** |
|---|--|--|--|--|--|--|--|--|--|--|--|
| **Astro 6 + React islands** ✅ | 5 | 5 | 5 | 5 | 5 | 4 | 5 | 4 | 5 | 4 | **47** |
| React SPA + vite-react-ssg / RR7 prerender | 4 | 3.5 | 4 | 5 | 5 | 4 | 4 | 5 | 5 | 5 | **44.5** |
| Next.js static export (`output: 'export'`) | 3 | 3.5 | 4 | 5 | 5 | 4 | 4 | 4 | 5 | 5 | **42.5** |
| Next.js hybrid/SSR on SWA | 2 | 3 | 2 | 5 | 5 | 3 | 4 | 4 | 3 | 5 | **36** |
| SvelteKit (static adapter) | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 3 | 5 | 4 | **42** |
| Plain Vite React SPA (no prerender) | **disqualified** | — | — | — | — | — | — | — | — | — | **fails specs/23 §6** |

Notes: SvelteKit scores well technically but loses on spec/team fit — every spec is written for React. Next.js hybrid penalised because Azure SWA hybrid Next is still **Preview** with real hard limits `[VERIFIED]`, and SSR is not needed. Plain SPA without prerender violates `specs/23` §6 and `specs/24` and is disqualified.

---

## 7. Folder structure

Boundaries are by *architectural role*, not file type. The integrity-critical domain logic (`domain/`) is isolated and framework-free; swapping the shell later only touches `pages/` and `layouts/`.

```
mindcraft/
├── astro.config.mjs          # @astrojs/react, @tailwindcss/vite, sitemap, prefetch
├── staticwebapp.config.json  # globalHeaders (CSP), trailingSlash, responseOverrides
├── tsconfig.json             # strict mode
├── lighthouserc.js           # Lighthouse CI thresholds (specs/23 §1)
├── size-limit.config.js      # bundle budget gate (specs/23 §2)
│
├── public/
│   ├── robots.txt
│   ├── site.webmanifest
│   ├── favicon.ico / icon.svg / apple-touch-icon.png
│   └── og-default.png        # static line-motif OG image (≤200 KB)
│
├── src/
│   ├── pages/                # .astro routes → prerendered HTML (0 JS)
│   │   ├── index.astro                      # /
│   │   ├── what-we-do/
│   │   │   ├── index.astro                  # /what-we-do
│   │   │   ├── business-consulting.astro
│   │   │   ├── market-research.astro
│   │   │   ├── ai-training.astro
│   │   │   └── ai-enterprise-solutions.astro
│   │   ├── industries/
│   │   │   ├── index.astro                  # /industries
│   │   │   └── life-sciences.astro
│   │   ├── where-we-work.astro
│   │   ├── how-we-work.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── explore.astro                    # /explore (Explorer island)
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   └── 404.astro
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro  # <head>/SEO, header island, footer, skip-link, landmarks
│   │
│   ├── components/
│   │   ├── sections/         # .astro static section blocks (0 JS — editorial content)
│   │   │   ├── Hero.astro
│   │   │   ├── DifferentiatorList.astro
│   │   │   ├── GlanceStrip.astro
│   │   │   └── …
│   │   └── react/            # .tsx islands (hydrated client-side)
│   │       ├── Header.tsx           # client:load
│   │       ├── MobileMenu.tsx
│   │       ├── ValueChainSpine.tsx  # client:visible
│   │       ├── Explorer.tsx         # client:load (above fold on /explore)
│   │       ├── GeoModule.tsx        # client:visible
│   │       ├── EcosystemMap.tsx     # client:visible
│   │       ├── IndustryExplorerGrid.tsx
│   │       ├── ProcessDiagram.tsx
│   │       ├── Accordion.tsx
│   │       ├── Tabs.tsx
│   │       ├── Drawer.tsx
│   │       └── ContactForm.tsx
│   │
│   ├── design-system/
│   │   ├── tokens.css        # @import "tailwindcss" + @theme { all specs/19 tokens }
│   │   ├── fonts.css         # @font-face (Fraunces, Inter, IBM Plex Mono — woff2 subset)
│   │   ├── Button.tsx        # primitive: primary/secondary/ghost/link variants
│   │   ├── Chip.tsx          # selectable/filter/link variants; aria-pressed
│   │   ├── Tag.tsx
│   │   ├── Card.tsx          # flat, hairline, radius-1, no shadow
│   │   ├── Eyebrow.tsx
│   │   └── primitives/       # thin wrappers around chosen headless lib
│   │       ├── Dialog.tsx    # Base UI Dialog (or Radix)
│   │       ├── DropdownMenu.tsx
│   │       └── …
│   │
│   ├── domain/               # pure TypeScript — no React, no framework
│   │   ├── types.ts          # Industry, GeoSelection, Pillar, Composition (specs/13 §8.2)
│   │   ├── explorer.ts       # composeResult(): SPECIFIC→SEMI→MAPPED→GENERAL (specs/13 §8.3)
│   │   ├── geography.ts      # region/country model + depth-market flags
│   │   └── integrity.test.ts # Vitest: no metric/client/testimonial in any rendered string
│   │
│   ├── content/
│   │   ├── config.ts         # Astro content collection schemas (Zod)
│   │   └── data/
│   │       ├── pillars.ts    # source: "P" — four pillars + generalStatement + offeringNote
│   │       ├── industries.ts # source: "P"|"E" — 25 industries, hasFocusAreas, focusAreas?
│   │       ├── lifeSciences.ts
│   │       ├── geography.ts  # 4 regions × countries; 12 depth markets
│   │       ├── process.ts    # 6 engagement stages
│   │       └── differentiators.ts
│   │
│   ├── lib/
│   │   ├── seo.ts            # typed per-route head map (title/desc/canonical/og/jsonLd)
│   │   ├── url-state.ts      # read/write /explore?industry&geo&capability
│   │   ├── useReveal.ts      # IntersectionObserver hook (scroll-reveal, once)
│   │   └── analytics.ts      # stub — no-op until cookieless beacon is introduced
│   │
│   └── assets/
│       ├── fonts/            # Fraunces-*.woff2, Inter-*.woff2, IBMPlexMono-*.woff2 (Latin subset)
│       └── svg/              # africa-map.svg, spine motif, ecosystem placeholder
│
└── api/                      # Azure Functions (added when contact form ships)
    └── contact/
        └── index.ts          # Zod validate → email → CRM
```

---

## 8. Explorer architecture

The Explorer (`specs/13`) is the signature module. Its implementation is the clearest expression of the architecture's principles.

**Domain layer (pure TS — `src/domain/explorer.ts`):**
```ts
// composeResult() is a pure function of three inputs + the static data files.
// No React, no side effects, no async.
// The same function will move to /api/explore later without any changes.
composeResult(
  industry: Industry | null,
  geo: GeoSelection | null,
  capability: Pillar | null
): ComposedResult  // SPECIFIC | SEMI_SPECIFIC | MAPPED | GENERAL | PROMPT
```

Resolution ladder (`specs/13` §8.3): `SPECIFIC → SEMI_SPECIFIC → MAPPED → GENERAL → PROMPT` — detail only ever reduces, never fabricates.

**Integrity invariant (enforced by test in CI):**
```ts
// src/domain/integrity.test.ts
// Grep the string output of composeResult for every combination in the dataset.
// Zero hits for any banned token: metric, percentage, "proven", client name,
// "deployed", testimonial, case study, example project, market statistic.
```

**URL state (`src/lib/url-state.ts`):**
```
/explore?industry=pharmaceuticals&geo=kenya&capability=market-research
```
- On load: hydrates selectors and renders result (refresh-safe).
- On change: `history.replaceState` (Back/Forward walks prior compositions).
- Invalid params: degrade to unset, never throw.
- Same URL → same result (pure function of params + static data files).

**React island (`src/components/react/Explorer.tsx`):**
- Three selector controls (Industry / Geography / Capability) + result region.
- All state is URL-only — no Zustand, no Context needed.
- Result region is `aria-live="polite"`; selection summary is `role="status"`.
- Mobile: stacked stepper (Industry → Geography → Capability → Result); URL state identical.
- `client:load` on `/explore`; `client:visible` on Home teaser.

---

## 9. Design system architecture

Tokens → primitives → composites → experience modules → sections → pages. It avoids becoming a generic component library because primitives are constrained to the editorial token set (minimal radius, hairlines, one accent) and the experience tier encodes real relationships, not reusable widgets.

```
Design Tokens (@theme in tokens.css)
      ↓
Primitive Components  (Button / Chip / Tag / Card / Eyebrow / Divider)
      ↓
Headless-primitive-backed overlays  (Dialog / Drawer / DropdownMenu / Tabs / Accordion)
      ↓
Composite Components  (Header / MobileMenu / ContactForm / DetailPanel / RegionSelector)
      ↓
Experience Modules  (ValueChainSpine / Explorer / GeoModule / EcosystemMap / IndustryExplorerGrid / ProcessDiagram)
      ↓
Static Sections  (.astro — editorial content blocks, 0 JS)
      ↓
Pages  (index.astro, life-sciences.astro, explore.astro …)
```

One rule prevents drift: **every component consumes only `@theme` tokens — no ad-hoc hex or px values in component files.** Enforced by an ESLint rule.

---

## 10. Animation architecture

All motion comes from the `specs/21` §9 inventory — nothing outside that inventory is animated.

| What | How | Why |
|---|---|---|
| Hover/focus emphasis (color, border) | CSS `transition` | Compositor-only; zero JS |
| CTA arrow nudge (+4px) | CSS `transform` | Instant, cheap |
| Accordion expand/collapse (height + opacity) | CSS `transition` | No JS layout thrash |
| Drawer / bottom-sheet slide | CSS `transition` on `transform` | GPU-composited |
| Scroll-reveal (fade + ≤12px translate, once) | `useReveal` IntersectionObserver + CSS | Fires once; no scrubbing |
| Tab underline slide | CSS `transition` | — |
| Explorer result recompute swap | CSS `opacity` or instant | Client-side synchronous; no loading state |
| Orchestrated sequences (if needed) | `LazyMotion` + `m` (Motion) | Only if CSS is insufficient; deferred, ≤18 KB |

**`prefers-reduced-motion: reduce` global reset (in `tokens.css`):**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
This is the cheapest possible path and the default-correct behaviour. `specs/21` §9 reduced-motion column is satisfied by this one rule.

---

## 11. Testing pyramid

```
Unit (Vitest)
  └─ Explorer compose/degrade (SPECIFIC→SEMI→MAPPED→GENERAL)
  └─ Integrity: composeResult × all combinations → zero banned tokens
  └─ Geo model (region/country counts, depth markets)
  └─ SEO map (title ≤60, description 150–160, one H1 per route)
  └─ URL state encode/decode (valid + invalid params)

Component (Vitest browser mode + RTL)
  └─ Accordion: keyboard (Home/End/Arrow/Enter/Space), aria-expanded, chevron
  └─ Tabs → Accordion degrade: aria-selected, roving tabindex
  └─ Drawer: focus-trap, Esc close, overlay close, focus restore
  └─ Chip: aria-pressed toggle vs link vs radio semantics
  └─ ContactForm: error summary, aria-invalid, success role=status

E2E (Playwright, all 13 routes × 320/768/1280)
  └─ Deep links (/explore?industry=…&geo=…&capability=…) — hydrate + result correct
  └─ Explorer: compose → result → pre-scoped CTA → contact params
  └─ Back/Forward through prior Explorer compositions
  └─ Mobile stepper: Industry → Geography → Capability → Result
  └─ GeoModule: region chip → CountryList (one region at a time)
  └─ EcosystemMap → SubSectorPanel (desktop) → Drawer (mobile)
  └─ Nav dropdown: hover+keyboard; mobile menu: trap+Esc+focus-return
  └─ Contact form: submit → success/error states
  └─ No horizontal overflow at 320 (documentElement.scrollWidth ≤ clientWidth)

A11y (@axe-core/playwright, every route × 3 widths)
  └─ 0 serious/critical violations
  └─ Contrast: ink-700/ink-900 on paper ≥7:1; ink-500 ≥4.5:1; accent-600 ≥4.5:1 for text
  └─ Reduced-motion: no transforms/scroll-reveal with OS setting on
  └─ Focus not obscured by sticky header (scroll-margin-top)

CI budget gate (size-limit, blocking)
  └─ App shell ≤70 KB (gzip) — specs/23 §2.1
  └─ Per-route initial JS ≤40 KB
  └─ Total initial JS ≤110 KB
  └─ Total transfer ≤350 KB per route (Home ≤250 KB) — specs/23 §2.2
  └─ Explorer chunk ≤45 KB; SVG maps/GeoModule ≤25 KB each
  └─ Motion ≤18 KB; lucide ≤6 KB

Lighthouse CI (mobile preset, every route)
  └─ Performance ≥90, Best Practices ≥95, Accessibility ≥95, SEO ≥95 — specs/23 §1

Production smoke (post-deploy Playwright on live SWA URL)
  └─ Prerendered HTML present without JS (curl / view-source)
  └─ Per-route <title>, meta description, canonical, OG in the HTML
  └─ JSON-LD validates (no prohibited fields)
  └─ robots.txt + sitemap.xml accessible
```

---

## 12. Azure Static Web Apps deployment detail

**`staticwebapp.config.json` (key config for a multi-page Astro site):**
```json
{
  "trailingSlash": "never",
  "responseOverrides": {
    "404": {
      "rewrite": "/404",
      "statusCode": 404
    }
  },
  "globalHeaders": {
    "content-security-policy": "default-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; script-src 'self'; frame-ancestors 'none'",
    "x-content-type-options": "nosniff",
    "x-frame-options": "DENY",
    "referrer-policy": "strict-origin-when-cross-origin",
    "permissions-policy": "camera=(), microphone=(), geolocation=()"
  },
  "mimeTypes": {
    ".webmanifest": "application/manifest+json"
  }
}
```

Note: A fully prerendered multi-page site (per-route HTML files) **does not need `navigationFallback`** — real HTML files are served directly by path. `navigationFallback` is only needed for a client-only SPA. `[VERIFIED]`

**CI workflow (`astro.config.mjs` → GitHub Actions):**
```
push / PR
  └─ typecheck (tsc --noEmit)
  └─ ESLint (jsx-a11y, no ad-hoc hex)
  └─ Vitest (unit + component)
  └─ astro build  →  dist/
  └─ Playwright E2E + @axe-core/playwright (on built dist via astro preview)
  └─ size-limit (bundle budget gate — blocking)
  └─ Azure/static-web-apps-deploy@v1
       app_location: "."
       output_location: "dist"
       (no api_location until Functions are added)
  └─ PR → staging preview environment
  └─ merge → production
```

**Secrets at launch:** No Functions, no secrets. When the contact Function ships: encrypted app settings (portal "Environment variables") exposed to `process.env` in the Function only — never in the static frontend. `[VERIFIED]`

**Key Vault note:** Key Vault via managed identity is Standard-only and **does not work with managed Functions** `[VERIFIED]` — use app settings for launch secrets; migrate to BYO Functions + Key Vault when AI keys and scale require it.

---

## 13. Content architecture

```
Source documents (MindCraft Corporate Profile, industry-verticals-geography.md)
      ↓
Typed TypeScript data files (src/content/data/*.ts)
      ↓  validated by
Astro content collections (config.ts — Zod schemas, source field required,
                            no metric/client/testimonial fields in schema)
      ↓
Domain layer (src/domain/*.ts — pure functions, no framework)
      ↓
Components / islands (consume domain + content data)
      ↓
Pages (compose sections + islands → prerendered HTML)
```

**Integrity is enforced structurally, not by convention:** a data file without a `source: 'P'|'E'|'derived'` field fails the Zod schema at build. A data file with a `metric` field fails the schema (field doesn't exist). A CI grep test confirms zero banned tokens in any rendered output string.

**CMS trigger:** introduce a headless CMS (Keystatic for git-based / Sanity for hosted) only when non-developer content editors need to publish. The Astro content collection API is the stable interface; the data source behind it swaps transparently.

---

## 14. Security architecture

**Launch (static frontend only):**
- CSP + security headers via `globalHeaders` in `staticwebapp.config.json`
- No secrets in the client bundle (all content is public, typed static data)
- `dependabot` + `npm audit` in CI
- Form honeypot field (no CAPTCHA — `specs/22` §2, WCAG 3.3.8)

**When Functions ship (contact form):**
- API keys in encrypted app settings (never in the frontend)
- Zod validation on every Function input (untrusted boundary)
- Rate-limiting via Azure API Management or a simple token bucket in the Function
- No cognitive CAPTCHA — honeypot + server-side token

**Future (AI / auth):**
- BYO Functions + Key Vault + managed identity (Standard plan)
- Azure Static Web Apps built-in auth or Entra ID for private portal
- Private endpoints if needed (Standard plan, 1 included)

---

## 15. Explicit "DO NOT USE" list

| Technology | Reason |
|---|---|
| Three.js / React Three Fiber / any WebGL | Banned: `design-principles.md`, `specs/23` §4. No 3D requirement exists. |
| Canvas particle systems, Lottie, tile maps (Mapbox/Leaflet), globe libraries | Banned: same. Maps/data-viz are hand-built SVG/CSS. |
| Chart libraries (Recharts, Chart.js, Victory, etc.) | Banned: restrained data-viz is hand-built SVG/CSS per `specs/19` §4. |
| Zustand / Redux / any global client store *(at launch)* | No cross-island global state exists; Explorer state is URL-encoded. |
| TanStack Query *(at launch)* | No client data fetching; reintroduce only for a future authed portal. |
| React Router *(in the Astro recommendation)* | Astro file routing replaces it; URL state uses `history.replaceState` directly. |
| Next.js hybrid/SSR on Azure SWA | Still Preview with hard limits (250 MB, no ISR cache, no SWA CLI). `[VERIFIED]` |
| CSS-in-JS runtime (styled-components / Emotion) | Runtime cost conflicts with JS budgets; Tailwind tokens cover styling needs. |
| A headless CMS at launch | No publishing-workflow pressure; typed data + Astro collections are simpler and safer. |
| Google Fonts / any external font CDN | Self-hosted woff2 — no third-party network hop; privacy; CSP compliance. |
| Any analytics SDK by default | 0 KB third-party baseline per `specs/23` §4. |
| Icon fonts | Worse a11y and CLS; lucide-react is the specified choice. |
| moment / lodash / large utility bundles | Bundle cost; use native JS where needed. |
| Auto-playing video / parallax / floating particles | Banned by `design-principles.md`. |

---

## 16. Risks and mitigations

| Risk | Mitigation |
|---|---|
| **Astro learning curve for a React-only team** | `.astro` files are HTML + JSX-lite; all logic lives in React islands + pure TS domain. Budget 2–3 days ramp. |
| **Island boundary discipline** | Over-hydrating silently blows the JS budget. CI bundle gate is blocking; `client:*` requires a justifying comment in review. |
| **Header remount across MPA navigations** | Astro View Transitions + `transition:persist` on the header gives SPA-like feel on Chromium; full nav is fast cached elsewhere. Content is never gated on it. |
| **Cross-document View Transitions are Chromium-only** `[VERIFIED]` | Pure progressive enhancement — nothing is gated on them per `specs/22` §9. |
| **Azure price drift** | Corroborated ~$9 but JS-rendered pricing page. Confirm live in the portal. |
| **Managed-Function secret handling** | Key Vault + managed identity excluded from managed Functions `[VERIFIED]`. Use encrypted app settings at launch; BYO Functions when AI keys arrive. |
| **Headless-primitive library churn** (Radix→WorkOS / Base UI / React Aria in flux) `[VERIFIED]` | Wrap every primitive behind `design-system/primitives/` — the underlying library is swappable without touching product components. |
| **Product pivots to a true app** (heavy auth, real-time) | Migration path (§17) isolates that into a server route group or separate app; the marketing site is unaffected. |

---

## 17. Migration paths

| Trigger | What you add | Frontend impact |
|---|---|---|
| Contact form goes live | Azure Function `/api/contact` → email (ACS/Resend) + CRM; Zod + honeypot; key in app settings | Form `action` points at `/api/contact`; nothing else changes |
| Content much larger / non-dev publishing | Keystatic (git-based) or Sanity (hosted) behind Astro content collections | Data source swaps; components unchanged |
| Explorer becomes API-backed | Function `/api/explore` returns the identical typed `ComposedResult`; domain logic reused server-side | Swap pure function for a `fetch`; URL state and UI identical |
| AI features (intelligent enquiry, demonstration) | Function `/api/ai` proxies LLM server-side (key never in client); stream via chunked response | New island calls `/api/ai`; static site untouched |
| Authentication / private client portal | Astro `server` output for that route group + adapter, **or** a separate sibling app; SWA auth or Entra ID | Public site stays static; portal is isolated |
| Traffic spikes | SWA global edge already included; add Enterprise-grade edge (Front Door) as needed | None (extra cost, opt-in) |
| Enterprise integrations at scale | BYO/linked Functions + Key Vault + managed identity + APIM or App Service | No public site changes |

---

## 18. Performance budgets (enforced in CI — specs/23 §2)

| Bundle / Asset | Budget (gzip/Brotli) |
|---|---|
| App shell (React runtime + Header + Footer + tokens) | ≤ 70 KB |
| Per-route initial JS (route island + above-fold components) | ≤ 40 KB |
| **Total initial JS on any first load** | **≤ 110 KB** |
| Explorer chunk (`/explore` — lazy) | ≤ 45 KB |
| SVG maps / GeoModule / EcosystemMap (lazy, per module) | ≤ 25 KB each |
| Motion (`LazyMotion` + used primitives) | ≤ 18 KB |
| lucide-react (named imports only) | ≤ 6 KB total |
| CSS (Tailwind v4, purged) | ≤ 30 KB |
| Fonts (critical faces, Latin-subset woff2) | ≤ 80 KB |
| **Total transfer, Home (first load)** | **≤ 250 KB** |
| Total transfer, any other route (first load) | ≤ 350 KB |

**Core Web Vitals targets (mobile, per route):**

| Metric | Mobile target | Desktop target |
|---|---|---|
| LCP | ≤ 2.0 s | ≤ 1.5 s |
| CLS | ≤ 0.02 | ≤ 0.02 |
| INP | ≤ 150 ms | ≤ 120 ms |
| FCP | ≤ 1.5 s | ≤ 1.0 s |
| TTFB | ≤ 0.6 s | ≤ 0.6 s |

---

## 19. Final answer: is this architecture technically sound?

**YES — with conditions.**

It is sound because it is the *minimal* architecture that satisfies every hard requirement in the spec set: prerendered HTML for SEO/LCP, islands so static content ships 0 JS, WCAG 2.2 AA via battle-tested focus/roving-tabindex primitives, anti-fabrication rules enforced at build time by typed schemas, sophisticated interaction confined to a handful of React islands, and pure static output that deploys to Azure SWA Standard for ~$9/month with a clean, non-rewriting path to serverless and AI later.

**The seven conditions that must hold:**

1. CI bundle-budget gate is **blocking** (shell ≤70 KB, total initial JS ≤110 KB, Home ≤250 KB total).
2. Prerendered HTML is verified without JS (`curl`) on every route before launch.
3. One headless primitive library is chosen and wrapped behind `design-system/primitives/` (do **not** hand-roll dialog/drawer focus traps).
4. CSS-first motion; Motion library is opt-in per sequence; `prefers-reduced-motion` verified at every breakpoint.
5. Explorer logic lives in pure `domain/` TS with the integrity grep test in CI (zero banned tokens in any rendered output string).
6. Azure Standard price confirmed live in the portal; launch secrets in encrypted app settings (not Key Vault — see §12).
7. Serverless stays out of the render path — the site renders fully with zero Functions; `/api` is additive.

Meet those seven conditions and a senior team can start building the next morning.
