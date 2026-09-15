import React from "react";
import { motion } from "motion/react";
import { HowWeWork } from "../components/HowWeWork";
import { IndustriesSection } from "../components/IndustriesSection";
import { PageType } from "../types";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Briefcase,
} from "lucide-react";

interface ProcessPageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-[#FFFFFF] text-[#111111] animate-in fade-in duration-300">
      {/* Page Hero Header with Zoom Background */}
      <div className="relative py-14 sm:py-20 mb-10 overflow-hidden border-b border-[#E8E1D0] bg-[#FAF9F5]">
        {/* Background Image with Ken Burns / Zoom Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <img
            decoding="async"
            fetchPriority="high"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=75"
            alt="Digibasera 5-Stage Growth Process & Blueprints"
            className="w-full h-full object-cover object-center animate-hero-zoom opacity-20 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-[#FAF9F5]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-85" />
        </div>

        {/* Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-4 font-heading shadow-xs backdrop-blur-xs">
              <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Structured Sprint Methodology & Sector Playbooks</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] font-heading tracking-tight">
              Process &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227] italic font-serif">
                Industry Frameworks
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#555555] mt-3 max-w-3xl leading-relaxed">
              A battle-tested 5-stage commercial growth process tailored with industry-specific
              funnels, compliance parameters, and conversion architectures across 13 business
              verticals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Process Steps Component */}
      <HowWeWork />

      {/* SLA & Governance Highlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="p-6 rounded-xl bg-[#F8F8F6] border border-[#E8E1D0] hover:border-[#D4AF37] transition-all shadow-xs space-y-3"
          >
            <div className="w-10 h-10 rounded-md bg-white border border-[#E8E1D0] text-[#9A7B16] flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <h4 className="text-base font-bold text-[#111111] font-heading">
              Agile 14-Day Sprints
            </h4>
            <p className="text-xs text-[#555555] leading-relaxed">
              We operate in structured bi-weekly sprints with clearly designated milestone
              deliverables, avoiding bloated timelines.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="p-6 rounded-xl bg-[#F8F8F6] border border-[#E8E1D0] hover:border-[#D4AF37] transition-all shadow-xs space-y-3"
          >
            <div className="w-10 h-10 rounded-md bg-white border border-[#E8E1D0] text-[#9A7B16] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <h4 className="text-base font-bold text-[#111111] font-heading">
              Dedicated Growth Manager
            </h4>
            <p className="text-xs text-[#555555] leading-relaxed">
              A single point of contact coordinating our media buyers, SEO leads, developers, and
              creative copywriters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="p-6 rounded-xl bg-[#F8F8F6] border border-[#E8E1D0] hover:border-[#D4AF37] transition-all shadow-xs space-y-3"
          >
            <div className="w-10 h-10 rounded-md bg-white border border-[#E8E1D0] text-[#9A7B16] flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <h4 className="text-base font-bold text-[#111111] font-heading">
              100% Data Transparency
            </h4>
            <p className="text-xs text-[#555555] leading-relaxed">
              Full direct access to ad accounts, analytics pipelines, search consoles, and raw lead
              attribution data.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Embedded Industry Vertical Solutions Section */}
      <IndustriesSection
        onOpenConsultation={(indName) =>
          onOpenConsultation(
            indName ? `Industry Growth Blueprint: ${indName}` : "Custom Industry Growth Blueprint",
          )
        }
      />

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center"
      >
        <div className="p-8 rounded-xl bg-[#111111] text-white border border-[#D4AF37] space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading">
            Ready to Build Your Custom Growth Architecture?
          </h3>
          <p className="text-xs sm:text-sm text-[#E8E1D0] max-w-xl mx-auto leading-relaxed">
            Get an initial complimentary assessment of your digital footprint, technical speed, and
            media efficiency tailored to your specific industry vertical.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenConsultation("Stage 1 Growth Audit")}
              className="px-6 py-3.5 rounded-md bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Initiate Discovery & Audit</span>
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/10 font-semibold text-xs uppercase tracking-wider transition-colors hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
