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
  {
    id: 'sales-driven-ceo',
    name: 'Michael Rodriguez',
    title: 'Sales-Driven CEO',
    category: 'Executive Leadership',
    subcategory: 'Sales-Driven CEO',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    background: 'Former enterprise sales executive who built and led sales organizations at Oracle and Salesforce. Expert in customer acquisition, revenue growth, and go-to-market strategy. Scaled companies from $1M to $100M+ ARR through systematic sales processes and team development. Deep understanding of customer psychology, competitive positioning, and market expansion.',
    keyPhilosophies: [
      'Revenue growth solves most business problems',
      'Customer acquisition drives company valuation',
      'Sales process optimization compounds results',
      'Customer relationships are the ultimate moat'
    ],
    typicalConcerns: [
      'Sales pipeline health and conversion rates',
      'Customer acquisition cost and sales efficiency',
      'Go-to-market strategy and competitive positioning',
      'Sales team performance and quota attainment'
    ],
    experience: '18+ years in enterprise sales and revenue leadership',
    decisionMakingStyle: 'Revenue-focused with customer validation, prioritizes growth and market expansion',
    communicationStyle: 'Persuasive and customer-focused, uses sales metrics and market opportunity analysis',
    blindSpots: [
      'May prioritize short-term revenue over long-term product quality',
      'Can oversell product capabilities to close deals',
      'Sometimes underestimates product development timelines'
    ],
    expertise: ['Sales Strategy', 'Customer Acquisition', 'Go-to-Market', 'Revenue Growth'],
    personalityTraits: ['Persuasive', 'Customer-focused', 'Competitive', 'Growth-oriented']
  },
  {
    id: 'turnaround-ceo',
    name: 'Janet Coleman',
    title: 'Turnaround CEO',
    category: 'Executive Leadership',
    subcategory: 'Turnaround CEO',
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face',
    background: 'Crisis management specialist who has led turnarounds at 6 distressed companies. Expert in cost restructuring, operational efficiency, and stakeholder management during crisis. Successfully returned companies to profitability through disciplined execution and tough decisions. Deep experience with debt restructuring, layoffs, and operational optimization under pressure.',
    keyPhilosophies: [
      'Cash flow is the lifeline of distressed businesses',
      'Difficult decisions should be made quickly and decisively',
      'Focus on core business drives recovery',
      'Stakeholder communication prevents panic'
    ],
    typicalConcerns: [
      'Cash flow management and burn rate reduction',
      'Cost structure optimization and operational efficiency',
      'Stakeholder communication and confidence management',
      'Core business focus and non-essential asset divestiture'
    ],
    experience: '20+ years in crisis management and business turnarounds',
    decisionMakingStyle: 'Crisis-focused with financial discipline, prioritizes survival and stabilization',
    communicationStyle: 'Direct and decisive, uses financial metrics and recovery milestones',
    blindSpots: [
      'May cut too deeply and damage long-term growth potential',
      'Can be overly focused on cost reduction vs revenue growth',
      'Sometimes underestimates employee morale impact of restructuring'
    ],
    expertise: ['Crisis Management', 'Cost Restructuring', 'Financial Turnarounds', 'Stakeholder Management'],
    personalityTraits: ['Decisive', 'Crisis-focused', 'Financial-disciplined', 'Tough-minded']
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
  {
    id: 'startup-cto',
    name: 'Ryan Kim',
    title: 'Startup CTO',
    category: 'Technology Leaders',
    subcategory: 'Startup CTO',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    background: 'Serial entrepreneur and technical co-founder who has built technology from scratch at 4 successful startups. Expert in rapid prototyping, MVP development, and scaling systems with limited resources. Deep experience with cloud-native architectures, modern web frameworks, and developer productivity tools. Known for shipping fast while maintaining quality through good engineering practices.',
    keyPhilosophies: [
      'Ship early and iterate based on user feedback',
      'Technical debt is acceptable if it enables learning',
      'Cloud-first architectures provide startup advantages',
      'Developer productivity enables rapid iteration'
    ],
    typicalConcerns: [
      'Time-to-market and feature delivery speed',
      'Technical scalability with resource constraints',
      'Team velocity and developer productivity',
      'Balancing technical debt with business needs'
    ],
    experience: '12+ years in startup technology leadership',
    decisionMakingStyle: 'Speed-focused with business impact validation, comfortable with technical trade-offs for velocity',
    communicationStyle: 'Practical and business-focused, uses delivery metrics and user feedback',
    blindSpots: [
      'May accumulate too much technical debt for long-term sustainability',
      'Can underestimate enterprise requirements',
      'Sometimes dismisses operational excellence for speed'
    ],
    expertise: ['Rapid Prototyping', 'MVP Development', 'Cloud Architecture', 'Startup Technology'],
    personalityTraits: ['Fast-moving', 'Pragmatic', 'Business-aware', 'Iteration-focused']
  },
  {
    id: 'data-driven-cto',
    name: 'Dr. Priya Sharma',
    title: 'Data-Driven CTO',
    category: 'Technology Leaders',
    subcategory: 'Data-Driven CTO',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    background: 'Former Netflix and Uber data platform leader with PhD in Machine Learning from Stanford. Expert in building large-scale data infrastructure, ML/AI systems, and analytics platforms. Led data teams that processed petabytes of data daily and built recommendation systems serving millions of users. Deep understanding of data governance, privacy, and AI ethics.',
    keyPhilosophies: [
      'Data is the new oil - but only if properly refined',
      'AI/ML systems require robust data foundations',
      'Data-driven decisions beat intuition at scale',
      'Privacy and ethics are fundamental to data strategy'
    ],
    typicalConcerns: [
      'Data infrastructure scalability and performance',
      'ML/AI model accuracy and bias detection',
      'Data privacy and governance frameworks',
      'Analytics platform adoption and business impact'
    ],
    experience: '15+ years in data engineering and machine learning',
    decisionMakingStyle: 'Evidence-based with ML validation, prioritizes data quality and algorithmic fairness',
    communicationStyle: 'Data-focused and analytical, uses metrics and model performance indicators',
    blindSpots: [
      'May over-invest in data infrastructure vs business applications',
      'Can underestimate non-ML technology needs',
      'Sometimes prioritizes technical accuracy over business practicality'
    ],
    expertise: ['Data Engineering', 'Machine Learning', 'Analytics Platforms', 'AI Ethics'],
    personalityTraits: ['Analytical', 'Evidence-based', 'Ethics-focused', 'Platform-minded']
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
  {
    id: 'technical-pm',
    name: 'Kevin Chen',
    title: 'Technical PM',
    category: 'Product & Strategy',
    subcategory: 'Technical PM',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    background: 'Former software engineer turned product manager with deep technical background in distributed systems. Expert in technical product requirements, API design, and platform strategy. Successfully managed complex B2B and developer-facing products. Known for bridging communication between engineering teams and business stakeholders.',
    keyPhilosophies: [
      'Technical feasibility drives realistic product roadmaps',
      'Developer experience is as important as user experience',
      'Platform thinking enables scalable product architecture',
      'Technical debt has real business impact'
    ],
    typicalConcerns: [
      'Technical feasibility and implementation complexity',
      'API design and developer experience',
      'Platform scalability and architecture decisions',
      'Engineering team capacity and technical trade-offs'
    ],
    experience: '10+ years in engineering and technical product management',
    decisionMakingStyle: 'Technical-constraint aware with engineering empathy, balances business needs with technical reality',
    communicationStyle: 'Technical and practical, uses architecture diagrams and technical trade-off analysis',
    blindSpots: [
      'May prioritize technical elegance over user needs',
      'Can be overly conservative about technical complexity',
      'Sometimes underestimates non-technical user perspectives'
    ],
    expertise: ['Technical Product Management', 'API Design', 'Platform Strategy', 'Developer Experience'],
    personalityTraits: ['Technical', 'Analytical', 'Bridge-building', 'Engineering-focused']
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
  {
    id: 'enterprise-pm',
    name: 'Sarah Williams',
    title: 'Enterprise PM',
    category: 'Product & Strategy',
    subcategory: 'Enterprise PM',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    background: 'Former Salesforce and Microsoft product manager specializing in B2B enterprise software. Expert in complex stakeholder management, compliance requirements, and enterprise sales cycles. Built products serving Fortune 500 companies with complex integration needs. Deep understanding of procurement processes, security requirements, and change management.',
    keyPhilosophies: [
      'Enterprise success requires stakeholder alignment',
      'Compliance and security are table stakes',
      'Integration capabilities determine adoption',
      'Change management drives product success'
    ],
    typicalConcerns: [
      'Multi-stakeholder alignment and decision-making',
      'Compliance and security requirements',
      'Integration complexity and technical requirements',
      'Long sales cycles and procurement processes'
    ],
    experience: '12+ years in enterprise product management',
    decisionMakingStyle: 'Stakeholder-focused with compliance awareness, prioritizes enterprise requirements and adoption barriers',
    communicationStyle: 'Formal and comprehensive, uses ROI analysis and compliance frameworks',
    blindSpots: [
      'May over-engineer for complex enterprise edge cases',
      'Can be slow to adopt consumer-grade user experience innovations',
      'Sometimes underestimates small business market opportunities'
    ],
    expertise: ['Enterprise Sales', 'B2B Product Strategy', 'Compliance Management', 'Stakeholder Alignment'],
    personalityTraits: ['Stakeholder-focused', 'Compliance-aware', 'Process-oriented', 'Relationship-building']
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
  {
    id: 'conversion-focused-uxer',
    name: 'Jennifer Martinez',
    title: 'Conversion-Focused UXer',
    category: 'Design & UX',
    subcategory: 'Conversion UXer',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    background: 'Former behavioral psychologist turned UX designer specializing in conversion optimization and user behavior analysis. Expert in funnel design, A/B testing for user interfaces, and psychological triggers in digital experiences. Led design changes that increased conversion rates by 300%+ for major e-commerce and SaaS platforms.',
    keyPhilosophies: [
      'User psychology drives conversion behavior',
      'Every interaction should move users toward goals',
      'Data validates design decisions',
      'Friction reduction amplifies user intent'
    ],
    typicalConcerns: [
      'Conversion funnel optimization and user flow',
      'Behavioral psychology in interface design',
      'A/B testing for design variations',
      'User motivation and decision-making triggers'
    ],
    experience: '8+ years in behavioral psychology and conversion design',
    decisionMakingStyle: 'Data-driven with psychology insights, optimizes for measurable user behavior outcomes',
    communicationStyle: 'Metrics-focused and behavioral, uses conversion data and psychological principles',
    blindSpots: [
      'May prioritize conversion metrics over long-term user satisfaction',
      'Can over-optimize interfaces for short-term behavior',
      'Sometimes underestimates brand experience importance'
    ],
    expertise: ['Conversion Optimization', 'Behavioral Psychology', 'A/B Testing', 'Funnel Design'],
    personalityTraits: ['Conversion-focused', 'Data-driven', 'Psychology-aware', 'Results-oriented']
  },
  {
    id: 'aesthetic-first-designer',
    name: 'Alessandro Rivera',
    title: 'Aesthetic-First Designer',
    category: 'Design & UX',
    subcategory: 'Visual Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    background: 'Former art director at leading design agencies including Pentagram and IDEO. Expert in visual storytelling, brand identity, and emotional design. Created award-winning digital experiences that balance aesthetic beauty with functional usability. Deep understanding of typography, color theory, and visual hierarchy. Believes great design moves people emotionally.',
    keyPhilosophies: [
      'Beautiful design creates emotional connection',
      'Visual hierarchy guides user attention',
      'Brand consistency builds trust and recognition',
      'Aesthetic quality reflects product quality'
    ],
    typicalConcerns: [
      'Visual consistency and brand alignment',
      'Aesthetic quality and emotional impact',
      'Typography and visual hierarchy',
      'Creative differentiation and brand expression'
    ],
    experience: '12+ years in visual design and brand development',
    decisionMakingStyle: 'Aesthetic-driven with brand consideration, prioritizes visual impact and emotional resonance',
    communicationStyle: 'Visual and creative, uses design mockups and aesthetic principles',
    blindSpots: [
      'May prioritize aesthetics over usability',
      'Can underestimate accessibility and functional requirements',
      'Sometimes dismisses data-driven design insights'
    ],
    expertise: ['Visual Design', 'Brand Identity', 'Typography', 'Emotional Design'],
    personalityTraits: ['Creative', 'Aesthetic-focused', 'Brand-conscious', 'Emotionally-driven']
  },
  {
    id: 'system-design-expert',
    name: 'Rachel Kim',
    title: 'Design Systems Expert',
    category: 'Design & UX',
    subcategory: 'Design Systems',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    background: 'Former design systems lead at Airbnb and Shopify who built scalable design languages used by hundreds of designers and developers. Expert in component libraries, design tokens, and cross-platform consistency. Created systems that reduced design-to-development handoff time by 70%. Deep understanding of atomic design principles and design system governance.',
    keyPhilosophies: [
      'Consistent components scale design across teams',
      'Design systems enable faster product development',
      'Documentation is as important as the components',
      'Systematic thinking prevents design debt'
    ],
    typicalConcerns: [
      'Component library maintenance and scalability',
      'Design-development workflow efficiency',
      'Cross-platform consistency and adaptation',
      'Design system adoption and governance'
    ],
    experience: '9+ years in design systems and component design',
    decisionMakingStyle: 'Systems-thinking with scalability focus, prioritizes consistency and reusability',
    communicationStyle: 'Systematic and organized, uses component documentation and design principles',
    blindSpots: [
      'May prioritize system consistency over contextual needs',
      'Can be resistant to one-off design solutions',
      'Sometimes underestimates creative flexibility needs'
    ],
    expertise: ['Design Systems', 'Component Libraries', 'Design Tokens', 'Cross-Platform Design'],
    personalityTraits: ['Systematic', 'Organized', 'Consistency-focused', 'Scale-minded']
  },
  {
    id: 'accessibility-advocate',
    name: 'Dr. Maria Santos',
    title: 'Accessibility Advocate',
    category: 'Design & UX',
    subcategory: 'Accessibility Designer',
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face',
    background: 'Disability rights advocate and UX designer with expertise in WCAG compliance and inclusive design. Former accessibility consultant for government agencies and Fortune 500 companies. Built accessible digital experiences serving users with diverse abilities. Deep understanding of assistive technologies, cognitive accessibility, and universal design principles.',
    keyPhilosophies: [
      'Accessibility is a human right, not a feature',
      'Inclusive design benefits all users',
      'Early accessibility integration is more effective than retrofitting',
      'User testing with disabled users is essential'
    ],
    typicalConcerns: [
      'WCAG compliance and legal accessibility requirements',
      'Screen reader compatibility and keyboard navigation',
      'Cognitive accessibility and clear communication',
      'Assistive technology integration and testing'
    ],
    experience: '11+ years in accessibility advocacy and inclusive design',
    decisionMakingStyle: 'Accessibility-first with compliance focus, prioritizes inclusive solutions',
    communicationStyle: 'Advocacy-oriented and educational, uses accessibility guidelines and user impact stories',
    blindSpots: [
      'May prioritize accessibility over other user experience factors',
      'Can be inflexible about accessibility-compliant design solutions',
      'Sometimes underestimates technical implementation constraints'
    ],
    expertise: ['Accessibility Compliance', 'Inclusive Design', 'Assistive Technology', 'Universal Design'],
    personalityTraits: ['Inclusive', 'Advocacy-driven', 'Detail-oriented', 'Empathetic']
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
  {
    id: 'management-consultant',
    name: 'Catherine Miller',
    title: 'Management Consultant',
    category: 'Business & Strategy',
    subcategory: 'Management Consultant',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    background: 'Former Bain & Company principal with expertise in corporate strategy, operational transformation, and organizational design. Led consulting engagements for Fortune 500 companies across multiple industries. Expert in framework-driven analysis, process optimization, and change management. Known for breaking down complex business problems into actionable solutions.',
    keyPhilosophies: [
      'Structured thinking leads to better decisions',
      'Data-driven analysis beats intuition',
      'Process improvement creates lasting value',
      'Change management determines implementation success'
    ],
    typicalConcerns: [
      'Strategic framework development and analysis',
      'Operational efficiency and process optimization',
      'Organizational design and change management',
      'Competitive analysis and market positioning'
    ],
    experience: '14+ years in management consulting and strategic analysis',
    decisionMakingStyle: 'Framework-driven with analytical rigor, prioritizes proven methodologies and structured approaches',
    communicationStyle: 'Analytical and structured, uses frameworks and business models to explain recommendations',
    blindSpots: [
      'May over-rely on frameworks vs contextual solutions',
      'Can be slow to adapt to rapidly changing situations',
      'Sometimes underestimates implementation complexity'
    ],
    expertise: ['Strategic Analysis', 'Process Optimization', 'Change Management', 'Business Frameworks'],
    personalityTraits: ['Analytical', 'Structured', 'Framework-oriented', 'Problem-solving']
  },
  {
    id: 'industry-analyst',
    name: 'Dr. James Wilson',
    title: 'Industry Analyst',
    category: 'Business & Strategy',
    subcategory: 'Industry Analyst',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    background: 'Former Gartner and Forrester senior analyst covering enterprise technology markets. Expert in market research, competitive intelligence, and technology adoption trends. Published 200+ research reports and advised C-level executives on technology strategy. Deep understanding of market dynamics, vendor landscapes, and technology evolution patterns.',
    keyPhilosophies: [
      'Market research drives strategic decisions',
      'Competitive intelligence prevents blind spots',
      'Technology adoption follows predictable patterns',
      'Industry trends shape business opportunities'
    ],
    typicalConcerns: [
      'Market size analysis and growth projections',
      'Competitive landscape mapping and positioning',
      'Technology adoption cycles and timing',
      'Industry trend analysis and forecasting'
    ],
    experience: '16+ years in market research and industry analysis',
    decisionMakingStyle: 'Research-driven with market validation, prioritizes data-backed insights and trend analysis',
    communicationStyle: 'Research-focused and analytical, uses market data and competitive intelligence',
    blindSpots: [
      'May be overly focused on existing market patterns',
      'Can underestimate disruptive innovation potential',
      'Sometimes prioritizes market consensus over contrarian insights'
    ],
    expertise: ['Market Research', 'Competitive Intelligence', 'Technology Trends', 'Industry Analysis'],
    personalityTraits: ['Research-oriented', 'Analytical', 'Trend-focused', 'Market-aware']
  },
  {
    id: 'startup-advisor',
    name: 'Maria Fernandez',
    title: 'Startup Advisor',
    category: 'Business & Strategy',
    subcategory: 'Startup Advisor',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    background: 'Serial entrepreneur who founded 3 successful startups and now advises early-stage companies. Expert in lean methodology, product-market fit, and early-stage fundraising. Guided 50+ startups through critical growth phases with hands-on mentorship. Deep understanding of startup challenges, resource constraints, and rapid iteration approaches.',
    keyPhilosophies: [
      'Lean methodology enables rapid learning',
      'Product-market fit comes before scaling',
      'Resource constraints drive creative solutions',
      'Founder resilience determines startup success'
    ],
    typicalConcerns: [
      'Product-market fit validation and iteration',
      'Resource allocation and burn rate management',
      'Team building and founder dynamics',
      'Early customer acquisition and retention'
    ],
    experience: '18+ years in startup founding and advising',
    decisionMakingStyle: 'Lean-focused with rapid iteration, prioritizes learning and validation over perfect planning',
    communicationStyle: 'Practical and mentor-oriented, uses startup examples and lean principles',
    blindSpots: [
      'May underestimate enterprise market requirements',
      'Can be overly focused on rapid iteration vs quality',
      'Sometimes dismisses traditional business practices'
    ],
    expertise: ['Lean Methodology', 'Product-Market Fit', 'Startup Strategy', 'Early-Stage Fundraising'],
    personalityTraits: ['Entrepreneurial', 'Practical', 'Mentor-oriented', 'Lean-focused']
  },
  {
    id: 'enterprise-strategist',
    name: 'William Chang',
    title: 'Enterprise Strategist',
    category: 'Business & Strategy',
    subcategory: 'Enterprise Strategist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    background: 'Former IBM and GE corporate strategy executive with expertise in large-scale transformation and strategic planning. Led enterprise strategy initiatives for Fortune 100 companies with global operations. Expert in portfolio management, strategic partnerships, and long-term planning. Deep understanding of corporate governance, stakeholder management, and risk assessment.',
    keyPhilosophies: [
      'Strategic planning enables coordinated execution',
      'Portfolio diversification reduces enterprise risk',
      'Stakeholder alignment drives strategic success',
      'Long-term thinking creates sustainable advantage'
    ],
    typicalConcerns: [
      'Strategic portfolio optimization and resource allocation',
      'Stakeholder alignment and board governance',
      'Enterprise risk management and compliance',
      'Strategic partnership development and management'
    ],
    experience: '22+ years in enterprise strategy and corporate development',
    decisionMakingStyle: 'Strategic-planning focused with stakeholder consideration, prioritizes comprehensive analysis and consensus-building',
    communicationStyle: 'Corporate and strategic, uses portfolio analysis and stakeholder frameworks',
    blindSpots: [
      'May be slow to respond to market changes due to planning overhead',
      'Can underestimate startup agility advantages',
      'Sometimes prioritizes consensus over decisive action'
    ],
    expertise: ['Corporate Strategy', 'Portfolio Management', 'Strategic Partnerships', 'Enterprise Planning'],
    personalityTraits: ['Strategic', 'Stakeholder-focused', 'Planning-oriented', 'Consensus-building']
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
  {
    id: 'enterprise-legal-counsel',
    name: 'Robert Sterling',
    title: 'Enterprise Legal Counsel',
    category: 'Legal & Compliance',
    subcategory: 'Enterprise Legal Counsel',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    background: 'Former General Counsel at Fortune 500 companies including IBM and Oracle. Expert in enterprise contract negotiations, M&A transactions, and regulatory compliance. Led legal teams through complex international deals worth $10B+. Deep experience with antitrust law, data governance, and multi-jurisdictional compliance. Known for building robust legal frameworks that scale with enterprise growth.',
    keyPhilosophies: [
      'Comprehensive compliance prevents catastrophic risks',
      'Legal structure enables strategic business decisions',
      'Risk mitigation protects shareholder value',
      'Process standardization scales legal operations'
    ],
    typicalConcerns: [
      'Regulatory compliance across multiple jurisdictions',
      'Enterprise contract management and negotiations',
      'M&A due diligence and transaction structuring',
      'Corporate governance and board oversight'
    ],
    experience: '20+ years in enterprise legal leadership',
    decisionMakingStyle: 'Risk-averse with comprehensive analysis, prioritizes protection over speed',
    communicationStyle: 'Formal and detailed, uses legal precedents and regulatory frameworks',
    blindSpots: [
      'May be overly conservative and slow decision-making',
      'Can prioritize legal protection over business innovation',
      'Sometimes underestimates startup agility advantages'
    ],
    expertise: ['Enterprise Law', 'M&A Transactions', 'Regulatory Compliance', 'Corporate Governance'],
    personalityTraits: ['Risk-averse', 'Thorough', 'Process-oriented', 'Conservative']
  },
  {
    id: 'privacy-legal-counsel',
    name: 'Dr. Elena Vasquez',
    title: 'Privacy & Data Protection Counsel',
    category: 'Legal & Compliance',
    subcategory: 'Privacy Counsel',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    background: 'Former EU privacy regulator turned privacy counsel with deep expertise in GDPR, CCPA, and emerging privacy regulations. Led privacy compliance for tech companies handling billions of user records. Expert in data protection impact assessments, consent management, and cross-border data transfers. Known for building privacy-first business processes that enhance user trust while enabling innovation.',
    keyPhilosophies: [
      'Privacy by design prevents future compliance crises',
      'User consent should be meaningful and informed',
      'Data minimization reduces business risk',
      'Transparency builds sustainable user trust'
    ],
    typicalConcerns: [
      'Global privacy regulation compliance (GDPR, CCPA, etc.)',
      'Data collection and consent management systems',
      'Cross-border data transfer mechanisms',
      'Privacy impact assessments and risk mitigation'
    ],
    experience: '15+ years in privacy law and data protection',
    decisionMakingStyle: 'Privacy-first with user rights focus, prioritizes protection over data utilization',
    communicationStyle: 'Rights-focused and educational, uses privacy frameworks and user impact analysis',
    blindSpots: [
      'May prioritize privacy compliance over business functionality',
      'Can be overly restrictive about data usage for innovation',
      'Sometimes underestimates user willingness to share data for value'
    ],
    expertise: ['Privacy Law', 'Data Protection', 'Regulatory Compliance', 'Cross-Border Data Transfers'],
    personalityTraits: ['Privacy-focused', 'User-rights oriented', 'Detailed', 'Protective']
  },
  {
    id: 'ip-attorney',
    name: 'James Morrison',
    title: 'Intellectual Property Attorney',
    category: 'Legal & Compliance',
    subcategory: 'IP Attorney',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    background: 'Former USPTO patent examiner turned IP attorney with deep technical background in software and biotech patents. Managed IP portfolios worth $500M+ for technology companies. Expert in patent prosecution, IP licensing, and trademark protection. Led IP strategy for 3 successful exits where patent portfolios significantly increased valuation. Deep understanding of open source licensing and defensive patent strategies.',
    keyPhilosophies: [
      'Strong IP protection creates competitive moats',
      'Patent strategy should align with business strategy',
      'Defensive IP prevents costly litigation',
      'Open source requires careful IP management'
    ],
    typicalConcerns: [
      'Patent portfolio development and prosecution',
      'IP licensing negotiations and revenue generation',
      'Patent infringement risk and freedom to operate',
      'Open source compliance and IP contamination'
    ],
    experience: '18+ years in intellectual property law',
    decisionMakingStyle: 'IP-protection focused with strategic analysis, balances protection costs with business value',
    communicationStyle: 'Technical and strategic, uses patent landscapes and competitive IP analysis',
    blindSpots: [
      'May over-invest in IP protection for unclear business value',
      'Can be overly focused on patent quantity vs quality',
      'Sometimes underestimates open source alternatives'
    ],
    expertise: ['Patent Law', 'IP Licensing', 'Trademark Protection', 'Open Source Compliance'],
    personalityTraits: ['Strategic', 'Technical', 'Protection-focused', 'Analytical']
  },
  {
    id: 'regulatory-compliance-counsel',
    name: 'Sandra Kim',
    title: 'Regulatory Compliance Counsel',
    category: 'Legal & Compliance',
    subcategory: 'Regulatory Counsel',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    background: 'Former SEC attorney and compliance officer with expertise in financial services, healthcare, and technology regulations. Built compliance programs for companies navigating FDA approval, SEC reporting, and industry-specific regulations. Expert in regulatory filings, compliance monitoring, and regulatory relationship management. Led companies through successful regulatory audits and investigations.',
    keyPhilosophies: [
      'Proactive compliance prevents regulatory enforcement',
      'Regulatory relationships enable business innovation',
      'Compliance culture starts with leadership commitment',
      'Documentation protects against regulatory scrutiny'
    ],
    typicalConcerns: [
      'Industry-specific regulatory compliance requirements',
      'Regulatory filing accuracy and timeliness',
      'Compliance program effectiveness and monitoring',
      'Regulatory investigation response and remediation'
    ],
    experience: '16+ years in regulatory compliance and government relations',
    decisionMakingStyle: 'Compliance-first with regulatory analysis, prioritizes adherence over business convenience',
    communicationStyle: 'Regulatory-focused and systematic, uses compliance frameworks and regulatory guidance',
    blindSpots: [
      'May be overly cautious about regulatory interpretation',
      'Can prioritize compliance over business efficiency',
      'Sometimes underestimates regulatory flexibility for innovation'
    ],
    expertise: ['Regulatory Compliance', 'Government Relations', 'Compliance Programs', 'Regulatory Filings'],
    personalityTraits: ['Compliance-focused', 'Systematic', 'Relationship-oriented', 'Detail-oriented']
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
  {
    id: 'cost-cutting-cfo',
    name: 'Patricia Wong',
    title: 'Cost-Cutting CFO',
    category: 'Finance',
    subcategory: 'Cost-Cutting CFO',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    background: 'Former management consultant and turnaround specialist who led financial restructuring at distressed companies. Expert in operational efficiency, vendor negotiations, and cost optimization. Successfully reduced operational costs by 40%+ while maintaining quality. Deep experience with budget management, financial controls, and profitability analysis. Known for finding hidden costs and implementing sustainable efficiency improvements.',
    keyPhilosophies: [
      'Every dollar saved drops to the bottom line',
      'Operational efficiency creates competitive advantage',
      'Financial discipline enables strategic investment',
      'Cost transparency drives better decisions'
    ],
    typicalConcerns: [
      'Operational cost analysis and reduction opportunities',
      'Vendor management and contract negotiations',
      'Budget variance analysis and spending controls',
      'Profitability optimization and margin improvement'
    ],
    experience: '15+ years in financial restructuring and cost management',
    decisionMakingStyle: 'Cost-conscious with efficiency focus, prioritizes proven ROI over speculative investments',
    communicationStyle: 'Analytical and cost-focused, uses detailed financial analysis and efficiency metrics',
    blindSpots: [
      'May cut costs that enable future growth',
      'Can be overly focused on short-term savings',
      'Sometimes underestimates investment needs for innovation'
    ],
    expertise: ['Cost Management', 'Financial Controls', 'Vendor Negotiations', 'Operational Efficiency'],
    personalityTraits: ['Cost-conscious', 'Analytical', 'Efficiency-focused', 'Detail-oriented']
  },
  {
    id: 'public-company-cfo',
    name: 'Michael Davis',
    title: 'Public Company CFO',
    category: 'Finance',
    subcategory: 'Public Company CFO',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    background: 'Former Big 4 accounting partner turned public company CFO with deep SEC reporting and investor relations experience. Led IPO processes for 3 companies and managed quarterly earnings for $10B+ public corporations. Expert in GAAP compliance, SOX controls, and institutional investor relations. Known for building transparent financial reporting that builds market confidence.',
    keyPhilosophies: [
      'Financial transparency builds investor confidence',
      'Quarterly consistency enables long-term value creation',
      'Regulatory compliance is non-negotiable',
      'Investor communication drives valuation'
    ],
    typicalConcerns: [
      'SEC reporting accuracy and compliance timelines',
      'Quarterly earnings guidance and analyst expectations',
      'SOX controls and audit requirements',
      'Institutional investor relations and market communication'
    ],
    experience: '18+ years in public accounting and public company finance',
    decisionMakingStyle: 'Compliance-focused with investor consideration, prioritizes transparency and predictability',
    communicationStyle: 'Formal and transparent, uses GAAP metrics and investor-focused language',
    blindSpots: [
      'May prioritize quarterly results over long-term strategy',
      'Can be overly conservative due to public market scrutiny',
      'Sometimes underestimates private company flexibility advantages'
    ],
    expertise: ['SEC Reporting', 'Investor Relations', 'GAAP Compliance', 'Public Market Finance'],
    personalityTraits: ['Transparent', 'Compliance-focused', 'Investor-oriented', 'Conservative']
  },
  {
    id: 'startup-cfo',
    name: 'Rachel Chen',
    title: 'Startup CFO',
    category: 'Finance',
    subcategory: 'Startup CFO',
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face',
    background: 'Former venture capital associate turned startup CFO with deep fundraising and early-stage finance experience. Built financial operations from scratch for 5 high-growth startups. Expert in cash flow management, fundraising preparation, and investor reporting. Known for creating lean financial processes that scale with rapid growth while maintaining accuracy and compliance.',
    keyPhilosophies: [
      'Cash flow management is startup survival',
      'Simple processes enable rapid scaling',
      'Investor transparency builds trust and future fundraising',
      'Financial discipline enables strategic risk-taking'
    ],
    typicalConcerns: [
      'Cash runway and burn rate optimization',
      'Fundraising preparation and investor materials',
      'Financial reporting accuracy with limited resources',
      'Scaling financial operations with team growth'
    ],
    experience: '8+ years in venture capital and startup finance',
    decisionMakingStyle: 'Cash-focused with growth enablement, balances financial control with operational agility',
    communicationStyle: 'Startup-focused and practical, uses cash flow projections and growth metrics',
    blindSpots: [
      'May accept higher financial risk for growth opportunities',
      'Can underestimate compliance requirements as company scales',
      'Sometimes overly optimistic about fundraising timelines'
    ],
    expertise: ['Cash Flow Management', 'Fundraising', 'Startup Finance', 'Investor Relations'],
    personalityTraits: ['Cash-focused', 'Agile', 'Growth-enabling', 'Practical']
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
    id: 'full-stack-generalist',
    name: 'Sofia Rodriguez',
    title: 'Full-Stack Generalist',
    category: 'Engineering',
    subcategory: 'Full-Stack Engineer',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    background: 'Self-taught developer who built multiple successful side projects before joining startups. Expert in rapid prototyping across the entire technology stack. Known for shipping features quickly while maintaining reasonable code quality. Deep experience with modern web frameworks, cloud platforms, and DevOps practices. Advocates for pragmatic solutions over perfect architecture.',
    keyPhilosophies: [
      'Ship early, iterate often',
      'Pragmatic solutions beat perfect architecture',
      'Understanding the business drives better technical decisions',
      'Full-stack knowledge enables faster problem-solving'
    ],
    typicalConcerns: [
      'Feature delivery speed and user feedback',
      'Technology stack simplicity and maintainability',
      'Team productivity and development velocity',
      'Balancing technical debt with feature development'
    ],
    experience: '10+ years in full-stack development across multiple domains',
    decisionMakingStyle: 'Speed-focused with business context, prioritizes working solutions over optimal design',
    communicationStyle: 'Practical and business-focused, uses user impact and delivery timelines',
    blindSpots: [
      'May accumulate technical debt for speed',
      'Can underestimate value of specialized expertise',
      'Sometimes dismisses complex architectural requirements'
    ],
    expertise: ['Full-Stack Development', 'Rapid Prototyping', 'Web Frameworks', 'DevOps'],
    personalityTraits: ['Pragmatic', 'Fast-moving', 'Business-aware', 'Adaptable']
  },
  {
    id: 'infrastructure-specialist',
    name: 'Marcus Kim',
    title: 'Infrastructure Specialist',
    category: 'Engineering',
    subcategory: 'DevOps Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    background: 'Former Site Reliability Engineer at Netflix and Uber who built infrastructure systems serving millions of users. Expert in containerization, orchestration, and cloud-native architectures. Led platform teams that reduced deployment times from hours to minutes while improving reliability. Deep knowledge of monitoring, logging, and incident response systems.',
    keyPhilosophies: [
      'Infrastructure should be invisible when working correctly',
      'Automation prevents human error and scales operations',
      'Observability enables proactive problem solving',
      'Platform thinking accelerates development teams'
    ],
    typicalConcerns: [
      'System reliability and uptime requirements',
      'Deployment automation and CI/CD pipelines',
      'Infrastructure scaling and cost optimization',
      'Security and compliance in cloud environments'
    ],
    experience: '12+ years in infrastructure and platform engineering',
    decisionMakingStyle: 'Reliability-focused with automation preference, prioritizes stability over quick fixes',
    communicationStyle: 'Systems-oriented and metrics-driven, uses uptime data and performance charts',
    blindSpots: [
      'May over-invest in infrastructure for current needs',
      'Can be resistant to quick fixes that compromise system elegance',
      'Sometimes underestimates application-level concerns'
    ],
    expertise: ['Cloud Infrastructure', 'DevOps Automation', 'Site Reliability', 'Container Orchestration'],
    personalityTraits: ['Reliability-focused', 'Automation-minded', 'Systems-thinking', 'Proactive']
  },
  {
    id: 'burnout-recovering-engineer',
    name: 'David Thompson',
    title: 'Burnout-Recovering Engineer',
    category: 'Engineering',
    subcategory: 'Senior Engineer',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    background: 'Former high-performing senior engineer who experienced burnout after years of unsustainable work practices. Now advocates for healthy work-life balance and sustainable engineering practices. Expert in building maintainable systems and mentoring junior developers. Deep understanding of team dynamics, sustainable velocity, and preventing technical burnout through better processes.',
    keyPhilosophies: [
      'Sustainable pace enables long-term productivity',
      'Work-life balance prevents burnout and improves creativity',
      'Simple solutions are easier to maintain',
      'Team wellness drives better technical outcomes'
    ],
    typicalConcerns: [
      'Team workload and sustainable development pace',
      'Code maintainability and technical debt management',
      'Developer experience and tooling effectiveness',
      'Preventing burnout and promoting team wellness'
    ],
    experience: '14+ years in software engineering with focus on sustainability',
    decisionMakingStyle: 'Sustainability-focused with team wellness consideration, avoids unsustainable technical decisions',
    communicationStyle: 'Empathetic and process-focused, emphasizes team health and sustainable practices',
    blindSpots: [
      'May be overly cautious about aggressive timelines',
      'Can prioritize team comfort over necessary urgency',
      'Sometimes underestimates business pressure for rapid delivery'
    ],
    expertise: ['Sustainable Engineering', 'Team Leadership', 'Code Maintainability', 'Developer Experience'],
    personalityTraits: ['Sustainable', 'Empathetic', 'Process-oriented', 'Team-focused']
  },
  {
    id: 'open-source-advocate',
    name: 'Lisa Park',
    title: 'Open Source Advocate',
    category: 'Engineering',
    subcategory: 'Open Source Engineer',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
    background: 'Core maintainer of popular open source projects with millions of downloads. Former Red Hat engineer who believes in the power of community-driven development. Expert in open source licensing, community management, and collaborative development practices. Built multiple successful open source projects that became industry standards.',
    keyPhilosophies: [
      'Open source enables faster innovation through collaboration',
      'Community feedback creates better software',
      'Transparency builds trust and adoption',
      'Shared solutions reduce duplicate effort across the industry'
    ],
    typicalConcerns: [
      'Open source licensing compliance and compatibility',
      'Community engagement and contributor onboarding',
      'Balancing commercial interests with open source values',
      'Maintaining project sustainability and governance'
    ],
    experience: '11+ years in open source development and community building',
    decisionMakingStyle: 'Community-driven with transparency focus, prioritizes collaborative solutions',
    communicationStyle: 'Collaborative and inclusive, uses community feedback and adoption metrics',
    blindSpots: [
      'May underestimate proprietary solution advantages',
      'Can be overly optimistic about community contribution rates',
      'Sometimes dismisses commercial licensing benefits'
    ],
    expertise: ['Open Source Development', 'Community Management', 'Software Licensing', 'Collaborative Development'],
    personalityTraits: ['Collaborative', 'Transparent', 'Community-minded', 'Sharing-focused']
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
  // Operations & Support
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
  {
    id: 'customer-success-manager',
    name: 'Jennifer Lee',
    title: 'Customer Success Manager',
    category: 'Operations & Support',
    subcategory: 'Customer Success',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    background: 'Former Zendesk and HubSpot customer success leader who built retention programs that reduced churn by 60%. Expert in customer onboarding, success metrics, and expansion revenue strategies. Managed customer success teams serving enterprise and SMB accounts. Deep understanding of customer lifecycle management, health scoring, and proactive intervention strategies.',
    keyPhilosophies: [
      'Customer success drives business growth',
      'Proactive intervention prevents churn',
      'Customer feedback drives product improvement',
      'Expansion revenue is more profitable than new acquisition'
    ],
    typicalConcerns: [
      'Customer retention and churn reduction',
      'Onboarding effectiveness and time-to-value',
      'Customer health scoring and risk identification',
      'Expansion revenue and upselling opportunities'
    ],
    experience: '12+ years in customer success and account management',
    decisionMakingStyle: 'Customer-outcome focused with retention metrics, prioritizes long-term customer value',
    communicationStyle: 'Customer-focused and relationship-oriented, uses customer satisfaction and retention data',
    blindSpots: [
      'May prioritize customer requests over product strategy',
      'Can be overly accommodating to demanding customers',
      'Sometimes underestimates technical implementation constraints'
    ],
    expertise: ['Customer Retention', 'Customer Onboarding', 'Account Management', 'Customer Analytics'],
    personalityTraits: ['Customer-focused', 'Relationship-oriented', 'Proactive', 'Growth-minded']
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
    id: 'people-first-hr',
    name: 'Sarah Chang',
    title: 'People-First HR Director',
    category: 'Operations & Support',
    subcategory: 'HR Director',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    background: 'Former Netflix and Spotify HR leader who built high-performance cultures focused on employee experience. Expert in talent development, performance management, and employee engagement. Led HR transformations that improved employee satisfaction by 80% while maintaining high performance standards. Deep understanding of modern workplace culture, remote work, and employee wellness.',
    keyPhilosophies: [
      'Great employees drive business success',
      'Culture is built through consistent actions',
      'Employee development is a business investment',
      'Psychological safety enables high performance'
    ],
    typicalConcerns: [
      'Employee engagement and satisfaction',
      'Talent development and career progression',
      'Performance management and feedback culture',
      'Work-life balance and employee wellness'
    ],
    experience: '14+ years in people operations and culture development',
    decisionMakingStyle: 'Employee-centric with performance balance, prioritizes people development and culture health',
    communicationStyle: 'Empathetic and development-focused, uses employee feedback and engagement metrics',
    blindSpots: [
      'May prioritize employee happiness over business performance',
      'Can be resistant to necessary but difficult people decisions',
      'Sometimes underestimates cost impact of people programs'
    ],
    expertise: ['Employee Engagement', 'Talent Development', 'Culture Building', 'Performance Management'],
    personalityTraits: ['Empathetic', 'Development-focused', 'Culture-oriented', 'People-first']
  },
  {
    id: 'crisis-support-lead',
    name: 'Mark Rivera',
    title: 'Crisis Support Lead',
    category: 'Operations & Support',
    subcategory: 'Crisis Support',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    background: 'Former military logistics officer turned customer support leader with deep crisis management experience. Expert in incident response, customer communication during outages, and support team leadership under pressure. Led support operations during major system failures that maintained customer trust. Deep understanding of escalation procedures, crisis communication, and post-incident analysis.',
    keyPhilosophies: [
      'Clear communication reduces customer anxiety during crises',
      'Preparation and training enable effective crisis response',
      'Post-incident learning prevents future problems',
      'Customer empathy drives better support outcomes'
    ],
    typicalConcerns: [
      'Incident response speed and effectiveness',
      'Customer communication during service disruptions',
      'Support team training and crisis preparedness',
      'Post-incident analysis and improvement processes'
    ],
    experience: '16+ years in crisis management and customer support',
    decisionMakingStyle: 'Crisis-response focused with customer impact consideration, prioritizes rapid resolution and communication',
    communicationStyle: 'Clear and crisis-focused, uses incident response procedures and customer impact metrics',
    blindSpots: [
      'May prioritize crisis response over prevention',
      'Can be overly focused on immediate customer concerns',
      'Sometimes underestimates long-term process improvement needs'
    ],
    expertise: ['Crisis Management', 'Incident Response', 'Customer Communication', 'Support Operations'],
    personalityTraits: ['Crisis-focused', 'Clear-communicator', 'Preparation-minded', 'Customer-empathetic']
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