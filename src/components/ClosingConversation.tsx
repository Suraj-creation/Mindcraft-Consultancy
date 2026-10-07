import React from 'react';
import { ArrowUpRight, Compass, Mail, MapPin } from 'lucide-react';

interface ClosingConversationProps {
  onOpenConversation: () => void;
}

export const ClosingConversation: React.FC<ClosingConversationProps> = ({
  onOpenConversation,
}) => {
  return (
    <section
      id="conversation"
      className="py-20 md:py-28 bg-[var(--ink-bg)] text-[var(--on-ink)] border-b border-[var(--on-ink-line)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (8 cols): High-impact Editorial Invitation */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-[var(--accent)] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span>08 — Direct Engagement</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[var(--on-ink)] leading-[1.12]">
              Start a conversation <br className="hidden sm:inline" />
              <span className="italic font-serif font-normal text-[var(--accent)]">with MindCraft.</span>
            </h2>

            <p className="font-body text-base sm:text-lg text-[var(--on-ink-2)] leading-relaxed max-w-2xl">
              Tell us your challenge, industry, or target African region — our senior partners in Nairobi will review your inquiry and respond with a focused, source-grounded point of view within two business days.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConversation}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-semibold text-[var(--color-ground-deep)] bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] transition-colors cursor-pointer"
              >
                <span>Initiate Briefing</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#explorer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-xs font-mono tracking-wider uppercase font-medium text-[var(--on-ink)] border border-[var(--on-ink-line)] hover:bg-white/5 rounded-[2px] transition-colors"
              >
                <span>Explore Your Market</span>
                <Compass className="w-3.5 h-3.5 text-[var(--on-ink-2)]" />
              </a>
            </div>

            {/* Verbatim Brand Line */}
            <div className="pt-8 border-t border-[var(--on-ink-line)] text-xs font-mono text-[var(--on-ink-2)]">
              "Building AI-powered growth for Life Sciences and industry across Africa and beyond."
            </div>
          </div>

          {/* Right Column (4 cols): Nairobi Headquarters Briefing Block */}
          <div className="lg:col-span-4 p-6 sm:p-8 bg-[var(--ink-bg-2)] border border-[var(--on-ink-line)] rounded-[2px] space-y-6">
            <div className="font-mono text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">
              Command Headquarters
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="space-y-1">
                <div className="text-[var(--on-ink)] font-semibold">MINDCRAFT CONSULTANCY SERVICES</div>
                <div className="text-[var(--on-ink-2)]">Nairobi, Kenya · East Africa Hub</div>
                <div className="text-[var(--accent)]">1°17′S · 36°49′E</div>
              </div>

              <div className="pt-3 border-t border-[var(--on-ink-line)] space-y-1 text-[var(--on-ink-2)]">
                <div>Direct Partner Inquiries:</div>
                <div className="text-[var(--on-ink)] font-medium">dialogue@mindcraft.africa</div>
                <div>General Enquiries: contact@mindcraft.africa</div>
              </div>

              <div className="pt-3 border-t border-[var(--on-ink-line)] text-[11px] text-[var(--on-ink-2)] leading-relaxed">
                Response protocol: Every inquiry is matched directly to a practice director specializing in your industry vertical and target jurisdiction.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
