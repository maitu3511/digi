import React, { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Navigation,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Check,
  Copy,
  Star,
} from "lucide-react";
import { AGENCY_CONFIG } from "../data/agencyData";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../utils/whatsapp";

export const RajkotMapSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const rajkotAddress =
    "DigiBasera, Mayani Chowk, 3, Chandreshnagar Main Rd, opp. Backbone Shopping center, Machani Nagar, Chandreshnagar, Rajkot, Gujarat 360004, India";
  const googleMapsUrl = "https://share.google/6qE9KBy6hSqJnPcZ2";
  const mapEmbedSrc =
    "https://maps.google.com/maps?q=DigiBasera%2C%20Mayani%20Chowk%2C%203%2C%20Chandreshnagar%20Main%20Rd%2C%20opp.%20Backbone%20Shopping%20center%2C%20Machani%20Nagar%2C%20Chandreshnagar%2C%20Rajkot%2C%20Gujarat%20360004%2C%20India&t=&z=16&ie=UTF8&iwloc=&output=embed";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(rajkotAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      className="py-16 bg-[#FAFAF8] border-t border-b border-[#E8E1D0]"
      id="rajkot-map-location"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E1D0] text-[#9A7B16] text-xs font-bold uppercase tracking-widest mb-3 font-heading shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Our Location & Agency Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] font-heading tracking-tight">
            Visit Our Office in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227]">
              Rajkot, Gujarat
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-3 leading-relaxed">
            Drop by our headquarters for an in-person growth strategy consultation, client workshop,
            or digital marketing career counseling.
          </p>
        </motion.div>

        {/* Map Container & Office Info Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Office Details Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E1D0] shadow-sm"
          >
            <div className="space-y-6">
              {/* Branch Header */}
              <div className="border-b border-[#E8E1D0] pb-5">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#111111] text-[#D4AF37] border border-[#D4AF37]">
                    Headquarters & Strategy Hub
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open for Visits
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] font-heading">
                  Digi Basera Marketing Agency
                </h3>
                <p className="text-xs text-[#9A7B16] font-semibold mt-0.5">
                  Rajkot, Saurashtra & Pan-India Growth Operations
                </p>
              </div>

              {/* Contact List */}
              <div className="space-y-4 text-xs">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] uppercase font-bold text-[#888888] tracking-wider block font-heading">
                      Office Address
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#111111] mt-0.5 leading-snug">
                      DigiBasera
                    </p>
                    <p className="text-xs font-semibold text-[#9A7B16] mt-0.5">Mayani Chowk</p>
                    <p className="text-xs text-[#555555] mt-0.5 leading-relaxed">
                      Mayani Chowk, 3, Chandreshnagar Main Rd, opp. Backbone Shopping center,
                      Machani Nagar, Chandreshnagar, Rajkot, Gujarat 360004, India
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#888888] tracking-wider block font-heading">
                      Consultation Hours
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#111111] mt-0.5">
                      Monday – Saturday: 9:30 AM – 7:30 PM IST
                    </p>
                    <p className="text-[11px] text-[#777777]">Sunday: By Prior Appointment Only</p>
                  </div>
                </div>

                {/* Phone & Direct Desk */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#888888] tracking-wider block font-heading">
                      Direct Inquiries & Desk
                    </span>
                    <a
                      href={`tel:${AGENCY_CONFIG.phoneRaw}`}
                      className="text-xs sm:text-sm font-bold text-[#111111] hover:text-[#9A7B16] transition-colors mt-0.5 block"
                    >
                      {AGENCY_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F8F8F6] border border-[#E8E1D0] text-[#9A7B16] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#888888] tracking-wider block font-heading">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${AGENCY_CONFIG.email}`}
                      className="text-xs sm:text-sm font-bold text-[#111111] hover:text-[#9A7B16] transition-colors mt-0.5 block"
                    >
                      {AGENCY_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-[#E8E1D0] space-y-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-[#111111] hover:bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  id="get-directions-btn"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="py-2.5 px-3 rounded-lg bg-[#F8F8F6] hover:bg-[#EFEFEA] border border-[#E8E1D0] text-[#111111] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  id="copy-address-btn"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#888888]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3.5 rounded-lg bg-white hover:bg-[#FAF9F5] border border-[#E8E1D0] hover:border-[#4285F4] text-[#111111] text-xs font-bold flex items-center justify-between transition-all group shadow-2xs"
                id="gmb-profile-btn"
                title="View DigiBasera on Google My Business & Read Client Reviews"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
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
                  <span className="group-hover:text-[#4285F4] transition-colors">
                    Google My Business
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#9A7B16] text-[11px] font-semibold">
                  <Star className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />
                  <span>5.0 • View Reviews</span>
                  <ExternalLink className="w-3 h-3 text-[#888888] group-hover:text-[#111111]" />
                </div>
              </a>

              <a
                href={getWhatsAppUrl(
                  "Hi Digi Basera team, I want to visit your Rajkot office for a consultation.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                <span>Book Office Appointment via WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Interactive Embed (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E8E1D0] shadow-sm bg-white relative min-h-[420px] flex flex-col"
          >
            {/* Top Bar with Map Title & External Link */}
            <div className="px-5 py-3.5 bg-white border-b border-[#E8E1D0] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                <span className="text-xs font-bold text-[#111111] font-heading">
                  Interactive Google Map: Rajkot, Gujarat (HQ)
                </span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-[#9A7B16] hover:text-[#7E580A] flex items-center gap-1 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Maps iFrame */}
            <div className="relative flex-1 w-full min-h-[380px] bg-[#E8E1D0]">
              <iframe
                title="DigiBasera Rajkot Location"
                src={mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0"
              />

              {/* Floating Verified Google Map Address Box */}
              <div className="absolute top-3 left-3 z-10 max-w-[280px] sm:max-w-xs bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#E8E1D0] shadow-md pointer-events-auto">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#111111] text-[#D4AF37] border border-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 text-left">
                    <div className="text-xs font-bold text-[#111111] leading-tight">DigiBasera</div>
                    <div className="text-[11px] font-semibold text-[#9A7B16] mt-0.5">
                      Mayani Chowk
                    </div>
                    <div className="text-[10.5px] text-[#555555] mt-1 leading-snug">
                      Mayani Chowk, 3, Chandreshnagar Main Rd, opp. Backbone Shopping center,
                      Machani Nagar, Chandreshnagar, Rajkot, Gujarat 360004, India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
