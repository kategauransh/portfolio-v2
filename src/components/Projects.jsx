import React, { useState } from 'react';
import { ExternalLink, X, Eye } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Collaborative Full-Stack', 'Interactive AI', 'Visual Craft & Performance'];

  const projects = [
    {
      id: 1,
      title: 'Real-Time Collaborative Project Management Board',
      category: 'Collaborative Full-Stack',
      description: 'A real-time, distributed team board featuring live task sync, multi-user concurrency conflict resolution, and fluid drag-and-drop mechanics.',
      detailedDescription: 'Built as a Linear/Trello alternative using Spring Boot, JPA, PostgreSQL, and React. It utilizes Spring WebSockets with STOMP protocol to establish a persistent bi-directional channel, broadcasting task changes to all connected users instantly. Concurrency conflicts are mitigated using client-side optimistic UI updates that dynamically rollback to the server-confirmed state on network failures. Incorporates JWT authentication with refresh token lifecycle handling, protecting REST routes while ensuring secure task and board tenant-isolation boundaries.',
      image: '/src/assets/project1.png',
      tags: ['Spring Boot', 'WebSockets', 'STOMP', 'React JS', 'TypeScript', '@dnd-kit', 'Optimistic UI', 'PostgreSQL', 'JWT Auth'],
      demoLink: '#',
      githubLink: 'https://github.com/kategauransh/collaborative-kanban-board',
      features: [
        'Persistent WebSocket STOMP channel synchronizing task updates in real-time',
        'Optimistic UI state updates using @dnd-kit with auto-rollback on server rejection',
        'Spring Security JWT Auth integration with refresh token rotating cycles',
        'Secure multi-tenant workspace separation protecting client boards'
      ]
    },
    {
      id: 2,
      title: 'AI-Powered Streaming Resume Builder',
      category: 'Interactive AI',
      description: 'A token-by-token AI CV configurator with streaming response rendering, AbortController cancellation, and prompt caching.',
      detailedDescription: 'Developed using Vite, React, and TypeScript. To create a seamless, non-blocking interface, this application implements token-by-token streaming LLM rendering. It incorporates a custom partial JSON parser that balances unclosed brackets and double-quotes in real-time, allowing live resume rendering during active network streams. Features abort controls using AbortController, client-side caching of generated profiles in localStorage (reducing LLM costs by $0.02 per query), and exponential backoff retry banners for rate-limit exceptions (HTTP 429).',
      image: '/src/assets/project2.png',
      tags: ['React JS', 'TypeScript', 'Streaming SSE', 'AbortController', 'Partial JSON Parser', 'Query Caching', 'UX Design', 'Vite'],
      demoLink: 'https://kategauransh.github.io/Portfolio-builder/',
      githubLink: 'https://github.com/kategauransh/Portfolio-builder',
      features: [
        'Token-by-token text-stream generator simulating OpenAI completions in real-time',
        'Custom structural partial JSON parser rendering incomplete data blocks',
        'Active AbortController cancellation signal immediately terminating streams',
        'LocalStorage query hash cache reducing API token usage for duplicate prompts'
      ]
    },
    {
      id: 3,
      title: 'High-Performance Data-Heavy Dashboard',
      category: 'Visual Craft & Performance',
      description: 'An interactive analytical dashboard rendering 10,000+ data points cleanly via scroll virtualization and charting optimizations.',
      detailedDescription: 'An enterprise-ready analytical dashboard built using Next.js, React 19, and TypeScript. Engineered to handle large datasets, it features a transaction log table virtualized natively with zero external dependencies, rendering only the visible viewport rows (10,000+ total rows). It integrates lazy-loaded Recharts libraries (using Next.js dynamic routing with ssr: false), saving initial bundle weight, wrapped with React.memo to prevent dashboard layout shift. Supports a gorgeous custom HSL dark mode style configuration.',
      image: '/src/assets/project3.png',
      tags: ['Next.js', 'React 19', 'TypeScript', 'Recharts', 'List Virtualization', 'React.memo', 'Dark Mode', 'Code-Splitting'],
      demoLink: 'https://kategauransh.github.io/insightboard/',
      githubLink: 'https://github.com/kategauransh/insightboard',
      features: [
        'Zero-dependency list virtualization table scrolling 10,000+ items smoothly',
        'Dynamic code-splitting dynamic() imports lazy-loading heavy charting packages',
        'Performance memoization optimizations blocking layout re-renders on page changes',
        'Refined dark mode color palette using custom design system tokens'
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
