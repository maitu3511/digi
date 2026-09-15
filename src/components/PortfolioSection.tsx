import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Search, Layers, Eye, Globe, Play } from "lucide-react";
import { PortfolioItem } from "../types";
import { OptimizedImage } from "./ui/OptimizedImage";
import {
  loadStoredPortfolioItems,
  loadStoredPortfolioCategories,
  PortfolioCategoryMeta,
} from "../data/portfolioData";

interface PortfolioSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
  initialCategory?: string;
  onNavigateToPricing?: (serviceId?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ initialCategory = "All" }) => {
  const [projects, setProjects] = useState<PortfolioItem[]>([]);
  const [storedCategories, setStoredCategories] = useState<PortfolioCategoryMeta[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [preview, setPreview] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    setProjects(loadStoredPortfolioItems());
    setStoredCategories(loadStoredPortfolioCategories());

    const handleStorageChange = () => {
      setProjects(loadStoredPortfolioItems());
      setStoredCategories(loadStoredPortfolioCategories());
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [preview]);

  const categories = useMemo(() => {
    const dynamicCats = storedCategories.map((c) => ({ id: c.id, label: c.label || c.id }));
    return [{ id: "All", label: "All Samples" }, ...dynamicCats];
  }, [storedCategories]);

  const filteredProjects = projects.filter((p) => {
    if (p.status === "hidden") return false;

    if (activeCategory !== "All") {
      const act = activeCategory.toLowerCase();
      const catMatch =
        p.category.toLowerCase() === act ||
        p.categoryId.toLowerCase().includes(act) ||
        (p.categoryName && p.categoryName.toLowerCase().includes(act));
      if (!catMatch) return false;
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const titleMatch = p.title.toLowerCase().includes(q);
      const catMatch = (p.categoryName || p.category).toLowerCase().includes(q);
      const urlMatch = p.displayUrl?.toLowerCase().includes(q);
      if (!titleMatch && !catMatch && !urlMatch) return false;
    }

    return true;
  });

  const getLiveUrl = (p: PortfolioItem) =>
    p.websiteUrl || (p.displayUrl ? `https://${p.displayUrl}` : null);

  return (
    <section className="relative py-8 bg-[#FFFFFF]" id="portfolio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls & Filter Bar */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#F8F8F6] p-3 rounded-xl border border-[#E8E1D0]">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]" />
              <input
                type="text"
                placeholder="Search samples..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#E8E1D0] rounded-lg focus:outline-none focus:border-[#D4AF37] text-[#111111] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#888888] hover:text-[#111111]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto no-scrollbar">
              {categories.map((c) => {
                const isActive = activeCategory === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCategory(c.id)}
                    className={`relative px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                      isActive
                        ? "text-[#D4AF37]"
                        : "bg-white text-[#555555] hover:text-[#111111] hover:bg-[#F8F8F6] border border-[#E8E1D0]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePortfolioCategory"
                        className="absolute inset-0 rounded-lg bg-[#111111] border border-[#D4AF37] shadow-xs -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{c.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#F8F8F6] rounded-2xl border border-[#E8E1D0] p-8">
            <Layers className="w-10 h-10 text-[#D4AF37] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#111111] font-heading">No Samples Found</h3>
            <p className="text-xs text-[#555555] mt-1 max-w-sm mx-auto">
              No samples match your selected filters. Try clearing your search query.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-md bg-[#111111] text-[#D4AF37] text-xs font-bold uppercase tracking-wider border border-[#D4AF37]"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Samples Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const liveUrl = getLiveUrl(project);
              const isWebsite = !!liveUrl;
              const isWebsiteSample = project.category === "Websites";
              const isVideo = !!project.videoUrl;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{
                    duration: 0.35,
                    delay: idx * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="card-luxury-hover rounded-xl bg-white border border-[#E8E1D0] overflow-hidden flex flex-col group shadow-[0_4px_20px_-4px_rgba(17,17,17,0.05)] hover:shadow-[0_18px_38px_-8px_rgba(212,175,55,0.22)]"
                >
                  {/* Image */}
                  <button
                    type="button"
                    onClick={() => setPreview(project)}
                    className={`relative w-full overflow-hidden bg-[#111111] cursor-pointer ${
                      isWebsiteSample || isVideo ? "aspect-[16/11]" : "aspect-square"
                    }`}
                    aria-label={`Preview ${project.title}`}
                  >
                    <OptimizedImage
                      src={project.imageUrl}
                      alt={project.title}
                      className={`w-full h-full group-hover:scale-108 transition-transform duration-700 ease-[0.16,1,0.3,1] ${
                        isWebsiteSample ? "object-cover object-top" : "object-cover"
                      }`}
                    />
                    <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/40 transition-colors duration-300 flex items-center justify-center z-10">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#D4AF37] text-[#111111] text-[10px] font-bold uppercase tracking-wider">
                        {isVideo ? (
                          <Play className="w-3.5 h-3.5" />
                        ) : (
                          <Eye className="w-3.5 h-3.5" />
                        )}
                        {isVideo ? "Play Video" : "Preview"}
                      </span>
                    </div>
                  </button>

                  {/* Name + Action */}
                  <div className="px-4 py-3 border-t border-[#E8E1D0] flex items-center justify-between gap-3">
                    <h3 className="text-sm font-bold text-[#111111] font-heading leading-snug break-words">
                      {isWebsite ? project.displayUrl || project.title : project.title}
                    </h3>
                    {isWebsite ? (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#111111] text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] text-[10px] font-bold uppercase tracking-wider transition-colors"
                      >
                        <Globe className="w-3 h-3" />
                        <span>View Full Preview</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPreview(project)}
                        className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#111111] text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] text-[10px] font-bold uppercase tracking-wider transition-colors"
                      >
                        {isVideo ? <Play className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                        <span>{isVideo ? "Play Video" : "View Full Preview"}</span>
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Lightbox Preview */}
        <AnimatePresence>
          {preview && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-sm"
              onClick={() => setPreview(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setPreview(null)}
                  className="absolute -top-2 right-0 sm:-right-2 z-10 p-2 rounded-full bg-white text-[#111111] hover:bg-[#D4AF37] transition-colors shadow-lg"
                  aria-label="Close preview"
                >
                  <X className="w-4 h-4" />
                </button>
                {preview.videoUrl ? (
                  <video
                    src={preview.videoUrl}
                    poster={preview.imageUrl}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[80vh] w-auto max-w-full rounded-lg border border-[#D4AF37]/40 shadow-2xl bg-black"
                  >
                    Your browser does not support video playback.
                  </video>
                ) : (
                  <OptimizedImage
                    priority
                    src={preview.imageUrl}
                    alt={preview.title}
                    className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg border border-[#D4AF37]/40 shadow-2xl"
                    containerClassName="max-h-[80vh] w-auto max-w-full flex items-center justify-center bg-transparent"
                  />
                )}
                <div className="mt-3 flex items-center gap-3 flex-wrap justify-center">
                  <span className="text-sm font-bold text-white font-heading">
                    {getLiveUrl(preview) ? preview.displayUrl || preview.title : preview.title}
                  </span>
                  {getLiveUrl(preview) && (
                    <a
                      href={getLiveUrl(preview) || undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#D4AF37] text-[#111111] text-[10px] font-bold uppercase tracking-wider hover:bg-[#C9A227] transition-colors"
                    >
                      <Globe className="w-3 h-3" />
                      <span>Open Live Website</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
