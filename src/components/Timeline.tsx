"use client";

import React from "react";
import { GraduationCap, Briefcase, Award, Calendar } from "lucide-react";

export default function Timeline() {
  const events = [
    {
      title: "Bachelor of Engineering in Information Technology",
      subtitle: "Smt. Kashibai Navale College of Engineering, Pune",
      date: "2021 - 2025",
      icon: GraduationCap,
      details: [
        "Specialized in software engineering, data structures, algorithms, and computer systems.",
        "Graduated with a cumulative GPA score of 6.91/10."
      ]
    },
    {
      title: "Java Full Stack Development Program",
      subtitle: "Naresh i Technologies",
      date: "Professional Training",
      icon: Briefcase,
      details: [
        "Completed hands-on training in Core Java, Advanced Java, Spring Boot, Hibernate, JPA, REST APIs, and MySQL.",
        "Built project-based applications with layered architecture, request validation, exception handling, and API testing.",
        "Practiced backend development workflows using Git, GitHub, Maven, Postman, and Docker fundamentals."
      ]
    },
    {
      title: "Java Full Stack Development Certification",
      subtitle: "Naresh i Technologies",
      date: "Credential Milestone",
      icon: Award,
      details: [
        "Earned formal certification validating competencies in enterprise Java application development, relational persistence, Spring security, and deployment pipelines."
      ]
    }
  ];

  return (
    <section id="timeline" className="py-16 md:py-20 max-w-6xl mx-auto px-4 md:px-6 space-y-10 border-t border-border-card/40">
      
      {/* Title */}
      <div className="text-left space-y-2">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-fg-app">Education & Training</h2>
        <div className="w-12 h-1 bg-brand-primary rounded" />
      </div>

      {/* Timeline track container */}
      <div className="relative pl-6 sm:pl-8 space-y-8 max-w-4xl text-left">
        {/* Vertical line indicator */}
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 timeline-line opacity-50" />

        {events.map((e, idx) => {
          const Icon = e.icon;
          return (
            <div key={idx} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 w-6 h-6 rounded-full bg-bg-app border-2 border-brand-primary flex items-center justify-center text-brand-primary shadow-sm group-hover:scale-110 transition-transform duration-200">
                <Icon size={12} className="stroke-[2.5px]" />
              </div>

              {/* Event Card */}
              <div className="p-5 rounded-2xl bg-bg-card border border-border-card hover:border-brand-primary/15 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-extrabold text-sm md:text-base text-fg-app leading-snug">
                      {e.title}
                    </h3>
                    <p className="text-xs text-brand-primary font-semibold mt-0.5">
                      {e.subtitle}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 py-0.5 px-2 rounded-full bg-bg-app border border-border-card text-[10px] font-bold text-text-muted shrink-0 self-start">
                    <Calendar size={10} />
                    {e.date}
                  </span>
                </div>

                {/* Details list */}
                <ul className="text-xs text-text-muted space-y-1.5 list-disc list-inside leading-relaxed">
                  {e.details.map((detail, dIdx) => (
                    <li key={dIdx} className="marker:text-brand-primary/60">
                      <span className="relative -left-1">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
