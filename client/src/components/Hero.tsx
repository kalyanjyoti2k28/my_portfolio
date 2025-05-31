import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import GearAnimation from "./GearAnimation";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden technical-grid">
      {/* Floating Gears Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <GearAnimation size="large" className="text-muted-foreground" />
        </motion.div>
        <motion.div 
          className="absolute top-3/4 right-1/4"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <GearAnimation size="medium" className="text-primary" />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <GearAnimation size="large" className="text-accent" />
        </motion.div>
        <motion.div 
          className="absolute top-1/2 right-1/3"
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <GearAnimation size="small" className="text-muted-foreground" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="text-primary">KALYANJYOTI</span><br />
              <span className="text-muted-foreground">BARMAN</span>
            </h1>
            
            <h2 className="text-lg md:text-xl mb-8 text-muted-foreground">
              Aspiring Mechanical Engineer | Future Innovator | Tech Enthusiast
            </h2>
            
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl">
              First-year Mechanical Engineering student passionate about design, manufacturing, and problem-solving. 
              Building the future through precision engineering and innovative technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('#projects')}
                className="btn-mechanical px-8 py-4 text-white font-bold"
                size="lg"
              >
                <Eye className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 font-bold"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Central large gear */}
              <motion.div 
                className="w-32 h-32 mx-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <GearAnimation size="large" className="text-primary w-32 h-32" />
              </motion.div>
              
              {/* Smaller surrounding gears */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <GearAnimation size="medium" className="text-accent" />
              </motion.div>
              
              <motion.div 
                className="absolute top-0 right-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <GearAnimation size="small" className="text-muted-foreground" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-0 left-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <GearAnimation size="small" className="text-primary/60" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
