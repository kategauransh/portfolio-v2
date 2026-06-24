"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/SocialIcons";

export default function Projects() {
  const projectsList = [
    {
      title: "Reading – Xerox Printing & Delivery Platform",
      tech: ["Spring Boot", "MySQL", "JPA / Hibernate", "Docker", "PostgreSQL", "REST APIs"],
      description: [
        "Built a document printing and delivery platform where users upload PDFs, configure print options, and place orders online.",
        "Developed REST APIs for order management, pricing calculation, and document processing using Spring Boot and PostgreSQL.",
        "Designed the backend using Controller–Service–Repository architecture and containerized the application with Docker."
      ],
      github: "https://github.com/kategauransh/Red_Ink",
      live: "",
      icon: "🖨️"
    },
    {
      title: "AI Transcriber – Speech-to-Text Platform",
      tech: ["Spring Boot", "Spring AI", "MySQL", "Swagger / OpenAPI", "REST APIs"],
      description: [
        "Developed backend services for audio transcription workflows using Spring Boot and REST APIs.",
        "Documented API contracts using Swagger/OpenAPI and implemented centralized exception handling.",
        "Integrated backend workflows for transcript generation, retrieval, and structured response handling."
      ],
      github: "https://github.com/kategauransh/Springboot-AI_powerded_Transcriber",
      live: "",
      icon: "🎙️"
    },
    {
      title: "JWT Authentication System",
      tech: ["Spring Boot", "Spring Security", "JWT", "MySQL", "BCrypt", "Hibernate", "Spring Data JPA"],
      description: [
        "Implemented authentication and authorization using Spring Security, JWT, and BCrypt password encryption.",
        "Secured protected REST endpoints with token validation and role-based access control.",
        "Designed persistence using Hibernate and Spring Data JPA for user and role management."
      ],
      github: "https://github.com/kategauransh/JWT-Authentication-System",
      live: "",
      icon: "🔐"
    },
    {
      title: "E-Commerce Microservices Backend",
      tech: ["Java", "Spring Boot", "Eureka Discovery", "RabbitMQ", "Zipkin", "Microservices"],
      description: [
        "Architected and developed scalable microservices (Product, Order, Payment) using Spring Boot.",
        "Implemented service discovery with Eureka, load balancing, and distributed tracing with Zipkin.",
        "Integrated RabbitMQ for asynchronous order processing and robust inter-service communication."
      ],
      github: "https://github.com/kategauransh/E-Commerce-Microservices",
      live: "",
      icon: "⚙️"
    },
    {
      title: "Brew Beans -- Coffee Shop Landing Page",
      tech: ["HTML", "CSS", "JavaScript", "Vercel"],
      description: [
        "Designed a beautiful, fully responsive website for a coffee shop client.",
        "Implemented high-end CSS layouts, modern custom navigation menus, and animations.",
        "Deployed live to Vercel for high performance and smooth page transitions."
      ],
      github: "https://github.com/kategauransh/Brew-Beans",
      live: "https://brew-beans-hazel.vercel.app",
      icon: "☕"
    },
    {
      title: "Data Structures & Algorithms in Java",
      tech: ["Java", "Algorithms", "Data Structures"],
      description: [
        "Coded standard data structures (trees, graphs, lists) and common algorithms in Java.",
        "Optimized algorithmic runtime complexities using dynamic programming principles.",
        "Built modular, reusable class structures to test sorting and traversal solutions."
      ],
      github: "https://github.com/kategauransh/DSA_codes",
      live: "",
      icon: "🧩"
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
