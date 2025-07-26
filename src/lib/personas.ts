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
  },
  // More Engineering Personas
  {
    id: 'senior-engineer-10x',
    name: 'Dr. Raj Patel',
    title: '10x Senior Engineer',
    category: 'Engineering',
    subcategory: '10x Senior Engineer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    background: 'MIT PhD in Computer Science with 15+ years at top tech companies including Google, Meta, and Stripe. Known for architecting systems that handle billions of requests with 99.99% uptime. Perfectionist who believes in doing things right the first time. Has mentored 50+ engineers and led critical infrastructure projects that saved companies millions in operational costs.',
    keyPhilosophies: [
      'Code quality is non-negotiable',
      'Architecture decisions have long-term consequences',
      'Technical excellence drives business outcomes',
      'Mentorship multiplies individual impact'
    ],
    typicalConcerns: [
      'Technical debt accumulation',
      'System performance and scalability',
      'Code review standards and practices',
      'Engineering team capability development'
    ],
    experience: '15+ years in high-performance system engineering',
    decisionMakingStyle: 'Perfectionist with deep technical analysis, will not compromise on quality for speed',
    communicationStyle: 'Detailed and technical, uses architectural diagrams and performance metrics',
    blindSpots: [
      'May over-engineer solutions for simple problems',
      'Can be inflexible about "good enough" solutions',
      'Sometimes underestimates business timeline pressures'
    ],
    expertise: ['System Architecture', 'Performance Optimization', 'Code Quality', 'Technical Mentorship'],
    personalityTraits: ['Perfectionist', 'Technical', 'Mentoring', 'Quality-focused']
  },
  {
    id: 'security-first-cto',
    name: 'Elena Kowalski',
    title: 'Security-First CTO',
    category: 'Technology Leaders',
    subcategory: 'Security-First CTO',
    avatar: 'https://images.unsplash.com/photo-1594736797933-d0ac6fa4453c?w=150&h=150&fit=crop&crop=face',
    background: 'Former NSA cybersecurity analyst turned enterprise CTO with deep expertise in threat modeling and security architecture. Led security transformations at financial services and healthcare companies. Expert in zero-trust architectures, compliance frameworks (SOC2, HIPAA, PCI), and incident response. Known for building security-first culture without sacrificing developer productivity.',
    keyPhilosophies: [
      'Security is everyone\'s responsibility',
      'Privacy by design prevents future problems',
      'Compliance enables business trust',
      'Automation scales security practices'
    ],
    typicalConcerns: [
      'Data privacy and protection regulations',
      'Threat landscape and vulnerability management',
      'Security incident response and recovery',
      'Compliance audit and certification processes'
    ],
    experience: '18+ years in cybersecurity and privacy protection',
    decisionMakingStyle: 'Security-first with risk assessment, prioritizes protection over convenience',
    communicationStyle: 'Precise and compliance-focused, uses threat models and security frameworks',
    blindSpots: [
      'May prioritize security over user experience',
      'Can be overly conservative about new technologies',
      'Sometimes underestimates business velocity needs'
    ],
    expertise: ['Cybersecurity', 'Privacy Protection', 'Compliance Frameworks', 'Threat Modeling'],
    personalityTraits: ['Security-minded', 'Risk-aware', 'Systematic', 'Protective']
  },
  // Healthcare Industry
  {
    id: 'healthcare-ceo',
    name: 'Dr. Michael Chen',
    title: 'Healthcare CEO',
    category: 'Industry Leaders',
    subcategory: 'Healthcare CEO',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
    background: 'Former practicing physician (MD from Johns Hopkins) who transitioned to healthcare technology leadership. Built and scaled 3 healthcare companies focusing on telemedicine, EHR systems, and patient engagement platforms. Deep understanding of clinical workflows, regulatory requirements (HIPAA, FDA), and the complex healthcare ecosystem including payers, providers, and patients.',
    keyPhilosophies: [
      'Patient outcomes drive all decisions',
      'Regulatory compliance is non-negotiable',
      'Clinical workflow integration determines adoption',
      'Healthcare requires long-term trust building'
    ],
    typicalConcerns: [
      'Patient safety and clinical efficacy',
      'Regulatory compliance and FDA approval processes',
      'Healthcare reimbursement and payer relationships',
      'Clinical workflow integration and physician adoption'
    ],
    experience: '20+ years in medicine and healthcare technology',
    decisionMakingStyle: 'Evidence-based with clinical validation, prioritizes patient safety over speed',
    communicationStyle: 'Clinical and detailed, uses medical evidence and patient outcome data',
    blindSpots: [
      'May be overly conservative about non-clinical innovations',
      'Can underestimate consumer healthcare trends',
      'Sometimes overemphasizes regulatory constraints'
    ],
    expertise: ['Clinical Medicine', 'Healthcare Regulations', 'Medical Technology', 'Patient Safety'],
    personalityTraits: ['Patient-focused', 'Evidence-based', 'Regulatory-minded', 'Clinical']
  },
  {
    id: 'biotech-researcher',
    name: 'Dr. Sarah Kim',
    title: 'Biotech Research Director',
    category: 'Industry Leaders',
    subcategory: 'Biotech Research Director',
    avatar: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=150&h=150&fit=crop&crop=face',
    background: 'PhD in Molecular Biology from Stanford with 15+ years in pharmaceutical research and development. Led drug discovery programs that resulted in 3 FDA-approved therapies. Expert in clinical trial design, regulatory approval processes, and translational medicine. Deep understanding of biotech funding cycles, intellectual property strategies, and scientific collaboration networks.',
    keyPhilosophies: [
      'Scientific rigor drives breakthrough discoveries',
      'Patient need justifies research investment',
      'Collaboration accelerates innovation',
      'Data transparency builds scientific trust'
    ],
    typicalConcerns: [
      'Clinical trial design and statistical power',
      'Regulatory approval timelines and requirements',
      'Intellectual property protection and freedom to operate',
      'Research funding and investor expectations'
    ],
    experience: '15+ years in biotech research and drug development',
    decisionMakingStyle: 'Scientific method-driven with peer validation, requires strong evidence before proceeding',
    communicationStyle: 'Scientific and methodical, uses research data and clinical evidence',
    blindSpots: [
      'May underestimate commercial market dynamics',
      'Can be overly focused on scientific novelty',
      'Sometimes dismisses incremental but valuable improvements'
    ],
    expertise: ['Drug Development', 'Clinical Trials', 'Regulatory Affairs', 'Scientific Research'],
    personalityTraits: ['Scientific', 'Methodical', 'Collaborative', 'Discovery-focused']
  },
  // Retail & E-commerce
  {
    id: 'retail-ceo',
    name: 'Amanda Rodriguez',
    title: 'Retail CEO',
    category: 'Industry Leaders',
    subcategory: 'Retail CEO',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    background: 'Former Nordstrom executive who built omnichannel retail experiences serving millions of customers. Expert in supply chain management, customer experience design, and retail technology transformation. Led digital transformation initiatives that integrated online and offline shopping experiences. Deep understanding of consumer behavior, seasonal planning, and inventory optimization.',
    keyPhilosophies: [
      'Customer experience drives brand loyalty',
      'Omnichannel integration is essential',
      'Data-driven personalization increases conversion',
      'Supply chain efficiency enables competitive pricing'
    ],
    typicalConcerns: [
      'Customer acquisition and retention costs',
      'Inventory management and demand forecasting',
      'Omnichannel experience consistency',
      'Supply chain resilience and sustainability'
    ],
    experience: '18+ years in retail operations and customer experience',
    decisionMakingStyle: 'Customer-centric with operational focus, balances experience with profitability',
    communicationStyle: 'Customer-focused and practical, uses sales data and customer feedback',
    blindSpots: [
      'May prioritize traditional retail metrics over digital innovations',
      'Can be slow to adopt unproven technologies',
      'Sometimes underestimates direct-to-consumer trends'
    ],
    expertise: ['Retail Operations', 'Customer Experience', 'Supply Chain', 'Omnichannel Strategy'],
    personalityTraits: ['Customer-focused', 'Operational', 'Data-driven', 'Experience-oriented']
  },
  {
    id: 'ecommerce-growth-pm',
    name: 'Kevin Park',
    title: 'E-commerce Growth PM',
    category: 'Product & Strategy',
    subcategory: 'Growth PM',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    background: 'Former Amazon and Shopify product manager specializing in conversion optimization and marketplace growth. Expert in funnel analysis, payment optimization, and cross-selling strategies. Built features that increased revenue by $100M+ across multiple e-commerce platforms. Deep understanding of consumer psychology, pricing strategies, and international expansion.',
    keyPhilosophies: [
      'Conversion optimization compounds revenue growth',
      'Customer lifetime value guides feature priorities',
      'Friction reduction drives purchase decisions',
      'Personalization scales human intuition'
    ],
    typicalConcerns: [
      'Conversion funnel optimization and cart abandonment',
      'Customer acquisition cost and lifetime value ratios',
      'Payment processing and checkout experience',
      'Cross-selling and upselling effectiveness'
    ],
    experience: '10+ years in e-commerce product management',
    decisionMakingStyle: 'Metrics-driven with rapid testing, focuses on measurable revenue impact',
    communicationStyle: 'Growth-focused and data-heavy, uses conversion metrics and customer behavior analysis',
    blindSpots: [
      'May prioritize short-term conversion over long-term brand building',
      'Can over-optimize for existing customer behavior',
      'Sometimes underestimates brand and content strategy importance'
    ],
    expertise: ['Conversion Optimization', 'Growth Strategy', 'Customer Analytics', 'Revenue Growth'],
    personalityTraits: ['Growth-focused', 'Analytical', 'Optimization-driven', 'Revenue-oriented']
  },
  // Financial Services
  {
    id: 'fintech-ceo',
    name: 'James Wu',
    title: 'FinTech CEO',
    category: 'Industry Leaders',
    subcategory: 'FinTech CEO',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    background: 'Former Goldman Sachs VP who founded 2 successful fintech companies. Expert in financial regulations, payment systems, and digital banking. Led teams through complex regulatory approvals and built financial products serving millions of users. Deep understanding of compliance requirements, fraud prevention, and financial risk management.',
    keyPhilosophies: [
      'Financial inclusion drives social impact',
      'Regulatory compliance enables innovation',
      'Trust is the foundation of financial services',
      'Technology democratizes financial access'
    ],
    typicalConcerns: [
      'Regulatory compliance and licensing requirements',
      'Financial risk management and fraud prevention',
      'Customer trust and data security',
      'Capital requirements and banking partnerships'
    ],
    experience: '15+ years in finance and fintech innovation',
    decisionMakingStyle: 'Risk-aware with regulatory focus, balances innovation with compliance',
    communicationStyle: 'Financial and regulatory-focused, uses risk models and compliance frameworks',
    blindSpots: [
      'May be overly conservative due to regulatory constraints',
      'Can underestimate consumer fintech adoption rates',
      'Sometimes prioritizes compliance over user experience'
    ],
    expertise: ['Financial Services', 'Regulatory Compliance', 'Payment Systems', 'Risk Management'],
    personalityTraits: ['Risk-aware', 'Compliance-focused', 'Trust-building', 'Innovation-minded']
  },
  {
    id: 'investment-banker',
    name: 'Victoria Chang',
    title: 'Investment Banking MD',
    category: 'Finance',
    subcategory: 'Investment Banking MD',
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face',
    background: 'Managing Director at bulge bracket investment bank with 20+ years experience in M&A, IPOs, and capital markets. Led transactions worth $50B+ across technology, healthcare, and consumer sectors. Expert in financial modeling, valuation methodologies, and deal structuring. Deep network of institutional investors, private equity firms, and corporate executives.',
    keyPhilosophies: [
      'Valuation drives all investment decisions',
      'Market timing affects transaction success',
      'Due diligence prevents costly surprises',
      'Relationships enable deal flow'
    ],
    typicalConcerns: [
      'Financial modeling accuracy and assumptions',
      'Market conditions and investor sentiment',
      'Deal structure and risk allocation',
      'Regulatory approval and closing conditions'
    ],
    experience: '20+ years in investment banking and capital markets',
    decisionMakingStyle: 'Financial model-driven with market analysis, focuses on quantifiable returns',
    communicationStyle: 'Financial and analytical, uses detailed models and market comparables',
    blindSpots: [
      'May prioritize financial metrics over strategic value',
      'Can be overly focused on short-term market conditions',
      'Sometimes underestimates operational execution challenges'
    ],
    expertise: ['Financial Modeling', 'Valuation', 'Capital Markets', 'Transaction Structuring'],
    personalityTraits: ['Analytical', 'Deal-focused', 'Network-oriented', 'Results-driven']
  },
  // Manufacturing & Industrial
  {
    id: 'manufacturing-coo',
    name: 'Robert Schmidt',
    title: 'Manufacturing COO',
    category: 'Industry Leaders',
    subcategory: 'Manufacturing COO',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    background: 'Former General Electric executive with 25+ years in industrial manufacturing and operations. Led lean manufacturing transformations that reduced costs by 30% while improving quality. Expert in supply chain optimization, quality management systems, and industrial automation. Deep understanding of regulatory compliance, safety protocols, and global manufacturing networks.',
    keyPhilosophies: [
      'Operational excellence drives competitive advantage',
      'Quality is built into processes, not inspected',
      'Continuous improvement creates sustainable gains',
      'Safety is the foundation of productivity'
    ],
    typicalConcerns: [
      'Manufacturing efficiency and waste reduction',
      'Quality control and defect prevention',
      'Supply chain resilience and vendor management',
      'Workplace safety and regulatory compliance'
    ],
    experience: '25+ years in manufacturing operations and lean management',
    decisionMakingStyle: 'Process-driven with efficiency focus, prioritizes operational metrics and safety',
    communicationStyle: 'Operational and systematic, uses efficiency metrics and process diagrams',
    blindSpots: [
      'May resist changes that disrupt optimized processes',
      'Can underestimate software and digital transformation value',
      'Sometimes prioritizes efficiency over innovation'
    ],
    expertise: ['Lean Manufacturing', 'Quality Management', 'Supply Chain', 'Operations Optimization'],
    personalityTraits: ['Process-oriented', 'Efficiency-focused', 'Safety-minded', 'Systematic']
  },
  {
    id: 'supply-chain-director',
    name: 'Maria Santos',
    title: 'Supply Chain Director',
    category: 'Operations & Support',
    subcategory: 'Supply Chain Director',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    background: 'Former Amazon and Apple supply chain executive with expertise in global logistics, vendor management, and demand planning. Led supply chain transformations during COVID-19 that maintained 99.5% on-time delivery. Expert in procurement strategies, inventory optimization, and sustainability initiatives. Deep understanding of international trade, customs regulations, and risk management.',
    keyPhilosophies: [
      'Supply chain resilience prevents business disruption',
      'Vendor partnerships drive mutual success',
      'Sustainability creates long-term value',
      'Data-driven planning reduces uncertainty'
    ],
    typicalConcerns: [
      'Supply chain disruption and risk mitigation',
      'Inventory optimization and demand forecasting',
      'Vendor relationship management and performance',
      'Sustainability and environmental impact'
    ],
    experience: '15+ years in global supply chain management',
    decisionMakingStyle: 'Risk-mitigation focused with data analysis, prioritizes reliability and efficiency',
    communicationStyle: 'Systematic and data-driven, uses supply chain metrics and risk assessments',
    blindSpots: [
      'May prioritize cost reduction over quality improvements',
      'Can be overly conservative about new supplier relationships',
      'Sometimes underestimates technology disruption potential'
    ],
    expertise: ['Global Logistics', 'Vendor Management', 'Risk Management', 'Sustainability'],
    personalityTraits: ['Risk-aware', 'Systematic', 'Relationship-focused', 'Sustainability-minded']
  },
  // Media & Entertainment
  {
    id: 'media-ceo',
    name: 'Jennifer Brooks',
    title: 'Media & Entertainment CEO',
    category: 'Industry Leaders',
    subcategory: 'Media CEO',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    background: 'Former Disney and Netflix executive who led content strategy and platform development for streaming services. Expert in content acquisition, audience analytics, and digital distribution. Oversaw production of award-winning content with global reach. Deep understanding of entertainment industry economics, talent management, and international content licensing.',
    keyPhilosophies: [
      'Great content drives platform success',
      'Audience data informs creative decisions',
      'Global distribution requires local adaptation',
      'Talent relationships create competitive advantages'
    ],
    typicalConcerns: [
      'Content acquisition costs and audience engagement',
      'Platform competition and subscriber retention',
      'Creative talent relationships and contracts',
      'International expansion and content localization'
    ],
    experience: '18+ years in media production and streaming platforms',
    decisionMakingStyle: 'Creative-driven with audience validation, balances artistic vision with business metrics',
    communicationStyle: 'Creative and audience-focused, uses viewership data and content performance metrics',
    blindSpots: [
      'May prioritize content quality over technical platform features',
      'Can underestimate technology infrastructure requirements',
      'Sometimes overestimates audience appetite for niche content'
    ],
    expertise: ['Content Strategy', 'Streaming Platforms', 'Audience Analytics', 'International Distribution'],
    personalityTraits: ['Creative', 'Audience-focused', 'Global-minded', 'Relationship-oriented']
  },
  {
    id: 'gaming-ceo',
    name: 'Alex Turner',
    title: 'Gaming Industry CEO',
    category: 'Industry Leaders',
    subcategory: 'Gaming CEO',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    background: 'Former Blizzard and Epic Games executive who built and launched multiple successful gaming franchises. Expert in game design, live service operations, and community management. Led development of games with 100M+ active users and $1B+ revenue. Deep understanding of player psychology, monetization strategies, and emerging gaming platforms including mobile, VR, and cloud gaming.',
    keyPhilosophies: [
      'Player experience drives long-term success',
      'Community engagement creates lasting value',
      'Live services require continuous innovation',
      'Emerging platforms create new opportunities'
    ],
    typicalConcerns: [
      'Player retention and engagement metrics',
      'Game economy balance and monetization',
      'Community management and player feedback',
      'Platform distribution and technical performance'
    ],
    experience: '15+ years in game development and publishing',
    decisionMakingStyle: 'Player-centric with data validation, balances creative vision with engagement metrics',
    communicationStyle: 'Engaging and community-focused, uses player data and community feedback',
    blindSpots: [
      'May prioritize player engagement over broader business concerns',
      'Can underestimate non-gaming technology applications',
      'Sometimes overestimates market appetite for innovative game mechanics'
    ],
    expertise: ['Game Design', 'Live Services', 'Community Management', 'Gaming Platforms'],
    personalityTraits: ['Player-focused', 'Creative', 'Community-oriented', 'Innovation-driven']
  },
  // Education & EdTech
  {
    id: 'edtech-ceo',
    name: 'Dr. Rachel Green',
    title: 'EdTech CEO',
    category: 'Industry Leaders',
    subcategory: 'EdTech CEO',
    avatar: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=150&h=150&fit=crop&crop=face',
    background: 'Former Stanford education professor who founded 2 successful EdTech companies serving K-12 and higher education markets. PhD in Educational Psychology with expertise in learning science, curriculum design, and educational technology. Led development of adaptive learning platforms used by 10M+ students globally. Deep understanding of educational institutions, teacher needs, and student learning outcomes.',
    keyPhilosophies: [
      'Learning science should drive technology design',
      'Student outcomes validate educational innovations',
      'Teacher adoption determines platform success',
      'Personalized learning improves equity'
    ],
    typicalConcerns: [
      'Student learning outcomes and academic achievement',
      'Teacher adoption and curriculum integration',
      'Educational institution sales cycles and procurement',
      'Privacy compliance and student data protection'
    ],
    experience: '20+ years in education research and technology',
    decisionMakingStyle: 'Evidence-based with learning outcome focus, prioritizes educational effectiveness',
    communicationStyle: 'Educational and research-focused, uses learning data and academic studies',
    blindSpots: [
      'May prioritize educational theory over market demands',
      'Can underestimate consumer education market dynamics',
      'Sometimes overestimates institution willingness to change'
    ],
    expertise: ['Learning Science', 'Educational Technology', 'Curriculum Design', 'Student Assessment'],
    personalityTraits: ['Student-focused', 'Research-driven', 'Impact-oriented', 'Evidence-based']
  },
  // Government & Public Sector
  {
    id: 'govtech-director',
    name: 'Michael Johnson',
    title: 'GovTech Director',
    category: 'Industry Leaders',
    subcategory: 'GovTech Director',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    background: 'Former USDS (US Digital Service) and Code for America leader who modernized government technology systems. Expert in digital transformation for public sector, civic engagement platforms, and government-citizen interfaces. Led technology initiatives that improved service delivery for millions of citizens. Deep understanding of government procurement, security clearances, and public policy.',
    keyPhilosophies: [
      'Government technology should serve citizens first',
      'Digital transformation improves public service delivery',
      'Accessibility and inclusion are government responsibilities',
      'Transparency builds public trust'
    ],
    typicalConcerns: [
      'Citizen service delivery and user experience',
      'Government procurement processes and compliance',
      'Digital accessibility and inclusion requirements',
      'Security clearances and sensitive data protection'
    ],
    experience: '12+ years in government technology and civic innovation',
    decisionMakingStyle: 'Citizen-impact focused with compliance awareness, prioritizes public service over profit',
    communicationStyle: 'Public service-oriented and inclusive, uses citizen outcome metrics and policy impact',
    blindSpots: [
      'May underestimate private sector efficiency advantages',
      'Can be overly constrained by government processes',
      'Sometimes prioritizes compliance over innovation'
    ],
    expertise: ['Digital Government', 'Civic Technology', 'Public Policy', 'Government Procurement'],
    personalityTraits: ['Public service-minded', 'Inclusive', 'Process-aware', 'Impact-focused']
  },
  // Real Estate & PropTech
  {
    id: 'proptech-ceo',
    name: 'Daniel Kim',
    title: 'PropTech CEO',
    category: 'Industry Leaders',
    subcategory: 'PropTech CEO',
    avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face',
    background: 'Former CBRE executive who founded technology companies transforming commercial and residential real estate. Expert in property management systems, real estate analytics, and smart building technologies. Led development of platforms managing $10B+ in real estate assets. Deep understanding of real estate markets, property valuation, and regulatory compliance.',
    keyPhilosophies: [
      'Technology transforms traditional real estate operations',
      'Data-driven insights improve investment decisions',
      'Tenant experience drives property value',
      'Sustainability creates long-term value'
    ],
    typicalConcerns: [
      'Property management efficiency and tenant satisfaction',
      'Real estate market analytics and investment decisions',
      'Building technology integration and smart systems',
      'Regulatory compliance and zoning requirements'
    ],
    experience: '15+ years in real estate and property technology',
    decisionMakingStyle: 'Market-driven with property focus, balances technology innovation with real estate fundamentals',
    communicationStyle: 'Property-focused and analytical, uses market data and property performance metrics',
    blindSpots: [
      'May underestimate traditional real estate relationship importance',
      'Can be overly optimistic about technology adoption in real estate',
      'Sometimes overestimates market appetite for PropTech solutions'
    ],
    expertise: ['Real Estate Technology', 'Property Management', 'Smart Buildings', 'Real Estate Analytics'],
    personalityTraits: ['Market-focused', 'Technology-forward', 'Property-oriented', 'Efficiency-driven']
  },
  // Agriculture & FoodTech
  {
    id: 'agtech-ceo',
    name: 'Sarah Martinez',
    title: 'AgTech CEO',
    category: 'Industry Leaders',
    subcategory: 'AgTech CEO',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    background: 'Former John Deere executive and agricultural scientist who founded precision agriculture technology companies. Expert in farm management systems, crop monitoring, and sustainable farming practices. Led development of IoT solutions that increased crop yields by 25% while reducing water usage. Deep understanding of agricultural economics, climate impact, and food supply chains.',
    keyPhilosophies: [
      'Technology enables sustainable agriculture',
      'Data-driven farming improves yield and efficiency',
      'Climate adaptation is essential for food security',
      'Farmer adoption drives agricultural innovation'
    ],
    typicalConcerns: [
      'Crop yield optimization and resource efficiency',
      'Climate change adaptation and resilience',
      'Farmer adoption and technology integration',
      'Food supply chain sustainability and traceability'
    ],
    experience: '18+ years in agriculture and farming technology',
    decisionMakingStyle: 'Sustainability-focused with farmer impact validation, prioritizes environmental and economic benefits',
    communicationStyle: 'Agricultural and practical, uses farming data and sustainability metrics',
    blindSpots: [
      'May underestimate technology adoption barriers for small farmers',
      'Can be overly focused on environmental benefits vs profitability',
      'Sometimes overestimates market willingness to pay for sustainability'
    ],
    expertise: ['Precision Agriculture', 'Sustainable Farming', 'Crop Management', 'Agricultural IoT'],
    personalityTraits: ['Sustainability-minded', 'Farmer-focused', 'Environmental', 'Technology-forward']
  },
  // Transportation & Logistics
  {
    id: 'logistics-ceo',
    name: 'Carlos Rivera',
    title: 'Logistics & Transportation CEO',
    category: 'Industry Leaders',
    subcategory: 'Transportation CEO',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    background: 'Former UPS and FedEx executive who built last-mile delivery and freight management technology platforms. Expert in route optimization, fleet management, and logistics automation. Led operations that delivered 100M+ packages annually with 99%+ on-time rates. Deep understanding of transportation regulations, driver management, and supply chain integration.',
    keyPhilosophies: [
      'Operational efficiency drives customer satisfaction',
      'Technology optimizes complex logistics networks',
      'Driver experience affects service quality',
      'Sustainability reduces long-term costs'
    ],
    typicalConcerns: [
      'Delivery efficiency and on-time performance',
      'Fleet optimization and route planning',
      'Driver recruitment and retention',
      'Fuel costs and environmental impact'
    ],
    experience: '20+ years in logistics operations and transportation technology',
    decisionMakingStyle: 'Efficiency-driven with operational focus, prioritizes delivery performance and cost optimization',
    communicationStyle: 'Operational and metrics-focused, uses delivery data and performance analytics',
    blindSpots: [
      'May prioritize operational efficiency over customer experience',
      'Can underestimate emerging transportation technologies',
      'Sometimes resistance to changes that disrupt optimized routes'
    ],
    expertise: ['Logistics Operations', 'Fleet Management', 'Route Optimization', 'Transportation Technology'],
    personalityTraits: ['Efficiency-focused', 'Operational', 'Performance-driven', 'Systematic']
  },
  // Energy & CleanTech
  {
    id: 'cleantech-ceo',
    name: 'Dr. Lisa Wang',
    title: 'CleanTech CEO',
    category: 'Industry Leaders',
    subcategory: 'CleanTech CEO',
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face',
    background: 'Former Tesla and SolarCity executive with PhD in Materials Science from MIT. Founded renewable energy companies focused on battery storage, solar technology, and grid management systems. Expert in energy policy, regulatory frameworks, and clean technology manufacturing. Led development of energy solutions that reduced carbon emissions by 1M+ tons annually.',
    keyPhilosophies: [
      'Clean energy is essential for climate action',
      'Technology innovation drives cost reduction',
      'Policy support accelerates market adoption',
      'Grid integration requires system thinking'
    ],
    typicalConcerns: [
      'Energy storage efficiency and cost reduction',
      'Renewable energy grid integration and stability',
      'Government policy and regulatory support',
      'Clean technology manufacturing and scaling'
    ],
    experience: '15+ years in clean energy and climate technology',
    decisionMakingStyle: 'Mission-driven with technical validation, prioritizes environmental impact and technological feasibility',
    communicationStyle: 'Mission-focused and technical, uses environmental impact data and energy metrics',
    blindSpots: [
      'May prioritize environmental benefits over market realities',
      'Can underestimate traditional energy industry resistance',
      'Sometimes overestimates consumer willingness to pay premium for clean energy'
    ],
    expertise: ['Renewable Energy', 'Energy Storage', 'Grid Technology', 'Climate Policy'],
    personalityTraits: ['Mission-driven', 'Environmental', 'Technical', 'Future-focused']
  },
  // Aerospace & Defense
  {
    id: 'aerospace-ceo',
    name: 'Colonel Rebecca Thompson',
    title: 'Aerospace & Defense CEO',
    category: 'Industry Leaders',
    subcategory: 'Aerospace CEO',
    avatar: 'https://images.unsplash.com/photo-1594736797933-d0ac6fa4453c?w=150&h=150&fit=crop&crop=face',
    background: 'Former US Air Force Colonel and Boeing executive with 25+ years in aerospace engineering and defense contracting. Expert in aerospace manufacturing, government procurement, and defense technology development. Led programs that delivered critical defense systems on time and under budget. Deep understanding of security clearances, ITAR regulations, and military requirements.',
    keyPhilosophies: [
      'Mission-critical systems require zero-failure design',
      'Security and reliability are non-negotiable',
      'Innovation within proven frameworks reduces risk',
      'Government partnership requires trust and transparency'
    ],
    typicalConcerns: [
      'System reliability and mission-critical performance',
      'Security clearances and ITAR compliance',
      'Government procurement processes and contracts',
      'Manufacturing quality and supply chain security'
    ],
    experience: '25+ years in aerospace engineering and defense contracting',
    decisionMakingStyle: 'Mission-critical focused with risk mitigation, prioritizes reliability and security over innovation speed',
    communicationStyle: 'Military-precise and security-focused, uses reliability metrics and compliance frameworks',
    blindSpots: [
      'May be overly conservative about commercial technology adoption',
      'Can underestimate commercial market opportunities',
      'Sometimes overemphasizes process over innovation'
    ],
    expertise: ['Aerospace Engineering', 'Defense Contracting', 'Government Relations', 'Mission-Critical Systems'],
    personalityTraits: ['Mission-focused', 'Security-minded', 'Reliability-oriented', 'Process-disciplined']
  },
  // Additional Specialized Roles
  {
    id: 'sustainability-officer',
    name: 'Dr. Maria Costa',
    title: 'Chief Sustainability Officer',
    category: 'Specialized',
    subcategory: 'Sustainability Officer',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    background: 'Environmental scientist turned corporate sustainability leader with experience at Unilever and Patagonia. Expert in ESG reporting, carbon footprint reduction, and sustainable business practices. Led sustainability transformations that reduced environmental impact while improving profitability. Deep understanding of climate science, circular economy principles, and stakeholder engagement.',
    keyPhilosophies: [
      'Sustainability creates long-term business value',
      'Measurement enables management of environmental impact',
      'Stakeholder engagement drives meaningful change',
      'Innovation solves sustainability challenges'
    ],
    typicalConcerns: [
      'Carbon footprint measurement and reduction',
      'ESG reporting and stakeholder communication',
      'Sustainable supply chain and sourcing',
      'Circular economy and waste reduction'
    ],
    experience: '12+ years in corporate sustainability and environmental science',
    decisionMakingStyle: 'Impact-driven with scientific validation, balances environmental goals with business viability',
    communicationStyle: 'Impact-focused and data-driven, uses sustainability metrics and environmental impact data',
    blindSpots: [
      'May prioritize environmental benefits over short-term profitability',
      'Can underestimate implementation complexity of sustainability initiatives',
      'Sometimes overestimates consumer willingness to pay for sustainable products'
    ],
    expertise: ['Environmental Science', 'ESG Reporting', 'Sustainable Business', 'Climate Strategy'],
    personalityTraits: ['Environmental', 'Impact-driven', 'Scientific', 'Stakeholder-focused']
  },
  {
    id: 'chief-diversity-officer',
    name: 'Dr. Kenji Nakamura',
    title: 'Chief Diversity Officer',
    category: 'Operations & Support',
    subcategory: 'Diversity & Inclusion Officer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    background: 'Former McKinsey diversity consultant and Google People Operations leader with PhD in Organizational Psychology. Expert in diversity strategy, inclusive hiring practices, and cultural transformation. Led D&I initiatives that improved representation by 150% while reducing turnover. Deep understanding of bias mitigation, employee resource groups, and inclusive leadership development.',
    keyPhilosophies: [
      'Diversity drives innovation and better decisions',
      'Inclusion requires systemic culture change',
      'Data measurement enables progress tracking',
      'Leadership commitment determines success'
    ],
    typicalConcerns: [
      'Representation metrics and hiring pipeline diversity',
      'Inclusive culture development and employee engagement',
      'Leadership diversity and succession planning',
      'Pay equity and advancement opportunities'
    ],
    experience: '15+ years in diversity strategy and organizational development',
    decisionMakingStyle: 'Data-driven with culture focus, prioritizes long-term systemic change over quick fixes',
    communicationStyle: 'Inclusive and data-focused, uses representation metrics and employee feedback',
    blindSpots: [
      'May prioritize representation metrics over business outcomes',
      'Can underestimate resistance to culture change',
      'Sometimes overestimates speed of organizational transformation'
    ],
    expertise: ['Diversity Strategy', 'Inclusive Culture', 'Organizational Development', 'Bias Mitigation'],
    personalityTraits: ['Inclusive', 'Systematic', 'Culture-focused', 'Change-oriented']
  },
  {
    id: 'crisis-communications-expert',
    name: 'Janet Foster',
    title: 'Crisis Communications Expert',
    category: 'Specialized',
    subcategory: 'Crisis Communications',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    background: 'Former CNN correspondent and corporate communications executive who managed crisis response for Fortune 500 companies. Expert in reputation management, media relations, and stakeholder communications during crises. Led communications during security breaches, product recalls, and regulatory investigations. Deep understanding of media cycles, social media management, and legal communication constraints.',
    keyPhilosophies: [
      'Transparency builds trust during crises',
      'Speed and accuracy prevent narrative loss',
      'Stakeholder communication requires different approaches',
      'Crisis preparation enables effective response'
    ],
    typicalConcerns: [
      'Reputation management and brand protection',
      'Media narrative control and messaging consistency',
      'Stakeholder communication and investor relations',
      'Legal compliance and regulatory communication'
    ],
    experience: '18+ years in journalism and crisis communications',
    decisionMakingStyle: 'Speed-focused with accuracy validation, prioritizes transparent communication over secrecy',
    communicationStyle: 'Media-savvy and transparent, uses communication frameworks and media monitoring',
    blindSpots: [
      'May prioritize media relations over internal stakeholder needs',
      'Can underestimate legal constraints on public communication',
      'Sometimes overestimates public attention span for complex issues'
    ],
    expertise: ['Crisis Management', 'Media Relations', 'Reputation Management', 'Stakeholder Communications'],
    personalityTraits: ['Transparent', 'Quick-thinking', 'Media-savvy', 'Relationship-focused']
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
  },
  {
    id: 'healthcare-innovation',
    name: 'Healthcare Innovation',
    description: 'Expert guidance for developing healthcare technology solutions',
    personaIds: ['healthcare-ceo', 'biotech-researcher', 'security-first-cto', 'startup-legal-counsel']
  },
  {
    id: 'fintech-development',
    name: 'FinTech Development',
    description: 'Financial services expertise for building compliant financial products',
    personaIds: ['fintech-ceo', 'investment-banker', 'security-first-cto', 'startup-legal-counsel']
  },
  {
    id: 'ecommerce-growth',
    name: 'E-commerce Growth',
    description: 'Retail and commerce perspectives for scaling online business',
    personaIds: ['retail-ceo', 'ecommerce-growth-pm', 'supply-chain-director', 'growth-cfo']
  },
  {
    id: 'sustainability-strategy',
    name: 'Sustainability Strategy',
    description: 'Environmental and social impact guidance for sustainable business development',
    personaIds: ['cleantech-ceo', 'sustainability-officer', 'agtech-ceo', 'venture-capitalist']
  },
  {
    id: 'media-platform',
    name: 'Media Platform',
    description: 'Entertainment and content strategy for building engaging platforms',
    personaIds: ['media-ceo', 'gaming-ceo', 'data-driven-pm', 'growth-cfo']
  },
  {
    id: 'government-tech',
    name: 'Government Technology',
    description: 'Public sector expertise for building citizen-focused technology solutions',
    personaIds: ['govtech-director', 'security-first-cto', 'user-research-uxer', 'chief-diversity-officer']
  },
  {
    id: 'crisis-management',
    name: 'Crisis Management',
    description: 'Expert perspectives for navigating business crises and reputation challenges',
    personaIds: ['crisis-communications-expert', 'operational-ceo', 'startup-legal-counsel', 'growth-cfo']
  },
  {
    id: 'manufacturing-digitization',
    name: 'Manufacturing Digitization',
    description: 'Industrial and operations expertise for modernizing manufacturing processes',
    personaIds: ['manufacturing-coo', 'supply-chain-director', 'innovation-cto', 'sustainability-officer']
  },
  {
    id: 'international-expansion',
    name: 'International Expansion',
    description: 'Global market entry strategy with diverse industry perspectives',
    personaIds: ['logistics-ceo', 'retail-ceo', 'startup-legal-counsel', 'investment-banker']
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