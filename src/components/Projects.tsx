"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/SocialIcons";

export default function Projects() {
  const projectsList = [
    {
      title: "StoreFlow – E-Commerce Storefront Client",
      tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Vite", "React Router"],
      description: [
        "Built a modern e-commerce storefront with catalog browsing, interactive cart states, and seamless checkout flows.",
        "Implemented global state management with Redux Toolkit for consistent cart counts and user session tracking.",
        "Created a premium responsive design using glassmorphic cards and micro-animations on interactive components."
      ],
      github: "https://github.com/kategauransh/storeflow",
      live: "https://kategauransh.github.io/storeflow/",
      icon: "🛍️"
    },
    {
      title: "InsightBoard – Admin Metrics Dashboard",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons", "Static HTML Export"],
      description: [
        "Designed a high-end admin dashboard displaying mock financial statistics, task lists, and user metrics.",
        "Utilized Next.js static exports and basePath settings for high-performance hosting on GitHub Pages.",
        "Structured modular React components with robust hydration handling and responsive side-drawers."
      ],
      github: "https://github.com/kategauransh/insightboard",
      live: "https://kategauransh.github.io/insightboard/",
      icon: "📊"
    },
    {
      title: "IdentityFlow – JWT Authentication Debugger",
      tech: ["React.js", "TypeScript", "CSS Modules", "JWT Token Decoding", "Vite"],
      description: [
        "Developed a developer utility tool to simulate, inspect, decode, and debug JSON Web Tokens (JWT).",
        "Implemented real-time client-side inputs validation and visual token signature verifying animations.",
        "Designed a protected dashboard layout demonstrating path-guarding logic and decoded payloads visualizer panels."
      ],
      github: "https://github.com/kategauransh/identityflow",
      live: "https://kategauransh.github.io/identityflow/",
      icon: "🛡️"
    },
    {
      title: "Xerox Printing & Delivery Platform",
      tech: ["Spring Boot", "MySQL", "JPA / Hibernate", "Docker", "PostgreSQL", "REST APIs"],
      description: [
        "Built a document printing and delivery backend platform where users upload PDFs, configure options, and place orders.",
        "Developed REST APIs for order management, pricing calculations, and document processing using Spring Boot and PostgreSQL.",
        "Designed the database schemas using JPA/Hibernate relational mapping and containerized services using Docker."
      ],
      github: "https://github.com/kategauransh/Red_Ink",
      live: "",
      icon: "🖨️"
    },
    {
      title: "AI Transcriber – Speech-to-Text Platform",
      tech: ["Spring Boot", "Spring AI", "MySQL", "Swagger / OpenAPI", "REST APIs"],
      description: [
        "Developed backend services for audio transcription workflows integrating Spring AI and speech-to-text models.",
        "Documented REST API contracts using Swagger/OpenAPI and implemented centralized global exception handlers.",
        "Integrated backend pipelines for transcript generation, storage, metadata retrieval, and structured JSON outputs."
      ],
      github: "https://github.com/kategauransh/Springboot-AI_powerded_Transcriber",
      live: "",
      icon: "🎙️"
    },
    {
      title: "JWT Authentication System",
      tech: ["Spring Boot", "Spring Security", "JWT", "BCrypt", "MySQL", "Spring Data JPA"],
      description: [
        "Implemented robust authentication and role-based authorization using Spring Security, JWT, and BCrypt encryption.",
        "Secured protected REST endpoints with stateless token validations and custom security filters.",
        "Designed relational persistence using Spring Data JPA for modular user and role management."
      ],
      github: "https://github.com/kategauransh/JWT-Authentication-System",
      live: "",
      icon: "🔐"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 max-w-6xl mx-auto px-4 md:px-6 space-y-10 border-t border-border-card/40">
      
      {/* Title */}
      <div className="text-left space-y-2">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-fg-app">Featured Projects</h2>
        <div className="w-12 h-1 bg-brand-primary rounded" />
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsList.map((proj, idx) => (
          <div 
            key={idx}
            className="p-5 md:p-6 rounded-2xl bg-bg-card border border-border-card flex flex-col justify-between hover:border-brand-primary/20 hover:shadow-lg transition-all duration-300 group"
          >
            <div>
              {/* Header: Title and Icon */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-bg-app border border-border-card flex items-center justify-center text-2xl group-hover:scale-105 transition-transform select-none">
                    {proj.icon}
                  </div>
                  <h3 className="font-extrabold text-base text-fg-app leading-snug text-left group-hover:text-brand-primary transition-colors">
                    {proj.title}
                  </h3>
                </div>
              </div>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.tech.map((t) => (
                  <span 
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] font-semibold bg-bg-app border border-border-card text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Description bullets */}
              <ul className="text-xs text-text-muted space-y-2 list-disc list-inside text-left leading-relaxed pl-1">
                {proj.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="marker:text-brand-primary/60">
                    <span className="relative -left-1">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Actions */}
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border-card/40 text-xs">
              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 font-bold text-text-muted hover:text-fg-app transition-colors"
              >
                <Github size={14} />
                Code Repository
              </a>
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-bold text-brand-primary hover:text-brand-primary/80 transition-colors ml-auto"
                >
                  Live Demo
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
