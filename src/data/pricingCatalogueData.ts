import {
  PricingBillingType,
  PricingCategoryMeta,
  PricingPackageCatalogueItem,
  PricingServiceCatalogueItem,
} from "../types";

export const DEFAULT_PRICING_CATEGORIES: PricingCategoryMeta[] = [
  {
    id: "all",
    title: "All Services",
    subtitle: "Full agency service catalogue",
    badge: "Overview",
    iconName: "Layers",
    displayOrder: 0,
  },
  {
    id: "seo",
    title: "SEO",
    subtitle: "Search Engine Optimization & Authority",
    badge: "Organic Scale",
    iconName: "Search",
    displayOrder: 1,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Social Media & Paid Performance Media",
    badge: "High ROAS",
    iconName: "TrendingUp",
    displayOrder: 2,
  },
  {
    id: "paid-ads",
    title: "Google & Meta Ads",
    subtitle: "PPC, Performance Marketing, YouTube, WhatsApp & Paid Social",
    badge: "Paid Ads",
    iconName: "DollarSign",
    displayOrder: 2.5,
  },
  {
    id: "web-development",
    title: "Web Development",
    subtitle: "Custom Websites, WordPress & Speed",
    badge: "Modern Tech",
    iconName: "Code2",
    displayOrder: 3,
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
    subtitle: "Shopify, Store Growth & Scaling",
    badge: "Direct-to-Consumer",
    iconName: "ShoppingCart",
    displayOrder: 4,
  },
  {
    id: "branding-creative",
    title: "Branding & Creative",
    subtitle: "Brand Identity, Video & Photography",
    badge: "Visual Identity",
    iconName: "Palette",
    displayOrder: 5,
  },
  {
    id: "amazon",
    title: "Amazon",
    subtitle: "Seller Central, PPC & A+ Optimization",
    badge: "Marketplace Growth",
    iconName: "Zap",
    displayOrder: 6,
  },
  {
    id: "wedding-creative",
    title: "Wedding Creative",
    subtitle: "Cinematic Films & Luxury Albums",
    badge: "Luxury Media",
    iconName: "Heart",
    displayOrder: 7,
  },
  {
    id: "packages",
    title: "Packages",
    subtitle: "All-In-One Digital Retainers",
    badge: "Combo Retainers",
    iconName: "Sparkles",
    displayOrder: 8,
  },
];

export const DEFAULT_PRICING_SERVICES: PricingServiceCatalogueItem[] = [
  // SECTION 01 — SEO SERVICES
  {
    id: "seo-services",
    name: "SEO Services",
    categoryId: "seo",
    categoryName: "SEO",
    shortDesc:
      "Comprehensive monthly search optimization to elevate ranking authority and capture continuous inbound buyers.",
    fullDesc:
      "End-to-end multi-pillar SEO engine covering exhaustive keyword research, technical hygiene, on-page optimization, content enhancements, and high-quality backlink growth.",
    startingPrice: "₹14,999",
    priceNumeric: 14999,
    currency: "₹",
    billingType: "/month",
    featured: true,
    status: "active",
    displayOrder: 1,
    badge: "Core Organic",
    inclusions: [
      "Keyword Research",
      "On-Page SEO",
      "Technical Checks",
      "Internal Linking",
      "Basic Off-Page SEO",
      "Monthly Report",
    ],
    fullInclusions: [
      "Commercial Keyword Discovery & Target Intent Mapping",
      "Title, Meta Description & Header Tag Optimization",
      "Site Architecture & Crawl Depth Audit",
      "Internal Linking Equity Strategy",
      "Basic Contextual Link Building & Digital PR Outreach",
      "Google Search Console & GA4 Setup",
      "Monthly Executive Performance & Rank Movement Report",
    ],
    whatsappMessage:
      "Hello, I am interested in SEO Services (₹14,999/month). Please share more details and a quotation.",
    iconName: "Search",
  },
  {
    id: "local-seo",
    name: "Local SEO",
    categoryId: "seo",
    categoryName: "SEO",
    shortDesc:
      'Dominate Google Maps 3-Pack and capture high-intent "near me" local customer queries in your city.',
    fullDesc:
      "Hyper-localized visibility blueprint engineered to maximize footfall, local phone calls, and location-specific lead acquisition through Google Business Profile mastery.",
    startingPrice: "₹9,999",
    priceNumeric: 9999,
    currency: "₹",
    billingType: "/month",
    featured: true,
    status: "active",
    displayOrder: 2,
    badge: "Maps 3-Pack",
    inclusions: [
      "Google Business Profile Optimization",
      "Local Keywords",
      "Citations",
      "NAP Optimization",
      "Review Strategy",
      "Local Report",
    ],
    fullInclusions: [
      "100% Google Business Profile Audit & Secondary Category Optimization",
      "Localized Commercial Keyword Mapping",
      "60+ High-Authority Directory Citations (Justdial, Sulekha, IndiaMART)",
      "Name, Address, Phone (NAP) Consistency Enforcement",
      "5-Star Automated Customer Review Generation Strategy",
      "Geo-Tagged High-Resolution Imagery Seeding",
      "Monthly Local 3-Pack Rank Tracker & Call Analytics",
    ],
    whatsappMessage:
      "Hello, I am interested in Local SEO (₹9,999/month). Please share more details and a quotation.",
    iconName: "MapPin",
  },
  {
    id: "technical-seo",
    name: "Technical SEO",
    categoryId: "seo",
    categoryName: "SEO",
    shortDesc:
      "Deep site architecture crawl, indexing cleanup, speed boost, and Core Web Vitals remediation.",
    fullDesc:
      "Comprehensive engineering teardown of server responses, render-blocking scripts, crawl bloat, canonical loops, and structured schema JSON-LD data.",
    startingPrice: "₹19,999",
    priceNumeric: 19999,
    currency: "₹",
    billingType: "/project",
    status: "active",
    displayOrder: 3,
    badge: "Infrastructure",
    inclusions: [
      "Technical Audit",
      "Crawl Issues",
      "Indexing",
      "Sitemap",
      "Robots.txt",
      "Speed & Core Web Vitals Recommendations",
    ],
    fullInclusions: [
      "150-Point Deep Screaming Frog & Log File Audit",
      "Broken Link, 404 & Redirect Chain Cleanup",
      "Indexation Traps & Canonical Tag Stabilization",
      "XML Sitemap & Optimized Robots.txt Configuration",
      "Core Web Vitals Remediation (LCP, FID/INP, CLS)",
      "JSON-LD Organization & Service Schema Structured Data",
      "Mobile Usability & JavaScript Rendering Fixes",
    ],
    whatsappMessage:
      "Hello, I am interested in Technical SEO (₹19,999/project). Please share more details and a quotation.",
    iconName: "Wrench",
  },
  {
    id: "link-building",
    name: "Link Building",
    categoryId: "seo",
    categoryName: "SEO",
    shortDesc:
      "Acquire high-authority editorial backlinks and digital PR brand mentions to boost domain authority.",
    fullDesc:
      "White-hat contextual outreach acquiring authentic backlinks from niche-relevant blogs and editorial publishers with zero spam or PBN risk.",
    startingPrice: "₹9,999",
    priceNumeric: 9999,
    currency: "₹",
    billingType: "/month",
    status: "active",
    displayOrder: 4,
    badge: "Authority Boost",
    inclusions: [
      "Backlink Strategy",
      "Competitor Backlink Research",
      "Link Acquisition",
      "Link Monitoring",
    ],
    fullInclusions: [
      "Custom Domain Authority Gap & Competitor Backlink Audit",
      "Niche-Relevant Editorial Outreach & Guest Placements (DA/DR 40+)",
      "Unlinked Brand Mention Conversion",
      "Toxic Backlink Audit & Google Disavow Maintenance",
      "Natural Anchor Text Velocity & Diversity Modeling",
      "Monthly Verified Backlinks Live Acquisition Sheet",
    ],
    whatsappMessage:
      "Hello, I am interested in Link Building (₹9,999/month). Please share more details and a quotation.",
    iconName: "Link",
  },
  {
    id: "seo-content-writing",
    name: "SEO Content Writing",
    categoryId: "seo",
    categoryName: "SEO",
    shortDesc:
      "Human-crafted, search-intent matched authoritative long-form content optimized for rankings.",
    fullDesc:
      "Data-driven editorial content built with semantic NLP entities and rich answers designed to satisfy search engines and turn readers into customers.",
    startingPrice: "₹1,499",
    priceNumeric: 1499,
    currency: "₹",
    billingType: "/article",
    status: "active",
    displayOrder: 5,
    badge: "Ranked Articles",
    inclusions: [
      "Keyword Research",
      "SEO Title",
      "Meta Description",
      "Structured Content",
      "Internal-Link Suggestions",
    ],
    fullInclusions: [
      "High-Intent Primary & Secondary Keyword Analysis",
      "Click-Magnified SEO Title & Engaging Meta Description",
      "Semantic H1, H2, H3 Outline Architecture (1200-1500 words)",
      "Direct-Answer FAQ Schema Blocks for Google Snippets",
      "Strategic Internal & External Linking Guidance",
      "100% Original, Plagiarism-Free, Human-Polished Copy",
    ],
    whatsappMessage:
      "Hello, I am interested in SEO Content Writing (₹1,499/article). Please share more details and a quotation.",
    iconName: "FileText",
  },
  {
    id: "franchise-seo",
    name: "Franchise SEO",
    categoryId: "seo",
    categoryName: "SEO",
    shortDesc:
      "Multi-location SEO strategy for franchises, retail chains, and regional branch networks.",
    fullDesc:
      "Scalable multi-city organic architecture designed to establish local dominance across multiple pins and regional territories simultaneously.",
    startingPrice: "₹29,999",
    priceNumeric: 29999,
    currency: "₹",
    billingType: "/month",
    status: "active",
    displayOrder: 6,
    badge: "Multi-Location",
    inclusions: [
      "Multi-location SEO Strategy",
      "Location Pages",
      "Local SEO",
      "GBP Strategy",
      "Keyword Tracking",
      "Reporting",
    ],
    fullInclusions: [
      "Centralized Multi-Location Brand Hierarchy & Silo Structure",
      "Dedicated Geo-Targeted Landing Pages with Unique Local Schema",
      "Multi-Pin Google Business Profile Optimization & Verification",
      "Location-Specific Citation Building & Synchronized NAP Sync",
      "Regional Competitor Keyword & Local Ranking Tracking",
      "Centralized Multi-Outlet Lead Attribution Reporting",
    ],
    whatsappMessage:
      "Hello, I am interested in Franchise SEO (₹29,999/month). Please share more details and a quotation.",
    iconName: "Building",
  },
  {
    id: "cro",
    name: "Conversion Rate Optimization (CRO)",
    categoryId: "seo",
    categoryName: "SEO",
    shortDesc:
      "Turn existing traffic into paying leads through UI friction reduction, heatmaps, and funnel testing.",
    fullDesc:
      "Scientific CRO auditing combining UX session recordings, user psychology, form streamlining, and copy experiments to multiply conversion yield.",
    startingPrice: "₹19,999",
    priceNumeric: 19999,
    currency: "₹",
    billingType: "/month",
    status: "active",
    displayOrder: 7,
    badge: "Higher ROI",
    inclusions: [
      "Website Audit",
      "UX Analysis",
      "CTA Optimization",
      "Landing Page Recommendations",
      "Conversion Tracking",
    ],
    fullInclusions: [
      "Full User Journey & Bounce Rate Analytics Audit",
      "Heatmap, Clickmap & Session Recording Behavioral Teardown",
      "Call-To-Action (CTA) Hierarchy & Copy Re-engineering",
      "Mobile Checkout & Multi-Step Lead Form Optimization",
      "A/B Split Test Hypothesis Formulation & Wireframing",
      "Conversion Funnel Drop-off Tracking in GA4 / Hotjar",
    ],
    whatsappMessage:
      "Hello, I am interested in Conversion Rate Optimization (₹19,999/month). Please share more details and a quotation.",
    iconName: "Target",
  },

  // SECTION 02 — SOCIAL MEDIA / DIGITAL MARKETING
  {
    id: "social-media-marketing",
    name: "Social Media Marketing",
    categoryId: "digital-marketing",
    categoryName: "Digital Marketing",
    shortDesc:
      "Strategic social media management, aesthetic content calendars, engagement, and audience growth.",
    fullDesc:
      "End-to-end management of your brand channels across Instagram, Facebook, and LinkedIn with cohesive visual aesthetics and engaging copywriting.",
    startingPrice: "₹14,999",
    priceNumeric: 14999,
    currency: "₹",
    billingType: "/month",
    featured: true,
    status: "active",
    displayOrder: 8,
    badge: "Brand Presence",
    inclusions: [
      "Monthly Content Calendar",
      "15–20 Custom Creatives",
      "Engaging Copywriting & Hashtags",
      "Community Management",
      "Monthly Growth Report",
    ],
    fullInclusions: [
      "Monthly Strategic Content Theme & Grid Architecture",
      "15-20 High-Resolution Static & Carousel Brand Creatives",
      "Direct-Response Caption Writing & Target Hashtag Clusters",
      "Community Comment & Direct Message Response Protocol",
      "Instagram Bio, Highlight Covers & Brand Guidelines Sync",
      "Detailed Monthly Reach, Engagement & Follower Growth Report",
    ],
    whatsappMessage:
      "Hello, I am interested in Social Media Marketing (₹14,999/month). Please share more details and a quotation.",
    iconName: "Share2",
  },
  {
    id: "ppc-performance-marketing",
    name: "PPC / Performance Marketing",
    categoryId: "paid-ads",
    categoryName: "Google & Meta Ads",
    shortDesc:
      "Full-funnel Google Search, Performance Max, and paid media acquisition engineered for optimal capital efficiency and peak ROAS.",
    fullDesc:
      "Data-driven paid media buying utilizing smart bidding algorithms, negative keyword sculpting, conversion tracking reconciliation, and continuous landing page optimization.",
    startingPrice: "₹19,999",
    priceNumeric: 19999,
    currency: "₹",
    billingType: "/month",
    featured: true,
    status: "active",
    displayOrder: 9,
    badge: "Performance Scale",
    inclusions: [
      "Google Search & PMax Ads",
      "Daily Bid & Budget Tuning",
      "High-Intent Keyword STAGs",
      "Negative Keyword Scrubbing",
      "Enhanced Conversion Tracking",
      "Weekly ROAS Reports",
    ],
    fullInclusions: [
      "Comprehensive Google Search, Shopping & Performance Max Setup",
      "High-Intent Commercial Keyword Harvesting (Single-Theme Ad Group STAGs)",
      "Responsive Search Ads (RSA) with 15+ A/B Tested Headline Combinations",
      "Aggressive Negative Keyword & Placement Scrubbing to Eliminate Ad Waste",
      "Server-Side GTM & GA4 Enhanced Conversion Tracking & Attribution",
      "Daily Bid Adjustments, Impression Share Tuning & Weekly Executive ROAS Reports",
    ],
    whatsappMessage:
      "Hello, I am interested in PPC / Performance Marketing (₹19,999/month). Please share more details and a quotation.",
    iconName: "DollarSign",
  },
  {
    id: "pricing-youtube-ads",
    name: "YouTube Ads",
    categoryId: "paid-ads",
    categoryName: "Google & Meta Ads",
    shortDesc:
      "High-impact In-Stream, 15s Bumper, and YouTube Shorts video ads that capture visual attention and generate qualified buyer conversions.",
    fullDesc:
      "Capture high-intent visual attention on YouTube. We structure skippable in-stream, bumper, and YouTube Shorts vertical video ad campaigns with custom intent audiences targeting competitors on Google Search.",
    startingPrice: "₹14,999",
    priceNumeric: 14999,
    currency: "₹",
    billingType: "/month",
    featured: true,
    status: "active",
    displayOrder: 9.1,
    badge: "Video Scale",
    inclusions: [
      "In-Stream & Shorts Video Ads",
      "Custom Intent Keyword Targeting",
      "First 5-Second Hook Scripting",
      "Channel Placement Exclusions",
      "Conversion Action Tracking",
      "Audience Retargeting Lists",
    ],
    fullInclusions: [
      "Skippable In-Stream, 15s Bumper & Shorts 9:16 Video Campaign Setup",
      "Custom Intent Audience Structuring (Targeting Users Searching Competitors)",
      "First-5-Second Video Hook Scripting & CTA Card Placement Strategy",
      "Channel-Level Placement Exclusions to Prevent Low-Quality Kid Channel Clicks",
      "Google Ads & GA4 Video View-Through & Lead Conversion Tracking",
      "Audience Retargeting Lists of Viewers Who Watched Previous Videos",
    ],
    whatsappMessage:
      "Hello, I am interested in YouTube Ads (₹14,999/month). Please share more details and a quotation.",
    iconName: "Film",
  },
  {
    id: "pricing-whatsapp-ads",
    name: "WhatsApp Ads & Conversational Marketing",
    categoryId: "paid-ads",
    categoryName: "Google & Meta Ads",
    shortDesc:
      "Click-to-WhatsApp (CTWA) ads on Meta with 24/7 automated interactive chatbot flows that capture, qualify, and convert leads in real time.",
    fullDesc:
      "Drive instant conversations from Facebook & Instagram directly into WhatsApp. Includes automated greeting bots, instant brochure auto-delivery, and CRM routing for rapid lead conversion with verified phone numbers.",
    startingPrice: "₹9,999",
    priceNumeric: 9999,
    currency: "₹",
    billingType: "/month",
    featured: true,
    status: "active",
    displayOrder: 9.2,
    badge: "Conversational",
    inclusions: [
      "Click-to-WhatsApp (CTWA) Ads",
      "Meta Ads Campaign Setup",
      "24/7 Automated Greeting Bot",
      "Digital Catalog / Brochure Auto-Send",
      "Multi-Agent Inbox Integration",
      "Lead Verification & CRM Sync",
    ],
    fullInclusions: [
      "Click-to-WhatsApp (CTWA) High-Converting Ad Creative Campaign Setup",
      "WhatsApp Cloud API / Official Business Account Verification Support",
      "Automated 24/7 Lead Qualification Interactive Chatbot Sequences",
      "Instant PDF Brochure, Price List & Catalog Auto-Delivery to Inquiries",
      "Multi-Agent Team Web Inbox Configuration (Wati, Interakt, or Aisensy)",
      "CRM Webhook Sync & Automated Google Sheet / CRM Phone Contact Logging",
    ],
    whatsappMessage:
      "Hello, I am interested in WhatsApp Ads & Conversational Marketing (₹9,999/month). Please share more details and a quotation.",
    iconName: "MessageSquare",
  },
  {
    id: "pricing-linkedin-ads",
    name: "LinkedIn Ads",
    categoryId: "paid-ads",
    categoryName: "Google & Meta Ads",
    shortDesc:
      "Laser-targeted B2B campaigns targeting corporate decision-makers, CXOs, directors, and purchasing heads by job title and company size.",
    fullDesc:
      "Generate high-ticket corporate sales pipelines. We target enterprise leaders by exact job titles, company size, and industry verticals using verified LinkedIn profile data and native in-app Lead Gen Forms.",
    startingPrice: "₹19,999",
    priceNumeric: 19999,
    currency: "₹",
    billingType: "/month",
    featured: false,
    status: "active",
    displayOrder: 9.3,
    badge: "B2B Decision Makers",
    inclusions: [
      "Job Title & Industry Targeting",
      "Sponsored Single & Carousel Ads",
      "Native Lead Gen Forms",
      "LinkedIn Insight Tag Setup",
      "CRM Lead Webhook Sync",
      "Weekly B2B Performance Reports",
    ],
    fullInclusions: [
      "Account-Based Marketing (ABM) Setup & High-Value Target Account Lists",
      "Precision Demographic Targeting by Job Title, Seniority & Company Size",
      "Sponsored Single Image, Carousel & PDF Document Ad Creative Sets",
      "Native In-App LinkedIn Lead Gen Forms with Pre-Filled Verified Corporate Data",
      "LinkedIn Insight Tag Implementation for High-Intent Retargeting Audiences",
      "CRM Pipeline Integration (HubSpot / Zoho / Salesforce) & Weekly B2B Reports",
    ],
    whatsappMessage:
      "Hello, I am interested in LinkedIn Ads (₹19,999/month). Please share more details and a quotation.",
    iconName: "Share2",
  },
  {
    id: "pricing-ai-advertising",
    name: "AI-Powered Advertising",
    categoryId: "paid-ads",
    categoryName: "Google & Meta Ads",
    shortDesc:
      "Machine-learning algorithmic bid scaling, generative ad creative variants, dynamic copy, and automated fatigue prevention.",
    fullDesc:
      "Supercharge your paid ad returns. We deploy generative AI for rapid creative iteration, algorithmic budget allocation, dynamic copy testing, and predictive customer lifetime value (LTV) modeling.",
    startingPrice: "₹24,999",
    priceNumeric: 24999,
    currency: "₹",
    billingType: "/month",
    featured: true,
    status: "active",
    displayOrder: 9.4,
    badge: "Predictive AI",
    inclusions: [
      "AI Creative Variant Generation",
      "Algorithmic Smart Bidding",
      "Dynamic Persona Copy Testing",
      "Ad Fatigue Auto-Rotation",
      "Predictive Attribution Modeling",
      "Weekly AI Performance Reports",
    ],
    fullInclusions: [
      "AI-Generated High-Velocity Visual Creative Variations & Hook Testing",
      "Smart Bidding Calibration with Algorithmic Target CPA & ROAS Optimization",
      "Dynamic Ad Copy Variations Tailored in Real-Time to Buyer Intent Triggers",
      "Autonomous Ad Fatigue Monitoring & Intelligent Asset Rotation Schedulers",
      "Multi-Touch Server-Side Attribution Modeling with Predictive LTV Signals",
      "Competitor Ad Intelligence Monitoring & Strategic Machine-Learning Performance Reports",
    ],
    whatsappMessage:
      "Hello, I am interested in AI-Powered Advertising (₹24,999/month). Please share more details and a quotation.",
    iconName: "Zap",
  },
  {
    id: "social-media-advertising",
    name: "Social Media Advertising (Meta Ads)",
    categoryId: "paid-ads",
    categoryName: "Google & Meta Ads",
    shortDesc:
      "Meta (Instagram & Facebook) Ads optimized for high-volume customer acquisition and retargeting.",
    fullDesc:
      "Systematic testing of video hooks, static comparison cards, and custom lookalike audiences to scale customer acquisition profitably on Meta.",
    startingPrice: "₹9,999",
    priceNumeric: 9999,
    currency: "₹",
    billingType: "/month",
    status: "active",
    displayOrder: 9.5,
    badge: "Meta Ads",
    inclusions: [
      "Meta Ad Campaign Setup",
      "Audience Research & Lookalikes",
      "Direct-Response Ad Creatives",
      "Pixel & CAPI Setup",
      "Retargeting Funnels",
      "Performance Optimization",
    ],
    fullInclusions: [
      "Meta Business Manager Setup & Domain Verification",
      "Custom Interest, Broad & Lookalike Audience Segmentation",
      "Direct-Response Ad Copywriting & Static Visuals Batching",
      "Server-Side Conversions API (CAPI) Tracking Integration",
      "Multi-Touchpoint Dynamic Retargeting Funnel",
      "Continuous Creative Rotation & Cost-Per-Acquisition Optimization",
    ],
    whatsappMessage:
      "Hello, I am interested in Social Media Advertising (Meta Ads) (₹9,999/month). Please share more details and a quotation.",
    iconName: "TrendingUp",
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    categoryId: "digital-marketing",
    categoryName: "Digital Marketing",
    shortDesc:
      "Automated email nurture sequences, newsletters, and revenue-generating lifecycle flows.",
    fullDesc:
      "Turn subscribers into repeat purchasers through automated welcome series, segmentation, and high-converting broadcast newsletters.",
    startingPrice: "₹9,999",
    priceNumeric: 9999,
    currency: "₹",
    billingType: "/month",
    status: "active",
    displayOrder: 11,
    badge: "Retention",
    inclusions: [
      "Email Flow Automations",
      "Audience Segmentation",
      "Responsive Newsletter Design",
      "Subject Line A/B Testing",
      "Deliverability Monitoring",
      "Campaign Analytics",
    ],
    fullInclusions: [
      "Automated Welcome & Lead Magnet Delivery Drip Sequences",
      "Audience Segmentation by Buyer Persona and Engagement",
      "Custom Branded Responsive Email HTML Templates",
      "Subject Line & Preview Text A/B Split Testing",
      "Domain Authentication (SPF, DKIM, DMARC) for High Inbox Rates",
      "Weekly Scheduled Promotional Campaigns & Revenue Reports",
    ],
    whatsappMessage:
      "Hello, I am interested in Email Marketing (₹7,999/month). Please share more details and a quotation.",
    iconName: "Mail",
  },
  {
    id: "event-promotions",
    name: "Event Promotions",
    categoryId: "digital-marketing",
    categoryName: "Digital Marketing",
    shortDesc:
      "Comprehensive digital campaign to pack seats, drive registrations, and maximize event awareness.",
    fullDesc:
      "Fast-paced, hyper-targeted digital blitz combining geo-fenced social ads, countdown creatives, WhatsApp blasts, and influencer seeding for live or digital events.",
    startingPrice: "₹19,999",
    priceNumeric: 19999,
    currency: "₹",
    billingType: "/campaign",
    status: "active",
    displayOrder: 12,
    badge: "Fast Turnout",
    inclusions: [
      "Pre-Event Buzz & Teasers",
      "Geo-Targeted Paid Ads",
      "Registration Landing Page Setup",
      "WhatsApp & Email Broadcasts",
      "Influencer Collateral",
      "Post-Event Lead Capture",
    ],
    fullInclusions: [
      "Multi-Stage Promotion Timeline (Pre-Buzz, Early Bird, Last Call)",
      "Geo-Fenced Meta & Google Ads Targeting Local Attendees",
      "High-Speed Event Registration & Ticket Booking Landing Page",
      "WhatsApp Broadcast Sequences & SMS Reminder Automations",
      "Speaker / Sponsor Social Media Kits & Teaser Assets",
      "Post-Event Summary Campaign & Future Database Retaining",
    ],
    whatsappMessage:
      "Hello, I am interested in Event Promotions (₹19,999/campaign). Please share more details and a quotation.",
    iconName: "Calendar",
  },
  {
    id: "content-management",
    name: "Content Management",
    categoryId: "digital-marketing",
    categoryName: "Digital Marketing",
    shortDesc:
      "Multi-channel digital content publishing, asset archiving, and editorial consistency governance.",
    fullDesc:
      "End-to-end editorial stewardship ensuring every blog post, product copy, social caption, and newsletter adheres to brand tone and goes live on schedule.",
    startingPrice: "₹9,999",
    priceNumeric: 9999,
    currency: "₹",
    billingType: "/month",
    status: "active",
    displayOrder: 13,
    badge: "Stewardship",
    inclusions: [
      "Cross-Platform Publishing",
      "Blog & Article Uploading",
      "Visual Asset Archiving",
      "Tone of Voice Consistency",
      "Content Refresh & Updates",
      "Editorial Calendar Management",
    ],
    fullInclusions: [
      "Multi-Platform Uploading & Scheduling (CMS, Medium, LinkedIn, Meta)",
      "On-Page Formatting, Image Alt Tagging & Tag Organization",
      "Cloud Storage Asset Tagging & Categorization",
      "Proofreading & Brand Voice Standardization",
      "Quarterly Historical Content Audit & Optimization Refresh",
      "Weekly Editorial Pipeline Tracking and Team Coordination",
    ],
    whatsappMessage:
      "Hello, I am interested in Content Management (₹9,999/month). Please share more details and a quotation.",
    iconName: "Layers",
  },

  // SECTION 03 — WEBSITE DESIGN & DEVELOPMENT
  {
    id: "web-design",
    name: "Web Design",
    categoryId: "web-development",
    categoryName: "Web Development",
    shortDesc:
      "Modern, mobile-first responsive 5-page business website designed to convert inquiries.",
    fullDesc:
      "High-speed business website crafted with clean modern typography, clear calls-to-action, WhatsApp integration, and essential search engine foundations.",
    startingPrice: "₹19,999",
    priceNumeric: 19999,
    currency: "₹",
    billingType: "/project",
    featured: true,
    status: "active",
    displayOrder: 14,
    badge: "Business Essential",
    inclusions: [
      "Responsive Design",
      "5 Pages",
      "Contact Form",
      "WhatsApp Integration",
      "Basic SEO",
      "Mobile Speed Optimized",
    ],
    fullInclusions: [
      "100% Mobile & Tablet Responsive Layout",
      "Up to 5 Core Pages (Home, About, Services, Gallery/Portfolio, Contact)",
      "Interactive Contact Form with Instant Email Notification",
      "Direct WhatsApp Click-to-Chat Integration",
      "On-Page Meta Tags & Google Indexing Setup",
      "Google Map Embed & Social Media Links Integration",
      "Cross-Browser Testing & 14-Day Free Launch Support",
    ],
    whatsappMessage:
      "Hello, I am interested in Web Design (₹19,999/project). Please share more details and a quotation.",
    iconName: "Layout",
  },
  {
    id: "custom-website-design",
    name: "Custom Website Design",
    categoryId: "web-development",
    categoryName: "Web Development",
    shortDesc:
      "Bespoke UI/UX design in Figma, interactive micro-animations, custom CRM webhooks, and sub-second speed.",
    fullDesc:
      "Tailor-made digital experience engineered from scratch without templates. Pixel-perfect Figma prototypes coded into lightning-fast React/Next.js interfaces.",
    startingPrice: "₹29,999",
    priceNumeric: 29999,
    currency: "₹",
    billingType: "/project",
    featured: true,
    status: "active",
    displayOrder: 15,
    badge: "Bespoke Tech",
    inclusions: [
      "Custom UI/UX in Figma",
      "Responsive Design",
      "Interactive Animations",
      "Lead Forms & CRM Webhooks",
      "SEO Architecture & Schema",
      "Speed & Performance Polish",
    ],
    fullInclusions: [
      "Complete Bespoke Figma UI/UX Prototype (Desktop & Mobile)",
      "Custom Frontend Development with Smooth Motion UX",
      "Multi-Step Lead Qualification Funnels & CRM Webhook Delivery",
      "Comprehensive Schema.org JSON-LD Structured Data",
      "90+ Google PageSpeed Guarantee on Mobile & Desktop",
      "Enterprise SSL & Security Hardening",
      "30-Day Comprehensive Warranty & Admin Training Video",
    ],
    whatsappMessage:
      "Hello, I am interested in Custom Website Design (₹29,999/project). Please share more details and a quotation.",
    iconName: "Code2",
  },
  {
    id: "wordpress-website-design",
    name: "WordPress Website Design",
    categoryId: "web-development",
    categoryName: "Web Development",
    shortDesc:
      "Easy-to-manage WordPress setup with premium theme customization, 5–8 pages, and robust security.",
    fullDesc:
      "User-friendly WordPress platform allowing your team to easily edit text, add blog posts, and manage products without needing a developer.",
    startingPrice: "₹24,999",
    priceNumeric: 24999,
    currency: "₹",
    billingType: "/project",
    status: "active",
    displayOrder: 16,
    badge: "Easy CMS",
    inclusions: [
      "WordPress Setup",
      "Theme Customization",
      "5–8 Pages",
      "Basic SEO",
      "Security Setup",
      "Visual Builder Handover",
    ],
    fullInclusions: [
      "WordPress Installation & High-Speed Hosting Configuration",
      "Premium Clean Theme Setup & Custom CSS Styling",
      "5 to 8 Structured Content Pages with Blog Infrastructure",
      "Yoast / RankMath SEO Configuration & XML Sitemap",
      "Wordfence Security, Firewall & Anti-Spam Protection",
      "Visual Elementor / Gutenberg Drag-and-Drop Page Builder",
      "Recorded Video Tutorial for In-House Content Editing",
    ],
    whatsappMessage:
      "Hello, I am interested in WordPress Website Design (₹24,999/project). Please share more details and a quotation.",
    iconName: "Globe",
  },
  {
    id: "website-maintenance",
    name: "Website Maintenance",
    categoryId: "web-development",
    categoryName: "Web Development",
    shortDesc:
      "Continuous security audits, core updates, cloud backups, and on-demand technical support.",
    fullDesc:
      "Ensure 99.9% uptime and zero security breaches with proactive plugin updating, malware scanning, database optimization, and priority emergency fixes.",
    startingPrice: "₹4,999",
    priceNumeric: 4999,
    currency: "₹",
    billingType: "/month",
    status: "active",
    displayOrder: 17,
    badge: "Zero Downtime",
    inclusions: [
      "Plugin & Core Updates",
      "Daily Cloud Backups",
      "Security & Malware Checks",
      "Minor Content Changes",
      "Technical Support",
      "24/7 Uptime Monitoring",
    ],
    fullInclusions: [
      "Weekly Staging Updates for Plugins, Themes & Core Engine",
      "Daily Automated Offsite Cloud Backups with 1-Click Restore",
      "Real-Time 24/7 Server Uptime & SSL Monitoring",
      "Malware Scanning & Vulnerability Firewall Patches",
      "Up to 2 Hours of Monthly Minor Content / Banner Updates",
      "Priority WhatsApp & Phone Technical Troubleshooting Desk",
    ],
    whatsappMessage:
      "Hello, I am interested in Website Maintenance (₹4,999/month). Please share more details and a quotation.",
    iconName: "ShieldCheck",
  },

  // SECTION 04 — E-COMMERCE
  {
    id: "ecommerce-marketing",
    name: "E-Commerce Marketing",
    categoryId: "e-commerce",
    categoryName: "E-Commerce",
    shortDesc:
      "Full-funnel D2C e-commerce growth driving consistent purchases, higher AOV, and scalable ROAS.",
    fullDesc:
      "End-to-end paid media and retention marketing for online stores, combining Meta Catalog Ads, Google Shopping, dynamic retargeting, and influencer partnerships.",
    startingPrice: "₹24,999",
    priceNumeric: 24999,
    currency: "₹",
    billingType: "/month",
    featured: true,
    status: "active",
    displayOrder: 18,
    badge: "D2C Scaling",
    inclusions: [
      "Meta Dynamic Catalog Ads",
      "Google Shopping / PMax",
      "Cart Abandonment Strategy",
      "Offer & Bundle Architecture",
      "Influencer Seeding Strategy",
      "Blended ROAS Optimization",
    ],
    fullInclusions: [
      "Meta Advantage+ Catalog & Video Ad Testing Matrix",
      "Google Merchant Center Feed Optimization & Performance Max Ads",
      "Automated Cart Abandonment & Winback Strategy",
      "Average Order Value (AOV) Bundle & Tiered Discount Structuring",
      "Micro-Influencer Gifting & UGC Asset Licensing Framework",
      "Weekly Multi-Touch Attribution & Blended CAC/ROAS Dashboard",
    ],
    whatsappMessage:
      "Hello, I am interested in E-Commerce Marketing (₹24,999/month). Please share more details and a quotation.",
    iconName: "ShoppingCart",
  },
  {
    id: "ecommerce-seo",
    name: "E-Commerce SEO",
    categoryId: "e-commerce",
    categoryName: "E-Commerce",
    shortDesc:
      "Rank category and product pages organically on top of Google for commercial shopping queries.",
    fullDesc:
      "Specialized organic optimization resolving faceted navigation issues, duplicate collection tags, product schema, and category content depth.",
    startingPrice: "₹19,999",
    priceNumeric: 19999,
    currency: "₹",
    billingType: "/month",
    status: "active",
    displayOrder: 19,
    badge: "Category Rank",
    inclusions: [
      "Category & Product Keywords",
      "Product Schema JSON-LD",
      "Faceted Navigation Fixes",
      "Category Content Strategy",
      "Image Alt & Speed Optimization",
      "Internal Link Architecture",
    ],
    fullInclusions: [
      "High-Commercial Intent Product & Collection Keyword Silos",
      "Complete Product Schema (Price, InStock, AggregateRating, SKU)",
      "Canonical Tag Strategy for Product Filter & Variant URLs",
      "Conversion-Optimized Collection Descriptions & FAQs",
      "Automated Lossless Image Compression & CDN Setup",
      "Search Console Merchant Listing & Product Snippet Monitoring",
    ],
    whatsappMessage:
      "Hello, I am interested in E-Commerce SEO (₹19,999/month). Please share more details and a quotation.",
    iconName: "Search",
  },
  {
    id: "shopify-website-design",
    name: "Shopify Website Design",
    categoryId: "e-commerce",
    categoryName: "E-Commerce",
    shortDesc:
      "Bespoke Shopify 2.0 storefront with slide-out cart, payment gateways, logistics sync, and high conversion UX.",
    fullDesc:
      "Custom Shopify 2.0 store designed to convert mobile shoppers with lightning speed, custom product options, seamless Indian payments, and automated shipping.",
    startingPrice: "₹39,999",
    priceNumeric: 39999,
    currency: "₹",
    billingType: "/project",
    featured: true,
    status: "active",
    displayOrder: 20,
    badge: "High Converting",
    inclusions: [
      "Custom Shopify 2.0 Theme",
      "Slide-Out Cart & Quick Buy",
      "Payment Gateway Integration",
      "Logistics & Shipping Setup",
      "Product Variant Selectors",
      "Klaviyo Email App Setup",
    ],
    fullInclusions: [
      "Custom Shopify 2.0 Theme Architecture with Zero Bloat",
      "Mobile-First Sticky Add-To-Cart & Slide-Out Cart with Free Shipping Meter",
      "Payment Gateway Integration (Razorpay, Cashfree, UPI & COD)",
      "Logistics & Tracking API Sync (Shiprocket / Delhivery)",
      "Custom Product Variant Swatches, Size Guides & Trust Badges",
      "Automated Abandoned Checkout & Welcome Flow App Configuration",
      "Store Admin Handover & Complete Video Walkthrough",
    ],
    whatsappMessage:
      "Hello, I am interested in Shopify Website Design (₹39,999/project). Please share more details and a quotation.",
    iconName: "ShoppingBag",
  },
  {
    id: "ecommerce-ppc",
    name: "E-Commerce PPC",
    categoryId: "e-commerce",
    categoryName: "E-Commerce",
    shortDesc:
      "Google Shopping & Performance Max campaigns managed for high volume product sales and peak ROAS.",
    fullDesc:
      "Laser-targeted Google Merchant Center advertising ensuring your products appear prominently on top Google shopping carousels for active buyers.",
    startingPrice: "₹19,999",
    priceNumeric: 19999,
    currency: "₹",
    billingType: "/month",
    status: "active",
    displayOrder: 21,
    badge: "Google Shopping",
    inclusions: [
      "Merchant Center Feed Setup",
      "Google Performance Max",
      "Dynamic Retargeting",
      "Negative Placement Cleaning",
      "SKU Margin Bidding",
      "Weekly Revenue Tracking",
    ],
    fullInclusions: [
      "Google Merchant Center Approval & Product Feed Optimization",
      "Performance Max (PMax) Campaigns with High-Converting Asset Groups",
      "Dynamic Display Retargeting Across YouTube & Google Network",
      "Exclusion of Low-Margin & Out-of-Stock SKUs from Ad Spend",
      "Smart Bidding ROAS Threshold Calibration",
      "Weekly Real-Time E-commerce Purchase & Revenue Reconciliation",
    ],
    whatsappMessage:
      "Hello, I am interested in E-Commerce PPC (₹19,999/month). Please share more details and a quotation.",
    iconName: "DollarSign",
  },
  {
    id: "shopify-seo",
    name: "Shopify SEO",
    categoryId: "e-commerce",
    categoryName: "E-Commerce",
    shortDesc:
      "Overcome Shopify-specific technical SEO limitations and drive sustained organic traffic to your store.",
    fullDesc:
      "Eliminate duplicate URL paths, optimize Liquid templates, build collection keyword silos, and dominate organic search results on Google.",
    startingPrice: "₹19,999",
    priceNumeric: 19999,
    currency: "₹",
    billingType: "/month",
    status: "active",
    displayOrder: 22,
    badge: "Shopify Core",
    inclusions: [
      "Shopify URL Structure Fixes",
      "Collection Page SEO",
      "Product Schema Data",
      "Liquid Speed Optimization",
      "E-commerce Blog Strategy",
      "Search Console Sync",
    ],
    fullInclusions: [
      "Remediation of Shopify /collections/product Duplicate Canonical Paths",
      "Collection Title & Meta Hierarchy for Commercial Keywords",
      "Product Structured Data Schema Validation for Rich Stars",
      "Cleanup of Unused Shopify App Scripts to Accelerate PageSpeed",
      "High-Intent Buyer Guide Blog Strategy to Channel Inbound Shoppers",
      "Ongoing Keyword Ranking & Organic Revenue Reporting",
    ],
    whatsappMessage:
      "Hello, I am interested in Shopify SEO (₹19,999/month). Please share more details and a quotation.",
    iconName: "Search",
  },

  // SECTION 05 — BRANDING & CREATIVE
  {
    id: "brand-management",
    name: "Brand Management",
    categoryId: "branding-creative",
    categoryName: "Branding & Creative",
    shortDesc:
      "Strategic brand governance, creative asset direction, reputation monitoring, and market positioning.",
    fullDesc:
      "Preserve brand prestige and visual consistency across all digital touchpoints while continually producing high-impact marketing collateral.",
    startingPrice: "₹19,999",
    priceNumeric: 19999,
    currency: "₹",
    billingType: "/month",
    status: "active",
    displayOrder: 23,
    badge: "Prestige",
    inclusions: [
      "Brand Voice & Governance",
      "Creative Asset Direction",
      "Reputation & Review Monitoring",
      "Multi-Channel Consistency",
      "Monthly Creative Sprints",
    ],
    fullInclusions: [
      "Brand Tone of Voice & Visual Stylebook Enforcement",
      "Executive Creative Direction for Digital & Print Collateral",
      "Online Reputation Monitoring & Sentiment Analysis",
      "Cross-Platform Visual Alignment (Social, Web, Email, Packaging)",
      "Monthly High-Impact Creative Production Sprints",
      "Quarterly Brand Equity & Market Positioning Review",
    ],
    whatsappMessage:
      "Hello, I am interested in Brand Management (₹19,999/month). Please share more details and a quotation.",
    iconName: "Award",
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    categoryId: "branding-creative",
    categoryName: "Branding & Creative",
    shortDesc:
      "High-resolution bespoke creative graphics for social media, print, banners, and advertising campaigns.",
    fullDesc:
      "Polished direct-response visual assets crafted by senior designers with fast turnaround and complete source files included.",
    startingPrice: "₹599",
    priceNumeric: 599,
    currency: "₹",
    billingType: "/design",
    status: "active",
    displayOrder: 24,
    badge: "On-Demand",
    inclusions: [
      "Custom High-Res Graphic",
      "Social Media / Print Ready",
      "Source Files (AI/PSD/Figma)",
      "Up to 2 Free Revisions",
      "24–48 Hour Turnaround",
    ],
    fullInclusions: [
      "100% Bespoke High-Resolution Creative Artwork",
      "Exported in Web-Optimized (PNG, JPG) & Print-Ready (PDF) Formats",
      "Layered Master Source Files Included (Adobe Illustrator / Photoshop / Figma)",
      "Up to 2 Rounds of Iterations and Revisions",
      "Quick 24 to 48-Hour Turnaround Time",
      "Full Commercial Use & Copyright Rights",
    ],
    whatsappMessage:
      "Hello, I am interested in Graphic Design (₹599/design). Please share more details and a quotation.",
    iconName: "Palette",
  },
  {
    id: "logo-design",
    name: "Logo Design",
    categoryId: "branding-creative",
    categoryName: "Branding & Creative",
    shortDesc:
      "Distinctive, memorable vector brand marks crafted with complete source files and brand applications.",
    fullDesc:
      "Professional identity design delivering 3 original creative concepts, vector scalability, color variations, and social profile assets.",
    startingPrice: "₹2,999",
    priceNumeric: 2999,
    currency: "₹",
    billingType: "/project",
    featured: true,
    status: "active",
    displayOrder: 25,
    badge: "Visual Identity",
    inclusions: [
      "3 Distinct Concepts",
      "Vector Master Files",
      "Light & Dark Variations",
      "Social Profile Icons",
      "Commercial Copyright Transfer",
    ],
    fullInclusions: [
      "3 Distinct Strategic Logo Concepts based on Market Research",
      "Scalable Vector Master Files (AI, EPS, SVG, High-Res PNG, PDF)",
      "Color Inverted Formats for Light, Dark & Transparent Backgrounds",
      "Social Media Profile Avatar & Favicon Formats",
      "Black & White Single-Color Monochrome Versatility",
      "100% Commercial Copyright Ownership Document",
    ],
    whatsappMessage:
      "Hello, I am interested in Logo Design (₹2,999/project). Please share more details and a quotation.",
    iconName: "Star",
  },
  {
    id: "video-production-editing",
    name: "Video Production / Editing",
    categoryId: "branding-creative",
    categoryName: "Branding & Creative",
    shortDesc:
      "Dynamic high-definition video editing with sound design, color grading, and captivating motion subtitles.",
    fullDesc:
      "Transform raw footage into viral, retention-grabbing video content tailored for Instagram Reels, YouTube Shorts, and paid video advertisements.",
    startingPrice: "₹3,999",
    priceNumeric: 3999,
    currency: "₹",
    billingType: "/video",
    status: "active",
    displayOrder: 26,
    badge: "High Engagement",
    inclusions: [
      "1080p / 4K Master Edit",
      "Color Grading & Sound Design",
      "Dynamic Subtitles & Motion Text",
      "Royalty-Free Music",
      "Reels / Shorts Formatting",
    ],
    fullInclusions: [
      "Precision Pacing, Cutaways & B-Roll Sequencing",
      "Cinematic Color Correction & Audio Noise Cleanup",
      "Engaging Animated Subtitles, Kinetic Typography & Sound Effects",
      "Licensed Commercial Royalty-Free Background Music",
      "Multi-Format Exports (9:16 Vertical & 16:9 Landscape)",
      "Up to 2 Iteration Rounds for Client Sign-off",
    ],
    whatsappMessage:
      "Hello, I am interested in Video Production / Editing (₹3,999/video). Please share more details and a quotation.",
    iconName: "Film",
  },
  {
    id: "professional-photography",
    name: "Professional Photography",
    categoryId: "branding-creative",
    categoryName: "Branding & Creative",
    shortDesc:
      "On-location or studio commercial shoot capturing high-resolution brand, team, and infrastructure imagery.",
    fullDesc:
      "Elevate your digital presence with authentic, magazine-grade photography using professional studio lighting and prime optics.",
    startingPrice: "₹9,999",
    priceNumeric: 9999,
    currency: "₹",
    billingType: "/session",
    status: "active",
    displayOrder: 27,
    badge: "Studio Shoot",
    inclusions: [
      "On-Location / Studio Shoot",
      "Pro Lighting & Camera Rig",
      "25–40 High-End Retouched Photos",
      "Commercial Usage Rights",
      "High-Res Digital Delivery",
    ],
    fullInclusions: [
      "Half-Day Photography Session (Up to 4 Hours) on Location or Studio",
      "Full Pro Cinema Camera Rig & Controlled Strobe Lighting",
      "25 to 40 Color-Graded & Skin-Retouched Master Photographs",
      "Full Commercial & Advertising Usage Rights in Perpetuity",
      "High-Resolution Print & Web-Optimized Digital File Delivery",
      "Pre-Shoot Creative Moodboard & Shot-List Direction",
    ],
    whatsappMessage:
      "Hello, I am interested in Professional Photography (₹9,999/session). Please share more details and a quotation.",
    iconName: "Camera",
  },
  {
    id: "product-photography",
    name: "Product Photography",
    categoryId: "branding-creative",
    categoryName: "Branding & Creative",
    shortDesc:
      "Clean studio product shots with pure white backgrounds, multi-angles, and transparent cutouts.",
    fullDesc:
      "Pristine e-commerce catalog photography meeting strict Shopify and Amazon image standards with meticulous reflection management and dust removal.",
    startingPrice: "₹999",
    priceNumeric: 999,
    currency: "₹",
    billingType: "/product",
    status: "active",
    displayOrder: 28,
    badge: "E-com Ready",
    inclusions: [
      "Pure White Background",
      "3–5 Angles Per Product",
      "High-End Dust Removal & Retouching",
      "Shopify / Amazon Dimension Ready",
      "Transparent PNG Cutouts",
    ],
    fullInclusions: [
      "Studio Shoot with Controlled Light Box & Diffused Highlights",
      "3 to 5 Multi-Angle Hero Shots Per Product (Front, Side, Macro Detail)",
      "High-End Skinning, Dust & Scratch Retouching",
      "100% Pure White (RGB 255,255,255) & Transparent PNG Formats",
      "Pre-Cropped to 2000x2000px for Amazon/Shopify Zoom Functionality",
      "Fast 3 to 5 Day Delivery Timeline",
    ],
    whatsappMessage:
      "Hello, I am interested in Product Photography (₹999/product). Please share more details and a quotation.",
    iconName: "Sparkles",
  },

  // SECTION 06 — AMAZON SERVICES
  {
    id: "amazon-marketing",
    name: "Amazon Marketing",
    categoryId: "amazon",
    categoryName: "Amazon",
    shortDesc:
      "Full Amazon Seller Central store management, Buy Box protection, promotions, and sales acceleration.",
    fullDesc:
      "Comprehensive Amazon business growth covering account health, deals/coupons, inventory forecasting, and customer review acceleration.",
    startingPrice: "₹24,999",
    priceNumeric: 24999,
    currency: "₹",
    billingType: "/month",
    featured: true,
    status: "active",
    displayOrder: 29,
    badge: "Seller Central",
    inclusions: [
      "Seller Central Management",
      "Buy Box Monitoring",
      "Promotions & Coupons",
      "Review Strategy & Follow-up",
      "Monthly Profitability Reports",
    ],
    fullInclusions: [
      "Complete Daily Seller Central Monitoring & Account Health Health Check",
      "Buy Box Suppression Troubleshooting & Price Parity Management",
      "Lightning Deals, Coupons & Prime Exclusive Discount Setup",
      "Compliant Review Request Automation (Amazon Vine & Brand Dashboard)",
      "Inventory Stock-Out Alerts & Restock Recommendations",
      "Monthly Sales Velocity, Net Margins & Growth Scorecard",
    ],
    whatsappMessage:
      "Hello, I am interested in Amazon Marketing (₹24,999/month). Please share more details and a quotation.",
    iconName: "Zap",
  },
  {
    id: "amazon-seo",
    name: "Amazon SEO",
    categoryId: "amazon",
    categoryName: "Amazon",
    shortDesc:
      "A9/Cosmo algorithm ranking optimization for titles, bullets, backend search terms, and A+ Content.",
    fullDesc:
      "Propel product listings to Page 1 of Amazon searches with reverse-ASIN competitor keyword research, backend attribute optimization, and conversion-rich A+ design.",
    startingPrice: "₹19,999",
    priceNumeric: 19999,
    currency: "₹",
    billingType: "/month",
    status: "active",
    displayOrder: 30,
    badge: "Organic Page 1",
    inclusions: [
      "A9/Cosmo Search Algorithm Optimization",
      "Title, Bullets & Backend Search Terms",
      "A+ Content (EBC) Design",
      "Competitor ASIN Keyword Scraping",
      "Category Ranking Elevation",
    ],
    fullInclusions: [
      "Helium10 / JungleScout Deep Search Volume & Competitor ASIN Teardown",
      "High-Converting Title Formulation (Brand, Material, Features, Benefit)",
      "5 Strategic Benefit-Driven Bullet Points with High Keyword Density",
      "249-Byte Backend Search Term & Hidden Attribute Optimization",
      "A+ Content / Enhanced Brand Content (EBC) Visual Storytelling Layouts",
      "Category BSR (Best Seller Rank) Elevation Tracking",
    ],
    whatsappMessage:
      "Hello, I am interested in Amazon SEO (₹19,999/month). Please share more details and a quotation.",
    iconName: "Search",
  },
  {
    id: "amazon-ppc-advertising",
    name: "Amazon PPC / Advertising",
    categoryId: "amazon",
    categoryName: "Amazon",
    shortDesc:
      "Sponsored Products, Sponsored Brands, and Sponsored Display ads optimized for low TACOS and high profit.",
    fullDesc:
      "Disciplined Amazon PPC media buying using negative keyword isolation, ASIN conquesting, dayparting, and automated bid adjustments.",
    startingPrice: "₹29,999",
    priceNumeric: 29999,
    currency: "₹",
    billingType: "/month",
    status: "active",
    displayOrder: 31,
    badge: "Low ACOS",
    inclusions: [
      "Sponsored Products, Brands & Display",
      "Keyword Harvesting & Negative Targeting",
      "TACOS & ACOS Optimization",
      "Bid Automation & Dayparting",
      "Video Ad Campaign Setup",
    ],
    fullInclusions: [
      "Campaign Architecture Separation (Exact, Phrase, Broad & Auto Harvest)",
      "Competitor ASIN Product Targeting & Defense Placements",
      "Aggressive Negative Keyword Scrubbing to Protect Advertising Budget",
      "Target ACOS (Advertising Cost of Sales) Calibration per Product Lifecycle",
      "Amazon Sponsored Brand Video Ad Campaign Deployment",
      "Weekly Spend, Attributed Revenue & TACOS Performance Reports",
    ],
    whatsappMessage:
      "Hello, I am interested in Amazon PPC / Advertising (₹29,999/month). Please share more details and a quotation.",
    iconName: "DollarSign",
  },
  {
    id: "amazon-post-management",
    name: "Amazon Post Management",
    categoryId: "amazon",
    categoryName: "Amazon",
    shortDesc:
      "Regular Amazon feed lifestyle posts, tagged product SKUs, and brand follower growth on Amazon.",
    fullDesc:
      "Harness free organic discovery on Amazon with daily curated visual lifestyle posts that cross-promote related SKUs and build your brand storefront following.",
    startingPrice: "₹9,999",
    priceNumeric: 9999,
    currency: "₹",
    billingType: "/month",
    status: "active",
    displayOrder: 32,
    badge: "Storefront Feed",
    inclusions: [
      "Daily / Weekly Amazon Feed Posts",
      "Lifestyle Imagery & Tagged SKUs",
      "Follower Growth on Amazon",
      "Storefront Feed Integration",
      "Engagement Analytics",
    ],
    fullInclusions: [
      "Curated Lifestyle Product Posts Scheduled into Amazon Brand Feed",
      "Direct Product Tagging (Multi-SKU Linking)",
      "Brand Follower Growth Strategy on Amazon Platform",
      "Cross-Placement on Competitor Product Pages via Amazon Feed Algorithm",
      "Integration with Amazon Brand Storefront Pages",
      "Monthly Impressions, Clicks & Attributed In-Feed Revenue Analytics",
    ],
    whatsappMessage:
      "Hello, I am interested in Amazon Post Management (₹9,999/month). Please share more details and a quotation.",
    iconName: "Share2",
  },

  // SECTION 07 — WEDDING CREATIVE
  {
    id: "wedding-video-editing",
    name: "Wedding Video Editing",
    categoryId: "wedding-creative",
    categoryName: "Wedding Creative",
    shortDesc:
      "Multi-camera ceremony editing, cinematic color correction, ritual audio cleanup, and full HD delivery.",
    fullDesc:
      "Crafting timeless wedding memories with elegant multi-cam sync, beautiful traditional/modern background score, and crisp ritual dialogue editing.",
    startingPrice: "₹4,999",
    priceNumeric: 4999,
    currency: "₹",
    billingType: "/project",
    status: "active",
    displayOrder: 33,
    badge: "Cinematic Edit",
    inclusions: [
      "Multi-Camera Sync & Cutting",
      "Traditional / Modern Ceremony Edit",
      "Cinematic Color Correction",
      "Audio Cleaning & Music Mixing",
      "Full HD Master Delivery",
    ],
    fullInclusions: [
      "Multi-Camera Audio & Video Synchronization",
      "Chronological Ceremony Flow (Haldi, Mehendi, Sangeet, Wedding, Reception)",
      "Cinematic Color Correction & Skin Tone Softening",
      "Mantra & Dialogue Noise Reduction with Custom Musical Scoring",
      "Full HD 1080p Master Digital Export",
      "Up to 2 Client Revision Rounds",
    ],
    whatsappMessage:
      "Hello, I am interested in Wedding Video Editing (₹4,999/project). Please share more details and a quotation.",
    iconName: "Film",
  },
  {
    id: "wedding-highlight-cinematic-editing",
    name: "Wedding Highlight / Cinematic Editing",
    categoryId: "wedding-creative",
    categoryName: "Wedding Creative",
    shortDesc:
      "3–5 minute emotional cinematic story highlight with 4K color grading, drone footage, and Instagram teaser.",
    fullDesc:
      "A captivating emotional cinematic masterpiece encapsulating the most touching moments, vows, slow-motion drone shots, and heartfelt smiles.",
    startingPrice: "₹9,999",
    priceNumeric: 9999,
    currency: "₹",
    billingType: "/project",
    featured: true,
    status: "active",
    displayOrder: 34,
    badge: "Emotional Story",
    inclusions: [
      "3–5 Minute Cinematic Highlight",
      "4K Master Color Grading",
      "Drone & Slow-Motion Integration",
      "Royalty-Free Premium Soundtracks",
      "Vertical Instagram Teaser Reel",
    ],
    fullInclusions: [
      "3 to 5-Minute High-Impact Storyline Highlight Video",
      "Premium 4K Color Grading Matching Bollywood / Luxury Film Aesthetic",
      "Drone Footage Stabilization & Cinematic Speed Ramping",
      "Royalty-Free Curated Emotional Indian & International Soundtracks",
      "60-Second Vertical Instagram Teaser Reel Included",
      "Custom Title Typography & Gold Wedding Monogram Animation",
    ],
    whatsappMessage:
      "Hello, I am interested in Wedding Highlight / Cinematic Editing (₹9,999/project). Please share more details and a quotation.",
    iconName: "Heart",
  },
  {
    id: "wedding-album-design",
    name: "Wedding Album Design",
    categoryId: "wedding-creative",
    categoryName: "Wedding Creative",
    shortDesc:
      "30–40 page custom photo album design with clean layout, storytelling, and high-res print spreads.",
    fullDesc:
      "Clean, elegant chronological album layout designed with spacious padding, color harmonization, and print-ready high-resolution spreads.",
    startingPrice: "₹4,999",
    priceNumeric: 4999,
    currency: "₹",
    billingType: "/project",
    status: "active",
    displayOrder: 35,
    badge: "Clean Album",
    inclusions: [
      "30–40 Page Custom Clean Layout",
      "Chronological Event Storytelling",
      "Color Correction for Selected Photos",
      "Print-Ready High-Res Spreads",
      "Up to 3 Iteration Rounds",
    ],
    fullInclusions: [
      "30 to 40 Custom Designed Spreads (60 to 80 Pages)",
      "Sophisticated Negative Space Layout (No Cluttered Clipart)",
      "Basic Exposure & Color Balancing on Selected Master Images",
      "High-Resolution 300 DPI Print-Ready Spreads for Lab Printing",
      "Up to 3 Iteration & Photo Swap Rounds with Couple",
      "Digital Interactive Flipbook Link for Easy Mobile Sharing",
    ],
    whatsappMessage:
      "Hello, I am interested in Wedding Album Design (₹4,999/project). Please share more details and a quotation.",
    iconName: "Palette",
  },
  {
    id: "premium-luxury-album-design",
    name: "Premium / Luxury Album Design",
    categoryId: "wedding-creative",
    categoryName: "Wedding Creative",
    shortDesc:
      "Royal gold embossing layout, 50+ spreads, skin retouching, and luxury acrylic cover template specs.",
    fullDesc:
      "The pinnacle of luxury coffee-table wedding albums. Bespoke typography, magazine retouching, royal velvet/acrylic cover design, and digital flipbook.",
    startingPrice: "₹9,999",
    priceNumeric: 9999,
    currency: "₹",
    billingType: "/project",
    featured: true,
    status: "active",
    displayOrder: 36,
    badge: "Royal Luxury",
    inclusions: [
      "Royal Gold Embossing Layout Design",
      "50+ Custom Designed Spreads",
      "High-End Skin & Beauty Retouching",
      "Velvet / Acrylic Cover Template Spec",
      "Digital Interactive Flipbook Included",
    ],
    fullInclusions: [
      "50+ Bespoke Spreads (100+ Album Pages) in Panoramic Luxury Layout",
      "Individual High-End Magazine Skin Retouching on Key Portraits",
      "Custom Foil & Royal Gold Embossed Monogram Cover Template",
      "Acrylic / Genuine Leather / Velvet Box Packaging Design Specs",
      "300 DPI Lab Print Master Files with Bleed & Color Proofing",
      "Lifetime Digital Cloud Flipbook for High-Resolution Family Access",
    ],
    whatsappMessage:
      "Hello, I am interested in Premium / Luxury Album Design (₹9,999/project). Please share more details and a quotation.",
    iconName: "Award",
  },
];

// Special Highlighted Subsections Data
export const BRAND_IDENTITY_ADDON = {
  title: "Brand Identity",
  startingPrice: "₹19,999",
  billingType: "/project",
  tagline: "Complete Foundation For High-End Commercial Distinction",
  description:
    "Everything your brand needs to project absolute authority across digital, print, and public channels.",
  inclusions: [
    "Logo Design (3 Concepts + Vectors)",
    "Colour Palette (Primary, Secondary & Accents)",
    "Typography Hierarchy (Headings & Body)",
    "Business Card & Stationery Design",
    "Letterhead & Envelope Design",
    "Social Media Profile Kit (Avatar & Banners)",
    "Basic Brand Guidelines Document (PDF)",
  ],
  whatsappMessage:
    "Hello, I am interested in the Brand Identity Add-On (Starting From ₹19,999). Please share more details.",
};

export const VIDEO_PRODUCTION_RATES = [
  {
    title: "Instagram Reel Editing",
    price: "₹999",
    unit: "/reel",
    desc: "Dynamic pacing, trending audio, viral captions, and color pop.",
  },
  {
    title: "Professional Video Editing",
    price: "₹4,999",
    unit: "/video",
    desc: "High-definition editing with sound design, transitions, and motion titles.",
  },
  {
    title: "Corporate Video",
    price: "₹14,999",
    unit: "/project",
    desc: "Polished company story, leadership interviews, and infrastructure overview.",
  },
  {
    title: "Promotional Video",
    price: "₹9,999",
    unit: "/project",
    desc: "High-conversion product or service launch commercial for paid ads.",
  },
  {
    title: "YouTube Video Editing",
    price: "₹2,999",
    unit: "/video",
    desc: "Long-form retention editing, sound effects, meme inserts, and end screens.",
  },
  {
    title: "Motion Graphics",
    price: "₹4,999",
    unit: "/video",
    desc: "2D vector animation, kinetic typography, logo reveals, and explainer scenes.",
  },
];

export const WEDDING_CREATIVE_PACKAGES: PricingPackageCatalogueItem[] = [
  {
    id: "wedding-cinematic-film-pkg",
    name: "Wedding Cinematic Film",
    startingPrice: "₹19,999",
    priceNumeric: 19999,
    billingPeriod: "/project",
    tagline: "A cinematic wedding masterpiece that feels like a private feature film.",
    badge: "Cinematic Masterpiece",
    status: "active",
    displayOrder: 1,
    features: [
      "Full 15–25 Min Cinematic Feature Film",
      "3–5 Min Emotional Highlight Reel",
      "60-Sec Instagram Teaser Reel",
      "Drone Footage Stabilization & Color Grading",
      "Master Audio Design & Dialogue Clarity",
      "4K Digital Master Delivery",
    ],
    disclaimerNote:
      "Printing, physical album, shooting, travel and additional revisions are charged separately.",
    buttonText: "Request Film Quotation",
    idealFor: "Couples wanting an emotional, movie-like record of their wedding.",
  },
  {
    id: "complete-wedding-creative-pkg",
    name: "Complete Wedding Creative Package",
    startingPrice: "₹29,999",
    priceNumeric: 29999,
    billingPeriod: "/project",
    tagline:
      "End-to-end post-production suite covering films, highlights, teasers, and royal album design.",
    badge: "All-In-One Creative",
    popular: true,
    status: "active",
    displayOrder: 2,
    features: [
      "Wedding Highlight (3–5 Min)",
      "Cinematic Video (15–25 Min)",
      "Teaser / Reel (Vertical 60-Sec)",
      "Luxury Album Design (40+ Spreads)",
      "Social Media Reels (3 Unique Edits)",
      "Royal Typography & Monogram Design",
      "Full HD & 4K Digital Master Delivery",
    ],
    disclaimerNote:
      "Printing, physical album, shooting, travel and additional revisions are charged separately.",
    buttonText: "Request Complete Package",
    idealFor: "Full post-production suite for luxury weddings and discerning couples.",
  },
];

// SECTION 08 — COMBO / RETAINER PACKAGES ("Digital Growth Packages")
export const DEFAULT_DIGITAL_GROWTH_PACKAGES: PricingPackageCatalogueItem[] = [
  {
    id: "startup-digital-package",
    name: "Startup Digital Package",
    startingPrice: "₹29,999",
    priceNumeric: 29999,
    billingPeriod: "One-Time Kickoff",
    tagline:
      "Complete launchpad for new businesses and local ventures to establish instant online authority.",
    badge: "Launchpad",
    status: "active",
    displayOrder: 1,
    features: [
      "Professional Logo Design (Vector Files)",
      "Responsive Business Website (5 Pages)",
      "Google Business Profile (GBP) 100% Setup",
      "Social Media Channels Setup (IG, FB, LinkedIn)",
      "10 Brand Social Media Launch Posts",
      "Direct WhatsApp Lead Capture Integration",
      "Basic On-Page SEO & Google Indexing",
      "1-on-1 Digital Growth Strategy Consultation",
    ],
    buttonText: "Start With Startup Package",
    idealFor:
      "New ventures, local clinics, retail shops, and startups seeking immediate market presence.",
  },
  {
    id: "business-growth-package",
    name: "Business Growth Package",
    startingPrice: "₹49,999",
    priceNumeric: 49999,
    billingPeriod: "/month",
    tagline:
      "High-velocity monthly digital marketing engine for consistent customer acquisition and social momentum.",
    badge: "Most Popular",
    popular: true,
    featured: true,
    status: "active",
    displayOrder: 2,
    features: [
      "Full Social Media Management (IG & FB)",
      "20 Custom High-Converting Posts",
      "8 Engaging Video Reels (Shot or Curated)",
      "Meta Ads Management (Strategy, Copy, ROAS)",
      "Google Business Profile (GBP) Optimization",
      "Basic SEO & Website Technical Health",
      "Content Strategy & Direct-Response Copy",
      "Dedicated Account Strategist & Monthly Report",
    ],
    buttonText: "Choose Business Growth",
    idealFor: "Growing SMBs, D2C brands, and service businesses wanting sustained inbound leads.",
  },
  {
    id: "performance-growth-package",
    name: "Performance Growth Package",
    startingPrice: "₹69,999",
    priceNumeric: 69999,
    billingPeriod: "/month",
    tagline:
      "Omnichannel market dominance combining multi-platform paid ads, advanced SEO, CRO, and custom funnels.",
    badge: "Market Dominance",
    status: "active",
    displayOrder: 3,
    features: [
      "Advanced Multi-Keyword SEO & Backlinks",
      "Meta Ads Management (Advantage+ & CAPI)",
      "Google Ads Management (Search & PMax)",
      "Full Social Media Management",
      "20 High-Converting Posts",
      "8 High-Production Video Reels",
      "Google Business Profile (GBP) Dominance",
      "Custom Dedicated Landing Page Build",
      "Conversion Rate Optimization (CRO)",
      "Weekly Executive Strategy & ROI Review",
    ],
    buttonText: "Scale With Performance Plan",
    idealFor:
      "Established brands, high-ticket services, and scaling D2C stores demanding maximum market share.",
  },
];

// LocalStorage Keys for dynamic Admin Management
const STORAGE_KEY_SERVICES = "digibasera_pricing_services_v2";
const STORAGE_KEY_PACKAGES = "digibasera_pricing_packages_v2";
const STORAGE_KEY_CATEGORIES = "digibasera_pricing_categories_v2";

// Load stored or fallback services
export function loadStoredPricingServices(): PricingServiceCatalogueItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SERVICES);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Error loading stored pricing services:", e);
  }
  return DEFAULT_PRICING_SERVICES;
}

// Save pricing services to localStorage
export function savePricingServices(services: PricingServiceCatalogueItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_SERVICES, JSON.stringify(services));
  } catch (e) {
    console.error("Error saving pricing services:", e);
  }
}

// Load stored or fallback packages
export function loadStoredPricingPackages(): PricingPackageCatalogueItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PACKAGES);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Error loading stored pricing packages:", e);
  }
  return DEFAULT_DIGITAL_GROWTH_PACKAGES;
}

// Save pricing packages to localStorage
export function savePricingPackages(packages: PricingPackageCatalogueItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_PACKAGES, JSON.stringify(packages));
  } catch (e) {
    console.error("Error saving pricing packages:", e);
  }
}

// Load stored or fallback categories
export function loadStoredPricingCategories(): PricingCategoryMeta[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CATEGORIES);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Error loading stored pricing categories:", e);
  }
  return DEFAULT_PRICING_CATEGORIES;
}

// Save pricing categories to localStorage
export function savePricingCategories(categories: PricingCategoryMeta[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_CATEGORIES, JSON.stringify(categories));
  } catch (e) {
    console.error("Error saving pricing categories:", e);
  }
}

// Reset everything to factory defaults
export function resetPricingToFactoryDefaults(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_SERVICES);
    localStorage.removeItem(STORAGE_KEY_PACKAGES);
    localStorage.removeItem(STORAGE_KEY_CATEGORIES);
  } catch (e) {
    console.error("Error resetting pricing data:", e);
  }
}
