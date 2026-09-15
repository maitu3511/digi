import React, { useEffect, useRef, useState } from "react";

interface HeroBackgroundVideoProps {
  /** Poster / fallback image (also used while the video loads) */
  poster: string;
  /** Public path to the webm source */
  webmSrc: string;
  /** Public path to the mp4 source */
  mp4Src: string;
  /** Extra classes for the <video> element */
  className?: string;
  /** Final opacity once the video is playing (0-1) */
  opacity?: number;
}

/**
 * Premium background video layer.
 * - Autoplays muted + looped, inline on iOS
 * - Always rendered (no reduced-motion / save-data gating that could hide it)
 * - Hides itself only if the file genuinely fails to load (real 404/error)
 */
export const HeroBackgroundVideo: React.FC<HeroBackgroundVideoProps> = ({
  poster,
  webmSrc,
  mp4Src,
  className = "",
  opacity = 1,
}) => {
  const [failed, setFailed] = useState(false);
  // Default to visible. Waiting for a "ready" event before showing the
  // video was the actual bug: in this SSR app, the browser can start
  // loading/decoding the <video> (because of `preload="auto"` in the
  // server-rendered HTML) and fire onLoadedData/onCanPlay/onPlaying
  // BEFORE React finishes hydrating and attaches those handlers. Those
  // events only fire once, so they were being missed entirely and the
  // video stayed stuck at opacity: 0 forever — even though the file
  // itself loaded and played perfectly fine (which is exactly why
  // opening the video URL directly worked, but it never appeared on
  // the page). The poster image + instant full opacity below removes
  // that race condition completely.
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    // Set muted imperatively (not just via the JSX/HTML attribute). In SSR
    // apps the server-rendered markup can autoplay before React has fully
    // hydrated and attached the `muted` property, which makes browsers
    // silently block autoplay. Setting it directly on the element removes
    // that race condition.
    el.muted = true;
    el.defaultMuted = true;

    // If the browser already loaded/decoded a frame before hydration
    // (readyState >= 2 === HAVE_CURRENT_DATA), the loaded/canplay events
    // have already fired and won't fire again — nothing to wait for.
    const tryPlay = () => {
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => undefined);
    };
    tryPlay();

    // Extra safety net: some browsers only allow play() once metadata is
    // fully ready; retry shortly after mount in case the first call raced
    // the element's internal state.
    const retry = window.setTimeout(tryPlay, 300);
    return () => window.clearTimeout(retry);
  }, []);

  if (failed) return null;

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 w-full h-full object-cover object-center z-[1] ${className}`}
      style={{ opacity }}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
      onError={() => setFailed(true)}
    >
      <source src={webmSrc} type="video/webm" />
      <source src={mp4Src} type="video/mp4" />
    </video>
  );
};

export default HeroBackgroundVideo;
