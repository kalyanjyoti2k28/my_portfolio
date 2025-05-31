import { motion } from "framer-motion";
import { Cog, Code, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import GearAnimation from "./GearAnimation";
import type { Skill } from "@/lib/types";

const skills: Skill[] = [
  // Programming
  { name: "C", level: 85, category: "programming" },
  { name: "C++", level: 80, category: "programming" },
  { name: "Java", level: 75, category: "programming" },
  
  // Engineering Tools
  { name: "AutoCAD", level: 70, category: "engineering" },
  { name: "MS Excel", level: 85, category: "engineering" },
  
  // Soft Skills
  { name: "Teamwork", level: 90, category: "soft" },
  { name: "Communication", level: 85, category: "soft" },
  
  // Languages
  { name: "Hindi", level: 95, category: "language" },
  { name: "English", level: 80, category: "language" },
  { name: "Bengali", level: 70, category: "language" }
];

const categoryConfig = {
  programming: {
    title: "Programming",
    icon: Code,
    color: "text-primary",
    description: "Software development and algorithms"
  },
  engineering: {
    title: "Engineering Tools",
    icon: Cog,
    color: "text-accent",
    description: "CAD and technical analysis"
  },
  soft: {
    title: "Core Skills",
    icon: Users,
    color: "text-green-500",
    description: "Leadership and collaboration"
  },
  language: {
    title: "Languages",
    icon: Globe,
    color: "text-purple-500",
    description: "Communication proficiency"
  }
};

export default function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-background relative technical-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl lg:text-5xl font-bold text-primary mb-6">
            <Cog className="inline-block w-12 h-12 mr-4" />
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A mechanical engineer's toolkit combining programming prowess with engineering fundamentals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], index) => {
            const config = categoryConfig[category as keyof typeof categoryConfig];
            const IconComponent = config.icon;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="skill-card h-full group">
                  <CardContent className="p-6 text-center relative">
                    <div className="mb-4 group-hover:animate-pulse">
                      <GearAnimation 
                        size="medium" 
                        reverse={index % 2 === 1}
                        className={`${config.color} mx-auto mb-4`} 
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary mb-4">{config.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{config.description}</p>
                    
                    <div className="space-y-4">
                      {categorySkills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                    
                    {category === "engineering" && (
                      <div className="mt-4 text-xs text-primary">
                        📚 Currently learning AutoCAD online
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
