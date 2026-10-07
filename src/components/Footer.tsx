import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Container } from './layout/Section';

const COLUMNS: { heading: string; links: { label: string; to: string; accent?: boolean }[] }[] = [
  {
    // Chain order, matching the engine.
    heading: 'What we do',
    links: [
      { label: 'The engine', to: '/what-we-do' },
      { label: 'Market Research', to: '/what-we-do/market-research' },
      { label: 'Business Consulting', to: '/what-we-do/business-consulting' },
      { label: 'AI Enterprise Solutions', to: '/what-we-do/ai-enterprise-solutions' },
      { label: 'AI Training', to: '/what-we-do/ai-training' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Life Sciences', to: '/industries/life-sciences', accent: true },
      { label: 'All industries', to: '/industries' },
      { label: 'Explore a combination', to: '/explore' },
    ],
  },
  {
    heading: 'Where we work',
    links: [
      { label: 'Nairobi and Africa', to: '/where-we-work' },
      { label: 'East Africa', to: '/where-we-work' },
      { label: 'West Africa', to: '/where-we-work' },
      { label: 'Southern Africa', to: '/where-we-work' },
      { label: 'North Africa', to: '/where-we-work' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'How we work', to: '/how-we-work' },
      { label: 'Insights', to: '/insights' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <footer className="border-t border-[var(--color-accent-deep)] bg-[var(--color-ground-deep)] pt-14 pb-10 text-[var(--color-ink-2)]">
      <Container width="wide">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href="/"
              onClick={(e) => {
                if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault();
                navigate('/');
              }}
              className="inline-block rounded-edge"
              aria-label="MindCraft Consultancy — home"
            >
              <img
                src="/assets/images/brand/mindcraft-stacked-reverse.webp"
                alt=""
                width={136}
                height={100}
                className="h-[100px] w-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="measure-sm mt-5 font-body text-lead italic text-[var(--color-ink)]">
              Building AI-powered growth for Life Sciences and industry across Africa and beyond.
            </p>
            <p className="mt-6 font-mono text-eyebrow tracking-[0.06em] text-[var(--color-ink-3)]">
              1°17′S 36°49′E
            </p>
            <a
              href="mailto:info@mindcraftconsultancy.com"
              className="mt-3 inline-block text-body-sm text-[var(--color-accent)] underline decoration-[var(--color-line-strong)] underline-offset-4 transition-colors hover:decoration-[var(--color-accent)]"
            >
              info@mindcraftconsultancy.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:col-span-7 lg:grid-cols-4">
            {COLUMNS.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="border-b border-[var(--color-line)] pb-3 font-display text-body-sm font-medium tracking-normal text-[var(--color-accent)]">
                  {col.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <button
                        onClick={() => navigate(l.to)}
                        className={`cursor-pointer text-left text-body-sm transition-colors hover:text-[var(--color-ink-strong)] ${
                          l.accent ? 'text-[var(--color-accent)]' : 'text-[var(--color-ink-2)]'
                        }`}
                      >
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-[var(--color-line)] pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-caption text-[var(--color-ink-3)]">
            <span>© 2026 MindCraft Consultancy Services</span>
            <span aria-hidden="true">·</span>
            <span>Nairobi is our only office</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('/contact')}
              className="group inline-flex cursor-pointer items-center gap-2 text-body-sm text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-2)]"
            >
              Start a conversation
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="cursor-pointer p-2 text-[var(--color-ink-3)] transition-colors hover:text-[var(--color-ink)]"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
