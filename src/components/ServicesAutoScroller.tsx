import React, { useState, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { SERVICE_CATEGORIES } from "../data/agencyData";
import { ServiceCategory, ServiceItem } from "../types";

interface ServicesAutoScrollerProps {
  onSelectService: (service: ServiceItem, category: ServiceCategory) => void;
  onNavigateToServices: () => void;
  onOpenConsultation: (serviceName?: string) => void;
  onNavigateService?: (serviceId: string, categoryId?: string) => void;
}

export const ServicesAutoScroller: React.FC<ServicesAutoScrollerProps> = ({
  onSelectService,
  onNavigateToServices,
  onNavigateService,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleServiceClick = (service: ServiceItem, category: ServiceCategory) => {
    if (onNavigateService) {
      onNavigateService(service.id, category.id);
    } else {
      onSelectService(service, category);
    }
  };

  // Flatten all services from all categories (pure list of service names with their category reference)
  const allServices = React.useMemo(() => {
    const list: { service: ServiceItem; category: ServiceCategory }[] = [];
    SERVICE_CATEGORIES.forEach((cat) => {
      cat.services.forEach((srv) => {
        list.push({ service: srv, category: cat });
      });
    });
    return list;
  }, []);

  // One half of the track (rendered twice below for a seamless -50% loop)
  const marqueeItems = React.useMemo(() => {
    return [...allServices, ...allServices];
  }, [allServices]);

  return (
    <section
      className="py-14 sm:py-16 bg-[#FAFAF8] border-b border-[#E8E1D0] relative overflow-hidden"
      id="home-services-preview"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E1D0] text-[#9A7B16] text-[11px] font-bold uppercase tracking-widest mb-3 font-heading shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Our Complete Capabilities</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] font-heading tracking-tight">
          Specialized Digital Growth Practices
        </h2>
        <p className="text-xs sm:text-sm text-[#555555] mt-2 max-w-xl mx-auto">
          Continuous roster of specialized disciplines engineered for quantifiable business growth.
        </p>
      </div>

      {/* 1-Line Continuous Auto-Scrolling Marquee Track - ONLY Service Names */}
      <div
        className="relative w-full overflow-hidden py-3 marquee-hover-pause"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Soft edge gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAFAF8] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAFAF8] to-transparent z-10" />

        <div ref={scrollContainerRef} className="overflow-x-hidden">
          <div
            className={`animate-marquee-track ${isPaused ? "pause-marquee" : ""} items-center px-4`}
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {[0, 1].map((half) => (
              <div
                key={half}
                className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0"
                aria-hidden={half === 1}
              >
                {marqueeItems.map((item, index) => {
                  const { service, category } = item;
                  return (
                    <div
                      key={`${half}-${service.id}-${index}`}
                      onClick={() => handleServiceClick(service, category)}
                      onMouseEnter={() => setIsPaused(true)}
                      className="group shrink-0 inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white hover:bg-[#111111] border border-[#E8E1D0] hover:border-[#D4AF37] shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                      title={`View ${service.title} on Services page`}
                    >
                      {/* Subtle Gold Bullet / Accent */}
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] group-hover:bg-[#F3E096] transition-colors shrink-0" />

                      {/* ONLY Service Name with clear, legible typography */}
                      <span className="text-sm sm:text-base font-semibold tracking-tight text-[#111111] group-hover:text-white transition-colors font-heading whitespace-nowrap">
                        {service.title}
                      </span>

                      {/* Subtle arrow indicator on hover */}
                      <ArrowRight className="w-4 h-4 text-[#D4AF37] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clean Bottom Explore Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-center">
        <button
          onClick={onNavigateToServices}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#111111] hover:text-[#9A7B16] uppercase tracking-widest transition-colors font-heading group"
        >
          <span>View Detailed Service Scopes & Deliverables</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
