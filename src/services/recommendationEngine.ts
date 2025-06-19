import { UserProfile, CreditCard, Recommendation } from '../types';
import { creditCards } from '../data/creditCards';
import { GroqService } from './groqApi';

export class RecommendationEngine {
  static async generateRecommendations(userProfile: UserProfile): Promise<Recommendation[]> {
    // Filter cards based on eligibility
    const eligibleCards = creditCards.filter(card => {
      const meetsIncomeRequirement = !userProfile.monthlyIncome || 
        (userProfile.monthlyIncome * 12) >= card.eligibility.minIncome;
      
      const meetsCreditScore = userProfile.creditScore === 'unknown' || 
        this.getCreditScoreNumber(userProfile.creditScore) >= card.eligibility.minCreditScore;
      
      return meetsIncomeRequirement && meetsCreditScore;
    });

    // Score each eligible card
    const scoredCards = await Promise.all(
      eligibleCards.map(async (card) => {
        const score = this.calculateCardScore(userProfile, card);
        const reasons = await GroqService.generateRecommendationReasons(userProfile, card);
        const estimatedRewards = await GroqService.estimateRewards(userProfile, card);
        
        return {
          card,
          score,
          reasons,
          estimatedRewards,
        };
      })
    );

    // Sort by score and return top 5
    return scoredCards
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }

  private static calculateCardScore(userProfile: UserProfile, card: CreditCard): number {
    let score = 0;

    // Base score from reward rate
    score += card.rewardRate * 10;

    // Bonus for preferred benefits
    if (userProfile.preferredBenefits) {
      const matchingBenefits = card.benefits.filter(benefit =>
        userProfile.preferredBenefits.some(pref => 
          benefit.toLowerCase().includes(pref.toLowerCase())
        )
      );
      score += matchingBenefits.length * 20;
    }

    // Category matching bonus
    if (userProfile.primaryUseCase) {
      if (userProfile.primaryUseCase.toLowerCase().includes(card.category.toLowerCase())) {
        score += 30;
      }
    }

    // Penalty for high fees if income is lower
    if (userProfile.monthlyIncome && card.annualFee > 0) {
      const incomeToFeeRatio = (userProfile.monthlyIncome * 12) / card.annualFee;
      if (incomeToFeeRatio < 50) {
        score -= 20;
      }
    }

    // Bonus for no annual fee
    if (card.annualFee === 0) {
      score += 15;
    }

    // Spending pattern matching
    if (userProfile.spendingHabits) {
      const totalSpending = Object.values(userProfile.spendingHabits).reduce((sum, amount) => sum + amount, 0);
      if (totalSpending > 20000) {
        score += 10; // Bonus for high spenders
      }
    }

    return Math.max(0, score);
  }

  private static getCreditScoreNumber(scoreRange: string): number {
    const scoreMap: { [key: string]: number } = {
      'poor': 550,
      'fair': 650,
      'good': 720,
      'excellent': 800,
      'unknown': 700, // Assume average
    };
    
    return scoreMap[scoreRange.toLowerCase()] || 700;
  }
}