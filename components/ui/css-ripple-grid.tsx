"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CSSRippleGridProps {
  className?: string;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function CSSRippleGrid({ className }: CSSRippleGridProps) {
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
      <style jsx>{`
        .grid-background {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .ripple {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: ripple-animation 1s ease-out forwards;
          pointer-events: none;
        }
        
        @keyframes ripple-animation {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }
      `}</style>
      
      <div
        className={cn(
          "absolute inset-0 grid-background cursor-pointer",
          className
        )}
        onClick={handleClick}
      >
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          />
        ))}
      </div>
    </>
  );
}