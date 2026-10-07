# MindCraft — Source Traceability

> Proves **source coverage** in the chain `SOURCE FACT → PAGE → SECTION → COMPONENT → INTERACTION`, and guards against the two opposite failures:
> - **Failure A — Loss:** a fact disappears because the site was simplified.
> - **Failure B — Dump:** a fact is thrown onto the page because no one designed a better representation.
> Pair with `content-inventory.md` (forward map) and `/specs/25` (integrity).

## How to use
Before implementation sign-off, every row must have a real component + interaction, and a Failure check of `OK`. During implementation, when a component is built, tick it. If a fact cannot be placed without dumping, redesign the representation — do not delete the fact and do not paste it as a paragraph.

Legend — Interaction: `static` (always visible) · `disclose` (accordion/panel/drawer) · `select` (map/filter/node) · `link` (navigation) · `form`.

---

## A. Identity & positioning
| Source fact | Page | Section | Component | Interaction | Failure check |
|---|---|---|---|---|---|
| Name / wordmark | Global | Header, Footer | `Wordmark` | static/link | OK |
| Four-pillar signature line | Home | Hero | `SignatureLine` | static | OK |
| Nairobi HQ | Home, Where We Work, Contact | Hero / Geo / Contact | `LocationTag`, `GeoModule` | static/select | OK |
| Africa/Europe/US, Africa-focus | Home, Where We Work | Geo band | `GeoModule` | select | OK |
| Founded 2026 + founding gap | About | Origin | `OriginNarrative` | static | OK (depth in About, not dumped on Home) |
| "At a glance" real facts | Home, About | Fact strip | `GlanceStrip` | static | OK (replaces fake metrics) |

## B. Vision / Mission / Values
| Fact | Page | Section | Component | Interaction | Failure check |
|---|---|---|---|---|---|
| Vision | About | Vision & Mission | `EditorialBlock` | static | OK |
| Mission | About | Vision & Mission | `EditorialBlock` | static | OK |
| 5 Core Values | About | Values | `ValueList` | static (1-liners) | OK (condensed, not dumped) |

## C. Life Sciences (DEEP)
| Fact | Page | Section | Component | Interaction | Failure check |
|---|---|---|---|---|---|
| LS = founding heritage / core | Home, Industries, Life Sciences | LS band / hero | `LifeSciencesFeature` | static | OK (visibly deeper status) |
| 6 sub-sectors | Life Sciences | Ecosystem | `EcosystemMap` | select | OK |
| Each sub-sector's focus areas | Life Sciences | Ecosystem detail | `SubSectorPanel` | select→disclose | OK (on-demand, not a wall) |
| LS-specific AI solutions | Life Sciences, AI Enterprise | LS AI | `CrossLinkPanel` | disclose/link | OK |

## D. Industries (BREADTH)
| Fact | Page | Section | Component | Interaction | Failure check |
|---|---|---|---|---|---|
| 4 original verticals + focus areas (Chemicals, Agrochemicals, Automotive, Banking&Finance) | Industries | Explorer grid | `IndustryCard`→`IndustryPanel` | select→disclose | OK (source detail retained) |
| 15 expanded verticals | Industries | Explorer grid | `IndustryCard` | select | OK (breadth, capability mapping, no fake depth) |
| Financial Services ⊃ Banking & Finance | Industries | FS card | `IndustryPanel` | disclose | OK (original not dropped) |
| Depth vs breadth asymmetry | Industries | Layout/hierarchy | page structure | static | OK (LS separated & elevated) |

## E. Geography
| Fact | Page | Section | Component | Interaction | Failure check |
|---|---|---|---|---|---|
| 3 geographies + Africa primary | Where We Work | Hero/Geo | `GeoModule` | static | OK |
| All African countries capability | Where We Work | Africa | `AfricaStatement` | static | OK |
| 4 regions + full country lists (10/16/14/5) | Where We Work | Regional model | `RegionSelector`→`CountryList` | select | OK (never a giant block) |
| Depth markets (12) | Where We Work | Focus markets | `FocusMarkers` | static/select | OK (honestly labeled) |
| Europe framing | Where We Work | Europe | `RegionPanel` | select/disclose | OK |
| US framing | Where We Work | United States | `RegionPanel` | select/disclose | OK |

## F. Capabilities (the engine)
| Fact | Page | Section | Component | Interaction | Failure check |
|---|---|---|---|---|---|
| 4 integrated pillars + interconnection | Home, What We Do | Spine | `ValueChainSpine` | select | OK (engine, not cards) |
| Business Consulting: 5 groups + deliverables | Business Consulting | Capability groups | `CapabilityAccordion`, `DeliverablesPanel` | disclose | OK |
| Market Research: 4 groups + deliverables | Market Research | " | " | disclose | OK |
| AI Training: 4 groups + formats + deliverables | AI Training | " | `CapabilityAccordion`, `FormatsList`, `DeliverablesPanel` | disclose | OK |
| AI Enterprise: 5 groups + deliverables | AI Enterprise | " | " | disclose | OK |
| Cross-pillar example arc | Home, What We Do | Spine narrative | `ValueChainSpine` | select | OK |

## G. Clients / delivery / differentiators / process / team
| Fact | Page | Section | Component | Interaction | Failure check |
|---|---|---|---|---|---|
| 8 target-client groups | How We Work, Home | Who We Serve | `AudienceSelector`/`ClientChips` | select/static | OK |
| 7 delivery modalities | How We Work | Delivery | `DeliveryList` | static | OK (compact) |
| 5 differentiators | Home, How We Work | Why MindCraft | `DifferentiatorList` | static | OK |
| 6-stage engagement process | How We Work | Process | `ProcessDiagram`→node detail | select/disclose | OK |
| Team + growing network | About | Team | `TeamNarrative`, `NetworkMotif` | static | OK (honest, no fake bios) |
| Building partnerships (2026) | About | Partnerships | `PartnershipNote` | static | OK (no fabricated logos) |

## H. Contact
| Fact | Page | Section | Component | Interaction | Failure check |
|---|---|---|---|---|---|
| Nairobi / email / web / regions | Contact, Footer | Contact block | `ContactDetails`, `ContactForm` | static/form | OK |
| Brand closing line | Home outro, About, Footer | Signature | `BrandLine` | static | OK |

---

## Failure-A watchlist (facts most at risk of being lost — must verify present at build)
- Full African country lists (45 countries across 4 regions) — must be reachable via `RegionSelector`, not summarized away.
- All four **original** verticals' focus areas — must survive the merge with the expanded list.
- Per-pillar **deliverables** — easy to drop; each pillar page must include its "What you receive" panel.
- AI Training **delivery formats** and **responsible AI** group — must not be collapsed into a single line.
- Life Sciences–specific AI solutions — must appear (and cross-link) in both AI Enterprise and Life Sciences.

## Failure-B watchlist (facts most at risk of being dumped — must verify disclosed, not pasted)
- Sub-sector focus areas (6 × ~5 items) — behind selection, never a 30-bullet wall.
- Pillar sub-capabilities (18 groups total) — accordions, not open lists.
- Country lists — region-gated, never all 45 at once.
- Target clients (8) — grouped/selectable, not a paragraph.

## Unsupported-claim watchlist (must NOT appear anywhere — see `/specs/25`)
No client names/logos, testimonials, case studies, metrics/percentages, revenue, headcount, awards, certifications, named partners, offices beyond Nairobi, or "deployed"/"proven" outcome claims. The word "proven," specific counts of projects/clients/years, and any numeric result are prohibited unless added to the sources later.
