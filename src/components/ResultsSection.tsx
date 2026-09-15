import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TypewriterText } from "./TypewriterText";
import { ScrollReveal } from "./motion/MotionReveal";
import { OptimizedImage } from "./ui/OptimizedImage";
import {
  TrendingUp,
  Target,
  Percent,
  Share2,
  DollarSign,
  BarChart3,
  Sparkles,
  CheckCircle2,
  Activity,
  Zap,
} from "lucide-react";

type MetricTabType = "leads" | "traffic" | "cro" | "ads" | "social";

export const ResultsSection: React.FC = () => {
  const [activeMetricTab, setActiveMetricTab] = useState<MetricTabType>("leads");

  const metricTabs: { id: MetricTabType; label: string; icon: typeof Target }[] = [
    { id: "leads", label: "Lead Generation", icon: Target },
    { id: "traffic", label: "Organic Search", icon: TrendingUp },
    { id: "cro", label: "Conversion Lift", icon: Percent },
    { id: "ads", label: "Ad Performance", icon: DollarSign },
    { id: "social", label: "Social Authority", icon: Share2 },
  ];

  const resultsData = {
    leads: {
      headline: "Qualified B2B & B2C Inbound Pipeline",
      description:
        "Systematic lead generation funnels engineered to convert anonymous web visitors into verified sales-ready inquiries.",
      imageUrl:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Qualified B2B & B2C Inbound Lead Generation Pipeline",
      badgeText: "VERIFIED PIPELINE FUNNEL",
      syncTag: "CRM & WHATSAPP SYNCED",
      visualMetricTitle: "Inbound Qualified Velocity",
      visualMetricValue: "+240% Pipeline Lift",
      graphBars: [32, 50, 78, 110, 145, 205],
      graphLabel: "Lead Surge",
      liveStatPill: "78% Qualified Rate • <2m Instant Dispatch",
      reportingText: "Automated CRM Sync + Daily WhatsApp Leads",
      kpis: [
        {
          label: "Target Qualified Rate",
          value: "78%",
          desc: "Verified phone & email authenticity",
        },
        { label: "Avg Lead Velocity", value: "< 2 Mins", desc: "Instant CRM & WhatsApp dispatch" },
        { label: "CPA Reduction", value: "-35%", desc: "Target quarterly optimization" },
      ],
      points: [
        "Multi-stage lead verification filtering out spam submissions",
        "Direct automated routing into your sales team’s CRM & WhatsApp",
        "Custom landing page copy speaking directly to decision-maker pain points",
      ],
    },
    traffic: {
      headline: "Compounding Organic Search Visibility",
      description:
        "White-hat technical SEO, intent-driven topic clusters, and Generative Engine Optimization (GEO) positioning.",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Compounding Organic Search & SEO Engine Ranking Metrics",
      badgeText: "GOOGLE SERP & GEO DOMINANCE",
      syncTag: "GSC & GA4 INTEGRATED",
      visualMetricTitle: "Organic Keyword Velocity",
      visualMetricValue: "+380% Search Impressions",
      graphBars: [20, 38, 65, 98, 142, 192],
      graphLabel: "SERP Climb",
      liveStatPill: "95+ Core Web Vitals • Page 1 Dominance",
      reportingText: "Weekly Keyword Tracking + Ranking Alerts",
      kpis: [
        { label: "Trajectory", value: "Compounding", desc: "Sustained keyword breadth" },
        { label: "Top 3 Keywords", value: "Page 1 Focus", desc: "High-intent commercial queries" },
        { label: "Core Web Vitals", value: "95+", desc: "Mobile and desktop speed health" },
      ],
      points: [
        "Zero-risk white-hat editorial link building from authoritative sites",
        "Structured schema.org markup enabling rich snippets and FAQ cards on Google",
        "Targeted long-tail capture answering exact high-ticket buyer searches",
      ],
    },
    cro: {
      headline: "Conversion Rate Optimization (CRO)",
      description:
        "Maximizing the revenue value of every single visitor without necessarily increasing your ad spend budget.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Conversion Rate Optimization Data Analytics & Funnel Dashboard",
      badgeText: "A/B STATISTICAL RIGOR",
      syncTag: "HEATMAP & SESSION REPLAY",
      visualMetricTitle: "Checkout Funnel Efficiency",
      visualMetricValue: "2.4x Multiplier Lift",
      graphBars: [38, 54, 72, 96, 134, 180],
      graphLabel: "Conversion Up",
      liveStatPill: "-28% Cart Drop-off • 95% Confidence",
      reportingText: "Bi-Weekly Variant Testing + Friction Audits",
      kpis: [
        {
          label: "Typical Funnel Uplift",
          value: "1.8x - 2.4x",
          desc: "From visitor to completed inquiry",
        },
        { label: "Abandonment Drop", value: "-28%", desc: "Frictionless checkout sequences" },
        { label: "Statistical Rigor", value: "95% CI", desc: "Data-verified winning variants" },
      ],
      points: [
        "User session recordings & heatmaps identifying exact user friction",
        "Form simplification reducing cognitive load and drop-off points",
        "Clear visual CTA hierarchy with mobile-first thumb-friendly controls",
      ],
    },
    ads: {
      headline: "High-ROAS Paid Media Architecture",
      description:
        "Laser-focused Google Search, Performance Max, and Meta Advantage+ campaigns built for commercial efficiency.",
      imageUrl:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "High-ROAS Performance Meta & Google Ads Architecture",
      badgeText: "HIGH-ROAS MEDIA ENGINE",
      syncTag: "CAPI & CONVERSIONS API",
      visualMetricTitle: "Blended Return On Ad Spend",
      visualMetricValue: "5.4x Blended ROAS",
      graphBars: [25, 48, 85, 118, 160, 218],
      graphLabel: "ROAS Scale",
      liveStatPill: "Zero Ad Waste • Daily Bid Calibrations",
      reportingText: "Real-Time ROAS Telemetry + Weekly Review",
      kpis: [
        {
          label: "Target Blended ROAS",
          value: "3.5x - 6.0x",
          desc: "Across e-commerce & D2C stores",
        },
        {
          label: "Ad Waste Pruning",
          value: "Up to 40%",
          desc: "Negative keyword & cohort pruning",
        },
        { label: "Optimization Cycles", value: "Daily", desc: "Bid calibrations & budget shifts" },
      ],
      points: [
        "Algorithmic audience segmentation matching purchase readiness",
        "Dynamic creative testing identifying top-performing hooks & visuals",
        "First-party pixel data tracking bypassing iOS privacy signal loss",
      ],
    },
    social: {
      headline: "Brand Authority & Viral Social Engagement",
      description:
        "High-energy video reels, executive LinkedIn thought leadership, and engaged community cultivation.",
      imageUrl:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "High-end Video Production Studio Filming Social Media Authority Content",
      badgeText: "VIRAL REACH & INFLUENCE",
      syncTag: "MULTI-PLATFORM BROADCAST",
      visualMetricTitle: "Audience Reach & Inbound DMs",
      visualMetricValue: "1.2M+ Monthly Reach",
      graphBars: [30, 52, 78, 122, 168, 225],
      graphLabel: "Reach Spike",
      liveStatPill: "8.2% Avg Engagement • 20 Reels / Mo",
      reportingText: "Monthly Content Matrix + Analytics Dashboard",
      kpis: [
        { label: "Engagement Rate", value: "5.8% - 8.2%", desc: "Industry benchmark comparison" },
        {
          label: "Short-Form Velocity",
          value: "15-20 /mo",
          desc: "Scripted, edited & optimized reels",
        },
        {
          label: "Inbound Brand DMs",
          value: "High Intent",
          desc: "Organic social lead generation",
        },
      ],
      points: [
        "Storytelling formats designed to stop aggressive social feeds",
        "Executive personal branding positioning founders as industry authorities",
        "Strategic hashtag architecture and collaboration tag structures",
      ],
    },
  };

  const current = resultsData[activeMetricTab];

  return (
    <section className="relative py-24 bg-white" id="results-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={24} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>COMMERCIAL IMPACT FRAMEWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] font-heading tracking-tight leading-tight min-h-[1.2em]">
            <TypewriterText
              phrases={[
                "From Visibility to Revenue",
                "From Traffic to Customers",
                "Measurable Business Growth",
              ]}
            />
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-4 leading-relaxed">
            How we translate clicks, impressions, and algorithms into verifiable commercial
            pipeline, higher revenue, and long-term brand equity.
          </p>
        </ScrollReveal>

        {/* Tab Buttons */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {metricTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeMetricTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveMetricTab(tab.id)}
                className={`relative px-4 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "bg-[#F8F8F6] text-[#555555] hover:text-[#111111] hover:bg-white border border-[#E8E1D0]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeResultsTab"
                    className="absolute inset-0 rounded-md bg-[#111111] border border-[#D4AF37] shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon
                  className={`w-3.5 h-3.5 relative z-10 ${isActive ? "text-[#D4AF37]" : "text-[#9A7B16]"}`}
                />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Results Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMetricTab}
            initial={{ opacity: 0, y: 15, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.99 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-[#F8F8F6] border border-[#E8E1D0] p-6 sm:p-10 shadow-[0_10px_35px_-10px_rgba(17,17,17,0.06)] overflow-hidden"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EAE6D8]/60 text-[#9A7B16] text-[10px] font-bold uppercase tracking-widest font-mono mb-2 border border-[#E8E1D0]">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    <span>{current.badgeText}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading mt-1">
                    {current.headline}
                  </h3>
                  <p className="text-[#555555] text-xs sm:text-sm mt-2 leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* 3 KPIs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {current.kpis.map((kpi, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="p-4 rounded-xl bg-white border border-[#E8E1D0] shadow-xs"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading">
                        {kpi.value}
                      </div>
                      <div className="text-xs font-bold text-[#111111] mt-1 font-heading">
                        {kpi.label}
                      </div>
                      <div className="text-[10px] text-[#555555] mt-0.5">{kpi.desc}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Execution Checklist */}
                <div className="space-y-2.5 pt-1">
                  {current.points.map((pt, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-[#111111]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual HUD with Topic-Specific Custom Image & Live Telemetry */}
              <div className="lg:col-span-5 rounded-2xl bg-[#111111] border border-[#D4AF37] overflow-hidden text-white shadow-xl flex flex-col">
                {/* Topic Specific Image Container */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#1a1a1a] group">
                  <OptimizedImage
                    key={current.imageUrl}
                    priority
                    src={current.imageUrl}
                    alt={current.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Status Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[9px] bg-black/75 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/50 px-2.5 py-1 rounded-full font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                      {current.badgeText}
                    </span>
                    <span className="text-[9px] bg-white/15 backdrop-blur-md text-[#E8E1D0] px-2 py-0.5 rounded font-mono font-bold border border-white/10">
                      {current.syncTag}
                    </span>
                  </div>

                  {/* Bottom Caption inside Image */}
                  <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-white font-bold text-xs bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                      <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{current.visualMetricTitle}</span>
                    </div>
                    <span className="text-[#D4AF37] font-mono font-bold text-xs bg-black/80 px-2.5 py-1 rounded-md border border-[#D4AF37]/40 shadow-xs">
                      {current.visualMetricValue}
                    </span>
                  </div>
                </div>

                {/* Telemetry Dashboard Data below Image */}
                <div className="p-5 space-y-4 bg-[#111111]">
                  {/* Growth Graph */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs text-[#E8E1D0]">
                      <span className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Quarterly Execution Metric</span>
                      </span>
                      <span className="text-[10px] text-[#D4AF37] font-mono font-bold bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20">
                        {current.liveStatPill}
                      </span>
                    </div>
                    <div className="h-20 flex items-end gap-2.5 pt-3 px-2 border-b border-white/10">
                      {current.graphBars.map((v, i) => {
                        const maxVal = Math.max(...current.graphBars);
                        return (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${(v / maxVal) * 100}%` }}
                              transition={{ duration: 0.5, delay: i * 0.06 }}
                              className="w-full rounded-t bg-gradient-to-t from-[#9A7B16] to-[#D4AF37] hover:brightness-110 transition-all"
                            />
                            <span className="text-[9px] text-[#E8E1D0] font-mono">Q{i + 1}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Footer status */}
                  <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#E8E1D0] text-[11px]">Reporting Cadence:</span>
                    <span className="text-white font-bold text-[11px]">
                      {current.reportingText}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
