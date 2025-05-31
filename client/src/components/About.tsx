import { motion } from "framer-motion";
import { UserCog } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import GearAnimation from "./GearAnimation";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl lg:text-5xl font-bold text-primary mb-6">
            <UserCog className="inline-block w-12 h-12 mr-4" />
            About Me
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 text-center"
          >
            {/* Profile placeholder with mechanical theme */}
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-muted to-card rounded-full flex items-center justify-center border-4 border-primary relative overflow-hidden">
              <UserCog className="w-24 h-24 text-primary" />
              <div className="absolute top-4 right-4">
                <GearAnimation size="small" className="text-primary/20" />
              </div>
              <div className="absolute bottom-4 left-4">
                <GearAnimation size="small" reverse className="text-primary/20" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <Card className="skill-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Engineering My Future</h3>
                <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
                  Currently pursuing B.Tech in Mechanical Engineering at Jalpaiguri Government Engineering College. 
                  I'm passionate about bridging the gap between theoretical knowledge and practical applications, 
                  constantly exploring how mechanical systems can be optimized through modern technology.
                </p>
                <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
                  My journey in engineering is driven by curiosity and a desire to solve real-world problems. 
                  Whether it's understanding the intricate workings of mechanical systems or learning new 
                  programming languages, I believe in continuous learning and adaptation.
                </p>
                <div className="bg-muted p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-primary italic text-lg">
                    "Design is not just what it looks like. Design is how it works." - Steve Jobs
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
