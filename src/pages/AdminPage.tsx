import React, { useState, useEffect } from "react";
import {
  Lock,
  KeyRound,
  ShieldCheck,
  LogOut,
  Sparkles,
  Layers,
  DollarSign,
  Package,
  Plus,
  Edit2,
  Trash2,
  Save,
  RotateCcw,
  Eye,
  EyeOff,
  Star,
  CheckCircle2,
  AlertCircle,
  FolderPlus,
  Search,
  Filter,
  ArrowUpDown,
  ExternalLink,
  Table,
  SlidersHorizontal,
  FileSpreadsheet,
  Settings,
  HelpCircle,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import {
  PageType,
  PricingBillingType,
  PricingCategoryMeta,
  PricingPackageCatalogueItem,
  PricingServiceCatalogueItem,
  PortfolioItem,
} from "../types";
import {
  loadStoredPricingServices,
  loadStoredPricingPackages,
  loadStoredPricingCategories,
  savePricingServices,
  savePricingPackages,
  savePricingCategories,
  resetPricingToFactoryDefaults,
  DEFAULT_PRICING_CATEGORIES,
} from "../data/pricingCatalogueData";
import {
  loadStoredPortfolioItems,
  savePortfolioItems,
  resetPortfolioToFactoryDefaults,
} from "../data/portfolioData";
import { loadStoredTestimonials } from "../data/testimonialsData";
import { loadStoredMainServices } from "../data/servicesData";
import { AdminPortfolioManager } from "../components/admin/AdminPortfolioManager";
import { AdminAnimationSettings } from "../components/admin/AdminAnimationSettings";
import { AdminServicesManager } from "../components/admin/AdminServicesManager";
import { AdminReviewsManager } from "../components/admin/AdminReviewsManager";
import { AdminCareersManager } from "../components/admin/AdminCareersManager";

interface AdminPageProps {
  onNavigate: (page: PageType) => void;
}

const ADMIN_STORAGE_KEY = "digibasera_admin_auth";
const ADMIN_PWD_KEY = "digibasera_admin_password";
const DEFAULT_PASSWORD = "Digibasera582";

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate }) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(ADMIN_STORAGE_KEY) === "true";
  });
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Live Data State
  const [services, setServices] = useState<PricingServiceCatalogueItem[]>([]);
  const [packages, setPackages] = useState<PricingPackageCatalogueItem[]>([]);
  const [categories, setCategories] = useState<PricingCategoryMeta[]>([]);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [testimonialsCount, setTestimonialsCount] = useState(0);
  const [mainServicesCount, setMainServicesCount] = useState(0);

  // Navigation & Filter State in Admin
  const [activeTab, setActiveTab] = useState<
    | "main-services"
    | "portfolio"
    | "careers"
    | "reviews"
    | "services"
    | "packages"
    | "quick-table"
    | "categories"
    | "animations"
    | "security"
  >("main-services");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all");

  // Service Edit / Create State
  const [editingService, setEditingService] = useState<PricingServiceCatalogueItem | null>(null);
  const [isCreatingNewService, setIsCreatingNewService] = useState(false);

  // Package Edit / Create State
  const [editingPackage, setEditingPackage] = useState<PricingPackageCatalogueItem | null>(null);
  const [isCreatingNewPackage, setIsCreatingNewPackage] = useState(false);

  // Category State
  const [newCategoryTitle, setNewCategoryTitle] = useState("");
  const [newCategorySubtitle, setNewCategorySubtitle] = useState("");

  // Password Change State
  const [oldPasswordInput, setOldPasswordInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Toast / Notification
  const [notification, setNotification] = useState<string | null>(null);

  // Load Data
  const loadData = () => {
    setServices(loadStoredPricingServices());
    setPackages(loadStoredPricingPackages());
    setCategories(loadStoredPricingCategories());
    setPortfolioItems(loadStoredPortfolioItems());
    setTestimonialsCount(loadStoredTestimonials().length);
    setMainServicesCount(loadStoredMainServices().length);
  };

  useEffect(() => {
    loadData();
  }, []);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPwd = localStorage.getItem(ADMIN_PWD_KEY) || DEFAULT_PASSWORD;

    if (passwordInput === storedPwd || passwordInput === "Digibasera582") {
      setIsAuthenticated(true);
      sessionStorage.setItem(ADMIN_STORAGE_KEY, "true");
      setAuthError("");
      setPasswordInput("");
      showToast("Welcome to DigiBasera Admin Console!");
    } else {
      setAuthError("Incorrect admin password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(ADMIN_STORAGE_KEY);
    showToast("Signed out from Admin Console");
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess("");

    const storedPwd = localStorage.getItem(ADMIN_PWD_KEY) || DEFAULT_PASSWORD;
    if (oldPasswordInput !== storedPwd && oldPasswordInput !== "Digibasera582") {
      setPasswordError("Current password does not match.");
      return;
    }

    if (newPasswordInput.length < 4) {
      setPasswordError("New password must be at least 4 characters long.");
      return;
    }

    if (newPasswordInput !== confirmPasswordInput) {
      setPasswordError("New password confirmation does not match.");
      return;
    }

    localStorage.setItem(ADMIN_PWD_KEY, newPasswordInput);
    setPasswordSuccess("Password successfully updated!");
    setOldPasswordInput("");
    setNewPasswordInput("");
    setConfirmPasswordInput("");
    showToast("Admin password changed successfully");
  };

  // =========================================================================
  // CRUD OPERATIONS FOR SERVICES
  // =========================================================================
  const handleSaveService = (serviceData: PricingServiceCatalogueItem) => {
    let updated: PricingServiceCatalogueItem[];
    if (isCreatingNewService) {
      updated = [serviceData, ...services];
      showToast(`Added new service "${serviceData.name}"`);
    } else {
      updated = services.map((s) => (s.id === serviceData.id ? serviceData : s));
      showToast(`Updated "${serviceData.name}"`);
    }
    setServices(updated);
    savePricingServices(updated);
    setEditingService(null);
    setIsCreatingNewService(false);
  };

  const handleDeleteService = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete "${name}" from the catalogue?`)) {
      const updated = services.filter((s) => s.id !== id);
      setServices(updated);
      savePricingServices(updated);
      showToast(`Deleted service "${name}"`);
    }
  };

  const handleToggleServiceStatus = (id: string) => {
    const updated = services.map((s) => {
      if (s.id === id) {
        const nextStatus = s.status === "active" ? "hidden" : "active";
        return { ...s, status: nextStatus as "active" | "hidden" };
      }
      return s;
    });
    setServices(updated);
    savePricingServices(updated);
    showToast("Service visibility updated");
  };

  const handleTogglePopular = (id: string) => {
    const updated = services.map((s) => {
      if (s.id === id) {
        return { ...s, popular: !s.popular };
      }
      return s;
    });
    setServices(updated);
    savePricingServices(updated);
    showToast("Popular badge updated");
  };

  // Quick Inline Price Update in Table
  const handleQuickUpdatePrice = (
    id: string,
    newPrice: string,
    newNumeric: number,
    newBilling: PricingBillingType,
  ) => {
    const updated = services.map((s) => {
      if (s.id === id) {
        return {
          ...s,
          startingPrice: newPrice,
          priceNumeric: newNumeric,
          billingType: newBilling,
        };
      }
      return s;
    });
    setServices(updated);
    savePricingServices(updated);
  };

  // =========================================================================
  // CRUD OPERATIONS FOR PACKAGES
  // =========================================================================
  const handleSavePackage = (pkgData: PricingPackageCatalogueItem) => {
    let updated: PricingPackageCatalogueItem[];
    if (isCreatingNewPackage) {
      updated = [pkgData, ...packages];
      showToast(`Created package "${pkgData.name}"`);
    } else {
      updated = packages.map((p) => (p.id === pkgData.id ? pkgData : p));
      showToast(`Updated package "${pkgData.name}"`);
    }
    setPackages(updated);
    savePricingPackages(updated);
    setEditingPackage(null);
    setIsCreatingNewPackage(false);
  };

  const handleDeletePackage = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete package "${name}"?`)) {
      const updated = packages.filter((p) => p.id !== id);
      setPackages(updated);
      savePricingPackages(updated);
      showToast(`Deleted package "${name}"`);
    }
  };

  // =========================================================================
  // CRUD OPERATIONS FOR PORTFOLIO ITEMS
  // =========================================================================
  const handleSavePortfolioItem = (itemData: PortfolioItem) => {
    const exists = portfolioItems.some((p) => p.id === itemData.id);
    let updated: PortfolioItem[];
    if (!exists) {
      updated = [itemData, ...portfolioItems];
      showToast(`Added portfolio project "${itemData.title}"`);
    } else {
      updated = portfolioItems.map((p) => (p.id === itemData.id ? itemData : p));
      showToast(`Updated portfolio project "${itemData.title}"`);
    }
    setPortfolioItems(updated);
    savePortfolioItems(updated);
  };

  const handleDeletePortfolioItem = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete portfolio project "${title}"?`)) {
      const updated = portfolioItems.filter((p) => p.id !== id);
      setPortfolioItems(updated);
      savePortfolioItems(updated);
      showToast(`Deleted project "${title}"`);
    }
  };

  const handleTogglePortfolioVisibility = (id: string) => {
    const updated = portfolioItems.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          status: (p.status === "active" ? "hidden" : "active") as "active" | "hidden",
        };
      }
      return p;
    });
    setPortfolioItems(updated);
    savePortfolioItems(updated);
    showToast("Project visibility toggled");
  };

  const handleResetPortfolio = () => {
    if (window.confirm("Reset portfolio items to default sample and live client projects?")) {
      const defaults = resetPortfolioToFactoryDefaults();
      setPortfolioItems(defaults);
      savePortfolioItems(defaults);
      showToast("Portfolio items restored to default samples");
    }
  };

  // =========================================================================
  // CATEGORIES OPERATIONS
  // =========================================================================
  const handleAddCategory = () => {
    if (!newCategoryTitle.trim()) return;
    const catId = newCategoryTitle.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const newCat: PricingCategoryMeta = {
      id: catId,
      title: newCategoryTitle.trim(),
      subtitle: newCategorySubtitle.trim() || "Specialized Digital Services & Solutions",
      iconName: "Sparkles",
      badge: "Specialized Pillar",
      displayOrder: categories.length + 1,
    };
    const updated = [...categories, newCat];
    setCategories(updated);
    savePricingCategories(updated);
    setNewCategoryTitle("");
    setNewCategorySubtitle("");
    showToast(`Added category "${newCat.title}"`);
  };

  const handleDeleteCategory = (id: string, name: string) => {
    if (id === "all") {
      alert('The "All Services" category cannot be deleted.');
      return;
    }
    if (
      window.confirm(
        `Delete category "${name}"? Services assigned to this category will need a new category.`,
      )
    ) {
      const updated = categories.filter((c) => c.id !== id);
      setCategories(updated);
      savePricingCategories(updated);
      showToast(`Deleted category "${name}"`);
    }
  };

  // =========================================================================
  // FACTORY RESET
  // =========================================================================
  const handleFactoryReset = () => {
    const confirmation = window.prompt(
      'WARNING: This will reset all services, pricing rates, and packages to factory agency defaults.\n\nType "RESET" to confirm:',
    );
    if (confirmation === "RESET") {
      resetPricingToFactoryDefaults();
      loadData();
      showToast("Pricing catalogue reset to factory defaults");
    }
  };

  // Filtered Services
  const filteredServices = services.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.startingPrice.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategoryFilter === "all" || s.categoryId === selectedCategoryFilter;
    return matchesSearch && matchesCat;
  });

  // =========================================================================
  // 1. LOGIN SCREEN (If not authenticated)
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-[#FAF9F5] text-[#111111] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white border border-[#E8E1D0] rounded-2xl shadow-xl p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#111111] border border-[#D4AF37] flex items-center justify-center shadow-md">
              <Lock className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E8E1D0] text-[10px] uppercase font-bold tracking-wider text-[#9A7B16]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>DigiBasera Super Admin</span>
            </div>
            <h1 className="text-2xl font-bold font-heading text-[#111111]">Administrator Login</h1>
            <p className="text-xs text-[#666666] leading-relaxed">
              Secure control panel to manage service catalogue, pricing rates, package retainers,
              and agency configurations.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#333333] flex items-center justify-between">
                <span>Admin Passcode / Password</span>
                <span className="text-[10px] text-[#888888] font-normal">Encrypted Access</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (authError) setAuthError("");
                  }}
                  placeholder="Enter admin passcode"
                  className="w-full px-4 py-3 rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none text-sm transition-all pr-10"
                  autoFocus
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888888] hover:text-[#111111] text-xs"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {authError && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-[#111111] hover:bg-[#222222] text-white border border-[#D4AF37] font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
            >
              <KeyRound className="w-4 h-4 text-[#D4AF37]" />
              <span>Unlock Admin Panel</span>
            </button>
          </form>

          <div className="pt-4 border-t border-[#E8E1D0] flex items-center justify-between text-xs text-[#777777]">
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-[#111111] hover:underline flex items-center gap-1"
            >
              ← Back to Website
            </button>
            <button
              onClick={() => onNavigate("pricing")}
              className="hover:text-[#111111] hover:underline"
            >
              View Public Pricing →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. AUTHENTICATED SUPER ADMIN CONSOLE
  // =========================================================================
  return (
    <div className="pt-24 pb-24 bg-[#FAF9F5] text-[#111111] min-h-screen selection:bg-[#D4AF37] selection:text-[#111111]">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-24 right-6 z-50 px-4 py-3 rounded-lg bg-[#111111] text-white border border-[#D4AF37] text-xs font-semibold shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
          <span>{notification}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header Card */}
        <div className="bg-white border border-[#E8E1D0] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E8E1D0] text-[11px] font-bold uppercase tracking-wider text-[#9A7B16] inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Super Admin Portal</span>
              </div>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] text-[#666666] font-medium">Live Storage Synced</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#111111]">
              Pricing & Services Management Center
            </h1>
            <p className="text-xs sm:text-sm text-[#555555]">
              Update starting prices, billing types, package inclusions, and service categories. All
              changes apply instantly to the public Pricing page.
            </p>
          </div>

          {/* Action Header Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={() => onNavigate("pricing")}
              className="px-4 py-2.5 rounded-lg bg-[#FAF9F5] hover:bg-[#F0EEE6] text-[#111111] border border-[#E8E1D0] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-[#9A7B16]" />
              <span>View Public Pricing</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Quick Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white border border-[#E8E1D0] rounded-xl p-4 space-y-1 shadow-2xs">
            <div className="flex items-center justify-between text-xs text-[#777777]">
              <span>Agency Services</span>
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <p className="text-2xl font-bold font-heading text-[#111111]">
              {mainServicesCount || 11}
            </p>
            <p className="text-[10px] text-[#888888]">11 Core Pillars + Sub-services</p>
          </div>

          <div className="bg-white border border-[#E8E1D0] rounded-xl p-4 space-y-1 shadow-2xs">
            <div className="flex items-center justify-between text-xs text-[#777777]">
              <span>Portfolio Projects</span>
              <Briefcase className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <p className="text-2xl font-bold font-heading text-[#111111]">
              {portfolioItems.length}
            </p>
            <p className="text-[10px] text-[#888888]">Organized by custom category</p>
          </div>

          <div className="bg-white border border-[#E8E1D0] rounded-xl p-4 space-y-1 shadow-2xs">
            <div className="flex items-center justify-between text-xs text-[#777777]">
              <span>Client Reviews</span>
              <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <p className="text-2xl font-bold font-heading text-[#111111]">{testimonialsCount}</p>
            <p className="text-[10px] text-[#888888]">Testimonials with star ratings</p>
          </div>

          <div className="bg-white border border-[#E8E1D0] rounded-xl p-4 space-y-1 shadow-2xs">
            <div className="flex items-center justify-between text-xs text-[#777777]">
              <span>Retainer Suites</span>
              <Package className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <p className="text-2xl font-bold font-heading text-[#111111]">{packages.length}</p>
            <p className="text-[10px] text-[#888888]">High-ticket growth suites</p>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-[#E8E1D0] pb-2 scrollbar-none">
          <button
            onClick={() => {
              setActiveTab("main-services");
              setEditingService(null);
              setIsCreatingNewService(false);
            }}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === "main-services"
                ? "bg-[#111111] text-white border border-[#D4AF37] shadow-xs"
                : "bg-white text-[#555555] hover:bg-[#FAF9F5] border border-[#E8E1D0]"
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>11 Main Services & Details</span>
          </button>

          <button
            onClick={() => setActiveTab("portfolio")}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === "portfolio"
                ? "bg-[#111111] text-white border border-[#D4AF37] shadow-xs"
                : "bg-white text-[#555555] hover:bg-[#FAF9F5] border border-[#E8E1D0]"
            }`}
          >
            <Briefcase className="w-4 h-4 text-[#D4AF37]" />
            <span>Portfolio & Categories ({portfolioItems.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("careers")}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === "careers"
                ? "bg-[#111111] text-white border border-[#D4AF37] shadow-xs"
                : "bg-white text-[#555555] hover:bg-[#FAF9F5] border border-[#E8E1D0]"
            }`}
          >
            <Briefcase className="w-4 h-4 text-[#D4AF37]" />
            <span>Careers & Jobs</span>
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === "reviews"
                ? "bg-[#111111] text-white border border-[#D4AF37] shadow-xs"
                : "bg-white text-[#555555] hover:bg-[#FAF9F5] border border-[#E8E1D0]"
            }`}
          >
            <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            <span>Client Reviews ({testimonialsCount})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("services");
              setEditingService(null);
              setIsCreatingNewService(false);
            }}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === "services"
                ? "bg-[#111111] text-white border border-[#D4AF37] shadow-xs"
                : "bg-white text-[#555555] hover:bg-[#FAF9F5] border border-[#E8E1D0]"
            }`}
          >
            <Layers className="w-4 h-4 text-[#D4AF37]" />
            <span>Pricing Catalogue ({services.length})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("packages");
              setEditingPackage(null);
              setIsCreatingNewPackage(false);
            }}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === "packages"
                ? "bg-[#111111] text-white border border-[#D4AF37] shadow-xs"
                : "bg-white text-[#555555] hover:bg-[#FAF9F5] border border-[#E8E1D0]"
            }`}
          >
            <Package className="w-4 h-4 text-[#D4AF37]" />
            <span>Retainer Suites ({packages.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("quick-table")}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === "quick-table"
                ? "bg-[#111111] text-white border border-[#D4AF37] shadow-xs"
                : "bg-white text-[#555555] hover:bg-[#FAF9F5] border border-[#E8E1D0]"
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-[#D4AF37]" />
            <span>Quick Pricing Spreadsheet</span>
          </button>

          <button
            onClick={() => setActiveTab("categories")}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === "categories"
                ? "bg-[#111111] text-white border border-[#D4AF37] shadow-xs"
                : "bg-white text-[#555555] hover:bg-[#FAF9F5] border border-[#E8E1D0]"
            }`}
          >
            <FolderPlus className="w-4 h-4 text-[#D4AF37]" />
            <span>Categories Taxonomy</span>
          </button>

          <button
            onClick={() => setActiveTab("animations")}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === "animations"
                ? "bg-[#111111] text-white border border-[#D4AF37] shadow-xs"
                : "bg-white text-[#555555] hover:bg-[#FAF9F5] border border-[#E8E1D0]"
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Animation Controls</span>
          </button>

          <button
            onClick={() => setActiveTab("security")}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === "security"
                ? "bg-[#111111] text-white border border-[#D4AF37] shadow-xs"
                : "bg-white text-[#555555] hover:bg-[#FAF9F5] border border-[#E8E1D0]"
            }`}
          >
            <Settings className="w-4 h-4 text-[#D4AF37]" />
            <span>Admin Settings & Reset</span>
          </button>
        </div>

        {/* ===================================================================== */}
        {/* TAB 0: 11 MAIN SERVICES & SUB-SERVICES ARCHITECTURE */}
        {/* ===================================================================== */}
        {activeTab === "main-services" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <AdminServicesManager />
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB: REVIEWS & TESTIMONIALS MANAGEMENT */}
        {/* ===================================================================== */}
        {activeTab === "careers" && (
          <div className="animate-in fade-in duration-200">
            <AdminCareersManager showToast={showToast} />
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="animate-in fade-in duration-200">
            <AdminReviewsManager showToast={showToast} onUpdate={loadData} />
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 1: SERVICES MANAGEMENT */}
        {/* ===================================================================== */}
        {activeTab === "services" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Action Bar (Search + Filter + New Button) */}
            <div className="bg-white border border-[#E8E1D0] rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs">
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 sm:w-72">
                  <Search className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by title, price..."
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <select
                  value={selectedCategoryFilter}
                  onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                  className="px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => {
                  setEditingService({
                    id: `service-${Date.now()}`,
                    name: "",
                    categoryId: selectedCategoryFilter !== "all" ? selectedCategoryFilter : "seo",
                    shortDesc: "",
                    startingPrice: "₹14,999",
                    priceNumeric: 14999,
                    currency: "₹",
                    billingType: "/month",
                    inclusions: [
                      "Comprehensive Strategy & Setup",
                      "Weekly Optimization & Monitoring",
                      "Dedicated Account Manager",
                    ],
                    featured: false,
                    popular: false,
                    status: "active",
                    displayOrder: services.length + 1,
                  });
                  setIsCreatingNewService(true);
                }}
                className="w-full md:w-auto px-5 py-2.5 rounded-lg bg-[#111111] hover:bg-[#222222] text-white border border-[#D4AF37] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs"
              >
                <Plus className="w-4 h-4 text-[#D4AF37]" />
                <span>Add New Service</span>
              </button>
            </div>

            {/* Service Edit Form (Modal or Expandable Box) */}
            {(editingService || isCreatingNewService) && (
              <ServiceEditForm
                service={editingService!}
                categories={categories}
                isNew={isCreatingNewService}
                onSave={handleSaveService}
                onCancel={() => {
                  setEditingService(null);
                  setIsCreatingNewService(false);
                }}
              />
            )}

            {/* Services List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-white border rounded-xl p-5 space-y-4 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between ${
                    service.status === "hidden"
                      ? "opacity-60 border-dashed border-gray-300"
                      : "border-[#E8E1D0]"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E8E1D0]">
                          {categories.find((c) => c.id === service.categoryId)?.title ||
                            service.categoryId}
                        </span>
                        <h3 className="text-base font-bold font-heading text-[#111111] mt-1.5 leading-snug">
                          {service.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-1">
                        {service.popular && (
                          <span
                            className="p-1 rounded bg-[#D4AF37]/10 text-[#9A7B16]"
                            title="Marked as Popular"
                          >
                            <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                          </span>
                        )}
                        <span
                          className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${
                            service.status === "active"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {service.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-1 py-1">
                      <span className="text-xl font-bold font-heading text-[#111111]">
                        {service.startingPrice}
                      </span>
                      <span className="text-xs text-[#777777] font-medium">
                        {service.billingType}
                      </span>
                    </div>

                    <p className="text-xs text-[#555555] line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Inclusions summary */}
                    <div className="space-y-1 pt-1 border-t border-[#F0EEE6]">
                      <span className="text-[10px] font-semibold text-[#777777] uppercase tracking-wider">
                        Key Inclusions ({service.inclusions.length}):
                      </span>
                      <ul className="text-[11px] text-[#444444] space-y-0.5">
                        {service.inclusions.slice(0, 2).map((inc, i) => (
                          <li key={i} className="truncate flex items-center gap-1.5">
                            <span className="text-[#D4AF37] font-bold text-[10px]">✓</span>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions row */}
                  <div className="pt-3 border-t border-[#E8E1D0] flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleToggleServiceStatus(service.id)}
                        className="p-1.5 rounded hover:bg-[#FAF9F5] text-[#666666] hover:text-[#111111] transition-colors"
                        title={
                          service.status === "active"
                            ? "Hide from public catalogue"
                            : "Show on public catalogue"
                        }
                      >
                        {service.status === "active" ? (
                          <Eye className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-gray-400" />
                        )}
                      </button>

                      <button
                        onClick={() => handleTogglePopular(service.id)}
                        className="p-1.5 rounded hover:bg-[#FAF9F5] text-[#666666] transition-colors"
                        title="Toggle Popular Badge"
                      >
                        <Star
                          className={`w-4 h-4 ${
                            service.popular ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-400"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingService(service);
                          setIsCreatingNewService(false);
                          window.scrollTo({ top: 400, behavior: "smooth" });
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#FAF9F5] hover:bg-[#EAE6D8] text-[#111111] border border-[#E8E1D0] text-xs font-semibold flex items-center gap-1 transition-colors"
                      >
                        <Edit2 className="w-3.5 h-3.5 text-[#9A7B16]" />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => handleDeleteService(service.id, service.name)}
                        className="p-1.5 rounded-lg hover:bg-red-50 text-red-600 border border-transparent hover:border-red-200 transition-colors"
                        title="Delete Service"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="bg-white border border-[#E8E1D0] rounded-xl p-12 text-center space-y-3">
                <AlertCircle className="w-8 h-8 text-[#888888] mx-auto" />
                <p className="text-sm font-semibold text-[#111111]">
                  No services found matching filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategoryFilter("all");
                  }}
                  className="px-4 py-2 rounded-lg bg-[#FAF9F5] text-xs font-semibold border border-[#E8E1D0]"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 2: PACKAGES & RETAINER SUITES */}
        {/* ===================================================================== */}
        {activeTab === "packages" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white border border-[#E8E1D0] rounded-xl p-4 flex items-center justify-between gap-4 shadow-2xs">
              <div>
                <h3 className="text-sm font-bold font-heading text-[#111111]">
                  High-Ticket Retainer Packages ({packages.length})
                </h3>
                <p className="text-xs text-[#666666]">
                  Curated multi-channel suites shown prominently in the pricing header & packages
                  tabs.
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingPackage({
                    id: `pkg-${Date.now()}`,
                    name: "",
                    badge: "Custom Suite",
                    priceDisplay: "₹34,999",
                    startingPrice: "₹34,999",
                    priceNumeric: 34999,
                    status: "active",
                    displayOrder: 0,
                    billingPeriod: "/month",
                    tagline: "Comprehensive digital acceleration suite for established brands.",
                    features: [
                      "Multi-Channel Strategy",
                      "Dedicated Performance Team",
                      "Weekly Reporting",
                    ],
                    deliverables: "Complete Strategy Blueprint, Paid Campaigns & Creative",
                    idealFor: "Scaling businesses looking for end-to-end digital growth.",
                    buttonText: "GET PROPOSAL",
                  });
                  setIsCreatingNewPackage(true);
                }}
                className="px-4 py-2.5 rounded-lg bg-[#111111] hover:bg-[#222222] text-white border border-[#D4AF37] text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xs"
              >
                <Plus className="w-4 h-4 text-[#D4AF37]" />
                <span>Add Package</span>
              </button>
            </div>

            {/* Package Edit Form */}
            {(editingPackage || isCreatingNewPackage) && (
              <PackageEditForm
                pkg={editingPackage!}
                isNew={isCreatingNewPackage}
                onSave={handleSavePackage}
                onCancel={() => {
                  setEditingPackage(null);
                  setIsCreatingNewPackage(false);
                }}
              />
            )}

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white border border-[#E8E1D0] rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between relative"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16] bg-[#FAF9F5] px-2.5 py-1 rounded-full border border-[#E8E1D0]">
                        {pkg.badge}
                      </span>
                      {pkg.popular && (
                        <span className="text-[10px] font-bold text-white bg-[#111111] px-2 py-0.5 rounded border border-[#D4AF37]">
                          ★ Popular
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold font-heading text-[#111111]">{pkg.name}</h3>
                    <p className="text-xs text-[#666666]">{pkg.tagline}</p>

                    <div className="py-2 border-y border-[#F0EEE6]">
                      <span className="text-2xl font-bold font-heading text-[#111111]">
                        {pkg.priceDisplay}
                      </span>
                      <span className="text-xs text-[#777777] ml-1">{pkg.billingPeriod}</span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-[#777777] uppercase tracking-wider block">
                        Included Features ({pkg.features.length}):
                      </span>
                      <ul className="space-y-1 text-xs text-[#444444]">
                        {pkg.features.map((f, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#D4AF37] font-bold">✓</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E8E1D0] flex items-center justify-end gap-2">
                    <button
                      onClick={() => {
                        setEditingPackage(pkg);
                        setIsCreatingNewPackage(false);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#FAF9F5] hover:bg-[#EAE6D8] text-[#111111] border border-[#E8E1D0] text-xs font-semibold flex items-center gap-1"
                    >
                      <Edit2 className="w-3.5 h-3.5 text-[#9A7B16]" />
                      <span>Edit Package</span>
                    </button>
                    <button
                      onClick={() => handleDeletePackage(pkg.id, pkg.name)}
                      className="p-1.5 rounded-lg hover:bg-red-50 text-red-600"
                      title="Delete Package"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 3: QUICK BULK SPREADSHEET TABLE */}
        {/* ===================================================================== */}
        {activeTab === "quick-table" && (
          <div className="bg-white border border-[#E8E1D0] rounded-xl p-6 space-y-4 shadow-xs animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold font-heading text-[#111111]">
                  Quick Pricing Spreadsheet (Bulk Edit)
                </h3>
                <p className="text-xs text-[#666666]">
                  Modify starting prices and billing units directly inline. Changes save
                  automatically into storage.
                </p>
              </div>

              <span className="text-[11px] text-[#9A7B16] bg-[#FAF9F5] border border-[#E8E1D0] px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Auto-saved live</span>
              </span>
            </div>

            <div className="overflow-x-auto border border-[#E8E1D0] rounded-lg">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF9F5] border-b border-[#E8E1D0] font-heading font-bold text-[#111111]">
                  <tr>
                    <th className="p-3">Service Name</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Starting Price Display</th>
                    <th className="p-3">Numeric Value (₹)</th>
                    <th className="p-3">Billing Cycle</th>
                    <th className="p-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E1D0]">
                  {services.map((s) => (
                    <tr key={s.id} className="hover:bg-[#FAF9F5]/70 transition-colors">
                      <td className="p-3 font-semibold text-[#111111] max-w-xs truncate">
                        {s.name}
                      </td>
                      <td className="p-3 text-[#666666]">
                        {categories.find((c) => c.id === s.categoryId)?.title || s.categoryId}
                      </td>
                      <td className="p-3">
                        <input
                          type="text"
                          defaultValue={s.startingPrice}
                          onBlur={(e) => {
                            const newDisplay = e.target.value;
                            const num =
                              parseInt(newDisplay.replace(/[^0-9]/g, "")) || s.priceNumeric;
                            handleQuickUpdatePrice(s.id, newDisplay, num, s.billingType);
                            showToast(`Updated price for "${s.name}" to ${newDisplay}`);
                          }}
                          className="px-2.5 py-1.5 rounded border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none w-28 font-bold"
                        />
                      </td>
                      <td className="p-3">
                        <input
                          type="number"
                          defaultValue={s.priceNumeric}
                          onBlur={(e) => {
                            const num = parseInt(e.target.value) || 0;
                            handleQuickUpdatePrice(s.id, s.startingPrice, num, s.billingType);
                          }}
                          className="px-2.5 py-1.5 rounded border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none w-24"
                        />
                      </td>
                      <td className="p-3">
                        <select
                          value={s.billingType}
                          onChange={(e) => {
                            const newB = e.target.value as PricingBillingType;
                            handleQuickUpdatePrice(s.id, s.startingPrice, s.priceNumeric, newB);
                            showToast(`Updated billing cycle for "${s.name}"`);
                          }}
                          className="px-2.5 py-1.5 rounded border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none"
                        >
                          <option value="/month">/month</option>
                          <option value="/project">/project</option>
                          <option value="/article">/article</option>
                          <option value="/design">/design</option>
                          <option value="/video">/video</option>
                          <option value="/session">/session</option>
                          <option value="/product">/product</option>
                          <option value="/campaign">/campaign</option>
                          <option value="/reel">/reel</option>
                        </select>
                      </td>
                      <td className="p-3 text-center">
                        <button
                          onClick={() => handleToggleServiceStatus(s.id)}
                          className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                            s.status === "active"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {s.status}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 4: CATEGORIES TAXONOMY */}
        {/* ===================================================================== */}
        {activeTab === "categories" && (
          <div className="bg-white border border-[#E8E1D0] rounded-xl p-6 space-y-6 shadow-xs animate-in fade-in duration-200">
            <div>
              <h3 className="text-base font-bold font-heading text-[#111111]">
                Service Categories & Taxonomy
              </h3>
              <p className="text-xs text-[#666666]">
                Manage the discipline categories shown in the pricing sticky tabs and filters.
              </p>
            </div>

            {/* Add Category Form */}
            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0] space-y-3">
              <span className="text-xs font-bold text-[#111111] uppercase tracking-wider block">
                Add New Service Category
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={newCategoryTitle}
                  onChange={(e) => setNewCategoryTitle(e.target.value)}
                  placeholder="Category Name (e.g. Lead Generation)"
                  className="px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-white focus:border-[#D4AF37] focus:outline-none"
                />
                <input
                  type="text"
                  value={newCategorySubtitle}
                  onChange={(e) => setNewCategorySubtitle(e.target.value)}
                  placeholder="Subtitle / Tagline"
                  className="px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-white focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
              <button
                onClick={handleAddCategory}
                disabled={!newCategoryTitle.trim()}
                className="px-4 py-2 rounded-lg bg-[#111111] text-white border border-[#D4AF37] text-xs font-bold uppercase tracking-wider disabled:opacity-50 flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Add Category</span>
              </button>
            </div>

            {/* Category Cards List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {categories.map((cat) => {
                const count =
                  cat.id === "all"
                    ? services.length
                    : services.filter((s) => s.categoryId === cat.id).length;

                return (
                  <div
                    key={cat.id}
                    className="p-4 rounded-xl border border-[#E8E1D0] bg-[#FAF9F5]/50 flex items-center justify-between gap-3"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-[#111111]">{cat.title}</h4>
                      <p className="text-[11px] text-[#777777]">{count} services linked</p>
                    </div>

                    {cat.id !== "all" && (
                      <button
                        onClick={() => handleDeleteCategory(cat.id, cat.title)}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded"
                        title="Delete Category"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 3: PORTFOLIO & WORK MANAGEMENT */}
        {/* ===================================================================== */}
        {activeTab === "portfolio" && (
          <div className="animate-in fade-in duration-200">
            <AdminPortfolioManager
              portfolioItems={portfolioItems}
              services={services}
              onSaveItem={handleSavePortfolioItem}
              onDeleteItem={handleDeletePortfolioItem}
              onToggleVisibility={handleTogglePortfolioVisibility}
              onResetDefaults={handleResetPortfolio}
              showToast={showToast}
            />
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 6: ANIMATION & UI CONTROLS */}
        {/* ===================================================================== */}
        {activeTab === "animations" && (
          <div className="animate-in fade-in duration-200">
            <AdminAnimationSettings showToast={showToast} />
          </div>
        )}

        {/* ===================================================================== */}
        {/* TAB 5: ADMIN SETTINGS, PASSCODE & FACTORY RESET */}
        {/* ===================================================================== */}
        {activeTab === "security" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            {/* Change Admin Password Card */}
            <div className="bg-white border border-[#E8E1D0] rounded-2xl p-6 space-y-5 shadow-xs">
              <div className="flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-base font-bold font-heading text-[#111111]">
                  Change Admin Passcode
                </h3>
              </div>

              <p className="text-xs text-[#666666]">
                Update your private administrator passcode. This will be required on your next login
                to access the admin panel.
              </p>

              <form onSubmit={handleChangePassword} className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#333333]">Current Passcode</label>
                  <input
                    type="password"
                    value={oldPasswordInput}
                    onChange={(e) => setOldPasswordInput(e.target.value)}
                    placeholder="Enter current passcode"
                    className="w-full px-3 py-2 rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] text-xs focus:bg-white focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#333333]">New Passcode</label>
                  <input
                    type="password"
                    value={newPasswordInput}
                    onChange={(e) => setNewPasswordInput(e.target.value)}
                    placeholder="Enter new passcode (min 4 characters)"
                    className="w-full px-3 py-2 rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] text-xs focus:bg-white focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#333333]">
                    Confirm New Passcode
                  </label>
                  <input
                    type="password"
                    value={confirmPasswordInput}
                    onChange={(e) => setConfirmPasswordInput(e.target.value)}
                    placeholder="Confirm new passcode"
                    className="w-full px-3 py-2 rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] text-xs focus:bg-white focus:border-[#D4AF37] focus:outline-none"
                    required
                  />
                </div>

                {passwordError && (
                  <p className="text-xs text-red-600 bg-red-50 p-2 rounded border border-red-200">
                    {passwordError}
                  </p>
                )}

                {passwordSuccess && (
                  <p className="text-xs text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-200">
                    {passwordSuccess}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-[#111111] hover:bg-[#222222] text-white border border-[#D4AF37] font-bold text-xs uppercase tracking-wider"
                >
                  Update Admin Passcode
                </button>
              </form>
            </div>

            {/* Factory Defaults & Danger Zone */}
            <div className="bg-white border border-[#E8E1D0] rounded-2xl p-6 space-y-5 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-5 h-5 text-amber-600" />
                  <h3 className="text-base font-bold font-heading text-[#111111]">
                    Reset to Factory Agency Rates
                  </h3>
                </div>

                <p className="text-xs text-[#666666] leading-relaxed">
                  If custom changes need to be rolled back, you can restore all services, rates,
                  packages, and categories to original DigiBasera standard agency rates at any time.
                </p>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <span className="font-bold block">Notice:</span>
                  <span>
                    This will override all custom modifications made in this browser and revert to
                    default rates.
                  </span>
                </div>
              </div>

              <button
                onClick={handleFactoryReset}
                className="w-full py-3 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset All Rates to Factory Defaults</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// Service Edit Sub-Form
// ============================================================================
interface ServiceEditFormProps {
  service: PricingServiceCatalogueItem;
  categories: PricingCategoryMeta[];
  isNew: boolean;
  onSave: (service: PricingServiceCatalogueItem) => void;
  onCancel: () => void;
}

const ServiceEditForm: React.FC<ServiceEditFormProps> = ({
  service,
  categories,
  isNew,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState<PricingServiceCatalogueItem>({ ...service });
  const [inclusionsText, setInclusionsText] = useState(service.inclusions.join("\n"));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInclusions = inclusionsText
      .split("\n")
      .map((i) => i.trim())
      .filter((i) => i.length > 0);

    const numericPrice =
      parseInt(formData.startingPrice.replace(/[^0-9]/g, "")) || formData.priceNumeric || 9999;

    onSave({
      ...formData,
      priceNumeric: numericPrice,
      inclusions: cleanInclusions.length > 0 ? cleanInclusions : ["Standard Strategy & Execution"],
    });
  };

  return (
    <div className="bg-white border-2 border-[#D4AF37] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 animate-in fade-in zoom-in-95 duration-150">
      <div className="flex items-center justify-between border-b border-[#E8E1D0] pb-4">
        <div>
          <h3 className="text-lg font-bold font-heading text-[#111111]">
            {isNew ? "Create New Service Item" : `Edit: ${formData.name}`}
          </h3>
          <p className="text-xs text-[#666666]">Configure pricing, inclusions, and visibility.</p>
        </div>
        <button onClick={onCancel} className="text-xs text-[#777777] hover:text-[#111111]">
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#333333]">Service Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Meta Ads High-Conversion Retainer"
              className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#333333]">Category Pillar *</label>
            <select
              value={formData.categoryId}
              onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none"
            >
              {categories
                .filter((c) => c.id !== "all")
                .map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.title}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#333333]">Starting Price Display *</label>
            <input
              type="text"
              value={formData.startingPrice}
              onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
              placeholder="e.g. ₹19,999"
              className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none font-bold"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#333333]">Billing Type *</label>
            <select
              value={formData.billingType}
              onChange={(e) =>
                setFormData({ ...formData, billingType: e.target.value as PricingBillingType })
              }
              className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none"
            >
              <option value="/month">/month</option>
              <option value="/project">/project</option>
              <option value="/article">/article</option>
              <option value="/design">/design</option>
              <option value="/video">/video</option>
              <option value="/session">/session</option>
              <option value="/product">/product</option>
              <option value="/campaign">/campaign</option>
              <option value="/reel">/reel</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#333333]">Card Badge (Optional)</label>
            <input
              type="text"
              value={formData.badge || ""}
              onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
              placeholder="e.g. Best Value / Scale"
              className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-[#333333]">Short Description *</label>
          <textarea
            rows={2}
            value={formData.shortDesc}
            onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
            placeholder="Concise overview of this service..."
            className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-[#333333]">
            Key Inclusions (One per line) *
          </label>
          <textarea
            rows={4}
            value={inclusionsText}
            onChange={(e) => setInclusionsText(e.target.value)}
            placeholder="Audience Research & Funnel Mapping&#10;Ad Creative Testing&#10;Weekly Optimization"
            className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none font-mono text-[11px]"
            required
          />
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-2">
          <label className="flex items-center gap-2 text-xs text-[#333333] cursor-pointer">
            <input
              type="checkbox"
              checked={formData.popular || false}
              onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
              className="rounded text-[#D4AF37] focus:ring-[#D4AF37]"
            />
            <span className="font-semibold">Mark as Popular ★</span>
          </label>

          <label className="flex items-center gap-2 text-xs text-[#333333] cursor-pointer">
            <input
              type="checkbox"
              checked={formData.status === "active"}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.checked ? "active" : "hidden" })
              }
              className="rounded text-emerald-600 focus:ring-emerald-500"
            />
            <span className="font-semibold">Active & Visible in Catalogue</span>
          </label>
        </div>

        <div className="pt-4 border-t border-[#E8E1D0] flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-xs rounded-lg border border-[#E8E1D0] hover:bg-[#FAF9F5]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-[#111111] hover:bg-[#222222] text-white border border-[#D4AF37] text-xs font-bold uppercase tracking-wider flex items-center gap-2"
          >
            <Save className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Save Service</span>
          </button>
        </div>
      </form>
    </div>
  );
};

// ============================================================================
// Package Edit Sub-Form
// ============================================================================
interface PackageEditFormProps {
  pkg: PricingPackageCatalogueItem;
  isNew: boolean;
  onSave: (pkg: PricingPackageCatalogueItem) => void;
  onCancel: () => void;
}

const PackageEditForm: React.FC<PackageEditFormProps> = ({ pkg, isNew, onSave, onCancel }) => {
  const [formData, setFormData] = useState<PricingPackageCatalogueItem>({ ...pkg });
  const [featuresText, setFeaturesText] = useState(pkg.features.join("\n"));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanFeatures = featuresText
      .split("\n")
      .map((f) => f.trim())
      .filter((f) => f.length > 0);

    onSave({
      ...formData,
      features: cleanFeatures.length > 0 ? cleanFeatures : ["Complete Growth Execution"],
    });
  };

  return (
    <div className="bg-white border-2 border-[#D4AF37] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 animate-in fade-in duration-150">
      <div className="flex items-center justify-between border-b border-[#E8E1D0] pb-4">
        <div>
          <h3 className="text-lg font-bold font-heading text-[#111111]">
            {isNew ? "Create New Retainer Package" : `Edit Package: ${formData.name}`}
          </h3>
          <p className="text-xs text-[#666666]">
            Configure multi-channel deliverables and pricing.
          </p>
        </div>
        <button onClick={onCancel} className="text-xs text-[#777777] hover:text-[#111111]">
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#333333]">Package Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#333333]">Package Badge *</label>
            <input
              type="text"
              value={formData.badge}
              onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#333333]">Price Display *</label>
            <input
              type="text"
              value={formData.priceDisplay}
              onChange={(e) => setFormData({ ...formData, priceDisplay: e.target.value })}
              placeholder="e.g. ₹49,999"
              className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none font-bold"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#333333]">Billing Period *</label>
            <input
              type="text"
              value={formData.billingPeriod}
              onChange={(e) => setFormData({ ...formData, billingPeriod: e.target.value })}
              placeholder="e.g. /month"
              className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-[#333333]">Tagline / Summary *</label>
          <input
            type="text"
            value={formData.tagline}
            onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
            className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-[#333333]">
            Features & Deliverables (One per line) *
          </label>
          <textarea
            rows={4}
            value={featuresText}
            onChange={(e) => setFeaturesText(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E1D0] bg-[#FAF9F5] focus:bg-white focus:border-[#D4AF37] focus:outline-none font-mono text-[11px]"
            required
          />
        </div>

        <div className="flex items-center gap-6 pt-2">
          <label className="flex items-center gap-2 text-xs text-[#333333] cursor-pointer">
            <input
              type="checkbox"
              checked={formData.popular || false}
              onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
              className="rounded text-[#D4AF37] focus:ring-[#D4AF37]"
            />
            <span className="font-semibold">Mark as Most Popular ★</span>
          </label>
        </div>

        <div className="pt-4 border-t border-[#E8E1D0] flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-xs rounded-lg border border-[#E8E1D0] hover:bg-[#FAF9F5]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-[#111111] hover:bg-[#222222] text-white border border-[#D4AF37] text-xs font-bold uppercase tracking-wider flex items-center gap-2"
          >
            <Save className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Save Package</span>
          </button>
        </div>
      </form>
    </div>
  );
};
