import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Container } from '../components/layout/Section';
import { fadeUp, staggerChildren, viewportOnce } from '../lib/motion';

const INDUSTRIES = [
  'Pharmaceuticals',
  'Medical Devices',
  'Medical Diagnostics',
  'Hospitals & Healthcare Providers',
  'Chemicals & Agrochemicals',
  'Automotive',
  'Banking & Financial Services',
  'Public Sector & Development',
];

const GEOGRAPHIES = [
  'Kenya & East Africa',
  'Nigeria & West Africa',
  'South Africa & Southern Africa',
  'Egypt & North Africa',
  'Pan-African, multi-country',
  'Europe & Africa corridor',
  'United States & Africa corridor',
];

const CAPABILITIES = [
  'Market Research',
  'Business Consulting',
  'AI Enterprise Solutions',
  'AI Training',
  'All four, integrated',
];

/* Output is composed only from pillar scope and geography facts. Where a
   combination has no source-specific detail it degrades to a general capability
   statement. It never asserts a case study, a metric, a named client, a
   delivery timeline or a team located anywhere but Nairobi. */
function compose(industry: string, geography: string, capability: string) {
  const lifeSciences = /Pharmaceutic|Device|Diagnostic|Hospital/.test(industry);
  const ai = capability.includes('AI') || capability.includes('integrated');

  const scope: Record<string, string> = {
    'Market Research':
      'Primary and secondary research designed to turn market complexity into decision-ready intelligence.',
    'Business Consulting':
      'Strategic and management advisory covering operating model, growth and execution.',
    'AI Enterprise Solutions':
      'Design, build and integration of AI systems that operationalise insight into everyday workflows.',
    'AI Training':
      'Hands-on capability building that leaves internal practitioners rather than awareness alone.',
    'All four, integrated':
      'One engagement across research, strategy, enterprise AI and training, rather than four vendors.',
  };

  const deliverables = lifeSciences
    ? [
        'Regulatory pathway mapping against the relevant national authorities',
        'Market access, pricing and KOL landscape analysis',
        'Distribution and route-to-market structure for the territory',
      ]
    : [
        'Stakeholder mapping and regulatory landscape for the territory',
        'Operating model and commercial distribution assessment',
        'An executive brief structured for a board decision',
      ];

  if (ai && lifeSciences) {
    deliverables.push('Governance and data-protection review for regulated deployment');
  } else if (ai) {
    deliverables.push('Solution architecture and workforce capability plan');
  }

  return {
    headline: `${capability} for ${industry.toLowerCase()} in ${geography}.`,
    scope: scope[capability] ?? scope['All four, integrated'],
    deliverables,
    lifeSciences,
  };
}

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';

export const Explore: React.FC = () => {
  const { queryParams, navigate } = useNavigation();

  const [industry, setIndustry] = useState(queryParams.industry || INDUSTRIES[0]);
  const [geography, setGeography] = useState(queryParams.geography || GEOGRAPHIES[0]);
  const [capability, setCapability] = useState(queryParams.capability || CAPABILITIES[0]);

  useEffect(() => {
    if (queryParams.industry) setIndustry(queryParams.industry);
    if (queryParams.geography) setGeography(queryParams.geography);
    if (queryParams.capability) setCapability(queryParams.capability);
  }, [queryParams]);

  const result = compose(industry, geography, capability);

  const openContact = () => {
    const params = new URLSearchParams({ industry, geography, capability });
    navigate(`/contact?${params.toString()}`);
  };

  const fields = [
    { label: 'Industry', value: industry, set: setIndustry, opts: INDUSTRIES },
    { label: 'Geography', value: geography, set: setGeography, opts: GEOGRAPHIES },
    { label: 'Capability', value: capability, set: setCapability, opts: CAPABILITIES },
  ];

  return (
    <div>
      {/* ── Hero: claim left, the honest framing right ─────────────────── */}
      <section className="pb-10 pt-[var(--band-tight)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-12 lg:items-end">
            <h1 className="rise text-h1 lg:col-span-7">Compose your situation.</h1>
            <p
              className="rise measure text-lead text-[var(--color-ink-2)] lg:col-span-5"
              style={{ animationDelay: '80ms' }}
            >
              Three choices, and what MindCraft would bring to that combination. Nothing here is a
              case study — it is the scope of the work, stated plainly.
            </p>
          </div>
        </Container>
      </section>

      {/* ── The composer: three selectors read across one hairline rail,
          the composed brief sits directly beneath in a deep panel. ────── */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-ground-2)] pb-[var(--band)] pt-[var(--band-tight)]">
        <Container width="wide">
          <p className="font-mono text-eyebrow text-[var(--color-ink-3)]">
            Industry <span className="text-[var(--color-accent)]">×</span> Geography{' '}
            <span className="text-[var(--color-accent)]">×</span> Capability{' '}
            <span className="text-[var(--color-accent)]">→</span> Result
          </p>

          <motion.div
            className="mt-5 grid grid-cols-1 gap-px border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerChildren(0.08)}
          >
            {fields.map((f) => (
              <motion.div key={f.label} variants={fadeUp} className="bg-[var(--color-raised)] px-6 pb-5 pt-5">
                <label
                  htmlFor={`explore-${f.label}`}
                  className="block font-display text-body-sm font-medium text-[var(--color-ink-3)]"
                >
                  {f.label}
                </label>
                <div className="relative mt-1">
                  <select
                    id={`explore-${f.label}`}
                    value={f.value}
                    onChange={(e) => f.set(e.target.value)}
                    className="min-h-[44px] w-full cursor-pointer appearance-none border-0 border-b border-[var(--color-line-2)] bg-transparent pb-3 pr-9 pt-2 text-h5 text-[var(--color-ink-strong)] transition-colors hover:border-[var(--color-accent)] focus:border-[var(--color-accent)] focus:outline-none"
                  >
                    {f.opts.map((o) => (
                      <option key={o} value={o} className="bg-[var(--color-surface)] text-body">
                        {o}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-accent)]"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Recomputes live — no submit button, per the disclosure model. */}
          <div
            aria-live="polite"
            className="mt-6 border border-[var(--color-line)] border-t-[var(--color-accent-deep)] bg-[var(--color-ground-deep)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <motion.div
                className="p-6 sm:p-8 lg:col-span-5 lg:p-10"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
              >
                <h2 className="text-h3">{result.headline}</h2>
                <p className="measure mt-5 text-lead text-[var(--color-ink-2)]">{result.scope}</p>
                {result.lifeSciences && (
                  <p className="mt-6 flex items-center gap-3 text-body-sm text-[var(--color-grass)]">
                    <span aria-hidden="true" className="h-2 w-2 shrink-0 rotate-45 bg-[var(--color-green)]" />
                    This sits inside our core Life Sciences specialisation.
                  </p>
                )}
              </motion.div>

              <div className="border-t border-[var(--color-line)] p-6 sm:p-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:p-10">
                {/* Global heading colour is unlayered, so the gold goes on the span. */}
                <h3 className="text-body-sm">
                  <span className="font-medium text-[var(--color-accent)]">What an engagement would cover</span>
                </h3>
                <motion.ul
                  className="mt-4 grid grid-cols-1 gap-x-10 sm:grid-cols-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={staggerChildren(0.06)}
                >
                  {result.deliverables.map((d) => (
                    <motion.li
                      key={d}
                      variants={fadeUp}
                      className="border-t border-[var(--color-line)] py-4 text-body text-[var(--color-ink)]"
                    >
                      {d}
                    </motion.li>
                  ))}
                </motion.ul>
                <p className="mt-3 text-caption text-[var(--color-ink-3)]">
                  Scope is shaped in Discovery. We will tell you if a question is outside what we can
                  credibly answer.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-[var(--color-line)] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
              <p className="text-caption text-[var(--color-ink-3)]">
                Your three selections carry over to the form.
              </p>
              <button onClick={openContact} className={`${primaryBtn} self-start sm:self-auto`}>
                Start a conversation about this
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
