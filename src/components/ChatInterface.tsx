import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Loader } from 'lucide-react';
import { ChatMessage, UserProfile } from '../types';
import { GroqService } from '../services/groqApi';

interface Props {
  onProfileComplete: (profile: UserProfile) => void;
}

export const ChatInterface: React.FC<Props> = ({ onProfileComplete }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    monthlyIncome: null,
    spendingHabits: {
      fuel: 0,
      travel: 0,
      groceries: 0,
      dining: 0,
      shopping: 0,
      utilities: 0,
    },
    preferredBenefits: [],
    existingCards: [],
    creditScore: '',
    primaryUseCase: '',
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const conversationHistory = useRef<any[]>([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Send initial greeting
    const initialMessage: ChatMessage = {
      id: '1',
      type: 'agent',
      content: "Hello! I'm your AI credit card advisor. I'll help you find the perfect credit card based on your needs and spending patterns. Let's start with your monthly income - what do you earn per month in INR?",
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
    conversationHistory.current.push({ role: 'assistant', content: initialMessage.content });
  }, []);

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: currentMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    conversationHistory.current.push({ role: 'user', content: currentMessage });
    
    // Update user profile based on the message
    updateUserProfile(currentMessage);
    
    setCurrentMessage('');
    setIsTyping(true);

    // Get AI response
    const aiResponse = await GroqService.getNextQuestion(conversationHistory.current, userProfile);
    
    const agentMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: 'agent',
      content: aiResponse,
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages(prev => [...prev, agentMessage]);
    conversationHistory.current.push({ role: 'assistant', content: aiResponse });

    // Check if we have enough information to make recommendations
    if (isProfileComplete()) {
      setTimeout(() => {
        onProfileComplete(userProfile);
      }, 2000);
    }
  };

  const updateUserProfile = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    // Extract income
    const incomeMatch = message.match(/(\d+(?:,\d+)*(?:\.\d+)?)/);
    if (incomeMatch && !userProfile.monthlyIncome) {
      const income = parseInt(incomeMatch[1].replace(/,/g, ''));
      if (income > 1000) {
        setUserProfile(prev => ({ ...prev, monthlyIncome: income }));
      }
    }

    // Extract spending patterns
    if (lowerMessage.includes('fuel') || lowerMessage.includes('petrol')) {
      const amount = message.match(/(\d+(?:,\d+)*)/);
      if (amount) {
        setUserProfile(prev => ({
          ...prev,
          spendingHabits: { ...prev.spendingHabits, fuel: parseInt(amount[1].replace(/,/g, '')) }
        }));
      }
    }

    if (lowerMessage.includes('travel')) {
      const amount = message.match(/(\d+(?:,\d+)*)/);
      if (amount) {
        setUserProfile(prev => ({
          ...prev,
          spendingHabits: { ...prev.spendingHabits, travel: parseInt(amount[1].replace(/,/g, '')) }
        }));
      }
    }

    if (lowerMessage.includes('groceries') || lowerMessage.includes('grocery')) {
      const amount = message.match(/(\d+(?:,\d+)*)/);
      if (amount) {
        setUserProfile(prev => ({
          ...prev,
          spendingHabits: { ...prev.spendingHabits, groceries: parseInt(amount[1].replace(/,/g, '')) }
        }));
      }
    }

    if (lowerMessage.includes('dining') || lowerMessage.includes('food') || lowerMessage.includes('restaurant')) {
      const amount = message.match(/(\d+(?:,\d+)*)/);
      if (amount) {
        setUserProfile(prev => ({
          ...prev,
          spendingHabits: { ...prev.spendingHabits, dining: parseInt(amount[1].replace(/,/g, '')) }
        }));
      }
    }

    if (lowerMessage.includes('shopping')) {
      const amount = message.match(/(\d+(?:,\d+)*)/);
      if (amount) {
        setUserProfile(prev => ({
          ...prev,
          spendingHabits: { ...prev.spendingHabits, shopping: parseInt(amount[1].replace(/,/g, '')) }
        }));
      }
    }

    // Extract preferences
    const benefits = [];
    if (lowerMessage.includes('cashback')) benefits.push('Cashback');
    if (lowerMessage.includes('travel') || lowerMessage.includes('miles')) benefits.push('Travel Points');
    if (lowerMessage.includes('lounge')) benefits.push('Airport Lounge Access');
    if (lowerMessage.includes('dining')) benefits.push('Dining Offers');
    if (lowerMessage.includes('fuel')) benefits.push('Fuel Benefits');
    
    if (benefits.length > 0) {
      setUserProfile(prev => ({
        ...prev,
        preferredBenefits: [...new Set([...prev.preferredBenefits, ...benefits])]
      }));
    }

    // Extract credit score
    if (lowerMessage.includes('excellent') || lowerMessage.includes('800')) {
      setUserProfile(prev => ({ ...prev, creditScore: 'excellent' }));
    } else if (lowerMessage.includes('good') || lowerMessage.includes('750') || lowerMessage.includes('720')) {
      setUserProfile(prev => ({ ...prev, creditScore: 'good' }));
    } else if (lowerMessage.includes('fair') || lowerMessage.includes('650')) {
      setUserProfile(prev => ({ ...prev, creditScore: 'fair' }));
    } else if (lowerMessage.includes('poor') || lowerMessage.includes('below')) {
      setUserProfile(prev => ({ ...prev, creditScore: 'poor' }));
    } else if (lowerMessage.includes('unknown') || lowerMessage.includes('not sure')) {
      setUserProfile(prev => ({ ...prev, creditScore: 'unknown' }));
    }
  };

  const isProfileComplete = (): boolean => {
    return userProfile.monthlyIncome !== null && 
           userProfile.creditScore !== '' &&
           userProfile.preferredBenefits.length > 0;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-3 ${
              message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}
          >
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              message.type === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-blue-500 shadow-md'
            }`}>
              {message.type === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
              message.type === 'user'
                ? 'bg-blue-500 text-white ml-auto'
                : 'bg-white text-gray-800 shadow-md'
            }`}>
              <p className="text-sm leading-relaxed">{message.content}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-blue-500 shadow-md flex items-center justify-center">
              <Bot size={16} />
            </div>
            <div className="bg-white text-gray-800 shadow-md px-4 py-3 rounded-2xl">
              <div className="flex items-center space-x-1">
                <Loader className="animate-spin" size={16} />
                <span className="text-sm">Thinking...</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isTyping}
          />
          <button
            onClick={sendMessage}
            disabled={!currentMessage.trim() || isTyping}
            className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};