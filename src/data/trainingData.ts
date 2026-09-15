import { TrainingCourse } from "../types";

export const FREE_TRAINING_INITIATIVE = {
  title: "90-Day Free Digital Marketing Classes Initiative",
  badge: "Zero Tuition Fee • 100% Free Live Mentorship",
  tagline:
    "Classes Bilkul Free Hoti Hai — Hum Only Unko Jo Tools Provide Karte Hai Unka Nominal Charge Lete Hai",
  description:
    "We believe financial constraints should never stop passionate learners from acquiring high-income digital skills. DigiBasera in association with Zinmatt provides 90 Days (3 Months) of comprehensive, live mentor-led digital marketing training completely FREE. You only pay a nominal access fee for the premium software tools and licenses provided directly to you for live practical assignments.",
  keyFeatures: [
    {
      title: "90 Days 100% Free Classes",
      description:
        "Full 3 months of daily live mentor-led sessions, practical agency curriculum, live doubt clearing, and classroom mentorship at ₹0 tuition cost.",
      icon: "Sparkles",
    },
    {
      title: "Pay Only for Live Tools Provided",
      description:
        "Zero hidden fees. You only pay for the premium software licenses, live web hosting, domain sandbox, and marketing software credentials allocated to you.",
      icon: "Laptop",
    },
    {
      title: "Live Agency Hands-On Practice",
      description:
        "Work on real ad spends, live website setups, SEO audits, and social media campaigns using the exact tools used by top marketing agencies.",
      icon: "Briefcase",
    },
    {
      title: "100% Job Placement Assistance",
      description:
        "Resume crafting, LinkedIn profile optimization, agency mock interviews, portfolio creation, and direct placement support upon course completion.",
      icon: "Award",
    },
  ],
  toolsIncluded: [
    { name: "SEMrush & Keyword Research Suite", type: "SEO Intelligence" },
    { name: "Canva Pro & Visual Design Suite", type: "Creative Assets" },
    { name: "WordPress & Elementor Pro", type: "Web & Funnel UX" },
    { name: "Live Domain & Cloud Hosting Sandbox", type: "Website Deployment" },
    { name: "Meta Ads Manager & CAPI Sandbox", type: "Performance Media" },
    { name: "Google Ads & GA4 Analytics Console", type: "PPC & Tracking" },
    { name: "Generative AI Tools (ChatGPT / Midjourney)", type: "AI Automation" },
    { name: "Email & WhatsApp Marketing API Tools", type: "Lead Retention" },
  ],
  timeline90Days: [
    {
      period: "Month 1 (Days 1 - 30)",
      focus: "Digital Foundations, Website Development & Organic SEO",
      topics: [
        "Digital marketing funnel fundamentals & consumer psychology",
        "WordPress live website design, landing page creation & UX",
        "On-page, technical & local SEO (Google Maps 3-Pack)",
        "Keyword research with SEMrush and competitive intelligence",
      ],
    },
    {
      period: "Month 2 (Days 31 - 60)",
      focus: "Paid Performance Media (Google Ads & Meta Ads)",
      topics: [
        "Meta Ads Manager: Campaign structure, custom audiences & lookalikes",
        "Google Ads: Search, Display, YouTube & Performance Max (PMax)",
        "Conversion tracking setup: Meta Pixel, CAPI, GTM & Google Analytics 4",
        "Ad creative psychology, copywriting, and A/B split-testing",
      ],
    },
    {
      period: "Month 3 (Days 61 - 90)",
      focus: "Social Media, Generative AI & Career/Freelancing Placement",
      topics: [
        "Instagram growth, viral reel scripting & influencer outreach",
        "AI tools workflow for content writing, image design & ad automation",
        "E-commerce & Shopify marketing strategies (Dropshipping & D2C)",
        "Live capstone agency project, resume polishing & interview placement",
      ],
    },
  ],
};

export const TRAINING_CONFIG = {
  heroHeading: "90 Days Free Digital Marketing Classes. Pay Only for Tools.",
  heroSubtitle:
    "Empowering students, job seekers, and founders with 90 Days of 100% Free live classes and practical agency mentorship in association with Zinmatt. Classes are completely free — you only pay a nominal fee for the professional tools provided.",
  associationBadge: "Official Business Associate of Zinmatt",
  freeClassesBadge: "90 Days 100% Free Classes • Pay Only For Tools Provided",
  whatsappMsg:
    "Hello, I am interested in your 90-Day Free Digital Marketing Training Program (Pay Only for Tools). Please share the upcoming batch schedule and details.",
};

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    id: "90-days-free-masterclass",
    title: "90 Days Free Digital Marketing Masterclass (Zinmatt Associate)",
    badge: "100% Free Classes • Pay Only For Tools",
    duration: "90 Days (3 Months Daily Live Batches)",
    mode: "Live Interactive + Agency Assignments",
    level: "Beginner to Professional",
    popular: true,
    shortDesc:
      "Our premier 90-day comprehensive training program where all live teaching and classes are 100% FREE. Students only pay for the individual licensed software tools and sandbox environments provided for hands-on practice.",
    feeModel: {
      tuition: "₹0 (100% Free Classes)",
      toolsFeeNote: "Nominal Tool Access & Software Licensing Pass Only",
    },
    curriculumHighlights: [
      "90 Days (3 Months) Mentor-Led Daily Practical Training",
      "Live Website Design (WordPress, Landing Pages & Hosting Sandbox)",
      "Search Engine Optimization (On-Page, Technical, Backlinks & Local SEO)",
      "Meta Ads Mastery (Facebook & Instagram High-ROAS Campaigns)",
      "Google Ads (Search, Display, Performance Max & YouTube Ads)",
      "Social Media Branding, Viral Reels & Content Strategy",
      "Generative AI Marketing Workflows (ChatGPT, Copy & Design)",
      "Web Analytics (GA4, Google Tag Manager & Conversion Tracking)",
      "E-commerce Marketing & Shopify Store Promotion",
      "Live Capstone Client Project & 100% Job Placement Assistance",
    ],
    toolsCovered: [
      "SEMrush (Provided)",
      "Canva Pro (Provided)",
      "WordPress & Elementor (Provided)",
      "Live Domain & Hosting (Provided)",
      "Meta Ads Manager Sandbox",
      "Google Ads & GA4",
      "ChatGPT AI Suite",
      "WhatsApp Cloud Marketing",
    ],
    certifications: [
      "90-Day Course Completion Certificate (Zinmatt Associate)",
      "ISO-Aligned Curriculum Framework Certificate",
      "Google Ads & Meta Blueprint Assessment Preparation",
      "Live Capstone Project Agency Experience Letter",
    ],
    careerSupport: [
      "1-on-1 Resume & LinkedIn Optimization",
      "Mock Technical & HR Interview Rounds with Senior Marketers",
      "Live Client Campaign Portfolio Creation",
      "Dedicated Job Placement Assistance & Agency Referrals",
    ],
    suitableFor: [
      "College Students & Fresh Graduates seeking high-growth tech careers",
      "Job Seekers looking for practical, verifiable marketing experience",
      "Small Business Owners wanting to run their own ads & SEO",
      "Freelancers wanting high-paying international digital clients",
    ],
  },
  {
    id: "performance-specialist",
    title: "Performance Marketing & Paid Media Specialist",
    badge: "High-Demand Specialization",
    duration: "60 Days (2 Months)",
    mode: "Weekend / Weekday Live Batches",
    level: "Intermediate to Advanced",
    shortDesc:
      "Intensive deep-dive focused strictly on media buying, ROI optimization, high-budget Google/Meta campaigns, conversion tracking, and scaling sales.",
    feeModel: {
      tuition: "100% Free Live Mentorship",
      toolsFeeNote: "Only Paid Ad Sandbox & Analytics Tools Fee",
    },
    curriculumHighlights: [
      "Media Buying Psychology & Cold Audience Acquisition",
      "Meta Advantage+ & Dynamic Creative Optimization",
      "Google Search, Shopping & Performance Max Campaigns",
      "Conversion Tracking, Pixels, CAPI & Server-side GTM",
      "E-commerce ROAS Scaling & Unit Economics",
      "A/B Split-Testing & High-Yield Copywriting",
    ],
    toolsCovered: [
      "Meta Ads Manager",
      "Google Ads Platform",
      "Google Tag Manager",
      "Looker Studio",
      "Triple Whale / GA4",
      "Hotjar & Clarity",
    ],
    certifications: [
      "Performance Specialist Certification",
      "Google Ads Search & Measurement Accreditation Guidance",
    ],
    careerSupport: [
      "Live Ad Spend Simulation & Budget Handling",
      "Case Study Portfolio for Agency & Brand Roles",
      "Performance Marketer Interview Question Vault",
    ],
    suitableFor: [
      "Marketing executives wanting to handle large ad budgets",
      "D2C Founders and E-commerce store managers",
      "Freelancers looking for high-ticket media buying retainers",
    ],
  },
  {
    id: "seo-content-mastery",
    title: "SEO, Content Strategy & Generative AI",
    badge: "Organic Specialization",
    duration: "60 Days (2 Months)",
    mode: "Online / Hybrid",
    level: "Beginner to Intermediate",
    shortDesc:
      "Master the science of page-1 Google rankings, technical website audits, high-intent content creation, and next-gen AI Search (GEO).",
    feeModel: {
      tuition: "100% Free Live Mentorship",
      toolsFeeNote: "Only SEO Tools Access (SEMrush / Ahrefs Pass)",
    },
    curriculumHighlights: [
      "Search Engine Architecture & Crawling Mechanics",
      "Keyword Research & Commercial Intent Mapping",
      "On-Page, Schema.org Markup & Core Web Vitals",
      "High-Authority Link Building & Digital PR Outreach",
      "AI-Powered SEO Workflow (ChatGPT, Perplexity & Claude)",
      "Local SEO & Google Business Profile Dominance",
    ],
    toolsCovered: [
      "Google Search Console",
      "SEMrush / Ahrefs",
      "Screaming Frog SEO Spider",
      "SurferSEO / NeuronWriter",
      "WordPress SEO (RankMath/Yoast)",
    ],
    certifications: [
      "SEO Masterclass Certificate of Completion",
      "HubSpot Content Marketing Accreditation Guidance",
    ],
    careerSupport: [
      "Live Website Audit Portfolio Piece",
      "Technical SEO Checklist & Pitch Deck Templates",
      "Client Outreach & Freelance Freelancing Frameworks",
    ],
    suitableFor: [
      "Content writers wanting to transition to SEO strategists",
      "Bloggers, affiliate marketers, and site builders",
      "Professionals seeking remote international freelance work",
    ],
  },
];

export const TRAINING_PILLARS = [
  {
    number: "01",
    title: "90 Days 100% Free Classes",
    description:
      "Tuition fees are ₹0. Classes are completely free so every motivated student can master digital marketing without financial barrier.",
    iconName: "Sparkles",
  },
  {
    number: "02",
    title: "Pay Only for Tools Provided",
    description:
      "Students only pay a transparent, nominal fee for premium software licenses (SEMrush, Canva Pro, Hosting, WordPress) used in assignments.",
    iconName: "Laptop",
  },
  {
    number: "03",
    title: "Live Agency Client Projects",
    description:
      "Learn by doing. Manage real ad budgets, build live websites, perform real audits, and build a high-credibility portfolio.",
    iconName: "Briefcase",
  },
  {
    number: "04",
    title: "Zinmatt Certification & Placement",
    description:
      "Receive industry-recognized certificates and 1-on-1 interview preparation, resume enhancement, and job placement assistance.",
    iconName: "Award",
  },
];

export const STUDENT_JOURNEY_STEPS = [
  {
    step: "01",
    title: "Free Counseling & Registration",
    description:
      "Meet our counselor, understand the 90-day curriculum, and enroll with ₹0 tuition fees.",
  },
  {
    step: "02",
    title: "Tools Setup & Software Access",
    description:
      "Receive your dedicated login credentials for SEMrush, Canva Pro, WordPress hosting, and ad sandboxes.",
  },
  {
    step: "03",
    title: "90 Days Live Agency Training",
    description:
      "Master SEO, Paid Ads, Social Media, and AI through daily interactive sessions and agency case studies.",
  },
  {
    step: "04",
    title: "Live Project Evaluation & Certificate",
    description:
      "Submit your real-world portfolio, clear practical assessment, and receive your Zinmatt-associated certificate.",
  },
  {
    step: "05",
    title: "Job Placement & Career Launch",
    description:
      "Refine your resume, rehearse mock interviews, and connect with agency and corporate marketing openings.",
  },
];
