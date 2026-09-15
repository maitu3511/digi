import servicesHeroBg from "../assets/heroes/services-hero.jpg";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Search,
  Share2,
  DollarSign,
  Palette,
  Code2,
  ShoppingCart,
  Video,
  Smartphone,
  Layout,
  Camera,
  FileText,
  Compass,
  ChevronRight,
  ShieldCheck,
  Zap,
  ExternalLink,
  ChevronDown,
  Layers,
  Target,
  SearchCheck,
  Bot,
  UserCheck,
  Sliders,
  Package,
  Store,
  Film,
  PenTool,
  Clock,
  Wrench,
  HelpCircle,
  PhoneCall,
  Briefcase,
  ArrowLeft,
} from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { getServiceWhatsAppUrl } from "../utils/whatsapp";
import { MainServiceCatalogueItem, loadStoredMainServices } from "../data/servicesData";
import { loadStoredPortfolioItems } from "../data/portfolioData";
import { PageType, ServiceItem, ServiceCategory, PortfolioItem } from "../types";
import { AreasWeServePage } from "./AreasWeServePage";
import { IsBusinessReadySection } from "../components/IsBusinessReadySection";

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: (serviceName?: string) => void;
  onSelectService?: (service: ServiceItem, category: ServiceCategory) => void;
  initialCategorySlug?: string;
  initialSubServiceId?: string;
  targetServiceId?: string | null;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultation,
  initialCategorySlug,
  initialSubServiceId,
  targetServiceId,
}) => {
  // Load dynamic services from localStorage or defaults (includes Areas We Serve as final card)
  const [mainServices] = useState<MainServiceCatalogueItem[]>(() => {
    return loadStoredMainServices().filter((s) => s.status !== "hidden");
  });

  const [portfolioItems] = useState<PortfolioItem[]>(() => {
    return loadStoredPortfolioItems().filter((p) => p.status === "active");
  });

  // Current view state: 'overview' (main page), 'category' (category detail), 'subservice' (subservice deep-dive)
  const [activeCategorySlug, setActiveCategorySlug] = useState<string | null>(
    initialCategorySlug || null,
  );
  const [activeSubServiceId, setActiveSubServiceId] = useState<string | null>(
    initialSubServiceId || null,
  );

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Sync with initial props if provided
  useEffect(() => {
    if (initialCategorySlug) {
      setActiveCategorySlug(initialCategorySlug);
    }
    if (initialSubServiceId) {
      setActiveSubServiceId(initialSubServiceId);
    }
  }, [initialCategorySlug, initialSubServiceId]);

  // Handle scroll to targeted service section
  useEffect(() => {
    if (!targetServiceId) return;

    setActiveCategorySlug(null);
    setActiveSubServiceId(null);

    let attempts = 0;
    let timer: NodeJS.Timeout;

    const tryScroll = () => {
      attempts++;
      // Check direct subservice element
      let targetEl = document.getElementById(`service-${targetServiceId}`);
      let parentEl: HTMLElement | null = null;

      // Also check by category if not directly found
      const parentCat = mainServices.find(
        (c) =>
          c.id === targetServiceId ||
          c.services?.some(
            (s) =>
              s.id === targetServiceId || s.title.toLowerCase() === targetServiceId.toLowerCase(),
          ),
      );

      if (parentCat) {
        parentEl = document.getElementById(`service-${parentCat.id}`);
      }

      if (!targetEl && parentEl) {
        targetEl = parentEl;
      }

      if (targetEl) {
        // Center the element in viewport smoothly
        targetEl.scrollIntoView({ behavior: "smooth", block: "center" });

        // Apply distinct, luxury golden highlight
        targetEl.classList.add(
          "ring-4",
          "ring-[#D4AF37]",
          "ring-offset-2",
          "border-[#D4AF37]",
          "shadow-xl",
          "transition-all",
          "duration-500",
        );

        if (parentEl && parentEl !== targetEl) {
          parentEl.classList.add("ring-2", "ring-[#D4AF37]/50", "ring-offset-4");
        }

        setTimeout(() => {
          targetEl?.classList.remove(
            "ring-4",
            "ring-[#D4AF37]",
            "ring-offset-2",
            "border-[#D4AF37]",
            "shadow-xl",
          );
          parentEl?.classList.remove("ring-2", "ring-[#D4AF37]/50", "ring-offset-4");
        }, 4000);

        return; // Successfully scrolled
      }

      // Retry up to 5 times (120ms, 250ms, 450ms, 700ms, 1000ms) to ensure page has mounted and rendered
      if (attempts < 5) {
        timer = setTimeout(tryScroll, 160 * attempts);
      }
    };

    // First attempt after small delay for DOM commit & motion transition
    timer = setTimeout(tryScroll, 120);

    return () => clearTimeout(timer);
  }, [targetServiceId, mainServices]);

  // Scroll to top when category/subservice view changes (unless targeting specific service)
  useEffect(() => {
    if (!targetServiceId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeCategorySlug, activeSubServiceId, targetServiceId]);

  // Active Category object
  const activeCategory = useMemo(() => {
    if (!activeCategorySlug) return null;
    return mainServices.find((s) => s.id === activeCategorySlug) || null;
  }, [activeCategorySlug, mainServices]);

  // Active Sub-Service object
  const activeSubService = useMemo(() => {
    if (!activeCategory || !activeSubServiceId) return null;
    return activeCategory.services.find((s) => s.id === activeSubServiceId) || null;
  }, [activeCategory, activeSubServiceId]);

  // Filtered Main Services for Search
  const filteredMainServices = useMemo(() => {
    if (!searchQuery.trim()) return mainServices;
    const q = searchQuery.toLowerCase();
    return mainServices.filter((s) => {
      const matchTitle = s.title.toLowerCase().includes(q);
      const matchBadge = s.badge.toLowerCase().includes(q);
      const matchDesc = s.shortDescription.toLowerCase().includes(q);
      const matchSubs = s.services.some(
        (sub) =>
          sub.title.toLowerCase().includes(q) ||
          sub.shortDesc.toLowerCase().includes(q) ||
          sub.deliverables.some((d) => d.toLowerCase().includes(q)),
      );
      return matchTitle || matchBadge || matchDesc || matchSubs;
    });
  }, [searchQuery, mainServices]);

  // Related Portfolio items for active category
  const relatedPortfolio = useMemo(() => {
    if (!activeCategory) return [];
    return portfolioItems
      .filter(
        (p) =>
          p.categoryId === activeCategory.id ||
          p.category === activeCategory.portfolioCategory ||
          p.relatedServiceIds?.some((sid) =>
            activeCategory.services.some(
              (sub) => sub.id === sid || sid.includes(activeCategory.id),
            ),
          ),
      )
      .slice(0, 3);
  }, [activeCategory, portfolioItems]);

  // Category Specific FAQ generator
  const getCategoryFaqs = (cat: MainServiceCatalogueItem) => {
    return [
      {
        question: `How does DigiBasera deliver ${cat.title}?`,
        answer: `We follow a transparent 5-step growth methodology: (1) Discovery & audit, (2) Strategy & commercial blueprint, (3) High-precision execution, (4) Continuous testing & optimization, and (5) Real-time reporting. Every campaign is managed by senior specialists with full intellectual property ownership handed over to you.`,
      },
      {
        question: `What is the typical timeline and pricing structure for ${cat.title}?`,
        answer: `Timelines and investments depend on your business goals, project scope, and custom deliverables. We provide upfront, transparent commercial quotes before starting any engagement.`,
      },
      {
        question: `Can we customize or bundle ${cat.title} with other digital services?`,
        answer: `Yes, absolutely. We frequently build custom multi-channel growth packages combining Web Development, SEO, Paid Ads, and Content Creation for high-growth enterprises and scaling brands.`,
      },
      {
        question: `Do you provide weekly reporting and direct support?`,
        answer: `Yes. You receive dedicated account management with real-time Looker Studio dashboards, weekly progress summaries, and instant WhatsApp support during business hours.`,
      },
    ];
  };

  // Helper icon resolver
  const getServiceIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case "Code2":
        return <Code2 className={`${className} text-[#D4AF37]`} />;
      case "ShoppingCart":
      case "Store":
        return <ShoppingCart className={`${className} text-[#D4AF37]`} />;
      case "TrendingUp":
        return <TrendingUp className={`${className} text-[#D4AF37]`} />;
      case "Compass":
        return <Compass className={`${className} text-[#D4AF37]`} />;
      case "DollarSign":
        return <DollarSign className={`${className} text-[#D4AF37]`} />;
      case "Search":
      case "SearchCheck":
        return <Search className={`${className} text-[#D4AF37]`} />;
      case "Smartphone":
        return <Smartphone className={`${className} text-[#D4AF37]`} />;
      case "Layout":
        return <Layout className={`${className} text-[#D4AF37]`} />;
      case "Palette":
        return <Palette className={`${className} text-[#D4AF37]`} />;
      case "Camera":
        return <Camera className={`${className} text-[#D4AF37]`} />;
      case "FileText":
      case "PenTool":
        return <FileText className={`${className} text-[#D4AF37]`} />;
      case "Share2":
        return <Share2 className={`${className} text-[#D4AF37]`} />;
      case "Video":
      case "Film":
        return <Video className={`${className} text-[#D4AF37]`} />;
      case "Package":
        return <Package className={`${className} text-[#D4AF37]`} />;
      case "Bot":
        return <Bot className={`${className} text-[#D4AF37]`} />;
      case "ShieldCheck":
        return <ShieldCheck className={`${className} text-[#D4AF37]`} />;
      default:
        return <Layers className={`${className} text-[#D4AF37]`} />;
    }
  };

  // =========================================================================
  // VIEW 3: SUB-SERVICE DEEP DIVE PAGE
  // =========================================================================
  if (activeCategory && activeSubService) {
    const whatsappUrl = getServiceWhatsAppUrl(activeSubService.title, activeCategory.title);

    return (
      <div className="min-h-screen bg-[#FAF9F5] text-[#111111] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center flex-wrap gap-2 text-xs text-[#666666] border-b border-[#E8E1D0] pb-4">
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-[#999999]" />
            <button
              onClick={() => {
                setActiveCategorySlug(null);
                setActiveSubServiceId(null);
              }}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Services
            </button>
            <ChevronRight className="w-3 h-3 text-[#999999]" />
            <button
              onClick={() => setActiveSubServiceId(null)}
              className="hover:text-[#996515] transition-colors cursor-pointer"
            >
              {activeCategory.title}
            </button>
            <ChevronRight className="w-3 h-3 text-[#999999]" />
            <span className="text-[#996515] font-semibold">{activeSubService.title}</span>
          </nav>

          {/* Sub-Service Hero Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-[#E8E1D0] rounded-2xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#D4AF37]/40 text-xs font-semibold text-[#996515]">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{activeCategory.title} • Specialized Solution</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
                {activeSubService.title}
              </h1>

              <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
                {activeSubService.description || activeSubService.shortDesc}
              </p>

              {/* Scope & Delivery Info Box */}
              <div className="p-4 bg-[#FAF9F5] border border-[#E8E1D0] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#777777] block font-semibold">
                    Commercial Scope
                  </span>
                  <div className="text-base font-bold text-[#111111] mt-0.5">
                    Custom Strategy & High-Precision Execution
                  </div>
                  <span className="text-[11px] text-[#777777] block mt-0.5">
                    Tailored deliverables aligned with your business goals and KPIs.
                  </span>
                </div>

                {activeSubService.timeline && (
                  <div className="sm:border-l sm:border-[#E8E1D0] sm:pl-6">
                    <span className="text-xs uppercase tracking-wider text-[#777777] block font-semibold">
                      Estimated Delivery
                    </span>
                    <div className="text-sm font-semibold text-[#111111] mt-0.5 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#D4AF37]" />
                      <span>{activeSubService.timeline}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenConsultation(activeSubService.title)}
                  className="px-8 py-4 bg-[#111111] hover:bg-[#D4AF37] hover:text-black text-white font-bold text-sm uppercase tracking-wider rounded-xl border border-[#D4AF37] hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-white hover:bg-[#FAF9F5] text-[#111111] font-semibold text-sm rounded-xl border border-[#E8E1D0] hover:border-[#D4AF37] transition-all flex items-center gap-2.5 shadow-2xs"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#E8E1D0] shadow-md aspect-[4/3] bg-[#FAF9F5] group">
                <OptimizedImage
                  priority
                  key={activeSubService.id}
                  src={activeSubService.imageUrl || activeCategory.imageUrl}
                  alt={activeSubService.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-[#E8E1D0] shadow-sm z-10">
                  <span className="text-[11px] uppercase tracking-wider text-[#996515] font-semibold block">
                    Discipline Architecture
                  </span>
                  <span className="text-xs text-[#111111] font-bold">{activeCategory.badge}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: What We Provide (Core Deliverables) */}
          <div className="space-y-8">
            <div className="border-b border-[#E8E1D0] pb-4">
              <span className="text-xs uppercase tracking-widest text-[#996515] font-semibold block mb-1">
                Full Scope Breakdown
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                What We Deliver for {activeSubService.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeSubService.deliverables?.map((deliv, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-[#E8E1D0] hover:border-[#D4AF37] rounded-xl transition-all space-y-3 group shadow-xs hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#D4AF37]/30 flex items-center justify-center text-[#996515] font-bold text-sm group-hover:scale-110 transition-transform">
                    {(idx + 1).toString().padStart(2, "0")}
                  </div>
                  <h3 className="text-base font-semibold text-[#111111]">{deliv}</h3>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Engineered according to modern commercial standards with rigorous quality
                    validation.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: 5-Step Process */}
          <div className="bg-white border border-[#E8E1D0] rounded-2xl p-8 sm:p-12 space-y-10 shadow-xs">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#996515] font-semibold block mb-1">
                Proven Execution Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                Our 5-Step Implementation Process
              </h2>
              <p className="text-sm text-[#666666] mt-2">
                A structured, disciplined methodology engineered to eliminate waste and guarantee
                quality results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery & Audit",
                  desc: "Understanding your business model, target market, and technical benchmarks.",
                },
                {
                  step: "02",
                  title: "Commercial Strategy",
                  desc: "Crafting the blueprint, user journey, and deliverable specifications.",
                },
                {
                  step: "03",
                  title: "Execution Sprint",
                  desc: "High-precision engineering, design drafting, and asset production.",
                },
                {
                  step: "04",
                  title: "QA & Optimization",
                  desc: "Rigorous speed, usability, security, and conversion rate testing.",
                },
                {
                  step: "05",
                  title: "Launch & Reporting",
                  desc: "Seamless deployment, client handover, and ongoing ROI tracking.",
                },
              ].map((proc, pIdx) => (
                <div
                  key={pIdx}
                  className="space-y-3 relative p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0]"
                >
                  <div className="text-2xl font-extrabold font-mono text-[#996515]">
                    {proc.step}
                  </div>
                  <h4 className="text-base font-bold text-[#111111]">{proc.title}</h4>
                  <p className="text-xs text-[#666666] leading-relaxed">{proc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Who Is It For & Tools Used */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Who Is It For */}
            <div className="p-8 bg-white border border-[#E8E1D0] rounded-2xl space-y-4 shadow-xs">
              <div className="flex items-center gap-3 text-[#996515]">
                <Target className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-lg font-bold text-[#111111]">Who Is This Solution For?</h3>
              </div>
              <p className="text-sm text-[#444444] leading-relaxed">
                {activeSubService.idealFor ||
                  "Designed for established businesses, high-growth startups, and corporate brands requiring premium digital execution."}
              </p>
              {activeSubService.roiImpact && (
                <div className="mt-4 p-4 bg-[#FAF9F5] rounded-xl border border-[#E8E1D0]">
                  <span className="text-xs uppercase tracking-wider text-[#996515] font-semibold block mb-1">
                    Expected Commercial Impact
                  </span>
                  <p className="text-xs text-[#444444]">{activeSubService.roiImpact}</p>
                </div>
              )}
            </div>

            {/* Tools Used */}
            <div className="p-8 bg-white border border-[#E8E1D0] rounded-2xl space-y-4 shadow-xs">
              <div className="flex items-center gap-3 text-[#996515]">
                <Wrench className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-lg font-bold text-[#111111]">Tools & Technologies Used</h3>
              </div>
              <p className="text-xs text-[#666666]">
                We use industry-standard enterprise software and modern frameworks to guarantee
                security and performance:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {activeSubService.toolsUsed?.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1.5 bg-[#FAF9F5] border border-[#E8E1D0] rounded-lg text-xs font-semibold text-[#222222]"
                  >
                    {tool}
                  </span>
                )) || (
                  <span className="text-xs text-[#666666]">Industry-Standard Enterprise Stack</span>
                )}
              </div>
            </div>
          </div>

          {/* Is Your Business Ready Section - Tailored to Sub-Service */}
          <div className="rounded-3xl overflow-hidden shadow-sm border border-[#E2E6F0]">
            <IsBusinessReadySection
              serviceTitle={activeSubService.title}
              categoryTitle={activeCategory.title}
              onOpenConsultation={onOpenConsultation}
              onNavigate={onNavigate}
            />
          </div>

          {/* Bottom Back / Explore other Subservices */}
          <div className="flex items-center justify-between border-t border-[#E8E1D0] pt-6">
            <button
              onClick={() => setActiveSubServiceId(null)}
              className="flex items-center gap-2 text-sm text-[#666666] hover:text-[#111111] transition-colors cursor-pointer font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to {activeCategory.title}</span>
            </button>

            <button
              onClick={() => onOpenConsultation(activeSubService.title)}
              className="text-sm font-semibold text-[#996515] hover:underline cursor-pointer"
            >
              Get Free Custom Proposal →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: DEDICATED SERVICE CATEGORY DETAIL PAGE
  // =========================================================================
  if (activeCategory) {
    if (activeCategory.id === "areas-we-serve") {
      return (
        <AreasWeServePage
          onNavigate={(page) => {
            if (page === "services") {
              setActiveCategorySlug(null);
              setActiveSubServiceId(null);
            } else {
              onNavigate(page);
            }
          }}
          onOpenConsultation={onOpenConsultation}
        />
      );
    }

    const catFaqs = getCategoryFaqs(activeCategory);
    const catWhatsApp = getServiceWhatsAppUrl(activeCategory.title);

    return (
      <div className="min-h-screen bg-[#FAF9F5] text-[#111111] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Breadcrumbs */}
          <nav className="flex items-center flex-wrap gap-2 text-xs text-[#666666] border-b border-[#E8E1D0] pb-4">
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-[#999999]" />
            <button
              onClick={() => {
                setActiveCategorySlug(null);
                setActiveSubServiceId(null);
              }}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Services
            </button>
            <ChevronRight className="w-3 h-3 text-[#999999]" />
            <span className="text-[#996515] font-semibold">{activeCategory.title}</span>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-[#E8E1D0] rounded-2xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#996515] px-2.5 py-1 bg-[#FAF9F5] rounded border border-[#D4AF37]/30">
                  {activeCategory.number}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#996515] font-semibold">
                  {activeCategory.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
                {activeCategory.title}
              </h1>

              <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
                {activeCategory.fullDescription || activeCategory.shortDescription}
              </p>

              {/* Consultation & Commercial Scope Panel */}
              <div className="p-4 bg-[#FAF9F5] border border-[#E8E1D0] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#777777] block font-semibold">
                    Commercial Strategy & Scope
                  </span>
                  <div className="text-base font-bold text-[#111111] mt-0.5">
                    Bespoke Turnkey Deliverables
                  </div>
                  <span className="text-[11px] text-[#777777] block mt-0.5">
                    Custom proposal engineered for your business scale and target ROI.
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => onOpenConsultation(activeCategory.title)}
                    className="px-6 py-3 bg-[#111111] hover:bg-[#D4AF37] hover:text-black text-white border border-[#D4AF37] font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-xs"
                  >
                    Get Free Consultation
                  </button>
                  <a
                    href={catWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 bg-white hover:bg-[#FAF9F5] text-[#111111] font-semibold text-xs rounded-lg border border-[#E8E1D0] hover:border-[#D4AF37] transition-all flex items-center gap-2 shadow-2xs"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Category Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#E8E1D0] shadow-md aspect-[4/3] bg-[#FAF9F5] group">
                <OptimizedImage
                  priority
                  key={activeCategory.id}
                  src={activeCategory.imageUrl}
                  alt={activeCategory.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-[#E8E1D0] shadow-sm z-10">
                  <span className="text-xs text-[#111111] font-semibold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {activeCategory.services?.length || 0} Specialized Sub-Services Included
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Services Catalogue Section */}
          <div className="space-y-8">
            <div className="border-b border-[#E8E1D0] pb-4">
              <span className="text-xs uppercase tracking-widest text-[#996515] font-semibold block mb-1">
                Specialized Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                Our Specialized {activeCategory.title} Solutions
              </h2>
              <p className="text-sm text-[#666666] mt-1">
                Click any sub-service to inspect detailed deliverables, execution timeline, and
                commercial scope.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCategory.services?.map((sub, sIdx) => (
                <div
                  key={sub.id}
                  className="p-6 bg-white border border-[#E8E1D0] hover:border-[#D4AF37] rounded-xl transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-lg shadow-xs group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#996515] px-2 py-0.5 bg-[#FAF9F5] rounded border border-[#D4AF37]/30">
                        {(sIdx + 1).toString().padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#996515] transition-colors">
                      {sub.title}
                    </h3>

                    <p className="text-xs text-[#555555] leading-relaxed line-clamp-3">
                      {sub.shortDesc}
                    </p>

                    {/* Deliverables Checklist */}
                    {sub.deliverables && (
                      <div className="pt-2 border-t border-[#E8E1D0]/60 space-y-1.5">
                        {sub.deliverables.slice(0, 3).map((d, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-[#444444]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{d}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#E8E1D0] flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveSubServiceId(sub.id)}
                      className="text-xs font-semibold text-[#111111] hover:text-[#996515] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </button>

                    <button
                      onClick={() => onOpenConsultation(sub.title)}
                      className="px-3 py-1.5 bg-[#FAF9F5] hover:bg-[#111111] hover:text-white border border-[#E8E1D0] text-[#111111] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Is Your Business Ready Section - Tailored to Service Category */}
          <div className="rounded-3xl overflow-hidden shadow-sm border border-[#E2E6F0]">
            <IsBusinessReadySection
              serviceTitle={activeCategory.title}
              categoryTitle={activeCategory.title}
              onOpenConsultation={onOpenConsultation}
              onNavigate={onNavigate}
            />
          </div>

          {/* Category FAQs */}
          <div className="space-y-6">
            <div className="border-b border-[#E8E1D0] pb-4">
              <span className="text-xs uppercase tracking-widest text-[#996515] font-semibold block mb-1">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
                Everything You Need to Know about {activeCategory.title}
              </h2>
            </div>

            <div className="space-y-3">
              {catFaqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="bg-white border border-[#E8E1D0] rounded-xl overflow-hidden shadow-2xs transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#111111] hover:text-[#996515] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#E8E1D0] pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between border-t border-[#E8E1D0] pt-6">
            <button
              onClick={() => {
                setActiveCategorySlug(null);
                setActiveSubServiceId(null);
              }}
              className="flex items-center gap-2 text-sm text-[#666666] hover:text-[#111111] transition-colors cursor-pointer font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All 11 Services</span>
            </button>

            <button
              onClick={() => onOpenConsultation(activeCategory.title)}
              className="text-sm font-semibold text-[#996515] hover:underline cursor-pointer"
            >
              Book Strategic Consultation →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 1: SERVICES MAIN PAGE (ALTERNATING EDITORIAL SECTIONS)
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#111111] pt-24 pb-20">
      {/* 1. Services Hero Header with Zoom-In Zoom-Out Background Visual */}
      <div className="relative py-16 sm:py-20 mb-8 overflow-hidden border-b border-[#E8E1D0] bg-white">
        {/* Background Image with Ken Burns / Zoom Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <img
            loading="lazy"
            decoding="async"
            src={servicesHeroBg}
            alt="Digibasera 11 Digital Services & Tech Disciplines"
            className="w-full h-full object-cover object-center animate-hero-zoom opacity-25 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          {/* Luminous Light Luxury Gradients for Pristine Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-[#FAF9F5]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-80" />
        </div>

        {/* Ambient Gold Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[350px] bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D4AF37]/50 text-xs font-semibold uppercase tracking-widest text-[#996515] shadow-xs backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{mainServices.length} Specialized Digital Growth Disciplines</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] font-heading tracking-tight leading-tight max-w-4xl mx-auto">
            Engineered for Commercial Growth &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#B89018] italic font-serif">
              Unmistakable Authority
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-3xl mx-auto">
            We don’t offer generic marketing packages. We engineer bespoke commercial systems across
            12 disciplines, from Page 1 Search Dominance and Performance Ads to Custom Web
            Engineering and Luxury Media.
          </p>

          {/* Quick Search Bar */}
          <div className="pt-2">
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all 12 disciplines..."
                className="w-full pl-10 pr-4 py-2.5 bg-white/95 backdrop-blur-xs border border-[#E8E1D0] rounded-full text-sm text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#D4AF37] transition-all shadow-xs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* =========================================================================
            ALTERNATING LARGE EDITORIAL SERVICE SECTIONS (01..11)
            Section 01: Text Left, Image Right
            Section 02: Image Left, Text Right
            Section 03: Text Left, Image Right...
           ========================================================================= */}
        <div className="space-y-16 pt-6">
          {filteredMainServices.map((cat, index) => {
            const isEven = index % 2 === 1; // Alternating layout
            const catWhatsApp = getServiceWhatsAppUrl(cat.title);
            const isAreasCategory = cat.id === "areas-we-serve";
            const openCategory = () => {
              if (isAreasCategory) {
                onNavigate("areas-we-serve");
              } else {
                setActiveCategorySlug(cat.id);
              }
            };

            return (
              <section
                key={cat.id}
                id={`service-${cat.id}`}
                className="bg-white border border-[#E8E1D0] hover:border-[#D4AF37] rounded-2xl p-8 sm:p-12 transition-all duration-500 shadow-sm hover:shadow-xl relative overflow-hidden group"
              >
                {/* Subtle Gold Ambient Glow */}
                <div
                  className={`absolute top-0 ${
                    isEven ? "left-0" : "right-0"
                  } w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#D4AF37]/10 transition-colors`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* TEXT CONTENT COLUMN */}
                  <div
                    className={`space-y-6 ${
                      isEven ? "lg:col-span-7 lg:order-2" : "lg:col-span-7 lg:order-1"
                    }`}
                  >
                    {/* Number + Badge */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-extrabold text-[#996515] px-3 py-1 bg-[#FAF9F5] rounded-md border border-[#D4AF37]/30">
                        {cat.number || (index + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-[#996515] font-semibold">
                        {cat.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight group-hover:text-[#996515] transition-colors">
                      {cat.title}
                    </h2>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                      {cat.shortDescription}
                    </p>

                    {/* 3-5 Key Benefits Checklist */}
                    {cat.benefits && cat.benefits.length > 0 && (
                      <div className="space-y-2.5 pt-2 border-t border-[#E8E1D0]/60">
                        {cat.benefits.slice(0, 4).map((benefit, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Sub-Services Tags / Cards */}
                    {((cat.services && cat.services.length > 0) ||
                      (cat.keyServicesList && cat.keyServicesList.length > 0)) && (
                      <div className="space-y-2.5 pt-2 border-t border-[#E8E1D0]/60">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#777777] block">
                          Included Sub-Services & Capabilities:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {cat.services && cat.services.length > 0
                            ? cat.services.map((sub) => (
                                <div
                                  key={sub.id}
                                  id={`service-${sub.id}`}
                                  onClick={() => {
                                    if (isAreasCategory) {
                                      onNavigate("areas-we-serve");
                                    } else {
                                      setActiveCategorySlug(cat.id);
                                      setActiveSubServiceId(sub.id);
                                    }
                                  }}
                                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAF9F5] hover:bg-white border border-[#E8E1D0] hover:border-[#D4AF37] rounded-lg text-xs text-[#222222] font-semibold transition-all duration-300 shadow-2xs cursor-pointer group/sub"
                                  title={`View ${sub.title} details`}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover/sub:scale-125 transition-transform shrink-0" />
                                  <span>{sub.title}</span>
                                </div>
                              ))
                            : cat.keyServicesList.map((ks, kIdx) => (
                                <span
                                  key={kIdx}
                                  id={`service-${ks.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF9F5] border border-[#E8E1D0] rounded-md text-xs text-[#444444] font-medium"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                                  {ks}
                                </span>
                              ))}
                        </div>
                      </div>
                    )}

                    {/* CTA Action Row (Without Starting Price) */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E8E1D0]">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#777777] block font-semibold">
                          Bespoke Architecture
                        </span>
                        <span className="text-sm font-bold text-[#111111]">
                          Custom Strategy & Turnkey Deliverables
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href={catWhatsApp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-[#FAF9F5] hover:bg-white text-[#111111] rounded-xl border border-[#E8E1D0] hover:border-[#D4AF37] transition-colors shadow-2xs"
                          title="Instant WhatsApp Inquiry"
                        >
                          <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                        </a>

                        <button
                          onClick={openCategory}
                          className="px-6 py-3.5 bg-[#111111] hover:bg-[#D4AF37] hover:text-black text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-[#D4AF37] shadow-sm hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                        >
                          <span>{isAreasCategory ? "View" : "Explore Details & Sub-Services"}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* IMAGE VISUAL COLUMN */}
                  <div
                    className={`relative ${
                      isEven ? "lg:col-span-5 lg:order-1" : "lg:col-span-5 lg:order-2"
                    }`}
                  >
                    <div
                      onClick={openCategory}
                      className="relative rounded-2xl overflow-hidden border-2 border-[#E8E1D0] group-hover:border-[#D4AF37]/60 shadow-md aspect-[4/3] bg-[#FAF9F5] cursor-pointer transition-all duration-500"
                    >
                      <OptimizedImage
                        src={cat.imageUrl}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

                      {/* Floating Decorative Gold Tag */}
                      <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-[#E8E1D0] flex items-center justify-between shadow-md z-10">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#996515] font-semibold block">
                            Specialized Category
                          </span>
                          <span className="text-xs text-[#111111] font-bold">{cat.badge}</span>
                        </div>
                        <span className="text-xs font-semibold text-[#996515] flex items-center gap-1">
                          <span>{isAreasCategory ? "View" : "View More"}</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Is Your Business Ready to Grow Section (Matebiz Reference Style) */}
        <div className="rounded-3xl overflow-hidden shadow-sm border border-[#E2E6F0]">
          <IsBusinessReadySection onOpenConsultation={onOpenConsultation} onNavigate={onNavigate} />
        </div>

        {/* Global Bottom CTA Banner */}
        <div className="p-10 sm:p-14 bg-gradient-to-br from-[#111111] via-[#1A1A1A] to-[#111111] border border-[#D4AF37]/40 rounded-3xl text-center space-y-6 relative overflow-hidden shadow-2xl text-white">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
              Ready To Scale Your Digital Growth?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Schedule Your Free 30-Minute Commercial Consultation
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Speak directly with our senior digital growth strategists. We audit your existing
              marketing, identify revenue bottlenecks, and construct a bespoke implementation
              blueprint.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation("Complete Digital Growth Strategy")}
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-bold text-sm uppercase tracking-wider rounded-xl hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Strategy Call</span>
            </button>

            <button
              onClick={() => onNavigate("pricing")}
              className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              View Transparent Pricing Matrix →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
