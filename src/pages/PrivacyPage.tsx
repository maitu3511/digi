import React from "react";
import { motion } from "motion/react";
import { PageType } from "../types";
import { Lock, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Mail, Scale } from "lucide-react";
import { AGENCY_CONFIG } from "../data/agencyData";

interface PrivacyPageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation?: (serviceName?: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate, onOpenConsultation }) => {
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
              <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>DIGI BASERA • DATA PROTECTION &amp; TRUST</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-heading tracking-tight">
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227] italic font-serif">
                Policy
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#555555] mt-3 max-w-2xl mx-auto leading-relaxed">
              Transparent, secure, and client-first practices explaining how we protect your
              personal and commercial data.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Intro Card */}
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
            <span className="text-xs font-bold text-[#111111]">
              Privacy &amp; Data Security Pledge
            </span>
          </div>
          <p className="text-sm sm:text-base font-medium text-[#222222] leading-relaxed">
            At <strong>Digi Basera</strong>, we believe in keeping things transparent and secure.
            When you trust us with your digital marketing, design, and tech needs, you also trust us
            with your information. This Privacy Policy explains in simple terms what data we
            collect, why we need it, and how we keep it safe.
          </p>
        </motion.div>

        {/* The 7 Numbered Points */}
        <div className="space-y-4">
          {/* 1. What Information We Collect */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-sm font-bold shrink-0">
                1
              </span>
              <h2 className="text-lg font-bold text-[#111111] font-heading">
                What Information We Collect
              </h2>
            </div>
            <p className="text-sm text-[#444444] pl-4 sm:pl-11 leading-relaxed">
              To provide you with the best possible service, we collect basic details. This usually
              includes your name, email address, phone number, and business details. If we are
              managing your websites or ad campaigns, we may also request necessary access
              credentials or administrative permissions.
            </p>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-sm font-bold shrink-0">
                2
              </span>
              <h2 className="text-lg font-bold text-[#111111] font-heading">
                How We Use Your Information
              </h2>
            </div>
            <div className="pl-4 sm:pl-11 space-y-2">
              <p className="text-sm text-[#444444] leading-relaxed">
                We use your data strictly to do our job effectively. This includes:
              </p>
              <ul className="space-y-1.5 list-disc pl-5 text-sm text-[#444444] leading-relaxed">
                <li>
                  Delivering the services you hired us for (like website development, SEO, or social
                  media management).
                </li>
                <li>Communicating with you regarding project updates, approvals, and invoices.</li>
                <li>
                  Improving our own services and understanding how clients interact with our
                  business.
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Sharing Your Data */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-sm font-bold shrink-0">
                3
              </span>
              <h2 className="text-lg font-bold text-[#111111] font-heading">Sharing Your Data</h2>
            </div>
            <p className="text-sm text-[#444444] pl-4 sm:pl-11 leading-relaxed">
              We respect your privacy. We do not sell, rent, or trade your personal information to
              anyone. We only share specific data with trusted third-party platforms (like Google,
              Meta, or hosting providers) when it is absolutely required to run your campaigns or
              host your website.
            </p>
          </div>

          {/* 4. Keeping Your Data Safe */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-sm font-bold shrink-0">
                4
              </span>
              <h2 className="text-lg font-bold text-[#111111] font-heading">
                Keeping Your Data Safe
              </h2>
            </div>
            <p className="text-sm text-[#444444] pl-4 sm:pl-11 leading-relaxed">
              We take reasonable and professional precautions to protect your digital assets,
              business strategies, and personal information from unauthorized access. Your data is
              treated as strictly confidential.
            </p>
          </div>

          {/* 5. Your Control Over Your Data */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-sm font-bold shrink-0">
                5
              </span>
              <h2 className="text-lg font-bold text-[#111111] font-heading">
                Your Control Over Your Data
              </h2>
            </div>
            <p className="text-sm text-[#444444] pl-4 sm:pl-11 leading-relaxed">
              You have full control over your information. If you ever want us to update your
              details, remove your data from our systems, or revoke our access to your platforms
              after a project is completed, simply let us know, and we will handle it promptly.
            </p>
          </div>

          {/* 6. Updates to This Policy */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-sm font-bold shrink-0">
                6
              </span>
              <h2 className="text-lg font-bold text-[#111111] font-heading">
                Updates to This Policy
              </h2>
            </div>
            <p className="text-sm text-[#444444] pl-4 sm:pl-11 leading-relaxed">
              As the digital landscape evolves, we might update this policy from time to time. We
              will always keep the most current version available for you to review.
            </p>
          </div>

          {/* 7. Contact & Jurisdiction */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-sm font-bold shrink-0">
                7
              </span>
              <h2 className="text-lg font-bold text-[#111111] font-heading">
                Contact &amp; Jurisdiction
              </h2>
            </div>
            <p className="text-sm text-[#444444] pl-4 sm:pl-11 leading-relaxed">
              If you have any questions about how we handle your privacy, please feel free to reach
              out at <strong>{AGENCY_CONFIG.email}</strong>. This Privacy Policy is governed by the
              laws of India, and any formal matters will fall under the jurisdiction of Rajkot,
              Gujarat.
            </p>
          </div>
        </div>

        {/* Closing & Sign-off Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[#D4AF37]/50 shadow-lg">
          <div className="space-y-1.5">
            <h3 className="font-bold text-lg text-[#D4AF37] font-heading">Warm regards,</h3>
            <p className="text-base text-white font-bold">Ali</p>
            <p className="text-xs text-[#A3A3A3]">Founder, Digi Basera</p>
            <p className="text-[11px] text-[#737373]">
              Rajkot, Gujarat, India • Dedicated to transparent, ethical digital growth
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onNavigate("terms")}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Read Terms &amp; Conditions
            </button>
            {onOpenConsultation && (
              <button
                onClick={() => onOpenConsultation("Privacy Inquiry")}
                className="px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#C59B27] text-[#111111] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Contact Compliance
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
