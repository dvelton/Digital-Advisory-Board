export interface Persona {
  id: string;
  name: string;
  title: string;
  category: string;
  subcategory: string;
  avatar: string;
  background: string;
  keyPhilosophies: string[];
  typicalConcerns: string[];
  experience: string;
  decisionMakingStyle: string;
  communicationStyle: string;
  blindSpots: string[];
  expertise: string[];
  personalityTraits: string[];
}

export interface AdvisoryBoard {
  id: string;
  name: string;
  description: string;
  personas: Persona[];
  createdAt: Date;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'persona';
  content: string;
  personaId?: string;
  timestamp: Date;
}

export interface Conversation {
  id: string;
  topic: string;
  messages: ChatMessage[];
  advisoryBoardId: string;
  createdAt: Date;
}

export const PERSONA_CATEGORIES = {
  'Executive Leadership': [
    'Visionary CEO',
    'Operational CEO', 
    'Sales-Driven CEO',
    'Technical CEO',
    'Turnaround CEO'
  ],
  'Technology Leaders': [
    'Innovation CTO',
    'Pragmatic CTO',
    'Startup CTO',
    'Security-First CTO',
    'Data-Driven CTO'
  ],
  'Engineering': [
    '10x Senior Engineer',
    'Burnout-Recovering Engineer',
    'Full-Stack Generalist',
    'Infrastructure Specialist',
    'Open Source Advocate'
  ],
  'Product & Strategy': [
    'Data-Driven PM',
    'Vision-Driven PM',
    'Technical PM',
    'Growth PM',
    'Enterprise PM'
  ],
  'Design & UX': [
    'User Research UXer',
    'Conversion-Focused UXer',
    'Aesthetic-First Designer',
    'System Design Expert',
    'Accessibility Advocate'
  ],
  'Business & Strategy': [
    'Venture Capitalist',
    'Management Consultant',
    'Startup Advisor',
    'Enterprise Strategist',
    'Industry Analyst'
  ],
  'Legal & Compliance': [
    'Startup Legal Counsel',
    'Enterprise Legal',
    'Privacy-Focused Counsel',
    'IP Attorney',
    'Regulatory Specialist'
  ],
  'Finance': [
    'Startup CFO',
    'Public Company CFO',
    'Cost-Cutting CFO',
    'Growth CFO',
    'Risk Management CFO',
    'Investment Banking MD'
  ],
  'Operations & Support': [
    'Customer Success Manager',
    'Scalability-Focused Ops',
    'Crisis Support Lead',
    'People-First HR',
    'Compliance-Heavy HR',
    'Supply Chain Director',
    'Diversity & Inclusion Officer'
  ],
  'Industry Leaders': [
    'Healthcare CEO',
    'Biotech Research Director',
    'Retail CEO',
    'FinTech CEO',
    'Manufacturing COO',
    'Media CEO',
    'Gaming CEO',
    'EdTech CEO',
    'GovTech Director',
    'PropTech CEO',
    'AgTech CEO',
    'Transportation CEO',
    'CleanTech CEO',
    'Aerospace CEO'
  ],
  'Specialized': [
    'Cybersecurity Expert',
    'Data Privacy Officer',
    'Marketing Growth Hacker',
    'Sales Development Expert',
    'International Expansion Specialist',
    'Sustainability Officer',
    'Crisis Communications'
  ]
} as const;

export type PersonaCategory = keyof typeof PERSONA_CATEGORIES;
export type PersonaSubcategory = typeof PERSONA_CATEGORIES[PersonaCategory][number];