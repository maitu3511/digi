import React from "react";
import { motion } from "motion/react";
import { OptimizedImage } from "./ui/OptimizedImage";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  BarChart2,
  Code2,
  TrendingUp,
  Award,
} from "lucide-react";
import { AGENCY_CONFIG } from "../data/agencyData";

interface AboutSectionProps {
  onOpenConsultation: () => void;
  onNavigateToServices: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenConsultation,
  onNavigateToServices,
}) => {
  const pillars = [
    { title: "Strategy", desc: "Market positioning & competitive moats", icon: Target },
    { title: "Creativity", desc: "Brand narrative & high-conversion visuals", icon: Sparkles },
    { title: "Technology", desc: "Fast, secure & conversion-tuned architecture", icon: Code2 },
    { title: "Data", desc: "Attribution analytics & real-time telemetry", icon: BarChart2 },
    { title: "Performance", desc: "High-intent lead & revenue acquisition", icon: TrendingUp },
  ];

  const features = [
    {
      title: "Result-focused strategies",
      desc: "We measure success in booked client meetings, closed sales, and verified return on ad spend.",
    },
    {
      title: "Customized solutions",
      desc: "Tailored roadmaps matching your exact unit economics, margins, and target commercial personas.",
    },
    {
      title: "Transparent reporting",
      desc: "Real-time dashboards with 24/7 visibility into lead velocity, ad spend, and organic ranking shifts.",
    },
    {
      title: "Long-term growth approach",
      desc: "Building sustainable digital assets that compound value over quarters, not just quick temporary spikes.",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white" id="about-section">
      {/* Subtle Topic-Related Background Texture & Warm Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=75"
          alt="DigiBasera Strategy Environment"
          className="w-full h-full object-cover object-center opacity-10 filter grayscale mix-blend-multiply"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E1D0] bg-white shadow-[0_15px_40px_-15px_rgba(17,17,17,0.08)] p-6 sm:p-8">
              {/* Image & Overlay Visual */}
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden mb-6 group border border-[#E8E1D0]">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Digibasera Agency Strategic Team at Work"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-[#111111]/90 px-2.5 py-1 rounded border border-[#D4AF37]/50 inline-block">
                    INTEGRATED GROWTH WING
                  </span>
                  <h4 className="text-lg font-bold text-white font-heading mt-1">
                    Strategy • Engineering • Performance
                  </h4>
                </div>
              </div>

              {/* 5 Core Pillars Mini Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="p-3 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] hover:border-[#D4AF37] transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span className="text-xs font-bold text-[#111111] font-heading">
                          {pillar.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#555555] leading-tight">{pillar.desc}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Floating Zinmatt Associate Pill */}
              <div className="mt-4 pt-4 border-t border-[#E8E1D0] flex items-center justify-between text-xs text-[#555555]">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>
                    Business Associate of{" "}
                    <strong className="text-[#111111] font-bold">Zinmatt</strong>
                  </span>
                </div>
                <span className="text-[10px] bg-[#F8F8F6] text-[#9A7B16] px-2 py-0.5 rounded border border-[#E8E1D0] font-mono">
                  ISO & Govt Aligned
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: About Content & 4 Feature Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>ABOUT DIGIBASERA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] font-heading tracking-tight leading-tight">
                Your Strategic Growth Partner in the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227] italic font-serif">
                  Digital Space
                </span>
              </h2>
            </div>

            <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
              We are a full-service Digital Marketing & Technology Agency built for ambitious
              founders, brands, and enterprises. We combine{" "}
              <strong className="text-[#111111] font-semibold">
                Strategy, Creativity, Technology, Data, and Performance Marketing
              </strong>{" "}
              to solve complex acquisition bottlenecks and generate dependable commercial growth.
            </p>

            <p className="text-[#555555] text-xs sm:text-sm leading-relaxed">
              Instead of relying on vanity social metrics or opaque reports, we align directly with
              your revenue targets. From high-converting web architecture to page-1 Google rankings
              and high-ROAS paid media funnels, our multidisciplinary team executes with precision.
            </p>

            {/* 4 Feature Points with Checkmarks */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] hover:border-[#D4AF37] transition-all"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#111111] font-heading">
                        {feature.title}
                      </h4>
                      <p className="text-[11px] text-[#555555] mt-1 leading-snug">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-md bg-[#111111] hover:bg-[#1E1E1E] text-white font-bold text-xs uppercase tracking-wider border border-[#D4AF37] shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center gap-2"
                id="about-cta-grow"
              >
                <span>Let's Grow Your Business</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <button
                onClick={onNavigateToServices}
                className="px-5 py-3.5 rounded-md bg-white hover:bg-[#F8F8F6] text-[#555555] hover:text-[#111111] border border-[#E8E1D0] font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Explore All Services</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
