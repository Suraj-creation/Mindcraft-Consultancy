import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenConversation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConversation }) => {
  return (
    <section
      id="hero"
      className="relative pt-12 pb-20 md:pt-16 md:pb-28 border-b border-[var(--line)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Latitude / Longitude & Verification Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-6 border-b border-[var(--line)] text-[12px] font-mono text-[var(--ink-3)] tracking-wider">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
            <span className="font-semibold text-[var(--ink-strong)]">NAIROBI, KENYA</span>
            <span className="text-[var(--line-2)]">|</span>
            <span>1°17′S · 36°49′E</span>
            <span className="text-[var(--line-2)]">|</span>
            <span>ELEV. 1,795M</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>FOUNDED 2026</span>
            <span className="text-[var(--line-2)]">|</span>
            <span className="text-[var(--accent)] font-medium">EDITORIAL INTELLIGENCE</span>
          </div>
        </div>

        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-10 lg:pt-14 items-start">
          {/* Left Column (8 cols): Title, Manifesto & Action */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block font-mono text-xs tracking-widest text-[var(--accent)] uppercase font-semibold">
                Strategic Consulting & Technology Capability
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[var(--ink-strong)] leading-[1.08]">
                Sector depth, <br className="hidden sm:inline" />
                <span className="italic font-serif font-normal text-[var(--accent)]">meet applied AI.</span>
              </h1>
            </div>

            <p className="font-body text-lg sm:text-xl text-[var(--ink-2)] leading-relaxed max-w-2xl">
              MindCraft is a Nairobi-based consultancy combining market research, business consulting, AI training, and enterprise AI — with deep Life Sciences expertise and an authentic African focus.
            </p>

            {/* Signature 4-Pillar Line */}
            <div className="py-3 px-4 bg-[var(--paper-2)] border-l-2 border-[var(--accent)] rounded-[2px]">
              <p className="font-mono text-xs sm:text-sm text-[var(--ink-strong)] tracking-tight">
                Market Research <span className="text-[var(--accent)]">→</span> Business Consulting <span className="text-[var(--accent)]">→</span> AI Enterprise Solutions <span className="text-[var(--accent)]">→</span> AI Training
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-primary-cta"
                onClick={onOpenConversation}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-[var(--color-ground-deep)] bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors cursor-pointer"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                id="hero-secondary-cta"
                href="#engine"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-medium text-[var(--ink-strong)] bg-transparent hover:bg-[var(--paper-2)] border border-[var(--line-2)] rounded-[2px] transition-colors"
              >
                <span>See What We Do</span>
                <ArrowDown className="w-3.5 h-3.5 text-[var(--ink-3)]" />
              </a>
            </div>

            {/* Structural Facts Strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--line)]">
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[var(--ink-strong)]">45</div>
                <div className="font-mono text-[11px] text-[var(--ink-3)] uppercase tracking-wider mt-0.5">
                  African Markets
                </div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[var(--ink-strong)]">06</div>
                <div className="font-mono text-[11px] text-[var(--ink-3)] uppercase tracking-wider mt-0.5">
                  Life Sciences Sub-Sectors
                </div>
              </div>
              <div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[var(--ink-strong)]">01</div>
                <div className="font-mono text-[11px] text-[var(--ink-3)] uppercase tracking-wider mt-0.5">
                  Unified Operating Engine
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Architectural Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[var(--line-2)] bg-[var(--paper-2)] p-2 rounded-[2px]">
              <div className="overflow-hidden aspect-[4/3] relative">
                <img
                  src="/assets/images/nairobi_architecture_1788983991343.jpg"
                  alt="Nairobi commercial and financial district architecture in natural morning light"
                  className="w-full h-full object-cover object-center grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[var(--ink-bg)]/85 text-[var(--on-ink)] px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase">
                  Nairobi HQ · Command Node
                </div>
              </div>

              {/* Architectural Metadata Caption */}
              <div className="p-3 pt-3.5 space-y-2 text-[12px] font-mono">
                <div className="flex justify-between items-center text-[var(--ink-strong)] font-medium">
                  <span>URBAN & COMMERCIAL ANCHOR</span>
                  <span className="text-[var(--accent)]">FIG. 01</span>
                </div>
                <p className="font-body text-xs text-[var(--ink-3)] leading-relaxed">
                  Operating from Nairobi’s commercial center at the confluence of African venture capital, East African healthcare hubs, and pan-continental regulatory corridors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
