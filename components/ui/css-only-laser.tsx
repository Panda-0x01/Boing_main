"use client";

export default function CSSOnlyLaser() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Laser beam styles */}
      <style jsx>{`
        .laser-beam {
          position: absolute;
          left: 50%;
          top: 0;
          height: 100%;
          transform: translateX(-50%);
        }
        
        .laser-core {
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, #ffffff 0%, #ffffff 70%, rgba(255,255,255,0.3) 100%);
          box-shadow: 0 0 10px rgba(255,255,255,0.8);
        }
        
        .laser-glow-1 {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 100%;
          background: linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 50%, transparent 100%);
          filter: blur(2px);
        }
        
        .laser-glow-2 {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 100%;
          background: linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
          filter: blur(8px);
        }
        
        .laser-glow-3 {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 100%;
          background: linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%);
          filter: blur(20px);
        }
        
        .laser-source {
          position: absolute;
          left: 50%;
          top: -8px;
          transform: translateX(-50%);
          width: 16px;
          height: 16px;
          background: radial-gradient(circle, #ffffff 0%, rgba(255,255,255,0.6) 50%, transparent 100%);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(255,255,255,1), 0 0 40px rgba(255,255,255,0.6);
        }
        
        .particle {
          position: absolute;
          left: 50%;
          width: 2px;
          height: 8px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.8), transparent);
          border-radius: 2px;
          animation: particle-flow 3s linear infinite;
        }
        
        .particle:nth-child(1) { transform: translateX(-6px); animation-delay: 0s; }
        .particle:nth-child(2) { transform: translateX(4px); animation-delay: 0.5s; }
        .particle:nth-child(3) { transform: translateX(-2px); animation-delay: 1s; }
        .particle:nth-child(4) { transform: translateX(6px); animation-delay: 1.5s; }
        .particle:nth-child(5) { transform: translateX(-4px); animation-delay: 2s; }
        
        @keyframes particle-flow {
          0% {
            transform: translateX(var(--x-offset, 0)) translateY(-10px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(var(--x-offset, 0)) translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
      
      <div className="laser-beam">
        <div className="laser-glow-3"></div>
        <div className="laser-glow-2"></div>
        <div className="laser-glow-1"></div>
        <div className="laser-core"></div>
        <div className="laser-source"></div>
        
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </div>
  );
}