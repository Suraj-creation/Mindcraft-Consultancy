# 23 — Performance

> Parents: `requirements.md` §15 (performance first-class, lightweight by default), `design-principles.md` ("heavy effects that hurt performance" banned; no WebGL/particles/large video), `specs/19-design-system.md` (stack: React 19 + Vite + Tailwind v4 + `motion` + lucide-react; self-hosted subset fonts; SVG maps/diagrams), `specs/20-responsive-system.md` §7 (SVG-only maps, responsive images), `specs/22-accessibility.md` (reduced-motion; no perf/a11y trade-offs), `specs/25-content-integrity.md`.
>
> **Mandate:** the site is *lightweight by design*, not optimized as an afterthought. Every kilobyte and every dependency must earn its place. The "editorial intelligence report" language (typography + whitespace + hairline SVG) is inherently cheap to render; performance work is about keeping it that way. Buildable without further strategic decisions.

---

## 1. Purpose & targets

**Purpose.** Guarantee fast, stable, low-cost loads on mid-range mobile hardware and constrained African network conditions (3G/slow-4G realistic), so the site *feels* like a serious consultancy — instant, calm, no jank — while honoring the design bans (no WebGL/Three.js/particles/large video/heavy animation libraries).

**Primary metric targets (field + lab), per route, mobile-first:**

| Metric | Target (mobile) | Target (desktop) | Notes |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | **≤ 2.0 s** | ≤ 1.5 s | LCP element is the hero heading (text), not an image — text LCP is the default. |
| **CLS** (Cumulative Layout Shift) | **≤ 0.02** | ≤ 0.02 | Reserve space for fonts, media, maps, drawers. Effectively zero. |
| **INP** (Interaction to Next Paint) | **≤ 150 ms** | ≤ 120 ms | Spine/map/Explorer/accordion interactions must stay snappy. |
| **FCP** (First Contentful Paint) | ≤ 1.5 s | ≤ 1.0 s | — |
| **TBT** (Total Blocking Time, lab) | ≤ 150 ms | ≤ 100 ms | Minimal main-thread JS. |
| **TTFB** | ≤ 0.6 s | ≤ 0.6 s | Static hosting / CDN; prerendered HTML (§6, `specs/24`). |

**Lighthouse (mobile, throttled, per route):** Performance **≥ 90**, Best Practices **≥ 95**, and (from `specs/22`) Accessibility **≥ 95**, SEO **≥ 95**.

**Test conditions:** Lighthouse mobile preset (Moto-G-class CPU 4× slowdown, ~1.6 Mbps throttle) and an unthrottled desktop run; field validation via Web Vitals (CrUX-equivalent) once live.

---

## 2. Standards & budgets (enforced)

Budgets are enforced in CI (§5) and fail the build when exceeded. Sizes are **compressed transfer (Brotli/gzip)** unless stated.

### 2.1 JavaScript budgets (per route, transfer)

| Bundle | Budget (gzip/br) | Contents |
|---|---|---|
| **Shared app shell** (React 19 + Router + Header/Footer + tokens) | **≤ 70 KB** | Loaded once, cached across routes. |
| **Per-route initial JS** (route chunk on first paint) | **≤ 40 KB** | Route component + its above-the-fold components. |
| **Total initial JS on any first load** (shell + entry route) | **≤ 110 KB** | Home / any deep-linked route budget. |
| **Lazy chunk: Explorer** (`/explore` logic + data) | **≤ 45 KB** | Route-split; not in shell. |
| **Lazy chunk: SVG maps / Ecosystem / GeoModule** | **≤ 25 KB each** | Loaded only on routes that use them. |
| **`motion` (animation lib)** | **≤ 18 KB** | Import only the primitives used; tree-shaken; deferred where possible (§3). |
| **lucide-react icons** | **≤ 6 KB total** | Per-icon named imports only (tree-shaken); no barrel import. |

### 2.2 Total page-weight budgets (per route, first load, transfer)

| Asset class | Budget |
|---|---|
| **Total transfer, initial route** | **≤ 350 KB** (target ≤ 250 KB for Home) |
| HTML (prerendered) | ≤ 30 KB |
| CSS (Tailwind v4, purged) | ≤ 30 KB |
| Fonts (critical faces, subset woff2) | ≤ 80 KB (see §3.3) |
| SVG maps/diagrams (inline or fetched) | ≤ 25 KB per map |
| Images (only if photos used) | ≤ 120 KB per route, lazy below the fold |
| Third-party / analytics | **≤ 0 KB by default** (§4) |

### 2.3 Request & main-thread budgets

- **≤ 30 requests** on first route load; **≤ 3 render-blocking** requests (HTML, one CSS, preloaded critical font).
- **0 long tasks > 200 ms** during load; **INP interactions off the main-thread-critical path** (SVG/CSS transitions, not JS layout thrash).
- **No synchronous third-party script** in `<head>`.

---

## 3. Detailed requirements

### 3.1 Rendering & code-splitting
- **Route-based code-splitting** via `React.lazy` + `Suspense` for every route in `sitemap.md`. The app shell (Header, Footer, Router, design tokens) is the only always-loaded JS.
- **Lazy-load heavy/interactive modules** even within a route: `Explorer` (`/specs/13`), `EcosystemMap` + `SubSectorPanel` (`/specs/11`), `GeoModule`/`RegionSelector`/`CountryList` (`/specs/12`), `IndustryExplorerGrid` (`/specs/10`), `ProcessDiagram` (`/specs/14`). Load on route entry or on first interaction/visibility (IntersectionObserver), whichever the page spec requires above-the-fold.
- **`Drawer`/`Modal`** components (`specs/19` §3.7–3.8) are lazy — bundled only when first opened.
- **Data files** (`src/data/*.ts` per `specs/25` §7) are split per domain and imported by the route/module that needs them (geography data ships only with `/where-we-work` and `/explore`, etc.). Prefer JSON/typed-const data that tree-shakes; avoid pulling all data into the shell.
- **Prefetch on intent:** prefetch a route's chunk on link hover/focus (desktop) and on visible in-viewport CTAs (mobile), so navigation feels instant without inflating first load.

### 3.2 JavaScript discipline
- **Minimal client JS.** The site is content + progressive disclosure; there is no client-side data fetching for core content (content is static/prerendered). No global state library unless justified in §7.
- **Tree-shake aggressively:** named imports only; `lucide-react` icons imported individually; `motion` imports limited to the specific API used; no lodash/moment/large date libs.
- **No hydration of static sections that never change** — prefer static markup; hydrate only interactive islands (spine, accordions, explorer, geo, forms). (Implementation choice: selective/lazy hydration where the chosen prerender approach supports it — §6.)
- **Defer non-critical JS:** analytics (if ever added, §4), non-critical islands hydrate after first paint / on idle (`requestIdleCallback`) or on interaction.

### 3.3 Fonts (self-hosted, subset, preload critical)
Stack fonts (`specs/19` §1.2): **Fraunces** (display), **Inter** (body/UI), **IBM Plex Mono** (labels/data).
- **Self-host** all faces as **Latin-subset `woff2`** in `src/assets/fonts` (no Google Fonts network hop; no CSS `@import` from a third party).
- **Subset to Latin** (+ the specific glyphs needed for place names like "Côte d'Ivoire"); drop unused weights/scripts. Variable fonts allowed but subset and axis-limited to the weights used (Fraunces 300–500; Inter 400/500; Mono 400/500).
- **`font-display: swap`** on every face — text paints immediately in the fallback, no invisible-text (FOIT). Fallback stack metrics tuned (`size-adjust`/`ascent-override`) to minimize the swap reflow → protects CLS.
- **`<link rel="preload" as="font" type="font/woff2" crossorigin>`** for the **two most critical faces only** (the hero display weight of Fraunces + Inter regular). Do not preload every weight.
- **Budget:** critical faces ≤ 80 KB total (§2.2); non-critical weights load lazily.

### 3.4 Maps, diagrams & graphics (SVG, no heavy engines)
- **All maps and diagrams are SVG/CSS** — Africa line-map, `ValueChainSpine`, `EcosystemMap`, `ProcessDiagram`, coordinate/ring motifs (`specs/19` §4, `specs/20` §7). **Banned:** WebGL, Three.js, tile maps (Leaflet/Mapbox), globe libraries, canvas particle systems, Lottie/heavy JSON animation, autoplaying/large video (`design-principles.md` Do-Not).
- **Inline** small critical SVGs (spine, motifs) to avoid extra requests; **fetch/lazy** larger SVGs (Africa map ≤ 25 KB) with the module that uses them. Optimize with SVGO; strip editor metadata.
- On mobile, complex SVGs **degrade to lists/chips** (`specs/20` §5.3/§5.5) rather than shipping a heavier asset — the degraded form is *lighter*, not heavier.

### 3.5 Images (only if photography is used; `specs/19` §4, `specs/20` §7)
The design is primarily typographic; **images are optional**. If any photo/OG raster ships:
- **Modern formats:** AVIF with WebP fallback; no unoptimized PNG/JPEG for photos.
- **Responsive `srcset` + `sizes`** (e.g., 640/960/1280/1920) so mobile never downloads desktop pixels.
- **`loading="lazy"` + `decoding="async"`** for all below-the-fold images; the LCP element is text, so no hero image needs eager loading (if a photographic hero is ever introduced it must be `fetchpriority="high"` and pre-sized).
- **Intrinsic `width`/`height`** (or aspect-ratio box) on every image/media/SVG container to reserve space → **zero CLS**.
- **No stock AI/robot/hologram imagery; no fabricated people** (`specs/25`, `specs/19` §4).
- **OG/Twitter share image** (`specs/24`) is a single static optimized asset (line-motif, ≤ 200 KB, cached), not per-page rasters.

### 3.6 CSS
- **Tailwind v4** with content-scanning purge → only used utilities ship; tokens via `@theme` (`specs/19` §5). Target ≤ 30 KB CSS (gzip).
- **Critical CSS inlined** for the shell (tokens, layout, above-the-fold) via the build; rest deferred. No unused framework CSS, no CSS-in-JS runtime.
- No large decorative background images; backgrounds are flat paper/ink tokens.

### 3.7 CLS avoidance (target ≤ 0.02)
- Reserve space for: fonts (metric-tuned fallbacks + swap), all media/SVG (intrinsic dimensions), sticky header (fixed height, `scroll-margin-top` per `specs/22` §5).
- Disclosure UI (`Drawer`, `DetailPanel`, `Accordion`) **expands within reserved flow or as an overlay** — inline expansions animate height without shifting unrelated content above; overlays (drawer/modal) do not reflow the page.
- No content injected above existing content after load; no late banners/cookie bars that push layout (§4).
- Skeletons/`Suspense` fallbacks for lazy chunks occupy the **same box** as the loaded module.

### 3.8 Motion & INP
- Use CSS transitions for simple state (chevron, hover, panel height) per `specs/19` §1.7; reserve `motion` for orchestrated reveals only. All motion ≤ `--dur-slow` (400 ms).
- **`prefers-reduced-motion: reduce`** disables transforms/scroll-reveal → also removes their (small) cost (`specs/22` §9). Reduced-motion path is the *cheapest* path.
- Interactions must not trigger layout thrash: animate `transform`/`opacity`, not `top`/`width` where avoidable; debounce Explorer filtering; keep per-interaction work < 50 ms JS.

### 3.9 Caching & delivery
- Static hosting/CDN with **immutable, content-hashed** assets (`Cache-Control: max-age=31536000, immutable` for hashed JS/CSS/fonts/SVG); short cache + revalidation for HTML.
- HTTP/2+; Brotli compression on text assets. Preconnect only to same-origin (fonts are self-hosted → no third-party preconnect needed).

---

## 4. Dependency justification (every dependency must earn its place)

**Rule:** no dependency is added without a row here (dep → why → cost → alternative rejected). New dependencies require updating this table and passing the budget gate.

| Dependency | Why it's needed | Approx. cost (gzip) | Alternative considered / rejected |
|---|---|---|---|
| **React 19** | Component model for a stateful, disclosure-heavy UI (spine, explorer, accordions, drawers); mature a11y ecosystem (`jsx-a11y`). | ~45 KB (react + react-dom, shell) | Vanilla/Preact — Preact viable but React 19's selective-hydration + team familiarity win; cost controlled by splitting. |
| **Vite** | Build/dev only — code-splitting, tree-shaking, asset hashing, CSS purge. | 0 KB runtime | CRA/Webpack — heavier config, slower; rejected. |
| **React Router** | Client routing for 13 routes + utility, deep-link/back/forward (`specs/17`). | ~10 KB | Hand-rolled router — reinvents history/focus handling; rejected. |
| **Tailwind v4** | Token-driven utilities from `@theme`; purged to only-used CSS; enforces `specs/19` tokens (no ad-hoc hex/px). | ≤ 30 KB CSS, 0 KB JS runtime | Hand-written CSS — more drift risk; CSS-in-JS — runtime cost; rejected. |
| **`motion`** | Purposeful reveals/panel transitions that respect reduced-motion; only where CSS is insufficient. | ≤ 18 KB (tree-shaken, deferred) | GSAP/anime.js — heavier, more than needed; CSS-only — used for simple cases; `motion` kept minimal. |
| **lucide-react** | Line icons matching editorial language; per-icon tree-shaken import. | ≤ 6 KB (only icons used) | Icon fonts — worse a11y/CLS; SVG sprite — viable fallback if lucide grows the bundle. |

**Explicitly rejected / banned** (design + performance): Three.js / WebGL, Mapbox/Leaflet/tile maps, globe libs, particle/canvas effect libs, Lottie, large carousel/slider libs, moment/lodash, any analytics SDK by default, web-font CDNs, chart libraries (restrained data-viz is hand-built SVG/CSS per `specs/19` §4).

**Analytics/third-party:** none by default (0 KB). If added later, must be a single lightweight, cookieless, deferred/`async` script that does not block render, does not push layout (no CLS), and is re-justified in this table and re-budgeted.

---

## 5. Testing method & tools

- **CI budget gate (blocking):** Lighthouse CI (`lighthouserc`) or a bundle-size check (e.g., `size-limit` / Vite `rollup-plugin-visualizer` thresholds) enforcing §2 budgets per route; build fails on exceed. Bundle analyzer report reviewed per PR.
- **Lighthouse (mobile preset)** run on **every route** (Home, `/what-we-do` + 4 pillars, `/industries`, `/industries/life-sciences`, `/where-we-work`, `/how-we-work`, `/about`, `/contact`, `/explore`) — Performance ≥ 90, plus BP/SEO/a11y thresholds (§1).
- **Web Vitals field check:** measure LCP/CLS/INP with the `web-vitals` library in a staging/preview and (post-launch) in production; validate against §1.
- **Throttled manual pass:** Chrome DevTools "Slow 4G" + 4× CPU on Home, `/explore`, `/where-we-work`, `/industries/life-sciences` — confirm interaction responsiveness (spine select, region select, explorer compose, accordion) stays ≤ 150 ms INP and no long tasks > 200 ms.
- **Font/CLS check:** verify preloaded faces, `font-display: swap`, metric-tuned fallbacks, and layout-shift-free swap (DevTools Performance → Layout Shift regions = none).
- **Network audit:** confirm no third-party requests, ≤ 30 requests, ≤ 3 render-blocking, Brotli on text, immutable caching on hashed assets, and that heavy modules load only on their routes (verify Explorer/GeoModule/Ecosystem chunks are absent from Home's network waterfall).
- **Reduced-motion perf check:** with OS reduced-motion on, confirm animations are removed (cheapest path) and behavior is unchanged.

---

## 6. SPA / prerender note (implementation choice — coordinate with `specs/24`)

The stack is a **Vite SPA**, which by default ships an empty HTML shell (bad for TTFB/LCP/SEO). **Recommended:** build-time **prerendering / static generation** of each route's HTML (e.g., `vite-plugin-ssg`/`vite-react-ssg`, `vite-plugin-prerender`, or a prerender step), so every route serves fully-formed HTML with its content and per-page `<head>` metadata (`specs/24`), then hydrates interactive islands. This:
- makes **text LCP** paint from server HTML (meets §1 LCP without waiting for JS),
- eliminates the shell-render round-trip on first load,
- lets `specs/24` inject correct per-route title/description/canonical/OG at build time (no client-only meta).

This is flagged as an **implementation choice** (prerender vs light SSR); either is acceptable if it delivers prerendered HTML + per-route head + hydrated islands within the budgets. Client-only rendering (blank shell then JS) is **not acceptable** for the primary routes.

---

## 7. Acceptance criteria (testable, with thresholds)

1. **Core Web Vitals (mobile, per route):** LCP ≤ 2.0 s, CLS ≤ 0.02, INP ≤ 150 ms — verified in Lighthouse mobile preset and field (`web-vitals`).
2. **Lighthouse (mobile, every route):** Performance ≥ 90, Best Practices ≥ 95, SEO ≥ 95, Accessibility ≥ 95 (`specs/22`).
3. **JS budgets met (§2.1):** shell ≤ 70 KB, per-route initial ≤ 40 KB, total initial ≤ 110 KB; Explorer/maps/`motion`/lucide within their caps — enforced by CI bundle gate.
4. **Total transfer (§2.2):** ≤ 350 KB per initial route (Home ≤ 250 KB); ≤ 30 requests; ≤ 3 render-blocking; Brotli + immutable caching verified.
5. **Code-splitting verified:** each route is its own chunk; Explorer, GeoModule, EcosystemMap, IndustryGrid, ProcessDiagram, Drawer/Modal are lazy and **absent from Home's initial waterfall**; prefetch-on-intent works.
6. **Fonts:** self-hosted, Latin-subset woff2, `font-display: swap`, ≤ 80 KB critical, exactly the two critical faces preloaded, metric-tuned fallbacks → swap causes no measurable CLS.
7. **No banned tech present:** zero WebGL/Three.js/tile-map/globe/particle/Lottie/large-video/chart-lib code in any bundle (verified in analyzer); no third-party runtime requests by default.
8. **Every dependency appears in §4** with justification and cost; total dependency footprint within budgets; no un-justified dep in `package.json`.
9. **CLS sources eliminated:** all media/SVG pre-sized, sticky header fixed height, disclosure overlays don't reflow page, no late layout-pushing injections.
10. **Prerendered HTML** served for all primary routes (§6) with correct per-route `<head>` (`specs/24`); text LCP paints from HTML before hydration; no blank-shell first render.
11. **Throttled interaction pass** (Slow 4G + 4× CPU) on Home/`/explore`/`/where-we-work`/`/industries/life-sciences`: no long task > 200 ms, INP ≤ 150 ms, no jank.
12. **Reduced-motion path** removes animation cost and preserves behavior/shape (`specs/22` §9, `specs/20` §8).
