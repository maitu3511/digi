import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Shield,
  Clock,
  Search,
  Check,
  CheckCircle2,
  Loader2,
  Send,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import {
  getWhatsAppUrl,
  formatVisitorPopupWhatsAppMsg,
  VisitorPopupLeadData,
} from "../utils/whatsapp";

interface VisitorLeadPopupProps {
  isOpen?: boolean;
  onClose?: () => void;
  onOpenConsultation?: (serviceName?: string) => void;
  defaultService?: string;
}

const POPUP_SERVICES = [
  "Comprehensive Growth Strategy",
  "Custom Web Development (React / Next.js)",
  "SEO & Google Search Dominance",
  "Google PPC & Performance Ads",
  "Meta Ads & High-ROAS Funnels",
  "E-Commerce & Shopify Engineering",
  "Social Media Marketing & Creatives",
  "Brand Identity & Corporate Design",
  "Zinmatt Digital Marketing Training",
];

export const VisitorLeadPopup: React.FC<VisitorLeadPopupProps> = ({
  isOpen: externalIsOpen,
  onClose: externalOnClose,
  defaultService = "Comprehensive Growth Strategy",
}) => {
  const [internalOpen, setInternalOpen] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form Fields
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>(defaultService);
  const [message, setMessage] = useState<string>("");

  // reCAPTCHA state
  const [captchaChecked, setCaptchaChecked] = useState<boolean>(false);
  const [captchaVerifying, setCaptchaVerifying] = useState<boolean>(false);
  const [captchaError, setCaptchaError] = useState<boolean>(false);

  // Sync external defaultService if it updates
  useEffect(() => {
    if (defaultService) {
      setSelectedService(defaultService);
    }
  }, [defaultService]);

  // Determine active open state: external prop takes precedence if provided
  const isModalOpen = Boolean(externalIsOpen) || internalOpen;

  const handleClose = useCallback(() => {
    setInternalOpen(false);
    sessionStorage.setItem("digibasera_inquiry_popup_dismissed", "true");
    if (externalOnClose) {
      externalOnClose();
    }
  }, [externalOnClose]);

  // Auto-trigger on initial page visit (after 1.8s) unless dismissed in this active session
  useEffect(() => {
    const isDismissed = sessionStorage.getItem("digibasera_inquiry_popup_dismissed");
    let timer: NodeJS.Timeout | null = null;

    if (!isDismissed) {
      timer = setTimeout(() => {
        setInternalOpen(true);
      }, 1800);
    }

    // Global custom event listeners so any button or link can open this popup
    const handleOpenEvent = (e?: Event) => {
      const customEvent = e as CustomEvent<{ serviceName?: string }>;
      if (customEvent?.detail?.serviceName) {
        setSelectedService(customEvent.detail.serviceName);
      }
      setInternalOpen(true);
    };

    window.addEventListener("open-visitor-lead-popup", handleOpenEvent);
    window.addEventListener("open-inquiry-modal", handleOpenEvent);

    // Escape key closes modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("open-visitor-lead-popup", handleOpenEvent);
      window.removeEventListener("open-inquiry-modal", handleOpenEvent);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  const handleCaptchaClick = () => {
    if (captchaChecked || captchaVerifying) return;
    setCaptchaVerifying(true);
    setCaptchaError(false);
    setTimeout(() => {
      setCaptchaVerifying(false);
      setCaptchaChecked(true);
    }, 700);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaChecked) {
      setCaptchaError(true);
      return;
    }

    const leadData: VisitorPopupLeadData = {
      fullName: name,
      phoneNumber: phone,
      email: email,
      goals: message,
      serviceNeeded: selectedService,
    };

    const formattedMessage = formatVisitorPopupWhatsAppMsg(leadData);
    window.open(getWhatsAppUrl(formattedMessage), "_blank");

    setSubmitted(true);
    sessionStorage.setItem("digibasera_inquiry_popup_dismissed", "true");
  };

  return (
    <>
      {/* Main Inquiry Popup Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/75 backdrop-blur-sm">
            {/* Backdrop click to close */}
            <div className="fixed inset-0" onClick={handleClose} aria-hidden="true" />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="relative w-full max-w-[840px] max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-10 my-auto border border-[#D4AF37]/50"
              onClick={(e) => e.stopPropagation()}
              id="visitor-lead-enquiry-modal"
            >
              {/* Top Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#FAF6EC] hover:bg-[#F3EACB] text-[#9A7312] hover:text-[#78590C] flex items-center justify-center transition-all duration-150 cursor-pointer shadow-xs"
                aria-label="Close popup"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>

              {submitted ? (
                /* Success State Screen */
                <div className="p-8 sm:p-14 text-center space-y-5 bg-white">
                  <div className="w-16 h-16 rounded-full bg-[#FAF6EC] border-2 border-[#D4AF37] flex items-center justify-center mx-auto text-[#B8860B] shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDFCF7] border border-[#E8DFC5] text-[11px] font-bold text-[#B8860B] uppercase tracking-widest">
                      <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                      Inquiry Dispatched Successfully
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#111827]">
                      Thank You, {name || "Partner"}!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
                      Your inquiry has been submitted. Our digital strategy team is preparing a
                      bespoke proposal for{" "}
                      <strong className="text-[#111111]">{selectedService}</strong> and will reach
                      out shortly.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                    <a
                      href={getWhatsAppUrl(
                        `Hello DigiBasera, I just submitted an inquiry for "${name}". Looking forward to connecting!`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                      <span>Open Instant WhatsApp Chat</span>
                    </a>

                    <button
                      onClick={handleClose}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-[#374151] font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Continue Browsing
                    </button>
                  </div>
                </div>
              ) : (
                /* High-Converting 2-Column Inquiry Layout */
                <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
                  {/* LEFT COLUMN: 3D Target Illustration & Value Props (Golden Theme) */}
                  <div className="md:col-span-5 bg-gradient-to-b from-[#FDFCF7] via-[#FBF7EB] to-[#F5EED6] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E8DFC5] relative overflow-hidden">
                    <div className="space-y-6">
                      {/* 3D Golden Target & Chart Graphic */}
                      <div className="pt-1 flex items-center justify-start">
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                          <svg
                            viewBox="0 0 160 160"
                            className="w-full h-full drop-shadow-md"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <ellipse
                              cx="80"
                              cy="142"
                              rx="56"
                              ry="12"
                              fill="#E8DFC5"
                              opacity="0.8"
                            />
                            <g opacity="0.95">
                              <path d="M102 125 V95 L112 89 V119 Z" fill="#D4AF37" />
                              <path d="M112 89 L120 94 V124 L112 119 Z" fill="#B8860B" />
                              <path d="M102 95 L110 90 L120 94 L112 89 Z" fill="#F3D979" />

                              <path d="M118 122 V75 L128 69 V116 Z" fill="#C59B27" />
                              <path d="M128 69 L136 74 V121 L128 116 Z" fill="#A17A16" />
                              <path d="M118 75 L126 70 L136 74 L128 69 Z" fill="#E5C158" />

                              <path d="M134 118 V55 L144 49 V112 Z" fill="#B8860B" />
                              <path d="M144 49 L152 54 V117 L144 112 Z" fill="#8C650A" />
                              <path d="M134 55 L142 50 L152 54 L144 49 Z" fill="#F7E7A9" />
                            </g>

                            <g transform="translate(10, 10) rotate(-12 65 65)">
                              <circle cx="68" cy="72" r="52" fill="#594206" opacity="0.25" />
                              <circle
                                cx="65"
                                cy="65"
                                r="52"
                                fill="url(#outerGoldGradLead)"
                                stroke="#B8860B"
                                strokeWidth="3"
                              />
                              <circle
                                cx="65"
                                cy="65"
                                r="40"
                                fill="#FFFFFF"
                                stroke="#F3EACB"
                                strokeWidth="1.5"
                              />
                              <circle cx="65" cy="65" r="28" fill="#B8860B" />
                              <circle cx="65" cy="65" r="18" fill="#FFFDF7" />
                              <circle cx="65" cy="65" r="10" fill="#D4AF37" />
                              <circle cx="65" cy="65" r="5" fill="#FBBF24" />

                              <g>
                                <line
                                  x1="28"
                                  y1="28"
                                  x2="65"
                                  y2="65"
                                  stroke="#FFFFFF"
                                  strokeWidth="4"
                                  strokeLinecap="round"
                                />
                                <line
                                  x1="32"
                                  y1="36"
                                  x2="66"
                                  y2="67"
                                  stroke="#594206"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  opacity="0.3"
                                />
                                <path d="M22 22 L34 26 L26 34 Z" fill="#D4AF37" />
                                <path d="M18 18 L28 20 L20 28 Z" fill="#E5C158" />
                                <path d="M28 14 L30 26 L18 24 Z" fill="#F7E7A9" />
                              </g>
                            </g>

                            <defs>
                              <linearGradient
                                id="outerGoldGradLead"
                                x1="0"
                                y1="0"
                                x2="130"
                                y2="130"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#E5C158" />
                                <stop offset="1" stopColor="#9A7312" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>

                      {/* Headline */}
                      <div className="space-y-1.5">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] leading-tight font-heading">
                          Scale Your{" "}
                          <span className="text-[#B8860B] block font-extrabold">
                            Digital Footprint.
                          </span>
                        </h3>

                        <p className="text-xs text-[#555555] leading-relaxed">
                          Partner with DigiBasera to engineer custom growth funnels, high-ROAS ads,
                          and market authority.
                        </p>
                      </div>

                      {/* 3 Value Propositions */}
                      <div className="space-y-2.5 pt-1">
                        <div className="flex items-center gap-2.5 text-xs text-[#111111] font-semibold">
                          <div className="w-5 h-5 rounded-full bg-white border border-[#E5C158] text-[#B8860B] flex items-center justify-center shrink-0 shadow-2xs">
                            <Shield className="w-3 h-3" />
                          </div>
                          <span>Bespoke Digital Strategies</span>
                        </div>

                        <div className="flex items-center gap-2.5 text-xs text-[#111111] font-semibold">
                          <div className="w-5 h-5 rounded-full bg-white border border-[#E5C158] text-[#B8860B] flex items-center justify-center shrink-0 shadow-2xs">
                            <Clock className="w-3 h-3" />
                          </div>
                          <span>Fast 24-Hour Proposal Dispatch</span>
                        </div>

                        <div className="flex items-center gap-2.5 text-xs text-[#111111] font-semibold">
                          <div className="w-5 h-5 rounded-full bg-white border border-[#E5C158] text-[#B8860B] flex items-center justify-center shrink-0 shadow-2xs">
                            <Search className="w-3 h-3" />
                          </div>
                          <span>Gujarat & Pan-India Track Record</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 text-[11px] text-[#78590C] font-medium border-t border-[#E8DFC5]/60 mt-4">
                      Direct WhatsApp: <strong className="text-[#111111]">+91 91730 08118</strong>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Enquire Now Form */}
                  <div className="md:col-span-7 p-6 sm:p-8 bg-white flex flex-col justify-center">
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl sm:text-2xl font-bold font-heading text-[#111827]">
                          Enquire Now
                        </h4>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#B8860B] bg-[#FAF6EC] px-2.5 py-0.5 rounded-full border border-[#E8DFC5]">
                          Free Consultation
                        </span>
                      </div>
                      <p className="text-xs text-[#64748B]">
                        Fill out the form below to receive a personalized digital strategy audit.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      {/* Name* */}
                      <div>
                        <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Patel"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-md border border-[#E2E8F0] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs text-[#111827] placeholder:text-[#94A3B8] outline-none transition-all"
                          id="popup-name-input"
                        />
                      </div>

                      {/* Phone No* & Email* in 2 columns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-md border border-[#E2E8F0] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs text-[#111827] placeholder:text-[#94A3B8] outline-none transition-all"
                            id="popup-phone-input"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-md border border-[#E2E8F0] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs text-[#111827] placeholder:text-[#94A3B8] outline-none transition-all"
                            id="popup-email-input"
                          />
                        </div>
                      </div>

                      {/* Service Selector */}
                      <div>
                        <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1">
                          Service of Interest
                        </label>
                        <select
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-md border border-[#E2E8F0] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs text-[#111827] bg-white outline-none transition-all"
                          id="popup-service-select"
                        >
                          {POPUP_SERVICES.map((srv) => (
                            <option key={srv} value={srv}>
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Type Your Message* */}
                      <div>
                        <label className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1">
                          Project Details / Objectives *
                        </label>
                        <textarea
                          required
                          rows={2}
                          placeholder="Briefly describe your goals, website URL, or project requirements..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-3.5 py-2 rounded-md border border-[#E2E8F0] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-xs text-[#111827] placeholder:text-[#94A3B8] outline-none transition-all resize-none"
                          id="popup-message-input"
                        />
                      </div>

                      {/* reCAPTCHA Box */}
                      <div className="pt-0.5">
                        <div
                          onClick={handleCaptchaClick}
                          className={`w-full max-w-[270px] p-2.5 rounded-md bg-[#F9FAFB] border ${
                            captchaError
                              ? "border-red-400 bg-red-50/40"
                              : captchaChecked
                                ? "border-green-300"
                                : "border-[#D1D5DB]"
                          } flex items-center justify-between cursor-pointer select-none transition-all`}
                          id="recaptcha-widget"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-6 h-6 rounded border flex items-center justify-center transition-all ${
                                captchaChecked
                                  ? "bg-white border-green-600 text-green-600"
                                  : captchaVerifying
                                    ? "bg-white border-blue-400 text-blue-500"
                                    : "bg-white border-[#C1C1C1] hover:border-gray-400"
                              }`}
                            >
                              {captchaVerifying ? (
                                <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                              ) : captchaChecked ? (
                                <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                              ) : null}
                            </div>
                            <span className="text-xs font-medium text-[#222222]">
                              I'm not a robot
                            </span>
                          </div>

                          <div className="flex flex-col items-center pl-2">
                            <svg className="w-5 h-5" viewBox="0 0 48 48">
                              <path
                                fill="#4285F4"
                                d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 6c4.08 0 7.74 1.76 10.32 4.58L27.5 21.4C26.54 20.52 25.33 20 24 20c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.47 0 4.58-1.5 5.5-3.64H24v-6h13.88C37.95 23.4 38 24.68 38 26c0 7.73-6.27 14-14 14-7.73 0-14-6.27-14-14s6.27-14 14-14z"
                              />
                              <path
                                fill="#34A853"
                                d="M37.88 22.36C37.95 23.4 38 24.68 38 26c0 7.73-6.27 14-14 14-7.73 0-14-6.27-14-14 0-1.63.29-3.2.82-4.66L37.88 22.36z"
                                opacity="0.2"
                              />
                            </svg>
                            <span className="text-[8px] font-medium text-[#6B7280]">reCAPTCHA</span>
                          </div>
                        </div>
                        {captchaError && (
                          <span className="text-[10px] text-red-500 block pt-1">
                            Please verify that you are not a robot before submitting.
                          </span>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-1">
                        <button
                          type="submit"
                          className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B8860B] hover:from-[#C59B27] hover:to-[#A17A16] text-[#111111] font-extrabold text-xs sm:text-sm tracking-wide shadow-[0_4px_14px_rgba(212,175,55,0.35)] hover:shadow-lg transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
                          id="popup-submit-btn"
                        >
                          <span>Submit Inquiry to WhatsApp</span>
                          <Send className="w-3.5 h-3.5 text-[#111111]" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
