import React from "react";
import {
  Home,
  UserPlus,
  Users,
  Briefcase,
  MessageSquare,
  GraduationCap,
  Contact,
  Code2,
  ShoppingCart,
  Compass,
  Search,
  Megaphone,
  Share2,
  Palette,
  Video,
  Folder,
  BarChart3,
  FileText,
  Server,
  Rss,
  Globe,
  MapPin,
  Phone,
  Clock,
  Mail,
  ArrowRight,
  Star,
} from "lucide-react";
import { AGENCY_CONFIG } from "../data/agencyData";
import { PageType } from "../types";
import { DigiBaseraLogo } from "./DigiBaseraLogo";

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: (serviceName?: string) => void;
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
  onOpenRefund?: () => void;
  onNavigateService?: (serviceId: string) => void;
  onNavigatePortfolio?: (category: "Websites" | "SEO" | "All") => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenTerms,
  onOpenPrivacy,
  onNavigateService,
  onNavigatePortfolio,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (page: PageType) => {
    onNavigate(page);
    scrollToTop();
  };

  const handleServiceClick = (serviceId: string) => {
    if (onNavigateService) {
      onNavigateService(serviceId);
    } else {
      onNavigate("services");
    }
  };

  return (
    <footer
      className="bg-gradient-to-b from-[#FAF8F2] via-[#FAF9F5] to-[#FFFFFF] text-[#1E293B] border-t border-[#E8DFC5] relative overflow-hidden text-xs"
      id="main-footer"
    >
      {/* Subtle World Map Silhouette Watermark in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 relative z-10">
        {/* Top 4 Columns (Company Info, Our Services, Work & Resources, Badges) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12">
          {/* Column 1: Company Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-[#1E1B4B] font-heading flex items-center gap-1">
              <span>Company</span> <span className="text-[#B8860B] italic font-semibold">Info</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-[#475569]">
              <li>
                <button
                  onClick={() => handleNav("home")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors"
                >
                  <Home className="w-4 h-4 text-[#B8860B]" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("about")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors"
                >
                  <UserPlus className="w-4 h-4 text-[#B8860B]" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("about")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors"
                >
                  <Users className="w-4 h-4 text-[#B8860B]" />
                  <span>Our Team</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("portfolio")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors"
                >
                  <Briefcase className="w-4 h-4 text-[#B8860B]" />
                  <span>Clients</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("home")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#B8860B]" />
                  <span>Testimonials</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("careers")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors"
                >
                  <GraduationCap className="w-4 h-4 text-[#B8860B]" />
                  <span>Careers</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("contact")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors"
                >
                  <Contact className="w-4 h-4 text-[#B8860B]" />
                  <span>Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-[#1E1B4B] font-heading flex items-center gap-1">
              <span>Our</span> <span className="text-[#B8860B] italic font-semibold">Services</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-[#475569]">
              <li>
                <button
                  onClick={() => handleServiceClick("web-development")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors text-left cursor-pointer"
                >
                  <Code2 className="w-4 h-4 text-[#B8860B]" />
                  <span>Web Design & Development</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("ecommerce")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors text-left cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4 text-[#B8860B]" />
                  <span>E-Commerce Solutions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("digital-marketing")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors text-left cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-[#B8860B]" />
                  <span>Digital Marketing Strategy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("seo")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors text-left cursor-pointer"
                >
                  <Search className="w-4 h-4 text-[#B8860B]" />
                  <span>SEO & AI Search Dominance</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("paid-ads")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors text-left cursor-pointer"
                >
                  <Megaphone className="w-4 h-4 text-[#B8860B]" />
                  <span>Google & Meta Ads (PPC)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("social-media")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors text-left cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-[#B8860B]" />
                  <span>Social Media Marketing</span>
                </button>
              </li>
              <li className="pt-1.5">
                <button
                  onClick={() => handleNav("services")}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#B8860B] hover:text-[#9A7B16] transition-colors"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Work & Resources (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-[#1E1B4B] font-heading flex items-center gap-1">
              <span>Work &</span>{" "}
              <span className="text-[#B8860B] italic font-semibold">Resources</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-[#475569]">
              <li>
                <button
                  onClick={() => handleNav("areas-we-serve")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#B8860B]" />
                  <span className="font-semibold text-[#B8860B]">Areas We Serve</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePortfolio?.("Websites")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  <Folder className="w-4 h-4 text-[#B8860B]" />
                  <span>Web Portfolio</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePortfolio?.("SEO")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  <BarChart3 className="w-4 h-4 text-[#B8860B]" />
                  <span>SEO Portfolio</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePortfolio?.("All")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#B8860B]" />
                  <span>Case Study</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation("IT Outsourcing")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  <Server className="w-4 h-4 text-[#B8860B]" />
                  <span>IT Outsourcing</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("blog")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  <Rss className="w-4 h-4 text-[#B8860B]" />
                  <span>Blogs</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation("Domain & Hosting")}
                  className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-[#B8860B]" />
                  <span>Domain & Hosting</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Review Badges (Google & Clutch matching Image 2) */}
          <div className="lg:col-span-3 space-y-3 pt-2 sm:pt-0">
            {/* Google Review Badge */}
            <a
              href={AGENCY_CONFIG.googleBusinessUrl || AGENCY_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-white border border-[#E8DFC5] shadow-2xs hover:shadow-md hover:border-[#D4AF37] transition-all flex items-center gap-3.5 group block"
              title="Google Reviews for DigiBasera"
            >
              <div className="w-8 h-8 rounded-md flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    fill="#EA4335"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <div className="text-[11px] font-bold text-[#1E293B] group-hover:text-[#B8860B] transition-colors pt-0.5">
                  4.9 Rating | 250+ Reviews
                </div>
              </div>
            </a>

            {/* Clutch Review Badge */}
            <div className="p-3.5 rounded-xl bg-white border border-[#E8DFC5] shadow-2xs hover:shadow-md transition-all">
              <div className="text-[9px] uppercase tracking-wider font-extrabold text-[#64748B]">
                REVIEWED ON
              </div>
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm sm:text-base font-heading text-[#111827] tracking-tight">
                    Clutch
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex text-[#EF4444]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#EF4444] text-[#EF4444]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#111827] pl-1">5.0 RATING</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Logo/Socials + IND Office + Mail Us At & Contact Now (USA office removed) */}
        <div className="pt-8 pb-8 border-t border-[#E8DFC5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Brand & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => handleNav("home")}
              className="group flex items-center gap-2.5 text-left cursor-pointer transition-opacity hover:opacity-95"
              id="footer-brand-logo-link"
              title="DigiBasera Home"
            >
              <DigiBaseraLogo variant="light" size="md" showTagline={true} />
            </button>

            <p className="text-xs text-[#555555] max-w-sm leading-relaxed">
              Empowering global brands with cutting-edge web architecture, performance digital
              marketing, and full-funnel digital transformation.
            </p>

            {/* Social Icons: Facebook, Instagram, Google, and WhatsApp */}
            <div className="flex items-center gap-2 pt-1">
              {/* Facebook */}
              <a
                href={AGENCY_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xs"
                title="DigiBasera on Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={AGENCY_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xs"
                title="DigiBasera on Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={
                  AGENCY_CONFIG.social.linkedin || "https://www.linkedin.com/company/digibasera/"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xs"
                title="DigiBasera on LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>

              {/* Google */}
              <a
                href={AGENCY_CONFIG.googleBusinessUrl || AGENCY_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white border border-[#E8DFC5] flex items-center justify-center hover:scale-110 hover:border-[#D4AF37] transition-all shadow-2xs"
                title="DigiBasera on Google"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    fill="#EA4335"
                  />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${AGENCY_CONFIG.phoneRaw}?text=${encodeURIComponent(
                  AGENCY_CONFIG.defaultWhatsappMsg,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xs"
                title="Chat with DigiBasera on WhatsApp"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>

          {/* IND Office Hub (4 cols) */}
          <div className="lg:col-span-4 flex items-start gap-3">
            <div className="text-2xl sm:text-3xl font-black text-[#B8860B] font-heading tracking-tight">
              IND
            </div>
            <div className="space-y-1.5 text-xs text-[#475569]">
              <a
                href={AGENCY_CONFIG.googleBusinessUrl || AGENCY_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-1.5 hover:text-[#B8860B] transition-colors group"
                title="View on Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                <span>: {AGENCY_CONFIG.location}</span>
              </a>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                <a
                  href={`tel:${AGENCY_CONFIG.phoneRaw}`}
                  className="hover:text-[#B8860B] transition-colors"
                >
                  : {AGENCY_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-[#64748B]">
                <Clock className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                <span>: Mon - Fri, 10 AM - 07 PM</span>
              </div>
            </div>
          </div>

          {/* Mail us at & Contact Now (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-sm font-bold text-[#1E1B4B] font-heading">Mail us at</div>
            <div className="space-y-1.5 text-xs text-[#475569]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>
                  <strong>Sales:</strong>{" "}
                  <a
                    href={`mailto:${AGENCY_CONFIG.email}`}
                    className="hover:text-[#B8860B] transition-colors"
                  >
                    {AGENCY_CONFIG.email}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>
                  <strong>Career:</strong>{" "}
                  <a
                    href="mailto:hr@digibasera.com"
                    className="hover:text-[#B8860B] transition-colors"
                  >
                    hr@digibasera.com
                  </a>
                </span>
              </div>
            </div>

            {/* Contact Now Button (replacing Pay Now) */}
            <div className="pt-1">
              <button
                onClick={() => handleNav("contact")}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B8860B] hover:from-[#C59B27] hover:to-[#A17A16] text-[#111111] font-extrabold text-xs tracking-wide shadow-[0_4px_14px_rgba(212,175,55,0.3)] hover:shadow-md transition-all cursor-pointer"
                id="footer-contact-now-btn"
              >
                <span>Contact Now</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Rights Row */}
        <div className="pt-6 border-t border-[#E8DFC5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
          <div>
            © 2026 All rights reserved to{" "}
            <span className="font-semibold text-[#B8860B]">DigiBasera Pvt Ltd</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            {onOpenPrivacy && (
              <button
                onClick={onOpenPrivacy}
                className="hover:text-[#B8860B] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
            )}
            <span className="text-gray-300">|</span>
            {onOpenTerms && (
              <button
                onClick={onOpenTerms}
                className="hover:text-[#B8860B] transition-colors cursor-pointer"
              >
                Terms & Conditions
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
