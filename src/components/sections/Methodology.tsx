import { motion } from 'framer-motion'
import { Layers, Zap, Shield, Users } from 'lucide-react'

const Methodology = () => {
  const principles = [
    {
      icon: Layers,
      title: "Scalability",
      desc: "Designing microservices and distributed systems that grow seamlessly with user demand and transaction volume."
    },
    {
      icon: Zap,
      title: "Performance",
      desc: "Optimizing critical paths using multi-level caching (Redis) and asynchronous event-driven processing (Kafka)."
    },
    {
      icon: Shield,
      title: "Architecture",
      desc: "Building modular, maintainable, and resilient systems that stand the test of time and technical evolution."
    },
    {
      icon: Users,
      title: "Leadership",
      desc: "Mentoring engineering teams, driving technical decision-making, and fostering a culture of excellence."
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
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 gradient-text leading-tight">Technical Approach</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              I focus on building systems that are not just performant today, but maintainable for the long term. 
              My approach balances technical debt with the need for high-availability and security.
            </p>
            <div className="glass-card p-8 border-primary/20">
              <p className="text-white/80 leading-relaxed">
                I prioritize architectural patterns that decouple core services, 
                allowing teams to scale and evolve features independently.
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
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
                className="glass-card p-6 border-white/5 hover:border-white/20 transition-all group"
              >
                <div className="p-3 rounded-xl bg-white/5 w-fit mb-4 group-hover:bg-primary/10 transition-colors">
                  <p.icon className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-bold mb-2 text-white/90">{p.title}</h3>
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
