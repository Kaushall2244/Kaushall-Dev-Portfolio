"use client";
import { useEffect, useState } from 'react';

export default function MouseLight() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(59, 130, 246, 0.05), transparent 80%)`
      }}
    />
  );
}