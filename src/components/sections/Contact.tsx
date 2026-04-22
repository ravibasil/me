import { motion } from 'framer-motion'
import { Globe, Mail, MessageSquare, User } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">Let's build something <br /> legendary.</h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            I'm always open to discussing high-impact projects, architectural consultations, 
            or leading engineering transformations.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <a 
              href="mailto:hello@ravibasil.me" 
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all flex items-center gap-2"
            >
              <Mail className="w-5 h-5" /> Say Hello
            </a>
            <div className="flex items-center gap-4">
              {[
                { icon: User, href: "#" },
                { icon: Globe, href: "#" },
                { icon: MessageSquare, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 glass-card flex items-center justify-center hover:bg-white/10 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <p className="text-white/20 text-sm">
            Based in India • Working Globally
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
