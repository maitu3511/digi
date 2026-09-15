import React, { useState } from "react";
import {
  Star,
  Quote,
  Plus,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  Search,
  Save,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Image as ImageIcon,
  Upload,
  AlertCircle,
  X,
  Building,
  User,
  Tag,
} from "lucide-react";
import {
  StoredTestimonialItem,
  loadStoredTestimonials,
  saveStoredTestimonials,
  resetTestimonialsToFactoryDefaults,
} from "../../data/testimonialsData";

interface AdminReviewsManagerProps {
  showToast?: (msg: string) => void;
  onUpdate?: () => void;
}

export const AdminReviewsManager: React.FC<AdminReviewsManagerProps> = ({
  showToast,
  onUpdate,
}) => {
  const [reviews, setReviews] = useState<StoredTestimonialItem[]>(() => {
    return loadStoredTestimonials();
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustryFilter, setSelectedIndustryFilter] = useState("all");
  const [selectedRatingFilter, setSelectedRatingFilter] = useState("all");

  // Modal / Form state
  const [editingReview, setEditingReview] = useState<StoredTestimonialItem | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState("");

  // Sample avatar presets for quick pick
  const avatarPresets = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  ];

  const handleSaveToStorage = (
    updatedList: StoredTestimonialItem[],
    msg = "Reviews updated successfully!",
  ) => {
    setReviews(updatedList);
    saveStoredTestimonials(updatedList);
    window.dispatchEvent(new Event("storage"));
    setSaveSuccessMsg(msg);
    if (showToast) showToast(msg);
    if (onUpdate) onUpdate();
    setTimeout(() => setSaveSuccessMsg(""), 3500);
  };

  const handleResetToDefaults = () => {
    if (
      window.confirm(
        "Are you sure you want to restore factory default client reviews? Any custom reviews added will be replaced.",
      )
    ) {
      const defaults = resetTestimonialsToFactoryDefaults();
      setReviews(defaults);
      setEditingReview(null);
      setIsCreatingNew(false);
      window.dispatchEvent(new Event("storage"));
      setSaveSuccessMsg("Factory default reviews restored.");
      if (showToast) showToast("Factory default reviews restored.");
      if (onUpdate) onUpdate();
      setTimeout(() => setSaveSuccessMsg(""), 3500);
    }
  };

  const handleToggleStatus = (id: string) => {
    const updated = reviews.map((r) => {
      if (r.id === id) {
        return {
          ...r,
          status: r.status === "hidden" ? ("active" as const) : ("hidden" as const),
        };
      }
      return r;
    });
    handleSaveToStorage(updated, "Review visibility updated.");
  };

  const handleDeleteReview = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete the review by "${name}"?`)) {
      const updated = reviews.filter((r) => r.id !== id);
      handleSaveToStorage(updated, `Review by "${name}" deleted.`);
    }
  };

  const handleStartCreate = () => {
    const newRev: StoredTestimonialItem = {
      id: `review-${Date.now()}`,
      clientName: "",
      role: "Founder & CEO",
      company: "",
      industry: "General Business",
      quote: "",
      metricHighlight: "100% Growth Lift Achieved",
      rating: 5,
      avatarUrl: avatarPresets[0],
      date: "Verified Client Review",
      status: "active",
      displayOrder: reviews.length + 1,
      featured: true,
    };
    setEditingReview(newRev);
    setIsCreatingNew(true);
  };

  const handleStartEdit = (rev: StoredTestimonialItem) => {
    setEditingReview({ ...rev });
    setIsCreatingNew(false);
  };

  const handleSaveModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingReview) return;
    if (!editingReview.clientName.trim()) {
      alert("Please enter client name.");
      return;
    }
    if (!editingReview.company.trim()) {
      alert("Please enter company / brand name.");
      return;
    }
    if (!editingReview.quote.trim()) {
      alert("Please enter testimonial quote text.");
      return;
    }

    let updatedList: StoredTestimonialItem[];
    if (isCreatingNew) {
      updatedList = [editingReview, ...reviews];
    } else {
      updatedList = reviews.map((r) => (r.id === editingReview.id ? editingReview : r));
    }

    handleSaveToStorage(
      updatedList,
      isCreatingNew
        ? "New client review added successfully!"
        : "Client review updated successfully!",
    );
    setEditingReview(null);
    setIsCreatingNew(false);
  };

  // Image Upload / FileReader handler
  const handleAvatarFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editingReview) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2MB. Please select a smaller photo or use an image URL.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result && typeof event.target.result === "string") {
          setEditingReview({
            ...editingReview,
            avatarUrl: event.target.result,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Industries list
  const industries = Array.from(new Set(reviews.map((r) => r.industry).filter(Boolean)));

  const filteredReviews = reviews.filter((r) => {
    const matchesSearch =
      r.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.metricHighlight.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesIndustry =
      selectedIndustryFilter === "all" || r.industry === selectedIndustryFilter;
    const matchesRating =
      selectedRatingFilter === "all" || r.rating === parseInt(selectedRatingFilter, 10);

    return matchesSearch && matchesIndustry && matchesRating;
  });

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {saveSuccessMsg && (
        <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center justify-between text-sm shadow-lg animate-in fade-in">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="font-semibold">{saveSuccessMsg}</span>
          </div>
          <button
            onClick={() => setSaveSuccessMsg("")}
            className="text-emerald-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Top Header Card */}
      <div className="p-6 rounded-2xl bg-[#181818] border border-[#2A2A2A] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2">
            <Quote className="w-3.5 h-3.5" />
            <span>Social Proof & Client Testimonials</span>
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">
            Client Reviews & Testimonials Manager
          </h2>
          <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1">
            Add, modify, or remove verified client reviews and testimonials. Updates sync instantly
            with the live home page carousel.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleStartCreate}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89628] hover:from-[#E5C158] hover:to-[#D4AF37] text-[#111111] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Review</span>
          </button>

          <button
            onClick={handleResetToDefaults}
            className="px-3.5 py-2.5 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] text-[#A0A0A0] hover:text-white border border-[#333333] text-xs font-semibold transition-all flex items-center gap-1.5"
            title="Reset to Factory Defaults"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>

      {/* Stats Summary Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-[#181818] border border-[#2A2A2A] shadow-sm">
          <div className="text-[11px] font-bold text-[#888888] uppercase tracking-wider">
            Total Reviews
          </div>
          <div className="text-2xl font-bold text-white mt-1 font-heading">{reviews.length}</div>
        </div>
        <div className="p-4 rounded-xl bg-[#181818] border border-[#2A2A2A] shadow-sm">
          <div className="text-[11px] font-bold text-[#888888] uppercase tracking-wider">
            Active Live
          </div>
          <div className="text-2xl font-bold text-emerald-400 mt-1 font-heading">
            {reviews.filter((r) => r.status !== "hidden").length}
          </div>
        </div>
        <div className="p-4 rounded-xl bg-[#181818] border border-[#2A2A2A] shadow-sm">
          <div className="text-[11px] font-bold text-[#888888] uppercase tracking-wider">
            5-Star Rated
          </div>
          <div className="text-2xl font-bold text-[#D4AF37] mt-1 font-heading">
            {reviews.filter((r) => (r.rating || 5) === 5).length}
          </div>
        </div>
        <div className="p-4 rounded-xl bg-[#181818] border border-[#2A2A2A] shadow-sm">
          <div className="text-[11px] font-bold text-[#888888] uppercase tracking-wider">
            Industries Represented
          </div>
          <div className="text-2xl font-bold text-white mt-1 font-heading">{industries.length}</div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="p-4 rounded-xl bg-[#181818] border border-[#2A2A2A] flex flex-col md:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#777777]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by client name, company, quote keywords..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs placeholder-[#666666] focus:border-[#D4AF37] focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <select
            value={selectedIndustryFilter}
            onChange={(e) => setSelectedIndustryFilter(e.target.value)}
            className="px-3 py-2 rounded-lg bg-[#111111] border border-[#333333] text-xs text-white focus:border-[#D4AF37] focus:outline-none"
          >
            <option value="all">All Industries</option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>

          <select
            value={selectedRatingFilter}
            onChange={(e) => setSelectedRatingFilter(e.target.value)}
            className="px-3 py-2 rounded-lg bg-[#111111] border border-[#333333] text-xs text-white focus:border-[#D4AF37] focus:outline-none"
          >
            <option value="all">All Star Ratings</option>
            <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
            <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
            <option value="3">⭐⭐⭐ (3 Stars)</option>
          </select>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredReviews.length === 0 ? (
          <div className="col-span-full p-12 text-center rounded-2xl bg-[#181818] border border-[#2A2A2A] text-[#888888]">
            <Quote className="w-8 h-8 mx-auto mb-2 text-[#444444]" />
            <p className="text-sm font-semibold">No client reviews found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedIndustryFilter("all");
                setSelectedRatingFilter("all");
              }}
              className="mt-3 text-xs text-[#D4AF37] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          filteredReviews.map((rev) => {
            const isHidden = rev.status === "hidden";
            return (
              <div
                key={rev.id}
                className={`p-5 rounded-2xl bg-[#181818] border transition-all duration-200 flex flex-col justify-between shadow-md ${
                  isHidden
                    ? "border-[#333333] opacity-60"
                    : "border-[#2A2A2A] hover:border-[#D4AF37]/50"
                }`}
              >
                <div>
                  {/* Top Bar: Rating, Industry, Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating || 5)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20">
                        {rev.industry}
                      </span>
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
                  </div>

                  {/* Metric Box */}
                  <div className="p-2.5 rounded-xl bg-[#111111] border border-[#2A2A2A] text-xs font-bold text-[#E5C158] flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-3 h-3 text-[#D4AF37]" />
                    </div>
                    <span className="truncate">{rev.metricHighlight}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-xs text-[#CCCCCC] leading-relaxed italic line-clamp-3 mb-4">
                    "{rev.quote}"
                  </p>
                </div>

                {/* Bottom Bar: Client Info & Actions */}
                <div className="pt-3 border-t border-[#2A2A2A] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    {rev.avatarUrl ? (
                      <img
                        loading="lazy"
                        decoding="async"
                        src={rev.avatarUrl}
                        alt={rev.clientName}
                        className="w-9 h-9 rounded-full object-cover border border-[#D4AF37]/40 shrink-0"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-[#222222] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center font-bold text-xs shrink-0">
                        {rev.clientName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .substring(0, 2)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-white truncate">{rev.clientName}</h4>
                      <p className="text-[11px] text-[#888888] truncate">
                        {rev.role},{" "}
                        <span className="text-[#BBBBBB] font-medium">{rev.company}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleToggleStatus(rev.id)}
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
                      onClick={() => handleStartEdit(rev)}
                      className="p-1.5 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-[#D4AF37] border border-[#333333] transition-colors"
                      title="Edit Review"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleDeleteReview(rev.id, rev.clientName)}
                      className="p-1.5 rounded-lg bg-[#222222] hover:bg-red-950/80 text-red-400 border border-[#333333] hover:border-red-800/60 transition-colors"
                      title="Delete Review"
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

      {/* Edit / Create Modal */}
      {editingReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#181818] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-2xl my-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A] mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Quote className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    {isCreatingNew ? "Add New Client Review" : "Edit Client Review"}
                  </h3>
                  <p className="text-xs text-[#888888]">
                    {isCreatingNew
                      ? "Create a verified testimonial with client photo & metrics."
                      : `Editing review for ${editingReview.clientName || "Client"}`}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setEditingReview(null);
                  setIsCreatingNew(false);
                }}
                className="p-2 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-[#888888] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Client Name */}
                <div>
                  <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingReview.clientName}
                    onChange={(e) =>
                      setEditingReview({ ...editingReview, clientName: e.target.value })
                    }
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                {/* Role / Designation */}
                <div>
                  <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                    Role / Designation *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingReview.role}
                    onChange={(e) => setEditingReview({ ...editingReview, role: e.target.value })}
                    placeholder="e.g. Founder & CEO, Director"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                    Company / Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingReview.company}
                    onChange={(e) =>
                      setEditingReview({ ...editingReview, company: e.target.value })
                    }
                    placeholder="e.g. Aura Lifestyle, ABFI Interiors"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                    Industry Tag *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingReview.industry}
                    onChange={(e) =>
                      setEditingReview({ ...editingReview, industry: e.target.value })
                    }
                    placeholder="e.g. E-commerce, Real Estate, Healthcare"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              {/* Star Rating & Verified Metric Highlight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                    Star Rating (1-5)
                  </label>
                  <select
                    value={editingReview.rating || 5}
                    onChange={(e) =>
                      setEditingReview({ ...editingReview, rating: parseInt(e.target.value, 10) })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 Stars - Exceptional)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 Stars - Very Good)</option>
                    <option value={3}>⭐⭐⭐ (3 Stars - Average)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                    Metric Highlight / Outcome *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingReview.metricHighlight}
                    onChange={(e) =>
                      setEditingReview({ ...editingReview, metricHighlight: e.target.value })
                    }
                    placeholder="e.g. 4.6x Blended ROAS Achieved, +210% Inquiries"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              {/* Quote / Full Review Text */}
              <div>
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                  Client Review Quote *
                </label>
                <textarea
                  rows={4}
                  required
                  value={editingReview.quote}
                  onChange={(e) => setEditingReview({ ...editingReview, quote: e.target.value })}
                  placeholder="Write the verified feedback or client praise detailing ROI, turnaround time, communication, and growth impact..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none leading-relaxed"
                />
              </div>

              {/* Avatar Image Selection & Upload */}
              <div className="p-4 rounded-xl bg-[#111111] border border-[#2A2A2A] space-y-3">
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Client Avatar / Photo (URL or Upload)
                </label>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {editingReview.avatarUrl ? (
                    <img
                      loading="lazy"
                      decoding="async"
                      src={editingReview.avatarUrl}
                      alt="Preview"
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37] shrink-0 shadow-md"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-[#222222] border-2 border-[#333333] flex items-center justify-center text-[#888888] shrink-0">
                      <User className="w-6 h-6" />
                    </div>
                  )}

                  <div className="flex-1 w-full space-y-2">
                    <input
                      type="url"
                      value={editingReview.avatarUrl || ""}
                      onChange={(e) =>
                        setEditingReview({ ...editingReview, avatarUrl: e.target.value })
                      }
                      placeholder="Paste Image URL (https://...)"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#181818] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                    />

                    <div className="flex items-center gap-2">
                      <label className="px-3 py-1.5 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-[#D4AF37] border border-[#333333] text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-colors">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload Photo File</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleAvatarFileUpload}
                          className="hidden"
                        />
                      </label>
                      <span className="text-[11px] text-[#777777]">PNG, JPG, WebP up to 2MB</span>
                    </div>
                  </div>
                </div>

                {/* Quick Presets */}
                <div>
                  <div className="text-[11px] font-semibold text-[#888888] mb-1.5">
                    Or Choose Quick Preset:
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {avatarPresets.map((preset, idx) => (
                      <img
                        loading="lazy"
                        decoding="async"
                        key={idx}
                        src={preset}
                        alt={`Preset ${idx + 1}`}
                        onClick={() => setEditingReview({ ...editingReview, avatarUrl: preset })}
                        className={`w-8 h-8 rounded-full object-cover cursor-pointer border transition-all ${
                          editingReview.avatarUrl === preset
                            ? "border-[#D4AF37] scale-110"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Status & Display Order */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                    Visibility Status
                  </label>
                  <select
                    value={editingReview.status || "active"}
                    onChange={(e) =>
                      setEditingReview({
                        ...editingReview,
                        status: e.target.value as "active" | "hidden",
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="active">Active (Visible in Carousel)</option>
                    <option value="hidden">Hidden (Draft / Archive)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5">
                    Display Order Position
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={editingReview.displayOrder || 1}
                    onChange={(e) =>
                      setEditingReview({
                        ...editingReview,
                        displayOrder: parseInt(e.target.value, 10) || 1,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111111] border border-[#333333] text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#2A2A2A]">
                <button
                  type="button"
                  onClick={() => {
                    setEditingReview(null);
                    setIsCreatingNew(false);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] text-[#A0A0A0] hover:text-white text-xs font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89628] hover:from-[#E5C158] hover:to-[#D4AF37] text-[#111111] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{isCreatingNew ? "Create Review" : "Save Changes"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
