"use client";

import { cn } from "@/lib/utils";

interface SimpleLaserFlowProps {
  className?: string;
}

export default function SimpleLaserFlow({ className }: SimpleLaserFlowProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      {/* Main laser beam container */}
      <div className="absolute left-1/2 top-0 h-full transform -translate-x-1/2 z-0">
        
        {/* Outer glow - widest */}
        <div 
          className="absolute left-1/2 top-0 h-full transform -translate-x-1/2"
          style={{
            width: '100px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
            filter: 'blur(20px)'
          }}
        />
        
        {/* Middle glow */}
        <div 
          className="absolute left-1/2 top-0 h-full transform -translate-x-1/2"
          style={{
            width: '40px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
            filter: 'blur(10px)'
          }}
        />
        
        {/* Inner glow */}
        <div 
          className="absolute left-1/2 top-0 h-full transform -translate-x-1/2"
          style={{
            width: '8px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)',
            filter: 'blur(2px)'
          }}
        />
        
        {/* Core beam */}
        <div 
          className="absolute left-1/2 top-0 h-full transform -translate-x-1/2"
          style={{
            width: '2px',
            background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, rgba(255,255,255,0.5) 100%)',
            boxShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)'
          }}
        />
      </div>
      
      {/* Top light source */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-2">
        <div 
          className="w-6 h-6 rounded-full"
          style={{
            background: 'radial-gradient(circle, #ffffff 0%, rgba(255,255,255,0.8) 30%, transparent 70%)',
            boxShadow: '0 0 30px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,0.6), 0 0 90px rgba(255,255,255,0.3)'
          }}
        />
      </div>
      
      {/* Animated particles */}
      <div className="absolute left-1/2 top-0 h-full transform -translate-x-1/2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute w-1 h-4 rounded-full animate-pulse"
            style={{
              left: `${-2 + (i % 2 === 0 ? -4 : 4) + Math.sin(i) * 2}px`,
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)',
              animation: `laser-flow-particle ${2 + i * 0.2}s linear infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}