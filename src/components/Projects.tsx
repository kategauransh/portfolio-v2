"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/SocialIcons";

export default function Projects() {
  const projectsList = [
    {
      title: "InsightBoard -- Analytics Dashboard",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "SVG Charts"],
      description: [
        "Built a responsive analytics platform for visualizing business metrics and user activity.",
        "Integrated REST APIs and implemented loading, error, and state management workflows.",
        "Developed reusable UI components following modern frontend architecture best practices."
      ],
      github: "https://github.com/kategauransh/insightboard",
      live: "https://kategauransh.github.io/insightboard/",
      icon: "📊"
    },
    {
      title: "StoreFlow -- E-Commerce Frontend",
      tech: ["React.js", "Redux Toolkit", "TypeScript", "Tailwind CSS"],
      description: [
        "Developed product catalog, shopping cart, and checkout workflows for an online store.",
        "Implemented centralized state management using Redux Toolkit.",
        "Integrated backend APIs for products, orders, and authentication."
      ],
      github: "https://github.com/kategauransh/storeflow",
      live: "https://kategauransh.github.io/storeflow/",
      icon: "🛒"
    },
    {
      title: "Portfolio V2 -- Personal Portfolio",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Intersection Observer"],
      description: [
        "Developed a modern portfolio website with reusable component architecture.",
        "Implemented smooth animations and optimized responsiveness across devices.",
        "Deployed on GitHub Pages with SEO-friendly structure and performance optimizations."
      ],
      github: "https://github.com/kategauransh/portfolio-v2",
      live: "https://kategauransh.github.io/portfolio-v2/",
      icon: "✨"
    },
    {
      title: "IdentityFlow -- Authentication UI",
      tech: ["React.js", "JWT Authentication", "CSS Modules"],
      description: [
        "Built login, registration, and protected-route workflows.",
        "Integrated JWT authentication APIs and session persistence.",
        "Implemented authorization-aware navigation and secure route handling."
      ],
      github: "https://github.com/kategauransh/identityflow",
      live: "https://kategauransh.github.io/identityflow/",
      icon: "🔐"
    },
    {
      title: "E-Commerce Microservices Backend",
      tech: ["Java", "Spring Boot", "Eureka Discovery", "RabbitMQ", "Zipkin"],
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
      title: "BookTown -- Online Bookstore Layout",
      tech: ["HTML", "CSS", "JavaScript"],
      description: [
        "Developed an online bookstore landing page displaying custom grids and hover listings.",
        "Focused on semantic HTML and responsive typography for a clean user interface.",
        "Implemented interactive search and filter UI mock workflows locally."
      ],
      github: "https://github.com/kategauransh/BookTown-",
      live: "",
      icon: "📚"
    },
    {
      title: "Cold Email Automation Tool",
      tech: ["JavaScript", "Node.js", "SMTP Protocol", "File Parser"],
      description: [
        "Created a command-line script in JavaScript to automate personalized cold email marketing campaigns.",
        "Parsed contact lists dynamically and integrated secure SMTP mailing client protocols.",
        "Configured tracking of sent logs and basic template variable substitutions."
      ],
      github: "https://github.com/kategauransh/Cold-Email-Automation",
      live: "",
      icon: "📧"
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
