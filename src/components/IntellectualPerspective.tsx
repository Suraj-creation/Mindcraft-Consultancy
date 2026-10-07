import React, { useState } from 'react';
import { AUDIENCE_PATHWAYS } from '../data/landingData';
import { ArrowRight, UserCheck, Compass, BookOpen } from 'lucide-react';

interface IntellectualPerspectiveProps {
  onOpenConversationWithContext: (context: string) => void;
}

export const IntellectualPerspective: React.FC<IntellectualPerspectiveProps> = ({
  onOpenConversationWithContext,
}) => {
  const [selectedPathwayId, setSelectedPathwayId] = useState<string>('ceo');

  const activePathway =
    AUDIENCE_PATHWAYS.find((p) => p.id === selectedPathwayId) || AUDIENCE_PATHWAYS[0];

  return (
    <section id="perspectives" className="py-20 md:py-28 border-b border-[var(--line)] bg-[var(--paper-2)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 pb-12">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-widest uppercase">
              07 — Start Where You Are
            </span>
            <span className="text-[var(--line-2)]">|</span>
            <span className="font-mono text-xs text-[var(--ink-3)] uppercase">
              Audience Routing
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[var(--ink-strong)]">
            Find your fastest starting point.
          </h2>
          <p className="font-body text-base sm:text-lg text-[var(--ink-2)] leading-relaxed">
            Select your leadership mandate to review the proven sequence of capabilities, regulatory assets, and strategic deliverables tailored to your scope.
          </p>
        </div>

        {/* Role Pathway Chips Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {AUDIENCE_PATHWAYS.map((p) => {
            const isSelected = p.id === selectedPathwayId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPathwayId(p.id)}
                className={`p-3 text-left rounded-[2px] transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[var(--surface)] border-[var(--accent)] text-[var(--ink-strong)]'
                    : 'bg-[var(--paper)] border-[var(--line)] text-[var(--ink-2)] hover:border-[var(--line-2)] hover:text-[var(--ink-strong)]'
                }`}
              >
                <div className="font-mono text-[10px] text-[var(--accent)] font-semibold uppercase tracking-wider mb-1">
                  Mandate
                </div>
                <div className="font-display text-xs sm:text-sm font-medium leading-snug">
                  {p.role}
                </div>
              </button>
            );
          })}
        </div>

        {/* Tailored Briefing Deck */}
        <div className="bg-[var(--surface)] border border-[var(--line-2)] p-6 sm:p-8 lg:p-10 rounded-[2px] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--line)] pb-6">
            <div className="space-y-1">
              <span className="font-mono text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">
                Tailored Advisory Briefing
              </span>
              <h3 className="font-display text-2xl font-medium text-[var(--ink-strong)]">
                {activePathway.role}
              </h3>
            </div>

            <button
              onClick={() => onOpenConversationWithContext(`Mandate: ${activePathway.role}`)}
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-mono tracking-wider uppercase font-semibold text-[var(--color-ground-deep)] bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors cursor-pointer self-start sm:self-auto"
            >
              <span>Discuss This Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              <span className="font-mono text-xs font-semibold text-[var(--ink-3)] uppercase tracking-wider">
                Strategic Mandate & Pressure Points
              </span>
              <p className="font-body text-base text-[var(--ink)] leading-relaxed bg-[var(--paper)] p-4 border border-[var(--line)] rounded-[2px]">
                {activePathway.mandate}
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs font-semibold text-[var(--ink-3)] uppercase tracking-wider">
                Recommended Capability Sequence
              </span>
              <div className="p-4 bg-[var(--paper)] border border-[var(--line)] rounded-[2px] space-y-2">
                <div className="font-mono text-xs text-[var(--accent)] font-semibold">
                  {activePathway.recommendedPath}
                </div>
                <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
                  {activePathway.keyAction}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
