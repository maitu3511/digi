import portfolioHeroBg from "../assets/heroes/portfolio-hero.jpg";
import React from "react";
import { PortfolioSection } from "../components/PortfolioSection";
import { PortfolioFAQSection } from "../components/PortfolioFAQSection";
import { SEOHead } from "../components/SEOHead";
import { PageType } from "../types";
import { TrendingUp, Sparkles } from "lucide-react";

interface PortfolioPageProps {
  onNavigate?: (page: PageType) => void;
  onOpenConsultation: (serviceName?: string) => void;
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
  initialCategory?: string;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onOpenConsultation,
  initialCategory = "All",
}) => {
  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-[#FFFFFF] text-[#111111] animate-in fade-in duration-300">
      {/* Dynamic SEO Meta & Structured Data */}
      <SEOHead
        title="Portfolio Samples & Verified Client Work | DigiBasera Rajkot"
        description="Explore our verified client portfolio samples including live websites, social media creative campaigns, and search performance growth case studies."
        canonical="https://digibasera.com/#portfolio"
      />

      {/* Page Hero Header with Background Image */}
      <div className="relative py-12 sm:py-16 mb-6 overflow-hidden border-b border-[#E8E1D0] bg-[#FAF9F5]">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <img
            decoding="async"
            fetchPriority="high"
            src={portfolioHeroBg}
            alt="Digibasera Client Portfolio Samples"
            className="w-full h-full object-cover object-center animate-hero-zoom opacity-20 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-[#FAF9F5]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-85" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3 font-heading shadow-xs backdrop-blur-xs">
            <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>100% Verified Client Samples</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] font-heading tracking-tight">
            Client Work &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227] italic font-serif">
              Portfolio Samples
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#555555] mt-3 max-w-3xl leading-relaxed">
            Explore our curated portfolio samples across website development, social media
            campaigns, SEO analytics, and digital brand execution.
          </p>
        </div>
      </div>

      {/* Main Container Content: Direct Samples Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <PortfolioSection
          initialCategory={initialCategory}
          onOpenConsultation={() => onOpenConsultation("Portfolio Sample Strategy Session")}
        />

        {/* FAQ Section */}
        <PortfolioFAQSection
          onOpenConsultation={(service) =>
            onOpenConsultation(service || "SEO Strategy Consultation")
          }
        />
      </div>

      {/* Bottom Conversion CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#111111] text-white border border-[#D4AF37] space-y-4 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4AF37] border border-[#D4AF37]/40 text-[11px] font-bold uppercase tracking-widest font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Ready For Measurable Growth?</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading">
            Want to Achieve Similar Commercial Benchmarks?
          </h3>
          <p className="text-xs sm:text-sm text-[#E8E1D0] max-w-xl mx-auto leading-relaxed">
            Let's evaluate your brand presence, search ranking potentials, and advertising funnels
            to build an actionable, high-ROI growth blueprint.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenConsultation("Portfolio Benchmark Strategy Session")}
              className="px-6 py-3.5 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Growth Strategy Session</span>
            </button>
            <button
              onClick={() => onOpenConsultation("Direct Contact Inquiry")}
              className="px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Contact Our Rajkot Team</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
