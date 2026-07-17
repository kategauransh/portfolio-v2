import { Briefcase, GraduationCap, Calendar, ArrowUpRight } from 'lucide-react';

export default function Timeline() {
  const experiences = [
    {
      role: 'Java Development Course',
      company: 'Naresh i Technologies',
      period: '2025 - 2026',
      description: 'Rigorous advanced course program covering Core Java, Advanced Java, multithreading, collections, JDBC, Hibernate, and Spring Boot framework integration.',
    }
  ];

  const education = [
    {
      degree: 'Advanced Software Engineering Job Simulation',
      institution: 'Walmart Global Tech (Forage)',
      period: '2026',
      description: 'Completed practical tasks verifying competencies in Advanced Data Structures, Software Architecture, Relational Database Design, and Data Munging.',
      link: 'Walmart_Global_Tech_Certificate.pdf'
    },
    {
      degree: 'Bachelor of Engineering in IT',
      institution: 'Smt. Kashibai Navale College of Engineering, Pune',
      period: '2021 - 2025',
      description: 'Academic studies focusing on Software Engineering, Database Systems, Computer Networks, and Information Technology.',
    },
    {
      degree: 'Higher Secondary (Class XII), Science',
      institution: "St. Xavier's International School",
      period: '2020',
      description: 'Score: 76% | Focused studies in Physics, Chemistry, and Mathematics.',
    },
    {
      degree: 'Secondary School (Class X)',
      institution: "St. Xavier's International School",
      period: '2018',
      description: 'Score: 64% | General academic secondary school curriculum.',
    }
  ];

  return (
    <section id="experience" className="relative py-24 scroll-mt-20 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="glow-bg w-[500px] h-[500px] top-[10%] right-[-10%] opacity-20 bg-indigo-500/10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
            Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-gradient-primary">Education Timeline</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            A comprehensive look at my professional timeline, academic milestones, and development training.
          </p>
        </div>

        {/* Dual Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Work Experience Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-xl border border-primary/30">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <span>Training & Coursework</span>
            </h3>

            <div className="relative border-l border-white/10 pl-6 ml-3 space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Bullet Node */}
                  <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 rounded-full bg-dark-bg border-2 border-primary group-hover:bg-primary transition-colors duration-300"></span>
                  
                  {/* Content Card */}
                  <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-2 group-hover:border-primary/20 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">{exp.role}</h4>
                        <p className="text-sm text-gray-400">{exp.company}</p>
                      </div>
                      <span className="inline-flex items-center text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="bg-cyan-500/20 p-2 rounded-xl border border-cyan-500/30">
                <GraduationCap className="h-5 w-5 text-cyan-400" />
              </div>
              <span>Education & Certs</span>
            </h3>

            <div className="relative border-l border-white/10 pl-6 ml-3 space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Bullet Node */}
                  <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 rounded-full bg-dark-bg border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors duration-300"></span>
                  
                  {/* Content Card */}
                  <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-2 group-hover:border-cyan-400/20 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{edu.degree}</h4>
                        <p className="text-sm text-gray-400">{edu.institution}</p>
                      </div>
                      <span className="inline-flex items-center text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full">
                        <Calendar className="h-3 w-3 mr-1" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>
                    {edu.link && (
                      <div className="pt-2">
                        <a
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-medium border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 rounded-lg"
                        >
                          <span>View Certificate</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
