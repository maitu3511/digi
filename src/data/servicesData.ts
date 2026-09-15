import facebookAdsImg from "../assets/services/facebook-ads.jpg";
import ecommercePpcImg from "../assets/services/ecommerce-ppc.jpg";
import linkBuildingImg from "../assets/services/link-building.jpg";
import franchiseSeoImg from "../assets/services/franchise-seo.jpg";
import aiMarketingImg from "../assets/services/ai-marketing.jpg";
import { ServiceCategory, ServiceItem } from "../types";

export interface MainServiceCatalogueItem extends ServiceCategory {
  startingPrice: string;
  benefits: string[];
  keyServicesList: string[];
  fullDescription?: string;
  status: "active" | "hidden";
  displayOrder: number;
  seoTitle?: string;
  seoDescription?: string;
}

export const MAIN_SERVICES_STORAGE_KEY = "digibasera_main_services_v14";

export const DEFAULT_MAIN_SERVICES: MainServiceCatalogueItem[] = [
  // ==========================================
  // 01 — DIGITAL MARKETING
  // ==========================================
  {
    id: "digital-marketing",
    number: "01",
    title: "DIGITAL MARKETING",
    badge: "Omni-Channel Scale",
    shortDescription:
      "Holistic digital marketing strategy, performance marketing, high-intent lead generation funnels, marketing analytics, and AI-powered growth systems.",
    fullDescription:
      "We build end-to-end commercial blueprints tailored to your business model, customer buying psychology, and market benchmarks. We identify underperforming channels, allocate ad budgets with mathematical precision, and build multi-touch acquisition funnels that scale revenue.",
    iconName: "Compass",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Ads",
    startingPrice: "₹19,999/month",
    benefits: [
      "Data-Driven 360° Growth Strategy & Commercial Blueprints",
      "Multi-Channel Lead Generation with 2-Step OTP Validation",
      "Unified Looker Studio Real-Time Analytics & Attribution",
      "AI-Powered Customer Journey & Conversion Personalization",
    ],
    keyServicesList: [
      "Digital Marketing Strategy",
      "Performance Marketing",
      "Lead Generation",
      "Marketing Analytics",
      "AI-Powered Marketing",
      "Email Marketing",
    ],
    status: "active",
    displayOrder: 1,
    seoTitle: "Digital Marketing Services & Performance Growth | DigiBasera",
    seoDescription:
      "Scale your business with full-funnel digital marketing strategies, high-intent lead generation, and performance analytics.",
    services: [
      {
        id: "digital-marketing-strategy",
        title: "Digital Marketing Strategy",
        shortDesc:
          "Comprehensive commercial roadmaps aligning your business goals with high-converting digital marketing channels.",
        description:
          "We develop end-to-end commercial blueprints tailored to your business model, customer buying psychology, and market benchmarks. We identify underperforming channels, allocate ad budgets with mathematical precision, and build multi-touch acquisition funnels.",
        iconName: "Compass",
        imageUrl:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "Competitor Benchmarking & TAM Market Analysis",
          "Customer Persona & Buying Journey Mapping",
          "Multi-Channel Budget Allocation Matrix",
          "Growth KPI Dashboard & Attribution Modeling",
        ],
        idealFor:
          "Businesses, startups, and growing brands needing a structured, revenue-aligned digital roadmap rather than random marketing tactics.",
        roiImpact:
          "Eliminates ad waste and focuses budget strictly on high-yield commercial channels.",
        targetOutcome:
          "Predictable 12-month customer acquisition framework with positive unit economics.",
        timeline: "7 - 14 Days Blueprint + Monthly Execution",
        toolsUsed: ["Google Analytics 4", "SEMrush", "SimilarWeb", "Looker Studio", "HubSpot"],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["real-estate-leads", "ecom-fashion-scale"],
      },
      {
        id: "performance-marketing",
        title: "Performance Marketing",
        shortDesc:
          "Data-driven paid media execution focused on cost-per-acquisition (CPA), conversion rates, and sustainable ROAS.",
        description:
          "Performance marketing built on rapid creative testing, algorithmic bidding, and deep funnel tracking across Google, Meta, and native networks. Designed for maximum capital efficiency and scalable ROI.",
        iconName: "TrendingUp",
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹24,999/month",
        deliverables: [
          "Full-Funnel Paid Acquisition Architecture (TOF / MOF / BOF)",
          "Algorithmic tCPA and tROAS Bidding Strategy Calibration",
          "Weekly Creative Angle & Video Hook Sprints",
          "Real-time Conversion Tracking & Offline Attribution",
        ],
        idealFor:
          "D2C brands, high-ticket services, and scaling enterprises requiring disciplined, scalable performance advertising.",
        roiImpact:
          "Continuously lowers Customer Acquisition Cost (CAC) while scaling top-line revenue.",
        targetOutcome: "Targeted ROAS optimization with full attribution transparency.",
        timeline: "Ongoing Growth Cadence",
        toolsUsed: ["Meta Ads Manager", "Google Ads", "Triple Whale", "AppsFlyer", "Looker Studio"],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["ecom-fashion-scale", "luxury-hospitality-brand"],
      },
      {
        id: "lead-generation",
        title: "Lead Generation",
        shortDesc:
          "Turn cold online traffic into qualified sales inquiries with high-converting landing pages and instant WhatsApp/CRM routing.",
        description:
          "Turn digital visitors into pre-screened sales opportunities. We build high-converting landing pages, interactive lead-qualification forms, 2-step OTP verification, and instant WhatsApp/CRM integrations so your sales team talks only to real buyers.",
        iconName: "Target",
        imageUrl:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "Custom High-Converting Dedicated Landing Pages",
          "2-Step Lead Qualification & OTP Verification Forms",
          "Instant WhatsApp Business & CRM Automated Routing",
          "Automated Email/SMS Follow-up Drip Sequences",
        ],
        idealFor:
          "B2B enterprises, Real Estate Developers, Healthcare Networks, Higher Education & Professional Consultants.",
        roiImpact:
          "Steady stream of verified, high-intent sales inquiries with minimal junk leads.",
        targetOutcome:
          "50% to 70% reduction in invalid inquiries and instant sub-1-minute lead response times.",
        timeline: "Launch in 7-10 Days + Monthly Pipeline Management",
        toolsUsed: [
          "Unbounce",
          "Webflow",
          "Zapier / Make",
          "WhatsApp Cloud API",
          "Zoho / Salesforce",
        ],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["real-estate-leads", "b2b-industrial-seo"],
      },
      {
        id: "marketing-analytics",
        title: "Marketing Analytics",
        shortDesc:
          "Unified Looker Studio dashboards, Google Analytics 4 tracking, and cross-channel conversion attribution.",
        description:
          "Gain absolute clarity over every marketing rupee spent. We configure server-side Google Tag Manager, custom GA4 event tracking, cross-domain attribution, and automated Looker Studio executive dashboards.",
        iconName: "Sliders",
        imageUrl:
          "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Custom Looker Studio Executive Business Dashboards",
          "Google Analytics 4 & Server-Side GTM Setup",
          "Multi-Touch Channel Attribution Modeling",
          "Automated Weekly Scheduled PDF KPI Reports",
        ],
        idealFor:
          "Founders, CMOs, and Marketing Directors who need transparent, real-time ROI tracking.",
        roiImpact: "Eliminates guesswork, exposing exactly which campaigns generate revenue.",
        targetOutcome: "100% accurate conversion tracking and crystal-clear business attribution.",
        timeline: "Setup in 5-7 Days + Monthly Maintenance",
        toolsUsed: [
          "Google Analytics 4",
          "Google Tag Manager",
          "Looker Studio",
          "BigQuery",
          "Supermetrics",
        ],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["fintech-corporate-portal", "ecom-fashion-scale"],
      },
      {
        id: "ai-powered-marketing",
        title: "AI-Powered Marketing",
        shortDesc:
          "Automated workflow engines, predictive customer segmentation, and AI-driven dynamic personalization.",
        description:
          "Leverage modern artificial intelligence to automate customer journeys, generate high-converting ad variations, optimize predictive email triggers, and enhance customer interaction across digital channels.",
        iconName: "Bot",
        imageUrl: aiMarketingImg,
        pricingStartingAt: "₹24,999/month",
        deliverables: [
          "AI-Powered Predictive Customer Segmentation",
          "Dynamic Creative Variations & Automated Copy Testing",
          "Intelligent Chatbot & WhatsApp AI Assistant Integration",
          "Predictive Churn & LTV Optimization Models",
        ],
        idealFor: "Modern e-commerce brands, tech ventures, and forward-thinking enterprises.",
        roiImpact:
          "Multiplies marketing productivity while personalizing customer experiences at scale.",
        targetOutcome:
          "High-speed automated experimentation and lower customer acquisition friction.",
        timeline: "2 - 3 Weeks Setup + Ongoing Optimization",
        toolsUsed: ["Gemini API", "OpenAI API", "Klaviyo AI", "Make.com", "Python"],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["ecom-fashion-scale", "fintech-corporate-portal"],
      },
      {
        id: "email-marketing",
        title: "Email Marketing",
        shortDesc:
          "Automated lifecycle email flows, high-converting newsletters, abandoned cart recovery, and list segmentation that turns subscribers into repeat buyers.",
        description:
          "Turn subscribers and past buyers into predictable, recurring revenue. We build end-to-end automated email engines including welcome nurture flows, browse & cart abandonment triggers, VIP reward sequences, and high-converting broadcast campaigns with rigorous inbox deliverability optimization.",
        iconName: "Mail",
        imageUrl:
          "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹9,999/month",
        deliverables: [
          "Automated Lifecycle Sequences (Welcome Drips, Browse & Cart Abandonment)",
          "VIP Retention, Win-Back & Customer Re-Engagement Flows",
          "Mobile-Responsive Custom HTML Email Template Design & Copywriting",
          "Behavioral Audience Segmentation & RFM Purchase Frequency Tagging",
          "Deliverability & Domain Authentication Setup (SPF, DKIM, DMARC, BIMI)",
          "A/B Split Testing on Subject Lines, Preheaders & Send Time Optimization",
        ],
        idealFor:
          "D2C brands, E-commerce stores, B2B companies, SaaS products, and service businesses wanting automated repeat sales without extra ad spend.",
        roiImpact:
          "Generates 20% to 35% of total business revenue on autopilot through retention marketing.",
        targetOutcome:
          "30%+ open rates, 3.5%+ click-through rates, and consistent sub-0.5% unsubscribe hygiene.",
        timeline: "Setup & Flow Launch in 7-10 Days + Weekly Campaign Execution",
        toolsUsed: ["Klaviyo", "Mailchimp", "Brevo", "Figma", "Omnisend", "ZeroBounce"],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["ecom-fashion-scale", "luxury-hospitality-brand"],
      },
    ],
  },

  // ==========================================
  // 02 — SEO & AI SEARCH
  // ==========================================
  {
    id: "seo",
    number: "02",
    title: "SEO & AI SEARCH",
    badge: "Search Engine Dominance",
    shortDescription:
      "Secure top page 1 Google rankings, dominate Google Maps 3-Pack, and gain authoritative citation in AI search engines (ChatGPT, Perplexity, and AI Overviews).",
    fullDescription:
      "Holistic white-hat search engine optimization and generative engine optimization (GEO). We eliminate technical bottlenecks, build authoritative topical clusters, earn high-tier backlinks, and optimize your brand entity for inclusion in AI models like ChatGPT, Perplexity, and Google AI Overviews.",
    iconName: "Search",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "SEO",
    startingPrice: "₹14,999/month",
    benefits: [
      "Page 1 Google Commercial Keyword Dominance",
      "Google Maps & Google Business 3-Pack Supremacy",
      "Core Web Vitals & Technical Speed Architecture",
      "Generative Engine Optimization (GEO) for ChatGPT & Perplexity",
    ],
    keyServicesList: [
      "SEO Services",
      "Local SEO",
      "Technical SEO",
      "Link Building",
      "SEO Content Writing",
      "Franchise SEO",
      "Conversion Rate Optimization",
      "AI Search Optimization / GEO",
    ],
    status: "active",
    displayOrder: 2,
    seoTitle: "SEO & AI Search Optimization (GEO) Services | DigiBasera",
    seoDescription:
      "Dominate Google organic rankings and AI search citations (ChatGPT & Perplexity) with comprehensive white-hat SEO.",
    services: [
      {
        id: "seo-services-core",
        title: "SEO Services",
        shortDesc:
          "Comprehensive monthly search optimization to elevate organic ranking authority and capture continuous inbound buyers.",
        description:
          "End-to-end multi-pillar SEO engine covering exhaustive keyword research, on-page optimization, topical content clusters, and high-quality backlink growth.",
        iconName: "SearchCheck",
        imageUrl:
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Exhaustive 150-Point Technical & On-Page SEO Audit",
          "High-Intent Commercial Keyword Opportunity Mapping",
          "Topical Authority Content Strategy & Internal Linking",
          "Monthly Ranking Progress & Traffic Analytics Reports",
        ],
        idealFor:
          "Businesses looking for sustainable, compounding organic search traffic that reduces dependence on paid ads.",
        roiImpact: "Continuous long-term inbound traffic flow without paying for ad clicks.",
        targetOutcome:
          "Top 3 Google positions for high-commercial search queries within 90-180 days.",
        timeline: "Monthly Compounding Cadence",
        toolsUsed: ["Ahrefs", "SEMrush", "Google Search Console", "Surfer SEO"],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["b2b-industrial-seo", "healthcare-clinic-growth"],
      },
      {
        id: "local-seo",
        title: "Local SEO & Google Business Profile",
        shortDesc:
          'Dominate Google Maps "3-pack" and local search results in your target cities and geographical regions.',
        description:
          "Capture high-intent local customers right when they search for services near them. We optimize your Google Business Profile, verify local citations (NAP), build localized area landing pages, and boost review velocity.",
        iconName: "MapPin",
        imageUrl:
          "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹9,999/month",
        deliverables: [
          "100% Google Business Profile Optimization & Verification",
          "Local Citations & NAP Consistency Synchronization",
          "Geo-Targeted City/Neighborhood Landing Pages",
          "Automated Customer Review Generation Strategy",
        ],
        idealFor:
          "Clinics, hospitals, retail showrooms, regional distributors, real estate promoters, and local professionals.",
        roiImpact:
          "Direct local phone calls, store footfall visits, and localized appointment bookings.",
        targetOutcome: "#1 rank in Google Maps 3-pack across target local keywords.",
        timeline: "30 - 60 Days to 3-Pack Dominance",
        toolsUsed: ["BrightLocal", "Google Business Profile Manager", "GeoImgr", "Whitespark"],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["healthcare-clinic-growth", "real-estate-leads"],
      },
      {
        id: "technical-seo",
        title: "Technical SEO",
        shortDesc:
          "Core Web Vitals remediation, schema markup architecture, crawl budget optimization, and site speed enhancement.",
        description:
          "Ensure search engine crawlers effortlessly index and understand your website. We resolve indexation errors, optimize Core Web Vitals (LCP, INP, CLS), inject rich JSON-LD schema, and build clean XML sitemaps.",
        iconName: "Cpu",
        imageUrl:
          "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Core Web Vitals Remediation (95+ Lighthouse Score)",
          "JSON-LD Schema Markup (Organization, Product, FAQ, LocalBusiness)",
          "Crawl Budget, Canonical & XML Sitemap Architecture",
          "Mobile Responsiveness & Indexation Barrier Removal",
        ],
        idealFor:
          "Complex web platforms, e-commerce stores, and corporate websites needing clean indexation.",
        roiImpact:
          "Faster crawling, instant indexing, and higher ranking potential across search engines.",
        targetOutcome: "100% healthy crawl status in Google Search Console.",
        timeline: "14 Days Technical Sprint + Monthly Monitoring",
        toolsUsed: ["Screaming Frog", "Google Search Console", "PageSpeed Insights", "Schema App"],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["fintech-corporate-portal", "b2b-industrial-seo"],
      },
      {
        id: "link-building",
        title: "Link Building & Digital PR",
        shortDesc:
          "High-DA white-hat editorial backlinks, guest features, and digital PR that build unbreakable domain authority.",
        description:
          "Earn high-authority editorial mentions and contextual backlinks from respected industry publications, news portals, and authority blogs. We follow 100% white-hat manual outreach with zero spam or PBNs.",
        iconName: "Share2",
        imageUrl: linkBuildingImg,
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "Manual High-DA (DA 50+) Outreach & Placement",
          "Contextual In-Content Editorial Links",
          "Digital PR Thought Leadership Distribution",
          "Toxic Backlink Audit & Disavow Maintenance",
        ],
        idealFor:
          "Competitive niches, B2B companies, and brands wanting to outrank established market incumbents.",
        roiImpact:
          "Elevates overall domain rating (DR) to make ranking for new keywords dramatically easier.",
        targetOutcome: "Consistent acquisition of tier-1 contextual editorial backlinks.",
        timeline: "Monthly Outreach Cadence",
        toolsUsed: ["Ahrefs", "Hunter.io", "Buzzstream", "HARO / Connectively"],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["b2b-industrial-seo"],
      },
      {
        id: "seo-content-writing",
        title: "SEO Content Writing",
        shortDesc:
          "Topical authority articles, buying guides, and technical copy designed to rank high and convert readers.",
        description:
          "Search engines reward depth and topical authority. We research and produce deeply researched long-form articles, commercial service pages, and comprehensive buying guides structured to answer user search intent comprehensively.",
        iconName: "FileText",
        imageUrl:
          "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹12,999/month",
        deliverables: [
          "Topical Cluster Strategy & Keyword Research",
          "Comprehensive 1,500 - 3,000 Word SEO Articles",
          "Structured Headers (H1-H4), Bullet Points & Rich Snippet Formatting",
          "Internal Linking & External Citation Structure",
        ],
        idealFor:
          "Companies wanting to establish undisputed industry thought leadership and capture long-tail organic searches.",
        roiImpact:
          "Captures high-volume informational and commercial queries across the buyer journey.",
        targetOutcome: "Multiple page 1 keyword rankings per published article.",
        timeline: "Weekly Article Publishing Sprints",
        toolsUsed: ["Surfer SEO", "Clearscope", "Grammarly Premium", "Ahrefs"],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["b2b-industrial-seo", "healthcare-clinic-growth"],
      },
      {
        id: "franchise-seo",
        title: "Franchise & Multi-Location SEO",
        shortDesc:
          "Scalable multi-location search architecture for franchise chains, dealership networks, and branch offices.",
        description:
          "Multi-location SEO requires precision. We structure localized subdirectories, manage hundreds of verified Google Business profiles with automated synchronization, and create unique geo-content for each location.",
        iconName: "Layers",
        imageUrl: franchiseSeoImg,
        pricingStartingAt: "₹24,999/month",
        deliverables: [
          "Scalable Multi-Location URL & Breadcrumb Hierarchy",
          "Centralized Google Business Profile Multi-Location Dashboard",
          "Localized Schema & Review Management at Scale",
          "Location-Specific Conversion Tracking",
        ],
        idealFor:
          "Franchise brands, retail chains, healthcare clinics, and educational branch networks.",
        roiImpact: "Powers organic footfall and phone leads to each individual branch location.",
        targetOutcome: "Consistent top 3 local rankings across every target geographic city.",
        timeline: "Ongoing Multi-Branch Retainer",
        toolsUsed: [
          "Local Viking",
          "BrightLocal",
          "Google Search Console Multi-Property",
          "Uberall",
        ],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["healthcare-clinic-growth"],
      },
      {
        id: "conversion-rate-optimization",
        title: "Conversion Rate Optimization (CRO)",
        shortDesc:
          "Turn existing organic and paid website traffic into paying customers with user testing and A/B experiments.",
        description:
          "Getting traffic is only half the battle. We analyze user session recordings, heatmaps, and funnel drop-offs to redesign low-converting elements, refine value propositions, and systematically increase your revenue per visitor.",
        iconName: "Target",
        imageUrl:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "Full-Funnel Heatmap & Session Recording Analysis",
          "Form Friction & Checkout Drop-off Audit",
          "A/B Split Testing Roadmap & Execution",
          "Compelling Value Proposition & CTA Copy Redesign",
        ],
        idealFor:
          "Websites and e-commerce stores with steady traffic looking to maximize lead volume and sales.",
        roiImpact: "Multiplies revenue from existing traffic without increasing ad or SEO budgets.",
        targetOutcome: "20% to 45% uplift in lead and checkout conversion rates.",
        timeline: "Monthly CRO Sprint Cycles",
        toolsUsed: ["Hotjar", "Microsoft Clarity", "Google Optimize / VWO", "Google Analytics 4"],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["ecom-fashion-scale", "real-estate-leads"],
      },
      {
        id: "ai-search-optimization-geo",
        title: "AI Search Optimization / GEO",
        shortDesc:
          "Position your brand as the cited authority in ChatGPT, Perplexity AI, Google Gemini, and AI Search Overviews.",
        description:
          "Generative Engine Optimization (GEO) is the future of search. We structure your brand data, Wikidata entities, technical schemas, and authoritative citations so AI models cite your business as the definitive recommendation.",
        iconName: "Bot",
        imageUrl:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "Wikidata & Knowledge Graph Entity Optimization",
          "Structured Q&A Schema for Large Language Models",
          "LLM Citation Monitoring across ChatGPT, Perplexity & Gemini",
          "Brand Authority Context Injection across High-Weight Repositories",
        ],
        idealFor:
          "Forward-looking businesses and category leaders who want to lead the AI search revolution.",
        roiImpact:
          "Guarantees brand visibility in next-generation conversational search assistants.",
        targetOutcome: "Direct citation and recommendation in conversational AI responses.",
        timeline: "Monthly GEO Management",
        toolsUsed: [
          "Perplexity Pro",
          "Schema.org",
          "Wikidata",
          "Google Search Console",
          "ChatGPT Plus",
        ],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["b2b-industrial-seo", "fintech-corporate-portal"],
      },
    ],
  },

  // ==========================================
  // 03 — SOCIAL MEDIA MARKETING
  // ==========================================
  {
    id: "social-media",
    number: "03",
    title: "SOCIAL MEDIA MARKETING",
    badge: "Brand Authority & Reach",
    shortDescription:
      "Strategic social media management, high-retention viral reels, community building, and sponsored amplification across Instagram, LinkedIn, and Facebook.",
    fullDescription:
      "Build a prestigious, recognizable presence across Instagram, LinkedIn, Facebook, and YouTube. We produce high-retention video reels, aesthetic carousel decks, engaging stories, and trend-aligned campaigns that turn followers into active brand advocates and buyers.",
    iconName: "Share2",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Social Media",
    startingPrice: "₹12,999/month",
    benefits: [
      "Curated Aesthetic Visual Grid & Story Strategy",
      "High-Engagement 4K Viral Reels Scripting & Production",
      "Multi-Platform Active Community Moderation & DM Lead Capture",
      "Targeted Influencer Collaborations & Growth Campaigns",
    ],
    keyServicesList: [
      "Social Media Marketing",
      "Social Media Management",
      "Facebook Marketing",
      "Instagram Marketing",
      "LinkedIn Marketing",
      "Social Media Advertising",
      "Influencer Marketing",
      "Content Management",
    ],
    status: "active",
    displayOrder: 3,
    seoTitle: "Social Media Marketing & Management Agency | DigiBasera",
    seoDescription:
      "Elevate your brand presence across Instagram, LinkedIn, and Facebook with viral reels, curated grids, and community growth.",
    services: [
      {
        id: "social-media-marketing-core",
        title: "Social Media Marketing",
        shortDesc:
          "360° social growth strategy combining organic content pillars, viral hooks, and targeted ad boosts.",
        description:
          "Comprehensive brand building across major social networks. We define your brand voice, create monthly content calendars, script viral reels, and execute targeted growth campaigns.",
        iconName: "Share2",
        imageUrl:
          "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹12,999/month",
        deliverables: [
          "Monthly Content Calendar with Aesthetic Grid Planning",
          "Short-form Viral Video Reels Scripting & 4K Editing",
          "High-Converting Carousel Graphic Slide Decks",
          "Dedicated Community Moderation & Inbound DM Routing",
        ],
        idealFor:
          "Brands wanting a consistent, premium digital presence that drives real customer engagement.",
        roiImpact:
          "Elevates brand equity, customer trust, and organic direct message sales inquiries.",
        targetOutcome: "3x - 5x increase in organic reach and active audience community.",
        timeline: "Monthly Growth Retainer",
        toolsUsed: ["Meta Business Suite", "Canva Pro", "Adobe Premiere Pro", "Buffer"],
        portfolioCategory: "Social Media",
        relatedCaseStudyIds: ["healthcare-clinic-growth", "luxury-hospitality-brand"],
      },
      {
        id: "social-media-management",
        title: "Social Media Management",
        shortDesc:
          "Daily publishing, comment moderation, direct message lead qualification, and brand reputation monitoring.",
        description:
          "Never miss an inquiry or leave your audience unattended. We manage daily publishing across Instagram, Facebook, and LinkedIn with active comment replies and lead qualification.",
        iconName: "UserCheck",
        imageUrl:
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹9,999/month",
        deliverables: [
          "Multi-Platform Scheduled Daily Publishing",
          "Active Comment & DM Moderation within Business Hours",
          "Spam Filtering & Brand Reputation Protection",
          "Monthly Social Performance Analytics Report",
        ],
        idealFor:
          "Busy founders and enterprises needing reliable, professional social channels management.",
        roiImpact:
          "Faster response times and professional brand appearance across all public channels.",
        targetOutcome: "100% response rate on comments and inquiries.",
        timeline: "Monthly Management Retainer",
        toolsUsed: ["Sprout Social", "Meta Inbox", "Hootsuite"],
        portfolioCategory: "Social Media",
        relatedCaseStudyIds: ["luxury-hospitality-brand"],
      },
      {
        id: "facebook-marketing",
        title: "Facebook Marketing",
        shortDesc:
          "Facebook Page growth, community group management, targeted local reach, and business page optimization.",
        description:
          "Maximize Facebook’s massive regional and demographic reach. We optimize your Facebook Page, build engaging community groups, publish interactive polls, and run localized awareness campaigns.",
        iconName: "Share2",
        imageUrl:
          "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹9,999/month",
        deliverables: [
          "Facebook Business Page Optimization & Verification",
          "Engaging Multi-Media Content Publishing (Videos, Carousels, Stories)",
          "Facebook Group Community Engagement & Moderation",
          "Localized Boosted Posts for Targeted Regional Reach",
        ],
        idealFor:
          "Local businesses, real estate builders, hospitals, regional retailers, and consumer services.",
        roiImpact: "Strong regional brand recognition and direct phone calls/messages.",
        targetOutcome: "Consistent localized brand reach across target cities and pin codes.",
        timeline: "Monthly Retainer Cadence",
        toolsUsed: ["Meta Business Suite", "Facebook Ads Manager"],
        portfolioCategory: "Social Media",
        relatedCaseStudyIds: ["real-estate-leads"],
      },
      {
        id: "instagram-marketing",
        title: "Instagram Marketing",
        shortDesc:
          "Aesthetic visual grid curation, viral reels strategy, daily story sequences, and influencer collaborations.",
        description:
          "Turn your Instagram profile into a customer-generating powerhouse. We design sleek 9-grid layouts, produce high-retention 4K reels with dynamic subtitles, post daily story polls, and partner with niche influencers.",
        iconName: "Camera",
        imageUrl:
          "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "High-Retention 4K Instagram Reels (Scripting, Voiceover, Subtitles & Editing)",
          "Curated Aesthetic Visual 9-Grid Layouts",
          "Daily Interactive Story Sequences (Polls, Q&As, Behind-the-Scenes)",
          "Hashtag & Audio Trend Harvesting Strategy",
        ],
        idealFor:
          "Fashion labels, luxury jewelry, restaurants, interior architects, doctors, and lifestyle brands.",
        roiImpact:
          "Surges follower engagement, profile visits, and inbound Instagram DM inquiries.",
        targetOutcome: "Rapid growth in profile reach, saves, shares, and customer inquiries.",
        timeline: "Monthly Content Cadence",
        toolsUsed: ["Adobe Premiere Pro", "CapCut", "Figma", "Instagram Insights"],
        portfolioCategory: "Social Media",
        relatedCaseStudyIds: ["luxury-hospitality-brand", "healthcare-clinic-growth"],
      },
      {
        id: "linkedin-marketing",
        title: "LinkedIn Marketing",
        shortDesc:
          "B2B executive thought leadership, corporate company page authority, and high-ticket business networking.",
        description:
          "Establish undisputed B2B authority. We ghostwrite insightful executive thought-leadership articles for founders, curate insightful PDF carousel slide decks, and manage corporate company pages to attract enterprise clients and top talent.",
        iconName: "FileText",
        imageUrl:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Founder & Executive Ghostwriting (2-4 Thought Leadership Posts/Week)",
          "High-Value B2B PDF Document Carousels & Infographics",
          "Company Page Optimization & Employee Advocacy Strategy",
          "Direct B2B Prospect Connection & Outreach Scripts",
        ],
        idealFor:
          "B2B service providers, tech founders, consultants, manufacturing leaders, and industrial exporters.",
        roiImpact:
          "Positions key executives as industry thought leaders and drives high-ticket B2B deals.",
        targetOutcome:
          "Authoritative personal branding with consistent high-ticket commercial inquiries.",
        timeline: "Monthly Executive Cadence",
        toolsUsed: ["LinkedIn Creator Analytics", "Canva Enterprise", "Figma"],
        portfolioCategory: "Social Media",
        relatedCaseStudyIds: ["b2b-industrial-seo"],
      },
      {
        id: "social-media-advertising",
        title: "Social Media Advertising",
        shortDesc:
          "Laser-focused paid social ad campaigns across Meta and LinkedIn with high-converting creative testing.",
        description:
          "Accelerate your growth with paid social media ads. We test creative hooks, build custom audience segments, deploy retargeting sequences, and optimize campaigns for qualified leads and sales.",
        iconName: "DollarSign",
        imageUrl:
          "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Paid Campaign Structure (Prospecting, Engagement, Retargeting)",
          "High-CTR Ad Creatives & Video Hook Testing Batches",
          "Instant Form & Landing Page Conversion Tracking",
          "Continuous Bid & Spend Optimization",
        ],
        idealFor: "Businesses wanting fast, measurable customer acquisition from social channels.",
        roiImpact: "Predictable stream of qualified leads and e-commerce transactions.",
        targetOutcome: "Profitable return on ad spend with full conversion visibility.",
        timeline: "Launch in 5-7 Days + Ongoing Optimization",
        toolsUsed: ["Meta Ads Manager", "LinkedIn Campaign Manager"],
        portfolioCategory: "Social Media",
        relatedCaseStudyIds: ["real-estate-leads", "ecom-fashion-scale"],
      },
      {
        id: "influencer-marketing",
        title: "Influencer Marketing",
        shortDesc:
          "End-to-end creator scouting, contract negotiation, creative briefing, and ROI measurement.",
        description:
          "Amplify your message with authentic creator endorsements. We vet micro and macro influencers for real engagement, draft bulletproof collaboration briefs, manage product seeding, and track actual conversions.",
        iconName: "Sparkles",
        imageUrl:
          "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999/campaign",
        deliverables: [
          "Vetted Influencer Roster (Engagement Rate & Audience Demographics Audit)",
          "Creative Briefing & Message Guideline Development",
          "Contract Management & Deliverable Verification",
          "Campaign Reach & ROI Attribution Report",
        ],
        idealFor: "D2C brands, restaurants, jewelry labels, lifestyle products, and consumer apps.",
        roiImpact: "Harnesses creator credibility to drive rapid brand awareness and sales spikes.",
        targetOutcome:
          "High-trust authentic creator content that can also be repurposed as paid ad creatives.",
        timeline: "2 - 4 Weeks Campaign Sprints",
        toolsUsed: ["HypeAuditor", "Modash", "Instagram Creator Studio"],
        portfolioCategory: "Social Media",
        relatedCaseStudyIds: ["luxury-hospitality-brand"],
      },
      {
        id: "content-management",
        title: "Content Management",
        shortDesc:
          "Multi-channel digital asset organization, content recycling, and editorial publishing pipelines.",
        description:
          "Keep your digital marketing assets organized, fresh, and consistently distributed across all customer-facing channels without bottlenecks.",
        iconName: "Layers",
        imageUrl:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹9,999/month",
        deliverables: [
          "Centralized Digital Asset Library (Google Drive / Notion)",
          "Cross-Platform Content Repurposing (Reels to Shorts to LinkedIn)",
          "Publishing Workflow & Approval Gatekeeping",
          "Asset Performance Archiving & Refresh Cadence",
        ],
        idealFor:
          "Companies producing rich content that needs structured multi-channel distribution.",
        roiImpact: "Maximizes the value of every creative asset produced.",
        targetOutcome: "Streamlined, stress-free publishing schedule with zero missed deadlines.",
        timeline: "Monthly Workflow Retainer",
        toolsUsed: ["Notion", "Google Workspace", "Buffer"],
        portfolioCategory: "Social Media",
        relatedCaseStudyIds: ["luxury-hospitality-brand"],
      },
    ],
  },

  // ==========================================
  // 04 — GOOGLE & META ADS
  // ==========================================
  {
    id: "paid-ads",
    number: "04",
    title: "GOOGLE & META ADS",
    badge: "PPC & Paid Acquisition",
    shortDescription:
      "Laser-targeted Google Search, Performance Max, and Meta Ads (Facebook & Instagram) engineered for maximum conversion with strict spend efficiency.",
    fullDescription:
      "Stop burning ad budget on low-intent clicks. Our performance engineers manage Google Search, Performance Max, Meta Advantage+, and retargeting campaigns with rigorous negative keyword scrubbing, high Quality Scores, and machine-learning bidding strategies to maximize revenue.",
    iconName: "DollarSign",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Ads",
    startingPrice: "₹14,999/month",
    benefits: [
      "High-Intent Search Keyword STAG Architecture",
      "Meta Advantage+ Shopping & Custom Lookalike Funnels",
      "Server-Side Conversions API (CAPI) & Offline Tracking",
      "Daily Negative Keyword & Placement Spend Scrubbing",
    ],
    keyServicesList: [
      "Google Ads",
      "PPC / Performance Marketing",
      "Meta Ads",
      "YouTube Ads",
      "WhatsApp Ads & Conversational Marketing",
      "LinkedIn Ads",
      "AI-Powered Advertising",
      "Facebook Ads",
      "Instagram Ads",
      "E-Commerce PPC",
      "Lead Generation Campaigns",
    ],
    status: "active",
    displayOrder: 4,
    seoTitle: "Google Ads & Meta Paid Advertising Agency | DigiBasera",
    seoDescription:
      "High-performance Google Search, Performance Max, and Meta (Facebook & Instagram) advertising with transparent ROI tracking.",
    services: [
      {
        id: "google-ads",
        title: "Google Ads",
        shortDesc:
          "Capture high-commercial intent Google searches with tightly themed ad groups, negative keywords, and PMax campaigns.",
        description:
          "Capture users at the exact moment they search for your products or services. We manage Google Search, Performance Max, Display Network, and YouTube video ads with strict negative keyword scrubbing and high Quality Scores.",
        iconName: "MousePointerClick",
        imageUrl:
          "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Tightly Themed Search Ad Groups (STAGs)",
          "Performance Max Asset Groups & Audience Signals",
          "Comprehensive Negative Keyword Scrubbing",
          "Conversion Tracking & Offline Value Uploads",
        ],
        idealFor:
          "Businesses offering urgent services, B2B products, luxury real estate, or high search-demand items.",
        roiImpact:
          "Captures customers with purchase intent at the highest-margin moments of search.",
        targetOutcome: "Lower Cost-per-click (CPC) and higher search ad conversion rates.",
        timeline: "Setup in 5-7 Days + Monthly Optimization",
        toolsUsed: ["Google Ads", "Google Tag Manager", "Optmyzr", "Google Merchant Center"],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["real-estate-leads", "b2b-industrial-seo"],
      },
      {
        id: "ppc-management-core",
        title: "PPC / Performance Marketing",
        shortDesc:
          "Full-funnel PPC and paid media acquisition across Google Search, Performance Max, and social channels with daily bid tuning and ROAS optimization.",
        description:
          "Stop burning ad budget on low-converting clicks. Our certified performance marketers manage end-to-end multi-channel PPC campaigns with rigorous search-term scrubdowns, negative keyword architecture, algorithmic Smart Bidding calibration, and landing page conversion rate testing.",
        iconName: "Sliders",
        imageUrl:
          "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "Comprehensive Search, Shopping & Performance Max Setup",
          "High-Intent Commercial Keyword Harvesting (STAG Architecture)",
          "Responsive Search Ads with 15+ A/B Tested Headline Variants",
          "Aggressive Daily Negative Keyword & Placement Scrubbing",
          "Server-Side GTM & GA4 Enhanced Conversion Tracking",
          "Weekly Bid Tuning, Impression Share Audit & Executive ROAS Reports",
        ],
        idealFor:
          "Brands, high-ticket services, and scaling enterprises spending ₹50,000+ per month wanting optimum capital efficiency.",
        roiImpact:
          "Systematically reduces Cost Per Acquisition (CPA) while scaling qualified sales volume.",
        targetOutcome: "Immediate elimination of wasted ad spend and higher closing ROAS.",
        timeline: "Ongoing Daily/Weekly Performance Management",
        toolsUsed: ["Google Ads", "Meta Ads Manager", "Supermetrics", "Optmyzr", "Hotjar"],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["ecom-fashion-scale", "real-estate-leads"],
      },
      {
        id: "youtube-ads",
        title: "YouTube Ads",
        shortDesc:
          "High-impact skippable, non-skippable bumper, and YouTube Shorts video ads that drive massive brand recall and qualified buyer conversions.",
        description:
          "Capture high visual attention on the world's #2 search engine. We structure skippable in-stream, bumper, and YouTube Shorts vertical video ad campaigns with precision custom-intent audiences targeting users searching your competitors on Google.",
        iconName: "Film",
        imageUrl:
          "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Skippable In-Stream, 15s Bumper & Shorts 9:16 Video Campaign Setup",
          "Custom-Intent Audience Structuring (Targeting Competitor Searches)",
          "First-5-Second Video Hook Scripting & CTA Card Placement Strategy",
          "Channel-Level Placement Exclusions (Eliminating Irrelevant Kids Channels)",
          "Google Ads & GA4 Video View-Through & Lead Conversion Tracking",
          "Engaged Video Viewer Retargeting Lists for Cross-Channel Conversions",
        ],
        idealFor:
          "Education institutes, real estate builders, D2C brands, healthcare clinics, and businesses with compelling video collateral.",
        roiImpact:
          "Lowest Cost-Per-View (CPV) with high brand lift and high-ticket customer inquiries.",
        targetOutcome: "High video completion rates and scalable direct-response inquiries.",
        timeline: "Setup in 5-7 Days + Monthly Video Ad Sprints",
        toolsUsed: ["Google Ads", "YouTube Studio", "Google Tag Manager", "CapCut Pro"],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["real-estate-leads", "luxury-hospitality-brand"],
      },
      {
        id: "whatsapp-conversational-ads",
        title: "WhatsApp Ads & Conversational Marketing",
        shortDesc:
          "Click-to-WhatsApp (CTWA) ads on Meta with 24/7 automated interactive chatbot flows that capture, qualify, and convert leads in real time.",
        description:
          "Turn social media scrollers directly into live WhatsApp conversations. We combine high-converting Click-to-WhatsApp ads on Facebook and Instagram with automated chatbot greetings, instant PDF brochure delivery, and automated CRM routing so your sales team talks only to pre-screened buyers.",
        iconName: "MessageSquare",
        imageUrl:
          "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹9,999/month",
        deliverables: [
          "Click-to-WhatsApp (CTWA) Ad Campaigns on Facebook & Instagram",
          "WhatsApp Cloud API & Official Business Account Verification",
          "Automated 24/7 Conversational Greeting, Qualification & Lead Routing Bot",
          "Instant Digital PDF Brochure, Price List & Catalog Delivery via Chat",
          "Multi-Agent Support Inbox Setup (Wati, Interakt, Aisensy, or Zoho)",
          "CRM Webhook Sync & Automated Lead Phone Number Verification",
          "Promotional Broadcast Sequences & Inactive Lead Re-Engagement Drips",
        ],
        idealFor:
          "Real estate developers, clinics, retail showrooms, B2B suppliers, automobile dealers, and coaching institutes needing instant buyer communication.",
        roiImpact:
          "Sub-60-second lead contact time, delivering 3x to 5x higher conversion rates compared to traditional static web forms.",
        targetOutcome: "Instant verified customer inquiries with zero fake phone numbers.",
        timeline: "Launch in 4-6 Days + Monthly Campaign & Flow Optimization",
        toolsUsed: ["Meta Ads Manager", "WhatsApp Cloud API", "Wati / Interakt", "Zapier"],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["real-estate-leads", "luxury-hospitality-brand"],
      },
      {
        id: "linkedin-ads",
        title: "LinkedIn Ads",
        shortDesc:
          "Precision B2B advertising targeting corporate decision-makers, CXOs, directors, and purchasing heads by job title and company headcount.",
        description:
          "Reach high-ticket corporate buyers without ad waste. We target senior professionals and procurement executives using verified LinkedIn profile data, sponsored content, carousel document ads, and native in-app Lead Gen Forms with auto-filled corporate details.",
        iconName: "Share2",
        imageUrl:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "Account-Based Marketing (ABM) Setup & High-Value Target Account Lists",
          "Precision Demographic Targeting by Job Title, Seniority & Company Size",
          "Sponsored Single Image, Carousel & PDF Document Ad Creative Sets",
          "Native In-App LinkedIn Lead Gen Forms with Pre-Filled Verified Corporate Data",
          "LinkedIn Insight Tag Implementation for High-Intent Retargeting Audiences",
          "CRM Pipeline Integration (HubSpot / Zoho / Salesforce) & Weekly B2B Reports",
        ],
        idealFor:
          "B2B manufacturers, SaaS companies, corporate IT consultancies, industrial suppliers, and high-ticket business consultants.",
        roiImpact:
          "Secures high-contract-value corporate meetings and establishes enterprise authority.",
        targetOutcome: "Qualified sales meetings with authorized corporate budget holders.",
        timeline: "Setup in 7-10 Days + Weekly Lead Quality Calibration",
        toolsUsed: [
          "LinkedIn Campaign Manager",
          "LinkedIn Insight Tag",
          "Sales Navigator",
          "HubSpot",
        ],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["b2b-industrial-seo", "fintech-corporate-portal"],
      },
      {
        id: "ai-powered-advertising",
        title: "AI-Powered Advertising",
        shortDesc:
          "Algorithmic creative generation, predictive budget allocation, dynamic persona targeting, and autonomous campaign optimization using modern AI models.",
        description:
          "Deploy modern artificial intelligence across your paid media spend. We harness generative AI models for rapid creative variation testing, predictive Smart Bidding, dynamic ad copy generation, automated ad fatigue detection, and predictive Customer Lifetime Value (pLTV) tracking.",
        iconName: "Zap",
        imageUrl:
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹24,999/month",
        deliverables: [
          "AI-Generated High-Velocity Visual Creative Variations & Hook Testing",
          "Smart Bidding Calibration with Algorithmic Target CPA & ROAS Optimization",
          "Dynamic Ad Copy Variations Tailored in Real-Time to Buyer Intent Triggers",
          "Autonomous Ad Fatigue Monitoring & Intelligent Asset Rotation Schedulers",
          "Multi-Touch Server-Side Attribution Modeling with Predictive LTV Signals",
          "Competitor Ad Intelligence Monitoring & Strategic Machine-Learning Performance Reports",
        ],
        idealFor:
          "High-growth D2C brands, tech startups, e-commerce stores, and performance advertisers managing scaling ad spends.",
        roiImpact:
          "Multiplies creative experimentation velocity by 5x and lowers blended Customer Acquisition Costs.",
        targetOutcome: "High-efficiency autonomous creative scaling with zero budget leakage.",
        timeline: "Setup & Testing Framework in 7-10 Days + Ongoing Algorithmic Optimization",
        toolsUsed: [
          "Google Smart Bidding",
          "Meta Advantage+",
          "OpenAI API",
          "Gemini API",
          "Midjourney",
        ],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["ecom-fashion-scale", "fintech-corporate-portal"],
      },
      {
        id: "meta-ads",
        title: "Meta Ads",
        shortDesc:
          "Full-funnel Meta advertising turning cold prospects into repeat buyers with high-converting creative testing.",
        description:
          "We build high-converting Meta paid campaigns using Advantage+ Shopping, custom lookalike models, and dynamic retargeting. We test dozens of creative hooks to scale profitably.",
        iconName: "Layers",
        imageUrl:
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Advantage+ & Manual Campaign Architecture",
          "Custom First-Party & Lookalike Audiences",
          "Dynamic Product Ads (DPA) & Instant Lead Forms",
          "Server-Side Meta Conversions API (CAPI)",
        ],
        idealFor:
          "E-commerce stores, D2C brands, Real Estate promoters, and high-volume lead generators.",
        roiImpact:
          "Predictable scaling of top-line revenue with machine-learning creative optimization.",
        targetOutcome: "Sustainable ROAS while scaling monthly ad spend capacity.",
        timeline: "Launch in 7 Days + Weekly Creative Sprints",
        toolsUsed: ["Meta Ads Manager", "Meta Pixel & CAPI", "Motion App", "Canva / Figma"],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["ecom-fashion-scale", "luxury-hospitality-brand"],
      },
      {
        id: "facebook-ads",
        title: "Facebook Ads",
        shortDesc:
          "High-converting Facebook feed, story, and video ad campaigns with precision demographic and geographic targeting.",
        description:
          "Reach high-intent audiences on Facebook with engaging carousel ads, video testimonials, and instant lead capture forms.",
        iconName: "Share2",
        imageUrl: facebookAdsImg,
        pricingStartingAt: "₹12,999/month",
        deliverables: [
          "Geo-Targeted & Demographic Audience Structuring",
          "Interactive Instant Lead Forms with Custom Questions",
          "Video Ad Editing with Engaging Subtitles & Captions",
          "Weekly A/B Creative Variant Testing",
        ],
        idealFor:
          "Real estate, local health clinics, education institutes, and regional businesses.",
        roiImpact: "Steady volume of cost-effective local customer inquiries.",
        targetOutcome: "Low cost-per-lead with high contactability rates.",
        timeline: "Weekly Optimization Retainer",
        toolsUsed: ["Meta Ads Manager", "Zapier"],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["real-estate-leads"],
      },
      {
        id: "instagram-ads",
        title: "Instagram Ads",
        shortDesc:
          "Visually stunning Instagram story, reel, and feed ads designed for high-aesthetic brands.",
        description:
          "Capture attention on Instagram with full-screen 9:16 vertical video ads, dynamic collection ads, and interactive story polls that drive direct website traffic and sales.",
        iconName: "Camera",
        imageUrl:
          "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Full-Screen 9:16 Vertical Video Reels Ad Production",
          "Instagram Shopping & Direct Checkout Integration",
          "Interactive Story Poll & Swipe-Up Funnel Creatives",
          "Custom Retargeting Audiences for Engaged Users",
        ],
        idealFor: "D2C fashion, jewelry, hospitality, lifestyle, and consumer products.",
        roiImpact: "Higher click-through rates and strong visual brand affinity.",
        targetOutcome: "High CTR and immediate online sales conversions.",
        timeline: "Monthly Campaign Management",
        toolsUsed: ["Meta Ads Manager", "CapCut Pro"],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["luxury-hospitality-brand", "ecom-fashion-scale"],
      },
      {
        id: "ecommerce-ppc",
        title: "E-Commerce PPC",
        shortDesc:
          "Google Shopping, Performance Max, and Advantage+ Catalog campaigns to scale online store orders.",
        description:
          "Scale your online store profitably. We optimize Google Merchant Center feeds, run catalog ads with dynamic pricing, and build multi-stage retargeting funnels.",
        iconName: "ShoppingCart",
        imageUrl: ecommercePpcImg,
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "Google Merchant Center Feed Optimization & Error Resolution",
          "Performance Max Retail Campaigns with Asset Groups",
          "Dynamic Product Ads (DPA) Retargeting Sequences",
          "Blended ROAS & Merchandising Analytics Reporting",
        ],
        idealFor: "Shopify and WooCommerce store owners looking to scale order volume profitably.",
        roiImpact: "Maximizes sales velocity while controlling advertising cost of sales.",
        targetOutcome: "Consistent multi-roas scale across search and social feeds.",
        timeline: "Ongoing Growth Cadence",
        toolsUsed: ["Google Merchant Center", "Meta Ads Manager", "Triple Whale"],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "lead-generation-campaigns",
        title: "Lead Generation Campaigns",
        shortDesc:
          "Turn clicks into booked meetings and phone consultations with multi-channel paid funnels.",
        description:
          "We engineer complete paid lead funnels combining search intent ads, instant lead forms, dedicated landing pages, and instant CRM webhook routing for fast sales follow-up.",
        iconName: "Target",
        imageUrl:
          "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "Multi-Channel Paid Lead Strategy (Google + Meta)",
          "High-Converting Landing Page with A/B Split Testing",
          "Automated WhatsApp & Email Lead Notifications",
          "Weekly Sales Lead Quality Calibration Audits",
        ],
        idealFor:
          "High-ticket service businesses, B2B companies, real estate, and professional clinics.",
        roiImpact: "Fills your sales calendar with qualified commercial opportunities.",
        targetOutcome: "Predictable cost-per-qualified-lead (CPQL) pipeline.",
        timeline: "Launch in 7-10 Days + Monthly Management",
        toolsUsed: ["Google Ads", "Meta Ads Manager", "Zapier", "WhatsApp Cloud API"],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["real-estate-leads", "b2b-industrial-seo"],
      },
    ],
  },

  // ==========================================
  // 05 — WEB DESIGN & DEVELOPMENT
  // ==========================================
  {
    id: "web-development",
    number: "05",
    title: "WEB DESIGN & DEVELOPMENT",
    badge: "Modern Web Engineering",
    shortDescription:
      "Build a professional digital presence with modern, responsive and conversion-focused websites designed around your business goals.",
    fullDescription:
      "We engineer high-performance web platforms and bespoke corporate websites designed for speed, search engine visibility, and maximum user conversion. Built with zero bloat to guarantee sub-second page loads, 99.9% uptime, and flawless mobile responsiveness.",
    iconName: "Code2",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Websites",
    startingPrice: "₹19,999",
    benefits: [
      "Custom Responsive UI/UX Designed Across All Device Viewports",
      "Blazing Fast 95+ Google Lighthouse Core Web Vitals Speed",
      "Built-In 1-Click WhatsApp Routing & Lead Capture Forms",
      "SEO-Friendly Clean Semantic Code with Schema Structured Data",
    ],
    keyServicesList: [
      "Web Design",
      "Custom Website Design",
      "WordPress Website Design",
      "E-Commerce Development",
      "Shopify Website Design",
      "Website Maintenance",
    ],
    status: "active",
    displayOrder: 5,
    seoTitle: "Web Design & Custom Website Development Services | DigiBasera",
    seoDescription:
      "Professional web design, custom Next.js/React development, WordPress websites, and e-commerce portals in Rajkot.",
    services: [
      {
        id: "web-design",
        title: "Web Design",
        shortDesc:
          "Professional responsive website designs created to provide a strong visual identity and seamless user experience across desktop, tablet and mobile devices.",
        description:
          "Professional responsive website designs created to provide a strong visual identity and seamless user experience across desktop, tablet and mobile devices.",
        iconName: "Layout",
        imageUrl:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999",
        deliverables: [
          "Responsive design for mobile, tablet, and desktop",
          "Modern UI with premium typography and color hierarchy",
          "Mobile-friendly layout and user-focused navigation",
          "Strategic CTA placement & high-converting lead forms",
          "1-Click WhatsApp integration for instant inquiries",
          "Basic SEO-friendly structure & semantic markup",
        ],
        idealFor:
          "Businesses, Startups, Professionals, and Local Businesses looking to build a clean, credible digital footprint.",
        roiImpact:
          "Establishes instant digital credibility and turns casual visitors into direct customer inquiries.",
        targetOutcome:
          "A fast, responsive, and visually appealing corporate website ready to represent your brand.",
        timeline: "7 - 12 Business Days",
        toolsUsed: ["HTML5/CSS3", "Tailwind CSS", "Figma", "JavaScript"],
        portfolioCategory: "Websites",
        relatedCaseStudyIds: ["abfi-interior-live", "super-india-interior-live"],
      },
      {
        id: "custom-website-design",
        title: "Custom Website Design",
        shortDesc:
          "Fully customized website design created according to your brand identity, business goals, audience and required functionality.",
        description:
          "Fully customized website design created according to your brand identity, business goals, audience and required functionality. Hand-crafted with modern frontend frameworks and tailored interactions.",
        iconName: "Code2",
        imageUrl:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹29,999",
        deliverables: [
          "100% Bespoke UI/UX Design (No Generic Templates)",
          "Custom page layouts tailored to your business offerings",
          "Fluid interactive sections & smooth micro-animations",
          "Lead qualification forms with automated email notifications",
          "Direct WhatsApp chat integration with custom pre-filled text",
          "SEO-friendly semantic HTML5 structure & Schema markup",
          "Custom functionality & third-party API webhooks",
        ],
        idealFor:
          "Growing enterprises, corporate brands, and tech companies needing a distinctive digital presence.",
        roiImpact:
          "Commands high perceived value, elevating your brand above competitors and capturing premium clients.",
        targetOutcome:
          "An iconic, fast, bespoke website with custom animations and high conversion rates.",
        timeline: "2 - 3 Weeks Custom Build",
        toolsUsed: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Figma"],
        portfolioCategory: "Websites",
        relatedCaseStudyIds: ["abfi-interior-live", "fintech-corporate-portal"],
      },
      {
        id: "wordpress-website-design",
        title: "WordPress Website Design",
        shortDesc:
          "Professional WordPress websites designed for businesses that need an easy-to-manage and scalable online presence.",
        description:
          "Professional WordPress websites designed for businesses that need an easy-to-manage and scalable online presence without the slowness or security vulnerabilities of bloated page builders.",
        iconName: "Globe2",
        imageUrl:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹24,999",
        deliverables: [
          "Clean WordPress installation & theme customization",
          "5–8 custom responsive pages designed for your business",
          "Intuitive drag-and-drop CMS admin for easy content editing",
          "Contact forms with spam protection & WhatsApp integration",
          "Basic On-Page SEO setup & XML sitemap generation",
          "Security hardening, SSL setup & automated cloud backups",
          "Client admin video guides & training documentation",
        ],
        idealFor:
          "Content-heavy websites, corporate brands, educational institutes, and publishing houses.",
        roiImpact:
          "Empowers your internal team to publish new blogs and landing pages in 5 minutes with zero coding.",
        targetOutcome: "Easy-to-manage, fast WordPress website with secure CMS capabilities.",
        timeline: "10 - 15 Business Days",
        toolsUsed: ["WordPress", "PHP", "Tailwind CSS", "ACF Pro", "Cloudflare"],
        portfolioCategory: "Websites",
        relatedCaseStudyIds: ["b2b-industrial-seo", "super-india-interior-live"],
      },
      {
        id: "ecommerce-website-development",
        title: "E-Commerce Website Development",
        shortDesc:
          "Professional online stores designed to showcase products, manage customers and provide a smooth shopping experience.",
        description:
          "Professional online stores designed to showcase products, manage customers and provide a smooth shopping experience from catalog discovery to 1-click checkout.",
        iconName: "ShoppingCart",
        imageUrl:
          "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹39,999",
        deliverables: [
          "Comprehensive product catalog with filtering and variants",
          "High-converting product detail pages & sticky Add-to-Cart",
          "Mobile-first shopping cart with drawer upsells",
          "Seamless checkout & Indian/International Payment Gateways (Razorpay/Stripe)",
          "Customer registration, account dashboard & order tracking",
          "Automated GST invoicing, tax calculation & shipping rules",
          "1-Click WhatsApp customer order notification & support",
        ],
        idealFor:
          "Retailers, D2C brands, manufacturers, and wholesalers expanding into online retail.",
        roiImpact:
          "Opens 24/7 direct-to-consumer digital revenue stream with zero middleman commissions.",
        targetOutcome:
          "Fully functional, secure e-commerce store ready to process live transactions.",
        timeline: "3 - 4 Weeks Comprehensive Build",
        toolsUsed: ["WooCommerce", "React Commerce", "Node.js", "Razorpay", "Shiprocket"],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "shopify-website-design",
        title: "Shopify Website Design",
        shortDesc:
          "Modern Shopify stores designed for brands looking to launch and grow their online business.",
        description:
          "Modern Shopify stores designed for brands looking to launch and grow their online business with speed-optimized Liquid architecture and frictionless mobile checkout.",
        iconName: "Store",
        imageUrl:
          "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹39,999",
        deliverables: [
          "Shopify 2.0 theme setup & bespoke customization",
          "High-converting product & collection page architecture",
          "Mobile-responsive layout optimized for fast loading",
          "Payment gateway & courier API integration (Razorpay / Shiprocket)",
          "Basic Shopify SEO & structured rich snippets",
          "Conversion-focused cart drawer with free shipping threshold bar",
        ],
        idealFor:
          "Direct-to-Consumer (D2C) brands, apparel lines, jewelry makers, and consumer packaged goods.",
        roiImpact:
          "Maximizes mobile checkout conversion rates and increases average order value (AOV).",
        targetOutcome:
          "Launch-ready, high-converting Shopify store capable of handling high traffic volume.",
        timeline: "2 - 3 Weeks Custom Build",
        toolsUsed: ["Shopify Plus", "Liquid", "Replo", "Klaviyo"],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "website-maintenance",
        title: "Website Maintenance",
        shortDesc:
          "Keep your website secure, updated and performing smoothly with ongoing maintenance and technical support.",
        description:
          "Keep your website secure, updated and performing smoothly with ongoing maintenance, monthly security audits, automated cloud backups, and on-demand content updates.",
        iconName: "ShieldCheck",
        imageUrl:
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹4,999/month",
        deliverables: [
          "Core system, CMS plugins, and PHP/Node dependency updates",
          "Monthly on-demand text, banner, and product content updates",
          "24/7 Security malware scanning & firewall monitoring",
          "Daily automated off-site cloud backups & instant restore support",
          "Speed optimization & uptime monitoring (99.9% guarantee)",
          "Dedicated technical support via WhatsApp and Email",
        ],
        idealFor:
          "Any business with an active website that cannot afford downtime, hacking, or broken links.",
        roiImpact:
          "Prevents costly revenue loss from website crashes, hacks, or outdated information.",
        targetOutcome:
          "100% peace of mind with a secure, blazing-fast, and always up-to-date website.",
        timeline: "Monthly Ongoing Support",
        toolsUsed: ["Cloudflare", "UptimeRobot", "WP Rocket", "Git CI/CD"],
        portfolioCategory: "Websites",
        relatedCaseStudyIds: ["abfi-interior-live", "fintech-corporate-portal"],
      },
    ],
  },

  // ==========================================
  // 06 — E-COMMERCE
  // ==========================================
  {
    id: "ecommerce",
    number: "06",
    title: "E-COMMERCE",
    badge: "Storefront & Revenue Scale",
    shortDescription:
      "High-converting custom Shopify stores, WooCommerce platforms, e-commerce SEO, marketplace scaling, and automated retention funnels.",
    fullDescription:
      "Scale your online retail business profitably. We engineer high-converting storefronts, optimize product search rankings, manage dynamic catalog ads, and build automated email/SMS retention flows to maximize customer lifetime value (LTV).",
    iconName: "ShoppingCart",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "E-commerce",
    startingPrice: "₹24,999/month",
    benefits: [
      "Conversion-Optimized Product Pages with Sticky Add-to-Cart",
      "Integrated Multi-Payment Gateways & Real-Time Courier Sync",
      "Automated Klaviyo Email & WhatsApp Flow Retention Engine",
      "Multi-Channel Catalog Sync across Google, Meta, and Amazon",
    ],
    keyServicesList: [
      "E-Commerce Marketing",
      "E-Commerce SEO",
      "E-Commerce PPC",
      "Shopify Marketing",
      "Shopify SEO",
      "Amazon Marketing",
    ],
    status: "active",
    displayOrder: 6,
    seoTitle: "E-Commerce Marketing, SEO & Store Scaling Services | DigiBasera",
    seoDescription:
      "Scale your D2C online store with Shopify marketing, e-commerce SEO, catalog PPC ads, and retention funnels.",
    services: [
      {
        id: "ecommerce-marketing-core",
        title: "E-Commerce Marketing",
        shortDesc:
          "Full-funnel D2C marketing, Advantage+ catalog ads, dynamic retargeting, and lifecycle email automation.",
        description:
          "Scale your online store profitably with synchronized customer acquisition across Meta, Google Shopping, and automated Klaviyo email flows.",
        iconName: "TrendingUp",
        imageUrl:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹24,999/month",
        deliverables: [
          "Full-Funnel Paid Acquisition & Advantage+ Catalog Ads",
          "Dynamic Product Retargeting & Cart Abandonment Campaigns",
          "Automated Lifecycle Email & SMS Welcome Series",
          "Blended ROAS Dashboard & Unit Economics Modeling",
        ],
        idealFor: "D2C brands seeking profitable unit economics and continuous revenue scaling.",
        roiImpact: "Lowers Customer Acquisition Cost (CAC) and boosts repeat purchase rates.",
        targetOutcome: "Predictable top-line revenue growth and high customer lifetime value.",
        timeline: "Monthly Retainer Cadence",
        toolsUsed: ["Meta Ads Manager", "Google Merchant Center", "Klaviyo", "Triple Whale"],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "ecommerce-seo",
        title: "E-Commerce SEO",
        shortDesc:
          "Rank category and product pages on Google page 1 for high-commercial search intent keywords.",
        description:
          "Drive high-intent buyer traffic directly to your product and collection pages. We optimize category descriptions, implement Product and Review schema, optimize faceted navigation, and resolve duplicate content issues.",
        iconName: "Search",
        imageUrl:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "Collection & Product Page Commercial Keyword Optimization",
          "Product Schema Markup with Pricing, In-Stock & Aggregate Rating Data",
          "Faceted Navigation Crawl Budget & Canonical Structuring",
          "High-DA E-Commerce Editorial Backlink Acquisition",
        ],
        idealFor: "Online stores with 50+ to 10,000+ SKUs wanting scalable organic traffic.",
        roiImpact: "Continuous organic sales with zero per-click advertising costs.",
        targetOutcome: "Top 3 Google rankings for high-volume commercial product terms.",
        timeline: "Monthly Compounding Cadence",
        toolsUsed: ["Ahrefs", "Screaming Frog", "Google Search Console", "Surfer SEO"],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "ecommerce-ppc-core",
        title: "E-Commerce PPC",
        shortDesc:
          "Google Shopping, Performance Max, and Advantage+ Catalog campaigns to scale online store orders.",
        description:
          "We manage high-converting Google Shopping and Meta Catalog campaigns with strict bid calibration and margin-aware product grouping.",
        iconName: "DollarSign",
        imageUrl: ecommercePpcImg,
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "Google Merchant Center Feed Optimization",
          "Performance Max Campaigns with High-Converting Asset Groups",
          "Dynamic Product Ads Retargeting for Cart Drop-offs",
          "Margin-Based Product Tier Ad Budget Allocation",
        ],
        idealFor: "E-commerce stores with established inventory wanting predictable paid scaling.",
        roiImpact: "Accelerates product sales volume with positive blended return on ad spend.",
        targetOutcome: "Profitable ROAS with lower cart abandonment rates.",
        timeline: "Monthly Growth Retainer",
        toolsUsed: ["Google Ads", "Meta Ads Manager", "Google Merchant Center"],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "shopify-marketing",
        title: "Shopify Marketing",
        shortDesc:
          "Specialized growth marketing specifically architected for Shopify and Shopify Plus stores.",
        description:
          "Maximize your Shopify store potential with integrated app stacks, custom Liquid checkout upsells, Klaviyo automated email flows, and Meta Advantage+ shopping campaigns.",
        iconName: "Store",
        imageUrl:
          "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹24,999/month",
        deliverables: [
          "Shopify App Stack Streamlining & Speed Optimization",
          "Custom Cart Drawer Upsells & Cross-Sell Automations",
          "Klaviyo Email & SMS Flow Integration",
          "Meta & Google Conversion API (CAPI) Integration",
        ],
        idealFor:
          "D2C brands running on Shopify looking to scale past ₹5L to ₹50L+ monthly revenue.",
        roiImpact: "Increases conversion rates and Average Order Value (AOV).",
        targetOutcome: "Higher store conversion rate and automated repeat customer revenue.",
        timeline: "Ongoing Growth Cadence",
        toolsUsed: ["Shopify Plus", "Klaviyo", "Replo", "Meta Ads"],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "shopify-seo",
        title: "Shopify SEO",
        shortDesc:
          "Resolve Shopify-specific duplicate URL structures, optimize collection trees, and rank product pages.",
        description:
          "Shopify has unique SEO quirks (e.g. `/collections/all/products/...` duplicate URLs). We fix canonical tagging, optimize collection pages, and build rich snippets for search engines.",
        iconName: "SearchCheck",
        imageUrl:
          "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Shopify Duplicate Product URL Canonical Fixes",
          "Collection Tree Architecture & Keyword Mapping",
          "Schema App JSON-LD Product & Breadcrumb Injection",
          "Image Alt Tag & WebP Speed Compression",
        ],
        idealFor: "Shopify brands experiencing stalled organic traffic.",
        roiImpact: "Drives consistent organic search traffic directly to product detail pages.",
        targetOutcome: "Top page 1 rankings for core niche products.",
        timeline: "Monthly Compounding Cadence",
        toolsUsed: ["Shopify SEO", "Ahrefs", "Google Search Console"],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "amazon-marketing-ecom",
        title: "Amazon Marketing",
        shortDesc:
          "Scale on Amazon marketplace with A9 keyword optimization, A+ Brand Content, and Sponsored PPC.",
        description:
          "Dominate Amazon search rankings. We build premium A+ content, optimize backend search terms, and manage Sponsored Products, Brands, and Video ads for low TACoS.",
        iconName: "Package",
        imageUrl:
          "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "Amazon A9 Algorithm Keyword Indexing & Listing Copy",
          "Premium A+ EBC Content & Brand Storefront Design",
          "Sponsored Products & Sponsored Brands PPC Campaigns",
          "Total Advertising Cost of Sales (TACoS) Optimization",
        ],
        idealFor: "Sellers on Amazon India, US, UAE, and global marketplaces.",
        roiImpact: "Expands marketplace market share and organic Best Seller Rank (BSR).",
        targetOutcome: "Consistent top rankings in Amazon category search.",
        timeline: "Monthly Marketplace Retainer",
        toolsUsed: ["Helium 10", "Jungle Scout", "Amazon Advertising Console"],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
    ],
  },

  // ==========================================
  // 07 — BRANDING & CREATIVE
  // ==========================================
  {
    id: "branding",
    number: "07",
    title: "BRANDING & CREATIVE",
    badge: "Visual Identity & Design",
    shortDescription:
      "Craft unforgettable brand identities, bespoke logos, corporate manuals, graphic design assets, and commercial studio photography.",
    fullDescription:
      "Elevate every customer touchpoint. We craft timeless vector logos, corporate brand manuals, luxury packaging, promotional marketing collaterals, and commercial product photography that command prestige.",
    iconName: "Palette",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Branding",
    startingPrice: "₹14,999",
    benefits: [
      "Bespoke Vector Logo Marks & 35+ Page Brand Guidelines Manual",
      "High-Impact Marketing Brochures, Pitch Decks & Catalogs",
      "Pure-White & Lifestyle Studio Commercial Product Photography",
      "Consistent Multi-Channel Visual Design Language across all Assets",
    ],
    keyServicesList: [
      "Brand Management",
      "Graphic Design",
      "Logo Design",
      "Brand Identity",
      "Video Production",
      "Professional Photography",
      "Product Photography",
    ],
    status: "active",
    displayOrder: 7,
    seoTitle: "Brand Identity, Logo Design & Creative Agency | DigiBasera",
    seoDescription:
      "Bespoke corporate logo design, complete brand manuals, commercial graphic design, and studio product photography in Rajkot.",
    services: [
      {
        id: "brand-management",
        title: "Brand Management",
        shortDesc:
          "Strategic brand positioning, voice guidelines, and cross-channel visual consistency audits.",
        description:
          "Protect and elevate your brand reputation. We establish comprehensive brand governance rules, voice guidelines, and visual standards to ensure every touchpoint reinforces your premium market positioning.",
        iconName: "ShieldCheck",
        imageUrl:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "Brand Positioning & Core Value Proposition Framework",
          "Cross-Channel Brand Consistency Audits",
          "Tone of Voice & Messaging Playbooks",
          "Marketing Collateral Quality Governance",
        ],
        idealFor:
          "Established enterprises, scaling startups, and brands undergoing transformation.",
        roiImpact: "Builds lasting customer trust and premium brand equity.",
        targetOutcome: "Unmistakable, consistent brand reputation across all customer channels.",
        timeline: "Monthly Advisory & Governance",
        toolsUsed: ["Figma", "Notion", "Brand Guidelines"],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["luxury-hospitality-brand", "fintech-corporate-portal"],
      },
      {
        id: "graphic-design-core",
        title: "Graphic Design",
        shortDesc:
          "Marketing collaterals, corporate brochures, exhibition booth graphics, packaging, and digital banners.",
        description:
          "Stop the scroll and impress clients. We design high-impact marketing brochures, product catalogs, exhibition standees, packaging boxes, and digital display assets.",
        iconName: "Palette",
        imageUrl:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999",
        deliverables: [
          "Corporate Brochures, Annual Reports & Product Catalogs",
          "Print-Ready Exhibition & Standee Banners",
          "Custom Packaging, Box & Label Graphics",
          "Digital Ad Banners & High-CTR Social Graphics",
        ],
        idealFor:
          "Businesses needing polished, persuasive sales collateral for client meetings and exhibitions.",
        roiImpact:
          "Elevates perceived brand quality and gives sales teams the confidence to close larger deals.",
        targetOutcome:
          "Consistent visual polish across all pitch materials, catalogs, and public displays.",
        timeline: "5 - 10 Business Days",
        toolsUsed: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma"],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["luxury-hospitality-brand", "b2b-industrial-seo"],
      },
      {
        id: "logo-design",
        title: "Logo Design",
        shortDesc:
          "Distinctive, timeless vector logo marks engineered to represent your company identity across digital and print.",
        description:
          "Craft an enduring corporate identity. We design custom vector logo marks, monograms, color palettes, and typographic scales that look iconic across digital screens, giant billboards, and luxury packaging.",
        iconName: "Sparkles",
        imageUrl:
          "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999",
        deliverables: [
          "Multiple Unique Bespoke Logo Concepts",
          "Full Vector Master Kit (AI, EPS, SVG, PDF, High-Res PNG)",
          "Light, Dark & Monochromatic Logo Variations",
          "Favicon & Social Media Profile Kit",
        ],
        idealFor:
          "New ventures, tech startups, and established enterprises seeking corporate rebranding.",
        roiImpact:
          "Creates an iconic, memorable visual anchor in customer minds that commands premium pricing.",
        targetOutcome: "Timeless logo mark with 100% intellectual property ownership.",
        timeline: "7 - 10 Business Days",
        toolsUsed: ["Adobe Illustrator", "Figma", "Pantone Color Bridge"],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["luxury-hospitality-brand"],
      },
      {
        id: "brand-identity",
        title: "Brand Identity & Manual",
        shortDesc:
          "Comprehensive 35+ page brand guidelines manual, typography scales, color palettes, and corporate stationery.",
        description:
          "Complete corporate brand manuals covering typography rules, primary and secondary color palettes, icon styles, business stationery, and usage guidelines.",
        iconName: "Layers",
        imageUrl:
          "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹24,999",
        deliverables: [
          "Complete 35+ Page Brand Guidelines Manual (PDF)",
          "Corporate Stationery Kit (Business Cards, Letterheads, Envelopes)",
          "Color Palette Formulas (Pantone, CMYK, RGB, HEX)",
          "Typography System & Hierarchy Specifications",
        ],
        idealFor: "Companies establishing a formal, professional corporate brand.",
        roiImpact:
          "Ensures visual consistency across every agency, designer, or print vendor you work with.",
        targetOutcome: "Full brand system ready for enterprise scaling.",
        timeline: "10 - 15 Business Days",
        toolsUsed: ["Adobe InDesign", "Illustrator", "Figma"],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["luxury-hospitality-brand", "fintech-corporate-portal"],
      },
      {
        id: "video-production-branding",
        title: "Video Production",
        shortDesc:
          "High-definition corporate brand films, founder interviews, and commercial promotional video spots.",
        description:
          "Tell your story with cinematic power. We direct and produce corporate documentaries, founder interviews, product launch films, and 4K commercial videos.",
        iconName: "Video",
        imageUrl:
          "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹29,999/project",
        deliverables: [
          "Scriptwriting & Storyboarding",
          "4K Studio / On-Location Multi-Camera Shoot",
          "Cinematic Color Grading & Master Sound Design",
          "Deliverables in Multiple Aspect Ratios (16:9, 9:16, 1:1)",
        ],
        idealFor:
          "Enterprises, luxury brands, and businesses wanting high-prestige video marketing.",
        roiImpact: "Massive boost in emotional brand resonance and sales conversions.",
        targetOutcome:
          "Broadcast-quality video assets ready for web, television, and digital campaigns.",
        timeline: "2 - 3 Weeks Production",
        toolsUsed: [
          "Sony FX3 / A7S III Cinema Cameras",
          "DaVinci Resolve Studio",
          "Adobe Premiere Pro",
        ],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["luxury-hospitality-brand"],
      },
      {
        id: "professional-photography-core",
        title: "Professional Photography",
        shortDesc:
          "Corporate team portraits, architectural & interior photography, and commercial industrial shoots.",
        description:
          "Capture your business in its best light. We provide high-resolution corporate team headshots, factory & machinery shoots, and architectural photography.",
        iconName: "Camera",
        imageUrl:
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/shoot",
        deliverables: [
          "On-Location Studio Strobe Lighting Setup",
          "High-Resolution Raw & Retouched Deliverables",
          "Corporate Team Headshots & Workplace Action Shots",
          "Commercial Licensing & Full Resolution Handover",
        ],
        idealFor:
          "Corporate offices, manufacturing plants, architecture firms, and healthcare facilities.",
        roiImpact:
          "Replaces generic stock photos with authentic, high-trust imagery of your real team and facilities.",
        targetOutcome: "High-end commercial photo portfolio.",
        timeline: "3 - 5 Days Delivery",
        toolsUsed: ["Sony A7R V Full-Frame", "Profoto Studio Strobes", "Capture One Pro"],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["abfi-interior-live", "super-india-interior-live"],
      },
      {
        id: "product-photography",
        title: "Product Photography",
        shortDesc:
          "Crisp white-background e-commerce catalog photos and styled lifestyle product staging.",
        description:
          "High-resolution e-commerce product photography with true-to-life colors, clean pure-white backgrounds for Amazon/Shopify, and styled lifestyle staging.",
        iconName: "Camera",
        imageUrl:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/batch",
        deliverables: [
          "Pure White Background Catalog Shots (Amazon/Shopify Compliant)",
          "Detailed Macro & Texture Close-up Views",
          "Styled Lifestyle Prop Staging",
          "High-Resolution Color Retouching & WebP Optimization",
        ],
        idealFor:
          "E-commerce brands, jewelry makers, fashion labels, and consumer goods manufacturers.",
        roiImpact: "Reduces product return rates and builds instant buyer purchasing confidence.",
        targetOutcome:
          "Razor-sharp product images ready for online catalogs and marketing collaterals.",
        timeline: "3 - 7 Business Days",
        toolsUsed: ["Sony Full-Frame", "Profoto Lighting", "Capture One Pro", "Photoshop"],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
    ],
  },

  // ==========================================
  // 08 — CONTENT & VIDEO
  // ==========================================
  {
    id: "content-video",
    number: "08",
    title: "CONTENT & VIDEO",
    badge: "Cinematic Content & Motion",
    shortDescription:
      "High-retention video production, cinematic editing, 3D motion graphics, engaging Instagram reels, YouTube long-form, and corporate storytelling.",
    fullDescription:
      "Video is the primary language of digital attention. We produce scroll-stopping Instagram reels, cinematic YouTube long-form videos, 3D motion graphics, and corporate promotional films with professional color grading, dynamic sound design, and persuasive storytelling.",
    iconName: "Video",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Branding",
    startingPrice: "₹9,999",
    benefits: [
      "4K Cinematic Color Grading, Sound Design & Motion Titles",
      "High-Retention Instagram Reels & YouTube Shorts Hook Scripting",
      "High-Authority SEO Blog Writing & Technical Copywriting",
      "Corporate Documentary Films & High-Converting Commercial Ads",
    ],
    keyServicesList: [
      "Content Marketing",
      "Content Writing",
      "Video Production",
      "Video Editing",
      "Motion Graphics",
      "Instagram Reels",
      "YouTube Video Editing",
      "Corporate Videos",
      "Promotional Videos",
    ],
    status: "active",
    displayOrder: 8,
    seoTitle: "Video Production, Video Editing & Content Marketing Agency | DigiBasera",
    seoDescription:
      "High-retention Instagram reels, YouTube editing, 3D motion graphics, corporate films, and content marketing services.",
    services: [
      {
        id: "content-marketing",
        title: "Content Marketing",
        shortDesc:
          "Strategic content planning, thought leadership distribution, and multi-channel lead funnels.",
        description:
          "Attract and retain customers through high-value content. We build editorial calendars, research topical authority clusters, and produce insightful content that guides prospects through the buying journey.",
        iconName: "FileText",
        imageUrl:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Quarterly Content Strategy & Buyer Journey Mapping",
          "High-Value Editorial Whitepapers & PDF Lead Magnets",
          "Multi-Channel Distribution (Blog, LinkedIn, Email, Social)",
          "Content ROI & Lead Attribution Tracking",
        ],
        idealFor:
          "B2B companies, tech startups, and consultants wanting continuous inbound demand.",
        roiImpact: "Builds long-term organic inbound pipeline with high customer loyalty.",
        targetOutcome: "Consistent organic reach and inbound commercial inquiries.",
        timeline: "Monthly Content Retainer",
        toolsUsed: ["Notion", "Surfer SEO", "Google Analytics 4"],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["b2b-industrial-seo"],
      },
      {
        id: "content-writing",
        title: "Content Writing",
        shortDesc:
          "Compelling website copywriting, high-ranking SEO blog articles, and persuasive email newsletters.",
        description:
          "Words that sell and educate. We craft clear, persuasive copy for websites, landing pages, technical blog articles, product descriptions, and email newsletters.",
        iconName: "PenTool",
        imageUrl:
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹9,999/month",
        deliverables: [
          "High-Converting Website & Landing Page Copywriting",
          "In-Depth SEO Articles & Educational Buying Guides",
          "Email Marketing Newsletter Copy",
          "Product Descriptions & Press Releases",
        ],
        idealFor:
          "Any business needing articulate, conversion-focused English and Gujarati/Hindi copywriting.",
        roiImpact: "Improves reader retention, search rankings, and conversion rates.",
        targetOutcome: "Engaging, error-free copy tailored to your brand voice.",
        timeline: "Weekly Delivery Cadence",
        toolsUsed: ["Grammarly Premium", "Surfer SEO", "Hemingway"],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["b2b-industrial-seo", "healthcare-clinic-growth"],
      },
      {
        id: "video-production-content",
        title: "Video Production",
        shortDesc:
          "Full-service on-location 4K video shoots with cinema lighting, audio, and creative direction.",
        description:
          "End-to-end video production from concept and scriptwriting to filming with cinema cameras, pro lighting, and wireless audio recording.",
        iconName: "Video",
        imageUrl:
          "https://images.unsplash.com/photo-1579965342575-16428a7c8881?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹24,999/project",
        deliverables: [
          "Concept Ideation, Scriptwriting & Storyboarding",
          "4K Cinema Camera Multi-Angle Filming",
          "Professional Studio Lighting & Wireless Audio Recording",
          "Creative Direction & Talent Management",
        ],
        idealFor:
          "Corporate brands, hospitals, real estate promoters, and luxury lifestyle businesses.",
        roiImpact:
          "Creates cinematic assets that elevate brand perception and increase conversions.",
        targetOutcome: "Broadcast-quality 4K video footage ready for post-production.",
        timeline: "1 - 2 Weeks Turnaround",
        toolsUsed: ["Sony Cinema Line", "Aputure Lighting", "Sennheiser Pro Audio"],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["luxury-hospitality-brand"],
      },
      {
        id: "video-editing",
        title: "Video Editing & Post-Production",
        shortDesc:
          "Cinematic cutting, dynamic subtitles, color grading, sound design, and pacing optimization.",
        description:
          "Transform raw footage into polished masterpieces. We handle pacing, sound design, dynamic animated captions, color grading, and custom lower thirds.",
        iconName: "Film",
        imageUrl:
          "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹12,999/month",
        deliverables: [
          "Seamless Narrative Editing & Rhythm Pacing",
          "Dynamic Animated Subtitles & B-Roll Overlays",
          "Cinematic Color Correction & LUT Grading",
          "Master Sound Design & Licensed Music Synchronization",
        ],
        idealFor: "Content creators, brands with raw footage, YouTube channels, and ad agencies.",
        roiImpact: "Boosts viewer retention rate and keeps audiences hooked until the CTA.",
        targetOutcome: "Clean, high-energy videos ready for publishing.",
        timeline: "24 - 48 Hours Per Video Batch",
        toolsUsed: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "After Effects"],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["luxury-hospitality-brand"],
      },
      {
        id: "motion-graphics",
        title: "Motion Graphics & 2D/3D Animation",
        shortDesc:
          "Animated logo reveals, kinetic typography, explainer videos, and 3D product animations.",
        description:
          "Explain complex ideas effortlessly with motion design. We create animated logo intros, kinetic typography, isometric explainer videos, and 3D motion animations.",
        iconName: "Sparkles",
        imageUrl:
          "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/project",
        deliverables: [
          "Custom 2D/3D Explainer Video Animations",
          "Kinetic Typography & Animated Infographics",
          "Animated Logo Intros & Video Outros",
          "Lottie Web Vector Micro-Animations",
        ],
        idealFor: "Tech companies, SaaS platforms, financial services, and modern brands.",
        roiImpact: "Simplifies complex product features into easily digestible visual stories.",
        targetOutcome: "Captivating animations that increase page dwell time and clarity.",
        timeline: "5 - 10 Business Days",
        toolsUsed: ["Adobe After Effects", "Blender", "Cinema 4D", "LottieFiles"],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["fintech-corporate-portal"],
      },
      {
        id: "instagram-reels-content",
        title: "Instagram Reels & Shorts Production",
        shortDesc:
          "Viral short-form video reels with magnetic hooks, dynamic pacing, sound effects, and subtitles.",
        description:
          "Dominate short-form video algorithms. We script, edit, and package high-retention 9:16 vertical reels with trending sound cues, fast-paced jump cuts, and animated captions.",
        iconName: "Camera",
        imageUrl:
          "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹12,999/month",
        deliverables: [
          "Monthly Pack of 12 - 20 High-Retention Video Reels",
          "Hook Ideation & Scripting with High Retention Formulas",
          "Sound Effects (SFX), Zooms, Pop-ups & Subtitles",
          "Custom Cover Thumbnail Design for Aesthetic Grids",
        ],
        idealFor: "Founders, lifestyle brands, doctors, fitness coaches, and retail brands.",
        roiImpact: "Drives massive organic reach, follower acquisition, and direct inquiries.",
        targetOutcome: "High viral potential and deep engagement on Instagram & YouTube Shorts.",
        timeline: "Weekly Delivery Batches",
        toolsUsed: ["CapCut Pro", "Premiere Pro", "After Effects"],
        portfolioCategory: "Social Media",
        relatedCaseStudyIds: ["luxury-hospitality-brand", "healthcare-clinic-growth"],
      },
      {
        id: "youtube-video-editing",
        title: "YouTube Video Editing",
        shortDesc:
          "Long-form YouTube video editing with retention optimization, custom thumbnails, and chapter timestamps.",
        description:
          "Grow your YouTube channel with professional post-production. We optimize intro hooks, cut dead air, insert pattern interrupts, design high-CTR thumbnails, and structure chapters.",
        iconName: "Video",
        imageUrl:
          "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Long-Form Video Editing (10 - 30 minutes)",
          "High-CTR Clickable YouTube Thumbnail Designs",
          "Pattern Interrupts, Sound FX & B-Roll Placement",
          "SEO Video Titles, Descriptions & Chapter Timestamps",
        ],
        idealFor: "Business YouTubers, educational institutes, podcasters, and corporate channels.",
        roiImpact: "Higher Average View Duration (AVD) and click-through rates (CTR).",
        targetOutcome: "Consistent YouTube channel subscriber and viewership growth.",
        timeline: "48 - 72 Hours Turnaround",
        toolsUsed: ["Adobe Premiere Pro", "Photoshop", "TubeBuddy"],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["luxury-hospitality-brand"],
      },
      {
        id: "corporate-videos",
        title: "Corporate Videos",
        shortDesc:
          "Professional company overview films, factory plant tours, and investor presentations.",
        description:
          "Showcase your company scale, manufacturing capability, and leadership team with prestigious corporate documentaries and facility walkthrough films.",
        iconName: "Layers",
        imageUrl:
          "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹34,999/project",
        deliverables: [
          "Corporate Narrative Script & Executive Interviews",
          "Drone Aerial 4K Cinematography & Plant Walkthrough",
          "Voiceover in English / Gujarati / Hindi",
          "Master Video for Website Homepage & Global Exhibitions",
        ],
        idealFor:
          "Industrial manufacturers, corporate headquarters, tech enterprises, and export companies.",
        roiImpact:
          "Commands immense prestige and trust during corporate RFP bids and international client meetings.",
        targetOutcome: "An authoritative corporate film that closes high-ticket contracts.",
        timeline: "2 - 3 Weeks Complete Delivery",
        toolsUsed: ["DJI Cinema Drones", "Sony Cinema Line", "DaVinci Resolve"],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["super-india-interior-live", "b2b-industrial-seo"],
      },
      {
        id: "promotional-videos",
        title: "Promotional Videos",
        shortDesc:
          "High-energy commercial promotional ads for product launches, seasonal offers, and events.",
        description:
          "Drive urgent action with high-tempo promotional videos featuring bold typography, dynamic soundtrack beats, and irresistible calls to action.",
        iconName: "Zap",
        imageUrl:
          "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/project",
        deliverables: [
          "High-Energy Promotional Concept & Fast-Paced Script",
          "Motion Graphics, Kinetic Typography & Sound Design",
          "Multi-Format Exports for WhatsApp, Instagram Stories & Web",
          "Strong Call-to-Action Closing Cards",
        ],
        idealFor: "Product launches, festive offers, event organizers, and retail promotions.",
        roiImpact: "Creates excitement and drives immediate commercial inquiries.",
        targetOutcome: "High-converting promotional video ready for instant ad deployment.",
        timeline: "3 - 5 Business Days",
        toolsUsed: ["After Effects", "Premiere Pro"],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["luxury-hospitality-brand"],
      },
    ],
  },

  // ==========================================
  // 09 — AMAZON MARKETING
  // ==========================================
  {
    id: "amazon",
    number: "09",
    title: "AMAZON MARKETING",
    badge: "Marketplace Dominance",
    shortDescription:
      "Comprehensive Amazon seller growth, A9 algorithm SEO, Sponsored PPC campaigns, Brand Store design, and A+ content optimization.",
    fullDescription:
      "Dominate Amazon search results without burning margin. We design eye-catching Brand Storefronts, persuasive A+ / EBC content, optimize A9 backend keywords, and manage Sponsored Products, Brands, and Video ads for optimal TACoS.",
    iconName: "Package",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "E-commerce",
    startingPrice: "₹19,999/month",
    benefits: [
      "Backend Search Term & A9 Algorithm Keyword Indexing",
      "Premium A+ EBC Content & Amazon Brand Storefront Design",
      "Sponsored Products, Brands & Video PPC Management",
      "Total Advertising Cost of Sales (TACoS) & Margin Optimization",
    ],
    keyServicesList: [
      "Amazon Marketing",
      "Amazon SEO",
      "Amazon PPC",
      "Amazon Post Management",
      "Product Listing Optimization",
    ],
    status: "active",
    displayOrder: 9,
    seoTitle: "Amazon Marketing Agency & Seller Central PPC Management | DigiBasera",
    seoDescription:
      "Scale your Amazon store with A9 listing optimization, A+ content design, and Sponsored PPC management.",
    services: [
      {
        id: "amazon-marketing-core",
        title: "Amazon Marketing",
        shortDesc:
          "Comprehensive seller growth management covering organic rankings, listing quality, and advertising.",
        description:
          "End-to-end Amazon seller central management. We manage your product catalog, run sponsored campaigns, resolve listing suppressions, and optimize customer review velocity.",
        iconName: "Package",
        imageUrl:
          "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "Full Amazon Seller Central Account Health Management",
          "A9 Keyword Indexing & Listing Copy Optimization",
          "Sponsored Products & Sponsored Brands Campaign Management",
          "Weekly TACoS & Profitability Reporting",
        ],
        idealFor: "Brands selling on Amazon India, US, UAE, and international marketplaces.",
        roiImpact: "Expands marketplace market share and organic sales rank (BSR).",
        targetOutcome: "Sustainable marketplace revenue growth with controlled ad spend.",
        timeline: "Monthly Retainer Cadence",
        toolsUsed: ["Helium 10", "Jungle Scout", "Amazon Advertising Console"],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "amazon-seo",
        title: "Amazon SEO & Keyword Indexing",
        shortDesc:
          "Optimize product titles, bullet points, backend search terms, and subject matter for maximum Amazon search visibility.",
        description:
          "Ensure your ASINs index and rank for top buyer search terms. We perform competitor ASIN reverse-lookups, optimize 250-byte backend search terms, and structure keyword-dense bullet points.",
        iconName: "Search",
        imageUrl:
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Competitor Reverse ASIN Keyword Research",
          "Keyword-Optimized Title, 5 Key Bullet Points & Description",
          "250-Byte Backend Search Term Optimization",
          "Search Term Indexation & BSR Tracking",
        ],
        idealFor: "Amazon sellers with low organic traffic or suppressed listing visibility.",
        roiImpact: "Increases organic search impressions and conversion rates on product pages.",
        targetOutcome: "Top page 1 organic indexing for primary category keywords.",
        timeline: "Monthly Optimization Cadence",
        toolsUsed: ["Helium 10 Cerebro", "Jungle Scout", "Brand Analytics"],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "amazon-ppc",
        title: "Amazon PPC Management",
        shortDesc:
          "Laser-focused Sponsored Products, Sponsored Brands, and Sponsored Video campaigns to lower ACoS and TACoS.",
        description:
          "Stop wasting budget on broad irrelevant clicks. We build exact-match keyword harvesting funnels, competitor ASIN defense campaigns, and high-CTR Sponsored Video ads with daily bid adjustments.",
        iconName: "DollarSign",
        imageUrl:
          "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Sponsored Products (Exact, Phrase, Broad & ASIN Targeting)",
          "Sponsored Brands Video & Custom Storefront Header Ads",
          "Daily Bid Optimization & Negative Keyword Scrubbing",
          "Total Advertising Cost of Sales (TACoS) Reconciliation",
        ],
        idealFor:
          "Amazon sellers looking to increase sales velocity without sacrificing profit margins.",
        roiImpact: "Controls ad spend waste while expanding profitable unit volume.",
        targetOutcome: "Lower ACoS and sustainable total sales margin.",
        timeline: "Ongoing Daily/Weekly PPC Optimization",
        toolsUsed: ["Amazon Advertising Console", "Helium 10 Adtomic"],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "amazon-post-management",
        title: "Amazon Post & Storefront Management",
        shortDesc:
          "Maintain an engaging Amazon Post feed and custom multi-page Brand Storefront to build customer brand loyalty.",
        description:
          "Turn one-time shoppers into brand followers on Amazon. We design multi-page Brand Storefronts and publish daily lifestyle Amazon Posts that link directly to your product listings.",
        iconName: "Store",
        imageUrl:
          "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹9,999/month",
        deliverables: [
          "Custom Multi-Page Amazon Brand Storefront Design",
          "Scheduled Amazon Post Lifestyle Publishing (3-5 Posts/Week)",
          "Amazon Follower Growth & Brand Feed Optimization",
          "Storefront Traffic & Sales Conversion Analytics",
        ],
        idealFor:
          "Brand Registered Amazon sellers wanting a premium brand presence on the marketplace.",
        roiImpact: "Drives free organic cross-selling traffic across your entire product catalog.",
        targetOutcome: "A luxury brand storefront that boosts Average Order Value.",
        timeline: "Monthly Storefront Retainer",
        toolsUsed: ["Amazon Store Builder", "Canva Pro", "Figma"],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "product-listing-optimization",
        title: "Product Listing Optimization & A+ Content",
        shortDesc:
          "Persuasive A+ / EBC visual layout design, high-converting product infographics, and comparison charts.",
        description:
          "Maximize your listing conversion rate. We design custom Amazon A+ Content modules, comparison matrix tables, lifestyle benefit infographics, and clear warranty badges.",
        iconName: "Layout",
        imageUrl:
          "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/batch",
        deliverables: [
          "Full Amazon A+ Enhanced Brand Content (EBC) Module Design",
          "7 High-Converting Product Gallery Infographic Images",
          "Product Comparison Matrix Table & Brand Story Integration",
          "Mobile-First Layout Verification for Amazon App Users",
        ],
        idealFor: "Brands launching new products or revitalizing slow-moving listings.",
        roiImpact: "Elevates conversion rate from 8% to 15%+ on product pages.",
        targetOutcome: "Stunning listing visual presentation that stands out against competitors.",
        timeline: "5 - 7 Business Days Per ASIN",
        toolsUsed: ["Adobe Photoshop", "Illustrator", "Amazon A+ Manager"],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
    ],
  },

  // ==========================================
  // 10 — REPUTATION & CONVERSION
  // ==========================================
  {
    id: "reputation-conversion",
    number: "10",
    title: "REPUTATION & CONVERSION",
    badge: "Trust & Funnel Optimization",
    shortDescription:
      "Protect brand sentiment, remove conversion bottlenecks with heatmap audits, maximize Google reviews, and deploy real-time analytics dashboards.",
    fullDescription:
      "Protect your brand name, build unstoppable customer trust, and eliminate revenue leaks. We manage online review generation, resolve negative sentiment, optimize user funnel friction through heatmap audits, and provide executive analytics dashboards.",
    iconName: "ShieldCheck",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "SEO",
    startingPrice: "₹14,999/month",
    benefits: [
      "Automated Google Review Generation & Negative Sentiment Defense",
      "User Heatmap & Checkout Drop-off Friction Elimination",
      "100% Google Business Profile Optimization & Verification",
      "Custom Looker Studio Real-Time Executive Dashboards",
    ],
    keyServicesList: [
      "Online Reputation Management",
      "Conversion Rate Optimization",
      "Google Business Profile Optimization",
      "Analytics & Reporting",
    ],
    status: "active",
    displayOrder: 10,
    seoTitle: "Online Reputation Management & CRO Services | DigiBasera",
    seoDescription:
      "Protect your digital brand reputation, generate positive reviews, and optimize conversion rates with data-driven CRO.",
    services: [
      {
        id: "online-reputation-management",
        title: "Online Reputation Management (ORM)",
        shortDesc:
          "Generate positive customer reviews, suppress negative search results, and protect brand reputation.",
        description:
          "Your online reputation directly influences customer decisions. We deploy automated WhatsApp/SMS review generation flows, manage public review responses, and suppress negative search results with positive branded content.",
        iconName: "ShieldCheck",
        imageUrl:
          "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Automated Customer Review Request System (WhatsApp / SMS)",
          "Google, Trustpilot & Facebook Review Monitoring & Professional Responses",
          "Negative Search Result Suppression & Brand Defense Assets",
          "Crisis Communication Protocols & Sentiment Analysis",
        ],
        idealFor:
          "Hospitals, clinics, high-ticket services, luxury brands, and corporate enterprises.",
        roiImpact: "Higher conversion rates as prospective buyers research your brand online.",
        targetOutcome: "4.8+ star rating across Google and major public review portals.",
        timeline: "Monthly Reputation Management",
        toolsUsed: ["Birdeye", "Google Business Profile", "Brand24", "Trustpilot"],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["healthcare-clinic-growth"],
      },
      {
        id: "conversion-rate-optimization-reputation",
        title: "Conversion Rate Optimization (CRO)",
        shortDesc:
          "Eliminate friction points on landing pages, forms, and checkouts through user session analysis and A/B tests.",
        description:
          "Maximize the revenue generated from every visitor. We audit session recordings, deploy usability surveys, redesign form fields, and run scientific A/B split tests.",
        iconName: "Target",
        imageUrl:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "User Session Recording & Heatmap Behavior Analysis",
          "Form Field Friction Elimination & Mobile UI Redesign",
          "A/B Split Testing & Value Proposition Refinement",
          "Monthly Conversion Uplift Attribution Reporting",
        ],
        idealFor:
          "Websites and e-commerce stores wanting to get more leads without increasing ad spend.",
        roiImpact: "Directly multiplies lead and revenue volume from existing web traffic.",
        targetOutcome: "20% to 40% improvement in core conversion metrics.",
        timeline: "Monthly CRO Sprint Cycles",
        toolsUsed: ["Hotjar", "Microsoft Clarity", "Google Analytics 4", "VWO"],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["ecom-fashion-scale", "real-estate-leads"],
      },
      {
        id: "google-business-profile-optimization",
        title: "Google Business Profile Optimization",
        shortDesc:
          "Complete Google Maps profile management, weekly geo-tagged posts, product listings, and Q&A management.",
        description:
          "Keep your Google Business Profile active and authoritative. We manage weekly geo-tagged updates, add product catalogs, respond to user Q&As, and optimize local categories.",
        iconName: "MapPin",
        imageUrl:
          "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹9,999/month",
        deliverables: [
          "100% Profile Information & Category Verification",
          "Weekly Geo-Tagged Updates & Promotional Posts",
          "Product & Service Catalog Upload with WhatsApp CTAs",
          "Review Velocity & Inbound Call Tracking Analytics",
        ],
        idealFor:
          "Local businesses, showrooms, clinics, consultants, and multi-location branch networks.",
        roiImpact: "Continuous inbound phone calls, driving directions, and local website clicks.",
        targetOutcome: "Top 3 placement in local Google Maps searches.",
        timeline: "Monthly Cadence",
        toolsUsed: ["Google Business Profile Manager", "BrightLocal"],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["healthcare-clinic-growth", "real-estate-leads"],
      },
      {
        id: "analytics-and-reporting",
        title: "Analytics & Reporting",
        shortDesc:
          "Live Looker Studio executive dashboards uniting Google Ads, Meta Ads, SEO, and CRM conversion metrics.",
        description:
          "Stop drowning in fragmented data. We unify all your marketing channels into an interactive Looker Studio dashboard that delivers real-time visibility on spend, leads, CAC, and ROAS.",
        iconName: "Sliders",
        imageUrl:
          "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹9,999/month",
        deliverables: [
          "Custom Live Executive Looker Studio Dashboard",
          "Cross-Channel Attribution (Google, Meta, Organic, Direct)",
          "Automated Scheduled Weekly & Monthly PDF Reports",
          "Monthly Strategy Review Call with Growth Specialists",
        ],
        idealFor: "Founders, CMOs, and Marketing Directors who value transparent ROI tracking.",
        roiImpact: "Gives management the exact data needed to allocate marketing capital wisely.",
        targetOutcome: "Single source of truth for all marketing metrics.",
        timeline: "Setup in 5 Days + Monthly Maintenance",
        toolsUsed: ["Looker Studio", "Google Analytics 4", "Supermetrics"],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["fintech-corporate-portal", "ecom-fashion-scale"],
      },
    ],
  },

  // ==========================================
  // 11 — WEDDING CREATIVE
  // ==========================================
  {
    id: "wedding-creative",
    number: "11",
    title: "WEDDING CREATIVE",
    badge: "Luxury Wedding Media",
    shortDescription:
      "Luxury wedding video editing, cinematic teaser reels, master color grading, 4K multi-cam documentary films, and handcrafted premium wedding albums.",
    fullDescription:
      "Preserve timeless memories with luxury cinematic wedding films and handcrafted premium wedding albums. We provide 4K multi-camera video editing, master color grading, emotional audio synchronization, Instagram teaser reels, and museum-grade album design.",
    iconName: "Heart",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Photography",
    startingPrice: "₹14,999",
    benefits: [
      "Cinematic Color Grading & 4K Multi-Camera Audio Sync",
      "Emotional Narrative Storytelling & Custom Soundtrack Curation",
      "Instagram Teaser Reels Delivered with 24-48 Hour Turnaround",
      "Museum-Grade Layflat Leather & Acrylic Luxury Wedding Album Layouts",
    ],
    keyServicesList: [
      "Wedding Video Editing",
      "Wedding Highlight",
      "Cinematic Wedding Film",
      "Wedding Album Design",
      "Premium Album Design",
      "Wedding Social Media Reels",
    ],
    status: "active",
    displayOrder: 11,
    seoTitle: "Luxury Wedding Video Editing & Album Design | DigiBasera",
    seoDescription:
      "Cinematic wedding films, multi-camera editing, wedding highlight teasers, and luxury photo album design.",
    services: [
      {
        id: "wedding-video-editing",
        title: "Wedding Video Editing",
        shortDesc:
          "Professional multi-camera synchronization, speech audio cleanup, color correction, and full ceremony cuts.",
        description:
          "Turn hours of raw footage into an emotional, seamless wedding film. We synchronize multi-camera angles, clean ceremony speeches, balance natural soundscapes, and color-correct every scene.",
        iconName: "Film",
        imageUrl:
          "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999",
        deliverables: [
          "Multi-Camera 4K Audio & Video Synchronization",
          "Ceremony, Vows & Sangeet Full-Length Structured Cuts",
          "Professional Color Correction & Lighting Balancing",
          "Audio Denoising & Speech Enhancement",
        ],
        idealFor:
          "Wedding studios, professional videographers, and couples wanting cinematic post-production.",
        roiImpact: "Delivers breathtaking wedding memories that couples treasure for generations.",
        targetOutcome: "Flawless full-length wedding film with crystal-clear audio.",
        timeline: "7 - 14 Business Days",
        toolsUsed: ["DaVinci Resolve Studio", "Adobe Premiere Pro", "iZotope RX Audio"],
        portfolioCategory: "Photography",
        relatedCaseStudyIds: ["luxury-hospitality-brand"],
      },
      {
        id: "wedding-highlight",
        title: "Wedding Highlight (3–5 Minutes)",
        shortDesc:
          "High-energy, emotional 3 to 5-minute wedding teaser highlights set to licensed music.",
        description:
          "The essence of the entire wedding captured in a fast-paced, emotional 3 to 5-minute highlight film. Perfect for sharing with friends and family on social media and WhatsApp.",
        iconName: "Video",
        imageUrl:
          "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹12,999",
        deliverables: [
          "3 to 5-Minute Cinematic Highlight Cut",
          "Emotional Sound Design with Vows & Ambient Audio",
          "Cinematic LUT Color Grading",
          "WhatsApp-Optimized & 4K High-Res Master Exports",
        ],
        idealFor:
          "Couples and wedding studios wanting a shareable, breathtaking recap of the celebrations.",
        roiImpact: "High shareability across family networks and social media platforms.",
        targetOutcome: "An emotional, viral-quality wedding recap video.",
        timeline: "5 - 7 Business Days",
        toolsUsed: ["DaVinci Resolve", "Premiere Pro"],
        portfolioCategory: "Photography",
        relatedCaseStudyIds: ["luxury-hospitality-brand"],
      },
      {
        id: "cinematic-wedding-film",
        title: "Cinematic Wedding Film (15–30 Minutes)",
        shortDesc:
          "Master documentary-style wedding film with bespoke storytelling, drone visuals, and theatrical color grading.",
        description:
          "A theatrical documentary film chronicling the entire journey: preparations, family emotional moments, rituals, and grand celebrations. Mastered with bespoke storytelling and cinematic grading.",
        iconName: "Film",
        imageUrl:
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹24,999",
        deliverables: [
          "15 to 30-Minute Feature Documentary Cut",
          "Bespoke Chapter Structuring (Haldi, Mehendi, Sangeet, Varmala, Reception)",
          "Theatrical 4K Drone Footage Integration & Color Grading",
          "Master Dolby Surround Sound Balancing",
        ],
        idealFor: "Grand luxury weddings and destination weddings.",
        roiImpact: "A timeless heirloom film that feels like a feature cinema release.",
        targetOutcome: "A master film capturing every nuance and emotion of the wedding.",
        timeline: "10 - 20 Business Days",
        toolsUsed: ["DaVinci Resolve Studio", "Adobe Premiere Pro"],
        portfolioCategory: "Photography",
        relatedCaseStudyIds: ["luxury-hospitality-brand"],
      },
      {
        id: "wedding-album-design",
        title: "Wedding Album Design",
        shortDesc:
          "Clean, elegant photo selection, storytelling page layouts, and color-corrected print preparation.",
        description:
          "Transform hundreds of photos into a beautiful storytelling photobook. We curate the best moments, design balanced page spreads, and prepare color-accurate print files.",
        iconName: "Image",
        imageUrl:
          "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹9,999",
        deliverables: [
          "Curated 20 - 40 Sheet (40 - 80 Pages) Album Spread Design",
          "Skin Retouching & Professional Color Balancing for Print",
          "Clean, Minimalist Non-Cluttered Storytelling Layouts",
          "Print-Ready 300 DPI CMYK PDF & TIFF Master Files",
        ],
        idealFor:
          "Couples and wedding photographers wanting elegant album designs without tacky clip-art.",
        roiImpact: "Preserves cherished moments in a timeless, modern visual layout.",
        targetOutcome: "Print-ready album spreads ready for high-end photobook printing.",
        timeline: "5 - 7 Business Days",
        toolsUsed: ["Adobe InDesign", "Photoshop", "Lightroom Classic"],
        portfolioCategory: "Photography",
        relatedCaseStudyIds: ["luxury-hospitality-brand"],
      },
      {
        id: "premium-album-design",
        title: "Premium Luxury Album Design",
        shortDesc:
          "Handcrafted luxury layflat albums with leather/acrylic embossed covers and metallic page finishes.",
        description:
          "For couples wanting the pinnacle of luxury. We design oversized layflat panoramic spreads with metallic paper finishes, handcrafted Italian leather covers, and acrylic photo inserts.",
        iconName: "Sparkles",
        imageUrl:
          "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999",
        deliverables: [
          "High-End Panoramic Layflat Seamless Spreads",
          "Custom Embossed Leather / Velvet / Acrylic Box & Cover Design",
          "Advanced High-Frequency Separation Skin Retouching",
          "Museum-Grade Archival Print Calibration",
        ],
        idealFor: "Luxury royal weddings, high-end destination weddings, and VIP clientele.",
        roiImpact: "Creates an heirloom showpiece for family coffee tables.",
        targetOutcome: "Unsurpassed tactile and visual luxury album presentation.",
        timeline: "7 - 10 Business Days",
        toolsUsed: ["Adobe InDesign", "Photoshop Pro", "Capture One Pro"],
        portfolioCategory: "Photography",
        relatedCaseStudyIds: ["luxury-hospitality-brand"],
      },
      {
        id: "wedding-social-media-reels",
        title: "Wedding Social Media Reels",
        shortDesc:
          "Trendy 9:16 vertical Instagram reels with fast turnaround for instant social sharing during the wedding.",
        description:
          "Share your wedding highlights while the celebration is still happening. We edit high-energy 9:16 reels with trending audio for Instagram within 24 to 48 hours of event completion.",
        iconName: "Camera",
        imageUrl:
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹9,999",
        deliverables: [
          "Pack of 3 - 6 Viral Instagram 9:16 Vertical Reels",
          "24 - 48 Hour Fast Express Delivery During Wedding Week",
          "Synchronized to Trending Wedding Audio & Royalty-Free Tracks",
          "High-Bitrate 4K Master Upload Optimization",
        ],
        idealFor: "Modern couples and wedding influencers wanting instant social media buzz.",
        roiImpact: "Instant virality and high engagement among wedding guests and friends.",
        targetOutcome: "Stunning Instagram reels ready to post immediately.",
        timeline: "24 - 48 Hours Fast Turnaround",
        toolsUsed: ["CapCut Pro", "Premiere Pro"],
        portfolioCategory: "Photography",
        relatedCaseStudyIds: ["luxury-hospitality-brand"],
      },
    ],
  },
  // ==========================================
  // 12 — AREAS WE SERVE
  // ==========================================
  {
    id: "areas-we-serve",
    number: "12",
    title: "AREAS WE SERVE",
    badge: "Pan-India Reach & Regional Hubs",
    shortDescription:
      "Explore the 30+ cities where DigiBasera delivers expert digital marketing, SEO, social media, PPC, web design, and branding support with dedicated regional execution teams.",
    fullDescription:
      "DigiBasera delivers specialized digital marketing, local and enterprise SEO, high-conversion web development, Google & Meta Ads, and social media dominance across major metro hubs and industrial corridors throughout India. From Delhi NCR, Mumbai, and Bangalore to Ahmedabad, Surat, Pune, and beyond, our regional specialists tailor campaigns to local market dynamics, languages, and consumer behavior.",
    iconName: "MapPin",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Websites",
    startingPrice: "Custom Regional Package",
    benefits: [
      "30+ Key Commercial Cities Covered Across North, West, South & East India",
      "City-Specific SEO & Local Search Dominance (Google Business Profile & Local 3-Pack)",
      "Hyper-Targeted Regional Performance Marketing & Multi-Lingual Meta/Google Ads",
      "Physical Delivery & Strategic Consultation Hubs Across India's Commercial Centers",
    ],
    keyServicesList: [
      "Digital Marketing by City",
      "Local & Regional SEO",
      "City-Centric Social Media",
      "Regional PPC & Google Ads",
      "Hyper-Local Web Design",
      "Regional Influencer Marketing",
    ],
    status: "active",
    displayOrder: 12,
    seoTitle: "Areas We Serve - Digital Marketing Agency Across India | DigiBasera",
    seoDescription:
      "Explore the cities where DigiBasera provides digital marketing, SEO, social media, PPC, web design, and branding across India.",
    services: [
      {
        id: "digital-marketing-by-city",
        title: "Digital Marketing Across 30+ Cities",
        shortDesc:
          "End-to-end digital marketing solutions tailored to consumer behavior and competitive landscapes in India's top metropolitan and tier-1/tier-2 hubs.",
        description:
          "Whether your target market is in Delhi, Mumbai, Bangalore, Pune, Ahmedabad, Surat, or Hyderabad, we deliver localized full-funnel digital marketing campaigns that drive leads, revenue, and brand authority.",
        iconName: "Compass",
        imageUrl:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "Custom by Region",
        deliverables: [
          "Hyper-Local Market & Competitor Analysis",
          "Geo-Targeted Multi-Channel Campaign Architecture",
          "City-Specific Ad Copy, Creatives & Regional Messaging",
          "Omnichannel Attribution & Regional Growth Dashboards",
        ],
        idealFor:
          "Businesses expanding into new regional markets across India or dominating their local metro ecosystem.",
        roiImpact: "Prevents regional ad wastage and accelerates localized customer acquisition.",
        targetOutcome: "Market leadership and localized commercial authority in chosen cities.",
        timeline: "Ongoing Monthly Execution",
        toolsUsed: ["Google Analytics 4", "Meta Ads Manager", "Google Ads", "SEMrush"],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["real-estate-leads", "luxury-hospitality-brand"],
      },
      {
        id: "local-seo-services",
        title: "Local & Regional SEO Domination",
        shortDesc:
          "Top rankings in Google Search and Google Maps Local 3-Pack for high-intent city searches.",
        description:
          "We engineer city-specific landing pages, optimize Google Business Profiles (GBP), build high-authority local citations, and generate geo-relevant backlinks to dominate search results in every target city.",
        iconName: "Search",
        imageUrl:
          "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹14,999/month",
        deliverables: [
          "Google Business Profile (GBP) Optimization & Weekly Geo-Posts",
          "Localized Keyword Targeting & City Landing Pages",
          "Local Directory & Citation Building (50+ High DA Portals)",
          "Review Generation & Local Reputation Management",
        ],
        idealFor:
          "Local businesses, multi-location franchises, clinics, retail stores, real estate firms, and service professionals.",
        roiImpact:
          "Drives direct phone calls, map directions, and high-intent walk-in or local inquiries.",
        targetOutcome: "#1 to #3 rankings in Google Maps Local Pack for key city queries.",
        timeline: "30 - 90 Days Organic Trajectory",
        toolsUsed: ["Google Business Profile", "SEMrush", "Ahrefs", "BrightLocal"],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["b2b-pharma-seo", "interior-design-firm"],
      },
      {
        id: "regional-web-design",
        title: "City-Centric Web Design & Development",
        shortDesc:
          "High-performance, ultra-fast websites crafted for regional audiences, multi-lingual support, and high conversion rates.",
        description:
          "Custom web design and development engineered for high commercial conversion. We create lightning-fast, mobile-first websites tailored to the regional preferences and brand expectations of consumers across Indian cities.",
        iconName: "Code2",
        imageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹24,999/project",
        deliverables: [
          "Custom UI/UX Designed for Regional Demographics",
          "Sub-Second Mobile Load Speed & Core Web Vitals Compliance",
          "WhatsApp Lead Funnels & Click-to-Call Integration",
          "Full SEO Schema & Local Microdata Architecture",
        ],
        idealFor:
          "Companies seeking high-converting websites optimized for Indian metropolitan and regional buyers.",
        roiImpact: "Up to 3x increase in website-to-lead conversion rates.",
        targetOutcome: "A world-class digital storefront that commands trust in any market.",
        timeline: "2 - 4 Weeks Turnaround",
        toolsUsed: ["React", "Next.js", "WordPress", "Tailwind CSS", "Figma"],
        portfolioCategory: "Websites",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "city-social-media-ppc",
        title: "City-Specific Social Media & PPC Advertising",
        shortDesc:
          "Hyper-targeted Meta Ads, Google PPC campaigns, and regional influencer activations across 30+ Indian cities.",
        description:
          "Reach audiences with pinpoint geographic precision. We manage paid search, display, and social advertising campaigns geotargeted by city, pin code, and demographic profiles for maximum ROAS.",
        iconName: "TrendingUp",
        imageUrl:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
        pricingStartingAt: "₹19,999/month",
        deliverables: [
          "Geo-Fenced Meta & Google Ads Campaigns",
          "Regional Language Ad Creatives & Video Variations",
          "Negative Keyword Scrubbing & Location Bid Adjustments",
          "Weekly ROAS & Cost-Per-Lead (CPL) Tracking",
        ],
        idealFor:
          "Brands wanting high-intent leads and sales in specific cities without wasting ad budget outside target zones.",
        roiImpact:
          "Drastically lowers cost-per-acquisition (CPA) through tight geographic relevance.",
        targetOutcome: "Consistent flow of verified regional leads.",
        timeline: "Continuous Monthly Management",
        toolsUsed: ["Meta Ads Manager", "Google Ads", "Canva Pro", "Looker Studio"],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["real-estate-leads"],
      },
    ],
  },
];

// Helper to load main services from localStorage or fallback
export function loadStoredMainServices(): MainServiceCatalogueItem[] {
  try {
    const raw = localStorage.getItem(MAIN_SERVICES_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Error loading stored main services:", e);
  }
  return DEFAULT_MAIN_SERVICES;
}

// Helper to save main services to localStorage
export function saveStoredMainServices(services: MainServiceCatalogueItem[]): void {
  try {
    localStorage.setItem(MAIN_SERVICES_STORAGE_KEY, JSON.stringify(services));
  } catch (e) {
    console.error("Error saving stored main services:", e);
  }
}

// Helper to reset to factory defaults
export function resetMainServicesToFactoryDefaults(): void {
  try {
    localStorage.removeItem(MAIN_SERVICES_STORAGE_KEY);
  } catch (e) {
    console.error("Error resetting main services:", e);
  }
}
