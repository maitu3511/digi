import React, { useState, useEffect, useMemo } from "react";

interface TypewriterTextProps {
  phrases: string | string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
  cursorClassName?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2500,
  className = "text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B16] via-[#D4AF37] to-[#C9A227] font-semibold",
  cursorClassName = "inline-block w-[2.5px] sm:w-[3.5px] h-[0.85em] bg-[#D4AF37] ml-1 sm:ml-1.5 animate-pulse rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)] align-middle",
}) => {
  const phraseList = useMemo(() => (Array.isArray(phrases) ? phrases : [phrases]), [phrases]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState(phraseList[0] || "");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(typingSpeed);

  useEffect(() => {
    if (phraseList.length <= 1) return;

    const currentFullText = phraseList[currentPhraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters
        const nextText = currentFullText.substring(0, displayText.length + 1);
        setDisplayText(nextText);
        setSpeed(typingSpeed);

        if (nextText === currentFullText) {
          setSpeed(pauseTime);
          setIsDeleting(true);
        }
      } else {
        // Deleting characters
        const nextText = currentFullText.substring(0, displayText.length - 1);
        setDisplayText(nextText);
        setSpeed(deletingSpeed);

        if (nextText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phraseList.length);
          setSpeed(400);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [
    displayText,
    isDeleting,
    currentPhraseIndex,
    phraseList,
    speed,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  if (!phraseList.length) return null;

  return (
    <span className="inline-flex items-center pb-0.5 whitespace-nowrap">
      <span className={className}>{displayText || "\u00A0"}</span>
      <span className={cursorClassName} />
    </span>
  );
};
