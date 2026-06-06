export type TabType = 'home' | 'products' | 'pledge' | 'sponsor' | 'contact' | 'deck';

export interface WaterProduct {
  id: string;
  name: string;
  tagline: string;
  vision: string;
  status: 'Concept' | 'Prototype' | 'Alpha' | 'Beta' | 'Market Ready';
  fundingGoal: string;
  fundingRaised: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techArchitecture: {
    frontend?: string;
    backend?: string;
    engine?: string;
    realtime?: string;
    payments?: string;
    database?: string;
  };
  businessModel: string;
  societalBenefit: string;
  iconName: string;
}

export interface InvestmentSimulation {
  amount: number;
  selectedAllocation: { [key: string]: number };
}

export interface InvestorMessage {
  name: string;
  email: string;
  company: string;
  amountToInvest: number;
  proposalType: string;
  message: string;
}
