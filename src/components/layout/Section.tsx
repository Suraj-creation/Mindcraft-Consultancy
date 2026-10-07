import React from 'react';

/**
 * Section rhythm and width are props, not copy-paste. The previous build
 * repeated one container 69 times and one padding 33 times, which is what
 * read as templated. Varying tone/band/width is the whole point.
 */

type Tone = 'ground' | 'ground-2' | 'raised' | 'deep' | 'emerald';
type Band = 'tight' | 'normal' | 'loose';
type Width = 'text' | 'default' | 'wide';

const TONE: Record<Tone, string> = {
  ground: 'bg-[var(--color-ground)]',
  'ground-2': 'bg-[var(--color-ground-2)]',
  raised: 'bg-[var(--color-raised)]',
  deep: 'bg-[var(--color-ground-deep)]',
  emerald: 'bg-[var(--color-emerald)]',
};

const BAND: Record<Band, string> = {
  tight: 'py-[var(--band-tight)]',
  normal: 'py-[var(--band)]',
  loose: 'py-[var(--band-loose)]',
};

const WIDTH: Record<Width, string> = {
  text: 'max-w-[var(--container-text)]',
  default: 'max-w-[var(--container)]',
  wide: 'max-w-[var(--container-wide)]',
};

export const Container: React.FC<{
  width?: Width;
  className?: string;
  children: React.ReactNode;
}> = ({ width = 'default', className = '', children }) => (
  <div className={`${WIDTH[width]} mx-auto px-[var(--gutter)] ${className}`}>{children}</div>
);

export const Section: React.FC<{
  id?: string;
  tone?: Tone;
  band?: Band;
  width?: Width;
  rule?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ id, tone = 'ground', band = 'normal', width = 'default', rule = false, className = '', children }) => (
  <section
    id={id}
    className={`${TONE[tone]} ${BAND[band]} ${rule ? 'border-t border-[var(--color-line)]' : ''} ${className}`}
  >
    <Container width={width}>{children}</Container>
  </section>
);

/**
 * Section heading. Deliberately has no eyebrow slot — a label that only
 * restates the heading is deleted, not styled. Mono metadata that carries a
 * real fact goes in `meta`.
 *
 * On wide screens the heading and its lead sit side by side on one baseline
 * band instead of stacking: the canvas is wide, and a stacked head spends
 * three lines of height on what one line of width can hold.
 */
export const SectionHead: React.FC<{
  title: string;
  lead?: string;
  meta?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}> = ({ title, lead, meta, action, className = '' }) => (
  <div
    className={`grid grid-cols-1 gap-x-12 gap-y-5 border-b border-[var(--color-line)] pb-8 lg:grid-cols-12 lg:items-end ${className}`}
  >
    <h2 className="text-h3 lg:col-span-5">
      <span className="mb-5 block h-[2px] w-10 bg-[var(--color-accent)]" aria-hidden="true" />
      {title}
    </h2>
    {lead && (
      <p className="measure text-lead text-[var(--color-ink-2)] lg:col-span-5 lg:col-start-6">{lead}</p>
    )}
    {(meta || action) && (
      <div
        className={`flex shrink-0 items-center gap-5 lg:justify-end ${
          lead ? 'lg:col-span-2 lg:col-start-11' : 'lg:col-span-7 lg:col-start-6'
        }`}
      >
        {meta}
        {action}
      </div>
    )}
  </div>
);
