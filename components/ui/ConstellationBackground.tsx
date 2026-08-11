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

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -2000, y: -2000, active: false, radiusSq: 220 * 220 };
    let isVisible = true;
    let dpr = 1;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;
      type: "gold" | "crimson";
      pulseSpeed: number;
      pulseAngle: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.baseRadius = Math.random() * 2.2 + 2; // Noticeably visible particles
        this.radius = this.baseRadius;
        this.type = Math.random() > 0.5 ? "gold" : "crimson";
        this.pulseSpeed = 0.03 + Math.random() * 0.03;
        this.pulseAngle = Math.random() * Math.PI * 2;
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around screen
        if (this.x < -20) this.x = w + 20;
        if (this.x > w + 20) this.x = -20;
        if (this.y < -20) this.y = h + 20;
        if (this.y > h + 20) this.y = -20;

        // Subtle breathing pulse
        this.pulseAngle += this.pulseSpeed;
        this.radius = this.baseRadius + Math.sin(this.pulseAngle) * 0.6;

        // Interactive mouse attraction
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < mouse.radiusSq && distSq > 4) {
            const dist = Math.sqrt(distSq);
            const force = (220 - dist) / 220;
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
          }
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.save();
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        if (this.type === "gold") {
          context.fillStyle = "#ffe880";
          context.shadowColor = "#ffe880";
          context.shadowBlur = 12;
        } else {
          context.fillStyle = "#bf0039";
          context.shadowColor = "#bf0039";
          context.shadowBlur = 12;
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

      const count = width < 768 ? 40 : 85; // Rich particle density
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
            const alpha = (1 - dist / maxDist) * 0.35;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            // Separate distinct colors for lines based on the connecting particle
            if (p1.type === "gold" && p2.type === "gold") {
              ctx.strokeStyle = `rgba(255, 232, 128, ${alpha * 1.2})`;
            } else if (p1.type === "crimson" && p2.type === "crimson") {
              ctx.strokeStyle = `rgba(191, 0, 57, ${alpha * 1.2})`;
            } else {
              ctx.strokeStyle = `rgba(255, 232, 128, ${alpha * 0.7})`;
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
              ctx.strokeStyle = `rgba(255, 232, 128, ${alpha})`;
              ctx.shadowColor = "#ffe880";
              ctx.shadowBlur = 8;
            } else {
              ctx.strokeStyle = `rgba(191, 0, 57, ${alpha})`;
              ctx.shadowColor = "#bf0039";
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
      className="fixed inset-0 w-full h-full pointer-events-none z-[1] will-change-transform"
      style={{
        display: "block",
        mixBlendMode: isDark ? "screen" : "normal",
      }}
    />
  );
}
