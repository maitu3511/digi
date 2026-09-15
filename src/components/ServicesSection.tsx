import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ScrollReveal } from "./motion/MotionReveal";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Search,
  Share2,
  DollarSign,
  Code2,
  ShoppingCart,
  Palette,
  Video,
  ShieldCheck,
  Zap,
  Target,
  SearchCheck,
  MapPin,
  Bot,
  UserCheck,
  Compass,
  FileCode,
  ShieldAlert,
  Smartphone,
  Layout,
  Camera,
  FileText,
  Store,
  Layers,
  Package,
  MousePointerClick,
  Sliders,
  Cpu,
  Rocket,
  Image,
  PenTool,
  RefreshCw,
  Globe2,
  Terminal,
} from "lucide-react";
import { SERVICE_CATEGORIES } from "../data/agencyData";
import { loadStoredMainServices } from "../data/servicesData";
import { ServiceCategory, ServiceItem } from "../types";

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem, category: ServiceCategory) => void;
  onOpenConsultation: (serviceCat?: string) => void;
  onNavigateService?: (serviceId: string, categoryId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenConsultation,
  onNavigateService,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleServiceClick = (service: ServiceItem, category: ServiceCategory) => {
    if (onNavigateService) {
      onNavigateService(service.id, category.id);
    } else {
      onSelectService(service, category);
    }
  };
  // Helper to resolve an icon for each service
  const getServiceIcon = (iconName: string, className = "w-4 h-4") => {
    switch (iconName) {
      case "Code2":
        return <Code2 className={`${className} text-[#D4AF37]`} />;
      case "Terminal":
        return <Terminal className={`${className} text-[#D4AF37]`} />;
      case "Globe2":
        return <Globe2 className={`${className} text-[#D4AF37]`} />;
      case "ShoppingCart":
        return <ShoppingCart className={`${className} text-[#D4AF37]`} />;
      case "Store":
        return <Store className={`${className} text-[#D4AF37]`} />;
      case "Layers":
        return <Layers className={`${className} text-[#D4AF37]`} />;
      case "TrendingUp":
        return <TrendingUp className={`${className} text-[#D4AF37]`} />;
      case "Package":
        return <Package className={`${className} text-[#D4AF37]`} />;
      case "Zap":
        return <Zap className={`${className} text-[#D4AF37]`} />;
      case "Compass":
        return <Compass className={`${className} text-[#D4AF37]`} />;
      case "Target":
        return <Target className={`${className} text-[#D4AF37]`} />;
      case "DollarSign":
        return <DollarSign className={`${className} text-[#D4AF37]`} />;
      case "MousePointerClick":
        return <MousePointerClick className={`${className} text-[#D4AF37]`} />;
      case "Sliders":
        return <Sliders className={`${className} text-[#D4AF37]`} />;
      case "Search":
      case "SearchCheck":
        return <SearchCheck className={`${className} text-[#D4AF37]`} />;
      case "MapPin":
        return <MapPin className={`${className} text-[#D4AF37]`} />;
      case "Bot":
        return <Bot className={`${className} text-[#D4AF37]`} />;
      case "Smartphone":
        return <Smartphone className={`${className} text-[#D4AF37]`} />;
      case "Cpu":
        return <Cpu className={`${className} text-[#D4AF37]`} />;
      case "Rocket":
        return <Rocket className={`${className} text-[#D4AF37]`} />;
      case "Layout":
        return <Layout className={`${className} text-[#D4AF37]`} />;
      case "Palette":
        return <Palette className={`${className} text-[#D4AF37]`} />;
      case "Image":
        return <Image className={`${className} text-[#D4AF37]`} />;
      case "Camera":
        return <Camera className={`${className} text-[#D4AF37]`} />;
      case "FileText":
        return <FileText className={`${className} text-[#D4AF37]`} />;
      case "PenTool":
        return <PenTool className={`${className} text-[#D4AF37]`} />;
      case "RefreshCw":
        return <RefreshCw className={`${className} text-[#D4AF37]`} />;
      case "Share2":
        return <Share2 className={`${className} text-[#D4AF37]`} />;
      case "Video":
        return <Video className={`${className} text-[#D4AF37]`} />;
      case "ShieldCheck":
      case "ShieldAlert":
        return <ShieldCheck className={`${className} text-[#D4AF37]`} />;
      default:
        return <Sparkles className={`${className} text-[#D4AF37]`} />;
    }
  };

  // Flatten all services from all categories (pure list of service names with their category reference)
  const allServices = useMemo(() => {
    const list: { service: ServiceItem; category: ServiceCategory }[] = [];
    const sourceCategories = loadStoredMainServices().filter((s) => s.status !== "hidden");
    const categoriesToUse = sourceCategories.length > 0 ? sourceCategories : SERVICE_CATEGORIES;

    categoriesToUse.forEach((cat) => {
      cat.services.forEach((srv) => {
        list.push({ service: srv, category: cat });
      });
    });
    return list;
  }, []);

  return (
    <section
      className="relative py-16 sm:py-20 bg-white border-b border-[#E8E1D0] overflow-hidden select-none"
      id="services-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with exact requested badge */}
        <ScrollReveal direction="up" distance={24} className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F2] border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3 font-heading shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>FULL-SERVICE AGENCY CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-heading tracking-tight">
            Our Digital Growth{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227] italic font-serif">
              Services
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-3 leading-relaxed">
            Continuous auto-updating roster of full-stack digital marketing, SEO architecture, paid
            media, and engineering services.
          </p>
        </ScrollReveal>
      </div>

      {/* 1-Line Continuous Auto-Scrolling Marquee Track - ONLY Service Names */}
      <div
        className="relative w-full overflow-hidden py-4 my-2 marquee-hover-pause"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left & Right Soft Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Continuous Single Line Track with Seamless Two-Set Loop */}
        <div
          className={`flex shrink-0 w-max items-center animate-marquee-services ${
            isPaused ? "pause-marquee" : ""
          }`}
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {/* Set 1 */}
          <div className="flex shrink-0 items-center gap-4 sm:gap-5 pr-4 sm:pr-5">
            {allServices.map((item, index) => {
              const { service, category } = item;
              return (
                <div
                  key={`srv1-${service.id}-${index}`}
                  onClick={() => handleServiceClick(service, category)}
                  onMouseEnter={() => setIsPaused(true)}
                  className="group shrink-0 inline-flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#FAF9F5] hover:bg-[#111111] border border-[#E8E1D0] hover:border-[#D4AF37] shadow-xs hover:shadow-[0_8px_25px_-5px_rgba(212,175,55,0.25)] transition-all duration-300 cursor-pointer"
                  title={`View ${service.title} on Services page`}
                >
                  {/* Service Icon inside a round badge */}
                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#222222] border border-[#E8E1D0] group-hover:border-[#D4AF37]/60 flex items-center justify-center shrink-0 transition-colors">
                    {getServiceIcon(service.iconName, "w-3.5 h-3.5")}
                  </div>

                  {/* ONLY Service Name */}
                  <span className="text-xs sm:text-sm font-bold tracking-tight text-[#111111] group-hover:text-white transition-colors font-heading whitespace-nowrap">
                    {service.title}
                  </span>

                  {/* Category Pill Tag */}
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white group-hover:bg-[#D4AF37] text-[#9A7B16] group-hover:text-[#111111] border border-[#E8E1D0] group-hover:border-[#D4AF37] transition-all shrink-0">
                    {category.badge || category.title.split(" ")[0]}
                  </span>

                  {/* Arrow Indicator on Hover */}
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                </div>
              );
            })}
          </div>

          {/* Set 2 (Exact Duplicate for continuous infinite loop) */}
          <div
            className="flex shrink-0 items-center gap-4 sm:gap-5 pr-4 sm:pr-5"
            aria-hidden="true"
          >
            {allServices.map((item, index) => {
              const { service, category } = item;
              return (
                <div
                  key={`srv2-${service.id}-${index}`}
                  onClick={() => handleServiceClick(service, category)}
                  onMouseEnter={() => setIsPaused(true)}
                  className="group shrink-0 inline-flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#FAF9F5] hover:bg-[#111111] border border-[#E8E1D0] hover:border-[#D4AF37] shadow-xs hover:shadow-[0_8px_25px_-5px_rgba(212,175,55,0.25)] transition-all duration-300 cursor-pointer"
                  title={`View ${service.title} on Services page`}
                >
                  {/* Service Icon inside a round badge */}
                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#222222] border border-[#E8E1D0] group-hover:border-[#D4AF37]/60 flex items-center justify-center shrink-0 transition-colors">
                    {getServiceIcon(service.iconName, "w-3.5 h-3.5")}
                  </div>

                  {/* ONLY Service Name */}
                  <span className="text-xs sm:text-sm font-bold tracking-tight text-[#111111] group-hover:text-white transition-colors font-heading whitespace-nowrap">
                    {service.title}
                  </span>

                  {/* Category Pill Tag */}
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white group-hover:bg-[#D4AF37] text-[#9A7B16] group-hover:text-[#111111] border border-[#E8E1D0] group-hover:border-[#D4AF37] transition-all shrink-0">
                    {category.badge || category.title.split(" ")[0]}
                  </span>

                  {/* Arrow Indicator on Hover */}
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Direct crawlable service links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 flex flex-wrap justify-center gap-2">
        {[
          ["SEO Services", "/services/seo"],
          ["Digital Marketing", "/services/digital-marketing"],
          ["Google Ads", "/services/google-ads"],
          ["Web Development", "/services/web-development"],
          ["Social Media Marketing", "/services/social-media-marketing"],
          ["Shopify Development", "/services/shopify-development"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="inline-flex items-center rounded-full border border-[#E8E1D0] bg-white px-3.5 py-2 text-[10px] sm:text-xs font-bold text-[#555] hover:border-[#D4AF37] hover:text-[#9A7B16] hover:-translate-y-0.5 transition-all shadow-xs"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Clean Bottom Explore Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center">
        <button
          onClick={() => onOpenConsultation("Full-Service Agency Capabilities")}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#111111] hover:text-[#9A7B16] uppercase tracking-widest transition-colors font-heading group"
        >
          <span>Request Custom Proposal For Any Service</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
