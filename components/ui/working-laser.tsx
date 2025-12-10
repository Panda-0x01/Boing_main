"use client";

export default function WorkingLaser() {
  return (
    <>
      {/* Add the CSS to global styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .laser-container {
            position: absolute;
            inset: 0;
            pointer-events: none;
            overflow: hidden;
          }
          
          .laser-beam-wrapper {
            position: absolute;
            left: 50%;
            top: 0;
            height: 100%;
            transform: translateX(-50%);
          }
          
          .laser-outer-glow {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 100%;
            background: linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 50%, transparent 100%);
            filter: blur(25px);
          }
          
          .laser-middle-glow {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 30px;
            height: 100%;
            background: linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 100%);
            filter: blur(10px);
          }
          
          .laser-inner-glow {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 8px;
            height: 100%;
            background: linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 100%);
            filter: blur(3px);
          }
          
          .laser-core-beam {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 100%;
            background: linear-gradient(to bottom, #ffffff 0%, #ffffff 60%, rgba(255,255,255,0.6) 100%);
            box-shadow: 0 0 8px rgba(255,255,255,0.8);
          }
          
          .laser-light-source {
            position: absolute;
            left: 50%;
            top: -10px;
            transform: translateX(-50%);
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #ffffff 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0.2) 70%, transparent 100%);
            border-radius: 50%;
            box-shadow: 0 0 30px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,0.5);
          }
          
          .laser-particle {
            position: absolute;
            left: 50%;
            width: 2px;
            height: 6px;
            background: linear-gradient(to bottom, rgba(255,255,255,0.9), transparent);
            border-radius: 2px;
            animation: laser-particle-move 2.5s linear infinite;
          }
          
          .laser-particle:nth-child(6) { transform: translateX(-8px); animation-delay: 0s; }
          .laser-particle:nth-child(7) { transform: translateX(6px); animation-delay: 0.4s; }
          .laser-particle:nth-child(8) { transform: translateX(-3px); animation-delay: 0.8s; }
          .laser-particle:nth-child(9) { transform: translateX(8px); animation-delay: 1.2s; }
          .laser-particle:nth-child(10) { transform: translateX(-6px); animation-delay: 1.6s; }
          .laser-particle:nth-child(11) { transform: translateX(3px); animation-delay: 2s; }
          
          @keyframes laser-particle-move {
            0% {
              transform: translateX(var(--x, 0)) translateY(-15px);
              opacity: 0;
            }
            5% {
              opacity: 1;
            }
            95% {
              opacity: 0.8;
            }
            100% {
              transform: translateX(var(--x, 0)) translateY(100vh);
              opacity: 0;
            }
          }
        `
      }} />
      
      <div className="laser-container">
        <div className="laser-beam-wrapper">
          <div className="laser-outer-glow"></div>
          <div className="laser-middle-glow"></div>
          <div className="laser-inner-glow"></div>
          <div className="laser-core-beam"></div>
          <div className="laser-light-source"></div>
          
          <div className="laser-particle" style={{'--x': '-8px'} as any}></div>
          <div className="laser-particle" style={{'--x': '6px'} as any}></div>
          <div className="laser-particle" style={{'--x': '-3px'} as any}></div>
          <div className="laser-particle" style={{'--x': '8px'} as any}></div>
          <div className="laser-particle" style={{'--x': '-6px'} as any}></div>
          <div className="laser-particle" style={{'--x': '3px'} as any}></div>
        </div>
      </div>
    </>
  );
}