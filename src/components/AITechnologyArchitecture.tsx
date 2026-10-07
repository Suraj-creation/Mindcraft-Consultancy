import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface ArchitectureLayer {
  id: string;
  step: string;
  name: string;
  /* One line for the rail — what the layer handles, not how. */
  role: string;
  summary: string;
  components: string[];
  security: string;
  residency: string;
}

/* The stack is ordered: data enters at 01 and reaches a desk at 05.
   The numerals are the sequence, not decoration. */
const LAYERS: ArchitectureLayer[] = [
  {
    id: 'ingestion',
    step: '01',
    name: 'Ingestion and document pipeline',
    role: 'Structured records and legacy clinical documents',
    summary: 'Private ETL ingestion, with redaction at the boundary.',
    components: [
      'Multi-format OCR for scanned African hospital records and regulatory filings',
      'PII anonymisation stripping national IDs, patient names and phone numbers at the boundary',
      'Data lineage tagging with immutable audit stamps',
    ],
    security: 'TLS 1.3 in transit, AES-256 at rest, no cross-border egress',
    residency: 'Built against the Kenya Data Protection Act 2019, Nigeria’s NDPR and South Africa’s POPIA',
  },
  {
    id: 'vector',
    step: '02',
    name: 'Private vector memory',
    role: 'Semantic retrieval anchored to statute',
    summary: 'Isolated embedding memory, indexed against the regulations that govern it.',
    components: [
      'Hierarchical chunking that preserves clinical context and dosage specifications',
      'Multi-index vector retrieval (HNSW) paired with BM25 keyword reranking',
      'Knowledge graph mapping relationships across national formularies and clinical guidelines',
    ],
    security: 'Tenant-isolated index partitions with per-client key derivation',
    residency: 'Runs on your own private VPC or on your own servers',
  },
  {
    id: 'models',
    step: '03',
    name: 'Domain-calibrated models',
    role: 'Open weights, tuned on your corpus',
    summary: 'Models tuned to your regulatory and clinical language, held on your infrastructure.',
    components: [
      'Parameter-efficient fine-tuning (LoRA / QLoRA) on curated East African clinical guidelines',
      'Multilingual adaptation across English, Swahili and regional clinical terminology',
      'Deterministic structured JSON output for direct software integration',
    ],
    security: 'Weights held inside your own tenant infrastructure',
    residency: 'No dependency on foreign cloud model APIs or consumer services',
  },
  {
    id: 'governance',
    step: '04',
    name: 'Governance and audit guardrails',
    role: 'Validation before anything reaches a reader',
    summary: 'Deterministic checks that catch an unsupported answer before it is shown.',
    components: [
      'Source-grounded citation enforcement — every answer maps back to an internal page',
      'Clinical safety boundaries preventing unauthorised prescription generation',
      'Immutable compliance logging for statutory regulatory examination',
    ],
    security: 'Policy engine that rejects out-of-bounds queries before inference',
    residency: 'Transaction logs retained in country under the applicable statutory retention rules',
  },
  {
    id: 'integration',
    step: '05',
    name: 'Enterprise integration',
    role: 'ERP, EMR and core banking systems',
    summary: 'Interfaces into the systems the work already runs on.',
    components: [
      'REST and gRPC microservices with OpenAPI 3.1 specifications',
      'Webhooks triggering hospital triage queues or customs declaration drafts',
      'Role-based access control synchronised with your Active Directory or LDAP',
    ],
    security: 'OAuth 2.0 and mTLS mutual certificate authentication',
    residency: 'Operates inside your existing enterprise security boundary',
  },
];

export const AITechnologyArchitecture: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { navigate } = useNavigation();
  const [activeId, setActiveId] = useState('ingestion');
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = LAYERS.findIndex((l) => l.id === activeId);
  const l = LAYERS[activeIndex] ?? LAYERS[0];

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    let next = -1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % LAYERS.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + LAYERS.length) % LAYERS.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = LAYERS.length - 1;
    if (next < 0) return;
    e.preventDefault();
    setActiveId(LAYERS[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div className={className}>
      {/* The stack as one rail read left to right: data enters at 01 and
          reaches a desk at 05. Layers already passed keep a strong rule, so
          the rail shows how far into the stack the selection sits. */}
      <ol
        role="tablist"
        aria-label="Architecture layers"
        className="grid grid-cols-1 border-t border-[var(--color-line-2)] sm:grid-cols-2 lg:grid-cols-5"
      >
        {LAYERS.map((layer, i) => {
          const on = layer.id === activeId;
          const below = i < activeIndex;
          return (
            <li key={layer.id} role="presentation" className="relative">
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 -top-px h-[2px] transition-colors ${
                  on
                    ? 'bg-[var(--color-accent)]'
                    : below
                      ? 'bg-[var(--color-line-strong)]'
                      : 'bg-transparent'
                }`}
              />
              <button
                ref={(el) => { refs.current[i] = el; }}
                id={`arch-tab-${layer.id}`}
                role="tab"
                aria-selected={on}
                aria-controls="arch-panel"
                tabIndex={on ? 0 : -1}
                onClick={() => setActiveId(layer.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`group flex h-full min-h-[44px] w-full cursor-pointer flex-col gap-1.5 border-b border-[var(--color-line)] py-5 pr-6 text-left transition-colors lg:border-b-0 lg:py-6 ${
                  i > 0 ? 'lg:border-l lg:pl-6' : ''
                }`}
              >
                <span className="font-mono text-eyebrow text-[var(--color-accent)]">{layer.step}</span>
                <span
                  className={`text-balance text-h5 transition-colors ${
                    on
                      ? 'text-[var(--color-ink-strong)]'
                      : 'text-[var(--color-ink-2)] group-hover:text-[var(--color-ink-strong)]'
                  }`}
                >
                  {layer.name}
                </span>
                <span className="text-caption text-[var(--color-ink-3)]">{layer.role}</span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* The selected layer reads across in three columns: what it is and
          how it is secured, what it contains, and where it runs. */}
      <div
        id="arch-panel"
        role="tabpanel"
        aria-labelledby={`arch-tab-${l.id}`}
        className="mt-8 grid grid-cols-1 gap-x-12 gap-y-10 bg-[var(--color-ground-deep)] p-6 sm:p-8 lg:grid-cols-12 lg:p-10"
      >
        <div className="lg:col-span-4">
          <h3 className="text-h4">{l.summary}</h3>
          <dl className="mt-6">
            {[
              ['Security', l.security],
              ['Data residency', l.residency],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-[var(--color-line)] py-3.5">
                <dt className="font-display text-body-sm font-medium text-[var(--color-ink-3)]">{k}</dt>
                <dd className="mt-1 text-body text-[var(--color-ink-2)]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5">
          <h4 className="font-display text-body-sm font-medium text-[var(--color-ink-3)]">
            What the layer contains
          </h4>
          <ul className="mt-4">
            {l.components.map((c) => (
              <li key={c} className="border-t border-[var(--color-line)] py-3.5 text-body text-[var(--color-ink)]">
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-[var(--color-line)] pt-8 lg:col-span-3 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <h4 className="font-display text-body font-medium text-[var(--color-accent)]">Where it runs</h4>
          <p className="mt-3 text-body text-[var(--color-ink)]">
            Every layer is designed to be deployed on infrastructure you control — your own servers
            or your own cloud tenancy. Nothing has to leave your environment for the system to work.
          </p>

          <button
            onClick={() => navigate('/contact?topic=ai-enterprise-architecture')}
            className="group mt-6 inline-flex min-h-[44px] cursor-pointer items-center gap-2 text-body-sm text-[var(--color-accent)] hover:text-[var(--color-accent-2)]"
          >
            Discuss an architecture
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
