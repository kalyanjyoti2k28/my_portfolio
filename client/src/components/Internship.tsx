import { motion } from "framer-motion";
import { Briefcase, MapPin, Building, Target, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GearAnimation from "./GearAnimation";

export default function Internship() {
  const targetIndustries = [
    {
      name: "Manufacturing",
      description: "Production processes, quality control, lean manufacturing",
      icon: Building,
      color: "text-primary"
    },
    {
      name: "Design & Engineering", 
      description: "CAD modeling, product design, engineering analysis",
      icon: Target,
      color: "text-accent"
    },
    {
      name: "Workshop Operations",
      description: "Hands-on machining, equipment maintenance, technical support", 
      icon: CheckCircle,
      color: "text-green-500"
    }
  ];

  const skills = [
    "Strong analytical thinking",
    "Programming skills in C, C++, Java",
    "AutoCAD proficiency and design thinking",
    "Team collaboration and communication",
    "Eagerness to learn and adapt",
    "Problem-solving mindset"
  ];

  return (
    <section id="internship" className="py-20 bg-muted relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl lg:text-5xl font-bold text-primary mb-6">
            <Briefcase className="inline-block w-12 h-12 mr-4" />
            Seeking Internship
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to apply theoretical knowledge in real-world engineering environments
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Objective */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="skill-card h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                    <Target className="w-6 h-6 mr-3" />
                    Career Objective
                  </h3>
                  
                  <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
                    Seeking internship opportunities in mechanical engineering to gain hands-on experience 
                    in design, manufacturing, and workshop operations. Eager to contribute fresh perspectives 
                    while learning from industry professionals and applying classroom knowledge to real-world challenges.
                  </p>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="font-bold text-primary mb-4">What I Bring:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {skills.map((skill, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Preferences */}
            <div className="space-y-8">
              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="skill-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Preferred Location
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-muted p-3 rounded-lg text-center">
                        <Building className="w-5 h-5 text-primary mr-2 inline" />
                        <span className="font-bold">Kolkata</span>
                      </div>
                      <div className="text-sm text-muted-foreground text-center">
                        Open to opportunities in surrounding areas
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Industries */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="skill-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                      <Building className="w-5 h-5 mr-2" />
                      Target Industries
                    </h3>
                    <div className="space-y-3">
                      {targetIndustries.map((industry, index) => {
                        const IconComponent = industry.icon;
                        return (
                          <div key={index} className="bg-muted p-3 rounded-lg">
                            <div className="flex items-center mb-2">
                              <IconComponent className={`w-5 h-5 ${industry.color} mr-3`} />
                              <span className="font-semibold">{industry.name}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{industry.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button 
              size="lg"
              className="btn-mechanical px-8 py-4 text-white font-bold"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Connect for Opportunities
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
