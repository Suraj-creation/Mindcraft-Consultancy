# 16 — Contact

> Parent: `requirements.md` (§14 conversion — primary CTA "Start a Conversation"), `design-principles.md`, `sitemap.md`, `content-inventory.md` §13 (contact facts), `source-traceability.md` §H, `specs/01`, `specs/02`, `specs/13` (Explorer — pre-scoped entry), `specs/15` (Who We Serve — optional pre-scope), `specs/19` §3.11 (Forms), `specs/22` (accessibility), `specs/25` (anti-fabrication). Source: Corporate Profile §10 + closing page.
> Disclosure role: **ENGAGE** (the primary conversion endpoint of the whole site).

---

## 1. Route & meta
- **Route:** `/contact` (query-parameterized for pre-scoped entry, see §8.6).
- **Nav position:** reached via the persistent header CTA `Start a Conversation`, the footer Company group, and every contextual end-of-section CTA site-wide (`requirements.md` §14). Not a labeled primary-nav text item (the CTA is the entry).
- **Canonical owner of:** the `ContactForm` and the full contact block (Nairobi HQ, email, web, regions served). Footer carries a compact subset (`specs/18`); this page is the source.
- **Pre-scoped entry:** must accept and hydrate URL params from the Explorer (`specs/13` §8.6) and the Who We Serve module (`specs/15`), prefilling area of interest + region.

## 2. Objective
Convert intent into a real conversation with the lowest possible friction and the highest possible trust: a short, accessible form plus honest, source-true contact facts. Support **pre-scoped** arrivals (industry/geography/capability already chosen elsewhere) so a visitor confirms rather than re-enters context (`specs/22` §2, Redundant Entry 3.3.7).

## 3. Primary visitor question
"How do I actually start a conversation with MindCraft — and can I reach them?"

## 4. Primary audience
Anyone ready (or nearly ready) to engage: CEOs/MDs, strategy/commercial/regulatory leaders, CIOs/CTOs, HR/L&D leads, government/regulator and NGO/development-sector buyers — arriving cold from the header CTA or warm/pre-scoped from the Explorer, a pillar page, an industry page, or the Who We Serve module.

## 5. What visitor should understand
1. Starting a conversation is simple, direct and non-committal — a short form, not a sales funnel.
2. MindCraft is reachable: headquartered in Nairobi, Kenya; contactable by email; serving Africa (primary), Europe and the US.
3. Their context can be pre-scoped (interest + region) so the conversation starts informed.
4. This is a consultative first contact, not a "sign up" — framing matches the site-wide voice (`specs/02`).

## 6. Hero
- **Eyebrow (mono):** `CONTACT`
- **Headline (≤9 words):** *Start a conversation.* (3 words)
- **Supporting line (≤24 words):** *Tell us about your organization and your challenge. We'll respond with the most relevant way to help — across Africa, Europe or the US.* (23 words)
- **Primary CTA:** none separate — the **form is the hero's action** (form sits directly beneath the supporting line on desktop; see §12).
- **Secondary CTA:** none competing with the form; a quiet `Explore your situation` → `/explore` may appear for visitors who arrived unscoped and want to compose context first.
- **Visual:** editorial header block + top hairline rule; asymmetric two-column layout (form primary column / contact-facts annotation column). No decorative graphics (`specs/19` §4).

## 7. Section sequence
Each: purpose · content/copy · approx words · visual · interaction · source facts.

### S1 — Hero + form (signature: `ContactForm`, above the fold)
- **Purpose:** present the conversion action immediately; confirm any pre-scoped context.
- **Content/copy:** hero copy (§6). If arriving pre-scoped, a quiet mono confirmation line above the form: `SCOPED TO: [Interest] · [Region]` with an inline "clear" affordance (`specs/22` — never traps the user in a prefilled state).
- **Word count:** ~26 (hero) + field labels.
- **Visual:** `ContactForm` (full spec §8) in the primary column; fields stacked, labels above inputs, hairline borders, 44px min height (`specs/19` §3.11).
- **Interaction:** `form` — inline validation on blur + on submit; accessible errors; submit → success state (§8.5). Pre-scoped params hydrate `interest`/`region` on load (§8.6).
- **Source facts:** the offer to discuss all four pillars across Africa/Europe/US (Profile §10 opening line).

### S2 — Contact facts (real, source-only)
- **Purpose:** establish reachability with the exact source facts — no fabrication.
- **Content/copy:** eyebrow `MINDCRAFT CONSULTANCY SERVICES` · then:
  - **Headquarters:** *Nairobi, Kenya*
  - **Email:** `info@mindcraftconsultancy.com` (mailto link)
  - **Web:** `www.mindcraftconsultancy.com` (link)
  - **Regions served:** *Africa (primary focus) · Europe · United States*
- **Word count:** ~20 (facts only).
- **Visual:** annotation column (desktop) / below-form block (mobile); mono labels + hairline separators; optional simplified line-motif of Africa with Nairobi marked (SVG, `specs/19` §4) — decorative variant `aria-hidden`, or titled if meaningful.
- **Interaction:** `mailto:` and web link are real; static otherwise.
- **Source facts:** Profile §10 (HQ, email, web, regions served). **No fabricated phone number or street address** — neither exists in source (`specs/25` §2; §11 below).

### S3 — Brand closing line
- **Purpose:** close with the source brand line; reinforce identity without a wall.
- **Content/copy:** *Building AI-powered growth for Life Sciences and industry across Africa and beyond.* (verbatim source signature line, allowed reuse — content-inventory §13).
- **Word count:** 12.
- **Visual:** quiet editorial line, optional ink band (≤1 per page); no CTA competing with the form.
- **Interaction:** static.
- **Source facts:** Profile closing page (brand line).

## 8. Signature module detail — `ContactForm`

### 8.1 Data model (fields)
```ts
type Region = "africa" | "europe" | "us";
type Interest =
  | "business-consulting" | "market-research" | "ai-training"
  | "ai-enterprise-solutions" | "life-sciences" | "not-sure";

type ContactSubmission = {
  name: string;          // required
  organization: string;  // required
  email: string;         // required, format-validated
  region: Region;        // required (Africa / Europe / US)
  interest: Interest;    // required (6 options incl. "Not sure yet")
  message: string;       // required
  // integrity: NO metric/client/tracking fields; only what the visitor provides.
  meta?: {               // NOT user-entered; captured only if pre-scoped, for context
    scopedIndustry?: string;  // from Explorer/industry entry (id)
    scopedGeo?: string;       // from Explorer (region/country id) — maps region select
    utmSource?: never;        // no covert tracking fields fabricated into schema
  };
};
```
- **Field inventory (exact, per brief):** `name`, `organization`, `email`, `region` (Africa / Europe / US), `area of interest` (Business Consulting / Market Research / AI Training / AI Enterprise Solutions / Life Sciences / Not sure yet), `message`.
- **Integrity (`specs/25` §7):** no hidden metric/client/testimonial fields; no fabricated CAPTCHA that acts as a cognitive test (`specs/22` §2, 3.3.8). Optional spam mitigation is a honeypot or provider-side check, never a puzzle.

### 8.2 Field specs & controls
| Field | Control | Required | Label | Notes |
|---|---|---|---|---|
| Name | text input | yes | `Name` | autocomplete `name` |
| Organization | text input | yes | `Organization` | autocomplete `organization` |
| Email | email input | yes | `Email` | autocomplete `email`, `type="email"` |
| Region | select (3) | yes | `Region` | options: Africa · Europe · United States |
| Area of interest | select (6) | yes | `Area of interest` | options below; hydratable from URL |
| Message | textarea | yes | `Message` | ~4 rows, resizable; short helper: *What are you trying to achieve?* |

- **Region options (value → label):** `africa → Africa` · `europe → Europe` · `us → United States`.
- **Area of interest options (value → label):** `business-consulting → Business Consulting` · `market-research → Market Research` · `ai-training → AI Training` · `ai-enterprise-solutions → AI Enterprise Solutions` · `life-sciences → Life Sciences` · `not-sure → Not sure yet`.
- **Controls (`specs/19` §3.11):** label above input (never placeholder-as-label); `--radius-1`, 1px hairline; 44px min height; visible accent focus ring; required indicated in the label (text "(required)" or `*` with legend), not by color alone (`specs/22`).

### 8.3 Validation rules (accessible, `specs/22` §2)
- **Required:** name, organization, email, region, interest, message — each non-empty (selects must not be the empty prompt).
- **Email:** valid format (basic RFC-ish pattern); trimmed; single `@`, domain with dot. No "disposable-domain" blocking (avoids false negatives).
- **Message:** min ~10 characters (guards empty/garbage) — soft, honest limit; no max that truncates intent (generous cap ~4000 with counter if capped).
- **Timing:** validate on `blur` per field and on submit; do not validate aggressively on every keystroke (announce noise). Re-validate a field on change **after** it has errored (clear the error live once fixed).
- **Submit gate:** button enabled always (never disable-and-hide-why); on invalid submit, focus moves to the **first invalid field** and an error summary is announced.

### 8.4 Accessible error model (`specs/22`)
- Each field: `aria-invalid="true"` when errored; `aria-describedby` points to a per-field error `<p id="...-error">` rendered **below** the field, in `--color-error`, with an icon that is not the sole signal (text always present).
- **Error summary:** on failed submit, an `role="alert"` (or focus-managed `role="status"`) summary lists each error as an in-page link to its field; focus moves to the summary (or first invalid field), so screen readers announce it.
- **No color-only errors**; contrast of error text ≥4.5:1 (`specs/19` §1.1, `specs/22` §6).
- **Redundant Entry (3.3.7):** pre-scoped values prefill and are editable; the visitor is never asked to re-enter what the Explorer already knew.

### 8.5 States
- **Idle:** empty (or pre-scoped) form.
- **Focused / filling:** per-field focus ring; live-clear of a previously-shown error.
- **Invalid (submit):** error summary + per-field messages; focus managed (§8.4).
- **Submitting:** button shows loading (`aria-busy`), inputs disabled to prevent double-submit; no layout shift.
- **Success:** replace form region with a confirmation (`role="status"`): heading *Thank you — your message is on its way.* + line *We'll reply by email to [email]. In the meantime, you can [explore capabilities] or [see how we work].* (links to `/what-we-do`, `/how-we-work`). Do **not** claim a response-time SLA (unsupported).
- **Error (send failed):** non-blocking `role="alert"`: *Something went wrong sending your message. Please try again, or email us directly at info@mindcraftconsultancy.com.* (honest fallback to the real email). Form values preserved.
- **Reduced-motion:** state transitions are instant (no transform), `specs/22` §9.

### 8.6 Pre-scoped entry (URL params — from Explorer & Who We Serve)
- **Accepted params:** `interest`, `industry`, `geo` (and their aliases from `specs/13` §14: the Explorer links to `/contact?industry=[id]&geo=[value]&interest=[capabilityId]`).
- **Mapping on load:**
  - `interest` → **Area of interest** select. Values reuse pillar ids (`business-consulting`, `market-research`, `ai-training`, `ai-enterprise-solutions`); also accepts `life-sciences`. Unknown/absent → unset (defaults to placeholder, not "Not sure" — honest).
  - `geo` → **Region** select, normalized: any African country id or region id (`east|west|southern|north|africa`) → `africa`; `europe` → `europe`; `us` → `us`. The specific country/industry is retained in `meta.scopedGeo` / `meta.scopedIndustry` and echoed in the mono `SCOPED TO:` line + optionally appended to the message context (never silently), so nuance isn't lost while the 3-option Region select stays valid.
  - `industry` → not a form field; stored in `meta.scopedIndustry`, shown in `SCOPED TO:` line, and may pre-seed the message helper (e.g., placeholder mentioning the industry) — editable, never locked.
- **Confirmation line:** `SCOPED TO: [Interest label] · [Region label]` (+ industry if present), with a **Clear** control that resets to unset.
- **Invalid params:** degrade to unset without error (never crash; never fabricate a value), matching Explorer robustness (`specs/13` §8.6).
- **Interop:** param ids match Explorer pillar/geo/industry ids and Who-We-Serve `scope` (`specs/13`, `specs/15`) — single shared vocabulary.

### 8.7 Form-handling approach (spec-level — required-future config)
- The form **posts to a submission endpoint that is required-future configuration** — `TODO: required-future config — form submission endpoint/email delivery TBD (awaiting client input)`. Do **not** invent a backend, provider, API key, or address (`specs/25` §9).
- **Spec-level contract:** on submit, the client serializes `ContactSubmission` and POSTs JSON to a single configurable endpoint (`CONTACT_ENDPOINT` env/config). The intended behavior is delivery to `info@mindcraftconsultancy.com` (the real source email) via whatever mechanism is later configured (form-to-email service, serverless function, or CRM webhook). Until configured, the honest fallback is a `mailto:` composition using the real email, and/or a visible "email us directly" path (see §8.5 error state).
- **No fabricated success without delivery:** the success state must only render on a genuine 2xx from the configured endpoint (or the explicit `mailto:` fallback path); it must not fake a send. If unconfigured in an environment, the build surfaces the `mailto:` fallback rather than a false confirmation.
- **Privacy:** a short note near the submit button — *We use your details only to respond to your enquiry.* Link to `/privacy` (marked required-future, `specs/18`/`specs/25` §9); if Privacy body is unavailable, the link is omitted rather than pointing at fabricated policy text.

## 9. Components used
`Header`, `Footer`; `Eyebrow`, `Tag`; editorial header block (`specs/19` §2); `ContactForm` with `Input`, `Select`, `Textarea`, error text, error summary, and `Button` (primary `Start a Conversation` / submit) — all per `specs/19` §3.11 and `specs/22`; `ContactDetails` block (S2); `Link`/`mailto`; optional `aria-hidden` line-motif of Africa (`specs/19` §4). No modal unless a share/confirmation genuinely needs it (prefer inline success). No charts/WebGL.

## 10. Progressive-disclosure mapping
```
SCAN        Hero: "Start a conversation." + contact facts (HQ, email, regions)
UNDERSTAND  Supporting line + (if scoped) the SCOPED TO summary
EXPLORE     (optional) "Explore your situation" for unscoped visitors → /explore
DETAIL      The form fields themselves (the action)
ENGAGE      Submit → success state (+ next-step links)
```

## 11. Content excluded & why
- **Phone number** — **not in source**; must not be fabricated (`specs/25` §2). Only email is provided by the Profile.
- **Street address / building / map pin coordinates** — **not in source**; HQ is stated only as "Nairobi, Kenya." No fabricated address; the Africa line-motif (if used) marks the city, not a fake precise location.
- **Response-time SLA / "we reply within 24h"** — unsupported; success copy avoids any time promise.
- **Live chat / booking calendar / CRM branding** — not specified by source; would imply infrastructure not confirmed. Out of scope (may be added later with real config).
- **Multiple office locations** — only Nairobi HQ exists in source (`specs/25` §2); regions are "served," not offices.
- **Social media links** — none provided in source; not fabricated (footer, `specs/18`, follows same rule).
- **Testimonials / client logos / trust badges** — prohibited (`specs/25` §2); credibility here is the clarity of the form and the honest facts.

## 12. Desktop behavior (≥1024)
- Asymmetric two-column layout: **form** in the wider primary column (e.g., 7/12), **contact facts** (S2) in the narrower annotation column (5/12), aligned to the top hairline. Brand line (S3) spans full width beneath.
- Selects and inputs full-width within their column; label above each; error text reserves space to avoid layout shift on validation.
- `SCOPED TO:` line sits above the form when pre-scoped.
- Success state replaces the form column in place; contact facts remain visible.

## 13. Mobile behavior (320–414)
- Single column: hero → (SCOPED TO if present) → form → contact facts → brand line.
- Full-width inputs/selects/textarea; 44px min targets; native select controls acceptable; no hover-dependent affordances.
- Error summary appears above the form and receives focus on invalid submit; each error links to its field (scrolls clear of sticky header, `specs/22` §5).
- No horizontal overflow at 320; submit button full-width; `mailto` fallback tappable.
- Success state replaces the form; next-step links stack full-width.

## 14. Internal links
- **Inbound (pre-scoped):** Explorer result + closing band → `/contact?industry=…&geo=…&interest=…` (`specs/13` §14); Who We Serve chips → `/contact?interest=…&region=…` (`specs/15`); every pillar/industry/geography page's contextual CTA → `/contact` (optionally scoped, e.g. `/contact?interest=business-consulting`).
- **Outbound:** success/next-step → `/what-we-do`, `/how-we-work`; optional `Explore your situation` → `/explore`; `mailto:info@mindcraftconsultancy.com`; web `www.mindcraftconsultancy.com`; privacy link (only if Privacy content exists).
- **← Linked from:** header CTA (persistent, every page), footer Company group + contact block, and every end-of-section CTA site-wide (`requirements.md` §14).

## 15. SEO metadata
- **`<title>` (≤60):** `Contact MindCraft — Start a Conversation | Nairobi` (49)
- **Meta description (150–160):** `Start a conversation with MindCraft Consultancy Services in Nairobi, Kenya. Business consulting, market research, AI training and enterprise AI across Africa, Europe and the US.` (170 → trim to:) `Contact MindCraft Consultancy Services, Nairobi, Kenya — business consulting, market research, AI training and enterprise AI across Africa, Europe and the US.` (152)
- **H1 (one):** `Start a conversation.`
- **Canonical:** `/contact` (query params non-canonical; base URL is canonical).
- **OG:** title "Contact MindCraft — Start a Conversation"; description as meta; image = hairline Nairobi/Africa coordinate motif (no stock/AI imagery); type `website`; url `/contact`. **No fabricated address/phone in structured data** — any `Organization`/`LocalBusiness` schema includes only source facts (name, `addressLocality: Nairobi`, `addressCountry: KE`, email, url, `areaServed: Africa, Europe, US`), omitting phone/street (`specs/25` §2).

## 16. Conversion objective
This is the **primary conversion endpoint** of the entire site. Success = a completed, validated `ContactForm` submission (or explicit `mailto` fallback) that reaches `info@mindcraftconsultancy.com` via the configured endpoint. Pre-scoped arrivals convert with the least friction (interest + region already set). Secondary success = a visitor using the real email/web link when they prefer direct contact.

## 17. Acceptance criteria (testable)
1. **Fields:** the form contains exactly `name`, `organization`, `email`, `region` (Africa/Europe/US), `area of interest` (Business Consulting / Market Research / AI Training / AI Enterprise Solutions / Life Sciences / Not sure yet), `message` — labels above inputs (no placeholder-as-label).
2. **Validation:** all fields required; email format-validated; message min-length enforced; invalid submit focuses the first invalid field and announces an accessible error summary (`role="alert"`/status) with per-field `aria-invalid` + `aria-describedby` messages; errors are not color-only.
3. **Pre-scoped entry:** `/contact?interest=market-research&geo=kenya` (or `region=africa`) hydrates the Area-of-interest and Region selects on load; a `SCOPED TO:` line reflects it with a working **Clear** control; invalid params degrade to unset without error; the visitor is never forced to re-enter scoped context (3.3.7).
4. **Interop:** accepted param ids (`interest`, `industry`, `geo`/`region`) match Explorer (`specs/13`) and Who-We-Serve (`specs/15`) vocabularies; `geo` country/region ids normalize to the 3-option Region select while retaining nuance in `SCOPED TO:`/`meta`.
5. **Contact facts:** Nairobi, Kenya; `info@mindcraftconsultancy.com` (mailto); `www.mindcraftconsultancy.com`; regions Africa (primary) · Europe · United States — all present, all source-true.
6. **Anti-fabrication:** **no phone number, no street address**, no SLA, no office beyond Nairobi, no social links, no testimonials/logos/metrics anywhere on the page or in OG/JSON-LD (`specs/25` §2); grep → zero hits.
7. **Form handling:** the submission endpoint is marked `TODO: required-future config` (no invented backend/provider/keys); success state renders only on a genuine 2xx (or the explicit `mailto` fallback), never faked; unconfigured environments surface the `mailto` fallback, not a false confirmation.
8. **States:** idle, filling, invalid, submitting (`aria-busy`, double-submit guarded), success (`role="status"`, no time promise), and send-error (honest `mailto` fallback, values preserved) all implemented; reduced-motion instant.
9. **A11y:** exactly one `<h1>` (`Start a conversation.`); logical heading order; keyboard-operable end-to-end; visible accent focus ring; 44px targets; error text ≥4.5:1 contrast; no cognitive-test CAPTCHA (3.3.8).
10. **Responsive:** two-column (form / facts) on desktop, single column on mobile; no horizontal overflow at 320px; full-width controls and submit on mobile; error summary focuses and links to fields clear of the sticky header.
11. **Conversion reach:** the header CTA, footer, and every contextual CTA site-wide route here (`requirements.md` §14); the brand closing line (`Building AI-powered growth for Life Sciences and industry across Africa and beyond.`) appears verbatim.
