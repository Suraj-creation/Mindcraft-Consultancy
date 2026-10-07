import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container, SectionHead } from '../components/layout/Section';
import { EngineVisualSpine } from '../components/EngineVisualSpine';
import { fadeUp, staggerChildren, viewportOnce } from '../lib/motion';

/* Chain order, not source order. The sequence is the argument: research
   informs strategy, strategy directs what gets built, training makes the
   build hold. Positioning lines are the Corporate Profile's own words. */
interface Pillar {
  n: string;
  name: string;
  path: string;
  positioning: string;
  scope: string[];
  handoff: string;
}

const PILLARS: Pillar[] = [
  {
    n: '01',
    name: 'Market Research',
    path: '/what-we-do/market-research',
    positioning:
      'Rigorous primary and secondary research that turns market complexity into decision-ready intelligence — purpose-built for Life Sciences and diversified industry clients operating in African and international markets.',
    scope: [
      'Primary quantitative and qualitative fieldwork',
      'KOL and stakeholder network mapping',
      'Competitive intelligence and pricing studies',
      'Programme monitoring and impact evaluation',
    ],
    handoff: 'Hands strategy a verified baseline instead of an assumption.',
  },
  {
    n: '02',
    name: 'Business Consulting',
    path: '/what-we-do/business-consulting',
    positioning:
      'Strategic and management advisory that helps organisations make better decisions, restructure for growth and execute change with confidence — grounded in Life Sciences and cross-industry practice.',
    scope: [
      'Corporate and business strategy formulation',
      'Digital and AI transformation architecture',
      'Target operating models and governance',
      'Policy and regulatory compliance advisory',
    ],
    handoff: 'Decides what is worth building before anything is built.',
  },
  {
    n: '03',
    name: 'AI Enterprise Solutions',
    path: '/what-we-do/ai-enterprise-solutions',
    positioning:
      'End-to-end design, build and integration of AI-powered systems that operationalise insight into everyday business workflows — from market intelligence platforms to patient- and customer-facing AI tools.',
    scope: [
      'Private LLM and retrieval implementations',
      'Document and regulatory text extraction',
      'Process automation across existing systems',
      'Life-Sciences-specific pharmacovigilance tooling',
    ],
    handoff: 'Puts the decision into the workflow where the work happens.',
  },
  {
    n: '04',
    name: 'AI Training & Digital Literacy',
    path: '/what-we-do/ai-training',
    positioning:
      'Practical, hands-on AI capability-building for individuals, teams and organisations — designed to build real AI literacy and internal champions, not just awareness.',
    scope: [
      'Executive briefings and strategy masterclasses',
      'Function-specific workflows for commercial, clinical and finance teams',
      'Responsible AI and data governance frameworks',
      'Train-the-trainer and internal champion programmes',
    ],
    handoff: 'Leaves practitioners who can carry the system without us.',
  },
];

/* The source defines itself by negation — "rather than four disconnected
   vendors." That contrast is the argument for the chain, stated as a
   structural difference, never as a claimed outcome. Each fragmented step
   sits beside its integrated counterpart, so the table reads across. */
const CONTRAST: [string, string][] = [
  [
    'A research firm hands over a report with no route to a decision.',
    'Research is scoped against the decision it has to support.',
  ],
  [
    'Strategy arrives as a deck detached from field reality.',
    'Strategy is built on the fieldwork the same team ran.',
  ],
  [
    'A technology vendor ships tools nobody internally can operate.',
    'Systems are designed around the bottleneck the research found.',
  ],
  [
    'Training is generic, and adoption stalls after the workshop.',
    'Training is written against the system that was actually deployed.',
  ],
];

const linkCls =
  'group inline-flex items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer';

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';

const colLabel = 'font-display text-body-sm font-medium';

export const WhatWeDo: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ── Header: the chain stated once, in full ─────────────────────── */}
      <section className="border-b border-[var(--color-line)] pt-[var(--band-tight)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12 lg:items-end">
            <h1 className="rise text-h1 lg:col-span-7" style={{ animationDelay: '0ms' }}>
              One engine, from question to impact.
            </h1>
            <div className="rise lg:col-span-5 lg:pb-3" style={{ animationDelay: '120ms' }}>
              <p className="measure text-lead text-[var(--color-ink-2)]">
                Research informs strategy. Strategy directs what gets built. Training makes the build
                hold. Four disciplines run as one accountable chain — not four vendors passing
                documents between them.
              </p>
            </div>
          </div>

          {/* The chain, with its terminus, read across in one row. Numerals
             are information here: the order carries the whole argument. */}
          <ol
            className="rise mt-12 grid grid-cols-1 border-t border-[var(--color-line-2)] sm:grid-cols-2 lg:mt-14 lg:grid-cols-5"
            style={{ animationDelay: '220ms' }}
          >
            {PILLARS.map((p, i) => (
              <li
                key={p.n}
                className={`border-b border-[var(--color-line)] lg:border-b-0 ${
                  i > 0 ? 'lg:border-l' : ''
                } ${i % 2 === 1 ? 'sm:border-l lg:border-l' : ''}`}
              >
                <button
                  onClick={() => navigate(p.path)}
                  className={`group flex h-full w-full cursor-pointer flex-col gap-2 py-7 pr-6 text-left transition-colors ${
                    i % 2 === 1 ? 'sm:pl-6' : ''
                  } ${i > 0 ? 'lg:pl-7' : 'lg:pl-0'}`}
                >
                  <span className="flex items-center justify-between">
                    <span className="font-mono text-eyebrow text-[var(--color-accent)]">{p.n}</span>
                    <ArrowRight
                      className="h-4 w-4 text-[var(--color-line-strong)] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-h5 text-[var(--color-ink-strong)] transition-colors group-hover:text-[var(--color-accent-2)]">
                    {p.name}
                  </span>
                  <span className="text-body-sm text-[var(--color-ink-3)]">{p.handoff}</span>
                </button>
              </li>
            ))}
            <li className="flex flex-col gap-2 py-7 pr-6 lg:border-l lg:border-[var(--color-line)] lg:pl-7">
              <span className="font-mono text-eyebrow text-[var(--color-grass)]">05</span>
              <span className="text-h5 text-[var(--color-ink-2)]">Measurable impact</span>
              <span className="text-body-sm text-[var(--color-ink-3)]">
                Evidence that feeds the next question — the chain closes and starts again.
              </span>
            </li>
          </ol>
        </Container>
      </section>

      {/* ── The spine, stage by stage ──────────────────────────────────── */}
      <Section tone="raised" band="normal" width="wide">
        <SectionHead
          title="How an engagement moves down the chain."
          lead="Six stages from first question to evidence. Select a stage to see what goes in, what happens and what comes out."
          className="mb-10"
        />
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <EngineVisualSpine />
        </motion.div>
      </Section>

      {/* ── Each capability in depth — the one emerald band. Four columns
          read across; hairlines divide them, nothing is boxed. ────────── */}
      <Section tone="emerald" band="normal" width="wide">
        <SectionHead
          title="The four disciplines in detail."
          lead="Clients frequently engage across two or more at once. The integration is the point — but no part of the chain is mandatory to start."
          className="mb-0 !border-[var(--color-line-2)]"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.08)}
        >
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.n}
              variants={fadeUp}
              /* Subgrid: name, positioning, scope and link line up across all
                 four columns however long each paragraph runs. */
              className={`row-span-5 grid grid-rows-subgrid border-b border-[var(--color-line-2)] py-8 xl:border-b-0 xl:px-8 xl:pt-10 xl:pb-2 ${
                i % 2 === 1 ? 'md:border-l md:pl-8' : 'md:pr-8'
              } ${i > 0 ? 'xl:border-l' : 'xl:pl-0'} ${i === PILLARS.length - 1 ? 'xl:pr-0' : ''}`}
            >
              <span className="font-mono text-eyebrow text-[var(--color-accent)]">{p.n}</span>
              <h3 className="mt-3 text-h4 text-[var(--color-ink-strong)]">{p.name}</h3>
              <p className="mt-4 text-body text-[var(--color-ink)]">{p.positioning}</p>
              <ul className="mt-6 border-b border-[var(--color-line-2)]">
                {p.scope.map((s) => (
                  <li
                    key={s}
                    className="border-t border-[var(--color-line-2)] py-2.5 text-body-sm text-[var(--color-ink-2)]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate(p.path)} className={`${linkCls} mt-6 min-h-[44px] self-start`}>
                The full capability
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      {/* ── Why one partner: a structural contrast, not a scorecard ────── */}
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
              Why the chain is the product.
            </h2>
            <p className="measure mt-5 text-lead text-[var(--color-ink-2)]">
              The alternative is not a worse partner. It is four partners, each accountable for a
              different fragment of the same decision.
            </p>
          </motion.div>

          {/* Fragment on the left, its integrated counterpart on the right. */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-x-12 gap-y-1 pb-4 md:grid-cols-2">
              <h3 className={`${colLabel} text-[var(--color-ink-3)]`}>Four disconnected vendors</h3>
              <h3 className={`${colLabel} text-[var(--color-accent)]`}>One integrated engagement</h3>
            </div>
            <motion.ul
              className="border-t border-[var(--color-line-2)]"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerChildren(0.07)}
            >
              {CONTRAST.map(([apart, together]) => (
                <motion.li
                  key={together}
                  variants={fadeUp}
                  className="grid grid-cols-1 gap-x-12 gap-y-2 border-b border-[var(--color-line)] py-5 md:grid-cols-2"
                >
                  <p className="text-body text-[var(--color-ink-3)]">
                    <span className="sr-only">Four disconnected vendors: </span>
                    {apart}
                  </p>
                  <p className="flex items-baseline gap-3 text-body text-[var(--color-ink-strong)]">
                    <ArrowRight
                      className="h-3.5 w-3.5 shrink-0 translate-y-0.5 text-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="sr-only">One integrated engagement: </span>
                      {together}
                    </span>
                  </p>
                </motion.li>
              ))}
              <motion.li variants={fadeUp} className="py-5">
                <p className="text-body text-[var(--color-ink-2)]">
                  Each is accountable for its own fragment; nobody is accountable for the decision.
                </p>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <Section tone="deep" band="normal" width="wide">
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2 className="text-h2">Scope an integrated engagement.</h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink-2)]">
              Start anywhere on the chain. Tell us the decision you are facing and we will say
              honestly which capabilities it actually needs.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <motion.button
                onClick={() => navigate('/contact')}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0, scale: 0.98 }}
                transition={{ duration: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                className={primaryBtn}
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </motion.button>
              <button
                onClick={() => navigate('/explore')}
                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-line-strong)] px-7 py-4 text-body-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink-strong)]"
              >
                Compose it in the Explorer
                <ArrowRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
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
            <p className="text-body text-[var(--color-ink-2)]">
              Deepest sector expertise sits in Life Sciences, where all four capabilities run against
              regulatory, clinical and commercial context at once.
            </p>
            <button onClick={() => navigate('/industries/life-sciences')} className={`${linkCls} mt-6`}>
              The Life Sciences practice
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};
