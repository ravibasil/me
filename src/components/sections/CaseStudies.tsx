import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Code2, Shield, X, Cpu, Zap } from 'lucide-react'

interface CaseStudy {
  id: string;
  title: string;
  role: string;
  shortDesc: string;
  problem: string;
  architecture: {
    design: string;
    services: string[];
    dataFlow: string;
  };
  techDecisions: {
    choice: string;
    reason: string;
    tradeOffs: string;
  }[];
  challenges: string[];
  impact: {
    stat: string;
    label: string;
    outcome: string;
  }[];
  tags: string[];
}

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const cases: CaseStudy[] = [
    {
      id: "microservices-platform",
      title: "Microservices Platform Migration",
      role: "Tech Lead / Solution Architect",
      shortDesc: "Migrating a legacy monolithic system to a scalable microservices architecture to support high-performance applications.",
      problem: "The legacy monolithic system was struggling with significant scaling issues and performance bottlenecks during peak traffic, leading to increased latency and system instability.",
      architecture: {
        design: "Successfully migrated to a microservices architecture using Node.js services coordinated by a centralized API Gateway.",
        services: ["React (Frontend)", "Node.js (Backend)", "Kafka (Messaging)", "Redis (Caching)", "AWS (Infrastructure)"],
        dataFlow: "Client Request → API Gateway → Specific Microservice → Kafka (Async Events) → Redis/DB → Response."
      },
      techDecisions: [
        {
          choice: "Node.js Microservices",
          reason: "Non-blocking I/O and lightweight footprint ideal for distributed service-based architecture.",
          tradeOffs: "Requires robust service discovery and inter-service communication management."
        },
        {
          choice: "Kafka for Async Communication",
          reason: "Ensures reliable message delivery and decouples services for better scalability and resilience.",
          tradeOffs: "Increased architectural complexity and infrastructure management overhead."
        }
      ],
      challenges: [
        "Managing distributed data consistency across multiple service boundaries.",
        "Ensuring zero-downtime migration from the monolith to the new architecture."
      ],
      impact: [
        { stat: "500K+", label: "Monthly Trans", outcome: "Stable processing at scale" },
        { stat: "99.9%", label: "SLA", outcome: "Significant improvement in system reliability" },
        { stat: "35%", label: "Latency Red", outcome: "Faster response times across all services" }
      ],
      tags: ["Microservices", "Kafka", "AWS"]
    },
    {
      id: "pdf-parsing-system",
      title: "Bank PDF Extraction Engine",
      role: "Senior Full Stack Engineer",
      shortDesc: "Automated financial data extraction system handling complex, unstructured PDF bank statements.",
      problem: "Financial analysts were spending hours manually transcribing data from various bank PDF statements, a process that was both slow and highly susceptible to human error.",
      architecture: {
        design: "A pipeline-based extraction system that uses advanced parsing logic to normalize data from hundreds of different bank statement layouts.",
        services: ["Node.js", "Python (OCR/Parsing)", "PostgreSQL", "AWS Textract", "React (Audit Tool)"],
        dataFlow: "PDF Upload → Format Detection → Extraction Pipeline → Data Validation → JSON Export → Dashboard."
      },
      techDecisions: [
        {
          choice: "Hybrid Parsing Logic",
          reason: "Combined template-based parsing with AI-driven OCR to handle both standard and highly irregular layouts.",
          tradeOffs: "Required a manual verification step for low-confidence scores."
        },
        {
          choice: "Python for Data Processing",
          reason: "Rich ecosystem of data science and PDF manipulation libraries (Pandas, PDFPlumber).",
          tradeOffs: "Cross-language communication overhead between Node.js and Python workers."
        }
      ],
      challenges: [
        "Normalizing varying date formats and transaction descriptions across 50+ global banks.",
        "Accurately identifying table boundaries in multi-page statements with overlapping text."
      ],
      impact: [
        { stat: "90%", label: "Time Saved", outcome: "Reduced manual effort from hours to minutes" },
        { stat: "99.8%", label: "Accuracy", outcome: "Significant reduction in data entry errors" },
        { stat: "50+", label: "Banks", outcome: "Support for global financial institutions" }
      ],
      tags: ["Data Engineering", "Automation", "Fintech"]
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">Case Studies</h2>
          <p className="text-white/60 max-w-2xl">
            A deep dive into complex technical challenges, the strategic decisions made, 
            and the tangible impact delivered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((cs, i) => (
            <motion.div 
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedCase(cs)}
              className="glass-card overflow-hidden group border-white/5 hover:border-white/10 cursor-pointer"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary/40">{cs.role}</span>
                  <div className="flex gap-2">
                    {cs.tags.map((tag, j) => (
                      <span key={j} className="text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/10">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white/90 group-hover:text-white transition-colors">{cs.title}</h3>
                <p className="text-white/40 text-sm mb-8 leading-relaxed flex-grow">{cs.shortDesc}</p>
                <div className="flex items-center gap-2 text-xs font-semibold text-white/60 group-hover:text-white transition-colors">
                  View Detailed Analysis <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-accent/90 border border-white/10 rounded-3xl overflow-y-auto glass-card"
            >
              <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-16">
                <div className="flex items-center gap-4 mb-8">
                  <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">Case Study</span>
                  <span className="text-white/40 text-sm">{selectedCase.role}</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold mb-12 gradient-text">{selectedCase.title}</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                  <div className="lg:col-span-2 space-y-16">
                    {/* Problem */}
                    <section>
                      <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <Shield className="w-6 h-6 text-primary/60" /> The Problem
                      </h4>
                      <p className="text-white/60 leading-relaxed text-lg">{selectedCase.problem}</p>
                    </section>

                    {/* Architecture */}
                    <section>
                      <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <Cpu className="w-6 h-6 text-primary/60" /> Architecture
                      </h4>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                        <p className="text-white/80">{selectedCase.architecture.design}</p>
                        <div className="flex flex-wrap gap-3">
                          {selectedCase.architecture.services.map((s, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-white/60">{s}</span>
                          ))}
                        </div>
                        <div className="pt-6 border-t border-white/5">
                          <h5 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Data Flow</h5>
                          <p className="text-sm text-white/40 italic leading-relaxed">{selectedCase.architecture.dataFlow}</p>
                        </div>
                      </div>
                    </section>

                    {/* Tech Decisions */}
                    <section>
                      <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <Code2 className="w-6 h-6 text-primary/60" /> Tech Decisions
                      </h4>
                      <div className="space-y-6">
                        {selectedCase.techDecisions.map((td, i) => (
                          <div key={i} className="p-6 border-l-2 border-primary/20 bg-white/[0.02]">
                            <h5 className="font-bold text-white/90 mb-2">{td.choice}</h5>
                            <p className="text-sm text-white/60 mb-4">{td.reason}</p>
                            <p className="text-xs text-white/40"><span className="text-white/20 font-bold uppercase mr-2">Trade-off:</span> {td.tradeOffs}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="space-y-12">
                    {/* Challenges */}
                    <section>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-6">Key Challenges</h4>
                      <ul className="space-y-4">
                        {selectedCase.challenges.map((c, i) => (
                          <li key={i} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                            <span className="text-primary mt-1">•</span> {c}
                          </li>
                        ))}
                      </ul>
                    </section>

                    {/* Impact Stats */}
                    <section className="space-y-6">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-6">Strategic Impact</h4>
                      {selectedCase.impact.map((im, i) => (
                        <div key={i} className="glass-card p-6 border-white/5">
                          <div className="text-3xl font-bold text-white mb-1 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-yellow-500/50" /> {im.stat}
                          </div>
                          <div className="text-xs font-bold text-primary/60 uppercase mb-3">{im.label}</div>
                          <p className="text-xs text-white/40 leading-relaxed">{im.outcome}</p>
                        </div>
                      ))}
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default CaseStudies
