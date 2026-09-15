import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Clock,
  Award,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface FAQItem {
  question: string;
  answer: string;
  tags: string[];
}

const FAQS: FAQItem[] = [
  {
    question: "Why choose DigiBasera for digital marketing & SEO in Rajkot, Gujarat?",
    answer:
      "DigiBasera combines performance marketing expertise with custom high-speed web development. We deliver verified business results: ranking on page 1 of Google, driving qualified local buyer inquiries, and optimizing ad spend for high ROAS. We provide 100% transparent dashboards and real-time support.",
    tags: ["SEO", "Rajkot Agency", "Growth"],
  },
  {
    question: "How long does it take to see organic search ranking results on Google?",
    answer:
      "Local 3-Pack and long-tail keyword improvements typically start showing measurable gains within 60 to 90 days. High-competition national keywords and compounding organic lead volume solidify strongly within 4 to 6 months of systematic technical SEO, content structuring, and local citations.",
    tags: ["SEO Timeline", "Google Ranking"],
  },
  {
    question: "Are all client websites custom built and mobile responsive?",
    answer:
      "Yes, every website we design (including ABFI Interior, Super India Interior, and Premium Pack Co) is custom-crafted, 100% mobile-responsive, and optimized for Google Core Web Vitals (90+ score). We include automated schema markup, WhatsApp lead triggers, and high-conversion UX.",
    tags: ["Web Design", "Core Web Vitals"],
  },
  {
    question: "Can DigiBasera handle both paid ads (Google/Meta) and social media content?",
    answer:
      "Absolutely. We design aesthetic, brand-aligned creative posts, reels, and carousels while simultaneously building targeted PPC ad funnels on Google Ads and Meta (Facebook/Instagram) to capture both immediate demand and long-term brand equity.",
    tags: ["Google Ads", "Meta Ads", "Social Media"],
  },
  {
    question: "How do I start with a free digital audit or consultation?",
    answer:
      'Simply click "Request Free Audit" or reach out via WhatsApp at +91 91730 08118. Our strategists will review your existing website, keyword visibility, and competitor landscape to provide a customized growth blueprint.',
    tags: ["Consultation", "Free Audit"],
  },
];

interface PortfolioFAQSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const PortfolioFAQSection: React.FC<PortfolioFAQSectionProps> = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      aria-label="Frequently Asked Questions & Agency Highlights"
      className="pt-16 pb-6 border-t border-[#E8E1D0]"
      id="seo-faq-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Local Authority Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest font-heading shadow-2xs">
              <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Search Engine Optimization & FAQs</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] font-heading tracking-tight">
              Frequently Asked Questions &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227] italic font-serif">
                Agency Highlights
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              Everything you need to know about partnering with DigiBasera for website development,
              local SEO in Rajkot, social media creative production, and revenue-driven performance
              marketing.
            </p>

            {/* Local Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0] space-y-1.5">
                <div className="flex items-center gap-2 text-[#111111] font-bold text-xs">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Rajkot & Gujarat Focus</span>
                </div>
                <p className="text-[11px] text-[#666666]">
                  Deep local market expertise across Saurashtra & pan-India enterprises.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0] space-y-1.5">
                <div className="flex items-center gap-2 text-[#111111] font-bold text-xs">
                  <TrendingUp className="w-4 h-4 text-[#D4AF37]" />
                  <span>High-ROI Focus</span>
                </div>
                <p className="text-[11px] text-[#666666]">
                  Every campaign structured for qualified leads, sales, and high ROAS.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#111111] text-white border border-[#D4AF37] space-y-3">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Need Custom Strategy?
                </span>
              </div>
              <p className="text-xs text-[#E8E1D0]/80 leading-relaxed">
                Speak directly with our senior digital growth consultants today for a free SEO audit
                and proposal.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => onOpenConsultation("FAQ Section Free Audit")}
                  className="px-4 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Get Free Audit
                </button>
                <a
                  href={getWhatsAppUrl(
                    "Hi DigiBasera team, I have questions about your digital marketing and SEO services.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 transition-colors"
                  title="Chat on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion FAQ List */}
          <div className="lg:col-span-7 space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#D4AF37] shadow-sm"
                      : "bg-[#FAF9F5] hover:bg-white border-[#E8E1D0]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-4 text-left flex items-start justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#111111] block leading-snug">
                        {faq.question}
                      </span>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {faq.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[9px] px-2 py-0.5 rounded-full bg-[#E8E1D0]/40 text-[#666666] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 mt-0.5 ${
                        isOpen
                          ? "bg-[#111111] text-[#D4AF37] border-[#D4AF37] rotate-180"
                          : "bg-white text-[#666666] border-[#E8E1D0]"
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-[#555555] leading-relaxed border-t border-[#E8E1D0]/40 animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
