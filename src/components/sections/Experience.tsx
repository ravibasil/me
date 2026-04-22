import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Briefcase, Calendar, ChevronRight } from 'lucide-react'

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      company: "Publicis Sapient",
      role: "Tech Lead / Senior Software Engineer",
      period: "2020 - Present",
      achievements: [
        "Architected and delivered microservices-based platforms using Node.js and AWS, ensuring 99.9% availability for enterprise clients.",
        "Implemented a high-performance Monorepo architecture (Nx), increasing developer productivity by 40% and standardizing tooling across multiple teams.",
        "Engineered scalable system designs that reduced latency by 35% across critical high-traffic applications.",
        "Led cross-functional architecture reviews and mentored 10+ developers to foster a culture of technical excellence."
      ]
    },
    {
      company: "ClixLogix",
      role: "Full Stack Engineer",
      period: "2017 - 2020",
      achievements: [
        "Developed HIPAA-compliant telemedicine solutions and secure medical data systems serving thousands of providers.",
        "Designed and implemented a scalable backend infrastructure using MongoDB and Node.js to handle complex healthcare data models.",
        "Built responsive, high-performance web applications using React, significantly improving user engagement for healthtech products.",
        "Optimized API performance and database queries, resulting in 50% faster data retrieval for real-time applications."
      ]
    },
    {
      company: "Calibrated Advisory",
      role: "Mobile Application Intern",
      period: "May 2016 - Feb 2017",
      achievements: [
        "Contributed to the development of cross-platform mobile applications using React Native.",
        "Collaborated with the design team to implement pixel-perfect UIs and smooth user transitions.",
        "Gained hands-on experience in mobile app deployment processes and version control with Git.",
        "Assisted in troubleshooting and debugging critical issues to improve application stability."
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">Professional Journey</h2>
          <p className="text-white/60 max-w-2xl mx-auto">A strategic path of technical leadership and architectural innovation.</p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block">
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary/80 to-primary/20 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Mobile/Side Indicator Dot */}
                <div className="absolute left-[-4.5px] md:left-1/2 md:translate-x-[-50%] top-0 w-2.5 h-2.5 rounded-full bg-primary border-4 border-background z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                
                <div className="flex-1">
                  <motion.div 
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
                    className="glass-card p-8 border-white/5 group transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 text-primary/60 mb-1">
                          <Briefcase className="w-4 h-4" />
                          <span className="text-xs font-bold uppercase tracking-widest">{exp.role}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white/90">{exp.company}</h3>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/40 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, j) => (
                        <li key={j} className="flex gap-3 text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-primary/40 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Empty Spacer for desktop alignment */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
