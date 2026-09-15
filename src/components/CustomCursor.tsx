import React, { useEffect, useState, useRef } from "react";
import { useAnimation } from "../context/AnimationContext";

export const CustomCursor: React.FC = () => {
  const { settings } = useAnimation();
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Dot position (instant)
  const dotPos = useRef({ x: -100, y: -100 });
  // Ring position (lagged with smooth lerp)
  const ringPos = useRef({ x: -100, y: -100 });

  const isVisibleRef = useRef(false);
  const isPointerRef = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Detect touch device
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window)
    ) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      dotPos.current.x = e.clientX;
      dotPos.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.closest("select") ||
          target.closest("textarea") ||
          target.closest('[role="button"]') ||
          target.closest(".cursor-pointer")
        );
        if (isPointerRef.current !== isClickable) {
          isPointerRef.current = isClickable;
          setIsPointer(isClickable);
        }
      }
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter, { passive: true });

    // RAF loop for smooth buttery lagging ring
    const animate = () => {
      ringPos.current.x += (dotPos.current.x - ringPos.current.x) * 0.22;
      ringPos.current.y += (dotPos.current.y - ringPos.current.y) * 0.22;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%) scale(${isPointerRef.current ? 1.4 : 1})`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (!settings.customCursorEnabled || settings.reducedMotion || isTouch || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Central Gold Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#D4AF37] will-change-transform shadow-[0_0_8px_rgba(212,175,55,0.85)] transition-transform duration-100 ease-out"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      {/* Outer Subtle Luxury Gold Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border will-change-transform transition-[width,height,background-color,border-color] duration-300 ease-out ${
          isPointer
            ? "w-11 h-11 bg-[#D4AF37]/10 border-[#D4AF37]"
            : "w-7 h-7 bg-transparent border-[#D4AF37]/45"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </div>
  );
};
