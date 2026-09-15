import React from "react";
import { X, Check, ArrowRight, Layers, Sparkles, Trash2 } from "lucide-react";
import { PricingServiceCatalogueItem } from "../types";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface CompareServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServices: PricingServiceCatalogueItem[];
  onRemoveService: (id: string) => void;
  onClearAll: () => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const CompareServicesModal: React.FC<CompareServicesModalProps> = ({
  isOpen,
  onClose,
  selectedServices,
  onRemoveService,
  onClearAll,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white border border-[#E8E1D0] rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E8E1D0] bg-[#FAF9F5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E1D0] flex items-center justify-center text-[#D4AF37] shadow-xs">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16] font-heading">
                  Service Comparison
                </span>
                <span className="text-[10px] bg-[#111111] text-white px-2 py-0.5 rounded-full font-mono">
                  {selectedServices.length}/3 Selected
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] font-heading">
                Compare Agency Capabilities & Rates
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {selectedServices.length > 0 && (
              <button
                onClick={onClearAll}
                className="px-3 py-1.5 rounded-lg border border-[#E8E1D0] text-xs font-semibold text-[#666666] hover:text-red-600 hover:border-red-200 transition-colors flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white hover:bg-[#F8F8F6] border border-[#E8E1D0] flex items-center justify-center text-[#555555] hover:text-[#111111] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {selectedServices.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <Layers className="w-12 h-12 text-[#D4AF37] mx-auto opacity-50" />
              <h4 className="text-lg font-bold text-[#111111] font-heading">
                No Services Selected
              </h4>
              <p className="text-xs text-[#666666] max-w-md mx-auto">
                Select up to 3 services from the pricing catalogue using the &quot;Compare&quot;
                checkbox on any service card to view a side-by-side breakdown.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg bg-[#111111] text-white font-bold text-xs uppercase tracking-wider"
              >
                Browse Catalogue
              </button>
            </div>
          ) : (
            <div className={`grid grid-cols-1 md:grid-cols-${selectedServices.length} gap-6`}>
              {selectedServices.map((srv) => (
                <div
                  key={srv.id}
                  className="rounded-xl border border-[#E8E1D0] bg-[#FAF9F5] p-5 flex flex-col justify-between hover:border-[#D4AF37] transition-all relative"
                >
                  <button
                    onClick={() => onRemoveService(srv.id)}
                    className="absolute top-3 right-3 p-1 rounded-full bg-white border border-[#E8E1D0] text-[#888888] hover:text-red-600 transition-colors"
                    title="Remove from comparison"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16] block mb-1 font-heading">
                        {srv.categoryName || "Practice Service"}
                      </span>
                      <h4 className="text-lg font-bold text-[#111111] font-heading pr-6">
                        {srv.name}
                      </h4>
                      <p className="text-xs text-[#666666] mt-1 line-clamp-2">{srv.shortDesc}</p>
                    </div>

                    {/* Price Block */}
                    <div className="p-3.5 rounded-lg bg-white border border-[#E8E1D0]">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#888888] block font-heading">
                        Starting From
                      </span>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-2xl font-bold text-[#111111] font-heading">
                          {srv.startingPrice}
                        </span>
                        <span className="text-xs font-semibold text-[#777777]">
                          {srv.billingType}
                        </span>
                      </div>
                    </div>

                    {/* Inclusions */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#111111] block font-heading">
                        Included Scope:
                      </span>
                      <ul className="space-y-1.5">
                        {(srv.fullInclusions || srv.inclusions).map((inc, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#444444]">
                            <div className="w-4 h-4 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-[#9A7B16]" />
                            </div>
                            <span className="leading-tight">{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="pt-6 mt-6 border-t border-[#E8E1D0] space-y-2">
                    <a
                      href={getWhatsAppUrl(
                        srv.whatsappMessage ||
                          `Hello, I am interested in ${srv.name}. Please share more details and a quotation.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Get Quote On WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        onClose();
                        onOpenConsultation(srv.name);
                      }}
                      className="w-full py-2 px-3 rounded-lg bg-[#111111] hover:bg-[#222222] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Request Scope Proposal</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#E8E1D0] bg-[#FAF9F5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#666666]">
          <p>
            * All prices shown are starting rates. Final scope and deliverables are customized to
            your commercial goals.
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#111111] text-white font-bold text-xs uppercase tracking-wider shrink-0"
          >
            Done Comparing
          </button>
        </div>
      </div>
    </div>
  );
};
