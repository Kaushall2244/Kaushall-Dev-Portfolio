import { useEffect, useRef } from "react";

export const useSound = (url: string) => {
  const soundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    soundRef.current = new Audio(url);
  }, [url]);

  const play = () => {
    if (soundRef.current) {
      soundRef.current.currentTime = 0;
      soundRef.current.play().catch(() => {}); // Catch auto-play errors
    }
  };

  return play;
};