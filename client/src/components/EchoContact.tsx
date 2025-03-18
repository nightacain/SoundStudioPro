import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Calendar, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

// Service options for the form
const serviceOptions = [
  { value: "recording", label: "Music Recording" },
  { value: "mixing", label: "Audio Mixing" },
  { value: "production", label: "Music Production" },
  { value: "mastering", label: "Mastering" },
  { value: "voiceover", label: "Voice-Over Recording" },
  { value: "djschool", label: "DJ School" }
];

// Social media links
const socialMediaLinks = [
  { 
    icon: Instagram, 
    bgClass: "bg-purple-500/20 hover:bg-purple-500/30", 
    textClass: "text-purple-500", 
    url: "https://instagram.com/echostudios" 
  },
  { 
    icon: Facebook, 
    bgClass: "bg-blue-600/20 hover:bg-blue-600/30", 
    textClass: "text-blue-600", 
    url: "https://facebook.com/echostudios" 
  },
  { 
    icon: Twitter, 
    bgClass: "bg-blue-400/20 hover:bg-blue-400/30", 
    textClass: "text-blue-400", 
    url: "https://twitter.com/echostudios" 
  },
  { 
    icon: Youtube, 
    bgClass: "bg-red-600/20 hover:bg-red-600/30", 
    textClass: "text-red-600", 
    url: "https://youtube.com/echostudios" 
  }
];

export default function EchoContact() {
  const { ref: titleRef, isIntersecting: isTitleVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  const { ref: formRef, isIntersecting: isFormVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  const { ref: infoRef, isIntersecting: isInfoVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        service: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-secondary to-transparent"></div>
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
            isTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4">Book Your Session</h2>
          <p className="text-muted-foreground">Let's create something amazing together. Contact us to schedule your recording session or discuss your project.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={formRef}
            className={cn(
              "transition-all duration-1000",
              isFormVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <Card className="bg-secondary border-0">
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background border-muted/30 focus:ring-2 focus:ring-primary/50" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background border-muted/30 focus:ring-2 focus:ring-primary/50" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select 
                    value={formData.service} 
                    onValueChange={handleServiceChange}
                  >
                    <SelectTrigger className="bg-background border-muted/30 focus:ring-2 focus:ring-primary/50">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4} 
                    className="bg-background border-muted/30 focus:ring-2 focus:ring-primary/50" 
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white btn-hover shadow-lg hover:shadow-primary/40 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && (
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                </Button>
              </form>
            </Card>
          </div>
          
          <div 
            ref={infoRef}
            className={cn(
              "transition-all duration-1000 delay-300",
              isInfoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="mb-8">
              <h3 className="font-semibold text-2xl mb-4">Studio Location</h3>
              <div className="rounded-xl overflow-hidden h-64 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1559732277-7453b141e3a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Echo Studios Location" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h4 className="font-medium text-lg mb-1">Echo Studios</h4>
                  <p className="text-sm text-muted-foreground">123 Music Avenue, Soundtown, NY 10001</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Phone</h4>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">Mon-Fri: 10am - 8pm, Sat: 12pm - 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Mail className="text-blue-400 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <p className="text-muted-foreground">bookings@echostudios.com</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">We usually respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Calendar className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Book a Tour</h4>
                  <p className="text-muted-foreground">Schedule a studio tour before booking</p>
                  <a href="#" className="text-primary font-medium hover:text-blue-400 transition-colors mt-1 inline-flex items-center">
                    Book Tour 
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Social Media Section */}
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialMediaLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 ${social.bgClass} ${social.textClass} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
