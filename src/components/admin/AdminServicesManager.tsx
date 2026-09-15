import React, { useState } from "react";
import {
  Sparkles,
  Plus,
  Edit2,
  Trash2,
  Save,
  RotateCcw,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  Search,
  Layers,
  DollarSign,
  Image,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileText,
  HelpCircle,
  Globe,
  Settings,
  ExternalLink,
  Upload,
  ImageIcon,
} from "lucide-react";
import {
  MainServiceCatalogueItem,
  loadStoredMainServices,
  saveStoredMainServices,
  resetMainServicesToFactoryDefaults,
  DEFAULT_MAIN_SERVICES,
} from "../../data/servicesData";
import { ServiceItem } from "../../types";

export const AdminServicesManager: React.FC = () => {
  const [mainServices, setMainServices] = useState<MainServiceCatalogueItem[]>(() => {
    return loadStoredMainServices();
  });

  const [selectedServiceId, setSelectedServiceId] = useState<string>(mainServices[0]?.id || "");
  const [searchQuery, setSearchQuery] = useState("");
  const [saveSuccessMsg, setSaveSuccessMsg] = useState("");

  // Editing state for Main Service
  const [editingMainService, setEditingMainService] = useState<MainServiceCatalogueItem | null>(
    null,
  );
  const [isCreatingMainService, setIsCreatingMainService] = useState(false);

  // Editing state for Sub Service
  const [editingSubService, setEditingSubService] = useState<{
    mainServiceId: string;
    subService: ServiceItem;
    isNew?: boolean;
  } | null>(null);

  // Sub-service form state helpers
  const [deliverablesText, setDeliverablesText] = useState("");
  const [toolsText, setToolsText] = useState("");
  const [benefitsText, setBenefitsText] = useState("");
  const [keyServicesText, setKeyServicesText] = useState("");

  const currentMainService =
    mainServices.find((s) => s.id === selectedServiceId) || mainServices[0];

  const handleSaveToStorage = (
    updatedList: MainServiceCatalogueItem[],
    msg = "Services updated successfully!",
  ) => {
    setMainServices(updatedList);
    saveStoredMainServices(updatedList);
    setSaveSuccessMsg(msg);
    setTimeout(() => setSaveSuccessMsg(""), 3500);
  };

  const handleResetToDefaults = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all 11 Main Services and Sub-Services to factory defaults? Any custom services added will be restored.",
      )
    ) {
      resetMainServicesToFactoryDefaults();
      const defaults = DEFAULT_MAIN_SERVICES;
      setMainServices(defaults);
      setSelectedServiceId(defaults[0]?.id || "");
      setEditingMainService(null);
      setEditingSubService(null);
      setSaveSuccessMsg("Services reset to factory defaults.");
      setTimeout(() => setSaveSuccessMsg(""), 3500);
    }
  };

  // Toggle Main Service visibility (active / hidden)
  const handleToggleMainServiceStatus = (id: string) => {
    const updated = mainServices.map((s) => {
      if (s.id === id) {
        return {
          ...s,
          status: s.status === "hidden" ? ("active" as const) : ("hidden" as const),
        };
      }
      return s;
    });
    handleSaveToStorage(updated, "Service status updated.");
  };

  // Delete Main Service
  const handleDeleteMainService = (id: string) => {
    const target = mainServices.find((s) => s.id === id);
    if (!target) return;
    if (
      window.confirm(`Are you sure you want to delete "${target.title}" and all its sub-services?`)
    ) {
      const updated = mainServices.filter((s) => s.id !== id);
      handleSaveToStorage(updated, `Deleted "${target.title}".`);
      if (selectedServiceId === id) {
        setSelectedServiceId(updated[0]?.id || "");
      }
    }
  };

  // Open Edit Main Service
  const handleStartEditMainService = (service: MainServiceCatalogueItem) => {
    setEditingMainService({ ...service });
    setIsCreatingMainService(false);
    setBenefitsText(service.benefits?.join("\n") || "");
    setKeyServicesText(service.keyServicesList?.join("\n") || "");
  };

  // Open Create Main Service
  const handleStartCreateMainService = () => {
    const nextNum = (mainServices.length + 1).toString().padStart(2, "0");
    const newService: MainServiceCatalogueItem = {
      id: `service-${Date.now()}`,
      number: nextNum,
      title: "NEW SERVICE CATEGORY",
      badge: "Specialized Discipline",
      shortDescription: "Describe the main focus and value proposition of this service.",
      fullDescription:
        "Comprehensive overview of our methodology, deliverables, and commercial outcomes for this service.",
      iconName: "Sparkles",
      accentColor: "gold",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      portfolioCategory: "Websites",
      startingPrice: "₹19,999",
      benefits: [
        "Dedicated Senior Specialists",
        "Transparent Weekly Progress Reporting",
        "Full Intellectual Property Ownership",
      ],
      keyServicesList: ["Core Strategy", "Execution & Deployment", "Continuous Optimization"],
      status: "active",
      displayOrder: mainServices.length + 1,
      seoTitle: "Digital Marketing & Growth Services | DigiBasera",
      seoDescription:
        "High-performance digital marketing, web engineering and branding services in Rajkot.",
      services: [],
    };
    setEditingMainService(newService);
    setIsCreatingMainService(true);
    setBenefitsText(newService.benefits.join("\n"));
    setKeyServicesText(newService.keyServicesList.join("\n"));
  };

  // Save Main Service (Create or Update)
  const handleSaveMainService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMainService) return;

    const benefits = benefitsText
      .split("\n")
      .map((b) => b.trim())
      .filter(Boolean);

    const keyServicesList = keyServicesText
      .split("\n")
      .map((k) => k.trim())
      .filter(Boolean);

    const formattedSlug = editingMainService.id
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    const finalService: MainServiceCatalogueItem = {
      ...editingMainService,
      id: formattedSlug || editingMainService.id,
      benefits: benefits.length > 0 ? benefits : ["High-Quality Execution"],
      keyServicesList: keyServicesList.length > 0 ? keyServicesList : ["Core Consultation"],
    };

    let updatedList: MainServiceCatalogueItem[];
    if (isCreatingMainService) {
      updatedList = [...mainServices, finalService];
    } else {
      updatedList = mainServices.map((s) => (s.id === editingMainService.id ? finalService : s));
    }

    handleSaveToStorage(
      updatedList,
      isCreatingMainService ? "New main service published!" : "Main service saved!",
    );
    setSelectedServiceId(finalService.id);
    setEditingMainService(null);
    setIsCreatingMainService(false);
  };

  // Sub-Service Handlers
  const handleStartCreateSubService = (mainServiceId: string) => {
    const parent = mainServices.find((s) => s.id === mainServiceId);
    if (!parent) return;

    const newSub: ServiceItem = {
      id: `sub-${Date.now()}`,
      title: "New Sub-Service Solution",
      shortDesc: "Short description highlighting user benefits and core outcome.",
      description:
        "Comprehensive explanation of what this sub-service entails, why it matters, and how we deliver it.",
      iconName: "CheckCircle2",
      imageUrl:
        parent.imageUrl ||
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      pricingStartingAt: parent.startingPrice || "₹9,999",
      deliverables: [
        "Dedicated Project Discovery & Requirement Mapping",
        "Custom High-Quality Deliverables Architecture",
        "Quality Assurance & Validation Review",
        "Client Handover & Post-Launch Support",
      ],
      idealFor: "Businesses, startups, and growing enterprises looking for specialized execution.",
      roiImpact: "Measurable improvement in efficiency, lead capture, or brand perception.",
      targetOutcome: "Full implementation ready for commercial use.",
      timeline: "7 - 14 Business Days",
      toolsUsed: ["Figma", "Google Workspace", "Industry Tools"],
      portfolioCategory: parent.portfolioCategory || "Websites",
    };

    setDeliverablesText(newSub.deliverables.join("\n"));
    setToolsText(newSub.toolsUsed?.join(", ") || "");
    setEditingSubService({
      mainServiceId,
      subService: newSub,
      isNew: true,
    });
  };

  const handleStartEditSubService = (mainServiceId: string, sub: ServiceItem) => {
    setDeliverablesText(sub.deliverables.join("\n"));
    setToolsText(sub.toolsUsed?.join(", ") || "");
    setEditingSubService({
      mainServiceId,
      subService: { ...sub },
      isNew: false,
    });
  };

  const handleDeleteSubService = (mainServiceId: string, subId: string) => {
    if (window.confirm("Are you sure you want to delete this sub-service?")) {
      const updated = mainServices.map((main) => {
        if (main.id === mainServiceId) {
          return {
            ...main,
            services: main.services.filter((s) => s.id !== subId),
          };
        }
        return main;
      });
      handleSaveToStorage(updated, "Sub-service deleted.");
    }
  };

  const handleSaveSubService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSubService) return;

    const deliverables = deliverablesText
      .split("\n")
      .map((d) => d.trim())
      .filter(Boolean);

    const toolsUsed = toolsText
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const finalSub: ServiceItem = {
      ...editingSubService.subService,
      deliverables: deliverables.length > 0 ? deliverables : ["Standard Deliverables Pack"],
      toolsUsed: toolsUsed.length > 0 ? toolsUsed : ["Standard Industry Tools"],
    };

    const updated = mainServices.map((main) => {
      if (main.id === editingSubService.mainServiceId) {
        let newSubList: ServiceItem[];
        if (editingSubService.isNew) {
          newSubList = [...main.services, finalSub];
        } else {
          newSubList = main.services.map((s) => (s.id === finalSub.id ? finalSub : s));
        }
        return {
          ...main,
          services: newSubList,
        };
      }
      return main;
    });

    handleSaveToStorage(
      updated,
      editingSubService.isNew ? "Sub-service created!" : "Sub-service saved!",
    );
    setEditingSubService(null);
  };

  // Filtered list of main services for search
  const filteredMainServices = mainServices.filter((s) => {
    const q = searchQuery.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.badge.toLowerCase().includes(q) ||
      s.shortDescription.toLowerCase().includes(q) ||
      s.services.some((sub) => sub.title.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-8 text-white">
      {/* Top Banner / Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#141414] p-6 rounded-xl border border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-1">
            <Layers className="w-4 h-4" />
            <span>Digital Agency Architecture</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Services & Sub-Services Management</h2>
          <p className="text-sm text-neutral-400 mt-1">
            Add, edit, reorder, or publish main service categories and specialized sub-services
            without touching code.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleStartCreateMainService}
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black font-semibold text-sm rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Main Service</span>
          </button>

          <button
            onClick={handleResetToDefaults}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-sm font-medium rounded-lg transition-colors cursor-pointer"
            title="Restore default 11 service categories"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>

      {/* Success Notification */}
      {saveSuccessMsg && (
        <div className="flex items-center gap-3 p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-lg text-[#F3E5AB] text-sm animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <span>{saveSuccessMsg}</span>
        </div>
      )}

      {/* Main Container: Left Services Selector + Right Details/Subservices Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: List of 11 Main Services */}
        <div className="lg:col-span-4 space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services or sub-services..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#141414] border border-white/10 rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div className="space-y-2 max-h-[750px] overflow-y-auto pr-1">
            {filteredMainServices.map((service, idx) => {
              const isSelected = service.id === selectedServiceId;
              const isHidden = service.status === "hidden";

              return (
                <div
                  key={service.id}
                  onClick={() => {
                    setSelectedServiceId(service.id);
                    setEditingMainService(null);
                    setEditingSubService(null);
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#1a1813] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/5"
                      : "bg-[#141414] border-white/5 hover:border-white/20 hover:bg-[#181818]"
                  } ${isHidden ? "opacity-50" : ""}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#D4AF37] px-2 py-1 bg-white/5 rounded border border-[#D4AF37]/20">
                        {service.number || (idx + 1).toString().padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-white line-clamp-1">
                          {service.title}
                        </h4>
                        <span className="text-xs text-neutral-400">{service.badge}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleMainServiceStatus(service.id);
                        }}
                        className={`p-1.5 rounded transition-colors ${
                          isHidden
                            ? "text-neutral-500 hover:text-white"
                            : "text-[#D4AF37] hover:bg-white/5"
                        }`}
                        title={
                          isHidden
                            ? "Currently Hidden - Click to Show"
                            : "Currently Active - Click to Hide"
                        }
                      >
                        {isHidden ? (
                          <EyeOff className="w-3.5 h-3.5" />
                        ) : (
                          <Eye className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleStartEditMainService(service);
                        }}
                        className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors"
                        title="Edit Main Service Details"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteMainService(service.id);
                        }}
                        className="p-1.5 text-red-400/70 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors"
                        title="Delete Service"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs text-neutral-400 border-t border-white/5 pt-2">
                    <span className="text-neutral-400">
                      {service.services?.length || 0} Sub-Services
                    </span>
                    <span className="font-semibold text-[#D4AF37]">
                      Starts {service.startingPrice || "₹19,999"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Service Details + Sub-Services */}
        <div className="lg:col-span-8 space-y-6">
          {/* If Editing/Creating Main Service */}
          {editingMainService ? (
            <div className="bg-[#141414] p-6 rounded-xl border border-[#D4AF37]/40 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {isCreatingMainService
                      ? "Add New Main Service"
                      : `Edit: ${editingMainService.title}`}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Configure the main category banner, starting price, and benefits checklist.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setEditingMainService(null)}
                  className="text-xs text-neutral-400 hover:text-white px-3 py-1.5 bg-white/5 rounded border border-white/10"
                >
                  Cancel
                </button>
              </div>

              <form onSubmit={handleSaveMainService} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Display Number
                    </label>
                    <input
                      type="text"
                      value={editingMainService.number || ""}
                      onChange={(e) =>
                        setEditingMainService({ ...editingMainService, number: e.target.value })
                      }
                      placeholder="e.g. 05"
                      className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Service Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingMainService.title}
                      onChange={(e) =>
                        setEditingMainService({ ...editingMainService, title: e.target.value })
                      }
                      placeholder="e.g. WEB DESIGN & DEVELOPMENT"
                      className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Category Badge Tag
                    </label>
                    <input
                      type="text"
                      value={editingMainService.badge}
                      onChange={(e) =>
                        setEditingMainService({ ...editingMainService, badge: e.target.value })
                      }
                      placeholder="e.g. Modern Web Engineering"
                      className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Starting Price Reference *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingMainService.startingPrice || ""}
                      onChange={(e) =>
                        setEditingMainService({
                          ...editingMainService,
                          startingPrice: e.target.value,
                        })
                      }
                      placeholder="e.g. Starting From ₹19,999"
                      className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Main Service Image URL & File Upload with Preview */}
                <div className="p-4 rounded-xl bg-neutral-900/80 border border-white/10 space-y-3">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                    Main Service Hero Image (URL or File Upload)
                  </label>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {editingMainService.imageUrl ? (
                      <img
                        loading="lazy"
                        decoding="async"
                        src={editingMainService.imageUrl}
                        alt="Service Preview"
                        className="w-24 h-16 rounded-lg object-cover border border-[#D4AF37]/40 shrink-0 shadow-md"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-24 h-16 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center text-neutral-500 shrink-0">
                        <Image className="w-6 h-6" />
                      </div>
                    )}
                    <div className="flex-1 w-full space-y-2">
                      <input
                        type="text"
                        value={editingMainService.imageUrl || ""}
                        onChange={(e) =>
                          setEditingMainService({ ...editingMainService, imageUrl: e.target.value })
                        }
                        placeholder="Paste Image URL (https://images.unsplash.com/...)"
                        className="w-full px-3 py-2 bg-black border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                      <div className="flex items-center gap-2">
                        <label className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#D4AF37] border border-white/10 text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-colors">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload Image File</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file && editingMainService) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                  if (
                                    event.target?.result &&
                                    typeof event.target.result === "string"
                                  ) {
                                    setEditingMainService({
                                      ...editingMainService,
                                      imageUrl: event.target.result,
                                    });
                                  }
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                            className="hidden"
                          />
                        </label>
                        <span className="text-[11px] text-neutral-500">
                          JPG, PNG, WebP up to 3MB
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                    Short Description (For Overview & Main Cards) *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={editingMainService.shortDescription}
                    onChange={(e) =>
                      setEditingMainService({
                        ...editingMainService,
                        shortDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                    Full Description (For Detail Page Hero)
                  </label>
                  <textarea
                    rows={3}
                    value={editingMainService.fullDescription || ""}
                    onChange={(e) =>
                      setEditingMainService({
                        ...editingMainService,
                        fullDescription: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Key Benefits / Highlights (One per line)
                    </label>
                    <textarea
                      rows={4}
                      value={benefitsText}
                      onChange={(e) => setBenefitsText(e.target.value)}
                      placeholder="Custom Responsive UI&#10;Core Web Vitals 95+&#10;1-Click WhatsApp Lead Routing"
                      className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white font-mono focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Key Sub-Services List (One per line)
                    </label>
                    <textarea
                      rows={4}
                      value={keyServicesText}
                      onChange={(e) => setKeyServicesText(e.target.value)}
                      placeholder="Web Design&#10;Custom Website Design&#10;WordPress Design&#10;E-Commerce Development"
                      className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white font-mono focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setEditingMainService(null)}
                    className="px-4 py-2 text-sm text-neutral-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2 bg-[#D4AF37] hover:bg-[#F3E5AB] text-black font-semibold text-sm rounded-lg transition-colors cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Main Service</span>
                  </button>
                </div>
              </form>
            </div>
          ) : editingSubService ? (
            /* Sub-Service Form */
            <div className="bg-[#141414] p-6 rounded-xl border border-[#D4AF37]/40 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {editingSubService.isNew
                      ? "Create New Sub-Service"
                      : `Edit Sub-Service: ${editingSubService.subService.title}`}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Under Category:{" "}
                    <span className="text-[#D4AF37]">
                      {mainServices.find((s) => s.id === editingSubService.mainServiceId)?.title}
                    </span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setEditingSubService(null)}
                  className="text-xs text-neutral-400 hover:text-white px-3 py-1.5 bg-white/5 rounded border border-white/10"
                >
                  Cancel
                </button>
              </div>

              <form onSubmit={handleSaveSubService} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Sub-Service Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingSubService.subService.title}
                      onChange={(e) =>
                        setEditingSubService({
                          ...editingSubService,
                          subService: { ...editingSubService.subService, title: e.target.value },
                        })
                      }
                      placeholder="e.g. Custom Website Design"
                      className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Starting Price *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingSubService.subService.pricingStartingAt || ""}
                      onChange={(e) =>
                        setEditingSubService({
                          ...editingSubService,
                          subService: {
                            ...editingSubService.subService,
                            pricingStartingAt: e.target.value,
                          },
                        })
                      }
                      placeholder="e.g. Starting From ₹29,999"
                      className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                {/* Sub-Service Image URL & File Upload with Preview */}
                <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-white/10 space-y-2.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                    Sub-Service Feature Image (URL or File Upload)
                  </label>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    {editingSubService.subService.imageUrl ? (
                      <img
                        loading="lazy"
                        decoding="async"
                        src={editingSubService.subService.imageUrl}
                        alt="Sub-Service Preview"
                        className="w-20 h-14 rounded-lg object-cover border border-[#D4AF37]/40 shrink-0 shadow-md"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-20 h-14 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center text-neutral-500 shrink-0">
                        <ImageIcon className="w-5 h-5" />
                      </div>
                    )}
                    <div className="flex-1 w-full space-y-2">
                      <input
                        type="text"
                        value={editingSubService.subService.imageUrl || ""}
                        onChange={(e) =>
                          setEditingSubService({
                            ...editingSubService,
                            subService: {
                              ...editingSubService.subService,
                              imageUrl: e.target.value,
                            },
                          })
                        }
                        placeholder="Paste Image URL (https://images.unsplash.com/...)"
                        className="w-full px-3 py-2 bg-black border border-white/10 rounded text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                      <div className="flex items-center gap-2">
                        <label className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#D4AF37] border border-white/10 text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-colors">
                          <Upload className="w-3.5 h-3.5" />
                          <span>Upload Image File</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file && editingSubService) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                  if (
                                    event.target?.result &&
                                    typeof event.target.result === "string"
                                  ) {
                                    setEditingSubService({
                                      ...editingSubService,
                                      subService: {
                                        ...editingSubService.subService,
                                        imageUrl: event.target.result,
                                      },
                                    });
                                  }
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                            className="hidden"
                          />
                        </label>
                        <span className="text-[11px] text-neutral-500">
                          JPG, PNG, WebP up to 3MB
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                    Short Description *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={editingSubService.subService.shortDesc}
                    onChange={(e) =>
                      setEditingSubService({
                        ...editingSubService,
                        subService: {
                          ...editingSubService.subService,
                          shortDesc: e.target.value,
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                    Full Description (Deep Dive)
                  </label>
                  <textarea
                    rows={3}
                    value={editingSubService.subService.description}
                    onChange={(e) =>
                      setEditingSubService({
                        ...editingSubService,
                        subService: {
                          ...editingSubService.subService,
                          description: e.target.value,
                        },
                      })
                    }
                    className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Deliverables Checklist (One per line) *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={deliverablesText}
                      onChange={(e) => setDeliverablesText(e.target.value)}
                      placeholder="Responsive design for mobile and desktop&#10;Modern UI with typography hierarchy&#10;WhatsApp chat integration&#10;SEO-friendly semantic HTML5"
                      className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white font-mono focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                        Ideal For
                      </label>
                      <input
                        type="text"
                        value={editingSubService.subService.idealFor || ""}
                        onChange={(e) =>
                          setEditingSubService({
                            ...editingSubService,
                            subService: {
                              ...editingSubService.subService,
                              idealFor: e.target.value,
                            },
                          })
                        }
                        placeholder="e.g. Growing enterprises, corporate brands..."
                        className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                        Tools / Tech Stack (comma-separated)
                      </label>
                      <input
                        type="text"
                        value={toolsText}
                        onChange={(e) => setToolsText(e.target.value)}
                        placeholder="React, Next.js, Tailwind CSS, Figma"
                        className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                        Estimated Delivery Timeline
                      </label>
                      <input
                        type="text"
                        value={editingSubService.subService.timeline || ""}
                        onChange={(e) =>
                          setEditingSubService({
                            ...editingSubService,
                            subService: {
                              ...editingSubService.subService,
                              timeline: e.target.value,
                            },
                          })
                        }
                        placeholder="e.g. 7 - 12 Business Days"
                        className="w-full px-3 py-2 bg-neutral-900 border border-white/10 rounded text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setEditingSubService(null)}
                    className="px-4 py-2 text-sm text-neutral-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2 bg-[#D4AF37] hover:bg-[#F3E5AB] text-black font-semibold text-sm rounded-lg transition-colors cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Sub-Service</span>
                  </button>
                </div>
              </form>
            </div>
          ) : currentMainService ? (
            /* Active Main Service Overview Card & Sub-Services List */
            <div className="space-y-6">
              {/* Main Service Card Preview */}
              <div className="bg-[#141414] p-6 rounded-xl border border-white/10 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#D4AF37] px-2 py-0.5 bg-[#D4AF37]/10 rounded border border-[#D4AF37]/30">
                        {currentMainService.number}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                        {currentMainService.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{currentMainService.title}</h3>
                    <p className="text-sm text-neutral-300 max-w-2xl">
                      {currentMainService.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleStartEditMainService(currentMainService)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded border border-white/10 transition-colors"
                    >
                      <Edit2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Edit Category</span>
                    </button>
                  </div>
                </div>

                {/* Key Benefits */}
                {currentMainService.benefits && currentMainService.benefits.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-white/5">
                    {currentMainService.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
                  <span className="text-neutral-400">
                    Starting Reference:{" "}
                    <strong className="text-[#D4AF37] font-semibold">
                      {currentMainService.startingPrice}
                    </strong>
                  </span>
                  <span className="text-neutral-500">Slug: {currentMainService.id}</span>
                </div>
              </div>

              {/* Sub-Services Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    Sub-Services under {currentMainService.title}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {currentMainService.services?.length || 0} sub-services published
                  </p>
                </div>

                <button
                  onClick={() => handleStartCreateSubService(currentMainService.id)}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F3E5AB] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Add Sub-Service</span>
                </button>
              </div>

              {/* Sub-Services List */}
              <div className="space-y-3">
                {currentMainService.services?.length === 0 ? (
                  <div className="p-8 text-center bg-[#141414] rounded-xl border border-dashed border-white/10 text-neutral-400 text-sm">
                    No sub-services added yet. Click &quot;Add Sub-Service&quot; to create the first
                    one.
                  </div>
                ) : (
                  currentMainService.services?.map((sub, idx) => (
                    <div
                      key={sub.id}
                      className="p-4 bg-[#141414] rounded-xl border border-white/5 hover:border-white/15 transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-neutral-400">
                              {(idx + 1).toString().padStart(2, "0")}.
                            </span>
                            <h5 className="text-sm font-bold text-white">{sub.title}</h5>
                            {sub.pricingStartingAt && (
                              <span className="text-[11px] font-semibold text-[#D4AF37] px-2 py-0.5 bg-[#D4AF37]/10 rounded border border-[#D4AF37]/30">
                                {sub.pricingStartingAt}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-neutral-300 leading-relaxed">
                            {sub.shortDesc}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => handleStartEditSubService(currentMainService.id, sub)}
                            className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors"
                            title="Edit Sub-Service"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteSubService(currentMainService.id, sub.id)}
                            className="p-1.5 text-red-400/70 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors"
                            title="Delete Sub-Service"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Deliverables summary */}
                      {sub.deliverables && sub.deliverables.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-white/5">
                          <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
                            Key Deliverables ({sub.deliverables.length}):
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {sub.deliverables.map((d, dIdx) => (
                              <div
                                key={dIdx}
                                className="flex items-center gap-1.5 text-[11px] text-neutral-300"
                              >
                                <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                                <span className="line-clamp-1">{d}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-neutral-400 bg-[#141414] rounded-xl border border-white/10">
              Select a service from the left column to view or manage.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
