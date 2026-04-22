import { motion } from 'framer-motion'
import { Mail, Code2, ExternalLink, MessageSquare, ArrowRight } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text leading-tight">
              Let's connect.
            </h2>
            <p className="text-lg text-white/60 mb-12 max-w-md leading-relaxed">
              I'm always interested in discussing system architecture, technical leadership, 
              or complex full-stack challenges.
            </p>

            <div className="space-y-6">
              <a href="mailto:basilravi@gmail.com" className="flex items-center gap-4 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white/30 uppercase tracking-widest">Email Me</div>
                  <div className="text-lg text-white/80 group-hover:text-white transition-colors">basilravi@gmail.com</div>
                </div>
              </a>

              <div className="flex gap-4 pt-6">
                {[
                  { icon: Code2, href: "https://github.com/ravibasil" },
                  { icon: ExternalLink, href: "https://www.linkedin.com/in/ravibasil/" },
                  { icon: MessageSquare, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <social.icon className="w-6 h-6 text-white/60" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 border-white/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder:text-white/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder:text-white/20 resize-none"
                />
              </div>
              <button 
                type="button"
                className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all group"
              >
                Send Message <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
