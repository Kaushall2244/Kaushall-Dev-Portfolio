"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "../Global/ThemeProvider";

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let dpr = 1;
    let isVisible = true;

    const mouse = {
      x: -2000,
      y: -2000,
      radius: 220,
      radiusSq: 220 * 220,
      active: false,
    };

    const goldColor = isDark ? "#ffe880" : "#d97706";
    const crimsonColor = "#bf0039";

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;
      type: "gold" | "crimson";
      alpha: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.baseRadius = Math.random() * 2 + 2.5; // 2.5px - 4.5px
        this.radius = this.baseRadius;
        this.type = Math.random() > 0.45 ? "gold" : "crimson";
        this.alpha = Math.random() * 0.35 + 0.65;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Soft bounce at viewport boundary
        if (this.x < 0) {
          this.x = 0;
          this.vx *= -1;
        } else if (this.x > width) {
          this.x = width;
          this.vx *= -1;
        }

        if (this.y < 0) {
          this.y = 0;
          this.vy *= -1;
        } else if (this.y > height) {
          this.y = height;
          this.vy *= -1;
        }

        // Active Mouse Attraction Force
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouse.radiusSq && distSq > 1) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / mouse.radius) * 0.08;
            this.vx += (dx / dist) * force;
            this.vy += (dy / dist) * force;
            this.radius = this.baseRadius * 1.4;
          } else {
            this.radius = this.baseRadius;
          }
        } else {
          this.radius = this.baseRadius;
        }

        // Friction dampening
        this.vx *= 0.985;
        this.vy *= 0.985;

        // Maintain minimum gentle ambient drift
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed < 0.15) {
          this.vx += (Math.random() - 0.5) * 0.05;
          this.vy += (Math.random() - 0.5) * 0.05;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.globalAlpha = this.alpha;

        if (this.type === "gold") {
          context.fillStyle = goldColor;
          context.shadowColor = goldColor;
          context.shadowBlur = isDark ? 12 : 6;
        } else {
          context.fillStyle = crimsonColor;
          context.shadowColor = crimsonColor;
          context.shadowBlur = isDark ? 12 : 6;
        }

        context.fill();
        context.restore();
      }
    }

    const init = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      const count = width < 768 ? 40 : 85;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -2000;
      mouse.y = -2000;
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    init();

    const maxDist = 140;
    const maxDistSq = maxDist * maxDist;

    const animate = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw particle-to-particle constellation lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update(width, height);
        p1.draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxDist) * (isDark ? 0.35 : 0.25);

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            if (p1.type === "gold" && p2.type === "gold") {
              ctx.strokeStyle = isDark
                ? `rgba(255, 232, 128, ${alpha * 1.2})`
                : `rgba(217, 119, 6, ${alpha * 1.2})`;
            } else if (p1.type === "crimson" && p2.type === "crimson") {
              ctx.strokeStyle = `rgba(191, 0, 57, ${alpha * 1.2})`;
            } else {
              ctx.strokeStyle = isDark
                ? `rgba(255, 232, 128, ${alpha * 0.7})`
                : `rgba(191, 0, 57, ${alpha * 0.7})`;
            }

            ctx.lineWidth = 0.9;
            ctx.stroke();
            ctx.restore();
          }
        }

        // 2. Draw mouse-to-particle interactive beams
        if (mouse.active) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouse.radiusSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / 220) * 0.75;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);

            if (p1.type === "gold") {
              ctx.strokeStyle = isDark
                ? `rgba(255, 232, 128, ${alpha})`
                : `rgba(217, 119, 6, ${alpha})`;
              ctx.shadowColor = goldColor;
              ctx.shadowBlur = 8;
            } else {
              ctx.strokeStyle = `rgba(191, 0, 57, ${alpha})`;
              ctx.shadowColor = crimsonColor;
              ctx.shadowBlur = 8;
            }

            ctx.lineWidth = 1.3;
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
    />
  );
}
