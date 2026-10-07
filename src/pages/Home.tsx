import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import {
  ENGAGEMENT_STAGES,
  DIFFERENTIATORS,
  BREADTH_INDUSTRIES,
  AUDIENCE_PATHWAYS,
} from '../data/landingData';
import { Section, Container, SectionHead } from '../components/layout/Section';
import { EngineVisualSpine } from '../components/EngineVisualSpine';
import { LifeSciencesEcosystemDiagram } from '../components/LifeSciencesEcosystemDiagram';
import { AfricaInteractiveMap } from '../components/AfricaInteractiveMap';
import { fadeUp, staggerChildren, viewportOnce } from '../lib/motion';

/* Real structural facts. The source supports every one of these — they do the
   work that fabricated metrics would otherwise be reached for. */
const GLANCE = [
  { value: '2026', label: 'Founded in Nairobi' },
  { value: '4', label: 'Integrated capabilities' },
  { value: '45', label: 'African markets, four regions' },
  { value: '12', label: 'Focus markets' },
  { value: '6', label: 'Life Sciences sub-sectors' },
];

const CAPABILITY_CHAIN = [
  { n: '01', name: 'Market Research', path: '/what-we-do/market-research' },
  { n: '02', name: 'Business Consulting', path: '/what-we-do/business-consulting' },
  { n: '03', name: 'AI Enterprise Solutions', path: '/what-we-do/ai-enterprise-solutions' },
  { n: '04', name: 'AI Training', path: '/what-we-do/ai-training' },
];

const INDUSTRIES = ['Pharmaceuticals', 'Medical Devices', 'Commercial Banking', 'Agribusiness'];
const GEOGRAPHIES = ['Kenya · East Africa', 'Nigeria · West Africa', 'South Africa · Southern', 'Egypt · North Africa'];
const CAPABILITIES = ['Market Research', 'Business Consulting', 'AI Enterprise Solutions', 'AI Training'];

const linkCls =
  'group inline-flex items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer whitespace-nowrap';

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';

export const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedRegionId, setSelectedRegionId] = useState<string>('east');
  const [industry, setIndustry] = useState(INDUSTRIES[0]);
  const [geography, setGeography] = useState(GEOGRAPHIES[0]);
  const [capability, setCapability] = useState(CAPABILITIES[0]);

  // Audience pathways point at sections on this page; scroll there rather
  // than routing to a path called "#engine".
  const go = (target: string) => {
    if (target.startsWith('#')) {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate(target);
    }
  };

  const selectCls =
    'w-full appearance-none bg-transparent border-0 border-b border-[var(--color-line-2)] pb-3 pt-2 text-h5 text-[var(--color-ink-strong)] cursor-pointer hover:border-[var(--color-accent)] focus:border-[var(--color-accent)] focus:outline-none transition-colors';

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────────
          The photograph bleeds to the right edge of the screen; the type
          holds the left. The whole fold — claim, proof, chain — fits one
          desktop screen. */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[42%]">
          <figure className="rise relative h-[46vh] min-h-[300px] lg:h-full" style={{ animationDelay: '240ms' }}>
            <img
              src="/assets/images/nairobi_skyline_dawn_1788985474957.jpg"
              alt="Nairobi's contemporary skyline at dawn"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            {/* Only a foot shadow, so the caption reads — the photo itself stays lit. */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-ground-deep)]/85 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline justify-between gap-4 px-6 pb-5 lg:px-8">
              <span className="text-caption text-[var(--color-ink)]">Upper Hill, Nairobi</span>
              <span className="font-mono text-eyebrow tracking-[0.08em] text-[var(--color-accent)]">
                1°17′S 36°49′E
              </span>
            </figcaption>
          </figure>
        </div>

        <Container width="wide" className="relative">
          <div className="flex flex-col justify-between lg:min-h-[min(calc(100svh-var(--header-h)),900px)] lg:w-[54%]">
            <div className="pt-12 lg:pt-[clamp(48px,7vh,96px)]">
              <p
                className="rise flex items-center gap-3 text-body-sm text-[var(--color-ink-2)]"
                style={{ animationDelay: '0ms' }}
              >
                <span aria-hidden="true" className="h-2.5 w-2.5 rotate-45 bg-[var(--color-accent)]" />
                Nairobi consultancy, founded 2026
              </p>

              <h1 className="rise mt-8 text-display" style={{ animationDelay: '80ms' }}>
                Sector depth,
                <br className="hidden sm:block" /> meet applied AI.
              </h1>

              <p
                className="rise measure mt-8 text-lead text-[var(--color-ink-2)]"
                style={{ animationDelay: '160ms' }}
              >
                A Nairobi-based consultancy uniting market research, business strategy, enterprise AI
                and executive training — anchored in Life Sciences and built for Africa.
              </p>

              <div className="rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '220ms' }}>
                <button onClick={() => navigate('/contact')} className={primaryBtn}>
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
                <button
                  onClick={() => go('#engine')}
                  className="group inline-flex cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-line-strong)] px-7 py-4 text-body-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink-strong)]"
                >
                  See how the engine works
                  <ArrowRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* The four capabilities are a chain, not four parallel cards.
               The numerals are information: the order is the argument. */}
            <ol className="rise mt-14 grid grid-cols-2 border-t border-[var(--color-line-2)] lg:mt-12 lg:grid-cols-4" style={{ animationDelay: '300ms' }}>
              {CAPABILITY_CHAIN.map((c, i) => (
                <li key={c.n} className="relative">
                  <button
                    onClick={() => navigate(c.path)}
                    className="group flex h-full w-full cursor-pointer flex-col gap-2 py-6 pr-6 text-left transition-colors"
                  >
                    <span className="font-mono text-eyebrow text-[var(--color-accent)]">{c.n}</span>
                    <span className="text-body text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent-2)] lg:text-h5">
                      {c.name}
                    </span>
                  </button>
                  {i < CAPABILITY_CHAIN.length - 1 && (
                    <ArrowRight
                      className="absolute right-3 top-6 hidden h-4 w-4 text-[var(--color-line-strong)] lg:block"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ── Glance strip — five real facts, gold figures on the deepest ground ── */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-ground-deep)]">
        <Container width="wide">
          <motion.dl
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerChildren(0.07)}
          >
            {GLANCE.map((g, i) => (
              <motion.div
                key={g.label}
                variants={fadeUp}
                className={`flex flex-col gap-2 py-6 lg:py-8 xl:flex-row xl:items-baseline xl:gap-4 ${
                  i > 0 ? 'lg:border-l lg:border-[var(--color-line)] lg:pl-8' : ''
                }`}
              >
                <dt className="sr-only">{g.label}</dt>
                <dd className="contents">
                  <span className="font-display text-h2 font-light tabular-nums leading-none text-[var(--color-accent)]">
                    {g.value}
                  </span>
                  <span className="text-body-sm leading-snug text-[var(--color-ink-2)]">{g.label}</span>
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </Container>
      </section>

      {/* ── The engine ─────────────────────────────────────────────────── */}
      <Section id="engine" band="normal" width="wide">
        <SectionHead
          title="Four disciplines, one continuous loop."
          lead="Research informs strategy, strategy guides AI investment, training makes adoption stick. The chain shows how they connect — not that all four are mandatory."
          action={
            <button onClick={() => navigate('/what-we-do')} className={linkCls}>
              All capabilities
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          }
          className="mb-10"
        />
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <EngineVisualSpine />
        </motion.div>
      </Section>

      {/* ── Life Sciences — the one emerald band: the deepest practice gets
          the most saturated ground on the page. ───────────────────────── */}
      <Section id="lifesciences" tone="emerald" band="normal" width="wide">
        <SectionHead
          title="Life Sciences is where we go deepest."
          lead="Founding heritage and core specialisation — regulatory fluency, clinical and commercial context across six sub-sectors."
          action={
            <button onClick={() => navigate('/industries/life-sciences')} className={linkCls}>
              The practice
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          }
          className="mb-10 !border-[var(--color-line-2)]"
        />
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <LifeSciencesEcosystemDiagram />
        </motion.div>
      </Section>

      {/* ── Industries: depth beside breadth, deliberately unequal ──────── */}
      <Section id="industries" band="normal" width="wide">
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
              Deep in Life Sciences. Broad across industry.
            </h2>
            <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
              Sector expertise is not evenly distributed, and the site does not pretend otherwise. Life
              Sciences carries a dedicated practice. Everything else draws on the same four capabilities.
            </p>
            <button onClick={() => navigate('/industries')} className={`${linkCls} mt-8`}>
              All industries
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>

          <div className="lg:col-span-8">
            {/* Depth: one wide gold-ruled row. Breadth: an even three-column index. */}
            <button
              onClick={() => navigate('/industries/life-sciences')}
              className="group flex w-full cursor-pointer items-center justify-between gap-6 border-y border-[var(--color-accent-deep)] bg-[var(--color-emerald)] px-6 py-5 text-left transition-colors hover:bg-[var(--color-surface)]"
            >
              <span className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                <span className="text-h5 text-[var(--color-ink-strong)]">Life Sciences</span>
                <span className="text-body-sm text-[var(--color-accent)]">Core expertise · six sub-sectors</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--color-accent)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
            <motion.ul
              className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 xl:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerChildren(0.03)}
            >
              {BREADTH_INDUSTRIES.map((name) => (
                <motion.li key={name} variants={fadeUp}>
                  <button
                    onClick={() => navigate('/industries')}
                    className="group flex w-full cursor-pointer items-center justify-between gap-4 border-b border-[var(--color-line)] py-4 text-left transition-colors hover:border-[var(--color-line-strong)]"
                  >
                    <span className="text-body text-[var(--color-ink-2)] transition-colors group-hover:text-[var(--color-ink-strong)]">
                      {name}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[var(--color-accent)] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </Section>

      {/* ── Geography ──────────────────────────────────────────────────── */}
      <Section id="geography" tone="ground-2" band="normal" width="wide" className="dot-grid">
        <SectionHead
          title="Rooted in Nairobi. Focused on Africa."
          lead="Nairobi to East Africa to the continent, with corridors into Europe and the United States. Forty-five markets across four regions — focus markets and an associate network, never independent offices."
          action={
            <button onClick={() => navigate('/where-we-work')} className={linkCls}>
              Where we work
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          }
          className="mb-10"
        />
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <AfricaInteractiveMap selectedRegionId={selectedRegionId} onRegionSelect={(id) => setSelectedRegionId(id)} />
        </motion.div>
      </Section>

      {/* ── Explorer: one row — question on the left, composer on the right ── */}
      <Section id="explore" tone="raised" band="tight" width="wide">
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <h2 className="text-h3">Compose your situation.</h2>
            <p className="mt-4 text-body text-[var(--color-ink-2)]">
              Pick an industry, a market and a capability. The brief shows how the three meet.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3">
              {[
                { label: 'Industry', value: industry, set: setIndustry, opts: INDUSTRIES },
                { label: 'Geography', value: geography, set: setGeography, opts: GEOGRAPHIES },
                { label: 'Capability', value: capability, set: setCapability, opts: CAPABILITIES },
              ].map((f) => (
                <div key={f.label}>
                  <label
                    htmlFor={`sel-${f.label}`}
                    className="block font-display text-body-sm font-medium text-[var(--color-ink-3)]"
                  >
                    {f.label}
                  </label>
                  <select id={`sel-${f.label}`} value={f.value} onChange={(e) => f.set(e.target.value)} className={selectCls}>
                    {f.opts.map((o) => (
                      <option key={o} value={o} className="bg-[var(--color-surface)] text-body">
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <p className="text-body text-[var(--color-ink)]">
                How MindCraft&apos;s {capability.toLowerCase()} applies to {industry.toLowerCase()} in{' '}
                {geography.split(' · ')[0]}.
              </p>
              <button
                onClick={() =>
                  navigate(
                    `/explore?industry=${encodeURIComponent(industry)}&geography=${encodeURIComponent(
                      geography
                    )}&capability=${encodeURIComponent(capability)}`
                  )
                }
                className="group inline-flex shrink-0 cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-accent)] px-6 py-3.5 text-body-sm text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-ground-deep)]"
              >
                Open this brief
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Differentiators: five columns read across, not five rows down ── */}
      <Section id="differentiators" band="normal" width="wide">
        <SectionHead
          title="Why the combination is the point."
          lead="Five reasons the four capabilities work better under one roof than across four vendors."
          className="mb-0 border-b-0 pb-10"
        />
        <motion.div
          className="grid grid-cols-1 border-t border-[var(--color-line-2)] md:grid-cols-2 xl:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.08)}
        >
          {DIFFERENTIATORS.map((d, i) => (
            <motion.article
              key={d.num}
              variants={fadeUp}
              className={`border-b border-[var(--color-line)] py-8 xl:border-b-0 xl:px-7 xl:py-10 ${
                i > 0 ? 'xl:border-l' : 'xl:pl-0'
              } ${i === DIFFERENTIATORS.length - 1 ? 'xl:pr-0' : ''}`}
            >
              <h3 className="text-h5 text-[var(--color-ink-strong)]">{d.title}</h3>
              <p className="mt-4 text-body text-[var(--color-accent-2)]">{d.statement}</p>
              <p className="mt-4 text-body-sm text-[var(--color-ink-2)]">{d.proof}</p>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      {/* ── Process: a rail, not six cards ──────────────────────────────── */}
      <Section id="how-we-work" tone="ground-2" band="normal" width="wide">
        <SectionHead
          title="How an engagement runs."
          lead="Six stages, start to follow-up. Not a branded framework — just how the work actually proceeds."
          action={
            <button onClick={() => navigate('/how-we-work')} className={linkCls}>
              In detail
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          }
          className="mb-0 border-b-0"
        />
        <motion.ol
          className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.06)}
        >
          {/* The rail: gold at the start, fading into structure. */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-[2px] bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-line-strong)] to-[var(--color-line-2)] lg:block"
          />
          {ENGAGEMENT_STAGES.map((s) => (
            <motion.li
              key={s.number}
              variants={fadeUp}
              className="relative border-t border-[var(--color-line-2)] pt-7 pb-6 pr-6 lg:border-t-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 hidden h-2.5 w-2.5 -translate-y-1 rotate-45 bg-[var(--color-accent)] lg:block"
              />
              <span className="font-mono text-eyebrow text-[var(--color-accent)]">{s.number}</span>
              <h3 className="mt-2 text-h5 text-[var(--color-ink-strong)]">{s.name}</h3>
              <p className="mt-3 text-body-sm text-[var(--color-ink-3)]">{s.objective}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* ── Who we serve ───────────────────────────────────────────────── */}
      <Section id="audiences" band="normal" width="wide">
        <SectionHead
          title="Find your way in."
          lead="MindCraft is built for six kinds of decision-maker. Start from the one closest to yours."
          className="mb-10"
        />
        <motion.ul
          className="grid grid-cols-1 gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.06)}
        >
          {AUDIENCE_PATHWAYS.map((a) => (
            <motion.li key={a.id} variants={fadeUp}>
              <button
                onClick={() => go(a.targetUrl)}
                className="group flex h-full w-full cursor-pointer flex-col bg-[var(--color-ground)] p-7 text-left transition-colors hover:bg-[var(--color-raised)]"
              >
                <span className="text-h5 text-[var(--color-ink-strong)]">{a.role}</span>
                <span className="mt-3 flex-1 text-body-sm text-[var(--color-ink-2)]">{a.mandate}</span>
                <span className="mt-6 inline-flex items-center gap-2 text-body-sm text-[var(--color-accent)]">
                  {a.recommendedPath}
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* ── Closing ────────────────────────────────────────────────────── */}
      <section id="conversation" className="relative overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-ground-deep)] py-[var(--band)]">
        <Container width="wide">
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12 lg:items-end">
            <motion.div
              className="lg:col-span-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
            >
              <h2 className="text-display">Start a conversation.</h2>
              <p className="measure mt-6 text-lead text-[var(--color-ink-2)]">
                Tell us the decision you are facing. We will tell you honestly whether we are the right
                partner for it.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <button onClick={() => navigate('/contact')} className={primaryBtn}>
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
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
                ['Headquarters', 'Nairobi, Kenya'],
                ['Primary focus', 'Africa — 45 markets, four regions'],
                ['Also serving', 'Europe and the United States'],
              ].map(([k, v]) => (
                <motion.div key={k} variants={fadeUp}>
                  <dt className="font-display text-body-sm font-medium text-[var(--color-accent)]">{k}</dt>
                  <dd className="mt-1.5 text-body text-[var(--color-ink)]">{v}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </Container>
      </section>
    </div>
  );
};
