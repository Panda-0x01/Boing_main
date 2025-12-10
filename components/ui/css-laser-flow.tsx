"use client";

import { cn } from "@/lib/utils";

interface CSSLaserFlowProps {
  className?: string;
}

export default function CSSLaserFlow({ className }: CSSLaserFlowProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {/* Main laser beam */}
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-white via-white/80 to-transparent transform -translate-x-1/2 animate-pulse" />
      
      {/* Wider glow effect */}
      <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-white/40 via-white/20 to-transparent transform -translate-x-1/2 blur-sm" />
      
      {/* Even wider outer glow */}
      <div className="absolute left-1/2 top-0 w-8 h-full bg-gradient-to-b from-white/20 via-white/10 to-transparent transform -translate-x-1/2 blur-md" />
      
      {/* Top glow source */}
      <div className="absolute left-1/2 top-0 w-16 h-16 bg-white/60 rounded-full transform -translate-x-1/2 -translate-y-8 blur-xl animate-pulse" />
      
      {/* Animated particles */}
      <div className="absolute left-1/2 top-0 w-full h-full transform -translate-x-1/2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-2 bg-white/60 rounded-full animate-laser-particle"
            style={{
              left: `${48 + Math.sin(i) * 4}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}