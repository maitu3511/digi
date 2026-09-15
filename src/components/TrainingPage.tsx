import certificateSampleImg from "../assets/certificate-photo-new.webp";
import trainingHeroBg from "../assets/heroes/training-hero.jpg";
import React, { useState } from "react";
import {
  TRAINING_COURSES,
  TRAINING_PILLARS,
  STUDENT_JOURNEY_STEPS,
  TRAINING_CONFIG,
  FREE_TRAINING_INITIATIVE,
} from "../data/trainingData";
import { TrainingCourse } from "../types";
import {
  GraduationCap,
  Award,
  Briefcase,
  Laptop,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Clock,
  BookOpen,
  FileCheck,
  ShieldCheck,
  Wrench,
  Gift,
  Check,
  Layers,
  HelpCircle,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getTrainingWhatsAppUrl } from "../utils/whatsapp";

interface TrainingPageProps {
  onOpenEnquiryModal: (courseName?: string) => void;
  onSwitchToAgency: () => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({
  onOpenEnquiryModal,
  onSwitchToAgency,
}) => {
  const [selectedCourse] = useState<TrainingCourse>(TRAINING_COURSES[0]);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const trainingTopics = [
    { name: "Digital Marketing Fundamentals", tag: "Core Base" },
    { name: "Search Engine Optimization (SEO)", tag: "Organic Growth" },
    { name: "Social Media Marketing (SMM)", tag: "Brand & Viral" },
    { name: "Google Ads & Search PPC", tag: "High-Intent Media" },
    { name: "Meta Ads (Facebook & Instagram)", tag: "Performance Media" },
    { name: "Content Marketing & Copywriting", tag: "Storytelling" },
    { name: "Email Marketing & Automations", tag: "Retention Flows" },
    { name: "Analytics & Google Tag Manager", tag: "GA4 Data" },
    { name: "Website Basics & Landing Pages", tag: "Tech UX" },
    { name: "E-commerce & Marketplace Marketing", tag: "Shopify/Amazon" },
    { name: "High-Converting Lead Generation", tag: "B2B & B2C" },
    { name: "Branding & Visual Identity", tag: "Design Systems" },
    { name: "AI Tools for Digital Marketing", tag: "Generative AI" },
  ];

  const trainingFaqs = [
    {
      q: "Kya 90 Days ki digital marketing classes sach me bilkul FREE hai?",
      a: "Haan, 100% bilkul FREE! Humari 90 Days (3 Months) ki daily live training, mentor guidance, classes, doubt clearing, aur placement support ke liye hum ₹0 tuition fee charge karte hai. Classes bilkul free hoti hai. Hum sirf aur sirf unko jo professional licensed software tools, live hosting & domain sandbox provide karte hai practical hands-on practice ke liye, unka nominal cost lete hai.",
    },
    {
      q: "Hum sirf tools ka paisa kyu lete hai aur kaun-kaun se tools provide kiye jate hai?",
      a: "Digital marketing me sirf video dekhne ya theory padhne se koi expert nahi banta — jab tak aap real tools par live campaign nahi banate, tab tak practical knowledge nahi aati. Isiliye hum har student ko SEMrush (SEO research), Canva Pro (Design), WordPress & Elementor Pro, live domain aur cloud hosting sandbox, Meta Ads sandbox, aur AI tools provide karte hai. In licensed software ki direct company licensing cost hoti hai, isiliye students se sirf unke tools ka nominal charge liya jata hai jabki teaching bilkul free hai.",
    },
    {
      q: "What is the association between DigiBasera and Zinmatt?",
      a: "DigiBasera operates as an Official Business Associate of Zinmatt. Through this association, students receive a standardized, ISO-aligned curriculum, practical agency assignments, and verifiable certifications developed to meet modern enterprise and agency hiring standards.",
    },
    {
      q: "Who can enroll in these 90-Day Free Digital Marketing classes?",
      a: "The program is open to college students, fresh graduates looking for their first high-paying job, working professionals looking to pivot to digital/marketing roles, freelancers looking for international clients, and business owners wanting to manage their own ads and SEO in-house.",
    },
    {
      q: "Course complete hone ke baad certification aur job placement kaise milega?",
      a: "90 days ki training aur final live agency capstone project submit karne par aapko Zinmatt Associate ki taraf se official Certificate of Completion diya jata hai. Saath hi hum 1-on-1 resume optimization, LinkedIn curation, mock HR & technical interview drills, aur agency referral placement assistance provide karte hai.",
    },
    {
      q: "Kya classes live hoti hai ya pre-recorded videos?",
      a: "Ye interactive daily live classes hoti hai jisme senior agency marketers live screen-share karke tools aur campaigns chalana sikhate hai aur daily live doubts solve karte hai.",
    },
  ];

  return (
    <div className="pb-24 bg-[#FFFFFF] text-[#111111]" id="training-page">
      {/* 1. TRAINING HERO SECTION */}
      <section className="relative py-14 lg:py-24 overflow-hidden bg-[#FAF9F5] border-b border-[#E8E1D0]">
        {/* Background Image with Ken Burns / Zoom Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <img
            loading="lazy"
            decoding="async"
            src={trainingHeroBg}
            alt="Digital Marketing Academy & Certification Training"
            className="w-full h-full object-cover object-center animate-hero-zoom opacity-20 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-[#FAF9F5]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-85" />
        </div>

        {/* Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest font-heading shadow-xs backdrop-blur-xs">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>{TRAINING_CONFIG.associationBadge}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e8f5e9] border border-[#a5d6a7] text-[#1b5e20] text-xs font-black uppercase tracking-wider font-heading">
                  <Gift className="w-3.5 h-3.5 text-[#2e7d32]" />
                  <span>90 Days 100% Free Classes</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#111111] font-heading tracking-tight leading-[1.15]">
                90 Days Free Classes.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#B89018] italic font-serif">
                  Learn Real Skills.
                </span>{" "}
                Pay Only For Tools.
              </h1>

              {/* Core Offer Callout Box (Hindi / English Highlight) */}
              <div className="p-4 sm:p-5 rounded-xl bg-white border-2 border-[#D4AF37] shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF9F5] border border-[#D4AF37] text-[#9A7B16] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#9A7B16] font-heading block">
                      Core Guarantee • Zero Tuition Fee
                    </span>
                    <p className="text-sm font-bold text-[#111111] font-heading mt-0.5">
                      90 Days ka hum free classes karate hai — classes bilkul FREE hoti hai!
                    </p>
                    <p className="text-xs text-[#555555] mt-1 leading-relaxed">
                      Hum students se coaching ya tuition ka ₹0 lete hai. Hum only unko jo live
                      practical tools, software licenses aur web hosting sandbox provide karte hai,
                      sirf unka nominal charge lete hai.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-2xl">
                Master complete 360° Digital Marketing in 3 months: Website Creation, SEO, Google &
                Meta Ads, AI Content Automation, and E-commerce. Complete with live agency projects,
                verifiable Zinmatt certification, and job placement assistance.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() =>
                    onOpenEnquiryModal("90 Days Free Digital Marketing Classes Enrollment")
                  }
                  className="px-6 py-3.5 rounded-md bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-2 transition-all hover:shadow-md"
                >
                  <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
                  <span>Enquire for 90 Days Free Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getTrainingWhatsAppUrl(
                    "90 Days Free Digital Marketing Classes (Pay Only for Tools)",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-md bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Course Counselor</span>
                </a>

                <button
                  onClick={onSwitchToAgency}
                  className="px-4 py-3.5 rounded-md bg-[#F8F8F6] hover:bg-white text-[#555555] hover:text-[#111111] border border-[#E8E1D0] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Switch to Agency Services</span>
                </button>
              </div>

              {/* Value Metrics Strip */}
              <div className="pt-4 border-t border-[#E8E1D0] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-[#111111]">
                <div className="p-2 rounded bg-white border border-[#E8E1D0] text-center">
                  <span className="block text-[#2e7d32] font-black text-sm">₹0 Tuition</span>
                  <span className="text-[10px] text-[#555555] uppercase font-bold">
                    Free Classes
                  </span>
                </div>
                <div className="p-2 rounded bg-white border border-[#E8E1D0] text-center">
                  <span className="block text-[#D4AF37] font-black text-sm">90 Days</span>
                  <span className="text-[10px] text-[#555555] uppercase font-bold">Daily Live</span>
                </div>
                <div className="p-2 rounded bg-white border border-[#E8E1D0] text-center">
                  <span className="block text-[#111111] font-black text-sm">Tools Only</span>
                  <span className="text-[10px] text-[#555555] uppercase font-bold">
                    Nominal Pass
                  </span>
                </div>
                <div className="p-2 rounded bg-white border border-[#E8E1D0] text-center">
                  <span className="block text-[#9A7B16] font-black text-sm">100% Support</span>
                  <span className="text-[10px] text-[#555555] uppercase font-bold">
                    Job Placement
                  </span>
                </div>
              </div>
            </div>

            {/* Right Academy Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-xl bg-[#F8F8F6] border border-[#E8E1D0] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="relative h-48 rounded-lg overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                    alt="Digital Marketing Classroom & Online Career Mentorship"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#2e7d32] px-2.5 py-1 rounded shadow-md font-heading">
                      100% Free Tuition
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#111111] bg-[#D4AF37] px-2 py-0.5 rounded font-heading">
                      Flagship 90-Day Cohort
                    </span>
                    <h4 className="text-sm font-bold text-white font-heading mt-1">
                      90 Days Free Digital Marketing Classes
                    </h4>
                  </div>
                </div>

                {/* Free Classes & Tools Model Highlight */}
                <div className="p-4 rounded-lg bg-white border border-[#D4AF37] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16] font-heading">
                      Transparent Fee Breakdown:
                    </span>
                    <span className="text-[10px] font-black text-[#2e7d32] bg-[#e8f5e9] px-2 py-0.5 rounded">
                      Zero Hidden Cost
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2 rounded bg-[#FAF9F5] border border-[#E8E1D0]">
                      <span className="text-[10px] text-[#555555] block">90 Days Classes</span>
                      <strong className="text-[#2e7d32] font-black text-sm">₹0 (FREE)</strong>
                    </div>
                    <div className="p-2 rounded bg-[#FAF9F5] border border-[#E8E1D0]">
                      <span className="text-[10px] text-[#555555] block">Tools Provided</span>
                      <strong className="text-[#111111] font-bold text-xs">
                        Nominal Tool Pass
                      </strong>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#555555] leading-snug pt-1">
                    SEMrush, Canva Pro, WordPress, live domain & hosting sandbox hum provide karte
                    hai taaki aap practical seekh sakein.
                  </p>
                </div>

                {/* Zinmatt Association Badge Box */}
                <div className="p-4 rounded-lg bg-white border border-[#E8E1D0] flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#9A7B16] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#111111] font-heading uppercase tracking-wider">
                      Zinmatt Business Association
                    </h5>
                    <p className="text-[11px] text-[#555555] mt-0.5 leading-snug">
                      ISO-aligned curriculum framework and verified agency certification recognized
                      by digital marketing employers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEDICATED SPOTLIGHT SECTION: THE 90-DAY FREE CLASSES MODEL */}
      <section
        className="py-20 bg-gradient-to-b from-white via-[#FAF9F5] to-white border-b border-[#E8E1D0]"
        id="90-days-free-initiative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF37] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3 font-heading shadow-xs">
              <Gift className="w-4 h-4 text-[#D4AF37]" />
              <span>{FREE_TRAINING_INITIATIVE.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-heading tracking-tight">
              {FREE_TRAINING_INITIATIVE.title}
            </h2>
            <div className="mt-3 p-3 max-w-2xl mx-auto rounded-lg bg-white border border-[#E8E1D0]">
              <p className="text-sm sm:text-base font-bold text-[#9A7B16] font-heading">
                &ldquo;{FREE_TRAINING_INITIATIVE.tagline}&rdquo;
              </p>
            </div>
            <p className="text-xs sm:text-sm text-[#555555] mt-4 leading-relaxed max-w-2xl mx-auto">
              {FREE_TRAINING_INITIATIVE.description}
            </p>
          </div>

          {/* 3 Core Model Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Card 1: Free Classes */}
            <div className="rounded-xl bg-white border-2 border-[#2e7d32]/40 hover:border-[#2e7d32] p-6 sm:p-8 transition-all shadow-sm hover:shadow-md relative">
              <div className="absolute top-4 right-4 bg-[#e8f5e9] text-[#1b5e20] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded font-mono">
                ₹0 TUITION
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] text-[#2e7d32] flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] font-heading mb-2">
                1. 90 Days 100% Free Live Classes
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed mb-4">
                Classes bilkul FREE hoti hai! 3 full months of live daily mentor-led sessions, live
                screen-sharing workshops, and daily doubt clearing at zero coaching fee.
              </p>
              <ul className="space-y-2 text-xs text-[#111111] pt-2 border-t border-[#E8E1D0]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#2e7d32] shrink-0 mt-0.5" />
                  <span>Zero registration or admission fee</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#2e7d32] shrink-0 mt-0.5" />
                  <span>Daily live mentor interaction & doubt resolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#2e7d32] shrink-0 mt-0.5" />
                  <span>Real agency client case studies & campaigns</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Only Tools Fee */}
            <div className="rounded-xl bg-white border-2 border-[#D4AF37] p-6 sm:p-8 transition-all shadow-md relative">
              <div className="absolute top-4 right-4 bg-[#FAF9F5] text-[#9A7B16] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded font-mono border border-[#D4AF37]">
                DIRECT TOOLS PASS
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF9F5] text-[#9A7B16] border border-[#D4AF37] flex items-center justify-center mb-5">
                <Wrench className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] font-heading mb-2">
                2. Pay Only For Tools Provided
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed mb-4">
                Hum only unko jo tools provide karte hai unka paisa lete hai. Practical learning ke
                liye hum students ko licensed premium software credentials dete hai.
              </p>
              <ul className="space-y-2 text-xs text-[#111111] pt-2 border-t border-[#E8E1D0]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>SEMrush SEO & competitor intelligence access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>WordPress & Elementor Pro builder licenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Live domain & cloud hosting sandbox for practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Canva Pro & Generative AI generation tools</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Agency Projects & Placement */}
            <div className="rounded-xl bg-white border-2 border-[#E8E1D0] hover:border-[#D4AF37] p-6 sm:p-8 transition-all shadow-sm hover:shadow-md relative">
              <div className="absolute top-4 right-4 bg-[#F8F8F6] text-[#555555] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded font-mono">
                CAREER FIRST
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#F8F8F6] text-[#111111] border border-[#E8E1D0] flex items-center justify-center mb-5">
                <Briefcase className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] font-heading mb-2">
                3. Agency Projects & Placement
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed mb-4">
                Kyuki aapke paas real tools hote hai, aap actual live projects par kaam karte hai
                aur interview ke liye high-credibility agency portfolio tayar karte hai.
              </p>
              <ul className="space-y-2 text-xs text-[#111111] pt-2 border-t border-[#E8E1D0]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Verified Certificate in association with Zinmatt</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>1-on-1 resume optimization & LinkedIn profiling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Mock technical interviews & agency referrals</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tools Included Grid Showcase */}
          <div className="rounded-xl bg-white border border-[#E8E1D0] p-6 sm:p-8 shadow-sm mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-[#E8E1D0] pb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#9A7B16] font-heading">
                  Software Suite Allocated To You
                </span>
                <h3 className="text-xl font-bold text-[#111111] font-heading">
                  Tools Provided During the 90 Days Free Program
                </h3>
              </div>
              <span className="text-xs text-[#555555] bg-[#FAF9F5] px-3 py-1.5 rounded border border-[#E8E1D0]">
                Live Logins & Sandboxes Included in Tool Pass
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {FREE_TRAINING_INITIATIVE.toolsIncluded.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] hover:border-[#D4AF37] transition-colors"
                >
                  <div className="w-7 h-7 rounded-md bg-white text-[#9A7B16] flex items-center justify-center border border-[#E8E1D0] mb-2">
                    <Laptop className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-xs font-bold text-[#111111]">{tool.name}</h4>
                  <span className="text-[10px] text-[#555555] font-mono block mt-0.5">
                    {tool.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 90-Day Month-by-Month Timeline */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#9A7B16] font-heading">
                Step-by-Step Curriculum
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading mt-1">
                Your 90-Day Learning Journey
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] mt-1">
                A structured 3-month roadmap moving from foundational web design to advanced paid
                media and AI automation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {FREE_TRAINING_INITIATIVE.timeline90Days.map((phase, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all shadow-sm"
                >
                  <div className="inline-block px-2.5 py-1 rounded bg-[#FAF9F5] border border-[#D4AF37] text-[#9A7B16] text-xs font-bold font-mono mb-3">
                    {phase.period}
                  </div>
                  <h4 className="text-base font-bold text-[#111111] font-heading mb-3">
                    {phase.focus}
                  </h4>
                  <ul className="space-y-2 text-xs text-[#555555]">
                    {phase.topics.map((t, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY LEARN DIGITAL MARKETING (Pillars) */}
      <section className="py-16 bg-[#F8F8F6] border-b border-[#E8E1D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading">
              Why Learn Digital Marketing With Us?
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2">
              We eliminate financial barriers with free classes while guaranteeing practical mastery
              through real agency tools.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAINING_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all group shadow-sm"
              >
                <span className="text-xs font-mono font-bold text-[#9A7B16] bg-[#F8F8F6] px-2.5 py-0.5 rounded border border-[#E8E1D0]">
                  {pillar.number}
                </span>
                <h4 className="text-base font-bold text-[#111111] font-heading mt-3 mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#555555] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COURSES SECTION */}
      <section
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        id="training-courses-section"
      >
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-2 font-heading">
            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Structured Career Tracks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] font-heading">
            Choose Your Learning Path
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] mt-2">
            All tracks feature 100% Free Live Mentorship — you only cover the nominal software and
            tools pass for hands-on assignments.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {TRAINING_COURSES.map((course) => {
            return (
              <div
                key={course.id}
                className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  course.popular
                    ? "bg-white border-2 border-[#D4AF37] shadow-xl"
                    : "bg-white border border-[#E8E1D0] hover:border-[#D4AF37] shadow-sm"
                }`}
              >
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#111111] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded shadow-md font-heading flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Flagship 90-Day Free Track</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16] bg-[#F8F8F6] px-2 py-0.5 rounded border border-[#E8E1D0]">
                      {course.badge}
                    </span>
                    <span className="text-xs text-[#555555] font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] font-heading mt-1 mb-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-[#555555] leading-relaxed mb-4">{course.shortDesc}</p>

                  {/* Fee Breakdown Box */}
                  {course.feeModel && (
                    <div className="mb-6 p-3 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#555555]">
                          Classes Tuition Fee:
                        </span>
                        <span className="text-xs font-black text-[#2e7d32] bg-[#e8f5e9] px-2 py-0.5 rounded font-mono">
                          {course.feeModel.tuition}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#555555] flex items-center gap-1.5 pt-0.5">
                        <Wrench className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{course.feeModel.toolsFeeNote}</span>
                      </div>
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#111111] font-heading">
                      Curriculum Modules:
                    </h5>
                    {course.curriculumHighlights.slice(0, 5).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#111111]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                    {course.curriculumHighlights.length > 5 && (
                      <span className="text-[11px] text-[#9A7B16] font-semibold block pt-1">
                        +{course.curriculumHighlights.length - 5} additional modules included
                      </span>
                    )}
                  </div>

                  {/* Tools */}
                  <div className="space-y-2 mb-6">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#111111] font-heading">
                      Tools & Platforms Mastered:
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {course.toolsCovered.map((tool, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] text-[#111111] bg-[#F8F8F6] px-2 py-0.5 rounded border border-[#E8E1D0]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-[#E8E1D0] space-y-2.5">
                  <button
                    onClick={() => onOpenEnquiryModal(course.title)}
                    className="w-full py-3 rounded-md bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Enquire for Upcoming Batch</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getTrainingWhatsAppUrl(course.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-md bg-[#F8F8F6] hover:bg-white text-[#111111] border border-[#E8E1D0] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp Course Counseling</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. WHAT YOU WILL LEARN (13 Topics Grid) */}
      <section className="py-16 bg-[#F8F8F6] border-y border-[#E8E1D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading">
              What You Will Learn Across 90 Days
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2">
              A comprehensive industry-relevant syllabus covering organic, paid, creative,
              technical, and modern AI toolsets.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {trainingTopics.map((topic, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-colors flex items-center gap-3 shadow-sm"
              >
                <div className="w-8 h-8 rounded-md bg-[#F8F8F6] text-[#9A7B16] flex items-center justify-center shrink-0 border border-[#E8E1D0]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111111]">{topic.name}</h4>
                  <span className="text-[10px] text-[#555555] font-mono">{topic.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CERTIFICATION SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="certification-section">
        <div className="rounded-xl bg-[#111111] border border-[#D4AF37] p-8 sm:p-12 shadow-xl text-white">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs font-bold uppercase tracking-widest font-heading border border-white/10">
                <Award className="w-3.5 h-3.5" />
                <span>Certification After 90-Day Course Completion</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
                Verifiable Certificate to Boost Your Career Credentials
              </h2>

              <p className="text-[#E8E1D0] text-sm leading-relaxed">
                Upon successful completion of coursework, practical assignments, and final capstone
                evaluation, students receive official certification in association with Zinmatt.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/5 border border-white/10">
                  <FileCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
                      Official Certificate of Completion (Zinmatt Associate)
                    </h5>
                    <p className="text-[11px] text-[#E8E1D0]/80">
                      Demonstrates hands-on competence across real-world digital marketing
                      disciplines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
                      ISO-Certified Curriculum Alignment & Skill Guidelines
                    </h5>
                    <p className="text-[11px] text-[#E8E1D0]/80">
                      Standardized training module design following recognized professional quality
                      benchmarks.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-[#E8E1D0]/60 italic">
                *Note: Exact certification details, assessment criteria, and accreditation documents
                can be verified with our academic counseling team during enrollment.
              </p>
            </div>

            {/* Certificate Sample Visual */}
            <div className="lg:col-span-5">
              <div className="p-4 sm:p-5 rounded-xl bg-white border-2 border-[#D4AF37] shadow-2xl relative text-[#111111]">
                <img
                  src={certificateSampleImg}
                  alt="Sample 90-day digital marketing course completion certificate issued in association with Zinmatt"
                  className="w-full h-auto rounded-lg border border-[#E8E1D0]"
                  width={1200}
                  height={845}
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex justify-between items-center pt-3 text-[10px] text-[#555555] font-heading">
                  <span>Sample Certificate</span>
                  <span>ISO 9001:2015 Aligned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. JOB PLACEMENT ASSISTANCE */}
      <section className="py-16 bg-[#F8F8F6] border-y border-[#E8E1D0]" id="placement-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-2 font-heading">
              <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Career Acceleration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] font-heading">
              Learn Skills. Get Career Support.
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2">
              We empower learners with the exact practical tools and coaching needed to land agency,
              in-house, or freelancing opportunities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "100% Job Placement Assistance",
                desc: "Connecting qualified students with our hiring partner network, digital agencies, and corporate marketing teams.",
                icon: Briefcase,
              },
              {
                title: "Resume & LinkedIn Optimization",
                desc: "Tailoring your profile with high-impact keywords, live project links, and quantifiable achievement metrics.",
                icon: FileCheck,
              },
              {
                title: "Mock Interview Preparation",
                desc: "Practicing tough agency technical questions, campaign budget case questions, and live pitch scenarios.",
                icon: Users,
              },
              {
                title: "Live Agency Client Projects",
                desc: "Build a tangible portfolio of real campaigns rather than just theoretical dummy assignments.",
                icon: Laptop,
              },
              {
                title: "Career Guidance & Mentorship",
                desc: "Ongoing 1-on-1 counseling on freelance pricing, high-ticket niche selection, and career growth trajectories.",
                icon: Award,
              },
              {
                title: "Industry-Oriented Learning",
                desc: "Curriculum constantly updated to reflect algorithm changes, social media trends, and new AI tools.",
                icon: Sparkles,
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-md bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-base font-bold text-[#111111] font-heading mb-2">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#555555] leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. STUDENT JOURNEY (5 Steps) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading">
            Your 5-Step Path to a Digital Career
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] mt-2">
            A clear roadmap from first counseling session to verified certification and career
            placement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STUDENT_JOURNEY_STEPS.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#F8F8F6] border border-[#E8E1D0] flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="text-2xl font-bold font-mono text-[#D4AF37] block mb-2">
                  {s.step}
                </span>
                <h4 className="text-sm font-bold text-[#111111] font-heading mb-1.5">{s.title}</h4>
                <p className="text-xs text-[#555555] leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TRAINING FAQS */}
      <section className="py-16 bg-[#F8F8F6] border-y border-[#E8E1D0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-2 font-heading">
              <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading">
              Frequently Asked Questions (90-Day Free Classes)
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2">
              Everything you need to know about our 100% free classes, tools charges, and
              certification.
            </p>
          </div>

          <div className="space-y-3">
            {trainingFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-lg bg-white border border-[#E8E1D0] overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-[#111111] hover:text-[#D4AF37]"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#D4AF37] font-mono text-base">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-xs text-[#555555] leading-relaxed border-t border-[#E8E1D0]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ENQUIRY CALL TO ACTION */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#111111] border border-[#D4AF37] p-8 sm:p-12 text-center space-y-6 text-white shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#2e7d32] text-white text-xs font-bold uppercase tracking-wider font-heading">
            <Gift className="w-3.5 h-3.5" />
            <span>Upcoming Batch: 90 Days Free Classes (Zero Tuition)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
            Ready to Start Your Digital Marketing Career?
          </h2>
          <p className="text-xs sm:text-sm text-[#E8E1D0] max-w-xl mx-auto leading-relaxed">
            Classes are 100% free — you only invest in the actual tools you use. Get personalized
            counseling, view batch timings, and reserve your seat today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenEnquiryModal("90 Days Free Digital Marketing Enrollment")}
              className="px-6 py-3.5 rounded-md bg-[#D4AF37] text-[#111111] hover:bg-[#C9A227] font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              Join 90 Days Free Batch
            </button>

            <a
              href={getTrainingWhatsAppUrl(
                "90 Days Free Digital Marketing Classes (Pay Only for Tools)",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-md bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Talk to Counselor on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
