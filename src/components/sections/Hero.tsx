import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight, Cpu, Layers, Zap } from 'lucide-react'

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: [0.42, 0, 0.58, 1]
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1]
      }
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center section-padding overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: [0.42, 0, 0.58, 1]
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, -70, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: [0.42, 0, 0.58, 1]
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 blur-[100px] rounded-full" 
        />
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl relative z-10"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-blue-400 mb-8 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Tech Lead & Solution Architect
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 gradient-text leading-[1.1]"
        >
          I design scalable systems powering high-performance applications.
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Tech Lead with 9+ years building microservices platforms, cloud-native systems, and AI-powered solutions across fintech and SaaS.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6 mb-20">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-primary text-white font-bold rounded-full flex items-center gap-2 hover:bg-primary/90 transition-all cursor-pointer"
          >
            View Case Studies <ArrowUpRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 glass-card font-bold flex items-center gap-2 transition-all border-white/20 cursor-pointer"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Highlight Stats */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto border-t border-white/5 pt-12"
        >
          {[
            { label: "Systems Handled", value: "500K+", sub: "Monthly Trans" },
            { label: "Architecture", value: "99.9%", sub: "SLA Guaranteed" },
            { label: "Stack Focus", value: "AWS + K8s", sub: "Kafka Clusters" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{stat.value}</div>
              <div className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest">{stat.label}</div>
              <div className="text-[10px] text-white/20">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Feature Grid Brief */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: [0.42, 0, 0.58, 1] }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 w-full max-w-6xl"
      >
        {[
          { icon: Cpu, label: "Distributed Systems", desc: "High-concurrency architecture for resilient platforms", color: "text-blue-400" },
          { icon: Layers, label: "Full Stack Mastery", desc: "Expertise in React, Next.js, and Node.js ecosystems", color: "text-purple-400" },
          { icon: Zap, label: "AI Integration", desc: "Harnessing LLMs (GPT-4, Claude) for enterprise scale", color: "text-indigo-400" }
        ].map((item, index) => (
          <div key={index} className="glass-card p-8 flex flex-col gap-4 group hover:border-white/20 transition-all hover:bg-white/[0.05]">
            <item.icon className={`w-8 h-8 ${item.color}`} />
            <h3 className="text-xl font-bold">{item.label}</h3>
            <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Hero
