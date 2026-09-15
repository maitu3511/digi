export type PageType =
  | "home"
  | "about"
  | "services"
  | "portfolio"
  | "pricing"
  | "education"
  | "training"
  | "careers"
  | "blog"
  | "process"
  | "contact"
  | "admin"
  | "terms"
  | "privacy"
  | "areas-we-serve";

export interface PricingPackage {
  id: string;
  name: string;
  badge: string;
  priceDisplay: string;
  billingPeriod: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  deliverables: string;
  idealFor: string;
  buttonText: string;
}

export type PricingBillingType =
  | "/month"
  | "/project"
  | "/article"
  | "/design"
  | "/video"
  | "/session"
  | "/product"
  | "/campaign"
  | "/reel";

export interface PricingServiceCatalogueItem {
  id: string;
  name: string;
  categoryId: string; // e.g. 'seo' | 'digital-marketing' | 'web-development' | 'e-commerce' | 'branding-creative' | 'amazon' | 'wedding-creative'
  categoryName?: string;
  shortDesc: string;
  fullDesc?: string;
  startingPrice: string; // e.g. '₹14,999'
  priceNumeric: number; // e.g. 14999 for sorting/filtering
  currency: string; // '₹'
  billingType: PricingBillingType;
  inclusions: string[];
  fullInclusions?: string[];
  featured?: boolean;
  popular?: boolean;
  status: "active" | "hidden" | "archived";
  displayOrder: number;
  badge?: string;
  ctaText?: string;
  whatsappMessage?: string;
  imageUrl?: string;
  iconName?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface PricingPackageCatalogueItem {
  id: string;
  name: string;
  startingPrice: string;
  priceNumeric: number;
  billingPeriod: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  featured?: boolean;
  status: "active" | "hidden";
  features: string[];
  notIncluded?: string[];
  disclaimerNote?: string;
  displayOrder: number;
  buttonText?: string;
  idealFor?: string;
  priceDisplay?: string;
  deliverables?: string;
}

export interface PricingCategoryMeta {
  id: string;
  title: string;
  subtitle?: string;
  badge: string;
  iconName: string;
  displayOrder: number;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: "Marketing" | "Tech & Web" | "Design & Creative" | "Training & Operations";
  location: string;
  type: "Full-Time" | "Part-Time" | "Internship" | "Hybrid / Remote";
  experience: string;
  openings: number;
  salaryRange: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}

export interface BlogDetailedSection {
  heading: string;
  subheading?: string;
  content: string[];
  bulletPoints?: string[];
  proTip?: string;
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug?: string;
  title: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio?: string;
  };
  readTime: string;
  publishedDate: string;
  imageUrl: string;
  excerpt: string;
  tags?: string[];
  tableOfContents?: { id: string; title: string }[];
  content: string[];
  detailedSections?: BlogDetailedSection[];
  takeaways: string[];
  faqs?: BlogFaq[];
  relatedService?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  experience: string;
  bio: string;
  skills: string[];
  imageUrl: string;
  linkedin?: string;
}

export interface ServiceStep {
  stepNumber: string;
  title: string;
  duration?: string;
  description: string;
  deliverables: string[];
}

export interface SubServicePart {
  id: string;
  title: string;
  description: string;
  badge?: string;
  deliverables: string[];
  keyBenefit?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description?: string;
  iconName: string;
  imageUrl?: string;
  deliverables: string[];
  idealFor: string;
  roiImpact: string;
  targetOutcome?: string;
  techStack?: string[];
  toolsUsed?: string[];
  timeline?: string;
  methodology?: string[];
  subServices?: SubServicePart[];
  executionSteps?: ServiceStep[];
  pricingStartingAt?: string;
  portfolioCategory?:
    | "Websites"
    | "SEO"
    | "Social Media"
    | "Ads"
    | "E-commerce"
    | "Branding"
    | "Photography"
    | "App Development"
    | "UI/UX";
  relatedCaseStudyIds?: string[];
  whatsappMessage?: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  badge: string;
  shortDescription: string;
  iconName: string;
  accentColor: string; // e.g. 'blue' | 'purple' | 'cyan' | 'indigo' | 'emerald' | 'amber'
  imageUrl?: string;
  portfolioCategory?:
    | "Websites"
    | "SEO"
    | "Social Media"
    | "Ads"
    | "E-commerce"
    | "Branding"
    | "Photography"
    | "App Development"
    | "UI/UX";
  services: ServiceItem[];
}

export interface IndustryServiceItem {
  title: string;
  description: string;
  highlights: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline?: string;
  iconName: string;
  description: string;
  keyChallenge: string;
  growthSolution: string;
  metricsPlaceholder: string;
  servicesOffered: IndustryServiceItem[];
  coreChannels?: string[];
  targetAudience?: string;
  clientSuccessOutcome?: string;
}

export type PortfolioProjectType = "live_client" | "demo_project" | "sample_project" | "case_study";

export interface PortfolioItem {
  id: string;
  title: string;
  projectType: PortfolioProjectType;
  badge?: string; // e.g. 'Live Client Website', 'Sample Project', 'Demo Project', 'Case Study'
  clientName: string; // e.g. 'ABFI Interior', 'Dental Care Clinic'
  clientPlaceholder?: string;
  industry: string;
  categoryId: string; // 'seo' | 'digital-marketing' | 'web-development' | 'e-commerce' | 'branding-creative' | 'amazon' | 'wedding-creative'
  categoryName?: string;
  category:
    | "Websites"
    | "SEO"
    | "Social Media"
    | "Ads"
    | "E-commerce"
    | "Branding"
    | "Amazon"
    | "Wedding"
    | "Video"
    | "Reputation"
    | string;
  relatedServiceIds: string[];
  relatedServiceNames?: string[];
  servicesProvided?: string[];
  timeline?: string;
  websiteUrl?: string;
  displayUrl?: string;
  imageUrl: string;
  summary: string;
  challenge: string;
  strategy: string;
  deliverables: string[];
  techStack?: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  status: "active" | "hidden";
  displayOrder: number;
  featured?: boolean;
  videoUrl?: string;
}

export interface PortfolioCaseStudy {
  id: string;
  title: string;
  clientPlaceholder?: string;
  clientName?: string;
  industry: string;
  category:
    | "Websites"
    | "SEO"
    | "Social Media"
    | "Ads"
    | "E-commerce"
    | "Branding"
    | "Amazon"
    | "Wedding"
    | string;
  imageUrl: string;
  summary: string;
  servicesProvided?: string[];
  deliverables?: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  challenge: string;
  strategy: string;
  timeline?: string;
  relatedServiceIds?: string[];
  projectType?: PortfolioProjectType;
  status?: "active" | "hidden";
  displayOrder?: number;
}

export interface AnimationSettings {
  animationsEnabled: boolean;
  customCursorEnabled: boolean;
  reducedMotion: boolean;
  parallaxEnabled: boolean;
  hoverGlowEnabled: boolean;
}

export interface LiveClientWebsite {
  id: string;
  name: string;
  url: string;
  displayUrl: string;
  industry: string;
  tagline: string;
  summary: string;
  imageUrl: string;
  badge: string;
  techStack: string[];
  features: string[];
  metrics: {
    label: string;
    value: string;
    description?: string;
  }[];
  impact: string;
}

export interface SocialMediaPost {
  id: string;
  brandName: string;
  platform: "Instagram" | "LinkedIn" | "Facebook";
  format: "Carousel" | "Static Creative" | "Reel / Video Ad" | "Story Sequence";
  category: string;
  caption: string;
  hashtags: string[];
  imageUrl: string;
  aspectRatio?: "square" | "portrait";
  likesCount: string;
  commentsCount: string;
  sharesCount: string;
  reachCount: string;
  keyResult: string;
  creativeStrategy: string;
  clientWebsite?: string;
}

export interface WhyChooseUsItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
  tagline?: string;
  humanPerspective?: string;
  realWorldProblem?: string;
  ourHumanApproach?: string;
  dailyActions?: string[];
  clientTakeaway?: string;
  keyPillars?: {
    title: string;
    description: string;
  }[];
}

export interface ProcessStepAction {
  stepNumber: string;
  actionTitle: string;
  description: string;
  whyItMatters: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle?: string;
  duration?: string;
  summary: string;
  overview?: string;
  details: string[];
  actionBreakdown?: ProcessStepAction[];
  deliverable: string;
  keyOutputs?: string[];
  toolsUsed?: string[];
  expectedImpact?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "agency" | "training" | "general";
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  quote: string;
  metricHighlight: string;
  industry: string;
  rating: number;
}

export interface TrainingCourse {
  id: string;
  title: string;
  badge: string;
  duration: string;
  mode: string;
  level: string;
  shortDesc: string;
  curriculumHighlights: string[];
  toolsCovered: string[];
  certifications: string[];
  careerSupport: string[];
  suitableFor: string[];
  popular?: boolean;
  feeModel?: {
    tuition: string;
    toolsFeeNote: string;
  };
}

export interface LeadFormData {
  fullName: string;
  businessName: string;
  phoneNumber: string;
  email: string;
  websiteOrSocial: string;
  serviceCategory: string;
  budgetRange: string;
  message: string;
}
