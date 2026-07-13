"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize the kinetic scroll matrix
    const lenis = new Lenis({
      duration: 1.2,              
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom exponential decay curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,       // Standardizes scroll speed scaling
    });

    // Synchronize ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Hook Lenis into GSAP ticker
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Clean up pipeline instances on component destruction
    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  return <>{children}</>;
}