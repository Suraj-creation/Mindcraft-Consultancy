# 25 — Content Integrity

> Parent: `requirements.md` §12, `design-principles.md`. The enforcement rulebook that keeps the site truthful and source-faithful. Applies to all copy, components, and data files. Pair with `source-traceability.md`.

## 1. Prime directive
**Preserve the substance; improve the communication.** Rewrite, condense, restructure, and correct obvious errors — but never lose, remove, contradict, invent, or materially distort any fact from the two source documents.

## 2. Absolutely prohibited (do NOT fabricate)
Client logos · client names · testimonials · case studies · revenue/financials · employee/headcount numbers · market statistics · success percentages · specific project counts · awards · certifications · named partnerships · years of experience · geographic offices beyond Nairobi HQ · "deployed"/"live"/"in-production" systems presented as track record · quantified outcomes (efficiency %, revenue $, accuracy %) attributed to MindCraft's past work.

**Banned words/claims unless the sources are updated to support them:** "proven," "trusted by," "our clients," "we helped [X]," "over N years," "N+ projects/clients," any numeric result, any before/after metric, any leaderboard/rating.

> The Profile lists *deliverable types* and *capabilities* (what clients "can expect"). These are offerings, not evidence — phrase them as **what MindCraft does / provides**, never as completed results. E.g., "Measurable efficiency, accuracy or revenue impact tied to each deployed solution" is a **design intent** of the offering → write "Solutions are built to deliver measurable efficiency, accuracy or revenue impact," not "We delivered X% efficiency."

## 3. Honest handling of "new firm" facts
- Established **2026** — state plainly where relevant (About). Do not imply longevity.
- Team = "core team … supported by a growing network of associates, SMEs and in-country research partners" (Profile §9). Present as written; **no invented named people or bios.**
- Partnerships = "actively building formal academic, technology and industry-association partnerships" (Profile §9). Present as *in progress*; **no partner logos/names.**
- Founding-year value framing (senior attention, competitive terms) is source-supported and allowed.

## 4. Credibility substitutes (use these instead of fake proof)
Real, source-supported structure carries credibility:
- The **four-pillar engine** and its interconnection.
- The **six Life Sciences sub-sectors** + their illustrative focus areas.
- The **four African regions / 45 countries** served + 12 depth markets.
- The **six-stage engagement process**.
- The **five differentiators**.
- The **deliverable types** per pillar (as offerings).
- Domain specificity (KOL mapping, pharmacovigilance, reimbursement, tender intelligence, MEL, RPA) — this specificity *is* the credibility.

## 5. Source-fidelity rules for editing
- **Condensing is allowed**; changing meaning is not. When condensing Vision/Mission, keep every distinct claim (Africa's most-trusted; global recognition; LS depth; ethical/practical AI for Vision — and the Africa/Europe/US scope + LS commitment for Mission).
- **Correcting OCR typos is required** and does not count as distortion: `Pharmaceutcals→Pharmaceuticals`, `compettve→competitive`, `Diagnostcs→Diagnostics`, `Automotve→Automotive`, `adopton→adoption`, `patent experience→patient experience`, `soluton→solution`, `Executon→Execution`, `Evaluaton→Evaluation`, `Optonal→Optional`, `Inital→Initial`, `tmeline→timeline`, `fnal→final`, `efectveness→effectiveness`, `distributon→distribution`, `informaton→information`. (Non-exhaustive; fix any obvious OCR artifact, preserve meaning.)
- **Do not upgrade hedged language into certainty.** "support," "help," "designed to," "can expect" stay hedged.
- **Do not invent focus areas** for the 15 expanded verticals (they arrive with no detail in source `E`). Present them as served industries with capability *mapping* ("how our four capabilities apply"), clearly generalized, not sector-specific claims of depth.

## 6. Explorer & dynamic content integrity (`/specs/13`)
- The Explorer composes output **only** from: source focus areas (LS + 4 original verticals), pillar scope (Profile §4), geography facts (Profile §3 + E), and generic capability mappings for verticals without source depth.
- For any combination lacking specific source detail, **degrade gracefully** to the general statement — never generate a fabricated case, metric, named client, or "example project."
- Result copy templates must be reviewed to ensure no synthesized claim implies past work.

## 7. Data-file governance
All content lives in typed data files (e.g., `src/data/pillars.ts`, `industries.ts`, `lifeSciences.ts`, `geography.ts`, `process.ts`, `clients.ts`). Rules:
- Each record carries a `source` field (`"P"` | `"E"` | `"derived"`); `"derived"` items (e.g., generic vertical mappings, category groupings) must be reviewed against §2/§5.
- No record may contain a metric, client name, or testimonial field. (Schema simply omits such fields.)
- Country lists match `content-inventory.md` §6 exactly (counts: East 10, West 16, Southern 14, North 5).

## 8. Review gate (must pass before implementation sign-off)
1. Cross-check `source-traceability.md`: every source fact placed; no Failure-A loss.
2. Scan all copy/data for §2 prohibited items and banned words → zero hits.
3. Verify Vision/Mission/Values retain all distinct claims.
4. Verify 4 original verticals' focus areas survived the merge with expanded list.
5. Verify country counts and names exactly match source.
6. Verify no fabricated people, partners, logos, or metrics anywhere (incl. Explorer output & meta/OG tags).
7. Verify deliverables phrased as offerings, not results.

## 9. If content is genuinely missing
For required-but-unavailable content (e.g., Privacy/Terms bodies), **mark as `TODO: required-future content — awaiting client input`** in the file and render a minimal honest placeholder or omit the route from nav until provided. Never fabricate legal text, policies, or facts to fill a gap.
