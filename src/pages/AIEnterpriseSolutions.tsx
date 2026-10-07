import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { AITechnologyArchitecture } from '../components/AITechnologyArchitecture';
import { Section, Container, SectionHead } from '../components/layout/Section';
import { fadeUp, staggerChildren, viewportOnce } from '../lib/motion';

/* Design commitments, not outcomes — these describe how a system is built,
   which is a claim we can make on day one. */
const COMMITMENTS: [string, string][] = [
  ['Runs where your data lives', 'On-premise or in a private cloud tenancy you control.'],
  ['Deterministic where it matters', 'Schema validation and test coverage around every generated output.'],
  ['No training on your data', 'Nothing leaves the tenancy into a shared or public model.'],
];

/* Life-Sciences-specific AI. Parallel systems, so no numerals, no cards. */
const SOLUTIONS: [string, string][] = [
  [
    'Pharmacovigilance and adverse-event monitoring',
    'Multilingual extraction from clinician reports, patient narratives and discharge notes, built to produce standardised, MedDRA-coded safety notifications for review.',
  ],
  [
    'Regulatory intelligence automation',
    'Semantic comparison across the Pharmacy and Poisons Board, NAFDAC, SAHPRA and EAC regional guidance, built to surface where a submission has to differ by market.',
  ],
  [
    'Opinion-leader and market-access analytics',
    'Structured mapping of clinical influence and access pathways, built so commercial and medical affairs teams work from the same picture.',
  ],
];

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';
const ghostBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-line-strong)] px-7 py-4 text-body-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink-strong)]';
const linkCls =
  'group inline-flex min-h-[44px] items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer';

export const AIEnterpriseSolutions: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ── Hero: the claim and its three design commitments hold the left;
          the build room bleeds to the right edge of the screen. ────────── */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <Container width="wide" className="relative">
          <div className="flex flex-col justify-between lg:min-h-[620px] lg:w-[54%]">
            <div className="pt-12 lg:pt-[clamp(48px,6vh,80px)]">
              <h1 className="rise text-h1" style={{ animationDelay: '0ms' }}>
                Systems that outlive the pilot.
              </h1>
              <p className="rise measure mt-7 text-lead text-[var(--color-ink-2)]" style={{ animationDelay: '80ms' }}>
                End-to-end design, build and integration of AI systems that put insight inside
                everyday workflows — from market intelligence platforms to patient- and
                customer-facing tools, engineered for the security and data rules you operate under.
              </p>

              <div className="rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '160ms' }}>
                <button
                  onClick={() => navigate('/contact?topic=ai-enterprise-solutions')}
                  className={primaryBtn}
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
                <button
                  onClick={() => navigate('/explore?capability=AI%20Enterprise%20Solutions')}
                  className={ghostBtn}
                >
                  Compose a technology brief
                  <ArrowRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Three commitments read across, on one rule — how the work is
                built, which is a claim that holds on day one. */}
            <dl
              className="rise mt-12 grid grid-cols-1 border-t border-[var(--color-line-2)] sm:grid-cols-3"
              style={{ animationDelay: '240ms' }}
            >
              {COMMITMENTS.map(([term, def], i) => (
                <div
                  key={term}
                  className={`py-6 sm:pr-6 ${
                    i > 0 ? 'border-t border-[var(--color-line)] sm:border-t-0 sm:border-l sm:pl-6' : ''
                  }`}
                >
                  <dt className="text-balance text-h5 text-[var(--color-ink-strong)]">{term}</dt>
                  <dd className="mt-2 text-body-sm text-[var(--color-ink-2)]">{def}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>

        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[42%]">
          <figure className="rise relative h-[42vh] min-h-[280px] lg:h-full" style={{ animationDelay: '200ms' }}>
            <img
              src="/assets/images/african_enterprise_architecture_1788986704563.jpg"
              alt="Systems engineers and data architects working on enterprise AI pipeline infrastructure"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            {/* Only a foot shadow, so the caption reads — the photo stays lit. */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--color-ground-deep)]/85 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-0 bottom-0 px-6 pb-5 text-caption text-[var(--color-ink)] lg:px-8">
              Nairobi. Build and integration work is done alongside the team that will run it.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Architecture: the rail and its detail are the visual ────────── */}
      <Section tone="raised" band="normal" width="wide">
        <SectionHead
          title="Five layers, from source data to the desk."
          lead="Ingestion, private memory, domain-calibrated models, governance and integration. Each layer is inspectable on its own — which is what makes the whole thing auditable later."
          className="mb-0 border-b-0 pb-10"
        />
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <AITechnologyArchitecture />
        </motion.div>
      </Section>

      {/* ── Life Sciences systems — the one emerald band: the sector the firm
          goes deepest in gets the most saturated ground on the page. ────── */}
      <Section tone="emerald" band="normal" width="wide">
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-4 xl:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2 className="text-h3">
              <span className="mb-5 block h-[2px] w-10 bg-[var(--color-accent)]" aria-hidden="true" />
              Built for Life Sciences first.
            </h2>
            <p className="measure-sm mt-5 text-body text-[var(--color-ink-2)]">
              These three systems are where sector knowledge and engineering meet. Each is an
              offering scoped to your data and regulators, not a product to be installed.
            </p>
            <button onClick={() => navigate('/industries/life-sciences')} className={`${linkCls} mt-6`}>
              The Life Sciences practice
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          <motion.dl
            className="grid grid-cols-1 border-t border-[var(--color-accent-deep)] md:grid-cols-3 lg:col-span-8 xl:col-span-9"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerChildren(0.1)}
          >
            {SOLUTIONS.map(([term, def], i) => (
              <motion.div
                key={term}
                variants={fadeUp}
                className={`border-[var(--color-line-2)] py-7 md:pt-8 md:pb-2 ${
                  i < SOLUTIONS.length - 1 ? 'border-b md:border-b-0 md:pr-8' : ''
                } ${i > 0 ? 'md:border-l md:pl-8' : ''}`}
              >
                <dt className="font-display text-h4 text-[var(--color-ink-strong)]">{term}</dt>
                <dd className="mt-4 text-body text-[var(--color-ink-2)]">{def}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
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
              Describe the workflow and the constraints it sits under. We will tell you what is
              buildable now, and what should wait.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-start gap-5 border-t border-[var(--color-line)] pt-8 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <motion.button
              onClick={() => navigate('/contact?topic=ai-enterprise-solutions')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
              className={primaryBtn}
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </motion.button>
            <div>
              <p className="text-body-sm text-[var(--color-ink-3)]">
                A system nobody can operate is a system nobody keeps.
              </p>
              <button onClick={() => navigate('/what-we-do/ai-training')} className={linkCls}>
                AI Training
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};
