"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Header() {
  return (
    <section className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        {/* Subtle gradient overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-foreground/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-foreground/3 to-transparent rounded-full blur-3xl"></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-foreground/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-foreground/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-foreground/25 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-foreground/20 rounded-full animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto min-h-screen items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8 lg:pr-8 relative z-20 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="outline" className="text-xs font-mono bg-card/50 backdrop-blur-sm border-foreground/20 inline-flex">
                Open Source • Production Ready
              </Badge>
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm font-medium">
                  Cybersecurity Platform
                </p>
                <p className="text-muted-foreground text-sm">
                  API Monitoring • Abuse Detection • Real-time Alerts
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight">
                Boing protects your
                <br />
                <span className="font-medium">APIs from abuse.</span>
              </h1>
              
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Production-ready platform with multi-layer detection, real-time monitoring, 
                and intelligent alerts. No paid APIs - uses local ML models only.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="h-12 px-8">
                  <a href="https://github.com/Panda-0x01/Boing_API#quick-start" target="_blank" rel="noopener noreferrer">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="h-12 px-8">
                  <a href="https://github.com/Panda-0x01/Boing_API#readme" target="_blank" rel="noopener noreferrer">
                    View Documentation
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Content */}
          <div className="flex flex-col items-center justify-center space-y-8 relative z-20 order-first lg:order-last">
            <div className="bg-card/70 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-border/50 w-full max-w-sm sm:max-w-md shadow-2xl relative overflow-hidden">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent rounded-3xl"></div>
              
              <div className="flex items-center justify-center relative z-10">
                <div className="relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-foreground/10 to-foreground/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-foreground/30 shadow-lg relative">
                    {/* Inner rings */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-foreground/20 to-foreground/30 rounded-full flex items-center justify-center border border-foreground/20">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-foreground/40 to-foreground/60 rounded-full flex items-center justify-center border border-foreground/30">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-foreground rounded-full shadow-lg"></div>
                      </div>
                    </div>
                    
                    {/* Subtle rotating ring */}
                    <div className="absolute inset-0 border border-foreground/10 rounded-full"></div>
                  </div>
                  
                  {/* Enhanced orbiting elements */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-foreground/70 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-foreground/50 rounded-full animate-pulse delay-500 shadow-md"></div>
                  <div className="absolute top-1/2 -right-6 w-1.5 h-1.5 bg-foreground/60 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/4 -left-4 w-1 h-1 bg-foreground/40 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute bottom-1/4 -right-3 w-1 h-1 bg-foreground/30 rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm text-center mt-6 font-medium relative z-10">Boing Detection Pipeline</p>
            </div>
            
            <div className="text-center space-y-4">
              <Badge className="bg-gradient-to-r from-foreground to-foreground/90 text-background font-semibold px-6 py-2 text-xs tracking-wider shadow-lg border border-foreground/20">
                SECURE MONITORING
              </Badge>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Multi-layer detection pipeline with rules, statistics, ML models, 
                and optional local LLM analysis for comprehensive API protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}