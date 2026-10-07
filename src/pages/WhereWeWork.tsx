import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container } from '../components/layout/Section';
import { AfricaInteractiveMap } from '../components/AfricaInteractiveMap';
import { fadeUp, staggerChildren, viewportOnce } from '../lib/motion';

/* Country counts are the real breakdown: 10 + 16 + 14 + 5 = 45. */
const REGION_COUNTS: [string, string][] = [
  ['East Africa', '10'],
  ['West Africa', '16'],
  ['Southern Africa', '14'],
  ['North Africa', '05'],
];

const WHY_NAIROBI: [string, string][] = [
  [
    'Regulatory proximity',
    'East African Community joint evaluation and regional standard-setting bodies sit within reach of the office, which is where regulatory questions get answered fastest.',
  ],
  [
    'Technical density',
    'Nairobi concentrates the region’s data science, machine learning and software engineering talent, so enterprise AI work is staffed locally rather than imported.',
  ],
  [
    'Continental connectivity',
    'Jomo Kenyatta International Airport connects directly to African capitals and onward to Europe and North America, which is what makes fieldwork across four regions practical from one base.',
  ],
];

const CORRIDORS: [string, string][] = [
  [
    'Europe',
    'For European organisations: African market entry assessment, distributor and regulatory screening, and supply arrangements into the continent — scoped and delivered from Nairobi.',
  ],
  [
    'United States',
    'For US organisations: market feasibility, clinical and regulatory context across African markets, and AI systems designed to hold up under African data protection law.',
  ],
];

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';

const linkCls =
  'group inline-flex min-h-[44px] cursor-pointer items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)]';

/* The short gold rule that opens every section head on the site. */
const Rule = () => <span className="mb-5 block h-[2px] w-10 bg-[var(--color-accent)]" aria-hidden="true" />;

export const WhereWeWork: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedRegionId, setSelectedRegionId] = useState<string>('east');

  return (
    <div>
      {/* ── Hero: Nairobi bleeds to the right edge; the claim and the
          country ledger hold the left. ─────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[42%]">
          <figure className="rise relative h-[42vh] min-h-[280px] lg:h-full" style={{ animationDelay: '240ms' }}>
            <img
              src="/assets/images/nairobi_architecture_1788983991343.jpg"
              alt="Nairobi's central business district under a clear sky, jacaranda in bloom along the avenue"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            {/* Foot shadow only, so the caption reads — the photo stays lit. */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--color-ground-deep)]/85 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline justify-between gap-4 px-6 pb-5 lg:px-8">
              <span className="text-caption text-[var(--color-ink)]">Nairobi — the only office</span>
              <span className="font-mono text-eyebrow tracking-[0.08em] text-[var(--color-accent)]">
                1°17′S 36°49′E
              </span>
            </figcaption>
          </figure>
        </div>

        <Container width="wide" className="relative">
          <div className="flex flex-col justify-between lg:min-h-[min(calc(100svh-var(--header-h)),680px)] lg:w-[54%]">
            <div className="pt-12 lg:pt-[clamp(48px,7vh,88px)]">
              <h1 className="rise text-h1">
                Rooted in Nairobi.
                <br className="hidden sm:block" /> Focused on Africa.
              </h1>
              <p
                className="rise measure mt-8 text-lead text-[var(--color-ink-2)]"
                style={{ animationDelay: '80ms' }}
              >
                One office, in Nairobi. Forty-five African markets across four regions, twelve of
                them focus markets reached through an associate network — with corridors into Europe
                and the United States.
              </p>
              <div className="rise mt-10" style={{ animationDelay: '160ms' }}>
                <button onClick={() => navigate('/contact')} className={primaryBtn}>
                  Ask about a specific market
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* The country ledger, read across. Counts are data, so the
                numerals are earned; the total carries the gold. */}
            <dl
              className="rise mt-12 grid grid-cols-2 border-t border-[var(--color-line-2)] sm:grid-cols-5"
              style={{ animationDelay: '240ms' }}
            >
              {REGION_COUNTS.map(([name, n], i) => (
                <div
                  key={name}
                  className={`flex flex-col-reverse justify-end gap-1.5 py-6 pr-4 ${
                    i > 0 ? 'sm:border-l sm:border-[var(--color-line)] sm:pl-5' : ''
                  }`}
                >
                  <dt className="text-body-sm leading-snug text-[var(--color-ink-2)]">{name}</dt>
                  <dd className="font-mono text-h4 leading-none tabular-nums text-[var(--color-grass)]">{n}</dd>
                </div>
              ))}
              <div className="col-span-2 flex flex-col-reverse justify-end gap-1.5 border-t border-[var(--color-line)] py-6 sm:col-span-1 sm:border-t-0 sm:border-l sm:border-[var(--color-line-strong)] sm:pl-5">
                <dt className="text-body-sm leading-snug text-[var(--color-ink)]">Africa, total</dt>
                <dd className="font-mono text-h3 leading-none tabular-nums text-[var(--color-accent)]">45</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      {/* ── The map and the four regions ───────────────────────────────── */}
      <Section id="regions" tone="ground-2" band="normal" width="wide" className="dot-grid">
        <div className="mb-10 grid grid-cols-1 gap-x-12 gap-y-5 border-b border-[var(--color-line)] pb-8 lg:grid-cols-12 lg:items-end">
          <h2 className="text-h3 lg:col-span-5">
            <Rule />
            Four regions, one base.
          </h2>
          <p className="measure text-lead text-[var(--color-ink-2)] lg:col-span-4 lg:col-start-6">
            Select a region to see its focus markets and the regulatory and commercial context that
            shapes work there.
          </p>
          <div className="lg:col-span-3 lg:col-start-10 lg:flex lg:justify-end">
            <button onClick={() => navigate('/explore')} className={`${linkCls} lg:text-right`}>
              Compose a brief for a market and capability
              <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          {/* On wide screens the map takes three columns and the region
              panel nine, so the panel's three reading columns open up and
              the two sides finish close to the same line. */}
          <AfricaInteractiveMap
            selectedRegionId={selectedRegionId}
            onRegionSelect={(id) => setSelectedRegionId(id)}
            className="xl:[&>div:first-child]:col-span-3 xl:[&>div:last-child]:col-span-9"
          />
        </motion.div>
      </Section>

      {/* ── The model: focus markets are not offices, and why one base
          carries the continent. The page's one emerald band. ──────────── */}
      <Section tone="emerald" band="normal" width="wide">
        <motion.div
          className="grid grid-cols-1 gap-x-14 gap-y-6 lg:grid-cols-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.08)}
        >
          <motion.h2 variants={fadeUp} className="text-h3 lg:col-span-4">
            <Rule />
            Focus markets, not offices.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead text-[var(--color-ink-strong)] lg:col-span-4 lg:pt-7">
            Twelve markets carry depth of coverage: Kenya, Nigeria, South Africa, Egypt, Ghana,
            Ethiopia, Tanzania, Uganda, Rwanda, Morocco, Côte d&apos;Ivoire and Zambia.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-body text-[var(--color-ink-2)] lg:col-span-4 lg:border-l lg:border-[var(--color-accent-deep)] lg:pl-10 lg:pt-7"
          >
            Depth means accumulated regulatory and commercial knowledge of that market, plus
            associates who live and work in it. It does not mean a branch, a desk or a team on the
            ground. Nairobi is the only office, and any consultancy that marks a continent with a
            dozen pins should be asked which of them it actually staffs.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-8 border-t border-[var(--color-line-2)] pt-10 lg:grid-cols-12">
          <motion.h2
            className="text-h4 lg:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            Why Nairobi carries the continent.
          </motion.h2>
          <motion.dl
            className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3 lg:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerChildren(0.08)}
          >
            {WHY_NAIROBI.map(([term, body]) => (
              <motion.div key={term} variants={fadeUp} className="border-t border-[var(--color-accent-deep)] pt-4">
                <dt className="text-h5 text-[var(--color-ink-strong)]">{term}</dt>
                <dd className="mt-3 text-body-sm text-[var(--color-ink-2)]">{body}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </Section>

      {/* ── Europe and the United States: heading left, two corridors
          side by side on a hairline grid ───────────────────────────────── */}
      <Section band="tight" width="wide">
        <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2 className="text-h3">
              <Rule />
              Europe and the United States.
            </h2>
            <p className="mt-5 text-lead text-[var(--color-ink-2)]">
              Two corridors, both run from Nairobi. The work is African market work commissioned from
              abroad — not a second and third home market.
            </p>
          </motion.div>
          <motion.dl
            className="grid grid-cols-1 gap-px border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2 lg:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerChildren(0.1)}
          >
            {CORRIDORS.map(([term, body]) => (
              <motion.div key={term} variants={fadeUp} className="bg-[var(--color-ground)] p-6 sm:p-8 xl:p-10">
                <dt className="font-display text-h3 text-[var(--color-ink-strong)]">{term}</dt>
                <dd className="mt-5 text-body text-[var(--color-ink-2)]">{body}</dd>
              </motion.div>
            ))}
          </motion.dl>
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
            <h2 className="text-h1">Start a conversation.</h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink-2)]">
              Name the market you are looking at. We will tell you what we know about it, and where
              our coverage would have to be built rather than drawn on.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
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
              <a
                href="mailto:info@mindcraftconsultancy.com"
                className="text-body text-[var(--color-ink)] underline decoration-[var(--color-accent-deep)] underline-offset-[6px] transition-colors hover:text-[var(--color-accent-2)] hover:decoration-[var(--color-accent)]"
              >
                info@mindcraftconsultancy.com
              </a>
            </div>
          </motion.div>

          <motion.dl
            className="grid grid-cols-1 gap-6 border-t border-[var(--color-line)] pt-8 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerChildren(0.08, 0.1)}
          >
            {[
              ['Office', 'Nairobi, Kenya — the only one'],
              ['Focus markets', 'Twelve, across four African regions'],
              ['Corridors', 'Europe · United States'],
            ].map(([k, v]) => (
              <motion.div key={k} variants={fadeUp}>
                <dt className="font-[family-name:var(--font-display)] text-body-sm font-medium text-[var(--color-accent)]">{k}</dt>
                <dd className="mt-1.5 text-body text-[var(--color-ink)]">{v}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </Section>
    </div>
  );
};
