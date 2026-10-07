import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface MethodTrack {
  id: string;
  name: string;
  /* One line for the rail — who or what the track covers. */
  covers: string;
  focus: string;
  description: string;
  leadTime: string;
  scope: string;
  outputs: string[];
  /* How the evidence is gathered. Phrased as method, never as work already
     delivered — MindCraft was founded in 2026. */
  collection: string;
}

/* Four tracks. They are parallel methods, not a sequence, so they carry no
   numerals — the order here is not information. */
const TRACKS: MethodTrack[] = [
  {
    id: 'field',
    name: 'Primary in-country fieldwork',
    covers: 'Distribution channels, pharmacies, facilities',
    focus: 'Audits run in the market they describe.',
    description:
      'Direct observational audits of physical distribution channels, healthcare facilities, pharmacies and informal retail outlets, conducted in market by local associates.',
    leadTime: '3–6 weeks',
    scope: 'Multi-city on-ground audits across the 45 African markets',
    outputs: [
      'Shelf-level SKU availability, stock-out frequency and expiry audits',
      'Wholesale distributor mark-up and margin-stacking calculations',
      'Counterfeit and grey-market diversion risk scoring',
    ],
    collection:
      'Mystery shopping, pharmacy shelf sweeps, distributor warehouse inventory counts and cold-chain audit logs.',
  },
  {
    id: 'kol',
    name: 'KOL and specialist physician panels',
    covers: 'Clinicians, procurement chairs, regulatory heads',
    focus: 'The people who decide what gets prescribed.',
    description:
      'Structured, in-depth clinical interviews with chief medical officers, procurement chairs, regulatory heads and leading specialists.',
    leadTime: '2–4 weeks',
    scope: 'Clinical decision-makers, scoped per market',
    outputs: [
      'Prescribing preference criteria and therapeutic substitution triggers',
      'Hospital formulary tender decision matrices and evaluation weights',
      'Unmet clinical needs and localised patient disease burden',
    ],
    collection:
      'Structured clinical interviews, formulary committee Delphi panels and treatment algorithm mapping.',
  },
  {
    id: 'regulatory',
    name: 'Regulatory intelligence and policy tracking',
    covers: 'Statutory change across regional authorities',
    focus: 'Statutory change, tracked as it happens.',
    description:
      'Continuous monitoring of statutory amendments, pharmacovigilance directives, import quota shifts and regional harmonisation protocols.',
    leadTime: 'Ongoing, or a two-week sprint',
    scope: 'Regional authorities — PPB, NAFDAC, SAHPRA, EAC, AMA',
    outputs: [
      'National registration dossier gap analysis and checklist',
      'Tariff schedule changes under AfCFTA rules of origin',
      'Fast-track joint review pathway eligibility assessments',
    ],
    collection:
      'Direct liaison with regulatory secretariats, gazette statutory audits and public health policy review.',
  },
  {
    id: 'competitor',
    name: 'Competitor intelligence and route to market',
    covers: 'Positioning, supply chains, tender history',
    focus: 'How competitors actually reach the market.',
    description:
      'Reverse-engineering of competitive positioning, supply chains, exclusive distributor arrangements and tender history.',
    leadTime: '4–8 weeks',
    scope: 'Domestic incumbents, regional importers and global multinationals',
    outputs: [
      'Public procurement tender pricing benchmarks and award patterns',
      'Exclusive distribution agreements and commercial bottlenecks',
      'Sales force sizing and commercial coverage heatmaps',
    ],
    collection:
      'Tender award history analysis, former-distributor interviews and trade corridor customs manifest review.',
  },
];

export const ResearchMethodologyMap: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { navigate } = useNavigation();
  const [activeId, setActiveId] = useState('field');
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = TRACKS.findIndex((t) => t.id === activeId);
  const t = TRACKS[activeIndex] ?? TRACKS[0];

  // The rail reads across on desktop and down on mobile, so both axes walk it.
  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    let next: number | null = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % TRACKS.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + TRACKS.length) % TRACKS.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = TRACKS.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActiveId(TRACKS[next].id);
    refs.current[next]?.focus();
  };

  const label = 'font-display text-body-sm font-medium';

  return (
    <div className={className}>
      {/* A segmented rail of methods — four parallel tracks, read across.
          The selected segment carries the gold rule; nothing is boxed. */}
      <ul
        role="tablist"
        aria-label="Research tracks"
        className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {TRACKS.map((track, i) => {
          const on = track.id === activeId;
          return (
            <li key={track.id} role="presentation">
              <button
                ref={(el) => { refs.current[i] = el; }}
                id={`track-tab-${track.id}`}
                role="tab"
                aria-selected={on}
                aria-controls="track-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActiveId(track.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`group relative flex h-full w-full cursor-pointer flex-col justify-start border-t-2 pt-5 pb-5 pr-4 text-left transition-colors ${
                  on
                    ? 'border-[var(--color-accent)]'
                    : 'border-[var(--color-line-2)] hover:border-[var(--color-line-strong)]'
                }`}
              >
                <span
                  className={`block text-h5 transition-colors ${
                    on ? 'text-[var(--color-ink-strong)]' : 'text-[var(--color-ink-2)] group-hover:text-[var(--color-ink)]'
                  }`}
                >
                  {track.name}
                </span>
                <span className="mt-1.5 block text-body-sm text-[var(--color-ink-3)]">{track.covers}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* The selected track, read left to right: what it is, what it
          produces, how the evidence is gathered. The method column carries
          the gold wash. */}
      <div
        id="track-panel"
        role="tabpanel"
        aria-labelledby={`track-tab-${t.id}`}
        className="mt-6 grid grid-cols-1 border border-[var(--color-line)] bg-[var(--color-ground-deep)] lg:grid-cols-12"
      >
        <div className="border-b border-[var(--color-line)] p-6 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-8">
          <h3 className="text-h4">{t.focus}</h3>
          <p className="measure mt-4 text-body text-[var(--color-ink-2)]">{t.description}</p>

          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[var(--color-line)] pt-5 sm:grid-cols-[auto_1fr]">
            {[
              ['Lead time', t.leadTime],
              ['Coverage', t.scope],
            ].map(([k, v]) => (
              <div key={k} className="sm:contents">
                <dt className={`${label} text-[var(--color-ink-3)]`}>{k}</dt>
                <dd className="mt-1 text-body text-[var(--color-ink)] sm:mt-0">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="border-b border-[var(--color-line)] p-6 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-8">
          <h4 className={`${label} text-[var(--color-ink-3)]`}>What the track produces</h4>
          <ul className="mt-4">
            {t.outputs.map((o) => (
              <li key={o} className="border-t border-[var(--color-line)] py-3 text-body text-[var(--color-ink)]">
                {o}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col bg-[var(--color-accent-tint)]/40 p-6 lg:col-span-3 lg:p-8">
          <h4 className={`${label} text-[var(--color-accent)]`}>How the evidence is gathered</h4>
          <p className="mt-3 flex-1 text-body text-[var(--color-ink-strong)]">{t.collection}</p>

          <button
            onClick={() => navigate('/contact?topic=market-research')}
            className="group mt-8 inline-flex min-h-[44px] cursor-pointer items-center gap-2 self-start text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)]"
          >
            Commission market research
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
