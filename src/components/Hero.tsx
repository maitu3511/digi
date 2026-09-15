import heroBg from "../assets/heroes/home-hero.jpg";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  Star,
  Check,
  Award,
  TrendingUp,
  ShieldCheck,
  Zap,
  ChevronRight,
  Globe,
  Flame,
  Search,
  MousePointerClick,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { HeroBackgroundVideo } from "./HeroBackgroundVideo";
import { AGENCY_CONFIG } from "../data/agencyData";
import { getWhatsAppUrl } from "../utils/whatsapp";

// Typewriter Services list (types 1-by-1, pauses, erases, and cycles)
const TYPEWRITER_SERVICES = [
  "SEO & Google Page 1 Rankings.",
  "Custom Web Development.",
  "Google & Meta Ads PPC.",
  "Shopify & E-Commerce Stores.",
  "Social Media Marketing.",
  "Local SEO & Lead Generation.",
  "Next.js & WordPress Design.",
  "360° Digital Growth Strategy.",
];

interface HeroProps {
  onOpenConsultation: () => void;
  onNavigateToServices: () => void;
  onNavigateToTraining: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onNavigateToServices,
  onNavigateToTraining,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const currentFullText = TYPEWRITER_SERVICES[serviceIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters forward
        const nextText = currentFullText.substring(0, displayText.length + 1);
        setDisplayText(nextText);
        setTypingSpeed(80);

        if (nextText === currentFullText) {
          // Finished typing word, pause so user can read it
          setTypingSpeed(2200);
          setIsDeleting(true);
        }
      } else {
        // Erasing characters backward
        const nextText = currentFullText.substring(0, displayText.length - 1);
        setDisplayText(nextText);
        setTypingSpeed(40);

        if (nextText === "") {
          // Finished erasing, move to next service
          setIsDeleting(false);
          setServiceIndex((prev) => (prev + 1) % TYPEWRITER_SERVICES.length);
          setTypingSpeed(400); // Brief pause before starting next word
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, serviceIndex, typingSpeed]);

  return (
    <section
      className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#FAF9F5] text-[#111111]"
      id="hero-section"
    >
      {/* 1. Cinematic Bright Digital Agency & Growth Marketing Background Visual */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        {/* Static fallback image (also shown while video loads / when video is unsupported) */}
        <img
          decoding="async"
          fetchPriority="high"
          src={heroBg}
          alt="DigiBasera - Best Digital Marketing Agency and Web Development Company in Rajkot Gujarat"
          className="absolute inset-0 w-full h-full object-cover object-center animate-hero-zoom filter brightness-[1.02] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Premium cinematic background video */}
        <HeroBackgroundVideo
          poster={heroBg}
          webmSrc="/assets/videos/hero-bg.webm"
          mp4Src="/assets/videos/hero-bg.mp4"
        />
        {/* Soft, luminous white-gold gradient overlays for high topic visibility and pristine typography readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5]/70 via-[#FAF9F5]/50 to-[#FAF9F5]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5]/70 via-[#FAF9F5]/10 to-[#FAF9F5]/70" />
      </div>

      {/* 2. Warm Gold Ambient Glows & Subtle Radial Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[450px] bg-[#D4AF37]/18 rounded-full blur-[110px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-16 left-10 w-80 h-80 bg-[#C9A227]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201, 162, 39, 0.25) 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 z-10">
        {/* Top Eyebrow Badge: Rating & Google Partner */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-[#E8E1D0] shadow-sm backdrop-blur-md text-xs font-semibold hover:border-[#D4AF37] transition-all">
            <span className="flex items-center gap-1 text-[#D4AF37]">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
              <span className="text-[#111111] font-bold">4.9/5</span>
            </span>
            <span className="text-[#E8E1D0]">|</span>
            <span className="text-[#9A7B16] font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Best Digital Marketing Agency in Rajkot</span>
            </span>
            <span className="text-[#E8E1D0]">|</span>
            <span className="text-[#555555] text-[11px] font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
              Google & Meta Certified Partner
            </span>
          </div>
        </motion.div>

        {/* Main Centered Headline with complete, fully rendered typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] font-heading leading-[1.2] pb-1 min-h-[2.4em] sm:min-h-[2em] lg:min-h-[1.7em]">
            Transforming Brands Through High-Converting{" "}
            <span className="relative inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#B89018]">
              <span>{displayText || "\u00A0"}</span>
              <span className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-[#D4AF37] ml-1 sm:ml-1.5 animate-pulse rounded-full shadow-[0_0_10px_rgba(212,175,55,0.9)]" />
            </span>
          </h1>

          {/* Dynamic Service Indicator Pill */}
          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#666666]">
              Accelerating:
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#111111] text-[#D4AF37] text-xs sm:text-sm font-bold font-mono shadow-md border border-[#D4AF37]/50 transition-all duration-300">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" />
              <span>{TYPEWRITER_SERVICES[serviceIndex]}</span>
            </span>
          </div>
        </motion.div>

        {/* Centered Value Proposition Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-[#555555] max-w-3xl mx-auto font-normal leading-relaxed"
        >
          Rajkot&apos;s leading digital marketing and web development agency. We engineer custom,
          fast-loading web applications, dominate competitive Google search rankings, and deploy
          high-ROAS Google and Meta ad funnels that deliver verifiable commercial revenue.
        </motion.p>

        {/* Floating Kinetic Metric Cards & Badges Grid (Matebiz High-Impact Visuals) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-2 max-w-4xl mx-auto">
          {[
            {
              title: "+350% Traffic Growth",
              subtitle: "Average SEO Rank Lift",
              icon: TrendingUp,
              accent: "text-[#9A7B16] bg-[#FAF8F2] border-[#D4AF37]/40",
            },
            {
              title: "Page 1 Google Rankings",
              subtitle: "High-Intent Keywords",
              icon: Search,
              accent: "text-[#0A66C2] bg-[#F0F7FF] border-[#0A66C2]/30",
            },
            {
              title: "99.8% Speed Score",
              subtitle: "Conversion-Ready UX",
              icon: Zap,
              accent: "text-amber-600 bg-amber-50 border-amber-300",
            },
            {
              title: "98% Client Retention",
              subtitle: "10+ Years Trust",
              icon: ShieldCheck,
              accent: "text-emerald-700 bg-emerald-50 border-emerald-300",
            },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.28 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-3.5 rounded-xl border ${stat.accent} shadow-xs text-left backdrop-blur-xs flex items-center gap-3 transition-shadow duration-300 hover:shadow-[0_12px_28px_-6px_rgba(212,175,55,0.18)] cursor-default`}
              >
                <div className="w-8 h-8 rounded-lg bg-white shadow-xs border border-inherit flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-inherit" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#111111] font-heading leading-tight">
                    {stat.title}
                  </div>
                  <div className="text-[10px] text-[#666666] font-medium leading-tight mt-0.5">
                    {stat.subtitle}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Centered CTA Buttons with Smooth Glow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3.5 pt-3"
        >
          <button
            onClick={onOpenConsultation}
            className="btn-sheen px-8 py-3.5 rounded-md bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider border border-[#D4AF37] shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.45)] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 group"
            id="hero-cta-quote"
          >
            <span>Request Free Proposal & Audit</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          <a
            href={getWhatsAppUrl(
              "Hello Digibasera, I saw your agency portfolio and would like to get a free proposal for my business website and digital marketing.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-md bg-white hover:bg-[#F8F8F6] text-[#111111] border border-[#E8E1D0] hover:border-[#D4AF37] font-bold text-xs uppercase tracking-wider shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2.5"
            id="hero-cta-whatsapp"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

        {/* Centered Trust Proof Badges (Clutch, Google, GoodFirms, Zinmatt) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-6 border-t border-[#E8E1D0] flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 text-xs"
        >
          {/* Clutch Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#E8E1D0] shadow-sm hover:border-[#D4AF37] transition-colors">
            <span className="font-extrabold text-[#111111] tracking-tight text-xs">Clutch</span>
            <div className="flex items-center text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#D4AF37]" />
              ))}
            </div>
            <span className="font-bold text-xs text-[#111111]">5.0</span>
            <span className="text-[10px] text-[#555555]">(50+ Reviews)</span>
          </div>

          {/* Google Partner Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#E8E1D0] shadow-sm hover:border-[#D4AF37] transition-colors">
            <span className="font-bold text-[#111111] text-xs flex items-center gap-1">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
              <span className="text-[#555555] font-normal ml-0.5">Partner</span>
            </span>
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              Certified
            </span>
          </div>

          {/* GoodFirms Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#E8E1D0] shadow-sm hidden sm:flex">
            <span className="font-bold text-[#111111] text-xs">GoodFirms</span>
            <span className="text-[10px] text-[#9A7B16] font-bold">5.0 ★ Top Agency</span>
          </div>

          {/* Zinmatt Partner Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-[#D4AF37]/50 shadow-sm hidden md:flex">
            <Award className="w-3.5 h-3.5 text-[#9A7B16]" />
            <span className="font-bold text-xs text-[#111111]">Zinmatt Associate Partner</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
