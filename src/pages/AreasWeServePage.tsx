import React, { useState, useMemo } from "react";
import { MapPin, Search, ArrowRight, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import { PageType } from "../types";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { IsBusinessReadySection } from "../components/IsBusinessReadySection";

interface AreasWeServePageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: (prefillService?: string, budget?: number, industry?: string) => void;
}

// ---------------------------------------------------------------------------
// 1. CITIES DATA FOR SERVICES PAGE COMPATIBILITY & DIRECTORY
// ---------------------------------------------------------------------------
export interface CityDirectoryItem {
  name: string;
  state: string;
  badge?: string;
  tagline?: string;
}

export const CITIES_A_TO_Z: CityDirectoryItem[] = [
  { name: "Agra", state: "Uttar Pradesh", badge: "Tourism & Heritage" },
  { name: "Ahmedabad", state: "Gujarat", badge: "E-Commerce & Industry" },
  { name: "Amritsar", state: "Punjab", badge: "Commercial Hub" },
  { name: "Bangalore", state: "Karnataka", badge: "Tech Capital & Startups" },
  { name: "Bhopal", state: "Madhya Pradesh", badge: "Central India Hub" },
  { name: "Bhubaneswar", state: "Odisha", badge: "Eastern Tech Corridor" },
  { name: "Calicut", state: "Kerala", badge: "Trade & Retail" },
  { name: "Chandigarh", state: "Punjab & Haryana", badge: "Tri-City Hub" },
  { name: "Chennai", state: "Tamil Nadu", badge: "Manufacturing & SaaS" },
  { name: "Dehradun", state: "Uttarakhand", badge: "Education & Tourism" },
  { name: "Delhi", state: "Delhi NCR", badge: "National Capital" },
  { name: "Gurgaon", state: "Haryana", badge: "Corporate Headquarters" },
  { name: "Hyderabad", state: "Telangana", badge: "Pharma & IT Hub" },
  { name: "Indore", state: "Madhya Pradesh", badge: "Commercial Capital" },
  { name: "Jaipur", state: "Rajasthan", badge: "Jewelry, Crafts & Tourism" },
  { name: "Jalandhar", state: "Punjab", badge: "Sports & Leather Goods" },
  { name: "Kanpur", state: "Uttar Pradesh", badge: "Industrial & Leather" },
  { name: "Kerala", state: "Kerala", badge: "Consumer & Export" },
  { name: "Kochi", state: "Kerala", badge: "Infopark IT & Marine" },
  { name: "Kolkata", state: "West Bengal", badge: "Eastern Metro" },
  { name: "Lucknow", state: "Uttar Pradesh", badge: "Government & Commerce" },
  { name: "Ludhiana", state: "Punjab", badge: "Hosiery & Textiles" },
  { name: "Mohali", state: "Punjab", badge: "Tri-City IT & Pharma" },
  { name: "Mumbai", state: "Maharashtra", badge: "Financial Capital" },
  { name: "Nagpur", state: "Maharashtra", badge: "Logistics Heart" },
  { name: "Nashik", state: "Maharashtra", badge: "Wine & Engineering" },
  { name: "Noida", state: "Uttar Pradesh", badge: "Media & Tech City" },
  { name: "Patna", state: "Bihar", badge: "Fastest Growing Market" },
  { name: "Pune", state: "Maharashtra", badge: "Automotive & IT" },
  { name: "Rajkot", state: "Gujarat", badge: "Engineering & Casting" },
  { name: "Surat", state: "Gujarat", badge: "Diamond & Textile Capital" },
  { name: "Udaipur", state: "Rajasthan", badge: "Hospitality & Marble" },
  { name: "Vadodara", state: "Gujarat", badge: "Chemical & Engineering" },
  { name: "Varanasi", state: "Uttar Pradesh", badge: "Cultural & Handloom" },
  { name: "Visakhapatnam", state: "Andhra Pradesh", badge: "Port & Industrial City" },
];

// ---------------------------------------------------------------------------
// 2. EXACT 1-TO-1 SERVICE CATEGORIES & LINE LISTS (MATCHING socialeyes.in)
// ---------------------------------------------------------------------------
interface ServiceSectionData {
  id: string;
  title: string;
  items: string[];
}

export const SERVICE_SECTIONS: ServiceSectionData[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    items: [
      "Agra Digital Marketing Agency",
      "Ahmedabad Digital Marketing Agency",
      "Amritsar Digital Marketing Agency",
      "Bangalore Digital Marketing Agency",
      "Bhubaneswar Digital Marketing Agency",
      "Calicut Digital Marketing Agency",
      "Chandigarh Digital Marketing Agency",
      "Dehradun Digital Marketing Agency",
      "Delhi Digital Marketing Agency",
      "Gurgaon Digital Marketing Agency",
      "Hyderabad Digital Marketing Agency",
      "Indore Digital Marketing Agency",
      "Jaipur Digital Marketing Agency",
      "Kolkata Digital Marketing Agency",
      "Lucknow Digital Marketing Agency",
      "Mumbai Digital Marketing Agency",
      "Nagpur Digital Marketing Agency",
      "Noida Digital Marketing Agency",
      "Patna Digital Marketing Agency",
      "Pune Digital Marketing Agency",
      "Surat Digital Marketing Agency",
      "Vadodara Digital Marketing Agency",
      "Varanasi Digital Marketing Agency",
    ],
  },
  {
    id: "seo-services",
    title: "SEO Services",
    items: [
      "Best Seo Company In Delhi",
      "Best Seo Company In Surat",
      "Best Seo Services In Ahmedabad",
      "Best Seo Services In Chennai",
      "SEO Services In Bangalore",
      "Seo Agency In Calicut",
      "Seo Agency In Gurgaon",
      "Seo Agency In Hyderabad",
      "SEO Services In Jaipur",
      "SEO Services In Kolkata",
      "SEO Services In Lucknow",
      "SEO Services In Mumbai",
      "SEO Services In Noida",
      "SEO Services In Pune",
      "Best SEO Services In Ahmedabad",
      "Seo Company In Amritsar",
      "Seo Company In Bhopal",
      "SEO Experts In Bhubaneswar",
      "SEO Services In Chandigarh",
      "SEO Services In Dehradun",
      "Seo Company In Indore",
      "Seo Company In Nagpur",
      "SEO Experts In Patna",
      "Seo Company In Vadodara",
      "Seo Company In Varanasi",
    ],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    items: [
      "Social Media Marketing Agency In Agra",
      "Social Media Marketing Agency In Ahmedabad",
      "Social Media Marketing Agency In Amritsar",
      "Social Media Marketing Agency In Bangalore",
      "Social Media Marketing Agency In Bhopal",
      "Social Media Marketing Agency In Bhubaneswar",
      "Social Media Marketing Agency In Calicut",
      "Social Media Marketing Agency In Chandigarh",
      "Social Media Marketing Agency In Chennai",
      "Social Media Marketing Agency In Dehradun",
      "Social Media Marketing Agency In Delhi",
      "Social Media Marketing Agency In Gurgaon",
      "Social Media Marketing Agency In Hyderabad",
      "Social Media Marketing Agency In Indore",
      "Social Media Marketing Agency In Jaipur",
      "Social Media Marketing Agency In Kolkata",
      "Social Media Marketing Agency In Lucknow",
      "Social Media Marketing Agency In Mumbai",
      "Social Media Marketing Agency In Nagpur",
      "Social Media Marketing Agency In Noida",
      "Social Media Marketing Agency In Patna",
      "Social Media Marketing Agency In Pune",
      "Social Media Marketing Agency In Surat",
      "Social Media Marketing Agency In Vadodara",
      "Social Media Marketing Agency In Varanasi",
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    items: [
      "Ahmedabad Graphic Design Services",
      "Graphic Design Company In Bangalore",
      "Graphic Design Company In Delhi",
      "Graphic Design Company In Gurgaon",
      "Graphic Design Company In Surat",
      "Graphic Design Company In Vadodara",
      "Graphic Design Services In Bhopal",
      "Bhubaneswar Graphic Design Services",
      "Graphic Design Services In Calicut",
      "Graphic Design Services In Chennai",
      "Graphic Design Services In Hyderabad",
    ],
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    items: [
      "Influencer Marketing Agency In Delhi",
      "Influencer Marketing In Ahmedabad",
      "Influencer Marketing In Gurgaon",
      "Influencer Marketing In Vadodara",
      "Influencer Marketing Services In Bangalore",
      "Influencer Marketing Services In Bhopal",
      "Influencer Marketing Services In Chennai",
      "Influencer Marketing Services In Hyderabad",
      "Influencer Marketing Services In Indore",
      "Influencer Marketing Services In Kolkata",
      "Influencer Marketing Services In Mumbai",
      "Influencer Marketing Services In Noida",
      "Influencer Marketing Services In Pune",
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads",
    items: ["Google Ads Expert Amritsar", "Google Ads Expert In Jaipur"],
  },
  {
    id: "ppc-advertising",
    title: "PPC Advertising",
    items: [
      "PPC Services In Ahmedabad",
      "PPC Services In Bangalore",
      "PPC Services In Bhopal",
      "Ppc Company In Bhubaneswar",
      "PPC Services In Calicut",
      "PPC Services In Chandigarh",
      "PPC Services In Chennai",
      "PPC Services In Delhi",
      "PPC Services In Gurgaon",
      "PPC Services In Hyderabad",
      "PPC Services In Indore",
      "Ppc Company In Jaipur",
      "PPC Services In Kolkata",
      "PPC Services In Lucknow",
      "PPC Services In Mumbai",
      "Ppc Company In Nagpur",
      "PPC Services In Noida",
      "PPC Services In Patna",
      "PPC Services In Pune",
      "PPC Services In Surat",
      "PPC Services In Vadodara",
      "Ppc Company In Varanasi",
    ],
  },
  {
    id: "web-design",
    title: "Web Design",
    items: [
      "Web Design Company Ahmedabad",
      "Web Design Services In Amritsar",
      "Web Design Services In Bangalore",
      "Web Design Company Bhopal",
      "Web Design Services In Bhubaneswar",
      "Web Design Services In Calicut",
      "Web Design Services In Chandigarh",
      "Web Design Company Chennai",
      "Web Design Services In Dehradun",
      "Web Design Service In Delhi",
      "Web Design Services In Gurgaon",
      "Web Design Services In Hyderabad",
      "Web Design Company In Indore",
      "Web Design Services In Jaipur",
      "Web Design Services In Kolkata",
      "Web Design Services In Lucknow",
      "Web Design Services In Mumbai",
      "Web Design Company Nagpur",
      "Web Design Company Noida",
      "Patna Web Design Company",
      "Top Web Design Services Pune",
      "Web Design Services In Surat",
      "Top Web Design Services Vadodara",
      "Web Design Company Varanasi",
    ],
  },
];

// ---------------------------------------------------------------------------
// 3. ALL AREAS WE SERVE: CITY-BY-CITY DIRECTORY (MATCHING socialeyes.in)
// ---------------------------------------------------------------------------
export interface CityServiceEntry {
  city: string;
  links: string[];
}

export const ALL_AREAS_DIRECTORY: CityServiceEntry[] = [
  {
    city: "Agra",
    links: ["SEO Services in Agra | Tourism, Hospitality & Local Business SEO"],
  },
  {
    city: "Ahmedabad",
    links: ["Ahmedabad Digital Marketing Agency"],
  },
  {
    city: "Amritsar",
    links: ["Amritsar Digital Marketing Agency"],
  },
  {
    city: "Bangalore",
    links: ["Digital Marketing Agency in Bangalore | SEO, Ads & Web"],
  },
  {
    city: "Bhopal",
    links: ["Digital Marketing Agency in Bhopal | SEO, Ads, Web & Social"],
  },
  {
    city: "Bhubaneswar",
    links: ["Bhubaneswar Digital Marketing Agency"],
  },
  {
    city: "Calicut",
    links: ["Calicut Digital Marketing Agency"],
  },
  {
    city: "Chandigarh",
    links: ["Chandigarh Digital Marketing Agency"],
  },
  {
    city: "Chennai",
    links: ["Chennai Digital Marketing Agency"],
  },
  {
    city: "Dehradun",
    links: ["Dehradun Digital Marketing Agency"],
  },
  {
    city: "Delhi",
    links: ["Delhi Digital Marketing Agency"],
  },
  {
    city: "Hyderabad",
    links: ["Digital Marketing Agency in Hyderabad | SEO, Ads & Web"],
  },
  {
    city: "Indore",
    links: ["Indore Digital Marketing Agency"],
  },
  {
    city: "Jaipur",
    links: ["Jaipur Digital Marketing Agency"],
  },
  {
    city: "Jalandhar",
    links: ["Graphic Design Services in Ludhiana | Brand, Packaging, Web"],
  },
  {
    city: "Kanpur",
    links: ["Kanpur Digital Marketing Agency"],
  },
  {
    city: "Kerala",
    links: ["Kerala Digital Maketing Agency"],
  },
  {
    city: "Kochi",
    links: ["Digital Marketing Agency in Kochi | Infopark IT, Tourism, D2C"],
  },
  {
    city: "Kolkata",
    links: ["Kolkata Digital Marketing Agency"],
  },
  {
    city: "Lucknow",
    links: ["Lucknow Digital Marketing Agency"],
  },
  {
    city: "Ludhiana",
    links: ["Digital Marketing Agency in Ludhiana | Hosiery, Industry, Export"],
  },
  {
    city: "Mohali",
    links: ["Digital Marketing Agency in Mohali | Tri-city IT, Pharma, SaaS"],
  },
  {
    city: "Mumbai",
    links: ["Digital Marketing Agency in Mumbai | AVNIS Case Study"],
  },
  {
    city: "Nashik",
    links: ["Digital Marketing Agency in Nashik | SEO, Ads, Social, Web"],
  },
  {
    city: "Patna",
    links: ["Social Media Marketing Agency in Nashik | F&B, Tourism, D2C"],
  },
  {
    city: "Pune",
    links: ["Digital Marketing Agency in Pune | Social Media, SEO & Ads"],
  },
  {
    city: "Surat",
    links: ["Surat Digital Marketing Agency"],
  },
  {
    city: "Udaipur",
    links: ["Udaipur Digital Marketing Agency"],
  },
  {
    city: "Vadodara",
    links: ["Digital Marketing Agency in Vadodara | Gujarat B2B, D2C, SaaS"],
  },
  {
    city: "Visakhapatnam",
    links: [
      "Visakhapatnam Digital Marketing Agency",
      "Web Design Services in Visakhapatnam | B2B, E-commerce, Tourism",
    ],
  },
];

// ---------------------------------------------------------------------------
// 4. MAIN PAGE COMPONENT
// ---------------------------------------------------------------------------
export const AreasWeServePage: React.FC<AreasWeServePageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState<string>("all");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  // Filter sections by search query
  const filteredSections = useMemo(() => {
    if (!normalizedQuery) {
      if (selectedSection === "all") return SERVICE_SECTIONS;
      return SERVICE_SECTIONS.filter((s) => s.id === selectedSection);
    }

    return SERVICE_SECTIONS.map((section) => {
      const matchingItems = section.items.filter((item) =>
        item.toLowerCase().includes(normalizedQuery),
      );
      return {
        ...section,
        items: matchingItems,
      };
    }).filter((section) => section.items.length > 0);
  }, [normalizedQuery, selectedSection]);

  // Filter All Areas directory by search query
  const filteredAllAreas = useMemo(() => {
    if (!normalizedQuery) return ALL_AREAS_DIRECTORY;
    return ALL_AREAS_DIRECTORY.filter(
      (entry) =>
        entry.city.toLowerCase().includes(normalizedQuery) ||
        entry.links.some((l) => l.toLowerCase().includes(normalizedQuery)),
    );
  }, [normalizedQuery]);

  const totalMatches = useMemo(() => {
    const secCount = filteredSections.reduce((acc, s) => acc + s.items.length, 0);
    const areaCount = filteredAllAreas.reduce((acc, a) => acc + a.links.length, 0);
    return secCount + areaCount;
  }, [filteredSections, filteredAllAreas]);

  const handleLineClick = (itemTitle: string) => {
    onOpenConsultation(itemTitle);
  };

  const scrollToSection = (id: string) => {
    setSelectedSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#111111] pt-28 pb-24">
      {/* -------------------------------------------------------------
          TOP BREADCRUMB & INTRO HEADER (MATCHING socialeyes.in)
         ------------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#666666]">
          <button
            onClick={() => onNavigate("home")}
            className="hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate("services")}
            className="hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Services
          </button>
          <span>/</span>
          <span className="font-semibold text-[#111111]">Areas We Serve</span>
        </nav>

        {/* Entry Title & Lead Description */}
        <div className="space-y-4 border-b border-[#E8E1D0] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4AF37]/50 text-xs font-semibold text-[#996515] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Pan-India Regional Network • 30+ Cities</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111111] font-heading tracking-tight leading-tight">
            Areas We <span className="text-[#996515] italic font-serif">Serve</span>
          </h1>

          <p className="text-base sm:text-lg text-[#444444] max-w-4xl leading-relaxed">
            DigiBasera delivers expert digital marketing services across India. Find our specialized
            teams in your city below.
          </p>

          {/* Real-time Search Filter Bar */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any service or city (e.g. Delhi, Surat, SEO, Ahmedabad, Web Design)..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E8E1D0] rounded-xl text-xs sm:text-sm text-[#111111] placeholder:text-[#888888] focus:outline-hidden focus:border-[#D4AF37] shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#888888] hover:text-[#111111] px-1.5 py-0.5"
                >
                  Clear
                </button>
              )}
            </div>

            {searchQuery && (
              <span className="text-xs font-bold text-[#996515] bg-[#D4AF37]/10 px-3 py-2 rounded-xl border border-[#D4AF37]/30 text-center shrink-0">
                {totalMatches} match{totalMatches === 1 ? "" : "es"} found
              </span>
            )}
          </div>

          {/* Quick Jump Pills for Category Headings */}
          <div className="pt-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#888888] block mb-2">
              Jump to Category:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setSelectedSection("all");
                  setSearchQuery("");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedSection === "all" && !searchQuery
                    ? "bg-[#111111] text-[#D4AF37]"
                    : "bg-white text-[#555555] border border-[#E8E1D0] hover:text-[#111111]"
                }`}
              >
                All Sections
              </button>
              {SERVICE_SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedSection === sec.id
                      ? "bg-[#111111] text-[#D4AF37]"
                      : "bg-white text-[#555555] border border-[#E8E1D0] hover:text-[#111111]"
                  }`}
                >
                  {sec.title}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("all-areas-we-serve")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedSection === "all-areas-we-serve"
                    ? "bg-[#111111] text-[#D4AF37]"
                    : "bg-white text-[#555555] border border-[#E8E1D0] hover:text-[#111111]"
                }`}
              >
                All Areas We Serve (City List)
              </button>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            MAIN CONTENT: EXACT 1-TO-1 LINE LIST LAYOUT (socialeyes.in style)
           ------------------------------------------------------------- */}
        <div className="space-y-12 py-4">
          {filteredSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="bg-white border border-[#E8E1D0] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6"
            >
              {/* Heading 2 */}
              <div className="border-b border-[#E8E1D0] pb-3.5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] font-heading">
                    {section.title}
                  </h2>
                </div>
                <span className="text-xs font-semibold text-[#888888] bg-[#FAF9F5] px-2.5 py-1 rounded-md border border-[#E8E1D0]">
                  {section.items.length} {section.items.length === 1 ? "Location" : "Locations"}
                </span>
              </div>

              {/* 1-by-1 Line List (Vertical line-by-line list matching socialeyes.in) */}
              <ul className="divide-y divide-[#F0EDE4] border border-[#F0EDE4] rounded-xl overflow-hidden">
                {section.items.map((item, idx) => (
                  <li key={idx} className="group">
                    <button
                      onClick={() => handleLineClick(item)}
                      className="w-full text-left px-4 py-3 sm:py-3.5 flex items-center justify-between gap-4 hover:bg-[#FAF9F5] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Bullet indicator */}
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="text-xs sm:text-sm font-medium text-[#222222] group-hover:text-[#996515] transition-colors truncate">
                          {item}
                        </span>
                      </div>

                      {/* Right Action Hint */}
                      <div className="flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 sm:opacity-70 transition-opacity">
                        <span className="text-[11px] font-semibold text-[#996515] hidden sm:inline">
                          Get In Touch
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* -------------------------------------------------------------
              ALL AREAS WE SERVE (CITY-BY-CITY DIRECTORY)
             ------------------------------------------------------------- */}
          {(!selectedSection ||
            selectedSection === "all" ||
            selectedSection === "all-areas-we-serve") &&
            filteredAllAreas.length > 0 && (
              <section
                id="all-areas-we-serve"
                className="bg-white border border-[#E8E1D0] rounded-2xl p-6 sm:p-8 shadow-xs space-y-8"
              >
                <div className="border-b border-[#E8E1D0] pb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] font-heading">
                      All Areas We Serve
                    </h2>
                  </div>
                  <span className="text-xs font-semibold text-[#888888] bg-[#FAF9F5] px-2.5 py-1 rounded-md border border-[#E8E1D0]">
                    {filteredAllAreas.length} Cities Directory
                  </span>
                </div>

                <div className="space-y-6">
                  {filteredAllAreas.map((entry, aIdx) => (
                    <div
                      key={aIdx}
                      className="border border-[#E8E1D0] rounded-xl p-4 sm:p-5 bg-[#FAF9F5]/60 hover:bg-[#FAF9F5] transition-colors space-y-3"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base sm:text-lg font-bold text-[#111111] flex items-center gap-2 font-heading">
                          <MapPin className="w-4 h-4 text-[#D4AF37]" />
                          <span>{entry.city}</span>
                        </h3>
                        <button
                          onClick={() => handleLineClick(`Digital Marketing in ${entry.city}`)}
                          className="text-xs font-bold text-[#996515] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>Inquire for {entry.city}</span>
                          <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                        </button>
                      </div>

                      <ul className="space-y-1.5 pl-6 list-disc text-xs sm:text-sm text-[#444444]">
                        {entry.links.map((link, lIdx) => (
                          <li key={lIdx} className="hover:text-[#996515] transition-colors">
                            <button
                              onClick={() => handleLineClick(link)}
                              className="text-left hover:underline text-[#222222] hover:text-[#996515] cursor-pointer"
                            >
                              {link}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}
        </div>

        {/* Is Your Business Ready Section - Regional Growth */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-sm border border-[#E2E6F0]">
          <IsBusinessReadySection
            serviceTitle="Regional Digital Marketing"
            categoryTitle="Areas We Serve"
            onOpenConsultation={onOpenConsultation}
            onNavigate={onNavigate}
          />
        </div>

        {/* -------------------------------------------------------------
            BOTTOM CTA & CONSULTATION BANNER
           ------------------------------------------------------------- */}
        <div className="mt-12 bg-gradient-to-br from-[#111111] via-[#1A1A1A] to-[#111111] border border-[#D4AF37]/40 rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#D4AF37]/40 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Pan-India Growth Advisory</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading max-w-2xl mx-auto leading-tight">
            Ready to Dominate Search Rankings & Paid Ads in Your City?
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Whether you need the top SEO company in Delhi, performance ads in Mumbai, or web
            engineering in Surat, DigiBasera provides measurable ROI and dedicated account managers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation("Pan-India Multi-City Expansion Strategy")}
              className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#B8860B] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <span>Schedule Free City Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/919723046083?text=${encodeURIComponent(
                "Hello DigiBasera, I want to inquire about Digital Marketing and SEO services for my city.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>30+ Indian Metros & Industrial Hubs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Multilingual & Regional Keyword Strategy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Direct Video Conferences & Weekly Reporting</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
