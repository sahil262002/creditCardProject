import { CreditCard } from '../types';

export const creditCards: CreditCard[] = [
  {
    id: 'hdfc-regalia',
    name: 'HDFC Bank Regalia Credit Card',
    issuer: 'HDFC Bank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 2500,
    annualFee: 2500,
    rewardType: 'Reward Points',
    rewardRate: 4,
    eligibility: {
      minIncome: 300000,
      minCreditScore: 750
    },
    benefits: ['Airport Lounge Access', 'Dining Offers', 'Fuel Surcharge Waiver'],
    category: 'Premium',
    welcomeBonus: '2,500 Reward Points',
    applyLink: '#',
    keyFeatures: ['4 reward points per Rs. 150 spent', '12 complimentary airport lounge visits', '1% fuel surcharge waiver']
  },
  {
    id: 'sbi-cashback',
    name: 'SBI Cashback Credit Card',
    issuer: 'State Bank of India',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 999,
    annualFee: 999,
    rewardType: 'Cashback',
    rewardRate: 5,
    eligibility: {
      minIncome: 200000,
      minCreditScore: 700
    },
    benefits: ['Online Shopping Cashback', 'No Foreign Transaction Fee'],
    category: 'Cashback',
    welcomeBonus: 'Rs. 2,000 Cashback',
    applyLink: '#',
    keyFeatures: ['5% cashback on online shopping', '1% cashback on all other spends', 'Zero markup on foreign currency']
  },
  {
    id: 'axis-magnus',
    name: 'Axis Bank Magnus Credit Card',
    issuer: 'Axis Bank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 12500,
    annualFee: 12500,
    rewardType: 'Edge Miles',
    rewardRate: 12,
    eligibility: {
      minIncome: 1500000,
      minCreditScore: 750
    },
    benefits: ['Airport Lounge Access', 'Travel Benefits', 'Golf Benefits'],
    category: 'Super Premium',
    welcomeBonus: '25,000 Edge Miles',
    applyLink: '#',
    keyFeatures: ['12 Edge Miles per Rs. 200 spent', 'Unlimited domestic lounge access', 'Club Vistara Gold membership']
  },
  {
    id: 'icici-amazon',
    name: 'Amazon Pay ICICI Credit Card',
    issuer: 'ICICI Bank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Cashback',
    rewardRate: 5,
    eligibility: {
      minIncome: 300000,
      minCreditScore: 700
    },
    benefits: ['Amazon Prime Benefits', 'No Annual Fee'],
    category: 'Cashback',
    welcomeBonus: 'Rs. 2,000 Amazon Gift Voucher',
    applyLink: '#',
    keyFeatures: ['5% unlimited cashback on Amazon', '2% cashback on Amazon Pay', '1% cashback on other spends']
  },
  {
    id: 'kotak-white',
    name: 'Kotak White Credit Card',
    issuer: 'Kotak Mahindra Bank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 999,
    annualFee: 999,
    rewardType: 'Reward Points',
    rewardRate: 3,
    eligibility: {
      minIncome: 250000,
      minCreditScore: 720
    },
    benefits: ['Movie Offers', 'Dining Discounts', 'Fuel Benefits'],
    category: 'Lifestyle',
    welcomeBonus: '2,500 Reward Points',
    applyLink: '#',
    keyFeatures: ['3 reward points per Rs. 100 spent', 'Buy 1 Get 1 movie tickets', '1% fuel surcharge waiver']
  },
  {
    id: 'idfc-wealth',
    name: 'IDFC Wealth Credit Card',
    issuer: 'IDFC First Bank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 2500,
    annualFee: 2500,
    rewardType: 'Reward Points',
    rewardRate: 6,
    eligibility: {
      minIncome: 500000,
      minCreditScore: 750
    },
    benefits: ['Airport Lounge Access', 'Golf Benefits', 'Concierge Services'],
    category: 'Premium',
    welcomeBonus: '5,000 Reward Points',
    applyLink: '#',
    keyFeatures: ['6 reward points per Rs. 100 spent', '6 complimentary airport lounge visits', 'Priority Pass membership']
  },
  {
    id: 'yes-marquee',
    name: 'YES Bank Marquee Credit Card',
    issuer: 'YES Bank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 5000,
    annualFee: 5000,
    rewardType: 'Reward Points',
    rewardRate: 8,
    eligibility: {
      minIncome: 800000,
      minCreditScore: 750
    },
    benefits: ['Airport Lounge Access', 'Dining Benefits', 'Travel Benefits'],
    category: 'Premium',
    welcomeBonus: '10,000 Reward Points',
    applyLink: '#',
    keyFeatures: ['8 reward points per Rs. 100 spent', '8 complimentary airport lounge visits', 'Dining discounts at partner restaurants']
  },
  {
    id: 'rbl-world-safari',
    name: 'RBL World Safari Credit Card',
    issuer: 'RBL Bank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 3000,
    annualFee: 3000,
    rewardType: 'Reward Points',
    rewardRate: 5,
    eligibility: {
      minIncome: 400000,
      minCreditScore: 720
    },
    benefits: ['Airport Lounge Access', 'Travel Insurance', 'Concierge Services'],
    category: 'Travel',
    welcomeBonus: '5,000 Reward Points',
    applyLink: '#',
    keyFeatures: ['5 reward points per Rs. 100 spent on travel', '4 complimentary airport lounge visits', 'Travel insurance coverage']
  },
  {
    id: 'standard-chartered-ultimate',
    name: 'Standard Chartered Ultimate Credit Card',
    issuer: 'Standard Chartered Bank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 5000,
    annualFee: 5000,
    rewardType: 'Reward Points',
    rewardRate: 5,
    eligibility: {
      minIncome: 600000,
      minCreditScore: 750
    },
    benefits: ['Unlimited Airport Lounge Access', 'Golf Benefits', 'Dining Privileges'],
    category: 'Premium',
    welcomeBonus: '7,500 Reward Points',
    applyLink: '#',
    keyFeatures: ['5X reward points on dining and entertainment', 'Unlimited domestic and international lounge access', '4 complimentary golf games per month']
  },
  {
    id: 'citi-rewards',
    name: 'Citi Rewards Credit Card',
    issuer: 'Citibank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 1000,
    annualFee: 1000,
    rewardType: 'Reward Points',
    rewardRate: 2,
    eligibility: {
      minIncome: 200000,
      minCreditScore: 700
    },
    benefits: ['Reward Points', 'Fuel Benefits', 'Utility Bill Payments'],
    category: 'Rewards',
    welcomeBonus: '2,000 Reward Points',
    applyLink: '#',
    keyFeatures: ['2X reward points on all spends', '1% fuel surcharge waiver', 'No reward point expiry']
  },
  {
    id: 'bob-premier',
    name: 'Bank of Baroda Premier Credit Card',
    issuer: 'Bank of Baroda',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 2000,
    annualFee: 2000,
    rewardType: 'Reward Points',
    rewardRate: 4,
    eligibility: {
      minIncome: 350000,
      minCreditScore: 720
    },
    benefits: ['Airport Lounge Access', 'Insurance Benefits', 'Dining Offers'],
    category: 'Premium',
    welcomeBonus: '3,000 Reward Points',
    applyLink: '#',
    keyFeatures: ['4 reward points per Rs. 100 spent', '4 complimentary airport lounge visits', 'Personal accident insurance coverage']
  },
  {
    id: 'union-signature',
    name: 'Union Bank Signature Credit Card',
    issuer: 'Union Bank of India',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 1500,
    annualFee: 1500,
    rewardType: 'Reward Points',
    rewardRate: 3,
    eligibility: {
      minIncome: 250000,
      minCreditScore: 700
    },
    benefits: ['Reward Points', 'Fuel Benefits', 'Insurance Coverage'],
    category: 'Premium',
    welcomeBonus: '2,500 Reward Points',
    applyLink: '#',
    keyFeatures: ['3 reward points per Rs. 100 spent', '1% fuel surcharge waiver', 'Lost card liability insurance']
  },
  {
    id: 'pnb-rupay-select',
    name: 'PNB RuPay Select Credit Card',
    issuer: 'Punjab National Bank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 1000,
    annualFee: 500,
    rewardType: 'Reward Points',
    rewardRate: 2,
    eligibility: {
      minIncome: 200000,
      minCreditScore: 650
    },
    benefits: ['Airport Lounge Access', 'Railway Lounge Access', 'Insurance Benefits'],
    category: 'Travel',
    welcomeBonus: '1,000 Reward Points',
    applyLink: '#',
    keyFeatures: ['2 reward points per Rs. 100 spent', '2 complimentary airport lounge visits', 'Railway lounge access across India']
  },
  {
    id: 'indusind-legend',
    name: 'IndusInd Bank Legend Credit Card',
    issuer: 'IndusInd Bank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 10000,
    annualFee: 10000,
    rewardType: 'Reward Points',
    rewardRate: 10,
    eligibility: {
      minIncome: 1200000,
      minCreditScore: 750
    },
    benefits: ['Unlimited Airport Lounge Access', 'Golf Benefits', 'Concierge Services'],
    category: 'Super Premium',
    welcomeBonus: '15,000 Reward Points',
    applyLink: '#',
    keyFeatures: ['10X reward points on dining and hotels', 'Unlimited domestic and international lounge access', 'Complimentary golf games']
  },
  {
    id: 'federal-signet',
    name: 'Federal Bank Signet Credit Card',
    issuer: 'Federal Bank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 2500,
    annualFee: 2500,
    rewardType: 'Reward Points',
    rewardRate: 4,
    eligibility: {
      minIncome: 300000,
      minCreditScore: 720
    },
    benefits: ['Airport Lounge Access', 'Movie Offers', 'Dining Benefits'],
    category: 'Premium',
    welcomeBonus: '3,500 Reward Points',
    applyLink: '#',
    keyFeatures: ['4 reward points per Rs. 100 spent', '6 complimentary airport lounge visits', 'Buy 1 Get 1 movie tickets']
  },
  {
    id: 'bajaj-finserv-rupay',
    name: 'Bajaj Finserv RuPay Credit Card',
    issuer: 'Bajaj Finserv',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'Cashback',
    rewardRate: 1,
    eligibility: {
      minIncome: 180000,
      minCreditScore: 650
    },
    benefits: ['No Annual Fee', 'EMI Options', 'Cashback Offers'],
    category: 'Entry Level',
    welcomeBonus: 'Rs. 500 Cashback',
    applyLink: '#',
    keyFeatures: ['1% cashback on all spends', 'No annual fee for lifetime', 'Easy EMI conversion options']
  },
  {
    id: 'au-xcite',
    name: 'AU Bank Xcite Credit Card',
    issuer: 'AU Small Finance Bank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 1500,
    annualFee: 1500,
    rewardType: 'Cashback',
    rewardRate: 2,
    eligibility: {
      minIncome: 250000,
      minCreditScore: 700
    },
    benefits: ['Cashback on Online Shopping', 'Movie Offers', 'Dining Discounts'],
    category: 'Lifestyle',
    welcomeBonus: 'Rs. 1,000 Cashback',
    applyLink: '#',
    keyFeatures: ['2% cashback on online shopping', '1% cashback on other spends', 'Special offers on entertainment']
  },
  {
    id: 'dbs-woman',
    name: 'DBS Woman Credit Card',
    issuer: 'DBS Bank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 999,
    annualFee: 999,
    rewardType: 'Reward Points',
    rewardRate: 5,
    eligibility: {
      minIncome: 300000,
      minCreditScore: 720
    },
    benefits: ['Beauty & Wellness Offers', 'Shopping Discounts', 'Health Benefits'],
    category: 'Lifestyle',
    welcomeBonus: '2,000 Reward Points',
    applyLink: '#',
    keyFeatures: ['5X reward points on beauty and wellness', 'Exclusive offers for women', 'Health check-up discounts']
  },
  {
    id: 'karur-vyasa-platinum',
    name: 'Karur Vysya Platinum Credit Card',
    issuer: 'Karur Vysya Bank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 750,
    annualFee: 750,
    rewardType: 'Reward Points',
    rewardRate: 2,
    eligibility: {
      minIncome: 200000,
      minCreditScore: 650
    },
    benefits: ['Reward Points', 'Fuel Benefits', 'Insurance Coverage'],
    category: 'Standard',
    welcomeBonus: '1,500 Reward Points',
    applyLink: '#',
    keyFeatures: ['2 reward points per Rs. 100 spent', '1% fuel surcharge waiver', 'Air accident insurance coverage']
  },
  {
    id: 'tamilnad-gold',
    name: 'Tamilnad Mercantile Gold Credit Card',
    issuer: 'Tamilnad Mercantile Bank',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'Reward Points',
    rewardRate: 1,
    eligibility: {
      minIncome: 150000,
      minCreditScore: 600
    },
    benefits: ['Basic Rewards', 'Fuel Benefits', 'Emergency Services'],
    category: 'Entry Level',
    welcomeBonus: '500 Reward Points',
    applyLink: '#',
    keyFeatures: ['1 reward point per Rs. 100 spent', 'Fuel surcharge waiver up to Rs. 100', '24/7 customer support']
  }
];