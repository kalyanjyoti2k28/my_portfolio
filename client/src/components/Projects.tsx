import { motion } from "framer-motion";
import { FolderOpen, ExternalLink, Code, DraftingCompass, ChartGantt, Table, Wrench, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import GearAnimation from "./GearAnimation";
import type { Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: "autocad-course",
    title: "AutoCAD Mastery",
    description: "Currently enrolled in comprehensive AutoCAD online course, mastering 2D drafting and 3D modeling techniques essential for mechanical design.",
    status: "in-progress",
    technologies: ["AutoCAD", "Technical Drawing", "3D Modeling"],
    icon: "DraftingCompass"
  },
  {
    id: "technical-seminars",
    title: "Technical Seminars",
    description: "Attended multiple technical seminars on modern manufacturing processes, Industry 4.0, and sustainable engineering practices.",
    status: "completed",
    technologies: ["Manufacturing", "Industry 4.0", "Sustainability"],
    icon: "ChartGantt"
  },
  {
    id: "programming-projects",
    title: "Programming Portfolio",
    description: "Developing programming skills through practical projects in C, C++, and Java, focusing on algorithms and data structures.",
    status: "in-progress",
    technologies: ["C", "C++", "Java", "Algorithms"],
    icon: "Code"
  },
  {
    id: "excel-calculations",
    title: "Engineering Analytics",
    description: "Created sophisticated Excel-based calculators for mechanical engineering calculations, data analysis, and visualization.",
    status: "completed",
    technologies: ["MS Excel", "Data Analysis", "Engineering Calculations"],
    icon: "Table"
  },
  {
    id: "workshop-training",
    title: "Workshop Training",
    description: "Hands-on experience with machining operations, welding techniques, and manufacturing processes in college workshops.",
    status: "in-progress",
    technologies: ["Machining", "Welding", "Manufacturing"],
    icon: "Wrench"
  },
  {
    id: "future-projects",
    title: "Future Innovations",
    description: "Planning advanced projects in robotics, automation, and sustainable manufacturing for upcoming semesters.",
    status: "planned",
    technologies: ["Robotics", "Automation", "Green Technology"],
    icon: "Lightbulb"
  }
];

const iconMap = {
  DraftingCompass,
  ChartGantt,
  Code,
  Table,
  Wrench,
  Lightbulb
};

const statusConfig = {
  completed: { color: "bg-green-500", label: "Completed" },
  "in-progress": { color: "bg-blue-500", label: "In Progress" },
  planned: { color: "bg-purple-500", label: "Planned" }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background relative technical-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl lg:text-5xl font-bold text-primary mb-6">
            <FolderOpen className="inline-block w-12 h-12 mr-4" />
            Projects & Activities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building knowledge through hands-on experience and continuous learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = iconMap[project.icon as keyof typeof iconMap];
            const statusInfo = statusConfig[project.status];
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="project-card h-full group">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-background" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                      
                      <Badge 
                        className={`${statusInfo.color} text-background text-sm mb-4`}
                      >
                        {statusInfo.label}
                      </Badge>
                    </div>
                    
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      {project.status === "in-progress" && project.id === "autocad-course" && (
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">Progress</span>
                            <span className="text-primary font-bold text-sm">65%</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                      )}
                      
                      {project.status !== "planned" && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full hover:bg-primary hover:text-background"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      )}
                    </div>
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
