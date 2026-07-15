import React, { useState } from 'react';
import { ExternalLink, X, Eye } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Distributed Systems', 'SaaS Backends', 'Event-Driven & AI', 'Frontend'];

  const projects = [
    {
      id: 1,
      title: 'High-Throughput Ledger & Wallet System',
      category: 'Distributed Systems',
      description: 'A distributed wallet and ledger system using optimistic locking on balance records to guarantee atomic updates under heavy concurrent access.',
      detailedDescription: 'This wallet and ledger system was engineered using Spring Boot, JPA, and MySQL. It uses optimistic locking (JPA @Version) on wallet balances to guarantee atomic updates under high concurrent loads, favoring throughput over pessimistic locks for read-heavy operations. The system models an immutable financial ledger (Wallet, Transaction, LedgerEntry, TransactionAudit) to separate mutable balance states from an append-only audit trail. It has been validated with 40-50 simultaneous debit requests against shared wallets across 1,000+ wallets and 20,000+ transaction records, confirming zero balance drift.',
      image: '/src/assets/project1.png',
      tags: ['Spring Boot', 'MySQL', 'JPA', 'Hibernate', 'Optimistic Locking', 'Concurrency'],
      demoLink: '#',
      githubLink: 'https://github.com/kategauransh/distributed-wallet-ledger',
      features: [
        'JPA @Version optimistic locking to secure concurrent wallet balance modifications',
        'Immutable ledger audit trail (Wallet, Transaction, LedgerEntry, TransactionAudit)',
        'Validated safety across 20,000+ transaction records with zero balance drift',
        'Automatic conflict-retry block handling concurrency debit spikes'
      ]
    },
    {
      id: 2,
      title: 'Scalable Multi-Tenant B2B SaaS Backend',
      category: 'SaaS Backends',
      description: 'A shared-database, multi-tenant B2B SaaS backend implementing automated JWT repository-level filtering and thread-level context isolation.',
      detailedDescription: 'A scalable B2B SaaS backend built using Spring Boot, Spring Security, and MySQL. It uses a shared-database, multi-tenant discriminator pattern (tenant_id) to eliminate per-tenant schema provisioning. A custom JWT filter extracts the tenant context from authentication tokens and propagates it via ThreadLocal, enabling automatic repository-level filtering without requiring manual query edits. Delivered core SaaS modules including Users, Roles, Customers, Projects, Tasks, and Invoices, ensuring complete tenant isolation verified by integration testing across 10 tenant organizations, 100+ users, and 3,000+ tasks.',
      image: '/src/assets/project2.png',
      tags: ['Spring Boot', 'Spring Security', 'MySQL', 'JWT', 'ThreadLocal', 'Multi-Tenancy'],
      demoLink: '#',
      githubLink: 'https://github.com/kategauransh/multi-tenant-saas-backend',
      features: [
        'Shared-database multi-tenant structure using tenant_id discriminator',
        'ThreadLocal-driven tenant context propagation via custom Spring Security filter',
        'Automated repository-level query tenant isolation filtering',
        'Verified security across 10 organizations, 100+ users, and 3,000+ tasks'
      ]
    },
    {
      id: 3,
      title: 'E-Commerce Microservices Engine',
      category: 'Distributed Systems',
      description: 'Architected and developed scalable microservices (Product, Order, and Payment services) using Spring Boot, Spring Cloud, and service discovery.',
      detailedDescription: 'A scalable, enterprise-ready microservices architecture built using Spring Boot, Spring Cloud, and MySQL. It divides system capabilities into independent microservice modules: Product, Order, and Payment. It utilizes Eureka for discovery, Spring Cloud Gateway for routing, Zipkin for request tracing, and Apache Kafka for asynchronous communication.',
      image: '/src/assets/project3.png',
      tags: ['Spring Boot', 'Spring Cloud', 'MySQL', 'Eureka', 'Zipkin', 'Microservices'],
      demoLink: '#',
      githubLink: 'https://github.com/kategauransh/E-Commerce-Microservices',
      features: [
        'Decoupled microservice layers (Product, Order, and Payment) running independently',
        'Eureka service registry facilitating automated client-side load balancing',
        'Centralized Routing and security filters via Spring Cloud Gateway',
        'Distributed tracing using Zipkin to monitor query flow across modules'
      ]
    },
    {
      id: 4,
      title: 'Spring Boot AI Audio Transcriber',
      category: 'Event-Driven & AI',
      description: 'An AI-powered speech-to-text service utilizing Spring AI for backend transcription processing and React JS frontend.',
      detailedDescription: 'Spring Boot AI Audio Transcriber utilizes local AI pipelines and cloud integrations to provide fast audio transcripts. Users upload audio files which are processed using Spring AI Whisper APIs and formatted into speak-labeled scripts with short summarized highlights.',
      image: '/src/assets/project4.png',
      tags: ['Spring Boot', 'React JS', 'Spring AI', 'OpenAI Whisper', 'Tailwind CSS', 'Docker'],
      demoLink: '#',
      githubLink: 'https://github.com/kategauransh/Springboot-AI_powerded_Transcriber',
      features: [
        'Spring AI Whisper framework integration for backend transcription audio engines',
        'Intuitive React JS client frontend interface displaying speaker tags',
        'Centralized exception handlers processing varied audio mime formats',
        'Docker containerization setup for deployment replication'
      ]
    },
    {
      id: 5,
      title: 'RedInk — Document Printing & Delivery',
      category: 'SaaS Backends',
      description: 'A production-ready Spring Boot backend for user authentication, Razorpay payments, and AWS S3 secure file storage.',
      detailedDescription: 'RedInk is a robust document printing and delivery engine built using Spring Boot, MySQL, and Docker. It features an Intelligent Pricing Engine that dynamically calculates checkout amounts based on document parameters (color, double-sided, binding, copies). It integrates secure cloud document storage with AWS S3, securing user sessions and role permissions with Spring Security. Built around a Controller-Service-Repository layout, it separates order routing from price computations and integrates Razorpay for secure payment gateway processing.',
      image: '/src/assets/project5.png',
      tags: ['Spring Boot', 'MySQL', 'AWS S3', 'Razorpay', 'Spring Security', 'Docker'],
      demoLink: '#',
      githubLink: 'https://github.com/kategauransh/Red_Ink',
      features: [
        'Intelligent Pricing Engine calculating costs on print-options dynamically',
        'Secure Cloud Storage bucket integration with AWS S3 for documents',
        'Seamless integration with Razorpay Payment SDK for checkout processing',
        'Robust role-based authorization rules using Spring Security'
      ]
    },
    {
      id: 6,
      title: 'Bean Brew Coffee Shop Website',
      category: 'Frontend',
      description: 'A modern, responsive coffee shop website featuring clean HTML/CSS visual aesthetics, UX consistency, and Vercel hosting.',
      detailedDescription: 'Bean Brew is a modern frontend coffee shop landing page built using clean, structured HTML, CSS, and lightweight JavaScript. The project focuses heavily on responsive design aesthetics that scale across mobile, tablet, and desktop screens, establishing consistent UX hierarchies, fast load times, and automated Vercel hosting integrations.',
      image: '/src/assets/project6.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Vercel hosting', 'UX Design'],
      demoLink: 'https://brew-beans-hazel.vercel.app/',
      githubLink: 'https://github.com/kategauransh/Brew-Beans',
      features: [
        'Responsive layout scaling layouts smoothly from mobile to desktop sizes',
        'Consistent and modern color palette designed for visual warmth and contrast',
        'Fast page load times with optimized asset sizes and clean stylesheets',
        'Continuous integration deployment pipelines hosted on Vercel'
      ]
    },
    {
      id: 7,
      title: 'Real-Time Event-Driven Notification System',
      category: 'Event-Driven & AI',
      description: 'An event-driven notification engine built on Apache Kafka, featuring dead letter queues and exponential-backoff retries.',
      detailedDescription: 'An event-driven notification engine built using Spring Boot, Apache Kafka, and Docker. It decouples event producers from consumer microservices across 5 different topics (for Email, SMS, In-App, and WebSockets), enabling independent channel scaling. The system implements an exponential-backoff retry mechanism with Dead Letter Topic (DLT) routing for delivery failures, tagging events with unique correlation IDs for end-to-end trace tracking. It sustains a throughput of 250-300 events/sec at 70-120ms average end-to-end latency across 15,000+ test events.',
      image: '/src/assets/project7.png',
      tags: ['Spring Boot', 'Apache Kafka', 'Docker', 'Event-Driven', 'Dead Letter Topic', 'Kafka Metrics'],
      demoLink: '#',
      githubLink: 'https://github.com/kategauransh/event-driven-notification-system',
      features: [
        'Decoupled multi-channel notification consumers across 5 Kafka topics',
        'Exponential backoff retries with Dead Letter Topic routing fallback',
        'Correlation IDs tagging to ensure complete end-to-end event traceability',
        'Sustained 250-300 events/sec throughput with low end-to-end latency (70-120ms)'
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
