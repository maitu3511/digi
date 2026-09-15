import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { ServiceRouteDef } from "../data/serviceRoutes";

interface ServiceLandingPageProps {
  service: ServiceRouteDef;
  onOpenConsultation: (serviceName?: string) => void;
}

export const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({
  service,
  onOpenConsultation,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F5] py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.14),transparent_32%),radial-gradient(circle_at_85%_30%,rgba(212,175,55,0.10),transparent_30%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_1px_1px,rgba(17,17,17,0.08)_1px,transparent_0)] [background-size:32px_32px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E1D0] bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#9A7B16] shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            DigiBasera · {service.label}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#777]">
            <a href="/" className="hover:text-[#9A7B16] transition-colors">
              Home
            </a>
            <ChevronRight className="h-3.5 w-3.5" />
            <a href="/services" className="hover:text-[#9A7B16] transition-colors">
              Services
            </a>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-[#111]">{service.label}</span>
          </div>

          <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-[#111] sm:text-5xl lg:text-6xl font-heading">
            {service.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#555] sm:text-lg">
            {service.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => onOpenConsultation(service.label)}
              className="inline-flex items-center gap-2 rounded-md border border-[#D4AF37] bg-[#111] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_8px_30px_rgba(212,175,55,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#222]"
            >
              Get a Free Strategy Call
              <ArrowRight className="h-4 w-4 text-[#D4AF37]" />
            </button>
            <a
              href="/services"
              className="inline-flex items-center gap-2 rounded-md border border-[#E8E1D0] bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#111] transition-all hover:-translate-y-0.5 hover:border-[#D4AF37]"
            >
              View All Services
            </a>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {service.sections.map((section, index) => (
            <motion.article
              key={section.heading}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-[#E8E1D0] bg-white p-6 shadow-[0_8px_30px_-18px_rgba(17,17,17,0.25)] transition-shadow hover:shadow-[0_18px_40px_-18px_rgba(212,175,55,0.28)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#FAF8F2]">
                <CheckCircle2 className="h-5 w-5 text-[#9A7B16]" />
              </div>
              <h2 className="mt-5 text-xl font-bold tracking-tight text-[#111] font-heading">
                {section.heading}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#666]">{section.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8 rounded-2xl border border-[#D4AF37]/35 bg-[#111] p-6 text-white sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#D4AF37]">
                Rajkot · Gujarat · Pan-India
              </p>
              <h2 className="mt-2 text-2xl font-bold font-heading sm:text-3xl">
                Ready to grow with {service.label}?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#D8D8D8]">
                Get a practical growth plan built around your goals, audience, budget and conversion
                journey.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation(service.label)}
              className="shrink-0 rounded-md bg-[#D4AF37] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-[#111] transition-all hover:-translate-y-0.5 hover:bg-[#E3C35B]"
            >
              Request Proposal
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
