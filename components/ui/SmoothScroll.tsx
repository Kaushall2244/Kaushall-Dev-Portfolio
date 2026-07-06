"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize the kinetic scroll matrix
    const lenis = new Lenis({
      duration: 1.4,              // Slower duration = heavier, hypercar-like kinetic mass
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom exponential decay curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,       // Standardizes scroll speed scaling
    });

    // Infinite frame synchronization loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up pipeline instances on component destruction
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}