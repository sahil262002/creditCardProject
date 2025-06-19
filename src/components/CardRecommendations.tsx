import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Star, CreditCard, Gift, Zap, CheckCircle } from 'lucide-react';
import { UserProfile, Recommendation } from '../types';
import { RecommendationEngine } from '../services/recommendationEngine';

interface Props {
  userProfile: UserProfile;
  onBack: () => void;
}

export const CardRecommendations: React.FC<Props> = ({ userProfile, onBack }) => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  useEffect(() => {
    const generateRecommendations = async () => {
      setLoading(true);
      try {
        const recs = await RecommendationEngine.generateRecommendations(userProfile);
        setRecommendations(recs);
      } catch (error) {
        console.error('Error generating recommendations:', error);
      } finally {
        setLoading(false);
      }
    };

    generateRecommendations();
  }, [userProfile]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse">
            <CreditCard size={64} className="mx-auto mb-4 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Finding Perfect Cards</h2>
          <p className="text-gray-600">Analyzing your preferences...</p>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'Super Premium': 'bg-gradient-to-r from-purple-500 to-pink-500',
      'Premium': 'bg-gradient-to-r from-blue-500 to-indigo-600',
      'Travel': 'bg-gradient-to-r from-green-500 to-teal-500',
      'Cashback': 'bg-gradient-to-r from-orange-500 to-red-500',
      'Lifestyle': 'bg-gradient-to-r from-pink-500 to-rose-500',
      'Rewards': 'bg-gradient-to-r from-indigo-500 to-purple-500',
      'Entry Level': 'bg-gradient-to-r from-gray-500 to-gray-600',
      'Standard': 'bg-gradient-to-r from-blue-400 to-blue-500',
    };
    return colors[category as keyof typeof colors] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center mb-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Start Over</span>
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Personalized Recommendations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Based on your profile, here are the best credit cards tailored to your spending patterns and preferences.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {recommendations.map((rec, index) => (
            <div
              key={rec.card.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                selectedCard === rec.card.id ? 'ring-4 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedCard(selectedCard === rec.card.id ? null : rec.card.id)}
            >
              <div className={`h-32 ${getCategoryColor(rec.card.category)} relative`}>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-300 fill-current" size={16} />
                    <span className="text-white font-semibold">#{index + 1} Match</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white bg-opacity-30 px-3 py-1 rounded-full text-white text-xs font-medium">
                    {rec.card.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-lg">{rec.card.name}</h3>
                  <p className="text-white opacity-90 text-sm">{rec.card.issuer}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Annual Fee</p>
                    <p className="font-bold text-gray-800">
                      {rec.card.annualFee === 0 ? 'FREE' : `₹${rec.card.annualFee.toLocaleString()}`}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Reward Rate</p>
                    <p className="font-bold text-gray-800">{rec.card.rewardRate}X</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Zap className="mr-2 text-yellow-500" size={16} />
                    Why This Card?
                  </h4>
                  <ul className="space-y-1">
                    {rec.reasons.slice(0, 3).map((reason, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <CheckCircle className="mr-2 mt-0.5 text-green-500 flex-shrink-0" size={12} />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800 font-medium">{rec.estimatedRewards}</p>
                </div>

                {selectedCard === rec.card.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-1 mb-4">
                      {rec.card.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600">• {feature}</li>
                      ))}
                    </ul>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {rec.card.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>

                    <div className="text-sm text-gray-600 mb-4">
                      <p><strong>Welcome Bonus:</strong> {rec.card.welcomeBonus}</p>
                      <p><strong>Joining Fee:</strong> ₹{rec.card.joiningFee.toLocaleString()}</p>
                    </div>
                  </div>
                )}

                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {recommendations.length === 0 && (
          <div className="text-center py-12">
            <CreditCard size={64} className="mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold text-gray-600 mb-2">No Recommendations Found</h2>
            <p className="text-gray-500">Please try adjusting your preferences and try again.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get New Recommendations
          </button>
        </div>
      </div>
    </div>
  );
};