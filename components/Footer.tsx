"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { BoingLogo } from "./icons";

export default function Footer() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <footer className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden flex items-center justify-center bg-background/10">
                {!imageError ? (
                  <Image
                    src="/boing_logo.jpeg"
                    alt="Boing Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-xl"
                    onError={handleImageError}
                  />
                ) : (
                  <BoingLogo className="w-8 h-8 sm:w-10 sm:h-10 text-foreground" />
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-foreground">
                Boing
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 sm:mb-8 max-w-md leading-relaxed text-sm sm:text-base">
              Production-ready API abuse & cybersecurity monitoring platform. 
              Multi-layer detection, real-time alerts, and local ML models. Free and open-source.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/Panda-0x01/Boing_API" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-border p-2 sm:p-3 rounded-xl hover:bg-accent transition-colors"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </a>
              <a 
                href="#" 
                className="border border-border p-2 sm:p-3 rounded-xl hover:bg-accent transition-colors"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </a>
              <a 
                href="#" 
                className="border border-border p-2 sm:p-3 rounded-xl hover:bg-accent transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </a>
              <a 
                href="#" 
                className="border border-border p-2 sm:p-3 rounded-xl hover:bg-accent transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-medium mb-4 sm:mb-6 text-foreground">Platform</h4>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
              <li><a href="https://github.com/Panda-0x01/Boing_API#detection-pipeline" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Detection Pipeline</a></li>
              <li><a href="https://github.com/Panda-0x01/Boing_API#alert-system" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Alert System</a></li>
              <li><a href="https://github.com/Panda-0x01/Boing_API#dashboard" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Dashboard</a></li>
              <li><a href="https://github.com/Panda-0x01/Boing_API#docker-setup-alternative" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Docker Setup</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-medium mb-4 sm:mb-6 text-foreground">Resources</h4>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
              <li><a href="https://github.com/Panda-0x01/Boing_API#quick-start" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Quick Start</a></li>
              <li><a href="https://github.com/Panda-0x01/Boing_API#api-endpoints" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">API Reference</a></li>
              <li><a href="https://github.com/Panda-0x01/Boing_API#configuration" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Configuration</a></li>
              <li><a href="https://github.com/Panda-0x01/Boing_API/issues" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub Issues</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 sm:pt-8 text-center text-muted-foreground">
          <p className="text-xs sm:text-sm">&copy; 2024 Boing. MIT License. Built with Next.js, React, FastAPI, and MySQL.</p>
        </div>
      </div>
    </footer>
  );
}