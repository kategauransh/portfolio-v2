import React from 'react';
import { ArrowUpRight, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="glow-bg w-[400px] h-[400px] top-[10%] left-[-10%] opacity-40"></div>
      <div className="glow-bg w-[500px] h-[500px] bottom-[10%] right-[-10%] opacity-40 bg-cyan-500/10"></div>
      <div className="glow-bg w-[300px] h-[300px] top-[50%] left-[40%] opacity-20 bg-indigo-500/10"></div>

      {/* Grid Overlay background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center self-center lg:self-start space-x-2 px-3 py-1.5 rounded-full glass-card border border-white/5 text-xs font-semibold text-primary tracking-wide">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Freelance & Full-time Roles</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gradient">
            Java Backend <br />
            Developer <br />
            <span className="text-gradient-primary">Building Scalable Systems.</span>
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Hi, I'm <strong className="text-white font-semibold">Gauransh Kate</strong>. I specialize in building distributed, concurrency-safe backend systems with Spring Boot, Hibernate, MySQL, and event-driven architectures with Apache Kafka.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 justify-center lg:justify-start pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-primary rounded-xl hover:bg-primary-600 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-gray-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Let's Connect
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start items-center space-x-6 pt-4 text-gray-400">
            <a href="https://github.com/kategauransh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="GitHub">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/gauranshkate26" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="mailto:gauranshkate.it@gmail.com" className="hover:text-white transition-colors duration-200" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
            <div className="h-4 w-px bg-white/10"></div>
            <a
              href="/Gauransh_Kate_Resume.pdf"
              download="Gauransh_Kate_Resume.pdf"
              className="inline-flex items-center space-x-2 text-xs font-semibold hover:text-white transition-colors duration-200"
            >
              <Download className="h-4 w-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Visual Graphic Area */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Pulsing Backglows */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-cyan-500/30 rounded-full blur-2xl animate-pulse-slow"></div>
            
            {/* Spinning decorative borders */}
            <div className="absolute inset-[-8px] rounded-full border border-dashed border-primary/40 animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute inset-[-18px] rounded-full border border-dotted border-white/10 animate-[spin_40s_linear_infinite_reverse]"></div>

            {/* Main Avatar Container */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl glass-card flex items-center justify-center p-2 bg-dark-card/45">
              <img
                src="/src/assets/avatar.png"
                alt="Gauransh Kate Avatar"
                className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3';
                }}
              />
            </div>
            
            {/* Small Floating badge */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-[#121826]/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-2xl flex items-center space-x-2 shadow-xl hover:-translate-y-1 transition-transform">
              <span className="text-xl">🚀</span>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Specialist</p>
                <p className="text-xs text-white font-bold">Spring Boot & Kafka</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
