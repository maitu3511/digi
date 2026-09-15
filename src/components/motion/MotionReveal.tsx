import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, Variant } from "motion/react";
import { useAnimation } from "../../context/AnimationContext";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 24,
  duration = 0.55,
  threshold = 0.15,
  once = true,
}) => {
  const { settings } = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  if (!settings.animationsEnabled || settings.reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitialOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getInitialOffset();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset, scale: 0.99 }}
      animate={
        isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, ...offset, scale: 0.99 }
      }
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Luxury cubic easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
  threshold?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.08,
  initialDelay = 0.05,
  threshold = 0.15,
}) => {
  const { settings } = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  if (!settings.animationsEnabled || settings.reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}> = ({ children, className = "", yOffset = 20 }) => {
  const { settings } = useAnimation();

  if (!settings.animationsEnabled || settings.reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const itemVariants: import("motion/react").Variants = {
    hidden: { opacity: 0, y: yOffset, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

interface ImageCurtainRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  priority?: boolean;
}

export const ImageCurtainReveal: React.FC<ImageCurtainRevealProps> = ({
  src,
  alt,
  className = "",
  aspectClassName = "aspect-video",
  priority = false,
}) => {
  const { settings } = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  if (!settings.animationsEnabled || settings.reducedMotion) {
    return (
      <div className={`relative overflow-hidden ${aspectClassName} ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading={priority ? "eager" : "lazy"}
        />
      </div>
    );
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${aspectClassName} ${className}`}>
      {/* Animated Image with Subtle Scale Down upon reveal */}
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        referrerPolicy="no-referrer"
        initial={{ scale: 1.12, filter: "blur(4px)" }}
        animate={
          isInView ? { scale: 1, filter: "blur(0px)" } : { scale: 1.12, filter: "blur(4px)" }
        }
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full object-cover"
      />

      {/* Luxury Gold/Warm Curtain Wipe */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        style={{ originX: 1 }}
        className="absolute inset-0 bg-[#FAF9F5] z-10 pointer-events-none"
      />
    </div>
  );
};

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1800,
  className = "",
}) => {
  const { settings } = useAnimation();
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView || !settings.animationsEnabled || settings.reducedMotion) {
      setDisplayValue(value);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out expo for fast launch and gentle landing
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeOut * value;
      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration, settings.animationsEnabled, settings.reducedMotion]);

  const formatted =
    decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toLocaleString();

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export const PageTopProgressBar: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 450);
      return () => clearTimeout(timer);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 overflow-hidden pointer-events-none">
      <div className="h-full w-full bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#F3E5AB] animate-top-progress shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
    </div>
  );
};
