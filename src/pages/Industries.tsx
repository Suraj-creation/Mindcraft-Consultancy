import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container, SectionHead } from '../components/layout/Section';
import { fadeUp, staggerChildren, viewportOnce } from '../lib/motion';
import {
  VERTICALS,
  VERTICAL_GROUPS as GROUPS,
  LIFE_SCIENCES_SUBSECTORS,
} from '../data/industries';

/* Life Sciences is not in the verticals list. It is not a vertical among
   verticals — it is the founding specialisation, and it gets its own band and
   its own page. Flattening it into this grid would erase the entire thesis. */
const linkCls =
  'group inline-flex items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer';

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';

const ghostBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-line-strong)] px-7 py-4 text-body-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink-strong)]';

export const Industries: React.FC = () => {
  const { navigate, queryParams } = useNavigation();
  const requested = VERTICALS.some((v) => v.id === queryParams.v) ? queryParams.v : undefined;
  const [activeId, setActiveId] = useState(requested ?? 'banking');

  const active = VERTICALS.find((v) => v.id === activeId) ?? VERTICALS[0];

  // Deep link from the site menu: /industries?v=<id> opens that vertical and
  // brings its panel into view — on first load and when already on the page.
  useEffect(() => {
    if (!requested) return;
    setActiveId(requested);
    const t = window.setTimeout(() => {
      document.getElementById('verticals')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
    return () => window.clearTimeout(t);
  }, [requested]);

  return (
    <div>
      {/* ── Header: the thesis left, its explanation right, one band ────── */}
      <section className="py-[var(--band-tight)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12 lg:items-end">
            <h1 className="rise text-display lg:col-span-7" style={{ animationDelay: '0ms' }}>
              One sector deep.
              <br className="hidden sm:block" /> Many sectors wide.
            </h1>
            <div className="rise lg:col-span-5 lg:pb-3" style={{ animationDelay: '120ms' }}>
              <p className="measure text-lead text-[var(--color-ink-2)]">
                Sector expertise is not evenly distributed and this page does not pretend otherwise.
                Life Sciences carries a dedicated practice with six sub-sectors. Every other vertical
                draws on the same four capabilities, applied to its own market structure.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Life Sciences: the one emerald band. Depth gets the saturated
          ground and gold hairlines; breadth below sits on plain ground. ── */}
      <Section id="life-sciences" tone="emerald" band="normal" width="wide">
        <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-12">
          <motion.figure
            className="flex flex-col lg:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            {/* The photograph fills whatever height the text column sets. */}
            <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-[320px] lg:flex-1">
              <img
                src="/assets/images/lifesciences_research_1788984006985.jpg"
                alt="Researcher evaluating formulation assays in a controlled pharmaceutical research environment"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 text-caption text-[var(--color-ink-2)]">
              Founding heritage and core specialisation.
            </figcaption>
          </motion.figure>

          <div className="lg:col-span-8">
            <motion.div
              className="grid grid-cols-1 gap-x-12 gap-y-5 xl:grid-cols-8 xl:items-end"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
            >
              <div className="xl:col-span-3">
                <h2 className="text-h2">
                  <span className="mb-5 block h-[2px] w-10 bg-[var(--color-accent)]" aria-hidden="true" />
                  Life Sciences.
                </h2>
                <p className="mt-3 font-[family-name:var(--font-display)] text-body-sm font-medium text-[var(--color-accent)]">
                  Core expertise · six sub-sectors
                </p>
              </div>
              <p className="measure text-lead text-[var(--color-ink)] xl:col-span-5">
                Pharmaceuticals, devices, diagnostics and healthcare delivery demand regulatory
                fluency and clinical context that generalist frameworks do not carry. This is where
                MindCraft goes deepest — a practice, not a panel.
              </p>
            </motion.div>

            {/* Six sub-sectors share gold hairlines: one practice, six parts. */}
            <motion.ul
              className="mt-10 grid grid-cols-1 gap-px border border-[var(--color-accent-deep)] bg-[var(--color-accent-deep)] sm:grid-cols-2 xl:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerChildren(0.06)}
            >
              {LIFE_SCIENCES_SUBSECTORS.map((s) => (
                <motion.li key={s.id} variants={fadeUp} className="bg-[var(--color-emerald)]">
                  <button
                    onClick={() => navigate(`/industries/life-sciences?sector=${s.id}`)}
                    className="group flex min-h-[64px] w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-body text-[var(--color-ink-strong)] transition-colors hover:bg-[var(--color-surface)]"
                  >
                    {s.name}
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
                  </button>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
            >
              <button onClick={() => navigate('/industries/life-sciences')} className={primaryBtn}>
                The Life Sciences practice
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
              <button onClick={() => navigate('/explore?industry=Pharmaceuticals')} className={ghostBtn}>
                Compose a scenario
                <ArrowRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── Breadth: five market structures read across as columns; the
          selected vertical opens in one panel beneath them. ───────────── */}
      <Section id="verticals" band="normal" width="wide">
        <SectionHead
          title="Where else the capabilities apply."
          lead="Eleven verticals, grouped by the market structure they share. Select one to see what an engagement in it covers."
          meta={
            <span className="flex items-baseline gap-2.5">
              <span className="font-[family-name:var(--font-display)] text-h3 font-light leading-none tabular-nums text-[var(--color-accent)]">
                11
              </span>
              <span className="text-body-sm text-[var(--color-ink-2)]">verticals</span>
            </span>
          }
          className="mb-10"
        />

        <motion.div
          className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(5,auto)]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.08)}
        >
          {GROUPS.map((group) => (
            <motion.section key={group} variants={fadeUp}>
              <h3 className="border-b border-[var(--color-line-2)] pb-3 font-display text-body-sm font-medium text-[var(--color-ink-3)]">
                {group}
              </h3>
              <ul>
                {VERTICALS.filter((v) => v.group === group).map((v) => {
                  const on = v.id === activeId;
                  return (
                    <li key={v.id}>
                      <button
                        onClick={() => setActiveId(v.id)}
                        aria-pressed={on}
                        aria-controls="vertical-detail"
                        className={`group flex min-h-[56px] w-full cursor-pointer items-center justify-between gap-4 border-b py-3.5 text-left transition-colors ${
                          on
                            ? 'border-[var(--color-accent)]'
                            : 'border-[var(--color-line)] hover:border-[var(--color-line-strong)]'
                        }`}
                      >
                        <span
                          className={`text-body leading-snug transition-colors ${
                            on
                              ? 'text-[var(--color-ink-strong)]'
                              : 'text-[var(--color-ink-2)] group-hover:text-[var(--color-ink)]'
                          }`}
                        >
                          {v.name}
                        </span>
                        <ArrowRight
                          className={`h-3.5 w-3.5 shrink-0 transition-all duration-200 ${
                            on
                              ? 'rotate-90 text-[var(--color-accent)]'
                              : 'text-[var(--color-line-strong)] opacity-0 group-hover:translate-x-1 group-hover:opacity-100'
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.section>
          ))}
        </motion.div>

        {/* Detail: one deep panel, read across — name, context, scope. */}
        <div
          id="vertical-detail"
          aria-live="polite"
          className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 border border-t-2 border-[var(--color-line)] border-t-[var(--color-accent)] bg-[var(--color-ground-deep)] p-6 sm:p-8 lg:grid-cols-12 lg:p-10"
        >
          <div className="lg:col-span-4">
            <p className="font-[family-name:var(--font-display)] text-body-sm font-medium text-[var(--color-accent)]">{active.group}</p>
            <h3 className="mt-2 text-h3">{active.name}</h3>
          </div>

          <dl className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:col-span-8">
            <div className="border-t border-[var(--color-line-2)] pt-4">
              <dt className="font-[family-name:var(--font-display)] text-body-sm font-medium text-[var(--color-ink-3)]">
                African market context
              </dt>
              <dd className="mt-2 text-body text-[var(--color-ink)]">{active.relevance}</dd>
            </div>
            <div className="border-t border-[var(--color-line-2)] pt-4">
              <dt className="font-[family-name:var(--font-display)] text-body-sm font-medium text-[var(--color-ink-3)]">
                What an engagement covers
              </dt>
              <dd className="mt-2 text-body text-[var(--color-ink-2)]">{active.scope}</dd>
            </div>
          </dl>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--color-line)] pt-6 lg:col-span-8 lg:col-start-5">
            <button
              onClick={() => navigate(`/contact?industry=${encodeURIComponent(active.name)}`)}
              className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-6 py-3.5 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => navigate(`/explore?industry=${encodeURIComponent(active.name)}`)}
              className={`${linkCls} min-h-[44px]`}
            >
              Compose this in the Explorer
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <Section tone="deep" band="tight" width="wide" rule>
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="lg:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2 className="text-h1">Not sure which one you are?</h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink-2)]">
              Most organisations sit across two or three of these. Describe the decision and we will
              tell you which capabilities it needs — and whether we are the right partner for it.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ duration: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
              className={`${primaryBtn} mt-8`}
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </motion.button>
          </motion.div>

          <motion.div
            className="border-t border-[var(--color-line)] pt-8 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <p className="text-body text-[var(--color-ink-2)]">
              Every vertical here is served from Nairobi across 45 African markets, with corridors
              into Europe and the United States.
            </p>
            <button onClick={() => navigate('/where-we-work')} className={`${linkCls} mt-6`}>
              Where we work
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};
