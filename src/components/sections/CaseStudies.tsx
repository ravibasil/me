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
      id: "booking-engine-migration",
      title: "Global Booking Engine Migration",
      role: "Tech Lead",
      shortDesc: "Migrating a legacy monolithic travel booking system to a scalable microservices architecture to support global demand.",
      problem: "The legacy booking system struggled with massive traffic spikes during seasonal travel peaks, leading to slow search results and inventory synchronization delays.",
      architecture: {
        design: "Successfully migrated to a microservices architecture using Node.js services to handle real-time inventory and booking flows.",
        services: ["React", "Node.js", "Kafka", "Redis", "AWS (EKS)"],
        dataFlow: "Search Request → API Gateway → Inventory Service → Cache (Redis) → Real-time Availability Sync via Kafka."
      },
      techDecisions: [
        {
          choice: "Redis for Inventory Caching",
          reason: "Ensured millisecond search latency by offloading database queries for high-frequency inventory checks.",
          tradeOffs: "Required complex cache invalidation logic during confirmed bookings."
        },
        {
          choice: "Kafka for Booking Events",
          reason: "Ensured reliable, asynchronous delivery of booking confirmations to loyalty and payment services.",
          tradeOffs: "Introduced eventual consistency across downstream notification systems."
        }
      ],
      challenges: [
        "Synchronizing real-time inventory across multiple global data centers.",
        "Ensuring zero-downtime migration during peak holiday booking seasons."
      ],
      impact: [
        { stat: "500K+", label: "Daily Searches", outcome: "Stable performance during peak load" },
        { stat: "99.9%", label: "Availability", outcome: "Achieved through auto-scaling and self-healing nodes" },
        { stat: "40%", label: "Latency Red", outcome: "Significant improvement in search-to-booking speed" }
      ],
      tags: ["Travel", "Microservices", "Kafka"]
    },
    {
      id: "hospitality-data-engine",
      title: "Hospitality Data Integration Engine",
      role: "Senior Full Stack Engineer",
      shortDesc: "Automated extraction and normalization of guest data from fragmented legacy Property Management Systems (PMS).",
      problem: "Hospitality groups faced challenges with fragmented guest data stored across multiple legacy PMS formats, making unified guest profiling impossible.",
      architecture: {
        design: "A robust integration layer that extracts, cleans, and normalizes data from various hospitality software providers into a centralized guest profile.",
        services: ["Node.js", "Python (Normalization)", "PostgreSQL", "AWS SQS", "React (Dashboard)"],
        dataFlow: "PMS Export → SQS Queue → Normalization Worker → Unified Data Store → Analytics Dashboard."
      },
      techDecisions: [
        {
          choice: "Pipeline-based Normalization",
          reason: "Allowed for extensible mapping logic as new PMS providers were integrated into the system.",
          tradeOffs: "Initial complexity in designing a truly generic data model for diverse guest data."
        },
        {
          choice: "SQS for Job Queuing",
          reason: "Decoupled data extraction from processing to handle high-volume batch imports from hotel chains.",
          tradeOffs: "Required robust error handling for failed normalization tasks."
        }
      ],
      challenges: [
        "Reconciling duplicate guest profiles across inconsistent data formats.",
        "Managing large-scale data migrations with strict security and privacy requirements."
      ],
      impact: [
        { stat: "90%", label: "Effort Saved", outcome: "Automated manual data reconciliation processes" },
        { stat: "99.5%", label: "Data Accuracy", outcome: "High-confidence unified guest profiles" },
        { stat: "1M+", label: "Profiles", outcome: "Consolidated across 100+ hotel properties" }
      ],
      tags: ["Hospitality", "Data Engineering", "Automation"]
    },
    {
      id: "genai-integration",
      title: "Enterprise GenAI Platform",
      role: "Tech Lead",
      shortDesc: "Integrating LLMs (GPT-4, Claude) into enterprise workflows to automate support and intelligence.",
      problem: "The client needed to reduce support overhead and improve data-driven decision-making by leveraging Large Language Models, but faced challenges with data privacy and prompt engineering at scale.",
      architecture: {
        design: "A secure AI gateway that orchestrates requests between internal data sources and external LLM providers with robust filtering and monitoring.",
        services: ["Node.js", "LangChain", "OpenAI / Anthropic APIs", "Vector DB (Pinecone)", "Redis"],
        dataFlow: "User Query → Privacy Filter → Context Retrieval (Vector DB) → Prompt Construction → LLM Request → Response Validation."
      },
      techDecisions: [
        {
          choice: "LangChain Framework",
          reason: "Modular components for chaining LLM calls and managing memory/state effectively.",
          tradeOffs: "Abstraction layer can sometimes limit fine-grained control over underlying API calls."
        },
        {
          choice: "Vector DB (Pinecone)",
          reason: "Managed, high-performance vector search for Retrieval-Augmented Generation (RAG).",
          tradeOffs: "Added external dependency and data synchronization complexity."
        }
      ],
      challenges: [
        "Mitigating 'hallucination' risks through advanced prompt engineering and context verification.",
        "Managing API rate limits and costs for high-volume enterprise traffic."
      ],
      impact: [
        { stat: "40%", label: "Support Reduction", outcome: "Automated majority of L1 support queries" },
        { stat: "< 2s", label: "Response Time", outcome: "Near real-time AI-driven interactions" },
        { stat: "Secure", label: "Compliance", outcome: "Zero PII exposure to external AI providers" }
      ],
      tags: ["GenAI", "LLM", "RAG"]
    },
    {
      id: "dc-dest-xt",
      title: "dc-dest-xt Core Engine",
      role: "Lead Engineer",
      shortDesc: "Next.js + Turborepo monorepo architecture for a headless CMS-driven enterprise application.",
      problem: "Managing multiple large-scale applications with shared UI components was leading to significant code duplication and slow CI/CD pipelines.",
      architecture: {
        design: "A monorepo structure using Turborepo to manage 30+ reusable UI components, integrated with AEM headless CMS.",
        services: ["Next.js", "Turborepo", "TypeScript", "AEM (Headless)", "Jest / Storybook"],
        dataFlow: "AEM Content → GraphQL → Custom Mapping Layer → Next.js (ISR) → Reusable UI Components."
      },
      techDecisions: [
        {
          choice: "Turborepo for Monorepo",
          reason: "Intelligent caching and parallel task execution significantly reduced build times.",
          tradeOffs: "Requires disciplined dependency management across the workspace."
        },
        {
          choice: "Storybook for Component Dev",
          reason: "Isolated component development and documentation for the design system.",
          tradeOffs: "Extra maintenance effort to keep stories updated with component changes."
        }
      ],
      challenges: [
        "Designing a flexible custom data mapping layer to translate AEM's complex JSON into clean component props.",
        "Ensuring full ARIA compliance and keyboard navigation across 30+ interactive components."
      ],
      impact: [
        { stat: "30+", label: "UI Components", outcome: "Fully reusable, accessible design system" },
        { stat: "80%", label: "Build Speedup", outcome: "Drastic reduction in CI/CD wait times" },
        { stat: "AEM", label: "Seamless Integration", outcome: "Decoupled content management from delivery" }
      ],
      tags: ["Next.js", "Turborepo", "AEM"]
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">Recent Work</h2>
          <p className="text-white/60 max-w-2xl">
            Technical breakdowns of systems I've architected and delivered, focusing on the decisions and trade-offs made along the way.
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
