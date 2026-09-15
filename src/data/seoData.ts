/**
 * SEO Configuration and Structured JSON-LD Data for DigiBasera
 * High-authority Local SEO, Professional Services, Schema.org Markup for All Pages
 */

export const SEO_CONFIG = {
  siteName: "DigiBasera",
  siteUrl: "https://digibasera.com",
  title: "DigiBasera | Best Digital Marketing Agency & Web Development Company in Rajkot, Gujarat",
  description:
    "DigiBasera is Rajkot's leading digital marketing agency & web development company. We deliver high-ROI SEO services, Google Ads PPC management, custom web design, Shopify e-commerce, and social media marketing for ambitious businesses in Rajkot, Gujarat, and Pan-India.",
  keywords: [
    // Primary High-Volume Keywords
    "Digital Marketing Agency in Rajkot",
    "Digital Marketing Company Rajkot",
    "Best SEO Company Gujarat",
    "SEO Services Rajkot",
    "Web Development Company in Rajkot",
    "Website Design Rajkot",
    "Google Ads Agency Rajkot",
    "Social Media Marketing Agency Rajkot",
    // Secondary & Service-Specific Keywords
    "PPC Management Company Gujarat",
    "Shopify Developer Rajkot",
    "Ecommerce Website Development Gujarat",
    "Local SEO Services Saurashtra",
    "WordPress Web Design Rajkot",
    "Meta Ads Agency India",
    "Performance Marketing Agency Gujarat",
    "Creative Branding Agency Rajkot",
    "B2B Lead Generation Agency Gujarat",
    "Content Marketing Agency Rajkot",
    // Commercial Intent & Long-Tail Keywords
    "Hire Best Digital Marketing Agency in Rajkot",
    "Affordable SEO Packages Gujarat",
    "Custom Next.js Web Development India",
    "Real Estate Digital Marketing Gujarat",
    "Industrial Manufacturing Digital Marketing Rajkot",
    "High ROI Performance Ads Agency India",
    "Digital Marketing Course in Rajkot with Placement",
    "Zinmatt Digital Marketing Academy Rajkot",
    // Location-Based Keywords
    "Digital Marketing Agency Gujarat",
    "SEO Agency Ahmedabad Surat Vadodara",
    "Website Developers Saurashtra",
    "Digital Marketing Rajkot 360004",
  ].join(", "),
  author: "DigiBasera Digital Solutions",
  ogImage:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  telephone: "+919898778047",
  phoneDisplay: "+91 98987 78047",
  email: "contact@digibasera.com",
  address: {
    streetAddress: "Chandresh Nagar Main Road, Mayani Chowk, Opposite Backbone Shopping Centre",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    postalCode: "360004",
    addressCountry: "IN",
  },
  geo: {
    latitude: "22.2858",
    longitude: "70.7850",
  },
  priceRange: "₹₹",
  openingHours: "Mo-Sa 09:00-19:00",
  socialProfiles: [
    "https://www.instagram.com/digibasera/",
    "https://www.facebook.com/share/19SrkrXX2x/",
    "https://share.google/6qE9KBy6hSqJnPcZ2",
  ],
};

/**
 * Structured Data for Local Business / Professional Service (Global & Home)
 */
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
  "@id": "https://digibasera.com/#organization",
  name: "DigiBasera",
  alternateName: "DigiBasera - Digital Marketing & Web Development Agency Rajkot",
  url: "https://digibasera.com",
  logo: "https://digibasera.com/favicon.svg",
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  description:
    "Premier digital marketing agency and web development company based in Rajkot, Gujarat. Providing end-to-end SEO services, Google Ads PPC management, custom React/Next.js web design, Shopify e-commerce, and high-impact social media marketing.",
  telephone: "+919898778047",
  email: "contact@digibasera.com",
  priceRange: "₹₹",
  currenciesAccepted: "INR, USD",
  paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
  founder: {
    "@type": "Person",
    name: "Firasat Ali",
    jobTitle: "Founder & Chief Strategist",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chandresh Nagar Main Road, Mayani Chowk, Opposite Backbone Shopping Centre",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    postalCode: "360004",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.2858,
    longitude: 70.785,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "250",
    reviewCount: "250",
  },
  sameAs: [
    "https://www.instagram.com/digibasera/",
    "https://www.facebook.com/share/19SrkrXX2x/",
    "https://share.google/6qE9KBy6hSqJnPcZ2",
  ],
  areaServed: [
    { "@type": "City", name: "Rajkot" },
    { "@type": "City", name: "Ahmedabad" },
    { "@type": "City", name: "Surat" },
    { "@type": "City", name: "Vadodara" },
    { "@type": "City", name: "Morbi" },
    { "@type": "City", name: "Jamnagar" },
    { "@type": "AdministrativeArea", name: "Saurashtra" },
    { "@type": "AdministrativeArea", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  knowsAbout: [
    "Search Engine Optimization (SEO)",
    "Google Ads PPC Management",
    "Custom Web Development",
    "Shopify E-Commerce Development",
    "Social Media Marketing",
    "Local SEO Rajkot",
    "Lead Generation Funnels",
    "Conversion Rate Optimization",
  ],
};

/**
 * WebSite schema with search action
 */
export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://digibasera.com/#website",
  url: "https://digibasera.com",
  name: "DigiBasera",
  alternateName: "DigiBasera Digital Agency Rajkot",
  description: "Premier Digital Marketing & Web Development Agency in Rajkot, Gujarat",
  publisher: {
    "@id": "https://digibasera.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://digibasera.com/#services?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

/**
 * Services Schema: Comprehensive Service Offerings
 */
export const SERVICES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Marketing & Custom Web Development",
  provider: {
    "@id": "https://digibasera.com/#organization",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "DigiBasera Digital Growth Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Search Engine Optimization (SEO Services)",
          description:
            "High-authority on-page, off-page, technical SEO, and Google Business Profile local 3-pack ranking for Rajkot, Gujarat & Pan-India businesses.",
          url: "https://digibasera.com/services/seo",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Design & Development (React, Next.js, WordPress)",
          description:
            "Ultra-fast, responsive custom web design engineered with React, Next.js, Tailwind CSS, and WordPress for sub-second load speeds and maximum lead conversion.",
          url: "https://digibasera.com/services/web-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-Commerce Solutions & Shopify Store Development",
          description:
            "High-converting D2C and B2B online store development on Shopify and WooCommerce with seamless payment gateway and logistics integrations.",
          url: "https://digibasera.com/services/shopify-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads & PPC Management",
          description:
            "ROI-focused Google Search, Shopping, Performance Max, and Display ad management to generate qualified phone calls and leads at low acquisition costs.",
          url: "https://digibasera.com/services/google-ads",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Meta Ads (Facebook & Instagram Advertising)",
          description:
            "Full-funnel Meta advertising campaigns targeting high-intent buyers with compelling creative design, video reels, and dynamic retargeting.",
          url: "https://digibasera.com/services/social-media-marketing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Marketing & Content Creation",
          description:
            "Strategic social media management, daily creative posting, viral Reels production, brand storytelling, and audience engagement across Instagram, LinkedIn, and Facebook.",
          url: "https://digibasera.com/services/social-media-marketing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Identity & Creative Design",
          description:
            "Bespoke logo design, comprehensive visual brand identity guidelines, marketing collateral, packaging, and graphic design services.",
          url: "https://digibasera.com/services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Content Marketing & Commercial Video Production",
          description:
            "High-impact corporate brand films, cinematic product shoots, viral social media reels, and search-optimized blog copywriting.",
          url: "https://digibasera.com/services/digital-marketing",
        },
      },
    ],
  },
};

/**
 * ItemList Schema for Live Client Projects
 */
export const PORTFOLIO_ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "DigiBasera Verified Client Work & Web Design Portfolio",
  description:
    "Verified deployed client websites, e-commerce stores, and digital marketing case studies built by DigiBasera in Rajkot, Gujarat.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ABFI Interior (Live Client Website)",
      url: "https://www.abfiinterior.com",
      description:
        "Luxury architectural & interior design firm web platform engineered for high-ticket client acquisition and 3D portfolio showcase.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Super India Interior (Live Client Website)",
      url: "https://www.superindiainterior.com",
      description:
        "Commercial turnkey interior contractor website with instant WhatsApp consultation routing and mobile lead capture.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Premium Pack Co (Live Client Website)",
      url: "https://www.premiumpackco.com",
      description:
        "Industrial packaging manufacturer catalogue with live product dimensions and export lead generation.",
    },
  ],
};

/**
 * Training Academy Course Schema (Zinmatt Associate)
 */
export const TRAINING_COURSE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Advanced Digital Marketing & AI Growth Certification Course in Rajkot",
  description:
    "Practical industry-oriented digital marketing training course in Rajkot covering Advanced SEO, Google Ads, Meta Ads, Social Media, AI Automations, and live client projects with 100% placement support.",
  provider: {
    "@type": "EducationalOrganization",
    name: "DigiBasera Academy in association with Zinmatt",
    sameAs: "https://digibasera.com/#training",
  },
  educationalCredentialAwarded: "Industry Certified Digital Marketer (Zinmatt & DigiBasera)",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Blended (Classroom in Rajkot + Practical Live Agency Projects)",
    courseWorkload: "PT3H/D (3 Hours Daily Practical)",
    instructor: {
      "@type": "Person",
      name: "Senior Growth Strategists & Industry Practitioners",
    },
  },
};

/**
 * Process / HowTo Schema
 */
export const PROCESS_HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "DigiBasera 5-Stage Digital Growth & SEO Execution Methodology",
  description:
    "How DigiBasera transforms business visibility into measurable inbound sales and Page 1 Google rankings.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Phase 1: Deep Discovery & Technical SEO Audit",
      text: "Comprehensive analysis of competitor search landscape, audience commercial intent, website technical architecture, Core Web Vitals, and conversion friction.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Phase 2: Custom Strategy & Funnel Architecture",
      text: "Keyword topic cluster mapping, high-converting funnel wireframes, paid media target cohorts, and transparent KPI projection blueprints.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Phase 3: High-Speed Web & Campaign Deployment",
      text: "Deploying lightning-fast website assets, implementing structured JSON-LD schemas, configuring conversion tracking pixels, and launching targeted Google/Meta ad funnels.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Phase 4: Real-Time Telemetry & Conversion Optimization",
      text: "Continuous A/B variant testing, search term negative pruning, ad creative refreshes, and landing page conversion rate optimization.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Phase 5: Sustainable Scaling & Category Dominance",
      text: "Expanding organic keyword footprints across Saurashtra & Pan-India, scaling profitable ad spend, and securing lasting market authority.",
    },
  ],
};

/**
 * FAQPage Schema for Google Rich Snippets
 */
export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why should I choose DigiBasera as my digital marketing agency in Rajkot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DigiBasera is a premier digital marketing agency in Rajkot, Gujarat that prioritizes verified commercial ROI over empty vanity metrics. We provide 360-degree digital solutions including white-hat SEO, high-ROAS Google and Meta Ads, custom high-speed web development (React, Next.js, WordPress), and verified client case studies like ABFI Interior, Super India Interior, and Premium Pack Co.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to rank on Page 1 of Google in Rajkot & Gujarat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With DigiBasera's technical SEO and Google Business Profile optimization, local 3-pack visibility and long-tail keyword movement typically show positive traction within 60 to 90 days. High-competition commercial queries and compounding organic traffic growth typically solidify within 3 to 6 months.",
      },
    },
    {
      "@type": "Question",
      name: "What website development and e-commerce services does DigiBasera provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build custom, lightning-fast websites engineered with React, Next.js, Tailwind CSS, TypeScript, WordPress, and Shopify. Every build is optimized for 95+ Google Lighthouse Core Web Vitals, mobile responsiveness, structured SEO schema, and maximum lead generation.",
      },
    },
    {
      "@type": "Question",
      name: "Can DigiBasera manage Google Ads and Meta (Instagram & Facebook) Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our performance marketing desk manages full-funnel paid advertising on Google Search, Shopping, Performance Max, YouTube, and Meta (Facebook/Instagram). We handle creative design, ad copywriting, conversion tracking API (CAPI), and daily bid optimizations to ensure the highest return on ad spend (ROAS).",
      },
    },
    {
      "@type": "Question",
      name: "How can I book a free digital marketing consultation or website audit with DigiBasera?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book a free consultation directly through our website, message us on WhatsApp at +91 98987 78047, email contact@digibasera.com, or visit our office at Chandresh Nagar Main Road, Mayani Chowk, Opposite Backbone Shopping Centre, Rajkot - 360004.",
      },
    },
  ],
};

/**
 * Breadcrumb Schema Generator for Every Page
 */
export function getBreadcrumbSchema(pageName: string, pageUrl: string) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://digibasera.com/",
    },
  ];

  if (pageName !== "Home" && pageName !== "home") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: pageName,
      item: pageUrl,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

/**
 * Page-Specific SEO Metadata Map
 */
export const PAGE_SEO_CONFIG: Record<
  string,
  { title: string; description: string; canonical: string; keywords: string }
> = {
  home: {
    title: "DigiBasera | Best Digital Marketing Agency & Web Development in Rajkot, Gujarat",
    description:
      "DigiBasera is Rajkot's leading digital marketing agency & web development company. We deliver high-ROI SEO services, Google Ads PPC, custom web design, Shopify e-commerce, and social media marketing in Rajkot, Gujarat, and Pan-India.",
    canonical: "https://digibasera.com/",
    keywords:
      "Digital Marketing Agency in Rajkot, Digital Marketing Company Rajkot, Best SEO Company Gujarat, SEO Services Rajkot, Web Development Company in Rajkot, Website Design Rajkot, Google Ads Agency Rajkot, Social Media Marketing Rajkot, Local SEO Gujarat, High ROI Marketing Agency India",
  },
  services: {
    title: "Digital Marketing & Custom Web Development Services | DigiBasera Rajkot",
    description:
      "Explore 11 specialized digital growth disciplines: Technical SEO, Google Ads PPC, Meta Ads, Custom React/Next.js Web Design, Shopify E-Commerce, and Social Media Marketing in Rajkot, Gujarat.",
    canonical: "https://digibasera.com/#services",
    keywords:
      "Digital Marketing Services Rajkot, SEO Services Gujarat, Google Ads PPC Management, Custom Web Development Rajkot, Shopify Developer Gujarat, Meta Ads Agency India, Social Media Marketing Packages Rajkot, Local SEO Services",
  },
  portfolio: {
    title: "Portfolio & Verified Client Websites Showcase | DigiBasera Rajkot",
    description:
      "Explore live verified client websites (ABFI Interior, Super India Interior, Premium Pack Co), high-engagement social media campaigns, and Google Page 1 ranking case studies.",
    canonical: "https://digibasera.com/#portfolio",
    keywords:
      "DigiBasera Portfolio, Verified Client Websites Rajkot, ABFI Interior, Super India Interior, Premium Pack Co, Web Design Case Studies Gujarat, Digital Marketing Results India",
  },
  pricing: {
    title: "Transparent Digital Marketing Packages & Pricing | DigiBasera Rajkot",
    description:
      "Clear, ROI-backed digital marketing packages and website development pricing starting at ₹9,999/mo for ambitious businesses in Rajkot, Gujarat, and across India.",
    canonical: "https://digibasera.com/#pricing",
    keywords:
      "Digital Marketing Pricing Rajkot, SEO Packages Gujarat, Website Development Cost India, Social Media Marketing Pricing, Google Ads Management Fee, Affordable Digital Marketing Agency",
  },
  process: {
    title: "Our 5-Stage Performance Growth Methodology | DigiBasera",
    description:
      "Discover DigiBasera’s proven 5-stage framework: Discovery & Technical Audit, Strategy Blueprint, Rapid Web Deployment, Real-Time Optimization, and Scaled Revenue Dominance.",
    canonical: "https://digibasera.com/#process",
    keywords:
      "Digital Marketing Process, SEO Strategy Framework, Conversion Rate Optimization Methodology, Performance Marketing Blueprint, ROI Growth System Rajkot",
  },
  about: {
    title: "About DigiBasera | Leading Digital Marketing Agency in Rajkot, Gujarat",
    description:
      "Learn about DigiBasera’s mission, our founder Firasat Ali, and our team of senior SEO strategists, web developers, and performance marketers driving digital excellence in Rajkot, Gujarat.",
    canonical: "https://digibasera.com/#about",
    keywords:
      "About DigiBasera, Digital Marketing Agency Rajkot, Firasat Ali DigiBasera, Marketing Specialists Gujarat, Web Development Team Rajkot, Technology Company Profile",
  },
  training: {
    title: "Practical Digital Marketing Training Course in Rajkot | Zinmatt & DigiBasera",
    description:
      "Master industry-standard SEO, Google Ads, Meta Ads, AI Marketing Tools, and live client projects with 100% placement support at Zinmatt Digital Marketing Academy in Rajkot.",
    canonical: "https://digibasera.com/#training",
    keywords:
      "Digital Marketing Course in Rajkot, SEO Training Rajkot, Social Media Marketing Course Gujarat, Zinmatt Academy Rajkot, Practical Digital Marketing Certification with Placement",
  },
  education: {
    title: "Practical Digital Marketing Training Course in Rajkot | Zinmatt & DigiBasera",
    description:
      "Master industry-standard SEO, Google Ads, Meta Ads, AI Marketing Tools, and live client projects with 100% placement support at Zinmatt Digital Marketing Academy in Rajkot.",
    canonical: "https://digibasera.com/#training",
    keywords:
      "Digital Marketing Course in Rajkot, SEO Training Rajkot, Social Media Marketing Course Gujarat, Zinmatt Academy Rajkot, Practical Digital Marketing Certification with Placement",
  },
  careers: {
    title: "Careers & Open Positions in Rajkot | Join DigiBasera Digital Agency",
    description:
      "Join our high-performing team in Rajkot. Openings for SEO Specialists, Frontend React Developers, Google/Meta Ads Managers, and Creative Graphic Designers.",
    canonical: "https://digibasera.com/#careers",
    keywords:
      "Digital Marketing Jobs Rajkot, Web Developer Vacancies Gujarat, SEO Specialist Jobs Rajkot, Graphic Designer Careers, DigiBasera Hiring",
  },
  blog: {
    title: "Digital Growth Insights, SEO Strategies & Marketing Blog | DigiBasera",
    description:
      "Actionable digital marketing strategies, local SEO blueprints, Google algorithm updates, and web development best practices written by DigiBasera specialists.",
    canonical: "https://digibasera.com/#blog",
    keywords:
      "Digital Marketing Blog Gujarat, SEO Tips India, Local SEO Guide Rajkot, Google Ads Optimization Strategies, E-Commerce Growth Blog",
  },
  contact: {
    title: "Contact DigiBasera | Free Growth Audit & Strategy Consultation in Rajkot",
    description:
      "Get in touch with DigiBasera for a free digital marketing audit, website quotation, or growth strategy session. Located at Chandresh Nagar Main Road, Mayani Chowk, Rajkot.",
    canonical: "https://digibasera.com/#contact",
    keywords:
      "Contact DigiBasera, Digital Marketing Agency Phone Rajkot, Office Address Chandresh Nagar Rajkot, Request Free Digital Audit, Phone +91 98987 78047",
  },
  "areas-we-serve": {
    title: "Areas We Serve in Rajkot, Gujarat & Pan-India | DigiBasera",
    description:
      "Explore the geographic areas and cities DigiBasera serves with high-ROI digital marketing, SEO, Google Ads, and custom website development across Gujarat and India.",
    canonical: "https://digibasera.com/#areas-we-serve",
    keywords:
      "Digital Marketing Agency Rajkot, SEO Services Ahmedabad, Digital Marketing Surat, Web Design Vadodara, Digital Agency Gujarat, Pan-India Digital Marketing",
  },
  terms: {
    title: "Terms & Conditions of Service | DigiBasera Rajkot",
    description:
      "Terms and conditions of service for DigiBasera digital marketing and web technology agency.",
    canonical: "https://digibasera.com/#terms",
    keywords: "Terms, Service Agreement, DigiBasera Rajkot",
  },
  privacy: {
    title: "Privacy Policy & Data Protection | DigiBasera",
    description:
      "Privacy policy and client data protection principles of DigiBasera digital marketing agency.",
    canonical: "https://digibasera.com/#privacy",
    keywords: "Privacy Policy, Data Protection, DigiBasera Rajkot",
  },
  admin: {
    title: "Admin Dashboard | DigiBasera",
    description: "DigiBasera administrative management interface.",
    canonical: "https://digibasera.com/#admin",
    keywords: "admin",
  },
};
