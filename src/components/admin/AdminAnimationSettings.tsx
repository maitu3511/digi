import React from "react";
import {
  Sparkles,
  Sliders,
  RotateCcw,
  MousePointer,
  Zap,
  Shield,
  Eye,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useAnimation } from "../../context/AnimationContext";

interface AdminAnimationSettingsProps {
  showToast: (msg: string) => void;
}

export const AdminAnimationSettings: React.FC<AdminAnimationSettingsProps> = ({ showToast }) => {
  const { settings, updateSettings, resetAnimationSettings } = useAnimation();

  const handleToggle = (key: keyof typeof settings, label: string) => {
    const nextVal = !settings[key];
    updateSettings({ [key]: nextVal });
    showToast(`${label} ${nextVal ? "enabled" : "disabled"}`);
  };

  const handleReset = () => {
    if (window.confirm("Reset all animation and UI effect settings to luxury defaults?")) {
      resetAnimationSettings();
      showToast("Animation settings restored to defaults");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white border border-[#E8E1D0] rounded-xl p-6 shadow-2xs space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#FAF9F5] border border-[#E8E1D0] text-[#D4AF37]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-heading text-[#111111]">
                Website Animation & Interactive Experience Controls
              </h2>
              <p className="text-xs text-[#666666]">
                Configure smooth scroll reveals, custom gold cursor, GPU transforms, and
                reduced-motion accessibility.
              </p>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="px-3.5 py-2 rounded-lg bg-[#FAF9F5] hover:bg-[#F0EEE6] text-[#555555] border border-[#E8E1D0] text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Toggle 1: Global Animation Engine */}
        <div className="bg-white border border-[#E8E1D0] rounded-xl p-5 space-y-4 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="text-sm font-bold font-heading text-[#111111]">
                  Global Motion & Scroll Reveal
                </h3>
              </div>
              <p className="text-xs text-[#666666] leading-relaxed">
                Controls fade-in-up animations, staggered grid rendering, and entrance transitions
                across all public pages.
              </p>
            </div>

            <button
              onClick={() => handleToggle("animationsEnabled", "Global Animations")}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                settings.animationsEnabled ? "bg-[#111111]" : "bg-gray-200"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[#D4AF37] shadow-lg ring-0 transition duration-200 ease-in-out ${
                  settings.animationsEnabled ? "translate-x-5" : "translate-x-0 bg-white"
                }`}
              />
            </button>
          </div>

          <div className="pt-2 border-t border-[#E8E1D0] flex items-center justify-between text-[11px] text-[#777777]">
            <span>Status:</span>
            <strong
              className={
                settings.animationsEnabled ? "text-emerald-700 font-bold" : "text-gray-500"
              }
            >
              {settings.animationsEnabled
                ? "ACTIVE (Hardware Accelerated)"
                : "DISABLED (Static Rendering)"}
            </strong>
          </div>
        </div>

        {/* Toggle 2: Custom Gold Luxury Cursor */}
        <div className="bg-white border border-[#E8E1D0] rounded-xl p-5 space-y-4 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <MousePointer className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="text-sm font-bold font-heading text-[#111111]">
                  Custom Gold Magnetic Cursor
                </h3>
              </div>
              <p className="text-xs text-[#666666] leading-relaxed">
                Renders a dual-layer gold precision cursor with magnetic scaling on buttons, links,
                and cards (desktop only).
              </p>
            </div>

            <button
              onClick={() => handleToggle("customCursorEnabled", "Custom Cursor")}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                settings.customCursorEnabled ? "bg-[#111111]" : "bg-gray-200"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[#D4AF37] shadow-lg ring-0 transition duration-200 ease-in-out ${
                  settings.customCursorEnabled ? "translate-x-5" : "translate-x-0 bg-white"
                }`}
              />
            </button>
          </div>

          <div className="pt-2 border-t border-[#E8E1D0] flex items-center justify-between text-[11px] text-[#777777]">
            <span>Status:</span>
            <strong
              className={
                settings.customCursorEnabled ? "text-emerald-700 font-bold" : "text-gray-500"
              }
            >
              {settings.customCursorEnabled ? "ENABLED" : "DISABLED (Default OS Cursor)"}
            </strong>
          </div>
        </div>

        {/* Toggle 3: Parallax & Hover Glow */}
        <div className="bg-white border border-[#E8E1D0] rounded-xl p-5 space-y-4 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="text-sm font-bold font-heading text-[#111111]">
                  Hover Glow & Elevation Dynamics
                </h3>
              </div>
              <p className="text-xs text-[#666666] leading-relaxed">
                Subtle golden border illumination and vertical card lift on pointer hover across
                cards and packages.
              </p>
            </div>

            <button
              onClick={() => handleToggle("hoverGlowEnabled", "Hover Glow")}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                settings.hoverGlowEnabled ? "bg-[#111111]" : "bg-gray-200"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[#D4AF37] shadow-lg ring-0 transition duration-200 ease-in-out ${
                  settings.hoverGlowEnabled ? "translate-x-5" : "translate-x-0 bg-white"
                }`}
              />
            </button>
          </div>

          <div className="pt-2 border-t border-[#E8E1D0] flex items-center justify-between text-[11px] text-[#777777]">
            <span>Status:</span>
            <strong
              className={settings.hoverGlowEnabled ? "text-emerald-700 font-bold" : "text-gray-500"}
            >
              {settings.hoverGlowEnabled ? "ACTIVE" : "DISABLED"}
            </strong>
          </div>
        </div>

        {/* Toggle 4: Reduced Motion Mode */}
        <div className="bg-white border border-[#E8E1D0] rounded-xl p-5 space-y-4 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="text-sm font-bold font-heading text-[#111111]">
                  Prefers-Reduced-Motion Force Override
                </h3>
              </div>
              <p className="text-xs text-[#666666] leading-relaxed">
                Forces instant transitions and suppresses all motion effects for users with
                vestibular sensitivity.
              </p>
            </div>

            <button
              onClick={() => handleToggle("reducedMotion", "Reduced Motion Mode")}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                settings.reducedMotion ? "bg-[#111111]" : "bg-gray-200"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[#D4AF37] shadow-lg ring-0 transition duration-200 ease-in-out ${
                  settings.reducedMotion ? "translate-x-5" : "translate-x-0 bg-white"
                }`}
              />
            </button>
          </div>

          <div className="pt-2 border-t border-[#E8E1D0] flex items-center justify-between text-[11px] text-[#777777]">
            <span>Status:</span>
            <strong
              className={settings.reducedMotion ? "text-amber-700 font-bold" : "text-gray-500"}
            >
              {settings.reducedMotion ? "FORCED REDUCED MOTION" : "STANDARD MOTION"}
            </strong>
          </div>
        </div>
      </div>

      {/* Interactive Animation Playground Card */}
      <div className="bg-white border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <h3 className="text-base font-bold font-heading text-[#111111]">
            Interactive Animation Preview
          </h3>
        </div>
        <p className="text-xs text-[#666666]">
          Hover over the test elements below to observe your active animation and styling settings
          in real time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {/* Card 1 */}
          <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0] hover:border-[#D4AF37] hover:-translate-y-1.5 transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer group">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16]">
              Hover Card
            </span>
            <h4 className="text-sm font-bold font-heading text-[#111111] mt-1 group-hover:text-[#D4AF37] transition-colors">
              Elevation & Glow Effect
            </h4>
            <p className="text-xs text-[#666666] mt-1">
              Smooth transform translateY(-6px) with golden drop shadow.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E1D0] hover:border-[#D4AF37] hover:-translate-y-1.5 transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer group">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B16]">
              Button State
            </span>
            <h4 className="text-sm font-bold font-heading text-[#111111] mt-1">
              Micro-Interactions
            </h4>
            <button className="mt-2 w-full py-2 bg-[#111111] hover:bg-[#222222] text-white text-xs font-bold uppercase tracking-wider rounded-lg border border-[#D4AF37] transition-transform active:scale-95">
              Click & Hover Test
            </button>
          </div>

          {/* Card 3 */}
          <div className="p-4 rounded-xl bg-[#111111] text-white border border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all duration-300 cursor-pointer">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
              Luxury Preset
            </span>
            <h4 className="text-sm font-bold font-heading text-white mt-1">Gold Accent Aura</h4>
            <p className="text-xs text-[#CCCCCC] mt-1">
              Ultra-refined white + gold + black contrast hierarchy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
