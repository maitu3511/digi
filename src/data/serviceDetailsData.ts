import { ServiceStep, SubServicePart } from "../types";

export interface ServiceDetailExtended {
  serviceId: string;
  subServices: SubServicePart[];
  executionSteps: ServiceStep[];
}

export const SERVICE_DETAILS_MAP: Record<string, ServiceDetailExtended> = {
  // ==========================================
  // 01. WEB DEVELOPMENT
  // ==========================================
  "custom-web-dev": {
    serviceId: "custom-web-dev",
    subServices: [
      {
        id: "frontend-engineering",
        title: "Modern React & Next.js Frontend Architecture",
        description:
          "Clean, semantic TypeScript and React/Next.js components styled with utility-first Tailwind CSS for pixel perfection across every viewport.",
        badge: "Part 1: Frontend Architecture",
        deliverables: [
          "Custom React / Next.js Component Architecture",
          "Tailwind CSS Responsive Design System",
          "Dynamic Fluid Micro-interactions & Page Transitions",
        ],
        keyBenefit: "Sub-second rendering and native-app feel on all devices.",
      },
      {
        id: "performance-cwv",
        title: "Core Web Vitals & Speed Optimization",
        description:
          "Rigorous optimization targeting 95+ Google Lighthouse scores, instant First Contentful Paint (FCP), and sub-100ms Interaction to Next Paint (INP).",
        badge: "Part 2: Speed Optimization",
        deliverables: [
          "Next-Gen WebP/AVIF Image Compression & Lazy Loading",
          "Code Splitting, Tree-Shaking & Critical CSS Inlining",
          "Global Edge CDN Caching & Asset Compression",
        ],
        keyBenefit: "Higher Google organic rankings and lower bounce rates.",
      },
      {
        id: "security-infrastructure",
        title: "Enterprise Security & Server-Side APIs",
        description:
          "Hardened web security adhering to OWASP guidelines, SSL/TLS certificates, rate limiting, and secure RESTful/GraphQL API endpoints.",
        badge: "Part 3: Security & Backend",
        deliverables: [
          "SSL/TLS Encryption & OWASP Security Headers",
          "CSRF, XSS & SQLi Defense Implementation",
          "RESTful API Routing & Data Serialization",
        ],
        keyBenefit: "99.99% uptime with complete protection against vulnerabilities.",
      },
      {
        id: "seo-analytics-launch",
        title: "On-Page SEO Tags & Analytics Integration",
        description:
          "Structured JSON-LD schema markup, OpenGraph social meta tags, dynamic XML sitemaps, and server-side Google Tag Manager integration.",
        badge: "Part 4: Launch & Analytics",
        deliverables: [
          "Full JSON-LD Schema & Metadata Injection",
          "Google Analytics 4 & Meta Pixel Setup",
          "Cross-Browser QA & Production Cloud Deployment",
        ],
        keyBenefit: "Instant search engine indexing and precise conversion measurement.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Technical Requirements & UI Architecture",
        duration: "Days 1 - 3",
        description:
          "Review design specs, establish component hierarchy, define TypeScript data models, and set up the Git repository with CI/CD.",
        deliverables: [
          "System Architecture Document",
          "Component Hierarchy & Tech Stack Blueprint",
        ],
      },
      {
        stepNumber: "Step 02",
        title: "Frontend Component Development",
        duration: "Days 4 - 10",
        description:
          "Build all responsive views, dynamic navigation menus, interactive calculators, and smooth motion states in React and Tailwind.",
        deliverables: [
          "Fully Responsive Interactive Frontend UI",
          "Design Token & Icon Library Implementation",
        ],
      },
      {
        stepNumber: "Step 03",
        title: "Backend API & Database Integration",
        duration: "Days 11 - 16",
        description:
          "Connect form submissions, WhatsApp click-to-chat gateways, CRM webhooks, and secure cloud database models.",
        deliverables: ["Working API Endpoints", "CRM & WhatsApp Form Automation"],
      },
      {
        stepNumber: "Step 04",
        title: "Speed Optimization & Security Audit",
        duration: "Days 17 - 20",
        description:
          "Run Google Lighthouse audits, minify bundles, configure edge CDN caching, and execute penetration testing.",
        deliverables: ["Lighthouse 95+ Core Web Vitals Audit", "OWASP Security Hardening Report"],
      },
      {
        stepNumber: "Step 05",
        title: "Cross-Device QA & Live Deployment",
        duration: "Days 21 - 24",
        description:
          "Perform rigorous cross-browser testing (Chrome, Safari, iOS, Android), configure custom DNS/SSL, and launch to live production.",
        deliverables: ["Production Cloud Deployment", "Admin User Manual & Code Documentation"],
      },
    ],
  },

  "fullstack-web-apps": {
    serviceId: "fullstack-web-apps",
    subServices: [
      {
        id: "custom-portal-backend",
        title: "Scalable REST/GraphQL API & Database Design",
        description:
          "Architecting robust relational PostgreSQL/MongoDB databases with scalable Node.js/Express backends and microservice integrations.",
        badge: "Part 1: Data Architecture",
        deliverables: [
          "Relational Database Schema & Migrations",
          "Authenticated RESTful / GraphQL API Endpoints",
          "Redis Caching for Lightning Fast Responses",
        ],
        keyBenefit: "Handles heavy concurrent data queries with zero slowdown.",
      },
      {
        id: "auth-rbac-security",
        title: "Role-Based Access Control & User Auth",
        description:
          "Enterprise authentication systems featuring JWT/OAuth2, multi-factor authentication (MFA), and granular role permissions.",
        badge: "Part 2: Authentication & RBAC",
        deliverables: [
          "Secure Session & Token Authentication System",
          "Role-Based Permissions (Admin, Manager, Customer)",
          "Audit Logs & Activity History Tracking",
        ],
        keyBenefit: "Guarantees total enterprise privacy and user data isolation.",
      },
      {
        id: "interactive-client-dashboards",
        title: "Interactive Client Dashboards & Analytics",
        description:
          "Dynamic data visualization dashboards with live charts, filtering, exportable CSV/PDF reports, and custom business metrics.",
        badge: "Part 3: Dashboard UI",
        deliverables: [
          "Real-Time Interactive Data Tables & Search",
          "Interactive Chart Widgets (Recharts / D3.js)",
          "Automated PDF/Excel Invoice & Report Generator",
        ],
        keyBenefit: "Transforms complex database records into actionable business intelligence.",
      },
      {
        id: "workflow-automation",
        title: "Third-Party API & Webhook Integrations",
        description:
          "Connecting payment gateways (Razorpay/Stripe), SMS/WhatsApp APIs, ERP connectors, and email automation webhooks.",
        badge: "Part 4: Automation",
        deliverables: [
          "Payment Gateway Webhook Architecture",
          "Automated Email & WhatsApp Notification Triggers",
          "ERP & Accounting Sync Connectors",
        ],
        keyBenefit:
          "Automates manual back-office tasks, saving hours of daily administrative labor.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "System Architecture & Schema Design",
        duration: "Days 1 - 5",
        description:
          "Define database entity relations, user workflows, API specifications, and cloud infrastructure requirements.",
        deliverables: [
          "Entity Relationship Diagram (ERD)",
          "API Specification & Swagger Documentation",
        ],
      },
      {
        stepNumber: "Step 02",
        title: "Backend API & Database Development",
        duration: "Days 6 - 15",
        description:
          "Code the backend services, configure ORM migrations, secure endpoints with JWT auth, and implement business logic.",
        deliverables: ["Core Backend Microservices", "Secure Database Migrations & Seeds"],
      },
      {
        stepNumber: "Step 03",
        title: "Dashboard & Frontend Interface Sprints",
        duration: "Days 16 - 25",
        description:
          "Build the interactive dashboard UI, responsive forms, data visualizations, and client-side state managers in React.",
        deliverables: ["Role-Based Dashboard Portals", "Data Tables, Filters & Chart Modules"],
      },
      {
        stepNumber: "Step 04",
        title: "Payment, SMS & ERP Webhooks Integration",
        duration: "Days 26 - 32",
        description:
          "Integrate external gateways, automate transactional emails/SMS, and test end-to-end user transactions.",
        deliverables: ["Working Payment Gateway Integration", "Automated Notification Pipeline"],
      },
      {
        stepNumber: "Step 05",
        title: "Load Testing, Security Audit & Cloud Launch",
        duration: "Days 33 - 38",
        description:
          "Stress-test API concurrency, run vulnerability scans, configure Docker container deployment, and launch live.",
        deliverables: ["Production Cloud Deployment", "Comprehensive API Docs & User Handover"],
      },
    ],
  },

  "wordpress-cms-dev": {
    serviceId: "wordpress-cms-dev",
    subServices: [
      {
        id: "custom-gutenberg-acf",
        title: "Custom ACF Pro & Gutenberg Block Engineering",
        description:
          "Bespoke, lightweight WordPress themes built with Advanced Custom Fields (ACF Pro) and native blocks—no slow visual builders.",
        badge: "Part 1: Theme Architecture",
        deliverables: [
          "Custom Lightweight WordPress Theme",
          "Modular ACF Pro Flexible Content Blocks",
          "Clean Semantic PHP & Tailwind CSS Markup",
        ],
        keyBenefit: "Ultra-fast loading times with completely custom visual layouts.",
      },
      {
        id: "intuitive-admin-panel",
        title: "Intuitive Admin Panels for Easy In-House Publishing",
        description:
          "Streamlined WordPress dashboard customized so non-technical team members can publish blogs and landing pages in 5 minutes.",
        badge: "Part 2: Content Management",
        deliverables: [
          "Custom Editorial Fields & Media Organizers",
          "One-Click Page & Article Cloning Tools",
          "Client Video Tutorials & Walkthrough Guide",
        ],
        keyBenefit: "Zero dependency on developers for daily content updates.",
      },
      {
        id: "wp-speed-security-hardening",
        title: "Malware Defense, Speed Caching & CDN Integration",
        description:
          "Enterprise security hardening, login shielding, automated daily cloud backups, Redis object caching, and Cloudflare CDN sync.",
        badge: "Part 3: Security & Speed",
        deliverables: [
          "Two-Factor Authentication & Brute Force Defense",
          "Redis Object Caching & WebP Image Conversion",
          "Automated Daily Off-Site Cloud Backups",
        ],
        keyBenefit: "100% peace of mind against WordPress security exploits.",
      },
      {
        id: "seo-yoast-schema",
        title: "On-Page SEO Schema & Migration Setup",
        description:
          "Configuring RankMath/Yoast SEO Pro, automatic XML sitemaps, 301 redirect management, and historical URL preserving.",
        badge: "Part 4: SEO & Migration",
        deliverables: [
          "RankMath / Yoast SEO Pro Setup",
          "301 Redirect Mapping (Zero 404s Post-Launch)",
          "Search Console & Google Analytics Verification",
        ],
        keyBenefit: "Maintains all historical search rankings during site redesigns.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Content Inventory & Wireframe Mapping",
        duration: "Days 1 - 2",
        description:
          "Map existing website content, design custom Gutenberg block layouts, and establish custom post types.",
        deliverables: ["Content Migration Map", "ACF Field Architecture Plan"],
      },
      {
        stepNumber: "Step 02",
        title: "Custom Block Theme Development",
        duration: "Days 3 - 8",
        description:
          "Code the custom WordPress theme from scratch with zero bloated plugins, integrating responsive Tailwind styling.",
        deliverables: ["Lightweight Custom Theme", "Reusable Modular Page Blocks"],
      },
      {
        stepNumber: "Step 03",
        title: "Content Migration & On-Page SEO",
        duration: "Days 9 - 11",
        description:
          "Migrate articles, optimize media libraries into WebP, configure RankMath SEO tags, and set up 301 redirects.",
        deliverables: [
          "Migrated Content & Blog Library",
          "On-Page Schema & Metadata Implementation",
        ],
      },
      {
        stepNumber: "Step 04",
        title: "Security Hardening & Speed Optimization",
        duration: "Days 12 - 13",
        description:
          "Implement login shields, configure Cloudflare edge caching, and optimize database queries for sub-second loads.",
        deliverables: ["Speed Audit Report (95+ Mobile Score)", "Security Hardening Protocol"],
      },
      {
        stepNumber: "Step 05",
        title: "Client Training & Production Launch",
        duration: "Days 14 - 15",
        description:
          "Conduct a live screen-share training session with your team, provide video documentation, and point domain DNS.",
        deliverables: ["Live Production Launch", "Recorded Admin Video Tutorials"],
      },
    ],
  },

  // ==========================================
  // 02. E-COMMERCE DEVELOPMENT
  // ==========================================
  "shopify-store-dev": {
    serviceId: "shopify-store-dev",
    subServices: [
      {
        id: "custom-liquid-theme",
        title: "Custom Shopify 2.0 Liquid Storefront",
        description:
          "High-speed bespoke Shopify 2.0 theme built from scratch with modular sections, instant search, and zero slow app bloat.",
        badge: "Part 1: Storefront Design",
        deliverables: [
          "Bespoke Shopify 2.0 Liquid Theme",
          "Mobile-First Sticky Add-To-Cart & Sticky Navigation",
          "Dynamic Product Filter & Instant Predictive Search",
        ],
        keyBenefit: "Sub-2-second load times that keep mobile shoppers buying.",
      },
      {
        id: "conversion-cart-upsells",
        title: "1-Click Slide Cart & High-AOV Upsells",
        description:
          "Engineered slide cart drawers with progress bars for free shipping, dynamic cross-sell add-ons, and bundle discounts.",
        badge: "Part 2: Conversion Boosters",
        deliverables: [
          "Slide-Out Cart Drawer with Tiered Free Shipping Bar",
          "In-Cart 1-Click Upsell & Cross-Sell Add-ons",
          "Volume & Bundle Discount Pricing Tiers",
        ],
        keyBenefit: "Increases Average Order Value (AOV) by 20% to 35%.",
      },
      {
        id: "payment-courier-integrations",
        title: "Payment Gateway & Courier Logistics APIs",
        description:
          "Seamless integration of Razorpay, Stripe, Cash on Delivery (COD) verification, Shiprocket, and automatic WhatsApp updates.",
        badge: "Part 3: Logistics & Payments",
        deliverables: [
          "Payment Gateway (Razorpay/Stripe) Instant Checkout",
          "COD OTP Verification to Minimize Returns (RTO)",
          "Shiprocket / Delhivery Courier API Tracking Sync",
        ],
        keyBenefit: "Dramatically reduces Return To Origin (RTO) and checkout drop-offs.",
      },
      {
        id: "klaviyo-pixel-analytics",
        title: "Klaviyo Retention & Server-Side Pixel Sync",
        description:
          "Connecting Klaviyo email flows, Meta Conversions API (CAPI), Google Merchant Center, and TikTok pixel for 100% data tracking.",
        badge: "Part 4: Marketing Tech Stack",
        deliverables: [
          "Meta CAPI & Google Merchant Center Feed Sync",
          "Klaviyo Customer Event Triggers (Viewed Product, Abandoned Cart)",
          "GA4 E-Commerce Enhanced Tracking Setup",
        ],
        keyBenefit: "Powers high-ROAS retargeting campaigns with flawless data.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Store Architecture & Customer Journey Flow",
        duration: "Days 1 - 3",
        description:
          "Analyze product catalog, map high-converting category layouts, and plan checkout upsell mechanics.",
        deliverables: ["E-Commerce UX Wireframe Map", "App Stack & Payment Architecture Plan"],
      },
      {
        stepNumber: "Step 02",
        title: "Custom Liquid Storefront Development",
        duration: "Days 4 - 10",
        description:
          "Code the custom Shopify 2.0 theme, product pages, rich description tabs, size guides, and interactive swatches.",
        deliverables: ["Custom Shopify 2.0 Theme", "Interactive Product & Collection Templates"],
      },
      {
        stepNumber: "Step 03",
        title: "Cart Drawer, Upsells & Logistics Integration",
        duration: "Days 11 - 15",
        description:
          "Build the slide cart upsells, connect payment gateways, configure COD verification, and sync courier APIs.",
        deliverables: [
          "Working Payment Gateways & Slide Cart",
          "Shiprocket / Logistics Tracking Connectors",
        ],
      },
      {
        stepNumber: "Step 04",
        title: "Speed Optimization & Tracking Setup",
        duration: "Days 16 - 18",
        description:
          "Compress product images, eliminate unneeded app scripts, configure Meta CAPI, and verify Google Merchant feeds.",
        deliverables: [
          "Google Merchant Center Approved Catalog",
          "Server-Side Meta CAPI Configuration",
        ],
      },
      {
        stepNumber: "Step 05",
        title: "End-to-End Test Transactions & Launch",
        duration: "Days 19 - 21",
        description:
          "Perform real money live payment transactions, test shipping labels and invoices, and transition store to live domain.",
        deliverables: ["Live Shopify Store Launch", "Merchant Operations Training Video"],
      },
    ],
  },

  "custom-ecommerce-portal": {
    serviceId: "custom-ecommerce-portal",
    subServices: [
      {
        id: "b2b-wholesale-pricing",
        title: "B2B Wholesale Portal & Tiered Pricing",
        description:
          "Custom B2B e-commerce platform with customer role login, volume-based tiered wholesale discounts, and minimum order quantity (MOQ) rules.",
        badge: "Part 1: B2B Commerce",
        deliverables: [
          "Tiered Wholesale Pricing Matrix by Customer Role",
          "Minimum Order Quantity & Bulk Matrix Ordering",
          "Credit Limit & Purchase Order (PO) Workflows",
        ],
        keyBenefit: "Automates wholesale ordering without manual email quotations.",
      },
      {
        id: "custom-product-builder",
        title: "Interactive 3D / 2D Product Configurator",
        description:
          "Custom interactive product personalization builders allowing customers to customize colors, textures, and dimensions in real time.",
        badge: "Part 2: Customization Engine",
        deliverables: [
          "Live Interactive Product Customization Engine",
          "Dynamic Pricing Calculation Based on Dimensions/Materials",
          "Print-Ready Vector / Spec Output Generation",
        ],
        keyBenefit: "Drives higher margins by offering personalized products.",
      },
      {
        id: "multi-vendor-marketplace",
        title: "Multi-Vendor Marketplace & Commission Splits",
        description:
          "Turn your storefront into an Amazon-like multi-vendor platform with dedicated seller dashboards and automated payout splits.",
        badge: "Part 3: Marketplace Architecture",
        deliverables: [
          "Vendor Registration & Onboarding Portal",
          "Automated Commission Calculation & Stripe Connect Payouts",
          "Vendor Order Management & Shipping Label Generation",
        ],
        keyBenefit: "Scales product selection rapidly without holding inventory.",
      },
      {
        id: "erp-inventory-sync",
        title: "Enterprise ERP & Warehouse Inventory Sync",
        description:
          "Real-time two-way synchronization between your custom store and SAP, Tally, Zoho Inventory, or bespoke ERP databases.",
        badge: "Part 4: ERP Integration",
        deliverables: [
          "Two-Way Automated Inventory Sync API",
          "Automated GST Invoice Generation & Accounting Sync",
          "Warehouse Fulfillment Webhooks",
        ],
        keyBenefit: "Eliminates overselling and synchronizes warehouse stock instantly.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Commercial Requirements & Catalog Modeling",
        duration: "Days 1 - 5",
        description:
          "Model custom product configurations, B2B wholesale pricing rules, and warehouse integration protocols.",
        deliverables: ["Commerce Architecture Specification", "Database & Entity Schema Blueprint"],
      },
      {
        stepNumber: "Step 02",
        title: "Backend Commerce Engine Development",
        duration: "Days 6 - 16",
        description:
          "Build backend microservices for tiered pricing, custom product calculators, multi-vendor splits, and authentication.",
        deliverables: [
          "Custom Commerce API & Cart Engine",
          "Tiered Pricing & Role-Based Access Engine",
        ],
      },
      {
        stepNumber: "Step 03",
        title: "Interactive Storefront & Configurator UI",
        duration: "Days 17 - 26",
        description:
          "Develop the responsive frontend, interactive product configurators, vendor dashboards, and custom checkout flows.",
        deliverables: ["Interactive Configurator Interface", "Vendor & Customer Account Portals"],
      },
      {
        stepNumber: "Step 04",
        title: "ERP, Payment & Shipping Automation",
        duration: "Days 27 - 32",
        description:
          "Integrate Stripe Connect / Razorpay, Tally / Zoho Inventory webhooks, and automated GST invoice generators.",
        deliverables: ["Automated ERP & Accounting Sync", "Working Multi-Tier Checkout"],
      },
      {
        stepNumber: "Step 05",
        title: "Stress Testing, Security QA & Go-Live",
        duration: "Days 33 - 35",
        description:
          "Execute high-concurrency stress tests, test automated split payouts, and deploy to auto-scaling cloud servers.",
        deliverables: ["Production Live Deployment", "System Architecture & Operations Manual"],
      },
    ],
  },

  // ==========================================
  // 03. E-COMMERCE MARKETING
  // ==========================================
  "d2c-performance-ads": {
    serviceId: "d2c-performance-ads",
    subServices: [
      {
        id: "meta-advantage-catalog",
        title: "Meta Advantage+ Catalog & Shopping Ads",
        description:
          "Scale direct-to-consumer store orders using machine-learning Advantage+ Shopping campaigns and dynamic retargeting.",
        badge: "Part 1: Advantage+ Scaling",
        deliverables: [
          "Advantage+ Shopping Campaign Architecture",
          "Dynamic Product Ad (DPA) Carousel Feeds",
          "High-ROAS Lookalike & Broad Audience Stacks",
        ],
        keyBenefit: "Scales revenue profitably with low blended acquisition costs.",
      },
      {
        id: "google-shopping-pmax",
        title: "Google Shopping & Performance Max Feed Scale",
        description:
          "Optimize Google Merchant Center feeds, product titles, custom labels, and Performance Max asset groups for high search visibility.",
        badge: "Part 2: Google Shopping",
        deliverables: [
          "Google Merchant Center Feed Optimization & Error Resolution",
          "Performance Max Asset Groups & Audience Signals",
          "Custom Label Tiering (High Margin, Best Sellers, Clearance)",
        ],
        keyBenefit: "Captures customers with instant purchase intent on Google Search.",
      },
      {
        id: "ugc-creative-testing",
        title: "High-Converting UGC & Video Hook Testing",
        description:
          "Produce and test batches of User Generated Content (UGC), unboxing reels, comparison cards, and founder story hooks every week.",
        badge: "Part 3: Creative Studio",
        deliverables: [
          "Weekly Batch of 10-15 Video Hooks & Visual Creatives",
          "Hook Rate & Hold Rate Creative Analytics",
          "Iterative Winner Variations for Continuous Scale",
        ],
        keyBenefit: "Eliminates ad creative fatigue and keeps click costs low.",
      },
      {
        id: "roas-attribution-analytics",
        title: "First-Party Attribution & Unit Economics BI",
        description:
          "Triple Whale / GA4 dashboard tracking true Contribution Margin, Customer Acquisition Cost (CAC), and customer lifetime value.",
        badge: "Part 4: Profit Analytics",
        deliverables: [
          "Real-Time Contribution Margin & Blended ROAS Dashboard",
          "First-Party Server-Side Attribution Modeling",
          "Weekly Unit Economics & Ad Scaling Strategy Calls",
        ],
        keyBenefit: "Clear visibility into net profit on every ad dollar spent.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Pixel, Catalog Feed & Tracking Audit",
        duration: "Days 1 - 3",
        description:
          "Audit Meta CAPI, Google Merchant Center feeds, catalog accuracy, and install first-party attribution tracking.",
        deliverables: ["Tracking & Feed Audit Report", "Catalog Clean-up & Merchant Center Sync"],
      },
      {
        stepNumber: "Step 02",
        title: "Creative Angle Research & Initial Asset Batch",
        duration: "Days 4 - 7",
        description:
          "Research competitor ads, customer review goldmines, and script high-converting UGC reels and static comparison graphics.",
        deliverables: ["First Batch of 15 Creative Hooks & Ads", "Creative Testing Sandbox Setup"],
      },
      {
        stepNumber: "Step 03",
        title: "Campaign Architecture & Sandbox Launch",
        duration: "Days 8 - 12",
        description:
          "Launch Advantage+ Shopping, Google PMax feeds, and dynamic catalog retargeting campaigns.",
        deliverables: ["Live Multi-Channel Ad Campaigns", "Dynamic Product Retargeting Funnel"],
      },
      {
        stepNumber: "Step 04",
        title: "Winning Creative Scaling & Budget Reallocation",
        duration: "Days 13 - 20",
        description:
          "Identify breakout winning ads, scale budgets vertically and horizontally, and prune underperforming assets.",
        deliverables: ["Scaled Budget Allocation", "Cost Per Acquisition Reduction Report"],
      },
      {
        stepNumber: "Step 05",
        title: "Ongoing Weekly Creative Sprints & Retainers",
        duration: "Day 21 & Ongoing",
        description:
          "Deploy fresh creative hooks every week, optimize catalog custom labels, and conduct weekly unit economics reviews.",
        deliverables: ["Weekly Creative Testing Batches", "24/7 Live Executive ROAS Dashboard"],
      },
    ],
  },

  "marketplace-growth": {
    serviceId: "marketplace-growth",
    subServices: [
      {
        id: "amazon-a9-seo-listing",
        title: "Amazon A9 SEO & Listing Optimization",
        description:
          "High-converting listing copy, keyword-rich backend search terms, search frequency rank targeting, and bullet point copywriting.",
        badge: "Part 1: Listing Optimization",
        deliverables: [
          "A9 Algorithm Keyword-Indexed Title & Bullet Points",
          "Backend Search Terms & Subject Matter Optimization",
          "Competitive Price Point & Buy Box Strategy",
        ],
        keyBenefit: "Maximizes organic search visibility and click-through rates.",
      },
      {
        id: "a-plus-brand-store",
        title: "Premium A+ / EBC Content & Brand Storefront",
        description:
          "Custom graphic design for A+ Content modules, comparison tables, brand story carousels, and high-converting Amazon Storefronts.",
        badge: "Part 2: Visual Storefront",
        deliverables: [
          "Custom Premium A+ / EBC Graphic Modules",
          "Multi-Page Amazon Brand Storefront Design",
          "Mobile-Optimized Infographics & Lifestyle Images",
        ],
        keyBenefit: "Increases conversion rate on product detail pages by 20% to 30%.",
      },
      {
        id: "sponsored-ads-ppc",
        title: "Sponsored Products, Brands & Video PPC",
        description:
          "Granular Amazon PPC management with exact-match keyword harvesting, competitor ASIN targeting, and high-CTR Sponsored Video ads.",
        badge: "Part 3: Marketplace PPC",
        deliverables: [
          "Sponsored Products (Auto, Broad, Phrase, Exact) Campaigns",
          "Competitor ASIN & Category Conquesting Ads",
          "Sponsored Brands Video Ads & Keyword Harvesting",
        ],
        keyBenefit: "Drives high-intent sales while keeping TACoS under target thresholds.",
      },
      {
        id: "inventory-review-management",
        title: "Review Velocity & FBA Inventory Health",
        description:
          "Strategies for compliant review acceleration (Vine program), stranded inventory resolution, and FBA restock forecasting.",
        badge: "Part 4: Account Health",
        deliverables: [
          "Amazon Vine & Compliant Review Automation",
          "FBA Restock Limits & IPI Score Management",
          "Brand Registry Defense & Hijacker Monitoring",
        ],
        keyBenefit: "Defends brand ownership and maintains healthy 100% buy box win rates.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "ASIN Gap Analysis & Competitor Keyword Mining",
        duration: "Days 1 - 4",
        description:
          "Analyze top competitor listings using Helium 10, mine high-volume search terms, and audit current indexing.",
        deliverables: ["Master Keyword Indexing Matrix", "Competitor Listing Audit Report"],
      },
      {
        stepNumber: "Step 02",
        title: "Listing Copy & A+ Visual Design",
        duration: "Days 5 - 12",
        description:
          "Write persuasive bullet points and design custom infographics and A+ content modules for Amazon approval.",
        deliverables: ["Approved A+ Content & Infographics", "Optimized Backend Search Terms"],
      },
      {
        stepNumber: "Step 03",
        title: "PPC Campaign Restructuring & Launch",
        duration: "Days 13 - 18",
        description:
          "Build single-keyword ad groups, launch Sponsored Brands Video campaigns, and set negative keyword filters.",
        deliverables: ["Live Sponsored Products & Video Ads", "Bid Calibration & Budget Rules"],
      },
      {
        stepNumber: "Step 04",
        title: "Keyword Harvesting & Bid Optimization",
        duration: "Days 19 - 25",
        description:
          "Harvest converting customer search terms from auto campaigns into exact match ad groups; lower bids on bleeders.",
        deliverables: ["Weekly Negative Keyword Scrub", "TACoS Reduction Optimization"],
      },
      {
        stepNumber: "Step 05",
        title: "Ongoing Marketplace Retainer & Scaling",
        duration: "Day 26 & Ongoing",
        description:
          "Expand to new product lines, optimize deal events (Prime Day, Festive Sales), and manage inventory forecasting.",
        deliverables: [
          "Monthly BSR & Revenue Growth Reports",
          "Seasonal Deal & Promotion Management",
        ],
      },
    ],
  },

  "retention-email-sms": {
    serviceId: "retention-email-sms",
    subServices: [
      {
        id: "automated-lifecycle-flows",
        title: "High-Yield Automated Klaviyo Flows",
        description:
          "Setup and design of high-converting automated sequences: Welcome series, Abandoned Cart, Browse Abandonment, and Post-Purchase.",
        badge: "Part 1: Automated Flows",
        deliverables: [
          "Multi-Step Welcome Series (Brand Story & First Order Discount)",
          "High-Converting Abandoned Cart & Checkout Recovery Flows",
          "Browse Abandonment & Price Drop Alerts",
        ],
        keyBenefit: "Generates 20% to 35% of total store revenue on autopilot.",
      },
      {
        id: "whatsapp-sms-campaigns",
        title: "WhatsApp Business API & SMS Broadcasts",
        description:
          "Automated WhatsApp order confirmation, COD verification, delivery tracking, and flash sale broadcast notifications.",
        badge: "Part 2: WhatsApp & SMS",
        deliverables: [
          "WhatsApp Cloud API Automated Order & Shipping Updates",
          "Abandoned Checkout Recovery via WhatsApp / SMS",
          "VIP Flash Sale & Product Drop Broadcasts",
        ],
        keyBenefit: "98% open rates and instant customer response within minutes.",
      },
      {
        id: "rfm-customer-segmentation",
        title: "RFM Segmentation & VIP Loyalty Programs",
        description:
          "Recency, Frequency, Monetary (RFM) customer segmentation to target high-spenders with VIP perks and win back churned buyers.",
        badge: "Part 3: Segmentation",
        deliverables: [
          "VIP High-Spender Tier Segmentation",
          "Win-Back Sequence for Inactive Buyers (60/90 Days)",
          "Replenishment Reminder Flows for Repeat Consumables",
        ],
        keyBenefit: "Maximizes customer lifetime value (LTV) with zero ad spend.",
      },
      {
        id: "ab-testing-deliverability",
        title: "A/B Testing & Dedicated Deliverability Warmup",
        description:
          "Dedicated domain reputation warmup, inbox deliverability monitoring (BIMI, SPF, DKIM), and subject line split-testing.",
        badge: "Part 4: Deliverability",
        deliverables: [
          "Custom Sending Domain Setup (SPF, DKIM, DMARC, BIMI)",
          "Subject Line & Offer A/B Split Testing",
          "List Cleaning & Unengaged Subscriber Sunset Policies",
        ],
        keyBenefit: "Guarantees primary inbox placement away from spam and promo tabs.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Customer Data & Deliverability Audit",
        duration: "Days 1 - 3",
        description:
          "Audit existing email list, configure DNS sending domains (DKIM/DMARC), and clean unengaged subscribers.",
        deliverables: [
          "Deliverability Setup & SPF/DKIM Verification",
          "Customer Cohort Analysis Report",
        ],
      },
      {
        stepNumber: "Step 02",
        title: "Email Template Design & Direct-Response Copy",
        duration: "Days 4 - 7",
        description:
          "Design responsive branded email templates and write persuasive direct-response copy for all core flows.",
        deliverables: ["Master Branded Figma Email Templates", "Direct-Response Flow Copywriting"],
      },
      {
        stepNumber: "Step 03",
        title: "Flow Logic & Delay Trigger Configuration",
        duration: "Days 8 - 11",
        description:
          "Build trigger logic in Klaviyo, set up smart delays, dynamic coupon generators, and WhatsApp API integration.",
        deliverables: [
          "Live Automated Flows in Klaviyo",
          "Working WhatsApp Abandoned Cart Gateway",
        ],
      },
      {
        stepNumber: "Step 04",
        title: "Segmentation & Campaign Calendar Launch",
        duration: "Days 12 - 15",
        description:
          "Create RFM customer segments and launch weekly scheduled educational and promotional email broadcasts.",
        deliverables: ["Segmented Customer Audiences", "Monthly Campaign Broadcast Calendar"],
      },
      {
        stepNumber: "Step 05",
        title: "Ongoing A/B Testing & Monthly Retainer",
        duration: "Day 16 & Ongoing",
        description:
          "Split test subject lines, optimize replenishment intervals, and deliver monthly revenue attribution reports.",
        deliverables: [
          "Monthly Retention Revenue Reports",
          "Continuous Offer & Subject Line Split Tests",
        ],
      },
    ],
  },

  // ==========================================
  // 04. DIGITAL MARKETING
  // ==========================================
  "digital-growth-strategy": {
    serviceId: "digital-growth-strategy",
    subServices: [
      {
        id: "commercial-market-audit",
        title: "Market Opportunity & Competitor Audit",
        description:
          "Deep quantitative dissection of your market landscape, competitor spend channels, customer personas, and CAC benchmarks.",
        badge: "Part 1: Discovery",
        deliverables: [
          "Competitor Media & Traffic Teardown",
          "TAM & SAM Market Opportunity Report",
          "Customer Persona Buying Triggers Matrix",
        ],
        keyBenefit: "Identifies untapped market voids and prevents wasted ad budgets.",
      },
      {
        id: "omnichannel-funnel-design",
        title: "Full-Funnel Acquisition Architecture",
        description:
          "Designing end-to-end multi-channel conversion funnels from top-of-funnel awareness down to bottom-of-funnel checkout or inquiry.",
        badge: "Part 2: Funnel Design",
        deliverables: [
          "Omnichannel Customer Journey Flowchart",
          "Touchpoint Attribution Model",
          "Offer Positioning & Lead Magnet Blueprint",
        ],
        keyBenefit: "Guarantees seamless flow of high-intent traffic to conversion.",
      },
      {
        id: "capital-allocation-model",
        title: "Mathematical Budget & Channel Allocation",
        description:
          "Precise capital allocation across Meta, Google, LinkedIn, SEO, and email marketing based on marginal ROI unit economics.",
        badge: "Part 3: Budgeting",
        deliverables: [
          "12-Month Channel Budget Scenario Matrix",
          "Target CAC & LTV Forecast Model",
          "Milestone-Based Scaling Thresholds",
        ],
        keyBenefit: "Eliminates ad waste and focuses budget strictly on high-yield channels.",
      },
      {
        id: "executive-bi-setup",
        title: "Executive BI Dashboard & Attribution Setup",
        description:
          "Setting up centralized real-time Looker Studio / GA4 reporting so leadership can track revenue and pipeline in real time.",
        badge: "Part 4: Analytics",
        deliverables: [
          "Custom Real-Time Looker Studio Dashboard",
          "Server-Side Tagging & Conversion Verification",
          "Weekly Metric Executive Scorecard",
        ],
        keyBenefit: "Complete transparency into every marketing rupee spent.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Discovery & Historical Performance Audit",
        duration: "Days 1 - 3",
        description:
          "Audit historical campaigns, lead conversion rates, customer lifetime values, and competitor ad strategies.",
        deliverables: [
          "Comprehensive Performance Audit Report",
          "Competitor Traffic & Spend Teardown",
        ],
      },
      {
        stepNumber: "Step 02",
        title: "Customer Persona & Journey Mapping",
        duration: "Days 4 - 6",
        description:
          "Map out high-value buyer personas, core pain points, commercial intent keywords, and multi-channel funnels.",
        deliverables: ["Customer Journey Map", "Offer Positioning Blueprint"],
      },
      {
        stepNumber: "Step 03",
        title: "Channel Selection & Budget Modeling",
        duration: "Days 7 - 9",
        description:
          "Allocate ad budget across Meta, Google Search, SEO, and email marketing with mathematical target ROAS projections.",
        deliverables: ["12-Month Budget Allocation Matrix", "Target CAC & Revenue Forecast Model"],
      },
      {
        stepNumber: "Step 04",
        title: "Tracking Infrastructure & Dashboard Setup",
        duration: "Days 10 - 12",
        description:
          "Configure GA4, server-side Google Tag Manager, CRM lead routing, and build a live Looker Studio executive dashboard.",
        deliverables: [
          "Server-Side Tracking Configuration",
          "Real-Time Looker Studio KPI Dashboard",
        ],
      },
      {
        stepNumber: "Step 05",
        title: "Executive Playbook & Sprint Launch",
        duration: "Days 13 - 14",
        description:
          "Deliver the comprehensive 90-day execution roadmap and initiate agile weekly implementation sprints.",
        deliverables: ["Complete 90-Day Strategy Playbook", "Weekly Agile Sprint Cadence"],
      },
    ],
  },

  "b2b-b2c-lead-generation": {
    serviceId: "b2b-b2c-lead-generation",
    subServices: [
      {
        id: "dedicated-landing-pages",
        title: "High-Converting Dedicated Landing Pages",
        description:
          "Custom conversion-engineered landing pages with fast load times, clear value propositions, trust badges, and zero distractions.",
        badge: "Part 1: Landing Pages",
        deliverables: [
          "Bespoke High-Speed Landing Page Build",
          "Mobile-First Form & Sticky CTA Architecture",
          "A/B Headline & Offer Split Test Setup",
        ],
        keyBenefit: "Converts cold clicks into qualified inquiries at 15% - 30% rates.",
      },
      {
        id: "lead-qualification-otp",
        title: "2-Step Lead Qualification & OTP Verification",
        description:
          "Multi-step interactive forms that filter out tire-kickers and verify mobile numbers via OTP before submission.",
        badge: "Part 2: Lead Screening",
        deliverables: [
          "Multi-Step Conditional Logic Qualification Forms",
          "Automated SMS/WhatsApp OTP Verification Gateway",
          "Budget & Timeline Lead Scoring Rules",
        ],
        keyBenefit: "Guarantees your sales team speaks only to real, verified buyers.",
      },
      {
        id: "instant-crm-whatsapp-routing",
        title: "Instant CRM & WhatsApp Sales Routing",
        description:
          "Instant 15-second lead delivery to your sales team’s mobile phones via WhatsApp, email, and direct CRM pipeline integration.",
        badge: "Part 3: Instant Routing",
        deliverables: [
          "Instant WhatsApp Notification to On-Duty Sales Reps",
          "Automatic CRM Sync (Zoho, Salesforce, HubSpot)",
          "Round-Robin Lead Assignment Logic",
        ],
        keyBenefit: "15-second response time increases lead closing rates by up to 300%.",
      },
      {
        id: "automated-lead-nurture",
        title: "Automated Follow-up Drip Sequences",
        description:
          "Automated WhatsApp and email drip campaigns that educate prospects with case studies, testimonials, and booking calendar links.",
        badge: "Part 4: Lead Nurture",
        deliverables: [
          "5-Step Automated Email & WhatsApp Nurture Sequence",
          "Calendar Booking Link (Calendly / Google Meet)",
          "Automatic Follow-up for Unresponsive Inquiries",
        ],
        keyBenefit: "Revives stalled leads automatically without manual follow-up effort.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Target Audience & Offer Engineering",
        duration: "Days 1 - 3",
        description:
          "Define exact customer demographics, create high-converting lead magnet offers, and establish qualification criteria.",
        deliverables: ["Lead Magnet & Offer Blueprint", "Qualification Criteria Matrix"],
      },
      {
        stepNumber: "Step 02",
        title: "Landing Page & Form Development",
        duration: "Days 4 - 7",
        description:
          "Build high-speed dedicated landing pages with mobile-first layouts, trust proof, and multi-step qualification forms.",
        deliverables: ["Live High-Converting Landing Page", "Interactive Multi-Step Form"],
      },
      {
        stepNumber: "Step 03",
        title: "OTP Verification & CRM Routing Setup",
        duration: "Days 8 - 10",
        description:
          "Connect WhatsApp OTP verification, configure CRM lead pipelines, and set up round-robin rep notifications.",
        deliverables: ["Working WhatsApp OTP Verification", "Automated CRM Lead Routing Pipeline"],
      },
      {
        stepNumber: "Step 04",
        title: "Paid Traffic Launch & Ad Sync",
        duration: "Days 11 - 15",
        description:
          "Launch Google Search and Meta instant lead ad campaigns targeting high-intent commercial buyers.",
        deliverables: ["Live Multi-Channel Lead Campaigns", "Real-Time Lead Tracking Sheet"],
      },
      {
        stepNumber: "Step 05",
        title: "Lead Quality Calibration & Optimization",
        duration: "Day 16 & Ongoing",
        description:
          "Review lead closing rates with your sales team weekly, adjust qualification questions, and lower cost-per-closed-deal.",
        deliverables: [
          "Weekly Lead Quality Review Reports",
          "Continuous Cost-Per-Acquisition Optimization",
        ],
      },
    ],
  },

  "social-media-growth": {
    serviceId: "social-media-growth",
    subServices: [
      {
        id: "content-calendar-grid",
        title: "Monthly 30-Day Content Calendar & Grid Plan",
        description:
          "Strategic visual content pillars covering brand authority, educational carousels, client testimonials, and behind-the-scenes stories.",
        badge: "Part 1: Strategy & Calendar",
        deliverables: [
          "Monthly 30-Day Content Calendar & Topic Pillars",
          "Aesthetic Instagram Grid Preview & Curation",
          "Platform-Specific Caption & Hashtag Strategy",
        ],
        keyBenefit: "Consistent, premium brand presence across all social channels.",
      },
      {
        id: "viral-reels-scripting-editing",
        title: "Short-Form Viral Reels Scripting & 4K Editing",
        description:
          "High-retention 9:16 vertical video reels with captivating 3-second visual hooks, kinetic captions, and trending audio selections.",
        badge: "Part 2: Short-Form Video",
        deliverables: [
          "8-15 Short-Form Reels Scripts & Storyboards",
          "Professional 4K Video Editing with Kinetic Subtitles",
          "Sound Design & Motion Graphic Elements",
        ],
        keyBenefit: "Explodes organic reach and brand discoverability on Instagram and YouTube.",
      },
      {
        id: "community-moderation-dm",
        title: "Daily Publishing & Active Community Moderation",
        description:
          "Managing scheduled daily posts, responding to comments within 1 hour, and engaging with prospective customer accounts.",
        badge: "Part 3: Community Management",
        deliverables: [
          "Multi-Platform Scheduled Publishing",
          "Daily Comment & Inquiry Moderation",
          "Automated Direct Message Lead Response (ManyChat)",
        ],
        keyBenefit: "Turns casual social media followers into active warm inquiries.",
      },
      {
        id: "influencer-collaborations",
        title: "Influencer Collaborations & Creator Outreaches",
        description:
          "Identifying, vetting, and managing niche micro-influencers and industry creators to promote your brand authentically.",
        badge: "Part 4: Influencer Outreach",
        deliverables: [
          "Vetted Influencer Roster & Media Kit Analysis",
          "Negotiation, Contracts & Deliverable Management",
          "Campaign Tracking & ROI Performance Reports",
        ],
        keyBenefit: "Borrows established creator trust to drive massive organic social proof.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Brand Voice, Archetype & Persona Discovery",
        duration: "Days 1 - 3",
        description:
          "Define your visual aesthetic, brand personality, primary audience demographics, and core content themes.",
        deliverables: ["Brand Social Identity Guidelines", "Monthly Content Pillar Matrix"],
      },
      {
        stepNumber: "Step 02",
        title: "Monthly Content Creation & Video Sprint",
        duration: "Days 4 - 10",
        description:
          "Design carousels, write direct-response captions, record/edit reels, and organize the 30-day posting queue.",
        deliverables: ["30 Approved Post Graphics & Reels", "Scheduled Publishing Queue"],
      },
      {
        stepNumber: "Step 03",
        title: "Publishing & ManyChat Automation Setup",
        duration: "Days 11 - 15",
        description:
          "Launch daily multi-channel publishing and configure automated DM keywords to capture lead emails/numbers.",
        deliverables: ["Live Multi-Channel Publishing", "Automated DM Lead Capture Sequences"],
      },
      {
        stepNumber: "Step 04",
        title: "Active Community Engagement & Outreach",
        duration: "Days 16 - 25",
        description:
          "Engage with target industry profiles, respond to comments, and manage influencer collaboration outreach.",
        deliverables: ["Active Community Engagement Log", "Influencer Outreach Pipeline"],
      },
      {
        stepNumber: "Step 05",
        title: "Monthly Metric Review & Creative Calibration",
        duration: "Day 30 & Ongoing",
        description:
          "Analyze top-performing post formats, follower growth, website clicks, and plan the upcoming month’s content sprint.",
        deliverables: ["Monthly Social Growth & Reach Report", "Next Month Editorial Roadmap"],
      },
    ],
  },

  // ==========================================
  // 05. PPC MANAGEMENT
  // ==========================================
  "google-ads-pmax": {
    serviceId: "google-ads-pmax",
    subServices: [
      {
        id: "search-ad-stag-structure",
        title: "Single-Theme Ad Groups (STAG) & Exact Match",
        description:
          "Tightly themed search ad groups with exact and phrase match commercial keywords, maximizing Google Quality Scores.",
        badge: "Part 1: Search Campaigns",
        deliverables: [
          "Tightly Themed Search Ad Group (STAG) Hierarchy",
          "15+ Responsive Search Ad (RSA) Copy Combinations",
          "Comprehensive Asset Extensions (Sitelinks, Callouts, Phone)",
        ],
        keyBenefit: "Maximizes ad relevance and slashes Cost Per Click (CPC).",
      },
      {
        id: "pmax-asset-audience-signals",
        title: "Performance Max Asset Groups & Audience Signals",
        description:
          "Setting up Performance Max campaigns across YouTube, Gmail, Discover, Maps, and Display with custom high-intent customer signals.",
        badge: "Part 2: Performance Max",
        deliverables: [
          "High-Resolution Image & Video Asset Groups",
          "First-Party Customer & Competitor URL Audience Signals",
          "Brand Exclusion Lists & URL Expansion Controls",
        ],
        keyBenefit: "Unlocks massive multi-channel scale across all Google inventory.",
      },
      {
        id: "negative-keyword-scrub",
        title: "Negative Keyword Scrubbing & Budget Shield",
        description:
          "Extensive master negative keyword lists updated weekly to prevent your budget from burning on low-intent search terms.",
        badge: "Part 3: Budget Protection",
        deliverables: [
          "Master 2,000+ Universal Negative Keyword List",
          "Weekly Search Term Scrub & Waste Pruning",
          "Competitor & Job-Seeker Negative Exclusions",
        ],
        keyBenefit: "Eliminates wasted spend on irrelevant clicks immediately.",
      },
      {
        id: "offline-conversion-tracking",
        title: "Offline Conversion Tracking & Value Bidding",
        description:
          "Syncing closed CRM deals back to Google Ads via GCLID/enhanced conversions to train smart bidding on high-value customers.",
        badge: "Part 4: Smart Bidding",
        deliverables: [
          "Google Tag Manager Enhanced Conversion Setup",
          "Offline GCLID Lead Value Upload Pipeline",
          "Smart Bidding Strategy Calibration (tCPA / tROAS)",
        ],
        keyBenefit: "Directs Google algorithm to hunt for your most profitable buyers.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Commercial Keyword Mining & Competitor CPC Audit",
        duration: "Days 1 - 3",
        description:
          "Research high-commercial search volume, estimate CPCs, analyze competitor ad copy, and define negative lists.",
        deliverables: ["Target Keyword Architecture", "Negative Keyword Library Blueprint"],
      },
      {
        stepNumber: "Step 02",
        title: "Conversion Tracking & Tag Manager Verification",
        duration: "Days 4 - 5",
        description:
          "Configure GTM, test phone call tracking, form submission events, and verify Google Ads conversion tags.",
        deliverables: ["Verified Conversion Tracking System", "Call Tracking Integration"],
      },
      {
        stepNumber: "Step 03",
        title: "Ad Copywriting & Asset Group Construction",
        duration: "Days 6 - 8",
        description:
          "Write high-CTR responsive search ads, design Performance Max image assets, and configure sitelink extensions.",
        deliverables: [
          "Complete Ad Copy & Asset Library",
          "Campaign Structure in Google Ads Editor",
        ],
      },
      {
        stepNumber: "Step 04",
        title: "Live Launch & Bid Strategy Calibration",
        duration: "Days 9 - 15",
        description:
          "Launch campaigns on maximize clicks / manual CPC to gather initial data, then transition to smart tCPA / tROAS.",
        deliverables: [
          "Live Google Search & PMax Campaigns",
          "Initial Search Term Performance Log",
        ],
      },
      {
        stepNumber: "Step 05",
        title: "Ongoing Search Term Scrubbing & Scaling",
        duration: "Day 16 & Ongoing",
        description:
          "Daily bid monitoring, weekly negative keyword scrubbing, landing page speed testing, and budget scaling.",
        deliverables: ["Weekly Spend & ROI Reconciliation Reports", "Continuous ROAS Optimization"],
      },
    ],
  },

  "meta-ads-scaling": {
    serviceId: "meta-ads-scaling",
    subServices: [
      {
        id: "full-funnel-meta-structure",
        title: "Full-Funnel Campaign Structure (TOF / MOF / BOF)",
        description:
          "Structuring Top-Of-Funnel broad prospecting, Middle-Of-Funnel engaged audience consideration, and Bottom-Of-Funnel retargeting.",
        badge: "Part 1: Campaign Hierarchy",
        deliverables: [
          "Advantage+ Shopping & CBO Campaign Architecture",
          "Custom First-Party & High-Intent Lookalike Stacks",
          "Dynamic Product Ads (DPA) Retargeting Setup",
        ],
        keyBenefit: "Guarantees steady flow from cold prospects to repeat purchasers.",
      },
      {
        id: "creative-hook-matrix",
        title: "High-Velocity Creative Testing Sandbox",
        description:
          "Weekly creative sprints testing 3-second video hooks, static comparison cards, founder explainers, and UGC formats.",
        badge: "Part 2: Creative Engine",
        deliverables: [
          "12-20 Weekly Visual & Video Ad Creatives",
          "Creative Testing Naming Convention & Matrix",
          "Hook Rate, Hold Rate & Outbound CTR Analytics",
        ],
        keyBenefit: "Combats ad fatigue and lowers customer acquisition costs.",
      },
      {
        id: "server-side-meta-capi",
        title: "Server-Side Conversions API (CAPI) & Pixel Setup",
        description:
          "Cloud server-side Conversions API integration to bypass iOS tracking blocks and maintain 9.0+ Event Match Quality score.",
        badge: "Part 3: Tracking & CAPI",
        deliverables: [
          "Server-Side Meta CAPI Gateway Implementation",
          "9.0+ Event Match Quality Score Optimization",
          "Aggregated Event Measurement & Domain Verification",
        ],
        keyBenefit: "Restores lost attribution data and improves ad delivery algorithms.",
      },
      {
        id: "automated-scaling-rules",
        title: "Automated Rules & Horizontal Budget Scaling",
        description:
          "Configuring custom automated rules to scale profitable ad sets automatically and pause underperforming ads before money is wasted.",
        badge: "Part 4: Scaling Rules",
        deliverables: [
          "Automated Budget Scaling & Stop-Loss Rules",
          "Horizontal Creative Scaling Strategy",
          "Weekly ROAS & Contribution Margin Reports",
        ],
        keyBenefit: "Enables safe, profitable scaling of monthly ad spend.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Pixel, CAPI & Historical Account Audit",
        duration: "Days 1 - 3",
        description:
          "Audit pixel health, configure server-side CAPI, verify domain ownership, and review past winning creative angles.",
        deliverables: ["Meta Account & CAPI Audit Report", "Verified Domain & Event Hierarchy"],
      },
      {
        stepNumber: "Step 02",
        title: "Creative Angle Development & Ad Production",
        duration: "Days 4 - 7",
        description:
          "Develop direct-response visual ads, product carousels, video hook scripts, and persuasive ad copy variations.",
        deliverables: ["First Batch of 15 Creative Ad Assets", "Campaign Copywriting Matrix"],
      },
      {
        stepNumber: "Step 03",
        title: "Campaign Architecture & Sandbox Launch",
        duration: "Days 8 - 12",
        description:
          "Launch Advantage+ Shopping, custom lookalike audiences, dynamic catalog ads, and automated scaling rules.",
        deliverables: ["Live Multi-Tier Meta Ad Campaigns", "Automated Rules Configuration"],
      },
      {
        stepNumber: "Step 04",
        title: "Creative Sandbox Testing & Scaling Winners",
        duration: "Days 13 - 20",
        description:
          "Identify breakout winning ads, graduate winners into scaling campaigns, and adjust bid caps for profitability.",
        deliverables: ["Scaled Budget Allocation", "CAC Reduction Optimization"],
      },
      {
        stepNumber: "Step 05",
        title: "Ongoing Weekly Creative Sprints & Management",
        duration: "Day 21 & Ongoing",
        description:
          "Deliver new creative batches every week, monitor frequency fatigue, and provide weekly ROI reconciliations.",
        deliverables: ["Weekly Creative Testing Batches", "24/7 Live Executive Dashboard Access"],
      },
    ],
  },

  "ppc-audit-optimization": {
    serviceId: "ppc-audit-optimization",
    subServices: [
      {
        id: "ad-waste-audit",
        title: "Historical Spend & Waste Leak Audit",
        description:
          "Deep audit of past 12 months ad spend to identify wasted budget on non-converting search terms, bad placements, and broken URLs.",
        badge: "Part 1: Waste Audit",
        deliverables: [
          "Ad Spend Waste & Bleeder Identification Report",
          "Placement & Negative Exclusion List Audit",
          "Quality Score & Landing Page Relevance Analysis",
        ],
        keyBenefit: "Immediately frees up 20% - 35% of wasted monthly ad budget.",
      },
      {
        id: "daily-bid-pacing",
        title: "Daily Bid Calibration & Budget Pacing",
        description:
          "Continuous monitoring of impression share, device bid adjustments, hour-of-day bid pacing, and geo-targeted bid modifiers.",
        badge: "Part 2: Bid Calibration",
        deliverables: [
          "Daily Bid Threshold & Target ROAS Balancing",
          "Device & Dayparting Bid Modifiers",
          "Geo-Targeted Performance Reallocations",
        ],
        keyBenefit: "Maximizes ad delivery during peak customer buying hours.",
      },
      {
        id: "landing-page-cro-testing",
        title: "Landing Page Speed & Split-Testing",
        description:
          "A/B testing landing page headlines, load speeds, form lengths, and call-to-action buttons to maximize conversion yield.",
        badge: "Part 3: Conversion Rate Optimization",
        deliverables: [
          "Landing Page Speed & Mobile UX Audit",
          "Multi-Variant Headline & CTA Split Testing",
          "Form Field Optimization & Friction Reduction",
        ],
        keyBenefit: "Doubles inbound conversion rate without spending an extra rupee on ads.",
      },
      {
        id: "attribution-reconciliation",
        title: "Attribution & Transparent ROI Reconciliation",
        description:
          "Weekly financial reviews reconciling ad platform reported metrics with real money bank deposits and CRM closed deals.",
        badge: "Part 4: Financial Clarity",
        deliverables: [
          "Weekly Spend vs Revenue Reconciliation",
          "Blended ROAS & Customer Acquisition Cost (CAC) BI",
          "Executive Summary Video Walkthroughs",
        ],
        keyBenefit: "100% financial clarity and agency accountability.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Comprehensive 100-Point Ad Account Audit",
        duration: "Days 1 - 3",
        description:
          "Perform deep-dive analysis of search terms, bids, creative performance, tracking accuracy, and conversion tags.",
        deliverables: ["100-Point PPC Audit Report", "Immediate Action Item Checklist"],
      },
      {
        stepNumber: "Step 02",
        title: "Waste Pruning & Negative Keyword Deployment",
        duration: "Days 4 - 5",
        description:
          "Cut bleeding search terms, block spam display placements, and reallocate budget to high-performing campaigns.",
        deliverables: ["Master Negative Keyword Implementation", "Cleaned Campaign Placements"],
      },
      {
        stepNumber: "Step 03",
        title: "Bid Strategy & Audience Realignment",
        duration: "Days 6 - 8",
        description:
          "Calibrate target CPA / ROAS thresholds, adjust device bid modifiers, and restructure overlapping audiences.",
        deliverables: ["Optimized Bidding Infrastructure", "Audience De-Duplication"],
      },
      {
        stepNumber: "Step 04",
        title: "Landing Page Friction Optimization",
        duration: "Days 9 - 12",
        description:
          "Implement conversion boosters, optimize mobile load speeds, and align landing page copy with winning ad headlines.",
        deliverables: ["Optimized High-Speed Landing Page", "A/B Headline Experiment Setup"],
      },
      {
        stepNumber: "Step 05",
        title: "Daily Performance Monitoring & Weekly Reviews",
        duration: "Day 13 & Ongoing",
        description:
          "Daily bid calibrations, automated rule oversight, and scheduled weekly executive strategy calls.",
        deliverables: ["Live 24/7 Looker Studio Dashboard", "Weekly Action Item Strategy Sessions"],
      },
    ],
  },

  "ppc-management-core": {
    serviceId: "ppc-management-core",
    subServices: [
      {
        id: "ppc-keyword-architecture",
        title: "High-Intent Commercial Keyword & STAG Architecture",
        description:
          "Structuring tightly themed ad groups with exact and phrase match commercial keywords to guarantee high Google Quality Scores and low CPCs.",
        badge: "Part 1: Keyword Architecture",
        deliverables: [
          "Single-Theme Ad Group (STAG) Account Structure",
          "Comprehensive Commercial & Transactional Keyword Mapping",
          "Universal 2,000+ Negative Keyword Shield List",
        ],
        keyBenefit: "Maximizes ad relevance and prevents wasted ad spend on unqualified clicks.",
      },
      {
        id: "ppc-responsive-ads-extensions",
        title: "High-Converting Ad Copywriting & Asset Extensions",
        description:
          "Authoring persuasive responsive search ads with 15+ headlines, compelling callouts, sitelinks, structured snippets, and promotion assets.",
        badge: "Part 2: Ad Copy & Creative",
        deliverables: [
          "15+ A/B Tested Headline & Description Combinations",
          "Complete Dynamic Asset Extensions Suite",
          "Competitor Counter-Messaging Value Propositions",
        ],
        keyBenefit: "Generates industry-leading Click-Through Rates (CTR) above 8%.",
      },
      {
        id: "ppc-conversion-tracking-attribution",
        title: "Server-Side Conversion Tracking & GA4 Enhanced Setup",
        description:
          "Rigorous end-to-end tracking configuration with Google Tag Manager, offline GCLID value uploads, and phone call recording integration.",
        badge: "Part 3: Tracking & Attribution",
        deliverables: [
          "Server-Side GTM & Google Ads Enhanced Conversions",
          "Dynamic Number Insertion (DNI) Phone Call Tracking",
          "Qualified Lead Value Pass-back to Train Smart Bidding",
        ],
        keyBenefit: "Enables Google's algorithm to hunt exclusively for paying buyers.",
      },
      {
        id: "ppc-bid-calibration-cro",
        title: "Daily Bid Calibration & Weekly ROAS Reconciliation",
        description:
          "Daily search term scrubdowns, device and geo-bid modifiers, Smart Bidding threshold calibration, and transparent weekly ROI reports.",
        badge: "Part 4: Ongoing Optimization",
        deliverables: [
          "Daily Search Term Scrubbing & Placement Filtering",
          "Smart Bidding Calibration (Target CPA & Target ROAS)",
          "Weekly Live Executive Spend & Revenue Reconciliation",
        ],
        keyBenefit: "Consistently lowers blended CPA and scales verified customer acquisition.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Commercial Keyword Mining & Competitor Analysis",
        duration: "Days 1 - 3",
        description:
          "Perform deep commercial keyword research, analyze competitor ad strategies, and construct the master negative keyword library.",
        deliverables: ["Keyword Architecture Matrix", "Universal Negative Keyword Shield"],
      },
      {
        stepNumber: "Step 02",
        title: "Conversion Tracking & GTM Setup",
        duration: "Days 4 - 5",
        description:
          "Deploy Google Tag Manager, configure enhanced conversion tracking, and verify lead form and phone call conversion triggers.",
        deliverables: ["Verified Conversion Tracking Pipeline", "GA4 Event Stream Sync"],
      },
      {
        stepNumber: "Step 03",
        title: "Campaign Construction & Copywriting",
        duration: "Days 6 - 8",
        description:
          "Draft high-CTR responsive search ads, configure Performance Max asset groups, and stage campaign settings in Google Ads Editor.",
        deliverables: ["Complete Ad Copy Matrix", "Staged Campaigns Ready for Review"],
      },
      {
        stepNumber: "Step 04",
        title: "Campaign Launch & Bid Optimization",
        duration: "Days 9 - 15",
        description:
          "Launch campaigns on maximize clicks to gather baseline search query data, then transition to algorithmic Smart Bidding.",
        deliverables: ["Live Google Search & PMax Campaigns", "Initial Search Term Log"],
      },
      {
        stepNumber: "Step 05",
        title: "Daily Tuning & Weekly Executive Review",
        duration: "Day 16 & Ongoing",
        description:
          "Execute daily negative keyword scrubbing, adjust bid modifiers, and conduct scheduled weekly ROAS reviews.",
        deliverables: ["Weekly Spend vs Revenue Reports", "Continuous ROAS Optimization"],
      },
    ],
  },

  "youtube-ads": {
    serviceId: "youtube-ads",
    subServices: [
      {
        id: "youtube-campaign-structuring",
        title: "Skippable In-Stream, 15s Bumper & Shorts Video Ad Setup",
        description:
          "Multi-format YouTube video ad campaigns spanning skippable in-stream, non-skippable 6-15s bumpers, and 9:16 vertical YouTube Shorts ads.",
        badge: "Part 1: Video Ad Formats",
        deliverables: [
          "Skippable In-Stream & 15s Bumper Campaign Architecture",
          "Vertical 9:16 YouTube Shorts Video Ads Setup",
          "Interactive Video Action Overlay Cards & CTA Buttons",
        ],
        keyBenefit: "Captures maximum visual attention and drives high-intent viewer actions.",
      },
      {
        id: "youtube-custom-intent-audiences",
        title: "High-Intent Custom Intent & Competitor Search Targeting",
        description:
          "Targeting YouTube users who recently searched for your competitors' brand names, products, and commercial keywords on Google.",
        badge: "Part 2: Audience Targeting",
        deliverables: [
          "Google Search Keyword-Driven Custom Intent Audiences",
          "Competitor Brand & Product Keyword Conquesting Audiences",
          "In-Market Demographic & Life Event Audience Layers",
        ],
        keyBenefit: "Reaches ready-to-buy consumers actively researching solutions in your niche.",
      },
      {
        id: "youtube-brand-safety-exclusions",
        title: "Channel-Level Placement Exclusions & Brand Safety",
        description:
          "Rigorous negative placement filtering to prevent your ads from showing on irrelevant kids channels, clickbait videos, or non-converting creators.",
        badge: "Part 3: Placement Shield",
        deliverables: [
          "Master 10,000+ Low-Quality YouTube Channel Exclusion List",
          "Kids Content & Gaming Stream Universal Exclusions",
          "Weekly Placement Spend Scrubbing & Waste Elimination",
        ],
        keyBenefit: "Guarantees 100% of your video ad budget reaches real human decision-makers.",
      },
      {
        id: "youtube-retargeting-conversion-tracking",
        title: "Video View-Through & Enhanced Conversion Attribution",
        description:
          "Connecting YouTube channel analytics with Google Ads to build retargeting pools of engaged video viewers and track closed sales.",
        badge: "Part 4: Retargeting & Attribution",
        deliverables: [
          "YouTube Channel Linking & Engaged Viewer Retargeting Pools",
          "Engaged-View & View-Through Conversion Attribution Tracking",
          "Cross-Channel Conversion Funnels to Google Search & Meta",
        ],
        keyBenefit: "Transforms video viewers into warm inbound leads and paying customers.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Audience Persona & Competitor Search Research",
        duration: "Days 1 - 2",
        description:
          "Identify competitor search terms on Google, map buyer personas, and build high-intent custom intent audience segments.",
        deliverables: ["Custom Intent Keyword List", "Audience Blueprint Document"],
      },
      {
        stepNumber: "Step 02",
        title: "Video Hook Scripting & Creative Direction",
        duration: "Days 3 - 5",
        description:
          "Review existing video assets, provide recommendations for first-5-second attention hooks, and design companion display banners.",
        deliverables: ["Video Hook Recommendations", "High-Resolution Companion Banners"],
      },
      {
        stepNumber: "Step 03",
        title: "Channel Placement Exclusions & Account Setup",
        duration: "Days 6 - 7",
        description:
          "Apply master placement exclusion lists to block low-quality channels, link YouTube channel, and configure conversion tags.",
        deliverables: ["Brand Safety Exclusions Applied", "Verified Conversion Tracking"],
      },
      {
        stepNumber: "Step 04",
        title: "Campaign Launch & Target CPV Testing",
        duration: "Days 8 - 14",
        description:
          "Deploy In-Stream, Bumper, and Shorts campaigns with Target CPV and Maximize Conversions bidding strategies.",
        deliverables: ["Live YouTube Ad Campaigns", "Initial Cost-Per-View Log"],
      },
      {
        stepNumber: "Step 05",
        title: "Audience Retargeting & View-Through Scaling",
        duration: "Day 15 & Ongoing",
        description:
          "Build remarketing lists of viewers who watched 50%+ of your videos and retarget them with high-intent direct offers.",
        deliverables: ["Weekly Video Engagement Reports", "Cross-Platform Retargeting Pipeline"],
      },
    ],
  },

  "whatsapp-conversational-ads": {
    serviceId: "whatsapp-conversational-ads",
    subServices: [
      {
        id: "ctwa-ad-campaigns",
        title: "Click-to-WhatsApp (CTWA) Ad Creative & Campaign Setup",
        description:
          "High-converting paid advertising on Facebook and Instagram directing prospects straight into a live WhatsApp chat with one click.",
        badge: "Part 1: Paid Traffic",
        deliverables: [
          "Meta Ads Manager CTWA Campaign Architecture",
          "Direct-Response Creative Variations with WhatsApp CTAs",
          "Pre-Filled Opening Icebreaker Message Prompts",
        ],
        keyBenefit: "Eliminates form fatigue by starting an immediate, personal 1-on-1 dialogue.",
      },
      {
        id: "whatsapp-cloud-api-setup",
        title: "WhatsApp Cloud API & Official Green Tick Verification",
        description:
          "Complete configuration of official WhatsApp Business API, enterprise phone number setup, and company profile verification.",
        badge: "Part 2: API & Infrastructure",
        deliverables: [
          "Official WhatsApp Cloud API Verification Support",
          "Business Profile Optimization (Branded Logo, Catalog, Address)",
          "Meta Business Manager Verified Phone Number Setup",
        ],
        keyBenefit:
          "Builds instant trust and eliminates account ban risks with official Meta API compliance.",
      },
      {
        id: "whatsapp-interactive-chatbot",
        title: "24/7 Automated Qualification Bot & Catalog Delivery",
        description:
          "Interactive automated chatbot flows that greet prospects instantly, ask qualifying questions, deliver PDF brochures, and route VIP leads to sales agents.",
        badge: "Part 3: Conversational Bot",
        deliverables: [
          "Interactive Multi-Step Lead Qualification Chatbot Sequence",
          "Instant Digital PDF Catalog, Brochure & Price List Auto-Delivery",
          "Sub-60-Second Instant Greeting & Lead Scoring Protocol",
        ],
        keyBenefit: "Captures and qualifies leads 24/7, even outside normal business hours.",
      },
      {
        id: "whatsapp-multi-agent-crm",
        title: "Multi-Agent Support Inbox & Automated CRM Sync",
        description:
          "Shared web inbox for your sales team (Wati, Interakt, Aisensy) with automatic lead syncing to Google Sheets, Zoho, or HubSpot.",
        badge: "Part 4: Team Inbox & CRM",
        deliverables: [
          "Shared Multi-Agent Team Web & Mobile Chat Inbox",
          "Instant Webhook Sync to CRM / Google Sheets",
          "Re-Engagement Broadcast Sequence for Inactive Leads",
        ],
        keyBenefit:
          "Ensures no lead falls through the cracks and keeps your sales team hyper-efficient.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "WhatsApp Business API & Account Setup",
        duration: "Days 1 - 2",
        description:
          "Configure Meta Business Manager, register dedicated phone number, and establish WhatsApp Cloud API credentials.",
        deliverables: ["Connected WhatsApp API Account", "Verified Business Profile"],
      },
      {
        stepNumber: "Step 02",
        title: "Bot Flow Design & Qualification Scripting",
        duration: "Days 3 - 4",
        description:
          "Map customer conversational journey, write interactive button menus, and configure automated PDF brochure triggers.",
        deliverables: ["Interactive Bot Flow Blueprint", "Lead Qualification Logic Matrix"],
      },
      {
        stepNumber: "Step 03",
        title: "CTWA Meta Ad Campaigns Production",
        duration: "Days 5 - 6",
        description:
          "Create Click-to-WhatsApp ad visual creatives, author persuasive copy, and set up Meta Advantage+ campaign structure.",
        deliverables: ["Set of 10 CTWA Ad Creatives", "Configured Opening Chat Icebreakers"],
      },
      {
        stepNumber: "Step 04",
        title: "CRM Webhook Sync & Team Inbox Training",
        duration: "Days 7 - 8",
        description:
          "Connect shared team inbox (Wati/Interakt), test automated CRM contact sync, and train client sales team on chat protocol.",
        deliverables: ["Live Multi-Agent Team Inbox", "Automated Google Sheet/CRM Webhook"],
      },
      {
        stepNumber: "Step 05",
        title: "Live Launch, Flow Tuning & Broadcast Sequences",
        duration: "Day 9 & Ongoing",
        description:
          "Launch ads, monitor chat drop-off rates, optimize bot responses, and schedule promotional WhatsApp broadcast updates.",
        deliverables: [
          "Weekly Conversation & Cost-Per-Lead Reports",
          "Broadcast Retargeting Calendar",
        ],
      },
    ],
  },

  "linkedin-ads": {
    serviceId: "linkedin-ads",
    subServices: [
      {
        id: "linkedin-abm-targeting",
        title: "Account-Based Marketing (ABM) & Matched Audiences",
        description:
          "Uploading specific target company account lists and precision demographic filters to target verified corporate executives.",
        badge: "Part 1: Precision Targeting",
        deliverables: [
          "Target Company Account List Upload & Domain Matching",
          "Job Title, Seniority Level & Buying Committee Demographic Filters",
          "Company Size, Industry Vertical & Annual Revenue Targeting",
        ],
        keyBenefit:
          "Guarantees zero ad waste by displaying your brand only to authorized budget holders.",
      },
      {
        id: "linkedin-sponsored-content-carousel",
        title: "Sponsored Content, Document PDF Ads & Thought Leadership",
        description:
          "High-value PDF swipe document carousels, executive thought-leadership articles, and high-impact single image sponsored feeds.",
        badge: "Part 2: B2B Creative Formats",
        deliverables: [
          "Interactive Multi-Page PDF Document Carousel Ad Formats",
          "High-Resolution Sponsored Feed Creative Assets",
          "Direct-Response B2B Copywriting Addressing Corporate Pain Points",
        ],
        keyBenefit: "Positions your business as the premier enterprise authority in your industry.",
      },
      {
        id: "linkedin-lead-gen-forms",
        title: "Native In-App Lead Gen Forms with Pre-Filled Data",
        description:
          "Forms that open inside the LinkedIn app and auto-fill verified corporate email, direct phone number, and current job title with 1 click.",
        badge: "Part 3: Lead Gen Forms",
        deliverables: [
          "Native LinkedIn In-App Lead Gen Forms Configuration",
          "Zero-Friction 1-Tap Form Submission Experience",
          "Custom Corporate Qualification Questions (Budget, Timeline, Team Size)",
        ],
        keyBenefit:
          "Generates 2x to 3x higher B2B conversion rates compared to external landing pages.",
      },
      {
        id: "linkedin-insight-tag-crm",
        title: "LinkedIn Insight Tag & CRM Pipeline Integration",
        description:
          "Server-side tracking of website visitors by company name, combined with automatic lead routing into HubSpot, Salesforce, or Zoho.",
        badge: "Part 4: Attribution & CRM",
        deliverables: [
          "LinkedIn Insight Tag Installation & Website Retargeting Pools",
          "Website Demographic Analytics by Job Function and Company",
          "Instant CRM Pipeline Integration (HubSpot / Zoho / Salesforce)",
        ],
        keyBenefit:
          "Reveals which enterprises are visiting your website and accelerates sales cycles.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "B2B Ideal Customer Profile (ICP) & Account List Mapping",
        duration: "Days 1 - 3",
        description:
          "Define target job titles, company size brackets, and compile high-priority target enterprise account lists.",
        deliverables: ["B2B ICP Definition Matrix", "Target Account List for Matched Audiences"],
      },
      {
        stepNumber: "Step 02",
        title: "LinkedIn Insight Tag & Conversion Setup",
        duration: "Days 4 - 5",
        description:
          "Install LinkedIn Insight Tag, configure conversion actions, and set up website matched audience retargeting pools.",
        deliverables: ["Active Insight Tag", "Website Retargeting Audiences Staged"],
      },
      {
        stepNumber: "Step 03",
        title: "Document Carousel & Ad Asset Design",
        duration: "Days 6 - 8",
        description:
          "Design multi-page document PDF slides, author compelling B2B problem-solution copy, and create native Lead Gen Forms.",
        deliverables: ["Set of 3 B2B Document Carousels", "Configured In-App Lead Gen Forms"],
      },
      {
        stepNumber: "Step 04",
        title: "Campaign Launch & B2B Lead Quality Audit",
        duration: "Days 9 - 15",
        description:
          "Launch campaigns, monitor cost per qualified corporate lead, and verify that incoming leads match target job titles.",
        deliverables: ["Live LinkedIn Campaigns", "Initial Lead Quality Audit Report"],
      },
      {
        stepNumber: "Step 05",
        title: "Audience Expansion & Pipeline Optimization",
        duration: "Day 16 & Ongoing",
        description:
          "Expand winning company account lists, refresh creative document carousels, and optimize bidding based on closed deal values.",
        deliverables: [
          "Weekly B2B Performance Reports",
          "Quarterly Account-Based Marketing Scaling",
        ],
      },
    ],
  },

  "ai-powered-advertising": {
    serviceId: "ai-powered-advertising",
    subServices: [
      {
        id: "ai-creative-variation-testing",
        title: "AI-Generated High-Velocity Visual & Copy Variations",
        description:
          "Using modern generative AI models to produce dozens of creative angles, visual hooks, and persuasive ad copy variants every week.",
        badge: "Part 1: Creative Velocity",
        deliverables: [
          "High-Velocity Generative AI Visual Ad Variations",
          "Automated Headline & Copy Hooks Tailored by Buyer Persona",
          "Continuous Multi-Variant Creative Sandbox Sprints",
        ],
        keyBenefit:
          "Eradicates ad fatigue and tests 5x more creative angles without inflated design costs.",
      },
      {
        id: "ai-smart-bidding-calibration",
        title: "Predictive Algorithmic Bidding & Budget Scaling",
        description:
          "Harnessing machine learning algorithms across Google Smart Bidding and Meta Advantage+ to predict customer conversion probability.",
        badge: "Part 2: Predictive Bidding",
        deliverables: [
          "Target CPA & Target ROAS Algorithmic Threshold Tuning",
          "Predictive Budget Allocation to Highest-Converting Dayparts",
          "Machine-Learning Autonomous Stop-Loss Safeguards",
        ],
        keyBenefit:
          "Directs every rupee of ad spend to users statistically most likely to make a purchase.",
      },
      {
        id: "ai-dynamic-persona-targeting",
        title: "Dynamic Persona Intent Matching & Journey Mapping",
        description:
          "Aligning ad messaging dynamically with real-time customer psychology, search intent signals, and historical purchase patterns.",
        badge: "Part 3: Persona Intent",
        deliverables: [
          "Customer Psychology Intent Clustering",
          "Dynamic Product Recommendation Feeds",
          "Real-Time Creative Personalization Triggers",
        ],
        keyBenefit:
          "Delivers a bespoke message tailored to where each customer stands in their buying journey.",
      },
      {
        id: "ai-predictive-ltv-attribution",
        title: "Predictive Customer Lifetime Value (pLTV) Attribution",
        description:
          "Server-side multi-touch attribution modeling predicting 90-day repeat purchase value and training ad algorithms on profit, not just revenue.",
        badge: "Part 4: Profit Attribution",
        deliverables: [
          "Predictive LTV Scoring Algorithm Sync to Ad Accounts",
          "First-Party Server-Side Attribution Cloud Architecture",
          "Automated Real-Time Performance Analytics in Looker Studio",
        ],
        keyBenefit:
          "Optimizes campaigns for high-margin repeat customers rather than low-value one-time buyers.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "AI Tracking & Historical Data Ingestion",
        duration: "Days 1 - 3",
        description:
          "Audit historical conversion data, configure server-side attribution pipelines, and set up customer lifetime value models.",
        deliverables: ["Historical Ad Data Ingestion", "Server-Side Tracking Validation"],
      },
      {
        stepNumber: "Step 02",
        title: "Generative Creative Sprint & Copy Matrix",
        duration: "Days 4 - 6",
        description:
          "Deploy generative models to produce 25+ visual creative variants and author intent-driven dynamic copy matrices.",
        deliverables: ["Batch of 25 AI-Generated Ad Creatives", "Dynamic Copywriting Matrix"],
      },
      {
        stepNumber: "Step 03",
        title: "Algorithmic Campaign Setup & Sandbox Launch",
        duration: "Days 7 - 9",
        description:
          "Configure Google Smart Bidding and Meta Advantage+ structures with machine learning feedback loops and stop-loss rules.",
        deliverables: ["AI Campaign Sandbox Staged", "Automated Budget Scaling Rules Applied"],
      },
      {
        stepNumber: "Step 04",
        title: "Machine Learning Calibration & Signal Training",
        duration: "Days 10 - 16",
        description:
          "Allow algorithmic models to optimize toward high-probability conversion clusters, pruning underperforming creative assets automatically.",
        deliverables: ["Algorithm Calibration Report", "Winning Creative Angle Identification"],
      },
      {
        stepNumber: "Step 05",
        title: "Autonomous Scaling & Predictive Attribution",
        duration: "Day 17 & Ongoing",
        description:
          "Scale winning assets horizontally, feed closed offline transaction data back to the models, and deliver predictive ROI dashboards.",
        deliverables: [
          "24/7 Live Looker Studio Predictive Dashboard",
          "Weekly Algorithmic Strategy Sprints",
        ],
      },
    ],
  },

  "email-marketing": {
    serviceId: "email-marketing",
    subServices: [
      {
        id: "email-automated-lifecycle-flows",
        title: "Automated Customer Lifecycle Drip Sequences",
        description:
          "Behavior-triggered automated flows that welcome new subscribers, recover abandoned carts, nurture warm leads, and win back lapsed buyers.",
        badge: "Part 1: Lifecycle Flows",
        deliverables: [
          "High-Converting Welcome Drip Series (4-6 Emails)",
          "Abandoned Cart & Browse Abandonment Recovery Sequences",
          "Customer Win-Back, VIP Reward & Post-Purchase Nurture Flows",
        ],
        keyBenefit:
          "Generates predictable recurring revenue on autopilot without paying for additional ad clicks.",
      },
      {
        id: "email-responsive-template-design",
        title: "Custom HTML Responsive Email Design & Copywriting",
        description:
          "Brand-aligned, mobile-optimized email templates coded for pixel perfection in Apple Mail, Gmail, Outlook, and mobile clients.",
        badge: "Part 2: Design & Copy",
        deliverables: [
          "Custom Branded Responsive HTML/CSS Email Templates",
          "Direct-Response Email Copywriting with High Click-Through CTAs",
          "Dynamic Product Recommendations & Personalized First-Name Tags",
        ],
        keyBenefit: "Delivers a luxurious brand experience with industry-leading 30%+ open rates.",
      },
      {
        id: "email-deliverability-authentication",
        title: "Domain Authentication & Deliverability Protection",
        description:
          "Technical inbox placement optimization with SPF, DKIM, DMARC, and BIMI records to ensure 99%+ of emails land in the primary inbox.",
        badge: "Part 3: Deliverability Shield",
        deliverables: [
          "SPF, DKIM, DMARC & BIMI DNS Authentication Setup",
          "Dedicated IP Warmup & Google Postmaster Spam Monitoring",
          "Aggressive Bounced, Inactive & Spam Trap Contact Cleaning",
        ],
        keyBenefit:
          "Guarantees your emails avoid the spam and promotions folders and land directly in front of buyers.",
      },
      {
        id: "email-audience-segmentation-rfm",
        title: "RFM Audience Segmentation & Strategic Campaigns",
        description:
          "Segmenting subscribers by Recency, Frequency, and Monetary (RFM) metrics to send targeted promotional broadcasts to buyers.",
        badge: "Part 4: Segmentation & Campaigns",
        deliverables: [
          "RFM Purchase Value & Engagement Audience Clusters",
          "Weekly Scheduled Promotional Broadcast Campaigns",
          "A/B Split Testing on Subject Lines, Preheaders & Send Times",
        ],
        keyBenefit:
          "Maximizes revenue per recipient while maintaining a healthy, engaged subscriber list.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Domain Authentication & ESP Account Audit",
        duration: "Days 1 - 2",
        description:
          "Configure SPF, DKIM, DMARC DNS records, audit existing list hygiene, and connect Email Service Provider (Klaviyo/Mailchimp).",
        deliverables: ["Verified Domain Authentication", "List Health & Deliverability Scorecard"],
      },
      {
        stepNumber: "Step 02",
        title: "Template Design & Brand System Architecture",
        duration: "Days 3 - 4",
        description:
          "Design responsive master email templates in Figma and code mobile-tested HTML layouts with dynamic product blocks.",
        deliverables: ["Master Branded Email Templates", "Figma Design & Copy Library"],
      },
      {
        stepNumber: "Step 03",
        title: "Core Lifecycle Automation Build",
        duration: "Days 5 - 7",
        description:
          "Build and test Welcome Series, Browse Abandonment, Cart Abandonment, and Post-Purchase automated flows.",
        deliverables: ["4 Active Core Lifecycle Automated Flows", "Trigger & Timing Verification"],
      },
      {
        stepNumber: "Step 04",
        title: "List Segmentation & Warmup Campaign Launch",
        duration: "Days 8 - 10",
        description:
          "Segment subscribers into high-engagement clusters and send initial warmup broadcast campaigns to establish domain reputation.",
        deliverables: ["Configured RFM Audience Segments", "Initial Campaign Performance Report"],
      },
      {
        stepNumber: "Step 05",
        title: "Ongoing Weekly Broadcasts & A/B Testing",
        duration: "Day 11 & Ongoing",
        description:
          "Execute weekly scheduled promotional campaigns, conduct subject line A/B split tests, and prune inactive subscribers.",
        deliverables: [
          "Monthly Email Revenue & ROI Reports",
          "Continuous Deliverability Monitoring",
        ],
      },
    ],
  },

  // ==========================================
  // 06. SEO SERVICES
  // ==========================================
  "organic-seo-ranking": {
    serviceId: "organic-seo-ranking",
    subServices: [
      {
        id: "commercial-keyword-mapping",
        title: "Commercial Intent Keyword & Competitor Gap Analysis",
        description:
          "Mapping high-search-volume commercial keywords, searcher intent stages (Informational, Commercial, Transactional), and keyword difficulty.",
        badge: "Part 1: Keyword Strategy",
        deliverables: [
          "Master Commercial Keyword Architecture (500+ Keywords)",
          "Competitor Content Gap & Traffic Opportunity Matrix",
          "Search Intent & Revenue Potential Modeling",
        ],
        keyBenefit: "Targets search queries that convert into actual paying clients.",
      },
      {
        id: "topical-authority-clusters",
        title: "Topical Authority Pillar-Cluster Content Strategy",
        description:
          "Constructing comprehensive pillar pages and supporting topic clusters that establish undeniable subject matter authority on Google.",
        badge: "Part 2: Content Clusters",
        deliverables: [
          "Pillar-Cluster Topic Architecture Map",
          "SEO Article Briefs with Target Word Count & Semantic Headers",
          "Internal Link Sculpting & Silo Structuring",
        ],
        keyBenefit: "Compounds organic authority, lifting rankings across all related terms.",
      },
      {
        id: "onpage-semantic-seo",
        title: "On-Page Semantic SEO & Schema.org Markup",
        description:
          "Optimizing title tags, meta descriptions, H1-H3 header hierarchies, image alt text, NLP keywords, and JSON-LD structured data.",
        badge: "Part 3: On-Page SEO",
        deliverables: [
          "On-Page NLP Keyword Optimization (Surfer / Clearscope)",
          "Structured JSON-LD Schema (Article, Service, Organization)",
          "Internal Anchor Text Optimization & Zero Broken Links",
        ],
        keyBenefit: "Enables Google algorithms to instantly parse and rank your content.",
      },
      {
        id: "whitehat-backlinks-pr",
        title: "High-DA White-Hat Backlinks & Digital PR",
        description:
          "Acquiring contextual, high-Domain Authority editorial backlinks through digital PR, expert roundups, and authoritative guest publishing.",
        badge: "Part 4: Link Acquisition",
        deliverables: [
          "High-DA (50+) Contextual Editorial Backlinks",
          "Digital PR Mentions on Reputable News & Industry Portals",
          "Disavow File Maintenance for Toxic Link Defense",
        ],
        keyBenefit: "Builds permanent domain trust that outranks entrenched competitors.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Deep Technical & Keyword Gap Audit",
        duration: "Days 1 - 5",
        description:
          "Analyze domain authority, historical traffic trends, crawl errors, competitor backlinks, and map master keyword targets.",
        deliverables: ["150-Point SEO Audit Report", "Master Keyword Strategy Matrix"],
      },
      {
        stepNumber: "Step 02",
        title: "On-Page Remediation & Schema Deployment",
        duration: "Days 6 - 15",
        description:
          "Optimize page titles, semantic headings, meta descriptions, internal link architecture, and JSON-LD structured data.",
        deliverables: ["On-Page Optimization of Core Pages", "Structured Schema Implementation"],
      },
      {
        stepNumber: "Step 03",
        title: "Topical Pillar Content Production",
        duration: "Days 16 - 30",
        description:
          "Write, format, and publish comprehensive pillar articles and supporting cluster posts targeting high-intent keywords.",
        deliverables: [
          "Published High-Authority Pillar Articles",
          "Internal Cluster Linking Network",
        ],
      },
      {
        stepNumber: "Step 04",
        title: "High-DA Digital PR & Backlink Outreach",
        duration: "Month 2 & Ongoing",
        description:
          "Execute white-hat editorial outreach to industry publications, earning contextual high-authority backlinks.",
        deliverables: [
          "Monthly High-DA Backlink Acquisition Reports",
          "Organic Keyword Movement Tracking",
        ],
      },
      {
        stepNumber: "Step 05",
        title: "Rank Tracking, Search Console & Traffic Growth",
        duration: "Ongoing Monthly Cadence",
        description:
          "Monitor daily keyword rankings in Google Search Console, optimize for featured snippets, and expand keyword breadth.",
        deliverables: [
          "Monthly Keyword Movement Dashboard",
          "Organic Traffic & Conversion Growth Reports",
        ],
      },
    ],
  },

  "local-seo-gmb": {
    serviceId: "local-seo-gmb",
    subServices: [
      {
        id: "gmb-100-optimization",
        title: "Google Business Profile 100% Optimization",
        description:
          "Complete optimization of categories, secondary services, business hours, geo-tagged photo uploads, and keyword-rich bio description.",
        badge: "Part 1: Profile Perfection",
        deliverables: [
          "Primary & Secondary Category Optimization",
          "Keyword-Optimized Business Description & Service Menus",
          "High-Res Geo-Tagged Photo Upload Schedule",
        ],
        keyBenefit: "Maximizes visibility in Google Maps 3-Pack search results.",
      },
      {
        id: "nap-citation-cleanup",
        title: "Local NAP Citations & Directory Consistency",
        description:
          "Building and verifying consistent Name, Address, and Phone (NAP) citations across top directories (Justdial, IndiaMART, Sulekha, Yelp).",
        badge: "Part 2: Citations",
        deliverables: [
          "Audit & Cleanup of Inconsistent NAP Listings",
          "50+ High-Authority Local Business Directory Submissions",
          "Local Schema Markup (LocalBusiness JSON-LD)",
        ],
        keyBenefit: "Eliminates ranking confusion and cements local geographical trust.",
      },
      {
        id: "geo-landing-pages",
        title: "Geo-Targeted City & Neighborhood Pages",
        description:
          'Creating hyper-localized website landing pages optimized for specific neighborhoods, cities, and "near me" service keywords.',
        badge: "Part 3: Geo Pages",
        deliverables: [
          "Dedicated City / Area Service Landing Pages",
          "Embedded Google Maps, Driving Directions & Local Testimonials",
          "Localized Schema Markup with Geo-Coordinates",
        ],
        keyBenefit: "Ranks on Page 1 for local searches across multiple nearby territories.",
      },
      {
        id: "review-velocity-automation",
        title: "Automated 5-Star Review Generation Funnel",
        description:
          "Automated WhatsApp and SMS review request system that prompts happy clients to leave 5-star Google reviews effortlessly.",
        badge: "Part 4: Review Acceleration",
        deliverables: [
          "Automated Post-Service Review Request (WhatsApp/SMS)",
          "Custom Direct Google Review Shortlink & QR Code",
          "Professional Review Response Protocol",
        ],
        keyBenefit: "Surpasses local competitors in total 5-star review volume and trust.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Google Profile & Local Grid Audit",
        duration: "Days 1 - 3",
        description:
          "Run geo-grid rank tracking to visualize your ranking radius in Google Maps across 25+ surrounding coordinate points.",
        deliverables: [
          "Local Geo-Grid Rank Baseline Report",
          "Google Business Profile Audit Checklist",
        ],
      },
      {
        stepNumber: "Step 02",
        title: "Profile Optimization & Category Realignment",
        duration: "Days 4 - 7",
        description:
          "Optimize primary/secondary categories, write keyword-rich service descriptions, and upload geo-tagged photo sets.",
        deliverables: [
          "100% Completed Google Business Profile",
          "Geo-Tagged Photo Library Uploaded",
        ],
      },
      {
        stepNumber: "Step 03",
        title: "NAP Citation Audit & Directory Building",
        duration: "Days 8 - 15",
        description:
          "Claim, correct, and submit your business details across 50+ authoritative national and local directories.",
        deliverables: ["50+ Verified Local Citations", "NAP Consistency Verification Report"],
      },
      {
        stepNumber: "Step 04",
        title: "Geo Landing Pages & Local Schema",
        duration: "Days 16 - 22",
        description:
          "Publish dedicated city/area landing pages on your website with embedded Google Maps and LocalBusiness schema markup.",
        deliverables: ["Live Geo-Targeted Area Landing Pages", "LocalBusiness JSON-LD Schema"],
      },
      {
        stepNumber: "Step 05",
        title: "Review Funnel Launch & Radius Expansion",
        duration: "Day 23 & Ongoing",
        description:
          "Launch the automated WhatsApp review request funnel and track ranking radius expansion every 14 days.",
        deliverables: ["Automated Review Request Funnel", "Bi-Weekly Geo-Grid Expansion Reports"],
      },
    ],
  },

  "technical-seo-audit": {
    serviceId: "technical-seo-audit",
    subServices: [
      {
        id: "core-web-vitals-audit",
        title: "Core Web Vitals & Speed Remediation",
        description:
          "Diagnosing and resolving Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) issues.",
        badge: "Part 1: Core Web Vitals",
        deliverables: [
          "LCP, INP & CLS Deep-Dive Remediation",
          "Critical CSS Inlining & Unused JS Tree-Shaking",
          "Browser Caching & CDN Edge Rule Configuration",
        ],
        keyBenefit: "Passes Google Core Web Vitals assessment on both mobile and desktop.",
      },
      {
        id: "crawl-budget-indexation",
        title: "Crawl Budget, Robots.txt & XML Sitemaps",
        description:
          "Eliminating crawl errors, resolving redirect chains, optimizing robots.txt directives, and submitting clean dynamic XML sitemaps.",
        badge: "Part 2: Crawlability",
        deliverables: [
          "Robots.txt & XML Sitemap Configuration",
          "Elimination of 404s, 500s & Redirect Chains",
          "Canonicalization & Duplicate Content Resolution",
        ],
        keyBenefit: "Ensures Googlebot indexes newly published pages within hours.",
      },
      {
        id: "structured-json-ld-data",
        title: "Advanced JSON-LD Structured Data Schema",
        description:
          "Implementing rich schema markup (Organization, Product, FAQ, Article, Breadcrumb, HowTo) for rich Google search snippets.",
        badge: "Part 3: Schema & Rich Results",
        deliverables: [
          "Custom Nested JSON-LD Schema Graph",
          "FAQ & Product Rich Snippet Implementation",
          "Schema Validator & Google Rich Results Verification",
        ],
        keyBenefit: "Drives higher click-through rates with rich stars, prices, and FAQs on SERPs.",
      },
      {
        id: "ai-search-geo-optimization",
        title: "Generative Engine Optimization (GEO) & AI Search",
        description:
          "Structuring your brand data and entities so ChatGPT, Perplexity, Claude, and Google AI Overviews cite your company as the authoritative answer.",
        badge: "Part 4: AI Search / GEO",
        deliverables: [
          "Wikidata Entity Structuring & Knowledge Graph Seeding",
          "Perplexity & ChatGPT Citation Optimization",
          "Conversational AI Prompt Testing & Brand Citation Verification",
        ],
        keyBenefit: "Guarantees brand recommendation when prospective buyers ask AI assistants.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Full-Site Screaming Frog Crawl & Diagnostics",
        duration: "Days 1 - 3",
        description:
          "Crawl all website URLs, extract broken links, inspect canonical tags, and audit Core Web Vitals scores.",
        deliverables: ["Comprehensive Technical Crawl Audit", "Priority Technical Bug Tracker"],
      },
      {
        stepNumber: "Step 02",
        title: "Crawlability & Redirect Remediation",
        duration: "Days 4 - 7",
        description:
          "Fix 404 errors, eliminate 301 redirect hops, clean robots.txt directives, and configure dynamic XML sitemaps.",
        deliverables: [
          "Zero 404 Errors & Clean Redirect Map",
          "Optimized Robots.txt & XML Sitemaps",
        ],
      },
      {
        stepNumber: "Step 03",
        title: "Speed & Core Web Vitals Code Refactor",
        duration: "Days 8 - 11",
        description:
          "Minify JavaScript bundles, convert images to WebP, inline critical CSS, and enable Gzip/Brotli compression.",
        deliverables: ["95+ Google Lighthouse Score", "Passing Core Web Vitals Assessment"],
      },
      {
        stepNumber: "Step 04",
        title: "Structured JSON-LD Schema Deployment",
        duration: "Days 12 - 13",
        description:
          "Inject custom JSON-LD schema for organization, products, services, FAQs, and verify in Google Rich Results tool.",
        deliverables: ["Valid JSON-LD Schema Graph", "Rich Results Test Passing Verification"],
      },
      {
        stepNumber: "Step 05",
        title: "AI Search / GEO Optimization & Monitoring",
        duration: "Days 14 & Ongoing",
        description:
          "Seed knowledge graph entities, simulate Perplexity/ChatGPT citations, and monitor weekly crawl health.",
        deliverables: [
          "Knowledge Graph & GEO Optimization Report",
          "Ongoing Technical Health Monitoring",
        ],
      },
    ],
  },

  // ==========================================
  // 07. MOBILE APP DEVELOPMENT
  // ==========================================
  "cross-platform-apps": {
    serviceId: "cross-platform-apps",
    subServices: [
      {
        id: "react-native-flutter-ui",
        title: "Native-Performance React Native & Flutter UI",
        description:
          "Smooth 60fps mobile interfaces with native gesture handling, responsive layouts for iPhone and Android, and fluid animations.",
        badge: "Part 1: Mobile UI/UX",
        deliverables: [
          "React Native / Flutter Cross-Platform Codebase",
          "Fluid 60fps Native Gesture & Transition Animations",
          "Dark Mode & Light Mode Theme Architecture",
        ],
        keyBenefit:
          "One unified codebase delivering flawless native performance on both iOS and Android.",
      },
      {
        id: "biometrics-offline-sync",
        title: "Biometric Security & Offline Storage Sync",
        description:
          "FaceID / Fingerprint biometric authentication, secure Keychain storage, and SQLite/WatermelonDB offline data caching.",
        badge: "Part 2: Security & Offline",
        deliverables: [
          "FaceID / TouchID Biometric Login Gateway",
          "Encrypted Secure Keychain Storage",
          "Offline Data Caching & Background Syncing Engine",
        ],
        keyBenefit:
          "Instant app launch and continuous usability even without internet connectivity.",
      },
      {
        id: "push-notifications-fcm",
        title: "Firebase Push Notifications & Deep Linking",
        description:
          "Firebase Cloud Messaging (FCM) integration, automated push triggers for order updates/promotions, and universal deep linking.",
        badge: "Part 3: Push & Deep Linking",
        deliverables: [
          "Firebase Cloud Messaging (FCM) & APNs Setup",
          "Universal Deep Linking (iOS Universal Links / Android App Links)",
          "Segmented Push Notification Campaign Triggers",
        ],
        keyBenefit: "Drives high daily active user retention and direct push engagement.",
      },
      {
        id: "in-app-payments-subscriptions",
        title: "In-App Purchases, Subscriptions & Gateways",
        description:
          "Seamless integration of Apple In-App Purchases, Google Play Billing, Stripe/Razorpay SDKs, and subscription management.",
        badge: "Part 4: In-App Purchases",
        deliverables: [
          "Apple StoreKit 2 & Google Play Billing Setup",
          "Razorpay / Stripe Mobile SDK Integration",
          "Subscription Paywalls & Receipt Validation Server",
        ],
        keyBenefit: "Monetizes your mobile user base with effortless in-app payments.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Mobile Architecture & UI Wireframing",
        duration: "Days 1 - 5",
        description:
          "Define mobile user flows, screen transitions, state management architecture (Redux/Zustand), and design Figma wireframes.",
        deliverables: [
          "Mobile User Flow Wireframes",
          "System Architecture & State Management Blueprint",
        ],
      },
      {
        stepNumber: "Step 02",
        title: "Frontend Component Development",
        duration: "Days 6 - 18",
        description:
          "Code the native React Native / Flutter screens, gesture animations, navigation stacks, and custom UI components.",
        deliverables: ["Interactive Mobile App UI Screens", "Responsive Component Library"],
      },
      {
        stepNumber: "Step 03",
        title: "API Integration, Auth & Offline Caching",
        duration: "Days 19 - 28",
        description:
          "Connect REST/GraphQL APIs, implement FaceID authentication, offline database sync, and push notifications.",
        deliverables: [
          "Working API & Backend Integration",
          "Push Notification & Offline Sync System",
        ],
      },
      {
        stepNumber: "Step 04",
        title: "Payments, Subscriptions & Security Audit",
        duration: "Days 29 - 35",
        description:
          "Integrate in-app purchases, payment gateways, run security vulnerability scans, and conduct cross-device testing.",
        deliverables: [
          "Working In-App Purchases & Payments",
          "Mobile Security & Performance Audit",
        ],
      },
      {
        stepNumber: "Step 05",
        title: "App Store & Google Play Publishing",
        duration: "Days 36 - 40",
        description:
          "Prepare App Store Connect & Google Play Console submissions, write metadata, and manage review approval.",
        deliverables: [
          "Published Apps on Apple App Store & Google Play Store",
          "Post-Launch Monitoring & Bug-Fix Support",
        ],
      },
    ],
  },

  "custom-app-architecture": {
    serviceId: "custom-app-architecture",
    subServices: [
      {
        id: "microservices-rest-graphql",
        title: "Low-Latency REST & GraphQL API Infrastructure",
        description:
          "Engineered backend microservices with Node.js/Express and Go, designed for sub-100ms response times under heavy mobile concurrency.",
        badge: "Part 1: API Architecture",
        deliverables: [
          "Low-Latency RESTful & GraphQL API Endpoints",
          "Comprehensive Swagger / Postman API Documentation",
          "Redis Caching Layer for Lightning Fast Queries",
        ],
        keyBenefit: "Guarantees instantaneous data loading inside your mobile application.",
      },
      {
        id: "websockets-realtime-engine",
        title: "Real-Time WebSockets & Live Messaging",
        description:
          "Real-time WebSocket infrastructure for live chat, instant driver/courier GPS tracking, and real-time collaboration.",
        badge: "Part 2: Real-Time Engine",
        deliverables: [
          "Socket.io / WebSocket Server Infrastructure",
          "Live Location Tracking & Pub/Sub Channels",
          "Presence Detection & Read Receipts Engine",
        ],
        keyBenefit: "Enables interactive live features that keep users glued to the app.",
      },
      {
        id: "cloud-autoscaling-docker",
        title: "Auto-Scaling Cloud Infrastructure on AWS / GCP",
        description:
          "Docker containerized deployment with Kubernetes / AWS ECS, automated load balancing, and multi-region database replication.",
        badge: "Part 3: Cloud Infrastructure",
        deliverables: [
          "Docker Containerization & Kubernetes / ECS Clusters",
          "Application Load Balancer & SSL Termination",
          "Automated Database Backups & Multi-Region Read Replicas",
        ],
        keyBenefit: "Auto-scales smoothly from 1,000 to 1,000,000 active users without crashing.",
      },
      {
        id: "token-security-rate-limiting",
        title: "JWT Token Security, Rate Limiting & DDOS Defense",
        description:
          "Enterprise API security with OAuth2 JWT tokens, Redis rate-limiting, request signature verification, and Cloudflare DDOS protection.",
        badge: "Part 4: Security & Compliance",
        deliverables: [
          "OAuth2 / JWT Token Refresh Architecture",
          "Redis-Backed Rate Limiting & Anti-Scraping Shields",
          "Cloudflare WAF & DDOS Mitigation Rules",
        ],
        keyBenefit: "Protects customer data and shields your servers from malicious attacks.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Data Modeling & API Contract Design",
        duration: "Days 1 - 4",
        description:
          "Design database entity relationships, schema migrations, and write OpenAPI/Swagger contracts for mobile team alignment.",
        deliverables: ["Entity Relationship Diagram (ERD)", "Swagger API Contract Specifications"],
      },
      {
        stepNumber: "Step 02",
        title: "Backend Microservices & Database Development",
        duration: "Days 5 - 15",
        description:
          "Build backend services, configure PostgreSQL/MongoDB databases, and set up Redis caching layers.",
        deliverables: ["Core Backend Microservices", "High-Speed Database Queries & Caching"],
      },
      {
        stepNumber: "Step 03",
        title: "Real-Time WebSockets & Messaging Engine",
        duration: "Days 16 - 22",
        description:
          "Implement real-time WebSocket communication channels, push notification triggers, and location sync pipelines.",
        deliverables: ["Real-Time WebSocket Engine", "Push Notification Event Handlers"],
      },
      {
        stepNumber: "Step 04",
        title: "Cloud Container Deployment & CI/CD Pipelines",
        duration: "Days 23 - 28",
        description:
          "Configure Docker containers, AWS ECS / GCP cloud servers, automated CI/CD pipelines, and SSL load balancers.",
        deliverables: ["Automated CI/CD Deployment Pipeline", "Cloud Load Balancer Configuration"],
      },
      {
        stepNumber: "Step 05",
        title: "Concurrency Stress Testing & Live Deployment",
        duration: "Days 29 - 32",
        description:
          "Run artillery load tests with 10,000+ simulated concurrent users, optimize database queries, and go live.",
        deliverables: [
          "Load & Stress Test Benchmark Report",
          "Production Cloud Infrastructure Handover",
        ],
      },
    ],
  },

  "app-store-optimization": {
    serviceId: "app-store-optimization",
    subServices: [
      {
        id: "aso-keyword-metadata",
        title: "App Store & Google Play Keyword Indexing",
        description:
          "Keyword research specifically for App Store Connect and Google Play Console algorithms, optimizing app titles, subtitles, and keyword fields.",
        badge: "Part 1: Keyword Optimization",
        deliverables: [
          "App Title, Subtitle & Promo Text Optimization",
          "App Store 100-Character Keyword Field Optimization",
          "Google Play Long Description Semantic Keyword Structuring",
        ],
        keyBenefit: "Ranks higher in app store search results for high-intent queries.",
      },
      {
        id: "screenshot-preview-design",
        title: "High-Converting Screenshot & Video Preview Sets",
        description:
          "Designing custom, conversion-focused App Store screenshot sets and video previews showcasing your app’s most compelling features.",
        badge: "Part 2: Visual Assets",
        deliverables: [
          'Custom App Store Screenshot Sets (6.7", 6.5", 5.5", iPad)',
          "Google Play Feature Graphic & Device Mockups",
          "High-CTR App Icon A/B Testing Variations",
        ],
        keyBenefit: "Increases app page impression-to-install conversion rate by 30% - 50%.",
      },
      {
        id: "store-compliance-review",
        title: "Apple & Google Developer Compliance Review",
        description:
          "Reviewing Apple App Store Review Guidelines and Google Play Developer Policies to ensure immediate 1st-submission approval.",
        badge: "Part 3: Store Compliance",
        deliverables: [
          "App Privacy Nutrition Labels & Data Safety Forms",
          "In-App Purchase & Account Deletion Compliance Verification",
          "TestFlight & Google Internal Testing Track Setup",
        ],
        keyBenefit: "Avoids frustrating App Store rejections and delayed launch dates.",
      },
      {
        id: "rating-velocity-strategy",
        title: "In-App Rating Prompts & Review Strategy",
        description:
          "Integrating Apple SKStoreReviewController and Google In-App Review API at optimal user moments to generate high volume 5-star ratings.",
        badge: "Part 4: Review Velocity",
        deliverables: [
          'In-App Review Prompt Integration at "Happy Moments"',
          "Negative Feedback Deflection to Support Email",
          "Review Monitoring & Developer Response Strategy",
        ],
        keyBenefit:
          "Builds an authoritative 4.7+ star app rating that drives continuous downloads.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "ASO Competitor Mining & Keyword Research",
        duration: "Days 1 - 2",
        description:
          "Analyze top competing apps in your category, uncover high-volume search queries, and plan metadata phrasing.",
        deliverables: ["ASO Keyword Matrix & Ranking Targets", "Competitor Screenshot Teardown"],
      },
      {
        stepNumber: "Step 02",
        title: "App Screenshot & Icon Visual Design",
        duration: "Days 3 - 5",
        description:
          "Design all required screenshot resolutions for iPhone, iPad, and Android with persuasive value-proposition overlays.",
        deliverables: [
          "Full Set of App Store & Play Store Screenshots",
          "Optimized App Icon Variations",
        ],
      },
      {
        stepNumber: "Step 03",
        title: "Developer Metadata & Privacy Submissions",
        duration: "Days 6 - 7",
        description:
          "Draft title, subtitle, keyword field, description, and fill out App Privacy Nutrition Labels and Google Data Safety forms.",
        deliverables: [
          "Complete App Store Connect Metadata",
          "Google Play Console Data Safety Form",
        ],
      },
      {
        stepNumber: "Step 04",
        title: "Build Submission & Approval Management",
        duration: "Days 8 - 10",
        description:
          "Submit the binary build for App Store and Google Play review, coordinate with reviewers, and handle inquiries.",
        deliverables: ["100% App Store & Google Play Approval", "Live Store Download Links"],
      },
      {
        stepNumber: "Step 05",
        title: "Post-Launch Download & Review Monitoring",
        duration: "Ongoing Monthly Cadence",
        description:
          "Track keyword ranking movements, A/B test screenshot sets with App Store Custom Product Pages, and optimize conversion.",
        deliverables: ["Monthly Organic Download Reports", "A/B Screenshot Experiment Analytics"],
      },
    ],
  },

  // ==========================================
  // 08. UI/UX DESIGN
  // ==========================================
  "figma-prototyping": {
    serviceId: "figma-prototyping",
    subServices: [
      {
        id: "user-journey-wireframes",
        title: "Information Architecture & Low-Fidelity Wireframes",
        description:
          "Mapping out user journeys, site hierarchies, structural wireframes, and edge-case flowcharts before visual styling.",
        badge: "Part 1: Architecture",
        deliverables: [
          "User Flowcharts & Information Architecture Maps",
          "Low-Fidelity Structural Wireframes",
          "Key User Journey Scenario Blueprints",
        ],
        keyBenefit: "Validates usability and structural layout early without expensive redesigns.",
      },
      {
        id: "high-fidelity-ui-design",
        title: "High-Fidelity Visual Design & Micro-Interactions",
        description:
          "Pixel-perfect UI screens designed with mathematical typographic scales, refined color palettes, and micro-interactions.",
        badge: "Part 2: Visual Interface",
        deliverables: [
          "High-Fidelity Desktop & Mobile Screen Layouts",
          "Custom Vector Icons & Visual Illustrations",
          "Micro-Interaction & State Transitions (Hover, Active, Error)",
        ],
        keyBenefit: "Elevates perceived brand value with polished, luxury digital aesthetics.",
      },
      {
        id: "interactive-clickable-prototype",
        title: "Interactive Clickable Figma Prototype",
        description:
          "Comprehensive clickable Figma prototypes with realistic page transitions, modal popups, and interactive form inputs.",
        badge: "Part 3: Interactive Prototype",
        deliverables: [
          "Fully Interactive Clickable Figma Prototype",
          "Mobile & Desktop Interactive Preview Links",
          "User Testing Scenario Scripts",
        ],
        keyBenefit: "Demonstrates exact product experience to investors and stakeholders.",
      },
      {
        id: "developer-handoff-tokens",
        title: "Developer Handoff Matrix & Design Tokens",
        description:
          "Clean developer inspection handoff with auto-layout 5.0 properties, exported SVG assets, CSS variables, and design tokens.",
        badge: "Part 4: Developer Handoff",
        deliverables: [
          "Complete Figma Auto-Layout Developer Specs",
          "Exported Vector Icon & Asset Pack (SVG/PNG)",
          "CSS Variables & Design Token Dictionary",
        ],
        keyBenefit: "Enables developers to code the exact design 50% faster with zero guesswork.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "User Research & Problem Definition",
        duration: "Days 1 - 3",
        description:
          "Interview stakeholders, analyze target customer personas, map core conversion goals, and review competitor interfaces.",
        deliverables: ["UX Research Brief", "User Persona & Journey Maps"],
      },
      {
        stepNumber: "Step 02",
        title: "Information Architecture & Wireframing",
        duration: "Days 4 - 7",
        description:
          "Draft structural low-fidelity wireframes exploring layout options, navigation hierarchy, and content placement.",
        deliverables: ["Complete Low-Fidelity Wireframes", "Information Architecture Diagram"],
      },
      {
        stepNumber: "Step 03",
        title: "High-Fidelity Visual UI Design",
        duration: "Days 8 - 14",
        description:
          "Design all high-fidelity screens, establish luxury color and typography styles, and create custom UI component states.",
        deliverables: [
          "High-Fidelity Mobile & Desktop Screens",
          "Visual Style Guide & Component Tokens",
        ],
      },
      {
        stepNumber: "Step 04",
        title: "Interactive Prototyping & Micro-Interactions",
        duration: "Days 15 - 18",
        description:
          "Link all screens into a seamless clickable Figma prototype with realistic smart-animate transitions and modals.",
        deliverables: ["Clickable Interactive Figma Prototype", "Usability Testing Feedback Notes"],
      },
      {
        stepNumber: "Step 05",
        title: "Design System Documentation & Developer Hand-off",
        duration: "Days 19 - 20",
        description:
          "Organize Figma files with auto-layout specs, export all vector assets, and conduct developer walk-through session.",
        deliverables: [
          "Developer-Ready Figma Master File",
          "Asset Export Kit & Token Documentation",
        ],
      },
    ],
  },

  "mobile-web-ui-ux": {
    serviceId: "mobile-web-ui-ux",
    subServices: [
      {
        id: "conversion-centered-ux",
        title: "Conversion-Centered Interface Architecture",
        description:
          "Layouts engineered around cognitive psychology, Fitts’s Law, visual hierarchy, and frictionless user conversion pathways.",
        badge: "Part 1: Conversion Science",
        deliverables: [
          "Conversion-Focused Layout Blueprints",
          "Friction-Free Checkout & Signup Flows",
          "Visual Hierarchy & Visual Anchor Architecture",
        ],
        keyBenefit: "Maximizes customer engagement and reduces drop-off rates.",
      },
      {
        id: "saas-dashboard-data-viz",
        title: "SaaS Dashboards & Data Visualization UX",
        description:
          "Intuitive data visualization interfaces with responsive tables, modular KPI widgets, interactive charts, and filter drawers.",
        badge: "Part 2: Dashboard UI",
        deliverables: [
          "Complex Data Table & Filter Drawer Layouts",
          "Interactive Chart & Metric Card Component Sets",
          "Dark Mode & High-Contrast Visual Themes",
        ],
        keyBenefit: "Turns complex data into clear, intuitive insights for end users.",
      },
      {
        id: "responsive-viewport-adaptation",
        title: "Responsive Multi-Device Viewport Adaptation",
        description:
          "Seamless responsive adaptations tailored specifically for mobile phones, tablets, laptops, ultrawide screens, and touchscreens.",
        badge: "Part 3: Responsive Design",
        deliverables: [
          "Mobile (390px), Tablet (768px), Desktop (1440px), 4K (2560px) Layouts",
          "Touch-Optimized 44px+ Hit Targets & Gestures",
          "Adaptive Breakpoint & Grid System Specs",
        ],
        keyBenefit: "Flawless visual experience regardless of screen size or device type.",
      },
      {
        id: "accessibility-wcag-audit",
        title: "Accessibility (WCAG 2.1 AA) Compliance Audit",
        description:
          "Auditing color contrast ratios, screen-reader semantic landmarks, keyboard tab navigation, and focus state indicators.",
        badge: "Part 4: Accessibility",
        deliverables: [
          "WCAG 2.1 AA Compliance Verification Report",
          "Color Contrast & Typography Legibility Specs",
          "Keyboard Navigation & Focus State Mapping",
        ],
        keyBenefit: "Ensures full legal compliance and effortless usability for all users.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Product Scope & UX Heuristic Audit",
        duration: "Days 1 - 4",
        description:
          "Audit existing digital interfaces, identify cognitive friction points, and establish UX conversion benchmarks.",
        deliverables: ["UX Heuristic Audit Report", "Conversion Friction Analysis"],
      },
      {
        stepNumber: "Step 02",
        title: "Core Workflow & Wireframe Sprints",
        duration: "Days 5 - 10",
        description:
          "Design wireframes for core user workflows: onboarding, dashboards, data tables, settings, and checkout.",
        deliverables: ["Complete Core Flow Wireframes", "Interactive Navigation Flowchart"],
      },
      {
        stepNumber: "Step 03",
        title: "High-Fidelity Interface Design Sprints",
        duration: "Days 11 - 20",
        description:
          "Craft all high-fidelity screens, responsive mobile adaptations, data visualizer widgets, and dark mode variations.",
        deliverables: ["Complete High-Fidelity UI Screens", "Responsive Mobile & Tablet Layouts"],
      },
      {
        stepNumber: "Step 04",
        title: "Accessibility & Usability Validation",
        duration: "Days 21 - 24",
        description:
          "Run WCAG 2.1 AA color contrast audits, conduct usability walk-throughs with representative users, and refine layouts.",
        deliverables: ["WCAG 2.1 AA Compliance Report", "Usability Refinement Changelog"],
      },
      {
        stepNumber: "Step 05",
        title: "Figma Master Files & Engineering Handover",
        duration: "Days 25 - 28",
        description:
          "Deliver the organized Figma master project, auto-layout tokens, exported vector assets, and developer guidance.",
        deliverables: ["Production Figma Master Files", "Design Handoff Walkthrough Video"],
      },
    ],
  },

  "design-systems-tokens": {
    serviceId: "design-systems-tokens",
    subServices: [
      {
        id: "atomic-component-library",
        title: "Atomic Component Library with Variants & Auto-Layout",
        description:
          "Comprehensive Figma component library (Buttons, Modals, Forms, Navigation, Badges, Tabs) with all variant states.",
        badge: "Part 1: Atomic Components",
        deliverables: [
          "Atomic Component Hierarchy (Atoms, Molecules, Organisms)",
          "Complete Component Variant States (Default, Hover, Active, Disabled)",
          "Auto-Layout 5.0 Responsive Component Architecture",
        ],
        keyBenefit: "Speeds up future product design and feature creation by up to 50%.",
      },
      {
        id: "design-token-dictionary",
        title: "Design Tokens (Colors, Typography, Spacing, Shadows)",
        description:
          "Mathematical design token dictionary defining semantic colors, responsive type scales, spacing steps, and elevation shadows.",
        badge: "Part 2: Design Tokens",
        deliverables: [
          "Semantic Color Tokens (Primary, Neutral, Surface, State)",
          "Mathematical Typography Scale & Font Pairing Kit",
          "Spacing & Elevation Shadow Token Dictionary (JSON / CSS)",
        ],
        keyBenefit: "Enables 1-click global theme updates across web and mobile codebases.",
      },
      {
        id: "storybook-code-alignment",
        title: "Storybook & React Component Alignment",
        description:
          "Aligning Figma components directly with React/Tailwind code components in Storybook for 1:1 design-to-code parity.",
        badge: "Part 3: Code Parity",
        deliverables: [
          "Storybook React Component Catalog Specs",
          "Tailwind Config Token Mapping",
          "Design-to-Code Prop & Interface Definitions",
        ],
        keyBenefit:
          "Eliminates visual discrepancies between design files and live production code.",
      },
      {
        id: "governance-documentation",
        title: "Design System Governance & Usage Guidelines",
        description:
          "Comprehensive documentation explaining when to use each component, accessibility rules, and contribution workflows.",
        badge: "Part 4: Documentation",
        deliverables: [
          "Zeroheight / Figma Design System Documentation Hub",
          "Component Do’s and Don’ts Usage Guidelines",
          "Version Control & Contribution Governance Rules",
        ],
        keyBenefit: "Maintains long-term design consistency across growing product teams.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "UI Inventory & Component Audit",
        duration: "Days 1 - 4",
        description:
          "Audit all existing product screens to catalog inconsistencies in colors, typography, buttons, and form inputs.",
        deliverables: ["UI Component Inventory Audit", "Design System Architecture Plan"],
      },
      {
        stepNumber: "Step 02",
        title: "Design Token Foundation Architecture",
        duration: "Days 5 - 8",
        description:
          "Establish the core token scales: color palettes, typography scales, spacing grids, borders, and elevation shadows.",
        deliverables: ["Master Design Token Dictionary (JSON)", "Tailwind CSS Config Mapping"],
      },
      {
        stepNumber: "Step 03",
        title: "Atomic Component Construction in Figma",
        duration: "Days 9 - 18",
        description:
          "Build reusable Figma components with auto-layout, boolean props, and variant states for all UI elements.",
        deliverables: [
          "Complete Reusable Component Library",
          "Interactive Form & Navigation Components",
        ],
      },
      {
        stepNumber: "Step 04",
        title: "Documentation & Storybook Alignment",
        duration: "Days 19 - 24",
        description:
          "Write comprehensive component usage guidelines, accessibility notes, and align props with engineering teams.",
        deliverables: ["Online Design System Documentation Hub", "Storybook Integration Specs"],
      },
      {
        stepNumber: "Step 05",
        title: "Team Workshop & System Handover",
        duration: "Days 25 - 28",
        description:
          "Host interactive training sessions for designers and developers on how to leverage the new design system effectively.",
        deliverables: ["Recorded Team Training Workshops", "Live Design System Master Library"],
      },
    ],
  },

  // ==========================================
  // 09. GRAPHIC DESIGN
  // ==========================================
  "brand-identity-logo": {
    serviceId: "brand-identity-logo",
    subServices: [
      {
        id: "bespoke-logo-mark",
        title: "Bespoke Vector Logo Design & Monogram",
        description:
          "Custom handcrafted logo mark, monogram, and emblem engineered with mathematical geometric balance and timeless aesthetic appeal.",
        badge: "Part 1: Logo Creation",
        deliverables: [
          "Multiple Unique Original Bespoke Concepts",
          "Primary, Secondary, Monogram & Favicon Variations",
          "Full Vector Master Kit (AI, EPS, SVG, PDF, PNG)",
        ],
        keyBenefit: "Creates an iconic visual anchor that commands prestige and authority.",
      },
      {
        id: "brand-color-typography",
        title: "Color Psychology & Typographic Hierarchy",
        description:
          "Formulating primary/secondary brand color palettes with Pantone references and licensed luxury typography pairings.",
        badge: "Part 2: Color & Type",
        deliverables: [
          "Pantone, CMYK, RGB & HEX Color Palette Matrix",
          "Display & Body Typography Hierarchy Guidelines",
          "Dark, Light & Monochrome Lockup Formats",
        ],
        keyBenefit: "Ensures identical, rich color reproduction across print and digital screens.",
      },
      {
        id: "brand-guidelines-manual",
        title: "Comprehensive 40+ Page Brand Identity Manual",
        description:
          "Detailed brand manual defining clear logo clearance zones, incorrect usage examples, brand voice, and iconography rules.",
        badge: "Part 3: Brand Manual",
        deliverables: [
          "40+ Page Luxury Brand Guidelines PDF Manual",
          "Logo Clear Space & Minimum Sizing Rules",
          "Brand Voice, Photography & Tone of Voice Directives",
        ],
        keyBenefit: "Protects brand integrity across third-party partners and media agencies.",
      },
      {
        id: "corporate-stationery-suite",
        title: "Corporate Stationery & Social Branding Suite",
        description:
          "Print-ready stationery designs including luxury business cards, letterheads, presentation folders, envelopes, and social avatar kits.",
        badge: "Part 4: Stationery & Assets",
        deliverables: [
          "Luxury Business Cards with Emboss/Foil Specs",
          "Corporate Letterheads & Invoicing Templates (Word/Docs)",
          "Social Media Profile Avatars & Banner Covers",
        ],
        keyBenefit: "Delivers immediate corporate polish for all client-facing interactions.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Brand Discovery, Archetype & Moodboarding",
        duration: "Days 1 - 3",
        description:
          "Explore brand history, core values, market positioning, target audience demographics, and curate visual moodboards.",
        deliverables: ["Brand Discovery Brief", "Visual Moodboard Direction Options"],
      },
      {
        stepNumber: "Step 02",
        title: "Hand-Sketched Ideation & Vector Drafting",
        duration: "Days 4 - 8",
        description:
          "Sketch dozens of original logo concepts and draft top candidates into precise vector geometry in Adobe Illustrator.",
        deliverables: ["3 Distinct Master Logo Concepts Presented in Real-World Mockups"],
      },
      {
        stepNumber: "Step 03",
        title: "Refinement, Color Palette & Typography",
        duration: "Days 9 - 12",
        description:
          "Refine chosen logo concept, test monochrome versions, establish Pantone color codes, and pair typography.",
        deliverables: ["Finalized Master Logo System", "Color Palette & Typography Pairings"],
      },
      {
        stepNumber: "Step 04",
        title: "Brand Manual & Stationery Production",
        duration: "Days 13 - 17",
        description:
          "Compile the 40+ page comprehensive brand identity manual and design print-ready stationery assets.",
        deliverables: [
          "40+ Page Brand Guidelines Manual",
          "Print-Ready Stationery PDF & Master Vector Files",
        ],
      },
      {
        stepNumber: "Step 05",
        title: "Master Vector Export Kit & Handover",
        duration: "Days 18 - 20",
        description:
          "Export all logo variations into organized folders across all file formats (AI, EPS, SVG, PDF, PNG, Favicon) with full IP ownership.",
        deliverables: [
          "Organized Master Brand Asset Archive",
          "100% Intellectual Property Ownership Certificate",
        ],
      },
    ],
  },

  "marketing-collateral-print": {
    serviceId: "marketing-collateral-print",
    subServices: [
      {
        id: "pitch-decks-presentations",
        title: "Investor Pitch Decks & Sales Presentations",
        description:
          "High-impact pitch decks and sales keynote presentations with custom infographic data layouts and persuasive narrative structure.",
        badge: "Part 1: Pitch Decks",
        deliverables: [
          "Custom PowerPoint / Keynote / Google Slides Master Deck",
          "Infographic Charts & Metric Visualizations",
          "Clickable PDF Interactive Presentation",
        ],
        keyBenefit: "Commands investor respect and closes large enterprise sales deals.",
      },
      {
        id: "corporate-brochures-catalogs",
        title: "Corporate Brochures, Annual Reports & Catalogs",
        description:
          "Print-ready corporate brochures, product catalogs, bi-fold/tri-fold flyers, and annual reports styled with luxury editorial layout.",
        badge: "Part 2: Editorial & Catalogs",
        deliverables: [
          "Multi-Page Corporate Brochure / Product Catalog",
          "Print-Ready CMYK Files with Bleed & Crop Marks",
          "Interactive Digital Flipbook / PDF for Web Downloads",
        ],
        keyBenefit: "Showcases your full product and service catalog with premium tactile polish.",
      },
      {
        id: "exhibition-booth-standees",
        title: "Exhibition Booths, Backdrops & Standees",
        description:
          "Large-scale trade show exhibition booths, roll-up standees, backdrop banners, and conference podium graphics.",
        badge: "Part 3: Trade Show Graphics",
        deliverables: [
          "High-Resolution Vector Exhibition Backdrops (8ft x 10ft+)",
          "Roll-up Pull Banner Standees & Step-and-Repeat Graphics",
          "Print-Ready Large Format Vector Outputs",
        ],
        keyBenefit: "Attracts maximum footfall and attention at industry trade expos.",
      },
      {
        id: "packaging-label-design",
        title: "Luxury Product Packaging & Label Design",
        description:
          "Custom product packaging boxes, bottles, pouches, and label designs with exact dieline specifications and foil/UV print guides.",
        badge: "Part 4: Packaging",
        deliverables: [
          "Custom Box Dieline Architecture & Label Graphics",
          "Spot UV, Foil Stamping & Emboss Print Production Layers",
          "3D Photorealistic Packaging Renderings for Marketing",
        ],
        keyBenefit: "Transforms retail products into coveted luxury items on store shelves.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Content Structure & Narrative Flow Mapping",
        duration: "Days 1 - 2",
        description:
          "Organize copy, outline slide/page narrative flow, and establish dimensional dielines/specifications.",
        deliverables: ["Collateral Content Outline", "Dieline & Dimension Specifications"],
      },
      {
        stepNumber: "Step 02",
        title: "Visual Layout & Typographic Styling",
        duration: "Days 3 - 6",
        description:
          "Design luxury layouts in Adobe InDesign / Illustrator, integrating brand typography and custom infographics.",
        deliverables: ["Initial Design Drafts & Mockups", "Infographic Data Visualizations"],
      },
      {
        stepNumber: "Step 03",
        title: "Client Review & Content Refinement",
        duration: "Days 7 - 9",
        description:
          "Incorporate client feedback, refine typography tracking, proofread all body text, and calibrate colors.",
        deliverables: ["Refined Master Layouts", "Proofread Review Copies"],
      },
      {
        stepNumber: "Step 04",
        title: "Pre-Press Print Production Preparation",
        duration: "Days 10 - 12",
        description:
          "Set up CMYK color profiles, 3mm bleeds, crop marks, vector outline fonts, and spot UV/foil separation layers.",
        deliverables: ["Print-Ready PDF Master Files", "Spot UV & Foil Stamping Dieline Layers"],
      },
      {
        stepNumber: "Step 05",
        title: "Final Digital & Print Asset Delivery",
        duration: "Days 13 - 15",
        description:
          "Export digital web-friendly PDFs, PowerPoint/Keynote editable files, and printer-ready master archives.",
        deliverables: [
          "Complete Master Asset Delivery Pack",
          "Printer Technical Liaison & Guidance",
        ],
      },
    ],
  },

  "social-creative-graphics": {
    serviceId: "social-creative-graphics",
    subServices: [
      {
        id: "carousel-slide-decks",
        title: "High-Retention Educational Carousel Slide Decks",
        description:
          "Multi-slide seamless carousel decks for Instagram and LinkedIn that break down complex topics into engaging visual slides.",
        badge: "Part 1: Carousels",
        deliverables: [
          "Multi-Slide Seamless Carousel Graphics (1:1 & 4:5)",
          "High-CTR Cover Slide Hook Designs",
          "Interactive Call-to-Action Closing Slides",
        ],
        keyBenefit: "Drives highest organic save and share metrics on Instagram and LinkedIn.",
      },
      {
        id: "social-ad-banner-packs",
        title: "Multi-Format Social Ad Banner Packs",
        description:
          "High-converting ad creatives resized across Feed (1:1), Story/Reels (9:16), and Landscape (16:9) formats for ad campaigns.",
        badge: "Part 2: Ad Creatives",
        deliverables: [
          "1:1 Square Feed Ads, 9:16 Story Ads & Display Banners",
          "Direct-Response Typography & Visual Offer Callouts",
          "A/B Visual Hook Variations for Media Buying",
        ],
        keyBenefit: "Increases click-through rates on paid social advertising campaigns.",
      },
      {
        id: "festive-promotional-posters",
        title: "Festive, Event & Promotional Post Graphics",
        description:
          "Eye-catching posters for cultural festivals, corporate milestones, webinar promotions, and seasonal sales events.",
        badge: "Part 3: Festive & Promo",
        deliverables: [
          "Festive & Holiday Greetings Visual Series",
          "Webinar / Conference Speaker & Event Posters",
          "Flash Sale & Limited-Time Discount Graphics",
        ],
        keyBenefit: "Maintains timely, active, and culturally resonant brand communication.",
      },
      {
        id: "custom-canva-templates",
        title: "Custom Branded Canva Pro & Figma Templates",
        description:
          "Editable Canva and Figma templates configured with your brand fonts and colors so your internal team can produce graphics in seconds.",
        badge: "Part 4: Editable Templates",
        deliverables: [
          "Editable Canva Pro Master Template Kit",
          "Figma Reusable Social Media Component Library",
          "Quick-Start Video Guide for Internal Marketing Teams",
        ],
        keyBenefit: "Empowers your internal team to publish branded graphics rapidly.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Creative Brief & Monthly Content Alignment",
        duration: "Days 1 - 2",
        description:
          "Review monthly themes, campaign offers, target audience pain points, and select visual design angles.",
        deliverables: ["Monthly Creative Brief", "Visual Hook Concept Board"],
      },
      {
        stepNumber: "Step 02",
        title: "Graphic Composition & Typographic Layout",
        duration: "Days 3 - 6",
        description:
          "Design custom social graphics, seamless carousel decks, and promotional posters in Photoshop and Illustrator.",
        deliverables: ["First Batch of 15-20 Social Graphics & Carousels"],
      },
      {
        stepNumber: "Step 03",
        title: "Multi-Format Resizing & Optimization",
        duration: "Days 7 - 9",
        description:
          "Adapt all graphics into 1:1, 9:16 story formats, and web display banners, ensuring sharp typography across devices.",
        deliverables: ["Multi-Format Exported Asset Library (1:1, 9:16, 16:9)"],
      },
      {
        stepNumber: "Step 04",
        title: "Client Review & Rapid Revisions",
        duration: "Days 10 - 11",
        description:
          "Incorporate client feedback, tweak copy alignments, and prepare final production master files.",
        deliverables: ["Approved Social Graphic Master Pack"],
      },
      {
        stepNumber: "Step 05",
        title: "Template Handover & Monthly Retainer Cycle",
        duration: "Days 12 & Ongoing",
        description:
          "Provide editable Canva/Figma links and kick off the next monthly creative production sprint.",
        deliverables: ["Editable Canva Template Links", "Organized Cloud Drive Asset Archive"],
      },
    ],
  },

  // ==========================================
  // 10. PROFESSIONAL PHOTOGRAPHY
  // ==========================================
  "commercial-product-photo": {
    serviceId: "commercial-product-photo",
    subServices: [
      {
        id: "pure-white-catalog-photos",
        title: "Pure White Background E-Commerce Catalog Photography",
        description:
          "Razor-sharp product photography on 100% pure white backgrounds meeting Amazon, Shopify, and marketplace standards.",
        badge: "Part 1: Catalog Shots",
        deliverables: [
          "100% Pure White Background (RGB 255,255,255) Master Photos",
          "Multi-Angle Views (Front, 45-Degree, Back, Top, Bottom)",
          "Natural Drop Shadow & Clean Clipping Paths",
        ],
        keyBenefit: "Instant Amazon/Shopify compliance with crisp, razor-sharp detail.",
      },
      {
        id: "macro-texture-closeups",
        title: "High-Resolution Macro & Texture Close-Ups",
        description:
          "Macro lens photography capturing intricate stitching, material textures, jewelry facets, and premium build quality.",
        badge: "Part 2: Macro & Detail",
        deliverables: [
          "Ultra High-Resolution Macro Detail Photos (60MP+)",
          "Fabric, Metal & Ingredient Texture Showcases",
          "Dimensional Perspective & Scale References",
        ],
        keyBenefit: "Builds buyer confidence by proving superior product craftsmanship.",
      },
      {
        id: "lifestyle-staged-studioshots",
        title: "Styled Tabletop & Studio Lifestyle Staging",
        description:
          "Artfully styled tabletop product shoots with curated props, textured backdrops, and dramatic lighting to create desire.",
        badge: "Part 3: Studio Staging",
        deliverables: [
          "Art-Directed Styled Tabletop Compositions",
          "Curated Props, Color Backdrops & Natural Lighting",
          "Social Media Hero & Website Banner Master Shots",
        ],
        keyBenefit: "Elevates perceived product value, justifying premium price points.",
      },
      {
        id: "advanced-color-retouching",
        title: "High-End Color Retouching & Asset Handover",
        description:
          "Professional color calibration ensuring true-to-life product shades, dust/scratch removal, and web-optimized exports.",
        badge: "Part 4: Retouching & WebP",
        deliverables: [
          "Dust, Reflection & Scratch Removal Retouching",
          "Color Accuracy Calibration to Match Physical Products",
          "Web-Optimized WebP & Full-Res Print TIFF Deliverables",
        ],
        keyBenefit: "Minimizes customer return rates caused by color discrepancies.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Pre-Shoot Moodboard & Shot List Planning",
        duration: "Days 1 - 2",
        description:
          "Receive physical products, clean/prep items, establish lighting angles, and plan the master shot list.",
        deliverables: ["Approved Master Shot List & Moodboard", "Product Prep & Inspection"],
      },
      {
        stepNumber: "Step 02",
        title: "Studio Strobe Lighting Calibration",
        duration: "Day 3",
        description:
          "Set up Profoto strobe lighting, diffusers, color-check charts, and tethered shooting rigs.",
        deliverables: [
          "Studio Lighting Calibration Setup",
          "Test Exposure & Color Balance Verification",
        ],
      },
      {
        stepNumber: "Step 03",
        title: "Tethered High-Resolution Shoot Session",
        duration: "Days 4 - 5",
        description:
          "Execute high-resolution photography session capturing all angles, macro details, and styled tabletop scenes.",
        deliverables: ["RAW Master Shoot Gallery for Client Selection"],
      },
      {
        stepNumber: "Step 04",
        title: "Advanced Retouching & Color Grading",
        duration: "Days 6 - 8",
        description:
          "Perform frequency separation skin/surface retouching, background clipping, drop shadows, and true color correction.",
        deliverables: ["Retouched Master Proofs for Final Approval"],
      },
      {
        stepNumber: "Step 05",
        title: "Multi-Format Export & Asset Handover",
        duration: "Days 9 - 10",
        description:
          "Deliver high-resolution TIFF/PNG masters for print packaging and compressed WebP/JPGs for fast web load.",
        deliverables: [
          "Complete High-Res Master Gallery Download",
          "Full Commercial Usage Rights Certificate",
        ],
      },
    ],
  },

  "corporate-architecture-photo": {
    serviceId: "corporate-architecture-photo",
    subServices: [
      {
        id: "executive-portraits-headshots",
        title: "Executive Leadership & Team Portraits",
        description:
          "On-location corporate headshots and team portraits with mobile studio lighting, delivering approachable executive prestige.",
        badge: "Part 1: Executive Portraits",
        deliverables: [
          "C-Suite Executive & Board Member Portraits",
          "Full Team Professional Headshots (Consistent Style)",
          "High-End Skin Tone & Expression Retouching",
        ],
        keyBenefit: "Establishes institutional trust and authority on websites and annual reports.",
      },
      {
        id: "industrial-facility-tours",
        title: "Industrial Manufacturing & Infrastructure Shoots",
        description:
          "Dynamic on-location photography capturing factory floors, automated machinery, testing labs, and skilled technicians in action.",
        badge: "Part 2: Industrial & Plants",
        deliverables: [
          "Industrial Factory & Plant Machinery Photos",
          "Technician & Quality Control Action Shots",
          "Cleanroom & Warehouse Scale Photography",
        ],
        keyBenefit: "Showcases enterprise infrastructure to win high-ticket B2B export clients.",
      },
      {
        id: "architectural-interiors-exteriors",
        title: "Architectural Interior & Exterior Photography",
        description:
          "Tilt-shift architectural photography capturing corporate headquarters, hotels, luxury real estate, and retail interiors with HDR lighting.",
        badge: "Part 3: Architecture & Real Estate",
        deliverables: [
          "Exterior Facade Architecture with Twilight / Blue Hour Lighting",
          "Interior Real Estate & Office Walkthrough Photos",
          "HDR Window Exposure Balancing & Vertical Perspective Correction",
        ],
        keyBenefit: "Presents physical corporate real estate in the most prestigious light.",
      },
      {
        id: "commercial-licensing-master",
        title: "Full Commercial Usage Licensing & Masters",
        description:
          "Delivering full resolution print-ready masters with unrestricted commercial usage rights for billboards, brochures, and websites.",
        badge: "Part 4: Licensing & Delivery",
        deliverables: [
          "Print-Ready Billboard & Brochure High-Res Files",
          "Web-Optimized Responsive Imagery for Website Use",
          "Unrestricted Worldwide Commercial Licensing Rights",
        ],
        keyBenefit: "Complete legal freedom to utilize photos across all marketing mediums.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Location Recce & Lighting Schedule Planning",
        duration: "Days 1 - 2",
        description:
          "Scout corporate facility / architecture, evaluate sun positions, and create a timed executive shoot schedule.",
        deliverables: [
          "Location Recce Notes & Time Schedule",
          "Lighting & Equipment Logistics Plan",
        ],
      },
      {
        stepNumber: "Step 02",
        title: "On-Site Studio & Architecture Shoot",
        duration: "Days 3 - 4",
        description:
          "Deploy mobile studio lighting on-location; photograph leadership portraits, facility operations, and architectural spaces.",
        deliverables: ["On-Site RAW Photography Session Completed"],
      },
      {
        stepNumber: "Step 03",
        title: "Curation & Client Proof Selection",
        duration: "Days 5 - 6",
        description:
          "Curation of shoot gallery and secure online client gallery link for executive shot selection.",
        deliverables: ["Online Proofing Gallery with Selection Tools"],
      },
      {
        stepNumber: "Step 04",
        title: "Architectural Perspective & Portrait Retouching",
        duration: "Days 7 - 9",
        description:
          "Correct vertical lines, blend ambient/strobe lighting, remove distractions, and perform skin retouching.",
        deliverables: ["Master Retouched High-Resolution Files"],
      },
      {
        stepNumber: "Step 05",
        title: "Final Gallery Delivery & Commercial Handover",
        duration: "Day 10",
        description:
          "Deliver organized cloud download folders with high-res print files, web formats, and commercial rights documentation.",
        deliverables: [
          "High-Resolution Cloud Gallery Download",
          "Commercial Usage License Certificate",
        ],
      },
    ],
  },

  "creative-lifestyle-staging": {
    serviceId: "creative-lifestyle-staging",
    subServices: [
      {
        id: "art-directed-lifestyle-shoots",
        title: "Art-Directed Model & Prop Staged Shoots",
        description:
          "Full art-directed lifestyle photo sessions with real models, wardrobe coordination, and curated indoor/outdoor locations.",
        badge: "Part 1: Lifestyle Direction",
        deliverables: [
          "Art-Directed Model & Wardrobe Styling",
          "Indoor / Outdoor Location Scouting & Permits",
          "Aspirational Everyday Use Scenarios & Candid Moments",
        ],
        keyBenefit: "Transforms ordinary products into coveted lifestyle aspirational choices.",
      },
      {
        id: "editorial-color-grading",
        title: "Cinematic & Editorial Color Grading",
        description:
          "Custom aesthetic color grading tailored to your brand mood (Warm Luxury, Crisp Modern, Earthy Organic, Vibrant Pop).",
        badge: "Part 2: Color Grading",
        deliverables: [
          "Custom Cinematic Color GradingLUTs",
          "Natural Skin Tone Balancing & Highlight Roll-off",
          "Editorial Polish for Magazines, Billboards & Social Media",
        ],
        keyBenefit: "Creates an unmistakably cohesive and premium visual mood across your brand.",
      },
      {
        id: "campaign-storyboarding",
        title: "Campaign Storyboarding & Creative Moodboards",
        description:
          "Curating detailed moodboards, shot lists, lighting styles, and model casting options for client pre-approval.",
        badge: "Part 3: Storyboarding",
        deliverables: [
          "Comprehensive Campaign Moodboard & Styling Direction",
          "Model Casting & Location Presentation Decks",
          "Timed Call Sheet & Shot List Protocol",
        ],
        keyBenefit: "Eliminates uncertainty before entering the photo shoot day.",
      },
      {
        id: "social-billboard-masters",
        title: "Social Media & Billboard-Ready Master Files",
        description:
          "Exporting versatile wide-angle compositions for website hero banners alongside vertical 9:16 crops for social media.",
        badge: "Part 4: Multi-Format Delivery",
        deliverables: [
          "Ultra High-Res Billboard & Print Master Files",
          "Website Hero Banner (16:9) Cropped Deliverables",
          "Vertical (9:16) & Square (1:1) Social Media Assets",
        ],
        keyBenefit: "Ready-to-deploy visual library for advertising campaigns and web layouts.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Campaign Concept & Moodboard Approval",
        duration: "Days 1 - 3",
        description:
          "Establish creative concept, curate visual moodboards, and align on brand lifestyle tone.",
        deliverables: ["Campaign Concept & Moodboard Deck", "Approved Prop & Wardrobe Direction"],
      },
      {
        stepNumber: "Step 02",
        title: "Model Casting & Location Scouting",
        duration: "Days 4 - 6",
        description:
          "Source and cast professional models, scout unique architectural/outdoor locations, and finalize permits.",
        deliverables: [
          "Casting Selection & Location Approvals",
          "Timed Call Sheet & Production Schedule",
        ],
      },
      {
        stepNumber: "Step 03",
        title: "Full-Day Production & Art-Directed Shoot",
        duration: "Day 7",
        description:
          "Execute the full-day photo shoot with on-site art directors, stylists, hair/makeup, and lighting crew.",
        deliverables: ["Complete RAW Production Footage Library"],
      },
      {
        stepNumber: "Step 04",
        title: "Editorial Retouching & Color Grading",
        duration: "Days 8 - 11",
        description:
          "Grade colors to match brand aesthetics, retouch skin and garments, and format for multi-channel usage.",
        deliverables: ["Retouched Master Campaign Images"],
      },
      {
        stepNumber: "Step 05",
        title: "Final Multi-Format Library Delivery",
        duration: "Days 12 - 14",
        description:
          "Deliver organized cloud galleries with billboard-resolution files, web hero images, and social media formats.",
        deliverables: [
          "Complete High-Res Lifestyle Library",
          "Model Release & Commercial Usage Documentation",
        ],
      },
    ],
  },

  // ==========================================
  // 11. CONTENT MANAGEMENT
  // ==========================================
  "copywriting-content-strategy": {
    serviceId: "copywriting-content-strategy",
    subServices: [
      {
        id: "direct-response-web-copy",
        title: "High-Converting Website & Landing Page Copy",
        description:
          "Persuasive website copy rooted in direct-response psychology, clear value propositions, objection handling, and compelling CTAs.",
        badge: "Part 1: Web Copywriting",
        deliverables: [
          "Hero Headline & Subheadline Conversion Formulas",
          "Benefit-Driven Product & Service Section Copy",
          "Objection Handling & FAQ direct-response copywriting",
        ],
        keyBenefit: "Converts passive website visitors into paying buyers and leads.",
      },
      {
        id: "seo-pillar-articles",
        title: "Long-Form SEO Topic Cluster Articles",
        description:
          "In-depth 2,000+ word authority articles written to answer searcher intent, capture featured snippets, and rank on Google.",
        badge: "Part 2: SEO Articles",
        deliverables: [
          "2,000+ Word In-Depth Authority Topic Articles",
          "NLP Keyword Optimization & Semantic Sub-Headings",
          "Custom Infographic Placement & Meta Description Tags",
        ],
        keyBenefit: "Drives compound organic search traffic without paying for ad clicks.",
      },
      {
        id: "email-nurture-sequences",
        title: "Persuasive Email Nurture & Sales Sequences",
        description:
          "High-engagement email drip sequences, customer onboarding emails, story-driven newsletters, and sales pitch letters.",
        badge: "Part 3: Email Sequences",
        deliverables: [
          "5-7 Part Story-Driven Email Welcome & Sales Sequence",
          "High Open-Rate Subject Line & Preview Text Variations",
          "Lead Magnet Follow-Up & Educational Drips",
        ],
        keyBenefit: "Builds deep subscriber trust and monetizes email lists continuously.",
      },
      {
        id: "case-study-whitepapers",
        title: "Enterprise Case Studies & Whitepapers",
        description:
          "Documenting client transformations into persuasive case study narratives, ROI breakdowns, and downloadable B2B whitepapers.",
        badge: "Part 4: Case Studies",
        deliverables: [
          "Problem-Solution-Results Case Study Narratives",
          "Executive Whitepapers for B2B Lead Generation",
          "Customer Testimonial Storytelling Teardowns",
        ],
        keyBenefit: "Shortens long B2B enterprise sales cycles by providing undeniable proof.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Customer Psychology & Pain-Point Mining",
        duration: "Days 1 - 3",
        description:
          "Analyze customer reviews, interview sales reps, uncover emotional buying triggers, and map keyword intent.",
        deliverables: ["Customer Voice Research Document", "Core Value Proposition Matrix"],
      },
      {
        stepNumber: "Step 02",
        title: "Drafting with Proven Direct-Response Frameworks",
        duration: "Days 4 - 7",
        description:
          "Draft landing page copy, email sequences, or SEO articles using PAS (Problem-Agitate-Solve) and AIDA frameworks.",
        deliverables: ["First Master Copy Drafts", "Multiple Headline & Hook Variations"],
      },
      {
        stepNumber: "Step 03",
        title: "Readability, Tone & SEO Keyword Tuning",
        duration: "Days 8 - 10",
        description:
          "Optimize readability scores (Grade 7-8 clarity), insert NLP search terms, and tighten persuasive pacing.",
        deliverables: ["SEO & Readability Tuned Copywriting"],
      },
      {
        stepNumber: "Step 04",
        title: "Client Review & Conversion Calibration",
        duration: "Days 11 - 12",
        description:
          "Incorporate client feedback, refine technical terminology, and finalize formatting for design hand-off.",
        deliverables: ["Approved Final Copywriting Deliverables"],
      },
      {
        stepNumber: "Step 05",
        title: "CMS Staging & Conversion Tracking Setup",
        duration: "Days 13 - 15",
        description:
          "Stage copy into CMS/landing pages, configure conversion event triggers, and monitor initial user engagement.",
        deliverables: ["Live Published Copy Assets", "Conversion & Form Submission Tracking"],
      },
    ],
  },

  "cms-publishing-workflows": {
    serviceId: "cms-publishing-workflows",
    subServices: [
      {
        id: "regular-cms-publishing",
        title: "Scheduled Blog Formatting & CMS Management",
        description:
          "End-to-end CMS updates across WordPress, Shopify, Webflow, formatting text with clean headers, pull quotes, and callouts.",
        badge: "Part 1: CMS Publishing",
        deliverables: [
          "Weekly Scheduled Blog Formatting & Publishing",
          "Clean H2/H3 Header Tagging & Callout Boxes",
          "Category, Tag & Author Taxonomy Organization",
        ],
        keyBenefit: "Guarantees regular website publishing with zero internal team hassle.",
      },
      {
        id: "featured-image-compression",
        title: "Featured Image Graphics & WebP Compression",
        description:
          "Designing custom branded blog header graphics and compressing all media to WebP for instant page loading.",
        badge: "Part 2: Media Optimization",
        deliverables: [
          "Custom Branded Blog Featured Header Graphics",
          "Lossless WebP Image Compression",
          "Descriptive Keyword Alt Text on Every Image",
        ],
        keyBenefit: "Maintains crisp visual aesthetics without slowing down site speed.",
      },
      {
        id: "internal-link-sculpting",
        title: "On-Page SEO Tags & Internal Link Mapping",
        description:
          "Adding RankMath/Yoast SEO focus keywords, meta descriptions, OpenGraph social sharing tags, and contextual internal links.",
        badge: "Part 3: On-Page SEO",
        deliverables: [
          "Meta Title & Compelling Description Tags",
          "Contextual Internal Link Mapping to Core Service Pages",
          "OpenGraph Social Media Card Optimization",
        ],
        keyBenefit: "Maximizes search engine crawl efficiency and click-through rates from SERPs.",
      },
      {
        id: "content-inventory-audit",
        title: "Monthly Content Inventory & Performance Tracking",
        description:
          "Tracking organic traffic, rankings, and user engagement on every published article to identify breakout topics.",
        badge: "Part 4: Performance Audits",
        deliverables: [
          "Monthly Content Publishing Log & Indexation Status",
          "Google Search Console Keyword Clicks & Impressions BI",
          "Next-Month Editorial Content Schedule",
        ],
        keyBenefit: "Identifies high-performing topics to double down on what works.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Editorial Calendar & Topic Scheduling",
        duration: "Days 1 - 3",
        description:
          "Establish the monthly publishing schedule, assign target keywords, and set content delivery deadlines.",
        deliverables: ["Monthly Editorial Calendar", "Content Pipeline Dashboard"],
      },
      {
        stepNumber: "Step 02",
        title: "Media Asset Creation & Formatting",
        duration: "Days 4 - 7",
        description:
          "Design branded blog headers, create illustrative diagrams, compress images into WebP, and format articles in CMS.",
        deliverables: [
          "Formatted Drafts in WordPress / Shopify / Webflow",
          "Custom Featured Image Library",
        ],
      },
      {
        stepNumber: "Step 03",
        title: "On-Page SEO & Internal Link Insertion",
        duration: "Days 8 - 10",
        description:
          "Configure Yoast/RankMath meta tags, insert contextual internal links pointing to money pages, and test schema.",
        deliverables: [
          "SEO Tagged & Schema Validated Articles",
          "Contextual Internal Links Configured",
        ],
      },
      {
        stepNumber: "Step 04",
        title: "Scheduled Publishing & Search Console Ping",
        duration: "Weekly Recurring",
        description:
          "Publish articles on schedule, request Google Search Console re-indexing, and verify live social share cards.",
        deliverables: ["Live Published Articles", "Search Console Indexation Submission"],
      },
      {
        stepNumber: "Step 05",
        title: "Monthly Traffic & Ranking Performance Report",
        duration: "Day 30 & Ongoing",
        description:
          "Review monthly organic impressions, clicks, new keyword rankings, and plan the next month’s content sprint.",
        deliverables: ["Monthly Content Performance Report", "Updated Editorial Calendar"],
      },
    ],
  },

  "content-audit-optimization": {
    serviceId: "content-audit-optimization",
    subServices: [
      {
        id: "traffic-decay-audit",
        title: "Traffic Decay & Content Inventory Audit",
        description:
          "Auditing every published article on your website using Google Analytics 4 and Search Console to identify declining traffic pages.",
        badge: "Part 1: Decay Audit",
        deliverables: [
          "Full Website Content Inventory & Traffic Decay Log",
          "Keyword Cannibalization Identification Matrix",
          "Underperforming Article Prioritization Roadmap",
        ],
        keyBenefit: "Identifies easy quick-win opportunities to revive lost organic traffic.",
      },
      {
        id: "article-refresh-expansion",
        title: "Historical Article Refresh & Stat Updating",
        description:
          "Rewriting outdated articles with fresh case studies, updated statistics, new sub-headers, and modern FAQs.",
        badge: "Part 2: Content Refresh",
        deliverables: [
          "Updated Content with 2026 Fresh Statistics & Insights",
          "New FAQ Schema & Featured Snippet Optimization",
          "Elimination of Outdated Information & Broken Links",
        ],
        keyBenefit: "Surges search rankings on existing URLs within 14-30 days.",
      },
      {
        id: "internal-link-pruning",
        title: "Internal Link Sculpting & 301 Consolidation",
        description:
          "Consolidating thin or cannibalizing articles into comprehensive master guides with strategic 301 redirects.",
        badge: "Part 3: Pruning & Consolidation",
        deliverables: [
          "301 Redirect Consolidation of Cannibalized Articles",
          "Internal Anchor Text Sculpting to Master Pillar Pages",
          "Zero Dead Internal Links or Orphan Pages",
        ],
        keyBenefit: "Focuses domain equity onto your highest-converting pillar pages.",
      },
      {
        id: "reindex-performance-monitoring",
        title: "Search Console Re-indexing & Traffic Monitoring",
        description:
          "Submitting updated URLs for prioritized Google crawl and tracking weekly organic ranking and click recovery.",
        badge: "Part 4: Re-Indexing & BI",
        deliverables: [
          "Priority Google Search Console Re-Indexing Submission",
          "Weekly Keyword Rank Movement Tracking",
          "Before-and-After Traffic Recovery Report",
        ],
        keyBenefit:
          "Rapid organic traffic recovery without the cost of writing entirely new content.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Content Inventory & GA4 Decay Analysis",
        duration: "Days 1 - 3",
        description:
          "Crawl all website URLs, match with GA4/GSC historical traffic data, and identify pages that lost rankings.",
        deliverables: ["Content Decay Audit Spreadsheet", "Quick-Win Optimization Priority List"],
      },
      {
        stepNumber: "Step 02",
        title: "Keyword Cannibalization & Intent Gap Analysis",
        duration: "Days 4 - 6",
        description:
          "Identify competing pages ranking for identical keywords and plan 301 consolidation or distinct keyword mapping.",
        deliverables: [
          "Keyword Cannibalization Remediation Plan",
          "301 Redirect Consolidation Map",
        ],
      },
      {
        stepNumber: "Step 03",
        title: "Article Rewriting & Statistic Refresh",
        duration: "Days 7 - 12",
        description:
          "Rewrite declining articles, add fresh 2026 data, incorporate new NLP keyword terms, and optimize header tags.",
        deliverables: ["Refreshed & Expanded Article Content", "New FAQ & Schema Markup"],
      },
      {
        stepNumber: "Step 04",
        title: "CMS Staging & Internal Link Sculpting",
        duration: "Days 13 - 14",
        description:
          "Update live articles in CMS, fix broken links, sculpt internal anchor text, and configure 301 redirects.",
        deliverables: ["Live Updated Articles in CMS", "Configured 301 Redirects"],
      },
      {
        stepNumber: "Step 05",
        title: "Google Re-indexing & Ranking Recovery Tracking",
        duration: "Days 15 - 30",
        description:
          "Submit updated XML sitemaps to Google Search Console and monitor organic impressions and ranking recovery.",
        deliverables: [
          "Google Search Console Re-Indexing Verification",
          "Organic Traffic Recovery Progress Report",
        ],
      },
    ],
  },
};

export const getServiceExtendedDetails = (
  serviceId: string,
  serviceTitle: string,
  categoryTitle: string,
): ServiceDetailExtended => {
  if (SERVICE_DETAILS_MAP[serviceId]) {
    return SERVICE_DETAILS_MAP[serviceId];
  }

  // Fallback dynamic generator if an ID is custom
  return {
    serviceId,
    subServices: [
      {
        id: `${serviceId}-p1`,
        title: `${serviceTitle} Strategy & Requirements`,
        description: `Comprehensive technical and commercial planning specifically tailored for ${serviceTitle} under our ${categoryTitle} practice.`,
        badge: "Part 1: Discovery & Strategy",
        deliverables: [
          "Custom Strategy & Scope Document",
          "Competitive Benchmark & Opportunity Teardown",
          "Technical Specifications & Architecture Matrix",
        ],
        keyBenefit:
          "Guarantees perfect alignment between business objectives and technical execution.",
      },
      {
        id: `${serviceId}-p2`,
        title: `${serviceTitle} Implementation & Build`,
        description: `Hands-on execution and high-standard production adhering to industry best practices and quality benchmarks.`,
        badge: "Part 2: Core Implementation",
        deliverables: [
          "Core Execution Deliverables",
          "Design & Component System Integration",
          "Quality Assurance & Performance Auditing",
        ],
        keyBenefit: "Delivers robust, production-ready assets built to scale.",
      },
      {
        id: `${serviceId}-p3`,
        title: `${serviceTitle} Optimization & Tracking`,
        description: `Fine-tuning metrics, conversion rate optimization, and tracking analytics for maximum business impact.`,
        badge: "Part 3: Optimization",
        deliverables: [
          "Conversion Rate Optimization Sprints",
          "Analytics & Event Tracking Verification",
          "Speed & Performance Calibration",
        ],
        keyBenefit: "Maximizes ROI and optimizes conversion efficiency.",
      },
      {
        id: `${serviceId}-p4`,
        title: `${serviceTitle} Scale & Ongoing Management`,
        description: `Structured continuous support, executive reporting, and proactive iterations to compound growth.`,
        badge: "Part 4: Scale & Retainer",
        deliverables: [
          "24/7 Executive KPI Reporting",
          "Ongoing Iterative Growth Sprints",
          "Dedicated Account Strategist Access",
        ],
        keyBenefit: "Compounds long-term commercial returns with zero operational downtime.",
      },
    ],
    executionSteps: [
      {
        stepNumber: "Step 01",
        title: "Discovery & Objective Alignment",
        duration: "Days 1 - 3",
        description: `Audit current assets, analyze competitive landscape, and define measurable KPIs for ${serviceTitle}.`,
        deliverables: ["Discovery Audit Report", "KPI & Deliverables Roadmap"],
      },
      {
        stepNumber: "Step 02",
        title: "Architecture & Strategy Blueprint",
        duration: "Days 4 - 7",
        description:
          "Map out the structural workflows, technical prerequisites, and creative assets needed for deployment.",
        deliverables: ["Technical Architecture Blueprint", "Asset & Content Briefs"],
      },
      {
        stepNumber: "Step 03",
        title: "Core Production & Sprint Execution",
        duration: "Days 8 - 18",
        description:
          "Execute the core deliverables with agile review checkpoints and rigorous quality standards.",
        deliverables: ["Completed Primary Assets / Deliverables", "Integration Testing Logs"],
      },
      {
        stepNumber: "Step 04",
        title: "Quality Assurance & Conversion Verification",
        duration: "Days 19 - 22",
        description:
          "Conduct comprehensive testing, user journey verification, and analytics tag validation.",
        deliverables: ["QA & Security Audit Sign-off", "Conversion Tracking Validation"],
      },
      {
        stepNumber: "Step 05",
        title: "Launch & Growth Cadence",
        duration: "Day 23 & Ongoing",
        description:
          "Deploy to live production, monitor real-time user metrics, and initiate ongoing optimization sprints.",
        deliverables: ["Live Production Deployment", "Monthly Growth & Performance Dashboard"],
      },
    ],
  };
};
