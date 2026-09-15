import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SOCIAL_MEDIA_POSTS } from "../data/agencyData";
import { SocialMediaPost } from "../types";
import { OptimizedImage } from "./ui/OptimizedImage";
import {
  Sparkles,
  Heart,
  MessageCircle,
  Share2,
  Eye,
  TrendingUp,
  Layers,
  Video,
  Image as ImageIcon,
  ExternalLink,
  X,
  CheckCircle2,
  Instagram,
  Linkedin,
  Facebook,
  Maximize2,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface SocialMediaPortfolioProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const SocialMediaPortfolio: React.FC<SocialMediaPortfolioProps> = ({
  onOpenConsultation,
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalPost, setActiveModalPost] = useState<SocialMediaPost | null>(null);

  const platforms = ["All", "Instagram", "LinkedIn", "Facebook"];
  const categories = ["All", "Festival & Seasonal", "Business Promotion"];

  const filteredPosts = SOCIAL_MEDIA_POSTS.filter((post) => {
    const matchPlatform = selectedPlatform === "All" || post.platform === selectedPlatform;
    const matchCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchPlatform && matchCategory;
  });

  const getFormatIcon = (format: string) => {
    switch (format) {
      case "Carousel":
        return <Layers className="w-3 h-3 text-[#D4AF37]" />;
      case "Reel / Video Ad":
        return <Video className="w-3 h-3 text-[#E1306C]" />;
      case "Story Sequence":
        return <Sparkles className="w-3 h-3 text-[#F58529]" />;
      default:
        return <ImageIcon className="w-3 h-3 text-[#0A66C2]" />;
    }
  };

  const getPlatformBadge = (platform: "Instagram" | "LinkedIn" | "Facebook") => {
    switch (platform) {
      case "Instagram":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FFF0F5] text-[#C13584] border border-[#C13584]/20">
            <Instagram className="w-3 h-3" />
            <span>Instagram</span>
          </span>
        );
      case "LinkedIn":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#EBF5FB] text-[#0A66C2] border border-[#0A66C2]/20">
            <Linkedin className="w-3 h-3" />
            <span>LinkedIn</span>
          </span>
        );
      case "Facebook":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#EBF2FA] text-[#1877F2] border border-[#1877F2]/20">
            <Facebook className="w-3 h-3" />
            <span>Facebook</span>
          </span>
        );
    }
  };

  return (
    <div className="space-y-10" id="social-media-portfolio">
      {/* Sub-Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8E1D0] pb-6"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] text-[#D4AF37] border border-[#D4AF37]/40 text-[11px] font-bold uppercase tracking-widest mb-2 font-heading shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>High-Engagement Social Creatives & Campaigns</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] font-heading tracking-tight">
            Social Media Creatives & Content Production
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] mt-1.5 max-w-2xl leading-relaxed">
            7 curated festival celebration creatives and high-conversion business promotional social
            media ad graphics engineered for maximum engagement and direct lead generation.
          </p>
        </div>

        <button
          onClick={() => onOpenConsultation("Social Media Marketing & Creative Production")}
          className="self-start md:self-auto px-5 py-2.5 rounded-lg bg-[#111111] hover:bg-black text-[#D4AF37] hover:text-white border border-[#D4AF37] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Launch Social Campaign</span>
        </button>
      </motion.div>

      {/* Filter Controls Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#E8E1D0] shadow-xs">
        {/* Platform Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
          <span className="text-xs font-bold text-[#777777] uppercase tracking-wider font-heading mr-1 shrink-0">
            Platform:
          </span>
          {platforms.map((plat) => (
            <button
              key={plat}
              onClick={() => setSelectedPlatform(plat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                selectedPlatform === plat
                  ? "bg-[#111111] text-[#D4AF37] border border-[#D4AF37] shadow-xs"
                  : "bg-[#F8F8F6] text-[#666666] hover:text-[#111111] border border-[#E8E1D0]"
              }`}
            >
              {plat}
            </button>
          ))}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:max-w-xl pb-1 sm:pb-0 no-scrollbar">
          <span className="text-xs font-bold text-[#777777] uppercase tracking-wider font-heading mr-1 shrink-0">
            Sector:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-[#D4AF37] text-[#111111] font-bold shadow-xs"
                  : "bg-[#F8F8F6] text-[#555555] hover:bg-[#E8E1D0] border border-[#E8E1D0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Social Media Posts Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] shadow-xs hover:shadow-[0_15px_35px_-10px_rgba(212,175,55,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Post Header (Simulated Social Account) */}
              <div className="p-3.5 border-b border-[#E8E1D0] flex items-center justify-between gap-2 bg-[#FAFAFA]">
                <div className="flex items-center gap-2.5 min-w-0">
                  {/* Brand Avatar */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#9A7B16] to-[#D4AF37] text-[#111111] font-bold font-heading text-xs flex items-center justify-center shrink-0 shadow-xs border border-white">
                    {post.brandName.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <h4 className="text-xs font-bold text-[#111111] truncate font-heading">
                        {post.brandName}
                      </h4>
                      <CheckCircle2 className="w-3 h-3 text-[#D4AF37] shrink-0" />
                    </div>
                    <span className="text-[10px] text-[#777777] block truncate">
                      {post.category}
                    </span>
                  </div>
                </div>

                {getPlatformBadge(post.platform)}
              </div>

              {/* Post Creative Visual with Click to Inspect */}
              <div
                onClick={() => setActiveModalPost(post)}
                className="relative aspect-square overflow-hidden bg-[#1E1E1E] cursor-pointer"
              >
                <OptimizedImage
                  src={post.imageUrl}
                  alt={post.brandName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/85 text-[#D4AF37] border border-[#D4AF37]/50 text-xs font-bold flex items-center gap-1.5 backdrop-blur-md shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Inspect Creative</span>
                  </span>
                </div>

                {/* Format Tag */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#111111]/85 text-white border border-white/20 backdrop-blur-md">
                    {getFormatIcon(post.format)}
                    <span>{post.format}</span>
                  </span>
                </div>
              </div>

              {/* Clean Minimal Card Footer */}
              <div className="p-3 bg-white border-t border-[#E8E1D0] flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-[#111111] truncate">
                  {post.brandName}
                </span>
                <button
                  onClick={() => setActiveModalPost(post)}
                  className="px-2.5 py-1 rounded bg-[#F8F8F6] hover:bg-[#111111] text-[#111111] hover:text-[#D4AF37] border border-[#E8E1D0] hover:border-[#D4AF37] text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1 shrink-0"
                >
                  <Maximize2 className="w-3 h-3 text-[#9A7B16]" />
                  <span>View</span>
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal: Full Post & Creative Deep Dive */}
      <AnimatePresence>
        {activeModalPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-white border border-[#D4AF37] rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#F8F8F6] border border-[#E8E1D0] text-[#555555] hover:text-[#111111] z-10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column: Full Creative Image & Stats */}
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-xl overflow-hidden border border-[#E8E1D0] bg-[#1E1E1E]">
                    <OptimizedImage
                      priority
                      src={activeModalPost.imageUrl}
                      alt={activeModalPost.brandName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#111111]/90 text-white border border-white/20 backdrop-blur-md">
                        {getFormatIcon(activeModalPost.format)}
                        <span>{activeModalPost.format}</span>
                      </span>
                    </div>
                  </div>

                  {/* Performance Stats Bar */}
                  <div className="grid grid-cols-4 gap-2 bg-[#F8F8F6] p-3 rounded-xl border border-[#E8E1D0] text-center">
                    <div>
                      <div className="text-sm font-bold text-[#111111]">
                        {activeModalPost.likesCount}
                      </div>
                      <div className="text-[9px] text-[#777777] uppercase font-bold">Likes</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#111111]">
                        {activeModalPost.commentsCount}
                      </div>
                      <div className="text-[9px] text-[#777777] uppercase font-bold">Comments</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#111111]">
                        {activeModalPost.sharesCount}
                      </div>
                      <div className="text-[9px] text-[#777777] uppercase font-bold">Shares</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#9A7B16]">
                        {activeModalPost.reachCount}
                      </div>
                      <div className="text-[9px] text-[#777777] uppercase font-bold">Reach</div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Campaign Strategy & Full Copy */}
                <div className="flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      {getPlatformBadge(activeModalPost.platform)}
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16] bg-[#F8F8F6] px-2 py-0.5 rounded border border-[#E8E1D0]">
                        {activeModalPost.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#111111] font-heading">
                      {activeModalPost.brandName}
                    </h3>

                    {activeModalPost.clientWebsite && (
                      <a
                        href={`https://${activeModalPost.clientWebsite}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#9A7B16] hover:underline font-mono font-bold mt-1"
                      >
                        <span>{activeModalPost.clientWebsite}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  {/* Key Result Pill */}
                  <div className="p-3 rounded-lg bg-[#FAF8F2] border border-[#D4AF37]/40 flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-[#9A7B16] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#9A7B16] block tracking-wider">
                        Campaign Impact
                      </span>
                      <p className="text-xs font-bold text-[#7E580A]">
                        {activeModalPost.keyResult}
                      </p>
                    </div>
                  </div>

                  {/* Strategy Notes */}
                  <div className="p-3 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#111111] block tracking-wider font-heading">
                      Creative & Media Strategy
                    </span>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      {activeModalPost.creativeStrategy}
                    </p>
                  </div>

                  {/* Full Caption */}
                  <div className="p-3 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] space-y-1 max-h-36 overflow-y-auto">
                    <span className="text-[10px] uppercase font-bold text-[#111111] block tracking-wider font-heading">
                      Copywriting & Script
                    </span>
                    <p className="text-xs text-[#555555] whitespace-pre-line leading-relaxed font-sans">
                      {activeModalPost.caption}
                    </p>
                    <div className="text-[11px] text-[#0A66C2] pt-1">
                      {activeModalPost.hashtags.join(" ")}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-3 border-t border-[#E8E1D0] flex items-center justify-between gap-3">
                    <button
                      onClick={() => {
                        setActiveModalPost(null);
                        onOpenConsultation(
                          `Social Media Strategy for ${activeModalPost.brandName}`,
                        );
                      }}
                      className="flex-1 py-2.5 rounded-lg bg-[#111111] hover:bg-black text-white text-xs font-bold uppercase tracking-wider border border-[#D4AF37] transition-all text-center"
                    >
                      Get Similar Creatives
                    </button>

                    <a
                      href={getWhatsAppUrl(
                        `Hello, I saw your social media creative for ${activeModalPost.brandName} (${activeModalPost.platform} / ${activeModalPost.format}). I want to create similar high-engagement content for my brand.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-white text-white" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
