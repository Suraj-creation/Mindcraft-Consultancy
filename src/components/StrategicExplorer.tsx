import React, { useState } from 'react';
import { EXPLORER_SAMPLE_ENTRIES } from '../data/landingData';
import { Sparkles, ArrowUpRight, Sliders, CheckCircle2 } from 'lucide-react';

interface StrategicExplorerProps {
  onOpenConversationWithContext: (context: string) => void;
}

export const StrategicExplorer: React.FC<StrategicExplorerProps> = ({
  onOpenConversationWithContext,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Pharmaceuticals');
  const [selectedGeography, setSelectedGeography] = useState<string>('Kenya');
  const [selectedCapability, setSelectedCapability] = useState<string>('Market Research');

  const industries = [
    'Pharmaceuticals',
    'Medical Devices',
    'Medical Diagnostics',
    'Agrochemicals',
    'Financial Services',
    'Energy & Infrastructure',
  ];

  const geographies = [
    'Kenya',
    'East Africa',
    'West Africa',
    'Southern Africa',
    'Pan-Africa',
  ];

  const capabilities = [
    'Market Research',
    'Business Consulting',
    'AI Enterprise Solutions',
    'AI Training',
    'Integrated Engagement',
  ];

  // Derive dynamic briefing
  const key = `${selectedIndustry.toLowerCase().slice(0, 6)}-${selectedGeography.toLowerCase().slice(0, 5)}-${selectedCapability.toLowerCase().slice(0, 8)}`;
  const sample = EXPLORER_SAMPLE_ENTRIES[key] || {
    industry: selectedIndustry,
    geography: selectedGeography,
    capability: selectedCapability,
    headline: `${selectedGeography} ${selectedIndustry} ${selectedCapability} Engagement`,
    scopeSummary: `Custom engagement combining empirical fieldwork and strategic alignment for ${selectedIndustry} operations across ${selectedGeography}.`,
    regulatoryContext: `Harmonized statutory oversight, local content regulations, and institutional compliance standards tailored to ${selectedGeography}.`,
    entryDeliverable: `Comprehensive ${selectedCapability.toLowerCase()} dossier, executive decision brief, and milestone roadmap.`,
  };

  const currentSelectionLabel = `${selectedIndustry} × ${selectedGeography} × ${selectedCapability}`;

  return (
    <section id="explorer" className="py-20 md:py-28 border-b border-[var(--line)] bg-[var(--paper-2)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl space-y-3 pb-10">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-widest uppercase">
              05 — The Strategic Explorer
            </span>
            <span className="text-[var(--line-2)]">|</span>
            <span className="font-mono text-xs text-[var(--ink-3)] uppercase">
              Interactive Matrix
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[var(--ink-strong)]">
            Your industry, your region, your need.
          </h2>
          <p className="font-body text-base sm:text-lg text-[var(--ink-2)] leading-relaxed">
            Compose an industry, a geography, and a capability to examine how MindCraft applies — a focused, source-grounded response.
          </p>
        </div>

        {/* 3-Slot Composer Shell */}
        <div className="border border-[var(--line-2)] bg-[var(--surface)] p-6 sm:p-8 lg:p-10 rounded-[2px] space-y-8">
          {/* Active Formula Pill */}
          <div className="flex flex-wrap items-center gap-3 p-3 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] font-mono text-xs text-[var(--ink-strong)]">
            <span className="text-[var(--ink-3)] uppercase tracking-wider">Active Formula:</span>
            <span className="px-2 py-0.5 bg-[var(--surface)] border border-[var(--line-2)] font-semibold text-[var(--accent)]">
              {selectedIndustry}
            </span>
            <span className="text-[var(--ink-3)]">×</span>
            <span className="px-2 py-0.5 bg-[var(--surface)] border border-[var(--line-2)] font-semibold text-[var(--ink-strong)]">
              {selectedGeography}
            </span>
            <span className="text-[var(--ink-3)]">×</span>
            <span className="px-2 py-0.5 bg-[var(--surface)] border border-[var(--line-2)] font-semibold text-[var(--ink-strong)]">
              {selectedCapability}
            </span>
          </div>

          {/* Selector Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Slot 1: Industry */}
            <div className="space-y-3">
              <label className="block font-mono text-xs font-semibold text-[var(--ink-3)] uppercase tracking-wider">
                01 · Industry Sector
              </label>
              <div className="space-y-1.5">
                {industries.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`w-full text-left px-3.5 py-2 text-xs font-mono rounded-[2px] border transition-all cursor-pointer ${
                      selectedIndustry === ind
                        ? 'bg-[var(--accent)] text-[var(--color-ground-deep)] border-[var(--accent)] font-medium'
                        : 'bg-[var(--paper)] text-[var(--ink-2)] border-[var(--line)] hover:border-[var(--line-2)] hover:text-[var(--ink-strong)]'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* Slot 2: Geography */}
            <div className="space-y-3">
              <label className="block font-mono text-xs font-semibold text-[var(--ink-3)] uppercase tracking-wider">
                02 · Geography / Focus
              </label>
              <div className="space-y-1.5">
                {geographies.map((geo) => (
                  <button
                    key={geo}
                    onClick={() => setSelectedGeography(geo)}
                    className={`w-full text-left px-3.5 py-2 text-xs font-mono rounded-[2px] border transition-all cursor-pointer ${
                      selectedGeography === geo
                        ? 'bg-[var(--accent)] text-[var(--color-ground-deep)] border-[var(--accent)] font-medium'
                        : 'bg-[var(--paper)] text-[var(--ink-2)] border-[var(--line)] hover:border-[var(--line-2)] hover:text-[var(--ink-strong)]'
                    }`}
                  >
                    {geo}
                  </button>
                ))}
              </div>
            </div>

            {/* Slot 3: Capability */}
            <div className="space-y-3">
              <label className="block font-mono text-xs font-semibold text-[var(--ink-3)] uppercase tracking-wider">
                03 · Capability Required
              </label>
              <div className="space-y-1.5">
                {capabilities.map((cap) => (
                  <button
                    key={cap}
                    onClick={() => setSelectedCapability(cap)}
                    className={`w-full text-left px-3.5 py-2 text-xs font-mono rounded-[2px] border transition-all cursor-pointer ${
                      selectedCapability === cap
                        ? 'bg-[var(--accent)] text-[var(--color-ground-deep)] border-[var(--accent)] font-medium'
                        : 'bg-[var(--paper)] text-[var(--ink-2)] border-[var(--line)] hover:border-[var(--line-2)] hover:text-[var(--ink-strong)]'
                    }`}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Briefing Output Card */}
          <div className="p-6 sm:p-8 bg-[var(--paper)] border border-[var(--line-2)] rounded-[2px] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[var(--line)] pb-4">
              <div>
                <span className="font-mono text-xs text-[var(--accent)] uppercase font-semibold">
                  Synthesized Briefing
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-medium text-[var(--ink-strong)] mt-1">
                  {sample.headline}
                </h3>
              </div>
              <button
                onClick={() => onOpenConversationWithContext(currentSelectionLabel)}
                className="inline-flex items-center space-x-1.5 text-xs font-mono text-[var(--accent)] hover:text-[var(--accent-2)] font-semibold underline underline-offset-4 cursor-pointer self-start sm:self-auto"
              >
                <span>Initiate This Engagement</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <span className="font-mono text-[11px] font-semibold text-[var(--ink-3)] uppercase tracking-wider">
                  Scope Summary & Operational Approach
                </span>
                <p className="font-body text-sm text-[var(--ink)] leading-relaxed">
                  {sample.scopeSummary}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="font-mono text-[11px] font-semibold text-[var(--ink-3)] uppercase tracking-wider">
                  Regulatory & Compliance Context
                </span>
                <p className="font-body text-sm text-[var(--ink)] leading-relaxed">
                  {sample.regulatoryContext}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono text-[var(--ink-3)]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-[var(--ink-strong)] font-medium">Primary Deliverable:</span>
                <span>{sample.entryDeliverable}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
