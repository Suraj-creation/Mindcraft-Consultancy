import React, { useState } from 'react';
import { GEO_REGIONS } from '../data/landingData';
import { MapPin, Globe2, Building2, Shield, ArrowUpRight } from 'lucide-react';

export const AfricaIntelligence: React.FC = () => {
  const [activeRegionId, setActiveRegionId] = useState<string>('east');

  const activeRegion = GEO_REGIONS.find((r) => r.id === activeRegionId) || GEO_REGIONS[0];

  return (
    <section id="geography" className="py-20 md:py-28 border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[var(--line)]">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-widest uppercase">
                04 — Where We Work
              </span>
              <span className="text-[var(--line-2)]">|</span>
              <span className="font-mono text-xs text-[var(--ink-3)] uppercase">
                Pan-African Reach & Global Corridors
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[var(--ink-strong)]">
              Rooted in Africa, working globally.
            </h2>
            <p className="font-body text-base sm:text-lg text-[var(--ink-2)] leading-relaxed">
              Headquartered in Nairobi, MindCraft maintains on-ground research capability across 45 African countries, with established liaison corridors into Europe and the United States.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-1.5 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] text-xs font-mono text-[var(--ink-strong)] flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Nairobi HQ (Command Center)</span>
            </div>
            <div className="px-3.5 py-1.5 bg-[var(--paper-2)] border border-[var(--line)] rounded-[2px] text-xs font-mono text-[var(--ink-strong)] flex items-center space-x-2">
              <Globe2 className="w-3.5 h-3.5 text-[var(--ink-3)]" />
              <span>45 Pan-African Markets</span>
            </div>
          </div>
        </div>

        {/* Region Selector Bar */}
        <div className="pt-10 space-y-8">
          <div className="flex flex-wrap items-center gap-2 border-b border-[var(--line)] pb-4">
            {GEO_REGIONS.map((region) => {
              const isSelected = region.id === activeRegionId;
              return (
                <button
                  key={region.id}
                  onClick={() => setActiveRegionId(region.id)}
                  className={`px-4 py-2 text-xs font-mono tracking-wider uppercase font-medium rounded-[2px] transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[var(--accent)] text-[var(--color-ground-deep)] border-[var(--accent)]'
                      : 'bg-[var(--paper-2)] text-[var(--ink-2)] border-[var(--line)] hover:border-[var(--line-2)] hover:text-[var(--ink-strong)]'
                  }`}
                >
                  {region.name}
                </button>
              );
            })}
          </div>

          {/* Region Intelligence Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Intelligence Narrative & Markets (7 cols) */}
            <div className="lg:col-span-7 bg-[var(--paper-2)] border border-[var(--line-2)] p-6 sm:p-8 rounded-[2px] space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] pb-4">
                <div>
                  <span className="font-mono text-xs text-[var(--accent)] uppercase font-semibold">
                    {activeRegion.coverage}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium text-[var(--ink-strong)] mt-0.5">
                    {activeRegion.name}
                  </h3>
                </div>
                <div className="px-2.5 py-1 bg-[var(--surface)] border border-[var(--line)] text-[11px] font-mono text-[var(--ink-3)] rounded-[1px]">
                  {activeRegion.nairobiRelation}
                </div>
              </div>

              {/* Priority Markets */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold text-[var(--ink-3)] uppercase tracking-wider">
                  Primary Commercial & Regulatory Focus Markets
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeRegion.focusMarkets.map((market) => (
                    <span
                      key={market}
                      className="px-3 py-1 bg-[var(--surface)] border border-[var(--line-2)] text-xs font-mono text-[var(--ink-strong)] font-medium rounded-[2px] flex items-center space-x-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      <span>{market}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Market Intelligence */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold text-[var(--ink-3)] uppercase tracking-wider">
                  Harmonization & Regulatory Framework
                </span>
                <p className="font-body text-sm sm:text-base text-[var(--ink)] leading-relaxed bg-[var(--surface)] p-4 border border-[var(--line)] rounded-[2px]">
                  {activeRegion.keyIntelligence}
                </p>
              </div>

              {/* Commercial Infrastructure */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-semibold text-[var(--ink-3)] uppercase tracking-wider">
                  Commercial Dynamics & Distribution Context
                </span>
                <p className="font-body text-sm sm:text-base text-[var(--ink-2)] leading-relaxed">
                  {activeRegion.commercialContext}
                </p>
              </div>
            </div>

            {/* Right: Cartographic Visual Texture & Spatial Anchor (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border border-[var(--line-2)] bg-[var(--paper-2)] p-2 rounded-[2px]">
                <div className="overflow-hidden aspect-[4/3] relative">
                  <img
                    src="/assets/images/african_cartography_1788984023445.jpg"
                    alt="Restrained topographical cartography texture of East Africa and continental survey contours"
                    className="w-full h-full object-cover grayscale contrast-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[var(--ink-bg)]/90 text-[var(--on-ink)] px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase">
                    Cartographic Intelligence
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[var(--surface)]/90 text-[var(--ink-strong)] px-2.5 py-1 text-[10px] font-mono border border-[var(--line)]">
                    Nairobi Node: 1.2921° S, 36.8219° E
                  </div>
                </div>

                <div className="p-3 space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between text-[var(--ink-strong)] font-medium">
                    <span>CONTINENTAL GEOSPATIAL ENGINE</span>
                    <span className="text-[var(--accent)]">GEO · 04</span>
                  </div>
                  <p className="font-body text-xs text-[var(--ink-3)] leading-relaxed">
                    Cartographic and trade data mapped directly against regional economic zones: EAC, ECOWAS, SADC, and AfCFTA corridors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
