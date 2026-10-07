/* Industry taxonomy shared by the Industries page and the site navigation.
   One source, so a vertical can be deep-linked (/industries?v=<id>) and the
   menu can never list something the page does not have. */

export interface Vertical {
  id: string;
  name: string;
  group: string;
  relevance: string;
  scope: string;
}

/* `scope` describes what an engagement covers — an offering, never a record
   of work done. MindCraft was established in 2026 and has no track record
   to cite; anything phrased as a past project would be invented. */
export const VERTICALS: Vertical[] = [
  {
    id: 'banking',
    name: 'Commercial Banking & FinTech',
    group: 'Financial Services',
    relevance:
      'Cross-border payments, SME credit scoring, mobile money integration and anti-money-laundering obligations.',
    scope: 'Credit risk models built on localised mobile transaction data; payment corridor analysis.',
  },
  {
    id: 'insurance',
    name: 'Insurance & Micro-Insurance',
    group: 'Financial Services',
    relevance:
      'Parametric climate cover, health underwriting risk pools and claims adjudication at scale.',
    scope: 'Claims automation and fraud-detection pipelines designed for regional health insurers.',
  },
  {
    id: 'chemicals',
    name: 'Chemicals & Agrochemicals',
    group: 'Industrial & Chemicals',
    relevance:
      'Manufacturer and distributor networks, registration requirements and formulation import dependency.',
    scope: 'Channel and distributor mapping; product registration strategy across national authorities.',
  },
  {
    id: 'automotive',
    name: 'Automotive & Aftermarket',
    group: 'Industrial & Chemicals',
    relevance:
      'Assembly localisation, dealer networks and aftermarket parts distribution across fragmented markets.',
    scope: 'Dealer and aftermarket network studies; demand modelling for assembly and parts operations.',
  },
  {
    id: 'energy',
    name: 'Renewable Energy & Off-Grid',
    group: 'Infrastructure & Energy',
    relevance:
      'Commercial and industrial solar feasibility, pay-as-you-go customer analytics and carbon credit validation.',
    scope: 'Demand forecasting and default-risk modelling for mini-grid and pay-as-you-go operators.',
  },
  {
    id: 'logistics',
    name: 'Logistics, Ports & Supply Chain',
    group: 'Infrastructure & Energy',
    relevance:
      'Northern and Central corridor transit, port congestion and multimodal freight routing.',
    scope: 'Cold-chain telemetry auditing and transit-time studies from Mombasa and Dar es Salaam inland.',
  },
  {
    id: 'agriculture',
    name: 'Agribusiness & Crop Science',
    group: 'Consumer & Agriculture',
    relevance:
      'Smallholder network structure, agricultural input supply chains and satellite yield prediction.',
    scope: 'Distributor network mapping and input distribution route optimisation.',
  },
  {
    id: 'fmcg',
    name: 'Consumer Goods & Retail',
    group: 'Consumer & Agriculture',
    relevance:
      'Informal trade route-to-market, price elasticity and retail audit coverage in tier-two and tier-three towns.',
    scope: 'Informal retail census and route-to-market design across urban and peri-urban clusters.',
  },
  {
    id: 'telecom',
    name: 'Telecommunications & Digital Infrastructure',
    group: 'Technology & Public Sector',
    relevance:
      'Fibre backhaul expansion, tower company efficiency and enterprise data centre demand.',
    scope: 'Enterprise cloud and data-sovereignty market sizing; backhaul expansion feasibility.',
  },
  {
    id: 'public-sector',
    name: 'Public Sector & Development Agencies',
    group: 'Technology & Public Sector',
    relevance:
      'National digitalisation plans, donor programme monitoring, health system strengthening and AfCFTA trade enablement.',
    scope: 'Digitalisation roadmaps and multi-country monitoring and evaluation design.',
  },
  {
    id: 'education',
    name: 'Higher Education & Research Institutes',
    group: 'Technology & Public Sector',
    relevance:
      'AI curricula integration, research grant administration and clinical trial biobanking registries.',
    scope: 'Institutional AI curricula and research data repository architecture.',
  },
];

export const VERTICAL_GROUPS = [
  'Financial Services',
  'Industrial & Chemicals',
  'Infrastructure & Energy',
  'Consumer & Agriculture',
  'Technology & Public Sector',
];

/* Source-faithful, in the Corporate Profile's own order. Ids match the
   sub-sector tabs in LifeSciencesEcosystemDiagram, so
   /industries/life-sciences?sector=<id> opens the right one. */
export const LIFE_SCIENCES_SUBSECTORS = [
  { id: 'pharma', name: 'Pharmaceuticals' },
  { id: 'devices', name: 'Medical Devices' },
  { id: 'diagnostics', name: 'Medical Diagnostics' },
  { id: 'equipment', name: 'Medical Equipment' },
  { id: 'consumables', name: 'Surgical Consumables' },
  { id: 'hospitals', name: 'Hospitals & Healthcare Providers' },
];
