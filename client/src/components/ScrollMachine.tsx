import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, Cog, Users, GraduationCap, FolderOpen, Briefcase, Mail, Zap, Wrench, Code } from "lucide-react";

interface MachineComponentProps {
  sectionId: string;
  title: string;
  icon: any;
  color: string;
  position: { x: number; y: number };
  details: string[];
}

const machineComponents: MachineComponentProps[] = [
  {
    sectionId: "about",
    title: "Central Processing Core",
    icon: Cpu,
    color: "text-primary",
    position: { x: 0, y: 0 },
    details: ["Engineering Mind", "Problem Solving", "Innovation Core", "Future Vision"]
  },
  {
    sectionId: "skills", 
    title: "Technical Arsenal",
    icon: Cog,
    color: "text-accent",
    position: { x: -80, y: -60 },
    details: ["Programming", "CAD Tools", "Engineering", "Languages"]
  },
  {
    sectionId: "education",
    title: "Knowledge Engine",
    icon: GraduationCap,
    color: "text-green-400",
    position: { x: 80, y: -60 },
    details: ["Academic Progress", "Learning Path", "Certifications", "Growth"]
  },
  {
    sectionId: "projects",
    title: "Innovation Lab",
    icon: FolderOpen,
    color: "text-blue-400",
    position: { x: -80, y: 60 },
    details: ["AutoCAD Mastery", "Technical Seminars", "Programming", "Workshop"]
  },
  {
    sectionId: "internship",
    title: "Career Drive",
    icon: Briefcase,
    color: "text-purple-400",
    position: { x: 80, y: 60 },
    details: ["Manufacturing", "Design", "Workshop", "Kolkata"]
  }
];

export default function ScrollMachine() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Calculate which section is active based on scroll
  const sectionProgress = useTransform(scrollYProgress, [0, 1], [0, machineComponents.length - 1]);

  return (
    <div className="fixed top-1/2 right-4 lg:right-8 transform -translate-y-1/2 z-40 pointer-events-none hidden md:block">
      <div className="relative w-48 h-48 lg:w-64 lg:h-64 machine-container">
        {/* Main machine frame */}
        <motion.div
          className="absolute inset-0 border-2 border-primary/30 rounded-full bg-background/80 backdrop-blur-sm"
          style={{
            scale: useTransform(scrollYProgress, [0, 1], [0.8, 1.2]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 360])
          }}
        />

        {/* Central core that's always visible */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 bg-primary/20 rounded-full border-2 border-primary flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Cpu className="w-8 h-8 text-primary" />
        </motion.div>

        {/* Dynamic components that appear based on scroll */}
        {machineComponents.map((component, index) => {
          const IconComponent = component.icon;
          const isActive = useTransform(
            sectionProgress,
            [index - 0.4, index, index + 0.4],
            [0, 1, 0]
          );
          const componentScale = useTransform(
            sectionProgress,
            [index - 0.6, index, index + 0.6],
            [0.3, 2, 0.3]
          );

          return (
            <motion.div
              key={component.sectionId}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                x: component.position.x,
                y: component.position.y,
                scale: componentScale,
                opacity: isActive
              }}
            >
              {/* Component circle */}
              <motion.div
                className={`w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full border-2 border-current flex items-center justify-center ${component.color}`}
                animate={{ 
                  rotate: index % 2 === 0 ? 360 : -360,
                  boxShadow: [
                    "0 0 10px currentColor",
                    "0 0 20px currentColor", 
                    "0 0 10px currentColor"
                  ]
                }}
                transition={{ 
                  rotate: { duration: 6 + index, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <IconComponent className="w-6 h-6" />
              </motion.div>

              {/* Component details */}
              <motion.div
                className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm rounded-lg p-3 border border-primary/30 min-w-48"
                style={{ opacity: isActive }}
              >
                <h4 className={`text-sm font-bold mb-2 ${component.color}`}>
                  {component.title}
                </h4>
                <div className="space-y-1">
                  {component.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      className="text-xs text-foreground/80 flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: detailIndex * 0.1 }}
                    >
                      <div className={`w-1 h-1 rounded-full ${component.color} mr-2`} />
                      {detail}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Connecting lines to center */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-1 bg-primary/30 origin-bottom transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  height: Math.sqrt(component.position.x ** 2 + component.position.y ** 2),
                  rotate: Math.atan2(component.position.y, component.position.x) * 180 / Math.PI + 90,
                  opacity: isActive
                }}
              />
            </motion.div>
          );
        })}

        {/* Energy rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-primary/20 rounded-full"
            style={{
              width: 80 + i * 40,
              height: 80 + i * 40,
              scale: useTransform(scrollYProgress, [0, 1], [1, 1.5])
            }}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 10 + i * 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 0.5 
            }}
          />
        ))}

        {/* Scroll progress indicator */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <div className="text-xs text-primary/60 mb-1">Machine Analysis</div>
          <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              style={{ scaleX: scrollYProgress }}
              transformTemplate={({ scaleX }) => `scaleX(${scaleX})`}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}