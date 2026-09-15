import React, { useEffect } from "react";
import {
  LOCAL_BUSINESS_SCHEMA,
  WEBSITE_SCHEMA,
  SERVICES_SCHEMA,
  PORTFOLIO_ITEM_LIST_SCHEMA,
  TRAINING_COURSE_SCHEMA,
  PROCESS_HOWTO_SCHEMA,
  FAQ_SCHEMA,
  SEO_CONFIG,
  PAGE_SEO_CONFIG,
  getBreadcrumbSchema,
} from "../data/seoData";
import { PageType } from "../types";

interface SEOHeadProps {
  currentPage?: PageType;
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  serviceSchema?: object;
  serviceBreadcrumbSchema?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  currentPage = "home",
  title,
  description,
  canonical,
  keywords,
  ogType = "website",
  ogImage = SEO_CONFIG.ogImage,
  serviceSchema,
  serviceBreadcrumbSchema,
}) => {
  const currentSEO = PAGE_SEO_CONFIG[currentPage] || PAGE_SEO_CONFIG.home;

  const finalTitle = title || currentSEO.title;
  const finalDesc = description || currentSEO.description;
  const finalCanonical = canonical || currentSEO.canonical;
  const finalKeywords = keywords || currentSEO.keywords;

  useEffect(() => {
    // 1. Title
    document.title = finalTitle;

    // Helper to safely set/create meta tag
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard Meta Tags
    setMeta("description", finalDesc);
    setMeta("keywords", finalKeywords);
    setMeta("author", SEO_CONFIG.author);
    setMeta(
      "robots",
      currentPage === "admin"
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );

    // Open Graph
    setMeta("og:title", finalTitle, true);
    setMeta("og:description", finalDesc, true);
    setMeta("og:url", finalCanonical, true);
    setMeta("og:type", ogType, true);
    setMeta("og:site_name", SEO_CONFIG.siteName, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:locale", "en_IN", true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", finalTitle);
    setMeta("twitter:description", finalDesc);
    setMeta("twitter:image", ogImage);

    // Geographic Meta for Local Rajkot & Gujarat Dominance
    setMeta("geo.region", "IN-GJ");
    setMeta("geo.placename", "Rajkot, Gujarat, India");
    setMeta("geo.position", "22.2858;70.7850");
    setMeta("ICBM", "22.2858, 70.7850");

    // Canonical link tag
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", finalCanonical);

    // 2. Structured Data Injections
    const injectJsonLd = (id: string, schemaObj: object) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schemaObj);
    };

    // Always inject Organization & WebSite Schemas
    injectJsonLd("jsonld-local-business", LOCAL_BUSINESS_SCHEMA);
    injectJsonLd("jsonld-website-schema", WEBSITE_SCHEMA);

    // Inject Breadcrumb Schema for current page
    const pageNameCapitalized =
      currentPage === "home" ? "Home" : currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
    injectJsonLd("jsonld-breadcrumbs", getBreadcrumbSchema(pageNameCapitalized, finalCanonical));

    // Dedicated service-page schemas
    if (serviceSchema) {
      injectJsonLd("jsonld-service-page", serviceSchema);
    } else {
      document.getElementById("jsonld-service-page")?.remove();
    }
    if (serviceBreadcrumbSchema) {
      injectJsonLd("jsonld-service-breadcrumb", serviceBreadcrumbSchema);
    } else {
      document.getElementById("jsonld-service-breadcrumb")?.remove();
    }

    // Page-specific Schemas
    if (currentPage === "home" || currentPage === "services") {
      injectJsonLd("jsonld-services-catalog", SERVICES_SCHEMA);
    }
    if (currentPage === "home" || currentPage === "portfolio") {
      injectJsonLd("jsonld-portfolio-list", PORTFOLIO_ITEM_LIST_SCHEMA);
    }
    if (currentPage === "home" || currentPage === "process") {
      injectJsonLd("jsonld-process-howto", PROCESS_HOWTO_SCHEMA);
    }
    if (currentPage === "training") {
      injectJsonLd("jsonld-training-course", TRAINING_COURSE_SCHEMA);
    }
    if (
      currentPage === "home" ||
      currentPage === "portfolio" ||
      currentPage === "services" ||
      currentPage === "pricing" ||
      currentPage === "contact"
    ) {
      injectJsonLd("jsonld-faq-schema", FAQ_SCHEMA);
    }
  }, [
    finalTitle,
    finalDesc,
    finalCanonical,
    finalKeywords,
    ogType,
    ogImage,
    currentPage,
    serviceSchema,
    serviceBreadcrumbSchema,
  ]);

  return null;
};
