import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, FileText, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { AGENCY_CONFIG } from "../data/agencyData";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface FinalCtaProps {
  onOpenConsultation: () => void;
  onRequestProposal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenConsultation, onRequestProposal }) => {
  return (
    <section
      className="relative py-24 bg-[#F8F8F6] border-y border-[#E8E1D0] overflow-hidden"
      id="final-cta-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-[#111111] border border-[#D4AF37] p-8 sm:p-14 lg:p-16 shadow-[0_25px_60px_rgba(17,17,17,0.35)] relative overflow-hidden text-center text-white"
        >
          {/* Background Commercial Growth / Modern Corporate High-Rise Architecture Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              loading="lazy"
              decoding="async"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=75"
              alt="Commercial Business Growth & Architecture"
              className="w-full h-full object-cover object-center opacity-65 scale-100 transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Carefully balanced rich dark vignette to keep image clear yet text highly legible */}
            <div className="absolute inset-0 bg-[#0A0A0A]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-[#111111]/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/80 via-transparent to-[#111111]/80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.12)_0%,_transparent_65%)]" />
          </div>

          <div className="relative z-10">
            {/* Decorative Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>ACCELERATE YOUR COMMERCIAL GROWTH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight max-w-3xl mx-auto leading-tight">
              Ready to Dominate Your Market{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227] italic font-serif">
                Digitally?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#E8E1D0] mt-4 max-w-2xl mx-auto leading-relaxed">
              Partner with an elite digital marketing & technology agency engineered for high-intent
              lead generation, organic authority, and measurable ROI.
            </p>

            {/* 3 Prominent CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-8 max-w-2xl mx-auto">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 font-heading cursor-pointer"
                id="final-cta-free-consultation"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onRequestProposal}
                className="px-6 py-4 rounded-xl bg-white hover:bg-[#F8F8F6] text-[#111111] border border-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 font-heading cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98]"
                id="final-cta-request-proposal"
              >
                <FileText className="w-4 h-4 text-[#9A7B16]" />
                <span>Request Proposal</span>
              </button>

              <a
                href={getWhatsAppUrl(
                  "Hello Digibasera, I would like to discuss scaling our business digitally.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 font-heading shadow-md hover:scale-[1.02] active:scale-[0.98]"
                id="final-cta-whatsapp"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Talk on WhatsApp</span>
              </a>
            </div>

            {/* Trust Guarantees */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#E8E1D0]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                Direct Line: <strong className="text-white">{AGENCY_CONFIG.phoneDisplay}</strong>
              </span>
              <span>•</span>
              <span>Zero Long-Term Lock-in Contracts</span>
              <span>•</span>
              <span>Dedicated Senior Growth Strategist</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
