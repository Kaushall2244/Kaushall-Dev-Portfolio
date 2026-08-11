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
    const mouse = { x: -1000, y: -1000, active: false, radiusSq: 160 * 160 };
    let isVisible = true;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      isAccentGold: boolean;
      isAccentCrimson: boolean;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.8 + 1;
        const rand = Math.random();
        this.isAccentGold = rand > 0.65 && rand <= 0.85;
        this.isAccentCrimson = rand > 0.85;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < mouse.radiusSq && distSq > 1) {
            const force = (160 - Math.sqrt(distSq)) / 160;
            this.x += (dx / 160) * force * 0.35;
            this.y += (dy / 160) * force * 0.35;
          }
        }
      }

      draw(context: CanvasRenderingContext2D, dark: boolean) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        if (dark) {
          if (this.isAccentGold) context.fillStyle = "rgba(255, 232, 128, 0.85)";
          else if (this.isAccentCrimson) context.fillStyle = "rgba(191, 0, 57, 0.85)";
          else context.fillStyle = "rgba(255, 255, 255, 0.5)";
        } else {
          if (this.isAccentGold) context.fillStyle = "rgba(234, 179, 8, 0.85)";
          else if (this.isAccentCrimson) context.fillStyle = "rgba(191, 0, 57, 0.85)";
          else context.fillStyle = "rgba(30, 41, 59, 0.35)";
        }
        context.fill();
      }
    }

    const init = () => {
      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);
      const count = width < 768 ? 20 : 36;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(Math.random() * width, Math.random() * height));
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
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    init();

    const maxDist = 110;
    const maxDistSq = maxDist * maxDist;

    const animate = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const strokeGold = isDark ? "255, 232, 128" : "191, 0, 57";

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update(width, height);
        p1.draw(ctx, isDark);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const alpha = (1 - Math.sqrt(distSq) / maxDist) * (isDark ? 0.14 : 0.16);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${strokeGold}, ${alpha})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }

        if (mouse.active) {
          const dx = p1.x - mouse.x;
          const dy = p1.y - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouse.radiusSq) {
            const alpha = (1 - Math.sqrt(distSq) / 160) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${strokeGold}, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
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
      className="absolute inset-0 w-full h-full pointer-events-none z-0 will-change-transform"
      style={{ mixBlendMode: isDark ? "screen" : "normal" }}
    />
  );
}
