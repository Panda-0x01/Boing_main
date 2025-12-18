"use client";

import { motion } from "framer-motion";
import { Book, Code, Settings, Rocket, Database } from "lucide-react";
import CardSwap, { Card } from "./ui/card-swap";
import "./ui/card-swap.css";

const docSections = [
  {
    icon: Rocket,
    title: "Quick Start",
    description: "Get Boing running in minutes with Docker or manual setup.",
    items: ["Prerequisites", "Database Setup", "Backend Config", "Frontend Launch"],
  },
  {
    icon: Code,
    title: "API Integration",
    description: "Instrument your APIs to send telemetry data to Boing.",
    items: ["Python Middleware", "Node.js Express", "WebSocket Stream", "HTTP Ingestion"],
  },
  {
    icon: Settings,
    title: "Detection Pipeline",
    description: "Configure multi-layer detection with rules, ML, and LLM.",
    items: ["Rule-based Detectors", "Statistical Analysis", "ML Models", "Local LLM"],
  },
  {
    icon: Database,
    title: "Production Deploy",
    description: "Scale Boing for production with Docker and best practices.",
    items: ["Docker Compose", "Load Balancing", "Database Scaling", "Monitoring"],
  },
];

export default function Documentation() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12 bg-muted/30 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[500px] lg:min-h-[700px]">
          {/* Left Side - Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center lg:pr-8 text-center lg:text-left order-2 lg:order-1"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-6 sm:mb-8 tracking-tight leading-tight">
              Documentation & Setup
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8">
              Complete guides to deploy Boing in your infrastructure and start monitoring APIs for abuse.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              From quick Docker setup to production deployment, API instrumentation, 
              and advanced detection configuration - everything you need to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/Panda-0x01/Boing_API#quick-start" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-foreground hover:text-muted-foreground transition-colors text-sm font-medium"
              >
                Quick Start Guide →
              </a>
              <a 
                href="https://github.com/Panda-0x01/Boing_API#readme" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Full Documentation →
              </a>
            </div>
          </motion.div>

          {/* Right Side - CardSwap Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center relative order-1 lg:order-2"
          >
            {/* Container with proper padding to contain the animation */}
            <div className="relative w-full max-w-xs sm:max-w-md mx-auto px-4 sm:px-8 py-8 sm:py-12">
              <CardSwap
                width={320}
                height={280}
                cardDistance={25}
                verticalDistance={35}
                delay={3500}
                pauseOnHover={true}
                easing="elastic"
                onCardClick={(index) => console.log(`Card ${index} clicked`)}
              >
                {docSections.map((section, index) => (
                  <Card
                    key={index}
                    className="flex flex-col justify-center items-center p-4 sm:p-6 text-center bg-card border border-border backdrop-blur-sm rounded-2xl shadow-lg"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-foreground/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                    </div>
                    <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3 text-foreground">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground text-xs mb-3 sm:mb-4 leading-relaxed px-1 sm:px-2">
                      {section.description}
                    </p>
                    <div className="space-y-1 sm:space-y-1.5">
                      {section.items.slice(0, 2).map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center text-muted-foreground text-xs">
                          <div className="w-1 h-1 bg-foreground/60 rounded-full mr-2 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}