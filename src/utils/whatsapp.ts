import { AGENCY_CONFIG } from "../data/agencyData";

export const getWhatsAppUrl = (message?: string): string => {
  const phone = AGENCY_CONFIG.phoneRaw;
  const text = encodeURIComponent(message || AGENCY_CONFIG.defaultWhatsappMsg);
  return `https://wa.me/${phone}?text=${text}`;
};

export const getServiceWhatsAppUrl = (serviceTitle: string, categoryTitle?: string): string => {
  const msg = `Hello Digibasera Team, I am interested in your "${serviceTitle}"${categoryTitle ? ` (${categoryTitle})` : ""} services for my business. Please share details, pricing, and how we can get started.`;
  return getWhatsAppUrl(msg);
};

export const getTrainingWhatsAppUrl = (courseTitle?: string): string => {
  const msg = courseTitle
    ? `Hello, I am interested in the "${courseTitle}" Digital Marketing Training Program (in association with Zinmatt). Please share the syllabus, fees, and upcoming batch schedule.`
    : AGENCY_CONFIG.trainingWhatsappMsg;
  return getWhatsAppUrl(msg);
};

export const getAuditWhatsAppUrl = (website?: string, businessName?: string): string => {
  const msg = `Hello Digibasera Team, I would like to request a Free Digital Marketing & SEO Audit for my business${businessName ? ` "${businessName}"` : ""}${website ? ` (Website: ${website})` : ""}.`;
  return getWhatsAppUrl(msg);
};

export interface ContactFormSubmissionData {
  fullName: string;
  businessName: string;
  phoneNumber: string;
  email: string;
  websiteOrSocial?: string;
  serviceCategory: string;
  budgetRange: string;
  message?: string;
}

export const formatContactFormWhatsAppMsg = (data: ContactFormSubmissionData): string => {
  const lines = [
    `*🚀 NEW STRATEGY & SERVICE INQUIRY (DIGIBASERA)*`,
    ``,
    `*👤 Client Name:* ${data.fullName || "Not specified"}`,
    `*🏢 Brand / Company:* ${data.businessName || "Not specified"}`,
    `*📞 Phone:* ${data.phoneNumber || "Not specified"}`,
    `*✉️ Email:* ${data.email || "Not specified"}`,
    data.websiteOrSocial ? `*🌐 Website/Social:* ${data.websiteOrSocial}` : null,
    `*🎯 Practice/Service:* ${data.serviceCategory || "General Digital Marketing"}`,
    `*💰 Budget Range:* ${data.budgetRange || "Not specified"}`,
    data.message
      ? `*📝 Message / Goals:* ${data.message}`
      : `*📝 Message:* Requesting free audit and growth roadmap.`,
    ``,
    `_Sent directly from Digibasera Website Lead Form_`,
  ].filter(Boolean) as string[];

  return lines.join("\n");
};

export interface ConsultationModalSubmissionData {
  name: string;
  business?: string;
  phone: string;
  email: string;
  service: string;
  budget?: number;
  industry?: string;
}

export const formatConsultationModalWhatsAppMsg = (
  data: ConsultationModalSubmissionData,
): string => {
  const lines = [
    `*🚀 NEW CONSULTATION / AUDIT REQUEST (DIGIBASERA)*`,
    ``,
    `*👤 Name:* ${data.name || "Not specified"}`,
    data.business ? `*🏢 Company / Brand:* ${data.business}` : null,
    `*📞 Phone:* ${data.phone || "Not specified"}`,
    `*✉️ Email:* ${data.email || "Not specified"}`,
    `*🎯 Growth Focus / Service:* ${data.service || "Digital Strategy Consultation"}`,
    data.budget ? `*💰 Monthly Budget:* ₹${data.budget.toLocaleString("en-IN")}/mo` : null,
    data.industry ? `*🏭 Industry Vertical:* ${data.industry}` : null,
    ``,
    `_Sent directly from Digibasera Quick Consultation Popup_`,
  ].filter(Boolean) as string[];

  return lines.join("\n");
};

export interface VisitorPopupLeadData {
  fullName: string;
  businessName?: string;
  phoneNumber: string;
  email: string;
  serviceNeeded: string;
  websiteUrl?: string;
  goals?: string;
}

export const formatVisitorPopupWhatsAppMsg = (data: VisitorPopupLeadData): string => {
  const lines = [
    `*🔥 NEW WEBSITE VISITOR LEAD (DIGIBASERA AUDIT & QUOTE)*`,
    ``,
    `*👤 Name:* ${data.fullName || "Not specified"}`,
    data.businessName ? `*🏢 Company / Business:* ${data.businessName}` : null,
    `*📞 Phone / WhatsApp:* ${data.phoneNumber || "Not specified"}`,
    `*✉️ Email:* ${data.email || "Not specified"}`,
    `*🎯 Service Needed:* ${data.serviceNeeded || "Free Digital Audit"}`,
    data.websiteUrl ? `*🌐 Website URL:* ${data.websiteUrl}` : null,
    data.goals ? `*📋 Project Goals:* ${data.goals}` : null,
    ``,
    `_Captured via Website Visitor Welcome Popup_`,
  ].filter(Boolean) as string[];

  return lines.join("\n");
};
