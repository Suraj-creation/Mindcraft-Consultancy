import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export interface SectorDetail {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  image: string;
  imageAlt: string;
  regulatoryBodies: string[];
  context: string[];
  howWeHelp: string[];
  focusAreas: string[];
  capabilities: { name: string; url: string }[];
}

/* Sub-sector names follow the Corporate Profile exactly. Market conditions are
   stated qualitatively: MindCraft was founded in 2026 and publishes no figures,
   so any percentage or duration here would be invented. Everything under
   howWeHelp is phrased as an offering, never as a result already achieved. */
export const LIFE_SCIENCES_SECTORS: SectorDetail[] = [
  {
    id: 'pharma',
    name: 'Pharmaceuticals',
    shortName: 'Pharmaceuticals',
    tagline: 'Market access, formulary inclusion and regional regulatory harmonisation.',
    image: '/assets/images/lifesciences_research_1788984006985.jpg',
    imageAlt:
      'Pharmaceutical researcher evaluating formulation stability assays in a controlled research environment',
    regulatoryBodies: ['PPB (Kenya)', 'NAFDAC (Nigeria)', 'SAHPRA (South Africa)', 'African Medicines Agency'],
    context: [
      'Long approval cycles across fragmented national authorities',
      'Substantial import dependency for essential formulation volume',
      'Wholesaler margin stacking and exposure to counterfeit product',
    ],
    howWeHelp: [
      'Regulatory dossier strategy for joint EAC-MRH submission pathways',
      'Feasibility modelling for localised secondary packaging of active ingredients',
      'Serialised track-and-trace architecture for distributor compliance',
    ],
    focusAreas: [
      'Prescription generics and specialty biologics',
      'Essential medicines formulary strategy',
      'KOL mapping and competitive intelligence',
      'Cold-chain insulin and vaccine integrity',
    ],
    capabilities: [
      { name: 'Market research and KOL studies', url: '/what-we-do/market-research' },
      { name: 'Regulatory dossier strategy', url: '/what-we-do/business-consulting' },
      { name: 'Pharmacovigilance automation', url: '/what-we-do/ai-enterprise-solutions' },
    ],
  },
  {
    id: 'devices',
    name: 'Medical Devices',
    shortName: 'Medical Devices',
    tagline: 'Launch strategy, reimbursement landscape and distributor networks.',
    image: '/assets/images/african_medical_diagnostics_1788986720251.jpg',
    imageAlt:
      'Clinical director validating automated instrumentation inside an accredited diagnostic laboratory in Nairobi',
    regulatoryBodies: ['PPB Medical Device Directorate', 'SAHPRA Class A–D', 'WHO Prequalification'],
    context: [
      'Equipment imported without local engineer maintenance capability',
      'Unstable municipal power compromising sensitive instrumentation',
      'Capital budget prioritisation spread across uncoordinated committees',
    ],
    howWeHelp: [
      'Total cost of ownership models that include regional spares logistics',
      'Biomedical engineer apprenticeship and certification curriculum design',
      'Commercial structuring for subscription-based fleet placement',
    ],
    focusAreas: [
      'Product launch strategy',
      'Health economics and reimbursement landscape',
      'Distributor mapping',
      'Post-market surveillance support',
    ],
    capabilities: [
      { name: 'Hospital procurement analysis', url: '/what-we-do/business-consulting' },
      { name: 'Field engineer support tools', url: '/what-we-do/ai-enterprise-solutions' },
      { name: 'Clinician device training', url: '/what-we-do/ai-training' },
    ],
  },
  {
    id: 'diagnostics',
    name: 'Medical Diagnostics',
    shortName: 'Diagnostics',
    tagline: 'Decentralised screening, laboratory networks and regulatory pathways.',
    image: '/assets/images/african_clinical_lab_1788985514560.jpg',
    imageAlt: 'Laboratory technologist analysing clinical specimens using a digital pathology microscope',
    regulatoryBodies: ['KMLTTB (Kenya)', 'African Society for Laboratory Medicine', 'Africa CDC'],
    context: [
      'Sample logistics delays between rural clinics and central referral labs',
      'Reagent stock-outs driven by forex allocation and customs dwell time',
      'Paper-based result dissemination delaying clinical intervention',
    ],
    howWeHelp: [
      'Hub-and-spoke courier design using existing local transit networks',
      'Reagent inventory forecasting calibrated to disease seasonality',
      'Secure automated dispatch of results to the treating clinician',
    ],
    focusAreas: [
      'Market sizing and testing-adoption studies',
      'Laboratory network mapping',
      'Regulatory pathway advisory',
      'Surveillance sequencing networks',
    ],
    capabilities: [
      { name: 'Diagnostic network design', url: '/what-we-do/business-consulting' },
      { name: 'Epidemiological demand forecasting', url: '/what-we-do/market-research' },
      { name: 'Pathology analysis tooling', url: '/what-we-do/ai-enterprise-solutions' },
    ],
  },
  {
    id: 'equipment',
    name: 'Medical Equipment',
    shortName: 'Equipment',
    tagline: 'Capital equipment studies, tender intelligence and facility readiness.',
    image: '/assets/images/african_enterprise_architecture_1788986704563.jpg',
    imageAlt: 'Healthcare infrastructure architects reviewing mechanical and clinical electrical schematics',
    regulatoryBodies: ['Ministry of Health infrastructure departments', 'Regional fire and radiation boards'],
    context: [
      'Medical gas supply fragility in rural districts',
      'Architectural incompatibility between imported equipment and existing layouts',
      'Fragmented sub-contractors creating accountability gaps at commissioning',
    ],
    howWeHelp: [
      'Commercial structuring for on-site oxygen generation plants',
      'Architectural and biomedical co-engineering specifications',
      'Unified vendor commissioning oversight against defined milestones',
    ],
    focusAreas: [
      'Capital equipment market studies',
      'Tender and procurement intelligence',
      'Hospital purchasing-committee mapping',
      'Theatre and ICU turnkey specification',
    ],
    capabilities: [
      { name: 'Infrastructure capital sizing', url: '/what-we-do/business-consulting' },
      { name: 'Facility commissioning', url: '/how-we-work' },
      { name: 'Predictive maintenance systems', url: '/what-we-do/ai-enterprise-solutions' },
    ],
  },
  {
    id: 'consumables',
    name: 'Surgical Consumables',
    shortName: 'Consumables',
    tagline: 'Distribution channels, formulary tracking and competitive benchmarking.',
    image: '/assets/images/african_field_research_1788986691596.jpg',
    imageAlt: 'Supply chain researchers auditing clinical consumables stock at a regional warehouse',
    regulatoryBodies: ['National bureaux of standards (KEBS, SON)', 'ISO 13485'],
    context: [
      'Price sensitivity with exposure to sub-standard grey-market imports',
      'Volatile shipping rates producing periodic surgical stock-outs',
      'Under-developed local sterilisation infrastructure',
    ],
    howWeHelp: [
      'Business case modelling for domestic manufacturing under AfCFTA',
      'Collective procurement structures for private hospital networks',
      'Quality audit protocols for incoming batches',
    ],
    focusAreas: [
      'Distribution channel studies',
      'Hospital formulary tracking',
      'Competitive benchmarking',
      'AfCFTA rules of origin',
    ],
    capabilities: [
      { name: 'Manufacturing feasibility', url: '/what-we-do/business-consulting' },
      { name: 'Distributor and channel mapping', url: '/what-we-do/market-research' },
      { name: 'Supply chain optimisation', url: '/what-we-do/ai-enterprise-solutions' },
    ],
  },
  {
    id: 'hospitals',
    name: 'Hospitals & Healthcare Providers',
    shortName: 'Hospitals',
    tagline: 'Operational strategy, digital transformation and workforce capacity.',
    image: '/assets/images/african_executive_training_1788986677111.jpg',
    imageAlt:
      'Healthcare board members reviewing clinical efficiency indicators and a digital transformation roadmap',
    regulatoryBodies: ['KMPDC (Kenya)', 'HPCSA (South Africa)', 'National health insurance authorities'],
    context: [
      'Moving from paper records to electronic systems without losing staff',
      'Delayed insurance reimbursement straining operational cash flow',
      'Clinical talent retention and continuing education gaps',
    ],
    howWeHelp: [
      'Electronic record architecture with clinical adoption change management',
      'Claims pre-submission validation built into the billing workflow',
      'Leadership development for nurse managers and department chairs',
    ],
    focusAreas: [
      'Operational strategy',
      'Digital transformation',
      'Patient experience research',
      'Workforce capacity building',
    ],
    capabilities: [
      { name: 'Operating model transformation', url: '/what-we-do/business-consulting' },
      { name: 'Claims verification systems', url: '/what-we-do/ai-enterprise-solutions' },
      { name: 'Physician and executive upskilling', url: '/what-we-do/ai-training' },
    ],
  },
];

export const LifeSciencesEcosystemDiagram: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { navigate, queryParams } = useNavigation();
  const requested = LIFE_SCIENCES_SECTORS.some((s) => s.id === queryParams.sector)
    ? queryParams.sector
    : undefined;
  const [activeId, setActiveId] = useState<string>(requested ?? 'pharma');
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const rootRef = useRef<HTMLDivElement>(null);

  // Deep link from the site menu (?sector=<id>): open that sub-sector and
  // bring the ecosystem into view.
  useEffect(() => {
    if (!requested) return;
    setActiveId(requested);
    const t = window.setTimeout(() => {
      rootRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
    return () => window.clearTimeout(t);
  }, [requested]);

  const activeIndex = LIFE_SCIENCES_SECTORS.findIndex((s) => s.id === activeId);
  const s = LIFE_SCIENCES_SECTORS[activeIndex] ?? LIFE_SCIENCES_SECTORS[0];

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (i + delta + LIFE_SCIENCES_SECTORS.length) % LIFE_SCIENCES_SECTORS.length;
    setActiveId(LIFE_SCIENCES_SECTORS[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div ref={rootRef} className={className}>
      {/* Six sub-sectors as one segmented rail — the ecosystem is a whole,
          so its parts share an edge rather than floating as separate pills. */}
      <div
        className="grid grid-cols-2 border-l border-t border-[var(--color-line)] sm:grid-cols-3 lg:grid-cols-6"
        role="tablist"
        aria-label="Life Sciences sub-sectors"
      >
        {LIFE_SCIENCES_SECTORS.map((sec, i) => {
          const on = sec.id === activeId;
          return (
            <button
              key={sec.id}
              ref={(el) => { refs.current[i] = el; }}
              role="tab"
              aria-selected={on}
              tabIndex={on ? 0 : -1}
              onClick={() => setActiveId(sec.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`relative min-h-[56px] cursor-pointer border-b border-r border-[var(--color-line)] px-5 py-4 text-left text-body-sm transition-colors ${
                on
                  ? 'bg-[var(--color-accent)] text-[var(--color-ground-deep)] font-medium'
                  : 'text-[var(--color-ink-2)] hover:bg-[var(--color-surface)] hover:text-[var(--color-ink-strong)]'
              }`}
            >
              {sec.shortName}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-12">
        <figure className="xl:col-span-3">
          <img
            key={s.image}
            src={s.image}
            alt={s.imageAlt}
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </figure>

        <div className="xl:col-span-3">
          <h3 className="text-h4">{s.name}</h3>
          <p className="mt-3 text-body text-[var(--color-ink-2)]">{s.tagline}</p>

          <p className="mt-8 font-display text-body-sm font-medium text-[var(--color-ink-3)]">Regulatory context</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {s.regulatoryBodies.map((r) => (
              <li
                key={r}
                className="rounded-edge border border-[var(--color-line-2)] px-2.5 py-1 text-caption text-[var(--color-green)]"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>

        <section className="xl:col-span-3">
          <h4 className="font-display text-body-sm font-medium text-[var(--color-ink-3)]">Focus areas</h4>
          <ul className="mt-4">
            {s.focusAreas.map((f) => (
              <li key={f} className="border-t border-[var(--color-line)] py-3 text-body text-[var(--color-ink)]">
                {f}
              </li>
            ))}
          </ul>
        </section>

        <section className="xl:col-span-3">
          <h4 className="font-display text-body-sm font-medium text-[var(--color-ink-3)]">Market conditions</h4>
          <ul className="mt-4">
            {s.context.map((c) => (
              <li key={c} className="border-t border-[var(--color-line)] py-3 text-body-sm text-[var(--color-ink-2)]">
                {c}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-[var(--color-accent-deep)] pt-8 xl:grid-cols-12">
        <h4 className="font-display text-body font-medium text-[var(--color-accent)] xl:col-span-3">How we help</h4>
        <div className="xl:col-span-9">
          <ul className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-3">
            {s.howWeHelp.map((h) => (
              <li key={h} className="text-body text-[var(--color-ink)]">
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {s.capabilities.map((c) => (
              <button
                key={c.name}
                onClick={() => navigate(c.url)}
                className="group inline-flex cursor-pointer items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)]"
              >
                {c.name}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
