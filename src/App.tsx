import { lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'

const About = lazy(() => import('./components/sections/About'))
const Skills = lazy(() => import('./components/sections/Skills'))
const CaseStudies = lazy(() => import('./components/sections/CaseStudies'))
const Methodology = lazy(() => import('./components/sections/Methodology'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Contact = lazy(() => import('./components/sections/Contact'))

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/10 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-20" />}>
          <About />
          <Skills />
          <CaseStudies />
          <Methodology />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <footer className="py-12 border-t border-white/5 text-center text-white/20 text-xs">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Ravi Basil. Solution Architecture & Engineering.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Legal</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
