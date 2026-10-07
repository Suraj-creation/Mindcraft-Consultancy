import React, { useState } from 'react';
import { LIFE_SCIENCES_SECTORS, BREADTH_INDUSTRIES } from '../data/landingData';
import { Microscope, FileCheck, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const LifeSciencesDepth: React.FC = () => {
  const [activeSectorId, setActiveSectorId] = useState<string>('pharma');

  const activeSector =
    LIFE_SCIENCES_SECTORS.find((s) => s.id === activeSectorId) || LIFE_SCIENCES_SECTORS[0];

  return (
    <section id="lifesciences" className="py-20 md:py-28 border-b border-[var(--line)] bg-[var(--paper-2)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Core Expertise Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[var(--line)]">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-widest uppercase">
                02 — Core Expertise
              </span>
              <span className="text-[var(--line-2)]">|</span>
              <span className="font-mono text-xs text-[var(--ink-3)] uppercase">
                Founding Heritage
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[var(--ink-strong)]">
              Life Sciences is our founding heritage.
            </h2>
            <p className="font-body text-base sm:text-lg text-[var(--ink-2)] leading-relaxed">
              Regulatory fluency, clinical and commercial context, and industry benchmarks are built into every engagement across six specialized sub-sectors.
            </p>
          </div>

          <div className="flex items-center space-x-2 self-start lg:self-end px-3 py-1.5 bg-[var(--surface)] border border-[var(--line)] rounded-[2px] text-xs font-mono text-[var(--ink-strong)]">
            <Microscope className="w-4 h-4 text-[var(--accent)]" />
            <span>Dedicated Clinical & Regulatory Bench</span>
          </div>
        </div>

        {/* Deep Ecosystem: Two-column architectural layout with research asset visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 items-start">
          {/* Left Column (5 cols): Sector Selector & Editorial Research Asset */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-[var(--ink-3)] tracking-wider uppercase">
                Select Specialized Sub-Sector
              </span>
              <div className="space-y-1.5" role="tablist" aria-label="Life Sciences sub-sectors">
                {LIFE_SCIENCES_SECTORS.map((sector, index) => {
                  const isSelected = sector.id === activeSectorId;
                  return (
                    <button
                      key={sector.id}
                      onClick={() => setActiveSectorId(sector.id)}
                      role="tab"
                      aria-selected={isSelected}
                      className={`w-full text-left px-4 py-3 rounded-[2px] transition-all flex items-center justify-between border cursor-pointer ${
                        isSelected
                          ? 'bg-[var(--surface)] border-[var(--accent)] text-[var(--ink-strong)]'
                          : 'bg-[var(--paper)] border-[var(--line)] text-[var(--ink-2)] hover:border-[var(--line-2)] hover:text-[var(--ink-strong)]'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-xs text-[var(--accent)] font-semibold">
                          0{index + 1}
                        </span>
                        <span className="font-display font-medium text-sm sm:text-base">
                          {sector.name}
                        </span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? 'text-[var(--accent)] translate-x-1' : 'text-[var(--ink-3)]'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Authentic Laboratory Photography Asset */}
            <div className="border border-[var(--line)] bg-[var(--surface)] p-2 rounded-[2px]">
              <div className="overflow-hidden aspect-[16/9] relative">
                <img
                  src="/assets/images/lifesciences_research_1788984006985.jpg"
                  alt="High precision clinical research laboratory in an African biotechnology institute"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 bg-[var(--ink-bg)]/85 text-[var(--on-ink)] px-2 py-0.5 text-[9px] font-mono tracking-widest uppercase">
                  Biotech & Diagnostic Rigor
                </div>
              </div>
              <div className="p-2.5 text-[11px] font-mono text-[var(--ink-3)] flex justify-between">
                <span>EAST AFRICAN HEALTH SCIENCES</span>
                <span className="text-[var(--accent)]">CLINICAL DOSSIERS</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Deep Layered Sector Intelligence */}
          <div className="lg:col-span-7 bg-[var(--surface)] border border-[var(--line-2)] p-6 sm:p-8 rounded-[2px] space-y-6">
            <div className="space-y-2 border-b border-[var(--line)] pb-6">
              <div className="font-mono text-xs font-semibold text-[var(--accent)] tracking-wide uppercase">
                {activeSector.subTitle}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[var(--ink-strong)]">
                {activeSector.name}
              </h3>
              <p className="font-body text-base text-[var(--ink-2)] leading-relaxed pt-2">
                {activeSector.description}
              </p>
            </div>

            {/* Regulatory and Statutory Pathway */}
            <div className="p-4 bg-[var(--paper-2)] border-l-2 border-[var(--accent)] rounded-[1px] space-y-1">
              <div className="flex items-center space-x-2 font-mono text-xs font-semibold text-[var(--ink-strong)] uppercase">
                <FileCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Regulatory & Statutory Focus</span>
              </div>
              <p className="font-mono text-xs text-[var(--ink-2)] leading-relaxed">
                {activeSector.regulatoryFocus}
              </p>
            </div>

            {/* Core Tangible Deliverables */}
            <div className="space-y-3">
              <span className="font-mono text-xs font-semibold text-[var(--ink-3)] uppercase tracking-wider">
                Key Strategic Work Streams & Deliverables
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeSector.coreDeliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-2.5 p-3 bg-[var(--paper)] border border-[var(--line)] rounded-[2px]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="font-body text-xs sm:text-sm text-[var(--ink-strong)] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ASYMMETRIC BREADTH STRIP: Serving other sectors with clear breadth status */}
        <div className="mt-16 pt-12 border-t border-[var(--line-2)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div className="space-y-1">
              <div className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase font-semibold">
                03 — Industries Served
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-medium text-[var(--ink-strong)]">
                Depth in Life Sciences, breadth across industries.
              </h3>
            </div>
            <p className="font-body text-xs sm:text-sm text-[var(--ink-3)] max-w-md">
              The same rigor extends across roughly twenty industry verticals — from chemicals and automotive to financial services, energy, and manufacturing.
            </p>
          </div>

          {/* Low-emphasis horizontal glance strip with hairline dividers */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {BREADTH_INDUSTRIES.map((ind, i) => (
              <span
                key={ind}
                className="inline-flex items-center px-3 py-1.5 bg-[var(--paper)] border border-[var(--line)] text-xs font-mono text-[var(--ink-2)] rounded-[2px]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--line-2)] mr-2" />
                {ind}
              </span>
            ))}
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-mono text-[var(--accent)] font-medium">
              + 8 additional emerging verticals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
