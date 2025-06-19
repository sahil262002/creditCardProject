import React, { useState } from 'react';
import { CreditCard, MessageCircle, Shield, Zap } from 'lucide-react';
import { ChatInterface } from './components/ChatInterface';
import { CardRecommendations } from './components/CardRecommendations';
import { UserProfile } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'chat' | 'recommendations'>('landing');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleStartChat = () => {
    setCurrentView('chat');
  };

  const handleProfileComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    setCurrentView('recommendations');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    setUserProfile(null);
  };

  const handleBackToChat = () => {
    setCurrentView('chat');
  };

  if (currentView === 'chat') {
    return (
      <div className="h-screen">
        <ChatInterface onProfileComplete={handleProfileComplete} />
      </div>
    );
  }

  if (currentView === 'recommendations' && userProfile) {
    return <CardRecommendations userProfile={userProfile} onBack={handleBackToLanding} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-xl">
                <CreditCard className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                CardSage AI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
              <button
                onClick={handleStartChat}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Find Your Perfect
            </span>
            <br />
            <span className="text-gray-800">Credit Card</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let our AI-powered advisor guide you through a personalized journey to discover 
            credit cards that match your spending habits and financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleStartChat}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-xl flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Start Free Consultation</span>
            </button>
            <p className="text-sm text-gray-500">
              ✨ Powered by Advanced AI • 100% Free • No Credit Check Required
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose CardSage AI?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our intelligent system analyzes your unique financial profile to recommend 
            the best credit cards from leading Indian banks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl w-fit mb-4">
              <MessageCircle className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">AI-Powered Conversations</h3>
            <p className="text-gray-600 leading-relaxed">
              Our intelligent chatbot asks the right questions to understand your spending patterns, 
              income, and preferences for personalized recommendations.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-xl w-fit mb-4">
              <Shield className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Comprehensive Database</h3>
            <p className="text-gray-600 leading-relaxed">
              Access to 20+ premium credit cards from top Indian banks with detailed information 
              about fees, rewards, and benefits.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl w-fit mb-4">
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Recommendations</h3>
            <p className="text-gray-600 leading-relaxed">
              Get ranked recommendations with detailed explanations, reward estimates, 
              and personalized reasons why each card suits your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get personalized credit card recommendations in just 3 simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Chat with AI</h3>
              <p className="text-gray-600">
                Answer simple questions about your income, spending habits, and preferences 
                in a natural conversation with our AI advisor.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced algorithm analyzes your profile against our comprehensive 
                database of credit cards to find the best matches.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized card recommendations with detailed explanations, 
                reward estimates, and direct application links.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Card?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who have found their ideal credit cards with CardSage AI
          </p>
          <button
            onClick={handleStartChat}
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-xl"
          >
            Start Your Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-xl">
                <CreditCard className="text-white" size={20} />
              </div>
              <span className="text-lg font-bold">CardSage AI</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 CardSage AI. Powered by advanced AI technology.
              <br />
              Helping you make smarter financial decisions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;