import contactHeroBg from "../assets/heroes/contact-hero.jpg";
import React from "react";
import { ContactSection } from "../components/ContactSection";
import { RajkotMapSection } from "../components/RajkotMapSection";
import { FaqSection } from "../components/FaqSection";
import { PageType } from "../types";
import { MessageSquare } from "lucide-react";

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="pt-24 lg:pt-32 pb-20 bg-[#FFFFFF] text-[#111111] animate-in fade-in duration-300">
      {/* Page Hero Header with Zoom Background */}
      <div className="relative py-14 sm:py-20 mb-10 overflow-hidden border-b border-[#E8E1D0] bg-[#FAF9F5]">
        {/* Background Image with Ken Burns / Zoom Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <img
            decoding="async"
            fetchPriority="high"
            src={contactHeroBg}
            alt="Digibasera Headquarters & Growth Consulting"
            className="w-full h-full object-cover object-center animate-hero-zoom opacity-20 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-[#FAF9F5]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-85" />
        </div>

        {/* Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-4 font-heading shadow-xs backdrop-blur-xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Connect with Growth Leadership</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111111] font-heading tracking-tight">
            Contact &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227] italic font-serif">
              Free Growth Audit
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#555555] mt-3 max-w-3xl leading-relaxed">
            Ready to build market visibility, acquire qualified leads, or explore training
            opportunities? Reach out to our senior consulting desk.
          </p>
        </div>
      </div>

      {/* Main Contact Form */}
      <ContactSection />

      {/* Google Maps Interactive Section - Rajkot Headquarters */}
      <RajkotMapSection />

      {/* Agency FAQs */}
      <div className="mt-16">
        <FaqSection />
      </div>
    </div>
  );
};
