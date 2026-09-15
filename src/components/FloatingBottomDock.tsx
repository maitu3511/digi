import React, { useState } from "react";
import { X } from "lucide-react";
import { PageType } from "../types";

interface FloatingBottomDockProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation?: (serviceName?: string) => void;
  currentPage?: PageType;
}

export const FloatingBottomDock: React.FC<FloatingBottomDockProps> = ({
  onNavigate,
  currentPage,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenContact = () => {
    // Check if on contact page, else navigate or trigger popup
    onNavigate("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 animate-in fade-in slide-in-from-bottom-3 duration-300 select-none"
      id="floating-bottom-dock"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-full px-5 py-2.5 border border-[#E8DFC5] shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center gap-5 text-xs font-medium text-gray-700">
        <button
          onClick={() => handleNav("portfolio")}
          className={`transition-colors cursor-pointer ${currentPage === "portfolio" ? "text-[#B8860B] font-bold" : "hover:text-[#B8860B]"}`}
        >
          Portfolio
        </button>

        <button
          onClick={() => handleNav("blog")}
          className={`transition-colors cursor-pointer ${currentPage === "blog" ? "text-[#B8860B] font-bold" : "hover:text-[#B8860B]"}`}
        >
          Blog
        </button>

        <button
          onClick={handleOpenContact}
          className={`transition-colors cursor-pointer ${currentPage === "contact" ? "text-[#B8860B] font-bold" : "hover:text-[#B8860B]"}`}
        >
          Contact
        </button>

        {/* Small golden circle close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="w-4 h-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#C59B27] hover:to-[#A17A16] text-[#111111] flex items-center justify-center transition-colors -mr-1"
          title="Dismiss dock"
          aria-label="Dismiss dock"
        >
          <X className="w-2.5 h-2.5 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
