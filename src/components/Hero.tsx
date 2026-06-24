"use client";

import React from "react";
import { ArrowRight, Terminal, Sparkles } from "lucide-react";
import { Github, Linkedin } from "@/components/SocialIcons";

export default function Hero() {
  const keywords = ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"];

  return (
    <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-4rem)] animate-slide-up">
      
      {/* Left Column: Intro */}
      <div className="lg:col-span-7 space-y-6 text-left">
        {/* Sparkle badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[11px] font-bold text-brand-primary uppercase tracking-wider">
          <Sparkles size={11} />
          Available for Opportunities
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-fg-app leading-tight">
            Crafting Interactive <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Web Experiences
            </span>
          </h1>
          <p className="text-sm md:text-base text-text-muted max-w-lg leading-relaxed">
            Hi, I&apos;m Gauransh, a Frontend Engineer focused on building responsive, high-performance web applications using React, Next.js, TypeScript, and modern frontend practices.
          </p>
        </div>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {keywords.map((word) => (
            <span 
              key={word}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-bg-card border border-border-card text-fg-app hover:border-brand-primary/30 transition-colors"
            >
              {word}
            </span>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#projects"
            className="flex items-center gap-2 py-2 px-4 rounded-xl bg-brand-primary text-white text-xs font-bold shadow-md shadow-brand-primary/15 hover:bg-brand-primary/95 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            Explore Projects
            <ArrowRight size={14} />
          </a>
          <a
            href="#contact"
            className="py-2 px-4 rounded-xl border border-border-card text-xs font-bold text-fg-app hover:bg-bg-card transition-colors cursor-pointer"
          >
            Get In Touch
          </a>
        </div>

        {/* Social connections */}
        <div className="flex items-center gap-4 pt-6 border-t border-border-card/40 max-w-xs text-text-muted">
          <span className="text-[10px] font-bold uppercase tracking-wider">Connect:</span>
          <a href="https://github.com/kategauransh" target="_blank" rel="noreferrer" className="hover:text-fg-app transition-colors p-1" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/gauranshkate26" target="_blank" rel="noreferrer" className="hover:text-fg-app transition-colors p-1" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      {/* Right Column: Visual Mock IDE block */}
      <div className="lg:col-span-5 hidden lg:block">
        <div className="rounded-2xl border border-border-card bg-bg-card p-4 shadow-2xl relative overflow-hidden group hover:border-brand-primary/20 transition-all duration-300">
          
          {/* Header IDE */}
          <div className="flex items-center justify-between border-b border-border-card pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-brand-primary" />
              <span className="text-[10px] font-mono font-semibold text-text-muted">gauransh.ts</span>
            </div>
            <div className="flex gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
          </div>

          {/* IDE Terminal contents */}
          <div className="font-mono text-left space-y-2 text-xs leading-relaxed overflow-x-auto">
            <p className="text-brand-primary"><span className="text-text-muted">const</span> developer <span className="text-text-muted">=</span> <span className="text-fg-app">{"{"}</span></p>
            <p className="pl-4 text-text-muted">name: <span className="text-brand-secondary">{"\"Gauransh\""}</span>,</p>
            <p className="pl-4 text-text-muted">role: <span className="text-brand-secondary">{"\"Frontend Engineer\""}</span>,</p>
            <p className="pl-4 text-text-muted">location: <span className="text-brand-secondary">{"\"India\""}</span>,</p>
            <p className="pl-4 text-text-muted">focus: <span className="text-fg-app">{"[\"UI/UX\", \"State Flow\", \"Performance\"]"}</span>,</p>
            <p className="pl-4 text-text-muted">tools: <span className="text-fg-app">{"[\"NextJS\", \"TS\", \"Redux\", \"Tailwind\"]"}</span></p>
            <p className="text-brand-primary"><span className="text-fg-app">{"}"}</span>;</p>
            
            <p className="pt-2 text-text-muted">{"// Ready to translate claims into evidence"}</p>
            <p className="text-brand-secondary">developer<span className="text-brand-primary">.</span>buildFlagshipProjects<span className="text-brand-primary">()</span>;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
