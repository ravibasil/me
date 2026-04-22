import { motion } from 'framer-motion'

const Skills = () => {
  const categories = [
    {
      title: "Frontend Architecture",
      skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Micro-frontends", "Performance Optimization"]
    },
    {
      title: "Backend & Systems",
      skills: ["Node.js / Go", "Microservices", "Kafka (Event-Driven)", "GraphQL / REST", "PostgreSQL / Redis"]
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS / GCP", "Docker & Kubernetes", "Terraform (IaC)", "CI/CD (Jenkins/GitHub Actions)", "Serverless"]
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">Technical Arsenal</h2>
          <p className="text-white/60 max-w-2xl">
            A comprehensive set of tools and methodologies leveraged to build robust, 
            enterprise-grade solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
              className="glass-card p-8 group hover:bg-white/[0.05] transition-all"
            >
              <h3 className="text-xl font-bold mb-6 text-white/90">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span 
                    key={j}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 group-hover:border-white/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
