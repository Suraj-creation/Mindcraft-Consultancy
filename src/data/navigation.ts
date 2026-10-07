/* Content for the What We Do menu. Summaries are the engine's own one-liners
   (ENGINE_NODES in landingData); each "includes" list is taken from the
   pillar page it links to, so the menu previews depth that actually exists. */

export interface PillarMenuItem {
  n: string;
  name: string;
  path: string;
  summary: string;
  includes: string[];
}

export const PILLAR_MENU: PillarMenuItem[] = [
  {
    n: '01',
    name: 'Market Research',
    path: '/what-we-do/market-research',
    summary: 'Turn market complexity into decision-ready intelligence.',
    // ResearchMethodologyMap tracks
    includes: [
      'Primary in-country fieldwork',
      'KOL and specialist physician panels',
      'Regulatory intelligence and policy tracking',
      'Competitor intelligence and route to market',
    ],
  },
  {
    n: '02',
    name: 'Business Consulting',
    path: '/what-we-do/business-consulting',
    summary: 'Turn intelligence into a strategy and a plan.',
    // BusinessConsulting "Five places advisory work lands"
    includes: [
      'Corporate and business strategy',
      'Digital and AI transformation',
      'Organisational design',
      'Process improvement and systems',
      'Policy and regulatory advisory',
    ],
  },
  {
    n: '03',
    name: 'AI Enterprise Solutions',
    path: '/what-we-do/ai-enterprise-solutions',
    summary: 'Operationalise the plan into working systems.',
    // AITechnologyArchitecture layers
    includes: [
      'Ingestion and document pipelines',
      'Private vector memory',
      'Domain-calibrated models',
      'Governance and audit guardrails',
      'Enterprise integration',
    ],
  },
  {
    n: '04',
    name: 'AI Training',
    path: '/what-we-do/ai-training',
    summary: 'Embed capability so adoption sticks.',
    // AILearningLadder tiers
    includes: [
      'Executive — boards and C-suite',
      'Operational — functional leads',
      'Clinical — medical and lab teams',
      'Engineering — technical teams',
      'Institutional — enterprise taskforces',
    ],
  },
];
