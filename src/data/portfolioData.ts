import { PortfolioItem } from "../types";

export const PORTFOLIO_STORAGE_KEY = "digibasera_portfolio_verified_clients_v11";

type SampleSeed = {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  categoryName: string;
  imageUrl: string;
  relatedServiceIds?: string[];
  websiteUrl?: string;
  displayUrl?: string;
  industry?: string;
  videoUrl?: string;
};

const makeItem = (seed: SampleSeed, order: number): PortfolioItem => ({
  id: seed.id,
  title: seed.title,
  projectType: seed.websiteUrl ? "live_client" : "sample_project",
  badge: seed.websiteUrl ? "Live Client Website" : "Sample Project",
  clientName: seed.title,
  industry: seed.industry || seed.categoryName,
  categoryId: seed.categoryId,
  categoryName: seed.categoryName,
  category: seed.category,
  relatedServiceIds: seed.relatedServiceIds || [],
  relatedServiceNames: [],
  websiteUrl: seed.websiteUrl,
  displayUrl: seed.displayUrl,
  imageUrl: seed.imageUrl,
  videoUrl: seed.videoUrl,
  summary: "",
  challenge: "",
  strategy: "",
  deliverables: [],
  metrics: [],
  status: "active",
  displayOrder: order,
  featured: order <= 3,
});

const WEB = {
  category: "Websites",
  categoryId: "web-development",
  categoryName: "Web Development",
  relatedServiceIds: ["custom-web-development"],
};
const SOCIAL = {
  category: "Social Media",
  categoryId: "digital-marketing",
  categoryName: "Social Media",
  relatedServiceIds: ["social-media-marketing"],
};
const SEO = {
  category: "SEO",
  categoryId: "seo",
  categoryName: "SEO & AI Search",
  relatedServiceIds: ["seo-services-core"],
};
const ADS = {
  category: "Ads",
  categoryId: "digital-marketing",
  categoryName: "Performance Ads",
  relatedServiceIds: ["meta-ads"],
};
const BRAND = {
  category: "Branding",
  categoryId: "branding-creative",
  categoryName: "Branding & Design",
  relatedServiceIds: ["brand-identity"],
};
const WEDDING = {
  category: "Wedding",
  categoryId: "wedding-creative",
  categoryName: "Wedding Creative",
  relatedServiceIds: ["wedding-video-editing"],
};
const VIDEO = {
  category: "Video",
  categoryId: "video-production",
  categoryName: "Video & Reels",
  relatedServiceIds: ["video-editing"],
};

const SAMPLE_SEEDS: SampleSeed[] = [
  // Websites (real live client sites)
  {
    ...WEB,
    id: "abfi-interior-live",
    title: "ABFI Interior",
    websiteUrl: "https://www.abfiinterior.com",
    displayUrl: "www.abfiinterior.com",
    imageUrl: "/assets/images/site-abfiinterior.jpg",
    industry: "Interior Design",
  },
  {
    ...WEB,
    id: "super-india-interior-live",
    title: "Super India Interior",
    websiteUrl: "https://www.superindiainterior.com",
    displayUrl: "www.superindiainterior.com",
    imageUrl: "/assets/images/site-superindiainterior.jpg",
    industry: "Interior & Contractor",
  },
  {
    ...WEB,
    id: "premium-pack-co-live",
    title: "Premium Pack Co",
    websiteUrl: "https://www.premiumpackco.com",
    displayUrl: "www.premiumpackco.com",
    imageUrl: "/assets/images/site-premiumpackco.jpg",
    industry: "Packaging Manufacturer",
  },

  // Social Media Posts
  {
    ...SOCIAL,
    id: "social-diwali",
    title: "Diwali Festive Offer Post",
    imageUrl: "/assets/images/sample-social-diwali.jpg",
  },
  {
    ...SOCIAL,
    id: "social-navratri",
    title: "Navratri Festive Post",
    imageUrl: "/assets/images/navratri_festive_post_1788005993964.jpg",
  },
  {
    ...SOCIAL,
    id: "social-holi",
    title: "Holi Flash Sale Post",
    imageUrl: "/assets/images/holi_festival_promo_post_1788006061652.jpg",
  },
  {
    ...SOCIAL,
    id: "social-business-growth",
    title: "Business Promotion Post",
    imageUrl: "/assets/images/business_growth_promo_post_1788006007399.jpg",
  },
  {
    ...SOCIAL,
    id: "social-real-estate",
    title: "Real Estate Launch Post",
    imageUrl: "/assets/images/real_estate_promo_post_1788006020063.jpg",
  },
  {
    ...SOCIAL,
    id: "social-restaurant",
    title: "Restaurant Festive Offer Post",
    imageUrl: "/assets/images/restaurant_festive_offer_post_1788006034950.jpg",
  },
  {
    ...SOCIAL,
    id: "social-salon",
    title: "Salon & Spa Promotion Post",
    imageUrl: "/assets/images/salon_spa_festive_glow_promo_1788006048578.jpg",
  },
  {
    ...SOCIAL,
    id: "social-jewellery",
    title: "Jewellery Festive Post",
    imageUrl: "/assets/images/sample-social-jewellery.jpg",
  },
  {
    ...SOCIAL,
    id: "social-gym",
    title: "Gym New Year Offer Post",
    imageUrl: "/assets/images/sample-social-gym-offer.jpg",
  },
  {
    ...SOCIAL,
    id: "social-google-ads",
    title: "Google Ads Service Post",
    imageUrl: "/assets/images/sample-social-google-ads.jpg",
  },

  // SEO Reports & Charts
  {
    ...SEO,
    id: "seo-traffic",
    title: "Organic Traffic Growth Report",
    imageUrl: "/assets/images/sample-seo-traffic-chart.jpg",
  },
  {
    ...SEO,
    id: "seo-console",
    title: "Search Console Performance",
    imageUrl: "/assets/images/sample-seo-console-chart.jpg",
  },
  {
    ...SEO,
    id: "seo-local",
    title: "Local SEO Ranking Report",
    imageUrl: "/assets/images/sample-seo-local-chart.jpg",
  },
  {
    ...SEO,
    id: "seo-audit",
    title: "Technical SEO Audit Score",
    imageUrl: "/assets/images/sample-seo-audit-chart.jpg",
  },

  // Performance Ads
  {
    ...ADS,
    id: "ads-meta-report",
    title: "Meta Ads Performance Report",
    imageUrl: "/assets/images/sample-ads-report.jpg",
  },

  // Branding & Design
  {
    ...BRAND,
    id: "brand-logo-aura-cafe",
    title: "Aura Cafe Logo Design",
    imageUrl: "/assets/images/brand-logo-sample-1.jpg",
  },
  {
    ...BRAND,
    id: "brand-logo-nova-build",
    title: "Nova Build Logo Design",
    imageUrl: "/assets/images/brand-logo-sample-2.jpg",
  },
  {
    ...BRAND,
    id: "brand-visiting-card-premium",
    title: "Premium Black & Gold Visiting Card",
    imageUrl: "/assets/images/brand-visiting-card-1.jpg",
  },
  {
    ...BRAND,
    id: "brand-visiting-card-corporate",
    title: "Corporate Visiting Card Design",
    imageUrl: "/assets/images/brand-visiting-card-2.jpg",
  },
  {
    ...BRAND,
    id: "brand-banner-gym",
    title: "Gym Promotion Banner",
    imageUrl: "/assets/images/brand-banner-1.jpg",
  },
  {
    ...BRAND,
    id: "brand-banner-sale",
    title: "Grand Opening Sale Banner",
    imageUrl: "/assets/images/brand-banner-2.jpg",
  },

  // Video Editing, Reels & Motion
  {
    ...VIDEO,
    id: "video-product-promo",
    title: "Product Promo Video",
    imageUrl: "/assets/images/portfolio-product-promo-thumb.jpg",
    videoUrl: "/assets/videos/portfolio-product-promo.mp4",
  },
  {
    ...VIDEO,
    id: "video-instagram-reel",
    title: "Instagram Reel Edit",
    imageUrl: "/assets/images/portfolio-instagram-reel-thumb.jpg",
    videoUrl: "/assets/videos/portfolio-instagram-reel.mp4",
  },
  {
    ...VIDEO,
    id: "video-wedding-film",
    title: "Wedding Film Edit",
    imageUrl: "/assets/images/portfolio-wedding-film-thumb.jpg",
    videoUrl: "/assets/videos/portfolio-wedding-film.mp4",
  },
  {
    ...VIDEO,
    id: "video-ai-motion",
    title: "AI Motion Video",
    imageUrl: "/assets/images/portfolio-ai-motion-thumb.jpg",
    videoUrl: "/assets/videos/portfolio-ai-motion.mp4",
  },

  // Wedding Creative
  {
    ...WEDDING,
    id: "wedding-teaser",
    title: "Wedding Film Teaser",
    imageUrl: "/assets/images/sample-wedding-teaser.jpg",
  },
  {
    ...WEDDING,
    id: "wedding-album",
    title: "Wedding Album Design",
    imageUrl: "/assets/images/sample-wedding-album.jpg",
  },
  {
    ...WEDDING,
    id: "wedding-invite",
    title: "Wedding Invitation Creative",
    imageUrl: "/assets/images/sample-wedding-invite.jpg",
  },
  {
    ...WEDDING,
    id: "wedding-prewedding",
    title: "Pre-Wedding Shoot Edit",
    imageUrl: "/assets/images/sample-wedding-prewedding.jpg",
  },
  {
    ...WEDDING,
    id: "wedding-editing",
    title: "Wedding Video Editing",
    imageUrl: "/assets/images/sample-wedding-editing.jpg",
  },
];

export const DEFAULT_PORTFOLIO_ITEMS: PortfolioItem[] = SAMPLE_SEEDS.map((seed, i) =>
  makeItem(seed, i + 1),
);

export interface PortfolioCategoryMeta {
  id: string;
  label: string;
  description?: string;
  badge?: string;
  displayOrder?: number;
}

export const PORTFOLIO_CATEGORIES_STORAGE_KEY = "digibasera_portfolio_categories_v4";

export const DEFAULT_PORTFOLIO_CATEGORIES: PortfolioCategoryMeta[] = [
  { id: "Websites", label: "Websites", badge: "Live & Custom Portals", displayOrder: 1 },
  { id: "Social Media", label: "Social Media", badge: "Creatives & Reels", displayOrder: 2 },
  { id: "SEO", label: "SEO & AI Search", badge: "Organic Growth", displayOrder: 3 },
  { id: "Ads", label: "Performance Ads", badge: "Meta & Google PPC", displayOrder: 4 },
  { id: "Branding", label: "Branding & Design", badge: "Logos & Identity", displayOrder: 5 },
  { id: "Wedding", label: "Wedding Creative", badge: "Teasers & Albums", displayOrder: 6 },
  { id: "Video", label: "Video & Reels", badge: "Editing & Motion", displayOrder: 7 },
];

export const loadStoredPortfolioCategories = (): PortfolioCategoryMeta[] => {
  try {
    const data = localStorage.getItem(PORTFOLIO_CATEGORIES_STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error("Failed to load portfolio categories from localStorage:", err);
  }
  return DEFAULT_PORTFOLIO_CATEGORIES;
};

export const saveStoredPortfolioCategories = (categories: PortfolioCategoryMeta[]): void => {
  try {
    localStorage.setItem(PORTFOLIO_CATEGORIES_STORAGE_KEY, JSON.stringify(categories));
  } catch (err) {
    console.error("Failed to save portfolio categories to localStorage:", err);
  }
};

export const resetPortfolioCategoriesToDefaults = (): PortfolioCategoryMeta[] => {
  try {
    localStorage.setItem(
      PORTFOLIO_CATEGORIES_STORAGE_KEY,
      JSON.stringify(DEFAULT_PORTFOLIO_CATEGORIES),
    );
  } catch (err) {
    console.error("Failed to reset portfolio categories in localStorage:", err);
  }
  return DEFAULT_PORTFOLIO_CATEGORIES;
};

export const loadStoredPortfolioItems = (): PortfolioItem[] => {
  try {
    const data = localStorage.getItem(PORTFOLIO_STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error("Failed to load portfolio items from localStorage:", err);
  }
  return DEFAULT_PORTFOLIO_ITEMS;
};

export const saveStoredPortfolioItems = (items: PortfolioItem[]): void => {
  try {
    localStorage.setItem(PORTFOLIO_STORAGE_KEY, JSON.stringify(items));
  } catch (err) {
    console.error("Failed to save portfolio items to localStorage:", err);
  }
};

export const savePortfolioItems = saveStoredPortfolioItems;

export const resetPortfolioToFactoryDefaults = (): PortfolioItem[] => {
  try {
    localStorage.setItem(PORTFOLIO_STORAGE_KEY, JSON.stringify(DEFAULT_PORTFOLIO_ITEMS));
  } catch (err) {
    console.error("Failed to reset portfolio items in localStorage:", err);
  }
  return DEFAULT_PORTFOLIO_ITEMS;
};
