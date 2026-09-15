import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { INDUSTRIES } from "../data/agencyData";
import { TypewriterText } from "./TypewriterText";
import {
  Building,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Factory,
  Store,
  Utensils,
  Landmark,
  Briefcase,
  Rocket,
  MapPin,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  X,
  CheckCircle2,
  Target,
  Layers,
  Radio,
  Clock,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getServiceWhatsAppUrl } from "../utils/whatsapp";

interface IndustriesSectionProps {
  onOpenConsultation: (industryName?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenConsultation }) => {
  // Details open only when a user clicks on an industry box (defaults to null)
  const [selectedIndustryId, setSelectedIndustryId] = useState<string | null>(null);
  const industryDetailsRef = useRef<HTMLDivElement>(null);

  const getIndustryIcon = (iconName: string, className = "w-4 h-4") => {
    switch (iconName) {
      case "Building":
        return <Building className={`${className} text-[#D4AF37]`} />;
      case "HeartPulse":
        return <HeartPulse className={`${className} text-[#D4AF37]`} />;
      case "ShoppingBag":
        return <ShoppingBag className={`${className} text-[#D4AF37]`} />;
      case "GraduationCap":
        return <GraduationCap className={`${className} text-[#D4AF37]`} />;
      case "Factory":
        return <Factory className={`${className} text-[#D4AF37]`} />;
      case "Store":
        return <Store className={`${className} text-[#D4AF37]`} />;
      case "Utensils":
        return <Utensils className={`${className} text-[#D4AF37]`} />;
      case "Landmark":
        return <Landmark className={`${className} text-[#D4AF37]`} />;
      case "Briefcase":
        return <Briefcase className={`${className} text-[#D4AF37]`} />;
      case "Rocket":
        return <Rocket className={`${className} text-[#D4AF37]`} />;
      case "MapPin":
        return <MapPin className={`${className} text-[#D4AF37]`} />;
      case "Sparkles":
        return <Sparkles className={`${className} text-[#D4AF37]`} />;
      default:
        return <ShieldCheck className={`${className} text-[#D4AF37]`} />;
    }
  };

  const handleSelectIndustry = (id: string) => {
    setSelectedIndustryId((prev) => {
      if (prev === id) {
        return null;
      }
      setTimeout(() => {
        industryDetailsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 120);
      return id;
    });
  };

  const currentIndustry = selectedIndustryId
    ? INDUSTRIES.find((i) => i.id === selectedIndustryId) || null
    : null;

  return (
    <section
      className="relative py-24 bg-[#F8F8F6] border-y border-[#E8E1D0]"
      id="industries-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>NICHE DOMAIN EXPERTISE & GROUND SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-heading tracking-tight leading-tight min-h-[1.2em]">
            <TypewriterText
              phrases={[
                "Tailored for High-Impact Industries",
                "Specialized Growth Strategies",
                "Engineered for Market Leaders",
              ]}
            />
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-4 leading-relaxed">
            We don&apos;t run generic, one-size-fits-all campaigns. Explore below to see the exact,
            specialized marketing services, funnels, and deliverables we deploy for your specific
            industry.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#9A7B16] font-semibold bg-white px-3 py-1 rounded-full border border-[#E8E1D0]">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>
              Click any industry box below to open the specialized services, channels & deliverables
            </span>
          </div>
        </motion.div>

        {/* Industry Pills / Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
          {INDUSTRIES.map((ind, idx) => {
            const isSelected = selectedIndustryId === ind.id;
            return (
              <motion.button
                key={ind.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                whileHover={{ y: -3 }}
                onClick={() => handleSelectIndustry(ind.id)}
                className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col items-center justify-between text-center gap-2 relative group cursor-pointer ${
                  isSelected
                    ? "bg-[#111111] text-white border-[#D4AF37] shadow-[0_10px_25px_rgba(212,175,55,0.25)] scale-[1.03] ring-1 ring-[#D4AF37]"
                    : "bg-white border-[#E8E1D0] text-[#555555] hover:text-[#111111] hover:border-[#D4AF37] hover:bg-[#FAF9F5]"
                }`}
              >
                <div
                  className={`p-2 rounded-lg transition-colors ${
                    isSelected
                      ? "bg-[#222222] border border-[#D4AF37]/40"
                      : "bg-[#F8F8F6] border border-[#E8E1D0] group-hover:border-[#D4AF37]/50"
                  }`}
                >
                  {getIndustryIcon(ind.iconName)}
                </div>
                <span className="text-xs font-bold leading-tight font-heading">{ind.name}</span>
                <span
                  className={`text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded transition-colors ${
                    isSelected
                      ? "bg-[#D4AF37] text-[#111111]"
                      : "text-[#888888] group-hover:text-[#9A7B16] bg-[#FAF8F2]"
                  }`}
                >
                  {isSelected ? "Open • Tap to Close" : "Click to View"}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Industry Spotlight Card (Deep-Dive) - opens on click only */}
        <AnimatePresence mode="wait">
          {selectedIndustryId && currentIndustry && (
            <motion.div
              key={currentIndustry.id}
              ref={industryDetailsRef}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-3xl bg-white border-2 border-[#D4AF37]/60 p-6 sm:p-10 shadow-[0_18px_50px_-10px_rgba(212,175,55,0.18)] relative overflow-hidden"
            >
              {/* Header Area */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E8E1D0]">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#111111] bg-[#D4AF37]/20 px-2.5 py-1 rounded-md border border-[#D4AF37]/40 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#9A7B16]" />
                      <span>Specialized Industry Framework</span>
                    </span>
                    {currentIndustry.tagline && (
                      <span className="text-xs font-semibold text-[#887028] italic">
                        • {currentIndustry.tagline}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3.5 pt-1">
                    <div className="w-12 h-12 rounded-xl bg-[#111111] border border-[#D4AF37] flex items-center justify-center shadow-xs shrink-0">
                      {getIndustryIcon(currentIndustry.iconName, "w-6 h-6")}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading tracking-tight">
                        {currentIndustry.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#555555] mt-1 leading-relaxed">
                        {currentIndustry.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benchmark, Target Audience & Close Button */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-72">
                  <div className="flex items-center justify-end">
                    <button
                      onClick={() => setSelectedIndustryId(null)}
                      className="px-3.5 py-2 rounded-xl bg-[#FAF8F2] hover:bg-[#F3EACB] border border-[#E8E1D0] hover:border-[#D4AF37] text-xs font-bold text-[#555555] hover:text-[#111111] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                      title="Close Industry Scope"
                      aria-label="Close Industry Scope"
                    >
                      <X className="w-4 h-4 text-[#9A7B16]" />
                      <span>Close Details</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0] space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16] block">
                      Target Benchmark
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#111111] font-heading block">
                      {currentIndustry.metricsPlaceholder}
                    </span>
                  </div>

                  {currentIndustry.coreChannels && (
                    <div className="p-3.5 rounded-xl bg-white border border-[#E8E1D0] space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#666666] flex items-center gap-1">
                        <Radio className="w-3 h-3 text-[#D4AF37]" />
                        <span>Core Marketing Channels:</span>
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {currentIndustry.coreChannels.map((ch, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-semibold text-[#111111] bg-[#FAF8F2] border border-[#E8E1D0] px-2 py-0.5 rounded"
                          >
                            {ch}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* In-Depth Services Offered Section */}
              <div className="mt-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#111111] font-heading flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#D4AF37]" />
                      <span>Services We Deliver For {currentIndustry.name}</span>
                    </h4>
                    <p className="text-xs text-[#666666] mt-0.5">
                      Clear point-to-point scope of work and tangible components included in our
                      campaigns:
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-[#9A7B16] bg-[#FAF8F2] px-3 py-1 rounded-full border border-[#E8E1D0] self-start sm:self-auto">
                    4 Turnkey Services Included
                  </span>
                </div>

                {/* 4 Detailed Services Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {currentIndustry.servicesOffered && currentIndustry.servicesOffered.length > 0 ? (
                    currentIndustry.servicesOffered.map((srv, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#E8E1D0] hover:border-[#D4AF37] transition-all duration-200 flex flex-col justify-between space-y-3 group"
                      >
                        <div className="space-y-2">
                          <div className="flex items-start gap-2.5">
                            <span className="w-6 h-6 rounded-lg bg-[#111111] text-[#D4AF37] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                              0{idx + 1}
                            </span>
                            <h5 className="text-sm sm:text-base font-bold text-[#111111] font-heading group-hover:text-[#9A7B16] transition-colors leading-snug">
                              {srv.title}
                            </h5>
                          </div>
                          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed pl-8.5">
                            {srv.description}
                          </p>
                        </div>

                        {/* Deliverables Checklist */}
                        {srv.highlights && srv.highlights.length > 0 && (
                          <div className="pt-3 border-t border-[#EAE3D2] pl-8.5 space-y-1.5">
                            {srv.highlights.map((high, hIdx) => (
                              <div
                                key={hIdx}
                                className="flex items-start gap-2 text-xs text-[#333333]"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#9A7B16] shrink-0 mt-0.5" />
                                <span>{high}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 p-4 rounded-xl bg-gray-50 text-sm text-gray-500">
                      Detailed services tailored upon inquiry.
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Row: Sector Bottleneck vs Digibasera Solution + Call to Action */}
              <div className="grid lg:grid-cols-12 gap-4 mt-8 pt-6 border-t border-[#E8E1D0] items-stretch">
                {/* Sector Bottleneck */}
                <div className="lg:col-span-4 p-5 rounded-2xl bg-[#FFFDF7] border border-[#E8E1D0] space-y-1.5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#888888] uppercase tracking-widest block">
                      Common Sector Bottleneck
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-[#111111] mt-1">
                      Why Most Agencies Fail in This Niche:
                    </h5>
                    <p className="text-xs text-[#555555] mt-2 leading-relaxed">
                      {currentIndustry.keyChallenge}
                    </p>
                  </div>
                  {currentIndustry.targetAudience && (
                    <div className="pt-3 border-t border-[#EAE3D2] text-[11px] text-[#777777]">
                      <span className="font-bold text-[#111111]">Primary Audience: </span>
                      {currentIndustry.targetAudience}
                    </div>
                  )}
                </div>

                {/* Digibasera Growth Solution */}
                <div className="lg:col-span-4 p-5 rounded-2xl bg-[#FAF8F2] border border-[#D4AF37]/50 space-y-1.5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#9A7B16] uppercase tracking-widest block">
                      The DigiBasera Growth Fix
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-[#111111] mt-1">
                      How Our Custom Architecture Converts:
                    </h5>
                    <p className="text-xs text-[#444444] mt-2 leading-relaxed">
                      {currentIndustry.growthSolution}
                    </p>
                  </div>
                  {currentIndustry.clientSuccessOutcome && (
                    <div className="pt-3 border-t border-[#EAE3D2] text-[11px] text-[#222222] font-medium">
                      <span className="font-bold text-[#9A7B16]">Expected Result: </span>
                      {currentIndustry.clientSuccessOutcome}
                    </div>
                  )}
                </div>

                {/* Direct Action Box */}
                <div className="lg:col-span-4 rounded-2xl bg-[#111111] border border-[#D4AF37] p-5 sm:p-6 text-white flex flex-col justify-between shadow-md space-y-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                      <Sparkles className="w-3 h-3" />
                      <span>Ready to Deploy for {currentIndustry.name}?</span>
                    </div>
                    <h5 className="text-sm sm:text-base font-bold text-white font-heading mt-1">
                      Get a custom-crafted growth proposal for your brand.
                    </h5>
                    <p className="text-xs text-[#CCCCCC] mt-1 leading-relaxed">
                      No generic decks. We review your current online presence and send a custom
                      strategy.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() => onOpenConsultation(currentIndustry.name)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer hover:scale-[1.02]"
                    >
                      <span>Request {currentIndustry.name} Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={getServiceWhatsAppUrl(
                        `Services for ${currentIndustry.name}`,
                        "Industry Solutions",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Close Bar */}
              <div className="mt-8 pt-4 border-t border-[#E8E1D0] flex items-center justify-between text-xs">
                <span className="text-[#666666]">
                  Industry Framework:{" "}
                  <strong className="text-[#111111]">{currentIndustry.name}</strong>
                </span>
                <button
                  onClick={() => setSelectedIndustryId(null)}
                  className="font-bold text-[#9A7B16] hover:text-[#7A6010] flex items-center gap-1.5 cursor-pointer transition-colors px-3 py-1.5 rounded-lg bg-[#FAF8F2] border border-[#E8E1D0] hover:border-[#D4AF37]"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Close Industry Scope</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
