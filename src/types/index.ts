export interface UserProfile {
  monthlyIncome: number | null;
  spendingHabits: {
    fuel: number;
    travel: number;
    groceries: number;
    dining: number;
    shopping: number;
    utilities: number;
  };
  preferredBenefits: string[];
  existingCards: string[];
  creditScore: string;
  primaryUseCase: string;
}

export interface CreditCard {
  id: string;
  name: string;
  issuer: string;
  imageUrl: string;
  joiningFee: number;
  annualFee: number;
  rewardType: string;
  rewardRate: number;
  eligibility: {
    minIncome: number;
    minCreditScore: number;
  };
  benefits: string[];
  category: string;
  welcomeBonus: string;
  applyLink: string;
  keyFeatures: string[];
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

export interface Recommendation {
  card: CreditCard;
  score: number;
  reasons: string[];
  estimatedRewards: string;
}