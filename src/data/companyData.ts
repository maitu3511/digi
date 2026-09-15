import { PricingPackage, CareerOpening, BlogPost, TeamMember } from "../types";

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "starter-growth",
    name: "Starter Growth",
    badge: "Best for Local & Early Ventures",
    priceDisplay: "Custom / Monthly",
    billingPeriod: "Flexible Monthly Retainer",
    tagline:
      "Establish foundational digital presence, rank locally on Google Maps, and start generating consistent inbound leads.",
    popular: false,
    features: [
      "Local SEO & Google Business Profile (3-Pack Optimization)",
      "Meta or Google Search Ad Campaign Setup (1 Ad Channel)",
      "8 High-Resolution Social Media Creatives / Month",
      "Targeted On-Page SEO (Up to 10 Primary Service Pages)",
      "Basic Conversion Rate & Speed Optimization",
      "Monthly Performance & Keyword Ranking Report",
      "WhatsApp & Email Direct Account Support",
    ],
    notIncluded: [
      "Multi-channel Paid Media Funnels",
      "Custom Video / 3D Animation Production",
      "Dedicated Weekly Strategy Calls",
    ],
    deliverables: "Foundational Local Authority & Starter Inbound Inquiries",
    idealFor: "Local clinics, boutique law/CA firms, local retail, and early-stage startups.",
    buttonText: "Get Starter Proposal",
  },
  {
    id: "scale-pro",
    name: "Performance Scale Pro",
    badge: "Most Popular for D2C & B2B",
    priceDisplay: "Custom / Tailored ROI",
    billingPeriod: "Quarterly Growth Retainer",
    tagline:
      "Aggressive multi-channel acquisition engineered to scale revenue, dominate page 1 search keywords, and maximize ROAS.",
    popular: true,
    features: [
      "Full-Funnel Paid Advertising (Google Search/PMax + Meta Ads)",
      "Advanced SEO & AI Search Optimization (GEO / AEO Citation)",
      "16 Custom Creatives + 4 Viral Video Reels / Month",
      "High-Converting Landing Page UI/UX Design & CRO Testing",
      "Custom CRM & Lead Automation Pipeline Setup",
      "Weekly Strategy Reviews & Live KPI Tracking Dashboard",
      "Competitor Monitoring & Continuous Audience Refinement",
      "Priority Dedicated Senior Account Manager",
    ],
    deliverables: "Multi-Channel Acquisition & Rapid Commercial Scaling",
    idealFor: "Growing D2C brands, B2B companies, Real Estate developers, and Hospital networks.",
    buttonText: "Request Scale Pro Roadmap",
  },
  {
    id: "enterprise-360",
    name: "Enterprise 360° Retainer",
    badge: "Full Fractional CMO & Tech Wing",
    priceDisplay: "Bespoke Scope",
    billingPeriod: "Annual Enterprise Partnership",
    tagline:
      "Complete digital marketing, custom software engineering, brand identity, and dedicated multidisciplinary execution squad.",
    popular: false,
    features: [
      "Full 360° Digital Strategy & Fractional CMO Leadership",
      "Omnichannel Media Buying (Google, Meta, YouTube, LinkedIn, Amazon)",
      "Enterprise Technical SEO & International Search Dominance",
      "Custom Full-Stack Web Development, Next.js / Shopify Plus",
      "Brand Identity Manual, 3D Assets & High-Production Video Ads",
      "Dedicated Squad: Strategist, Copywriter, Designer & Media Buyer",
      "Real-Time Live BI Dashboard with Custom API Integrations",
      "24/7 Priority Emergency Support & SLA Guarantees",
    ],
    deliverables: "Market Leadership, Flawless Engineering & High Inbound Dominance",
    idealFor:
      "Market leaders, multinational manufacturers, venture-backed enterprises, and luxury hospitality groups.",
    buttonText: "Schedule Enterprise Strategy Call",
  },
];

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: "job-1",
    title: "Senior SEO & AI Search (GEO) Strategist",
    department: "Marketing",
    location: "Ahmedabad / Delhi NCR / Hybrid Remote",
    type: "Full-Time",
    experience: "3 - 5 Years",
    openings: 2,
    salaryRange: "Competitive + Performance Bonuses",
    summary:
      "Lead organic search strategies across high-competition client niches, executing technical SEO, semantic content architectures, and cutting-edge Generative Engine Optimization (ChatGPT & Perplexity citations).",
    responsibilities: [
      "Execute deep-dive technical audits, schema implementation, and Core Web Vitals optimizations.",
      "Formulate intent-based semantic keyword clusters and high-authority link-building campaigns.",
      "Optimize websites for AI Overviews, Perplexity, and LLM entity knowledge graphs.",
      "Lead monthly client strategy presentations with data-backed organic ranking reviews.",
    ],
    requirements: [
      "Proven track record ranking high-competition commercial keywords on Page 1 Google.",
      "Mastery of Screaming Frog, Ahrefs, SEMrush, Google Search Console, and schema markup.",
      "Strong analytical mindset and understanding of conversational search algorithms.",
    ],
    perks: [
      "Quarterly performance bonuses based on organic KPI wins",
      "Continuous learning budget & Zinmatt Masterclass access",
      "Flexible hybrid working schedule & wellness support",
    ],
  },
  {
    id: "job-2",
    title: "Performance Media Buyer (Meta & Google Ads)",
    department: "Marketing",
    location: "Ahmedabad / Mumbai / Hybrid Remote",
    type: "Full-Time",
    experience: "2 - 4 Years",
    openings: 2,
    salaryRange: "Competitive + ROAS Commission Pool",
    summary:
      "Manage and scale multi-channel paid ad campaigns for D2C brands, lead gen funnels, and B2B clients with strict ROAS and CAC targets.",
    responsibilities: [
      "Build, launch, and optimize paid campaigns on Google Search, Performance Max, YouTube, Meta, and LinkedIn.",
      "Develop compelling ad hooks, video scripts, and copy angles with the creative design team.",
      "Conduct daily bid adjustments, audience cohort testing, and conversion attribution modeling.",
      "Scale profitable budgets while maintaining stable return on ad spend (ROAS).",
    ],
    requirements: [
      "Demonstrated experience managing significant monthly ad spends profitably.",
      "Deep understanding of pixel tracking, CAPI, UTM parameters, and Google Analytics 4.",
      "High creative aptitude paired with rigorous spreadsheet and numbers discipline.",
    ],
    perks: [
      "Performance-linked ROAS revenue sharing",
      "Direct interaction with brand founders and growth leaders",
      "Modern workspace with coffee bar & health insurance",
    ],
  },
  {
    id: "job-3",
    title: "Full-Stack Web Developer (React / Next.js / Shopify)",
    department: "Tech & Web",
    location: "Ahmedabad / Remote",
    type: "Full-Time",
    experience: "2 - 5 Years",
    openings: 2,
    salaryRange: "Industry Leading based on Portfolio",
    summary:
      "Build blazing-fast, secure, and conversion-optimized websites and web applications for high-growth enterprises and D2C brands.",
    responsibilities: [
      "Develop modern client websites using React, Next.js, Tailwind CSS, TypeScript, and modern headless CMSs.",
      "Customize high-converting Shopify Plus stores, Liquid templates, and custom app integrations.",
      "Ensure 95+ Google PageSpeed Insights scores, pixel-perfect responsive layouts, and strict SEO hygiene.",
      "Integrate payment gateways, CRM APIs, and marketing tracking pixels flawlessly.",
    ],
    requirements: [
      "Strong portfolio of live, responsive, high-performance web applications and e-commerce stores.",
      "Proficiency in React/TypeScript, Tailwind CSS, REST/GraphQL APIs, and Git version control.",
      "Attention to typography, micro-interactions, and frictionless checkout UX.",
    ],
    perks: [
      "Latest Mac / high-performance workstation provided",
      "Hackathons, open-source contribution allowances",
      "Fast-track career advancement into Tech Lead roles",
    ],
  },
  {
    id: "job-4",
    title: "Visual UI/UX & Motion Graphic Designer",
    department: "Design & Creative",
    location: "Ahmedabad / Hybrid",
    type: "Full-Time",
    experience: "2 - 4 Years",
    openings: 1,
    salaryRange: "Competitive + Creative Perks",
    summary:
      "Craft stunning luxury brand visual identities, high-converting ad creatives, motion Reels, and modern Figma web prototypes.",
    responsibilities: [
      "Design luxury visual brand assets, typography manuals, logos, and digital collateral.",
      "Create high-converting static ad creatives and animated motion graphics for paid social media.",
      "Design clean, conversion-focused wireframes and UI components in Figma.",
    ],
    requirements: [
      "Outstanding portfolio showcasing brand design, typography mastery, and digital UI aesthetics.",
      "Expertise in Figma, Adobe Illustrator, Photoshop, and After Effects / Premiere Pro.",
      "Understanding of visual hierarchy and conversion-centric visual hooks.",
    ],
    perks: [
      "Creative freedom and experimentation time",
      "Subsidized design asset subscriptions & tool licenses",
      "Collaborative, positive agency studio atmosphere",
    ],
  },
  {
    id: "job-5",
    title: "Digital Marketing Associate / Trainee (Zinmatt Pathway)",
    department: "Training & Operations",
    location: "Ahmedabad / On-Site",
    type: "Internship",
    experience: "Freshers / 0 - 1 Year",
    openings: 3,
    salaryRange: "Paid Stipend + Full-Time Placement Fast-Track",
    summary:
      "Ideal for ambitious freshers and career switchers looking to learn live digital agency operations, live ad campaigns, and SEO from senior mentors.",
    responsibilities: [
      "Assist senior media buyers in campaign data entry and daily performance logging.",
      "Conduct keyword research and draft optimized blog outlines.",
      "Participate in live client campaign testing and weekly growth masterclasses.",
    ],
    requirements: [
      "Passion for digital marketing, growth hacking, and technology trends.",
      "Eagerness to learn, strong communication skills, and disciplined work ethics.",
      "Certification from Zinmatt or recognized digital institute is a strong advantage.",
    ],
    perks: [
      "Direct mentorship from certified Google & Meta specialists",
      "Live portfolio case study building on real client budgets",
      "Guaranteed interview for full-time executive roles upon completion",
    ],
  },
];

import { BLOG_POSTS_DATA } from "./blogData";

export const BLOG_POSTS: BlogPost[] = BLOG_POSTS_DATA;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Maitri Patel",
    role: "Managing Director & Growth Strategist",
    department: "Executive Leadership",
    experience: "8+ Years in Digital Ecosystems",
    bio: "Pioneering commercial digital strategies, enterprise brand transformations, and associate training ecosystems with Zinmatt.",
    skills: [
      "Commercial Growth Strategy",
      "Enterprise Brand Leadership",
      "Omnichannel Marketing",
      "Digital Transformation",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "team-2",
    name: "Karan Joshi",
    role: "Head of Performance Media & Paid Ads",
    department: "Paid Media & Acquisition",
    experience: "6+ Years Performance Buying",
    bio: "Manages multi-crore ad budgets across Google, Meta, and LinkedIn with relentless focus on ROAS and scalable acquisition economics.",
    skills: [
      "Google Ads / PMax",
      "Meta Ads Scaling",
      "ROAS Optimization",
      "Server-Side CAPI Tracking",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "team-3",
    name: "Priya Verma",
    role: "Principal SEO & AI Search (GEO) Lead",
    department: "Organic Search & Analytics",
    experience: "7+ Years Technical SEO",
    bio: "Specialist in high-competition search domination, international technical architectures, and AI entity optimization for ChatGPT and Perplexity.",
    skills: [
      "Technical SEO Audits",
      "Generative Engine Optimization",
      "Semantic Entity Structuring",
      "Core Web Vitals",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "team-4",
    name: "Aditya Patel",
    role: "Lead Full-Stack Web & Technology Architect",
    department: "Technology & Web Engineering",
    experience: "6+ Years Modern Web Systems",
    bio: "Architects lightning-fast Next.js web applications, custom Shopify Plus platforms, and friction-free lead conversion funnels.",
    skills: [
      "React & Next.js",
      "Shopify Plus / Liquid",
      "Speed & CRO Optimization",
      "REST & CRM Integrations",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "team-5",
    name: "Neha Sharma",
    role: "Creative Director & Brand Storyteller",
    department: "Design & Visual Identity",
    experience: "5+ Years Luxury Brand Design",
    bio: "Shapes memorable visual languages, high-converting ad hooks, and premium UI aesthetics for distinguished client portfolios.",
    skills: [
      "Brand Identity & Guidelines",
      "Ad Creative Psychology",
      "Motion Graphics & Reels",
      "Figma UI/UX Design",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "team-6",
    name: "Rohit Singhania",
    role: "Training & Career Counselor (Zinmatt)",
    department: "Education & Career Placement",
    experience: "5+ Years Mentorship & Corporate Hiring",
    bio: "Guides aspiring digital marketers, professionals, and entrepreneurs through certified coursework and corporate agency placements.",
    skills: [
      "Curriculum Mentorship",
      "Live Project Evaluation",
      "Corporate Career Counseling",
      "Resume & Interview Prep",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
];
