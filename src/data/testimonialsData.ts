import { TestimonialItem } from "../types";

export interface StoredTestimonialItem extends TestimonialItem {
  avatarUrl?: string;
  date?: string;
  status?: "active" | "hidden";
  displayOrder?: number;
  featured?: boolean;
}

export const TESTIMONIALS_STORAGE_KEY = "digibasera_testimonials_v1";

export const DEFAULT_TESTIMONIALS: StoredTestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Vikram Malhotra",
    role: "Founder & CEO",
    company: "Aura Lifestyle & D2C Apparel",
    industry: "E-commerce",
    quote:
      "Digibasera completely restructured our paid acquisition and Shopify store. In less than 90 days, our blended ROAS improved from 2.1x to 4.6x, and our cost per acquisition dropped significantly. Their transparency is unmatched.",
    metricHighlight: "4.6x Blended ROAS Achieved",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    date: "Verified Client Review",
    status: "active",
    displayOrder: 1,
    featured: true,
  },
  {
    id: "test-2",
    clientName: "Dr. Ananya Sharma",
    role: "Managing Director",
    company: "Apex Multi-Specialty Dental & Wellness",
    industry: "Healthcare",
    quote:
      "Our patient appointment bookings from Google Maps and local search jumped by over 200%. The team understands how to build genuine medical trust and handle patient inquiries efficiently.",
    metricHighlight: "+210% Inbound Patient Calls",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    date: "Verified Client Review",
    status: "active",
    displayOrder: 2,
    featured: true,
  },
  {
    id: "test-3",
    clientName: "Rajesh Singhania",
    role: "Vice President of Sales",
    company: "Skyline Luxury Properties",
    industry: "Real Estate",
    quote:
      "Unlike previous agencies that delivered unqualified leads, Digibasera built a high-converting funnel with pre-screening. We closed 12 luxury villa bookings within the first quarter.",
    metricHighlight: "₹480 Avg Cost Per Verified Buyer",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: "Verified Client Review",
    status: "active",
    displayOrder: 3,
    featured: true,
  },
  {
    id: "test-4",
    clientName: "Mehul Mehta",
    role: "Managing Director",
    company: "Precision Industrial Systems",
    industry: "Manufacturing & B2B",
    quote:
      "Their technical SEO strategy ranked us on page 1 of Google for over 40 industrial export keywords. We now receive regular inquiries from Europe and the GCC without spending a fortune on ads.",
    metricHighlight: "45+ Page 1 Global Keywords",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    date: "Verified Client Review",
    status: "active",
    displayOrder: 4,
    featured: true,
  },
  {
    id: "test-5",
    clientName: "Pooja Kothari",
    role: "Founder & Creative Lead",
    company: "Zaveri Heritage Fine Jewellery",
    industry: "Luxury & Jewellery",
    quote:
      "Digibasera created high-definition Instagram festival creatives and targeted Meta ads that generated over 380 direct WhatsApp purchase inquiries during Dhanteras and Diwali. Unbelievable ROI!",
    metricHighlight: "380+ Direct Festive Inquiries",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    date: "Verified Client Review",
    status: "active",
    displayOrder: 5,
    featured: true,
  },
  {
    id: "test-6",
    clientName: "Bhavin Patel",
    role: "Principal Architect",
    company: "ABFI Luxury Interiors",
    industry: "Architecture & Design",
    quote:
      "Our new luxury website with 3D project visualizers and instant WhatsApp quote estimation doubled our high-ticket villa interior client bookings within 60 days. Speed and design quality are top-tier.",
    metricHighlight: "185+ High-Ticket Villa Leads",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    date: "Verified Client Review",
    status: "active",
    displayOrder: 6,
    featured: true,
  },
  {
    id: "test-7",
    clientName: "Karan Dave",
    role: "Operations Director",
    company: "Super India Interior Infrastructure",
    industry: "Commercial Fitouts",
    quote:
      "From zero ranking to dominating competitive corporate fitout queries in Gujarat. Their B2B Google Ads and SEO strategy brought in multi-lakh commercial contracts consistently.",
    metricHighlight: "₹2.8 Cr+ Verified B2B Pipeline",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    date: "Verified Client Review",
    status: "active",
    displayOrder: 7,
    featured: true,
  },
  {
    id: "test-8",
    clientName: "Sanjay Vora",
    role: "Managing Partner",
    company: "Saffron Royal Dine & Hospitality",
    industry: "Hospitality & Dining",
    quote:
      "Their viral short-form video reels and weekend discount promotions packed our restaurant tables. Our weekend buffet bookings are now completely sold out every single week.",
    metricHighlight: "100% Weekend Table Bookings",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    date: "Verified Client Review",
    status: "active",
    displayOrder: 8,
    featured: true,
  },
];

export function loadStoredTestimonials(): StoredTestimonialItem[] {
  try {
    const raw = localStorage.getItem(TESTIMONIALS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Error loading stored testimonials:", e);
  }
  return DEFAULT_TESTIMONIALS;
}

export function saveStoredTestimonials(items: StoredTestimonialItem[]): void {
  try {
    localStorage.setItem(TESTIMONIALS_STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error("Error saving stored testimonials:", e);
  }
}

export function resetTestimonialsToFactoryDefaults(): StoredTestimonialItem[] {
  try {
    localStorage.setItem(TESTIMONIALS_STORAGE_KEY, JSON.stringify(DEFAULT_TESTIMONIALS));
  } catch (e) {
    console.error("Error resetting testimonials:", e);
  }
  return DEFAULT_TESTIMONIALS;
}
