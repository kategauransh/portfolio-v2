"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setIsScrolled(window.scrollY > 20);

      // Scroll progress computation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled 
        ? "border-b border-border-card/85 bg-bg-card/75 backdrop-blur-md shadow-sm" 
        : "bg-transparent border-b border-transparent"
    }`}>
      {/* Dynamic Scroll Progress Bar at the top edge */}
      <div 
        className="h-[3px] bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-100 absolute top-0 left-0"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="mx-auto max-w-6xl h-16 px-4 md:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:scale-105 transition-transform duration-200">
            <Code2 size={16} />
          </div>
          <span className="font-bold tracking-tight text-fg-app text-sm">
            Gauransh<span className="text-brand-primary">.dev</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-text-muted hover:text-fg-app transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-primary after:transition-all after:duration-250 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-1 py-1.5 px-3 rounded-lg bg-brand-primary text-white text-xs font-bold shadow-sm shadow-brand-primary/10 hover:bg-brand-primary/95 transition-all duration-200 cursor-pointer"
          >
            Hire Me
            <ArrowUpRight size={13} />
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 -mr-2 rounded-lg text-text-muted hover:bg-bg-card hover:text-fg-app md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 bg-bg-card border-b border-border-card p-6 shadow-xl flex flex-col gap-4 animate-fade-in md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-text-muted hover:text-fg-app py-1.5 border-b border-border-card/40 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-brand-primary text-white font-bold text-xs"
          >
            Hire Me
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
