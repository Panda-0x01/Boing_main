"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface SimpleRippleGridProps {
  className?: string;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function SimpleRippleGrid({ className }: SimpleRippleGridProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 1000);
  };

  return (
    <>
      {/* Add CSS to document head */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .ripple-grid-bg {
            background-image: 
              linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
            background-size: 50px 50px;
          }
          
          .ripple-effect {
            position: absolute;
            border: 2px solid rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: ripple-expand 1s ease-out forwards;
            pointer-events: none;
          }
          
          @keyframes ripple-expand {
            0% {
              width: 0;
              height: 0;
              opacity: 1;
            }
            100% {
              width: 200px;
              height: 200px;
              opacity: 0;
            }
          }
        `
      }} />
      
      <div
        className={cn(
          "absolute inset-0 ripple-grid-bg cursor-pointer",
          className
        )}
        onClick={handleClick}
      >
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="ripple-effect"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
            }}
          />
        ))}
      </div>
    </>
  );
}