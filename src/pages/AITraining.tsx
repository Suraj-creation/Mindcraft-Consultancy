import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { AILearningLadder } from '../components/AILearningLadder';
import { Section, Container, SectionHead } from '../components/layout/Section';
import { fadeUp, staggerChildren, viewportOnce } from '../lib/motion';

/* Four formats, parallel and unnumbered. Durations follow the delivery
   modalities the firm actually offers — short courses through to programmes. */
const FORMATS: [string, string][] = [
  [
    'Executive boardroom sessions',
    'One- to two-day intensives for boards and executive committees, built around simulated decisions and regulatory risk rather than slideware.',
  ],
  [
    'Departmental workflow sprints',
    'Applied cohort sprints over several weeks, redesigning an existing operational process into an AI-assisted one with verification built in.',
  ],
  [
    'Clinical decision sandboxes',
    'Hospital and laboratory sessions covering ambient charting, diagnostic decision support and the ethics and governance around both.',
  ],
  [
    'Engineering immersion labs',
    'Hands-on labs: fine-tuning smaller models, building private retrieval systems over internal documents, and deploying them in containers.',
  ],
];

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';
const ghostBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-line-strong)] px-7 py-4 text-body-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink-strong)]';
const linkCls =
  'group inline-flex min-h-[44px] items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer';

export const AITraining: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ── Hero: the room first — this pillar is about people. The photo
          bleeds to the left edge of the screen; the claim holds the right. ── */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-[42%]">
          <figure className="rise relative h-[44vh] min-h-[300px] lg:h-full" style={{ animationDelay: '0ms' }}>
            <img
              src="/assets/images/african_executive_training_1788986677111.jpg"
              alt="Executives and clinicians working through an applied AI literacy session"
              className="h-full w-full object-cover object-[50%_40%]"
              loading="eager"
              fetchPriority="high"
            />
            {/* Only a foot shadow, so the caption reads — the photo stays lit. */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--color-ground-deep)]/85 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-0 bottom-0 px-6 pb-5 text-caption text-[var(--color-ink)] lg:px-8">
              Sessions are run with the teams who will operate the systems afterwards.
            </figcaption>
          </figure>
        </div>

        <Container width="wide" className="relative">
          <div className="flex flex-col justify-center py-12 lg:ml-[46%] lg:min-h-[600px] lg:py-[var(--band-tight)]">
            <h1 className="rise text-h1" style={{ animationDelay: '80ms' }}>
              Capability that stays after we leave.
            </h1>
            <p className="rise measure mt-7 text-lead text-[var(--color-ink-2)]" style={{ animationDelay: '160ms' }}>
              Technology investment stalls when the people around it cannot carry it. Practical,
              hands-on capability-building for boards, clinical teams and engineers — designed to
              produce internal champions, not awareness.
            </p>

            <div className="rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '220ms' }}>
              <button onClick={() => navigate('/contact?topic=ai-training')} className={primaryBtn}>
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => navigate('/explore?capability=AI%20Training')}
                className={ghostBtn}
              >
                Compose a training brief
                <ArrowRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── The ladder — the one emerald band: who starts where is the
          question this page exists to answer. ─────────────────────────── */}
      <Section tone="emerald" band="normal" width="wide">
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-4 2xl:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2 className="text-h3">
              <span className="mb-5 block h-[2px] w-10 bg-[var(--color-accent)]" aria-hidden="true" />
              From boardroom governance to production engineering.
            </h2>
            <p className="measure-sm mt-5 text-body text-[var(--color-ink-2)]">
              The same subject reads differently at each level of an organisation. The ladder shows
              where a given team starts, and what the step after it looks like.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-8 2xl:col-span-9"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <AILearningLadder />
          </motion.div>
        </div>
      </Section>

      {/* ── Formats: four columns read across, not four rows down ────────── */}
      <Section band="normal" width="wide">
        <SectionHead
          title="How the teaching is delivered."
          lead="Delivered in person, virtually or hybrid — as short courses of one to five days, programmes running weeks to months, retainers, or scoped one-off projects."
          className="mb-0 border-b-0 pb-10"
        />
        <motion.dl
          className="grid grid-cols-1 border-t border-[var(--color-line-2)] md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.08)}
        >
          {FORMATS.map(([term, def], i) => (
            <motion.div
              key={term}
              variants={fadeUp}
              className={`border-b border-[var(--color-line)] py-7 md:pr-8 xl:border-b-0 xl:py-8 ${
                i % 2 === 1 ? 'md:border-l md:pl-8' : ''
              } ${i === 2 ? 'xl:border-l xl:pl-8' : ''} ${i === FORMATS.length - 1 ? 'xl:pr-0' : ''}`}
            >
              <dt className="text-h5 text-[var(--color-ink-strong)]">{term}</dt>
              <dd className="mt-3 text-body text-[var(--color-ink-2)]">{def}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <Section tone="deep" band="tight" width="wide">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2 className="text-h2">Start a conversation.</h2>
            <p className="measure mt-5 text-lead text-[var(--color-ink-2)]">
              Tell us who needs to be fluent and by when. We will tell you what that actually takes.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-start gap-4 border-t border-[var(--color-line)] pt-8 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <motion.button
              onClick={() => navigate('/contact?topic=ai-training')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
              className={primaryBtn}
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </motion.button>
            <button onClick={() => navigate('/what-we-do/ai-enterprise-solutions')} className={linkCls}>
              The systems these teams operate
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};
