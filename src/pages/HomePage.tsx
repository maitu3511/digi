import React from "react";
import { motion } from "motion/react";
import { Hero } from "../components/Hero";
import { TechMarquee } from "../components/TechMarquee";
import { TrustStats } from "../components/TrustStats";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { IsBusinessReadySection } from "../components/IsBusinessReadySection";
import { HowWeWork } from "../components/HowWeWork";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { IndustriesSection } from "../components/IndustriesSection";
import { ResultsSection } from "../components/ResultsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FinalCta } from "../components/FinalCta";
import { ServiceCategory, ServiceItem, PageType } from "../types";
import { Award, CheckCircle2, GraduationCap, Sparkles } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: (serviceName?: string) => void;
  onSelectService: (service: ServiceItem, category: ServiceCategory) => void;
  onNavigateService?: (serviceId: string, categoryId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectService,
  onNavigateService,
}) => {
  return (
    <div className="space-y-0 animate-in fade-in duration-300">
      {/* 1. Hero Section with Brand Vision & Growth HUD */}
      <Hero
        onOpenConsultation={() => onOpenConsultation("Comprehensive Growth Strategy")}
        onNavigateToServices={() => onNavigate("services")}
        onNavigateToTraining={() => onNavigate("training")}
      />

      {/* 2. Technology & Platform Infinite Marquee (Matebiz Style) */}
      <TechMarquee />

      {/* 3. Trust Stats & Agency Milestone Banner */}
      <TrustStats />

      {/* 4. About Us Section (The Digital Vision of Your Brand) */}
      <AboutSection
        onOpenConsultation={() => onOpenConsultation("Agency Partnership Consultation")}
        onNavigateToServices={() => onNavigate("services")}
      />

      {/* 5. Complete 1-Line Continuous Auto-Scrolling Services Section */}
      <ServicesSection
        onSelectService={(srv, cat) => {
          if (onNavigateService) {
            onNavigateService(srv.id, cat.id);
          } else {
            onSelectService(srv, cat);
          }
        }}
        onNavigateService={onNavigateService}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 5.5 Is Your Business Ready to Grow Section (Matebiz Style) */}
      <IsBusinessReadySection onOpenConsultation={onOpenConsultation} onNavigate={onNavigate} />

      {/* 6. Our 5-Step Growth Process */}
      <HowWeWork />

      {/* 7. Why Choose Us (Standards & Differentiators) */}
      <WhyChooseUs onOpenConsultation={() => onOpenConsultation("Agency Partnership")} />

      {/* 8. Industries We Transform (13 Specialized Sectors) */}
      <IndustriesSection
        onOpenConsultation={(ind) => onOpenConsultation(ind || "Industry Strategy")}
      />

      {/* 9. Measurable Results & KPI Telemetry */}
      <ResultsSection />

      {/* 10. Client Reviews & Testimonials */}
      <TestimonialsSection
        onOpenConsultation={() => onOpenConsultation("Client Growth Partnership")}
      />

      {/* 11. Zinmatt Training & Career Placement Academy Spotlight */}
      <section className="py-16 bg-[#111111] text-white border-y border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs font-bold uppercase tracking-widest font-heading border border-white/10">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>Official Associate of Zinmatt</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
                Digital Marketing Training & Career Placement Academy
              </h2>
              <p className="text-sm text-[#E8E1D0] leading-relaxed max-w-2xl">
                Looking to build in-demand digital marketing skills? Master SEO, Google & Meta Ads,
                AI Automations, and E-commerce with live agency project assignments and ISO-aligned
                certifications.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-xs text-[#E8E1D0]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Hands-on Live Campaigns</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#E8E1D0]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Verified Zinmatt Certification</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#E8E1D0]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>100% Placement Assistance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onNavigate("training")}
                className="w-full py-3.5 px-6 rounded-md bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Explore Training Academy</span>
              </button>
              <button
                onClick={() => onOpenConsultation("Training Course Counseling")}
                className="w-full py-3.5 px-6 rounded-md bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 transition-colors"
              >
                <span>Request Student Counseling</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 12. Final High-Impact Action CTA Banner */}
      <FinalCta
        onOpenConsultation={() => onOpenConsultation("Commercial Growth Plan")}
        onRequestProposal={() => onOpenConsultation("Comprehensive Custom RFP Proposal")}
      />
    </div>
  );
};
