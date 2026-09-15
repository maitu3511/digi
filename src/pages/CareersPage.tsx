import careersHeroBg from "../assets/heroes/careers-hero.jpg";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Heart,
  Zap,
  Users,
  Award,
  GraduationCap,
  Send,
} from "lucide-react";
import { loadStoredCareerOpenings } from "../data/careersData";
import { AGENCY_CONFIG } from "../data/agencyData";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { getWhatsAppUrl } from "../utils/whatsapp";
import { PageType, CareerOpening } from "../types";

interface CareersPageProps {
  onNavigate: (page: PageType) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [careerOpenings, setCareerOpenings] = useState<CareerOpening[]>([]);

  useEffect(() => {
    setCareerOpenings(loadStoredCareerOpenings());
  }, []);
  const [activeJob, setActiveJob] = useState<CareerOpening | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPortfolio, setApplicantPortfolio] = useState("");
  const [applicantNote, setApplicantNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const departments = [
    "All",
    "Marketing",
    "Tech & Web",
    "Design & Creative",
    "Training & Operations",
  ];

  const filteredJobs =
    selectedDepartment === "All"
      ? careerOpenings
      : careerOpenings.filter((j) => j.department === selectedDepartment);

  const handleApplyClick = (job: CareerOpening) => {
    setActiveJob(job);
    setIsApplyModalOpen(true);
    setSubmitted(false);
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Redirect or open WhatsApp with prefilled application summary
      const msg = `Hi Digibasera HR Team, I am applying for the role of *${activeJob?.title}*.\n\n*Name:* ${applicantName}\n*Phone:* ${applicantPhone}\n*Email:* ${applicantEmail}\n*Portfolio / Resume Link:* ${applicantPortfolio}\n*Message:* ${applicantNote}`;
      window.open(getWhatsAppUrl(msg), "_blank");
      setIsApplyModalOpen(false);
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAF9F5] min-h-screen text-[#111111]" id="careers-page">
      {/* Hero Header with Zoom Background */}
      <section className="relative py-16 sm:py-20 text-center border-b border-[#E8E1D0] bg-white overflow-hidden mb-12">
        {/* Background Image with Ken Burns / Zoom Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <img
            decoding="async"
            fetchPriority="high"
            src={careersHeroBg}
            alt="Careers at Digibasera Digital Agency"
            className="w-full h-full object-cover object-center animate-hero-zoom opacity-20 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-[#FAF9F5]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-85" />
        </div>

        {/* Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E8E1D0] shadow-sm text-xs font-semibold backdrop-blur-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[#9A7B16] font-bold uppercase tracking-wider text-[11px]">
              Join Our High-Performance Squad
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-heading leading-tight text-[#111111]"
          >
            Build the Future of Digital Growth.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#B89018] italic font-serif">
              Accelerate Your Career.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#555555] max-w-3xl mx-auto font-normal leading-relaxed"
          >
            We combine cutting-edge technology, creative storytelling, and data-backed media buying.
            Join a culture built on autonomy, continuous learning, and measurable commercial impact.
          </motion.p>
        </div>
      </section>

      {/* Perks & Culture Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            whileHover={{ y: -4 }}
            className="p-6 rounded-xl bg-white border border-[#E8E1D0] space-y-3 shadow-sm hover:border-[#D4AF37]/60 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#9A7B16]">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#111111] font-heading">
              High-Impact Projects
            </h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Work on live enterprise brands, fast-scaling D2C stores, and large paid advertising
              budgets across Google and Meta.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="p-6 rounded-xl bg-white border border-[#E8E1D0] space-y-3 shadow-sm hover:border-[#D4AF37]/60 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#9A7B16]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#111111] font-heading">
              Zinmatt Learning Hub
            </h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Unlimited access to advanced training workshops, AI marketing masterclasses, and
              certified growth frameworks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="p-6 rounded-xl bg-white border border-[#E8E1D0] space-y-3 shadow-sm hover:border-[#D4AF37]/60 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#9A7B16]">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#111111] font-heading">
              ROAS & Metric Bonuses
            </h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Direct quarterly bonus pools tied to client campaign wins, organic search
              breakthroughs, and client retention.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="p-6 rounded-xl bg-white border border-[#E8E1D0] space-y-3 shadow-sm hover:border-[#D4AF37]/60 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#9A7B16]">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#111111] font-heading">
              Hybrid & Flexible Work
            </h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Modern collaborative agency spaces in Ahmedabad & Delhi with flexible hybrid options,
              coffee bars, and wellness support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16] block mb-1">
              Current Openings ({careerOpenings.length})
            </span>
            <h2 className="text-3xl font-bold text-[#111111] font-heading">
              Explore Available Positions
            </h2>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  selectedDepartment === dept
                    ? "bg-[#111111] text-[#D4AF37] border border-[#D4AF37] shadow-xs"
                    : "bg-white text-[#555555] border border-[#E8E1D0] hover:border-[#D4AF37]"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job, jobIdx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: jobIdx * 0.06 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E1D0] hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E8E1D0]">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#FAF9F5] border border-[#E8E1D0] text-[#9A7B16] font-bold uppercase tracking-wider text-[10px]">
                      {job.department}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#111111] text-white font-medium text-[10px]">
                      {job.type}
                    </span>
                    <span className="text-[#666666] flex items-center gap-1 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      {job.experience}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] font-heading">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-[#666666]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span className="text-[#9A7B16] font-semibold">{job.salaryRange}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="px-6 py-3 rounded-md bg-[#111111] hover:bg-[#222222] text-white border border-[#D4AF37] font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-2 transition-colors"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>

                  <a
                    href={getWhatsAppUrl(
                      `Hi HR Team, I am interested in applying for the position of "${job.title}". Please let me know the application process.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-md bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] transition-colors"
                    title="Quick Apply on WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  </a>
                </div>
              </div>

              <div className="pt-6 space-y-4 text-xs">
                <p className="text-[#555555] leading-relaxed text-sm">{job.summary}</p>

                <div className="grid sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2">
                    <span className="font-bold text-[#111111] uppercase tracking-wider text-[11px] block">
                      Core Responsibilities:
                    </span>
                    <ul className="space-y-1.5 text-[#555555]">
                      {job.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#9A7B16] font-bold">•</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <span className="font-bold text-[#111111] uppercase tracking-wider text-[11px] block">
                      Requirements & Qualifications:
                    </span>
                    <ul className="space-y-1.5 text-[#555555]">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#9A7B16] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Direct Resume Drop Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="p-8 rounded-2xl bg-[#111111] text-white border border-[#D4AF37]/40 shadow-xl text-center space-y-4">
          <h3 className="text-2xl font-bold font-heading">Don't see your specific role listed?</h3>
          <p className="text-xs sm:text-sm text-[#E8E1D0]/80 max-w-xl mx-auto leading-relaxed">
            We are always scouting for extraordinary talent in Performance Ads, AI Prompting, Video
            Editing, and Full-Stack Engineering. Drop your resume directly to our leadership desk.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${AGENCY_CONFIG.email}?subject=General Application / Portfolio Submission`}
              className="px-6 py-3 rounded-md bg-white hover:bg-[#F8F8F6] text-[#111111] font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Email Resume ({AGENCY_CONFIG.email})
            </a>
            <a
              href={getWhatsAppUrl(
                "Hi Digibasera HR, I want to submit my resume for future opportunities.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-white fill-white" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isApplyModalOpen && activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-xl bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#D4AF37]/50 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E1D0]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16]">
                  Job Application
                </span>
                <h3 className="text-xl font-bold text-[#111111] font-heading">{activeJob.title}</h3>
              </div>
              <button
                onClick={() => setIsApplyModalOpen(false)}
                className="p-1.5 rounded-md hover:bg-[#FAF9F5] text-[#888888] hover:text-[#111111]"
              >
                ✕
              </button>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center text-[#25D366] mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#111111]">
                  Connecting with HR on WhatsApp...
                </h4>
                <p className="text-xs text-[#666666]">
                  Your application summary is prepared. Opening WhatsApp to submit directly to our
                  talent team.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplicationSubmit} className="space-y-4 pt-4 text-xs">
                <div>
                  <label className="block font-bold text-[#111111] uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full p-3 rounded-md bg-[#FAF9F5] border border-[#E8E1D0] text-[#111111] focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#111111] uppercase tracking-wider mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="+91 98987 00000"
                      className="w-full p-3 rounded-md bg-[#FAF9F5] border border-[#E8E1D0] text-[#111111] focus:border-[#D4AF37] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#111111] uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="rahul@example.com"
                      className="w-full p-3 rounded-md bg-[#FAF9F5] border border-[#E8E1D0] text-[#111111] focus:border-[#D4AF37] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#111111] uppercase tracking-wider mb-1">
                    Portfolio / LinkedIn / Resume Link *
                  </label>
                  <input
                    type="url"
                    required
                    value={applicantPortfolio}
                    onChange={(e) => setApplicantPortfolio(e.target.value)}
                    placeholder="https://linkedin.com/in/username or Google Drive link"
                    className="w-full p-3 rounded-md bg-[#FAF9F5] border border-[#E8E1D0] text-[#111111] focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#111111] uppercase tracking-wider mb-1">
                    Brief Introduction / Past Experience
                  </label>
                  <textarea
                    rows={3}
                    value={applicantNote}
                    onChange={(e) => setApplicantNote(e.target.value)}
                    placeholder="Tell us about your key skills and why you want to join Digibasera..."
                    className="w-full p-3 rounded-md bg-[#FAF9F5] border border-[#E8E1D0] text-[#111111] focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-md bg-[#111111] hover:bg-[#222222] text-white border border-[#D4AF37] font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4 text-[#D4AF37]" />
                    <span>Submit Application via WhatsApp Desk</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
