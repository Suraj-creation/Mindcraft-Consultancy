import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { ENGAGEMENT_STAGES, DIFFERENTIATORS } from '../data/landingData';
import { Section, Container, SectionHead } from '../components/layout/Section';
import { fadeUp, staggerChildren, viewportOnce } from '../lib/motion';

/* The seven delivery modalities, exactly as the source states them. They are
   two axes, not seven parallel products — format is how the work happens,
   term is how long it runs. Rendering them as a matrix is the honest form. */
const MODALITY_AXES: { axis: string; note: string; items: [string, string][] }[] = [
  {
    axis: 'Format',
    note: 'How the work happens',
    items: [
      ['In-person', 'On site, in the market'],
      ['Virtual', 'Remote, across time zones'],
      ['Hybrid', 'Fieldwork plus remote delivery'],
    ],
  },
  {
    axis: 'Term',
    note: 'How long it runs',
    items: [
      ['Short courses', '1–5 days'],
      ['Longer programmes', 'Weeks to months'],
      ['Retainers', 'Ongoing'],
      ['Scoped one-off projects', 'Fixed scope'],
    ],
  },
];

const linkCls =
  'group inline-flex cursor-pointer items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] whitespace-nowrap';

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';

const ruleCls = 'mb-5 block h-[2px] w-10 bg-[var(--color-accent)]';

export const HowWeWork: React.FC = () => {
  const { navigate } = useNavigation();
  const [activeNum, setActiveNum] = useState<string>('01');
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = Math.max(0, ENGAGEMENT_STAGES.findIndex((s) => s.number === activeNum));
  const active = ENGAGEMENT_STAGES[activeIndex];
  const total = String(ENGAGEMENT_STAGES.length).padStart(2, '0');

  // The six stages are ordered and the order is the argument, so walk it.
  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (i + delta + ENGAGEMENT_STAGES.length) % ENGAGEMENT_STAGES.length;
    setActiveNum(ENGAGEMENT_STAGES[next].number);
    refs.current[next]?.focus();
  };

  return (
    <div>
      {/* ── Hero: claim left, the framing line right, one band ──────────── */}
      <section className="pb-[var(--band-tight)] pt-[var(--band-tight)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-12 lg:items-end">
            <h1 className="rise text-h1 lg:col-span-7">How an engagement runs.</h1>
            <p
              className="rise measure text-lead text-[var(--color-ink-2)] lg:col-span-5"
              style={{ animationDelay: '80ms' }}
            >
              Six stages, from the first framing conversation through to follow-up. Not a branded
              framework and not a methodology with a name — just the sequence the work actually
              moves through, stated in advance so nothing about it is a surprise.
            </p>
          </div>
        </Container>
      </section>

      {/* ── The spine — the page's one emerald band. Rail, then the selected
          stage in a deep panel that reads across, then where it connects. ── */}
      <Section id="stages" tone="emerald" band="normal" width="wide">
        <SectionHead
          title="Discovery to follow-up."
          lead="Select a stage to see what it is for and what it produces."
          meta={<span className="font-mono text-eyebrow text-[var(--color-accent)]">01–{total}</span>}
          className="mb-8 !border-[var(--color-line-2)]"
        />

        <motion.ol
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          role="tablist"
          aria-label="The six engagement stages"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.06)}
        >
          {ENGAGEMENT_STAGES.map((s, i) => {
            const on = s.number === activeNum;
            const past = i < activeIndex;
            return (
              <motion.li key={s.number} variants={fadeUp} className="relative">
                <button
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  role="tab"
                  id={`stage-tab-${s.number}`}
                  aria-selected={on}
                  aria-controls="stage-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActiveNum(s.number)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`group relative w-full cursor-pointer border-l-2 pb-6 pl-5 pr-4 pt-5 text-left transition-colors lg:border-l-0 lg:border-t-2 lg:pb-7 lg:pl-0 lg:pr-6 lg:pt-7 ${
                    on
                      ? 'border-[var(--color-accent)]'
                      : past
                        ? 'border-[var(--color-line-strong)] hover:border-[var(--color-accent-2)]'
                        : 'border-[var(--color-line-2)] hover:border-[var(--color-line-strong)]'
                  }`}
                >
                  {/* The node sits on the rail itself. */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-5 h-2.5 w-2.5 -translate-x-[6px] rotate-45 transition-colors lg:top-0 lg:-translate-x-0 lg:-translate-y-[6px] ${
                      on
                        ? 'bg-[var(--color-accent)]'
                        : past
                          ? 'bg-[var(--color-line-strong)]'
                          : 'bg-[var(--color-line-2)]'
                    }`}
                  />
                  <span className="font-mono text-eyebrow text-[var(--color-accent)]">{s.number}</span>
                  <span
                    className={`mt-1.5 block text-h5 transition-colors ${
                      on
                        ? 'text-[var(--color-ink-strong)]'
                        : 'text-[var(--color-ink-2)] group-hover:text-[var(--color-ink)]'
                    }`}
                  >
                    {s.name}
                  </span>
                </button>
              </motion.li>
            );
          })}
        </motion.ol>

        {/* Selected stage: name, purpose and what you receive read across. */}
        <motion.div
          id="stage-panel"
          role="tabpanel"
          aria-labelledby={`stage-tab-${active.number}`}
          aria-live="polite"
          className="mt-6 grid grid-cols-1 border border-[var(--color-line)] border-t-[var(--color-accent-deep)] bg-[var(--color-ground-deep)] lg:grid-cols-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <div className="p-6 lg:col-span-3 lg:p-8">
            <p className="font-mono text-eyebrow text-[var(--color-accent)]">
              {active.number} / {total}
            </p>
            <h3 className="mt-2 text-h3">{active.name}</h3>
          </div>
          <dl className="contents">
            <div className="border-t border-[var(--color-line)] p-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:p-8">
              <dt className="font-display text-body-sm font-medium text-[var(--color-ink-3)]">Purpose</dt>
              <dd className="mt-2.5 text-body text-[var(--color-ink-2)]">{active.objective}</dd>
            </div>
            <div className="border-t border-[var(--color-line)] p-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-8">
              <dt className="font-display text-body-sm font-medium text-[var(--color-accent)]">
                What you receive
              </dt>
              <dd className="mt-2.5 text-lead text-[var(--color-ink-strong)]">{active.outcome}</dd>
            </div>
          </dl>
        </motion.div>

        {/* Where it connects — stated under the stages it is about. */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-x-12 gap-y-4 lg:grid-cols-12 lg:items-baseline"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <h2 className="text-h5 text-[var(--color-ink-strong)] lg:col-span-4">
            The stages carry the four capabilities.
          </h2>
          <p className="measure text-body text-[var(--color-ink-2)] lg:col-span-6">
            Discovery and Design draw on research; Delivery is where consulting, engineering and
            training actually run. Which capabilities appear in an engagement is decided at
            Proposal — clients frequently engage across two or more at once.
          </p>
          <div className="lg:col-span-2 lg:text-right">
            <button onClick={() => navigate('/what-we-do')} className={linkCls}>
              See the four capabilities
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </Section>

      {/* ── Delivery: a matrix of two axes, not seven cards ─────────────── */}
      <Section id="delivery" band="normal" width="wide">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2 className="text-h3">
              <span className={ruleCls} aria-hidden="true" />
              Seven ways it gets delivered.
            </h2>
            <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
              Format and term are chosen separately. A short course can run in person or remotely; a
              retainer can be hybrid. The combination is set at Proposal, not assumed.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8 lg:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerChildren(0.08)}
          >
            {MODALITY_AXES.map((group) => (
              <motion.div key={group.axis} variants={fadeUp}>
                <div className="flex items-baseline justify-between gap-4 border-b border-[var(--color-line-strong)] pb-3">
                  <h3 className="text-h5 text-[var(--color-ink-strong)]">{group.axis}</h3>
                  <span className="text-caption text-[var(--color-ink-3)]">{group.note}</span>
                </div>
                <dl
                  className={`grid grid-cols-2 gap-x-5 ${
                    group.items.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'
                  } md:gap-x-0`}
                >
                  {group.items.map(([name, qualifier], i) => (
                    <div
                      key={name}
                      className={`border-b border-[var(--color-line)] py-4 pr-5 md:border-b-0 md:py-5 ${
                        i > 0 ? 'md:border-l md:pl-5' : ''
                      }`}
                    >
                      <dt className="text-body text-[var(--color-ink-strong)]">{name}</dt>
                      <dd className="mt-1 text-caption text-[var(--color-ink-3)]">{qualifier}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── Differentiators: the heading takes the first cell of a 3×2
          hairline grid, the five claims fill the rest. ───────────────── */}
      <Section id="differentiators" tone="raised" band="normal" width="wide" rule>
        <motion.div
          className="grid grid-cols-1 gap-px border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.08)}
        >
          <motion.div variants={fadeUp} className="bg-[var(--color-raised)] p-7 xl:p-9">
            <h2 className="text-h3">
              <span className={ruleCls} aria-hidden="true" />
              Why the combination is the point.
            </h2>
            <p className="mt-5 text-body text-[var(--color-ink-2)]">
              Five things that shape how an engagement is staffed and scoped. They are claims about
              method, not about results — the firm was founded in 2026 and has no track record to
              trade on yet.
            </p>
          </motion.div>

          {DIFFERENTIATORS.map((d) => (
            <motion.article key={d.num} variants={fadeUp} className="bg-[var(--color-raised)] p-7 xl:p-9">
              <h3 className="text-h4">{d.title}</h3>
              <p className="mt-4 text-lead text-[var(--color-ink)]">{d.statement}</p>
              <p className="mt-4 text-body-sm text-[var(--color-ink-2)]">{d.proof}</p>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      {/* ── Closing: one row — claim, line, action ─────────────────────── */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-ground-deep)] py-[var(--band)]">
        <Container width="wide">
          <motion.div
            className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12 lg:items-end"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2 className="text-h1 lg:col-span-6">Start a conversation.</h2>
            <p className="measure text-lead text-[var(--color-ink-2)] lg:col-span-3">
              Scope begins at Discovery: we frame the problem with you before anything is proposed or
              priced.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:col-span-3 lg:flex-col lg:items-end">
              <button onClick={() => navigate('/contact')} className={primaryBtn}>
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
              <a
                href="mailto:info@mindcraftconsultancy.com"
                className="text-body-sm text-[var(--color-ink)] underline decoration-[var(--color-accent-deep)] underline-offset-[6px] transition-colors hover:text-[var(--color-accent-2)] hover:decoration-[var(--color-accent)]"
              >
                info@mindcraftconsultancy.com
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};
