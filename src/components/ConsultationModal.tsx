import React, { useState } from "react";
import { X, CheckCircle2, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl, formatConsultationModalWhatsAppMsg } from "../utils/whatsapp";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultBudget?: number;
  defaultIndustry?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = "Digital Marketing Strategy",
  defaultBudget,
  defaultIndustry,
}) => {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(defaultService);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleForwardWhatsApp = () => {
    const text = formatConsultationModalWhatsAppMsg({
      name,
      business,
      phone,
      email,
      service,
      budget: defaultBudget,
      industry: defaultIndustry,
    });
    window.open(getWhatsAppUrl(text), "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Automatically submit entered data to WhatsApp
    const text = formatConsultationModalWhatsAppMsg({
      name,
      business,
      phone,
      email,
      service,
      budget: defaultBudget,
      industry: defaultIndustry,
    });
    window.open(getWhatsAppUrl(text), "_blank");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-[#D4AF37] rounded-xl p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-md bg-[#F8F8F6] border border-[#E8E1D0] text-[#555555] hover:text-[#111111] hover:border-[#111111] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#F8F8F6] text-[#9A7B16] flex items-center justify-center mx-auto border border-[#D4AF37]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#111111] font-heading">
              Inquiry Submitted to WhatsApp!
            </h3>
            <p className="text-xs text-[#555555]">
              Your strategy consultation details have been formatted and sent. Our lead strategist
              will reply on <strong className="text-[#111111]">{phone || "WhatsApp"}</strong>{" "}
              immediately.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleForwardWhatsApp}
                className="w-full py-3 rounded-md bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#111111]" />
                <span>Re-open Chat on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-md bg-[#F8F8F6] border border-[#E8E1D0] text-[#555555] hover:text-[#111111] text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] text-[10px] font-bold uppercase tracking-widest mb-2 font-heading">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>FREE STRATEGY DISCOVERY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] font-heading">
                Book Your Growth Consultation
              </h3>
              <p className="text-xs text-[#555555] mt-1">
                Receive an actionable audit of your brand's digital visibility and commercial sales
                funnel.
              </p>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1 font-heading">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ankit Verma"
                className="w-full bg-[#F8F8F6] border border-[#E8E1D0] focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-[#111111] placeholder:text-[#888888] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1 font-heading">
                Company / Brand Name
              </label>
              <input
                type="text"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="e.g. Verma Enterprises"
                className="w-full bg-[#F8F8F6] border border-[#E8E1D0] focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-[#111111] placeholder:text-[#888888] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1 font-heading">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#F8F8F6] border border-[#E8E1D0] focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-[#111111] placeholder:text-[#888888] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1 font-heading">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ankit@domain.com"
                  className="w-full bg-[#F8F8F6] border border-[#E8E1D0] focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-[#111111] placeholder:text-[#888888] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#111111] mb-1 font-heading">
                Primary Growth Focus
              </label>
              <input
                type="text"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-[#F8F8F6] border border-[#E8E1D0] focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none font-medium"
              />
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="submit"
                className="flex-1 py-3.5 rounded-md bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#111111]" />
                <span>Submit & Connect on WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
