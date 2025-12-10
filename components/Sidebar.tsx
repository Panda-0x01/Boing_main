"use client";

import { useState } from "react";
import Image from "next/image";
import { Shield, Activity, Lock, Database, Code, Server, Github, Twitter, Linkedin } from "lucide-react";
import { BoingLogo } from "./icons";
import ProjectDetails from "./ProjectDetails";

export default function Sidebar() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const handleProjectClick = (projectName: string) => {
    setSelectedProject(projectName);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Custom scrollbar styles
  const scrollbarStyles = `
    .sidebar-scroll::-webkit-scrollbar {
      width: 6px;
    }
    .sidebar-scroll::-webkit-scrollbar-track {
      background: transparent;
    }
    .sidebar-scroll::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
    }
    .sidebar-scroll::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
      <div className="fixed left-0 top-0 h-full w-72 bg-card border-r border-border z-40 backdrop-blur-sm">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-background/10">
                {!imageError ? (
                  <Image
                    src="/boing_logo.jpeg"
                    alt="Boing Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover rounded-lg"
                    onError={handleImageError}
                    priority
                  />
                ) : (
                  <BoingLogo className="w-8 h-8 text-foreground" />
                )}
              </div>
              <span className="text-foreground font-medium text-lg tracking-tight">Boing</span>
            </div>
          </div>
          
          <div className="flex-1 p-6 overflow-y-auto sidebar-scroll" style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255, 255, 255, 0.1) transparent'
          }}>
            <div className="space-y-6">
              <div>
                <h3 className="text-muted-foreground text-xs font-semibold mb-4 uppercase tracking-wider">
                  Navigation
                </h3>
                <div className="space-y-2">
                  <a href="https://github.com/Panda-0x01/Boing_API#readme" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground text-sm py-2 px-2 rounded-md hover:bg-accent/30 transition-all duration-200">About</a>
                  <a href="https://github.com/Panda-0x01/Boing_API/issues" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground text-sm py-2 px-2 rounded-md hover:bg-accent/30 transition-all duration-200">Support</a>
                  <a href="https://github.com/Panda-0x01/Boing_API#readme" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground text-sm py-2 px-2 rounded-md hover:bg-accent/30 transition-all duration-200">Documentation</a>
                </div>
              </div>
              
              <div>
                <h3 className="text-muted-foreground text-xs font-semibold mb-4 uppercase tracking-wider">
                  Platform Components (8)
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-muted-foreground text-xs font-semibold mb-2 uppercase flex items-center gap-2">
                      <Shield className="w-3 h-3" />
                      Detection
                    </h4>
                    <div className="space-y-1 text-sm">
                      <button 
                        onClick={() => handleProjectClick("Boing Core")}
                        className="flex items-center gap-2 w-full text-left py-2 px-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                      >
                        <Code className="w-4 h-4" />
                        Boing Core
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-muted-foreground text-xs font-semibold mb-2 uppercase flex items-center gap-2">
                      <Activity className="w-3 h-3" />
                      Monitoring
                    </h4>
                    <div className="space-y-1 text-sm">
                      <button 
                        onClick={() => handleProjectClick("Live Stream")}
                        className="flex items-center gap-2 w-full text-left py-2 px-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                      >
                        <Activity className="w-4 h-4" />
                        Live Stream
                      </button>
                      <button 
                        onClick={() => handleProjectClick("Alert System")}
                        className="flex items-center gap-2 w-full text-left py-2 px-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                      >
                        <Activity className="w-4 h-4" />
                        Alert System
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-muted-foreground text-xs font-semibold mb-2 uppercase flex items-center gap-2">
                      <Lock className="w-3 h-3" />
                      Security
                    </h4>
                    <div className="space-y-1 text-sm">
                      <button 
                        onClick={() => handleProjectClick("JWT Auth")}
                        className="flex items-center gap-2 w-full text-left py-2 px-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                      >
                        <Lock className="w-4 h-4" />
                        JWT Auth
                      </button>
                      <button 
                        onClick={() => handleProjectClick("Rate Limiting")}
                        className="flex items-center gap-2 w-full text-left py-2 px-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                      >
                        <Shield className="w-4 h-4" />
                        Rate Limiting
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-muted-foreground text-xs font-semibold mb-2 uppercase flex items-center gap-2">
                      <Server className="w-3 h-3" />
                      Platform
                    </h4>
                    <div className="space-y-1 text-sm">
                      <button 
                        onClick={() => handleProjectClick("React Dashboard")}
                        className="flex items-center gap-2 w-full text-left py-2 px-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                      >
                        <Code className="w-4 h-4" />
                        React Dashboard
                      </button>
                      <button 
                        onClick={() => handleProjectClick("FastAPI Backend")}
                        className="flex items-center gap-2 w-full text-left py-2 px-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                      >
                        <Server className="w-4 h-4" />
                        FastAPI Backend
                      </button>
                      <button 
                        onClick={() => handleProjectClick("MySQL Database")}
                        className="flex items-center gap-2 w-full text-left py-2 px-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                      >
                        <Database className="w-4 h-4" />
                        MySQL Database
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-border">
            <h3 className="text-muted-foreground text-xs font-semibold mb-3 uppercase tracking-wider">
              Social
            </h3>
            <div className="flex gap-4">
              <a href="https://github.com/Panda-0x01/Boing_API" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <Twitter className="w-4 h-4" />
                Twitter
              </a>
              <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectDetails 
          projectName={selectedProject} 
          onClose={handleCloseDetails} 
        />
      )}
    </>
  );
}