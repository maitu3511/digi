/**
 * SEO-friendly service route definitions for DigiBasera.
 *
 * Each entry maps a clean crawlable URL (/services/<slug>) to an existing
 * service category (and optionally a sub-service) inside servicesData.ts, so
 * the exact same UI/design is rendered while search engines get a unique,
 * indexable page with its own title, description, canonical and schema.
 */

import { SEO_CONFIG } from "./seoData";

export interface ServiceRouteSection {
  heading: string;
  body: string;
}

export interface ServiceRouteDef {
  slug: string;
  /** Category id inside DEFAULT_MAIN_SERVICES */
  categoryId: string;
  /** Optional sub-service id inside that category */
  subServiceId?: string;
  /** Short label used in navigation / internal links */
  label: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  intro: string;
  serviceType: string;
  sections: ServiceRouteSection[];
}

export const SERVICE_ROUTES: ServiceRouteDef[] = [
  {
    slug: "seo",
    categoryId: "seo",
    label: "SEO Services",
    title: "SEO Services in Rajkot | Best SEO Company in Gujarat | DigiBasera",
    description:
      "Rank on Google page 1 with DigiBasera's technical SEO, local SEO, link building and AI search optimization services for businesses in Rajkot, Gujarat and Pan-India.",
    keywords:
      "SEO services Rajkot, best SEO company Gujarat, local SEO Rajkot, technical SEO agency India, link building services, AI search optimization",
    h1: "SEO Services in Rajkot — Rank on Google Page 1",
    intro:
      "DigiBasera engineers search visibility that converts. Our SEO team combines technical site architecture, high-intent keyword targeting, authority link building and AI search (GEO) optimization to grow qualified organic traffic month after month.",
    serviceType: "Search Engine Optimization",
    sections: [
      {
        heading: "Technical SEO & Site Architecture",
        body: "Core Web Vitals tuning, crawl budget control, indexation fixes, schema markup and clean internal linking so Google can read and rank every important page.",
      },
      {
        heading: "Local SEO for Rajkot & Gujarat",
        body: "Google Business Profile optimization, local citations, review velocity and map-pack targeting that puts your business in front of nearby, ready-to-buy customers.",
      },
      {
        heading: "Content & Authority Building",
        body: "Commercial keyword clusters, search-intent content writing and high-DA editorial backlinks that build topical authority and sustainable page-1 rankings.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    categoryId: "digital-marketing",
    label: "Digital Marketing",
    title: "Digital Marketing Agency in Rajkot, Gujarat | DigiBasera",
    description:
      "Full-funnel digital marketing services in Rajkot: growth strategy, performance marketing, lead generation, marketing analytics and AI-powered campaigns with transparent ROI.",
    keywords:
      "digital marketing agency Rajkot, digital marketing company Gujarat, performance marketing India, lead generation agency Rajkot",
    h1: "Digital Marketing Services in Rajkot, Gujarat",
    intro:
      "We build end-to-end commercial growth blueprints — channel strategy, paid acquisition, lead capture and analytics — so every rupee of marketing budget is tied to measurable revenue.",
    serviceType: "Digital Marketing",
    sections: [
      {
        heading: "360° Growth Strategy",
        body: "Competitor benchmarking, customer persona mapping and a multi-channel budget allocation matrix aligned with your revenue targets.",
      },
      {
        heading: "Performance Marketing & Lead Generation",
        body: "High-converting landing pages, OTP-validated lead forms and instant WhatsApp/CRM routing that turn traffic into qualified sales conversations.",
      },
      {
        heading: "Analytics & Attribution",
        body: "GA4, Looker Studio dashboards and offline conversion tracking that show exactly which channels create customers.",
      },
    ],
  },
  {
    slug: "google-ads",
    categoryId: "paid-ads",
    subServiceId: "google-ads",
    label: "Google Ads (PPC)",
    title: "Google Ads Agency in Rajkot | PPC Management Services | DigiBasera",
    description:
      "Certified Google Ads management in Rajkot, Gujarat. Search, Performance Max, Shopping and YouTube campaigns engineered for low CPA and high, verifiable ROAS.",
    keywords:
      "Google Ads agency Rajkot, PPC management company Gujarat, Google Ads services India, Performance Max agency, YouTube ads Rajkot",
    h1: "Google Ads & PPC Management in Rajkot",
    intro:
      "Google Premier-partner grade campaign engineering: intent-mapped keyword structures, conversion tracking you can trust, and continuous bid and creative optimization for profitable scale.",
    serviceType: "Google Ads Management",
    sections: [
      {
        heading: "Search & Performance Max Campaigns",
        body: "Tightly themed ad groups, negative keyword sculpting and tCPA/tROAS bidding calibrated to your margins.",
      },
      {
        heading: "Shopping & YouTube Advertising",
        body: "Merchant Center feed optimization and video hook testing that lower cost per acquisition across the funnel.",
      },
      {
        heading: "Transparent Reporting",
        body: "Weekly performance summaries, call and form attribution, and full account ownership — always in your name.",
      },
    ],
  },
  {
    slug: "web-development",
    categoryId: "web-development",
    label: "Web Development",
    title: "Web Development Company in Rajkot | Website Design | DigiBasera",
    description:
      "Custom website design and development in Rajkot, Gujarat. Fast, mobile-first, SEO-ready websites built on React, Next.js and WordPress with conversion-focused UX.",
    keywords:
      "web development company Rajkot, website design Rajkot, custom website development Gujarat, WordPress web design Rajkot, Next.js development India",
    h1: "Web Design & Development Company in Rajkot",
    intro:
      "We engineer fast-loading, conversion-ready websites — custom builds, WordPress and headless front-ends — designed around search visibility and lead generation, not just looks.",
    serviceType: "Web Development",
    sections: [
      {
        heading: "Custom Website Design",
        body: "Bespoke UI, mobile-first layouts and accessibility-aware components that reflect your brand and guide visitors to enquire.",
      },
      {
        heading: "Performance & SEO Foundations",
        body: "Core Web Vitals optimization, clean semantic markup, structured data and crawlable URL architecture from day one.",
      },
      {
        heading: "Maintenance & Support",
        body: "Security patching, backups, uptime monitoring and continuous improvement retainers after launch.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    categoryId: "social-media",
    label: "Social Media Marketing",
    title: "Social Media Marketing Agency in Rajkot, Gujarat | DigiBasera",
    description:
      "Social media marketing and management in Rajkot: content calendars, reels, Instagram and Facebook growth, influencer campaigns and paid social advertising.",
    keywords:
      "social media marketing agency Rajkot, social media management Gujarat, Instagram marketing Rajkot, Facebook marketing India, influencer marketing agency",
    h1: "Social Media Marketing Services in Rajkot",
    intro:
      "Scroll-stopping creatives, consistent publishing and paid amplification that turn followers into customers across Instagram, Facebook, LinkedIn and YouTube.",
    serviceType: "Social Media Marketing",
    sections: [
      {
        heading: "Content & Community Management",
        body: "Monthly content calendars, branded design systems, reels production and daily engagement handled end-to-end.",
      },
      {
        heading: "Paid Social Advertising",
        body: "Meta and LinkedIn campaigns with creative-angle testing, audience layering and full-funnel retargeting.",
      },
      {
        heading: "Influencer & Creator Campaigns",
        body: "Vetted regional creators, campaign briefs and performance tracking that build reach and social proof.",
      },
    ],
  },
  {
    slug: "shopify-development",
    categoryId: "web-development",
    subServiceId: "shopify-website-design",
    label: "Shopify Development",
    title: "Shopify Development Company in Rajkot | Shopify Store Design | DigiBasera",
    description:
      "Shopify website design and development in Rajkot, Gujarat. Conversion-optimized custom Shopify stores with fast themes, app integrations and e-commerce SEO built in.",
    keywords:
      "Shopify developer Rajkot, Shopify development company Gujarat, Shopify store design India, ecommerce website development Rajkot",
    h1: "Shopify Development & Store Design in Rajkot",
    intro:
      "Custom Shopify storefronts engineered for speed and checkout conversion — theme development, app integrations, payment and courier sync, and product-level SEO.",
    serviceType: "Shopify Development",
    sections: [
      {
        heading: "Custom Shopify Store Build",
        body: "Bespoke theme development, sticky add-to-cart product pages and streamlined checkout flows that reduce drop-offs.",
      },
      {
        heading: "Integrations & Automation",
        body: "Payment gateways, courier and inventory sync, Klaviyo email/WhatsApp flows and multi-channel catalog feeds.",
      },
      {
        heading: "E-Commerce SEO",
        body: "Collection and product page optimization, Product schema and faceted navigation control for high-intent buyer traffic.",
      },
    ],
  },
];

export const getServiceRoute = (slug: string): ServiceRouteDef | undefined =>
  SERVICE_ROUTES.find((r) => r.slug === slug);

/** Category id -> clean service page slug (used for internal linking). */
export const getServiceSlugForCategory = (categoryId: string): string | undefined =>
  SERVICE_ROUTES.find((r) => r.categoryId === categoryId && !r.subServiceId)?.slug;

export const getServiceCanonical = (slug: string): string =>
  `${SEO_CONFIG.siteUrl}/services/${slug}`;

export const getServiceSchema = (def: ServiceRouteDef) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${getServiceCanonical(def.slug)}#service`,
  name: def.h1,
  serviceType: def.serviceType,
  description: def.description,
  url: getServiceCanonical(def.slug),
  provider: {
    "@type": "ProfessionalService",
    "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    name: SEO_CONFIG.siteName,
    telephone: SEO_CONFIG.telephone,
    email: SEO_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SEO_CONFIG.address.streetAddress,
      addressLocality: SEO_CONFIG.address.addressLocality,
      addressRegion: SEO_CONFIG.address.addressRegion,
      postalCode: SEO_CONFIG.address.postalCode,
      addressCountry: SEO_CONFIG.address.addressCountry,
    },
  },
  areaServed: [
    { "@type": "City", name: "Rajkot" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${def.label} Deliverables`,
    itemListElement: def.sections.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: { "@type": "Service", name: s.heading, description: s.body },
    })),
  },
});

export const getServiceBreadcrumbSchema = (def: ServiceRouteDef) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SEO_CONFIG.siteUrl}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SEO_CONFIG.siteUrl}/services` },
    { "@type": "ListItem", position: 3, name: def.label, item: getServiceCanonical(def.slug) },
  ],
});
