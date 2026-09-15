import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WORK_PROCESS } from "../data/agencyData";
import { TypewriterText } from "./TypewriterText";
import { getAuditWhatsAppUrl } from "../utils/whatsapp";
import {
  Sparkles,
  CheckCircle2,
  Search,
  Compass,
  Code2,
  Rocket,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  Clock,
  Layers,
  Wrench,
  Target,
  FileCheck,
  MessageCircle,
  X,
} from "lucide-react";

export const HowWeWork: React.FC = () => {
  // Details open only when a user clicks on a phase box (defaults to null)
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const stepIcons = [Search, Compass, Code2, Rocket, TrendingUp];
  const activeStep = activeStepIndex !== null ? WORK_PROCESS[activeStepIndex] || null : null;
  const ActiveIcon = activeStepIndex !== null ? stepIcons[activeStepIndex] || Sparkles : Sparkles;

  const handleSelectStep = (idx: number) => {
    setActiveStepIndex((prev) => {
      if (prev === idx) {
        return null;
      }
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 120);
      return idx;
    });
  };

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : WORK_PROCESS.length - 1));
  };

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev !== null && prev < WORK_PROCESS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="relative py-24 bg-white border-b border-[#E8E1D0]" id="how-we-work-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F2] border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>TRANSPARENT 5-STAGE GROWTH METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-heading tracking-tight leading-tight min-h-[1.2em]">
            How We{" "}
            <TypewriterText
              phrases={["Drive Results", "Scale Brands", "Deliver Predictable ROI"]}
            />
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-4 leading-relaxed">
            A battle-tested, point-to-point execution framework engineered to eliminate guesswork,
            protect your ad budget, and sustainably scale high-intent buyer inquiries.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#9A7B16] font-semibold bg-[#FAF8F2] px-3 py-1 rounded-full border border-[#E8E1D0]">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>
              Click any phase box below to open its step-by-step actions and exact deliverables
            </span>
          </div>
        </motion.div>

        {/* 5-Step Process Interactive Stepper / Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {WORK_PROCESS.map((step, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            const isActive = activeStepIndex === idx;

            return (
              <motion.div
                key={step.step}
                onClick={() => handleSelectStep(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelectStep(idx);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Select Phase ${step.step}: ${step.title}`}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`card-luxury-hover p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden group select-none ${
                  isActive
                    ? "bg-[#111111] text-white border-[#D4AF37] shadow-[0_12px_30px_rgba(212,175,55,0.22)] ring-2 ring-[#D4AF37] scale-[1.02]"
                    : "bg-[#FAF9F5] text-[#111111] border-[#E8E1D0] hover:border-[#D4AF37] hover:bg-white"
                }`}
              >
                {/* Active Accent Top Line */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFF3C4] to-[#D4AF37]" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xl font-bold font-heading ${
                        isActive ? "text-[#D4AF37]" : "text-[#B8B09C] group-hover:text-[#9A7B16]"
                      }`}
                    >
                      {step.step}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-[#D4AF37] text-[#111111] shadow-sm"
                          : "bg-white text-[#9A7B16] border border-[#E8E1D0] group-hover:border-[#D4AF37]/50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {step.duration && (
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded inline-block mb-2 ${
                        isActive
                          ? "bg-white/10 text-[#D4AF37] border border-[#D4AF37]/40"
                          : "bg-[#EAE6D8] text-[#776B55] border border-[#DCD6C5]"
                      }`}
                    >
                      {step.duration}
                    </span>
                  )}

                  <h4
                    className={`text-sm font-bold font-heading line-clamp-2 leading-snug ${
                      isActive ? "text-white" : "text-[#111111]"
                    }`}
                  >
                    {step.title}
                  </h4>

                  <p
                    className={`text-xs mt-2 line-clamp-2 leading-relaxed ${
                      isActive ? "text-[#E8E1D0]" : "text-[#666666]"
                    }`}
                  >
                    {step.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-[11px] font-semibold">
                  <span
                    className={
                      isActive ? "text-[#D4AF37]" : "text-[#888888] group-hover:text-[#111111]"
                    }
                  >
                    {isActive ? "Details Open • Click to Close" : "Click to View Details"}
                  </span>
                  {isActive ? (
                    <X className="w-3.5 h-3.5 text-[#D4AF37]" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-[#999999] group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Deep-Dive Card for the Active Step (opens on click only) */}
        <AnimatePresence mode="wait">
          {activeStepIndex !== null && activeStep && (
            <motion.div
              key={activeStepIndex}
              ref={detailsRef}
              initial={{ opacity: 0, y: 15, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.99 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-[#FAF9F5] border-2 border-[#D4AF37]/50 p-6 sm:p-10 shadow-[0_18px_50px_-15px_rgba(212,175,55,0.18)] relative overflow-hidden"
            >
              {/* Header Area of Detailed View */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8E1D0]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#111111] bg-[#D4AF37]/25 px-2.5 py-1 rounded-md border border-[#D4AF37]/50 flex items-center gap-1.5">
                      <ActiveIcon className="w-3.5 h-3.5 text-[#9A7B16]" />
                      <span>PHASE {activeStep.step} OF 05</span>
                    </span>
                    {activeStep.duration && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#555555] bg-white px-2.5 py-1 rounded-md border border-[#E8E1D0] flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{activeStep.duration}</span>
                      </span>
                    )}
                    {activeStep.subtitle && (
                      <span className="text-xs font-semibold text-[#887028] italic">
                        • {activeStep.subtitle}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading tracking-tight">
                    {activeStep.title}
                  </h3>
                </div>

                {/* Prev / Next & Close Controls */}
                <div className="flex items-center gap-2 self-start md:self-auto shrink-0 flex-wrap">
                  <button
                    onClick={handlePrev}
                    className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF8F2] border border-[#E8E1D0] hover:border-[#D4AF37] text-xs font-bold text-[#111111] flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
                    title="Previous Phase"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-[#9A7B16]" />
                    <span className="hidden sm:inline">Previous Phase</span>
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 rounded-xl bg-[#111111] hover:bg-[#222222] border border-[#D4AF37] text-xs font-bold text-white flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                    title="Next Phase"
                  >
                    <span className="hidden sm:inline">Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                  <button
                    onClick={() => setActiveStepIndex(null)}
                    className="px-3 py-2 rounded-xl bg-white hover:bg-[#F3EACB] border border-[#E8E1D0] hover:border-[#D4AF37] text-xs font-bold text-[#555555] hover:text-[#111111] flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
                    title="Close Phase Details"
                  >
                    <X className="w-3.5 h-3.5 text-[#9A7B16]" />
                    <span>Close Details</span>
                  </button>
                </div>
              </div>

              {/* Strategic Overview Paragraph */}
              {activeStep.overview && (
                <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white border border-[#E8E1D0] shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF8F2] border border-[#E8E1D0] flex items-center justify-center shrink-0 mt-0.5">
                      <Layers className="w-4 h-4 text-[#9A7B16]" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-[#9A7B16] mb-1">
                        Strategic Phase Context
                      </h5>
                      <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                        {activeStep.overview}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Main Content Grid: Point-to-Point Execution vs Deliverables */}
              <div className="grid lg:grid-cols-12 gap-8 mt-8 items-start">
                {/* Left Column: 4 Step-by-Step Actions */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base font-bold text-[#111111] font-heading uppercase tracking-wider flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#D4AF37]" />
                      <span>Point-to-Point Execution Breakdown</span>
                    </h4>
                    <span className="text-xs text-[#888888] font-medium">
                      4 Core Ground Actions
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {activeStep.actionBreakdown && activeStep.actionBreakdown.length > 0
                      ? activeStep.actionBreakdown.map((act) => (
                          <div
                            key={act.stepNumber}
                            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37]/70 transition-all duration-200 shadow-2xs group"
                          >
                            <div className="flex items-start gap-3.5">
                              <span className="text-xs font-bold text-[#9A7B16] bg-[#FAF8F2] border border-[#E8E1D0] px-2.5 py-1 rounded-lg shrink-0 group-hover:bg-[#D4AF37] group-hover:text-[#111111] group-hover:border-[#D4AF37] transition-colors">
                                {act.stepNumber}
                              </span>
                              <div className="space-y-1.5 flex-1">
                                <h5 className="text-sm sm:text-base font-bold text-[#111111] font-heading group-hover:text-[#9A7B16] transition-colors">
                                  {act.actionTitle}
                                </h5>
                                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                                  {act.description}
                                </p>

                                {/* Why it matters for commercial return */}
                                <div className="mt-2.5 pt-2.5 border-t border-[#F0EBE0] flex items-start gap-2 bg-[#FAF8F2]/70 p-2.5 rounded-xl border border-[#EAE3D2]">
                                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                                  <p className="text-xs text-[#6A5A28] font-medium leading-normal">
                                    <span className="font-bold text-[#111111]">
                                      Commercial Impact:{" "}
                                    </span>
                                    {act.whyItMatters}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      : // Fallback to details list
                        activeStep.details.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-xl bg-white border border-[#E8E1D0] flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span className="text-sm text-[#111111]">{item}</span>
                          </div>
                        ))}
                  </div>
                </div>

                {/* Right Column: Deliverables, Stack & Business Outcome */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Deliverable Box */}
                  <div className="rounded-2xl bg-white border border-[#E8E1D0] p-5 sm:p-6 space-y-4 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9A7B16]">
                      <FileCheck className="w-4 h-4 text-[#D4AF37]" />
                      <span>Primary Milestone Deliverable</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#111111] font-heading leading-snug">
                      {activeStep.deliverable}
                    </div>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      Every milestone is documented, peer-reviewed, and verified with your internal
                      stakeholders before proceeding to the subsequent sprint.
                    </p>

                    {/* Concrete Outputs Checklist */}
                    {activeStep.keyOutputs && activeStep.keyOutputs.length > 0 && (
                      <div className="pt-3 border-t border-[#E8E1D0] space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#888888] block">
                          Tangible Client Receivables:
                        </span>
                        <div className="space-y-1.5">
                          {activeStep.keyOutputs.map((out, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-[#222222]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#9A7B16] shrink-0 mt-0.5" />
                              <span>{out}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tools Stack */}
                    {activeStep.toolsUsed && activeStep.toolsUsed.length > 0 && (
                      <div className="pt-3 border-t border-[#E8E1D0] space-y-2">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#888888]">
                          <Wrench className="w-3 h-3 text-[#9A7B16]" />
                          <span>Tools & Technology Deployed:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {activeStep.toolsUsed.map((tool, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-semibold text-[#111111] bg-[#FAF8F2] border border-[#E8E1D0] px-2.5 py-0.5 rounded-md"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Expected Business Impact Card */}
                  {activeStep.expectedImpact && (
                    <div className="rounded-2xl bg-[#111111] text-white p-5 sm:p-6 border border-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.15)] space-y-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-xl pointer-events-none" />
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Verified Business Impact</span>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-[#FAF8F2] leading-relaxed">
                        {activeStep.expectedImpact}
                      </p>
                      <div className="pt-2 flex items-center justify-between text-[11px] text-[#A89E88] border-t border-[#333333]">
                        <span>Accountability:</span>
                        <span className="text-[#D4AF37] font-semibold">
                          100% Transparent Review
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Close Bar */}
              <div className="mt-8 pt-4 border-t border-[#E8E1D0] flex items-center justify-between text-xs">
                <span className="text-[#666666]">
                  Phase {activeStep.step}: {activeStep.title}
                </span>
                <button
                  onClick={() => setActiveStepIndex(null)}
                  className="font-bold text-[#9A7B16] hover:text-[#7A6010] flex items-center gap-1.5 cursor-pointer transition-colors px-3 py-1.5 rounded-lg bg-white border border-[#E8E1D0] hover:border-[#D4AF37]"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Close Phase Details</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#111111] border border-[#D4AF37] shadow-[0_12px_40px_rgba(212,175,55,0.18)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              WANT THIS EXACT 5-PHASE GROWTH ENGINE FOR YOUR BUSINESS?
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-heading">
              Let&apos;s map out your Phase 01 Diagnostic Audit today.
            </h4>
            <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
              No pressure and no generic sales pitches. Just a transparent breakdown of your current
              metrics, competitor gaps, and immediate revenue opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="#contact-section"
              className="px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#B89628] text-[#111111] font-bold text-sm transition-all shadow-[0_4px_16px_rgba(212,175,55,0.3)] hover:scale-105"
            >
              Book Free Strategy Audit
            </a>
            <a
              href={getAuditWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
