import {
  ServiceCategory,
  IndustryItem,
  PortfolioCaseStudy,
  WhyChooseUsItem,
  ProcessStep,
  FaqItem,
  TestimonialItem,
  LiveClientWebsite,
  SocialMediaPost,
} from "../types";

export const AGENCY_CONFIG = {
  name: "DigiBasera",
  tagline: "DIGITAL MARKETING • SEO • WEB DEVELOPMENT • RAJKOT",
  headline: "Top Digital Marketing Agency & Web Development in Rajkot, Gujarat",
  supportingText:
    "Rajkot's premier digital marketing and web technology agency. We engineer high-ROI SEO services, Google Ads PPC management, custom React/Next.js website design, Shopify e-commerce, and viral social media marketing for ambitious businesses across Gujarat and India.",
  statement: "We turn search visibility and digital campaigns into measurable commercial revenue.",
  phoneDisplay: "+91 98987 78047",
  phoneRaw: "919898778047",
  email: "contact@digibasera.com",
  headquarters:
    "Chandresh Nagar Main Road, Mayani Chowk, Opposite Backbone Shopping Centre, Rajkot - 360004",
  location:
    "Chandresh Nagar Main Road, Mayani Chowk, Opp. Backbone Shopping Centre, Rajkot - 360004",
  googleMapsUrl: "https://share.google/6qE9KBy6hSqJnPcZ2",
  googleBusinessUrl: "https://share.google/6qE9KBy6hSqJnPcZ2",
  social: {
    instagram: "https://www.instagram.com/digibasera/",
    facebook: "https://www.facebook.com/share/19SrkrXX2x/",
    linkedin: "https://www.linkedin.com/company/digibasera/",
    googleBusiness: "https://share.google/6qE9KBy6hSqJnPcZ2",
  },
  defaultWhatsappMsg:
    "Hello DigiBasera, I am interested in your digital marketing and web development services in Rajkot. I would like to discuss my project requirements.",
  trainingWhatsappMsg:
    "Hello DigiBasera, I am interested in your Digital Marketing Training Course in Rajkot (Zinmatt Associate). Please share syllabus and batch details.",
  founder: {
    name: "Firasat Ali",
    role: "Founder & Chief Strategist",
  },
};

export const TRUST_STATS = [
  {
    value: "150+",
    label: "Projects Delivered",
    caption: "Across varied digital industries",
    editablePlaceholder: true,
  },
  {
    value: "50+",
    label: "Businesses Scaled",
    caption: "D2C, B2B & high-growth brands",
    editablePlaceholder: true,
  },
  {
    value: "10+",
    label: "Core Services",
    caption: "From Strategy to Web & Ads",
    editablePlaceholder: true,
  },
  {
    value: "100%",
    label: "Commitment to Growth",
    caption: "Transparent ROI & metrics",
    editablePlaceholder: true,
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "web-development",
    number: "01",
    title: "WEB DEVELOPMENT",
    badge: "High-Performance Web",
    shortDescription:
      "Custom, blazing-fast, and responsive web platforms engineered with React, Next.js, and modern full-stack architectures.",
    iconName: "Code2",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Websites",
    services: [
      {
        id: "custom-web-dev",
        title: "Custom Web Development",
        shortDesc:
          "High-speed, SEO-optimized bespoke web development using React, Next.js, TypeScript, and clean code standards.",
        description:
          "We engineer high-performance web applications and corporate digital platforms designed for extreme speed, search visibility, and maximum conversion. Built from scratch with zero bloat to guarantee sub-second page loads and 99.9% uptime.",
        iconName: "Code2",
        imageUrl:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Clean Semantic TypeScript & React/Next.js Architecture",
          "Google Lighthouse 95+ Core Web Vitals Optimization",
          "Cross-browser & Full Responsive Viewport Perfection",
          "SSL, OWASP Security Hardening & CDN Caching",
        ],
        idealFor:
          "Businesses needing high-speed custom web infrastructure that never breaks under peak traffic.",
        roiImpact: "Sub-second load times keep visitors engaged and boost Google organic rankings.",
        targetOutcome:
          "98/100 Google PageSpeed score and zero downtime during high-traffic ad campaigns.",
        timeline: "2 - 4 Weeks End-to-End Build",
        toolsUsed: [
          "React",
          "Next.js",
          "Tailwind CSS",
          "TypeScript",
          "Node.js",
          "Vercel / Cloudflare",
        ],
        methodology: [
          "Technical Architecture & Schema Design",
          "Component-Driven Frontend Development",
          "API & Database Integration",
          "Rigorous Cross-Device QA & Launch",
        ],
        portfolioCategory: "Websites",
        relatedCaseStudyIds: ["fintech-corporate-portal", "ecom-fashion-scale"],
      },
      {
        id: "fullstack-web-apps",
        title: "Full-Stack Web Applications & Portals",
        shortDesc:
          "Custom interactive web portals, client dashboards, SaaS MVPs, and internal workflow automation systems.",
        description:
          "Transform complex business logic into intuitive web portals. We build secure customer portals, role-based admin panels, real-time booking engines, and database-driven web applications that streamline enterprise operations.",
        iconName: "Terminal",
        imageUrl:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Custom Backend API & Relational Database Architecture",
          "Role-Based Access Control (RBAC) & Authentication",
          "Interactive Client Dashboards & Real-time Reporting",
          "Third-Party API & Webhook Integrations",
        ],
        idealFor:
          "Enterprises, SaaS startups, and organizations requiring bespoke interactive web tools.",
        roiImpact:
          "Automates manual operational tasks, saving hundreds of administrative hours each month.",
        targetOutcome:
          "Robust, self-service web portals with secure authentication and enterprise-grade reliability.",
        timeline: "3 - 6 Weeks Agile Sprints",
        toolsUsed: ["Node.js", "PostgreSQL / MongoDB", "Express", "React", "Docker", "AWS Cloud"],
        methodology: [
          "System Architecture & Database Modeling",
          "RESTful API & Auth Implementation",
          "Interactive Frontend Interface Sprints",
          "Security Audits & Load Testing",
        ],
        portfolioCategory: "Websites",
        relatedCaseStudyIds: ["fintech-corporate-portal", "b2b-industrial-seo"],
      },
      {
        id: "wordpress-cms-dev",
        title: "WordPress & Headless CMS Engineering",
        shortDesc:
          "Custom lightweight WordPress and Headless CMS portals designed for easy in-house content publishing with zero bloat.",
        description:
          "Get the intuitive editing power of WordPress without the slowness of generic page builders. We build custom Gutenberg and ACF Pro themes with enterprise security, sub-second caching, and intuitive admin panels.",
        iconName: "Globe2",
        imageUrl:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Custom Lightweight WordPress Theme (No Slow Page Builders)",
          "Advanced Custom Fields (ACF Pro) Custom Admin Panels",
          "Speed Optimization & Malware Hardening Protocols",
          "Client Admin Video Guides & Handover Docs",
        ],
        idealFor:
          "Content-heavy websites, corporate brands, educational institutes, and publishing houses.",
        roiImpact:
          "Zero maintenance headaches and rapid in-house content publishing by your internal team.",
        targetOutcome:
          "Sub-second page speeds with effortless 5-minute blog and landing page creation.",
        timeline: "10 - 15 Business Days",
        toolsUsed: ["WordPress", "ACF Pro", "PHP", "Tailwind CSS", "WP Rocket", "Cloudflare"],
        methodology: [
          "Custom Field Structure Mapping",
          "Lightweight Theme Coding",
          "Security Hardening & Malware Defense",
          "Content Migration & Client Handover",
        ],
        portfolioCategory: "Websites",
        relatedCaseStudyIds: ["b2b-industrial-seo", "healthcare-clinic-growth"],
      },
    ],
  },
  {
    id: "ecommerce-development",
    number: "02",
    title: "E-COMMERCE DEVELOPMENT",
    badge: "Storefront Engineering",
    shortDescription:
      "High-converting custom Shopify stores, WooCommerce platforms, and custom headless commerce systems engineered to maximize sales.",
    iconName: "ShoppingCart",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "E-commerce",
    services: [
      {
        id: "shopify-store-dev",
        title: "Shopify & Shopify Plus Development",
        shortDesc:
          "Custom Shopify 2.0 themes with instant mobile checkouts, drawer upsells, and seamless ERP/courier integrations.",
        description:
          "We engineer custom Shopify stores designed for high conversion and minimal cart abandonment. Featuring speed-optimized Liquid code, 1-click cart drawer upsells, custom product builders, and integrated payment gateways.",
        iconName: "Store",
        imageUrl:
          "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Custom Shopify 2.0 Liquid Theme Development",
          "Mobile-First Quick Checkout & Sticky Buy Bars",
          "Payment Gateway (Razorpay/Stripe) & Courier API Setup",
          "Speed Optimization & App Stack Streamlining",
        ],
        idealFor:
          "D2C brands, retail chains, and international merchants seeking scalable e-commerce infrastructure.",
        roiImpact:
          "Industry-leading checkout conversion rates and higher Average Order Value (AOV).",
        targetOutcome:
          "25% to 40% uplift in store conversion rate and sub-2-second mobile load time.",
        timeline: "2 - 3 Weeks Custom Build",
        toolsUsed: ["Shopify Plus", "Liquid", "Replo", "Klaviyo", "Shiprocket", "Razorpay"],
        methodology: [
          "Commerce Wireframing & Product Flow",
          "Custom Liquid & Theme Development",
          "App Stack & Payment Gateway Configuration",
          "Pre-Launch Checkout Stress Testing",
        ],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "custom-ecommerce-portal",
        title: "Custom E-Commerce & Multi-Vendor Platforms",
        shortDesc:
          "Custom multi-vendor marketplaces, WooCommerce stores, and bespoke B2B wholesale ordering systems.",
        description:
          "For brands requiring custom product configurators, wholesale pricing tiers, or multi-vendor capabilities. We build bespoke commerce platforms with advanced inventory sync, automated invoices, and customized buyer journeys.",
        iconName: "Layers",
        imageUrl:
          "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Custom Product Configurator & Matrix Options",
          "B2B Wholesale Login & Tiered Pricing Architecture",
          "Automated GST Invoicing & Warehouse Inventory Sync",
          "Multi-Currency & International Shipping Rules",
        ],
        idealFor:
          "Manufacturers, B2B wholesalers, and brands with complex product personalization workflows.",
        roiImpact:
          "Opens new digital B2B wholesale channels and scales high-volume order processing.",
        targetOutcome: "Fully automated ordering, invoicing, and real-time inventory management.",
        timeline: "3 - 5 Weeks Full Delivery",
        toolsUsed: ["WooCommerce", "React Commerce", "Node.js", "Stripe", "Custom ERP Connectors"],
        methodology: [
          "Catalog Architecture & Schema Design",
          "Custom Pricing & Checkout Logic",
          "Warehouse & Inventory Integration",
          "End-to-End Transaction Testing",
        ],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale", "b2b-industrial-seo"],
      },
    ],
  },
  {
    id: "ecommerce-marketing",
    number: "03",
    title: "E-COMMERCE MARKETING",
    badge: "Sales & LTV Scaling",
    shortDescription:
      "Full-funnel D2C marketing, Amazon/Flipkart marketplace scaling, Advantage+ catalog ads, and automated email/SMS retention funnels.",
    iconName: "TrendingUp",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "E-commerce",
    services: [
      {
        id: "d2c-performance-ads",
        title: "D2C Performance Marketing & Catalog Ads",
        shortDesc:
          "Scale online store sales with high-ROAS Meta Advantage+ catalog ads and Google Shopping campaigns.",
        description:
          "Scale your D2C brand profitably. We combine Meta Advantage+ Shopping, Google Performance Max Shopping feeds, dynamic product retargeting, and high-converting video hooks to lower CAC and maximize store revenue.",
        iconName: "TrendingUp",
        imageUrl:
          "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Advantage+ Catalog & Dynamic Retargeting Campaigns",
          "Google Shopping Feed & Merchant Center Optimization",
          "UGC & Creative Hook Video Testing Batches",
          "Blended ROAS & Merchandising Analytics Dashboard",
        ],
        idealFor: "D2C brands seeking profitable unit economics and continuous revenue scaling.",
        roiImpact:
          "Continuous reduction of Customer Acquisition Cost with higher average order values.",
        targetOutcome: "Scale monthly revenue with predictable 4.0x - 6.5x Blended ROAS.",
        timeline: "Ongoing Growth Retainer",
        toolsUsed: [
          "Meta Ads Manager",
          "Google Merchant Center",
          "Triple Whale",
          "AppsFlyer",
          "Canva Pro",
        ],
        methodology: [
          "Catalog Feed & Pixel Sync",
          "Top-of-Funnel Creative Testing",
          "Dynamic Retargeting Architecture",
          "ROAS-Driven Budget Scaling",
        ],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "marketplace-growth",
        title: "Amazon & Marketplace Growth Management",
        shortDesc:
          "Comprehensive Amazon and marketplace management covering listing optimization, A+ content, and Sponsored Ads.",
        description:
          "Dominate Amazon and marketplace search results. We design eye-catching Brand Storefronts, persuasive A+ / EBC content, optimize A9 backend keywords, and manage Sponsored Products, Brands, and Video ads for low TACoS.",
        iconName: "Package",
        imageUrl:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Amazon A9 Keyword Indexing & Listing Optimization",
          "Custom Amazon Brand Storefront & Premium A+ Content",
          "Sponsored Products, Brands & Video PPC Management",
          "Total Advertising Cost of Sales (TACoS) Optimization",
        ],
        idealFor: "Brands selling on Amazon India, US, Flipkart, and global marketplaces.",
        roiImpact:
          "Surges organic placement, defends brand search terms, and expands marketplace revenue.",
        targetOutcome: "Top 5 BSR (Best Seller Rank) in niche categories with under 15% TACoS.",
        timeline: "Monthly Marketplace Retainer",
        toolsUsed: ["Helium 10", "Jungle Scout", "Amazon Advertising Console", "Brand Analytics"],
        methodology: [
          "Competitor ASIN Gap Analysis",
          "A+ Visual Design & Keyword Rich Copy",
          "Sponsored Ad Structure Setup",
          "Weekly Bid Calibration & Keyword Harvesting",
        ],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale", "b2b-industrial-seo"],
      },
      {
        id: "retention-email-sms",
        title: "Automated Email & SMS Retention Funnels",
        shortDesc:
          "Klaviyo lifecycle email & WhatsApp/SMS flows that turn one-time buyers into loyal repeat customers.",
        description:
          "Unlock 25%+ of your store revenue on autopilot. We build automated abandoned cart flows, browse abandonment sequences, VIP loyalty rewards, and post-purchase replenishment reminders.",
        iconName: "Zap",
        imageUrl:
          "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Automated Welcome, Abandoned Cart & Checkout Flows",
          "Post-Purchase Upsell & Replenishment Sequences",
          "VIP Customer Segmenting & Win-Back Automations",
          "WhatsApp Notification & Broadcast Campaigns",
        ],
        idealFor:
          "E-commerce brands wanting to maximize customer lifetime value (LTV) without paying for ad clicks.",
        roiImpact: "Generates free, high-margin revenue directly from existing customer lists.",
        targetOutcome:
          "20% to 35% of total store revenue generated automatically via email/SMS flows.",
        timeline: "Setup in 10 Days + Monthly Management",
        toolsUsed: ["Klaviyo", "Postscript", "WhatsApp Business Cloud API", "Shopify Flow"],
        methodology: [
          "Customer Segmentation Audit",
          "Email Template Design & Copywriting",
          "Trigger Logic & Delay Automation",
          "A/B Subject Line & Offer Testing",
        ],
        portfolioCategory: "E-commerce",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
    ],
  },
  {
    id: "digital-marketing",
    number: "04",
    title: "DIGITAL MARKETING",
    badge: "Strategic Growth",
    shortDescription:
      "Holistic 360° growth strategy, high-intent lead generation funnels, multi-channel customer acquisition, and brand scale.",
    iconName: "Compass",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Ads",
    services: [
      {
        id: "digital-growth-strategy",
        title: "360° Digital Growth Strategy",
        shortDesc:
          "Comprehensive commercial roadmaps aligning your business goals with high-converting digital marketing channels.",
        description:
          "We develop end-to-end commercial blueprints tailored to your business model, customer buying psychology, and market benchmarks. We identify underperforming channels, allocate ad budgets with mathematical precision, and build multi-touch acquisition funnels.",
        iconName: "Compass",
        imageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Competitor Benchmarking & TAM Analysis",
          "Customer Persona & Journey Mapping",
          "Multi-Channel Budget Allocation Matrix",
          "Growth KPI Dashboard & Attribution Modeling",
        ],
        idealFor:
          "Businesses needing a structured, revenue-aligned digital roadmap rather than random marketing tactics.",
        roiImpact:
          "Eliminates ad waste and focuses budget strictly on high-yield commercial channels.",
        targetOutcome:
          "Structured 12-month predictable customer acquisition engine with positive unit economics.",
        timeline: "7 - 14 Days Strategy Blueprint",
        toolsUsed: [
          "Google Analytics 4",
          "SEMrush Market Explorer",
          "SimilarWeb",
          "Looker Studio",
          "HubSpot",
        ],
        methodology: [
          "Deep-dive Discovery & Commercial Audit",
          "Market & Competitor Blindspot Mapping",
          "Omnichannel Funnel & Budget Architecture",
          "Executive Playbook & Implementation Roadmap",
        ],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["real-estate-leads", "ecom-fashion-scale"],
      },
      {
        id: "b2b-b2c-lead-generation",
        title: "High-Intent Lead Generation Funnels",
        shortDesc:
          "Turn cold traffic into qualified sales conversations with dedicated landing pages and automated CRM routing.",
        description:
          "Turn cold traffic into pre-screened sales opportunities. We build high-converting landing pages, interactive lead-qualification forms, 2-step OTP verification, and instant WhatsApp/CRM integrations so your sales team talks only to real buyers.",
        iconName: "Target",
        imageUrl:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Custom High-Converting Dedicated Landing Pages",
          "2-Step Lead Qualification & OTP Verification",
          "Instant CRM & WhatsApp Lead Routing",
          "Automated Lead Follow-up Drip Sequences",
        ],
        idealFor:
          "B2B enterprises, Real Estate Developers, Healthcare Networks, Higher Education & Professional Services.",
        roiImpact:
          "Consistent pipeline of pre-qualified commercial prospects with minimal junk leads.",
        targetOutcome:
          "50% to 70% reduction in invalid inquiries and instant 15-second lead follow-up.",
        timeline: "Launch in 10 Days",
        toolsUsed: [
          "Unbounce",
          "Webflow",
          "Zapier / Make",
          "WhatsApp Business Cloud API",
          "Zoho / Salesforce",
        ],
        methodology: [
          "Buyer Intent Keyword & Geo Research",
          "High-Converting Offer & Page Build",
          "Automated Lead Validation Integration",
          "Sales Team Feedback Loop & Cost-per-closed-deal Calibration",
        ],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["real-estate-leads", "b2b-industrial-seo"],
      },
      {
        id: "social-media-growth",
        title: "Social Media Marketing & Brand Presence",
        shortDesc:
          "Full-spectrum social narrative, viral video reels scripting, community management, and brand authority building.",
        description:
          "Build a prestigious, recognizable presence across Instagram, LinkedIn, Facebook, and YouTube. We produce high-retention video reels, aesthetic carousel decks, engaging stories, and trend-aligned campaigns that convert followers into customers.",
        iconName: "Share2",
        imageUrl:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Monthly 30-Day Content Calendar & Visual Grid Planning",
          "Short-form Viral Reels Scripting & 4K Editing",
          "Daily Publishing & Active Community Moderation",
          "Influencer Collaboration Outreaches & Growth Campaigns",
        ],
        idealFor:
          "Brands wanting a prestigious, active presence that drives genuine engagement and inbound inquiries.",
        roiImpact:
          "Builds lasting brand equity, organic customer trust, and steady inbound direct message leads.",
        targetOutcome:
          "3x - 5x increase in organic post reach and active brand community engagement.",
        timeline: "Monthly Retainer Cadence",
        toolsUsed: [
          "Meta Business Suite",
          "Buffer / Hootsuite",
          "Canva Enterprise",
          "Adobe Premiere Pro",
          "Sprout Social",
        ],
        methodology: [
          "Audience Persona & Pillar Definition",
          "Monthly Asset Production Sprint",
          "Scheduled Multi-Platform Publishing",
          "Community Moderation & Metric Analysis",
        ],
        portfolioCategory: "Social Media",
        relatedCaseStudyIds: ["healthcare-clinic-growth", "luxury-hospitality-brand"],
      },
    ],
  },
  {
    id: "ppc-management",
    number: "05",
    title: "PPC MANAGEMENT",
    badge: "Paid Acquisition & ROAS",
    shortDescription:
      "Laser-targeted Google Search, Performance Max, Meta Ads (Facebook & Instagram), and continuous ad spend optimization.",
    iconName: "DollarSign",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Ads",
    services: [
      {
        id: "google-ads-pmax",
        title: "Google Search & Performance Max Ads",
        shortDesc:
          "Capture high-commercial intent Google searches with tightly themed ad groups, negative keywords, and PMax campaigns.",
        description:
          "Capture users at the exact moment they search for your products or services. We manage Google Search, Performance Max, Display Network, and YouTube video ads with strict negative keyword scrubbing, high Quality Scores, and smart bidding.",
        iconName: "MousePointerClick",
        imageUrl:
          "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Tightly Themed Search Ad Groups (STAGs)",
          "Performance Max Asset Groups & Audience Signals",
          "Comprehensive Negative Keyword Scrubbing",
          "Conversion Tracking & Offline Value Uploads",
        ],
        idealFor:
          "Companies offering urgent services, B2B products, luxury real estate, or high search-demand items.",
        roiImpact:
          "Captures customers with purchase intent at the highest-margin moments of search.",
        targetOutcome:
          "Average 30% lower Cost-per-click (CPC) and 4x+ return on search ad investment.",
        timeline: "Setup in 5-7 Days + Monthly Optimization",
        toolsUsed: [
          "Google Ads",
          "Google Tag Manager",
          "Optmyzr",
          "Google Merchant Center",
          "Looker Studio",
        ],
        methodology: [
          "Commercial Keyword Match Type Structuring",
          "Ad Copywriting & Asset Extension Building",
          "Bidding Strategy Calibration (tCPA / tROAS)",
          "Search Term Audit & Conversion Optimization",
        ],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["real-estate-leads", "b2b-industrial-seo"],
      },
      {
        id: "meta-ads-scaling",
        title: "Meta Ads (Facebook & Instagram Scaling)",
        shortDesc:
          "Full-funnel Meta advertising turning cold prospects into repeat buyers with high-converting creative testing.",
        description:
          "We build high-converting Meta paid campaigns using Advantage+ Shopping, custom lookalike models, and dynamic retargeting. We test dozens of creative hooks (UGC, static comparison cards, founder explainers) to scale profitably.",
        iconName: "Layers",
        imageUrl:
          "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
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
        targetOutcome: "Maintain 4.0x - 6.5x ROAS while doubling monthly ad spend capacity.",
        timeline: "Launch in 7 Days + Weekly Creative Sprints",
        toolsUsed: [
          "Meta Ads Manager",
          "Meta Pixel & CAPI",
          "Motion App Creative Analytics",
          "Canva / Figma",
          "CapCut",
        ],
        methodology: [
          "Full-Funnel Campaign Structuring (TOF / MOF / BOF)",
          "Weekly Creative Testing Batch",
          "Automated Scaling & Budget Reallocation",
          "Post-Purchase Retargeting & Upsell Architecture",
        ],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["ecom-fashion-scale", "luxury-hospitality-brand"],
      },
      {
        id: "ppc-audit-optimization",
        title: "Continuous PPC Optimization & Ad Spend Audit",
        shortDesc:
          "Daily bid adjustments, search term scrubbing, landing page speed testing, and waste-cutting across all ad channels.",
        description:
          "Stop burning ad budget on low-intent clicks. Our performance engineers perform daily bid calibration, search term scrubdowns, landing page speed testing, and conversion attribution reconciliation.",
        iconName: "Sliders",
        imageUrl:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Daily Bid & Budget Balancing",
          "Search Term Scrubbing & Placement Filtering",
          "Landing Page Conversion Rate Testing",
          "Transparent Weekly ROI Reconciliation Reports",
        ],
        idealFor:
          "Brands spending ₹50,000+ to ₹10,00,000+ per month seeking optimal capital efficiency.",
        roiImpact:
          "Systematically reduces Cost Per Acquisition while increasing closing conversion rates.",
        targetOutcome:
          "Immediate 20% to 35% reduction in wasted ad spend within the first 30 days.",
        timeline: "Ongoing Daily/Weekly Management",
        toolsUsed: [
          "Google Ads Scripts",
          "Meta Automated Rules",
          "Supermetrics",
          "Hotjar",
          "Google Sheets BI",
        ],
        methodology: [
          "Historical Spend & Waste Audit",
          "Bid Threshold & Target ROAS Calibration",
          "Weekly Placement & Keyword Pruning",
          "Multi-variant Landing Page Split Testing",
        ],
        portfolioCategory: "Ads",
        relatedCaseStudyIds: ["ecom-fashion-scale", "real-estate-leads"],
      },
    ],
  },
  {
    id: "seo-services",
    number: "06",
    title: "SEO & AI SEARCH SERVICES",
    badge: "Search Dominance & AI Citation",
    shortDescription:
      "Secure top page 1 Google rankings, dominate Google Maps 3-Pack, and gain authoritative citation in AI search engines.",
    iconName: "Search",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "SEO",
    services: [
      {
        id: "organic-seo-ranking",
        title: "Organic Search Ranking & Content Strategy",
        shortDesc:
          "End-to-end white-hat search optimization engineered to secure and maintain top organic rankings for commercial keywords.",
        description:
          "Holistic white-hat SEO that builds lasting organic market dominance. From in-depth keyword revenue modeling to topical authority cluster construction and high-tier link acquisition, we drive high-intent buyer traffic without ongoing ad spend.",
        iconName: "SearchCheck",
        imageUrl:
          "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Comprehensive 150-Point SEO Audit",
          "Commercial Keyword Intent Mapping",
          "Topical Authority Content Clusters",
          "High-DA White-Hat Editorial Backlinks",
        ],
        idealFor:
          "Any business wanting durable, long-term organic traffic that compounds month over month.",
        roiImpact:
          "Compounding organic reach that reduces reliance on paid media and boosts organic equity.",
        targetOutcome:
          "Top 3 Google positions for high-commercial search queries within 90-180 days.",
        timeline: "Monthly Compounding Retainer",
        toolsUsed: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "Surfer SEO"],
        methodology: [
          "Deep Technical Architecture & Gap Audit",
          "Content Topical Cluster Mapping",
          "On-Page Optimization & Internal Linking",
          "Digital PR & High-Authority Backlink Acquisition",
        ],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["b2b-industrial-seo", "healthcare-clinic-growth"],
      },
      {
        id: "local-seo-gmb",
        title: "Local SEO & Google Maps 3-Pack",
        shortDesc:
          'Dominate Google Maps "3-pack" and local search results in your target geographical areas.',
        description:
          "Capture customers in your immediate vicinity right when they search for services near them. We optimize Google Business Profiles, build consistent local citations, manage review velocity, and create localized geo-pages.",
        iconName: "MapPin",
        imageUrl:
          "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Google Business Profile 100% Optimization",
          "Local Citations & NAP Consistency Audit",
          "Geo-Targeted City/Area Landing Pages",
          "Automated Customer Review Generation Strategy",
        ],
        idealFor:
          "Clinics, hospitals, retail stores, local consultants, and multi-branch commercial enterprises.",
        roiImpact: "Direct local phone calls, store footfall visits, and localized appointments.",
        targetOutcome:
          "#1 rank in Google Maps 3-pack across 15+ high-volume local service keywords.",
        timeline: "30 - 60 Days to 3-Pack Dominance",
        toolsUsed: [
          "BrightLocal",
          "Google Business Profile Manager",
          "GeoImgr",
          "Whitespark",
          "Local Viking",
        ],
        methodology: [
          "Profile & Category Verification Audit",
          "Local Citation Cleanup & Geo-tagging",
          "Geo-targeted Content & Scheme Markup",
          "Review Velocity & Engagement Automation",
        ],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["healthcare-clinic-growth", "real-estate-leads"],
      },
      {
        id: "technical-seo-audit",
        title: "Technical SEO & AI Search Optimization",
        shortDesc:
          "Optimize site architecture, Core Web Vitals, schema markup, and position your brand in ChatGPT, Perplexity, and AI Overviews.",
        description:
          "Ensure search engine bots and AI LLMs effortlessly crawl, understand, and cite your web assets. We eliminate crawl errors, optimize Core Web Vitals, implement rich JSON-LD schema, and optimize brand knowledge graphs.",
        iconName: "Bot",
        imageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Core Web Vitals Remediation (LCP, INP, CLS)",
          "Schema.org JSON-LD Structured Data",
          "Generative Engine Optimization (GEO) & Wikidata Structuring",
          "Crawl Budget & Sitemap Optimization",
        ],
        idealFor:
          "Forward-looking brands, tech ventures, and corporate portals seeking future-proof search visibility.",
        roiImpact:
          "Sub-second page speeds, clean indexation, and citation in AI assistants like ChatGPT and Perplexity.",
        targetOutcome:
          "Direct citation in AI summaries and 100% crawl accessibility across all devices.",
        timeline: "14 Days Intensive Technical Sprint + Retainer",
        toolsUsed: [
          "Screaming Frog SEO Spider",
          "Google Search Console",
          "Schema.org JSON-LD",
          "Perplexity Pro",
          "Ahrefs",
        ],
        methodology: [
          "Full Site Architecture Crawl",
          "Speed & Schema Optimization",
          "Entity Recognition & Brand Vector Deployment",
          "Post-Deployment Indexation Monitoring",
        ],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["b2b-industrial-seo", "fintech-corporate-portal"],
      },
    ],
  },
  {
    id: "mobile-app-development",
    number: "07",
    title: "MOBILE APP DEVELOPMENT",
    badge: "iOS & Android",
    shortDescription:
      "Cross-platform iOS and Android mobile apps engineered with React Native and Flutter with real-time API backends.",
    iconName: "Smartphone",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Websites",
    services: [
      {
        id: "cross-platform-apps",
        title: "Cross-Platform iOS & Android Apps",
        shortDesc:
          "Native-feel mobile apps built with React Native and Flutter for flawless performance on iPhone and Android devices.",
        description:
          "We design and build feature-rich mobile applications with smooth 60fps animations, intuitive gesture navigation, push notifications, offline data caching, and native biometric authentication.",
        iconName: "Smartphone",
        imageUrl:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "React Native / Flutter Codebase for iOS and Android",
          "Biometric Authentication (FaceID / Fingerprint)",
          "Push Notification Infrastructure (Firebase Cloud Messaging)",
          "Offline Storage & Fast Data Syncing",
        ],
        idealFor:
          "Startups, D2C brands, fitness/health platforms, and service businesses needing a dedicated mobile presence.",
        roiImpact:
          "Drives high customer retention, direct push notification engagement, and repeat orders.",
        targetOutcome:
          "Smooth, bug-free mobile app published on both Apple App Store and Google Play Store.",
        timeline: "4 - 8 Weeks End-to-End Build",
        toolsUsed: ["React Native", "Flutter", "TypeScript", "Firebase", "Xcode", "Android Studio"],
        methodology: [
          "Mobile UX Wireframing",
          "Native Component Architecture",
          "API Integration & State Management",
          "App Store Compliance QA & Submission",
        ],
        portfolioCategory: "Websites",
        relatedCaseStudyIds: ["fintech-corporate-portal", "ecom-fashion-scale"],
      },
      {
        id: "custom-app-architecture",
        title: "Mobile Backend API & Cloud Architecture",
        shortDesc:
          "Scalable cloud backends, real-time WebSockets, microservices, and secure payment integrations for mobile applications.",
        description:
          "Power your mobile application with rock-solid server architecture. We engineer low-latency REST and GraphQL APIs, real-time messaging backends, payment gateway integrations, and auto-scaling cloud databases.",
        iconName: "Cpu",
        imageUrl:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "RESTful & GraphQL API Infrastructure",
          "Real-Time WebSocket Messaging & Live Updates",
          "Secure In-App Purchases & Payment Gateway Setup",
          "Cloud Auto-Scaling on AWS / Google Cloud",
        ],
        idealFor: "Apps handling high transaction volumes, live tracking, or sensitive user data.",
        roiImpact:
          "Guarantees sub-100ms API response times and zero server crashes during viral user spikes.",
        targetOutcome:
          "Enterprise-grade cloud infrastructure supporting thousands of concurrent active mobile users.",
        timeline: "3 - 6 Weeks Agile Sprints",
        toolsUsed: [
          "Node.js",
          "PostgreSQL",
          "Redis",
          "AWS Lambda",
          "Docker",
          "Stripe / Razorpay SDKs",
        ],
        methodology: [
          "API Architecture & Data Flow Design",
          "Security & Token Authentication Setup",
          "Load & Stress Testing",
          "Cloud Deployment & CI/CD Pipelines",
        ],
        portfolioCategory: "Websites",
        relatedCaseStudyIds: ["fintech-corporate-portal"],
      },
      {
        id: "app-store-optimization",
        title: "App Store Optimization (ASO) & Deployment",
        shortDesc:
          "Complete App Store & Google Play Store publishing, keyword ranking, and conversion-optimized screenshot sets.",
        description:
          "Get your app discovered and downloaded. We craft keyword-optimized app titles and descriptions, design persuasive App Store preview screenshots, and manage store compliance reviews for guaranteed approvals.",
        iconName: "Rocket",
        imageUrl:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "App Store & Play Store Metadata & Keyword Optimization",
          "High-Converting Screenshot & Video Preview Design",
          "Developer Account Setup & Compliance Guidelines Review",
          "Launch Day Release Management & Rating Velocity Strategy",
        ],
        idealFor: "Any mobile app launching on the Apple App Store or Google Play Store.",
        roiImpact:
          "Drives consistent organic app downloads without paying for individual app install ads.",
        targetOutcome:
          "100% store review approval and top 10 search visibility for core app category keywords.",
        timeline: "7 - 10 Business Days",
        toolsUsed: [
          "App Store Connect",
          "Google Play Console",
          "AppTweak",
          "Sensor Tower",
          "Figma",
        ],
        methodology: [
          "ASO Keyword Research & Competitor Gap Analysis",
          "Visual Screenshot Production",
          "Metadata Submission & Approval Management",
          "Post-Launch Download & Review Monitoring",
        ],
        portfolioCategory: "Websites",
        relatedCaseStudyIds: ["fintech-corporate-portal", "ecom-fashion-scale"],
      },
    ],
  },
  {
    id: "ui-ux-design",
    number: "08",
    title: "UI/UX DESIGN",
    badge: "Interface & UX",
    shortDescription:
      "User research, interactive wireframing, high-fidelity Figma prototypes, design systems, and conversion-centered interaction flows.",
    iconName: "Layout",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Websites",
    services: [
      {
        id: "figma-prototyping",
        title: "Figma Wireframing & Interactive Prototyping",
        shortDesc:
          "Interactive, clickable prototypes and user flow diagrams that validate your product experience before writing a single line of code.",
        description:
          "We turn complex concepts into intuitive visual prototypes. From low-fidelity wireframes exploring structural layout to high-fidelity clickable Figma prototypes with micro-interactions, we test and refine the user journey for frictionless usability.",
        iconName: "Layout",
        imageUrl:
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Low-Fidelity Information Architecture & Wireframes",
          "High-Fidelity Clickable Figma Interactive Prototypes",
          "User Journey Maps & Edge-Case Flowcharts",
          "Developer-Ready Inspection Specs & Assets",
        ],
        idealFor: "Startups, product managers, and companies redesigning their digital platforms.",
        roiImpact:
          "Eliminates costly engineering rework by validating usability and user flows early.",
        targetOutcome:
          "Crystal-clear, clickable Figma prototype ready for user testing and engineering hand-off.",
        timeline: "10 - 15 Business Days",
        toolsUsed: ["Figma", "FigJam", "Miro", "Lottie Animation", "Spline 3D"],
        methodology: [
          "User Discovery & Persona Journey Mapping",
          "Low-Fidelity Structural Wireframing",
          "High-Fidelity Visual Design & Micro-Interactions",
          "Interactive Prototype Validation & Handover",
        ],
        portfolioCategory: "Websites",
        relatedCaseStudyIds: ["fintech-corporate-portal", "luxury-hospitality-brand"],
      },
      {
        id: "mobile-web-ui-ux",
        title: "Mobile App & Web Application UX Design",
        shortDesc:
          "Conversion-focused interface design for SaaS apps, mobile products, and high-growth consumer platforms.",
        description:
          "Every layout, typography pairing, contrast level, and button placement is designed with cognitive psychology and user behavior in mind. We design interfaces that feel effortless to navigate, minimizing churn and maximizing retention.",
        iconName: "Smartphone",
        imageUrl:
          "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Complete Responsive Mobile & Web App Screens",
          "Intuitive Dashboard & Data Visualization Layouts",
          "Dark Mode & Light Mode UI Themes",
          "Accessibility (WCAG 2.1 AA) Compliance Audit",
        ],
        idealFor:
          "Web applications, SaaS platforms, and mobile apps wanting modern, intuitive interfaces.",
        roiImpact:
          "Boosts user adoption, reduces customer support tickets, and increases retention rates.",
        targetOutcome: "90%+ user task completion rate and industry-leading customer satisfaction.",
        timeline: "2 - 4 Weeks Comprehensive Design Sprint",
        toolsUsed: ["Figma", "Adobe Creative Suite", "Principle", "Maze User Testing"],
        methodology: [
          "User Research & Cognitive Walkthroughs",
          "Component & Layout Design Sprints",
          "Responsive Viewport Adaptations",
          "Usability Testing & Refinements",
        ],
        portfolioCategory: "Websites",
        relatedCaseStudyIds: ["fintech-corporate-portal", "ecom-fashion-scale"],
      },
      {
        id: "design-systems-tokens",
        title: "Scalable Design Systems & Component Libraries",
        shortDesc:
          "Comprehensive Figma design systems with auto-layout components, color tokens, typography scales, and code guidelines.",
        description:
          "Build consistency and speed up product development. We create scalable design systems complete with reusable UI components, variant states (hover, focus, disabled), typography scales, color palettes, and design tokens.",
        iconName: "Layers",
        imageUrl:
          "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Comprehensive Figma Component Library (Buttons, Modals, Forms, Navigation)",
          "Color, Typography & Spacing Design Tokens",
          "Interactive Variant States & Auto-Layout 5.0 Guidelines",
          "Design System Documentation & Governance Guide",
        ],
        idealFor: "Growing tech teams and enterprises maintaining multiple digital products.",
        roiImpact: "Accelerates future feature design and development speed by up to 50%.",
        targetOutcome: "100% visual consistency across all web and mobile brand touchpoints.",
        timeline: "2 - 3 Weeks System Architecture",
        toolsUsed: ["Figma", "Storybook", "Zeroheight", "Tokens Studio"],
        methodology: [
          "Existing UI Audit & Inventory",
          "Atomic Design Hierarchy Structuring",
          "Component Variant & Token Definition",
          "Documentation & Developer Alignment",
        ],
        portfolioCategory: "Websites",
        relatedCaseStudyIds: ["fintech-corporate-portal", "b2b-industrial-seo"],
      },
    ],
  },
  {
    id: "graphic-design",
    number: "09",
    title: "GRAPHIC DESIGN",
    badge: "Visual Identity",
    shortDescription:
      "Distinctive logos, corporate brand manuals, marketing collaterals, social media graphics, and premium vector assets.",
    iconName: "Palette",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Branding",
    services: [
      {
        id: "brand-identity-logo",
        title: "Brand Identity & Bespoke Logo Design",
        shortDesc:
          "Distinctive, versatile vector logos and complete corporate brand manuals that establish unmistakable authority.",
        description:
          "Craft an enduring corporate identity that commands prestige and respect. We design custom vector logo marks, monograms, color palettes, typography guidelines, and brand manuals that look iconic across digital screens, giant billboards, and luxury packaging.",
        iconName: "Sparkles",
        imageUrl:
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Multiple Unique Bespoke Logo Concepts",
          "Full Vector Master Kit (AI, EPS, SVG, PDF, PNG)",
          "Complete 35+ Page Brand Guidelines Manual",
          "Business Cards, Letterheads & Corporate Stationery",
        ],
        idealFor:
          "New ventures, tech startups, and established enterprises undergoing corporate rebranding.",
        roiImpact:
          "Creates an iconic, memorable visual anchor in customer minds that commands premium pricing.",
        targetOutcome:
          "Timeless logo and identity system with 100% intellectual property ownership.",
        timeline: "10 - 15 Business Days",
        toolsUsed: [
          "Adobe Illustrator",
          "Adobe InDesign",
          "Figma",
          "Photoshop",
          "Pantone Color Bridge",
        ],
        methodology: [
          "Brand Purpose & Archetype Discovery",
          "Hand-Drawn Sketches & Digital Drafting",
          "Concept Presentation with Real-World Mockups",
          "Brand Guidelines Delivery & Asset Export",
        ],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["luxury-hospitality-brand", "fintech-corporate-portal"],
      },
      {
        id: "marketing-collateral-print",
        title: "Marketing Collaterals, Brochures & Pitch Decks",
        shortDesc:
          "High-impact investor pitch decks, corporate brochures, product catalogs, and print-ready exhibition graphics.",
        description:
          "Elevate every customer and investor touchpoint. We design high-impact investor pitch decks, corporate brochures, annual reports, exhibition booths, packaging graphics, and sales presentations that close deals.",
        iconName: "Image",
        imageUrl:
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Investor Pitch Decks & Sales Presentations (PowerPoint / Keynote)",
          "Corporate Brochures, Annual Reports & Product Catalogs",
          "Print-Ready Exhibition & Standee Graphics",
          "Custom Packaging & Label Design",
        ],
        idealFor:
          "Businesses needing polished, persuasive sales collateral for client meetings and exhibitions.",
        roiImpact:
          "Elevates perceived brand value and gives sales teams the confidence to close larger deals.",
        targetOutcome:
          "Consistent visual polish across all pitch materials, catalogs, and public displays.",
        timeline: "5 - 10 Business Days",
        toolsUsed: ["Figma", "Adobe InDesign", "Photoshop", "Keynote / PowerPoint Pro"],
        methodology: [
          "Content Structure & Narrative Flow",
          "Visual Layout & Typographic Styling",
          "High-Res Asset Integration",
          "Print & Digital Master Delivery",
        ],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["luxury-hospitality-brand", "b2b-industrial-seo"],
      },
      {
        id: "social-creative-graphics",
        title: "High-Converting Social Media Creatives & Ads",
        shortDesc:
          "Engaging social media post graphics, carousel templates, ad banners, and promotional visual sets.",
        description:
          "Stop the scroll on social media. We create eye-catching, high-converting social media creatives, educational carousel slide decks, promotional festive posters, and digital display banners tailored to your brand style.",
        iconName: "Palette",
        imageUrl:
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Monthly Social Media Post Creative Packs",
          "Educational Carousel Slide Deck Templates",
          "Festive & Promotional Banner Sets",
          "High-CTR Ad Banner Variations (Feed, Story, Banner)",
        ],
        idealFor: "Brands looking to maintain a vibrant, premium social media visual feed.",
        roiImpact:
          "Higher organic engagement and increased click-through rates on digital campaigns.",
        targetOutcome:
          "Stunning visual consistency and active audience engagement on all social channels.",
        timeline: "Ongoing Monthly Batches / 3-5 Days Turnaround",
        toolsUsed: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva Pro"],
        methodology: [
          "Visual Hook Concept & Copy Alignment",
          "Graphic Composition & Typographic Layout",
          "Multi-Format Resizing (1:1, 9:16, 16:9)",
          "Asset Delivery & Template Organization",
        ],
        portfolioCategory: "Branding",
        relatedCaseStudyIds: ["luxury-hospitality-brand", "healthcare-clinic-growth"],
      },
    ],
  },
  {
    id: "professional-photography",
    number: "10",
    title: "PROFESSIONAL PHOTOGRAPHY",
    badge: "Studio & Commercial",
    shortDescription:
      "Commercial product photography, corporate team shoots, real estate/architecture capture, and high-end studio staging.",
    iconName: "Camera",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Photography",
    services: [
      {
        id: "commercial-product-photo",
        title: "Commercial E-Commerce Product Photography",
        shortDesc:
          "Crisp white-background e-commerce catalog photos and lifestyle staged product shoots for websites and marketplaces.",
        description:
          "Showcase your products in the best light. We provide high-resolution e-commerce product photography with true-to-life colors, clean pure-white backgrounds for Amazon/Shopify, 360-degree angles, and high-end texture retouching.",
        iconName: "Camera",
        imageUrl:
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Pure White Background Catalog Photos (Amazon / Shopify Compliant)",
          "Detailed Macro & Texture Close-up Shots",
          "Professional Color Correction & Background Cleanup",
          "High-Res Print & Web-Optimized Deliverables",
        ],
        idealFor:
          "E-commerce brands, fashion labels, jewelry, electronics, and consumer product manufacturers.",
        roiImpact: "Builds instant buyer confidence and dramatically reduces product return rates.",
        targetOutcome:
          "Flawless, razor-sharp product photos that elevate perceived value and boost conversions.",
        timeline: "3 - 7 Business Days per Batch",
        toolsUsed: [
          "Sony A7R V Full-Frame",
          "Profoto Studio Strobe Lighting",
          "Capture One Pro",
          "Adobe Photoshop",
        ],
        methodology: [
          "Pre-Shoot Product Prep & Styling",
          "Studio Strobe Lighting Calibration",
          "High-Resolution Tethered Shooting",
          "Advanced Color Retouching & Asset Handover",
        ],
        portfolioCategory: "Photography",
        relatedCaseStudyIds: ["ecom-fashion-scale"],
      },
      {
        id: "corporate-architecture-photo",
        title: "Corporate, Industrial & Architecture Shoots",
        shortDesc:
          "High-end corporate headshots, office environment photos, manufacturing facility walkthroughs, and architectural captures.",
        description:
          "Capture the scale and professionalism of your enterprise. We provide executive headshots, on-location industrial plant photography, corporate headquarters architecture, and hospitality interior shoots.",
        iconName: "Image",
        imageUrl:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Executive & Team Member Professional Portraits",
          "On-Location Factory & Infrastructure High-Res Photos",
          "Interior & Exterior Architecture Photography with HDR Balancing",
          "Full Commercial Usage Licensing Rights",
        ],
        idealFor:
          "Real estate developers, hotel chains, manufacturing enterprises, and corporate firms.",
        roiImpact:
          "Showcases institutional scale, winning high-value corporate and export clients.",
        targetOutcome:
          "Prestigious visual imagery for corporate websites, annual reports, and investor pitch decks.",
        timeline: "On-Location Shoot + 5 Days Post-Production",
        toolsUsed: [
          "Full-Frame Camera Rigs",
          "Tilt-Shift Architectural Lenses",
          "Mobile Studio Lighting",
          "Lightroom Classic",
        ],
        methodology: [
          "Location Recce & Lighting Planning",
          "On-Site Photography & Direction",
          "HDR Architectural Blending & Skin Retouching",
          "Master High-Resolution Gallery Delivery",
        ],
        portfolioCategory: "Photography",
        relatedCaseStudyIds: ["luxury-hospitality-brand", "b2b-industrial-seo"],
      },
      {
        id: "creative-lifestyle-staging",
        title: "Creative Lifestyle & Brand Catalog Staging",
        shortDesc:
          "Art-directed lifestyle photography with real models, curated props, and natural lighting for brand campaigns.",
        description:
          "Bring your brand story to life. We arrange full art-directed lifestyle photo shoots with model coordination, prop styling, outdoor/indoor locations, and mood-setting lighting to create aspirational brand imagery.",
        iconName: "Sparkles",
        imageUrl:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Art-Directed Model & Prop Staged Photo Sessions",
          "Curated Moodboards & Location Scouting",
          "Editorial Color Grading & Aesthetic Retouching",
          "Social Media & Billboard-Ready Master Files",
        ],
        idealFor:
          "Fashion brands, cosmetics, consumer lifestyle products, and food & beverage brands.",
        roiImpact:
          "Builds deep emotional connection with buyers, transforming products into coveted lifestyle choices.",
        targetOutcome:
          "Aspirational, editorial-quality visual library for advertising campaigns and social media.",
        timeline: "7 - 10 Business Days",
        toolsUsed: [
          "High-End Prime Lenses",
          "Continuous & Strobe Lighting",
          "Capture One Pro",
          "Photoshop CC",
        ],
        methodology: [
          "Moodboard & Styling Direction",
          "Model & Location Coordination",
          "Tethered Live Shoot Direction",
          "Editorial Color Grading & Master Export",
        ],
        portfolioCategory: "Photography",
        relatedCaseStudyIds: ["luxury-hospitality-brand", "ecom-fashion-scale"],
      },
    ],
  },
  {
    id: "content-management",
    number: "11",
    title: "CONTENT MANAGEMENT",
    badge: "Publishing & Strategy",
    shortDescription:
      "Content marketing strategy, persuasive copywriting, CMS workflow management, SEO blog clusters, and digital asset organization.",
    iconName: "FileText",
    accentColor: "gold",
    imageUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    portfolioCategory: "Social Media",
    services: [
      {
        id: "copywriting-content-strategy",
        title: "Persuasive Copywriting & Content Strategy",
        shortDesc:
          "High-conversion website copy, SEO topic cluster articles, whitepapers, and automated sales email sequences.",
        description:
          "Words that sell. We craft persuasive website copy rooted in behavioral psychology, long-form SEO pillar articles that rank on Google, and high-converting sales email sequences that turn cold readers into paying customers.",
        iconName: "PenTool",
        imageUrl:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "High-Converting Website & Landing Page Copy",
          "SEO Topic Cluster Pillar Articles & Whitepapers",
          "Automated Email Nurture & Sales Drip Sequences",
          "Case Study Narratives & Executive Ghostwriting",
        ],
        idealFor:
          "Companies launching new websites, running email marketing, or seeking organic Google dominance.",
        roiImpact:
          "Transforms passive visitors into active inquiries through clear, compelling messaging.",
        targetOutcome:
          "Clear value proposition that doubles form submissions and checkout conversion rates.",
        timeline: "5 - 10 Business Days",
        toolsUsed: [
          "Google Docs",
          "Grammarly Premium",
          "Surfer SEO",
          "Hemingway App",
          "Ahrefs Content Explorer",
        ],
        methodology: [
          "Customer Pain Point & Buying Trigger Research",
          "Drafting with Proven Direct-Response Frameworks",
          "SEO Keyword & Readability Optimization",
          "Review, Refinement & Conversion Tuning",
        ],
        portfolioCategory: "Social Media",
        relatedCaseStudyIds: ["b2b-industrial-seo", "fintech-corporate-portal"],
      },
      {
        id: "cms-publishing-workflows",
        title: "CMS Management & Regular Blog Publishing",
        shortDesc:
          "End-to-end CMS updates, WordPress/Shopify blog formatting, image compression, and scheduled publishing.",
        description:
          "Keep your website fresh, active, and relevant without taking time away from your core business. We manage your CMS publishing workflow, format blog posts, compress images, add internal links, and maintain publishing schedules.",
        iconName: "FileText",
        imageUrl:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Weekly Scheduled Blog Formatting & Publishing (WordPress / Shopify / Webflow)",
          "Featured Image Graphic Creation & WebP Compression",
          "On-Page SEO Tags, Alt Text & Internal Link Mapping",
          "Monthly Content Inventory & Performance Audits",
        ],
        idealFor:
          "Busy businesses and marketing teams wanting regular, polished website updates without the hassle.",
        roiImpact:
          "Continuous search engine crawl freshness and steady compounding organic keyword rankings.",
        targetOutcome: "Consistent weekly publishing rhythm with zero internal operational strain.",
        timeline: "Monthly Ongoing Publishing Retainer",
        toolsUsed: ["WordPress", "Shopify", "Webflow", "Yoast / RankMath", "TinyPNG"],
        methodology: [
          "Editorial Calendar Scheduling",
          "Content Formatting & Media Optimization",
          "SEO Tag & Schema Verification",
          "Scheduled Live Deployment & Indexation Ping",
        ],
        portfolioCategory: "Websites",
        relatedCaseStudyIds: ["b2b-industrial-seo", "healthcare-clinic-growth"],
      },
      {
        id: "content-audit-optimization",
        title: "Content Refresh, SEO Pillar Clusters & Curation",
        shortDesc:
          "Audit outdated content, consolidate cannibalized pages, build topical authority clusters, and revitalize traffic.",
        description:
          "Maximize the value of your existing content assets. We conduct comprehensive content audits, update declining articles with fresh stats and keywords, build strategic internal link clusters, and eliminate duplicate content.",
        iconName: "RefreshCw",
        imageUrl:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
        deliverables: [
          "Full Content Inventory & Organic Traffic Decay Audit",
          "Historical Article Updating & Keyword Re-Optimization",
          "Topical Authority Pillar-Cluster Link Structuring",
          "Dead Link & Outdated Asset Cleanup",
        ],
        idealFor:
          "Established websites with 50+ blog articles seeking rapid organic traffic gains.",
        roiImpact:
          "Quickly revives lost organic traffic without the cost of writing entirely new content.",
        targetOutcome: "30% to 60% recovery in organic search traffic on updated legacy articles.",
        timeline: "10 - 15 Business Days Sprint",
        toolsUsed: ["Google Search Console", "Ahrefs", "Screaming Frog", "Surfer SEO"],
        methodology: [
          "Traffic Decay Identification",
          "Search Intent Gap Analysis",
          "Content Expansion & Stat Refresh",
          "Internal Link Sculpting & Re-indexing Request",
        ],
        portfolioCategory: "SEO",
        relatedCaseStudyIds: ["b2b-industrial-seo", "fintech-corporate-portal"],
      },
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Vikram Malhotra",
    role: "Founder & CEO",
    company: "Aura Lifestyle & D2C Apparel",
    industry: "E-commerce",
    quote:
      "Digibasera completely restructured our paid acquisition and Shopify store. In less than 90 days, our blended ROAS improved from 2.1x to 4.6x, and our cost per acquisition dropped significantly. Their transparency is unmatched.",
    metricHighlight: "4.6x Blended ROAS Achieved",
    rating: 5,
  },
  {
    id: "test-2",
    clientName: "Dr. Ananya Sharma",
    role: "Managing Director",
    company: "Apex Multi-Specialty Dental & Wellness",
    industry: "Healthcare",
    quote:
      "Our patient appointment bookings from Google Maps and local search jumped by over 200%. The team understands how to build genuine medical trust and handle patient inquiries efficiently.",
    metricHighlight: "+210% Inbound Patient Calls",
    rating: 5,
  },
  {
    id: "test-3",
    clientName: "Rajesh Singhania",
    role: "Vice President of Sales",
    company: "Skyline Luxury Properties",
    industry: "Real Estate",
    quote:
      "Unlike previous agencies that delivered unqualified leads, Digibasera built a high-converting funnel with pre-screening. We closed 12 luxury villa bookings within the first quarter.",
    metricHighlight: "₹480 Avg Cost Per Verified Buyer",
    rating: 5,
  },
  {
    id: "test-4",
    clientName: "Mehul Mehta",
    role: "Managing Director",
    company: "Precision Industrial Systems",
    industry: "Manufacturing & B2B",
    quote:
      "Their technical SEO strategy ranked us on page 1 of Google for over 40 industrial export keywords. We now receive regular inquiries from Europe and the GCC without spending a fortune on ads.",
    metricHighlight: "45+ Page 1 Global Keywords",
    rating: 5,
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "strategy-first",
    number: "01",
    title: "Strategy First",
    description:
      "We never run generic campaigns. We deeply analyze your target audience, unit economics, and competitors before crafting a tailored digital strategy.",
    iconName: "Target",
    highlight: "No Cookie-Cutter Plans",
    tagline:
      "Every business has its own unique DNA — generic copy-paste templates are strictly banned here.",
    humanPerspective:
      "When a business owner sits down with us, we don't rush to open an ad manager or pitch pre-made packages. We first listen to your ground reality. Who is your actual buyer? Why do they hesitate before paying? Where has marketing money leaked in the past? A business has its own heartbeat, and unless we deeply understand your margins, team capacity, and customer psychology, no marketing campaign will ever succeed.",
    realWorldProblem:
      "Most agencies present a generic 10-slide deck, copy the same 5 keywords from a competitor, and burn your ad budget. When leads don't convert, they conveniently blame 'market conditions' or 'seasonality'.",
    ourHumanApproach:
      "During the first 7 days, we ask tough questions, review your real customer interactions, test your pricing unit economics, and build an honest, tailored roadmap that makes commercial sense before spending a single rupee.",
    dailyActions: [
      "In-depth 1-on-1 discovery session with founders to clarify true margins and core differentiators.",
      "Real customer conversation reviews to uncover true buyer objections and friction points.",
      "Competitor gap analysis — identifying what competitors overlook so you can win market share.",
      "Custom growth roadmap aligned strictly with your monthly cash flow and net profit goals.",
    ],
    clientTakeaway:
      "You never deal with robotic algorithms or template pitches; you get an empathetic, experienced team that treats your business with genuine care.",
    keyPillars: [
      {
        title: "Ground Reality Check",
        description:
          "Rooted in actual market conditions, local buying behaviors, and genuine unit economics.",
      },
      {
        title: "Margin-Protected Planning",
        description:
          "Focused on actual cash left in your bank account after ad spend, not just top-line revenue.",
      },
      {
        title: "Bespoke Go-To-Market Blueprint",
        description:
          "100% custom-crafted execution plan engineered specifically for your business model.",
      },
    ],
  },
  {
    id: "data-driven",
    number: "02",
    title: "Data-Driven Execution",
    description:
      "Every decision is rooted in real analytics, user behavior heatmaps, and continuous conversion data rather than gut assumptions.",
    iconName: "BarChart2",
    highlight: "Pure Metric Accountability",
    tagline:
      "Data is not for vanity show-off — it is an honest account of every single rupee invested.",
    humanPerspective:
      "We have zero interest in overwhelming you with complex technical charts or inflated vanity figures. To us, data means one simple truth: 'Where did your investment go, and what tangible return did it bring back to your business?' Every morning, our media buyers inspect search terms and click logs to see which keyword brought genuine buyers and which ones wasted your budget.",
    realWorldProblem:
      "Agencies hide behind bloated reports showing '50,000 Impressions' and '10,000 Reach', while your phone never rings and actual sales remain at zero.",
    ourHumanApproach:
      "We optimize purely for bottom-line metrics: Cost Per Verified Lead, Sales Conversion Rate, and Return On Ad Spend (ROAS). If a campaign isn't performing, we openly tell you and pause it immediately to protect your hard-earned capital.",
    dailyActions: [
      "Daily manual audit of search queries and ad placements to eradicate spam and low-intent traffic.",
      "Website heatmap and user behavior analysis to identify exactly where prospective buyers drop off.",
      "Regular feedback loop with your sales team to monitor lead qualification and closing rates.",
      "Real-time bid adjustments to ensure your budget captures high-intent buyers, not accidental clicks.",
    ],
    clientTakeaway:
      "Every marketing move is backed by real customer behavior and transparent business truth, never guesswork.",
    keyPillars: [
      {
        title: "Zero Vanity Metrics",
        description:
          "Replacing empty clicks and impressions with verified customer inquiries and closed orders.",
      },
      {
        title: "Spam & Click Waste Eradication",
        description:
          "Aggressive negative keyword filtering to eliminate irrelevant searches and bot clicks.",
      },
      {
        title: "Live Unit Economics",
        description:
          "Your exact cost to acquire a qualified customer, tracked transparently in real time.",
      },
    ],
  },
  {
    id: "creative-performance",
    number: "03",
    title: "Creative + Performance",
    description:
      "We merge high-end visual design and brand storytelling with rigorous media buying and performance engineering for compound results.",
    iconName: "Sparkles",
    highlight: "Aesthetics That Convert",
    tagline:
      "Stunning design only matters if it connects emotionally with your customer and compels them to reach out.",
    humanPerspective:
      "Visual design isn't just about pretty colors or trendy animations. An ad creative is your brand's first handshake with a real human on their phone screen. If a design looks nice but fails to build trust, it's just digital wallpaper. We engineer creatives that look unmistakably premium while speaking directly to your customer's real problems.",
    realWorldProblem:
      "You usually find two types of agencies: design studios that make pretty posters with zero sales acumen, or performance marketers whose ads look so cheap they damage your brand's reputation.",
    ourHumanApproach:
      "We merge elevated brand aesthetics with sharp direct-response copywriting. In the first 3 seconds of every video or visual, we hook your ideal buyer with authentic messaging that makes them pause and say, 'This is exactly what I need.'",
    dailyActions: [
      "Writing relatable hooks that address real customer pain points and immediate desires.",
      "Designing clean, high-standard layouts that make your brand stand out above local competitors.",
      "Crafting mobile-first vertical video creatives and carousels engineered to stop thumb-scrolling.",
      "Weekly creative rotation and testing to eliminate ad fatigue and keep conversion rates strong.",
    ],
    clientTakeaway:
      "Your brand will command respect with a premium look, while continuously generating qualified inbound inquiries.",
    keyPillars: [
      {
        title: "3-Second Thumb-Stopping Hook",
        description: "Capturing instant attention in the mobile feed before the user scrolls past.",
      },
      {
        title: "Trust-Building Brand Design",
        description:
          "Elevated visual standards that immediately communicate credibility and professional authority.",
      },
      {
        title: "Action-Driven Copywriting",
        description:
          "Clear, conversational language that guides prospects effortlessly to your WhatsApp or phone line.",
      },
    ],
  },
  {
    id: "transparent-reporting",
    number: "04",
    title: "Transparent Reporting",
    description:
      "Direct 24/7 dashboard access and crystal-clear weekly updates with zero marketing jargon — see exactly what your investment delivers.",
    iconName: "Eye",
    highlight: "100% Real-Time Visibility",
    tagline:
      "It is your capital — you have every right to see the unfiltered truth of every single rupee.",
    humanPerspective:
      "We never hide behind agency jargon or buzzwords. We speak to you directly as business partners: 'Here is what was spent this week, here are the verified inquiries received, here is the quality breakdown, and here is how we will optimize further next week.' Transparency means sharing what's working and addressing what needs improvement openly.",
    realWorldProblem:
      "Agencies hand over a 60-page PDF report at the end of the month filled with obscure graphs, leaving business owners completely confused about whether they actually made a profit.",
    ourHumanApproach:
      "You receive 24/7 access to an intuitive live dashboard. Furthermore, all campaigns run inside your own advertising accounts — you retain 100% ownership and control of your data, assets, and payment methods at all times.",
    dailyActions: [
      "24/7 accessible live dashboard without gated permissions or hidden filters.",
      "Weekly voice summaries or 15-minute quick alignment check-ins with clear, simple takeaways.",
      "Direct account access — campaigns run in your accounts, with your payment gateways and full ownership.",
      "Detailed lead sheets tracking phone numbers, timestamp, source campaign, and verification notes.",
    ],
    clientTakeaway:
      "You will never be left in the dark; you get clear, honest facts so you can make informed business decisions.",
    keyPillars: [
      {
        title: "Simple, Plain-English Communication",
        description:
          "Zero marketing fluff. Straightforward facts and metrics that directly impact your business.",
      },
      {
        title: "Complete Account Ownership",
        description:
          "Your accounts, your pixels, your data — we manage it with full stewardship, never custody.",
      },
      {
        title: "Proactive Weekly Updates",
        description:
          "You never have to chase us; our team reaches out first with progress reports and optimizations.",
      },
    ],
  },
  {
    id: "conversion-focused",
    number: "05",
    title: "Conversion Focused",
    description:
      "Vanity impressions do not pay the bills. Our priority is qualified leads, high ROAS, booked sales appointments, and long-term customer revenue.",
    iconName: "TrendingUp",
    highlight: "Bottom-Line Growth",
    tagline:
      "Likes and comments cannot pay company payroll or office rent — sales revenue is the only real truth.",
    humanPerspective:
      "Going viral on social media is easy; bringing genuine paying customers to your store, showroom, or factory is an entirely different discipline. Our team's energy is locked into one goal: Conversion. When an inquiry lands, it should come from a qualified buyer with genuine need and the financial capacity to purchase.",
    realWorldProblem:
      "Agencies generate thousands of cheap, accidental clicks. Your sales team spends all day calling numbers only to hear 'I clicked by mistake' or 'I don't have the budget'.",
    ourHumanApproach:
      "We apply high-intent keyword targeting and qualifying questionnaire steps on landing pages. We intentionally filter out casual clickers so your sales team talks only to serious buyers ready to do business.",
    dailyActions: [
      "Filtering unqualified audiences upfront through clear ad copy and transparent qualification criteria.",
      "Deploying ultra-fast, mobile-optimized landing pages that load in under 1 second.",
      "Direct WhatsApp Click-to-Chat buttons with customized, pre-filled buyer messages.",
      "Collaborating with your sales staff to ensure incoming leads are contacted within 5 minutes.",
    ],
    clientTakeaway:
      "You get a pipeline of high-intent, qualified conversations rather than a messy list of disconnected numbers.",
    keyPillars: [
      {
        title: "High-Intent Audience Filtering",
        description:
          "Screening out casual clickers to deliver prospects with genuine buying intent and budget.",
      },
      {
        title: "Frictionless Mobile Experience",
        description: "Lightning-fast pages with instant 1-tap WhatsApp and phone connectivity.",
      },
      {
        title: "Closing Rate Optimization",
        description:
          "Strategic sales objection handling scripts to help your team convert inquiries into revenue.",
      },
    ],
  },
  {
    id: "long-term-partnership",
    number: "06",
    title: "Long-Term Partnership",
    description:
      "We act as an extended, committed digital growth wing for your business, scaling your systems as you enter new markets.",
    iconName: "Users",
    highlight: "Sustainable Scalability",
    tagline:
      "We are not short-term transactional vendors; we are your dedicated long-term digital growth wing.",
    humanPerspective:
      "We never view any client as just another invoice number. When a business scales, families and livelihood depend on it. That is why when we partner with a brand, your wins are our wins, and your hurdles are our hurdles. We stand shoulder-to-shoulder with you across seasonal cycles, market shifts, and geographic expansions.",
    realWorldProblem:
      "Agencies reshuffle your account to a new junior intern every 3 to 4 months. You waste valuable hours reteaching them your business from scratch, completely breaking momentum.",
    ourHumanApproach:
      "You work directly with a seasoned growth strategist who knows your business inside out — which festivals bring peak demand, which offers convert best, and when to scale ad budgets aggressively. We are always just a WhatsApp message or call away.",
    dailyActions: [
      "Dedicated Senior Growth Lead assigned to your brand for unbroken continuity and accountability.",
      "Quarterly market expansion roadmaps — planning new products, cities, and festive campaigns in advance.",
      "Rapid human turnaround — swift support whenever urgent updates or promotional campaigns are needed.",
      "Shared growth alignment — our business only thrives when your marketing returns grow sustainably.",
    ],
    clientTakeaway:
      "You never have to navigate the digital landscape alone; you have a loyal, battle-tested growth team in your corner.",
    keyPillars: [
      {
        title: "Senior Strategic Continuity",
        description:
          "Your account is led by experienced growth strategists, never handed off to junior interns.",
      },
      {
        title: "Proactive Seasonal Roadmaps",
        description:
          "Planning major festivals and high-demand seasons 30 days ahead with custom creatives.",
      },
      {
        title: "Long-Term Mutual Trust",
        description:
          "An enduring, transparent relationship built to scale your business sustainably year after year.",
      },
    ],
  },
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover & Deep Business Audit",
    subtitle: "Unit Economics, Market Positioning & Past Bottlenecks",
    duration: "Days 1 - 3",
    summary:
      "We conduct an uncompromising 360° technical, competitive, and customer psychology audit to diagnose why past marketing struggled and uncover untapped revenue pockets.",
    overview:
      "Before deploying a single rupee of your ad budget, our senior strategists perform an exhaustive operational audit. We inspect your historical ad accounts, website conversion bottlenecks, competitor search footprints, and actual customer buying hesitations. This upfront diagnostic ensures zero capital is wasted on broken tracking or generic targeting.",
    details: [
      "Full technical audit of Google Analytics 4, Meta Pixel, and server-side tracking integrity.",
      "Reverse-engineering top 3 competitors' highest-performing ad hooks and search terms.",
      "Founder unit economics review: defining customer acquisition cost (CAC) ceilings and net margins.",
      "Customer friction mapping: identifying why prospective leads drop off before buying.",
    ],
    actionBreakdown: [
      {
        stepNumber: "01.1",
        actionTitle: "Technical & Pixel Hygiene Audit",
        description:
          "We audit your ad accounts, pixel firing events, and landing page load speeds to eliminate tracking errors, duplicate conversions, and unverified data leaks.",
        whyItMatters:
          "Prevents feeding corrupted data to ad algorithms and ensures every conversion is accurately attributed.",
      },
      {
        stepNumber: "01.2",
        actionTitle: "Competitor Market Gap Analysis",
        description:
          "We analyze competitor keyword bids, ad copies, and landing pages to identify valuable search terms and buyer segments they have completely overlooked.",
        whyItMatters:
          "Enables you to capture high-intent buyers without engaging in unprofitable bidding wars.",
      },
      {
        stepNumber: "01.3",
        actionTitle: "Unit Economics & CAC Benchmark",
        description:
          "We calculate your true gross margins, lifetime customer value (LTV), and maximum allowable Customer Acquisition Cost (CAC) to protect profitability.",
        whyItMatters:
          "Guarantees marketing campaigns are engineered around net bank profit rather than just top-line vanity revenue.",
      },
      {
        stepNumber: "01.4",
        actionTitle: "Customer Psychology & Objection Mapping",
        description:
          "We review customer support logs, sales calls, and reviews to uncover the exact hesitations prospects have before making a purchasing decision.",
        whyItMatters:
          "Provides the exact angles required to write high-converting ad copy and design effective objection-handling pages.",
      },
    ],
    deliverable: "360° Digital Growth Baseline & Opportunity Assessment",
    keyOutputs: [
      "Comprehensive Technical & Tracking Audit Report",
      "Competitor Keyword & Positioning Matrix",
      "Customer Acquisition Cost (CAC) & Margin Calculator",
      "Core Audience Personas & Buying Objection Map",
    ],
    toolsUsed: [
      "Google Analytics 4",
      "Meta Pixel Helper",
      "SEMrush / Ahrefs",
      "Microsoft Clarity",
      "Google Tag Manager",
    ],
    expectedImpact:
      "100% elimination of tracking blind spots and complete strategic clarity on ideal buyer economics.",
  },
  {
    step: "02",
    title: "Strategic Blueprint & Funnel Architecture",
    subtitle: "Engineering the Mathematical Growth Model & Channel Roadmap",
    duration: "Days 4 - 7",
    summary:
      "We architect a custom multi-channel growth engine tailored to your target margins, defining budget allocation, funnel stages, messaging angles, and conversion triggers.",
    overview:
      "Strategy is where commercial battles are won. We do not rely on generic 'boost post' tactics. We build an integrated system where Google captures active high-intent searchers, Meta & YouTube generate demand and educate cold prospects, and WhatsApp/Retargeting captures prospects who didn't convert on the first visit.",
    details: [
      "Multi-channel budget allocation matrix across Search, Social, and Retargeting.",
      "Full-funnel mapping: Top-of-Funnel awareness, Middle trust-building, and Bottom closing.",
      "Irresistible offer engineering and risk-reversal guarantee formulation.",
      "Lead handoff protocols to guarantee incoming inquiries are contacted in under 5 minutes.",
    ],
    actionBreakdown: [
      {
        stepNumber: "02.1",
        actionTitle: "Cross-Channel Budget Allocation",
        description:
          "We determine the precise capital split between Google Search (high intent), Meta Ads (demand capture), YouTube (brand trust), and Retargeting for optimal blended ROAS.",
        whyItMatters:
          "Prevents over-investing in expensive channels while ensuring high-intent demand is captured completely.",
      },
      {
        stepNumber: "02.2",
        actionTitle: "Full-Funnel Architecture Design",
        description:
          "We construct a multi-touchpoint buyer journey ensuring cold prospects are warmed with proof and testimonials before asking for a purchase or booking.",
        whyItMatters:
          "Drastically lowers cost-per-lead by pre-qualifying prospects before they reach your sales reps.",
      },
      {
        stepNumber: "02.3",
        actionTitle: "Irresistible Offer Formulation",
        description:
          "We help package your core service into an attractive, low-friction entry offer with transparent guarantees that outshine local competitors.",
        whyItMatters:
          "Multiplies ad click-through rates and conversion rates by removing customer hesitation.",
      },
      {
        stepNumber: "02.4",
        actionTitle: "Rapid Lead Response Protocols (SOP)",
        description:
          "We structure an internal workflow ensuring your sales executives receive instant alerts and contact incoming leads within 3-5 minutes.",
        whyItMatters:
          "Responding to leads within 5 minutes increases sales conversion probability by up to 391%.",
      },
    ],
    deliverable: "Custom 90-Day Growth Roadmap & Funnel Architecture Blueprint",
    keyOutputs: [
      "Multi-Channel Budget Allocation Spreadsheet",
      "Funnel Wireframe & Visual Journey Map",
      "Irresistible Offer & Copy Hook Framework",
      "Sales Qualification & 5-Minute Follow-Up Protocol",
    ],
    toolsUsed: ["Miro Visual Architect", "Google Sheets Financial Models", "Notion SOP Engine"],
    expectedImpact:
      "Clear commercial predictability on monthly lead flow, budget requirements, and sales closing processes.",
  },
  {
    step: "03",
    title: "Build, Craft & Asset Production",
    subtitle: "Conversion-Engineered Landing Pages & Thumb-Stopping Creatives",
    duration: "Days 8 - 12",
    summary:
      "Our creative studio and developers craft high-speed mobile pages, persuasive direct-response ad creatives, video hooks, and automated CRM tracking.",
    overview:
      "Traffic is wasted if your landing page takes 5 seconds to load or looks untrustworthy. In this phase, we build mobile-first landing pages engineered for speed and conversion, write punchy ad copy that addresses buyer fears, design high-impact visuals, and wire automated WhatsApp alerts.",
    details: [
      "Sub-second loading landing pages with clear social proof and 1-tap WhatsApp connectivity.",
      "10+ diverse ad creatives: static visual hooks, interactive carousels, and vertical video scripts.",
      "Direct-response copywriting focused on customer benefits, pain points, and rapid action.",
      "Server-side Meta Conversions API (CAPI) and automated lead distribution to your CRM / phone.",
    ],
    actionBreakdown: [
      {
        stepNumber: "03.1",
        actionTitle: "Ultra-Fast Mobile Landing Page Development",
        description:
          "We build lightweight, responsive landing pages optimized for 1-second load times, featuring sticky call-to-action buttons, verified client reviews, and zero visual clutter.",
        whyItMatters:
          "Every 1-second delay in page load drops conversions by 7%. Speed directly translates to lower cost-per-lead.",
      },
      {
        stepNumber: "03.2",
        actionTitle: "Thumb-Stopping Creative Production",
        description:
          "We design high-definition static graphics, dynamic carousels, and short vertical video scripts with arresting 3-second visual hooks.",
        whyItMatters:
          "Stops rapid feed scrolling on Instagram, Facebook, and YouTube to capture high-value buyer attention.",
      },
      {
        stepNumber: "03.3",
        actionTitle: "Emotional Direct-Response Copywriting",
        description:
          "We craft persuasive headlines, bullet points, and CTAs that directly address customer pain, establish trust, and eliminate purchase anxiety.",
        whyItMatters:
          "Turns casual browsers into eager inbound inquiries who already trust your brand.",
      },
      {
        stepNumber: "03.4",
        actionTitle: "Instant Lead Alert & CRM Automations",
        description:
          "We wire custom webhooks connecting lead forms directly to your WhatsApp, email, and Google Sheets within 5 seconds of submission.",
        whyItMatters:
          "Eliminates manual data entry and guarantees your sales team can dial hot leads immediately.",
      },
    ],
    deliverable: "Complete Campaign & Asset Launch Kit",
    keyOutputs: [
      "Production-Ready High-Speed Landing Page(s)",
      "Batch of 10+ High-Definition Ad Creatives & Video Scripts",
      "Complete Direct-Response Ad Copy Library",
      "Verified Server-Side CAPI & Instant WhatsApp Lead Automations",
    ],
    toolsUsed: [
      "Figma Design Studio",
      "Tailwind CSS / Next.js",
      "Adobe Premiere Pro",
      "Meta CAPI",
      "Google Tag Manager",
    ],
    expectedImpact:
      "40%+ reduction in bounce rate and immediate delivery of hot leads straight to your sales team's WhatsApp.",
  },
  {
    step: "04",
    title: "Controlled Launch & Pipeline Activation",
    subtitle: "Deploying Multi-Channel Campaigns with Strict Bid Controls",
    duration: "Days 13 - 16",
    summary:
      "We roll out targeted search, display, and social campaigns with conservative bid caps and strict negative keyword lists to attract high-intent buyers immediately.",
    overview:
      "Launch day is executed with surgical discipline. We never launch campaigns and step away. Our media buyers monitor the first 72 hours hour-by-hour to ensure search queries are clean, bot traffic is blocked, budgets don't overspend, and lead quality is verified with your sales team in real time.",
    details: [
      "Segmented campaign rollout targeting verified in-market buyer audiences.",
      "Hour-by-hour monitoring of search queries to eliminate negative keywords and click waste.",
      "Daily alignment calls with your sales team to verify lead intent and phone responsiveness.",
      "Real-time access to transparent 24/7 analytics dashboards showing exact spend and leads.",
    ],
    actionBreakdown: [
      {
        stepNumber: "04.1",
        actionTitle: "Segmented Audience & Search Campaign Rollout",
        description:
          "We launch structured ad sets targeting specific demographics, verified in-market interests, and high-intent exact keyword match types with conservative bid safeguards.",
        whyItMatters:
          "Prevents platform algorithm overspending while steadily discovering your most profitable buyer cohorts.",
      },
      {
        stepNumber: "04.2",
        actionTitle: "Aggressive Negative Keyword & Placement Scrubbing",
        description:
          "We manually audit every incoming search query and placement to immediately block accidental clicks, irrelevant searches, and spam mobile apps.",
        whyItMatters:
          "Protects up to 30% of your daily budget from being drained by unqualified clicks.",
      },
      {
        stepNumber: "04.3",
        actionTitle: "Day-1 Lead Quality Verification Sync",
        description:
          "We establish a live feedback loop with your sales reps to review the first batch of inquiries, checking contact validity and genuine buying intent.",
        whyItMatters:
          "Allows us to adjust ad messaging within 24 hours if lead quality requires tighter qualification.",
      },
      {
        stepNumber: "04.4",
        actionTitle: "Algorithm Calibration & High-Intent Feedback",
        description:
          "We feed qualified conversion signals back into Google and Meta machine learning models to instruct algorithms to find similar high-value buyers.",
        whyItMatters:
          "Accelerates the platform's learning phase and drives down the average cost per acquisition.",
      },
    ],
    deliverable: "Live Active Campaigns & Incoming Inbound Pipeline",
    keyOutputs: [
      "Live Ad Campaigns across Google, Meta, or YouTube",
      "24/7 Real-Time Live Performance Dashboard Access",
      "Day-3 Search Term & Negative Keyword Scrub Log",
      "Initial Lead Acquisition & Cost Benchmark Report",
    ],
    toolsUsed: [
      "Google Ads Editor",
      "Meta Ads Manager",
      "Looker Studio Live Dashboard",
      "WhatsApp Business API",
    ],
    expectedImpact:
      "Initial verified, high-intent buyer inquiries arriving within 24 to 48 hours of campaign activation.",
  },
  {
    step: "05",
    title: "Optimization, A/B Testing & Scaling",
    subtitle: "Eliminating Waste, A/B Testing & Scaling Winning Campaigns",
    duration: "Ongoing Weekly Sprints",
    summary:
      "We analyze live heatmaps and cost-per-lead data to cut losing ad sets, double down on winning audiences, and scale profitable campaigns into new markets.",
    overview:
      "True growth happens post-launch. Many agencies launch campaigns and leave them running on autopilot. DigiBasera runs continuous weekly optimization sprints — testing fresh creative angles, tweaking landing page copy, cutting high-cost keywords, and scaling ad budgets gradually without destabilizing the algorithm.",
    details: [
      "Continuous A/B split-testing of ad visuals, headlines, and landing page offers.",
      "Budget reallocation: shifting capital from underperforming ad sets into high-ROAS winners.",
      "Systematic 15-20% budget scaling increments to preserve low cost-per-acquisition.",
      "Transparent weekly executive reviews and quarterly geographic / product expansion roadmaps.",
    ],
    actionBreakdown: [
      {
        stepNumber: "05.1",
        actionTitle: "Weekly Creative Refresh & Ad Fatigue Prevention",
        description:
          "We deploy fresh visual angles and new copywriting hooks every 7-14 days to prevent audiences from getting accustomed to existing ads.",
        whyItMatters:
          "Keeps Click-Through Rates (CTR) high and prevents cost-per-lead spikes over long durations.",
      },
      {
        stepNumber: "05.2",
        actionTitle: "Landing Page Heatmap & Friction Removal",
        description:
          "We review session recordings and heatmaps to discover where users hesitate or abandon forms, optimizing copy, layout, and CTA placement.",
        whyItMatters:
          "Steadily improves landing page conversion rates, generating more inquiries from the exact same ad spend.",
      },
      {
        stepNumber: "05.3",
        actionTitle: "Controlled Horizontal & Vertical Scaling",
        description:
          "We scale ad budgets vertically on proven winning ad sets by 15-20% increments and horizontally into lookalike audiences, new pin codes, and surrounding cities.",
        whyItMatters:
          "Expands revenue volume sustainably without shocking ad algorithms or causing CPA inflation.",
      },
      {
        stepNumber: "05.4",
        actionTitle: "Transparent Executive Reviews & Strategic Pivot",
        description:
          "We hold concise weekly syncs and in-depth monthly strategic reviews, providing clear P&L metrics and forward-looking growth roadmaps.",
        whyItMatters:
          "Keeps business owners completely informed and in control of their digital growth trajectory.",
      },
    ],
    deliverable: "Compounding Revenue & Scaling Reports",
    keyOutputs: [
      "Weekly Spend, Lead Quality & Optimization Audit Logs",
      "Continuous A/B Creative & Landing Page Variant Test Results",
      "Monthly Commercial Growth & Unit Economics Review",
      "Quarterly Market Expansion & Seasonal Campaign Blueprint",
    ],
    toolsUsed: [
      "Microsoft Clarity Heatmaps",
      "Looker Studio Executive Dashboards",
      "Google Ads Smart Bidding",
      "Meta Advantage+",
    ],
    expectedImpact:
      "Consistent 20-35% reduction in Customer Acquisition Cost (CAC) and predictable month-over-month revenue scaling.",
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "real-estate",
    name: "Real Estate & Builders",
    tagline: "Turnkey Digital Acquisition For Luxury Apartments, Commercial Spaces & Townships",
    iconName: "Building",
    description:
      "End-to-end performance marketing engineered specifically for developers, builders, and real estate brokers to generate high-intent, phone-verified buyer leads and confirmed site visits.",
    keyChallenge:
      "High cost-per-lead plagued with unqualified inquiries, fake numbers, and unresponsive property seekers.",
    growthSolution:
      "Geo-fenced Meta & Google Search funnels with 2-step OTP/WhatsApp verification, 3D visualizers, and instant lead routing to on-site sales teams.",
    metricsPlaceholder: "₹350 - ₹850 Verified Lead Cost",
    targetAudience:
      "Affluent homebuyers, luxury villa seekers, commercial real estate investors, and NRI property buyers.",
    coreChannels: [
      "Meta Ads",
      "Google Search PPC",
      "WhatsApp API",
      "YouTube Walkthroughs",
      "Local Geo-Fencing",
    ],
    clientSuccessOutcome:
      "Consistent 30-50 verified site visit bookings per month with real-time lead delivery in under 5 minutes.",
    servicesOffered: [
      {
        title: "High-Converting Project Landing Pages & 3D Visualizers",
        description:
          "We build ultra-fast, mobile-first landing pages showcasing floor plans, pricing sheets, construction timelines, and 1-tap WhatsApp site visit booking.",
        highlights: [
          "Sub-second mobile loading speed",
          "Interactive floor plan and amenity visualizer",
          "RERA compliance badges & legal trust proof",
        ],
      },
      {
        title: "High-Intent Google Search PPC (Ready-to-Move & Luxury)",
        description:
          "We capture active property searchers searching for '3 BHK luxury flats in [City]', 'commercial shops for sale', or 'villas near me' with strict negative keyword shields.",
        highlights: [
          "Exact-match keyword bidding on high-budget searchers",
          "Negative keyword filtering against broker spam",
          "Call-extension ads connecting calls directly to reception",
        ],
      },
      {
        title: "Geo-Fenced Meta & Instagram Demand Generation",
        description:
          "Targeting high-net-worth individuals based on postal codes, business owners, frequent international travelers, and property investor interest cohorts.",
        highlights: [
          "High-definition video walk-through ads",
          "Carousel ads showcasing sample flat interiors",
          "Custom lead forms with pre-qualification questions",
        ],
      },
      {
        title: "Instant 1-Click WhatsApp Lead & Sales Team Integration",
        description:
          "Every lead is verified and instantly forwarded to your sales manager's WhatsApp within 5 seconds, accompanied by an automated digital brochure delivery to the prospect.",
        highlights: [
          "Zero manual data entry delay",
          "Automated instant PDF brochure delivery",
          "Automated follow-up reminders to boost site visits",
        ],
      },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    tagline: "Ethical Patient Inbound, Clinic Visibility & Local Healthcare Authority",
    iconName: "HeartPulse",
    description:
      "Compliant, high-trust digital marketing designed for multi-specialty hospitals, dental clinics, IVF centers, and private practitioners to attract appointments sustainably.",
    keyChallenge:
      "Extremely strict advertising policies, patient hesitation, and intense local competition on Google Maps.",
    growthSolution:
      "Doctor personal authority building, dominant Google 3-Pack rankings, and condition-specific educational patient reels.",
    metricsPlaceholder: "+140% Monthly Appointments",
    targetAudience:
      "Patients seeking specialized treatments, cosmetic dentistry, orthopedic care, IVF, and elective surgeries.",
    coreChannels: [
      "Google Business Profile",
      "Google Search Ads",
      "Doctor Video Reels",
      "Local Healthcare SEO",
    ],
    clientSuccessOutcome:
      "Dominant local search ranking on top 3 Google positions and predictable weekly consultation bookings.",
    servicesOffered: [
      {
        title: "Google Business Profile & Local 3-Pack Optimization",
        description:
          "We position your clinic in the top 3 spots for high-volume local terms like 'best dentist near me', 'pediatrician in [Area]', or 'eye clinic'.",
        highlights: [
          "Verification & category dominance optimization",
          "Automated 5-star patient review collection protocol",
          "Geo-tagged clinic photos and doctor profile listings",
        ],
      },
      {
        title: "Doctor Personal Branding & Patient Trust Reels",
        description:
          "We script, shoot, and edit professional, reassuring short-form educational videos where the doctor explains treatments, recovery times, and symptoms.",
        highlights: [
          "High-definition video scripting and clinical compliance",
          "Patient FAQ video reels answering common anxieties",
          "Instagram & YouTube Shorts distribution to local families",
        ],
      },
      {
        title: "Emergency & Symptom-Based Google Search Ads",
        description:
          "Bidding on urgent treatment searches (e.g. 'root canal treatment cost', 'knee replacement specialist') that drive immediate call-in bookings.",
        highlights: [
          "Direct click-to-call mobile ads",
          "Transparent pricing guides that pre-qualify patients",
          "Dedicated landing pages with doctor credential highlights",
        ],
      },
      {
        title: "Automated Appointment Scheduling & No-Show Reduction",
        description:
          "Interactive booking widgets with automated WhatsApp confirmation and reminder messages to slash appointment no-show rates by over 45%.",
        highlights: [
          "Instant WhatsApp appointment slot confirmation",
          "Automated day-before reminder pings",
          "Direct Google Calendar integration for clinic staff",
        ],
      },
    ],
  },
  {
    id: "ecommerce-d2c",
    name: "E-commerce & D2C Brands",
    tagline: "Profitable Revenue Scaling, Cart Recovery & Blended ROAS Optimization",
    iconName: "ShoppingBag",
    description:
      "Comprehensive growth engineering for direct-to-consumer online stores, scaling monthly revenue profitably through high-performing paid ads and retention funnels.",
    keyChallenge:
      "Rising customer acquisition costs (CAC), cart abandonment, and reliance on heavily discounted sales.",
    growthSolution:
      "High-velocity creative testing on Meta, Google Performance Max shopping feeds, and Klaviyo/WhatsApp automated retention loops.",
    metricsPlaceholder: "3.8x - 6.2x Target Blended ROAS",
    targetAudience:
      "Online shoppers purchasing lifestyle apparel, cosmetics, specialty foods, jewelry, and consumer gadgets.",
    coreChannels: [
      "Meta Advantage+ Ads",
      "Google Performance Max",
      "Shopify CRO",
      "WhatsApp Retention",
      "Klaviyo Email",
    ],
    clientSuccessOutcome:
      "Predictable 4x+ return on ad spend with average order value (AOV) expansion and 25%+ repeat purchase rate.",
    servicesOffered: [
      {
        title: "High-ROAS Meta & Instagram Shopping Campaigns",
        description:
          "Deploying dynamic product catalog ads, UGC-style video hooks, carousel unboxings, and conversion-optimized Advantage+ campaigns.",
        highlights: [
          "Weekly creative sprints with 10+ new ad variations",
          "Hook rate and hold rate video optimization",
          "Custom audience retargeting based on cart behavior",
        ],
      },
      {
        title: "Google Performance Max & Merchant Feed Optimization",
        description:
          "Structuring clean Google Merchant Center feeds and PMax campaigns that capture high-intent buyers searching directly for your products.",
        highlights: [
          "High-res product feed attribute optimization",
          "Negative keyword sculpting to prevent generic budget waste",
          "Search & Shopping synergy to capture bottom-funnel orders",
        ],
      },
      {
        title: "Shopify Store Conversion Rate Optimization (CRO)",
        description:
          "Auditing product pages, mobile checkout speed, sticky Add-to-Cart buttons, trust badges, and bundle up-sells to lift conversion rates.",
        highlights: [
          "Sub-2-second mobile load time tuning",
          "Tiered quantity discounts (e.g. 'Buy 2 Get 10% Off')",
          "Trust badges, customer photo reviews, and return policy clarity",
        ],
      },
      {
        title: "Automated WhatsApp & Email Abandoned Cart Recovery",
        description:
          "Automated sequences that message shoppers who drop off at checkout, offering limited-time incentives to recover up to 22% of abandoned carts.",
        highlights: [
          "15-minute and 6-hour automated WhatsApp recovery ping",
          "Dynamic cart image and 1-click checkout recovery link",
          "VIP post-purchase loyalty loops to drive repeat orders",
        ],
      },
    ],
  },
  {
    id: "education",
    name: "Education & EdTech",
    tagline: "Student Admissions, Webinar Funnels & Institutional Brand Authority",
    iconName: "GraduationCap",
    description:
      "Strategic lead generation and institutional positioning for private universities, K-12 schools, test prep academies, and vocational institutes.",
    keyChallenge:
      "Long decision cycles, parent skepticism, and high drop-off rates between initial inquiry and actual fee payment.",
    growthSolution:
      "Targeted seasonal admission drives, student placement case studies, and counselor lead nurturing workflows.",
    metricsPlaceholder: "High-Intent Student Enrollments",
    targetAudience:
      "Parents evaluating schools, coaching academies, and students looking for career-advancing certifications.",
    coreChannels: [
      "Meta Lead Generation",
      "Google Search PPC",
      "YouTube Campus Videos",
      "WhatsApp Counselor Bot",
    ],
    clientSuccessOutcome:
      "Substantial increase in verified campus visits and high conversion from inquiry to final admission.",
    servicesOffered: [
      {
        title: "Seasonal Admission Drive Campaigns (Schools & Colleges)",
        description:
          "Aggressive multi-channel campaigns launched during critical academic windows (February-June) targeting parents and prospective students.",
        highlights: [
          "Geo-targeted radius ads focusing on parent demographic segments",
          "Scholarship and entrance test registration landing pages",
          "Highlighting board results, top rankers, and faculty credentials",
        ],
      },
      {
        title: "Alumni Success Showcases & Campus Video Production",
        description:
          "High-credibility documentary-style student success stories, campus infrastructure tours, and faculty interview reels.",
        highlights: [
          "Real student placement packages and employer highlights",
          "Virtual laboratory, sports ground, and classroom walkthroughs",
          "Overcoming parental doubts about safety, culture, and fees",
        ],
      },
      {
        title: "High-Intent Google Search Ads for Professional Courses",
        description:
          "Dominating commercial queries like 'best digital marketing course in [City]', 'NEET coaching academy', or 'B.Tech admissions'.",
        highlights: [
          "Direct syllabus download capture forms",
          "Competitive fee structure transparency and financing options",
          "Call extension ads routed straight to academic counselors",
        ],
      },
      {
        title: "Counselor CRM & 5-Minute Lead Qualification SOP",
        description:
          "Wiring incoming student leads directly into CRM software and WhatsApp, notifying counselors to dial applicants within 5 minutes.",
        highlights: [
          "Instant automated PDF prospectus dispatch to WhatsApp",
          "Lead scoring based on course choice and budget qualification",
          "Automated counseling appointment reminder schedules",
        ],
      },
    ],
  },
  {
    id: "manufacturing-b2b",
    name: "Manufacturing & B2B",
    tagline: "High-Ticket Commercial Inquiries, Industrial Export Visibility & Distributorships",
    iconName: "Factory",
    description:
      "Account-Based Marketing (ABM) and technical search visibility for industrial manufacturers, engineering plants, and B2B exporters seeking bulk commercial contracts.",
    keyChallenge:
      "Low search volume, lengthy corporate procurement cycles, and difficult access to actual procurement directors.",
    growthSolution:
      "Technical B2B search engine optimization, LinkedIn Account-Based Marketing, and interactive digital product spec sheets.",
    metricsPlaceholder: "High-Ticket Commercial Inquiries",
    targetAudience:
      "Industrial purchase managers, OEM contractors, civil engineers, wholesalers, and international importers.",
    coreChannels: [
      "LinkedIn ABM",
      "Technical B2B SEO",
      "Google Search Ads",
      "Digital Product Portals",
      "Export Portals",
    ],
    clientSuccessOutcome:
      "Consistent stream of Requests For Quotation (RFQs) and long-term distributor partnership agreements.",
    servicesOffered: [
      {
        title: "Technical B2B SEO & Machinery Keyword Dominance",
        description:
          "Ranking your manufacturing plant for high-value technical terms, material grades, machine capacities, and custom OEM manufacturing terms.",
        highlights: [
          "Technical spec sheet optimization for Google indexing",
          "Dominating 'bulk supplier of [Product]' and 'OEM manufacturer' queries",
          "International export country targeting (Gulf, US, Europe)",
        ],
      },
      {
        title: "LinkedIn Account-Based Marketing (ABM)",
        description:
          "Pinpoint ad delivery strictly to Purchase Managers, Plant Directors, and Supply Chain Officers in selected target industries.",
        highlights: [
          "Company list targeting (Fortune 500 & mid-market industrial firms)",
          "Promoting factory certifications (ISO, CE, GMP) and capacity",
          "Lead generation forms collecting project volume requirements",
        ],
      },
      {
        title: "Digital Product Catalog & CAD Spec Download Hub",
        description:
          "Building professional, responsive corporate portals with downloadable PDF technical catalogs, material safety data, and RFQ forms.",
        highlights: [
          "Fast RFQ (Request for Quotation) form with file upload support",
          "Factory infrastructure, CNC machinery, and quality lab showcases",
          "Multilingual export pages for overseas buyers",
        ],
      },
      {
        title: "High-Ticket Google Search PPC for Commercial Procurement",
        description:
          "Running tightly controlled search campaigns targeting commercial buyers seeking immediate bulk supply.",
        highlights: [
          "Excluding retail/consumer search terms via negative keyword lists",
          "Highlighting minimum order quantities (MOQ) directly in ad copy",
          "Direct routing to export managers and commercial sales desk",
        ],
      },
    ],
  },
  {
    id: "retail",
    name: "Retail & Multi-Store",
    tagline: "Driving Physical Store Footfall, Local Radius Promotions & Festival Surges",
    iconName: "Store",
    description:
      "Hyper-local digital promotion built for retail outlets, fashion boutiques, jewelry showrooms, and multi-location stores to fill physical billing counters.",
    keyChallenge:
      "Difficulty attributing digital ad spend to actual physical cash counter billings and foot traffic.",
    growthSolution:
      "3-10 km geo-radius promotions, Google Maps store directions campaigns, and limited-time weekend promotional coupons.",
    metricsPlaceholder: "Local Footfall & Direct Inquiries",
    targetAudience:
      "Local residents and shoppers living or commuting within driving distance of your retail showrooms.",
    coreChannels: [
      "Google Maps Local Ads",
      "Geo-Targeted Meta Ads",
      "WhatsApp Store Broadcasts",
      "Local Influencer Spotlights",
    ],
    clientSuccessOutcome:
      "Measurable increase in weekend in-store foot traffic, store direction requests, and in-store coupon redemptions.",
    servicesOffered: [
      {
        title: "Hyper-Local Radius Meta Campaigns (3 - 10 km)",
        description:
          "Serving captivating visual ads strictly to residents in immediate affluent neighborhoods, announcing new arrivals and exclusive store offers.",
        highlights: [
          "Location-specific ad messaging (e.g. 'Visit our showroom on [Road]')",
          "Video showcasing showroom ambiance, trial rooms, and collections",
          "Store visit CTA buttons opening Google Maps navigation directly",
        ],
      },
      {
        title: "Google Maps 'Store Near Me' Dominance",
        description:
          "Optimizing your showroom's Google Business Profile to appear at the top of local map searches when nearby consumers search for products.",
        highlights: [
          "Product catalog integration on Google Maps listings",
          "Local search ad pins highlighting your store on Google Maps",
          "Tracking phone call clicks, website visits, and driving directions",
        ],
      },
      {
        title: "Festival & Seasonal Sale Blitzes",
        description:
          "High-intensity ad sprints during festive shopping seasons (Diwali, Wedding seasons, Summer Clearance) with exclusive digital coupons.",
        highlights: [
          "Downloadable in-store discount QR coupons",
          "Countdown timers creating urgent buying intent",
          "Dynamic retargeting of past visitors ahead of major shopping days",
        ],
      },
      {
        title: "Customer WhatsApp Loyalty & New Arrival Broadcasts",
        description:
          "Segmented WhatsApp messages announcing new collection arrivals and private VIP sale previews to past customers.",
        highlights: [
          "Rich media image catalogs sent directly to customer WhatsApp",
          "1-tap inquiry button for checking in-store stock availability",
          "Zero spam compliance with personalized greeting variables",
        ],
      },
    ],
  },
  {
    id: "hospitality",
    name: "Hospitality & Restaurants",
    tagline: "Direct Table Reservations, Banquet Hall Inquiries & Direct Guest Bookings",
    iconName: "Utensils",
    description:
      "Demand generation and direct booking funnels for fine-dining restaurants, banquet halls, boutique resorts, and heritage hotels seeking higher margins.",
    keyChallenge:
      "High commission fees paid to food aggregators and online travel agencies (OTAs), alongside seasonal weekday slumps.",
    growthSolution:
      "Direct WhatsApp reservation widgets, appetizing Instagram Reels, and high-intent banquet inquiry campaigns.",
    metricsPlaceholder: "Direct Booking Growth",
    targetAudience:
      "Foodies, weekend brunch enthusiasts, corporate event planners, and families organizing weddings or private parties.",
    coreChannels: [
      "Instagram Food Reels",
      "Google Search Ads for Banquets",
      "WhatsApp Reservation Bot",
      "Google Maps Local Pack",
    ],
    clientSuccessOutcome:
      "Over 40% reduction in aggregator dependency and a booked-out banquet and weekend table calendar.",
    servicesOffered: [
      {
        title: "Mouth-Watering Culinary Video & Food Reels Production",
        description:
          "Shooting high-definition vertical video reels highlighting chef special dishes, sizzling presentations, cocktails, and dining ambiance.",
        highlights: [
          "Sensory-driven food styling and 4K macro camera shots",
          "Collaborations with trusted local food bloggers and creators",
          "Geo-targeted Instagram distribution timed before weekend dinner hours",
        ],
      },
      {
        title: "High-Ticket Banquet & Event Booking Lead Funnels",
        description:
          "Google Search and Meta ad campaigns capturing inquiries for weddings, corporate conferences, cocktail parties, and birthdays.",
        highlights: [
          "Dedicated banquet landing page with seating capacity and menu packages",
          "Instant PDF menu and venue pricing sent via WhatsApp",
          "Lead delivery directly to banquet manager with guest count info",
        ],
      },
      {
        title: "Direct WhatsApp Table Reservation Engine",
        description:
          "Adding a 1-tap table booking button to Instagram bio and website that automatically reserves tables and confirms party size.",
        highlights: [
          "Bypassing third-party aggregator commissions",
          "Instant reservation confirmation messages with Google Maps location",
          "Automated review requests sent 2 hours after guest dining time",
        ],
      },
      {
        title: "Weekday Promotion & Festival Dining Packages",
        description:
          "Targeted promotional campaigns solving slow Monday-Thursday dining hours with corporate lunch specials and buffet promotions.",
        highlights: [
          "Corporate lunch packages targeted to nearby business parks",
          "Sunday brunch and live music night weekend campaigns",
          "Festival dining experiences (Valentine's, New Year, Diwali)",
        ],
      },
    ],
  },
  {
    id: "finance",
    name: "Finance & Fintech",
    tagline: "High-Trust Inbound Leads For Loans, Wealth Advisory & Investment Services",
    iconName: "Landmark",
    description:
      "Compliant, high-credibility lead acquisition systems for financial advisors, CA consultants, loan brokers, mutual fund distributors, and fintech ventures.",
    keyChallenge:
      "Extremely high customer skepticism regarding financial promises, along with strict ad regulatory policies.",
    growthSolution:
      "Interactive financial calculators, educational authority video campaigns, and high-intent Google Search PPC.",
    metricsPlaceholder: "Pre-Screened Finance Leads",
    targetAudience:
      "Business owners needing capital, salaried professionals planning wealth growth, and home loan borrowers.",
    coreChannels: [
      "Google Search Intent",
      "Interactive Calculators",
      "Educational Trust Videos",
      "WhatsApp Financial Bot",
    ],
    clientSuccessOutcome:
      "High volume of pre-screened applications with verified CIBIL readiness and income documentation.",
    servicesOffered: [
      {
        title: "Interactive EMI & Financial Growth Calculator Funnels",
        description:
          "Custom web calculators where prospects enter loan amounts or investment goals and receive an instant breakdown before submitting their contact details.",
        highlights: [
          "Instant, frictionless user engagement with zero complex jargon",
          "Pre-screening leads based on loan requirement and income bracket",
          "Immediate calculation results delivered to applicant WhatsApp",
        ],
      },
      {
        title: "Regulatory-Compliant Google Search Ads",
        description:
          "Capturing high-intent commercial search queries like 'unsecured business loan in [City]', 'portfolio management services', or 'home loan balance transfer'.",
        highlights: [
          "Full compliance with Google financial services advertising policies",
          "Transparent interest rate and tenure disclaimers",
          "Direct routing to certified financial advisors",
        ],
      },
      {
        title: "Financial Education & Authority Video Content",
        description:
          "Producing informative video explainers on tax-saving instruments, smart debt management, and market updates to establish authentic authority.",
        highlights: [
          "Demystifying complex financial concepts with clear graphics",
          "Doctor/Adviser trust-building interviews and client reviews",
          "Distribution across YouTube, LinkedIn, and Instagram",
        ],
      },
      {
        title: "Encrypted Lead Routing & Instant Advisor Dispatch",
        description:
          "Enterprise-grade encrypted web forms that forward sensitive financial inquiries straight to authorized loan officers within 3 minutes.",
        highlights: [
          "Full data security and confidentiality compliance",
          "Automatic lead assignment based on loan size or investment type",
          "Instant automated acknowledgement SMS to applicant",
        ],
      },
    ],
  },
  {
    id: "professional-services",
    name: "Professional Services",
    tagline: "Inbound Client Acquisition For Legal Advocates, CA Firms, Architects & Consultants",
    iconName: "Briefcase",
    description:
      "Premium positioning and inbound client acquisition funnels for chartered accountants, architectural studios, legal practitioners, and corporate consultants.",
    keyChallenge:
      "Avoiding the trap of commoditization and conveying true specialized expertise to high-paying commercial clients.",
    growthSolution:
      "Thought-leadership positioning, architectural portfolio portals, and calendar-integrated consultation funnels.",
    metricsPlaceholder: "High-Value Advisory Engagements",
    targetAudience:
      "Corporate directors, real estate developers, commercial enterprise owners, and affluent private clients.",
    coreChannels: [
      "LinkedIn Thought Leadership",
      "SEO for Niche Advisory",
      "Case Study Whitepapers",
      "Consultation Booking Pages",
    ],
    clientSuccessOutcome:
      "Predictable intake of high-margin corporate retainers and premium advisory consultations.",
    servicesOffered: [
      {
        title: "Bespoke Corporate Portals & Portfolio Visualizers",
        description:
          "Crafting minimalist, high-typography websites showcasing firm partners, landmark cases, project blueprints, and corporate credentials.",
        highlights: [
          "Clean visual presentation of past institutional work",
          "Detailed partner bios with educational pedigree and experience",
          "Client verification testimonials from reputable corporate leaders",
        ],
      },
      {
        title: "Executive Consultation Booking Flow",
        description:
          "Frictionless booking funnels integrated with your calendar where prospective commercial clients can select meeting times and upload project briefs.",
        highlights: [
          "Pre-consultation qualification questionnaires",
          "Direct Google Calendar and Zoom link synchronization",
          "Automated pre-meeting reminder and briefing packet email",
        ],
      },
      {
        title: "LinkedIn Thought Leadership & Advisory Articles",
        description:
          "Writing and publishing expert commentary on regulatory changes, tax reforms, corporate law updates, and architectural innovations.",
        highlights: [
          "Positioning senior partners as go-to industry commentators",
          "Engaging corporate decision-makers through organic authority",
          "Converting post impressions into private direct message inquiries",
        ],
      },
      {
        title: "Niche Commercial Search Engine Optimization",
        description:
          "Ranking your firm for specialized commercial search queries like 'turnkey industrial architects', 'GST dispute advisory', or 'company merger advisors'.",
        highlights: [
          "Filtering out low-budget consumer queries",
          "Targeting commercial intent keywords with high lifetime value",
          "Establishing top-page ranking in your regional state capital",
        ],
      },
    ],
  },
  {
    id: "startups",
    name: "Startups & Tech Ventures",
    tagline: "Rapid Product-Market Fit Testing, User Acquisition & Investor-Ready Assets",
    iconName: "Rocket",
    description:
      "Agile growth marketing, conversion engineering, and rapid go-to-market execution for funded startups and early-stage tech ventures.",
    keyChallenge:
      "Limited runway burn rate and the urgent need to prove product-market fit (PMF) and low customer acquisition cost (CAC).",
    growthSolution:
      "Agile landing page variant tests, viral early-adopter waitlists, and comprehensive event-driven analytics tracking.",
    metricsPlaceholder: "Rapid Early User Traction",
    targetAudience:
      "Early adopters, tech enthusiasts, digital-first consumers, and B2B pilot enterprise buyers.",
    coreChannels: [
      "Agile Landing Page A/B Tests",
      "Social Beta Launch Ads",
      "LinkedIn Tech Outreach",
      "Product Analytics Setup",
    ],
    clientSuccessOutcome:
      "Fast validation of unit economics, proven CAC benchmarks, and early traction charts ready for pitch decks.",
    servicesOffered: [
      {
        title: "Rapid MVP Landing Page Development & Messaging Tests",
        description:
          "Designing high-speed, modern web pages explaining your software or technology proposition with crystal clarity and interactive demo previews.",
        highlights: [
          "Delivered in under 7 days using modern tech stacks (React / Tailwind)",
          "A/B split-testing different value propositions and pricing tiers",
          "Frictionless signup widgets with social login and OTP verification",
        ],
      },
      {
        title: "Viral Waitlist & Early Beta User Campaigns",
        description:
          "Designing gamified pre-launch waitlists and community access campaigns to generate eager early adopters ahead of official product launch.",
        highlights: [
          "Referral loops (e.g. 'Invite 3 friends to skip the queue')",
          "Hyper-targeted social ads on Twitter/X, LinkedIn, and Instagram",
          "Zero-friction email and WhatsApp community onboarding",
        ],
      },
      {
        title: "Cohort Tracking & Product Analytics Instrumentation",
        description:
          "Configuring Mixpanel, PostHog, GA4, and hotjar session recordings to monitor activation rates, user churn, and funnel drop-offs.",
        highlights: [
          "Complete event tracking across signups, onboarding, and checkouts",
          "Drop-off diagnosis identifying UI/UX friction in real time",
          "Investor-grade cohort retention charts and CAC/LTV reporting",
        ],
      },
      {
        title: "Investor Pitch Decks & Commercial Traction Dashboards",
        description:
          "Assisting startup founders in creating visually polished presentation decks, UI mockups, and live metric dashboards for venture capital pitches.",
        highlights: [
          "Clean visual storytelling illustrating total addressable market (TAM)",
          "Realistic CAC, ROAS, and conversion rate validation data",
          "Professional UI/UX product showcase mockups",
        ],
      },
    ],
  },
  {
    id: "local-businesses",
    name: "Local Service Businesses",
    tagline: "Local Area Dominance For Interior Designers, Salons, Repair & Home Services",
    iconName: "MapPin",
    description:
      "Grounded local performance marketing that positions neighborhood specialists as the #1 trusted choice in their city, capturing nearby buyer demand.",
    keyChallenge:
      "Heavy reliance on word-of-mouth plateauing, or losing customers to aggressive aggregators like JustDial and Urban Company.",
    growthSolution:
      "Google Business Profile 3-Pack supremacy, click-to-WhatsApp social ads, and automated post-service review collection.",
    metricsPlaceholder: "Consistent Weekly Bookings",
    targetAudience:
      "Homeowners, apartment residents, and local city shoppers looking for reliable local service providers.",
    coreChannels: [
      "Google Business Profile 3-Pack",
      "Local Meta Ads",
      "Direct WhatsApp Inquiries",
      "Automated Review Collection",
    ],
    clientSuccessOutcome:
      "Consistent 20-40 verified local inquiries per week without paying commissions to directory aggregators.",
    servicesOffered: [
      {
        title: "Google Maps 3-Pack Supremacy & Local Citations",
        description:
          "Auditing and supercharging your Google Map listing with proper geo-coordinates, keyword-rich category tags, and verified business citations.",
        highlights: [
          "Ranking in top 3 map results for '[Service] in [City/Neighborhood]'",
          "Regular geo-tagged work photo uploads and update posts",
          "Direct call and route direction tracking",
        ],
      },
      {
        title: "Localized 'Click-to-WhatsApp' Social Ad Blitzes",
        description:
          "Targeted photo and video ads on Instagram & Facebook showing real local projects with a single button opening a direct WhatsApp chat with your team.",
        highlights: [
          "Targeting strictly within a 5-15 km radius of your workshop/office",
          "Showcasing genuine before-and-after work transformations",
          "Instant WhatsApp chat with pre-written quotation queries",
        ],
      },
      {
        title: "Automated 5-Star Google Review Collection System",
        description:
          "Setting up automated SMS and WhatsApp triggers that prompt happy clients right after project completion to submit a 5-star Google review.",
        highlights: [
          "Direct 1-tap link to your Google review submission box",
          "Dramatically outpaces local competitors in total verified reviews",
          "Shielding your brand authority against occasional negative ratings",
        ],
      },
      {
        title: "Fast Quotation Landing Pages with Project Pricing Guides",
        description:
          "Lightweight mobile pages highlighting past local client photos, cost estimates, warranty badges, and verified testimonial videos.",
        highlights: [
          "Clear estimate calculator or price starting ranges",
          "Verified customer video testimonials from local residents",
          "1-tap call button sticky on every mobile screen",
        ],
      },
    ],
  },
  {
    id: "d2c-brands",
    name: "Direct-to-Consumer (D2C)",
    tagline: "Creative-Led Customer Acquisition, Viral Video Hooks & Repeat Purchase Engines",
    iconName: "Sparkles",
    description:
      "Performance creative sprints and conversion scaling engineered for modern consumer brands, beauty products, apparel labels, and packaged goods.",
    keyChallenge:
      "High ad fatigue, fierce competition in social feeds, and razor-thin margins after shipping and marketing expenses.",
    growthSolution:
      "Rapid creative iteration (10+ video hooks weekly), offer bundling to boost Average Order Value, and automated retention loops.",
    metricsPlaceholder: "Scalable First-Order Margin",
    targetAudience:
      "Digital shoppers discovering brands on Instagram, seeking authentic reviews, unboxings, and premium product experiences.",
    coreChannels: [
      "Meta Advantage+ Creative Sprints",
      "UGC Video Production",
      "Klaviyo Retention Flows",
      "Influencer Seedings",
    ],
    clientSuccessOutcome:
      "Healthy first-order contribution margins and predictable month-over-month compounding customer lifetime value (LTV).",
    servicesOffered: [
      {
        title: "High-Frequency UGC & Short-Form Video Production",
        description:
          "Producing batches of 10-15 real customer-style vertical videos every month with problem-solution hooks, unboxings, and visual proof.",
        highlights: [
          "3-second scroll-stopping hooks tailored for Instagram Reels",
          "Authentic creators demonstrating product textures and benefits",
          "Continuous testing of different voiceover angles and music tracks",
        ],
      },
      {
        title: "AOV Expansion & Irresistible Bundle Architecture",
        description:
          "Structuring high-converting checkout bundles (e.g. 'Starter Kit + Free Gift', 'Buy 2 Get 1 Free') to maximize revenue per checkout.",
        highlights: [
          "Boosting Average Order Value by 20-35% on paid traffic",
          "Free shipping threshold bars nudging cart additions",
          "Post-purchase 1-click upsells before final payment confirmation",
        ],
      },
      {
        title: "Multi-Touch Dynamic Retargeting Campaigns",
        description:
          "Re-engaging visitors who viewed products or abandoned carts with customer review carousels, founder story videos, and exclusive discount codes.",
        highlights: [
          "Dynamic catalog ads showing exact items left behind",
          "Social proof ads featuring press mentions and verified reviews",
          "Urgent expiration timers for cart recovery incentives",
        ],
      },
      {
        title: "VIP WhatsApp & Email Retention Engines",
        description:
          "Automated retention workflows triggering repurchase reminders right when the customer is expected to run out of the product.",
        highlights: [
          "Replenishment reminder flows timed to product consumption cycle",
          "VIP early access to new product drops for past buyers",
          "Zero ad cost revenue generated from existing customer database",
        ],
      },
    ],
  },
  {
    id: "b2b-businesses",
    name: "B2B Enterprises & SaaS",
    tagline: "Account-Based Inbound, Enterprise Demo Bookings & Executive Pipeline Building",
    iconName: "ShieldCheck",
    description:
      "High-level enterprise pipeline generation for B2B software companies, IT services firms, and corporate consultancies with long sales cycles.",
    keyChallenge:
      "Navigating multi-stakeholder approval committees and conveying complex software ROI to non-technical executives.",
    growthSolution:
      "Personalized LinkedIn Account-Based Marketing (ABM), interactive product tours, and high-intent competitor comparison search ads.",
    metricsPlaceholder: "Qualified Enterprise Pipeline",
    targetAudience:
      "Chief Technology Officers (CTO), Chief Financial Officers (CFO), VP of Operations, and corporate procurement heads.",
    coreChannels: [
      "LinkedIn ABM Ads",
      "Google Competitor Search",
      "Interactive Software Demos",
      "Sales Enablement Collateral",
    ],
    clientSuccessOutcome:
      "Consistent flow of qualified demo requests and high Annual Contract Value (ACV) enterprise pilot meetings.",
    servicesOffered: [
      {
        title: "Account-Based LinkedIn Advertising (ABM)",
        description:
          "Delivering laser-focused ads exclusively to decision-makers within specific target companies matching your ideal customer profile (ICP).",
        highlights: [
          "Targeting by company headcount, industry, and exact job seniority",
          "Promoting executive whitepapers, customer case studies, and ROI calculators",
          "Lead Gen forms auto-populating corporate email addresses and phone numbers",
        ],
      },
      {
        title: "High-Converting Interactive Product Tour Pages",
        description:
          "Developing lightweight, frictionless interactive product tours where prospects can explore key software features before booking a call.",
        highlights: [
          "Self-guided feature exploration that reduces sales resistance",
          "Clear ROI calculation widgets demonstrating hours/dollars saved",
          "Frictionless 1-click demo scheduling integrated with Calendly / HubSpot",
        ],
      },
      {
        title: "Competitor Comparison & Alternative Search PPC",
        description:
          "Bidding on high-intent competitor comparison keywords (e.g. '[Competitor] alternative' or '[Competitor] vs [Your Brand]').",
        highlights: [
          "Honest feature-by-feature comparison landing pages",
          "Highlighting superior customer support, pricing, or local integration",
          "Capturing buyers already dissatisfied with legacy market solutions",
        ],
      },
      {
        title: "Sales Enablement & Deal-Closing Collateral Kits",
        description:
          "Designing executive-ready one-pagers, security architecture briefs, and ROI teardowns that internal champions can present to the CFO.",
        highlights: [
          "CFO-ready business case and payback period summaries",
          "SOC2, ISO, and enterprise data security compliance sheets",
          "Implementation roadmap and change-management timelines",
        ],
      },
    ],
  },
];

export const LIVE_CLIENT_WEBSITES: LiveClientWebsite[] = [
  {
    id: "abfi-interior",
    name: "ABFI Interior",
    url: "https://www.abfiinterior.com",
    displayUrl: "www.abfiinterior.com",
    industry: "Luxury Interior & Architecture",
    tagline: "Turnkey Residential & Commercial Interior Architecture",
    summary:
      "High-end interior design portfolio portal, interactive 3D project visualizer gallery, room budget estimator, and automated WhatsApp inquiry capture.",
    imageUrl: "/assets/images/abfi_interior_website_1788005819260.jpg",
    badge: "Live Client Website",
    techStack: [
      "Next.js & React",
      "Tailwind CSS",
      "SEO Schema Engine",
      "WhatsApp Business API",
      "High-Res Image CDN",
    ],
    features: [
      "Architectural 3D Visualizer Gallery",
      "1-Click WhatsApp Room Estimator",
      "Sub-second 98+ PageSpeed Score",
      "Local Google Search 3-Pack Schema",
      "Interactive Project Before/After Sliders",
    ],
    metrics: [
      {
        label: "Monthly Inbound Leads",
        value: "185+",
        description: "Turnkey villa & office inquiries",
      },
      { label: "Core Web Vitals Score", value: "98/100", description: "Google Mobile Speed Index" },
      {
        label: "Organic Search Growth",
        value: "+290%",
        description: "Year-over-year search visits",
      },
    ],
    impact:
      "Delivered a 3.4x surge in luxury villa interior consultations and closed turnkey multi-crore residential projects within the first quarter of deployment.",
  },
  {
    id: "super-india-interior",
    name: "Super India Interior",
    url: "https://www.superindiainterior.com",
    displayUrl: "www.superindiainterior.com",
    industry: "Commercial & Corporate Office Interiors",
    tagline: "Turnkey Corporate Office & Commercial Space Fitouts",
    summary:
      "Comprehensive corporate web redesign, commercial project portfolios, acoustic & ergonomic workspace solutions, and high-conversion B2B lead capture funnel.",
    imageUrl: "/assets/images/super_india_interior_website_1788005835222.jpg",
    badge: "Live Client Website",
    techStack: [
      "React Web Platform",
      "Tailwind CSS",
      "Corporate Lead Engine",
      "Commercial Fitout Calculator",
      "Local SEO",
    ],
    features: [
      "Turnkey Office Scope Estimator",
      "Interactive Corporate Case Studies",
      "Corporate RFP Submission Portal",
      "Mobile-First Ultra Fast UI",
      "Architectural Fitout Specs Downloader",
    ],
    metrics: [
      {
        label: "Corporate RFP Inquiries",
        value: "+240%",
        description: "Direct builder & corporate RFPs",
      },
      { label: "Avg Session Duration", value: "3m 50s", description: "High visitor engagement" },
      {
        label: "Google Page-1 Keywords",
        value: "38+",
        description: "Commercial interior rankings",
      },
    ],
    impact:
      "Established the agency as a preferred commercial interior execution partner across multi-story tech parks and corporate headquarters.",
  },
  {
    id: "premium-pack-co",
    name: "Premium Pack Co",
    url: "https://www.premiumpackco.com",
    displayUrl: "www.premiumpackco.com",
    industry: "Custom Packaging & Industrial Manufacturer",
    tagline: "Luxury Rigid Boxes, Corrugated & Eco-Friendly Packaging Solutions",
    summary:
      "B2B packaging catalog, custom box dimension specification selector, instant MOQ quotation engine, and international export lead capture architecture.",
    imageUrl: "/assets/images/premium_pack_co_website_1788005849368.jpg",
    badge: "Live Client Website",
    techStack: [
      "Custom E-Commerce & B2B Portal",
      "MOQ Quote Calculator",
      "Global CDN",
      "International SEO Engine",
    ],
    features: [
      "Custom Dimension & Material Selector",
      "Instant Bulk Order MOQ Inquirer",
      "Global Export Inquiry Router",
      "High-Definition 3D Box Showcase",
      "Instant Multi-Currency RFQ Generator",
    ],
    metrics: [
      {
        label: "Bulk Quotation Inquiries",
        value: "320+/mo",
        description: "Wholesale & D2C box inquiries",
      },
      {
        label: "Global Export Reach",
        value: "45% Share",
        description: "Middle East & European buyers",
      },
      { label: "Conversion Rate", value: "9.2%", description: "Visitor to MOQ quote request" },
    ],
    impact:
      "Scaled custom box manufacturer inquiries across Pan-India D2C brands, luxury perfumeries, cosmetics, and international export distributors.",
  },
];

export const SOCIAL_MEDIA_POSTS: SocialMediaPost[] = [
  {
    id: "sm-1",
    brandName: "Digi Basera – Festive Growth Sprint",
    platform: "Instagram",
    format: "Static Creative",
    category: "Festival & Seasonal",
    caption:
      "🪔✨ Happy Diwali & Sal Mubarak! Is Diwali, apne business ko dijiye digital growth ka sabse bada uphaar. Light up your brand's digital presence with up to 40% OFF on Full-Stack Performance Marketing, Custom Web Platforms & Social Media Retainers.\n\n✨ Guaranteed High-ROI Funnels\n✨ Fast 7-Day Campaign Deployment\n✨ Free Commercial Growth Audit\n\n🎉 Limited Time Festive Offer valid till Diwali weekend! Tap link in bio or WhatsApp us to claim.",
    hashtags: [
      "#HappyDiwali",
      "#FestiveOffer",
      "#DigitalMarketingRajkot",
      "#BusinessGrowth",
      "#DiwaliSpecial",
      "#DigiBasera",
    ],
    imageUrl: "/assets/images/diwali_festive_promo_post_1788005979732.jpg",
    aspectRatio: "square",
    likesCount: "5.8K",
    commentsCount: "240",
    sharesCount: "1.2K",
    reachCount: "84,000",
    keyResult: "180+ Inbound Business Inquiries & 24 Closed Client Retainers",
    creativeStrategy:
      "Opulent deep royal navy and gold festive visual design with glowing oil diyas, high-urgency festive discount hook, and clear WhatsApp action CTA.",
  },
  {
    id: "sm-2",
    brandName: "Digi Basera – Navratri Special",
    platform: "Instagram",
    format: "Static Creative",
    category: "Festival & Seasonal",
    caption:
      '🌸💃 Shubh Navratri! Celebrate 9 nights of devotion, rhythm, and boundless prosperity. Dance to the beats of growth with our exclusive Navratri Festive Branding & Social Media Packages.\n\n🎊 Special Festive Bundle:\n✔️ 30 High-Engagement Festival Posts & Reels\n✔️ Local Meta & Google Ad Campaign Setup\n✔️ Free Festive Website Banner & WhatsApp Automation\n\nDM "NAVRATRI" or click the link to claim your festive business voucher!',
    hashtags: [
      "#HappyNavratri",
      "#GarbaVibes",
      "#NavratriOffer",
      "#FestiveBranding",
      "#SocialMediaMarketing",
      "#GujaratiFestivals",
    ],
    imageUrl: "/assets/images/navratri_festive_post_1788005993964.jpg",
    aspectRatio: "square",
    likesCount: "4.9K",
    commentsCount: "195",
    sharesCount: "980",
    reachCount: "72,500",
    keyResult: "120+ Festive Campaign Inquiries across Gujarat & Mumbai",
    creativeStrategy:
      "Culturally resonant royal purple & gold traditional mandalas with dandiya motifs connecting Gujarati cultural pride with business growth.",
  },
  {
    id: "sm-3",
    brandName: "Digi Basera B2B Growth Engine",
    platform: "LinkedIn",
    format: "Carousel",
    category: "Business Promotion",
    caption:
      'Are you tired of paying marketing agencies for vanity metrics like "impressions" and "reach" with zero actual revenue in the bank? 📈💼\n\nHere is how we help B2B manufacturers, real estate developers, and high-ticket service brands scale predictably:\n\n1️⃣ High-Intent Google & LinkedIn Search Ad Funnels\n2️⃣ Sub-Second High-Conversion Web Architecture\n3️⃣ Automated 15-Second WhatsApp Lead Routing\n\nBook your Free 30-Minute Commercial Growth Audit with our senior strategists today.',
    hashtags: [
      "#B2BMarketing",
      "#RevenueGrowth",
      "#LeadGeneration",
      "#PerformanceMarketing",
      "#ROI",
      "#DigiBasera",
    ],
    imageUrl: "/assets/images/business_growth_promo_post_1788006007399.jpg",
    aspectRatio: "square",
    likesCount: "3.6K",
    commentsCount: "210",
    sharesCount: "840",
    reachCount: "65,000",
    keyResult: "+320% Revenue Growth for 14 Enterprise Clients",
    creativeStrategy:
      "Matte black & metallic gold executive aesthetic highlighting concrete financial metrics and direct revenue transformation over vanity numbers.",
  },
  {
    id: "sm-4",
    brandName: "Skyline Luxury Smart Villas",
    platform: "Facebook",
    format: "Static Creative",
    category: "Business Promotion",
    caption:
      "🏡✨ Festive Launch Special: Step into Rajkot's most prestigious ultra-luxury 4 & 5 BHK Smart Villas with Private Pool & Landscaped Gardens.\n\n🔥 Festive Exclusive Perks:\n✔️ Book with Just 10% Down Payment\n✔️ Zero Stamp Duty & Registration Benefit*\n✔️ Free High-End Home Automation Suite worth ₹5 Lakhs\n\nStarting at ₹1.45 Cr*. Only 6 exclusive units available for festive booking. Schedule your private VIP site walkthrough today.",
    hashtags: [
      "#SkylineVillas",
      "#LuxuryRealEstate",
      "#FestiveOffer",
      "#RajkotVillas",
      "#SmartHomes",
      "#DreamHome",
    ],
    imageUrl: "/assets/images/real_estate_promo_post_1788006020063.jpg",
    aspectRatio: "square",
    likesCount: "6.2K",
    commentsCount: "380",
    sharesCount: "1.4K",
    reachCount: "115,000",
    keyResult: "68 Verified HNI Site Visits & 9 Unit Bookings Closed",
    creativeStrategy:
      "High-contrast sunset architectural visualization with clear financial incentives (zero stamp duty) driving rapid high-ticket decision making.",
  },
  {
    id: "sm-5",
    brandName: "Saffron Royal Dine & Barbecue",
    platform: "Instagram",
    format: "Static Creative",
    category: "Business Promotion",
    caption:
      "Celebrate the festive season with authentic royal flavors! 🥘✨ Gather your family and loved ones for our grand Festive Feast Buffet.\n\n🎉 Special Festive Offer:\n🍽️ Flat 25% Off On All Family Dining & Weekend Buffets\n🍲 Unlimited Live Chaat, Dum Biryani, Tandoori Starters & Festive Desserts\n\nOffer valid throughout the festive season. Reserve your celebration table now via the link in bio or WhatsApp!",
    hashtags: [
      "#FestiveFeast",
      "#RoyalDining",
      "#FoodieRajkot",
      "#WeekendBuffet",
      "#RestaurantOffer",
      "#FamilyDining",
    ],
    imageUrl: "/assets/images/restaurant_festive_offer_post_1788006034950.jpg",
    aspectRatio: "square",
    likesCount: "7.8K",
    commentsCount: "310",
    sharesCount: "2.1K",
    reachCount: "98,000",
    keyResult: "100% Weekend Table Bookings & 350+ Table Reservations",
    creativeStrategy:
      "Mouthwatering warm back-lit culinary photography with bold discount badge maximizing impulse weekend dining plans.",
  },
  {
    id: "sm-6",
    brandName: "Aura Luxury Salon & Bridal Studio",
    platform: "Instagram",
    format: "Static Creative",
    category: "Business Promotion",
    caption:
      "✨ Get the irresistible festive radiance this celebration season! 🌸 Radiate confidence with our signature Pre-Festive Skin, Hair & Bridal Glow Packages.\n\n💖 Festive Makeover Package @ Just ₹2,499 (Original ₹4,200):\n✔️ Gold Radiance Hydration Facial\n✔️ Moroccan Argan Hair Spa & Blowdry\n✔️ Deluxe Mani-Pedi & Threading\n\nLimited slots available before festival dates. Tap link in bio to book your pampering appointment today!",
    hashtags: [
      "#FestiveGlow",
      "#SalonOffer",
      "#BridalMakeover",
      "#SkinCareRoutine",
      "#BeautyDeals",
      "#AuraSalon",
    ],
    imageUrl: "/assets/images/salon_spa_festive_glow_promo_1788006048578.jpg",
    aspectRatio: "square",
    likesCount: "8.4K",
    commentsCount: "290",
    sharesCount: "1.6K",
    reachCount: "105,000",
    keyResult: "240+ Pre-Festive Salon Appointments Booked",
    creativeStrategy:
      "High-aesthetic rose gold and champagne beauty visuals with transparent bundle pricing eliminating price hesitation.",
  },
  {
    id: "sm-7",
    brandName: "Digi Basera – Holi Campaign Sprint",
    platform: "Instagram",
    format: "Static Creative",
    category: "Festival & Seasonal",
    caption:
      "🎨🌈 Wishing you and your family a very Joyful, Vibrant and Prosperous Happy Holi! May this festival of colors add dynamic energy, thriving customer leads, and high revenues to your business journey.\n\n🔥 48-Hour Holi Flash Offer:\nFlat 30% Off on all Social Media Management, Video Reels Editing & Brand Identity Retainers!\n\nUse Code: HOLIGLOW30 on your consultation call. Claim before offer ends!",
    hashtags: [
      "#HappyHoli",
      "#HoliOffer",
      "#FestivalOfColors",
      "#BrandingAgency",
      "#BusinessPromotion",
      "#DigiBasera",
    ],
    imageUrl: "/assets/images/holi_festival_promo_post_1788006061652.jpg",
    aspectRatio: "square",
    likesCount: "5.3K",
    commentsCount: "180",
    sharesCount: "1.1K",
    reachCount: "76,000",
    keyResult: "85+ Business Inquiries & 18 Immediate Campaign Signups",
    creativeStrategy:
      "Explosive multi-color gulal splash graphic paired with a 48-hour flash sale coupon code creating immediate commercial momentum.",
  },
];

export const PORTFOLIO_CASE_STUDIES: PortfolioCaseStudy[] = [
  {
    id: "abfi-interior-case",
    title: "ABFI Interior – Luxury Architectural Portal & Lead Engine",
    clientPlaceholder: "ABFI Interior (www.abfiinterior.com)",
    industry: "Luxury Interior & Architecture",
    category: "Websites",
    imageUrl: "/assets/images/abfi_interior_website_1788005819260.jpg",
    summary:
      "Engineered a bespoke luxury portfolio website with 3D project visualizers, instant WhatsApp room estimators, and high-converting residential lead capture.",
    servicesProvided: [
      "Custom Web Development",
      "UI/UX Luxury Aesthetic",
      "WhatsApp Automation",
      "SEO Architecture",
      "Social Media Branding",
    ],
    metrics: [
      {
        label: "Qualified Leads",
        value: "185+/mo",
        description: "High-ticket villa & duplex inquiries",
      },
      { label: "PageSpeed Score", value: "98/100", description: "Sub-second mobile loading speed" },
      {
        label: "Organic Search Growth",
        value: "+290%",
        description: "Year-over-year search visits",
      },
    ],
    challenge:
      "Lack of an authoritative online showcase, slow loading times on heavy architectural photo portfolios, and low digital inquiry volume.",
    strategy:
      "Designed a modern minimalist web portal with high-speed WebP image CDN, interactive 3D project walkthroughs, and automated 1-click WhatsApp consultation routing.",
  },
  {
    id: "super-india-interior-case",
    title: "Super India Interior – Commercial Fitout Web & B2B Funnel",
    clientPlaceholder: "Super India Interior (www.superindiainterior.com)",
    industry: "Commercial & Office Interiors",
    category: "Websites",
    imageUrl: "/assets/images/super_india_interior_website_1788005835222.jpg",
    summary:
      "Built a commercial interior execution portal showcasing multi-workstation tech parks, acoustic designs, and B2B corporate RFP generation pipelines.",
    servicesProvided: [
      "Corporate Web Platform",
      "B2B Lead Funnel",
      "LinkedIn Content Strategy",
      "Local Business SEO",
    ],
    metrics: [
      {
        label: "Corporate RFPs",
        value: "+240%",
        description: "Direct commercial client inquiries",
      },
      {
        label: "Page 1 Keywords",
        value: "38+",
        description: "Commercial interior search rankings",
      },
      {
        label: "Avg Session Time",
        value: "3m 50s",
        description: "Deep engagement on case studies",
      },
    ],
    challenge:
      "Difficulty differentiating from unorganized local contractors when pitching multi-floor corporate headquarters and commercial tech parks.",
    strategy:
      "Created an authoritative B2B digital presence featuring downloadable fitout specification sheets, commercial cost estimators, and high-trust client project galleries.",
  },
  {
    id: "premium-pack-co-case",
    title: "Premium Pack Co – Custom Packaging B2B Catalog & RFQ Engine",
    clientPlaceholder: "Premium Pack Co (www.premiumpackco.com)",
    industry: "Custom Packaging & Manufacturing",
    category: "Websites",
    imageUrl: "/assets/images/premium_pack_co_website_1788005849368.jpg",
    summary:
      "Designed an industrial B2B packaging portal with custom dimension and material selectors, MOQ price calculators, and global export lead capture.",
    servicesProvided: [
      "E-Commerce & B2B Portal",
      "MOQ RFQ Engine",
      "Global Search SEO",
      "Social Media Video Ads",
    ],
    metrics: [
      {
        label: "Bulk Quote Inquiries",
        value: "320+/mo",
        description: "Wholesale & D2C box inquiries",
      },
      {
        label: "Global Export Leads",
        value: "45% Share",
        description: "Middle East & European buyers",
      },
      { label: "Conversion Rate", value: "9.2%", description: "Visitor to MOQ quote request" },
    ],
    challenge:
      "Lengthy offline quotation cycles and limited digital visibility among modern D2C founders looking for premium rigid boxes and luxury custom packaging.",
    strategy:
      "Built an interactive custom box dimension builder, implemented instant quotation routing, and launched cinematic unboxing video campaigns across social media.",
  },
  {
    id: "ecom-fashion-scale",
    title: "D2C Apparel & Lifestyle Brand",
    clientPlaceholder: "Modern Apparel Brand",
    industry: "E-commerce & Fashion",
    category: "E-commerce",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    summary:
      "Scaled a direct-to-consumer lifestyle brand from local presence to nationwide sales with Meta Advantage+ and Shopify UX overhaul.",
    servicesProvided: [
      "Shopify Store Development",
      "Meta Ads Management",
      "Klaviyo Email Automation",
      "Product Photography",
    ],
    metrics: [
      { label: "ROAS Achieved", value: "4.6x", description: "Blended return on ad spend" },
      { label: "Monthly Orders", value: "3,400+", description: "Direct website purchases" },
      {
        label: "Abandoned Cart Recovery",
        value: "22.4%",
        description: "Automated email/SMS recovery",
      },
    ],
    challenge:
      "High cost per purchase and a clunky mobile checkout that caused over 70% cart abandonment.",
    strategy:
      "Rebuilt the Shopify storefront for sub-second mobile checkout, launched UGC video ad creatives, and introduced dynamic bundle discounting.",
  },
  {
    id: "real-estate-leads",
    title: "Luxury Residential Real Estate Group",
    clientPlaceholder: "Premium Real Estate Developer",
    industry: "Real Estate",
    category: "Ads",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    summary:
      "Generated over 650+ verified high-net-worth buyer leads for a premier residential luxury project within 90 days.",
    servicesProvided: [
      "Google Search Ads",
      "Meta Instant Lead Forms",
      "WhatsApp Automation",
      "Custom Project Microsite",
    ],
    metrics: [
      { label: "Qualified Leads", value: "650+", description: "Pre-screened buyer inquiries" },
      {
        label: "Site Visits Booked",
        value: "180+",
        description: "Confirmed physical property walkthroughs",
      },
      {
        label: "Cost Per Verified Lead",
        value: "₹480",
        description: "52% lower than industry average",
      },
    ],
    challenge:
      "Previous agency generated junk inquiries with invalid numbers and uninterested leads.",
    strategy:
      "Implemented 2-step OTP verification on landing pages, targeted high-income pincodes, and triggered instant WhatsApp brochures within 15 seconds.",
  },
  {
    id: "b2b-industrial-seo",
    title: "Industrial Machinery & Export Manufacturer",
    clientPlaceholder: "Precision Engineering Exporter",
    industry: "Manufacturing & B2B",
    category: "SEO",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    summary:
      "Captured #1 Google organic rankings for 45+ high-commercial machinery export keywords, unlocking European and Middle East buyers.",
    servicesProvided: [
      "Technical SEO Audit",
      "International SEO",
      "Content Marketing",
      "UI/UX Redesign",
    ],
    metrics: [
      {
        label: "Organic Traffic Growth",
        value: "+340%",
        description: "Year-over-year search visits",
      },
      {
        label: "Page 1 Keywords",
        value: "45+",
        description: "Top tier industrial commercial terms",
      },
      {
        label: "Export Inquiries",
        value: "85+/mo",
        description: "International container order inquiries",
      },
    ],
    challenge:
      "Zero search presence outside the local city with poor website architecture and slow page load speeds.",
    strategy:
      "Overhauled site schema, built technical product specification clusters, and secured high-authority B2B trade publication backlinks.",
  },
  {
    id: "healthcare-clinic-growth",
    title: "Multi-Specialty Healthcare & Dental Network",
    clientPlaceholder: "Healthcare & Wellness Center",
    industry: "Healthcare",
    category: "Social Media",
    imageUrl:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    summary:
      "Established local area dominance across 3 clinic locations with doctor education reels, Google 3-pack SEO, and reputation monitoring.",
    servicesProvided: [
      "Local SEO & Google Business Profile",
      "Instagram Reels Production",
      "Reputation Management",
      "Conversion Landing Pages",
    ],
    metrics: [
      {
        label: "Google Maps Directions",
        value: "+210%",
        description: "Patient navigation requests",
      },
      {
        label: "Monthly Direct Calls",
        value: "480+",
        description: "Direct phone consultations from search",
      },
      {
        label: "Average Review Rating",
        value: "4.9/5",
        description: "Across 620+ authentic patient reviews",
      },
    ],
    challenge:
      "Fierce local hospital competition and low patient awareness of specialized dental and wellness treatments.",
    strategy:
      "Structured geo-tagged Google Business Profile posts, recorded FAQs with head surgeons, and streamlined instant WhatsApp appointment booking.",
  },
  {
    id: "fintech-corporate-portal",
    title: "Fintech & Wealth Advisory Platform",
    clientPlaceholder: "Modern Financial Advisory",
    industry: "Finance",
    category: "Websites",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    summary:
      "Designed and developed a lightning-fast, high-trust corporate portal with interactive financial calculators and secure lead intake.",
    servicesProvided: [
      "Custom Web Development",
      "UI/UX Interactive Design",
      "Financial Calculator Engine",
      "CRM Data Pipeline",
    ],
    metrics: [
      { label: "Lighthouse Speed Score", value: "98/100", description: "Mobile and desktop speed" },
      {
        label: "Lead Conversion Rate",
        value: "7.8%",
        description: "Visitor to consultation request",
      },
      {
        label: "Form Completion Time",
        value: "-45%",
        description: "Streamlined interactive funnel",
      },
    ],
    challenge:
      "Outdated legacy website that took 6+ seconds to load and felt untrustworthy to high-net-worth investors.",
    strategy:
      "Engineered a modern dark-navy aesthetic with interactive investment yield calculators and instant consultation calendar booking.",
  },
  {
    id: "luxury-hospitality-brand",
    title: "Boutique Heritage Resort & Event Venue",
    clientPlaceholder: "Luxury Resort & Banquets",
    industry: "Hospitality",
    category: "Branding",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    summary:
      "Rebranded a premier destination resort with elegant typography, visual identity guidelines, and a high-ticket wedding booking funnel.",
    servicesProvided: [
      "Brand Identity & Logo Design",
      "Brand Manual & Collateral",
      "High-Res Photography Direction",
      "Social Media Launch",
    ],
    metrics: [
      {
        label: "Destination Wedding Bookings",
        value: "28+",
        description: "Closed wedding events in one season",
      },
      {
        label: "Direct Weekend Occupancy",
        value: "94%",
        description: "Direct booking rate without OTA fee",
      },
      {
        label: "Social Engagement Rate",
        value: "8.4%",
        description: "High organic visual sharing",
      },
    ],
    challenge:
      "Heavily reliant on OTA platforms paying 20% commissions with zero direct brand identity.",
    strategy:
      "Crafted a bespoke luxury brand identity, produced cinematic drone tour reels, and ran destination wedding inquiry ads on Instagram.",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "agency",
    question: "Why is DigiBasera considered the top digital marketing agency in Rajkot?",
    answer:
      "DigiBasera is recognized as a premier digital marketing agency in Rajkot, Gujarat because we focus strictly on commercial ROI rather than vanity impressions. We provide end-to-end growth systems across 11 disciplines: Technical SEO, Google Ads PPC management, high-converting React/Next.js and WordPress web design, Shopify e-commerce, and high-impact social media marketing with verified client case studies across Gujarat and Pan-India.",
  },
  {
    id: "faq-2",
    category: "agency",
    question: "How long does SEO take to achieve Page 1 Google rankings in Rajkot and Gujarat?",
    answer:
      "With DigiBasera's white-hat SEO methodology, businesses typically begin seeing Google Business Profile local 3-pack improvements and long-tail keyword traction within 60 to 90 days. High-competition commercial queries and compounding organic traffic growth generally mature within 3 to 6 months.",
  },
  {
    id: "faq-3",
    category: "agency",
    question: "Do you provide custom website development and Shopify store design in Rajkot?",
    answer:
      "Yes. Our engineering desk builds ultra-fast, modern websites on React, Next.js, TypeScript, Tailwind CSS, WordPress, and Shopify. Every website is engineered for Google Core Web Vitals (95+ score), SSL security, mobile responsiveness, structured schema markup, and seamless CRM lead routing.",
  },
  {
    id: "faq-4",
    category: "agency",
    question: "Can DigiBasera manage Google Ads (PPC) and Meta Ads for maximum ROAS?",
    answer:
      "Yes. Our certified performance marketing specialists manage full-funnel paid advertising on Google Search, Shopping, Performance Max, YouTube, and Meta (Facebook & Instagram). We take full ownership of ad copy, high-converting banner designs, video reels, audience targeting, conversion API setup, and daily bid optimizations to maintain low cost-per-acquisition (CPA).",
  },
  {
    id: "faq-5",
    category: "agency",
    question: "Do you work with local manufacturing, interior, and B2B businesses in Gujarat?",
    answer:
      "Yes! Rajkot and Saurashtra are industrial and manufacturing powerhouses. We specialize in B2B lead generation and branding for manufacturing units, engineering firms, interior designers (like ABFI Interior & Super India Interior), packaging companies (like Premium Pack Co), ceramic exporters in Morbi, and real estate developers across Gujarat.",
  },
  {
    id: "faq-6",
    category: "agency",
    question: "What are your digital marketing and SEO pricing packages in Rajkot?",
    answer:
      "We offer transparent, performance-backed growth packages starting from ₹9,999/month for local businesses up to enterprise growth retainers. Every package includes clear deliverables, weekly/monthly transparent analytics dashboards, dedicated account leadership, and no hidden charges.",
  },
  {
    id: "faq-7",
    category: "agency",
    question: "Do you provide social media marketing, content creation, and viral Reels editing?",
    answer:
      "Yes. We handle daily brand publishing, aesthetic feed architecture, viral Reels scripting & 4K editing, corporate photography, community moderation, and influencer collaborations across Instagram, LinkedIn, Facebook, and YouTube.",
  },
  {
    id: "faq-8",
    category: "agency",
    question: "Do you provide e-commerce growth and Amazon seller marketing?",
    answer:
      "Yes. We specialize in scaling D2C stores on Shopify and WooCommerce, as well as managing Amazon and Flipkart seller growth through A9 listing optimization, A+ content design, brand storefront creation, and Amazon PPC advertising.",
  },
  {
    id: "faq-9",
    category: "training",
    question: "What is the Digital Marketing Training Course in Rajkot with Zinmatt?",
    answer:
      "DigiBasera is the official Business Associate of Zinmatt in Rajkot, offering a premier classroom and practical Digital Marketing Certification Course. Students, entrepreneurs, and marketing aspirants gain hands-on training on live agency projects covering Advanced SEO, Google Ads, Meta Ads, AI tools, and Canva/design.",
  },
  {
    id: "faq-10",
    category: "training",
    question: "Do you provide 100% job placement support for digital marketing students in Rajkot?",
    answer:
      "Yes. We provide end-to-end career assistance including professional resume building, live portfolio curation with real client case studies, mock technical interviews, and placement connections with leading IT companies and agencies in Rajkot, Ahmedabad, and across Gujarat.",
  },
  {
    id: "faq-11",
    category: "training",
    question: "What certification do students receive upon completing the course?",
    answer:
      "Graduates receive an industry-recognized certification from Zinmatt and DigiBasera, validating practical mastery of digital marketing tools and campaigns, compliant with ISO curriculum standards.",
  },
  {
    id: "faq-12",
    category: "general",
    question: "How can I book a free growth audit or visit DigiBasera's Rajkot office?",
    answer:
      "You can chat with our team on WhatsApp at +91 98987 78047, email contact@digibasera.com, or visit our office at Chandresh Nagar Main Road, Mayani Chowk, Opposite Backbone Shopping Centre, Rajkot - 360004. We provide a complimentary comprehensive digital audit for your brand.",
  },
];
