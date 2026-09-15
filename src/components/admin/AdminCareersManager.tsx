import React, { useEffect, useState } from "react";
import { Plus, Edit2, Trash2, Save, RotateCcw, X, Briefcase } from "lucide-react";
import { CareerOpening } from "../../types";
import {
  CAREER_DEPARTMENTS,
  CAREER_JOB_TYPES,
  createEmptyCareerOpening,
  loadStoredCareerOpenings,
  resetCareersToFactoryDefaults,
  saveCareerOpenings,
} from "../../data/careersData";

interface AdminCareersManagerProps {
  showToast: (msg: string) => void;
}

const inputClass =
  "w-full px-3 py-2 rounded-lg border border-[#E8E1D0] bg-white text-sm text-[#111111] focus:outline-hidden focus:border-[#D4AF37]";
const labelClass = "block text-[10px] font-bold uppercase tracking-widest text-[#555555] mb-1.5";

const toLines = (arr: string[]) => arr.join("\n");
const fromLines = (val: string) =>
  val
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

export const AdminCareersManager: React.FC<AdminCareersManagerProps> = ({ showToast }) => {
  const [jobs, setJobs] = useState<CareerOpening[]>([]);
  const [draft, setDraft] = useState<CareerOpening | null>(null);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    setJobs(loadStoredCareerOpenings());
  }, []);

  const persist = (next: CareerOpening[]) => {
    setJobs(next);
    saveCareerOpenings(next);
  };

  const handleAddNew = () => {
    setDraft(createEmptyCareerOpening());
    setIsNew(true);
  };

  const handleEdit = (job: CareerOpening) => {
    setDraft({ ...job });
    setIsNew(false);
  };

  const handleDelete = (job: CareerOpening) => {
    if (window.confirm(`Delete job opening "${job.title}"?`)) {
      persist(jobs.filter((j) => j.id !== job.id));
      showToast(`Deleted job "${job.title}"`);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft) return;
    if (!draft.title.trim()) {
      showToast("Job title is required");
      return;
    }
    if (isNew) {
      persist([draft, ...jobs]);
      showToast(`Added job opening "${draft.title}"`);
    } else {
      persist(jobs.map((j) => (j.id === draft.id ? draft : j)));
      showToast(`Updated job opening "${draft.title}"`);
    }
    setDraft(null);
    setIsNew(false);
  };

  const handleReset = () => {
    if (window.confirm("Reset all career openings back to the original defaults?")) {
      setJobs(resetCareersToFactoryDefaults());
      setDraft(null);
      showToast("Career openings reset to defaults");
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-[#E8E1D0] rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-[#D4AF37]" />
          <div>
            <h3 className="text-sm font-bold text-[#111111]">Careers Page Openings</h3>
            <p className="text-xs text-[#555555]">
              {jobs.length} job opening{jobs.length === 1 ? "" : "s"} live on the Careers page
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 bg-white text-[#555555] border border-[#E8E1D0] hover:bg-[#FAF9F5]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
          <button
            onClick={handleAddNew}
            className="px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 bg-[#111111] text-white border border-[#D4AF37]"
          >
            <Plus className="w-3.5 h-3.5 text-[#D4AF37]" />
            Add Job Opening
          </button>
        </div>
      </div>

      {draft && (
        <form
          onSubmit={handleSave}
          className="bg-white border border-[#D4AF37] rounded-xl p-5 space-y-4 shadow-2xs"
        >
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-[#111111]">
              {isNew ? "New Job Opening" : `Edit: ${draft.title || "Untitled"}`}
            </h4>
            <button
              type="button"
              onClick={() => setDraft(null)}
              className="p-1.5 rounded-lg border border-[#E8E1D0] text-[#555555] hover:bg-[#FAF9F5]"
              aria-label="Close editor"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className={labelClass}>Job Title</label>
              <input
                className={inputClass}
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                placeholder="e.g. Performance Media Buyer"
              />
            </div>
            <div>
              <label className={labelClass}>Department</label>
              <select
                className={inputClass}
                value={draft.department}
                onChange={(e) =>
                  setDraft({ ...draft, department: e.target.value as CareerOpening["department"] })
                }
              >
                {CAREER_DEPARTMENTS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Job Type</label>
              <select
                className={inputClass}
                value={draft.type}
                onChange={(e) =>
                  setDraft({ ...draft, type: e.target.value as CareerOpening["type"] })
                }
              >
                {CAREER_JOB_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Location</label>
              <input
                className={inputClass}
                value={draft.location}
                onChange={(e) => setDraft({ ...draft, location: e.target.value })}
              />
            </div>
            <div>
              <label className={labelClass}>Experience</label>
              <input
                className={inputClass}
                value={draft.experience}
                onChange={(e) => setDraft({ ...draft, experience: e.target.value })}
              />
            </div>
            <div>
              <label className={labelClass}>No. of Openings</label>
              <input
                type="number"
                min={1}
                className={inputClass}
                value={draft.openings}
                onChange={(e) => setDraft({ ...draft, openings: Number(e.target.value) || 1 })}
              />
            </div>
            <div>
              <label className={labelClass}>Salary Range</label>
              <input
                className={inputClass}
                value={draft.salaryRange}
                onChange={(e) => setDraft({ ...draft, salaryRange: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Summary</label>
              <textarea
                rows={3}
                className={inputClass}
                value={draft.summary}
                onChange={(e) => setDraft({ ...draft, summary: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Responsibilities (one per line)</label>
              <textarea
                rows={4}
                className={inputClass}
                value={toLines(draft.responsibilities)}
                onChange={(e) =>
                  setDraft({ ...draft, responsibilities: fromLines(e.target.value) })
                }
              />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Requirements (one per line)</label>
              <textarea
                rows={4}
                className={inputClass}
                value={toLines(draft.requirements)}
                onChange={(e) => setDraft({ ...draft, requirements: fromLines(e.target.value) })}
              />
            </div>
            <div className="md:col-span-2">
              <label className={labelClass}>Perks (one per line)</label>
              <textarea
                rows={3}
                className={inputClass}
                value={toLines(draft.perks)}
                onChange={(e) => setDraft({ ...draft, perks: fromLines(e.target.value) })}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 bg-[#111111] text-white border border-[#D4AF37]"
            >
              <Save className="w-3.5 h-3.5 text-[#D4AF37]" />
              {isNew ? "Add Opening" : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={() => setDraft(null)}
              className="px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-white text-[#555555] border border-[#E8E1D0] hover:bg-[#FAF9F5]"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="space-y-3">
        {jobs.length === 0 && (
          <div className="bg-white border border-[#E8E1D0] rounded-xl p-8 text-center text-sm text-[#555555]">
            No job openings yet. Click "Add Job Opening" to publish one.
          </div>
        )}
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-[#E8E1D0] rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-2xs"
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A7B16]">
                  {job.department}
                </span>
                <span className="text-[10px] text-[#555555]">• {job.type}</span>
                <span className="text-[10px] text-[#555555]">• {job.experience}</span>
                <span className="text-[10px] text-[#555555]">• {job.openings} opening(s)</span>
              </div>
              <h4 className="text-sm font-bold text-[#111111] truncate">{job.title}</h4>
              <p className="text-xs text-[#555555] truncate">{job.location}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleEdit(job)}
                className="p-2 rounded-lg border border-[#E8E1D0] text-[#555555] hover:bg-[#FAF9F5]"
                aria-label={`Edit ${job.title}`}
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(job)}
                className="p-2 rounded-lg border border-[#E8E1D0] text-[#B4231F] hover:bg-[#FAF9F5]"
                aria-label={`Delete ${job.title}`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
