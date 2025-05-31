import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Download, Cpu, Zap, Cog, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import GearAnimation from "./GearAnimation";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Transform values for scroll-based animations
  const scale = useTransform(scrollY, [0, 500], [1, 1.5]);
  const rotateX = useTransform(scrollY, [0, 500], [0, 15]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const machineScale = useTransform(scrollY, [0, 800], [1, 3]);
  const detailOpacity = useTransform(scrollY, [200, 600], [0, 1]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const machineDetails = [
    { icon: Cpu, label: "Neural Processing", position: "top-1/4 left-1/4", color: "text-blue-400" },
    { icon: Zap, label: "Power Core", position: "top-1/3 right-1/3", color: "text-yellow-400" },
    { icon: Cog, label: "Mechanical Systems", position: "bottom-1/3 left-1/3", color: "text-green-400" },
    { icon: Wrench, label: "Tool Integration", position: "bottom-1/4 right-1/4", color: "text-red-400" }
  ];

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center relative overflow-hidden technical-grid">
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

          {/* Simple Hero Machine */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-96 flex items-center justify-center"
          >
            <div className="relative w-64 h-64">
              {/* Central Engine Core */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full border-4 border-primary/50 backdrop-blur-sm"
                animate={{ 
                  rotate: 360,
                  boxShadow: [
                    "0 0 20px rgba(183, 121, 31, 0.3)",
                    "0 0 40px rgba(183, 121, 31, 0.6)",
                    "0 0 20px rgba(183, 121, 31, 0.3)"
                  ]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <motion.div 
                  className="absolute inset-6 bg-gradient-to-br from-muted to-card rounded-full border-2 border-accent/50 flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <Cpu className="w-12 h-12 text-primary" />
                </motion.div>
              </motion.div>

              {/* Rotating gears around the core */}
              {[0, 90, 180, 270].map((rotation, index) => (
                <motion.div
                  key={index}
                  className="absolute w-16 h-16"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '50% 50%',
                  }}
                  animate={{ 
                    rotate: rotation + (index % 2 === 0 ? 360 : -360)
                  }}
                  transition={{ 
                    duration: 4 + index,
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  <motion.div
                    className="w-full h-full"
                    style={{
                      x: Math.cos(rotation * Math.PI / 180) * 80 - 32,
                      y: Math.sin(rotation * Math.PI / 180) * 80 - 32,
                    }}
                  >
                    <GearAnimation 
                      size="medium" 
                      reverse={index % 2 === 1}
                      className={`text-${index % 2 === 0 ? 'primary' : 'accent'} w-16 h-16`} 
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-center">
          <div className="text-sm mb-2">Scroll to explore machine</div>
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full mx-auto relative">
            <motion.div
              className="w-1 h-3 bg-primary/60 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>

      {/* Background ambient gears */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 0.5
            }}
          >
            <GearAnimation 
              size={i % 3 === 0 ? "large" : i % 2 === 0 ? "medium" : "small"} 
              className="text-muted-foreground"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
