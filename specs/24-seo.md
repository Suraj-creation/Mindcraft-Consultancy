# 24 — SEO & Metadata

> Parents: `requirements.md` §12 (anti-fabrication), `design-principles.md` (credibility model — no fake proof), `specs/02-content-strategy.md` §8 (SEO copy hooks; one H1; 150–160 char description; natural Nairobi/Africa/Life Sciences inclusion, no stuffing), `specs/25-content-integrity.md` (source-true only — applies to meta/OG/schema), `specs/19-design-system.md` (favicon/wordmark), `specs/23-performance.md` §6 (prerender/SSG for meta on a Vite SPA), `specs/17-navigation.md` (per-route `<title>` on navigation).
>
> **Mandate:** every route ships correct, source-accurate `<head>` metadata and structured data built **only** from facts in the source documents. No fabricated ratings, reviews, employee counts, client counts, founding-as-longevity, or invented locations. Nairobi HQ, `info@mindcraftconsultancy.com`, and Africa/Europe/US reach are the *only* location/contact facts. Buildable without further strategic decisions.

---

## 1. Purpose & targets

**Purpose.** Make each route discoverable, correctly titled/described in search and social, and machine-understandable via honest structured data — without any integrity violation. SEO here is a *communication* layer over true facts, never a growth-hacking layer.

**Targets:**
- **Lighthouse SEO ≥ 95** on every route (crawlable, valid meta, descriptive links, correct `lang`, mobile-friendly).
- **100% route coverage:** every route in `sitemap.md` has a unique title (≤ 60 chars), description (150–160 chars), canonical, exactly one `<h1>`, and OG/Twitter tags.
- **Rich Results valid:** one Organization/ProfessionalService JSON-LD block validates in Google Rich Results Test / Schema.org validator with **zero** warnings for fabricated fields (because none exist).
- **Zero fabrication** in any meta/OG/schema field (cross-checked against `specs/25` §8).
- Prerendered HTML carries the metadata (not client-only) — `specs/23` §6.

---

## 2. Standards & rules

### 2.1 Per-page metadata contract (every route must have)
| Field | Rule |
|---|---|
| `<title>` | ≤ 60 chars; unique; pattern `[Page] — MindCraft…` or `[Page] \| MindCraft Consultancy`. Set on navigation (`specs/17`). |
| `<meta name="description">` | **150–160 chars**; source-true; naturally includes Nairobi/Africa/Life Sciences + the page's capability/industry; no keyword stuffing (`specs/02` §8). |
| `<link rel="canonical">` | Absolute self-URL on `https://www.mindcraftconsultancy.com` (trailing-slash policy consistent site-wide). Prevents param/duplicate dilution (esp. `/explore?…`). |
| **One `<h1>`** | Exactly one per page (`specs/22` §4); text per §4 table. Never more, never zero. |
| Open Graph | `og:title`, `og:description`, `og:type=website`, `og:url` (canonical), `og:image` (static line-motif), `og:site_name="MindCraft Consultancy Services"`, `og:locale="en"`. |
| Twitter | `twitter:card="summary_large_image"`, `twitter:title`, `twitter:description`, `twitter:image`. |
| `<meta name="robots">` | `index,follow` for the 13 real routes; `noindex,follow` for `/privacy`, `/terms` until real content exists (`specs/25` §9); `noindex` for 404. |
| Viewport / charset | `<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">`. |
| Language | `<html lang="en">` (`specs/22` §11). |

### 2.2 Copy rules for meta (from `specs/02`, `specs/25`)
- Descriptions describe **what MindCraft does / offers**, never completed results ("built to deliver," not "delivered"). No "proven," no numbers-as-metrics (the only numbers allowed are structural facts: 4 pillars, 6 sub-sectors, 45 countries / 4 regions, 6 stages, 5 differentiators, est. 2026).
- Titles/descriptions must not imply longevity from the 2026 founding, imply offices beyond Nairobi, or name any client/partner.
- Keyword targets woven naturally per page: **Nairobi**, **Africa**, **Life Sciences**, and the page's **capability/industry/geography** — each appears because it's *true and relevant*, not repeated for density.

### 2.3 Assets
- **Favicon set:** `favicon.ico` (multi-size), `icon.svg` (monochrome wordmark mark, adapts to light/dark), `apple-touch-icon.png` (180×180), all referenced in `<head>`.
- **Web App Manifest** (`site.webmanifest`): `name="MindCraft Consultancy Services"`, `short_name="MindCraft"`, `theme_color=#14181C` (ink), `background_color=#FAF7F2` (paper), icons (192/512 maskable), `display="standalone"`, `lang="en"`. All values source-true.
- **OG/Twitter image:** a single static, optimized editorial **line-motif** image (wordmark + hairline Africa/coordinate motif on paper) reused site-wide (or a small set of route-appropriate motifs), 1200×630, ≤ 200 KB (`specs/23` §3.5). **No stock/AI/robot imagery, no fabricated people** (`specs/25`, `specs/19` §4). Include `og:image:alt`.

---

## 3. Detailed requirements — implementation

### 3.1 Meta injection on a Vite SPA (implementation choice — coordinate `specs/23` §6)
- **Recommended:** build-time **prerender/SSG** so each route's HTML already contains its `<title>`, description, canonical, OG/Twitter, and JSON-LD (crawlers and social scrapers see correct tags without executing JS). Use `react-helmet-async` (or the head API of the chosen SSG, e.g., `vite-react-ssg`) to declare per-route head; the prerender step bakes it into static HTML.
- If light SSR is chosen instead, it must emit the same per-route head server-side.
- **Client-only meta (helmet without prerender) is not sufficient** for the primary routes (social scrapers/some crawlers won't run JS) — this is the reason `specs/23` §6 mandates prerendered HTML.
- On client navigation, `react-helmet-async` still updates `document.title` and meta so in-app route changes stay correct (`specs/17` §"route change side-effects").
- Central **`<Seo>` component / `seo.ts` data map**: one typed record per route (title, description, canonical path, ogImage, jsonLd flag). Single source of truth; page components pass their key. Prevents drift and keeps every field reviewable against `specs/25`.

### 3.2 Structured data (JSON-LD) — Organization / ProfessionalService
One JSON-LD block, emitted site-wide (in the shell, or on Home + carried in prerendered HTML). **Only source-true fields:**

```jsonc
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",          // (also acceptable: Organization) — a consulting service
  "name": "MindCraft Consultancy Services",
  "alternateName": "MindCraft",
  "url": "https://www.mindcraftconsultancy.com",
  "email": "info@mindcraftconsultancy.com",
  "foundingDate": "2026",                    // factual founding year; NOT used to imply longevity
  "description": "Nairobi-based consultancy combining business consulting, market research, AI training and AI enterprise solutions, with deep Life Sciences expertise and an African focus.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nairobi",
    "addressCountry": "KE"
  },
  "areaServed": [
    { "@type": "Continent", "name": "Africa" },
    { "@type": "Continent", "name": "Europe" },
    { "@type": "Country", "name": "United States" }
  ],
  "knowsAbout": [
    "Business Consulting", "Market Research", "AI Training",
    "AI Enterprise Solutions", "Life Sciences", "Pharmaceuticals",
    "Medical Devices", "Medical Diagnostics", "Hospitals and Healthcare",
    "Market Access", "Pharmacovigilance", "Regulatory Intelligence",
    "AI Adoption", "Responsible AI"
  ],
  "logo": "https://www.mindcraftconsultancy.com/icon.svg",
  "image": "https://www.mindcraftconsultancy.com/og-default.png"
}
```

**Prohibited JSON-LD fields (must NOT appear — `specs/25` §2):** `aggregateRating`, `review`, `numberOfEmployees`, any `award`, `slogan` implying proof, client/partner references, `founder` with fabricated names, any metric/count of projects/clients/years, fake `openingHours`/`telephone`/street address, or `sameAs` to nonexistent profiles. `foundingDate` is included **only** as a true fact and is never paired with longevity language. No `PostalAddress.streetAddress` (only Nairobi locality is source-true — no fabricated street).

**Optional (only if source-true):** `contactPoint` with `email` + `contactType: "sales"`; `sameAs` **only** for verified official profiles that actually exist (omit otherwise). Breadcrumb JSON-LD may be added per route reflecting the true URL hierarchy (`/what-we-do/…`, `/industries/…`) — no fabricated data, safe to include.

### 3.3 sitemap.xml
- Generated at build (list from `sitemap.md`), served at `/sitemap.xml`. Include the **13 real routes only**; **exclude** `/privacy`, `/terms` (while `noindex`) and `/explore` query-parameter permutations (list only the canonical `/explore`).
- Each `<url>`: `<loc>` absolute canonical, `<lastmod>` (build date), optional `<changefreq>`/`<priority>` (Home highest). No fabricated URLs.

### 3.4 robots.txt
Served at `/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /privacy
Disallow: /terms
Sitemap: https://www.mindcraftconsultancy.com/sitemap.xml
```
- Do not block JS/CSS (needed for rendering evaluation). Remove `/privacy` and `/terms` `Disallow` once real content ships and they become `index`.

### 3.5 URLs & canonicalization
- Clean, lowercase, hyphenated paths (already defined in `sitemap.md`). One canonical form (choose trailing-slash policy and enforce via redirects at the host).
- **`/explore` query params** (`?industry=&geo=&capability=`) are functional/shareable state (`specs/13`) but SEO-canonicalize to `/explore` (canonical tag points to param-less URL) to avoid infinite duplicate indexing. Parametered states remain deep-linkable for users/social but are not separately indexed.
- 404 route returns a real Not-Found page with header/footer + navigation (`specs/17` §196), `noindex`, and (where the host allows) a 404 status.

---

## 4. Per-route metadata table (every route in `sitemap.md`)

Titles ≤ 60 chars; descriptions 150–160 chars; exactly one H1 each. Values for pages with a page spec are taken from that spec, which is authoritative (`03–16`); `/how-we-work` and `/contact` rows below are reconciled to `specs/14` §15 and `specs/16` §15. `/privacy`, `/terms` are authored here from canon facts. All source-true; Nairobi/Africa/Life Sciences woven naturally.

| Route | `<title>` (≤60) | Meta description (150–160) | One `<h1>` |
|---|---|---|---|
| `/` | `MindCraft Consultancy Services — Nairobi` | MindCraft is a Nairobi-based consultancy combining market research, business consulting, AI training and enterprise AI, with deep Life Sciences expertise. | Sector depth, meet applied AI. |
| `/what-we-do` | `What We Do — MindCraft Capabilities` | MindCraft's four capabilities — market research, business consulting, AI enterprise solutions and AI training — connect as one integrated value chain. | One engine, from question to impact. |
| `/what-we-do/business-consulting` | `Business Consulting — MindCraft Consultancy` | Strategy, transformation, org design and regulatory advisory from MindCraft, a Nairobi consultancy with deep Life Sciences expertise across Africa, Europe and the US. | Business Consulting |
| `/what-we-do/market-research` | `Market Research — MindCraft Consultancy` | Primary, secondary and impact research from MindCraft, a Nairobi consultancy turning complexity into decision-ready intelligence for Life Sciences across Africa and beyond. | Market Research |
| `/what-we-do/ai-training` | `AI Training & Digital Literacy — MindCraft` | Hands-on AI training and digital literacy from MindCraft, a Nairobi consultancy building internal AI champions and responsible AI adoption across Africa, Europe and the US. | AI Training & Digital Literacy |
| `/what-we-do/ai-enterprise-solutions` | `AI Enterprise Solutions — MindCraft Consultancy` | AI systems designed, built and integrated by MindCraft, a Nairobi consultancy: analytics, conversational AI, automation and Life Sciences AI across Africa and beyond. | AI Enterprise Solutions |
| `/industries` | `Industries We Serve \| MindCraft Consultancy` | MindCraft brings deep Life Sciences expertise and broad cross-industry capability — from pharma and medical devices to banking, energy and agribusiness across Africa. | Deep in Life Sciences. Broad across industry. |
| `/industries/life-sciences` | `Life Sciences Expertise \| MindCraft Consultancy` | MindCraft's founding heritage: deep Life Sciences expertise across pharma, medical devices, diagnostics, equipment, surgical consumables and hospitals in Africa and beyond. | Life Sciences is where we go deepest. |
| `/where-we-work` | `Where We Work — Africa, Europe & US \| MindCraft` | Headquartered in Nairobi, MindCraft works across all African countries — 45 markets in four regions — with 12 focus markets, and serves Europe and the United States. | Rooted in Nairobi. Focused on Africa. |
| `/how-we-work` | `How We Work — Process & Delivery \| MindCraft` | How a MindCraft engagement runs: a six-stage process, flexible delivery, and five reasons our Africa-focused, Life Sciences consulting and AI work holds up. | A clear path from question to impact. |
| `/about` | `About MindCraft — Nairobi Consultancy` | MindCraft is a Nairobi consultancy founded in 2026 to pair deep Life Sciences expertise with applied AI across Africa, Europe and the United States. | Built to close a real gap. |
| `/contact` | `Contact MindCraft — Start a Conversation \| Nairobi` | Contact MindCraft Consultancy Services, Nairobi, Kenya — business consulting, market research, AI training and enterprise AI across Africa, Europe and the US. | Start a conversation. |
| `/explore` | `Explore Capabilities by Industry & Region \| MindCraft` | Compose an industry, geography and capability to see how MindCraft applies research, consulting, AI training and enterprise AI across Africa, Europe and the US. | Compose your situation. |
| `/privacy` | `Privacy — MindCraft Consultancy` | Privacy information for MindCraft Consultancy Services, a Nairobi-based consultancy. *(noindex until real policy content is provided — `specs/25` §9.)* | Privacy |
| `/terms` | `Terms — MindCraft Consultancy` | Terms of use for MindCraft Consultancy Services, a Nairobi-based consultancy. *(noindex until real terms content is provided — `specs/25` §9.)* | Terms |

**OG/Twitter per route:** `og:title`/`twitter:title` = the route's short brand title (e.g., "Where We Work \| MindCraft"), `og:description`/`twitter:description` = the meta description (or ≤200-char variant), `og:url` = canonical, `og:image` = the shared/route line-motif (per page specs; e.g., Life Sciences uses the ecosystem motif, geography uses the Africa line-map motif — all hairline, no stock/AI imagery). Character counts for specced pages are verified in their source specs; re-verify `/how-we-work`, `/contact` here (all ≤60 / 150–160).

---

## 5. Testing method & tools

- **Automated per-route audit:** Lighthouse SEO ≥ 95 on all 13 routes; a script asserts each route has exactly one `<h1>`, a unique `<title>` ≤ 60, a description 150–160, a canonical, and OG/Twitter tags (fail CI otherwise).
- **Structured-data validation:** Google Rich Results Test + Schema.org validator on the JSON-LD — must validate with no prohibited fields; a lint check greps the JSON-LD/meta for banned tokens (`aggregateRating`, `review`, `numberOfEmployees`, `award`, "proven", numeric-result patterns) → zero hits (`specs/25` §8).
- **Social preview:** validate OG/Twitter rendering (Facebook Sharing Debugger, Twitter Card Validator, or a local OG previewer) for Home + one pillar + Life Sciences + Explorer — correct title/description/image, no fabricated content, image alt present.
- **Crawl check:** fetch each route's **prerendered HTML** (view-source / `curl`) and confirm metadata is present *without JS execution* (`specs/23` §6); confirm `sitemap.xml` lists the 13 routes only and `robots.txt` disallows `/privacy`,`/terms` and references the sitemap.
- **Canonical/duplication:** verify `/explore?…` param states canonicalize to `/explore`; verify trailing-slash policy consistent; verify 404 is `noindex`.
- **Integrity cross-check:** run the `specs/25` §8 review gate over the `seo.ts` map + JSON-LD (no client/partner names, no metrics, no offices beyond Nairobi, deliverables-as-offerings language).

---

## 6. Acceptance criteria (testable, with thresholds)

1. **Coverage:** all 13 real routes have unique `<title>` ≤ 60, description 150–160, canonical, exactly one `<h1>` (matching §4), and OG + Twitter tags — verified by CI assertion.
2. **Lighthouse SEO ≥ 95** on every route.
3. **Metadata in HTML (not JS-only):** prerendered/SSG HTML for every primary route contains its head + JSON-LD, verified via view-source without JS (`specs/23` §6).
4. **JSON-LD** validates as ProfessionalService/Organization with only source-true fields; **zero** prohibited fields (no ratings/reviews/headcount/awards/metrics/fake locations); email = `info@mindcraftconsultancy.com`; locality = Nairobi; areaServed = Africa/Europe/US; `knowsAbout` = capabilities + Life Sciences sub-domains.
5. **No fabrication anywhere in meta/OG/schema** — passes `specs/25` §8 gate and the banned-token grep.
6. **`/privacy` & `/terms`** are `noindex,follow`, excluded from `sitemap.xml`, and disallowed in `robots.txt` until real content ships; 404 is `noindex`.
7. **sitemap.xml** lists exactly the 13 real routes (canonical URLs, single `/explore`); **robots.txt** allows crawl of JS/CSS and references the sitemap.
8. **Canonicalization:** `/explore?…` param states canonical to `/explore`; trailing-slash policy consistent; no duplicate-content dilution.
9. **Favicon set + web manifest** present with source-true values (theme/background tokens from `specs/19`); OG image is a ≤200 KB line-motif with alt, no stock/AI imagery.
10. **Keyword hygiene:** Nairobi/Africa/Life Sciences + page capability/industry appear naturally in each title/description; no stuffing (`specs/02` §8).
11. **`<html lang="en">`, charset, viewport** present on every route; titles update on client navigation (`specs/17`).
