import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, ArrowUpRight, ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { PILLAR_MENU } from '../data/navigation';
import { VERTICALS, VERTICAL_GROUPS, LIFE_SCIENCES_SUBSECTORS } from '../data/industries';
import { EASE_Q } from '../lib/motion';

type MenuId = 'wwd' | 'ind';

/* Explore is deliberately not a top-level item (CLAUDE.md §17): it is
   surfaced inside both menus, where the visitor already has a question. */
const SIMPLE_LINKS = [
  { label: 'Where We Work', path: '/where-we-work' },
  { label: 'How We Work', path: '/how-we-work' },
  { label: 'About', path: '/about' },
  { label: 'Insights', path: '/insights' },
];

const LOGO_SRC = '/assets/images/brand/mindcraft-lockup-reverse.webp';

/* Real anchors, so links can be opened in a new tab and read by crawlers;
   plain left-clicks are handed to the SPA router. */
const NavAnchor: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string; go: (to: string) => void }
> = ({ to, go, children, onClick, ...rest }) => (
  <a
    href={to}
    onClick={(e) => {
      onClick?.(e);
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      go(to);
    }}
    {...rest}
  >
    {children}
  </a>
);

/* Top-level item: full bar height, so the gold indicator sits exactly on the
   header's bottom edge. */
const topItem =
  'relative flex h-full cursor-pointer items-center gap-1.5 font-display text-[0.9375rem] font-medium tracking-[-0.005em] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-center after:transition-transform after:duration-200';
const topOn = 'text-[var(--color-ink-strong)] after:scale-x-100 after:bg-[var(--color-accent)]';
const topOff =
  'text-[var(--color-ink-2)] hover:text-[var(--color-ink-strong)] after:scale-x-0 after:bg-[var(--color-line-strong)] hover:after:scale-x-100';

const panelLink =
  'group flex items-center justify-between gap-3 text-body-sm text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink-strong)] focus-visible:text-[var(--color-ink-strong)]';

export const Navigation: React.FC = () => {
  const { currentPath, navigate } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuId | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<MenuId, HTMLButtonElement | null>>({ wwd: null, ind: null });
  const panelRefs = useRef<Record<MenuId, HTMLDivElement | null>>({ wwd: null, ind: null });
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const openTimer = useRef<number | undefined>(undefined);
  const closeTimer = useRef<number | undefined>(undefined);
  const focusOnOpen = useRef<MenuId | null>(null);
  const lastPointer = useRef<string>('mouse');

  const clearTimers = () => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
  };

  const closeAll = () => {
    clearTimers();
    setOpenMenu(null);
    setMobileOpen(false);
  };

  const go = (path: string) => {
    closeAll();
    navigate(path);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Any route change closes every menu (covers back/forward too).
  useEffect(() => {
    clearTimers();
    setOpenMenu(null);
    setMobileOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  // Escape closes and hands focus back to whatever opened the menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (openMenu) {
        const trigger = triggerRefs.current[openMenu];
        setOpenMenu(null);
        trigger?.focus();
      } else if (mobileOpen) {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openMenu, mobileOpen]);

  // ArrowDown on a trigger opens its panel and moves focus to the first link.
  useEffect(() => {
    if (!openMenu || focusOnOpen.current !== openMenu) return;
    focusOnOpen.current = null;
    const id = requestAnimationFrame(() => {
      panelRefs.current[openMenu]?.querySelector<HTMLElement>('a, button')?.focus();
    });
    return () => cancelAnimationFrame(id);
  }, [openMenu]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => clearTimers, []);

  /* Hover intent, mouse only — a touch tap fires pointerenter too, and must
     not open on enter and then close on the click that follows. */
  const onItemEnter = (id: MenuId) => (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    clearTimers();
    if (openMenu) setOpenMenu(id);
    else openTimer.current = window.setTimeout(() => setOpenMenu(id), 90);
  };
  const onItemLeave = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    clearTimers();
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 180);
  };

  const onTriggerClick = (id: MenuId) => (e: React.MouseEvent) => {
    clearTimers();
    // A mouse click on a menu the hover already opened keeps it open.
    if (e.detail > 0 && lastPointer.current === 'mouse' && openMenu === id) return;
    setOpenMenu((cur) => (cur === id ? null : id));
  };

  const onTriggerKey = (id: MenuId) => (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusOnOpen.current = id;
      if (openMenu === id) {
        panelRefs.current[id]?.querySelector<HTMLElement>('a, button')?.focus();
      } else {
        setOpenMenu(id);
      }
    }
  };

  // Tabbing out past the last link in a panel closes it.
  const onItemBlur = (e: React.FocusEvent<HTMLLIElement>) => {
    const next = e.relatedTarget as Node | null;
    if (next && !e.currentTarget.contains(next)) setOpenMenu(null);
  };

  const isWwdActive = currentPath.startsWith('/what-we-do');
  const isIndActive = currentPath.startsWith('/industries');

  const panelMotion = {
    initial: { opacity: 0, y: -8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: EASE_Q } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.14 } },
  };

  const panelShell =
    'absolute inset-x-0 top-full z-10 max-h-[calc(100svh-var(--header-h))] overflow-y-auto border-y border-[var(--color-line-2)] bg-[var(--color-ground-deep)] shadow-[0_24px_60px_-24px_oklch(0.12_0.03_162/0.75)]';

  return (
    <header
      ref={headerRef}
      id="site-header"
      className="sticky top-0 z-50"
      onPointerDown={(e) => {
        lastPointer.current = e.pointerType;
      }}
    >
      {/* The bar's surface lives on its own layer: a backdrop-filter on the
          header itself would make it the containing block for the fixed
          backdrop and mobile menu below, trapping them inside the bar. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 border-b backdrop-blur-md transition-colors duration-200 ${
          isScrolled || openMenu || mobileOpen
            ? 'border-[var(--color-line-2)] bg-[var(--color-ground-deep)]/95'
            : 'border-[var(--color-line)] bg-[var(--color-ground-deep)]/80'
        }`}
      />

      {/* Dims the page while a menu is open; leaving the panel onto it closes. */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            key="backdrop"
            aria-hidden="true"
            className="fixed inset-x-0 bottom-0 top-[var(--header-h)] bg-[var(--color-ground-deep)]/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            onClick={() => setOpenMenu(null)}
          />
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        {/* Not positioned on purpose: the menu panels must resolve their
            `absolute inset-x-0` against the full-width header, not this row. */}
        <div className="flex h-[var(--header-h)] items-center justify-between gap-8">
          <NavAnchor
            to="/"
            go={go}
            id="nav-logo"
            className="flex shrink-0 items-center rounded-edge py-2"
            aria-label="MindCraft Consultancy — home"
          >
            <img
              src={LOGO_SRC}
              alt=""
              width={228}
              height={44}
              className="h-9 w-auto xl:h-11"
              decoding="async"
            />
          </NavAnchor>

          <nav id="desktop-nav" aria-label="Primary" className="hidden h-full xl:block">
            <ul className="flex h-full items-stretch gap-8 2xl:gap-10">
              {/* ── What We Do ─────────────────────────────────────────── */}
              <li onPointerEnter={onItemEnter('wwd')} onPointerLeave={onItemLeave} onBlur={onItemBlur}>
                <button
                  ref={(el) => {
                    triggerRefs.current.wwd = el;
                  }}
                  type="button"
                  onClick={onTriggerClick('wwd')}
                  onKeyDown={onTriggerKey('wwd')}
                  aria-expanded={openMenu === 'wwd'}
                  aria-controls="menu-what-we-do"
                  className={`${topItem} ${(openMenu ? openMenu === 'wwd' : isWwdActive) ? topOn : topOff}`}
                >
                  What We Do
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openMenu === 'wwd' ? 'rotate-180 text-[var(--color-accent)]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openMenu === 'wwd' && (
                    <motion.div
                      key="wwd"
                      id="menu-what-we-do"
                      ref={(el: HTMLDivElement | null) => {
                        panelRefs.current.wwd = el;
                      }}
                      className={panelShell}
                      {...panelMotion}
                    >
                      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] pt-9 pb-6">
                        <div className="grid grid-cols-12 gap-x-10 gap-y-8">
                          {/* Intro + the engine-level routes */}
                          <div className="col-span-3 flex flex-col justify-between pr-6">
                            <div>
                              <p className="font-display text-h4 text-[var(--color-ink-strong)]">
                                One engine, four disciplines.
                              </p>
                              <p className="mt-3 max-w-[46ch] text-body-sm text-[var(--color-ink-2)]">
                                Research informs strategy, strategy guides AI investment, training makes
                                adoption stick.
                              </p>
                            </div>
                            <ul className="mt-6">
                              {[
                                { label: 'The engine, end to end', to: '/what-we-do' },
                                { label: 'How an engagement runs', to: '/how-we-work' },
                                { label: 'Compose a brief in the Explorer', to: '/explore' },
                              ].map((l) => (
                                <li key={l.to} className="border-t border-[var(--color-line)]">
                                  <NavAnchor to={l.to} go={go} className={`${panelLink} min-h-[44px] py-2.5`}>
                                    {l.label}
                                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" />
                                  </NavAnchor>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* The four pillars, in chain order */}
                          <ol className="col-span-9 grid grid-cols-4 border-l border-[var(--color-line)]">
                            {PILLAR_MENU.map((p, i) => {
                              const here = currentPath === p.path;
                              return (
                                <li key={p.path} className="border-r border-[var(--color-line)]">
                                  <NavAnchor
                                    to={p.path}
                                    go={go}
                                    aria-current={here ? 'page' : undefined}
                                    className={`group relative flex h-full flex-col px-6 pt-5 pb-6 transition-colors hover:bg-[var(--color-raised)] focus-visible:bg-[var(--color-raised)] ${
                                      here ? 'bg-[var(--color-raised)]' : ''
                                    }`}
                                  >
                                    {/* Gold rule grows in on hover — the column is the link. */}
                                    <span
                                      aria-hidden="true"
                                      className={`absolute inset-x-0 top-0 h-[2px] origin-left bg-[var(--color-accent)] transition-transform duration-300 ${
                                        here ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100'
                                      }`}
                                    />
                                    <span className="flex items-center justify-between">
                                      <span className="font-mono text-eyebrow text-[var(--color-accent)]">{p.n}</span>
                                      {i < PILLAR_MENU.length - 1 && (
                                        <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 text-[var(--color-line-strong)]" />
                                      )}
                                    </span>
                                    <span className="mt-3 font-display text-h5 leading-tight text-[var(--color-ink-strong)] transition-colors group-hover:text-[var(--color-accent-2)]">
                                      {p.name}
                                    </span>
                                    {/* Two lines reserved so the four "includes" rules align across columns. */}
                                    <span className="mt-2 min-h-[2.75em] text-body-sm leading-snug text-[var(--color-ink-2)]">
                                      {p.summary}
                                    </span>
                                    <span className="mt-5 block border-t border-[var(--color-line)] pt-4">
                                      <span className="sr-only">Includes: </span>
                                      {p.includes.map((item) => (
                                        <span
                                          key={item}
                                          className="flex items-baseline gap-2.5 py-[3px] text-caption leading-snug text-[var(--color-ink-3)]"
                                        >
                                          <span aria-hidden="true" className="h-1 w-1 shrink-0 translate-y-[-2px] rotate-45 bg-[var(--color-green)]" />
                                          {item}
                                        </span>
                                      ))}
                                    </span>
                                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-body-sm text-[var(--color-accent)]">
                                      Explore<span className="sr-only"> {p.name}</span>
                                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                                    </span>
                                  </NavAnchor>
                                </li>
                              );
                            })}
                          </ol>
                        </div>

                        <div className="mt-6 flex items-center justify-between gap-6 border-t border-[var(--color-line)] pt-4">
                          <p className="text-caption text-[var(--color-ink-3)]">
                            The chain shows how the four connect — not that all four are mandatory.
                          </p>
                          <NavAnchor to="/contact" go={go} className={`${panelLink} !text-[var(--color-accent)] hover:!text-[var(--color-accent-2)]`}>
                            Start a conversation
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </NavAnchor>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* ── Industries ─────────────────────────────────────────── */}
              <li onPointerEnter={onItemEnter('ind')} onPointerLeave={onItemLeave} onBlur={onItemBlur}>
                <button
                  ref={(el) => {
                    triggerRefs.current.ind = el;
                  }}
                  type="button"
                  onClick={onTriggerClick('ind')}
                  onKeyDown={onTriggerKey('ind')}
                  aria-expanded={openMenu === 'ind'}
                  aria-controls="menu-industries"
                  className={`${topItem} ${(openMenu ? openMenu === 'ind' : isIndActive) ? topOn : topOff}`}
                >
                  Industries
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openMenu === 'ind' ? 'rotate-180 text-[var(--color-accent)]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openMenu === 'ind' && (
                    <motion.div
                      key="ind"
                      id="menu-industries"
                      ref={(el: HTMLDivElement | null) => {
                        panelRefs.current.ind = el;
                      }}
                      className={panelShell}
                      {...panelMotion}
                    >
                      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)] pt-9 pb-6">
                        <div className="grid grid-cols-12 gap-x-10 gap-y-8">
                          {/* Depth: Life Sciences gets the emerald, a photograph and
                              its six sub-sectors as direct routes. */}
                          <div className="col-span-5 grid grid-cols-5 border border-[var(--color-accent-deep)] bg-[var(--color-emerald)]">
                            <div className="relative col-span-5 h-28 2xl:col-span-2 2xl:h-auto 2xl:min-h-[260px]">
                              <img
                                src="/assets/images/lifesciences_research_1788984006985.jpg"
                                alt=""
                                className="absolute inset-0 h-full w-full object-cover"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div className="col-span-5 flex flex-col p-6 2xl:col-span-3">
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                                <NavAnchor
                                  to="/industries/life-sciences"
                                  go={go}
                                  className="font-display text-h4 text-[var(--color-ink-strong)] transition-colors hover:text-[var(--color-accent-2)]"
                                >
                                  Life Sciences
                                </NavAnchor>
                                <span className="rounded-edge border border-[var(--color-accent-deep)] px-2 py-0.5 text-caption text-[var(--color-accent)]">
                                  Core expertise
                                </span>
                              </div>
                              <p className="mt-2 text-body-sm leading-snug text-[var(--color-ink-2)]">
                                Founding heritage and core specialisation — regulatory fluency, clinical and
                                commercial context across six sub-sectors.
                              </p>
                              <ul className="mt-4 grid grid-cols-1 gap-x-6 sm:grid-cols-2 2xl:grid-cols-1">
                                {LIFE_SCIENCES_SUBSECTORS.map((s) => (
                                  <li key={s.id} className="border-t border-[var(--color-line-2)]">
                                    <NavAnchor
                                      to={`/industries/life-sciences?sector=${s.id}`}
                                      go={go}
                                      className={`${panelLink} min-h-[36px] py-1.5 !text-[var(--color-ink)] hover:!text-[var(--color-ink-strong)]`}
                                    >
                                      {s.name}
                                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[var(--color-accent)] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:opacity-100" />
                                    </NavAnchor>
                                  </li>
                                ))}
                              </ul>
                              <NavAnchor
                                to="/industries/life-sciences"
                                go={go}
                                className="group mt-auto inline-flex items-center gap-1.5 pt-5 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)]"
                              >
                                The Life Sciences practice
                                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                              </NavAnchor>
                            </div>
                          </div>

                          {/* Breadth: eleven verticals by market structure */}
                          <div className="col-span-7">
                            <div className="flex items-baseline justify-between gap-6 border-b border-[var(--color-line)] pb-4">
                              <div>
                                <p className="font-display text-h5 text-[var(--color-ink-strong)]">Across industry</p>
                                <p className="mt-1 text-caption text-[var(--color-ink-3)]">
                                  Eleven verticals, grouped by the market structure they share.
                                </p>
                              </div>
                              <NavAnchor
                                to="/industries"
                                go={go}
                                className={`${panelLink} shrink-0 !text-[var(--color-accent)] hover:!text-[var(--color-accent-2)]`}
                              >
                                All industries
                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                              </NavAnchor>
                            </div>

                            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-6 2xl:grid-cols-3">
                              {VERTICAL_GROUPS.map((group) => (
                                <div key={group}>
                                  <p className="font-display text-caption font-medium text-[var(--color-ink-3)]">{group}</p>
                                  <ul className="mt-2">
                                    {VERTICALS.filter((v) => v.group === group).map((v) => (
                                      <li key={v.id}>
                                        <NavAnchor
                                          to={`/industries?v=${v.id}`}
                                          go={go}
                                          className={`${panelLink} min-h-[32px] py-1 leading-snug`}
                                        >
                                          {v.name}
                                        </NavAnchor>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}

                              <NavAnchor
                                to="/explore"
                                go={go}
                                className="group flex flex-col justify-between border border-[var(--color-line-2)] p-4 transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-raised)]"
                              >
                                <span className="font-display text-body-sm font-medium text-[var(--color-ink-strong)]">
                                  Not sure which one you are?
                                </span>
                                <span className="mt-3 inline-flex items-center gap-1.5 text-caption text-[var(--color-accent)]">
                                  Compose industry × geography × capability
                                  <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                                </span>
                              </NavAnchor>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between gap-6 border-t border-[var(--color-line)] pt-4">
                          <p className="text-caption text-[var(--color-ink-3)]">
                            Every vertical is served from Nairobi across 45 African markets, with corridors
                            into Europe and the United States.
                          </p>
                          <NavAnchor to="/contact" go={go} className={`${panelLink} shrink-0 !text-[var(--color-accent)] hover:!text-[var(--color-accent-2)]`}>
                            Start a conversation
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </NavAnchor>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {SIMPLE_LINKS.map((l) => (
                <li key={l.path}>
                  <NavAnchor
                    to={l.path}
                    go={go}
                    aria-current={currentPath === l.path ? 'page' : undefined}
                    className={`${topItem} ${!openMenu && currentPath === l.path ? topOn : topOff}`}
                  >
                    {l.label}
                  </NavAnchor>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <NavAnchor
              to="/contact"
              go={go}
              id="header-cta-btn"
              className="group hidden items-center gap-2 rounded-edge bg-[var(--color-accent)] px-5 py-3 font-display text-[0.9375rem] font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)] sm:inline-flex"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </NavAnchor>

            <button
              ref={hamburgerRef}
              id="mobile-menu-toggle"
              type="button"
              onClick={() => {
                setOpenMenu(null);
                setMobileOpen((o) => !o);
              }}
              className="flex h-11 w-11 cursor-pointer items-center justify-center text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)] xl:hidden"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu-drawer"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Full-screen menu below xl ─────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile"
            id="mobile-menu-drawer"
            className="fixed inset-x-0 bottom-0 top-[var(--header-h)] overflow-y-auto border-t border-[var(--color-line-2)] bg-[var(--color-ground-deep)] xl:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE_Q } }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.16 } }}
          >
            <nav
              aria-label="Primary"
              className="mx-auto flex min-h-full max-w-[var(--container)] flex-col justify-between px-[var(--gutter)] pt-4 pb-8"
            >
              <ul className="font-display">
                {/* What We Do */}
                <li className="border-b border-[var(--color-line)]">
                  <button
                    type="button"
                    onClick={() => setMobileSection((s) => (s === 'wwd' ? null : 'wwd'))}
                    aria-expanded={mobileSection === 'wwd'}
                    aria-controls="m-wwd"
                    className="flex min-h-[60px] w-full items-center justify-between text-left text-h4 text-[var(--color-ink-strong)]"
                  >
                    <span className={isWwdActive ? 'text-[var(--color-accent)]' : ''}>What We Do</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 transition-transform duration-200 ${mobileSection === 'wwd' ? 'rotate-180 text-[var(--color-accent)]' : ''}`}
                    />
                  </button>
                  {mobileSection === 'wwd' && (
                    <ul id="m-wwd" className="grid grid-cols-1 gap-x-8 pb-4 font-body md:grid-cols-2">
                      <li className="md:col-span-2">
                        <NavAnchor to="/what-we-do" go={go} className={`${panelLink} min-h-[44px] !text-body !text-[var(--color-ink)]`}>
                          The engine, end to end
                          <ArrowRight className="h-4 w-4 text-[var(--color-accent)]" />
                        </NavAnchor>
                      </li>
                      {PILLAR_MENU.map((p) => (
                        <li key={p.path} className="border-t border-[var(--color-line)]">
                          <NavAnchor to={p.path} go={go} className="flex min-h-[56px] flex-col justify-center py-2.5">
                            <span className="flex items-baseline gap-3 text-body text-[var(--color-ink-strong)]">
                              <span className="font-mono text-eyebrow text-[var(--color-accent)]">{p.n}</span>
                              {p.name}
                            </span>
                            <span className="mt-0.5 pl-7 text-caption text-[var(--color-ink-3)]">{p.summary}</span>
                          </NavAnchor>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Industries */}
                <li className="border-b border-[var(--color-line)]">
                  <button
                    type="button"
                    onClick={() => setMobileSection((s) => (s === 'ind' ? null : 'ind'))}
                    aria-expanded={mobileSection === 'ind'}
                    aria-controls="m-ind"
                    className="flex min-h-[60px] w-full items-center justify-between text-left text-h4 text-[var(--color-ink-strong)]"
                  >
                    <span className={isIndActive ? 'text-[var(--color-accent)]' : ''}>Industries</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 transition-transform duration-200 ${mobileSection === 'ind' ? 'rotate-180 text-[var(--color-accent)]' : ''}`}
                    />
                  </button>
                  {mobileSection === 'ind' && (
                    <div id="m-ind" className="pb-4 font-body">
                      <NavAnchor
                        to="/industries/life-sciences"
                        go={go}
                        className="flex min-h-[56px] items-center justify-between gap-4 border border-[var(--color-accent-deep)] bg-[var(--color-emerald)] px-4 py-3"
                      >
                        <span>
                          <span className="block text-body text-[var(--color-ink-strong)]">Life Sciences</span>
                          <span className="block text-caption text-[var(--color-accent)]">Core expertise · six sub-sectors</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                      </NavAnchor>
                      <ul className="mt-2 grid grid-cols-1 gap-x-8 md:grid-cols-2">
                        <li>
                          <NavAnchor to="/industries" go={go} className={`${panelLink} min-h-[44px] !text-body !text-[var(--color-ink)]`}>
                            All industries
                            <ArrowRight className="h-4 w-4 text-[var(--color-accent)]" />
                          </NavAnchor>
                        </li>
                        <li>
                          <NavAnchor to="/explore" go={go} className={`${panelLink} min-h-[44px] !text-body !text-[var(--color-ink)]`}>
                            Compose industry × geography × capability
                            <ArrowRight className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                          </NavAnchor>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                {SIMPLE_LINKS.map((l) => (
                  <li key={l.path} className="border-b border-[var(--color-line)]">
                    <NavAnchor
                      to={l.path}
                      go={go}
                      aria-current={currentPath === l.path ? 'page' : undefined}
                      className={`flex min-h-[60px] items-center text-h4 ${
                        currentPath === l.path ? 'text-[var(--color-accent)]' : 'text-[var(--color-ink-strong)]'
                      }`}
                    >
                      {l.label}
                    </NavAnchor>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-5">
                <NavAnchor
                  to="/contact"
                  go={go}
                  className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-edge bg-[var(--color-accent)] font-display text-body font-medium text-[var(--color-ground-deep)] transition-colors hover:bg-[var(--color-accent-2)]"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4" />
                </NavAnchor>
                <p className="flex flex-wrap items-baseline justify-between gap-3 text-caption text-[var(--color-ink-3)]">
                  <span>Nairobi, Kenya</span>
                  <a
                    href="mailto:info@mindcraftconsultancy.com"
                    className="text-[var(--color-ink-2)] underline decoration-[var(--color-accent-deep)] underline-offset-4"
                  >
                    info@mindcraftconsultancy.com
                  </a>
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
