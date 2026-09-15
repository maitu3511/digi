import React, { useState } from "react";
import { motion } from "motion/react";
import { WHY_CHOOSE_US } from "../data/agencyData";
import { TypewriterText } from "./TypewriterText";
import { WhyChooseUsItem } from "../types";
import { WhyChooseUsModal } from "./WhyChooseUsModal";
import {
  Target,
  BarChart2,
  Sparkles,
  Eye,
  TrendingUp,
  Users,
  ShieldCheck,
  ArrowRight,
  BookOpen,
} from "lucide-react";

interface WhyChooseUsProps {
  onOpenConsultation: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenConsultation }) => {
  const [selectedItem, setSelectedItem] = useState<WhyChooseUsItem | null>(null);

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case "Target":
        return <Target className="w-5 h-5 text-[#D4AF37]" />;
      case "BarChart2":
        return <BarChart2 className="w-5 h-5 text-[#D4AF37]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case "Eye":
        return <Eye className="w-5 h-5 text-[#D4AF37]" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Users className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section
      className="relative py-24 bg-[#F8F8F6] border-y border-[#E8E1D0] overflow-hidden"
      id="why-us-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>THE DIGIBASERA STANDARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-heading tracking-tight leading-tight min-h-[1.2em]">
            Why Businesses Choose{" "}
            <TypewriterText phrases={["Our Partnership", "DigiBasera", "Our Proven Growth"]} />
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-4 leading-relaxed">
            We operate as an accountable digital growth partner, combining strategic depth with
            rapid agile execution to drive measurable commercial returns.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#9A7B16] font-semibold bg-[#FAF8F2] px-3 py-1 rounded-full border border-[#E8E1D0]">
            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Click any pillar below to view in-depth strategy and execution details</span>
          </div>
        </motion.div>

        {/* 6 Cards Grid with Staggered Motion & Click Handlers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedItem(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open details for ${item.title}`}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all duration-300 group flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(17,17,17,0.05)] hover:shadow-[0_15px_35px_-10px_rgba(212,175,55,0.22)] relative overflow-hidden cursor-pointer select-none text-left"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#111111] border border-[#D4AF37]/50 flex items-center justify-center group-hover:scale-105 group-hover:border-[#D4AF37] transition-transform">
                    {getCardIcon(item.iconName)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16] bg-[#FAF8F2] px-2 py-0.5 rounded border border-[#E8E1D0] opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details
                    </span>
                    <span className="text-2xl font-bold text-[#E8E1D0] font-heading group-hover:text-[#D4AF37] transition-colors">
                      {item.number}
                    </span>
                  </div>
                </div>

                <span className="text-[9px] font-bold uppercase tracking-widest text-[#9A7B16] bg-[#FAF8F2] px-2.5 py-0.5 rounded border border-[#E8E1D0] mb-2.5 inline-block">
                  {item.highlight}
                </span>

                <h3 className="text-lg font-bold text-[#111111] font-heading mb-2.5 group-hover:text-[#9A7B16] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E1D0] flex items-center justify-between text-xs font-semibold group-hover:text-[#111111] transition-colors">
                <span className="text-xs font-bold text-[#111111] group-hover:text-[#9A7B16] transition-colors">
                  View Details
                </span>
                <div className="inline-flex items-center gap-1 text-[#9A7B16] group-hover:text-[#111111] transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#9A7B16] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#111111] border border-[#D4AF37] shadow-[0_10px_35px_rgba(212,175,55,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white font-heading">
              Ready to experience a transparent, result-first digital agency?
            </h4>
            <p className="text-xs text-[#E8E1D0] mt-1">
              Book a no-obligation 30-minute strategic consultation with our growth leaders.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] text-xs font-bold uppercase tracking-wider shrink-0 transition-colors shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Schedule Discovery Call
          </button>
        </motion.div>
      </div>

      {/* Detail Modal for Selected Why Choose Us Point */}
      <WhyChooseUsModal
        item={selectedItem}
        allItems={WHY_CHOOSE_US}
        onClose={() => setSelectedItem(null)}
        onSelectAnother={(newItem) => setSelectedItem(newItem)}
        onOpenConsultation={onOpenConsultation}
      />
    </section>
  );
};
