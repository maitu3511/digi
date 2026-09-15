import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LIVE_CLIENT_WEBSITES } from "../data/agencyData";
import { LiveClientWebsite } from "../types";
import { OptimizedImage } from "./ui/OptimizedImage";
import {
  ExternalLink,
  Globe,
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  ArrowUpRight,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface ClientWebsitesSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const ClientWebsitesSection: React.FC<ClientWebsitesSectionProps> = ({
  onOpenConsultation,
}) => {
  const [activePreviewSite, setActivePreviewSite] = useState<LiveClientWebsite | null>(null);

  return (
    <div className="space-y-10" id="live-client-websites">
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
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Featured Client Web Deployments</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] font-heading tracking-tight">
            High-Performance Web Platforms & Portals
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] mt-1.5 max-w-2xl leading-relaxed">
            Directly inspect the real website layouts and user interfaces engineered for sub-second
            speeds, high conversion rates, and SEO authority.
          </p>
        </div>

        <button
          onClick={() => onOpenConsultation("Custom Web App / Portal Development")}
          className="self-start md:self-auto px-5 py-2.5 rounded-lg bg-[#111111] hover:bg-black text-[#D4AF37] hover:text-white border border-[#D4AF37] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Build Your Website</span>
        </button>
      </motion.div>

      {/* Websites Grid with Staggered Motion */}
      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        {LIVE_CLIENT_WEBSITES.map((site, idx) => (
          <motion.div
            key={site.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(212,175,55,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
          >
            {/* Top Mockup Frame / Browser Header */}
            <div className="bg-[#111111] px-4 py-3 border-b border-white/10 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
              </div>

              {/* Fake Address Bar with Direct Live Link */}
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-[200px] sm:max-w-[220px] bg-white/10 hover:bg-white/20 px-3 py-1 rounded text-[11px] text-[#E8E1D0] hover:text-white font-mono truncate flex items-center justify-center gap-1.5 transition-colors"
                title={`Visit ${site.displayUrl}`}
              >
                <Globe className="w-3 h-3 text-[#D4AF37] shrink-0" />
                <span className="truncate">{site.displayUrl}</span>
                <ExternalLink className="w-2.5 h-2.5 text-[#D4AF37] shrink-0 opacity-80" />
              </a>

              <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30">
                Live
              </span>
            </div>

            {/* Visual Screenshot / Preview with Hover Zoom & Click to Inspect */}
            <div
              onClick={() => setActivePreviewSite(site)}
              className="relative h-72 sm:h-80 overflow-hidden bg-[#1E1E1E] cursor-pointer group/img"
            >
              <OptimizedImage
                src={site.imageUrl}
                alt={`${site.name} Website UI Preview`}
                className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-black/20 to-transparent group-hover/img:bg-black/40 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover/img:opacity-100 transition-opacity px-3.5 py-1.5 rounded-full bg-black/80 text-[#D4AF37] border border-[#D4AF37]/50 text-xs font-bold flex items-center gap-1.5 backdrop-blur-md shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Full UI</span>
                </span>
              </div>

              {/* Floating Industry Badge */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#111111]/90 text-[#D4AF37] border border-[#D4AF37]/40 backdrop-blur-md">
                  {site.industry}
                </span>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-3 left-4 right-4">
                <h3 className="text-xl font-bold text-white font-heading tracking-tight group-hover:text-[#D4AF37] transition-colors">
                  {site.name}
                </h3>
                <p className="text-xs text-[#E8E1D0] font-medium mt-0.5 line-clamp-1">
                  {site.tagline}
                </p>
              </div>
            </div>

            {/* Clean Action Footer */}
            <div className="p-4 bg-white border-t border-[#E8E1D0] flex items-center justify-between gap-3">
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-lg bg-[#111111] hover:bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs group/btn"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={() => setActivePreviewSite(site)}
                className="py-2.5 px-3 rounded-lg bg-[#F8F8F6] hover:bg-[#E8E1D0] text-[#111111] border border-[#E8E1D0] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                title="Inspect UI"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#9A7B16]" />
                <span className="hidden sm:inline">Preview</span>
              </button>

              <a
                href={getWhatsAppUrl(
                  `Hi Digi Basera team, I saw your live client website work for ${site.name} (${site.displayUrl}) and want to build a similar website for my business.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center transition-all shadow-xs"
                title="Inquire on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Website UI Screenshot Modal */}
      <AnimatePresence>
        {activePreviewSite && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-[#111111] border border-[#D4AF37] rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActivePreviewSite(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 z-10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                {/* Header inside modal */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 pr-8">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40">
                        {activePreviewSite.industry}
                      </span>
                      <span className="text-xs text-white/60 font-mono">
                        {activePreviewSite.displayUrl}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white font-heading mt-1">
                      {activePreviewSite.name} — Website UI Layout
                    </h3>
                  </div>

                  <a
                    href={activePreviewSite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>Visit {activePreviewSite.displayUrl}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Full Desktop Screenshot Preview */}
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                  {/* Simulated browser bar */}
                  <div className="bg-[#1E1E1E] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="text-[11px] font-mono text-white/70 bg-black/40 px-4 py-1 rounded">
                      https://{activePreviewSite.displayUrl}
                    </div>
                    <div className="w-8" />
                  </div>

                  <OptimizedImage
                    priority
                    src={activePreviewSite.imageUrl}
                    alt={`${activePreviewSite.name} Full UI Screenshot`}
                    className="w-full h-auto object-cover"
                    containerClassName="w-full min-h-[300px]"
                  />
                </div>

                {/* Bottom Specs & Actions */}
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#E8E1D0] space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block font-heading">
                      Design & Performance Summary
                    </span>
                    <p>{activePreviewSite.summary}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#E8E1D0] space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block font-heading">
                      Key Performance Outcome
                    </span>
                    <p>{activePreviewSite.impact}</p>
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
