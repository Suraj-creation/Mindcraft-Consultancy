import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ConversationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: string;
}

export const ConversationModal: React.FC<ConversationModalProps> = ({
  isOpen,
  onClose,
  initialContext = '',
}) => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('Kenya / East Africa');
  const [industry, setIndustry] = useState('Pharmaceuticals & Life Sciences');
  const [scope, setScope] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialContext) {
      setScope(`Inquiry Context: ${initialContext}\n\nKey Strategic Objectives: `);
    }
  }, [initialContext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="briefing-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--ink-bg)]/80 backdrop-blur-xs"
    >
      <div
        className="relative w-full max-w-2xl bg-[var(--paper)] border border-[var(--line-2)] rounded-[2px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--line)] bg-[var(--paper-2)]">
          <div className="space-y-0.5">
            <span className="font-mono text-[10px] text-[var(--accent)] tracking-widest uppercase font-semibold">
              Advisory Briefing Intake
            </span>
            <h3 id="briefing-modal-title" className="font-display text-lg font-medium text-[var(--ink-strong)]">
              Start a Conversation with MindCraft
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[var(--ink-3)] hover:text-[var(--ink-strong)] rounded-xs focus:outline-none cursor-pointer"
            aria-label="Close conversation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-display text-2xl font-medium text-[var(--ink-strong)]">
                Briefing Registered
              </h4>
              <p className="font-body text-base text-[var(--ink-2)] max-w-md mx-auto leading-relaxed">
                Thank you, {name || 'Partner'}. Your inquiry regarding {organization || 'your organization'} has been assigned to our practice director in Nairobi. You will receive a tailored point of view within two business days.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 text-xs font-mono tracking-wider uppercase font-semibold text-[var(--color-ground-deep)] bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] cursor-pointer"
                >
                  Return to Exploration
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-mono text-xs text-[var(--ink-3)] uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dr. Sarah Mwangi"
                    className="w-full px-3 py-2 text-sm bg-[var(--surface)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] focus:border-[var(--accent)] focus:outline-none font-body"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-mono text-xs text-[var(--ink-3)] uppercase tracking-wider">
                    Organization / Institution *
                  </label>
                  <input
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Pan-African Health Group"
                    className="w-full px-3 py-2 text-sm bg-[var(--surface)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] focus:border-[var(--accent)] focus:outline-none font-body"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-mono text-xs text-[var(--ink-3)] uppercase tracking-wider">
                    Institutional Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="s.mwangi@institution.org"
                    className="w-full px-3 py-2 text-sm bg-[var(--surface)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] focus:border-[var(--accent)] focus:outline-none font-body"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-mono text-xs text-[var(--ink-3)] uppercase tracking-wider">
                    Target Geography
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[var(--surface)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] focus:border-[var(--accent)] focus:outline-none font-body cursor-pointer"
                  >
                    <option value="Kenya / East Africa">Kenya / East Africa (EAC)</option>
                    <option value="Nigeria / West Africa">Nigeria / West Africa (ECOWAS)</option>
                    <option value="South Africa / SADC">South Africa / Southern Africa</option>
                    <option value="North Africa">North Africa (Egypt, Morocco)</option>
                    <option value="Pan-African Scope">Pan-African (Multi-jurisdiction)</option>
                    <option value="Europe / US Corridor">Europe / US to African Corridor</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-mono text-xs text-[var(--ink-3)] uppercase tracking-wider">
                  Industry Vertical
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[var(--surface)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] focus:border-[var(--accent)] focus:outline-none font-body cursor-pointer"
                >
                  <option value="Pharmaceuticals & Life Sciences">Pharmaceuticals & Life Sciences (Core)</option>
                  <option value="Medical Devices & Equipment">Medical Devices & Diagnostics</option>
                  <option value="Healthcare Provider & Hospital Group">Hospital & Healthcare Systems</option>
                  <option value="Agrochemicals & Crop Science">Agrochemicals & Crop Science</option>
                  <option value="Financial Services & FinTech">Commercial Banking & FinTech</option>
                  <option value="Energy, Utilities & Mining">Energy & Infrastructure</option>
                  <option value="Public Sector & Development">Public Sector, Donor & NGO</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block font-mono text-xs text-[var(--ink-3)] uppercase tracking-wider">
                  Strategic Challenge / Briefing Context
                </label>
                <textarea
                  rows={4}
                  required
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  placeholder="Outline the decision to be made, regulatory deadlines, or operational systems to deploy..."
                  className="w-full px-3 py-2 text-sm bg-[var(--surface)] border border-[var(--line)] rounded-[2px] text-[var(--ink-strong)] focus:border-[var(--accent)] focus:outline-none font-body leading-relaxed"
                />
              </div>

              <div className="pt-3 border-t border-[var(--line)] flex items-center justify-between">
                <div className="text-[11px] font-mono text-[var(--ink-3)]">
                  Response SLA: 48 hours from senior Nairobi partner.
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-mono tracking-wider uppercase font-semibold text-[var(--color-ground-deep)] bg-[var(--accent)] hover:bg-[var(--accent-2)] rounded-[2px] cursor-pointer"
                >
                  <span>Submit Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
