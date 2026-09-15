import { CareerOpening } from "../types";
import { CAREER_OPENINGS } from "./companyData";

export const CAREERS_STORAGE_KEY = "digibasera_career_openings_v1";

export const DEFAULT_CAREER_OPENINGS: CareerOpening[] = CAREER_OPENINGS;

export const CAREER_DEPARTMENTS: CareerOpening["department"][] = [
  "Marketing",
  "Tech & Web",
  "Design & Creative",
  "Training & Operations",
];

export const CAREER_JOB_TYPES: CareerOpening["type"][] = [
  "Full-Time",
  "Part-Time",
  "Internship",
  "Hybrid / Remote",
];

export const loadStoredCareerOpenings = (): CareerOpening[] => {
  try {
    const data = localStorage.getItem(CAREERS_STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed as CareerOpening[];
      }
    }
  } catch (err) {
    console.error("Failed to load career openings from localStorage:", err);
  }
  return DEFAULT_CAREER_OPENINGS;
};

export const saveCareerOpenings = (items: CareerOpening[]): void => {
  try {
    localStorage.setItem(CAREERS_STORAGE_KEY, JSON.stringify(items));
  } catch (err) {
    console.error("Failed to save career openings to localStorage:", err);
  }
};

export const resetCareersToFactoryDefaults = (): CareerOpening[] => {
  try {
    localStorage.setItem(CAREERS_STORAGE_KEY, JSON.stringify(DEFAULT_CAREER_OPENINGS));
  } catch (err) {
    console.error("Failed to reset career openings in localStorage:", err);
  }
  return DEFAULT_CAREER_OPENINGS;
};

export const createEmptyCareerOpening = (): CareerOpening => ({
  id: `job-${Date.now()}`,
  title: "",
  department: "Marketing",
  location: "Ahmedabad / Hybrid Remote",
  type: "Full-Time",
  experience: "1 - 3 Years",
  openings: 1,
  salaryRange: "Competitive",
  summary: "",
  responsibilities: [],
  requirements: [],
  perks: [],
});
