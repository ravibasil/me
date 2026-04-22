import { motion } from 'framer-motion'

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Micro-frontends"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "GraphQL", "REST APIs", "System Design"]
    },
    {
      title: "Cloud",
      skills: ["AWS (Lambda, EC2, S3)", "CloudFormation", "Terraform", "Serverless"]
    },
    {
      title: "Data",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "Data Modeling"]
    },
    {
      title: "DevOps",
      skills: ["Docker", "Kubernetes", "CI/CD (GitHub Actions)", "Jenkins", "Monitoring"]
    },
    {
      title: "Messaging",
      skills: ["Kafka (Event-Driven)", "RabbitMQ", "Pub/Sub", "Async Processing"]
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">Technical Ecosystem</h2>
          <p className="text-white/60 max-w-2xl">
            A specialized stack focused on building high-availability, distributed systems 
            and modern enterprise applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-white/40 group-hover:text-white/70 group-hover:border-white/20 transition-all"
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
