import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  ArrowRight,
  Target,
  Layers,
  Clock,
  Wrench,
  Briefcase,
  ExternalLink,
  Sparkles,
  ListOrdered,
  Workflow,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { OptimizedImage } from "./ui/OptimizedImage";
import { ServiceCategory, ServiceItem } from "../types";
import { getServiceWhatsAppUrl } from "../utils/whatsapp";
import { PORTFOLIO_CASE_STUDIES } from "../data/agencyData";
import { getServiceExtendedDetails } from "../data/serviceDetailsData";

interface ServiceModalProps {
  service: ServiceItem | null;
  category: ServiceCategory | null;
  onClose: () => void;
  onOpenConsultation: (serviceName: string) => void;
  onNavigate?: (page: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  category,
  onClose,
  onOpenConsultation,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<"all" | "subservices" | "steps" | "case-studies">(
    "all",
  );
  const [expandedSubService, setExpandedSubService] = useState<string | null>(null);

  if (!service || !category) return null;

  // Retrieve extended sub-services and execution steps
  const extendedDetails = getServiceExtendedDetails(service.id, service.title, category.title);
  const subServices =
    service.subServices && service.subServices.length > 0
      ? service.subServices
      : extendedDetails.subServices;
  const executionSteps =
    service.executionSteps && service.executionSteps.length > 0
      ? service.executionSteps
      : extendedDetails.executionSteps;

  // Find related case studies by ID or category
  const relatedStudies = PORTFOLIO_CASE_STUDIES.filter((cs) => {
    if (service.relatedCaseStudyIds && service.relatedCaseStudyIds.includes(cs.id)) {
      return true;
    }
    if (
      service.portfolioCategory &&
      cs.category.toLowerCase() === service.portfolioCategory.toLowerCase()
    ) {
      return true;
    }
    if (
      category.portfolioCategory &&
      cs.category.toLowerCase() === category.portfolioCategory.toLowerCase()
    ) {
      return true;
    }
    return false;
  });

  const displayStudies =
    relatedStudies.length > 0 ? relatedStudies : PORTFOLIO_CASE_STUDIES.slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white border border-[#D4AF37] rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E8E1D0] flex items-center justify-between bg-[#F8F8F6] shrink-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#9A7B16] bg-white px-3 py-1 rounded-md border border-[#E8E1D0] font-heading shadow-xs">
              {category.title}
            </span>
            <span className="text-xs text-[#555555] font-mono hidden sm:inline-block">
              Discipline #{category.number}
            </span>
            <span className="text-xs text-[#888888] hidden md:inline-block">•</span>
            <span className="text-xs font-semibold text-[#111111] hidden md:inline-block">
              {service.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white border border-[#E8E1D0] text-[#555555] hover:text-[#111111] hover:border-[#111111] transition-colors shadow-xs"
            title="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Section Filter Pills inside Modal */}
        <div className="px-5 sm:px-8 py-2.5 bg-[#FFFFFF] border-b border-[#E8E1D0] flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-none">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === "all"
                ? "bg-[#111111] text-white shadow-xs"
                : "bg-[#F8F8F6] text-[#555555] hover:text-[#111111] border border-[#E8E1D0]"
            }`}
          >
            Full Service Overview
          </button>
          <button
            onClick={() => setActiveTab("subservices")}
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
              activeTab === "subservices"
                ? "bg-[#D4AF37] text-[#111111] shadow-xs"
                : "bg-[#F8F8F6] text-[#555555] hover:text-[#111111] border border-[#E8E1D0]"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Sub-Services / Parts ({subServices.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("steps")}
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
              activeTab === "steps"
                ? "bg-[#D4AF37] text-[#111111] shadow-xs"
                : "bg-[#F8F8F6] text-[#555555] hover:text-[#111111] border border-[#E8E1D0]"
            }`}
          >
            <Workflow className="w-3.5 h-3.5" />
            <span>Step-by-Step Process ({executionSteps.length} Steps)</span>
          </button>
          <button
            onClick={() => setActiveTab("case-studies")}
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
              activeTab === "case-studies"
                ? "bg-[#D4AF37] text-[#111111] shadow-xs"
                : "bg-[#F8F8F6] text-[#555555] hover:text-[#111111] border border-[#E8E1D0]"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Verified Results</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8 flex-1">
          {/* Header with Image & Overview */}
          {(activeTab === "all" || activeTab === "subservices") && (
            <div className="grid md:grid-cols-12 gap-6 items-start">
              {service.imageUrl && (
                <div className="md:col-span-5 rounded-xl overflow-hidden border border-[#E8E1D0] shadow-sm relative group bg-[#111111] aspect-[16/10] md:aspect-auto md:h-full min-h-[220px]">
                  <OptimizedImage
                    priority
                    src={service.imageUrl}
                    alt={`${service.title} — ${category.title} service by DigiBasera`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4 pointer-events-none z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] font-heading">
                      {category.badge}
                    </span>
                    <span className="text-white text-sm font-semibold line-clamp-1">
                      {service.title}
                    </span>
                  </div>
                </div>
              )}

              <div
                className={
                  service.imageUrl ? "md:col-span-7 space-y-3.5" : "md:col-span-12 space-y-3.5"
                }
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#9A7B16] font-heading block mb-1">
                    Complete Service Specification
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-heading">
                    {service.title}
                  </h2>
                </div>

                <p className="text-[#444444] text-xs sm:text-sm leading-relaxed">
                  {service.description || service.shortDesc}
                </p>

                {/* Meta Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {service.timeline && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F8F8F6] border border-[#E8E1D0] text-xs font-medium text-[#111111]">
                      <Clock className="w-3.5 h-3.5 text-[#9A7B16]" />
                      <span>
                        Timeline: <strong>{service.timeline}</strong>
                      </span>
                    </div>
                  )}
                  {service.idealFor && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F8F8F6] border border-[#E8E1D0] text-xs text-[#444444]">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>
                        Best For: <strong>{service.idealFor}</strong>
                      </span>
                    </div>
                  )}
                </div>

                {/* Direct Impact callout */}
                <div className="p-3 rounded-lg bg-[#111111] text-white flex items-start gap-2.5 text-xs shadow-xs">
                  <Zap className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#D4AF37] font-bold block uppercase tracking-wider text-[10px]">
                      Expected Commercial Yield:
                    </span>
                    <span className="text-gray-100 font-medium">
                      {service.targetOutcome || service.roiImpact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 1. SUB-SERVICES / INCLUDED PARTS (1 BY 1) SECTION */}
          {(activeTab === "all" || activeTab === "subservices") && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E1D0]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] flex items-center justify-center text-[#9A7B16]">
                    <Layers className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111111] font-heading">
                      Service Parts & Capabilities (1 by 1 Breakdown)
                    </h3>
                    <p className="text-xs text-[#555555]">
                      Detailed sub-service capabilities and deliverables included under{" "}
                      {service.title}.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold font-mono text-[#9A7B16] bg-[#F8F8F6] px-2.5 py-1 rounded border border-[#E8E1D0]">
                  {subServices.length} Components
                </span>
              </div>

              {/* Sub-services 1 by 1 List */}
              <div className="space-y-3.5">
                {subServices.map((part, index) => {
                  const isExpanded =
                    expandedSubService === part.id ||
                    activeTab === "subservices" ||
                    subServices.length <= 4;
                  return (
                    <div
                      key={part.id || index}
                      className="rounded-xl bg-[#F8F8F6] border border-[#E8E1D0] hover:border-[#D4AF37] transition-all p-5 shadow-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full bg-[#111111] text-[#D4AF37] font-bold text-xs flex items-center justify-center shrink-0 font-heading mt-0.5">
                            {index + 1}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16] bg-white px-2 py-0.5 rounded border border-[#E8E1D0] font-heading">
                                {part.badge || `Part 0${index + 1}`}
                              </span>
                              <h4 className="text-base font-bold text-[#111111] font-heading">
                                {part.title}
                              </h4>
                            </div>
                            <p className="text-xs text-[#555555] leading-relaxed max-w-3xl">
                              {part.description}
                            </p>
                          </div>
                        </div>

                        {part.keyBenefit && (
                          <div className="sm:self-start shrink-0 px-3 py-1 rounded bg-white border border-[#E8E1D0] text-[11px] text-[#111111]">
                            <span className="text-[#9A7B16] font-bold">Key Benefit:</span>{" "}
                            {part.keyBenefit}
                          </div>
                        )}
                      </div>

                      {/* Part Deliverables */}
                      {part.deliverables && part.deliverables.length > 0 && (
                        <div className="mt-4 pt-3.5 border-t border-[#E8E1D0]/80">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#111111] font-heading block mb-2">
                            Deliverables & What&apos;s Included in Part {index + 1}:
                          </span>
                          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                            {part.deliverables.map((deliv, dIdx) => (
                              <div
                                key={dIdx}
                                className="flex items-start gap-2 text-xs text-[#333333] bg-white p-2 rounded-md border border-[#E8E1D0]"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#9A7B16] shrink-0 mt-0.5" />
                                <span className="leading-tight font-medium">{deliv}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 2. STEP-BY-STEP PROCESS / EXECUTION ROADMAP (STEPS KE ACCORDING) SECTION */}
          {(activeTab === "all" || activeTab === "steps") && (
            <div className="space-y-4 pt-4 border-t border-[#E8E1D0]">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E1D0]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#111111] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111111] font-heading">
                      Execution Steps & Implementation Workflow (Steps Roadmap)
                    </h3>
                    <p className="text-xs text-[#555555]">
                      Step-by-step roadmap showing how {service.title} is executed from discovery to
                      live scaling.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold font-mono text-[#111111] bg-[#D4AF37] px-2.5 py-1 rounded">
                  {executionSteps.length} Sequential Steps
                </span>
              </div>

              {/* Steps Vertical Timeline */}
              <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:top-3 before:bottom-3 before:left-3 sm:before:left-4 before:w-0.5 before:bg-[#E8E1D0]">
                {executionSteps.map((st, sIdx) => (
                  <div key={sIdx} className="relative group">
                    {/* Stepper Dot */}
                    <div className="absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full bg-[#111111] border-2 border-[#D4AF37] text-white flex items-center justify-center text-[10px] font-bold font-heading shadow-xs">
                      {sIdx + 1}
                    </div>

                    <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#E8E1D0] group-hover:border-[#D4AF37] transition-all shadow-xs space-y-2.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16] bg-[#F8F8F6] px-2 py-0.5 rounded border border-[#E8E1D0] font-heading">
                            {st.stepNumber || `Step 0${sIdx + 1}`}
                          </span>
                          <h4 className="text-base font-bold text-[#111111] font-heading">
                            {st.title}
                          </h4>
                        </div>
                        {st.duration && (
                          <span className="text-[11px] font-mono text-[#555555] bg-[#F8F8F6] px-2.5 py-1 rounded border border-[#E8E1D0] self-start sm:self-auto">
                            ⏱ {st.duration}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#555555] leading-relaxed">{st.description}</p>

                      {st.deliverables && st.deliverables.length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-2 items-center">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#111111] font-heading">
                            Step Deliverables:
                          </span>
                          {st.deliverables.map((del, dIdx) => (
                            <span
                              key={dIdx}
                              className="text-[11px] text-[#111111] bg-[#F8F8F6] px-2 py-0.5 rounded border border-[#E8E1D0] font-medium"
                            >
                              ✓ {del}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. TOOLING, TECH STACK & METHODOLOGY */}
          {(activeTab === "all" || activeTab === "subservices") &&
            service.toolsUsed &&
            service.toolsUsed.length > 0 && (
              <div className="p-5 rounded-xl bg-[#F8F8F6] border border-[#E8E1D0] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9A7B16] font-heading">
                  <Wrench className="w-4 h-4 text-[#D4AF37]" />
                  <span>Enterprise Tooling & Technology Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.toolsUsed.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-white text-[#111111] border border-[#E8E1D0] shadow-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

          {/* 4. RELATED WORK & PORTFOLIO CASE STUDIES */}
          {(activeTab === "all" || activeTab === "case-studies") && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between pb-2 border-b border-[#E8E1D0]">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#9A7B16]" />
                  <h4 className="text-base font-bold text-[#111111] font-heading uppercase tracking-wider">
                    Related Work & Verified Portfolio Results
                  </h4>
                </div>

                {onNavigate && (
                  <button
                    onClick={() => {
                      onClose();
                      onNavigate("portfolio");
                    }}
                    className="text-xs font-bold text-[#9A7B16] hover:text-[#111111] flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>All Case Studies</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {displayStudies.map((cs) => (
                  <div
                    key={cs.id}
                    className="rounded-xl bg-[#F8F8F6] border border-[#E8E1D0] overflow-hidden flex flex-col justify-between hover:border-[#D4AF37] transition-all group shadow-xs"
                  >
                    <div className="relative h-36 overflow-hidden bg-black">
                      <OptimizedImage
                        src={cs.imageUrl}
                        alt={cs.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-black/75 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider z-10">
                        {cs.industry}
                      </div>
                    </div>

                    <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                      <div>
                        <h5 className="text-sm font-bold text-[#111111] font-heading group-hover:text-[#9A7B16] transition-colors">
                          {cs.title}
                        </h5>
                        <p className="text-xs text-[#555555] mt-1 line-clamp-2 leading-relaxed">
                          {cs.summary}
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-1.5 py-2 border-y border-[#E8E1D0] text-center bg-white rounded p-1.5">
                        {cs.metrics.map((m, idx) => (
                          <div key={idx} className="px-1">
                            <span className="text-xs font-bold text-[#111111] block font-heading">
                              {m.value}
                            </span>
                            <span className="text-[9px] text-[#777777] uppercase truncate block">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[10px] text-[#555555]">
                          Discipline: <strong className="text-[#111111]">{cs.category}</strong>
                        </span>

                        <button
                          onClick={() => {
                            onClose();
                            onOpenConsultation(`${cs.title} Strategy Plan`);
                          }}
                          className="text-[11px] font-bold text-[#111111] hover:text-[#9A7B16] flex items-center gap-1 uppercase tracking-wider"
                        >
                          <span>Replicate Results</span>
                          <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[#E8E1D0] bg-[#F8F8F6] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-[#555555] hidden md:block">
            Need this service customized for your business?{" "}
            <strong>Get a custom proposal within 24 hours.</strong>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation(service.title);
              }}
              className="flex-1 sm:flex-none px-6 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] text-xs font-bold uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
            >
              <span>Request Proposal For {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={getServiceWhatsAppUrl(service.title, category.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-lg bg-white hover:bg-[#111111] hover:text-white text-[#111111] border border-[#E8E1D0] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
              title="Instant WhatsApp Consultation"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
