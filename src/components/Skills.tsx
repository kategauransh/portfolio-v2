"use client";

import React, { useState } from "react";
import { Laptop, Database, Globe, Lock, Wrench } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillGroups = [
    {
      id: "frontend",
      label: "Frontend Dev",
      icon: Laptop,
      items: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript ES6+", level: 92 },
        { name: "Tailwind CSS", level: 95 },
        { name: "CSS3 / HTML5", level: 90 },
      ]
    },
    {
      id: "state",
      label: "State Store",
      icon: Database,
      items: [
        { name: "Redux Toolkit", level: 90 },
        { name: "Context API", level: 95 },
      ]
    },
    {
      id: "api",
      label: "API Integrations",
      icon: Globe,
      items: [
        { name: "REST APIs", level: 92 },
        { name: "Axios client", level: 90 },
        { name: "Fetch API", level: 88 },
      ]
    },
    {
      id: "auth",
      label: "Security",
      icon: Lock,
      items: [
        { name: "JWT Authentication", level: 88 },
        { name: "Protected Routes", level: 92 },
        { name: "Session Persistence", level: 90 },
      ]
    },
    {
      id: "tools",
      label: "Dev Tools",
      icon: Wrench,
      items: [
        { name: "Git / GitHub", level: 90 },
        { name: "Vercel hosting", level: 88 },
        { name: "Postman API client", level: 92 },
        { name: "Figma UI tool", level: 80 },
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
