export interface EngineNode {
  id: string;
  step: string;
  title: string;
  shortSummary: string;
  detail: string;
  input: string;
  output: string;
  role: string;
}

export interface LifeSciencesSector {
  id: string;
  name: string;
  subTitle: string;
  description: string;
  regulatoryFocus: string;
  coreDeliverables: string[];
}

export interface GeoRegion {
  id: string;
  name: string;
  coverage: string;
  nairobiRelation: string;
  focusMarkets: string[];
  keyIntelligence: string;
  commercialContext: string;
}

export interface EngagementStage {
  number: string;
  name: string;
  objective: string;
  outcome: string;
}

export interface Differentiator {
  num: string;
  title: string;
  statement: string;
  proof: string;
}

export interface AudiencePathway {
  id: string;
  role: string;
  mandate: string;
  recommendedPath: string;
  keyAction: string;
  targetUrl: string;
}

export interface ExplorerMatrixEntry {
  industry: string;
  geography: string;
  capability: string;
  headline: string;
  scopeSummary: string;
  regulatoryContext: string;
  entryDeliverable: string;
}
