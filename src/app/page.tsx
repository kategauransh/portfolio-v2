"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import { Terminal } from "lucide-react";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-bg-app text-fg-app selection:bg-brand-primary/20 selection:text-brand-primary flex flex-col justify-between">
      {/* Navigation Sticky Header */}
      <Header />

      {/* Main Sections Wrapper */}
      <main className="flex-1 w-full pb-16">
        
        {/* Hero Banner Section */}
        <Hero />

        {/* Biography Section */}
        <About />

        {/* Skill visualizer */}
        <Skills />

        {/* Projects Cards Showcase */}
        <Projects />

        {/* Education & Training timelines */}
        <Timeline />

        {/* Contact Form Details */}
        <Contact />

      </main>

      {/* Footer Block */}
      <footer className="w-full border-t border-border-card bg-bg-card/50 py-8 text-center text-xs font-semibold text-text-muted transition-colors">
        <div className="mx-auto max-w-6xl px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Gauransh. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <Terminal size={12} className="text-brand-primary" />
            <span>Built with Next.js 16, React 19, & Tailwind CSS v4</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
