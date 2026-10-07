import React, { useState } from 'react';
import { ENGINE_NODES } from '../data/landingData';
import { RotateCw, ArrowRight, CornerDownLeft, Sparkles, CheckCircle2 } from 'lucide-react';

export const IntelligenceEngine: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('research');

  const activeNode = ENGINE_NODES.find((n) => n.id === activeNodeId) || ENGINE_NODES[1];

  return (
    <section id="engine" className="py-20 md:py-28 border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-widest uppercase">
              01 — How We Create Value
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[var(--ink-strong)]">
            One engine, four connected capabilities.
          </h2>
          <p className="font-body text-base sm:text-lg text-[var(--ink-2)] leading-relaxed">
            A market question moves through research, strategy, AI implementation, and capability training — then loops back as measurable impact. You can enter at any point; most engagements combine two or more.
          </p>
        </div>

        {/* The Connected Spine (Desktop: Flowing Horizontal Stepper Rail; Mobile: Tappable Row) */}
        <div className="relative mb-10">
          {/* Connecting Hairline Axis */}
          <div className="hidden lg:block absolute top-[26px] left-8 right-8 h-[1px] bg-[var(--line-2)] z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {ENGINE_NODES.map((node, index) => {
              const isSelected = node.id === activeNodeId;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`text-left p-4 rounded-[2px] transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[var(--surface)] border-[var(--accent)] shadow-[0_2px_12px_rgba(184,84,52,0.12)]'
                      : 'bg-[var(--paper-2)] border-[var(--line)] hover:border-[var(--line-2)] hover:bg-[var(--surface)]'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono text-xs font-semibold px-2 py-0.5 rounded-[1px] ${
                        isSelected
                          ? 'bg-[var(--accent)] text-[var(--color-ground-deep)]'
                          : 'bg-[var(--line)] text-[var(--ink-2)]'
                      }`}
                    >
                      {node.step}
                    </span>
                    {index === 5 ? (
                      <RotateCw
                        className={`w-3.5 h-3.5 ${
                          isSelected ? 'text-[var(--accent)] animate-spin' : 'text-[var(--ink-3)]'
                        }`}
                      />
                    ) : (
                      <ArrowRight
                        className={`w-3.5 h-3.5 ${
                          isSelected ? 'text-[var(--accent)]' : 'text-[var(--ink-3)]'
                        }`}
                      />
                    )}
                  </div>

                  <div className="font-display font-medium text-sm sm:text-base text-[var(--ink-strong)] leading-snug line-clamp-2">
                    {node.title}
                  </div>

                  <div className="font-mono text-[10px] text-[var(--ink-3)] uppercase tracking-wider mt-1">
                    {node.role}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Active State Deep-Dive Panel */}
        <div className="border border-[var(--line-2)] bg-[var(--paper-2)] p-6 sm:p-8 lg:p-10 rounded-[2px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Detail narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-[var(--accent-soft)] text-[var(--accent)] rounded-[1px]">
                  STEP {activeNode.step} · {activeNode.role}
                </span>
                <span className="font-mono text-xs text-[var(--ink-3)]">
                  Continuous Feedback Loop
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[var(--ink-strong)]">
                {activeNode.title}
              </h3>

              <p className="font-body text-base sm:text-lg text-[var(--ink-strong)] leading-relaxed font-medium">
                {activeNode.shortSummary}
              </p>

              <p className="font-body text-sm sm:text-base text-[var(--ink-2)] leading-relaxed">
                {activeNode.detail}
              </p>
            </div>

            {/* Right: Structural Inputs and Outputs */}
            <div className="lg:col-span-6 space-y-4 pt-4 lg:pt-0 lg:border-l lg:border-[var(--line)] lg:pl-8">
              <div className="p-4 bg-[var(--surface)] border border-[var(--line)] rounded-[2px] space-y-2">
                <div className="flex items-center space-x-2 font-mono text-xs font-semibold text-[var(--ink-3)] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[var(--line-2)]" />
                  <span>Executive Input / Trigger</span>
                </div>
                <p className="font-body text-sm text-[var(--ink-strong)] font-medium">
                  {activeNode.input}
                </p>
              </div>

              <div className="p-4 bg-[var(--surface)] border border-[var(--accent)]/30 rounded-[2px] space-y-2">
                <div className="flex items-center space-x-2 font-mono text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>Decision-Ready Output / Artifact</span>
                </div>
                <p className="font-body text-sm text-[var(--ink-strong)] font-medium">
                  {activeNode.output}
                </p>
              </div>

              {/* Loopback Note */}
              <div className="flex items-center space-x-2 text-[12px] font-mono text-[var(--ink-3)] pt-2">
                <CornerDownLeft className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Integrated value creation: No vendor handoffs. Results trigger the next strategic hypothesis.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
