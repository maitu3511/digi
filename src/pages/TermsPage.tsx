import React from "react";
import { motion } from "motion/react";
import { PageType } from "../types";
import { FileText, CheckCircle2, ArrowRight, ShieldCheck, Scale, Sparkles } from "lucide-react";

interface TermsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation?: (serviceName?: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-[#FFFFFF] text-[#111111] animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="relative py-14 sm:py-18 mb-10 overflow-hidden border-b border-[#E8E1D0] bg-[#FAF9F5]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-4 shadow-2xs">
              <Scale className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>DIGI BASERA • CLIENT GOVERNANCE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-heading tracking-tight">
              Client Terms &amp; Conditions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227] italic font-serif">
                – Simplified
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#555555] mt-3 max-w-2xl mx-auto leading-relaxed">
              Clear, transparent guidelines designed to foster productive, accountable, and
              high-performance digital partnerships.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Welcome Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-[#FAF8F2] to-white border-2 border-[#D4AF37]/50 shadow-xs space-y-2"
        >
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#8F7018] font-extrabold text-[10px] tracking-wider uppercase">
              DIGI BASERA
            </span>
            <span className="text-xs font-bold text-[#111111]">Transparency &amp; Trust First</span>
          </div>
          <p className="text-sm sm:text-base font-medium text-[#222222] leading-relaxed">
            Welcome to <strong>Digi Basera</strong>! To make things easy and transparent, we’ve
            summarized our Terms &amp; Conditions into clear, simple language. By working with us or
            making a payment, you agree to these guidelines.
          </p>
        </motion.div>

        {/* The 7 Numbered Points */}
        <div className="space-y-4">
          {/* 1. Scope & Approvals */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-sm font-bold shrink-0">
                1
              </span>
              <h2 className="text-lg font-bold text-[#111111] font-heading">
                Scope &amp; Approvals
              </h2>
            </div>
            <ul className="space-y-2 pl-4 sm:pl-11 list-disc text-sm text-[#444444] leading-relaxed">
              <li>
                <strong>Clear Deliverables:</strong> Your exact services, timelines, and costs are
                defined in your approved proposal. Projects begin once we receive your advance
                payment or written approval.
              </li>
              <li>
                <strong>Extra Work:</strong> Any feature, page, or campaign requested outside the
                agreed scope will be treated as additional work and billed separately.
              </li>
            </ul>
          </div>

          {/* 2. Payments & Refunds */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-sm font-bold shrink-0">
                2
              </span>
              <h2 className="text-lg font-bold text-[#111111] font-heading">
                Payments &amp; Refunds
              </h2>
            </div>
            <ul className="space-y-2 pl-4 sm:pl-11 list-disc text-sm text-[#444444] leading-relaxed">
              <li>
                <strong>Project-Based Services (Websites, Branding):</strong> A 50% advance payment
                is required to start. Since our team dedicates time and resources immediately, this
                advance is non-refundable once work begins.
              </li>
              <li>
                <strong>Monthly Retainers (SEO, Social Media):</strong> 100% advance payment is
                required at the start of each billing cycle.
              </li>
              <li>
                <strong>Advertising Budgets:</strong> Ad spend (for Meta, Google, etc.) is separate
                from our service fees and paid directly to the platform.
              </li>
              <li>
                <strong>Late Payments:</strong> If payments are delayed, we may temporarily pause
                services or project work until dues are cleared.
              </li>
            </ul>
          </div>

          {/* 3. Revisions & Changes */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-sm font-bold shrink-0">
                3
              </span>
              <h2 className="text-lg font-bold text-[#111111] font-heading">
                Revisions &amp; Changes
              </h2>
            </div>
            <ul className="space-y-2 pl-4 sm:pl-11 list-disc text-sm text-[#444444] leading-relaxed">
              <li>
                We include a specific number of revisions in your proposal. If major changes are
                requested after you have already approved a design or strategy, it will be treated
                as a new request with extra charges.
              </li>
            </ul>
          </div>

          {/* 4. Your Responsibilities & Timelines */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-sm font-bold shrink-0">
                4
              </span>
              <h2 className="text-lg font-bold text-[#111111] font-heading">
                Your Responsibilities &amp; Timelines
              </h2>
            </div>
            <ul className="space-y-2 pl-4 sm:pl-11 list-disc text-sm text-[#444444] leading-relaxed">
              <li>
                <strong>Timely Support:</strong> We need timely feedback, passwords, and materials
                (logos, text) from you. If these are delayed by you, the project timeline will
                automatically be extended.
              </li>
              <li>
                <strong>Accurate Content:</strong> You are responsible for ensuring that all content
                you provide is legally yours to use.
              </li>
            </ul>
          </div>

          {/* 5. Expectations & Guarantees */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-sm font-bold shrink-0">
                5
              </span>
              <h2 className="text-lg font-bold text-[#111111] font-heading">
                Expectations &amp; Guarantees
              </h2>
            </div>
            <ul className="space-y-2 pl-4 sm:pl-11 list-disc text-sm text-[#444444] leading-relaxed">
              <li>
                We use professional, highly effective strategies to grow your business. However,
                because search engines and ad platforms are unpredictable, we cannot legally
                guarantee specific sales numbers, leads, or #1 rankings.
              </li>
              <li>
                <strong>Third-Party Platforms:</strong> We are not responsible for technical
                outages, policy changes, or account suspensions by third-party platforms (like
                Facebook, Google, or Shopify).
              </li>
            </ul>
          </div>

          {/* 6. Ownership & Portfolio */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-sm font-bold shrink-0">
                6
              </span>
              <h2 className="text-lg font-bold text-[#111111] font-heading">
                Ownership &amp; Portfolio
              </h2>
            </div>
            <ul className="space-y-2 pl-4 sm:pl-11 list-disc text-sm text-[#444444] leading-relaxed">
              <li>
                <strong>Final Ownership:</strong> Once all payments are cleared, you fully own the
                final deliverables.
              </li>
              <li>
                <strong>Our Portfolio:</strong> We love showing off our great work! We reserve the
                right to feature your project in our portfolio and social media, unless we have a
                separate confidentiality agreement.
              </li>
            </ul>
          </div>

          {/* 7. Legal & Confidentiality */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-sm font-bold shrink-0">
                7
              </span>
              <h2 className="text-lg font-bold text-[#111111] font-heading">
                Legal &amp; Confidentiality
              </h2>
            </div>
            <ul className="space-y-2 pl-4 sm:pl-11 list-disc text-sm text-[#444444] leading-relaxed">
              <li>
                <strong>Confidentiality:</strong> We keep all your sensitive business data strictly
                private.
              </li>
              <li>
                <strong>Jurisdiction:</strong> Any formal disputes will be governed by the laws of
                India, under the jurisdiction of Rajkot, Gujarat.
              </li>
            </ul>
          </div>
        </div>

        {/* Closing & Sign-off Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[#D4AF37]/50 shadow-lg">
          <div className="space-y-1.5">
            <h3 className="font-bold text-lg text-[#D4AF37] font-heading">
              Thank you for choosing Digi Basera!
            </h3>
            <p className="text-sm text-[#E5E5E5]">
              Prepared by: <strong className="text-white font-bold">Ali</strong>
            </p>
            <p className="text-xs text-[#A3A3A3]">Founder, Digi Basera</p>
            <p className="text-[11px] text-[#737373]">
              Jurisdiction: Rajkot, Gujarat, India • Dedicated to transparent, ethical client growth
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onNavigate("privacy")}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Read Privacy Policy
            </button>
            {onOpenConsultation && (
              <button
                onClick={() => onOpenConsultation("Terms Inquiry")}
                className="px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#C59B27] text-[#111111] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Discuss a Project
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
