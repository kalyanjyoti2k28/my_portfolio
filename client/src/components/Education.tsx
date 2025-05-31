import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import GearAnimation from "./GearAnimation";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl lg:text-5xl font-bold text-primary mb-6">
            <GraduationCap className="inline-block w-12 h-12 mr-4" />
            Academic Journey
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="skill-card">
              <CardContent className="p-8 relative">
                <div className="absolute top-6 right-6">
                  <GearAnimation size="small" className="text-primary/30" />
                </div>
                
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/3 text-center">
                    {/* College emblem placeholder */}
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center border-4 border-background">
                      <GraduationCap className="w-16 h-16 text-background" />
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Jalpaiguri Government Engineering College
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Trophy className="w-5 h-5 text-primary" />
                        <span className="text-lg font-medium">B.Tech in Mechanical Engineering</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-foreground/80">Duration: 2024 – 2028</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="text-foreground/80">West Bengal, India</span>
                      </div>
                      
                      <div className="bg-muted p-6 rounded-lg mt-6">
                        <h4 className="font-bold text-primary mb-4">Key Achievements</h4>
                        <ul className="text-foreground/80 space-y-2">
                          <li>• Successfully completed first year with strong fundamentals</li>
                          <li>• Active participation in technical seminars and workshops</li>
                          <li>• Pursuing additional AutoCAD certification</li>
                          <li>• Maintaining excellent academic performance</li>
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-bold text-primary mb-4">Academic Progress</h4>
                        <div className="flex items-center space-x-4">
                          <Progress value={25} className="flex-1 h-3" />
                          <span className="text-primary font-bold">Year 1/4</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Completed: Foundation courses, Programming fundamentals, Engineering graphics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
