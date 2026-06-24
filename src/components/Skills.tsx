"use client";

import React, { useState } from "react";
import { Laptop, Database, Globe, Lock, Wrench, Layout } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillGroups = [
    {
      id: "frontend",
      label: "Frontend Stack",
      icon: Layout,
      items: [
        { name: "React.js & Next.js", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS / CSS Modules", level: 95 },
        { name: "Redux Toolkit / State", level: 88 },
      ]
    },
    {
      id: "backend",
      label: "Spring Backend",
      icon: Laptop,
      items: [
        { name: "Spring Boot", level: 95 },
        { name: "Spring MVC", level: 90 },
        { name: "Hibernate / JPA", level: 92 },
        { name: "Spring Data JPA", level: 92 },
      ]
    },
    {
      id: "languages",
      label: "Core Languages",
      icon: Database,
      items: [
        { name: "Java (Core & OOP)", level: 95 },
        { name: "SQL Querying", level: 90 },
        { name: "Java 8 Streams", level: 88 },
        { name: "Multithreading", level: 85 },
      ]
    },
    {
      id: "api",
      label: "REST APIs & Doc",
      icon: Globe,
      items: [
        { name: "RESTful Web Services", level: 95 },
        { name: "OpenAPI / Swagger", level: 90 },
        { name: "Postman Client", level: 92 },
      ]
    },
    {
      id: "security",
      label: "Auth & Security",
      icon: Lock,
      items: [
        { name: "Spring Security", level: 88 },
        { name: "JWT Token Auth", level: 90 },
        { name: "BCrypt Encryption", level: 92 },
      ]
    },
    {
      id: "tools",
      label: "DevOps & Databases",
      icon: Wrench,
      items: [
        { name: "Docker & Compose", level: 88 },
        { name: "Git & GitHub Versioning", level: 92 },
        { name: "MySQL / PostgreSQL", level: 92 },
        { name: "Maven Build Tool", level: 90 },
      ]
    }
  ];

  const currentGroup = skillGroups.find((g) => g.id === activeCategory) || skillGroups[0];

  return (
    <section id="skills" className="py-16 md:py-20 max-w-6xl mx-auto px-4 md:px-6 space-y-10 border-t border-border-card/40">
      
      {/* Title */}
      <div className="text-left space-y-2">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-fg-app">Technical Expertise</h2>
        <div className="w-12 h-1 bg-brand-primary rounded" />
      </div>

      {/* Tabs and Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Tab Selectors */}
        <div className="lg:col-span-4 flex flex-wrap lg:flex-col gap-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            const isActive = activeCategory === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setActiveCategory(group.id)}
                className={`flex-1 lg:flex-none flex items-center justify-center lg:justify-start gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/10"
                    : "bg-bg-card border border-border-card text-text-muted hover:text-fg-app hover:border-brand-primary/20"
                }`}
              >
                <Icon size={16} />
                {group.label}
              </button>
            );
          })}
        </div>

        {/* Right Column: Skill Progress bars */}
        <div className="lg:col-span-8 p-6 rounded-2xl bg-bg-card border border-border-card min-h-[280px] flex flex-col justify-center gap-5 animate-fade-in">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-primary mb-2">
            {currentGroup.label} Suite
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {currentGroup.items.map((skill) => (
              <div key={skill.name} className="space-y-1.5 text-left">
                <div className="flex justify-between text-xs font-bold text-fg-app">
                  <span>{skill.name}</span>
                  <span className="text-text-muted">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-bg-app border border-border-card/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
