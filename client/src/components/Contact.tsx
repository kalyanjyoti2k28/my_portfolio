import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send, Download, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import GearAnimation from "./GearAnimation";
import type { ContactFormData } from "@/lib/types";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kb2838@mejgec.ac.in",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91 8597525739",
      color: "text-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect professionally",
      color: "text-blue-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cooch Behar, West Bengal",
      color: "text-green-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative technical-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl lg:text-5xl font-bold text-primary mb-6">
            <Mail className="inline-block w-12 h-12 mr-4" />
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborations, or just connect!
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="skill-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div key={index} className="flex items-center space-x-4">
                          <div className={`w-12 h-12 ${info.color} bg-muted rounded-lg flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">{info.label}</p>
                            <p className="text-foreground font-medium">{info.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="font-bold text-primary mb-4">Quick Actions</h4>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        className="btn-mechanical flex-1"
                        size="sm"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-background"
                        size="sm"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Portfolio
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="skill-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-8">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange("name")}
                        className="mt-2 bg-muted border-border focus:border-primary"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange("email")}
                        className="mt-2 bg-muted border-border focus:border-primary"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange("subject")}
                        className="mt-2 bg-muted border-border focus:border-primary"
                        placeholder="Internship Opportunity / Collaboration / General Inquiry"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange("message")}
                        rows={5}
                        className="mt-2 bg-muted border-border focus:border-primary resize-none"
                        placeholder="Tell me about the opportunity or how we can work together..."
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="btn-mechanical w-full px-8 py-4 text-white font-bold"
                      size="lg"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? (
                        <>
                          <GearAnimation size="small" className="mr-2 text-background" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
