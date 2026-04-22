import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary/40">About Me</h2>
          <p className="text-3xl md:text-4xl font-medium leading-tight text-white/90">
            With 9+ years of experience in full-stack development and technical leadership, 
            I've led engineering teams at Publicis Sapient through complex digital transformations, 
            migrated legacy monoliths to cloud-native microservices, and built travel platforms used by millions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <p className="text-white/60 leading-relaxed">
              My expertise spans Travel, Hospitality, and Enterprise SaaS, where I focus on 
              architecting high-availability systems using Node.js, Kubernetes, and Kafka. I specialize 
              in bridging the gap between complex business logic and scalable technical implementations.
            </p>
            <p className="text-white/60 leading-relaxed">
              I am particularly focused on performance optimization and system resilience. 
              Whether it's integrating GenAI capabilities or reducing CI/CD bottlenecks, I deliver 
              measurable business impact through clean, maintainable architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
