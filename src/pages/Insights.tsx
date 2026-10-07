import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container } from '../components/layout/Section';
import { fadeUp, staggerChildren, viewportOnce } from '../lib/motion';

/* MindCraft was founded in 2026 and has not yet published. This page states the
   subjects the desk covers and says plainly that writing is in progress. It
   carries no articles, bylines, read-times or findings until real ones exist. */
const TOPICS = [
  {
    name: 'Life Sciences',
    scope:
      'Regulatory harmonisation across African authorities, market access, pharmacovigilance, and the commercial consequences of both for manufacturers and providers.',
  },
  {
    name: 'Africa Markets',
    scope:
      'Regional trade blocs, regulatory divergence, distribution structure and the practical differences between operating in one African market and operating in twelve.',
  },
  {
    name: 'Market Intelligence',
    scope:
      'Research method — how primary fieldwork is designed and sampled in markets where secondary data is thin, contested or absent entirely.',
  },
  {
    name: 'Business & Strategy',
    scope:
      'Operating models, market entry sequencing, organisational design and the strategic questions that come before a technology decision rather than after it.',
  },
  {
    name: 'AI & Digital Transformation',
    scope:
      'Applied enterprise AI in regulated industries — what deploys successfully in African operating conditions, and what governance it requires to stay compliant.',
  },
  {
    name: 'Research & Perspectives',
    scope:
      'Longer-form argument on the intersection of sector depth and applied technology, including method notes and positions we are prepared to defend.',
  },
];

export const Insights: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ── Hero: title, statement and position on one band, read across ── */}
      <section className="border-b border-[var(--color-line)] pt-[var(--band)] pb-[var(--band-tight)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12 lg:items-end">
            <h1 className="rise text-display lg:col-span-5" style={{ animationDelay: '0ms' }}>
              Insights
            </h1>
            <p
              className="rise measure text-lead text-[var(--color-ink-2)] lg:col-span-4"
              style={{ animationDelay: '80ms' }}
            >
              The subjects our research and advisory work covers. MindCraft was founded in 2026 and
              the publishing desk is being built — when analysis appears here it will be our own,
              and it will say who wrote it and what it is based on.
            </p>
            <p
              className="rise font-display text-h5 !leading-[1.25] text-[var(--color-ink-strong)] lg:col-span-3"
              style={{ animationDelay: '160ms' }}
            >
              <span className="mb-4 block h-[2px] w-10 bg-[var(--color-accent)]" aria-hidden="true" />
              We would rather publish nothing than publish research we have not done.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Subjects — the one emerald band: this is what the page is for. ── */}
      <Section tone="emerald" band="normal" width="wide">
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2 className="text-h3">
              <span className="mb-5 block h-[2px] w-10 bg-[var(--color-accent)]" aria-hidden="true" />
              What the desk covers.
            </h2>
          </motion.div>

          <motion.ul
            className="grid grid-cols-1 gap-px border border-[var(--color-line-2)] bg-[var(--color-line-2)] sm:grid-cols-2 lg:col-span-9 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerChildren(0.06)}
          >
            {TOPICS.map((t) => (
              <motion.li key={t.name} variants={fadeUp} className="bg-[var(--color-emerald)] p-6 lg:p-7">
                <h3 className="text-h5 text-[var(--color-ink-strong)]">{t.name}</h3>
                <p className="mt-3 text-body-sm text-[var(--color-ink-2)]">{t.scope}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <Section tone="deep" band="tight" width="wide">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="lg:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2 className="text-h2">Ask us directly instead.</h2>
            <p className="measure mt-5 text-lead text-[var(--color-ink-2)]">
              Until the desk publishes, the fastest way to get our read on a market, a regulator or a
              technology decision is to ask for it.
            </p>
          </motion.div>
          <motion.div
            className="flex lg:col-span-4 lg:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
              className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </motion.button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};
