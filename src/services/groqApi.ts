const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export interface GroqResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export class GroqService {
  private static async makeRequest(messages: any[]): Promise<string> {
    try {
      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages,
          temperature: 0.7,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data: GroqResponse = await response.json();
      return data.choices[0]?.message?.content || 'Sorry, I couldn\'t process that request.';
    } catch (error) {
      console.error('Groq API Error:', error);
      return 'I apologize, but I\'m having trouble connecting right now. Please try again.';
    }
  }

  static async getNextQuestion(conversationHistory: any[], userProfile: any): Promise<string> {
    const systemPrompt = `You are a friendly and professional credit card advisor for Indian consumers. Your goal is to gather information about the user's financial situation and preferences to recommend the best credit cards.

Current user profile: ${JSON.stringify(userProfile)}

Ask ONE question at a time. Be conversational and friendly. Based on what information is missing, ask about:
1. Monthly income (in INR)
2. Monthly spending on different categories (fuel, travel, groceries, dining, shopping, utilities)
3. Preferred benefits (cashback, travel points, lounge access, dining offers, fuel benefits)
4. Existing credit cards (optional)
5. Approximate credit score or let them say "unknown"
6. Primary use case (travel, shopping, dining, fuel, general spending)

Keep responses concise and natural. Don't ask multiple questions in one message.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
    ];

    return await this.makeRequest(messages);
  }

  static async generateRecommendationReasons(userProfile: any, card: any): Promise<string[]> {
    const prompt = `Based on this user profile: ${JSON.stringify(userProfile)} and this credit card: ${JSON.stringify(card)}, provide 3-4 specific reasons why this card is a good match. Be specific about benefits and rewards. Return as a JSON array of strings.`;

    const messages = [
      { role: 'system', content: 'You are a credit card expert. Provide specific, factual reasons for card recommendations.' },
      { role: 'user', content: prompt }
    ];

    const response = await this.makeRequest(messages);
    
    try {
      return JSON.parse(response);
    } catch {
      return [
        'Good reward rate for your spending pattern',
        'Matches your income eligibility criteria',
        'Offers benefits you prefer'
      ];
    }
  }

  static async estimateRewards(userProfile: any, card: any): Promise<string> {
    const totalMonthlySpending = Object.values(userProfile.spendingHabits || {}).reduce((sum: number, amount: any) => sum + (amount || 0), 0);
    const annualSpending = totalMonthlySpending * 12;
    
    if (card.rewardType === 'Cashback') {
      const estimatedCashback = (annualSpending * card.rewardRate) / 100;
      return `Estimated annual cashback: ₹${estimatedCashback.toLocaleString()}`;
    } else {
      const estimatedPoints = (annualSpending / 100) * card.rewardRate;
      return `Estimated annual reward points: ${estimatedPoints.toLocaleString()}`;
    }
  }
}