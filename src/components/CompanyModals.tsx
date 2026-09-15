import React, { useState } from "react";
import {
  ShieldCheck,
  FileText,
  Users,
  Star,
  Quote,
  CheckCircle2,
  Lock,
  Building2,
  Sparkles,
  ExternalLink,
  Scale,
  CreditCard,
  Clock,
  RotateCcw,
  Award,
  AlertCircle,
  FileCheck,
} from "lucide-react";
import { AGENCY_CONFIG, TESTIMONIALS } from "../data/agencyData";
import { TEAM_MEMBERS } from "../data/companyData";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SimplifiedClientTerms: React.FC = () => {
  return (
    <div className="space-y-5 text-xs text-[#444444] leading-relaxed">
      {/* Top Welcome Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#FAF8F2] to-white border-2 border-[#D4AF37]/50 shadow-2xs">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#8F7018] font-extrabold text-[10px] tracking-wider uppercase">
            DIGI BASERA
          </span>
          <span className="text-xs sm:text-sm font-bold text-[#111111]">
            Client Terms &amp; Conditions – Simplified
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
          Welcome to <strong>Digi Basera</strong>! To make things easy and transparent, we’ve
          summarized our Terms &amp; Conditions into clear, simple language. By working with us or
          making a payment, you agree to these guidelines.
        </p>
      </div>

      {/* 7 Simplified Points */}
      <div className="space-y-3 sm:space-y-4">
        {/* 1. Scope & Approvals */}
        <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37]/60 transition-all space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-[#111111] font-heading">
            <span className="w-6 h-6 rounded-md bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-xs font-bold shrink-0">
              1
            </span>
            <h4>Scope &amp; Approvals</h4>
          </div>
          <ul className="space-y-1.5 pl-8 list-disc text-[#444444] text-xs">
            <li>
              <strong>Clear Deliverables:</strong> Your exact services, timelines, and costs are
              defined in your approved proposal. Projects begin once we receive your advance payment
              or written approval.
            </li>
            <li>
              <strong>Extra Work:</strong> Any feature, page, or campaign requested outside the
              agreed scope will be treated as additional work and billed separately.
            </li>
          </ul>
        </div>

        {/* 2. Payments & Refunds */}
        <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37]/60 transition-all space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-[#111111] font-heading">
            <span className="w-6 h-6 rounded-md bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-xs font-bold shrink-0">
              2
            </span>
            <h4>Payments &amp; Refunds</h4>
          </div>
          <ul className="space-y-1.5 pl-8 list-disc text-[#444444] text-xs">
            <li>
              <strong>Project-Based Services (Websites, Branding):</strong> A 50% advance payment is
              required to start. Since our team dedicates time and resources immediately, this
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
        <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37]/60 transition-all space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-[#111111] font-heading">
            <span className="w-6 h-6 rounded-md bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-xs font-bold shrink-0">
              3
            </span>
            <h4>Revisions &amp; Changes</h4>
          </div>
          <ul className="space-y-1.5 pl-8 list-disc text-[#444444] text-xs">
            <li>
              We include a specific number of revisions in your proposal. If major changes are
              requested after you have already approved a design or strategy, it will be treated as
              a new request with extra charges.
            </li>
          </ul>
        </div>

        {/* 4. Your Responsibilities & Timelines */}
        <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37]/60 transition-all space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-[#111111] font-heading">
            <span className="w-6 h-6 rounded-md bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-xs font-bold shrink-0">
              4
            </span>
            <h4>Your Responsibilities &amp; Timelines</h4>
          </div>
          <ul className="space-y-1.5 pl-8 list-disc text-[#444444] text-xs">
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
        <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37]/60 transition-all space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-[#111111] font-heading">
            <span className="w-6 h-6 rounded-md bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-xs font-bold shrink-0">
              5
            </span>
            <h4>Expectations &amp; Guarantees</h4>
          </div>
          <ul className="space-y-1.5 pl-8 list-disc text-[#444444] text-xs">
            <li>
              We use professional, highly effective strategies to grow your business. However,
              because search engines and ad platforms are unpredictable, we cannot legally guarantee
              specific sales numbers, leads, or #1 rankings.
            </li>
            <li>
              <strong>Third-Party Platforms:</strong> We are not responsible for technical outages,
              policy changes, or account suspensions by third-party platforms (like Facebook,
              Google, or Shopify).
            </li>
          </ul>
        </div>

        {/* 6. Ownership & Portfolio */}
        <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37]/60 transition-all space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-[#111111] font-heading">
            <span className="w-6 h-6 rounded-md bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-xs font-bold shrink-0">
              6
            </span>
            <h4>Ownership &amp; Portfolio</h4>
          </div>
          <ul className="space-y-1.5 pl-8 list-disc text-[#444444] text-xs">
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
        <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37]/60 transition-all space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-[#111111] font-heading">
            <span className="w-6 h-6 rounded-md bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-xs font-bold shrink-0">
              7
            </span>
            <h4>Legal &amp; Confidentiality</h4>
          </div>
          <ul className="space-y-1.5 pl-8 list-disc text-[#444444] text-xs">
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

      {/* Signature & Closing Card */}
      <div className="p-5 rounded-2xl bg-[#111111] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#D4AF37]/50 shadow-md">
        <div className="space-y-1">
          <h5 className="font-bold text-sm text-[#D4AF37] font-heading">
            Thank you for choosing Digi Basera!
          </h5>
          <p className="text-xs text-[#E5E5E5]">
            Prepared by: <strong className="text-white font-bold">Ali</strong>
          </p>
          <p className="text-[11px] text-[#A3A3A3]">Founder, Digi Basera</p>
          <p className="text-[10px] text-[#737373]">
            Jurisdiction: Rajkot, Gujarat, India • Dedicated to transparent, high-performance
            partnerships
          </p>
        </div>
        <div className="px-3 py-1.5 rounded-lg bg-[#222222] border border-[#D4AF37]/40 text-[11px] text-[#D4AF37] font-bold shrink-0 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
          <span>Simplified Client Terms</span>
        </div>
      </div>
    </div>
  );
};

export const SimplifiedPrivacyPolicy: React.FC = () => {
  return (
    <div className="space-y-5 text-xs text-[#444444] leading-relaxed">
      {/* Top Welcome Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#FAF8F2] to-white border-2 border-[#D4AF37]/50 shadow-2xs">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#8F7018] font-extrabold text-[10px] tracking-wider uppercase">
            DIGI BASERA
          </span>
          <span className="text-xs sm:text-sm font-bold text-[#111111]">Privacy Policy</span>
        </div>
        <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
          At <strong>Digi Basera</strong>, we believe in keeping things transparent and secure. When
          you trust us with your digital marketing, design, and tech needs, you also trust us with
          your information. This Privacy Policy explains in simple terms what data we collect, why
          we need it, and how we keep it safe.
        </p>
      </div>

      {/* 7 Numbered Points */}
      <div className="space-y-3 sm:space-y-4">
        {/* 1. What Information We Collect */}
        <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37]/60 transition-all space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-[#111111] font-heading">
            <span className="w-6 h-6 rounded-md bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-xs font-bold shrink-0">
              1
            </span>
            <h4>What Information We Collect</h4>
          </div>
          <p className="pl-8 text-[#444444] text-xs leading-relaxed">
            To provide you with the best possible service, we collect basic details. This usually
            includes your name, email address, phone number, and business details. If we are
            managing your websites or ad campaigns, we may also request necessary access credentials
            or administrative permissions.
          </p>
        </div>

        {/* 2. How We Use Your Information */}
        <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37]/60 transition-all space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-[#111111] font-heading">
            <span className="w-6 h-6 rounded-md bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-xs font-bold shrink-0">
              2
            </span>
            <h4>How We Use Your Information</h4>
          </div>
          <div className="pl-8 space-y-1.5 text-xs text-[#444444]">
            <p>We use your data strictly to do our job effectively. This includes:</p>
            <ul className="space-y-1 list-disc pl-4 text-xs text-[#444444]">
              <li>
                Delivering the services you hired us for (like website development, SEO, or social
                media management).
              </li>
              <li>Communicating with you regarding project updates, approvals, and invoices.</li>
              <li>
                Improving our own services and understanding how clients interact with our business.
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Sharing Your Data */}
        <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37]/60 transition-all space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-[#111111] font-heading">
            <span className="w-6 h-6 rounded-md bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-xs font-bold shrink-0">
              3
            </span>
            <h4>Sharing Your Data</h4>
          </div>
          <p className="pl-8 text-[#444444] text-xs leading-relaxed">
            We respect your privacy. We do not sell, rent, or trade your personal information to
            anyone. We only share specific data with trusted third-party platforms (like Google,
            Meta, or hosting providers) when it is absolutely required to run your campaigns or host
            your website.
          </p>
        </div>

        {/* 4. Keeping Your Data Safe */}
        <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37]/60 transition-all space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-[#111111] font-heading">
            <span className="w-6 h-6 rounded-md bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-xs font-bold shrink-0">
              4
            </span>
            <h4>Keeping Your Data Safe</h4>
          </div>
          <p className="pl-8 text-[#444444] text-xs leading-relaxed">
            We take reasonable and professional precautions to protect your digital assets, business
            strategies, and personal information from unauthorized access. Your data is treated as
            strictly confidential.
          </p>
        </div>

        {/* 5. Your Control Over Your Data */}
        <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37]/60 transition-all space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-[#111111] font-heading">
            <span className="w-6 h-6 rounded-md bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-xs font-bold shrink-0">
              5
            </span>
            <h4>Your Control Over Your Data</h4>
          </div>
          <p className="pl-8 text-[#444444] text-xs leading-relaxed">
            You have full control over your information. If you ever want us to update your details,
            remove your data from our systems, or revoke our access to your platforms after a
            project is completed, simply let us know, and we will handle it promptly.
          </p>
        </div>

        {/* 6. Updates to This Policy */}
        <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37]/60 transition-all space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-[#111111] font-heading">
            <span className="w-6 h-6 rounded-md bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-xs font-bold shrink-0">
              6
            </span>
            <h4>Updates to This Policy</h4>
          </div>
          <p className="pl-8 text-[#444444] text-xs leading-relaxed">
            As the digital landscape evolves, we might update this policy from time to time. We will
            always keep the most current version available for you to review.
          </p>
        </div>

        {/* 7. Contact & Jurisdiction */}
        <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37]/60 transition-all space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-sm font-bold text-[#111111] font-heading">
            <span className="w-6 h-6 rounded-md bg-[#D4AF37]/20 text-[#8F7018] flex items-center justify-center text-xs font-bold shrink-0">
              7
            </span>
            <h4>Contact &amp; Jurisdiction</h4>
          </div>
          <p className="pl-8 text-[#444444] text-xs leading-relaxed">
            If you have any questions about how we handle your privacy, please feel free to reach
            out. This Privacy Policy is governed by the laws of India, and any formal matters will
            fall under the jurisdiction of Rajkot, Gujarat.
          </p>
        </div>
      </div>

      {/* Signature & Closing Card */}
      <div className="p-5 rounded-2xl bg-[#111111] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#D4AF37]/50 shadow-md">
        <div className="space-y-1">
          <h5 className="font-bold text-sm text-[#D4AF37] font-heading">Warm regards,</h5>
          <p className="text-xs text-white font-bold">Ali</p>
          <p className="text-[11px] text-[#A3A3A3]">Founder, Digi Basera</p>
          <p className="text-[10px] text-[#737373]">
            Jurisdiction: Rajkot, Gujarat, India • Dedicated to transparent, ethical client growth
          </p>
        </div>
        <div className="px-3 py-1.5 rounded-lg bg-[#222222] border border-[#D4AF37]/40 text-[11px] text-[#D4AF37] font-bold shrink-0 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
          <span>Official Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"simplified" | "full">("simplified");
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#D4AF37]/50 max-h-[90vh] overflow-y-auto text-[#111111]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF9F5] hover:bg-[#111111] hover:text-white text-[#555555] transition-colors"
          aria-label="Close Terms modal"
        >
          ✕
        </button>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#9A7B16]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16]">
                  Legal &amp; Governance
                </span>
                <h2 className="text-2xl font-bold font-heading">Terms &amp; Conditions</h2>
              </div>
            </div>

            {/* Toggle Tabs */}
            <div className="flex items-center gap-1 bg-[#FAF8F2] p-1 rounded-xl border border-[#E8E1D0] self-start sm:self-auto">
              <button
                onClick={() => setActiveTab("simplified")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "simplified"
                    ? "bg-[#111111] text-white shadow-xs"
                    : "text-[#666666] hover:text-[#111111]"
                }`}
              >
                Simplified Terms
              </button>
              <button
                onClick={() => setActiveTab("full")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "full"
                    ? "bg-[#111111] text-white shadow-xs"
                    : "text-[#666666] hover:text-[#111111]"
                }`}
              >
                Legal Framework
              </button>
            </div>
          </div>

          <div className="border-t border-[#E8E1D0] pt-4">
            {activeTab === "simplified" ? (
              <SimplifiedClientTerms />
            ) : (
              <div className="space-y-4 text-xs text-[#555555] leading-relaxed">
                <p>
                  Welcome to <strong>Digi Basera</strong> (Operating as a Digital Growth Agency and
                  Business Associate of Zinmatt). By engaging our digital marketing, web
                  engineering, consulting, or training services, you agree to comply with and be
                  bound by the following terms and conditions.
                </p>

                <div className="space-y-2">
                  <h4 className="font-bold text-[#111111] text-sm">
                    1. Scope of Services &amp; Retainers
                  </h4>
                  <p>
                    All digital marketing, SEO, paid media advertising, design, and software
                    engineering engagements are executed in accordance with individual Statement of
                    Work (SOW) or retainer agreements. Digi Basera reserves the right to modify
                    delivery timelines based on client response latency, credential provision, or
                    external ad network algorithmic updates.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-[#111111] text-sm">
                    2. Ad Budgets &amp; Media Spend
                  </h4>
                  <p>
                    Clients acknowledge that all third-party media ad spends (payable directly to
                    Google Ads, Meta Ads, Amazon, LinkedIn, etc.) are distinct from Digi Basera
                    agency retainer fees. Third-party ad costs are charged directly to the client's
                    registered corporate billing cards.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-[#111111] text-sm">
                    3. Intellectual Property &amp; Deliverables
                  </h4>
                  <p>
                    Upon receipt of full payment for completed milestones or monthly billing
                    periods, all bespoke creative graphics, custom software codebases, and
                    domain-specific landing pages created specifically for the client become the
                    exclusive property of the client, excluding proprietary agency workflows,
                    internal templates, and foundational frameworks.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-[#111111] text-sm">
                    4. Performance Disclaimers &amp; Warranties
                  </h4>
                  <p>
                    While Digi Basera adheres to industry-leading white-hat optimization
                    methodologies and data-backed performance marketing best practices, search
                    engine algorithms (Google, Bing, Perplexity, ChatGPT) and platform policies
                    (Meta, Google Ads) operate independently. No agency can ethically guarantee
                    specific numerical search ranks or static conversion rates.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-[#111111] text-sm">
                    5. Training Academy (Zinmatt Association)
                  </h4>
                  <p>
                    Training academy enrollments, curriculum schedules, and career assistance
                    pathways are conducted in association with Zinmatt standards. Course fee
                    refunds, batch transfers, and certification credentials adhere to academy
                    academic guidelines outlined during student onboarding.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-[#111111] text-sm">
                    6. Governing Law &amp; Dispute Resolution
                  </h4>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of
                    India. Any disputes arising under or in connection with these terms shall be
                    subject to the exclusive jurisdiction of the competent courts in Rajkot,
                    Gujarat, India.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#E8E1D0] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[11px] text-[#666666]">
              Prepared by: Ali • Founder, Digi Basera
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-md bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto"
            >
              I Understand &amp; Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PrivacyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy");
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#D4AF37]/50 max-h-[90vh] overflow-y-auto text-[#111111]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF9F5] hover:bg-[#111111] hover:text-white text-[#555555] transition-colors"
          aria-label="Close Privacy modal"
        >
          ✕
        </button>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#9A7B16]">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16]">
                  Data Protection &amp; Client Trust
                </span>
                <h2 className="text-2xl font-bold font-heading">Privacy Policy</h2>
              </div>
            </div>

            {/* Quick Navigation Tabs */}
            <div className="flex items-center gap-1 bg-[#FAF8F2] p-1 rounded-xl border border-[#E8E1D0] self-start sm:self-auto">
              <button
                onClick={() => setActiveTab("privacy")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "privacy"
                    ? "bg-[#111111] text-white shadow-xs"
                    : "text-[#666666] hover:text-[#111111]"
                }`}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveTab("terms")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "terms"
                    ? "bg-[#111111] text-white shadow-xs"
                    : "text-[#666666] hover:text-[#111111]"
                }`}
              >
                Terms &amp; Conditions
              </button>
            </div>
          </div>

          <div className="border-t border-[#E8E1D0] pt-4">
            {activeTab === "privacy" ? (
              <div className="space-y-4">
                <SimplifiedPrivacyPolicy />
                <div className="pt-2 text-center">
                  <button
                    onClick={() => setActiveTab("terms")}
                    className="text-xs font-bold text-[#9A7B16] hover:text-[#7A6010] inline-flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
                  >
                    <span>View Client Terms &amp; Conditions →</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <SimplifiedClientTerms />
                <div className="pt-2 text-center">
                  <button
                    onClick={() => setActiveTab("privacy")}
                    className="text-xs font-bold text-[#9A7B16] hover:text-[#7A6010] inline-flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
                  >
                    <span>← Return to Privacy Policy</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#E8E1D0] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[11px] text-[#666666]">
              Digi Basera • Rajkot, Gujarat • Prepared by Ali, Founder
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-md bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto"
            >
              Accept &amp; Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TeamModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#D4AF37]/50 max-h-[92vh] overflow-y-auto text-[#111111]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF9F5] hover:bg-[#111111] hover:text-white text-[#555555] transition-colors"
        >
          ✕
        </button>

        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16]">
              Multidisciplinary Growth Squad
            </span>
            <h2 className="text-3xl font-bold font-heading">Meet the Digibasera Leadership</h2>
            <p className="text-xs text-[#666666]">
              Senior strategists, certified media buyers, full-stack engineers, and Zinmatt
              associate educators dedicated to your digital scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="p-5 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-3"
              >
                <div className="relative h-48 w-full rounded-lg overflow-hidden bg-gray-200">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={member.imageUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-[#111111]/85 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {member.experience}
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-[#111111] font-heading">{member.name}</h4>
                  <span className="text-xs text-[#9A7B16] font-semibold block">{member.role}</span>
                  <span className="text-[10px] text-[#777777] block">{member.department}</span>
                </div>

                <p className="text-xs text-[#555555] leading-relaxed">{member.bio}</p>

                <div className="pt-2 border-t border-[#E8E1D0]/60 flex flex-wrap gap-1">
                  {member.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="text-[9px] bg-white px-2 py-0.5 rounded border border-[#E8E1D0] text-[#333333]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-[#111111] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#E8E1D0]">
              Want our leadership team to audit your digital campaigns?
            </div>
            <a
              href={getWhatsAppUrl(
                "Hi Digibasera leadership team, I would like to schedule a growth strategy consultation.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-md bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-white fill-white" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#D4AF37]/50 max-h-[92vh] overflow-y-auto text-[#111111]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF9F5] hover:bg-[#111111] hover:text-white text-[#555555] transition-colors"
        >
          ✕
        </button>

        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16]">
              Verified Client Outcomes
            </span>
            <h2 className="text-3xl font-bold font-heading">Client Reviews & Testimonials</h2>
            <p className="text-xs text-[#666666]">
              Real feedback from enterprise founders, managing directors, and marketing leaders
              scaled by Digibasera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0] hover:border-[#D4AF37] transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#D4AF37]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                      ))}
                    </div>
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-[#E8E1D0] font-bold text-[#9A7B16] uppercase">
                      {t.industry}
                    </span>
                  </div>

                  <p className="text-xs text-[#444444] italic leading-relaxed">"{t.quote}"</p>
                </div>

                <div className="pt-3 border-t border-[#E8E1D0]/60 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-xs text-[#111111]">{t.clientName}</h5>
                    <span className="text-[10px] text-[#666666] block">
                      {t.role} • {t.company}
                    </span>
                  </div>

                  <div className="px-2 py-1 rounded bg-[#111111] text-[#D4AF37] text-[10px] font-mono font-bold">
                    {t.metricHighlight}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-[#FAF9F5] border border-[#D4AF37]/50 text-center space-y-3">
            <h4 className="text-base font-bold text-[#111111]">
              Ready to achieve comparable commercial metrics?
            </h4>
            <p className="text-xs text-[#666666] max-w-md mx-auto">
              Book a complimentary 30-minute growth teardown with our principal strategists.
            </p>
            <a
              href={getWhatsAppUrl(
                "Hi Digibasera, I reviewed your client testimonials and want to discuss scaling my brand.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider border border-[#D4AF37]"
            >
              <span>Schedule Strategy Call On WhatsApp</span>
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RefundModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#D4AF37]/50 max-h-[90vh] overflow-y-auto text-[#111111]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF9F5] hover:bg-[#111111] hover:text-white text-[#555555] transition-colors"
        >
          ✕
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#B8860B]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B8860B]">
                Billing & Retainers
              </span>
              <h2 className="text-2xl font-bold font-heading">Refund Policy & Dispute Terms</h2>
            </div>
          </div>

          <div className="space-y-4 text-xs text-[#555555] leading-relaxed border-t border-[#E8E1D0] pt-4">
            <p>
              At <strong>DigiBasera Pvt Ltd</strong>, we deliver custom web engineering, digital
              marketing, performance advertising, and technical services. We are dedicated to
              transparency, accountability, and high-performance delivery.
            </p>

            <div className="space-y-2">
              <h4 className="font-bold text-[#111111] text-sm">
                Matter of Disputes and Jurisdictional Aspects :
              </h4>
              <p>
                Any legal dispute relating to DigiBasera Pvt Ltd will be resolved solely in the
                region of Delhi / Gujarat jurisdiction courts. All legal concerns are governed
                solely by the current laws in force in India.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#111111] text-sm">
                1. Service Retainers & Custom Development
              </h4>
              <p>
                Due to the dedicated allocation of engineering, strategy, and media buying
                resources, retainers and initiated milestones are non-refundable once work has
                commenced. Cancellations must be requested at least 15 days prior to the next
                billing cycle.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-[#111111] text-sm">
                2. Satisfaction & Deliverable Revisions
              </h4>
              <p>
                We provide milestone-based approvals and guaranteed revision cycles outlined in our
                client Service Level Agreements (SLA) to guarantee complete alignment with project
                scope.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0] flex items-center justify-between gap-4">
              <div>
                <span className="font-bold text-[#111111] block">
                  Have questions regarding billing?
                </span>
                <span className="text-[11px] text-[#666666]">
                  Our accounts team responds within 24 business hours.
                </span>
              </div>
              <a
                href={`mailto:${AGENCY_CONFIG.email}`}
                className="px-4 py-2 rounded-lg bg-[#111111] text-white font-bold text-xs hover:bg-[#222222] transition-colors"
              >
                Contact Accounts
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
