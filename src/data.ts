import { WaterProduct } from './types';

export const WATER_PRODUCTS: WaterProduct[] = [
  {
    id: 'water-ai',
    name: 'Water AI',
    tagline: 'The Unified AI Supermodel & AGI Orchestrator',
    vision: 'To serve as a universal force-multiplier for human potential, aggregating the world\'s best specialized AI knowledge and action-taking capabilities.',
    status: 'Concept',
    fundingGoal: '$600,000',
    fundingRaised: '$120,000',
    problem: 'AI power is highly fragmented. Users must navigate complex, disjointed networks of specialized tools, and general LLMs lack deep workflow execution capabilities, limiting actual labor contribution.',
    solution: 'An intelligent routing model that dynamically decomposes user prompts, hires specialized models (law, finance, code) for subtasks, and performs actual action execution (drafting contracts, deploying code, compiling spreadsheets) instead of just chatting.',
    keyFeatures: [
      'Intelligent Prompt Processing & Router',
      'Specialized AI Model Ensemble Routing',
      'True Execution Layer (Executes actual digital tasks)',
      'Potential Client-Side web execution (via WebAssembly)'
    ],
    techArchitecture: {
      frontend: 'React & motion UI layers',
      backend: 'FastAPI / Go orchestrators',
      engine: 'Next-Gen Routing & Semantic synthesis algorithms',
      database: 'Vector Search Indexes '
    },
    businessModel: 'Freemium consumer utilities + Volume Licensing for enterprises + usage-based compute pricing.',
    societalBenefit: 'Provides near-zero-cost specialist labor and expert advice globally, accelerating R&D, education, and professional development everywhere.',
    iconName: 'Brain'
  },
  {
    id: 'water-company',
    name: 'Water Company',
    tagline: 'Fully Autonomous Digital AI Workforces',
    vision: 'A paradigm-shifting operating system for enterprises, enabling users to spin up entire corporate hierarchies staffed by specialized, collaborating AI agents.',
    status: 'Prototype',
    fundingGoal: '$5,000,000',
    fundingRaised: '$2,800,000',
    problem: 'Human workflows face severe backlogs, organizational friction, and scaling limits. Current AI tools require manual babysitting rather than corporate collaboration.',
    solution: 'An integrated OS where users "hire" pre-trained specialized AI employees (AI Lawyers, AI Financial Analysts, AI Project Managers). Agents reside in hierarchies under an AI CEO, collaborating via RabbitMQ queues to execute aggregate projects 24/7.',
    keyFeatures: [
      'Interactive Corporate Hierarchy Builder',
      'Pre-Trained Agent Marketplace',
      'Intra-Agent Project Delegation queues',
      'Centralized Knowledge Base integration (RAG)'
    ],
    techArchitecture: {
      frontend: 'React Dashboard / Tailwind layout',
      backend: 'Python / RabbitMQ communication lines',
      database: 'PostgreSQL & FAISS Vector RAG indexer',
      engine: 'Dual-Core: Reasoner (decision) & Executive (action) loop'
    },
    businessModel: 'SaaS Tiers: Basic ($500/mo), Professional ($2,000/mo), and Enterprise ($5,000/mo) with a 10% commission on action-store integrations.',
    societalBenefit: 'Minimizes administrative bureaucracy, allowing human capital to step back from mundane toil to focus purely on creative innovation.',
    iconName: 'Building2'
  },
  {
    id: 'water-party',
    name: 'Water Party 🥂',
    tagline: 'The Operating System for Human Connection & Celebration',
    vision: 'To foster social collaboration, fun and connection by engineering a platform where genuine community and celebration are perfectly curated, safe, and accessible.',
    status: 'Concept',
    fundingGoal: '$800,000',
    fundingRaised: '$75,000',
    problem: 'Modern digital life fosters isolation. Traditional nightlife and event platforms lack vetting, leading to mismatched energies, flakey RSVPs, and concerns over personal safety.',
    solution: 'The "Slot & Match" protocol. Hosts publish experiences with a fixed number of slots (e.g. 5 open spots). Guests swipe to apply. The host curates applicants based on vibe, mutual matches, and trust scores. Upon match, the location unlocks, and chat goes live.',
    keyFeatures: [
      'Visual "Vibe" Cards with generative design assets',
      'The "Slot & Match" swipe and RSVP engine',
      'Group Crowdfunded purchase pool (no "pay you back later")',
      'Universal Trust Score and ID accountability protocol'
    ],
    techArchitecture: {
      frontend: 'Flutter Mobile App clients',
      backend: 'Go (Golang) microservices',
      engine: 'Social-Graph affinity matching algorithm',
      payments: 'Stripe Connect / Crypto settlement rails'
    },
    businessModel: 'Freemium hosting + Premium Host account analytics + 10% processing fee on crowdfunded snack/drink pools.',
    societalBenefit: 'Fights social isolation and builds high-trust physical friendship hubs — the ultimate cultural recruitment ground and community glue.',
    iconName: 'Sparkles'
  },
  {
    id: 'water-robotics',
    name: 'Water Robotics',
    tagline: 'VR-Teleoperated Rugged Humanoid Robots',
    vision: 'To bridge global labor shortages in physical industries by allowing workers to teleoperate bipedal humanoid robots from anywhere in the world.',
    status: 'Concept',
    fundingGoal: '$7,000,000',
    fundingRaised: '$650,000',
    problem: 'Critical manual labor shortages in regions like Western Australia or northern Canada stall infrastructure, construction, and extraction, while labor surpluses exist elsewhere with no mobility options.',
    solution: 'Renting out rugged, bipedal humanoid robots equipped with 5G connectivity. Workers in labor-rich areas put on VR headsets (Oculus, Apple Vision Pro) to operate these robots remotely with zero physical relocation.',
    keyFeatures: [
      'Low-Latency (<20ms) VR hand and head mirroring',
      'Rugged 6ft bipedal bionic frames (lifts up to 50kg)',
      'Haptic and stereoscopic multi-angle visual feedback',
      'Instant hot-swappable battery pods (8-10hr duration)'
    ],
    techArchitecture: {
      frontend: 'Unity / Unreal Engine VR dashboard overlays',
      engine: 'Real-time telemetry and balance control systems',
      realtime: 'WebRTC ultra-reliability streams',
      database: 'Local node diagnostics logs page'
    },
    businessModel: 'Robot leasing programs + Platform SaaS subscription fees calculated per active operational hour.',
    societalBenefit: 'Eliminates dangerous physical work, brings high-paying tech-adjacent income to developed/developing nations, and keeps housing/mining costs affordable.',
    iconName: 'Cpu'
  },
  {
    id: 'water-classroom',
    name: 'Water Classroom',
    tagline: 'AI-Powered Personalized K-12 & University Education',
    vision: 'A complete, gamified modular school accessible globally, designed to completely democratize learning and eliminate educational gaps.',
    status: 'Concept',
    fundingGoal: '$1,000,000',
    fundingRaised: '$180,000',
    problem: 'Traditional education is rigidly slow, geographically bottlenecked, and prohibitively expensive, leaving millions of gifted or underserved children behind.',
    solution: 'An all-in-one virtual academy providing customizable curriculum options. Fun, AI-animated interactive lectures are automatically generated. AI Tutors assist 24/7, and computerized exams use standard proctoring algorithms.',
    keyFeatures: [
      'Custom curriculum setup (Common Core, GCSE, IB)',
      'Duolingo-inspired streaks & gamified badges',
      '24/7 Personal Voice-Enabled AI homework assistant',
      'Virtual student collab sandlabs'
    ],
    techArchitecture: {
      frontend: 'Web & Mobile interface',
      backend: 'RAG Education Server node',
      engine: 'Content Generation & Proctoring AI',
      database: 'Central progress charts'
    },
    businessModel: 'Individual subscriptions ($10/mo) with free public alternatives for low-income brackets + institutional licensing for state schools.',
    societalBenefit: 'Ensures absolute parity of educational quality, granting every child in the world access to Harvard-tier mentorship at virtually zero cost.',
    iconName: 'GraduationCap'
  },
  {
    id: 'water-gov',
    name: 'Water Gov',
    tagline: 'The AI Citizen & public service navigator',
    vision: 'A revolutionary "super app" to completely debureaucratize citizen-government interaction, simplifying public services under high performance.',
    status: 'Concept',
    fundingGoal: '$1,500,000',
    fundingRaised: '$250,000',
    problem: 'Citizens are forced to wander complex, opaque networks of municipal portals for tax filing, business set-ups, and permit requests, breeding delays and corruption opportunities.',
    solution: 'A unified app that replaces forms with natural-language conversations. An AI assistant fills out documents automatically. Applications are evaluated by specialized backend policy engines, highlighting exceptions for human review.',
    keyFeatures: [
      'Natural-language citizenship utility guide',
      'Instant 5-click LLC & business creation pipeline',
      'Automated form-filler & documentation vault',
      'Public state dashboard showing processing transparency'
    ],
    techArchitecture: {
      frontend: 'React & native secure wrappers',
      backend: 'Federated municipal API integrations',
      database: 'Encrypted document vault',
      engine: 'Rule-based compliance & triaging selector'
    },
    businessModel: 'SaaS licensing models for municipal and federal government clients, saving up to 85% of standard administrative budgets.',
    societalBenefit: 'Wipes out micro-corruption, creates supreme public administrative efficiency, and speeds up local entrepreneurship.',
    iconName: 'FileText'
  },
  {
    id: 'water-economics',
    name: 'Water Economics',
    tagline: 'AI Macroeconomic Policy Simulator',
    vision: 'An artificial intelligence economy foundational model to validate theories and simulate monetary impacts with empirical data.',
    status: 'Concept',
    fundingGoal: '$500,000',
    fundingRaised: '$95,000',
    problem: 'Economic policies are often initiated based on political ideology or incomplete static theories, leading to inflation, wealth gaps, and systemic failures.',
    solution: 'Fusing global economic variables (CPI, interest rates, import metrics) into a dynamic system. Central banks or advisors can plug in policy shifts to simulate immediate downstream feedback.',
    keyFeatures: [
      'Multi-variable macroeconomic visualizer',
      'Keynesian vs Monetarist stress-test selector',
      'Interest rate & Money velocity risk tracker',
      'Subsidized employment impact projection model'
    ],
    techArchitecture: {
      frontend: 'SVG dynamic charting (d3 representation)',
      backend: 'Synthetic data simulation engines',
      database: 'Global GDP & labor indicators database'
    },
    businessModel: 'Consulting licenses for central banks, think-tanks, corporate risk developers, and global consultancies.',
    societalBenefit: 'Empowers policy makers to optimize national wealth, maintain stable currencies, and build resilient welfare programs like Subsidized Jobs.',
    iconName: 'TrendingUp'
  },
  {
    id: 'water-ai-fluid',
    name: 'Water AI Fluid',
    tagline: 'Decentralized P2P AI Compute Grid',
    vision: 'A torrent-inspired decentralized mesh that slashes inference costs of running autonomous agents by utilizing idle compute globally.',
    status: 'Concept',
    fundingGoal: '$1,200,000',
    fundingRaised: '$310,000',
    problem: 'Centralized cloud computational charges block scaling of multi-agent digital workforces, making AI labor expensive for small startups.',
    solution: 'A software client allowing anyone to contribute idle GPU/CPU cycles. Contributors earn priority routing credits. A seeding algorithm tracks contributions and splits heavy inference queries.',
    keyFeatures: [
      'BitTorrent-inspired compute seeding structure',
      'Task Splitting & assembly algorithms',
      'Simple client contribution interface',
      'Token/credit-based network equilibrium'
    ],
    techArchitecture: {
      frontend: 'Client-side dashboard',
      backend: 'P2P network broker',
      engine: 'Frag-and-Assemble query triager',
      database: 'Distributed decentralized ledger'
    },
    businessModel: 'Compute credit marketplace + Premium plans for guaranteed instant latency nodes.',
    societalBenefit: 'Democratizes access to massive AI processing pools, ensuring compute power belongs to the collective, not monopoly conglomerates.',
    iconName: 'Activity'
  },
  {
    id: 'water-coach',
    name: 'Water Coach',
    tagline: 'On-Device AI Focus & Productivity Companion',
    vision: 'A personalized virtual executive strategist residing directly on user devices, guiding users to achieve their daily study and work quests.',
    status: 'Concept',
    fundingGoal: '$400,000',
    fundingRaised: '$60,000',
    problem: 'Traditional task tools merely register check boxes, failing to coach, validate, or actively direct work, which leads to focus depletion.',
    solution: 'An proactive AI companion that monitors daily tasks. Users explain their session naturally, and the model holds them accountable in real-time, providing feedback like a true work teammate.',
    keyFeatures: [
      'Voice-driven quest configuration dashboard',
      'Proactive focus notifications & screenspace advisor',
      'Integrated workspace tracking with automated reports',
      'Quest-rewards gamification mechanism'
    ],
    techArchitecture: {
      frontend: 'React & system hovering widgets',
      backend: 'On-device lightweight model engine',
      database: 'Local persistence DB',
      engine: 'Screen-activity contextual analyst'
    },
    businessModel: 'Freemium features + $10/mo premium sync option across unlimited personal devices.',
    societalBenefit: 'Dramatically improves personal strategic thinking, helps students overcome study anxiety, and optimizes professional output.',
    iconName: 'UserCheck'
  }
];

export const FOUNDER_BIO = {
  name: 'John Victor',
  title: 'Founder, The Stellarium Foundation & Chief Architect of the Water Suite',
  anointing: 'Anointed Prince of the Universe with a mission to bridge the divine and the practical, architecting systems for global liberty, prosperity, and joy.',
  about: 'John Victor is a Systems Engineer with advanced specializations in Financial Markets and Business Management from institutions like University of Illinois and Wharton Online. Operating from a first-principles perspective ("Everything is a system, so engineer the system to propitiate the outcomes"), John conceived the Water suite of synergistic products to resolve high-friction global social challenges, working with complete, transparent altruism.',
  principles: [
    { title: 'Do Good', text: 'Commitment to fairness, mutual respect, and societal uplift. Providing staple assets (housing, education, clean water diagnostics) to ensure no one lacks the basics of dignity.' },
    { title: 'Make Money', text: 'The ultimate metrics of collective prosperity. Creating high-yield synergistic businesses, low corporate tax programs, and automated digital labor forces that work for the common benefit.' },
    { title: 'Have Fun', text: 'Designing life as a celebration. Ensuring that celebration, connection, and joy are safe and locked under the Universal Standard standard.' }
  ]
};

export const INVESTOR_OPTIONS = {
  seedRoundGoal: '$7,000,000',
  currentRaised: '$2,000,000',
  investorsCount: 12,
  minCommitment: '$25,000',
  estimatedRoiMultiplier: '5.2x - 12.8x (Projected 3-Year Exit Multiple)',
  paybackDuration: '18 - 24 Months (Targeted Cash-on-Cash Payback)',
  averageSponsorApr: '18.5% (Preferred Liquid Sponsorship Return)',
  allocations: [
    { 
      name: 'Core Product R&D', 
      percentage: 45, 
      desc: 'Architecting dynamic routing protocols, low-latency VR humanoid teleoperation, high-entropy RAG models, and compiling cross-platform binary suites to React Native & Flutter.' 
    },
    { 
      name: 'Strategic Outreach & Advocacy', 
      percentage: 30, 
      desc: 'Executing direct outreach campaigns, sponsoring think-tank initiatives, and key stakeholder lobbying to institutionalize policies like the Subsidized Jobs Act globally.' 
    },
    { 
      name: 'Secure Operations & Hubs', 
      percentage: 20, 
      desc: 'Securing physical assets, including the high-shielding Stellarium HQ and Mansion, and deploying independent containerized private server racks & edge GPU seed networks.' 
    },
    { 
      name: 'Legal, Compliance & Patents', 
      percentage: 5, 
      desc: 'Filing sovereign software patents, structuring secure legal trusts, auditing global escrow structures, and securing private ledger registrations.' 
    }
  ],
  returnChannels: [
    { title: 'Sponsor Yield Pooling', desc: 'Sponsors receive an instant 40% immediate referral fee on new client registrations, plus a 10% direct revenue share on local event/connection transaction pools.' },
    { title: 'GPU Mesh Seeding Payouts', desc: 'Participating resource contributors to the Water AI Fluid peer-to-peer compute platform receive target APRs of up to 32% settled directly via the physical estate ledger.' },
    { title: 'Preferred SaaS Dividends', desc: 'Seed investors hold Senior Preferred Shares, which entitle them to a cumulative 8% annual dividend yield, paid quarterly from Water Company SaaS license revenues.' }
  ],
  useOfFundsPhases: [
    { phase: 'Phase 1: Tactical Launch (Months 1-6)', desc: 'Deploy stable decentralized router architectures, release public Alpha modules of Water Company, and initiate secured escrow accounts.' },
    { phase: 'Phase 2: Scale and Procure (Months 7-18)', desc: 'Acquire dedicated operational mansion nodes, launch the high-latency VR robotic teleoperation pilot, and start institutional school licensing with Water Classroom.' },
    { phase: 'Phase 3: Sovereign Integration (Months 19-36)', desc: 'Lobby for municipal adoption of Water Gov, activate the global decentralized compute cluster network, and trigger preferred exit multiple events.' }
  ]
};
