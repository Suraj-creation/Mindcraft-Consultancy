# MindCraft Design System

> **Version:** 1.0 · **Status:** Production source of truth
> **Scope:** Visual identity, UX, interaction, content, and frontend implementation for the MindCraft Consultancy Services website.
> **Authority:** This file overrides any other design reference. When in conflict with `/specs/19-design-system.md`, this file wins.
>
> **This is not the Anthropic design system. This is not Claude.com. Do not import, adapt or reference Anthropic's visual identity — not the cream/coral/navy trinity, not the slab-serif/humanist combination, not the spike-mark, not the product-mockup card pattern, not the code-window brand identity. MindCraft has its own identity, derived from what MindCraft actually is.**

---

## 1. Design Philosophy

### What MindCraft actually is

```
AFRICAN IN CONTEXT · GLOBAL IN AMBITION · DEEP IN LIFE SCIENCES
BROAD IN BUSINESS CAPABILITY · RIGOROUS IN RESEARCH
PRACTICAL IN CONSULTING · MODERN IN TECHNOLOGY
RESPONSIBLE IN AI · EDITORIAL IN COMMUNICATION · HUMAN IN JUDGMENT
```

The design must emerge from this. Not from "AI startup," not from "consulting template," not from any design system built for another purpose.

### The central concept

**Editorial Intelligence** — the website should feel somewhere between a serious intelligence publication, a modern strategy consultancy, and a research institution. Not a technology startup. Not a SaaS product.

The design communicates: *"We understand complexity and can make it legible."*

Not: *"Look how many visual effects we can create."*

### Core design equation

```
CLARITY > INFORMATION DENSITY
HIERARCHY > DECORATION
MEANING > EFFECTS
SPACING > CONTENT FILL
PROGRESSIVE DISCLOSURE > WALLS OF TEXT
INTERACTION WITH PURPOSE > INTERACTION FOR SHOW
BUSINESS VALUE > TECHNOLOGY GIMMICKS
CREDIBILITY > FABRICATION
DISTINCTIVE IDENTITY > AI AESTHETICS
MOBILE QUALITY = DESKTOP QUALITY
LIFE SCIENCES DEPTH + CROSS-INDUSTRY BREADTH
AFRICAN CONTEXT + GLOBAL STANDARD
```

### The recognition test

Remove the MindCraft logo. Remove all company text. Could someone identify the website as a serious African intelligence + consulting + AI capability firm? If no — the identity is not distinctive enough. Recognizability must come from composition, typography, information architecture, materiality, and editorial rhythm. Not from a logo alone.

---

## 2. Brand Character

### Personality (3 words)
**Rigorous · Grounded · Quietly confident**

### Voice
Senior consultant: precise, confident, plain-spoken. African-rooted, globally fluent. Short sentences. Active voice. Specific nouns. No hype. No filler. No "unlock the power of AI." No exclamation marks.

### Emotional objective
When a CxO, Life Sciences director, or NGO program manager visits: they should feel *recognized*, not marketed to. They should think "these people understand my world" — not "impressive website."

### What MindCraft is NOT trying to be
- An AI startup
- A SaaS product company
- A generic consulting template
- A brochure website
- An Anthropic clone
- An OpenAI imitation
- A Web3/fintech brand
- A futuristic AI portal
- A collection of fashionable cards

---

## 3. Anti-AI-Slop Principles

### Banned visual patterns (hard no)
These are produced by default by generative systems. They must be actively resisted:

```
✗ Gradient text (background-clip: text + gradient — absolute ban)
✗ Purple/blue/cyan "AI" gradients anywhere
✗ Glowing blobs, glowing orbs, glow effects as decoration
✗ Glassmorphism (backdrop-filter as brand texture)
✗ Floating translucent cards with blur
✗ Excessive rounded cards (border-radius > 8px on content containers as default)
✗ Giant 3D objects, abstract spheres, wireframe globes
✗ AI brain illustrations, neural-network diagrams as decoration
✗ Robot imagery, humanoid AI figures
✗ Circuit-board graphics, "digital transformation" stock
✗ Animated particles, cursor trails
✗ Meaningless data visualizations / decorative charts
✗ Fake dashboards, fake terminal windows, fake AI interfaces
✗ Excessive scroll-hijacking or parallax
✗ "AI" repeated as visual decoration
✗ Gradient mesh backgrounds
✗ Heavy shadow layers on everything
✗ The card grid default: [CARD][CARD][CARD][CARD]
✗ Identical section structure repeated across every page
✗ Generic "Get Started" / "Learn More" / "Unlock AI" CTAs
✗ border-left: 3px+ colored stripe on cards or callouts (side-stripe pattern)
```

### Banned content fabrications
```
✗ Client logos / "Trusted by" logos
✗ Testimonials (MindCraft was founded in 2026)
✗ Case study statistics
✗ "Proven" / "Leading" / outcome percentages
✗ Office locations beyond Nairobi HQ
✗ Deployment counts, project counts
✗ Partner logos
✗ Awards or certifications
```

Credibility comes from: specialization, methodology, specificity, domain language, and African intelligence — not fabricated proof.

---

## 4. Visual Identity

### The material system

MindCraft's visual material is **volcanic ground, ivory ink, and terracotta punctuation**.

Nairobi sits at 1,795m on the shoulder of the Rift Valley. The ground there is volcanic — dark, mineral, tinted toward the highland forest that grows on it. The soil around it is laterite: terracotta red. That is the palette. Not a mood board of Africa — the actual geology of the one place this firm is anchored to.

**Why this replaced the warm-paper direction.** The previous system was warm ivory paper, charcoal and terracotta, justified as "the physical language of documents. Not screens." Three things were wrong with it. It had *no meaning argument* — every other element was justified by what MindCraft is, the colour only by what a physical object is. It *contradicted its own opening rule*, banning the "cream/coral/navy trinity" and then specifying warm ivory and terracotta, which is functionally cream and coral. And it *under-represented half the company*: two of four pillars build and deploy software, which a pure paper metaphor describes not at all. A deep mineral ground reads as both a field dossier and an instrument at work — and in a category where nearly every competitor ships a white page, it is the cheapest way to pass the recognition test.

The surface ramp:

| Mode | Background | Use |
|---|---|---|
| Ground (default) | Volcanic forest | Body, sections, content |
| Ground-2 | Deeper forest | Alternate bands |
| Ground-deep | Deepest | Terminal beats, closing CTA, footer |
| Raised / Surface | Lifted forest | Panels, selected states, elevation without shadow |

### The accent

> **2026-10 revision — forest green + gold.** At the client's direction the ground was lifted from near-black to a lit highland-forest green (photos and secondary text were sinking into it), the accent moved from terracotta to **burnished gold**, and the layout was widened to a single 1840px edge. The token *names* are unchanged; the values below are current. Where older prose in this file says "terracotta", read "gold".

One deliberate accent: **burnished gold** (`oklch(0.820 0.128 84)`). Used for:
- Active states, selected nodes
- Structural numerals where the sequence is real information, and the key figures in the glance strip
- Primary CTA backgrounds
- Geographic markers, and the short rule that opens each section head

The accent is **scarce**. It must feel like punctuation, not background. **Text on the accent is `--color-ground-deep`, never white.**

**Emerald** (`--color-emerald`) is the one saturated green surface — at most one band per page, reserved for the section that matters most (Life Sciences on Home).

Two support tones carry data and annotation only, never chrome: **champagne** (`--color-grass`) for numerals and figures, **leaf green** (`--color-green`) for support marks.

### What makes MindCraft recognizable
- Deep mineral ground (never flat black, never a white page)
- Strong type-based hierarchy (display grotesque + reading serif) with real range, reaching `--text-display`
- Hairline structure in three weights by job, not card borders
- Editorial asymmetry (not everything centered)
- Mono reserved strictly for data — coordinates, counts, sequence indices
- The terracotta accent used as punctuation

---

## 5. Color System

**Implementation:** OKLCH throughout. Neutrals tinted toward the accent hue. All contrast verified WCAG AA or better.

### Semantic tokens (CSS custom properties)

Registered in a Tailwind v4 `@theme` block in `src/index.css`, so every token is a real utility (`bg-ground`, `text-ink-2`) rather than an arbitrary value. Measured ratios against `--color-ground` are noted inline.

```css
/* Ground — lit highland forest green */
--color-ground:       oklch(0.272 0.040 160);  /* page floor */
--color-ground-2:     oklch(0.236 0.040 162);  /* deep band */
--color-ground-deep:  oklch(0.205 0.036 162);  /* deepest — header, glance strip, CTA, footer */
--color-raised:       oklch(0.305 0.042 160);
--color-surface:      oklch(0.330 0.044 160);
--color-surface-2:    oklch(0.380 0.046 160);  /* non-text only */
--color-emerald:      oklch(0.345 0.072 158);  /* one band per page */

/* Ink — warm ivory, nudged toward gold */
--color-ink:          oklch(0.940 0.020 88);   /* body            12.37:1 */
--color-ink-strong:   oklch(0.975 0.016 90);   /* headings        13.72:1 */
--color-ink-2:        oklch(0.835 0.022 88);   /* secondary        8.88:1 */
--color-ink-3:        oklch(0.735 0.022 90);   /* captions         6.28:1 */

/* Lines — three weights by job */
--color-line:         oklch(0.375 0.040 160);  /* decorative separation */
--color-line-2:       oklch(0.465 0.042 160);  /* structure        2.16:1 */
--color-line-strong:  oklch(0.600 0.040 160);  /* meaning-bearing  3.81:1 */

/* Accent — burnished gold */
--color-accent:       oklch(0.820 0.128 84);   /* as text          8.38:1 */
--color-accent-2:     oklch(0.880 0.105 90);   /* hover           10.27:1 */
--color-accent-deep:  oklch(0.700 0.125 76);   /* gold hairlines */
--color-accent-tint:  oklch(0.400 0.070 86);   /* gold wash */

/* Support — data and annotation only, never chrome */
--color-grass:        oklch(0.885 0.072 92);   /* champagne figures 10.45:1 */
--color-green:        oklch(0.800 0.120 152);  /* leaf support marks 8.27:1 */

/* Feedback */
--color-success:      oklch(0.720 0.110 150);
--color-error:        oklch(0.700 0.150 28);
```

### Contrast targets

Verified, not asserted — `node scripts/check-contrast.mjs` runs 19 checks and fails the build on any regression.

- Body text on ground: ≥ 7:1 · Secondary: ≥ 4.5:1 · Captions: ≥ 4.5:1
- Accent as text: ≥ 4.5:1 · Non-text, markers and focus ring: ≥ 3:1
- Focus ring: 2px solid `--color-accent`, 2px offset — visible on all surfaces

### Color rules
- **Never pure black or pure white.** Neutrals are tinted toward the highland-green hue so nothing is a dead grey.
- **Accent is scarce.** Punctuation, not background. If terracotta is filling area, it is wrong.
- **Text on accent is `--color-ground-deep`, never white.** White on this terracotta is 3.12:1 and fails.
- **Three line weights, three jobs.** Decorative uses `--color-line`; structure uses `--color-line-2`; anything conveying state or meaning uses `--color-line-strong`, which clears WCAG 1.4.11's 3:1 floor.
- **Grass and green are data colours** — numerals, marks, annotation. Never surfaces or chrome.
- **No further brand tones beyond green + gold.** No purple, no blue, no neon, no terracotta. Use `color-mix()` before adding a name.

---

## 6. Typography

### Font families

| Role | Family | Variable axes | Notes |
|---|---|---|---|
| Display / headings | **Bricolage Grotesque** | `opsz 12–96`, `wght 300–800` | Contemporary grotesque with optical size character. Non-reflex, non-monoculture. |
| Body / reading | **Literata** | `opsz 7–72`, `wght 300–600`, italic | Warm editorial serif. Feels like a research publication, not a website. |
| Mono / labels / data | **Spline Sans Mono** | `wght 400–500` | For eyebrows, coordinates, section numbers, data tags. Sparing use only. |

Fallback stacks:
```css
--font-display: "Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif;
--font-body:    "Literata", Georgia, "Times New Roman", serif;
--font-mono:    "Spline Sans Mono", ui-monospace, "SFMono-Regular", monospace;
```

Self-host in `woff2`. Preload the two most critical faces. `font-display: swap`. Subset to Latin + Latin Extended.

### Type scale (fluid via `clamp()`)

| Token | Value | Font | Weight | Line height | Use |
|---|---|---|---|---|---|
| `--fs-eyebrow` | 0.75rem | Mono | 400 | 1.4 | Section labels, coordinates, indices |
| `--fs-caption` | 0.8125rem | Body | 400 | 1.5 | Captions, metadata |
| `--fs-body-sm` | 0.875rem | Body | 400 | 1.6 | Small body, footer |
| `--fs-body` | 1.0625rem | Body | 400 | 1.62 | Default body |
| `--fs-body-lg` | 1.125rem | Body | 400 | 1.55 | Lead paragraphs |
| `--fs-h5` | `clamp(1.2rem, 1.08rem + .55vw, 1.5rem)` | Display | 500 | 1.15 | — |
| `--fs-h4` | `clamp(1.5rem, 1.3rem + .9vw, 2rem)` | Display | 480 | 1.1 | — |
| `--fs-h3` | `clamp(1.9rem, 1.5rem + 1.6vw, 2.9rem)` | Display | 440 | 1.06 | Section heads |
| `--fs-h2` | `clamp(2.3rem, 1.75rem + 2.4vw, 3.6rem)` | Display | 420 | 1.04 | — |
| `--fs-h1` | `clamp(2.9rem, 2rem + 4.4vw, 5.4rem)` | Display | 440 | 1.02 | Hero |
| `--fs-display` | `clamp(3.4rem, 2.2rem + 6vw, 6.5rem)` | Display | 400 | 1.0 | Rare editorial statements |

### Typography rules
- **Display headings:** Bricolage Grotesque, weight 300–500, negative letter-spacing (−0.018em, −0.026em at h1 and above). `font-optical-sizing: auto` is required — without it large display type renders with body-weight detail and reads flat.
- **Body / reading text:** Literata, weight 400, line-height 1.62, measure 65–75ch.
- **Light text on dark:** light type reads lighter than it measures and needs more room than the same text on paper.
- **5-step scale minimum:** at least 1.25× ratio between adjacent steps. Never 8 sizes that are 1.1× apart.
- **Do NOT use Inter, Fraunces, Cormorant, DM Sans, Playfair, Space Mono, IBM Plex, Instrument.** These are AI-design monoculture defaults.

### Role assignment — the rule that was being broken

The first build used mono **405 times**, more than display (143) and body (111) combined, and put **539 type instances at ≤12px against 152 at ≥3xl**. `--fs-display` was specced and never used once. That combination — no top end, no mono discipline — was the primary cause of the site reading as boring. The palette was never the main problem.

- **Mono carries data, and only data.** Coordinates, country counts, sequence indices in a real ordered chain, tabular figures, the Explorer formula line. **Monospace as a costume for "technical" is banned.** Not for nav links, buttons, footers or section labels.
- **No eyebrow or kicker above a heading.** Hard ban, no exceptions. The heading carries its own weight; a label that only restates it is deleted, not styled. `SectionHead` deliberately has no eyebrow slot. Mono metadata survives only where it states a fact the reader needs — `1°17′S 36°49′E`, `45 COUNTRIES`, `01–06` in the actual process sequence.
- **Section numbers only where the sequence is information.** The value chain and the six engagement stages are ordered and the order is the argument — they keep their numerals. Parallel items do not get numbered.
- **Something on the page must reach `--text-display`.** If nothing does, the range has collapsed to heading-and-body and will read as weak no matter what the palette does.

---

## 7. Layout & Grid

### Containers
```css
--container-text: 880px;    /* reading measure */
--container:      1840px;   /* one shared edge for every section */
--container-wide: 1840px;   /* same as default — edges must not jump */
--gutter:  clamp(20px, 4.4vw, 88px);
```

Fill the desktop width; keep line length with `.measure` on paragraphs, not with narrow centred sections. On wide screens, reflow stacked lists into columns rather than letting the page grow tall. Section padding is `--band-tight / --band / --band-loose` = `clamp(40,3.6vw,64) / clamp(56,5.2vw,96) / clamp(72,7vw,124)`.

### Grid
- 12 columns, `gap: 24px` desktop / `16px` mobile
- **Editorial asymmetry encouraged** — 7/5, 8/4, or offset annotation splits where meaningful
- `repeat(auto-fill, minmax(260px, 1fr))` for card-style grids (if cards are actually appropriate)

### Compositional vocabulary

Do not use the same layout for every section. Match composition to content type:

| Content type | Composition |
|---|---|
| Capability / pillar | Editorial split or connected spine |
| Process / method | Horizontal or vertical process spine |
| Geography | Map + regional selector |
| Industry taxonomy | Structured list / ecosystem |
| Life Sciences | Sub-sector ecosystem diagram |
| Explorer | Interactive composer (Industry × Geography × Capability) |
| Statements / differentiators | Asymmetric editorial block |
| Data / metadata | Restrained data strip |
| CTA / conversion | Strong typographic composition (ink band) |
| Audience pathway | Self-selection module |

### Section rhythm
- Section vertical padding: `clamp(64px, 9vw, 128px)`
- Sections separated by **space and hairline rules**, not by boxing everything in cards
- **Ink bands** for no more than 1–2 sections per page — use deliberately, not as default dark sections

---

## 8. Spacing

4pt base scale. Use semantic names, not pixel names:

```css
--s1: 4px;   --s2: 8px;   --s3: 12px;  --s4: 16px;
--s5: 24px;  --s6: 32px;  --s7: 48px;  --s8: 64px;
--s9: 96px;  --s10: 128px; --s11: 160px;
```

- **Use `gap` instead of margins** for sibling spacing.
- **Vary spacing for hierarchy.** A heading with extra space above reads as more important. Do not apply the same padding everywhere.
- More space above headings than below; that gap signals a new section.
- Internal element padding: `--s4` (16px) minimum for anything interactive.

---

## 9. Shape Language

MindCraft has a **sharp editorial vocabulary**. Not a SaaS pill-and-card vocabulary.

```css
--radius-0: 0px;      /* default editorial containers, rules, inputs */
--radius-1: 3px;      /* cards, buttons — very subtle */
--radius-pill: 9999px; /* chip labels, tags only */
```

### Rules
- **Default radius is 0 or 3px.** Large rounded corners (>8px) are explicitly banned as defaults.
- Reserve `--radius-1` for interactive elements (buttons, chips, small input fields).
- `--radius-pill` only for small chips / eyebrow tags — never on content containers.
- **No "card" instinct.** Ask: does this information actually need to be contained? If not, don't box it.

---

## 10. Borders & Elevation

### Depth model: material contrast, not shadows

| Level | Treatment | Use |
|---|---|---|
| Flat | No border, no shadow | Default body content, editorial sections |
| Hairline | `1px solid var(--line)` | Input fields, section separators, table rows |
| Accent rule | `2px solid var(--accent)` | Active state, selected node, section marker |
| Alt surface | `var(--paper-2)` background | Subtle section differentiation without a border |
| Ink band | `var(--ink-bg)` background | Strong emphasis sections (≤2 per page) |
| Overlay | `box-shadow: 0 8px 40px -12px oklch(0.2 0.014 55 / .28)` | Drawers, bottom sheets, dropdowns — only for overlaying |

### Rules
- **Shadows are rare.** Reserve for truly overlaying elements (drawers, mobile panels, dropdowns).
- **Never use drop shadows to make cards "float."** The system uses material contrast (surface color change or hairlines) instead.
- **Depth = composition**, not shadow accumulation.

---

## 11. Imagery

### Philosophy
Documentary, not decorative. Context-specific, not generic stock. Africa through intelligence — never through cliché.

### What to show (approved)
- African business environments: Nairobi offices, boardrooms, labs
- Healthcare systems: clinical settings, hospital corridors, diagnostic labs
- People at work: professionals, consultants, scientists, data analysts
- Markets and infrastructure: supply chains, ports, agricultural operations
- Technology in real contexts: people using software, data screens in real environments
- Nairobi as a business hub: skyline contexts, modern office environments

### What never to show
- Safari / wildlife imagery
- "Tribal" patterns or cultural stereotypes
- Generic "handshake" / "boardroom" stock photography
- People pointing at holograms
- Glowing AI screens / blue digital light
- Abstract globe illustrations
- "Digital transformation" cliché stock
- Robot imagery of any kind

### Treatment
- Prefer muted, slightly desaturated tones — the image should not fight with the palette
- Duotone toward ink + accent used deliberately for large hero contexts (never as default)
- Portraits: editorial, not commercial
- Documentary framing over posed stock

### Map visualization
- SVG line maps only (no tile maps, no WebGL, no Mapbox)
- Africa as a simplified vector SVG (regions as path groups)
- Nairobi marked with a dot — `var(--accent)` color, a coordinate, a ring animation on load
- No decorative continent silhouettes

---

## 12. Iconography

- **lucide-react**, stroke 1.5px, size 20/24px
- Line icons only — no filled, glossy, or 3D icons
- Icons always accompany labels; never the sole meaning carrier
- No "AI brain," no robot, no neural-net, no hologram icons
- Color: `var(--ink-3)` default; `var(--accent)` on active states; `var(--on-ink-2)` on dark

---

## 13. Motion

### Motion principle
Motion **clarifies** — it explains navigation, progressive disclosure, Explorer state, geographic selection, process progression, and content entry. Motion does not decorate or perform.

### Token set
```css
--dur-fast:  150ms;   /* micro: focus, hover, button press */
--dur:       240ms;   /* standard: panel open, node select */
--dur-slow:  400ms;   /* deliberate: drawer, page section reveal */
--ease-out:  cubic-bezier(.2, .8, .2, 1);
--ease-q:    cubic-bezier(.16, 1, .3, 1);  /* quint out — natural deceleration */
```

### When to animate
| Interaction | Property | Duration |
|---|---|---|
| Button hover | background-color, color | `--dur-fast` |
| CTA arrow | transform: translateX(4px) | `--dur` |
| Accordion / region open | `grid-template-rows: 0fr → 1fr` | `--dur-slow` |
| Panel / drawer | transform: translateY / translateX | `--dur-slow` |
| Node selection (spine) | border-color, background | `--dur` |
| Scroll reveal | opacity 0→1 + translateY 0→14px | `--dur-slow` |
| Page section entry | opacity + transform | `--dur-slow` |
| Mobile menu | transform: translateY(-100%→0) | `400ms var(--ease-q)` |

### Banned motion
```
✗ Parallax scrolling (scroll-hijacking)
✗ Cursor trails or cursor effects
✗ Constant looping background animation
✗ Infinite floating or pulsing elements
✗ Text scramble / typewriter on page load
✗ Excessive spring / elastic easing (bounce = banned)
✗ Height animation (use grid-template-rows instead)
✗ Width / padding / margin animation (use transform only)
✗ Gratuitous 3D rotate effects
```

### Reduced motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
  .reveal { opacity: 1; transform: none; }
}
```

Scroll-reveal must be **JS-gated**: content visible without JS; animation is pure enhancement. The `.js` class on `<html>` gates the initial hidden state.

---

## 14. Content Hierarchy

### The disclosure ladder (applies everywhere)

```
SCAN        — one line / one number / one visual       [always visible]
UNDERSTAND  — 1–3 sentence editorial statement         [always visible]
EXPLORE     — user selects (card, node, region, filter)
DETAIL      — panel / drawer / accordion / dedicated page
ENGAGE      — contextual CTA for that specific item
```

**No two adjacent layers may carry equal weight.** Each step down adds detail; each step up removes it. Failure = walls of text at SCAN level.

### Content length system (hard limits)

| Layer | Limit |
|---|---|
| Hero headline | ≤ 9 words |
| Hero supporting line | ≤ 24 words |
| Signature / pillar line | ≤ 12 words (the 4-pillar list counts as 1) |
| Section heading | ≤ 8 words |
| Section supporting text | 1–3 sentences |
| Card title | ≤ 5 words |
| Card one-liner | ≤ 16 words |
| Accordion / panel bullets | ≤ 20 words each |
| Dedicated page blocks | ≤ ~90 words per block; broken by rules |

If copy exceeds a limit: **cut, or push deeper into disclosure.** Never shrink type to fit.

### Content governance rule
Every sentence earns its place by doing ≥1 of: explain MindCraft · establish credibility · clarify a capability · clarify an industry · clarify geographic relevance · clarify the engagement model · move toward action. If it does none: delete it.

---

## 15. Information Architecture

### The organizing principle
One integrated engine, filtered by three dimensions, wrapped in trust and action:

```
         MARKET RESEARCH
               ↓
        BUSINESS CONSULTING
               ↓
      AI ENTERPRISE SOLUTIONS
               ↓
           AI TRAINING
               ↓
         MEASURABLE IMPACT → loops back

filtered by: INDUSTRY × GEOGRAPHY × AUDIENCE
```

### Page architecture (canonical routes)

| Route | Role |
|---|---|
| `/` | Hub; comprehension ladder 5s–3min |
| `/what-we-do` | Engine overview — UNDERSTAND + EXPLORE |
| `/what-we-do/[pillar]` | 4× pillar detail — DETAIL level |
| `/industries` | Breadth overview; LS elevated — EXPLORE |
| `/industries/life-sciences` | Life Sciences deep — DETAIL |
| `/where-we-work` | Geography experience — EXPLORE + DETAIL |
| `/how-we-work` | Process + delivery + differentiators — UNDERSTAND + DETAIL |
| `/about` | Identity, heritage, 2026 founding — UNDERSTAND |
| `/explore` | I×G×C Explorer — EXPLORE → DETAIL → ENGAGE |
| `/contact` | Conversion — ENGAGE |

No per-industry pages beyond Life Sciences. No per-geography pages. The Explorer handles the combinatorial space.

---

## 16. Component System

### Principles
- Compact vocabulary — no component proliferation
- Components serve content; content doesn't serve components
- Each component has a clear "when NOT to use" rule

### Primitives

**`SiteHeader`** — Sticky, `backdrop-filter: blur(8px)` for sophistication without glassmorphism-as-decoration. Wordmark + 6-item nav + primary CTA. Scrolled state: hairline border appears. No shadow. Mobile: hamburger → full-screen menu.
- **Logo:** the client's `src/assets/images/logo.png` is dark-green-on-transparent and disappears on the forest ground. The site uses derived reverse versions in `public/assets/images/brand/`: a horizontal lockup (nav, 44px), a stacked version (footer), and the favicon and touch icon. The derived files keep the chart and gold, with the MINDCRAFT letters in ivory. Regenerate them from the source PNG; never hand-edit.
- **Mega menus (xl+):** What We Do and Industries open full-width panels: hover intent (mouse only), click/Enter toggles, ArrowDown enters, Esc closes and returns focus, Tab-out closes, dimmed backdrop. Menu content comes from `src/data/navigation.ts` and `src/data/industries.ts` — the same data the pages use. Deep links: `/industries?v=<id>`, `/industries/life-sciences?sector=<id>`.
- The header's blur lives on a separate background layer, not on `<header>`: a filter on the header makes it the containing block for `fixed` children and traps the backdrop and mobile menu inside the bar.

**`Button`** (variants: primary / ghost / ghost-ink / text-link / inline)
- Primary: `var(--accent)` bg, light text, `--radius-1`, min-height 44px, verb-led label ≤4 words
- Ghost: `var(--line-2)` border, transparent bg, ink text
- Ghost-ink (on dark band): `var(--on-ink-line)` border, transparent bg, `var(--on-ink)` text
- Focus: 2px `var(--accent)` ring, 2px offset
- Arrow animate: `transform: translateX(4px)` on hover (disabled under reduced-motion)
- No decorative buttons. Every button has a real destination.

**`Eyebrow`** — Mono uppercase label. `--fs-eyebrow`, `letter-spacing: .14em`, `color: var(--ink-2)`. Often prefixed with a mono index: `01 — Section name`. Accent color for the index: `color: var(--accent)`.

**`Card`** — Use sparingly; only for genuinely enumerable objects (pillars, sub-sectors, industries). Flat `--radius-1`, `1px var(--line)` border, no shadow. Hover: border shifts to `var(--line-2)`, bg tints to `var(--paper-2)`. Never nest cards inside cards.

**`Accordion / AccordionItem`** — For pillar sub-capabilities and deliverables. Header is a real `<button>` with `aria-expanded`, `aria-controls`. Chevron rotates (disabled under reduced-motion). `grid-template-rows` transition (not height). Roving keyboard focus within group.

**`Tabs`** — For grouped content at wide viewports. `role="tablist"`, roving tabindex. Active underline = 2px `var(--accent)`. Degrades to `Accordion` on mobile.

**`DetailPanel / Drawer`** — Desktop: inline side panel. Mobile: bottom-sheet drawer (max-height 85vh, scrollable). Opens with `transform` animation. Focus moves in on open; returns to trigger on close. `Esc` closes.

**`ValueChainSpine`** — The signature capability engine. Nodes in a horizontal track (desktop) / vertical list (mobile). Each node: `--fs-eyebrow` stage label + `--fs-h5` name. Selected: `2px var(--accent)` top border (desktop) or left border (mobile). Detail panel below (dark ink band) reveals on selection. Keyboard: arrow keys cycle nodes. Shared behavior: Home scan (non-linking) vs What We Do explore (links to pillar pages).

**`EcosystemMap`** — Life Sciences sub-sector chips. Selectable. Selected chip: `var(--ink-strong)` bg, `var(--paper)` text. Panel beside/below reveals focus areas + capability links.

**`IndustryExplorerGrid`** — Filterable grid: Life Sciences depth card elevated (dark bg) + ~19 breadth cards. Grid with `auto-fill` columns. `IndustryPanel` reveals on selection.

**`RegionSelector / CountryList`** — Four region disclosure buttons (accordion pattern). Selected: country list expands. Countries as mono chips. Focus markets marked with `•` accent. Never all 45 countries visible at once.

**`ProcessDiagram`** — Six-stage horizontal track (desktop) / vertical stack (mobile). Mono stage numbers. Selecting a node reveals source description in a `DetailPanel`.

**`ContactForm`** — Fields: name, organization, email, region, area-of-interest, message. Label above field always. Visible focus ring. Error text below with `aria-describedby`. No placeholder-as-label. Min-height 44px. Pre-scoped via URL params from Explorer.

**`Footer`** — Grouped columns: Capabilities (chain order) · Industries · Geography · Company · Contact block. Brand closing line in Literata italic. Utility (Privacy / Terms) — no fabricated content. Hairline top border.

---

## 17. Navigation

### Primary nav items (desktop)
`Home · What We Do · Industries · Where We Work · How We Work · About` + `[Start a Conversation]` CTA

- `What We Do` → dropdown to 4 pillar pages + overview + Explorer
- `Industries` → dropdown to Life Sciences + All Industries
- `Explore` is NOT a primary nav item — surfaced contextually
- Active route: 2px `var(--accent)` underline animates in on hover/active

### Mobile menu
Full-screen, `transform: translateY` animation. Links in large Bricolage Grotesque. CTA pinned at bottom. Contact details at very bottom. Body scroll-lock while open. `Esc` closes. `aria-expanded` on hamburger.

### Routing behavior
- Clean paths, lowercase, hyphenated
- Back/forward/refresh never breaks state
- No splash or intro screen — Home IS the entry
- Explorer state URL-encoded: `/explore?industry=pharmaceuticals&geo=kenya&capability=market-research`
- Skip link to `#main` at page start

---

## 18. Homepage

**Purpose:** Comprehension ladder from 5s → 3min. Identity → capabilities → differentiation → Life Sciences → Africa → method → conversation.

**The comprehension ladder:**
- 5s: Hero headline + signature line → "Nairobi consultancy, four capabilities, Life Sciences, Africa"
- 15s: The engine spine (scan level) → four capabilities as one connected flow
- 30s: Life Sciences band + industries strip → depth vs breadth
- 1 min: Geography module + differentiators → reach, credibility
- 3 min: Process preview + who-we-serve + contact → how to engage

**Section sequence:**
1. **Hero** — H1 ≤9 words + supporting line ≤24 words + two CTAs + signature pillar line
2. **Glance strip** — 5 real facts (Founded 2026 · Nairobi · Life Sciences core · 4 regions · 4 pillars). No metrics, no fake numbers.
3. **The engine** — `ValueChainSpine` scan level. 4 nodes + impact. Dark ink band. Selecting a node reveals one-line scope.
4. **Life Sciences** — Paper-2 background. "Core expertise" badge. `EcosystemMap` (6 sub-sectors). Panel reveals focus areas.
5. **Industries breadth** — Grid: LS depth card elevated + broader verticals. No walls of text.
6. **Geography** — Ink band. Nairobi → Africa → Global. `RegionSelector`. 12 focus markets labeled (not "offices").
7. **Differentiators** — 5 editorial blocks separated by hairlines. Asymmetric title / statement split.
8. **Process preview** — Static stage names (links to `/how-we-work`).
9. **Who we serve** — `AudienceSelector` chips.
10. **Closing CTA** — Ink band. Strong typographic statement. Email CTA. "Start a conversation."
11. **Footer**

**Anti-homepage-dump rule:** The homepage PREVIEWS depth. It does not CONTAIN depth. Every section creates the desire to explore, not the exhaustion of having explored.

---

## 19. Capability Pages

**Structure for each of 4 pillar pages:**
- Hero: positioning line (≤24 words from source)
- The chain locator: compact `ValueChainSpine` showing this pillar's position
- Capability groups: `Accordion` pattern (never all-open walls of text)
- "What you receive" panel: deliverables phrased as offerings, not results
- Cross-links: adjacent pillar + Life Sciences (where relevant) + Contact
- Contextual CTA

**Critical:** deliverables must be phrased as **offerings** ("Solutions built to deliver X"), never as past track records ("We delivered X"). MindCraft was founded in 2026.

---

## 20. Industries

**The depth/breadth thesis must be visually obvious:**
- Life Sciences: elevated card (dark ink background), "Core expertise" label, prominent placement, links to deep page
- 19 other verticals: flat grid cards, lighter treatment, no fabricated depth for the 15 expanded verticals

**`IndustryExplorerGrid` rules:**
- Life Sciences always appears first / prominently
- Filter chips for grouping (Life Sciences / All / by sector)
- Selecting a card opens a `DetailPanel` or `Drawer`
- For original 4 verticals (Chemicals, Agrochemicals, Automotive, Financial Services): source focus areas available in panel
- For 15 expanded verticals: generic capability mapping only — no fabricated sector depth
- Banking & Finance retained within Financial Services (do not drop either)

---

## 21. Life Sciences

Life Sciences is one of the most **sophisticated** experiences on the website. It must feel like an ecosystem, not a list.

**Architecture:**
```
Life Sciences (hero with "founding heritage" framing)
    ↓
Six sub-sector ecosystem (EcosystemMap — selectable chips)
    ↓
SubSectorPanel: focus areas (source-faithful) + relevant capabilities + LS-specific AI
    ↓
LS-specific AI section (cross-link to AI Enterprise Solutions)
    ↓
Geographic context (cross-link to Where We Work)
    ↓
Start a conversation CTA
```

**Six sub-sectors (with source focus areas — see `content-inventory.md`):**
Pharmaceuticals · Medical Devices · Medical Diagnostics · Medical Equipment · Surgical Consumables · Hospitals & Healthcare Providers

**LS-specific AI (from source, must appear):**
- AI-assisted pharmacovigilance & adverse-event monitoring
- Regulatory intelligence automation
- AI-powered KOL identification & market-access analytics

**The depth signal:** life sciences uses editorial depth — multiple disclosure levels, specific language, sector-specific terminology. Other industries get one chip and a panel. Life Sciences gets a page and an ecosystem.

---

## 22. Geography

**The geographic model:**
```
NAIROBI (HQ)
    → EAST AFRICA (Kenya, Ethiopia, Uganda, Tanzania, Rwanda, Burundi, South Sudan, Somalia, Djibouti, Eritrea)
    → AFRICA (all 45 countries across 4 regions)
    → GLOBAL (Europe + United States)
```

**Design rules:**
- SVG line map of Africa (simplified, path-per-region) — no WebGL, no tile maps
- `RegionSelector`: accordion-style disclosure (one region open at a time)
- Country lists inside panels — NEVER all 45 at once
- 12 focus markets marked with `•` accent — **labeled "Focus markets" not "offices"**
- Nairobi marked with dot + coordinate — the geographic anchor
- Europe and US: honest text panels from source (what MindCraft does there, not fabricated offices)

**The cartographic motif:** dot-grid background on the dark geography section (1px dots, `40px` spacing, muted ink) — provides geographic "feel" without decoration.

**Africa is communicated through:**
geographic intelligence · market systems · institutions · businesses · regulatory environments · Nairobi's position as a business/innovation hub

**Not through:** continent silhouettes as decoration · safari imagery · flags · cultural stereotypes.

---

## 23. Explorer (Industry × Geography × Capability)

**What it is:** A restrained intelligence composer. NOT a SaaS dashboard.

**The model:**
```
[ INDUSTRY selector ]  ×  [ GEOGRAPHY selector ]  ×  [ CAPABILITY selector ]
                              ↓
                    [Composed, source-true output]
                              ↓
                    "Start a conversation about this"
```

**Interaction:**
- Desktop: three side-by-side selectors → output panel below
- Mobile: stacked stepper (Industry → Geography → Capability → Result)
- URL-encoded state: `/explore?i=pharmaceuticals&g=kenya&c=market-research`
- Deep-linkable, refresh-safe, shareable

**Output rules (integrity-critical):**
- Output is composed ONLY from source focus areas + pillar scope + geography facts
- When a combination has no source-specific detail: graceful degradation → general capability statement ("Here is how MindCraft's Market Research applies across East African pharmaceutical markets")
- NEVER fabricate a case study, metric, named client, "example project"
- Output ends with a pre-scoped "Start a conversation about this" CTA

**Visual:** Feels calm, intelligent, useful. Not a futuristic AI interface. Editorial type, hairline structure, minimal chrome. The intelligence is in the information, not the interface.

---

## 24. How We Work

**The engagement process (source, 6 stages):**
Discovery → Proposal → Design → Delivery → Evaluation → Follow-up

Represented as a **horizontal process spine** (desktop) / **vertical list** (mobile). Not six identical cards. Each stage: mono number + name + source description revealed on select.

**Delivery modalities (all 7 must appear, compact):**
In-person · Virtual · Hybrid · Short courses (1–5 days) · Longer programs (weeks–months) · Retainers · Scoped one-off projects

**Differentiators (DEPTH version — 5 editorial blocks):**
1. Deep Life Sciences heritage
2. Pan-African footprint with local fluency
3. One partner, four integrated capabilities
4. Applied, decision-ready outputs
5. Responsible, governed AI by design

Note: the Homepage shows a SCAN version. How We Work owns the DEPTH version. Don't duplicate.

**No invented methodology names.** The process is "how a MindCraft engagement runs" — not a branded framework.

---

## 25. Insights (Future page)

When implemented, must feel like an **editorial knowledge platform** — not a blog-card grid.

Use: editorial indexes, featured essays, topic navigation, metadata strips, hierarchy.
Avoid: identical card grids, generic "latest posts" layouts.

Categories (when content exists): Life Sciences · Africa Markets · Market Intelligence · Business & Strategy · AI & Digital Transformation · Research & Perspectives.

---

## 26. Contact

**Primary conversion endpoint.** Simple, trustworthy, unhurried.

**`ContactForm` fields:** Name · Organization · Email · Region (Africa / Europe / US) · Area of interest (4 pillars / Life Sciences / Not sure yet) · Message

**Contact facts (source only — no fabrication):**
- Headquarters: Nairobi, Kenya
- Email: info@mindcraftconsultancy.com
- Web: www.mindcraftconsultancy.com
- Regions: Africa (primary) · Europe · United States

**No fabricated phone, no fabricated street address.** (Neither appears in the source documents.)

Form handling: configurable endpoint (`CONTACT_ENDPOINT` env var), `mailto:` fallback — mark as `TODO: required-future config` until client provides endpoint.

Pre-scoped entry from Explorer: URL params `?industry=X&geo=Y&capability=Z` prefill the area-of-interest and add a "Scoped to: [X] / [Y] / [Z]" label with a clear affordance.

---

## 27. Responsive System

### Target widths
320 · 375 · 390 · 414 · 768 · 1024 · 1280 · 1440

### Core principle: REFLOW, NEVER REMOVE

Desktop compositions transform; they do not get amputated.

| Component | Desktop | Mobile |
|---|---|---|
| ValueChainSpine | Horizontal track | Vertical accordion |
| EcosystemMap | Chip cluster + side panel | Chips stack + bottom sheet |
| IndustryExplorerGrid | Auto-fill grid | 1-col + filter chips as drawer |
| RegionSelector | Region list + panel beside | Region list + below-list expansion |
| Explorer | 3-col side-by-side | Stacked stepper |
| ProcessDiagram | Horizontal track | Vertical steps |
| Tabs | Tab row | Accordion |
| DetailPanel | Inline side panel | Bottom-sheet drawer (85vh, scrollable) |
| Footer | 4-column groups | Stacked + optional accordion groups |
| ContactForm | 2-col on wide | 1-col always |

### Mobile quality checklist
- [ ] No horizontal overflow at any width
- [ ] No clipped text
- [ ] No disappearing content (no `display:none` for content, only for duplicated decorative chrome)
- [ ] No broken grids
- [ ] All touch targets ≥ 44×44px
- [ ] No hover-only interactions (every hover has a tap equivalent)
- [ ] Readable typography (min 16px for body)
- [ ] No oversized hero (hero headline wraps naturally; no overflow)
- [ ] No horizontal scrolling (except code blocks, if any)

---

## 28. Accessibility

**Target:** WCAG 2.2 Level AA across all routes at all widths.

### Requirements
- Semantic HTML throughout: `<nav>`, `<main>`, `<header>`, `<footer>`, `<section>`, `<article>`, `<button>` (never `<div onClick>`)
- One `<h1>` per page; logical heading order (H1→H2→H3; no skipped levels)
- Skip link to `#main` at page start; visible on `:focus`
- Keyboard operability for ALL interactions: nav, hamburger, accordion, tabs, chips, drawer/panel, Explorer, maps, forms
- Focus: `2px solid var(--accent)` ring, `2px` offset — visible on all surfaces
- Focus management: moves into panel/drawer on open; returns to trigger on close; focus-trapped in overlays
- `aria-expanded`, `aria-controls`, `aria-selected`, `aria-label`, `aria-live`, `aria-describedby`, `aria-invalid` — applied correctly (only where semantically necessary)
- Form error: below field, `aria-describedby` reference, `aria-invalid="true"`, never color-only
- `required` marked in label text, not just visually
- Meaningful alt text on images; decorative motifs `aria-hidden="true"`
- `prefers-reduced-motion: reduce` honored — all transforms and animations disabled; state changes instant
- Color contrast: body text ≥ 7:1; secondary text ≥ 4.5:1; accent text ≥ 4.5:1; on-ink text ≥ 7:1
- Line length ≤ 72ch for body reading text

---

## 29. Performance

**Target:** LCP ≤ 2.0s · CLS ≤ 0.02 · INP ≤ 150ms · Lighthouse ≥ 90 (Performance, Accessibility, Best Practices, SEO)

### Budget
- Initial JS (per route): ≤ 110KB gzipped
- Total page transfer: ≤ 350KB (excluding fonts, before cache)
- Fonts: 2 faces preloaded; all self-hosted `woff2` subset (Latin); `font-display: swap`

### Rules
- Route-based code splitting (dynamic import per page in React/Vite)
- Lazy-load: Explorer, SVG map, drawer/sheet components
- Tree-shake lucide icons (import named, never `import * from`)
- SVG maps inline or as external SVG (never heavy tile engines)
- No WebGL / Three.js / Lottie / particle engines / large video
- No unnecessary `motion` library features — prefer CSS transitions for simple states
- Preload only the hero font weights (Bricolage Grotesque 440, Literata 400)
- Images: `loading="lazy"`, `fetchpriority="high"` on hero image only, `srcset`, `WebP`/`AVIF`, max 200KB per image
- Avoid layout shift: all image/font slots reserved in CSS before load

### Dependency justification
Every added dependency must justify itself with a clear benefit that cannot be achieved with platform APIs.

---

## 30. SEO

### Per-page metadata

| Route | `<title>` | `<meta name="description">` | `<h1>` |
|---|---|---|---|
| `/` | MindCraft Consultancy Services — Nairobi | Nairobi consultancy combining market research, business consulting, AI training and enterprise AI, with deep Life Sciences expertise and an African focus. | Sector depth, meet applied AI. |
| `/what-we-do` | What We Do — MindCraft Capabilities | Four integrated capabilities — market research, business consulting, AI enterprise solutions and AI training — as one connected value chain. | One engine, from question to impact. |
| `/industries/life-sciences` | Life Sciences Expertise — MindCraft | Deep Life Sciences expertise across pharma, medical devices, diagnostics, equipment, surgical consumables and hospitals — Africa, Europe and beyond. | Life Sciences is where we go deepest. |
| `/where-we-work` | Where We Work — Africa, Europe & US | Active across 45 African markets in four regions from Nairobi HQ, with reach into Europe and the United States. | Rooted in Nairobi. Focused on Africa. |
| `/contact` | Contact MindCraft — Start a Conversation | Contact MindCraft Consultancy Services, Nairobi — business consulting, market research, AI training and enterprise AI across Africa, Europe and the US. | Start a conversation. |

(Full table in `specs/24-seo.md`)

### Structured data
`Organization` / `ProfessionalService` JSON-LD:
- name, url, email, addressLocality: "Nairobi", addressCountry: "KE", areaServed: ["Africa", "Europe", "US"]
- NO fabricated fields: no `aggregateRating`, no `review`, no `numberOfEmployees`, no false `foundingDate` framing as longevity

### SPA note
Vite SPA: use `react-helmet-async` + prerender (vite-plugin-ssr or similar) to ensure meta tags render server-side for crawlers. Mark as `TODO: required-future implementation`.

---

## 31. Do's and Don'ts

### Do
- Use editorial asymmetry where it adds meaning
- Lead every section with the essential; put depth behind interaction
- Make Life Sciences visibly deeper than any other vertical
- Give the four capabilities a connected-engine narrative, not four equal cards
- Use real structural facts as credibility (4 pillars, 6 sub-sectors, 4 regions, 6 stages, 5 differentiators)
- Design mobile as a first-class layout; never as a squeeze of desktop
- Use hairlines as structure; let whitespace do the separating
- Make Africa present through intelligence, data, and context — never through decoration
- Write copy that a serious professional would respect
- Phrase deliverables as offerings, not past achievements
- Represent the 2026 founding honestly; confidence without exaggeration

### Don't
- Make every section default to cards
- Use the same layout for every page section
- Duplicate information across pages (one canonical home per fact)
- Create UI interactions for novelty rather than information density
- Make Africa decorative (continent silhouettes, safari references)
- Invent case studies, client names, metrics, or partnerships
- Claim offices beyond Nairobi HQ
- Use gradient text (absolute ban)
- Use colored left/right border stripes on cards or callouts (AI slop tell)
- Add new color tones outside the paper/ink/terracotta system
- Design for Anthropic's aesthetic — not even as a reference

---

## 32. Implementation Guidance

### Stack
React 19 + Vite + Tailwind v4 + `motion` + lucide-react

### Tailwind v4 token registration
In `src/index.css` under `@theme`:
```css
@theme {
  --color-paper: oklch(0.972 0.008 72);
  /* ... all tokens from §5 ... */
  --font-display: "Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif;
  --font-body:    "Literata", Georgia, serif;
  --font-mono:    "Spline Sans Mono", ui-monospace, monospace;
}
```

### Component files
```
src/
  components/
    ui/          — Button, Eyebrow, Card, Chip, Accordion, Tabs, Panel, Drawer, Modal
    layout/      — SiteHeader, Footer, Section, Container
    signature/   — ValueChainSpine, EcosystemMap, IndustryExplorerGrid,
                   RegionSelector, ProcessDiagram, Explorer, GlanceStrip,
                   DifferentiatorList, AudienceSelector, ContactForm
  data/          — pillars.ts, industries.ts, lifeSciences.ts, geography.ts,
                   process.ts, clients.ts  ← all source-faithful, no fabrication
  pages/         — per-route components
```

### Data integrity
Every data file record carries `source: "P" | "E" | "derived"`. No fabricated fields. No client names, metrics, or testimonial fields in the schema. Country counts verified: East 10, West 16, Southern 14, North 5 = 45.

### Design skill invocation
See `DESIGN.md` for which Claude Code skills to invoke for which design tasks.

---

## 33. Known Constraints

### Content
- **Founded 2026**: no longevity claims, no "years of experience" numbers.
- **Building partnerships**: no partner logos, listed as "in progress" only.
- **No named team**: team described as "core team… growing network of associates and partners." No fabricated bios.
- **Contact endpoint**: form handling is `TODO: required-future config` — client must provide submission endpoint.
- **Privacy/Terms**: required-future content. Routes reserved; marked `noindex` until real content provided; never fabricate legal text.

### Technical
- `motionsites` MCP requires auth token — get from motionsites.ai dashboard.
- `21st-dev` MCP (component inspiration): connected as SSE. Test with a component search before relying on it.
- The React scaffold was removed from the repo. Re-scaffold: `npm create vite@latest mindcraft -- --template react-ts` + install dependencies from the list in `requirements.md`.
- `motion` v13.2.0 is in the repo-root `package.json`.

---

## 34. Design Quality Checklist

Run before any implementation sign-off:

**Identity test**
- [ ] Could this be mistaken for Anthropic? → If yes: redesign.
- [ ] Could this be mistaken for an AI startup? → If yes: redesign.
- [ ] Could this be mistaken for a generic consulting template? → If yes: redesign.
- [ ] Remove the logo. Is the site still identifiable as a serious African intelligence firm? → If no: strengthen.

**Depth/breadth test**
- [ ] Is Life Sciences visibly deeper than every other industry?
- [ ] Do the four capabilities feel like one connected system?
- [ ] Does the Explorer feel calm and intelligent (not gimmicky)?

**Africa test**
- [ ] Does Africa appear through context and intelligence, not through decorative clichés?
- [ ] Are all geographic claims honest (focus markets ≠ offices)?
- [ ] Are all 45 country names correct and accessible via the RegionSelector?

**Content integrity test**
- [ ] Zero fabricated clients, metrics, testimonials, or case studies?
- [ ] All deliverables phrased as offerings, not results?
- [ ] Vision, Mission, and all 5 Values retain every distinct claim from the source?
- [ ] All 4 original verticals' focus areas survived the expanded-list merge?

**Anti-slop audit**
- [ ] No gradient text anywhere?
- [ ] No purple/blue AI gradients?
- [ ] No colored left/right border stripes on cards?
- [ ] No fake dashboards or fake statistics?
- [ ] No excessive rounded cards?
- [ ] Not everything in a card?
- [ ] Interactions solve information density, not novelty?
- [ ] Motion is restrained and meaningful?

**Quality test**
- [ ] Content intelligible without design (plain HTML)?
- [ ] Design works at 320px as well as 1440px?
- [ ] No horizontal overflow at mobile?
- [ ] Every interactive element keyboard-operable?
- [ ] Reduced-motion honored?
- [ ] All CTAs link to real destinations?
- [ ] Page loads under performance budget?
- [ ] Lighthouse ≥ 90?
