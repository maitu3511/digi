import React from "react";
import { Send, PhoneCall, Sparkles, CheckCircle2 } from "lucide-react";
import founderPhotoNew from "../assets/founder-photo-new.png";
import { AGENCY_CONFIG } from "../data/agencyData";
import { PageType } from "../types";
import { ScrollReveal } from "./motion/MotionReveal";
import { motion } from "motion/react";

export interface IsBusinessReadySectionProps {
  serviceTitle?: string;
  categoryTitle?: string;
  customHighlight?: string;
  customDescription?: string;
  onOpenConsultation: (prefillTopic?: string) => void;
  onNavigate?: (page: PageType) => void;
  className?: string;
}

/**
 * Intelligent topic resolver for service-specific highlights & descriptions.
 * Matches exact wording and styling from the user's reference design.
 */
function getServiceTopicDetails(serviceTitle?: string, categoryTitle?: string) {
  const query = `${serviceTitle || ""} ${categoryTitle || ""}`.toLowerCase().trim();

  if (!query) {
    return {
      topic: "Web Design and Digital Marketing",
      highlightLine1: "Grow with Strategic Web Design and",
      highlightLine2: "Digital Marketing Company?",
      description:
        "We bring innovative ideas in web design along with effective marketing techniques that can work wonders for your business in making you stand out.",
    };
  }

  // 1. SEO / Search Engine Optimization
  if (query.includes("seo") || query.includes("search engine") || query.includes("ranking")) {
    return {
      topic: "SEO & Search Authority",
      highlightLine1: "Dominate Google Rankings with",
      highlightLine2: "Strategic SEO & Organic Authority?",
      description:
        "We engineer high-intent keyword strategies, technical audits, and authoritative link networks that drive consistent qualified traffic and scale long-term revenue.",
    };
  }

  // 2. Web Design & Development
  if (
    query.includes("web") ||
    query.includes("website") ||
    query.includes("development") ||
    query.includes("landing")
  ) {
    return {
      topic: "Web Design & Development",
      highlightLine1: "Grow with Strategic Web Design and",
      highlightLine2: "High-Converting Development?",
      description:
        "We bring innovative ideas in web design along with effective marketing techniques that can work wonders for your business in making you stand out.",
    };
  }

  // 3. Social Media Marketing
  if (
    query.includes("social") ||
    query.includes("instagram") ||
    query.includes("facebook") ||
    query.includes("linkedin")
  ) {
    return {
      topic: "Social Media Marketing",
      highlightLine1: "Build Unshakable Brand Authority with",
      highlightLine2: "Strategic Social Media Marketing?",
      description:
        "We curate viral visual campaigns, thumb-stopping creative storytelling, and data-backed distribution strategies that turn followers into active brand advocates.",
    };
  }

  // 4. Performance Ads / Google Ads / Meta Ads / PPC
  if (
    query.includes("ad") ||
    query.includes("ppc") ||
    query.includes("pay-per-click") ||
    query.includes("meta ads") ||
    query.includes("google ads")
  ) {
    return {
      topic: "Performance & Paid Advertising",
      highlightLine1: "Maximize Qualified Inquiries with",
      highlightLine2: "High-ROI Performance Ads?",
      description:
        "We build precision Google Search, Performance Max, and Meta ad funnels that eliminate wasted ad spend and deliver predictable, scalable customer acquisition.",
    };
  }

  // 5. Influencer Marketing
  if (query.includes("influencer") || query.includes("creator")) {
    return {
      topic: "Influencer Marketing",
      highlightLine1: "Amplify Brand Reach & Trust with",
      highlightLine2: "Strategic Influencer Marketing?",
      description:
        "We partner your business with vetted niche creators and industry tastemakers to ignite viral social proof, authentic endorsement, and measurable conversions.",
    };
  }

  // 6. Graphic Design & Branding
  if (
    query.includes("graphic") ||
    query.includes("brand") ||
    query.includes("logo") ||
    query.includes("identity")
  ) {
    return {
      topic: "Graphic Design & Branding",
      highlightLine1: "Make Your Brand Unforgettable with",
      highlightLine2: "Strategic Graphic & Visual Design?",
      description:
        "From iconic brand identities to premium marketing collateral and product packaging, we craft timeless visual aesthetics that command industry prestige.",
    };
  }

  // 7. Content Creation & Video Production
  if (
    query.includes("content") ||
    query.includes("video") ||
    query.includes("film") ||
    query.includes("reel")
  ) {
    return {
      topic: "Content & Video Production",
      highlightLine1: "Engage & Convert Audiences with",
      highlightLine2: "Strategic Content & Video Production?",
      description:
        "We produce cinematic commercial reels, authoritative thought-leadership copy, and engaging digital media engineered to drive organic shares and client trust.",
    };
  }

  // 8. E-Commerce Solutions
  if (
    query.includes("ecommerce") ||
    query.includes("e-commerce") ||
    query.includes("shopify") ||
    query.includes("store")
  ) {
    return {
      topic: "E-Commerce Solutions",
      highlightLine1: "Skyrocket Online Orders & Retention with",
      highlightLine2: "Strategic E-Commerce Marketing?",
      description:
        "We optimize frictionless shopping experiences, multi-channel catalog marketing, and automated retention funnels to maximize your store's GMV and profitability.",
    };
  }

  // 9. Mobile App Development
  if (
    query.includes("app") ||
    query.includes("mobile") ||
    query.includes("ios") ||
    query.includes("android")
  ) {
    return {
      topic: "Mobile App Development",
      highlightLine1: "Captivate Mobile Users with",
      highlightLine2: "Custom Mobile App Development?",
      description:
        "We build blazing-fast native and cross-platform mobile applications with intuitive UI/UX architecture and robust backend infrastructure that scale effortlessly.",
    };
  }

  // 10. Regional / Cities / Local SEO
  if (
    query.includes("city") ||
    query.includes("area") ||
    query.includes("local") ||
    query.includes("regional")
  ) {
    return {
      topic: "Local & Regional Growth",
      highlightLine1: "Dominate Local Search & Inquiries with",
      highlightLine2: "Strategic City-Wide Marketing?",
      description:
        "We optimize Google Maps rankings, local landing pages, and geo-targeted ad campaigns to establish your business as the preferred choice in your market.",
    };
  }

  // Default fallback for any specific service title
  const activeTitle = serviceTitle || categoryTitle || "Digital Marketing";
  return {
    topic: activeTitle,
    highlightLine1: "Scale Revenue & Outpace Rivals with",
    highlightLine2: `Strategic ${activeTitle}?`,
    description: `We bring innovative strategic concepts and battle-tested execution in ${activeTitle} that can work wonders for your business in making you stand out.`,
  };
}

export const IsBusinessReadySection: React.FC<IsBusinessReadySectionProps> = ({
  serviceTitle,
  categoryTitle,
  customHighlight,
  customDescription,
  onOpenConsultation,
  onNavigate,
  className = "",
}) => {
  const content = getServiceTopicDetails(serviceTitle, categoryTitle);
  const effectiveDescription = customDescription || content.description;

  const handleProposalClick = () => {
    onOpenConsultation(`Proposal Request: ${content.topic}`);
  };

  const handleContactClick = () => {
    if (onNavigate) {
      onNavigate("contact");
    } else {
      onOpenConsultation(`Direct Contact: ${content.topic}`);
    }
  };

  return (
    <section
      className={`relative w-full bg-[#FAF9F5] border-y border-[#E8E1D0] overflow-hidden pt-12 sm:pt-16 lg:pt-16 pb-12 sm:pb-16 lg:pb-0 ${className}`}
      id="is-business-ready-section"
    >
      {/* Subtle atmospheric ambient glows matching Digibasera gold and obsidian aesthetic */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#111111]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center lg:items-end">
          {/* Left Column: Typography & Action Pill (7 cols) */}
          <ScrollReveal
            direction="up"
            distance={28}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left lg:pb-16"
          >
            {/* Pre-Heading */}
            <div className="space-y-1">
              <span className="text-xl sm:text-2xl md:text-3xl font-medium text-[#111111] block tracking-tight font-heading">
                Is Your Business Ready to
              </span>

              {/* Dynamic Styled Heading with Website's Signature Gold Accent */}
              {customHighlight ? (
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold leading-[1.18] font-heading">
                  <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227]">
                    {customHighlight}
                  </span>
                </h2>
              ) : (
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold leading-[1.18] font-heading">
                  <span className="italic font-serif block text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227]">
                    {content.highlightLine1}
                  </span>
                  <span className="italic font-serif text-[#111111]">{content.highlightLine2}</span>
                </h2>
              )}
            </div>

            {/* Paragraph / Supporting Copy */}
            <p className="text-sm sm:text-base text-[#444444] leading-relaxed max-w-xl font-normal">
              {effectiveDescription}
            </p>

            {/* The Signature Action Pill in Digibasera Obsidian & Gold Palette */}
            <div className="pt-2">
              <div className="inline-flex items-center p-1 sm:p-1.5 rounded-full bg-gradient-to-r from-[#111111] via-[#1C1C1C] to-[#111111] hover:from-[#1C1C1C] hover:to-[#0A0A0A] transition-all shadow-[0_8px_28px_rgba(212,175,55,0.20)] hover:shadow-[0_12px_36px_rgba(212,175,55,0.32)] border-2 border-[#D4AF37]">
                {/* Left Action: Request Proposal */}
                <button
                  onClick={handleProposalClick}
                  className="flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-white/10 active:scale-95 transition-all text-xs sm:text-sm font-bold text-[#FAF9F5] hover:text-[#D4AF37] cursor-pointer select-none group"
                  id="pill-request-proposal"
                >
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] fill-[#D4AF37] -rotate-12 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Request Proposal</span>
                </button>

                {/* Center "OR" Badge in Gold */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#111111] font-black text-[10px] sm:text-[11px] flex items-center justify-center shadow-xs shrink-0 mx-1 select-none animate-pulse-gold">
                  OR
                </div>

                {/* Right Action: Contact Now */}
                <a
                  href={`tel:${AGENCY_CONFIG.phoneRaw}`}
                  onClick={(e) => {
                    if (window.innerWidth >= 1024 && onNavigate) {
                      e.preventDefault();
                      handleContactClick();
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-white/10 active:scale-95 transition-all text-xs sm:text-sm font-bold text-[#FAF9F5] hover:text-[#D4AF37] cursor-pointer select-none group"
                  id="pill-contact-now"
                >
                  <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] fill-[#D4AF37] group-hover:rotate-12 transition-transform" />
                  <span>Contact Now</span>
                </a>
              </div>
            </div>

            {/* Quick Guarantees under the pill */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#666666] pt-1">
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Zero-Obligation Proposal
              </span>
              <span className="hidden sm:inline text-[#D4AF37]/50">•</span>
              <span className="flex items-center gap-1.5 font-medium">
                Direct Strategist Line:{" "}
                <strong className="text-[#111111]">{AGENCY_CONFIG.phoneDisplay}</strong>
              </span>
            </div>
          </ScrollReveal>

          {/* Right Column: Founder Cutout with Laptop & Name Plate (5 cols) — Anchored to bottom */}
          <ScrollReveal
            direction="up"
            delay={0.15}
            distance={20}
            className="lg:col-span-5 flex flex-col justify-end items-center lg:items-end self-end pt-6 lg:pt-0 relative"
          >
            <div className="relative flex justify-center items-end group">
              <motion.img
                src={founderPhotoNew}
                alt="Firasat Ali - Founder & Chief Strategist, Digibasera"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-auto h-auto max-h-[390px] sm:max-h-[450px] lg:max-h-[500px] object-contain object-bottom select-none pointer-events-none drop-shadow-[0_16px_28px_rgba(0,0,0,0.12)] transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Founder Name & Leadership Tag */}
              <div className="absolute bottom-4 left-2 sm:left-4 lg:-left-4 bg-[#111111]/95 text-white backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#D4AF37]/60 shadow-[0_10px_24px_rgba(0,0,0,0.30)] flex items-center gap-3 select-none max-w-[calc(100%-1rem)]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
                <div className="text-left min-w-0">
                  <div className="flex items-center gap-1.5 flex-nowrap">
                    <span className="text-xs sm:text-sm font-bold text-white tracking-tight font-heading whitespace-nowrap">
                      Firasat Ali
                    </span>
                    <span className="text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded bg-[#D4AF37] text-[#111111] whitespace-nowrap shrink-0">
                      Founder
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#E8E1D0]/90 font-medium whitespace-nowrap">
                    Founder &amp; Chief Strategist, Digibasera
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
