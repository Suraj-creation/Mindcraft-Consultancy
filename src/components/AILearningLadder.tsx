import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface CapabilityTier {
  id: string;
  step: string;
  name: string;
  audience: string;
  focus: string;
  format: string;
  commitment: string;
  competencies: string[];
  /* What a participant leaves with. Phrased as the shape of the deliverable,
     never as a result achieved — MindCraft was founded in 2026. */
  youLeaveWith: string;
}

const TIERS: CapabilityTier[] = [
  {
    id: 'executive',
    step: '01',
    name: 'Executive',
    audience: 'Board, C-suite and managing partners',
    focus: 'AI governance and capital allocation',
    format: 'Two-day retreat, or four boardroom sessions',
    commitment: '16 hours',
    competencies: [
      'Separating technical reality from generative AI hype',
      'Risk oversight under Kenya DPA, POPIA and comparable regimes',
      'Evaluating private infrastructure against hosted APIs',
      'Ethical oversight, bias mitigation and workforce transition policy',
    ],
    youLeaveWith: 'A drafted enterprise AI roadmap and a board-level governance charter.',
  },
  {
    id: 'operational',
    step: '02',
    name: 'Operational',
    audience: 'Department heads, product managers, functional leads',
    focus: 'Workflow redesign and applied productivity',
    format: 'Four-week cohort with a live transformation sprint',
    commitment: '6 hours a week',
    competencies: [
      'Decomposing institutional workflows into automatable steps',
      'Prompt architecture and structured output extraction',
      'Verification protocols that catch errors before they reach a client',
      'Designing human-in-the-loop checkpoints',
    ],
    youLeaveWith: 'Departmental pipelines built during the programme, running on your own workflows.',
  },
  {
    id: 'clinical',
    step: '03',
    name: 'Clinical',
    audience: 'Medical officers, clinicians, pharmacists, lab directors',
    focus: 'Clinical AI literacy and diagnostic workflow safety',
    format: 'Modular track, or a two-day on-site session',
    commitment: '12 hours',
    competencies: [
      'Reading clinical decision support probabilities and false-positive limits',
      'Ambient documentation tools and EMR transcription',
      'Patient privacy in electronic records and imaging',
      'Compliance with national medical practitioner guidelines',
    ],
    youLeaveWith: 'Working fluency with the tools entering clinical settings, and the limits of each.',
  },
  {
    id: 'engineering',
    step: '04',
    name: 'Engineering',
    audience: 'Software engineers, systems architects, data scientists',
    focus: 'Private model deployment and architecture',
    format: 'Six-week hands-on lab with a dedicated sandbox',
    commitment: '8 hours a week',
    competencies: [
      'Parameter-efficient fine-tuning on private domain datasets',
      'Vector indexing, hybrid search and retrieval optimisation',
      'Containerised deployment on local hardware or a private VPC',
      'Latency optimisation, batch inference and deterministic API testing',
    ],
    youLeaveWith: 'An internal retrieval engine built in the lab, with tests, that you own outright.',
  },
  {
    id: 'excellence',
    step: '05',
    name: 'Institutional',
    audience: 'Cross-functional enterprise taskforce',
    focus: 'Transfer of the capability itself',
    format: 'Three-month embedded mentorship',
    commitment: 'Quarterly cadence',
    competencies: [
      'Establishing peer-review and model audit committees',
      'Internal certification curricula for onboarding',
      'Procurement evaluation frameworks for third-party software',
      'Sustaining autonomy without permanent external reliance',
    ],
    youLeaveWith: 'An internal practice that runs without us. That is the point of the ladder.',
  },
];

/* Rung offsets for the wide layout: 01 starts lowest, 05 highest. Literal
   class names so Tailwind can see them. */
const RISE = ['xl:mt-12', 'xl:mt-9', 'xl:mt-6', 'xl:mt-3', 'xl:mt-0'];

export const AILearningLadder: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { navigate } = useNavigation();
  const [activeId, setActiveId] = useState('executive');
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = TIERS.findIndex((t) => t.id === activeId);
  const t = TIERS[activeIndex] ?? TIERS[0];

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    let next = -1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % TIERS.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + TIERS.length) % TIERS.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = TIERS.length - 1;
    if (next < 0) return;
    e.preventDefault();
    setActiveId(TIERS[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div className={className}>
      {/* The ladder climbs: on wide screens each rung starts a step higher
          than the one before, so 05 — the capability handed over — sits at
          the top. Rungs already climbed keep a strong rule. */}
      <ol
        role="tablist"
        aria-label="Capability tiers"
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 xl:items-start"
      >
        {TIERS.map((tier, i) => {
          const on = tier.id === activeId;
          const below = i < activeIndex;
          return (
            <li key={tier.id} role="presentation" className={`relative ${RISE[i]}`}>
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 transition-colors ${
                  on
                    ? 'h-[2px] bg-[var(--color-accent)]'
                    : below
                      ? 'h-[2px] bg-[var(--color-line-strong)]'
                      : 'h-px bg-[var(--color-line-2)]'
                }`}
              />
              <button
                ref={(el) => { refs.current[i] = el; }}
                id={`ladder-tab-${tier.id}`}
                role="tab"
                aria-selected={on}
                aria-controls="ladder-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActiveId(tier.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="group flex h-full min-h-[44px] w-full cursor-pointer flex-col gap-1.5 py-5 pr-5 text-left transition-colors"
              >
                <span className="font-mono text-eyebrow text-[var(--color-accent)]">{tier.step}</span>
                <span
                  className={`text-h5 transition-colors ${
                    on
                      ? 'text-[var(--color-ink-strong)]'
                      : 'text-[var(--color-ink-2)] group-hover:text-[var(--color-ink-strong)]'
                  }`}
                >
                  {tier.name}
                </span>
                <span className="text-caption text-[var(--color-ink-3)]">{tier.audience}</span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* The selected rung reads across: focus and terms, content, outcome. */}
      <div
        id="ladder-panel"
        role="tabpanel"
        aria-labelledby={`ladder-tab-${t.id}`}
        className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-[var(--color-accent-deep)] pt-8 md:grid-cols-2 2xl:grid-cols-12"
      >
        <div className="2xl:col-span-4">
          <h3 className="text-h4">{t.focus}</h3>
          <dl className="mt-6">
            {[
              ['Format', t.format],
              ['Commitment', t.commitment],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-[var(--color-line-2)] py-3">
                <dt className="font-display text-body-sm font-medium text-[var(--color-ink-3)]">{k}</dt>
                <dd className="mt-1 text-body text-[var(--color-ink)]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="2xl:col-span-5">
          <h4 className="font-display text-body-sm font-medium text-[var(--color-ink-3)]">What it covers</h4>
          <ul className="mt-4">
            {t.competencies.map((c) => (
              <li key={c} className="border-t border-[var(--color-line-2)] py-3 text-body text-[var(--color-ink)]">
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 2xl:col-span-3">
          <h4 className="font-display text-body font-medium text-[var(--color-accent)]">What you leave with</h4>
          <p className="measure mt-3 text-lead text-[var(--color-ink-strong)]">{t.youLeaveWith}</p>

          <button
            onClick={() => navigate('/contact?capability=AI%20Training')}
            className="group mt-5 inline-flex min-h-[44px] cursor-pointer items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)]"
          >
            Discuss a programme
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
