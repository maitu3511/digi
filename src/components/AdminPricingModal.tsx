import React, { useState } from "react";
import {
  X,
  Plus,
  Edit2,
  Trash2,
  Save,
  RotateCcw,
  Sparkles,
  Layers,
  DollarSign,
  Eye,
  EyeOff,
  Star,
  CheckCircle2,
  AlertCircle,
  Package,
  FolderPlus,
  Search,
  Filter,
  ArrowUpDown,
} from "lucide-react";
import {
  PricingBillingType,
  PricingCategoryMeta,
  PricingPackageCatalogueItem,
  PricingServiceCatalogueItem,
} from "../types";
import {
  savePricingServices,
  savePricingPackages,
  savePricingCategories,
  resetPricingToFactoryDefaults,
  DEFAULT_PRICING_CATEGORIES,
} from "../data/pricingCatalogueData";

interface AdminPricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: PricingServiceCatalogueItem[];
  packages: PricingPackageCatalogueItem[];
  categories: PricingCategoryMeta[];
  onDataUpdated: () => void;
}

export const AdminPricingModal: React.FC<AdminPricingModalProps> = ({
  isOpen,
  onClose,
  services,
  packages,
  categories,
  onDataUpdated,
}) => {
  const [activeTab, setActiveTab] = useState<
    "services" | "packages" | "categories" | "quick-table"
  >("services");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all");
  const [editingService, setEditingService] = useState<PricingServiceCatalogueItem | null>(null);
  const [isCreatingNewService, setIsCreatingNewService] = useState(false);
  const [editingPackage, setEditingPackage] = useState<PricingPackageCatalogueItem | null>(null);
  const [isCreatingNewPackage, setIsCreatingNewPackage] = useState(false);
  const [newCategoryTitle, setNewCategoryTitle] = useState("");
  const [newCategorySubtitle, setNewCategorySubtitle] = useState("");
  const [notification, setNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // ----------------------------------------------------
  // SERVICES CRUD
  // ----------------------------------------------------
  const handleSaveService = (service: PricingServiceCatalogueItem) => {
    let updated: PricingServiceCatalogueItem[];
    const exists = services.some((s) => s.id === service.id);

    if (exists) {
      updated = services.map((s) => (s.id === service.id ? service : s));
      showToast(`Updated "${service.name}" successfully!`);
    } else {
      updated = [service, ...services];
      showToast(`Created new service "${service.name}" successfully!`);
    }

    savePricingServices(updated);
    onDataUpdated();
    setEditingService(null);
    setIsCreatingNewService(false);
  };

  const handleDeleteService = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete or archive "${name}"?`)) {
      const updated = services.filter((s) => s.id !== id);
      savePricingServices(updated);
      onDataUpdated();
      showToast(`Service "${name}" removed.`);
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
    savePricingServices(updated);
    onDataUpdated();
    showToast("Service visibility toggled.");
  };

  const handleToggleFeatured = (id: string) => {
    const updated = services.map((s) => (s.id === id ? { ...s, featured: !s.featured } : s));
    savePricingServices(updated);
    onDataUpdated();
    showToast("Service featured status updated.");
  };

  const handleInlinePriceChange = (id: string, newPrice: string) => {
    const numeric = parseInt(newPrice.replace(/[^0-9]/g, ""), 10) || 0;
    const formatted = newPrice.startsWith("₹") ? newPrice : `₹${newPrice}`;
    const updated = services.map((s) => {
      if (s.id === id) {
        return {
          ...s,
          startingPrice: formatted,
          priceNumeric: numeric,
          whatsappMessage: `Hello, I am interested in ${s.name} (${formatted}${s.billingType}). Please share more details and a quotation.`,
        };
      }
      return s;
    });
    savePricingServices(updated);
    onDataUpdated();
    showToast("Price updated successfully.");
  };

  // ----------------------------------------------------
  // PACKAGES CRUD
  // ----------------------------------------------------
  const handleSavePackage = (pkg: PricingPackageCatalogueItem) => {
    let updated: PricingPackageCatalogueItem[];
    const exists = packages.some((p) => p.id === pkg.id);

    if (exists) {
      updated = packages.map((p) => (p.id === pkg.id ? pkg : p));
      showToast(`Package "${pkg.name}" updated successfully!`);
    } else {
      updated = [...packages, pkg];
      showToast(`New package "${pkg.name}" created!`);
    }

    savePricingPackages(updated);
    onDataUpdated();
    setEditingPackage(null);
    setIsCreatingNewPackage(false);
  };

  const handleDeletePackage = (id: string, name: string) => {
    if (window.confirm(`Delete package "${name}"?`)) {
      const updated = packages.filter((p) => p.id !== id);
      savePricingPackages(updated);
      onDataUpdated();
      showToast(`Package "${name}" deleted.`);
    }
  };

  const handleTogglePackagePopular = (id: string) => {
    const updated = packages.map((p) => (p.id === id ? { ...p, popular: !p.popular } : p));
    savePricingPackages(updated);
    onDataUpdated();
    showToast("Package Popular badge updated.");
  };

  // ----------------------------------------------------
  // CATEGORIES CRUD
  // ----------------------------------------------------
  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryTitle.trim()) return;

    const id = newCategoryTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const newCat: PricingCategoryMeta = {
      id,
      title: newCategoryTitle.trim(),
      subtitle: newCategorySubtitle.trim() || `${newCategoryTitle.trim()} Solutions`,
      badge: "Custom Category",
      iconName: "Sparkles",
      displayOrder: categories.length + 1,
    };

    const updated = [...categories, newCat];
    savePricingCategories(updated);
    onDataUpdated();
    setNewCategoryTitle("");
    setNewCategorySubtitle("");
    showToast(`New Category "${newCat.title}" created! You can now assign services to it.`);
  };

  const handleDeleteCategory = (catId: string, title: string) => {
    if (catId === "all") {
      alert("Cannot delete All Services root category.");
      return;
    }
    if (
      window.confirm(
        `Delete category "${title}"? Services in this category will need re-assignment.`,
      )
    ) {
      const updated = categories.filter((c) => c.id !== catId);
      savePricingCategories(updated);
      onDataUpdated();
      showToast(`Category "${title}" removed.`);
    }
  };

  // Reset to Factory Defaults
  const handleResetFactoryDefaults = () => {
    if (
      window.confirm(
        "Reset ALL pricing, services, packages, and categories back to factory defaults? Any custom edits will be reverted.",
      )
    ) {
      resetPricingToFactoryDefaults();
      onDataUpdated();
      showToast("All pricing data successfully reset to factory defaults.");
    }
  };

  // Filtered Services list
  const filteredServices = services.filter((srv) => {
    const matchesCat =
      selectedCategoryFilter === "all" || srv.categoryId === selectedCategoryFilter;
    const matchesQuery =
      srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.startingPrice.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-white border-2 border-[#D4AF37] rounded-2xl w-full max-w-6xl max-h-[95vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#111111] text-white flex items-center justify-between border-b border-[#D4AF37]/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37] text-[#111111] flex items-center justify-center font-bold shadow-sm">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] font-heading">
                  Admin Control Center
                </span>
                <span className="text-[10px] bg-white/10 text-white/90 px-2 py-0.5 rounded font-mono">
                  Live Pricing Management
                </span>
              </div>
              <h2 className="text-xl font-bold text-white font-heading">
                Pricing & Commercial Catalogue Manager
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleResetFactoryDefaults}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/90 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-white/10"
              title="Reset all prices and services to default initial catalogue"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Defaults</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toast Notification */}
        {notification && (
          <div className="bg-[#9A7B16] text-white px-6 py-2.5 text-xs font-bold flex items-center justify-between animate-in slide-in-from-top duration-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{notification}</span>
            </div>
            <span className="text-[10px] uppercase tracking-wider opacity-80">Saved to Store</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="px-6 py-3 bg-[#FAF9F5] border-b border-[#E8E1D0] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setActiveTab("services");
                setEditingService(null);
                setIsCreatingNewService(false);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === "services"
                  ? "bg-[#111111] text-white shadow-xs"
                  : "bg-white text-[#555555] hover:text-[#111111] border border-[#E8E1D0]"
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Services ({services.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("quick-table");
                setEditingService(null);
                setIsCreatingNewService(false);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === "quick-table"
                  ? "bg-[#111111] text-white shadow-xs"
                  : "bg-white text-[#555555] hover:text-[#111111] border border-[#E8E1D0]"
              }`}
            >
              <DollarSign className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Quick Price Editor</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("packages");
                setEditingPackage(null);
                setIsCreatingNewPackage(false);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === "packages"
                  ? "bg-[#111111] text-white shadow-xs"
                  : "bg-white text-[#555555] hover:text-[#111111] border border-[#E8E1D0]"
              }`}
            >
              <Package className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Packages ({packages.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("categories");
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === "categories"
                  ? "bg-[#111111] text-white shadow-xs"
                  : "bg-white text-[#555555] hover:text-[#111111] border border-[#E8E1D0]"
              }`}
            >
              <FolderPlus className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Categories ({categories.length})</span>
            </button>
          </div>

          {activeTab === "services" && !isCreatingNewService && !editingService && (
            <button
              onClick={() => {
                setIsCreatingNewService(true);
                setEditingService({
                  id: `custom-srv-${Date.now()}`,
                  name: "",
                  categoryId: categories[1]?.id || "seo",
                  categoryName: categories[1]?.title || "SEO",
                  shortDesc: "",
                  startingPrice: "₹14,999",
                  priceNumeric: 14999,
                  currency: "₹",
                  billingType: "/month",
                  inclusions: ["Strategic Planning", "Execution Sprint", "Monthly Reporting"],
                  fullInclusions: [
                    "Step-by-Step Deliverables",
                    "Quality Assurance",
                    "Dedicated Account Manager",
                  ],
                  status: "active",
                  displayOrder: services.length + 1,
                  badge: "New Service",
                });
              }}
              className="px-4 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Service</span>
            </button>
          )}

          {activeTab === "packages" && !isCreatingNewPackage && !editingPackage && (
            <button
              onClick={() => {
                setIsCreatingNewPackage(true);
                setEditingPackage({
                  id: `custom-pkg-${Date.now()}`,
                  name: "",
                  startingPrice: "₹39,999",
                  priceNumeric: 39999,
                  billingPeriod: "/month",
                  tagline: "Custom digital growth package built for scalable performance.",
                  badge: "Special Package",
                  status: "active",
                  displayOrder: packages.length + 1,
                  features: [
                    "Dedicated Account Lead",
                    "Multi-Channel Strategy",
                    "Bi-Weekly Reporting",
                  ],
                  buttonText: "Get Started",
                });
              }}
              className="px-4 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Package</span>
            </button>
          )}
        </div>

        {/* Modal Main Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-[#FFFFFF]">
          {/* TAB 1: SERVICES VIEW & EDIT */}
          {activeTab === "services" && (
            <div>
              {/* If editing or creating service */}
              {isCreatingNewService || editingService ? (
                <ServiceEditorForm
                  service={editingService!}
                  categories={categories}
                  onCancel={() => {
                    setEditingService(null);
                    setIsCreatingNewService(false);
                  }}
                  onSave={handleSaveService}
                />
              ) : (
                <div className="space-y-4">
                  {/* Search & Filter Bar */}
                  <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pb-2 border-b border-[#E8E1D0]">
                    <div className="relative w-full sm:w-80">
                      <Search className="w-4 h-4 text-[#888888] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search service name, price..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1">
                      <span className="text-xs font-bold text-[#888888] whitespace-nowrap">
                        Filter Practice:
                      </span>
                      <select
                        value={selectedCategoryFilter}
                        onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                        className="px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-semibold text-[#111111] outline-none"
                      >
                        <option value="all">All Practices ({services.length})</option>
                        {categories
                          .filter((c) => c.id !== "all")
                          .map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.title}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  {/* Services Card Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredServices.map((srv) => (
                      <div
                        key={srv.id}
                        className={`rounded-xl border p-4 flex flex-col justify-between transition-all ${
                          srv.status === "hidden"
                            ? "bg-gray-50 border-gray-200 opacity-60"
                            : "bg-[#FAF9F5] border-[#E8E1D0] hover:border-[#D4AF37]"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16] font-heading">
                              {srv.categoryName || srv.categoryId}
                            </span>
                            <div className="flex items-center gap-1.5">
                              {srv.featured && (
                                <span className="text-[9px] bg-[#D4AF37] text-[#111111] font-bold px-1.5 py-0.2 rounded">
                                  Featured
                                </span>
                              )}
                              <span
                                className={`text-[9px] font-bold px-1.5 py-0.2 rounded uppercase ${
                                  srv.status === "active"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-gray-200 text-gray-700"
                                }`}
                              >
                                {srv.status}
                              </span>
                            </div>
                          </div>

                          <h4 className="text-base font-bold text-[#111111] font-heading">
                            {srv.name}
                          </h4>
                          <p className="text-xs text-[#666666] line-clamp-2 mt-1">
                            {srv.shortDesc}
                          </p>

                          {/* Price Tag */}
                          <div className="mt-3 p-2.5 rounded-lg bg-white border border-[#E8E1D0] flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#888888]">
                              Starting Price:
                            </span>
                            <div className="flex items-baseline gap-1">
                              <span className="text-lg font-bold text-[#111111] font-mono">
                                {srv.startingPrice}
                              </span>
                              <span className="text-xs text-[#777777] font-semibold">
                                {srv.billingType}
                              </span>
                            </div>
                          </div>

                          {/* Inclusions count */}
                          <div className="mt-2 text-[11px] text-[#666666]">
                            <strong>{srv.inclusions.length}</strong> core inclusions •{" "}
                            <strong>{srv.fullInclusions?.length || srv.inclusions.length}</strong>{" "}
                            total specs
                          </div>
                        </div>

                        {/* Controls */}
                        <div className="pt-3 mt-3 border-t border-[#E8E1D0] flex items-center justify-between gap-1">
                          <button
                            onClick={() => handleToggleFeatured(srv.id)}
                            className={`p-1.5 rounded-md border text-xs transition-colors ${
                              srv.featured
                                ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#9A7B16]"
                                : "bg-white border-[#E8E1D0] text-[#777777] hover:text-[#111111]"
                            }`}
                            title="Toggle Featured"
                          >
                            <Star className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => handleToggleServiceStatus(srv.id)}
                            className={`p-1.5 rounded-md border text-xs transition-colors ${
                              srv.status === "active"
                                ? "bg-white border-[#E8E1D0] text-[#555555] hover:text-[#111111]"
                                : "bg-amber-50 border-amber-200 text-amber-700"
                            }`}
                            title={
                              srv.status === "active"
                                ? "Hide from public view"
                                : "Show on public view"
                            }
                          >
                            {srv.status === "active" ? (
                              <Eye className="w-3.5 h-3.5" />
                            ) : (
                              <EyeOff className="w-3.5 h-3.5" />
                            )}
                          </button>

                          <button
                            onClick={() => setEditingService(srv)}
                            className="flex-1 py-1.5 px-2 rounded-md bg-[#111111] hover:bg-[#222222] text-white text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                          >
                            <Edit2 className="w-3 h-3 text-[#D4AF37]" />
                            <span>Edit Service</span>
                          </button>

                          <button
                            onClick={() => handleDeleteService(srv.id, srv.name)}
                            className="p-1.5 rounded-md bg-white border border-[#E8E1D0] hover:border-red-300 text-[#777777] hover:text-red-600 transition-colors"
                            title="Delete service"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: QUICK INLINE PRICE EDITOR TABLE */}
          {activeTab === "quick-table" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0]">
                <h4 className="text-sm font-bold text-[#111111] font-heading flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#D4AF37]" />
                  <span>Instant Price & Billing Editor</span>
                </h4>
                <p className="text-xs text-[#666666] mt-0.5">
                  Update any service rate directly in the input box below. Changes instantly save
                  and update all public cards and WhatsApp templates!
                </p>
              </div>

              <div className="border border-[#E8E1D0] rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#111111] text-white font-heading uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Service Name</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Starting Price</th>
                      <th className="py-3 px-4">Billing Unit</th>
                      <th className="py-3 px-4 text-center">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8E1D0]">
                    {services.map((srv) => (
                      <tr key={srv.id} className="hover:bg-[#FAF9F5] transition-colors">
                        <td className="py-2.5 px-4 font-semibold text-[#111111]">{srv.name}</td>
                        <td className="py-2.5 px-4 text-[#666666]">
                          <span className="bg-white px-2 py-0.5 rounded border border-[#E8E1D0] font-mono text-[10px]">
                            {srv.categoryName || srv.categoryId}
                          </span>
                        </td>
                        <td className="py-2.5 px-4">
                          <input
                            type="text"
                            defaultValue={srv.startingPrice}
                            onBlur={(e) => handleInlinePriceChange(srv.id, e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                (e.target as HTMLInputElement).blur();
                              }
                            }}
                            className="w-28 px-2 py-1 rounded bg-white border border-[#E8E1D0] font-bold font-mono text-xs focus:border-[#D4AF37] outline-none"
                          />
                        </td>
                        <td className="py-2.5 px-4">
                          <select
                            value={srv.billingType}
                            onChange={(e) => {
                              const updated = services.map((s) =>
                                s.id === srv.id
                                  ? { ...s, billingType: e.target.value as PricingBillingType }
                                  : s,
                              );
                              savePricingServices(updated);
                              onDataUpdated();
                              showToast(`Billing type updated for ${srv.name}`);
                            }}
                            className="px-2 py-1 rounded bg-white border border-[#E8E1D0] text-xs font-medium outline-none"
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
                        <td className="py-2.5 px-4 text-center">
                          <button
                            onClick={() => handleToggleServiceStatus(srv.id)}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              srv.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {srv.status}
                          </button>
                        </td>
                        <td className="py-2.5 px-4 text-right">
                          <button
                            onClick={() => {
                              setActiveTab("services");
                              setEditingService(srv);
                            }}
                            className="px-2.5 py-1 rounded bg-[#111111] text-white hover:bg-[#222222] font-semibold text-[11px] inline-flex items-center gap-1"
                          >
                            <Edit2 className="w-3 h-3 text-[#D4AF37]" />
                            <span>Edit Full</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: PACKAGES MANAGEMENT */}
          {activeTab === "packages" && (
            <div>
              {isCreatingNewPackage || editingPackage ? (
                <PackageEditorForm
                  pkg={editingPackage!}
                  onCancel={() => {
                    setEditingPackage(null);
                    setIsCreatingNewPackage(false);
                  }}
                  onSave={handleSavePackage}
                />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`rounded-xl border p-6 flex flex-col justify-between transition-all ${
                        pkg.popular
                          ? "border-2 border-[#D4AF37] bg-white shadow-md"
                          : "border-[#E8E1D0] bg-[#FAF9F5]"
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16] font-heading">
                            {pkg.badge || "Package"}
                          </span>
                          <button
                            onClick={() => handleTogglePackagePopular(pkg.id)}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase flex items-center gap-1 ${
                              pkg.popular
                                ? "bg-[#111111] text-[#D4AF37]"
                                : "bg-gray-200 text-gray-700"
                            }`}
                          >
                            <Star className="w-3 h-3" />
                            <span>{pkg.popular ? "Popular" : "Set Popular"}</span>
                          </button>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-[#111111] font-heading">
                            {pkg.name}
                          </h3>
                          <p className="text-xs text-[#666666] mt-1">{pkg.tagline}</p>
                        </div>

                        <div className="p-3 rounded-lg bg-white border border-[#E8E1D0]">
                          <span className="text-[10px] font-bold uppercase text-[#888888]">
                            Price:
                          </span>
                          <div className="text-2xl font-bold text-[#111111] font-mono">
                            {pkg.startingPrice}
                            <span className="text-xs font-normal text-[#666666] ml-1">
                              {pkg.billingPeriod}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <span className="text-[11px] font-bold uppercase text-[#111111]">
                            Features ({pkg.features.length}):
                          </span>
                          <ul className="space-y-1 text-xs text-[#555555]">
                            {pkg.features.map((f, i) => (
                              <li key={i} className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#9A7B16] shrink-0" />
                                <span className="truncate">{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 mt-6 border-t border-[#E8E1D0] flex items-center gap-2">
                        <button
                          onClick={() => setEditingPackage(pkg)}
                          className="flex-1 py-2 rounded-lg bg-[#111111] hover:bg-[#222222] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Edit2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>Edit Package</span>
                        </button>
                        <button
                          onClick={() => handleDeletePackage(pkg.id, pkg.name)}
                          className="p-2 rounded-lg border border-[#E8E1D0] hover:border-red-300 text-[#777777] hover:text-red-600 transition-colors"
                          title="Delete package"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: CATEGORIES MANAGEMENT */}
          {activeTab === "categories" && (
            <div className="space-y-6 max-w-4xl">
              {/* Add New Category Form */}
              <div className="p-5 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0] space-y-4">
                <h4 className="text-sm font-bold text-[#111111] font-heading flex items-center gap-2">
                  <FolderPlus className="w-4 h-4 text-[#D4AF37]" />
                  <span>Add New Pricing Category (e.g. AI Services, Influencer Marketing)</span>
                </h4>
                <form onSubmit={handleAddCategory} className="grid sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#444444] mb-1">
                      Category Title *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. AI Services"
                      value={newCategoryTitle}
                      onChange={(e) => setNewCategoryTitle(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#E8E1D0] text-xs font-semibold focus:border-[#D4AF37] outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#444444] mb-1">
                      Subtitle / Scope
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. AI Automation & Agents"
                      value={newCategorySubtitle}
                      onChange={(e) => setNewCategorySubtitle(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#E8E1D0] text-xs font-semibold focus:border-[#D4AF37] outline-none"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded-lg bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Plus className="w-4 h-4 text-[#D4AF37]" />
                      <span>Add Category</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Existing Categories Table */}
              <div className="border border-[#E8E1D0] rounded-xl overflow-hidden">
                <div className="px-4 py-3 bg-[#FAF9F5] border-b border-[#E8E1D0] font-bold text-xs text-[#111111] font-heading">
                  Active Catalogue Categories ({categories.length})
                </div>
                <div className="divide-y divide-[#E8E1D0]">
                  {categories.map((cat, idx) => (
                    <div
                      key={cat.id}
                      className="p-4 flex items-center justify-between hover:bg-[#FAF9F5] transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#9A7B16]">#{idx}</span>
                          <h5 className="text-sm font-bold text-[#111111] font-heading">
                            {cat.title}
                          </h5>
                          <span className="text-[10px] bg-white border border-[#E8E1D0] px-2 py-0.5 rounded font-mono text-[#777777]">
                            id: {cat.id}
                          </span>
                        </div>
                        <p className="text-xs text-[#666666] mt-0.5">{cat.subtitle}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#777777]">
                          {services.filter((s) => s.categoryId === cat.id).length} services assigned
                        </span>
                        {cat.id !== "all" && (
                          <button
                            onClick={() => handleDeleteCategory(cat.id, cat.title)}
                            className="p-1.5 rounded-md text-[#888888] hover:text-red-600 hover:bg-white border border-transparent hover:border-red-200 transition-colors"
                            title="Delete category"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#FAF9F5] border-t border-[#E8E1D0] flex items-center justify-between text-xs text-[#666666]">
          <span>
            Changes made in this Admin Panel are immediately saved to the browser and update the
            live Pricing Page.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#111111] text-white font-bold text-xs uppercase tracking-wider"
          >
            Close Admin Panel
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Service Editor Form Component
// ============================================================================
interface ServiceEditorFormProps {
  service: PricingServiceCatalogueItem;
  categories: PricingCategoryMeta[];
  onCancel: () => void;
  onSave: (service: PricingServiceCatalogueItem) => void;
}

const ServiceEditorForm: React.FC<ServiceEditorFormProps> = ({
  service,
  categories,
  onCancel,
  onSave,
}) => {
  const [formData, setFormData] = useState<PricingServiceCatalogueItem>({
    ...service,
    fullInclusions: service.fullInclusions || service.inclusions,
  });
  const [inclusionsText, setInclusionsText] = useState(service.inclusions.join("\n"));
  const [fullInclusionsText, setFullInclusionsText] = useState(
    (service.fullInclusions || service.inclusions).join("\n"),
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const incArray = inclusionsText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    const fullIncArray = fullInclusionsText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    const priceNumeric = parseInt(formData.startingPrice.replace(/[^0-9]/g, ""), 10) || 0;
    const formattedPrice = formData.startingPrice.startsWith("₹")
      ? formData.startingPrice
      : `₹${formData.startingPrice}`;

    const updatedCat = categories.find((c) => c.id === formData.categoryId);

    const finalService: PricingServiceCatalogueItem = {
      ...formData,
      startingPrice: formattedPrice,
      priceNumeric,
      categoryName: updatedCat?.title || formData.categoryName || formData.categoryId,
      inclusions: incArray.length > 0 ? incArray : ["Scope Consultation", "Agile Execution"],
      fullInclusions: fullIncArray.length > 0 ? fullIncArray : incArray,
      whatsappMessage:
        formData.whatsappMessage ||
        `Hello, I am interested in ${formData.name} (${formattedPrice}${formData.billingType}). Please share more details and a quotation.`,
    };

    onSave(finalService);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto p-2">
      <div className="flex items-center justify-between pb-4 border-b border-[#E8E1D0]">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16]">
            Service Editor
          </span>
          <h3 className="text-xl font-bold text-[#111111] font-heading">
            {formData.name ? `Editing: ${formData.name}` : "Create New Service"}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border border-[#E8E1D0] text-xs font-semibold text-[#666666] hover:bg-[#FAF9F5]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
          >
            <Save className="w-4 h-4" />
            <span>Save Service</span>
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#111111] mb-1">Service Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Advanced SEO Services"
            className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#111111] mb-1">Category *</label>
          <select
            value={formData.categoryId}
            onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
            className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] outline-none"
          >
            {categories
              .filter((c) => c.id !== "all")
              .map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#111111] mb-1">
            Starting Price (e.g. ₹14,999) *
          </label>
          <input
            type="text"
            required
            value={formData.startingPrice}
            onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
            placeholder="₹14,999"
            className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-mono font-bold focus:border-[#D4AF37] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#111111] mb-1">Billing Type *</label>
          <select
            value={formData.billingType}
            onChange={(e) =>
              setFormData({ ...formData, billingType: e.target.value as PricingBillingType })
            }
            className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] outline-none"
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
      </div>

      <div>
        <label className="block text-xs font-bold text-[#111111] mb-1">
          Short Description (Card Summary) *
        </label>
        <textarea
          rows={2}
          required
          value={formData.shortDesc}
          onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
          placeholder="Brief 1-2 sentence description appearing on the main card."
          className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] outline-none"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#111111] mb-1">
            Key Inclusions (1 per line, 3–6 items)
          </label>
          <textarea
            rows={5}
            value={inclusionsText}
            onChange={(e) => setInclusionsText(e.target.value)}
            placeholder="Keyword Research&#10;On-Page SEO&#10;Technical Checks"
            className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] outline-none font-mono"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#111111] mb-1">
            Full Inclusions / Extended Specs (1 per line)
          </label>
          <textarea
            rows={5}
            value={fullInclusionsText}
            onChange={(e) => setFullInclusionsText(e.target.value)}
            placeholder="Commercial Keyword Discovery&#10;Title, Meta & Header Optimization&#10;Core Web Vitals Remediation"
            className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] outline-none font-mono"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 pt-2">
        <div>
          <label className="block text-xs font-bold text-[#111111] mb-1">Badge (Optional)</label>
          <input
            type="text"
            value={formData.badge || ""}
            onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
            placeholder="e.g. Core Organic, Popular"
            className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#111111] mb-1">Status</label>
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value as "active" | "hidden" })
            }
            className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] outline-none"
          >
            <option value="active">Active (Visible)</option>
            <option value="hidden">Hidden (Draft)</option>
          </select>
        </div>

        <div className="flex items-center gap-3 pt-5">
          <label className="flex items-center gap-2 text-xs font-bold text-[#111111] cursor-pointer">
            <input
              type="checkbox"
              checked={!!formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="accent-[#D4AF37] w-4 h-4"
            />
            <span>Mark as Featured</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#111111] mb-1">
          Custom WhatsApp Inquiry Message
        </label>
        <input
          type="text"
          value={formData.whatsappMessage || ""}
          onChange={(e) => setFormData({ ...formData, whatsappMessage: e.target.value })}
          placeholder={`Hello, I am interested in ${formData.name || "this service"}. Please share more details and a quotation.`}
          className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] outline-none"
        />
      </div>

      <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E8E1D0]">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 rounded-lg border border-[#E8E1D0] text-xs font-semibold text-[#666666] hover:bg-[#FAF9F5]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 rounded-lg bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm"
        >
          <Save className="w-4 h-4 text-[#D4AF37]" />
          <span>Publish Changes</span>
        </button>
      </div>
    </form>
  );
};

// ============================================================================
// Package Editor Form Component
// ============================================================================
interface PackageEditorFormProps {
  pkg: PricingPackageCatalogueItem;
  onCancel: () => void;
  onSave: (pkg: PricingPackageCatalogueItem) => void;
}

const PackageEditorForm: React.FC<PackageEditorFormProps> = ({ pkg, onCancel, onSave }) => {
  const [formData, setFormData] = useState<PricingPackageCatalogueItem>({ ...pkg });
  const [featuresText, setFeaturesText] = useState(pkg.features.join("\n"));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const featArray = featuresText
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    const priceNumeric = parseInt(formData.startingPrice.replace(/[^0-9]/g, ""), 10) || 0;
    const formattedPrice = formData.startingPrice.startsWith("₹")
      ? formData.startingPrice
      : `₹${formData.startingPrice}`;

    onSave({
      ...formData,
      startingPrice: formattedPrice,
      priceNumeric,
      features: featArray.length > 0 ? featArray : ["Strategy Blueprint", "Executive Execution"],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto p-2">
      <div className="flex items-center justify-between pb-4 border-b border-[#E8E1D0]">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16]">
            Package Editor
          </span>
          <h3 className="text-xl font-bold text-[#111111] font-heading">
            {formData.name ? `Editing: ${formData.name}` : "Create New Retainer Package"}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border border-[#E8E1D0] text-xs font-semibold text-[#666666]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
          >
            <Save className="w-4 h-4" />
            <span>Save Package</span>
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#111111] mb-1">Package Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Business Growth Package"
            className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#111111] mb-1">
            Badge / Tag (e.g. Most Popular)
          </label>
          <input
            type="text"
            value={formData.badge || ""}
            onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
            placeholder="e.g. Most Popular, Enterprise Scale"
            className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#111111] mb-1">
            Starting Price (e.g. ₹49,999) *
          </label>
          <input
            type="text"
            required
            value={formData.startingPrice}
            onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
            placeholder="₹49,999"
            className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-mono font-bold focus:border-[#D4AF37] outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#111111] mb-1">Billing Period *</label>
          <input
            type="text"
            required
            value={formData.billingPeriod}
            onChange={(e) => setFormData({ ...formData, billingPeriod: e.target.value })}
            placeholder="e.g. /month or One-Time Kickoff"
            className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#111111] mb-1">Tagline / Summary</label>
        <textarea
          rows={2}
          value={formData.tagline}
          onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
          placeholder="Brief description of who this package is for."
          className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-[#111111] mb-1">
          Package Features (1 per line)
        </label>
        <textarea
          rows={6}
          value={featuresText}
          onChange={(e) => setFeaturesText(e.target.value)}
          placeholder="Social Media Management&#10;20 Posts&#10;8 Reels&#10;Meta Ads Management"
          className="w-full px-3 py-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs font-medium focus:border-[#D4AF37] outline-none font-mono"
        />
      </div>

      <div className="flex items-center gap-6 pt-2">
        <label className="flex items-center gap-2 text-xs font-bold text-[#111111] cursor-pointer">
          <input
            type="checkbox"
            checked={!!formData.popular}
            onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
            className="accent-[#D4AF37] w-4 h-4"
          />
          <span>Mark as &quot;Most Popular&quot;</span>
        </label>

        <label className="flex items-center gap-2 text-xs font-bold text-[#111111] cursor-pointer">
          <input
            type="checkbox"
            checked={formData.status === "active"}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.checked ? "active" : "hidden" })
            }
            className="accent-[#D4AF37] w-4 h-4"
          />
          <span>Active (Visible on public pricing)</span>
        </label>
      </div>

      <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E8E1D0]">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 rounded-lg border border-[#E8E1D0] text-xs font-semibold text-[#666666]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 rounded-lg bg-[#111111] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm"
        >
          <Save className="w-4 h-4 text-[#D4AF37]" />
          <span>Publish Package</span>
        </button>
      </div>
    </form>
  );
};
