import React, { useState } from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  objectPosition?: string;
  priority?: boolean;
  fallbackSrc?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  objectPosition,
  priority = false,
  fallbackSrc = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  style,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const imgSrc = hasError && fallbackSrc ? fallbackSrc : src;

  return (
    <div
      className={`relative overflow-hidden bg-[#F4F1EA] ${containerClassName}`}
    >
      {/* Warm placeholder shimmer while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F1EA] via-[#EAE5D9] to-[#F4F1EA] animate-pulse pointer-events-none" />
      )}

      <img
        src={imgSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (!hasError) setHasError(true);
        }}
        style={{
          objectPosition: objectPosition || style?.objectPosition,
          ...style,
        }}
        className={`w-full h-full object-cover transition-all duration-500 ease-out ${
          isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[1.02] blur-[2px]"
        } ${className}`}
        {...props}
      />
    </div>
  );
};
