"use client";

import { X, ExternalLink, Code, Settings, Database, Shield, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectDetailsProps {
  projectName: string;
  onClose: () => void;
}

const projectDetails = {
  "Boing Core": {
    title: "Boing Core Detection Pipeline",
    description: "Multi-layer detection system with rules, statistics, ML models, and optional local LLM analysis.",
    status: "active",
    category: "Detection",
    features: [
      "Rule-based detection (rate limiting, IP blacklist, malicious patterns)",
      "Statistical analysis (Z-score anomalies, rolling percentiles)",
      "ML models (Isolation Forest, OneClassSVM)",
      "Optional local LLM analysis with llama.cpp",
      "Fallback to TF-IDF + Logistic Regression"
    ],
    techStack: ["Python", "FastAPI", "scikit-learn", "llama.cpp"],
    endpoints: [
      "POST /api/ingest - Receive API telemetry",
      "WS /ws/ingest - Real-time telemetry stream",
      "GET /api/detectors - List detector configs",
      "PUT /api/detectors/:id - Update detector settings"
    ],
    configuration: {
      "RATE_LIMIT_THRESHOLD": "100",
      "ANOMALY_ZSCORE_THRESHOLD": "3.0",
      "ML_CONTAMINATION": "0.1",
      "LLM_ENABLED": "false"
    }
  },
  "Live Stream": {
    title: "Real-time Activity Stream",
    description: "WebSocket-based live monitoring of API requests and security events with instant threat detection.",
    status: "active",
    category: "Monitoring",
    features: [
      "WebSocket real-time data streaming",
      "Live activity feed with filtering",
      "Instant threat notifications",
      "Request/response monitoring",
      "Geographic IP tracking"
    ],
    techStack: ["WebSocket", "FastAPI", "React", "Real-time UI"],
    endpoints: [
      "WS /ws/stream - Live activity stream",
      "GET /api/logs - Query request logs",
      "GET /api/metrics - Real-time metrics"
    ],
    configuration: {
      "WEBSOCKET_ENABLED": "true",
      "STREAM_BUFFER_SIZE": "1000",
      "REAL_TIME_ALERTS": "true"
    }
  },
  "JWT Auth": {
    title: "JWT Authentication System",
    description: "Secure token-based authentication with role-based access control for admin and user permissions.",
    status: "active",
    category: "Security",
    features: [
      "JWT token generation and validation",
      "Role-based access control (Admin/User)",
      "Secure password hashing",
      "Token refresh mechanism",
      "Session management"
    ],
    techStack: ["JWT", "bcrypt", "FastAPI Security", "Pydantic"],
    endpoints: [
      "POST /api/register - Register new user",
      "POST /api/login - Login and get JWT token",
      "POST /api/refresh - Refresh JWT token",
      "GET /api/me - Get current user info"
    ],
    configuration: {
      "JWT_SECRET": "your-secret-key-change-this",
      "JWT_EXPIRATION": "24h",
      "BCRYPT_ROUNDS": "12"
    }
  },
  "React Dashboard": {
    title: "Production Dashboard",
    description: "Modern React + Vite frontend with live metrics, visualizations, and comprehensive API management interface.",
    status: "active",
    category: "Platform",
    features: [
      "Real-time metrics dashboard",
      "Interactive data visualizations",
      "API management interface",
      "Alert configuration panel",
      "User management system"
    ],
    techStack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Chart.js"],
    endpoints: [
      "Frontend runs on port 5173",
      "WebSocket connection to backend",
      "REST API integration"
    ],
    configuration: {
      "VITE_API_URL": "http://localhost:8000",
      "VITE_WS_URL": "ws://localhost:8000/ws"
    }
  },
  "Alert System": {
    title: "Multi-channel Alert System",
    description: "Comprehensive alerting with email (SMTP), webhooks, Slack integration, and in-app notifications.",
    status: "active",
    category: "Monitoring",
    features: [
      "Email alerts via SMTP",
      "Slack webhook integration",
      "Custom webhook notifications",
      "In-app alert dashboard",
      "Alert acknowledgment system"
    ],
    techStack: ["SMTP", "Webhooks", "Slack API", "FastAPI"],
    endpoints: [
      "GET /api/alerts - List alerts",
      "POST /api/alerts/:id/ack - Acknowledge alert",
      "PUT /api/alerts/:id/mute - Mute alert"
    ],
    configuration: {
      "SMTP_HOST": "smtp.gmail.com",
      "SMTP_PORT": "587",
      "SLACK_WEBHOOK_URL": "https://hooks.slack.com/...",
      "ALERT_EMAIL_FROM": "alerts@boing.local"
    }
  },
  "FastAPI Backend": {
    title: "Python FastAPI Server",
    description: "High-performance REST API server with async support, automatic documentation, and production-ready features.",
    status: "active",
    category: "Platform",
    features: [
      "Async FastAPI framework",
      "Automatic OpenAPI documentation",
      "Pydantic data validation",
      "CORS configuration",
      "Production WSGI support"
    ],
    techStack: ["FastAPI", "Python 3.9+", "Uvicorn", "Gunicorn"],
    endpoints: [
      "Backend runs on port 8000",
      "Automatic /docs endpoint",
      "Health check endpoints"
    ],
    configuration: {
      "HOST": "0.0.0.0",
      "PORT": "8000",
      "WORKERS": "4",
      "LOG_LEVEL": "info"
    }
  },
  "MySQL Database": {
    title: "MySQL Database System",
    description: "Relational database with migrations, schema management, and production-ready configuration.",
    status: "active",
    category: "Platform",
    features: [
      "MySQL 8.0+ compatibility",
      "Database migrations system",
      "Schema version control",
      "Connection pooling",
      "Backup and restore support"
    ],
    techStack: ["MySQL", "SQLAlchemy", "Alembic", "Connection Pooling"],
    endpoints: [
      "Database runs on port 3306",
      "Migration commands available",
      "Backup scripts included"
    ],
    configuration: {
      "DB_HOST": "localhost",
      "DB_PORT": "3306",
      "DB_NAME": "boing",
      "DB_POOL_SIZE": "10"
    }
  },
  "Rate Limiting": {
    title: "API Rate Limiting System",
    description: "Intelligent rate limiting that protects management endpoints while allowing legitimate traffic.",
    status: "active",
    category: "Security",
    features: [
      "Per-IP rate limiting",
      "Per-API-key rate limiting",
      "Sliding window algorithm",
      "Whitelist/blacklist support",
      "Custom rate limit rules"
    ],
    techStack: ["Redis", "FastAPI Middleware", "Sliding Window"],
    endpoints: [
      "Applied to all management endpoints",
      "Configurable per endpoint",
      "Real-time rate limit status"
    ],
    configuration: {
      "RATE_LIMIT_THRESHOLD": "100",
      "RATE_LIMIT_WINDOW": "3600",
      "RATE_LIMIT_ENABLED": "true"
    }
  }
};

export default function ProjectDetails({ projectName, onClose }: ProjectDetailsProps) {
  const project = projectDetails[projectName as keyof typeof projectDetails];
  
  if (!project) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Project Not Found</CardTitle>
            <CardDescription>Details for &quot;{projectName}&quot; are not available yet.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={onClose} className="w-full">Close</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <CardHeader className="border-b border-border">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <Badge variant={project.status === "active" ? "default" : "secondary"}>
                  {project.status}
                </Badge>
              </div>
              <CardDescription className="text-base">{project.description}</CardDescription>
              <Badge variant="outline" className="w-fit">{project.category}</Badge>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-foreground" />
                <h3 className="text-lg font-semibold">Features</h3>
              </div>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-foreground" />
                <h3 className="text-lg font-semibold">Technology Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* API Endpoints */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-foreground" />
                <h3 className="text-lg font-semibold">API Endpoints</h3>
              </div>
              <div className="space-y-2">
                {project.endpoints.map((endpoint, index) => (
                  <div key={index} className="bg-muted/50 p-3 rounded-md">
                    <code className="text-xs text-muted-foreground font-mono">{endpoint}</code>
                  </div>
                ))}
              </div>
            </div>

            {/* Configuration */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-foreground" />
                <h3 className="text-lg font-semibold">Configuration</h3>
              </div>
              <div className="space-y-2">
                {Object.entries(project.configuration).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center p-2 bg-muted/30 rounded">
                    <span className="text-sm font-mono text-muted-foreground">{key}</span>
                    <span className="text-sm font-mono">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex gap-3">
              <Button variant="outline" asChild className="flex items-center gap-2">
                <a href="https://github.com/Panda-0x01/Boing_API#readme" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Documentation
                </a>
              </Button>
              <Button variant="outline" asChild className="flex items-center gap-2">
                <a href="https://github.com/Panda-0x01/Boing_API#configuration" target="_blank" rel="noopener noreferrer">
                  <Database className="w-4 h-4" />
                  Configuration
                </a>
              </Button>
              <Button onClick={onClose}>Close</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}