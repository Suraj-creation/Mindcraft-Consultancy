import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Section, Container } from '../components/layout/Section';
import { fadeUp, staggerChildren, viewportOnce } from '../lib/motion';

/* Vision and Mission are quoted from the corporate profile, not paraphrased.
   The source wording is the claim. */
const MANDATE = [
  {
    term: 'Vision',
    body: 'To be Africa’s most trusted partner for AI-powered business growth — recognised globally for combining deep Life Sciences expertise with practical, ethical and impactful artificial intelligence adoption.',
  },
  {
    term: 'Mission',
    body: 'To equip organisations across Africa, Europe and the United States with the market intelligence, strategic advisory and AI capability they need to compete, grow and lead in their industries — with a special commitment to advancing Life Sciences enterprises operating in and around the African continent.',
  },
];

/* The source voice defines itself by negation. These keep that register. */
const PRINCIPLES: [string, string][] = [
  ['Empirical grounding', 'Findings come from primary fieldwork in the market being studied — not recycled secondary decks or remote assumption.'],
  ['Responsible governance', 'Privacy, ethics and data sovereignty are designed into AI systems at the start, not audited in afterwards.'],
  ['Clinical authenticity', 'Life Sciences work is done in Life Sciences language — regulatory, clinical and commercial — not generic healthcare framing.'],
  ['Human judgement', 'Models narrow the question. People decide. Every output is built to be argued with.'],
];

const FACTS: [string, string][] = [
  ['Founded', '2026'],
  ['Headquarters', 'Nairobi, Kenya'],
  ['Core specialisation', 'Life Sciences'],
  ['African coverage', '45 markets, four regions'],
  ['Also serving', 'Europe · United States'],
];

const linkCls =
  'group inline-flex cursor-pointer items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)]';

const primaryBtn =
  'group inline-flex cursor-pointer items-center gap-2.5 rounded-edge bg-[var(--color-accent)] px-7 py-4 text-body-sm font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]';

const ruleCls = 'mb-5 block h-[2px] w-10 bg-[var(--color-accent)]';

export const About: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ── Hero: the statement holds the left, Nairobi bleeds off the right
          edge. The record of facts reads across as one rail. ─────────── */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <Container width="wide" className="relative">
          <div className="pb-10 pt-12 lg:w-[56%] lg:pb-[clamp(40px,5vh,64px)] lg:pr-12 lg:pt-[clamp(48px,7vh,88px)]">
            <h1 className="rise text-display">
              African in context.
              <br className="hidden sm:block" /> Global in ambition.
            </h1>
            <p
              className="rise measure mt-7 text-lead text-[var(--color-ink-2)]"
              style={{ animationDelay: '80ms' }}
            >
              MindCraft Consultancy Services was established in Nairobi in 2026 to close one
              specific gap: the absence of a single trusted partner that combines deep sector
              expertise with practical, applied artificial intelligence capability.
            </p>

            <dl
              className="rise mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 2xl:grid-cols-5"
              style={{ animationDelay: '160ms' }}
            >
              {FACTS.map(([k, v]) => (
                <div key={k} className="border-t border-[var(--color-line-2)] pt-4">
                  <dt className="font-display text-body-sm font-medium text-[var(--color-ink-3)]">{k}</dt>
                  <dd className="mt-1.5 text-body leading-snug text-[var(--color-ink-strong)]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>

        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[40%]">
          <figure className="rise relative h-[42vh] min-h-[280px] lg:h-full" style={{ animationDelay: '220ms' }}>
            <img
              src="/assets/images/nairobi_architecture_1788983991343.jpg"
              alt="Contemporary commercial architecture in Nairobi"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            {/* A foot shadow only, so the caption reads — the photo stays lit. */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-ground-deep)]/85 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline justify-between gap-4 px-6 pb-5 lg:px-8">
              <span className="text-caption text-[var(--color-ink)]">Nairobi, Kenya — the only office</span>
              <span className="font-mono text-eyebrow tracking-[0.08em] text-[var(--color-accent)]">
                1°17′S 36°49′E
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── The founding mandate — the page's one emerald band. The argument
          and the two quoted statements read across as three columns. ── */}
      <Section tone="emerald" band="normal" width="wide">
        <motion.div
          className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerChildren(0.1)}
        >
          <motion.div className="lg:col-span-4" variants={fadeUp}>
            <h2 className="text-h3">
              <span className={ruleCls} aria-hidden="true" />
              Why the firm exists.
            </h2>
            <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
              Sector specialists rarely build software. Technology firms rarely understand a
              regulatory dossier. MindCraft was founded on the argument that those two capabilities
              belong in one engagement.
            </p>
          </motion.div>

          {MANDATE.map((m) => (
            <motion.div
              key={m.term}
              variants={fadeUp}
              className="border-t border-[var(--color-line-2)] pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
            >
              {/* Global heading colour is unlayered, so the gold goes on the span. */}
              <h3 className="text-body-sm">
                <span className="font-medium text-[var(--color-accent)]">{m.term}</span>
              </h3>
              <p className="mt-4 text-lead text-[var(--color-ink-strong)]">{m.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ── How the work is held to account: four principles read across ── */}
      <Section band="tight" width="wide">
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2 className="text-h3">
              <span className={ruleCls} aria-hidden="true" />
              What we hold ourselves to.
            </h2>
          </motion.div>
          <motion.dl
            className="grid grid-cols-1 gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 xl:grid-cols-4 lg:col-span-9"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerChildren(0.08)}
          >
            {PRINCIPLES.map(([term, body]) => (
              <motion.div key={term} variants={fadeUp} className="bg-[var(--color-ground)] p-6 xl:p-7">
                <dt className="text-h5 text-[var(--color-ink-strong)]">{term}</dt>
                <dd className="mt-3 text-body text-[var(--color-ink-2)]">{body}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </Section>

      {/* ── Nairobi and the team: two short arguments, side by side ────── */}
      <Section tone="ground-2" band="normal" width="wide" rule>
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2">
          <motion.div
            className="lg:pr-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2 className="text-h3">
              <span className={ruleCls} aria-hidden="true" />
              Nairobi is the position, not just the address.
            </h2>
            <p className="measure mt-6 text-body text-[var(--color-ink-2)]">
              The firm sits where East African regulatory institutions, regional trade corridors and
              the region&apos;s densest concentration of technical talent already meet. That is what
              makes a single Nairobi base workable across the continent — proximity to the bodies
              that set the rules, and to the people who can build against them.
            </p>
            <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
              It is the only office. Everywhere else on the map is a focus market reached through an
              associate network, and the site says so wherever it shows a country.
            </p>
            <button onClick={() => navigate('/where-we-work')} className={`${linkCls} mt-7`}>
              Where we work
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div
            className="border-t border-[var(--color-line)] pt-12 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2 className="text-h3">
              <span className={ruleCls} aria-hidden="true" />
              The team.
            </h2>
            <p className="measure mt-6 text-lead text-[var(--color-ink)]">
              A core team in Nairobi and a growing network of associates and partners.
            </p>
            <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
              The firm was established in 2026, so there is no long client list to publish and none
              is invented here. What can be stated is how the work is staffed: research, strategy,
              engineering and training capability held in one team, extended into focus markets
              through associates who work in those markets. Partnerships are actively being built
              rather than claimed.
            </p>
            <p className="measure mt-5 text-body text-[var(--color-ink-2)]">
              Judge the firm on the specificity of the questions it asks in the first conversation.
              That is the honest test at this stage, and it is the one we would rather be measured on.
            </p>
          </motion.div>
        </div>
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
              Tell us the decision you are facing. We will tell you honestly whether we are the right
              partner for it.
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
