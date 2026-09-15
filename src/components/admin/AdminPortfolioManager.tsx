import React, { useState, useEffect } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  Search,
  Filter,
  Save,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Globe,
  Tag,
  CheckCircle2,
  Briefcase,
  Layers,
  AlertCircle,
  FolderPlus,
  Upload,
  Image as ImageIcon,
  X,
  TrendingUp,
  Folder,
  ArrowRight,
} from "lucide-react";
import { PortfolioItem, PortfolioProjectType, PricingServiceCatalogueItem } from "../../types";
import {
  PortfolioCategoryMeta,
  loadStoredPortfolioCategories,
  saveStoredPortfolioCategories,
  resetPortfolioCategoriesToDefaults,
} from "../../data/portfolioData";

interface AdminPortfolioManagerProps {
  portfolioItems: PortfolioItem[];
  services: PricingServiceCatalogueItem[];
  onSaveItem: (item: PortfolioItem) => void;
  onDeleteItem: (id: string, title: string) => void;
  onToggleVisibility: (id: string) => void;
  onResetDefaults: () => void;
  showToast: (msg: string) => void;
}

export const AdminPortfolioManager: React.FC<AdminPortfolioManagerProps> = ({
  portfolioItems,
  services,
  onSaveItem,
  onDeleteItem,
  onToggleVisibility,
  onResetDefaults,
  showToast,
}) => {
  const [categories, setCategories] = useState<PortfolioCategoryMeta[]>(() => {
    return loadStoredPortfolioCategories();
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all");
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("all");

  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  // Category Manager Modal
  const [isManagingCategories, setIsManagingCategories] = useState(false);
  const [newCatLabel, setNewCatLabel] = useState("");
  const [newCatBadge, setNewCatBadge] = useState("");
  const [editingCat, setEditingCat] = useState<PortfolioCategoryMeta | null>(null);

  useEffect(() => {
    const handleStorage = () => {
      setCategories(loadStoredPortfolioCategories());
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleSaveCategories = (updated: PortfolioCategoryMeta[], msg = "Categories updated!") => {
    setCategories(updated);
    saveStoredPortfolioCategories(updated);
    window.dispatchEvent(new Event("storage"));
    showToast(msg);
  };

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatLabel.trim()) return;

    const slug = newCatLabel.trim();
    const exists = categories.some(
      (c) =>
        c.id.toLowerCase() === slug.toLowerCase() || c.label.toLowerCase() === slug.toLowerCase(),
    );
    if (exists) {
      alert("A category with this name already exists.");
      return;
    }

    const newCat: PortfolioCategoryMeta = {
      id: slug,
      label: slug,
      badge: newCatBadge.trim() || "Custom Category",
      displayOrder: categories.length + 1,
    };

    const updated = [...categories, newCat];
    handleSaveCategories(updated, `Category "${slug}" added successfully!`);
    setNewCatLabel("");
    setNewCatBadge("");
  };

  const handleDeleteCategory = (catId: string, label: string) => {
    if (
      window.confirm(
        `Are you sure you want to remove the category "${label}"? Existing projects will remain intact.`,
      )
    ) {
      const updated = categories.filter((c) => c.id !== catId);
      handleSaveCategories(updated, `Category "${label}" deleted.`);
      if (selectedCategoryFilter === catId) {
        setSelectedCategoryFilter("all");
      }
    }
  };

  const handleResetCategories = () => {
    if (window.confirm("Reset all categories to factory defaults?")) {
      const defaults = resetPortfolioCategoriesToDefaults();
      setCategories(defaults);
      window.dispatchEvent(new Event("storage"));
      showToast("Portfolio categories reset to factory defaults.");
    }
  };

  const filteredItems = portfolioItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.industry.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCat =
      selectedCategoryFilter === "all" ||
      item.categoryId.toLowerCase() === selectedCategoryFilter.toLowerCase() ||
      item.category.toLowerCase() === selectedCategoryFilter.toLowerCase() ||
      (item.categoryName &&
        item.categoryName.toLowerCase() === selectedCategoryFilter.toLowerCase());

    const matchesType = selectedTypeFilter === "all" || item.projectType === selectedTypeFilter;

    return matchesSearch && matchesCat && matchesType;
  });

  const handleStartCreate = () => {
    const defaultCat = categories[0]?.id || "Websites";
    const newItem: PortfolioItem = {
      id: `project-${Date.now()}`,
      title: "",
      projectType: "demo_project",
      badge: "Demo Project",
      clientName: "",
      industry: "General Business",
      categoryId: defaultCat,
      categoryName: defaultCat,
      category: defaultCat,
      relatedServiceIds: [],
      relatedServiceNames: [],
      websiteUrl: "",
      displayUrl: "",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      summary: "",
      challenge: "",
      strategy: "",
      deliverables: [
        "Custom Strategy & Wireframing",
        "Asset Creation & Deployment",
        "Quality Review & Launch",
      ],
      metrics: [
        {
          label: "Growth Lift",
          value: "+180%",
          description: "Measurable improvement in conversion",
        },
        { label: "Inquiry Rate", value: "4.8%", description: "Qualified inquiries generated" },
        { label: "ROI Benchmark", value: "3.6x", description: "Average client return on ad spend" },
      ],
      status: "active",
      displayOrder: portfolioItems.length + 1,
      featured: false,
    };
    setEditingItem(newItem);
    setIsCreatingNew(true);
  };

  return (
    <div className="space-y-6">
      {/* Editor Modal / Inline Form */}
      {editingItem && (
        <PortfolioEditForm
          item={editingItem}
          isNew={isCreatingNew}
          categories={categories}
          services={services}
          onSave={(savedItem) => {
            onSaveItem(savedItem);
            setEditingItem(null);
            setIsCreatingNew(false);
          }}
          onCancel={() => {
            setEditingItem(null);
            setIsCreatingNew(false);
          }}
          onAddNewCategory={(catName) => {
            if (!catName.trim()) return;
            const newCat: PortfolioCategoryMeta = {
              id: catName.trim(),
              label: catName.trim(),
              badge: "Custom Category",
              displayOrder: categories.length + 1,
            };
            handleSaveCategories([...categories, newCat], `Category "${catName}" added!`);
          }}
        />
      )}

      {/* Category Management Modal */}
      {isManagingCategories && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in overflow-y-auto">
          <div className="relative w-full max-w-xl bg-[#181818] border border-[#D4AF37]/50 rounded-2xl p-6 shadow-2xl my-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A] mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Folder className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading">
                    Manage Portfolio Categories
                  </h3>
                  <p className="text-xs text-[#888888]">
                    Add, edit, or remove categories shown on the portfolio page
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsManagingCategories(false)}
                className="p-1.5 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-[#888888] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Add New Category Form */}
            <form
              onSubmit={handleAddCategory}
              className="p-4 rounded-xl bg-[#111111] border border-[#2A2A2A] space-y-3 mb-5"
            >
              <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                Add New Category
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={newCatLabel}
                  onChange={(e) => setNewCatLabel(e.target.value)}
                  placeholder="Category Name (e.g. Mobile Apps)"
                  className="px-3 py-2 rounded-lg bg-[#181818] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                />
                <input
                  type="text"
                  value={newCatBadge}
                  onChange={(e) => setNewCatBadge(e.target.value)}
                  placeholder="Subtitle / Badge (e.g. iOS & Android)"
                  className="px-3 py-2 rounded-lg bg-[#181818] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Category</span>
                </button>
              </div>
            </form>

            {/* Existing Categories List */}
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              <div className="text-xs font-bold text-[#888888] uppercase tracking-wider mb-2">
                Active Categories ({categories.length})
              </div>
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="p-3 rounded-xl bg-[#141414] border border-[#2A2A2A] flex items-center justify-between gap-3"
                >
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <span>{cat.label}</span>
                      {cat.badge && (
                        <span className="text-[10px] font-normal px-2 py-0.5 rounded bg-[#222222] text-[#D4AF37] border border-[#D4AF37]/20">
                          {cat.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-[#666666] font-mono mt-0.5">ID: {cat.id}</div>
                  </div>

                  <button
                    onClick={() => handleDeleteCategory(cat.id, cat.label)}
                    className="p-1.5 rounded-lg bg-[#222222] hover:bg-red-950 text-red-400 border border-[#333333] hover:border-red-800 transition-colors"
                    title="Delete Category"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-5 pt-4 border-t border-[#2A2A2A] flex items-center justify-between">
              <button
                type="button"
                onClick={handleResetCategories}
                className="text-xs text-[#888888] hover:text-white flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Default Categories</span>
              </button>

              <button
                type="button"
                onClick={() => setIsManagingCategories(false)}
                className="px-4 py-2 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-white text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Banner Card */}
      <div className="p-6 rounded-2xl bg-[#181818] border border-[#2A2A2A] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Portfolio & Case Studies Roster</span>
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">
            Portfolio Projects & Category Manager
          </h2>
          <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1">
            Manage projects category-wise, upload images, add live links, and customize deliverables
            and performance metrics.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setIsManagingCategories(true)}
            className="px-3.5 py-2.5 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-bold transition-all flex items-center gap-2"
          >
            <FolderPlus className="w-4 h-4" />
            <span>Manage Categories ({categories.length})</span>
          </button>

          <button
            onClick={handleStartCreate}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89628] hover:from-[#E5C158] hover:to-[#D4AF37] text-[#111111] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Project</span>
          </button>

          <button
            onClick={onResetDefaults}
            className="px-3.5 py-2.5 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] text-[#A0A0A0] hover:text-white border border-[#333333] text-xs font-semibold transition-all flex items-center gap-1.5"
            title="Reset Portfolio to Factory Defaults"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>

      {/* Category Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedCategoryFilter("all")}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
            selectedCategoryFilter === "all"
              ? "bg-[#D4AF37] text-[#111111] border-[#D4AF37] shadow-sm"
              : "bg-[#181818] text-[#888888] hover:text-white border-[#2A2A2A] hover:border-[#333333]"
          }`}
        >
          All Categories ({portfolioItems.length})
        </button>

        {categories.map((cat) => {
          const count = portfolioItems.filter(
            (p) =>
              p.categoryId.toLowerCase() === cat.id.toLowerCase() ||
              p.category.toLowerCase() === cat.id.toLowerCase() ||
              (p.categoryName && p.categoryName.toLowerCase() === cat.id.toLowerCase()),
          ).length;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryFilter(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 ${
                selectedCategoryFilter === cat.id
                  ? "bg-[#D4AF37] text-[#111111] border-[#D4AF37] shadow-sm"
                  : "bg-[#181818] text-[#888888] hover:text-white border-[#2A2A2A] hover:border-[#333333]"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategoryFilter === cat.id
                    ? "bg-[#111111]/20 text-[#111111]"
                    : "bg-[#222222] text-[#888888]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search & Secondary Filter Bar */}
      <div className="p-4 rounded-xl bg-[#181818] border border-[#2A2A2A] flex flex-col md:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#777777]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by title, client, summary, industry..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs placeholder-[#666666] focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <select
            value={selectedTypeFilter}
            onChange={(e) => setSelectedTypeFilter(e.target.value)}
            className="px-3 py-2 rounded-lg bg-[#111111] border border-[#333333] text-xs text-white focus:border-[#D4AF37] focus:outline-none"
          >
            <option value="all">All Project Types</option>
            <option value="live_client">Live Client Websites</option>
            <option value="demo_project">Demo Projects</option>
            <option value="sample_project">Sample Projects</option>
            <option value="case_study">Case Studies</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.length === 0 ? (
          <div className="col-span-full p-12 text-center rounded-2xl bg-[#181818] border border-[#2A2A2A] text-[#888888]">
            <Briefcase className="w-8 h-8 mx-auto mb-2 text-[#444444]" />
            <p className="text-sm font-semibold">
              No portfolio projects found matching your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategoryFilter("all");
                setSelectedTypeFilter("all");
              }}
              className="mt-3 text-xs text-[#D4AF37] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isHidden = item.status === "hidden";
            return (
              <div
                key={item.id}
                className={`rounded-2xl bg-[#181818] border overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-md ${
                  isHidden
                    ? "border-[#333333] opacity-60"
                    : "border-[#2A2A2A] hover:border-[#D4AF37]/50"
                }`}
              >
                {/* Project Image Header */}
                <div className="relative h-44 bg-[#111111] overflow-hidden group">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-black/70 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-xs">
                      {item.categoryName || item.category || "Portfolio"}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded backdrop-blur-xs ${
                        item.projectType === "live_client"
                          ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/40"
                          : "bg-black/60 text-white border border-white/20"
                      }`}
                    >
                      {item.badge || "Demo"}
                    </span>
                  </div>

                  {/* Client & Industry in Image Bottom */}
                  <div className="absolute bottom-2 left-3 right-3">
                    <span className="text-[11px] font-bold text-white drop-shadow-md truncate block">
                      {item.clientName}
                    </span>
                    <span className="text-[10px] text-[#D4AF37] font-semibold drop-shadow-md">
                      {item.industry}
                    </span>
                  </div>
                </div>

                {/* Project Body Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-sm font-bold text-white font-heading line-clamp-1 hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#888888] line-clamp-2 mt-1 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Primary Metric Preview */}
                  {item.metrics && item.metrics.length > 0 && (
                    <div className="p-2.5 rounded-xl bg-[#111111] border border-[#2A2A2A] flex items-center justify-between text-xs">
                      <span className="text-[#888888] font-medium truncate">
                        {item.metrics[0].label}:
                      </span>
                      <span className="text-[#D4AF37] font-bold">{item.metrics[0].value}</span>
                    </div>
                  )}

                  {/* Live Website Link if exists */}
                  {item.websiteUrl && (
                    <div className="flex items-center gap-1.5 text-[11px] text-[#A0A0A0]">
                      <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span className="truncate">{item.displayUrl || item.websiteUrl}</span>
                    </div>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="p-3 bg-[#141414] border-t border-[#2A2A2A] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {isHidden ? (
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-red-950/60 text-red-400 border border-red-800/40">
                        Hidden
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                        Active
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onToggleVisibility(item.id)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isHidden
                          ? "bg-[#222222] text-amber-400 border-amber-800/40 hover:bg-[#2A2A2A]"
                          : "bg-[#222222] text-emerald-400 border-emerald-800/40 hover:bg-[#2A2A2A]"
                      }`}
                      title={isHidden ? "Show on website" : "Hide from website"}
                    >
                      {isHidden ? (
                        <EyeOff className="w-3.5 h-3.5" />
                      ) : (
                        <Eye className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <button
                      onClick={() => {
                        setEditingItem({ ...item });
                        setIsCreatingNew(false);
                      }}
                      className="p-1.5 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-[#D4AF37] border border-[#333333] transition-colors"
                      title="Edit Project"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onDeleteItem(item.id, item.title)}
                      className="p-1.5 rounded-lg bg-[#222222] hover:bg-red-950/80 text-red-400 border border-[#333333] hover:border-red-800/60 transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

// ==========================================
// Portfolio Edit & Create Modal Form
// ==========================================

interface PortfolioEditFormProps {
  item: PortfolioItem;
  isNew: boolean;
  categories: PortfolioCategoryMeta[];
  services: PricingServiceCatalogueItem[];
  onSave: (item: PortfolioItem) => void;
  onCancel: () => void;
  onAddNewCategory: (catName: string) => void;
}

const PortfolioEditForm: React.FC<PortfolioEditFormProps> = ({
  item,
  isNew,
  categories,
  services,
  onSave,
  onCancel,
  onAddNewCategory,
}) => {
  const [formData, setFormData] = useState<PortfolioItem>({ ...item });
  const [deliverablesText, setDeliverablesText] = useState(item.deliverables?.join("\n") || "");
  const [quickNewCatInput, setQuickNewCatInput] = useState("");
  const [showQuickAddCat, setShowQuickAddCat] = useState(false);

  // Sample hero presets
  const samplePresets = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        alert("File size exceeds 3MB. Please choose a smaller image or use an image URL.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result && typeof event.target.result === "string") {
          setFormData({
            ...formData,
            imageUrl: event.target.result,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMetricChange = (
    index: number,
    field: "label" | "value" | "description",
    val: string,
  ) => {
    const metrics = [...(formData.metrics || [])];
    if (metrics[index]) {
      metrics[index] = { ...metrics[index], [field]: val };
      setFormData({ ...formData, metrics });
    }
  };

  const handleAddMetric = () => {
    const metrics = [...(formData.metrics || [])];
    metrics.push({ label: "New Metric", value: "+100%", description: "Outcome" });
    setFormData({ ...formData, metrics });
  };

  const handleRemoveMetric = (index: number) => {
    const metrics = [...(formData.metrics || [])];
    metrics.splice(index, 1);
    setFormData({ ...formData, metrics });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert("Please enter a project title.");
      return;
    }
    if (!formData.clientName.trim()) {
      alert("Please enter a client or brand name.");
      return;
    }

    const deliverables = deliverablesText
      .split("\n")
      .map((d) => d.trim())
      .filter(Boolean);

    const saved: PortfolioItem = {
      ...formData,
      deliverables: deliverables.length > 0 ? deliverables : ["Dedicated Execution"],
    };

    onSave(saved);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#181818] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-2xl my-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-heading">
                {isNew ? "Add New Portfolio Project" : `Edit Project: ${formData.title}`}
              </h3>
              <p className="text-xs text-[#888888]">
                Configure project details, cover visuals, client deliverables, and verifiable
                metrics.
              </p>
            </div>
          </div>
          <button
            onClick={onCancel}
            className="p-2 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-[#888888] hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1: Title & Client Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                Project Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Skyline Luxury Villa Lead Generation & Web Portal"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                Client / Brand Name *
              </label>
              <input
                type="text"
                required
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                placeholder="e.g. Skyline Luxury Properties"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2: Category, Project Type, Industry */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Category *
                </label>
                <button
                  type="button"
                  onClick={() => setShowQuickAddCat(!showQuickAddCat)}
                  className="text-[10px] text-[#D4AF37] hover:underline"
                >
                  {showQuickAddCat ? "Cancel" : "+ New Category"}
                </button>
              </div>

              {showQuickAddCat ? (
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    value={quickNewCatInput}
                    onChange={(e) => setQuickNewCatInput(e.target.value)}
                    placeholder="New category name..."
                    className="w-full px-3 py-2 rounded-lg bg-[#111111] border border-[#D4AF37] text-white text-xs focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (quickNewCatInput.trim()) {
                        onAddNewCategory(quickNewCatInput.trim());
                        setFormData({
                          ...formData,
                          categoryId: quickNewCatInput.trim(),
                          categoryName: quickNewCatInput.trim(),
                          category: quickNewCatInput.trim(),
                        });
                        setQuickNewCatInput("");
                        setShowQuickAddCat(false);
                      }
                    }}
                    className="px-2.5 py-2 rounded-lg bg-[#D4AF37] text-black font-bold text-xs shrink-0"
                  >
                    Add
                  </button>
                </div>
              ) : (
                <select
                  value={formData.categoryId || formData.category}
                  onChange={(e) => {
                    const selectedVal = e.target.value;
                    const matched = categories.find((c) => c.id === selectedVal);
                    const label = matched?.label || selectedVal;
                    setFormData({
                      ...formData,
                      categoryId: selectedVal,
                      categoryName: label,
                      category: selectedVal,
                    });
                  }}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                Project Type / Badge
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => {
                  const pType = e.target.value as PortfolioProjectType;
                  let badge = "Sample Project";
                  if (pType === "live_client") badge = "Live Client Website";
                  if (pType === "demo_project") badge = "Demo Project";
                  if (pType === "case_study") badge = "Case Study";
                  setFormData({ ...formData, projectType: pType, badge });
                }}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
              >
                <option value="live_client">Live Client Website</option>
                <option value="demo_project">Demo Project</option>
                <option value="sample_project">Sample Project</option>
                <option value="case_study">Case Study</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                Industry / Niche *
              </label>
              <input
                type="text"
                required
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                placeholder="e.g. Real Estate, Healthcare, D2C"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          {/* Row 3: Image Management (URL + File Upload + Presets) */}
          <div className="p-4 rounded-xl bg-[#111111] border border-[#2A2A2A] space-y-3">
            <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
              Project Cover Image (URL or Upload File) *
            </label>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {formData.imageUrl ? (
                <img
                  loading="lazy"
                  decoding="async"
                  src={formData.imageUrl}
                  alt="Preview"
                  className="w-24 h-16 rounded-xl object-cover border-2 border-[#D4AF37] shrink-0 shadow-md"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-24 h-16 rounded-xl bg-[#222222] border-2 border-[#333333] flex items-center justify-center text-[#888888] shrink-0">
                  <ImageIcon className="w-6 h-6" />
                </div>
              )}

              <div className="flex-1 w-full space-y-2">
                <input
                  type="text"
                  required
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="Paste Image URL (https://...)"
                  className="w-full px-3.5 py-2 rounded-lg bg-[#181818] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                />

                <div className="flex items-center gap-2">
                  <label className="px-3 py-1.5 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-[#D4AF37] border border-[#333333] text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Image File</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  <span className="text-[11px] text-[#777777]">PNG, JPG, WebP up to 3MB</span>
                </div>
              </div>
            </div>

            {/* Quick Hero Image Presets */}
            <div>
              <div className="text-[11px] font-semibold text-[#888888] mb-1.5">
                Or Choose Quick Mockup Preset:
              </div>
              <div className="grid grid-cols-6 gap-2">
                {samplePresets.map((preset, idx) => (
                  <img
                    loading="lazy"
                    decoding="async"
                    key={idx}
                    src={preset}
                    alt={`Preset ${idx + 1}`}
                    onClick={() => setFormData({ ...formData, imageUrl: preset })}
                    className={`h-10 w-full rounded-lg object-cover cursor-pointer border transition-all ${
                      formData.imageUrl === preset
                        ? "border-[#D4AF37] scale-105 shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Row 4: URLs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                Live Website / Demo URL (Optional)
              </label>
              <input
                type="url"
                value={formData.websiteUrl || ""}
                onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                placeholder="e.g. https://www.skylineluxury.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                Display URL Text (Optional)
              </label>
              <input
                type="text"
                value={formData.displayUrl || ""}
                onChange={(e) => setFormData({ ...formData, displayUrl: e.target.value })}
                placeholder="e.g. www.skylineluxury.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          {/* Row 5: Executive Summary */}
          <div>
            <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
              Executive Summary / Overview *
            </label>
            <textarea
              rows={2}
              required
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              placeholder="Brief 1-2 sentence overview of the project and core achievements."
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none leading-relaxed"
            />
          </div>

          {/* Row 6: Challenge & Strategy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                The Challenge / Obstacle
              </label>
              <textarea
                rows={3}
                value={formData.challenge || ""}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                placeholder="What was the client's bottleneck or goal?"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                Strategy & Execution Blueprint
              </label>
              <textarea
                rows={3}
                value={formData.strategy || ""}
                onChange={(e) => setFormData({ ...formData, strategy: e.target.value })}
                placeholder="What methodology and solutions did we build?"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none leading-relaxed"
              />
            </div>
          </div>

          {/* Row 7: Deliverables & Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                Deliverables List (One per line)
              </label>
              <textarea
                rows={4}
                value={deliverablesText}
                onChange={(e) => setDeliverablesText(e.target.value)}
                placeholder="Custom Responsive UI&#10;Google Ads Campaign Setup&#10;WhatsApp Lead Integration"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs font-mono focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            {/* Metrics Editor */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Performance Metrics
                </label>
                <button
                  type="button"
                  onClick={handleAddMetric}
                  className="text-[10px] text-[#D4AF37] hover:underline"
                >
                  + Add Metric
                </button>
              </div>

              <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                {formData.metrics?.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-lg bg-[#111111] border border-[#2A2A2A] flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={m.label}
                      onChange={(e) => handleMetricChange(idx, "label", e.target.value)}
                      placeholder="Label (e.g. ROAS)"
                      className="w-1/3 px-2 py-1 rounded bg-[#181818] border border-[#333333] text-white text-xs"
                    />
                    <input
                      type="text"
                      value={m.value}
                      onChange={(e) => handleMetricChange(idx, "value", e.target.value)}
                      placeholder="Value (e.g. 4.2x)"
                      className="w-1/3 px-2 py-1 rounded bg-[#181818] border border-[#333333] text-[#D4AF37] font-bold text-xs"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveMetric(idx)}
                      className="p-1 text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#2A2A2A]">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2.5 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] text-[#A0A0A0] hover:text-white text-xs font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89628] hover:from-[#E5C158] hover:to-[#D4AF37] text-[#111111] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>{isNew ? "Create Project" : "Save Changes"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
