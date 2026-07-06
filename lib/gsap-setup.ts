import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Use this hook in your client components for clean lifecycle management
export { gsap, ScrollTrigger, useGSAP };