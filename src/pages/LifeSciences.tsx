import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container, SectionHead } from '../components/layout/Section';
import { LifeSciencesEcosystemDiagram } from '../components/LifeSciencesEcosystemDiagram';
import { fadeUp, staggerChildren, viewportOnce } from '../lib/motion';

/* Corridors are described as work MindCraft takes on, never as work already
   delivered. Established 2026 — there is no engagement history to cite, and
   no figure here that the source documents do not support. */
const CORRIDORS = [
  {
    id: 'cold-chain',
    title: 'Cold chain and last-mile integrity',
    lead: 'Biologics, vaccines and recombinant therapies need an unbroken 2–8°C or −20°C chain. The exposure is rarely the depot — it is the transit leg and the border yard.',
    corridor: 'Northern Corridor · Mombasa → Nairobi → Kampala → Kigali',
    corridor2: 'Central Corridor · Dar es Salaam → Dodoma → Bujumbura',
    items: [
      {
        name: 'Telemetry and logger auditing',
        body: 'Verification of GSM logger records against transit legs, to locate where thermal excursions occur rather than that they occurred.',
      },
      {
        name: 'Solar direct drive depot assessment',
        body: 'WHO PQS-referenced solar refrigeration mapping for decentralised vaccine hub distribution.',
      },
    ],
  },
  {
    id: 'trial-sites',
    title: 'Trial site feasibility',
    lead: 'Africa hosts a small share of global clinical trials relative to its population and genetic diversity. Sponsor feasibility work depends on knowing which sites can actually carry a protocol.',
    corridor: 'Kenya · Uganda · Nigeria · South Africa',
    corridor2: 'Academic and referral hospital networks',
    items: [
      {
        name: 'Investigator site assessment',
        body: 'Feasibility review covering Phase II/III protocol capacity, biobanking sovereignty and ethics review turnaround.',
      },
      {
        name: 'Consent and community engagement design',
        body: 'Vernacular consent protocols and community advisory board frameworks built for the study population.',
      },
    ],
  },
];

/* Named in the Corporate Profile as the Life-Sciences-specific AI work. */
const LS_AI = [
  {
    name: 'Pharmacovigilance and adverse-event monitoring',
    body: 'AI-assisted case intake, signal detection and reporting built to sit inside existing safety workflows.',
  },
  {
    name: 'Regulatory intelligence automation',
    body: 'Continuous monitoring of guidance and requirement changes across African and international regulators.',
  },
  {
    name: 'KOL identification and market-access analytics',
    body: 'Influence mapping and access-pathway analysis for therapy areas and territories under evaluation.',
  },
];

const AUTHORITIES = [
  {
    abbr: 'PPB',
    where: 'Kenya',
    name: 'Pharmacy and Poisons Board',
    scope: 'Dossier review, pharmacovigilance portal submissions, GMP inspection and EAC joint assessment.',
  },
  {
    abbr: 'NAFDAC',
    where: 'Nigeria',
    name: 'National Agency for Food and Drug Administration and Control',
    scope: 'Import permits, product registration and renewal, serialisation and track-and-trace compliance.',
  },
  {
    abbr: 'SAHPRA',
    where: 'South Africa',
    name: 'South African Health Products Regulatory Authority',
    scope: 'eCTD format compliance, Section 21 access, medical device licensing and clinical trial registration.',
  },
  {
    abbr: 'TMDA',
    where: 'Tanzania',
    name: 'Tanzania Medicines and Medical Devices Authority',
    scope: 'EAC mutual recognition, port-of-entry sampling and post-registration variation.',
  },
  {
    abbr: 'NDA',
    where: 'Uganda',
    name: 'National Drug Authority',
    scope: 'Post-market surveillance, institutional import licensing, essential medicines listing and cold-store audit.',
  },
  {
    abbr: 'AMA',
    where: 'Continental',
    name: 'African Medicines Agency',
    scope: 'Treaty-based harmonisation, centralised review for complex biologics, AfCFTA pharmaceutical trade.',
  },
];

const linkCls =
  'group inline-flex items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)] cursor-pointer';

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';

const ghostBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge border border-[var(--color-line-strong)] px-7 py-4 text-body-sm text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink-strong)]';

/* The short gold rule that opens every section head on the site. */
const Rule = () => <span className="mb-5 block h-[2px] w-10 bg-[var(--color-accent)]" aria-hidden="true" />;

export const LifeSciences: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ── Hero: the photograph bleeds to the right edge; the claim holds
          the left. Same composition as Home, so the practice page reads as
          part of the same publication. ─────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[42%]">
          <figure className="rise relative h-[46vh] min-h-[300px] lg:h-full" style={{ animationDelay: '240ms' }}>
            <img
              src="/assets/images/african_medical_diagnostics_1788986720251.jpg"
              alt="Clinical director validating automated instrumentation in an accredited diagnostic laboratory"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            {/* Foot shadow only, so the caption reads — the photo stays lit. */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--color-ground-deep)]/85 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-6 pb-5 lg:px-8">
              <span className="text-caption text-[var(--color-ink)]">Clinical and molecular validation</span>
              <span className="text-caption text-[var(--color-accent)]">PPB · NAFDAC · SAHPRA</span>
            </figcaption>
          </figure>
        </div>

        <Container width="wide" className="relative">
          <div className="flex flex-col justify-center py-12 lg:min-h-[min(calc(100svh-var(--header-h)),720px)] lg:w-[54%] lg:py-[clamp(48px,7vh,88px)]">
            <h1 className="rise text-display" style={{ animationDelay: '0ms' }}>
              Life Sciences is where we go deepest.
            </h1>
            <p
              className="rise measure mt-8 text-lead text-[var(--color-ink-2)]"
              style={{ animationDelay: '120ms' }}
            >
              The founding heritage and core specialisation of MindCraft. Six sub-sectors, from
              molecule to hospital ward — read through African regulatory structure, clinical
              practice and commercial reality at the same time.
            </p>

            <div className="rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '200ms' }}>
              <button onClick={() => navigate('/contact?industry=Life%20Sciences')} className={primaryBtn}>
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
              <button onClick={() => navigate('/explore?industry=Pharmaceuticals')} className={ghostBtn}>
                Compose a scenario
                <ArrowRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── The thesis: statement, then its two registers, read across ─── */}
      <Section tone="ground-2" band="tight" width="wide">
        <motion.div
          className="grid grid-cols-1 gap-x-14 gap-y-6 lg:grid-cols-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.08)}
        >
          <motion.h2 variants={fadeUp} className="text-h3 lg:col-span-4">
            <Rule />
            Clinical language and commercial language, in one room.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lead text-[var(--color-ink)] lg:col-span-4 lg:pt-7">
            Healthcare advisory in Africa tends to split. One side speaks policy and public health
            and stops at the recommendation. The other speaks margin and market entry and treats
            the clinical detail as someone else&apos;s problem.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-body text-[var(--color-ink-2)] lg:col-span-4 lg:border-l lg:border-[var(--color-line-2)] lg:pl-10 lg:pt-7"
          >
            MindCraft works in both registers: bioequivalence, pharmacokinetics and trial endpoints
            on one side; distributor margin structure, cold-chain service levels and public tender
            pricing on the other. A regulatory pathway that ignores the commercial model is not a
            plan, and a commercial model that ignores the pathway is not a plan either.
          </motion.p>
        </motion.div>
      </Section>

      {/* ── The six sub-sectors — the page's one emerald band ──────────── */}
      <Section id="sub-sectors" tone="emerald" band="normal" width="wide">
        <SectionHead
          title="Six sub-sectors, each with its own structure."
          lead="Select a sub-sector to see its regulatory context, market conditions and the work MindCraft takes on within it."
          meta={
            <span className="flex items-baseline gap-2.5">
              <span className="font-[family-name:var(--font-display)] text-h3 font-light leading-none tabular-nums text-[var(--color-accent)]">
                6
              </span>
              <span className="text-body-sm text-[var(--color-ink-2)]">sub-sectors</span>
            </span>
          }
          className="mb-10 !border-[var(--color-line-2)]"
        />
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <LifeSciencesEcosystemDiagram />
        </motion.div>
      </Section>

      {/* ── Operational corridors: two panels side by side, hairline-split ─ */}
      <Section band="normal" width="wide">
        <SectionHead
          title="Where Life Sciences work actually gets hard."
          lead="Two places where a sound strategy fails on physical and procedural ground, and where the sector work concentrates."
          className="mb-10"
        />

        <motion.div
          className="grid grid-cols-1 gap-px border border-[var(--color-line)] bg-[var(--color-line)] lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.1)}
        >
          {CORRIDORS.map((c) => (
            <motion.article
              key={c.id}
              variants={fadeUp}
              className="flex flex-col bg-[var(--color-ground)] p-6 sm:p-8 xl:p-10"
            >
              <h3 className="text-h4">{c.title}</h3>
              {/* Mono here is route and jurisdiction data, not a label. */}
              <div className="mt-4 space-y-1 font-mono text-caption text-[var(--color-ink-2)]">
                <p>{c.corridor}</p>
                <p>{c.corridor2}</p>
              </div>
              <p className="measure mt-6 text-lead text-[var(--color-ink)]">{c.lead}</p>
              <motion.dl
                className="mt-auto grid grid-cols-1 gap-x-10 gap-y-6 pt-8 sm:grid-cols-2"
                variants={staggerChildren(0.06)}
              >
                {c.items.map((it) => (
                  <motion.div key={it.name} variants={fadeUp} className="border-t border-[var(--color-accent-deep)] pt-4">
                    <dt className="text-body text-[var(--color-ink-strong)]">{it.name}</dt>
                    <dd className="mt-2 text-body-sm text-[var(--color-ink-2)]">{it.body}</dd>
                  </motion.div>
                ))}
              </motion.dl>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      {/* ── Life-Sciences-specific AI: three columns read across ───────── */}
      <Section tone="ground-2" band="normal" width="wide">
        <SectionHead
          title="AI built for this sector, not adapted to it."
          lead="Three areas where the enterprise AI practice is written against Life Sciences workflows rather than generalised from another industry."
          action={
            <button onClick={() => navigate('/what-we-do/ai-enterprise-solutions')} className={`${linkCls} min-h-[44px]`}>
              AI Enterprise Solutions
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          }
          className="mb-0 border-b-0 pb-10"
        />

        <motion.dl
          className="grid grid-cols-1 border-t border-[var(--color-line-2)] md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.08)}
        >
          {LS_AI.map((a, i) => (
            <motion.div
              key={a.name}
              variants={fadeUp}
              className={`border-b border-[var(--color-line)] py-7 md:border-b-0 md:pt-8 md:pb-2 ${
                i > 0 ? 'md:border-l md:pl-8 xl:pl-10' : ''
              } ${i < LS_AI.length - 1 ? 'md:pr-8 xl:pr-10' : ''}`}
            >
              <dt className="text-h5 text-[var(--color-ink-strong)]">{a.name}</dt>
              <dd className="mt-3 text-body text-[var(--color-ink-2)]">{a.body}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </Section>

      {/* ── Regulatory authorities: heading holds the left, a 3 × 2 ledger
          the right — six authorities, one hairline grid ───────────────── */}
      <Section band="normal" width="wide">
        <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <div className="lg:sticky lg:top-28">
              <h2 className="text-h3">
                <Rule />
                The authorities the work runs against.
              </h2>
              <p className="mt-5 text-body text-[var(--color-ink-2)]">
                Submission, compliance and surveillance work is shaped by the authority that governs
                it. These are the ones that matter most across African markets.
              </p>
            </div>
          </motion.div>

          <motion.dl
            className="grid grid-cols-1 gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:col-span-9 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerChildren(0.06)}
          >
            {AUTHORITIES.map((a) => (
              <motion.div key={a.abbr} variants={fadeUp} className="bg-[var(--color-ground)] p-6 xl:p-7">
                <dt>
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-h4 text-[var(--color-ink-strong)]">{a.abbr}</span>
                    <span className="text-caption text-[var(--color-green)]">{a.where}</span>
                  </span>
                  <span className="mt-3 block text-body text-[var(--color-ink)]">{a.name}</span>
                </dt>
                <dd className="mt-3 text-body-sm text-[var(--color-ink-2)]">{a.scope}</dd>
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
            <h2 className="text-h2">Start a Life Sciences conversation.</h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink-2)]">
              A registration pathway, a launch, a distributor problem, a hospital operating model, a
              safety workflow that will not scale. Tell us which one, and we will tell you honestly
              whether we are the right partner for it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <button onClick={() => navigate('/contact?industry=Life%20Sciences')} className={primaryBtn}>
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

          <motion.div
            className="border-t border-[var(--color-line)] pt-8 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <p className="text-body text-[var(--color-ink-2)]">
              Life Sciences runs across all four capabilities — research, advisory, enterprise AI and
              training — as one engagement rather than four.
            </p>
            <button onClick={() => navigate('/what-we-do')} className={`${linkCls} mt-6`}>
              How the engine works
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};
