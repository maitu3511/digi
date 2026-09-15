import React from "react";
import {
  Code2,
  Globe,
  ShoppingBag,
  Search,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  Award,
  Smartphone,
} from "lucide-react";

export const TechMarquee: React.FC = () => {
  const techItems = [
    { name: "React.js & Next.js", category: "Frontend", icon: Code2 },
    { name: "WordPress & E-Commerce", category: "CMS & E-com", icon: Globe },
    { name: "Shopify & E-Commerce", category: "E-commerce", icon: ShoppingBag },
    { name: "Google Ads / PPC", category: "PPC & Search", icon: Search },
    { name: "Meta Verified Partner", category: "Social Ads", icon: TrendingUp },
    { name: "Node.js & Python", category: "Backend & APIs", icon: Cpu },
    { name: "iOS & Android (React Native)", category: "Mobile Apps", icon: Smartphone },
    { name: "AI & AEO Search Engine", category: "Next-Gen SEO", icon: Sparkles },
    { name: "Figma UI/UX Prototyping", category: "Design System", icon: Layers },
    { name: "Clutch Top B2B Agency", category: "Verified 5.0★", icon: Award },
    { name: "AWS & Cloudflare Speed", category: "Infrastructure", icon: ShieldCheck },
  ];

  // One half of the track (repeated twice below for a seamless -50% loop)
  const marqueeList = [...techItems, ...techItems];

  return (
    <div className="relative py-6 bg-[#111111] text-white border-y border-[#D4AF37]/40 overflow-hidden select-none">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-20 bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      {/* Left and Right Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="w-full overflow-hidden">
        <div className="flex shrink-0 w-max items-center animate-marquee-track">
          {[0, 1].map((half) => (
            <div
              key={half}
              className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8 shrink-0"
              aria-hidden={half === 1}
            >
              {marqueeList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`${half}-${idx}`}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1E1E1E] border border-[#333333] hover:border-[#D4AF37] hover:-translate-y-0.5 transition-all duration-300 shrink-0 group cursor-default whitespace-nowrap"
                  >
                    <Icon className="w-4 h-4 text-[#D4AF37] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="text-[9px] text-[#888888] uppercase tracking-wider font-semibold whitespace-nowrap">
                      {item.category}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
