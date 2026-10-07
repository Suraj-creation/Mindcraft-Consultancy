import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { ResearchMethodologyMap } from '../components/ResearchMethodologyMap';
import { Section, Container, SectionHead } from '../components/layout/Section';
import { fadeUp, staggerChildren, viewportOnce } from '../lib/motion';

/* Research is where the chain starts, so this page carries the full rail.
   The numerals are real sequence information — that is what keeps them in mono. */
const CHAIN = [
  { n: '01', name: 'Market Research', path: '/what-we-do/market-research' },
  { n: '02', name: 'Business Consulting', path: '/what-we-do/business-consulting' },
  { n: '03', name: 'AI Enterprise Solutions', path: '/what-we-do/ai-enterprise-solutions' },
  { n: '04', name: 'AI Training', path: '/what-we-do/ai-training' },
];

const METHOD: [string, string][] = [
  [
    'In-country fieldwork',
    'Interviews run in the market being assessed, with the location recorded against each one.',
  ],
  [
    'Vernacular instruments',
    'Questionnaires and interviews in Swahili, Hausa, Yoruba, Amharic and other working languages.',
  ],
  [
    'Independent verification',
    'Double-entry capture and separate cleaning, so a finding is checked before it is reported.',
  ],
];

const OUTPUTS: [string, string][] = [
  [
    'Opinion-leader maps',
    'Sociometric mapping of senior clinicians, specialty society chairs and hospital formulary committee members.',
  ],
  [
    'Pricing and margin scans',
    'Landed wholesale cost, retail markup and patient out-of-pocket exposure across commercial and public channels.',
  ],
  [
    'Prevalence and treatment models',
    'Disease incidence, diagnosed-to-treated ratios and therapy-switching dynamics by facility tier.',
  ],
  [
    'Channel and distributor audits',
    'Warehouse condition, distribution-practice compliance, cold-chain capability and credit-term sustainability.',
  ],
];

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';
const ghostBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-line-strong)] px-7 py-4 text-body-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink-strong)]';
const linkCls =
  'group inline-flex min-h-[44px] items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer';

export const MarketResearch: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ── Hero: thesis on the left, the field bleeding off the right edge ── */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[42%]">
          <figure className="rise relative h-[42vh] min-h-[280px] lg:h-full" style={{ animationDelay: '200ms' }}>
            <img
              src="/assets/images/african_field_research_1788986691596.jpg"
              alt="A researcher gathering primary demographic and supply data in a community field setting"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            {/* Only a foot shadow, so the caption reads — the photo stays lit. */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-ground-deep)]/85 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 px-6 pb-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 lg:px-8">
              <span className="text-caption text-[var(--color-ink)]">
                Primary fieldwork, Kenya. Research is verified in the market it describes.
              </span>
              {/* Mono is legitimate here: counts, not a label. */}
              <span className="shrink-0 font-mono text-eyebrow tracking-[0.06em] text-[var(--color-accent)]">
                Africa · 45 markets · 4 regions
              </span>
            </figcaption>
          </figure>
        </div>

        <Container width="wide" className="relative">
          <div className="flex flex-col justify-between lg:min-h-[640px] lg:w-[54%]">
            <div className="pt-12 lg:pt-[clamp(40px,6vh,80px)]">
              <h1 className="rise text-h1" style={{ animationDelay: '0ms' }}>
                Ground truth, not desk assumptions.
              </h1>
              <p className="rise measure mt-7 text-lead text-[var(--color-ink-2)]" style={{ animationDelay: '100ms' }}>
                Primary and secondary research that turns market complexity into decision-ready
                intelligence — fieldwork, clinician panels, trade-channel audits and competitor
                pricing across African and international markets.
              </p>

              <div className="rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '160ms' }}>
                <button onClick={() => navigate('/contact?topic=market-research')} className={primaryBtn}>
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
                <button onClick={() => navigate('/explore?capability=Market%20Research')} className={ghostBtn}>
                  Compose a research brief
                  <ArrowRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* How the work is run — three commitments, hairlines, no boxes. */}
            <dl
              className="rise mt-12 grid grid-cols-1 border-t border-[var(--color-line-2)] sm:grid-cols-3"
              style={{ animationDelay: '240ms' }}
            >
              {METHOD.map(([term, def], i) => (
                <div
                  key={term}
                  className={`border-b border-[var(--color-line)] py-6 sm:border-b-0 sm:pr-6 ${
                    i > 0 ? 'sm:border-l sm:pl-6' : ''
                  }`}
                >
                  <dt className="text-h5 text-[var(--color-ink-strong)]">{term}</dt>
                  <dd className="mt-2 text-body-sm text-[var(--color-ink-2)]">{def}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* ── Method — the one emerald band: the four tracks are the practice. ── */}
      <Section tone="emerald" band="normal" width="wide">
        <SectionHead
          title="Four tracks, run together."
          lead="In-country fieldwork, specialist panels, regulatory tracking and competitor intelligence. They run in parallel and cross-check each other — a finding that only one track supports is a finding we flag rather than report."
          className="mb-0 border-b-0"
        />
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <ResearchMethodologyMap />
        </motion.div>
      </Section>

      {/* ── What a mandate produces: statement left, a hairline grid right ── */}
      <Section band="normal" width="wide">
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2 className="text-h3">
              <span className="mb-5 block h-[2px] w-10 bg-[var(--color-accent)]" aria-hidden="true" />
              What a mandate produces.
            </h2>
            <p className="measure-sm mt-5 text-body text-[var(--color-ink-2)]">
              Deliverables are scoped to the decision in front of you. Each is built to be read by a
              commercial team and acted on, not filed.
            </p>
          </motion.div>

          <motion.dl
            className="grid grid-cols-1 gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerChildren(0.07)}
          >
            {OUTPUTS.map(([term, def]) => (
              <motion.div key={term} variants={fadeUp} className="bg-[var(--color-ground)] p-6 lg:p-7">
                <dt className="text-h5 text-[var(--color-ink-strong)]">{term}</dt>
                <dd className="mt-3 text-body text-[var(--color-ink-2)]">{def}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </Section>

      {/* ── The chain: where research sits — heading and rail on one row ── */}
      <Section tone="raised" band="tight" width="wide" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-6 xl:grid-cols-12 xl:items-center">
          <h2 className="text-h4 xl:col-span-3">Research is step one of four.</h2>
          <motion.ol
            className="grid grid-cols-1 border-t border-[var(--color-line-2)] sm:grid-cols-2 lg:grid-cols-4 xl:col-span-9"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerChildren(0.08, 0.1)}
          >
            {CHAIN.map((c, i) => {
              const current = c.n === '01';
              return (
                <motion.li key={c.n} variants={fadeUp}>
                  <button
                    onClick={() => navigate(c.path)}
                    aria-current={current ? 'page' : undefined}
                    className={`group relative flex h-full w-full cursor-pointer flex-col gap-2 border-b border-[var(--color-line)] px-5 py-5 text-left transition-colors hover:bg-[var(--color-surface)] lg:border-b-0 ${
                      i > 0 ? 'lg:border-l' : ''
                    } ${current ? 'bg-[var(--color-surface)]' : ''}`}
                  >
                    {current && (
                      <span aria-hidden="true" className="absolute inset-x-0 -top-px h-[2px] bg-[var(--color-accent)]" />
                    )}
                    <span className="flex items-center justify-between">
                      <span className="font-mono text-eyebrow text-[var(--color-accent)]">{c.n}</span>
                      {i < CHAIN.length - 1 && (
                        <ArrowRight
                          className="hidden h-4 w-4 shrink-0 text-[var(--color-line-strong)] lg:block"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                    <span
                      className={`text-h5 transition-colors group-hover:text-[var(--color-ink-strong)] ${
                        current ? 'text-[var(--color-ink-strong)]' : 'text-[var(--color-ink-2)]'
                      }`}
                    >
                      {c.name}
                    </span>
                  </button>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <Section tone="deep" band="normal" width="wide" rule>
        <motion.div
          className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12 lg:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="lg:col-span-7">
            <h2 className="text-h2">Start a conversation.</h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink-2)]">
              Tell us the market question you need answered. We will tell you what it would take to
              answer it properly — and whether we are the right people to do it.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:col-span-5 lg:justify-end">
            <button onClick={() => navigate('/contact?topic=market-research')} className={primaryBtn}>
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>
            <button onClick={() => navigate('/what-we-do/business-consulting')} className={linkCls}>
              Next: Business Consulting
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};
