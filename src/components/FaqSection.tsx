import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data/agencyData";
import { HelpCircle, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../utils/whatsapp";

export const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(FAQS[0]?.id || null);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "agency", label: "Agency Services" },
    { id: "training", label: "Training & Academy" },
    { id: "general", label: "General & Engagement" },
  ];

  const filteredFaqs =
    activeCategory === "all" ? FAQS : FAQS.filter((f) => f.category === activeCategory);

  return (
    <section className="relative py-24 bg-white" id="faq-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>TRANSPARENCY & CLARITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-heading tracking-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227] italic font-serif">
              Questions
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-4 leading-relaxed">
            Everything you need to know about our timelines, pricing structure, deliverables, and
            partnership methodology.
          </p>
        </motion.div>

        {/* Category Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-[#111111] text-white border border-[#D4AF37] shadow-sm"
                  : "bg-[#F8F8F6] text-[#555555] hover:text-[#111111] hover:bg-white border border-[#E8E1D0]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = expandedId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`rounded-lg border transition-all overflow-hidden ${
                  isOpen
                    ? "bg-[#F8F8F6] border-[#D4AF37] shadow-sm"
                    : "bg-[#F8F8F6] border-[#E8E1D0] hover:border-[#D4AF37]/60"
                }`}
              >
                <button
                  onClick={() => setExpandedId(isOpen ? null : faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-[#9A7B16] border border-[#E8E1D0]">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#111111] font-heading group-hover:text-[#9A7B16] transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-md bg-white border border-[#E8E1D0] flex items-center justify-center text-[#555555] group-hover:text-[#111111] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#D4AF37] border-[#D4AF37]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-6 pt-1 sm:px-6 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#E8E1D0] bg-white overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Have more questions bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center p-6 rounded-xl bg-[#111111] border border-[#D4AF37] flex flex-col sm:flex-row items-center justify-between gap-4 text-white"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold font-heading text-white">
              Have a specific question not answered here?
            </h4>
            <p className="text-xs text-[#E8E1D0]">
              Our senior strategist is available to address unique organizational queries directly.
            </p>
          </div>
          <a
            href={getWhatsAppUrl(
              "Hello Digibasera, I have a specific question about your agency services.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shrink-0"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Inquire on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
