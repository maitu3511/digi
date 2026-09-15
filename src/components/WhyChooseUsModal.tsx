import React, { useEffect } from "react";
import {
  X,
  Target,
  BarChart2,
  Sparkles,
  Eye,
  TrendingUp,
  Users,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";
import { WhyChooseUsItem } from "../types";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface WhyChooseUsModalProps {
  item: WhyChooseUsItem | null;
  allItems: WhyChooseUsItem[];
  onClose: () => void;
  onSelectAnother: (item: WhyChooseUsItem) => void;
  onOpenConsultation: () => void;
}

export const WhyChooseUsModal: React.FC<WhyChooseUsModalProps> = ({
  item,
  allItems,
  onClose,
  onSelectAnother,
  onOpenConsultation,
}) => {
  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [item]);

  if (!item) return null;

  const currentIndex = allItems.findIndex((i) => i.id === item.id);
  const prevItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const nextItem = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

  const getCardIcon = (iconName: string, className = "w-6 h-6 text-[#D4AF37]") => {
    switch (iconName) {
      case "Target":
        return <Target className={className} />;
      case "BarChart2":
        return <BarChart2 className={className} />;
      case "Sparkles":
        return <Sparkles className={className} />;
      case "Eye":
        return <Eye className={className} />;
      case "TrendingUp":
        return <TrendingUp className={className} />;
      default:
        return <Users className={className} />;
    }
  };

  const whatsappMsg = `Hello DigiBasera Team, I was reading your approach on "${item.title} (${item.highlight})" on your website. I want to discuss how your team can help scale my business with this transparent, human-first strategy.`;
  const whatsappUrl = getWhatsAppUrl(whatsappMsg);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-[#D4AF37] rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Header */}
        <div className="p-4 sm:p-6 border-b border-[#E8E1D0] bg-[#FAF8F4] shrink-0 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#111111] border border-[#D4AF37]/60 flex items-center justify-center shrink-0 shadow-md">
              {getCardIcon(item.iconName, "w-6 h-6 text-[#D4AF37]")}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#9A7B16] bg-white px-2.5 py-0.5 rounded border border-[#E8E1D0] font-heading">
                  Pillar {item.number} of 06
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-[#888888] bg-[#EFECE6] px-2 py-0.5 rounded">
                  {item.highlight}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111] leading-tight">
                {item.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-[#E8E1D0] hover:border-[#D4AF37] hover:bg-[#FAF9F5] text-[#555555] hover:text-[#111111] flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-xs"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Pillar Tabs / Navigator */}
        <div className="bg-[#F3EFE6] px-4 py-2 border-b border-[#E8E1D0] flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
          <span className="text-[10px] uppercase tracking-wider font-bold text-[#777777] mr-1 shrink-0">
            Switch Pillar:
          </span>
          {allItems.map((p) => {
            const isActive = p.id === item.id;
            return (
              <button
                key={p.id}
                onClick={() => onSelectAnother(p)}
                className={`text-xs px-2.5 py-1 rounded-md transition-all font-medium shrink-0 flex items-center gap-1 cursor-pointer ${
                  isActive
                    ? "bg-[#111111] text-[#D4AF37] font-bold shadow-xs"
                    : "bg-white/80 text-[#555555] hover:bg-white hover:text-[#111111] border border-[#E8E1D0]"
                }`}
              >
                <span className="font-mono text-[10px] text-[#9A7B16]">{p.number}</span>
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8 text-sm sm:text-base leading-relaxed bg-[#FFFFFF]">
          {/* Tagline / Subtitle */}
          {item.tagline && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#FAF8F2] via-[#F5EFE1] to-[#FAF8F2] border border-[#E8DCC0] flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[#9A7B16] shrink-0 mt-0.5" />
              <p className="font-medium text-[#111111] italic text-sm sm:text-base">
                "{item.tagline}"
              </p>
            </div>
          )}

          {/* 1. Human Perspective / Philosophy */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <HeartHandshake className="w-5 h-5 text-[#9A7B16]" />
              <h3 className="text-base sm:text-lg font-bold text-[#111111] font-heading">
                Our Philosophy & Ground Perspective
              </h3>
            </div>
            <p className="text-[#444444] bg-[#FAF9F5] p-5 rounded-xl border border-[#E8E1D0] leading-relaxed text-sm sm:text-[15px]">
              {item.humanPerspective || item.description}
            </p>
          </div>

          {/* 2. Real World Problem vs Our Human Approach */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* The Real Problem */}
            <div className="p-5 rounded-xl bg-[#FFF9F9] border border-[#FFD9D9] flex flex-col">
              <div className="flex items-center gap-2 text-[#C53030] font-bold text-sm mb-2.5 font-heading">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>The Industry Reality (What Most Agencies Do)</span>
              </div>
              <p className="text-xs sm:text-sm text-[#664444] leading-relaxed">
                {item.realWorldProblem ||
                  "Most agencies rely on generic templates and recycled slide decks, burning ad budgets without understanding customer psychology or unit margins."}
              </p>
            </div>

            {/* Our Human Commitment */}
            <div className="p-5 rounded-xl bg-[#F6FAF6] border border-[#C8E6C9] flex flex-col">
              <div className="flex items-center gap-2 text-[#2E7D32] font-bold text-sm mb-2.5 font-heading">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>The DigiBasera Commitment (How We Actually Work)</span>
              </div>
              <p className="text-xs sm:text-sm text-[#2D5A30] leading-relaxed">
                {item.ourHumanApproach ||
                  "We listen first, understand your margins and customer objections, and only launch campaigns when there is a clear, mathematical path to net profit."}
              </p>
            </div>
          </div>

          {/* 3. Key Pillars */}
          {item.keyPillars && item.keyPillars.length > 0 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#111111] font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                Core Execution Pillars
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {item.keyPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] transition-all shadow-xs"
                  >
                    <div className="text-[#9A7B16] font-mono text-xs font-bold mb-1">
                      0{idx + 1}.
                    </div>
                    <h4 className="font-bold text-sm text-[#111111] font-heading mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#555555] leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Daily Actions */}
          {item.dailyActions && item.dailyActions.length > 0 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#111111] font-heading mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#9A7B16]" />
                Daily Ground Actions: What Our Team Executes for You
              </h3>
              <div className="space-y-2.5">
                {item.dailyActions.map((action, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-[#FAF8F4] border border-[#EAE4D4] text-xs sm:text-sm text-[#333333]"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#111111] text-[#D4AF37] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Client Promise / Takeaway Box */}
          {item.clientTakeaway && (
            <div className="p-5 rounded-xl bg-[#111111] text-white border border-[#D4AF37] shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">
                  OUR HONEST COMMITMENT
                </span>
                <p className="text-sm sm:text-base font-semibold text-[#FAF9F5] leading-snug">
                  "{item.clientTakeaway}"
                </p>
              </div>
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] text-xs font-bold uppercase tracking-wider shrink-0 transition-transform active:scale-95 cursor-pointer shadow-md"
              >
                Discuss With Us
              </button>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer with Prev/Next Navigation and CTAs */}
        <div className="p-4 sm:p-5 border-t border-[#E8E1D0] bg-[#FAF8F4] shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Prev / Next controls */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
            {prevItem ? (
              <button
                onClick={() => onSelectAnother(prevItem)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-[#E8E1D0] hover:border-[#D4AF37] text-xs font-semibold text-[#444444] hover:text-[#111111] transition-all cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#9A7B16]" />
                <span className="hidden sm:inline">Previous:</span> {prevItem.number}
              </button>
            ) : (
              <div />
            )}

            {nextItem ? (
              <button
                onClick={() => onSelectAnother(nextItem)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-[#E8E1D0] hover:border-[#D4AF37] text-xs font-semibold text-[#444444] hover:text-[#111111] transition-all cursor-pointer shadow-xs"
              >
                <span className="hidden sm:inline">Next:</span> {nextItem.number}{" "}
                <ArrowRight className="w-3.5 h-3.5 text-[#9A7B16]" />
              </button>
            ) : (
              <div />
            )}
          </div>

          {/* Direct Actions: WhatsApp + Discovery Call */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp Inquiry</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#111111] hover:bg-[#222222] text-[#D4AF37] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-xs font-bold tracking-wide uppercase transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <span>Schedule Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
