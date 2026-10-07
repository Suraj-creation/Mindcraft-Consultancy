# 18 — Footer

> Parents: `requirements.md` (§6 pages, §13 contact, §14 conversion), `design-principles.md`, `sitemap.md` (footer groups), `content-inventory.md` (§13 contact details, §closing brand line), `specs/01-information-architecture.md` (§7 contact = compact in footer), `specs/02` (copy limits), `specs/19-design-system.md` (§3.10 `Footer`), `specs/25-content-integrity.md` (§9 required-future content). Governs the site-wide footer. No fabricated contact info beyond source. Buildable without further strategic decisions.

---

## 1. Purpose

The footer is the site's persistent secondary wayfinding, contact surface, and closing brand statement. It must:
- Provide a full, grouped map of the site so a visitor can reach any real route from the bottom of any page (`sitemap.md` footer groups).
- Present the **canonical contact details** (Nairobi HQ; email; web; regions served) exactly as source (`content-inventory.md` §13) — the compact/reference home for contact facts (canonical home is `/contact`, `specs/01` §7).
- Carry the source **brand line** as the closing statement.
- Reinforce the "editorial intelligence report" language (hairline structure, restraint) — not a link-dump (`design-principles.md`).
- Handle utility links (Privacy, Terms) **honestly** as required-future content — never fabricate legal text (`specs/25` §9).
- Guarantee every link has a real destination and works at 320→1440 with full accessibility.

---

## 2. Structure / anatomy

A single `<footer>` region, full-bleed background band, separated from page content by a **hairline top rule** (1px `--color-line`). Two tiers:

```
── hairline top rule ─────────────────────────────────────────────────────────
TIER A — the grid
┌───────────┬───────────┬───────────┬───────────┬───────────────────────────┐
│ Brand +   │Capabilities│Industries │ Geography │ Company    │ Contact block │
│ brand line│(4 pillars) │(LS + all) │(regions)  │(About/How  │(Nairobi/email │
│           │           │           │           │ /Contact)  │ /web/regions) │
└───────────┴───────────┴───────────┴───────────┴───────────────────────────┘
── hairline divider ──────────────────────────────────────────────────────────
TIER B — utility bar
  © 2026 MindCraft Consultancy Services      Privacy · Terms   (required-future)
```

- **Brand block:** Wordmark `MindCraft` (→ `/`) + capability signature line + brand line (§3.6).
- **Four link groups:** Capabilities, Industries, Geography, Company — each a titled `<nav>` list.
- **Contact block:** Nairobi, Kenya · email (mailto) · web (external link) · regions served.
- **Utility bar (Tier B):** copyright line + Privacy/Terms per §3.7 and §4.3.

Layout treatment per §5/§6; visual treatment per §7.

---

## 3. Exact content (labels, links → routes, copy)

### 3.1 Capabilities (4 pillars — chain order per `specs/01` §1)
Group title: `Capabilities`
- `Market Research` → `/what-we-do/market-research`
- `Business Consulting` → `/what-we-do/business-consulting`
- `AI Enterprise Solutions` → `/what-we-do/ai-enterprise-solutions`
- `AI Training` → `/what-we-do/ai-training`
- (Group title `Capabilities` also links → `/what-we-do` — the overview.)

### 3.2 Industries
Group title: `Industries`
- `Life Sciences` → `/industries/life-sciences`
- `All industries` → `/industries`

### 3.3 Geography
Group title: `Geography` (all three items resolve to `/where-we-work`; regions are emphasis, not separate routes)
- `Africa` → `/where-we-work`  *(labeled primary focus in the contact block regions line, per source)*
- `Europe` → `/where-we-work`
- `United States` → `/where-we-work`
- (Group title `Geography` also links → `/where-we-work`.)

> These are the three source geographies (`content-inventory.md` §6). They deep-link to `/where-we-work`; where the geography page supports region anchors, they may target `/where-we-work#africa` etc. (optional, honest — no fabricated region pages).

### 3.4 Company
Group title: `Company`
- `About` → `/about`
- `How We Work` → `/how-we-work`
- `Contact` → `/contact`

### 3.5 Contact block (canonical source values — do NOT alter or invent)
Group title: `Contact`
- Location: `Nairobi, Kenya`
- Email: `info@mindcraftconsultancy.com` → `mailto:info@mindcraftconsultancy.com`
- Web: `www.mindcraftconsultancy.com` → `https://www.mindcraftconsultancy.com` (external; `rel="noopener"`, opens per §4)
- Regions served: `Africa (primary focus) · Europe · United States`

> Source verbatim (`content-inventory.md` §13; Corporate Profile §10): "Headquarters: Nairobi, Kenya · Email: info@mindcraftconsultancy.com · Web: www.mindcraftconsultancy.com · Regions served: Africa (primary focus) · Europe · United States." No phone number, no street address, no additional offices exist in source → none are shown (`specs/25` §2: no offices beyond Nairobi HQ).

### 3.6 Brand block copy
- Wordmark: `MindCraft` → `/`
- Signature line (capabilities): `Business Consulting · Market Research · AI Training · AI Enterprise Solutions` (source tagline; `content-inventory.md` §1)
- Brand line (source closing line, may be reused verbatim; `content-inventory.md` §13): **`Building AI-powered growth for Life Sciences and industry across Africa and beyond.`**

> **Deliberate dual ordering (not a bug — do not "fix"):** the **signature line** above preserves the *source tagline order* (Business Consulting · Market Research · AI Training · AI Enterprise Solutions) verbatim; the **Capabilities link group** (§3.1) and the nav mega-panel (`specs/17`) use the *value-chain engine order* (Market Research → Business Consulting → AI Enterprise Solutions → AI Training). Two orderings coexist by design: verbatim brand tagline vs. narrative engine. QA should not file this as an inconsistency.

### 3.7 Utility bar
- Copyright: `© 2026 MindCraft Consultancy Services` (2026 = established year, source-supported; keep current-year logic if desired but never predate).
- `Privacy` → `/privacy`
- `Terms` → `/terms`

---

## 4. States & interactions

### 4.1 Link states
- **Default:** on ink band → `--color-on-ink-500`; on paper-2 → `ink-500`/`ink-700` (per chosen treatment §7). Group titles use mono eyebrow style (uppercase, tracking +0.08em).
- **Hover:** brightens to `--color-on-ink-900` / `ink-900` with a hairline or accent underline; arrow/underline reduced-motion → instant.
- **Focus-visible:** 2px `--color-focus` accent ring, 2px offset; never suppressed (contrast-checked against the band).
- **Active route:** the footer link matching the current route shows `aria-current="page"` + subtle accent marker (footer active state is optional-subtle since the header owns primary active indication).

### 4.2 Contact interactions
- Email is a real `mailto:` link.
- Web link opens `https://www.mindcraftconsultancy.com`. Default same-tab per SPA convention; if opened in a new tab, use `target="_blank" rel="noopener noreferrer"`. (Internal footer links use the SPA router; external web + mailto bypass the router.)

### 4.3 Utility (Privacy / Terms) — required-future handling (`specs/25` §9)
Two allowed modes; **default = (A)**:
- **(A) Render with honest placeholder pages.** Links point to `/privacy` and `/terms`, which render a minimal honest page (heading + one line: "This policy is being finalized. For any questions, contact info@mindcraftconsultancy.com.") and a `TODO: required-future content — awaiting client input` marker in source. No fabricated legal text.
- **(B) Omit from nav until provided.** If placeholder pages are not built, the Privacy/Terms links are omitted from the footer entirely (do not render dead links). Route stubs may still exist but are unlinked.
- Never fabricate policy/legal/terms wording.

---

## 5. Desktop behavior (≥ `lg` 1024px)

- Tier A: a multi-column row inside `.container` — brand block (wider, e.g., a 3–4 col span) + the four link groups + contact block, laid on the 12-col grid (editorial asymmetry allowed, `specs/19` §1.4). All groups visible and expanded (no accordions on desktop).
- Group titles as mono eyebrows; links stacked beneath with comfortable line rhythm.
- Brand line sits in the brand block, set in the display serif at a restrained size (≤ `--fs-h5`), max ~40ch measure.
- Tier B: single row — copyright left, Privacy · Terms right, separated by the hairline divider above.
- Generous top/bottom padding (`--space-9/10`).

---

## 6. Mobile behavior (320–414, up through `md`)

- **Responsive stacking:** groups stack vertically. Two supported patterns; **default = stacked**:
  - **(A) Stacked (default):** brand block first, then each link group as a stacked titled list, then contact block, then utility bar. Full labels always visible (no truncation).
  - **(B) Accordion (optional, if the stacked list is too tall):** the four link groups collapse into `Accordion` disclosures (titles as headers), with the brand block, contact block, and utility bar always visible. Uses the `Accordion` a11y pattern (`specs/19` §3.5).
- Contact block: location, email, web, regions each on their own line; email/web remain tappable with ≥44px targets.
- Brand line wraps gracefully; no clipping.
- Utility bar stacks (copyright above, Privacy · Terms below) if width is tight.
- Verified at 320/375/390/414: no horizontal overflow, no clipped labels, all links ≥44×44.

---

## 7. Visual treatment

- **Background band:** either the **dark ink band** (`--color-ink-bg`, on-ink text — the deliberate ≤1–2-per-page dark band used as the site's closing, `specs/19` §2) **or** `--color-paper-2`. **Decision (so devs don't re-litigate): primary = ink band** (`--color-ink-bg`) to give the site a strong, editorial close; text uses `--color-on-ink-900`/`--color-on-ink-500`; accent `--color-accent-600` for hover/markers; contrast ≥7:1 for body, verified. (If a page already ends in an ink band, that page's closing section may switch to `paper-2` to avoid two adjacent dark bands — page specs decide.)
- **Hairline top rule:** 1px `--color-line` (or a low-contrast on-ink hairline within the dark band) separating footer from page.
- **Dividers:** hairline between Tier A and Tier B.
- **No** drop-shadowed floating cards, no gradients, no rounded card wrapping. Structure carried by whitespace + hairlines (`design-principles.md`).
- Wordmark in display serif; group titles + contact values in mono/Inter per type roles (`specs/19` §1.2).

---

## 8. Accessibility (keyboard, ARIA, focus)

- Wrapped in `<footer>` (contentinfo landmark). Link groups use `<nav aria-label="Footer …">` (e.g., `Footer capabilities`, `Footer company`) or a single `<nav aria-label="Footer">` containing labeled sub-lists; group titles associate to their lists.
- All links keyboard-reachable in logical order; `Enter` activates; focus-visible ring (2px accent, 2px offset) on every link, contrast-checked against the band.
- Email/web links have meaningful, self-describing text ("info@mindcraftconsultancy.com", "www.mindcraftconsultancy.com") — no "click here" (`specs/02` §9).
- External web link: `rel="noopener noreferrer"` if `target="_blank"`; if it opens a new tab, indicate so accessibly (visually-hidden "(opens in new tab)").
- Decorative separators (`·`, hairlines) are `aria-hidden`.
- Accordion mode (mobile) follows the `Accordion` a11y contract (`aria-expanded`, `aria-controls`, region labelling).
- `aria-current="page"` on the footer link matching the current route.
- Respect `prefers-reduced-motion` for any hover underline/arrow motion.
- Contrast: on-ink body ≥7:1, on-ink muted ≥4.5:1, accent hover meets 4.5:1 (`specs/19` §1.1).

---

## 9. Components used (from `specs/19`)

- `Footer` (§3.10) — grouped links + contact block + brand line + utility; ink band / paper-2, hairline top rule.
- `Accordion` (§3.5) — optional mobile collapsing of link groups.
- `Tag`/`Eyebrow` (§3.3) — mono group titles / labels.
- Link styles + focus ring (`--color-focus`), motion tokens (§1.7), color/spacing/type tokens (§1); lucide `arrow-right`/`external-link` where an affordance is used.
- Router `Link` for internal routes; native `<a>` for `mailto:` and the external web URL.

---

## 10. Acceptance criteria (testable)

1. Footer renders on every page as a `<footer>` (contentinfo) with a 1px hairline top rule separating it from page content.
2. Tier A contains, as grouped titled lists: **Capabilities** (Market Research, Business Consulting, AI Enterprise Solutions, AI Training), **Industries** (Life Sciences, All industries), **Geography** (Africa, Europe, United States), **Company** (About, How We Work, Contact) — each link resolving to the exact route in §3.
3. Each group title (`Capabilities`, `Industries`, `Geography`) links to its overview route (`/what-we-do`, `/industries`, `/where-we-work`).
4. The Contact block shows exactly: `Nairobi, Kenya`; a working `mailto:info@mindcraftconsultancy.com`; a working link to `https://www.mindcraftconsultancy.com` labeled `www.mindcraftconsultancy.com`; and `Africa (primary focus) · Europe · United States` — with no fabricated phone, street address, or additional office.
5. The brand line reads exactly `Building AI-powered growth for Life Sciences and industry across Africa and beyond.` and the capability signature line reads `Business Consulting · Market Research · AI Training · AI Enterprise Solutions`.
6. Wordmark `MindCraft` links to `/`.
7. Utility bar shows `© 2026 MindCraft Consultancy Services` and either (A) `Privacy`/`Terms` links to honest placeholder pages with a required-future TODO and no fabricated legal text, or (B) omits them entirely — never dead links, never fabricated policy text.
8. Every footer link has a real destination (no decorative/"#"/dead links); internal links use the SPA router, `mailto:` and external web use native `<a>`.
9. The external web link uses `rel="noopener noreferrer"` (and an accessible new-tab hint) if it opens in a new tab.
10. Visual treatment is the ink band (`--color-ink-bg`) by default (or `paper-2`), with hairline dividers, no shadowed/rounded floating cards, no gradients; text/accent contrast verified (body ≥7:1).
11. Desktop (≥`lg`): all groups visible and expanded in a multi-column grid; no accordions.
12. Mobile (320–414): groups stack (or collapse into accessible accordions); no horizontal overflow, no clipped labels; email/web targets ≥44×44.
13. Every footer link is keyboard-reachable with a visible focus ring (2px accent, 2px offset) that has sufficient contrast against the band.
14. Link groups expose navigation landmarks/labels; the link matching the current route has `aria-current="page"`; decorative separators are `aria-hidden`.
15. All hover/underline motion is instant under `prefers-reduced-motion: reduce`.
16. Contact facts match the source exactly (`content-inventory.md` §13) with zero additions or alterations.
