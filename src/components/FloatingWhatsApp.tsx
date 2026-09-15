import React, { useState } from "react";
import { X, Sparkles, Send } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { AGENCY_CONFIG } from "../data/agencyData";
import { getWhatsAppUrl } from "../utils/whatsapp";

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const quickPrompts = [
    "I need an SEO & Growth Audit for my business",
    "I want to inquire about Performance Ads (Google/Meta)",
    "I want to build a high-converting website",
    "Inquiry about Digital Marketing Career Training",
  ];

  const handleSendPrompt = (prompt: string) => {
    window.open(getWhatsAppUrl(prompt), "_blank");
    setIsOpen(false);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    window.open(getWhatsAppUrl(customMsg), "_blank");
    setCustomMsg("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-xl bg-white border border-[#D4AF37] shadow-2xl p-5 text-[#111111] animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between border-b border-[#E8E1D0] pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                <WhatsAppIcon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111111] font-heading">
                  Digibasera Growth Desk
                </h4>
                <span className="text-[10px] text-[#25D366] flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Online • Typically replies instantly
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-[#555555] hover:text-[#111111]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#555555] mb-3 leading-relaxed">
            Hi there! How can our agency assist your business today? Pick a quick topic or type your
            query below:
          </p>

          {/* Quick Prompts */}
          <div className="space-y-1.5 mb-3">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendPrompt(p)}
                className="w-full text-left p-2.5 rounded-md bg-[#F8F8F6] hover:bg-[#E8E1D0]/50 border border-[#E8E1D0] text-[11px] text-[#111111] transition-colors flex items-center justify-between"
              >
                <span>{p}</span>
                <span className="text-[#D4AF37] font-mono text-xs">›</span>
              </button>
            ))}
          </div>

          {/* Custom Message Form */}
          <form onSubmit={handleSendCustom} className="flex gap-2">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Type custom question..."
              className="flex-1 bg-[#F8F8F6] border border-[#E8E1D0] rounded-md px-3 py-2 text-xs text-[#111111] placeholder:text-[#888888] focus:outline-none focus:border-[#D4AF37]"
            />
            <button
              type="submit"
              className="p-2 rounded-md bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button - Icon Only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group relative border-2 border-white/20"
        id="floating-whatsapp-btn"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};
