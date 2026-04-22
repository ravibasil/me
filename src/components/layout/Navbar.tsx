import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
    >
      <div className="glass-card flex items-center gap-8 px-8 py-3 pointer-events-auto">
        <a href="#home" className="text-sm font-medium hover:text-white/60 transition-colors">Home</a>
        <a href="#about" className="text-sm font-medium hover:text-white/60 transition-colors">About</a>
        <a href="#experience" className="text-sm font-medium hover:text-white/60 transition-colors">Experience</a>
        <a href="#projects" className="text-sm font-medium hover:text-white/60 transition-colors">Case Studies</a>
        <a href="#contact" className="text-sm font-medium hover:text-white/60 transition-colors">Contact</a>
      </div>
    </motion.nav>
  )
}

export default Navbar
