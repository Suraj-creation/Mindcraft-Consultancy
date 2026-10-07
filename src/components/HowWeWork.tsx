import React, { useState } from 'react';
import { ENGAGEMENT_STAGES, DIFFERENTIATORS } from '../data/landingData';
import { ArrowRight, CheckCircle2, ShieldCheck, Milestone } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const [activeStageNumber, setActiveStageNumber] = useState<string>('01');

  const activeStage =
    ENGAGEMENT_STAGES.find((s) => s.number === activeStageNumber) || ENGAGEMENT_STAGES[0];

  return (
    <section id="how-we-work" className="py-20 md:py-28 border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 pb-12">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-widest uppercase">
              06 — How We Work
            </span>
            <span className="text-[var(--line-2)]">|</span>
            <span className="font-mono text-xs text-[var(--ink-3)] uppercase">
              Disciplined Execution
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[var(--ink-strong)]">
            A clear, six-stage engagement.
          </h2>
          <p className="font-body text-base sm:text-lg text-[var(--ink-2)] leading-relaxed">
            From first conversation to follow-up, every engagement follows a defined, auditable path with explicit milestones and fixed accountability.
          </p>
        </div>

        {/* 6-Stage Process Horizontal Rail */}
        <div className="relative mb-10">
          <div className="hidden lg:block absolute top-[22px] left-6 right-6 h-[1px] bg-[var(--line-2)] z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
            {ENGAGEMENT_STAGES.map((stage) => {
              const isSelected = stage.number === activeStageNumber;
              return (
                <button
                  key={stage.number}
                  onClick={() => setActiveStageNumber(stage.number)}
                  className={`text-left p-3.5 rounded-[2px] transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[var(--surface)] border-[var(--accent)]'
                      : 'bg-[var(--paper-2)] border-[var(--line)] hover:border-[var(--line-2)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-xs font-semibold px-2 py-0.5 rounded-[1px] ${
                        isSelected
                          ? 'bg-[var(--accent)] text-[var(--color-ground-deep)]'
                          : 'bg-[var(--line)] text-[var(--ink-2)]'
                      }`}
                    >
                      {stage.number}
                    </span>
                    <Milestone
                      className={`w-3.5 h-3.5 ${
                        isSelected ? 'text-[var(--accent)]' : 'text-[var(--ink-3)]'
                      }`}
                    />
                  </div>
                  <div className="font-display font-medium text-sm text-[var(--ink-strong)]">
                    {stage.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Inspection Card */}
        <div className="border border-[var(--line-2)] bg-[var(--paper-2)] p-6 sm:p-8 rounded-[2px] mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-6 space-y-2">
              <span className="font-mono text-xs text-[var(--accent)] font-semibold uppercase">
                Stage {activeStage.number} Objective
              </span>
              <h3 className="font-display text-2xl font-medium text-[var(--ink-strong)]">
                {activeStage.name}
              </h3>
              <p className="font-body text-base text-[var(--ink)] leading-relaxed">
                {activeStage.objective}
              </p>
            </div>
            <div className="md:col-span-6 p-4 bg-[var(--surface)] border border-[var(--line)] rounded-[2px] space-y-2">
              <span className="font-mono text-xs font-semibold text-[var(--ink-3)] uppercase tracking-wider">
                Concrete Outcome / Milestone
              </span>
              <p className="font-body text-sm sm:text-base text-[var(--ink-strong)] font-medium">
                {activeStage.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* THE FIVE DIFFERENTIATORS: Editorial Statements (No Cards!) */}
        <div id="about" className="pt-10 border-t border-[var(--line)] space-y-10">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-widest uppercase">
              07 — Why MindCraft
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-[var(--ink-strong)]">
              Five reasons this firm is different.
            </h3>
            <p className="font-body text-base text-[var(--ink-2)] leading-relaxed">
              What sets an African sector specialist apart from a generalist consulting firm.
            </p>
          </div>

          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {DIFFERENTIATORS.map((diff) => (
              <div
                key={diff.num}
                className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline"
              >
                <div className="lg:col-span-2 font-mono text-sm sm:text-base font-bold text-[var(--accent)] flex items-center space-x-2">
                  <span>{diff.num}</span>
                  <span className="text-[var(--line-2)]">—</span>
                </div>

                <div className="lg:col-span-4 space-y-1">
                  <h4 className="font-display text-lg sm:text-xl font-medium text-[var(--ink-strong)]">
                    {diff.title}
                  </h4>
                  <div className="font-body text-sm font-medium text-[var(--accent)] italic">
                    "{diff.statement}"
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <p className="font-body text-sm sm:text-base text-[var(--ink-2)] leading-relaxed">
                    {diff.proof}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
