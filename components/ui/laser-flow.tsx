"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface LaserFlowProps {
  className?: string;
}

export default function LaserFlow({ className }: LaserFlowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationId: number;
    let time = 0;

    const animate = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Create gradient for the laser beam
      const gradient = ctx.createLinearGradient(width / 2 - 50, 0, width / 2 + 50, 0);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.1)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      // Draw the main laser beam
      ctx.fillStyle = gradient;
      ctx.fillRect(width / 2 - 50, 0, 100, height);

      // Create a brighter center line
      const centerGradient = ctx.createLinearGradient(width / 2 - 2, 0, width / 2 + 2, 0);
      centerGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      centerGradient.addColorStop(0.5, "rgba(255, 255, 255, 1)");
      centerGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = centerGradient;
      ctx.fillRect(width / 2 - 2, 0, 4, height);

      // Add animated particles/wisps
      for (let i = 0; i < 5; i++) {
        const y = ((time * 0.5 + i * 100) % (height + 200)) - 100;
        const opacity = Math.sin((time * 0.01 + i) * 2) * 0.3 + 0.7;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.6})`;
        ctx.beginPath();
        ctx.ellipse(width / 2 + Math.sin(time * 0.01 + i) * 10, y, 1, 8, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // Add glow effect at the top
      const glowGradient = ctx.createRadialGradient(width / 2, 0, 0, width / 2, 0, 100);
      glowGradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
      glowGradient.addColorStop(0.3, "rgba(255, 255, 255, 0.3)");
      glowGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, width, 100);

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{ width: "100%", height: "100%" }}
    />
  );
}