import React, { useState } from 'react';
import { ExternalLink, X, Eye } from 'lucide-react';

import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import project7 from '../assets/project7.png';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Distributed Systems', 'SaaS & Database', 'Full Stack & AI'];

  const projects = [
    {
      id: 1,
      title: 'High-Throughput Distributed Ledger & Wallet System',
      category: 'Distributed Systems',
      description: 'An atomic, concurrency-safe balance ledger engine designed to process simultaneous debit requests with optimistic concurrency verification.',
      detailedDescription: 'Built with Spring Boot, MySQL, and JPA. Features concurrency-safe wallet balance processing using JPA @Version checks to prevent balance drift under heavy concurrent loads. Models a secure, immutable ledger separating mutable values from audit transactional logs, allowing clean financial traceability.',
      image: project1,
      tags: ['Spring Boot', 'MySQL', 'JPA', 'Optimistic Locking', 'Concurrency Control', 'REST APIs'],
      demoLink: '#',
      githubLink: 'https://github.com/kategauransh/distributed-wallet-ledger',
      features: [
        'Optimistic concurrency checks with JPA @Version preventing transaction collision',
        'Immutable financial ledger separating mutable wallet balances from audit trails',
        'Validated trace safety under 50 simultaneous debit requests with automatic retries',
        'Clean Controller-Service-Repository boundaries protecting transactional states'
      ]
    },
    {
      id: 2,
      title: 'Scalable Multi-Tenant B2B SaaS Backend',
      category: 'SaaS & Database',
      description: 'A dynamic database-level multi-tenant isolation backend utilizing servlet filters and context ThreadLocal mappings.',
      detailedDescription: 'Developed using Spring Boot, Spring Security, and MySQL. Features dynamic servlet filter token decryption to retrieve tenant IDs from JWTs and map them to ThreadLocal context parameters, automatically injecting database-level tenant isolation filters via Hibernate.',
      image: project2,
      tags: ['Spring Boot', 'Spring Security', 'ThreadLocal', 'Hibernate Filters', 'MySQL', 'JWT Authentication'],
      demoLink: '#',
      githubLink: 'https://github.com/kategauransh/multi-tenant-saas-backend',
      features: [
        'Dynamic ThreadLocal tenant context propagation for automated isolation',
        'Custom JWT authorization filters extracting organizational context',
        'Hibernate database-level dynamic SQL filters preventing cross-tenant leakage',
        'Tested multi-tenant separation across 10 virtual organization scopes'
      ]
    },
    {
      id: 3,
      title: 'Real-Time Event-Driven Notification System',
      category: 'Distributed Systems',
      description: 'An asynchronous notification alerting engine built on Apache Kafka, featuring dead letter topic routing.',
      detailedDescription: 'Engineered a backend alerting pipeline on Apache Kafka, separating incoming REST request producers from async WebSocket, email, and SMS consumers. Configured exponential backoff retry parameters with Dead Letter Topic (DLT) routing and correlation tracking for complete traceability.',
      image: project3,
      tags: ['Spring Boot', 'Apache Kafka', 'Docker', 'DLQ Routing', 'Event-Driven', 'Traceability'],
      demoLink: '#',
      githubLink: 'https://github.com/kategauransh/event-driven-notification-system',
      features: [
        'Decoupled alerting consumers across 5 independent Kafka topics',
        'Exponential backoff retries with automatic Dead Letter Topic (DLT) fallback routing',
        'Injects end-to-end Correlation IDs in event headers for distributed tracking',
        'Sustained 250-300 events/sec throughput with low end-to-end latencies'
      ]
    },
    {
      id: 4,
      title: 'E-Commerce Microservices Engine',
      category: 'Distributed Systems',
      description: 'Decoupled microservice layers (Product, Order, Payment) coordinated via Netflix Eureka registry.',
      detailedDescription: 'Designed microservices registered and discovered through Eureka. Integrates Spring Cloud Gateway routing rules, Zipkin trace logging, and custom resilience timeouts.',
      image: project4,
      tags: ['Spring Boot', 'Spring Cloud Eureka', 'Zipkin Tracing', 'Microservices', 'Load Balancing'],
      demoLink: '#',
      githubLink: 'https://github.com/kategauransh/E-Commerce-Microservices',
      features: [
        'Decoupled microservice architecture routing via Spring Cloud Gateway',
        'Service discovery and load balancing via Netflix Eureka Registry',
        'Distributed tracing and diagnostic logging using Zipkin integration',
        'Resilient timeout parameters preventing cascading backend delays'
      ]
    },
    {
      id: 5,
      title: 'Spring Boot AI Audio Transcriber',
      category: 'Full Stack & AI',
      description: 'Speech-to-text transcription engine utilizing Spring AI and OpenAI Whisper API.',
      detailedDescription: 'An AI-powered application built with Spring Boot, Spring AI, and React. Integrates OpenAI Whisper API to process audio files and stream transcription results, mapped to a responsive web dashboard with speaker tag parameters.',
      image: project5,
      tags: ['Spring Boot', 'Spring AI', 'OpenAI Whisper', 'React JS', 'Audio Streams'],
      demoLink: '#',
      githubLink: 'https://github.com/kategauransh/Springboot-AI_powerded_Transcriber',
      features: [
        'Spring AI integration communicating with remote OpenAI Whisper libraries',
        'Asynchronous multi-file audio upload handling and binary streams',
        'Responsive frontend React dashboard displaying streaming transcript outputs',
        'Robust file validation and centralized error exception handling'
      ]
    },
    {
      id: 6,
      title: 'RedInk — Document Printing & Delivery',
      category: 'SaaS & Database',
      description: 'Print-on-demand e-commerce platform integrating AWS S3 storage and Razorpay checkout.',
      detailedDescription: 'Built with Spring Boot, AWS S3, Razorpay, and Spring Security. Manages customizable print preferences, secure document storage in AWS S3 buckets, Razorpay API transaction validations, and multi-state delivery tracking.',
      image: project6,
      tags: ['Spring Boot', 'AWS S3', 'Razorpay API', 'Spring Security', 'MySQL', 'File Uploads'],
      demoLink: '#',
      githubLink: 'https://github.com/kategauransh/Red_Ink',
      features: [
        'Secure document storage in AWS S3 buckets with time-limited access',
        'Razorpay API transaction gateway integration with payment verification',
        'Print configuration wizard managing double-sided, color, and layout options',
        'Spring Security role-based access separating client and admin tracking'
      ]
    },
    {
      id: 7,
      title: 'Bean Brew Coffee Shop Website',
      category: 'Full Stack & AI',
      description: 'Modern, highly interactive responsive coffee shop landing page deployed on Vercel.',
      detailedDescription: 'A gorgeous, visually optimized coffee shop landing page featuring custom menus, interactive cart flows, and smooth animations. Built with HTML, CSS, and JS, and hosted live on Vercel.',
      image: project7,
      tags: ['HTML5', 'Vanilla CSS', 'JavaScript', 'Vercel Deploy', 'Responsive UI'],
      demoLink: 'https://brew-beans-hazel.vercel.app/',
      githubLink: 'https://github.com/kategauransh/Brew-Beans',
      features: [
        'Modern responsive typography and layout using custom CSS variables',
        'Interactive menu shopping cart and dynamic cost calculations',
        'Polished micro-animations for high-end hover effects and transitions',
        'Deployed live for public preview at brew-beans-hazel.vercel.app'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 scroll-mt-20 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="glow-bg w-[400px] h-[400px] bottom-0 left-[-10%] opacity-25 bg-cyan-500/10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-primary">Projects & Case Studies</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Here is a selection of my latest projects, combining backend performance audits with interactive frontend structures.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/10 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden group flex flex-col h-full cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Area */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-900 border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3';
                  }}
                />
                <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/95 text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    <Eye className="h-5 w-5" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-[#121826]/90 backdrop-blur-md border border-white/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-lg">
                  {project.category}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] md:text-xs bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] md:text-xs text-gray-500 px-1 py-0.5">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#090E1A]/80 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-3xl glass-card rounded-3xl overflow-hidden shadow-2xl z-10 my-8 max-h-[90vh] flex flex-col animate-[fadeIn_0.3s_ease-out]">
            {/* Header / Close Button */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-dark-card/50">
              <span className="text-sm font-semibold text-primary">{selectedProject.category} Case Study</span>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Container */}
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-grow">
              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-900 border border-white/5">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3';
                  }}
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">{selectedProject.title}</h3>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {selectedProject.detailedDescription}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-white">Key Features Implemented:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-400">
                      <span className="text-primary mr-2 font-bold select-none">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-white">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer / Links */}
            <div className="flex flex-wrap justify-end gap-3 px-6 py-4 border-t border-white/5 bg-dark-card/50">
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-xs md:text-sm font-semibold text-gray-300 bg-white/5 border border-white/10 hover:border-white/20 hover:text-white rounded-xl transition-all"
              >
                <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>View Source</span>
              </a>
              {selectedProject.demoLink !== '#' && (
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-xs md:text-sm font-semibold text-white bg-primary hover:bg-primary-600 rounded-xl transition-all"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <span>Launch Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
