import React from 'react';
import { Layers, Server, Cloud, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      title: 'Languages & Backend',
      icon: <Layers className="h-6 w-6 text-primary" />,
      skills: ['Java', 'SQL', 'Spring Boot', 'Spring MVC', 'Spring Security', 'REST APIs', 'Hibernate', 'Spring Data JPA'],
    },
    {
      title: 'Distributed Systems',
      icon: <Server className="h-6 w-6 text-cyan-400" />,
      skills: ['Apache Kafka', 'Multi-Tenancy', 'Optimistic Locking', 'Pessimistic Locking', 'Event-Driven Architecture'],
    },
    {
      title: 'Databases & Arch',
      icon: <Cloud className="h-6 w-6 text-purple-400" />,
      skills: ['MySQL', 'H2 Database', 'Query Indexing', 'Transaction Mgmt', 'Microservices', 'Clean Architecture', 'Layered CSR', 'DTO Mapping'],
    },
    {
      title: 'Tools & Workflows',
      icon: <Cpu className="h-6 w-6 text-emerald-400" />,
      skills: ['Git & GitHub', 'Maven', 'Docker', 'Docker Compose', 'Postman', 'Swagger / OpenAPI'],
    },
  ];

  return (
    <section id="about" className="relative py-24 scroll-mt-20 overflow-hidden">
      {/* Glow effect */}
      <div className="glow-bg w-[400px] h-[400px] top-[40%] right-[-10%] opacity-20 bg-indigo-500/10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Engineering High-Throughput <span className="text-gradient-primary">Backend Architectures</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            I build distributed, concurrency-safe backend engines, multi-tenant SaaS structures, and real-time Kafka pipelines.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Bio Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Who I Am
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              I am a results-oriented Java Full Stack Developer with a strong emphasis on building distributed and concurrency-safe applications. I have experience designing shared-database multi-tenant B2B architectures, securing endpoints with custom JWT filters, and building event notification pipelines with Apache Kafka.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              I focus deeply on system correctness under high concurrent loads, applying concurrency safeguards like optimistic and pessimistic locks, managing transactional state, and optimizing index definitions on relational databases like MySQL.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Distributed System Design</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Event-Driven Kafka Pipelines</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Multi-Tenant Architecture</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Database Indexing & Locks</span>
              </div>
            </div>
          </div>

          {/* Facts/Stats Card Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-40 border border-white/5 relative group hover:border-primary/20 transition-all duration-300">
              <span className="text-4xl font-extrabold text-white text-gradient-primary">2025</span>
              <div>
                <p className="text-sm font-bold text-white">B.E. IT Graduate</p>
                <p className="text-xs text-gray-500">Smt. Kashibai Navale College</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-40 border border-white/5 relative group hover:border-cyan-400/20 transition-all duration-300">
              <span className="text-4xl font-extrabold text-white text-gradient-primary">5+</span>
              <div>
                <p className="text-sm font-bold text-white">Robust Projects</p>
                <p className="text-xs text-gray-500">Distributed backends & frontends</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-40 border border-white/5 relative group hover:border-purple-400/20 transition-all duration-300">
              <span className="text-4xl font-extrabold text-white text-gradient-primary">100%</span>
              <div>
                <p className="text-sm font-bold text-white">Full Stack Focus</p>
                <p className="text-xs text-gray-500">Java, Spring Boot & React</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col justify-between h-40 border border-white/5 relative group hover:border-emerald-400/20 transition-all duration-300">
              <span className="text-4xl font-extrabold text-white text-gradient-primary">50k+</span>
              <div>
                <p className="text-sm font-bold text-white">Lines of Code</p>
                <p className="text-xs text-gray-500">Clean CSR design pattern</p>
              </div>
            </div>
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Cpu className="h-5 w-5 text-primary" />
            Core Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="glass-card glass-card-hover p-6 rounded-2xl space-y-4"
              >
                <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center border border-white/5">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold text-white">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-white/5 border border-white/10 hover:border-white/25 text-gray-300 px-2.5 py-1 rounded-md transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Philosophy & Focus */}
        <div className="mt-20 border-t border-white/5 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Cpu className="h-5 w-5 text-cyan-400" />
              Architectural Philosophy
            </h3>
            <div className="space-y-4">
              <div className="glass-card p-5 rounded-2xl border border-white/5 hover:border-cyan-400/20 transition-all duration-300">
                <h4 className="text-base font-bold text-white mb-1">Clean Boundaries</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Strictly follow the Controller → Service → Repository pattern, isolating routing and request validations from transactional database processing.
                </p>
              </div>
              <div className="glass-card p-5 rounded-2xl border border-white/5 hover:border-purple-400/20 transition-all duration-300">
                <h4 className="text-base font-bold text-white mb-1">Edge-Case Resilience</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Dedicated handlers for request validation violations, concurrency conflicts, timeouts, and unexpected execution failures.
                </p>
              </div>
              <div className="glass-card p-5 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300">
                <h4 className="text-base font-bold text-white mb-1">Development over Maintenance</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Writing clean, self-documenting code with solid naming conventions, ensuring the codebase is easier to read and scale.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Systems Engineering Focus
            </h3>
            <div className="space-y-6 text-sm text-gray-400">
              <p className="leading-relaxed italic">
                "Not claims. Not hype. Just real engineering work."
              </p>
              <p className="leading-relaxed">
                I map complete request lifecycles, ensuring reliable transitions from entry APIs to secondary integrations and storage levels.
              </p>
              <div className="relative border-l-2 border-primary/20 pl-4 space-y-4 mt-4">
                <div>
                  <h5 className="font-bold text-white text-sm">Request Lifecycle Mapping</h5>
                  <p className="text-xs text-gray-500 mt-0.5">Input filters, business domain rules, secondary service pipelines, and transaction persistence safety.</p>
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm">Security & Isolation</h5>
                  <p className="text-xs text-gray-500 mt-0.5">Spring Security role-matching and ThreadLocal context mapping for multi-tenant isolation.</p>
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm">Cloud & Docker Pipelines</h5>
                  <p className="text-xs text-gray-500 mt-0.5">File processing pipelines with AWS S3 integration, token validations, and containerized Docker environments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
