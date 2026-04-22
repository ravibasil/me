import { motion } from 'framer-motion'
import { Brain, Cloud, Database, Terminal } from 'lucide-react'

const Methodology = () => {
  const principles = [
    {
      icon: Brain,
      title: "GenAI & LLM Integration",
      desc: "Implementing secure, scalable AI capabilities using GPT-4 and Claude APIs to enhance product intelligence."
    },
    {
      icon: Terminal,
      title: "Clean Code & Architecture",
      desc: "Prioritizing maintainability and testability through SOLID principles and layered architecture."
    },
    {
      icon: Cloud,
      title: "Cloud-Native & DevOps",
      desc: "Leveraging Kubernetes, IaC, and automated CI/CD to deliver resilient, auto-scaling infrastructure."
    },
    {
      icon: Database,
      title: "High-Throughput Systems",
      desc: "Implementing event-driven patterns with Kafka and Redis for high-concurrency Fintech and SaaS applications."
    }
  ]

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 gradient-text leading-tight">How I Think <br /> About Systems.</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Beyond writing code, I focus on the long-term viability of systems. 
              My approach is grounded in proven architectural patterns that balance 
              performance, security, and developer productivity.
            </p>
            <div className="glass-card p-8 border-primary/20">
              <p className="text-white/80 italic">
                "Architecture is about making the important decisions early, 
                but keeping the options open for as long as possible."
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 border-white/5 hover:border-white/20 transition-all"
              >
                <p.icon className="w-8 h-8 text-primary/60 mb-4" />
                <h3 className="font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Methodology
