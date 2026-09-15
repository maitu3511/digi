import React from "react";
import monogramWebp from "../assets/digibasera-monogram-clean.webp";
import monogramPng from "../assets/digibasera-monogram-clean.png";
import wordmarkWebp from "../assets/digibasera-wordmark.webp";
import wordmarkPng from "../assets/digibasera-wordmark.png";
import wordmarkTitleWebp from "../assets/digibasera-wordmark-title.webp";
import wordmarkTitlePng from "../assets/digibasera-wordmark-title.png";

interface DigiBaseraLogoProps {
  variant?: "light" | "dark" | "full-gold";
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  className?: string;
  layout?: "horizontal" | "vertical" | "mark-only";
}

export const DigiBaseraLogo: React.FC<DigiBaseraLogoProps> = ({
  variant = "light",
  size = "md",
  showTagline = true,
  className = "",
  layout = "horizontal",
}) => {
  // Dimension and scale profiles
  const sizeMap = {
    sm: {
      markH: 34,
      markW: 29,
      wmH: showTagline ? 28 : 22,
      wmW: showTagline ? 82 : 92,
      gap: "gap-2.5",
    },
    md: {
      markH: 44,
      markW: 38,
      wmH: showTagline ? 36 : 28,
      wmW: showTagline ? 105 : 117,
      gap: "gap-3",
    },
    lg: {
      markH: 56,
      markW: 48,
      wmH: showTagline ? 46 : 36,
      wmW: showTagline ? 134 : 150,
      gap: "gap-3.5",
    },
    xl: {
      markH: 72,
      markW: 62,
      wmH: showTagline ? 58 : 46,
      wmW: showTagline ? 169 : 192,
      gap: "gap-4",
    },
  };

  const currentSize = sizeMap[size];
  const isDark = variant === "dark";

  return (
    <div
      className={`inline-flex ${
        layout === "vertical" ? "flex-col items-center text-center" : "items-center"
      } ${currentSize.gap} select-none ${className}`}
      id="digibasera-official-logo"
    >
      {/* Official DigiBasera Monogram (DB Mark) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <picture>
          <source type="image/webp" srcSet={monogramWebp} />
          <img
            src={monogramPng}
            alt="DigiBasera Emblem"
            width={currentSize.markW}
            height={currentSize.markH}
            loading="eager"
            decoding="async"
            style={{ width: `${currentSize.markW}px`, height: `${currentSize.markH}px` }}
            className={`object-contain max-w-full drop-shadow-xs transition-transform duration-300 group-hover:scale-105 ${
              isDark ? "filter drop-shadow-[0_2px_6px_rgba(212,175,55,0.35)]" : ""
            }`}
          />
        </picture>
      </div>

      {/* Official DigiBasera Wordmark in signature brand font */}
      {layout !== "mark-only" && (
        <div
          className={`flex flex-col justify-center ${
            layout === "vertical" ? "items-center" : "items-start"
          }`}
        >
          <picture>
            <source type="image/webp" srcSet={showTagline ? wordmarkWebp : wordmarkTitleWebp} />
            <img
              src={showTagline ? wordmarkPng : wordmarkTitlePng}
              alt="DigiBasera - Marketing Agency"
              width={currentSize.wmW}
              height={currentSize.wmH}
              loading="eager"
              decoding="async"
              style={{
                width: `${currentSize.wmW}px`,
                height: `${currentSize.wmH}px`,
              }}
              className={`object-contain max-w-full transition-opacity duration-200 group-hover:opacity-95 ${
                isDark
                  ? "filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)] brightness-105"
                  : "filter drop-shadow-xs"
              }`}
            />
          </picture>
        </div>
      )}
    </div>
  );
};
