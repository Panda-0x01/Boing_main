"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, Download } from "lucide-react";
import { Button } from "./ui/button";

export default function GitHubSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
            <Github className="w-8 h-8 sm:w-10 sm:h-10 text-foreground" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4 sm:mb-6 tracking-tight leading-tight">
            Open Source & Production Ready
          </h2>
          
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
            Boing is completely free and open-source. Deploy it in your infrastructure with Docker, 
            customize detection rules, and contribute to the cybersecurity community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="border border-border bg-card p-6 sm:p-8 rounded-2xl">
              <Star className="w-8 h-8 sm:w-10 sm:h-10 text-foreground mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-light text-foreground mb-2">MIT</div>
              <div className="text-muted-foreground text-sm sm:text-base">License</div>
            </div>
            
            <div className="border border-border bg-card p-6 sm:p-8 rounded-2xl">
              <GitFork className="w-8 h-8 sm:w-10 sm:h-10 text-foreground mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-light text-foreground mb-2">Docker</div>
              <div className="text-muted-foreground text-sm sm:text-base">Ready</div>
            </div>
            
            <div className="border border-border bg-card p-6 sm:p-8 rounded-2xl">
              <Download className="w-8 h-8 sm:w-10 sm:h-10 text-foreground mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-light text-foreground mb-2">Free</div>
              <div className="text-muted-foreground text-sm sm:text-base">No Paid APIs</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              asChild
              className="h-12 px-8"
            >
              <a 
                href="https://github.com/Panda-0x01/Boing_API" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-4 w-4" />
                View Repository
              </a>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              asChild
              className="h-12 px-8"
            >
              <a 
                href="https://github.com/Panda-0x01/Boing_API#quick-start" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Quick Start Guide
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}