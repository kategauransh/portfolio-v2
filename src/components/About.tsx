"use client";

import React from "react";
import { User, Award, ShieldCheck } from "lucide-react";

export default function About() {
  const metrics = [
    { value: "4+", label: "Flagship Web Projects", icon: Award },
    { value: "100%", label: "Full-Stack System Delivery", icon: ShieldCheck },
    { value: "Naresh i", label: "Java Full Stack Training", icon: User },
  ];

  return (
    <section id="about" className="py-16 md:py-20 max-w-6xl mx-auto px-4 md:px-6 space-y-10 border-t border-border-card/40">
      
      {/* Title */}
      <div className="text-left space-y-2">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-fg-app">About Me</h2>
        <div className="w-12 h-1 bg-brand-primary rounded" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Biography */}
        <div className="lg:col-span-7 space-y-4 text-left leading-relaxed text-sm md:text-base text-text-muted">
          <p>
            I am a dedicated **Java Full Stack Developer** who loves designing and building robust backend architectures alongside highly interactive, modern web frontends. My engineering philosophy revolves around clean API contracts, layered designs (Controller-Service-Repository), efficient state flow, and fully containerized microservice workflows.
          </p>
          <p>
            With formal training in **Java Full Stack Development** at **Naresh i Technologies**, I have extensive experience bootstrapping Spring Boot backend services, securing endpoints with Spring Security and JWT, using Hibernate/JPA for relational persistence, and containerizing runtimes using Docker.
          </p>
          <p>
            On the frontend, I craft smooth user interfaces using **React, Next.js, and TypeScript**. I focus on responsive styles, client-side input validations, protected dashboards, and clean API integration. This allows me to deliver fully integrated, end-to-end web applications.
          </p>
        </div>

        {/* Right Column: Key metrics grid */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-bg-card border border-border-card flex items-center gap-4 hover:border-brand-primary/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0">
                  <Icon size={20} />
                </div>
                <div className="text-left">
                  <div className="text-lg font-extrabold text-fg-app">{m.value}</div>
                  <div className="text-xs text-text-muted mt-0.5">{m.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
