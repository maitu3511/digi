import React, { createContext, useContext, useState, useEffect } from "react";
import { AnimationSettings } from "../types";

const ANIMATION_STORAGE_KEY = "digibasera_animation_settings_v1";

const DEFAULT_SETTINGS: AnimationSettings = {
  animationsEnabled: true,
  customCursorEnabled: true,
  reducedMotion: false,
  parallaxEnabled: true,
  hoverGlowEnabled: true,
};

interface AnimationContextType {
  settings: AnimationSettings;
  updateSettings: (newSettings: Partial<AnimationSettings>) => void;
  resetAnimationSettings: () => void;
  toggleAnimations: () => void;
  toggleCustomCursor: () => void;
}

const AnimationContext = createContext<AnimationContextType>({
  settings: DEFAULT_SETTINGS,
  updateSettings: () => {},
  resetAnimationSettings: () => {},
  toggleAnimations: () => {},
  toggleCustomCursor: () => {},
});

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AnimationSettings>(() => {
    try {
      const stored = localStorage.getItem(ANIMATION_STORAGE_KEY);
      if (stored) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
      }
    } catch {
      // fallback
    }
    return DEFAULT_SETTINGS;
  });

  // Respect user preference; by default ensure silky animations are active
  useEffect(() => {
    try {
      const stored = localStorage.getItem(ANIMATION_STORAGE_KEY);
      if (!stored) {
        // Default to active luxury animations for best visual experience
        setSettings((prev) => ({ ...prev, animationsEnabled: true, reducedMotion: false }));
      }
    } catch {
      // fallback
    }
  }, []);

  const updateSettings = (newSettings: Partial<AnimationSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      try {
        localStorage.setItem(ANIMATION_STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const resetAnimationSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    try {
      localStorage.setItem(ANIMATION_STORAGE_KEY, JSON.stringify(DEFAULT_SETTINGS));
    } catch {
      // ignore
    }
  };

  const toggleAnimations = () => {
    updateSettings({ animationsEnabled: !settings.animationsEnabled });
  };

  const toggleCustomCursor = () => {
    updateSettings({ customCursorEnabled: !settings.customCursorEnabled });
  };

  return (
    <AnimationContext.Provider
      value={{
        settings,
        updateSettings,
        resetAnimationSettings,
        toggleAnimations,
        toggleCustomCursor,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);

// Reusable Framer Motion animation variants respecting animationsEnabled & reducedMotion
export const getAnimationVariants = (enabled: boolean) => {
  if (!enabled) {
    return {
      fadeInUp: {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      },
      fadeIn: {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      },
      staggerContainer: {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      },
      scaleUp: {
        hidden: { opacity: 1, scale: 1 },
        visible: { opacity: 1, scale: 1 },
      },
    };
  }

  return {
    fadeInUp: {
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" },
      },
    },
    staggerContainer: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.1,
        },
      },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      },
    },
  };
};
