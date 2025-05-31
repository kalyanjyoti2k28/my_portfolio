import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Internship from "@/components/Internship";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import GearAnimation from "@/components/GearAnimation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Internship />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <GearAnimation size="small" className="text-primary" />
                <span className="font-bold text-xl text-primary">Kalyanjyoti Barman</span>
              </div>
              <div className="text-muted-foreground text-sm">Mechanical Engineering Student</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <i className="fas fa-envelope text-xl"></i>
                </a>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-muted-foreground text-sm">
                © 2024 Kalyanjyoti Barman
              </div>
              <div className="text-muted-foreground/60 text-xs mt-1">
                Engineering the Future.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Gear Animation */}
      <motion.div 
        className="fixed bottom-8 right-8 w-12 h-12 text-primary/30 pointer-events-none z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <GearAnimation size="medium" />
      </motion.div>
    </div>
  );
}
