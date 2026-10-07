import type { Transition, Variants } from 'motion/react';

/* Mirrors the tokens in index.css (--dur-slow, --ease-q) so JS-driven motion
   reads as the same system as the CSS "rise" entrance, not a second one. */
export const EASE_Q = [0.16, 1, 0.3, 1] as const;
export const EASE = [0.2, 0.8, 0.2, 1] as const;

const revealTransition: Transition = { duration: 0.4, ease: EASE_Q };

/* Displacement capped at 12px per DESIGN.md's motion budget for reveals. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
};

/* Orchestrates fadeUp children in sequence instead of firing all at once —
   the reveal follows reading order, which is what makes it feel authored
   rather than a uniform effect stamped on every section. */
export const staggerChildren = (amount = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: amount, delayChildren: delay } },
});

export const viewportOnce = { once: true, margin: '-80px' } as const;

/* Hover budget: <=4px, transform/opacity only, no bounce or elastic easing. */
export const hoverLift = {
  rest: { y: 0 },
  hover: { y: -4, transition: { duration: 0.15, ease: EASE } },
};
