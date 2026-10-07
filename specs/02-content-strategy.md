# 02 — Content Strategy

> Parent: `requirements.md` §11–12. Governs voice, length, disclosure, and copy rules for the whole site. Page specs (`/specs/03–16`) inherit these limits; where they quote actual copy, that copy must obey this file.

## 1. Strategic premise
*The problem was never missing information — it was too much shown at once.* Strategy: **Show the essential. Let the visitor choose the depth.** Preserve every source fact (`content-inventory.md`) but reveal it through the disclosure ladder.

## 2. Voice & tone
- **Voice:** an intelligent, senior consultant — precise, confident, plain-spoken. African-rooted, globally fluent.
- **Tone:** editorial and declarative. Short sentences. Active voice. Specific nouns over adjectives.
- **Avoid:** hype ("revolutionary," "cutting-edge," "unlock the power of," "next-generation"), filler ("in today's fast-paced world"), and generic AI copy. No exclamation marks. No emoji.
- **Numbers:** use only real, source-supported structural facts (4 pillars, 6 sub-sectors, 45 countries / 4 regions, 6 stages, 5 differentiators). Never invent metrics.

## 3. Content-length system (hard limits)
| Layer | Limit | Notes |
|---|---|---|
| Hero headline | ≤ 9 words | one idea; no subclauses |
| Hero supporting line | ≤ 24 words | the positioning sentence |
| Signature/pillar line | ≤ 12 words | "Business Consulting · Market Research · AI Training · AI Enterprise Solutions" counts as one |
| Section heading | ≤ 8 words | phrase or short sentence |
| Section supporting text | 1–3 sentences | never a paragraph block |
| Card title | ≤ 5 words | — |
| Card one-liner | ≤ 16 words | — |
| Accordion/panel body | scannable | short paras + bullets; a bullet ≤ 20 words |
| Deep-page body block | ≤ ~90 words per block | broken by rules/whitespace; still disclosure-governed |
| CTA label | ≤ 4 words | verb-led |

If copy exceeds a limit, cut or push deeper into disclosure — do not shrink type to fit.

## 4. Disclosure ladder (canonical)
```
SCAN       one line / one number / one visual        always visible
UNDERSTAND short editorial statement (1–3 sentences) always visible
EXPLORE    user selects (card / node / region / filter)
DETAIL     panel / drawer / accordion / deep page
ENGAGE     contextual CTA about that item
```
Rule: **no two adjacent layers may carry the same weight of copy.** Each step down adds detail; each step up removes it.

## 5. Content governance rule (apply to every sentence)
A sentence stays only if it does ≥1 of:
1. explains MindCraft · 2. establishes credibility · 3. clarifies a capability · 4. clarifies an industry · 5. clarifies geographic relevance · 6. clarifies the engagement model · 7. moves toward a relevant action.
Else: delete.

## 6. Editorial treatment of source material (convert, don't copy)
| Source form | Website form |
|---|---|
| Long paragraphs (Profile §1, §3) | 1–2 sharp positioning sentences + disclosure |
| Bulleted sub-capabilities (Pillars) | accordion groups; each group = short intro + tight bullets |
| Tables (LS sub-sectors, verticals, process) | interactive components (ecosystem, explorer, process diagram) |
| Deliverables lists | contextual "What you receive" panels per pillar |
| Country lists | region-gated selectors |
| Repetition across pages | one canonical home + teasers (`/specs/01` §7) |

## 7. Headline & microcopy patterns (reusable)
- **Positioning headline (Home):** a single declarative claim of identity. (Copy authored in `/specs/03`.)
- **Section intros:** "[What this is] — [why it matters], in one line."
- **Pillar heroes:** the source positioning line, condensed to ≤24 words.
- **Empty/degraded states (Explorer):** honest fallback copy — "We serve [industry] across [region]; here's how our [capability] applies," never a fabricated case.
- **CTA patterns:** primary "Start a Conversation"; contextual "Talk to us about [X]," "Explore [capability/market]," "See how we work."

## 8. SEO copy hooks (detail in `/specs/24`)
Each page has: one `<h1>` matching its primary question; a 150–160 char meta description built from source facts; natural inclusion of "Nairobi," "Africa," "Life Sciences," and the relevant capability/industry. No keyword stuffing.

## 9. Accessibility of content (detail in `/specs/22`)
- One `<h1>` per page; logical heading order; no skipped levels.
- Link text is meaningful ("Explore Life Sciences," not "click here").
- Alt text describes meaning, not decoration; decorative motifs are `aria-hidden`.
- Reading level: clear professional prose; expand acronyms on first use where non-obvious (KOL, MEL, RPA, SOP, PV).

## 10. Content integrity (see `/specs/25`)
All copy is bounded by the anti-fabrication rules. When tempted to add proof, use structure (the engine, the ecosystem, the map, the process) instead of invented social proof.

## 11. Copy QA checklist (per page)
- [ ] Every sentence passes the governance rule (§5).
- [ ] All length limits respected (§3).
- [ ] No hype/filler/AI-cliché vocabulary (§2).
- [ ] No fabricated facts (`/specs/25`).
- [ ] Disclosure ladder respected; nothing dumped (§4).
- [ ] Acronyms expanded on first use.
- [ ] Every CTA leads somewhere real.
