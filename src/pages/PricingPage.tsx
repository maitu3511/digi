import pricingHeroBg from "../assets/heroes/pricing-hero.jpg";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Search,
  Filter,
  Check,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  HelpCircle,
  Layers,
  Settings,
  DollarSign,
  TrendingUp,
  Code2,
  ShoppingCart,
  Palette,
  Zap,
  Heart,
  SlidersHorizontal,
  Calendar,
  Film,
  Camera,
  Star,
  FileText,
  AlertCircle,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import {
  PricingBillingType,
  PricingCategoryMeta,
  PricingPackageCatalogueItem,
  PricingServiceCatalogueItem,
  PageType,
} from "../types";
import {
  loadStoredPricingServices,
  loadStoredPricingPackages,
  loadStoredPricingCategories,
  BRAND_IDENTITY_ADDON,
  VIDEO_PRODUCTION_RATES,
  WEDDING_CREATIVE_PACKAGES,
} from "../data/pricingCatalogueData";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface PricingPageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onOpenConsultation }) => {
  // Live State from Storage/Admin
  const [services, setServices] = useState<PricingServiceCatalogueItem[]>([]);
  const [packages, setPackages] = useState<PricingPackageCatalogueItem[]>([]);
  const [categories, setCategories] = useState<PricingCategoryMeta[]>([]);

  // Filter & Search State
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBillingType, setSelectedBillingType] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");

  // Interactive Card Accordions (Expanded IDs)
  const [expandedServiceIds, setExpandedServiceIds] = useState<Record<string, boolean>>({});

  // Shortlist / Comparison State (Up to 3 items)
  const [compareList, setCompareList] = useState<PricingServiceCatalogueItem[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState<boolean>(false);

  // Load live data from storage
  const refreshData = () => {
    const loadedServices = loadStoredPricingServices();
    const loadedPackages = loadStoredPricingPackages();
    const loadedCategories = loadStoredPricingCategories();
    setServices(loadedServices);
    setPackages(loadedPackages);
    setCategories(loadedCategories);
  };

  useEffect(() => {
    refreshData();
  }, []);

  // Category Icon Resolver
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return <Search className="w-4 h-4 text-[#D4AF37]" />;
      case "DollarSign":
        return <DollarSign className="w-4 h-4 text-[#D4AF37]" />;
      case "TrendingUp":
        return <TrendingUp className="w-4 h-4 text-[#D4AF37]" />;
      case "Code2":
        return <Code2 className="w-4 h-4 text-[#D4AF37]" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-4 h-4 text-[#D4AF37]" />;
      case "Palette":
        return <Palette className="w-4 h-4 text-[#D4AF37]" />;
      case "Zap":
        return <Zap className="w-4 h-4 text-[#D4AF37]" />;
      case "Heart":
        return <Heart className="w-4 h-4 text-[#D4AF37]" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-[#D4AF37]" />;
      default:
        return <Layers className="w-4 h-4 text-[#D4AF37]" />;
    }
  };

  // Toggle Accordion Details for a service
  const toggleServiceDetails = (serviceId: string) => {
    setExpandedServiceIds((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  // Toggle Compare Selection
  const handleToggleCompare = (service: PricingServiceCatalogueItem) => {
    setCompareList((prev) => {
      const exists = prev.some((item) => item.id === service.id);
      if (exists) {
        return prev.filter((item) => item.id !== service.id);
      }
      if (prev.length >= 3) {
        alert("You can compare up to 3 services at a time.");
        return prev;
      }
      return [...prev, service];
    });
  };

  const handleRemoveCompare = (id: string) => {
    setCompareList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCompare = () => {
    setCompareList([]);
  };

  // Smooth scroll to category section
  const handleCategoryNavClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === "all") {
      window.scrollTo({ top: 400, behavior: "smooth" });
      return;
    }
    const elem = document.getElementById(`pricing-cat-${categoryId}`);
    if (elem) {
      const yOffset = -140;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Filter Services Logic
  const filteredServices = useMemo(() => {
    return services.filter((srv) => {
      // Hidden status check
      if (srv.status === "hidden") return false;

      // Category filter
      if (
        selectedCategory !== "all" &&
        selectedCategory !== "packages" &&
        srv.categoryId !== selectedCategory
      ) {
        return false;
      }

      // Billing Type filter
      if (selectedBillingType !== "all" && srv.billingType !== selectedBillingType) {
        return false;
      }

      // Price Range filter
      if (selectedPriceRange !== "all") {
        const price = srv.priceNumeric;
        if (selectedPriceRange === "under-5k" && price >= 5000) return false;
        if (selectedPriceRange === "5k-15k" && (price < 5000 || price > 15000)) return false;
        if (selectedPriceRange === "15k-30k" && (price < 15000 || price > 30000)) return false;
        if (selectedPriceRange === "above-30k" && price <= 30000) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = srv.name.toLowerCase().includes(q);
        const matchesDesc = srv.shortDesc.toLowerCase().includes(q);
        const matchesInclusions = srv.inclusions.some((inc) => inc.toLowerCase().includes(q));
        const matchesCat =
          srv.categoryName?.toLowerCase().includes(q) || srv.categoryId.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesInclusions && !matchesCat) {
          return false;
        }
      }

      return true;
    });
  }, [services, selectedCategory, selectedBillingType, selectedPriceRange, searchQuery]);

  // Group filtered services by category
  const servicesByCategory = useMemo(() => {
    const map: Record<string, PricingServiceCatalogueItem[]> = {};
    filteredServices.forEach((srv) => {
      if (!map[srv.categoryId]) {
        map[srv.categoryId] = [];
      }
      map[srv.categoryId].push(srv);
    });
    return map;
  }, [filteredServices]);

  // Reset all search/filter controls
  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedBillingType("all");
    setSelectedPriceRange("all");
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedBillingType !== "all" ||
    selectedPriceRange !== "all" ||
    searchQuery.trim() !== "";

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-[#FFFFFF] text-[#111111] min-h-screen selection:bg-[#D4AF37] selection:text-[#111111] animate-in fade-in duration-300">
      {/* ========================================================================= */}
      {/* PRICING PAGE HERO SECTION WITH DIGITAL GROWTH BACKGROUND IMAGERY */}
      {/* ========================================================================= */}
      <section className="relative pt-10 pb-16 sm:pb-24 overflow-hidden text-center border-b border-[#E8E1D0]/60">
        {/* High-Resolution Digital Growth & Analytics Dashboard Background Imagery */}
        <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
          <img
            loading="lazy"
            decoding="async"
            src={pricingHeroBg}
            alt="Digital Growth Solutions & Performance Marketing Analytics"
            className="w-full h-full object-cover object-center animate-hero-zoom opacity-30 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layered luxury luminous overlay for perfect text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-[#FAF9F5]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-90" />
        </div>

        {/* Ambient Warm Gold Glows & Radial Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[400px] bg-[#D4AF37]/15 rounded-full blur-[110px] pointer-events-none -z-10" />
        <div className="absolute top-6 left-10 w-72 h-72 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-6 right-10 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Subtle geometric gold dot matrix */}
        <div
          className="absolute inset-0 -z-10 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201, 162, 39, 0.35) 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Small Gold Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#E8E1D0] shadow-xs backdrop-blur-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[#9A7B16] font-bold uppercase tracking-widest text-[11px] font-heading">
              PRICING & SERVICES CATALOGUE
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-heading leading-tight text-[#111111] max-w-4xl mx-auto"
          >
            Flexible Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#B89018] font-serif italic">
              Growth Solutions
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#555555] max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Explore our starting prices for digital marketing, SEO, web development, e-commerce,
            creative, Amazon and specialized services.
          </motion.p>

          {/* Floating Trust Indicators & Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mx-auto pt-1"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#E8E1D0] text-xs text-[#333333] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-semibold">Transparent Quotations</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#E8E1D0] text-xs text-[#333333] shadow-xs">
              <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-semibold">Performance-Driven ROI</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#E8E1D0] text-xs text-[#333333] shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-semibold">Tailored Retainers & Fixed Milestones</span>
            </div>
          </motion.div>

          {/* Transparent Note */}
          <div className="max-w-2xl mx-auto">
            <p className="text-xs sm:text-[13px] text-[#777777] bg-white/80 backdrop-blur-xs border border-[#E8E1D0] py-2 px-4 rounded-lg inline-block shadow-2xs">
              * All prices are starting from prices. Final quotation depends on project scope and
              requirements.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenConsultation("Pricing Strategy & Custom Plan")}
              className="px-6 py-3.5 rounded-lg bg-[#111111] hover:bg-[#222222] text-white border border-[#D4AF37] font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-[0_6px_20px_rgba(212,175,55,0.25)] transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>GET FREE CONSULTATION</span>
            </button>

            <a
              href={getWhatsAppUrl(
                "Hello Digibasera, I am exploring your Pricing Catalogue and would like to discuss customized solutions for my business.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WHATSAPP US</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* STICKY CATEGORY NAVIGATION & MULTI-FILTER BAR */}
      {/* ========================================================================= */}
      <div className="sticky top-[60px] z-30 bg-white/95 backdrop-blur-md border-y border-[#E8E1D0] shadow-xs py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {/* Horizontally scrollable Categories Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count =
                cat.id === "all"
                  ? services.length
                  : cat.id === "packages"
                    ? packages.length
                    : services.filter((s) => s.categoryId === cat.id && s.status === "active")
                        .length;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryNavClick(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? "bg-[#111111] text-white border border-[#D4AF37] shadow-xs font-bold"
                      : "bg-[#FAF9F5] text-[#555555] hover:text-[#111111] hover:bg-[#F2F0E8] border border-[#E8E1D0]"
                  }`}
                >
                  <span>{cat.title}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? "bg-[#D4AF37] text-[#111111] font-bold"
                        : "bg-white text-[#777777] border border-[#E8E1D0]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search & Advanced Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-1 text-xs">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services, SEO, Shopify, reels..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] focus:bg-white outline-none transition-all placeholder:text-[#888888]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#888888] hover:text-[#111111]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
              {/* Billing Type Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#888888] hidden sm:inline">
                  Billing:
                </span>
                <select
                  value={selectedBillingType}
                  onChange={(e) => setSelectedBillingType(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium text-[#111111] outline-none cursor-pointer focus:border-[#D4AF37]"
                >
                  <option value="all">All Billing Types</option>
                  <option value="/month">Monthly (/month)</option>
                  <option value="/project">Project (/project)</option>
                  <option value="/article">Per Article (/article)</option>
                  <option value="/design">Per Design (/design)</option>
                  <option value="/video">Per Video (/video)</option>
                  <option value="/session">Per Session (/session)</option>
                  <option value="/product">Per Product (/product)</option>
                  <option value="/campaign">Campaign (/campaign)</option>
                  <option value="/reel">Per Reel (/reel)</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#888888] hidden sm:inline">
                  Price:
                </span>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium text-[#111111] outline-none cursor-pointer focus:border-[#D4AF37]"
                >
                  <option value="all">All Price Ranges</option>
                  <option value="under-5k">Under ₹5,000</option>
                  <option value="5k-15k">₹5,000 – ₹15,000</option>
                  <option value="15k-30k">₹15,000 – ₹30,000</option>
                  <option value="above-30k">₹30,000+</option>
                </select>
              </div>

              {/* Reset Filters */}
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="px-2.5 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 text-xs font-bold transition-colors"
                >
                  Reset All
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN CATALOGUE CONTENT */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        {/* If user filtered packages specifically */}
        {(selectedCategory === "all" || selectedCategory === "packages") && (
          <div id="pricing-cat-packages">
            <DigitalGrowthPackagesSection
              packages={packages}
              onOpenConsultation={onOpenConsultation}
            />
          </div>
        )}

        {/* Dynamic Category Sections for Services */}
        {categories
          .filter((cat) => cat.id !== "all" && cat.id !== "packages")
          .map((cat) => {
            const catServices = servicesByCategory[cat.id] || [];

            // If filtered category does not match, skip
            if (selectedCategory !== "all" && selectedCategory !== cat.id) {
              return null;
            }

            // If searching/filtering and no services in this cat, skip
            if (catServices.length === 0 && searchQuery) {
              return null;
            }

            return (
              <section
                key={cat.id}
                id={`pricing-cat-${cat.id}`}
                className="space-y-6 pt-4 scroll-mt-36"
              >
                {/* Section Category Header with expanding gold line */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E8E1D0]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[#9A7B16] font-heading">
                        {cat.badge}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0] flex items-center justify-center shadow-xs">
                        {getCategoryIcon(cat.iconName)}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading">
                        {cat.title}
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-[#666666] mt-1.5 max-w-2xl">
                      {cat.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenConsultation(`${cat.title} Growth Blueprint`)}
                    className="self-start sm:self-auto px-4 py-2 rounded-lg bg-[#FAF9F5] hover:bg-[#111111] text-[#111111] hover:text-white border border-[#E8E1D0] hover:border-[#D4AF37] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                  >
                    <span>Request {cat.title} Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                </div>

                {/* Service Cards Grid */}
                {catServices.length === 0 ? (
                  <div className="text-center py-10 bg-[#FAF9F5] rounded-xl border border-[#E8E1D0] p-6">
                    <p className="text-xs text-[#666666]">
                      No services match the active filters in this category.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {catServices.map((srv) => {
                      const isExpanded = !!expandedServiceIds[srv.id];
                      const isCompared = compareList.some((c) => c.id === srv.id);

                      return (
                        <PricingServiceCard
                          key={srv.id}
                          service={srv}
                          isExpanded={isExpanded}
                          isCompared={isCompared}
                          onToggleDetails={() => toggleServiceDetails(srv.id)}
                          onToggleCompare={() => handleToggleCompare(srv)}
                          onOpenConsultation={onOpenConsultation}
                        />
                      );
                    })}
                  </div>
                )}

                {/* SPECIAL EMBEDDED SUBSECTIONS */}
                {/* 1. Brand Identity Add-On & Video Production Rates (In Branding Section) */}
                {cat.id === "branding-creative" && (
                  <div className="space-y-8 pt-4">
                    {/* Brand Identity Highlighted Card */}
                    <BrandIdentityAddonCard onOpenConsultation={onOpenConsultation} />

                    {/* Video Production Rates Table */}
                    <VideoProductionRatesSubsection onOpenConsultation={onOpenConsultation} />
                  </div>
                )}

                {/* 2. Wedding Creative Packages (In Wedding Creative Section) */}
                {cat.id === "wedding-creative" && (
                  <div className="pt-4">
                    <WeddingCreativePackagesSubsection onOpenConsultation={onOpenConsultation} />
                  </div>
                )}
              </section>
            );
          })}

        {/* If no services matched overall query */}
        {filteredServices.length === 0 && selectedCategory !== "packages" && (
          <div className="text-center py-16 bg-[#FAF9F5] rounded-2xl border border-[#E8E1D0] p-8 space-y-4">
            <Layers className="w-12 h-12 text-[#D4AF37] mx-auto opacity-50" />
            <h3 className="text-xl font-bold text-[#111111] font-heading">
              No services found matching your criteria
            </h3>
            <p className="text-xs sm:text-sm text-[#666666] max-w-md mx-auto">
              Try clearing your search keyword or resetting the billing type and price filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-lg bg-[#111111] text-white font-bold text-xs uppercase tracking-wider"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PRICING DISCLAIMER & COMMERCIAL TERMS */}
        {/* ========================================================================= */}
        <section className="pt-8" id="pricing-terms">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#FAF9F5] border border-[#E8E1D0] space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E1D0] flex items-center justify-center text-[#D4AF37] shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16] font-heading">
                  Transparency & Compliance
                </span>
                <h3 className="text-2xl font-bold text-[#111111] font-heading">
                  Pricing & Commercial Terms
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] space-y-2">
                <span className="text-xs font-bold text-[#111111] font-heading block">
                  Starting Prices Notice
                </span>
                <p className="text-xs text-[#555555] leading-relaxed">
                  All prices are starting prices and may vary according to project scope, business
                  requirements, competition, number of platforms/pages/products, content volume and
                  technical complexity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] space-y-2">
                <span className="text-xs font-bold text-[#111111] font-heading block">
                  Ad Spend Exclusions
                </span>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Advertising budgets are NOT included in Meta, Google, PPC or Amazon management
                  fees and are billed separately directly through your respective advertising
                  accounts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] space-y-2">
                <span className="text-xs font-bold text-[#111111] font-heading block">
                  Third-Party Expenses
                </span>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Domain, hosting, premium themes/plugins, paid software, influencer fees, printing,
                  travel, production expenses and other third-party charges are separate where
                  applicable.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] space-y-2">
                <span className="text-xs font-bold text-[#111111] font-heading block">
                  Taxes & GST
                </span>
                <p className="text-xs text-[#555555] leading-relaxed">
                  GST Extra Applicable on all agency retainers and commercial project invoicing as
                  per government regulations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] space-y-2">
                <span className="text-xs font-bold text-[#111111] font-heading block">
                  Ethical Ranking & Ads Reality
                </span>
                <p className="text-xs text-[#555555] leading-relaxed">
                  SEO rankings and advertising results depend on competition, market conditions,
                  website quality, budget, offer and execution. No guaranteed #1 or Top-3 ranking
                  should be promised.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E8E1D0] space-y-2">
                <span className="text-xs font-bold text-[#111111] font-heading block">
                  Formal Written Quotations
                </span>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Final quotation and deliverables will be confirmed in writing with a comprehensive
                  Scope of Work (SOW) before project commencement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FINAL CTA SECTION */}
        {/* ========================================================================= */}
        <section className="pt-6 pb-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#111111] text-white border-2 border-[#D4AF37] shadow-2xl text-center space-y-5 relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] font-bold uppercase tracking-widest font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Roadmap</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight max-w-2xl mx-auto">
              Not Sure Which Service Is Right For You?
            </h2>

            <p className="text-sm sm:text-base text-[#E8E1D0] max-w-2xl mx-auto leading-relaxed">
              Tell us about your business and goals. We&apos;ll help you choose the right digital
              solution.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenConsultation("Free Scope Consultation")}
                className="px-8 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>GET FREE CONSULTATION</span>
              </button>

              <a
                href={getWhatsAppUrl(
                  "Hello Digibasera, I would like guidance on choosing the right digital marketing services for my business.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// ============================================================================
// Service Pricing Card Component (with hover effects, accordion & WhatsApp CTA)
// ============================================================================
interface PricingServiceCardProps {
  service: PricingServiceCatalogueItem;
  isExpanded: boolean;
  isCompared: boolean;
  onToggleDetails: () => void;
  onToggleCompare: () => void;
  onOpenConsultation: (serviceName?: string) => void;
}

const PricingServiceCard: React.FC<PricingServiceCardProps> = ({
  service,
  isExpanded,
  isCompared,
  onToggleDetails,
  onToggleCompare,
  onOpenConsultation,
}) => {
  const whatsappInquiryUrl = getWhatsAppUrl(
    service.whatsappMessage ||
      `Hello, I am interested in ${service.name}. Please share more details and a quotation.`,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className={`relative rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-xl ${
        isCompared
          ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/30"
          : service.featured
            ? "border-[#D4AF37]/60 hover:border-[#D4AF37]"
            : "border-[#E8E1D0] hover:border-[#D4AF37]"
      }`}
    >
      {/* Top Gold Accent Line on hover */}
      <div className="h-1 w-full bg-transparent group-hover:bg-[#D4AF37] transition-all rounded-t-2xl" />

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header & Badges */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16] font-heading">
              {service.categoryName || "Service"}
            </span>
            <div className="flex items-center gap-1.5">
              {service.badge && (
                <span className="text-[9px] font-bold uppercase tracking-wider bg-[#FAF9F5] text-[#111111] px-2 py-0.5 rounded border border-[#E8E1D0]">
                  {service.badge}
                </span>
              )}
            </div>
          </div>

          {/* Service Title */}
          <h3 className="text-xl font-bold text-[#111111] font-heading group-hover:text-[#9A7B16] transition-colors leading-snug">
            {service.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#555555] mt-2 leading-relaxed min-h-[36px]">
            {service.shortDesc}
          </p>

          {/* Price Block */}
          <div className="my-5 p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0] transition-colors group-hover:bg-[#FAF9F5]/60 group-hover:border-[#D4AF37]/50">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#888888] block font-heading">
              Starting From
            </span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading group-hover:scale-105 transition-transform origin-left">
                {service.startingPrice}
              </span>
              <span className="text-xs font-semibold text-[#666666]">{service.billingType}</span>
            </div>
          </div>

          {/* Inclusions Block */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#111111] block font-heading">
              Key Inclusions:
            </span>
            <ul className="space-y-1.5">
              {service.inclusions.slice(0, 4).map((inc, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#444444]">
                  <div className="w-4 h-4 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#9A7B16]" />
                  </div>
                  <span className="leading-tight">{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expandable Details Accordion */}
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-[#E8E1D0] space-y-3 animate-in fade-in duration-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A7B16] block font-heading">
                Complete Specifications:
              </span>
              <ul className="space-y-1.5 text-xs text-[#555555]">
                {(service.fullInclusions || service.inclusions).map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="leading-tight">{inc}</span>
                  </li>
                ))}
              </ul>
              {service.fullDesc && (
                <p className="text-[11px] text-[#777777] italic pt-1">{service.fullDesc}</p>
              )}
            </div>
          )}

          {/* View Details Toggle */}
          <button
            onClick={onToggleDetails}
            className="mt-3 text-xs font-bold text-[#9A7B16] hover:text-[#111111] flex items-center gap-1 transition-colors"
          >
            <span>{isExpanded ? "Hide Details" : "View Details →"}</span>
            {isExpanded ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            )}
          </button>
        </div>

        {/* CTA Actions */}
        <div className="pt-6 mt-6 border-t border-[#E8E1D0] flex items-center gap-2">
          {/* Primary WhatsApp CTA with prefilled message */}
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-3 rounded-lg bg-[#111111] group-hover:bg-[#9A7B16] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
            title={`Get quote for ${service.name}`}
          >
            <span>Get Quote</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-white group-hover:translate-x-1 transition-all" />
          </a>

          {/* Quick WhatsApp Icon */}
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-[#FAF9F5] text-[#25D366] hover:bg-[#25D366] hover:text-white border border-[#E8E1D0] transition-colors shrink-0"
            title="Chat instantly on WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ============================================================================
// Digital Growth Packages (Combo / Retainer Packages)
// ============================================================================
interface DigitalGrowthPackagesSectionProps {
  packages: PricingPackageCatalogueItem[];
  onOpenConsultation: (serviceName?: string) => void;
}

const DigitalGrowthPackagesSection: React.FC<DigitalGrowthPackagesSectionProps> = ({
  packages,
  onOpenConsultation,
}) => {
  return (
    <section className="space-y-8 pt-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-3xl mx-auto space-y-2"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest font-heading">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>All-In-One Retainers</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] font-heading">
          Digital Growth Packages
        </h2>
        <p className="text-xs sm:text-sm text-[#555555]">
          Integrated multi-channel squads managing your complete digital acquisition, content, and
          revenue operations.
        </p>
      </motion.div>

      {/* 3 Package Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
        {packages.map((pkg, idx) => {
          const isPopular = !!pkg.popular;

          return (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                isPopular
                  ? "bg-white border-2 border-[#D4AF37] shadow-[0_20px_50px_-10px_rgba(212,175,55,0.3)]"
                  : "bg-[#FAF9F5] border border-[#E8E1D0] hover:border-[#D4AF37] hover:bg-white shadow-xs"
              }`}
            >
              {isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#111111] text-[#D4AF37] text-[11px] font-bold uppercase tracking-widest border border-[#D4AF37] shadow-sm">
                  ★ Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16] block mb-1 font-heading">
                    {pkg.badge || "Retainer Package"}
                  </span>
                  <h3 className="text-2xl font-bold text-[#111111] font-heading">{pkg.name}</h3>
                  <p className="text-xs text-[#666666] mt-2 leading-relaxed min-h-[38px]">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Block */}
                <div className="py-4 border-y border-[#E8E1D0]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888] block font-heading">
                    Starting Investment
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-3xl sm:text-4xl font-bold text-[#111111] font-heading">
                      {pkg.startingPrice}
                    </span>
                    <span className="text-xs font-semibold text-[#777777]">
                      {pkg.billingPeriod}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#111111] block font-heading">
                    What&apos;s Included:
                  </span>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#333333]">
                        <div className="w-4 h-4 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#9A7B16]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {pkg.idealFor && (
                  <div className="p-3 rounded-xl bg-white border border-[#E8E1D0] text-[11px] text-[#555555]">
                    <strong className="text-[#111111]">Ideal For:</strong> {pkg.idealFor}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-8 space-y-2.5">
                <button
                  onClick={() => onOpenConsultation(pkg.name)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isPopular
                      ? "bg-[#111111] hover:bg-[#222222] text-white border border-[#D4AF37] shadow-[0_4px_16px_rgba(212,175,55,0.3)]"
                      : "bg-white hover:bg-[#FAF9F5] text-[#111111] border border-[#E8E1D0] hover:border-[#D4AF37]"
                  }`}
                >
                  <span>{pkg.buttonText || "Request Package Scope"}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>

                <a
                  href={getWhatsAppUrl(
                    `Hello Digibasera, I am interested in the ${pkg.name} (${pkg.startingPrice}${pkg.billingPeriod}). Please share the scope proposal and details.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Discuss via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

// ============================================================================
// Brand Identity Add-On (Special Highlighted Gold Card)
// ============================================================================
const BrandIdentityAddonCard: React.FC<{ onOpenConsultation: (s?: string) => void }> = ({
  onOpenConsultation,
}) => {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FAF9F5] to-white border-2 border-[#D4AF37] shadow-md space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16] font-heading">
            Specialized Brand Foundation
          </span>
          <h3 className="text-2xl font-bold text-[#111111] font-heading mt-0.5">
            {BRAND_IDENTITY_ADDON.title} — Starting From {BRAND_IDENTITY_ADDON.startingPrice}
          </h3>
          <p className="text-xs text-[#555555] mt-1">{BRAND_IDENTITY_ADDON.description}</p>
        </div>

        <a
          href={getWhatsAppUrl(BRAND_IDENTITY_ADDON.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-lg bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-xs border border-[#D4AF37]"
        >
          <span>Get Brand Identity Scope</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        {BRAND_IDENTITY_ADDON.inclusions.map((item, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl bg-white border border-[#E8E1D0] flex items-center gap-2 text-xs font-semibold text-[#111111]"
          >
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span className="truncate">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// Video Production Rates Subsection
// ============================================================================
const VideoProductionRatesSubsection: React.FC<{ onOpenConsultation: (s?: string) => void }> = ({
  onOpenConsultation,
}) => {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF9F5] border border-[#E8E1D0] space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16] font-heading">
            On-Demand Media Studio
          </span>
          <h3 className="text-2xl font-bold text-[#111111] font-heading">
            Video Production Rates — Starting From
          </h3>
          <p className="text-xs text-[#555555] mt-1">
            Turn raw footage or brand concepts into viral reels, corporate documentaries, and
            high-CTR video ads.
          </p>
        </div>

        <button
          onClick={() => onOpenConsultation("Video Production Suite")}
          className="px-4 py-2.5 rounded-lg bg-white border border-[#E8E1D0] hover:border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#111111] transition-colors shrink-0"
        >
          Request Video Scope
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {VIDEO_PRODUCTION_RATES.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm font-bold text-[#111111] font-heading group-hover:text-[#9A7B16] transition-colors">
                  {item.title}
                </h4>
                <div className="text-right">
                  <span className="text-base font-bold text-[#111111] font-mono">{item.price}</span>
                  <span className="text-[10px] text-[#777777] ml-0.5">{item.unit}</span>
                </div>
              </div>
              <p className="text-xs text-[#666666] mt-2">{item.desc}</p>
            </div>

            <div className="pt-3 mt-3 border-t border-[#E8E1D0] flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-[#9A7B16]">HD / 4K Master</span>
              <a
                href={getWhatsAppUrl(
                  `Hello, I am interested in ${item.title} (${item.price}${item.unit}). Please share sample reels and a quotation.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#111111] hover:text-[#D4AF37] flex items-center gap-1"
              >
                <span>Book Reel / Video</span>
                <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// Wedding Creative Packages Subsection
// ============================================================================
const WeddingCreativePackagesSubsection: React.FC<{ onOpenConsultation: (s?: string) => void }> = ({
  onOpenConsultation,
}) => {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#FAF9F5] to-white border-2 border-[#D4AF37]/60 space-y-6">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16] bg-white px-3 py-1 rounded-full border border-[#E8E1D0] font-heading">
          Cinematic & Luxury Wedding Packages
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading">
          Wedding Creative Packages
        </h3>
        <p className="text-xs text-[#666666]">
          Complete post-production film editing, cinematic color grading, teaser reels, and royal
          album spreads.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {WEDDING_CREATIVE_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all bg-white border ${
              pkg.popular
                ? "border-2 border-[#D4AF37] shadow-lg"
                : "border-[#E8E1D0] hover:border-[#D4AF37]"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16] font-heading">
                  {pkg.badge}
                </span>
                {pkg.popular && (
                  <span className="text-[9px] bg-[#111111] text-[#D4AF37] font-bold px-2 py-0.5 rounded">
                    Most Selected
                  </span>
                )}
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#111111] font-heading">{pkg.name}</h4>
                <p className="text-xs text-[#666666] mt-1">{pkg.tagline}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888] block font-heading">
                  Starting From
                </span>
                <span className="text-2xl font-bold text-[#111111] font-mono">
                  {pkg.startingPrice}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#111111] block font-heading">
                  Included Post-Production Scope:
                </span>
                <ul className="space-y-1.5 text-xs text-[#444444]">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#9A7B16] shrink-0 mt-0.5" />
                      <span className="leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {pkg.disclaimerNote && (
                <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-[10px] text-[#777777] italic">
                  * {pkg.disclaimerNote}
                </div>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-[#E8E1D0] space-y-2">
              <a
                href={getWhatsAppUrl(
                  `Hello Digibasera, I am inquiring about the ${pkg.name} (Starting From ${pkg.startingPrice}). Please share portfolio samples and quotation.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-[#111111] hover:bg-[#222222] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <span>{pkg.buttonText || "Book Wedding Package"}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
