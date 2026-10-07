import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container } from '../components/layout/Section';
import { fadeUp, staggerChildren, viewportOnce } from '../lib/motion';

/* Five practice areas are parallel, not sequential — so they carry no numerals.
   They share one hairline grid with the heading, which takes the sixth cell. */
const PRACTICE: [string, string][] = [
  [
    'Corporate and business strategy',
    'Market-entry strategy, growth planning, commercial portfolio prioritisation, competitive positioning and joint-venture advisory across African trade corridors.',
  ],
  [
    'Digital and AI transformation',
    'Technology modernisation roadmaps, AI readiness assessment, data architecture governance and transition planning away from paper-based workflows.',
  ],
  [
    'Organisational design',
    'Target operating model design, leadership restructuring, cross-border commercial team structuring and alignment for multi-country operations.',
  ],
  [
    'Process improvement and systems',
    'Lean operational engineering, supply-chain bottleneck removal, hospital throughput work and enterprise workflow streamlining.',
  ],
  [
    'Policy and regulatory advisory',
    'National formulary submissions, AfCFTA trade alignment, public-sector programme structuring and compliance alignment with national regulatory authorities.',
  ],
];

const DELIVERABLES: [string, string][] = [
  ['Target operating models', 'Functional structures, reporting lines and delegation matrices.'],
  ['Market-entry playbooks', 'Country-specific regulatory, distribution and pricing roadmaps.'],
  ['Transformation charters', 'Milestone sequencing, risk registers and business-case models.'],
  ['Regulatory dossiers', 'Filing documentation formatted for regional and national agencies.'],
];

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';
const ghostBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-line-strong)] px-7 py-4 text-body-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink-strong)]';
const linkCls =
  'group inline-flex min-h-[44px] items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer';

export const BusinessConsulting: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ── Hero: statement on the left, the room bleeding off the right ── */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[44%]">
          <figure className="rise relative h-[42vh] min-h-[280px] lg:h-full" style={{ animationDelay: '200ms' }}>
            <img
              src="/assets/images/african_strategy_room_1788985493442.jpg"
              alt="Senior strategy consultants and analysts reviewing plans in a Nairobi meeting room"
              className="h-full w-full object-cover object-[45%_center]"
              loading="eager"
              fetchPriority="high"
            />
            {/* Only a foot shadow, so the caption reads — the photo stays lit. */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--color-ground-deep)]/85 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-0 bottom-0 px-6 pb-5 text-caption text-[var(--color-ink)] lg:px-8">
              Nairobi. Advisory work is done with the people who have to carry the decision.
            </figcaption>
          </figure>
        </div>

        <Container width="wide" className="relative">
          <div className="flex flex-col justify-center py-12 lg:min-h-[620px] lg:w-[52%] lg:py-[clamp(48px,7vh,88px)]">
            <h1 className="rise text-h1" style={{ animationDelay: '0ms' }}>
              Strategy that survives contact with the market.
            </h1>
            <p className="rise measure mt-7 text-lead text-[var(--color-ink-2)]" style={{ animationDelay: '100ms' }}>
              Strategic and management advisory that helps organisations make better decisions,
              restructure for growth and execute change — grounded in Life Sciences and cross-industry
              practice, and written for the environments it has to work in.
            </p>
            <div className="rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '160ms' }}>
              <button onClick={() => navigate('/contact?topic=business-consulting')} className={primaryBtn}>
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
              <button onClick={() => navigate('/explore?capability=Business%20Consulting')} className={ghostBtn}>
                Compose a consulting brief
                <ArrowRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Practice areas — the one emerald band. Heading and five areas
          share a single hairline grid, three across on wide screens. ─── */}
      <Section tone="emerald" band="normal" width="wide">
        <motion.div
          className="grid grid-cols-1 gap-px border border-[var(--color-line-2)] bg-[var(--color-line-2)] md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.07)}
        >
          <motion.div variants={fadeUp} className="bg-[var(--color-emerald)] p-7 lg:p-8">
            <h2 className="text-h3">
              <span className="mb-5 block h-[2px] w-10 bg-[var(--color-accent)]" aria-hidden="true" />
              Five places advisory work lands.
            </h2>
            <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
              Engagements usually draw on more than one. They are listed as areas of practice, not as
              a menu to be bought line by line.
            </p>
          </motion.div>
          {PRACTICE.map(([term, def]) => (
            <motion.article key={term} variants={fadeUp} className="bg-[var(--color-emerald)] p-7 lg:p-8">
              <h3 className="text-h4 text-[var(--color-ink-strong)]">{term}</h3>
              <p className="mt-4 text-body text-[var(--color-ink-2)]">{def}</p>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      {/* ── Deliverables: heading and a compact rail on one row ────────── */}
      <Section tone="raised" band="tight" width="wide">
        <div className="grid grid-cols-1 gap-x-16 gap-y-6 xl:grid-cols-12">
          <div className="xl:col-span-3">
            <h2 className="text-h3">
              <span className="mb-5 block h-[2px] w-10 bg-[var(--color-accent)]" aria-hidden="true" />
              What you receive.
            </h2>
          </div>
          <motion.dl
            className="grid grid-cols-1 border-t border-[var(--color-line-2)] sm:grid-cols-2 lg:grid-cols-4 xl:col-span-9 xl:self-end"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerChildren(0.07)}
          >
            {DELIVERABLES.map(([term, def], i) => (
              <motion.div
                key={term}
                variants={fadeUp}
                className={`border-b border-[var(--color-line)] py-6 pr-6 lg:border-b-0 ${
                  i % 2 === 1 ? 'sm:border-l sm:pl-6' : ''
                } ${i > 0 ? 'lg:border-l lg:pl-6' : ''}`}
              >
                <dt className="text-h5 text-[var(--color-ink-strong)]">{term}</dt>
                <dd className="mt-2.5 text-body-sm text-[var(--color-ink-2)]">{def}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </Section>

      {/* ── Closing: the two neighbours in the chain, then the CTA ─────── */}
      <Section tone="deep" band="normal" width="wide" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2 className="text-h2">Start a conversation.</h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink-2)]">
              Bring the decision you are stuck on. We will be direct about whether advisory is what
              it needs, or whether it needs evidence first.
            </p>
            <div className="mt-9">
              <button onClick={() => navigate('/contact?topic=business-consulting')} className={primaryBtn}>
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="border-t border-[var(--color-line)] pt-8 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <p className="text-body-sm text-[var(--color-ink-3)]">
              Advisory sits between the evidence and the build. Either side of it:
            </p>
            <div className="mt-3 flex flex-col">
              <button onClick={() => navigate('/what-we-do/market-research')} className={linkCls}>
                <span className="font-mono text-eyebrow text-[var(--color-ink-3)]">01</span>
                Market Research
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button onClick={() => navigate('/what-we-do/ai-enterprise-solutions')} className={linkCls}>
                <span className="font-mono text-eyebrow text-[var(--color-ink-3)]">03</span>
                AI Enterprise Solutions
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};
