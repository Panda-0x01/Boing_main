"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Brain, AlertTriangle, BarChart3, Lock, Wifi, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Real-time Monitoring",
    description: "WebSocket-based live activity stream with instant threat detection and response capabilities.",
    icon: Wifi,
  },
  {
    title: "Multi-layer Detection",
    description: "Rule-based, statistical analysis, ML models (Isolation Forest), and optional local LLM analysis pipeline.",
    icon: Brain,
  },
  {
    title: "Alert System",
    description: "Email (SMTP), Webhook/Slack, and in-app notifications with customizable alert rules and thresholds.",
    icon: AlertTriangle,
  },
  {
    title: "Security & Encryption",
    description: "Encrypted API secrets with Fernet, JWT authentication, role-based access, and comprehensive rate limiting.",
    icon: Lock,
  },
  {
    title: "Production Dashboard",
    description: "React + Vite frontend with live metrics, visualizations, and comprehensive API management interface.",
    icon: BarChart3,
  },
  {
    title: "Free & Open-Source",
    description: "No paid APIs required - uses local ML models only. MySQL database with full Docker support.",
    icon: Database,
  },
];

export default function Features() {
  return (
    <section className="py-32 px-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 tracking-tight leading-tight">
              Platform Features
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Production-ready cybersecurity monitoring platform with comprehensive API abuse detection and real-time alerting.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="hover:bg-accent/50 transition-all duration-300 border-border h-full p-8">
                <CardHeader className="p-0 pb-6">
                  <div className="w-12 h-12 bg-foreground/10 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <CardTitle className="text-xl font-medium tracking-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}