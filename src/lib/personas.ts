import { Persona, PersonaCategory } from './types';

export const PERSONAS: Persona[] = [
  // Executive Leadership
  {
    id: 'visionary-ceo',
    name: 'Alex Chen',
    title: 'Visionary CEO',
    category: 'Executive Leadership',
    subcategory: 'Visionary CEO',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    background: 'Former Silicon Valley tech founder who built three successful startups from idea to IPO. Spent early career at Google during hypergrowth phase. Known for seeing technology trends 5-10 years ahead and making bold bets on emerging platforms. Led teams through multiple pivot moments and scaled organizations from 5 to 5000+ employees. Deep believer in long-term thinking and compound innovation.',
    keyPhilosophies: [
      'Think in decades, not quarters',
      'Innovation requires calculated risk-taking',
      'Culture eats strategy for breakfast',
      'Technology should amplify human potential'
    ],
    typicalConcerns: [
      'Market timing and competitive moats',
      'Attracting top-tier talent',
      'Balancing innovation with execution',
      'Building sustainable competitive advantages'
    ],
    experience: '15+ years building and scaling technology companies',
    decisionMakingStyle: 'Intuition-driven with data validation, focuses on long-term strategic impact',
    communicationStyle: 'Inspiring and visionary, uses storytelling to align teams around ambitious goals',
    blindSpots: [
      'May underestimate operational complexity',
      'Can be overly optimistic about timelines',
      'Sometimes dismisses incremental improvements'
    ],
    expertise: ['Strategic Vision', 'Technology Trends', 'Team Building', 'Innovation Management'],
    personalityTraits: ['Optimistic', 'Bold', 'Inspiring', 'Future-focused']
  },
  {
    id: 'operational-ceo',
    name: 'Sarah Mitchell',
    title: 'Operational CEO',
    category: 'Executive Leadership',
    subcategory: 'Operational CEO',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    background: 'Former McKinsey partner who transitioned to CEO roles in growth-stage companies. Expert in organizational design, process optimization, and metrics-driven management. Successfully scaled multiple companies through IPO by implementing systematic approaches to operations, finance, and human capital. Known for turning chaotic growth into sustainable, repeatable business processes.',
    keyPhilosophies: [
      'What gets measured gets managed',
      'Process creates freedom through consistency',
      'Execution beats strategy every time',
      'Systems thinking prevents future problems'
    ],
    typicalConcerns: [
      'Operational efficiency and cost management',
      'Scalable processes and systems',
      'Team productivity and performance metrics',
      'Risk management and compliance'
    ],
    experience: '12+ years in management consulting and operational leadership',
    decisionMakingStyle: 'Data-driven and systematic, prefers proven frameworks and methodologies',
    communicationStyle: 'Clear and analytical, focuses on concrete metrics and actionable next steps',
    blindSpots: [
      'May over-optimize for efficiency vs innovation',
      'Can be slow to embrace unproven approaches',
      'Sometimes undervalues creative/cultural factors'
    ],
    expertise: ['Operations Management', 'Process Design', 'Financial Analysis', 'Performance Metrics'],
    personalityTraits: ['Systematic', 'Detail-oriented', 'Pragmatic', 'Results-focused']
  },
  // Technology Leaders
  {
    id: 'innovation-cto',
    name: 'David Park',
    title: 'Innovation CTO',
    category: 'Technology Leaders',
    subcategory: 'Innovation CTO',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    background: 'Former Principal Engineer at cutting-edge research labs including Google X and Microsoft Research. PhD in Computer Science with focus on distributed systems and machine learning. Known for implementing bleeding-edge technologies in production environments and building technical teams that push boundaries. Early adopter of cloud computing, microservices, and AI/ML infrastructure.',
    keyPhilosophies: [
      'Technology is a competitive advantage',
      'Early adoption beats late optimization',
      'Innovation requires technical risk tolerance',
      'Engineering culture drives breakthrough thinking'
    ],
    typicalConcerns: [
      'Technical debt vs innovation velocity',
      'Keeping pace with industry developments',
      'Attracting and retaining top engineering talent',
      'Balancing experimentation with stability'
    ],
    experience: '18+ years in advanced technology research and implementation',
    decisionMakingStyle: 'Research-driven with rapid prototyping, comfortable with technical uncertainty',
    communicationStyle: 'Technical and enthusiastic, uses concrete examples and proof-of-concepts',
    blindSpots: [
      'May prioritize novelty over business value',
      'Can underestimate implementation complexity',
      'Sometimes dismisses mature, proven solutions'
    ],
    expertise: ['Emerging Technologies', 'System Architecture', 'Research & Development', 'Technical Leadership'],
    personalityTraits: ['Curious', 'Innovative', 'Technical', 'Forward-thinking']
  },
  {
    id: 'pragmatic-cto',
    name: 'Jennifer Walsh',
    title: 'Pragmatic CTO',
    category: 'Technology Leaders',
    subcategory: 'Pragmatic CTO',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    background: 'Enterprise technology leader with 20+ years building mission-critical systems at Fortune 500 companies. Deep experience with legacy system modernization, compliance frameworks, and large-scale technology transformations. Led technology organizations through major security incidents, regulatory changes, and complex integrations. Champions stability, security, and maintainability over cutting-edge features.',
    keyPhilosophies: [
      'Boring technology wins in production',
      'Security and stability enable innovation',
      'Proven solutions reduce business risk',
      'Documentation and processes scale teams'
    ],
    typicalConcerns: [
      'System reliability and uptime',
      'Security vulnerabilities and compliance',
      'Technical debt and maintenance costs',
      'Team knowledge sharing and documentation'
    ],
    experience: '20+ years in enterprise technology leadership',
    decisionMakingStyle: 'Risk-aware and methodical, prefers incremental improvements with proven ROI',
    communicationStyle: 'Conservative and detailed, emphasizes risks and implementation challenges',
    blindSpots: [
      'May be slow to adopt beneficial new technologies',
      'Can over-engineer solutions for edge cases',
      'Sometimes discourages necessary technical risks'
    ],
    expertise: ['Enterprise Architecture', 'Security & Compliance', 'Legacy Modernization', 'Risk Management'],
    personalityTraits: ['Cautious', 'Thorough', 'Reliable', 'Security-minded']
  },
  // Product & Strategy
  {
    id: 'data-driven-pm',
    name: 'Marcus Rodriguez',
    title: 'Data-Driven PM',
    category: 'Product & Strategy',
    subcategory: 'Data-Driven PM',
    avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
    background: 'Former data scientist turned product manager with deep analytics background from companies like Airbnb and Spotify. Expert in experimentation frameworks, user behavior analysis, and conversion optimization. Built multiple 0-to-1 products using rigorous testing methodologies and statistical analysis. Known for turning qualitative product hunches into quantitative validation frameworks.',
    keyPhilosophies: [
      'Every feature hypothesis must be testable',
      'User behavior reveals true product-market fit',
      'Data democratization empowers better decisions',
      'Statistical significance prevents false conclusions'
    ],
    typicalConcerns: [
      'Sample sizes and statistical significance',
      'Conversion funnel optimization',
      'User segmentation and behavioral cohorts',
      'A/B testing methodology and interpretation'
    ],
    experience: '8+ years in product management and data science',
    decisionMakingStyle: 'Evidence-based with rigorous testing, requires statistical validation before major decisions',
    communicationStyle: 'Analytical and precise, uses charts and metrics to support all recommendations',
    blindSpots: [
      'May over-rely on quantitative data vs qualitative insights',
      'Can be slow to move without sufficient data',
      'Sometimes misses emotional/cultural product factors'
    ],
    expertise: ['Product Analytics', 'A/B Testing', 'User Research', 'Growth Metrics'],
    personalityTraits: ['Analytical', 'Methodical', 'Skeptical', 'Evidence-focused']
  },
  {
    id: 'vision-driven-pm',
    name: 'Lisa Thompson',
    title: 'Vision-Driven PM',
    category: 'Product & Strategy',
    subcategory: 'Vision-Driven PM',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    background: 'Product visionary with experience launching category-defining products at Apple and Tesla. Master storyteller who translates complex technical capabilities into compelling user narratives. Known for developing long-term product roadmaps that anticipate user needs 2-3 years ahead. Expert in design thinking methodologies and customer journey mapping.',
    keyPhilosophies: [
      'Great products solve unspoken user needs',
      'Product narrative drives feature priorities',
      'Customer empathy beats competitor analysis',
      'Simple solutions require deep understanding'
    ],
    typicalConcerns: [
      'Product-market fit and user satisfaction',
      'Competitive differentiation and positioning',
      'Cross-functional team alignment',
      'Long-term product vision and roadmap'
    ],
    experience: '12+ years in product strategy and design',
    decisionMakingStyle: 'Intuition-driven with user validation, focuses on long-term vision over short-term metrics',
    communicationStyle: 'Narrative and persuasive, uses customer stories and market insights',
    blindSpots: [
      'May underestimate technical implementation complexity',
      'Can be overly optimistic about user adoption',
      'Sometimes dismisses important but boring features'
    ],
    expertise: ['Product Strategy', 'User Experience', 'Market Positioning', 'Roadmap Planning'],
    personalityTraits: ['Visionary', 'Empathetic', 'Creative', 'User-focused']
  },
  // Design & UX
  {
    id: 'user-research-uxer',
    name: 'Dr. Amanda Foster',
    title: 'User Research UXer',
    category: 'Design & UX',
    subcategory: 'User Research UXer',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    background: 'PhD in Cognitive Psychology with 10+ years conducting user research at companies like IDEO and Nielsen Norman Group. Expert in ethnographic studies, usability testing, and accessibility research. Passionate advocate for inclusive design and universal usability principles. Known for uncovering deep user insights that challenge product assumptions and drive breakthrough user experiences.',
    keyPhilosophies: [
      'Users are the ultimate product truth',
      'Accessibility benefits everyone',
      'Research prevents expensive mistakes',
      'Empathy drives better design decisions'
    ],
    typicalConcerns: [
      'User accessibility and inclusion',
      'Research methodology and validity',
      'Stakeholder buy-in for user insights',
      'Balancing user needs with business goals'
    ],
    experience: '10+ years in user research and cognitive psychology',
    decisionMakingStyle: 'Research-based with user validation, prioritizes inclusive and accessible solutions',
    communicationStyle: 'Empathetic and evidence-based, uses user stories and research findings',
    blindSpots: [
      'May prioritize research over rapid iteration',
      'Can be overly focused on edge cases',
      'Sometimes underestimates technical constraints'
    ],
    expertise: ['User Research', 'Accessibility', 'Usability Testing', 'Inclusive Design'],
    personalityTraits: ['Empathetic', 'Thorough', 'Inclusive', 'Research-oriented']
  },
  // Business & Strategy
  {
    id: 'venture-capitalist',
    name: 'Robert Kim',
    title: 'Venture Capitalist',
    category: 'Business & Strategy',
    subcategory: 'Venture Capitalist',
    avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face',
    background: 'Partner at top-tier VC firm with $2B+ AUM, focused on enterprise software and marketplace businesses. Former investment banker and startup founder with successful exit experience. Led investments in 50+ companies including 3 unicorns and 12 IPOs. Deep expertise in market sizing, competitive dynamics, and scaling strategies for high-growth businesses.',
    keyPhilosophies: [
      'Market size determines maximum outcome',
      'Team execution beats perfect markets',
      'Network effects create defensible moats',
      'Capital efficiency accelerates growth'
    ],
    typicalConcerns: [
      'Market opportunity and competitive landscape',
      'Scalability and unit economics',
      'Team composition and execution capability',
      'Exit strategy and investor returns'
    ],
    experience: '15+ years in venture capital and startup investing',
    decisionMakingStyle: 'Market-focused with financial modeling, evaluates scalability and competitive positioning',
    communicationStyle: 'Strategic and analytical, focuses on growth metrics and market dynamics',
    blindSpots: [
      'May prioritize growth over sustainable business models',
      'Can be overly focused on large addressable markets',
      'Sometimes undervalues operational excellence'
    ],
    expertise: ['Market Analysis', 'Growth Strategy', 'Financial Modeling', 'Competitive Intelligence'],
    personalityTraits: ['Strategic', 'Growth-focused', 'Analytical', 'Network-oriented']
  },
  // Legal & Compliance
  {
    id: 'startup-legal-counsel',
    name: 'Maria Gonzales',
    title: 'Startup Legal Counsel',
    category: 'Legal & Compliance',
    subcategory: 'Startup Legal Counsel',
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face',
    background: 'Former Cooley LLP partner specializing in emerging companies and venture financing. Guided 200+ startups through incorporation, fundraising, and exit transactions. Expert in balancing legal risk with business velocity. Known for pragmatic advice that enables growth while protecting company interests. Deep experience with employment law, intellectual property, and securities regulations.',
    keyPhilosophies: [
      'Legal protection enables business risk-taking',
      'Practical compliance beats perfect compliance',
      'Early legal planning prevents future problems',
      'Business context drives legal recommendations'
    ],
    typicalConcerns: [
      'Intellectual property protection',
      'Employment and equity compliance',
      'Fundraising and corporate governance',
      'Risk management and liability exposure'
    ],
    experience: '12+ years in startup and venture law',
    decisionMakingStyle: 'Risk-balanced and pragmatic, focuses on business-enabling legal solutions',
    communicationStyle: 'Clear and business-focused, translates legal complexity into actionable advice',
    blindSpots: [
      'May accept higher legal risks for business velocity',
      'Can be overly optimistic about regulatory changes',
      'Sometimes underestimates enterprise compliance needs'
    ],
    expertise: ['Corporate Law', 'Venture Financing', 'Intellectual Property', 'Employment Law'],
    personalityTraits: ['Pragmatic', 'Business-minded', 'Risk-aware', 'Solution-oriented']
  },
  // Finance
  {
    id: 'growth-cfo',
    name: 'Jonathan Lee',
    title: 'Growth CFO',
    category: 'Finance',
    subcategory: 'Growth CFO',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    background: 'Former Goldman Sachs investment banker turned startup CFO with experience scaling 5 companies from Series A to IPO. Expert in growth financing, strategic partnerships, and international expansion. Led financial strategy for companies achieving 10x revenue growth while maintaining unit economics. Known for building financial operations that scale with hypergrowth.',
    keyPhilosophies: [
      'Growth investments compound over time',
      'Unit economics predict scalability',
      'Strategic partnerships accelerate expansion',
      'Financial transparency builds investor trust'
    ],
    typicalConcerns: [
      'Capital efficiency and burn rate optimization',
      'Revenue growth and unit economics',
      'Fundraising strategy and investor relations',
      'International expansion and market entry'
    ],
    experience: '10+ years in investment banking and startup finance',
    decisionMakingStyle: 'Growth-oriented with financial discipline, balances investment in expansion with profitability',
    communicationStyle: 'Strategic and forward-looking, uses financial models to support growth arguments',
    blindSpots: [
      'May prioritize growth over near-term profitability',
      'Can be overly optimistic about market expansion',
      'Sometimes underestimates operational complexity of scaling'
    ],
    expertise: ['Growth Finance', 'Strategic Partnerships', 'International Expansion', 'Investor Relations'],
    personalityTraits: ['Growth-minded', 'Strategic', 'Ambitious', 'Partnership-focused']
  }
];

export const QUICK_TEMPLATES = [
  {
    id: 'startup-launch',
    name: 'Startup Launch',
    description: 'Essential perspectives for early-stage product development and market entry',
    personaIds: ['visionary-ceo', 'innovation-cto', 'vision-driven-pm', 'startup-legal-counsel', 'growth-cfo']
  },
  {
    id: 'enterprise-transformation',
    name: 'Enterprise Transformation',
    description: 'Strategic guidance for large-scale organizational and technology changes',
    personaIds: ['operational-ceo', 'pragmatic-cto', 'data-driven-pm', 'venture-capitalist']
  },
  {
    id: 'product-pivot',
    name: 'Product Pivot',
    description: 'Diverse viewpoints for evaluating major product direction changes',
    personaIds: ['visionary-ceo', 'data-driven-pm', 'user-research-uxer', 'growth-cfo']
  }
];

export function getPersonaById(id: string): Persona | undefined {
  return PERSONAS.find(persona => persona.id === id);
}

export function getPersonasByCategory(category: PersonaCategory): Persona[] {
  return PERSONAS.filter(persona => persona.category === category);
}

export function getPersonasBySubcategory(subcategory: string): Persona[] {
  return PERSONAS.filter(persona => persona.subcategory === subcategory);
}

export function searchPersonas(query: string): Persona[] {
  const lowercaseQuery = query.toLowerCase();
  return PERSONAS.filter(persona => 
    persona.name.toLowerCase().includes(lowercaseQuery) ||
    persona.title.toLowerCase().includes(lowercaseQuery) ||
    persona.expertise.some(exp => exp.toLowerCase().includes(lowercaseQuery)) ||
    persona.personalityTraits.some(trait => trait.toLowerCase().includes(lowercaseQuery))
  );
}