"use client";

import { cn } from "@/lib/utils";

interface AdvancedLaserFlowProps {
  className?: string;
}

export default function AdvancedLaserFlow({ className }: AdvancedLaserFlowProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {/* Main vertical laser beam */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
        {/* Core beam */}
        <div className="w-0.5 h-full bg-gradient-to-b from-white via-white to-white/20 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        
        {/* Inner glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-white/60 via-white/40 to-transparent blur-sm" />
        
        {/* Outer glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-gradient-to-b from-white/30 via-white/15 to-transparent blur-md" />
        
        {/* Far outer glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-full bg-gradient-to-b from-white/15 via-white/8 to-transparent blur-lg" />
      </div>
      
      {/* Top light source with intense glow */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-4">
        <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.8),0_0_60px_rgba(255,255,255,0.6)]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/40 rounded-full blur-md" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full blur-xl" />
      </div>
      
      {/* Animated energy particles flowing down */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 w-1 h-3 bg-gradient-to-b from-white to-transparent rounded-full animate-laser-particle opacity-60"
          style={{
            transform: `translateX(${-2 + Math.sin(i * 0.8) * 8}px)`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2.5 + i * 0.1}s`,
          }}
        />
      ))}
      
      {/* Side wisps */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`wisp-${i}`}
          className="absolute left-1/2 w-px h-6 bg-gradient-to-b from-white/40 to-transparent animate-laser-particle opacity-40"
          style={{
            transform: `translateX(${i % 2 === 0 ? -12 - i * 2 : 12 + i * 2}px)`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${3 + i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}