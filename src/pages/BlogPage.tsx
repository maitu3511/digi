import blogHeroBg from "../assets/heroes/blog-hero.jpg";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  BookOpen,
  Clock,
  ArrowRight,
  Search,
  CheckCircle2,
  Share2,
  Calendar,
  Layers,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  Phone,
  HelpCircle,
  ChevronDown,
  Copy,
  Check,
  ExternalLink,
  UserCheck,
  BarChart3,
  Flame,
} from "lucide-react";
import { BLOG_POSTS } from "../data/companyData";
import { BlogPost, PageType } from "../types";
import { OptimizedImage } from "../components/ui/OptimizedImage";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface BlogPageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const POSTS_PER_PAGE = 6;

  // Popular / Trending Posts
  const popularPosts = useMemo(() => {
    return BLOG_POSTS.slice(0, 5);
  }, []);

  // Filter posts based on Search Query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return BLOG_POSTS;
    const query = searchQuery.toLowerCase();
    return BLOG_POSTS.filter((post) => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.some((p) => p.toLowerCase().includes(query)) ||
        (post.tags && post.tags.some((t) => t.toLowerCase().includes(query)))
      );
    });
  }, [searchQuery]);

  // Featured spotlight post
  const featuredPost = useMemo(() => {
    return BLOG_POSTS[0];
  }, []);

  // Pagination calculation
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Scroll to top when activeArticle opens
  useEffect(() => {
    if (activeArticle) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeArticle]);

  const handleCopyArticleLink = (articleTitle: string) => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAF9F5] min-h-screen text-[#111111]" id="blog-page">
      {/* ============================================================ */}
      {/* 1. BREADCRUMBS & HERO HEADER (Matebiz Style) */}
      {/* ============================================================ */}
      <section className="relative py-14 sm:py-20 border-b border-[#E8E1D0] bg-white overflow-hidden">
        {/* Background Image with Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <img
            loading="lazy"
            decoding="async"
            src={blogHeroBg}
            alt="DigiBasera Agency Blog & Digital Insights"
            className="w-full h-full object-cover object-center opacity-15 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-[#FAF9F5]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-85" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#D4AF37]/15 rounded-full blur-[90px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#777777]">
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-[#111111] transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#B89018]" />
            <span className="font-semibold text-[#111111]">Blog & Insights</span>
            {activeArticle && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-[#B89018]" />
                <span className="text-[#9A7B16] truncate max-w-[240px]">{activeArticle.title}</span>
              </>
            )}
          </nav>

          {/* Heading Section */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D0] shadow-xs text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[#9A7B16] font-bold uppercase tracking-wider text-[11px]">
                Insightful Digital Marketing & Growth Strategies
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-heading leading-tight text-[#111111]">
              DigiBasera Blog:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#B89018] italic font-serif">
                Proven Playbooks & Case Insights
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
              In-depth tactical guides, algorithmic search teardowns, paid media frameworks, and
              conversion optimization blueprints written by seasoned growth practitioners managing
              enterprise campaigns.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-6 sm:gap-10 border-t border-[#E8E1D0]/80 text-xs font-semibold text-[#444444]">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#D4AF37]" />
              <span>14 Master Guides Available</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#D4AF37]" />
              <span>Full-Service Agency Coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Zero Fluff, 100% Actionable Tactics</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FULL ARTICLE DETAIL VIEW (When an article is clicked) */}
      {/* ============================================================ */}
      {activeArticle ? (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <button
            onClick={() => setActiveArticle(null)}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#E8E1D0] hover:border-[#D4AF37] text-xs font-bold text-[#111111] shadow-xs hover:shadow-sm transition-all"
          >
            <ChevronLeft className="w-4 h-4 text-[#D4AF37]" />
            Back to All Blog Articles
          </button>

          <article className="bg-white rounded-2xl border border-[#E8E1D0] shadow-md p-6 sm:p-10 lg:p-12 space-y-8">
            {/* Header Meta */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#111111] text-[#D4AF37] text-[11px] font-bold uppercase tracking-wider border border-[#D4AF37]/30">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-[#777777] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {activeArticle.publishedDate}
                </span>
                <span className="text-xs text-[#777777]">•</span>
                <span className="text-xs text-[#777777] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {activeArticle.readTime}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#111111] leading-tight">
                {activeArticle.title}
              </h1>

              {/* Author Profile Bar */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-y border-[#E8E1D0]/70 py-4">
                <div className="flex items-center gap-3">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={activeArticle.author.avatar}
                    alt={activeArticle.author.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#D4AF37]/50"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#111111]">
                      {activeArticle.author.name}
                    </div>
                    <div className="text-[11px] text-[#777777]">{activeArticle.author.role}</div>
                  </div>
                </div>

                {/* Social Share Controls */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#777777] mr-1">Share:</span>
                  <a
                    href={getWhatsAppUrl(
                      `Check out this insightful digital marketing guide: "${activeArticle.title}"`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white transition-colors"
                    title="Share via WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                  </a>
                  <button
                    onClick={() => handleCopyArticleLink(activeArticle.title)}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-[#111111] text-[#444444] hover:text-white transition-colors flex items-center gap-1 text-xs font-semibold"
                    title="Copy Article Link"
                  >
                    {copiedLink ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden shadow-sm border border-[#E8E1D0]">
              <OptimizedImage
                priority
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Table of Contents (If available) */}
            {activeArticle.tableOfContents && activeArticle.tableOfContents.length > 0 && (
              <div className="p-6 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9A7B16]">
                  <Layers className="w-4 h-4 text-[#D4AF37]" />
                  <span>Table of Contents</span>
                </div>
                <ul className="space-y-1.5 text-xs text-[#333333]">
                  {activeArticle.tableOfContents.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 hover:text-[#9A7B16] transition-colors"
                    >
                      <span className="text-[#B89018] font-bold">•</span>
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Introduction Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#333333] leading-relaxed font-normal">
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* In-Depth Sections with Subheadings and Bullet Points */}
            {activeArticle.detailedSections && activeArticle.detailedSections.length > 0 && (
              <div className="space-y-8 pt-4 border-t border-[#E8E1D0]">
                {activeArticle.detailedSections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
                      {sec.heading}
                    </h2>
                    {sec.subheading && (
                      <div className="text-xs font-semibold text-[#9A7B16] italic">
                        {sec.subheading}
                      </div>
                    )}
                    <div className="space-y-3 text-sm text-[#444444] leading-relaxed">
                      {sec.content.map((cp, cIdx) => (
                        <p key={cIdx}>{cp}</p>
                      ))}
                    </div>

                    {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                      <div className="p-5 rounded-xl bg-white border border-[#E8E1D0] space-y-2.5">
                        <div className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                          Key Operational Breakdown:
                        </div>
                        <ul className="space-y-2 text-xs text-[#444444]">
                          {sec.bulletPoints.map((bp, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                              <span className="leading-snug">{bp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {sec.proTip && (
                      <div className="p-4 rounded-lg bg-[#FAF9F5] border-l-4 border-[#D4AF37] text-xs text-[#333333] italic">
                        <strong className="text-[#9A7B16] not-italic block font-bold mb-1">
                          Agency Pro-Tip:
                        </strong>
                        {sec.proTip}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Key Executive Takeaways Box */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#111111] text-white space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                <Sparkles className="w-4 h-4" />
                <span>Executive Strategy Takeaways</span>
              </div>
              <ul className="space-y-2.5 text-xs text-gray-200">
                {activeArticle.takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Frequently Asked Questions (FAQ) Accordion */}
            {activeArticle.faqs && activeArticle.faqs.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-[#E8E1D0]">
                <h3 className="text-lg sm:text-xl font-bold font-heading text-[#111111] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#D4AF37]" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-3">
                  {activeArticle.faqs.map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      className="border border-[#E8E1D0] rounded-xl overflow-hidden bg-[#FAF9F5]"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                        className="w-full text-left p-4 text-xs sm:text-sm font-bold text-[#111111] flex items-center justify-between hover:text-[#9A7B16] transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#B89018] transition-transform ${
                            openFaqIndex === fIdx ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openFaqIndex === fIdx && (
                        <div className="px-4 pb-4 text-xs text-[#555555] leading-relaxed border-t border-[#E8E1D0]/50 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio Card */}
            {activeArticle.author.bio && (
              <div className="p-6 rounded-xl bg-white border border-[#E8E1D0] flex flex-col sm:flex-row items-center gap-4">
                <img
                  loading="lazy"
                  decoding="async"
                  src={activeArticle.author.avatar}
                  alt={activeArticle.author.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center sm:text-left space-y-1">
                  <div className="text-xs font-bold text-[#111111]">
                    About {activeArticle.author.name}
                  </div>
                  <div className="text-[11px] text-[#777777]">{activeArticle.author.role}</div>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {activeArticle.author.bio}
                  </p>
                </div>
              </div>
            )}

            {/* Embedded In-Article CTA Banner */}
            <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#222222] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#D4AF37]/40 shadow-lg">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                  Partner with DigiBasera
                </span>
                <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
                  Want our team to execute this strategy for your brand?
                </h4>
                <p className="text-xs text-gray-300 max-w-xl">
                  Schedule a complimentary 30-minute growth audit with our senior specialists in
                  Rajkot, Gujarat.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <button
                  onClick={() => {
                    const title = activeArticle.title;
                    setActiveArticle(null);
                    onOpenConsultation(`Strategy Consultation: ${title}`);
                  }}
                  className="px-5 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#B89018] text-[#111111] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Request Strategy Audit
                </button>
                <a
                  href={getWhatsAppUrl(
                    `Hi DigiBasera, I was reading your article "${activeArticle.title}" and would like to discuss implementing it for my business.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors"
                  title="Direct WhatsApp Discussion"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                </a>
              </div>
            </div>

            {/* Related Articles Suggestions */}
            <div className="pt-6 border-t border-[#E8E1D0] space-y-4">
              <h3 className="text-lg font-bold font-heading text-[#111111]">
                Related Guides You Might Like
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {BLOG_POSTS.filter((p) => p.id !== activeArticle.id)
                  .slice(0, 3)
                  .map((relPost) => (
                    <div
                      key={relPost.id}
                      onClick={() => setActiveArticle(relPost)}
                      className="p-4 rounded-xl border border-[#E8E1D0] hover:border-[#D4AF37] bg-white cursor-pointer transition-all hover:shadow-md space-y-2"
                    >
                      <span className="text-[10px] font-bold text-[#9A7B16] uppercase tracking-wider block">
                        {relPost.category}
                      </span>
                      <h5 className="text-xs font-bold text-[#111111] line-clamp-2 leading-snug hover:text-[#9A7B16]">
                        {relPost.title}
                      </h5>
                      <span className="text-[10px] text-[#777777] block">{relPost.readTime}</span>
                    </div>
                  ))}
              </div>
            </div>
          </article>
        </section>
      ) : (
        /* ============================================================ */
        /* MAIN BLOG HUB: FEATURED BANNER + TWO COLUMN GRID (Matebiz Style) */
        /* ============================================================ */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
          {/* SPOTLIGHT FEATURED ARTICLE (Show when no search query) */}
          {!searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveArticle(featuredPost)}
              className="group bg-white rounded-2xl border border-[#E8E1D0] hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative h-72 lg:h-[380px] overflow-hidden bg-gray-100">
                  <OptimizedImage
                    priority
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#111111] text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Flame className="w-3.5 h-3.5 text-[#D4AF37]" />
                      Featured Master Guide
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/90 text-[#111111] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-[#777777]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {featuredPost.publishedDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-[#111111] group-hover:text-[#9A7B16] transition-colors leading-snug">
                      {featuredPost.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E1D0]/70 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-8 h-8 rounded-full object-cover border border-[#D4AF37]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="text-xs">
                        <span className="font-bold text-[#111111] block">
                          {featuredPost.author.name}
                        </span>
                        <span className="text-[10px] text-[#777777]">
                          {featuredPost.author.role}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-[#111111] group-hover:text-[#9A7B16] flex items-center gap-1.5">
                      <span>Read Master Guide</span>
                      <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TWO-COLUMN LAYOUT: MAIN GRID (LEFT) + AGENCY SIDEBAR (RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ============================================================ */}
            {/* LEFT COLUMN: ARTICLES GRID & PAGINATION */}
            {/* ============================================================ */}
            <div className="lg:col-span-8 space-y-6">
              {/* Header Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#666666] pb-2 border-b border-[#E8E1D0]">
                <div>
                  Showing <strong className="text-[#111111]">{filteredPosts.length}</strong>{" "}
                  articles
                  {searchQuery && (
                    <span>
                      {" "}
                      for <span className="text-[#9A7B16] font-bold">"{searchQuery}"</span>
                    </span>
                  )}
                </div>

                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-[#9A7B16] hover:underline font-semibold cursor-pointer"
                  >
                    Clear Search
                  </button>
                )}
              </div>

              {/* No results fallback */}
              {paginatedPosts.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl border border-[#E8E1D0] p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#FAF9F5] border border-[#E8E1D0] flex items-center justify-center mx-auto text-[#9A7B16]">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#111111]">
                    No articles found matching your criteria
                  </h3>
                  <p className="text-xs text-[#666666] max-w-sm mx-auto">
                    Try searching for another keyword or clear your search to view all articles.
                  </p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="px-4 py-2 rounded-lg bg-[#111111] text-white text-xs font-bold hover:bg-[#222222] transition-colors cursor-pointer"
                  >
                    View All Articles
                  </button>
                </div>
              )}

              {/* Grid of Post Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedPosts.map((post, postIdx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: postIdx * 0.05 }}
                    whileHover={{ y: -4 }}
                    onClick={() => setActiveArticle(post)}
                    className="group bg-white rounded-2xl border border-[#E8E1D0] hover:border-[#D4AF37] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      {/* Image & Category Tag */}
                      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                        <OptimizedImage
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#111111]/85 text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs z-10">
                          {post.category}
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-5 space-y-3">
                        <div className="flex items-center gap-2.5 text-[11px] text-[#777777]">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                            {post.publishedDate}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-[#111111] font-heading group-hover:text-[#9A7B16] transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>

                        {/* Tag Chips */}
                        {post.tags && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {post.tags.slice(0, 3).map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] text-[#888888] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E8E1D0]/60"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-5 pb-4 pt-3 border-t border-[#E8E1D0]/60 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          loading="lazy"
                          decoding="async"
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full object-cover border border-[#E8E1D0]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="text-[11px]">
                          <span className="font-bold text-[#111111] block leading-none">
                            {post.author.name}
                          </span>
                        </div>
                      </div>

                      <span className="text-xs font-bold text-[#111111] group-hover:text-[#9A7B16] flex items-center gap-1">
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="pt-6 flex items-center justify-center gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    className="px-3.5 py-2 rounded-lg bg-white border border-[#E8E1D0] disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-[#111111] hover:border-[#D4AF37] transition-colors flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Prev</span>
                  </button>

                  {Array.from({ length: totalPages }).map((_, idx) => {
                    const pageNumber = idx + 1;
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                          currentPage === pageNumber
                            ? "bg-[#111111] text-[#D4AF37] border border-[#D4AF37]"
                            : "bg-white text-[#555555] border border-[#E8E1D0] hover:border-[#D4AF37]"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    className="px-3.5 py-2 rounded-lg bg-white border border-[#E8E1D0] disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-[#111111] hover:border-[#D4AF37] transition-colors flex items-center gap-1"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* ============================================================ */}
            {/* RIGHT COLUMN: AGENCY BLOG SIDEBAR (Matebiz Inspired) */}
            {/* ============================================================ */}
            <div className="lg:col-span-4 space-y-6">
              {/* 1. Search Box Widget */}
              <div className="bg-white p-5 rounded-2xl border border-[#E8E1D0] shadow-xs space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#D4AF37]" />
                  <span>Search Articles</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search SEO, ads, Shopify..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-3 pr-8 py-2.5 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-xs text-[#111111] focus:border-[#D4AF37] outline-none"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* 2. Free Marketing Audit CTA Widget (Matebiz Style Lead Magnet) */}
              <div className="bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#222222] p-6 rounded-2xl border border-[#D4AF37]/50 shadow-md text-white space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Free 30-Min Growth Audit
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-base font-bold font-heading text-white">
                    Need Help Scaling Your Business Traffic & Leads?
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Get a tailored competitor breakdown and actionable roadmap from DigiBasera
                    specialists.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => onOpenConsultation("Free Website & SEO Audit")}
                    className="w-full py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#B89018] text-[#111111] font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Request Free Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="tel:+919173008118"
                    className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Call +91 91730 08118</span>
                  </a>
                </div>
              </div>

              {/* 3. Trending / Popular Posts Widget */}
              <div className="bg-white p-5 rounded-2xl border border-[#E8E1D0] shadow-xs space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-2 pb-2 border-b border-[#E8E1D0]">
                  <TrendingUp className="w-4 h-4 text-[#D4AF37]" />
                  <span>Popular Articles</span>
                </div>
                <div className="space-y-3">
                  {popularPosts.map((popPost, pIdx) => (
                    <div
                      key={popPost.id}
                      onClick={() => setActiveArticle(popPost)}
                      className="group flex items-center gap-3 cursor-pointer py-1"
                    >
                      <div className="w-16 h-14 rounded-lg overflow-hidden bg-gray-100 shrink-0 border border-[#E8E1D0]">
                        <OptimizedImage
                          src={popPost.imageUrl}
                          alt={popPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <span className="text-[10px] font-bold text-[#9A7B16] uppercase tracking-wider block truncate">
                          {popPost.category}
                        </span>
                        <h5 className="text-xs font-bold text-[#111111] group-hover:text-[#9A7B16] transition-colors leading-snug line-clamp-2">
                          {popPost.title}
                        </h5>
                        <span className="text-[10px] text-[#888888] flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#D4AF37]" />
                          {popPost.readTime}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
