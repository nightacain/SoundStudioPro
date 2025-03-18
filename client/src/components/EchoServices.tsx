import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { Mic, SlidersHorizontal, Music, Disc, Radio, Guitar, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Services data
const services = [
  {
    id: "recording",
    title: "Music Recording",
    description: "Professional studio recording with state-of-the-art equipment and experienced sound engineers to capture your perfect sound.",
    icon: Mic,
    price: "From $80/hour",
    popular: true,
    color: "primary",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mixing",
    title: "Audio Mixing",
    description: "Expert mixing services to blend your tracks perfectly, creating a balanced and professional sound for your project.",
    icon: SlidersHorizontal,
    price: "From $60/hour",
    color: "blue",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "production",
    title: "Music Production",
    description: "Full-service music production from concept to final master, helping develop your sound with professional producers.",
    icon: Music,
    price: "Custom Pricing",
    color: "primary",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mastering",
    title: "Mastering",
    description: "Professional audio mastering to ensure your tracks sound consistent and polished across all playback systems.",
    icon: Disc,
    price: "From $50/track",
    color: "blue",
    image: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "voiceover",
    title: "Voice-Over Recording",
    description: "Professional voice recording services for commercials, audiobooks, podcasts, and other voice-based projects.",
    icon: Radio,
    price: "From $70/hour",
    color: "primary",
    image: "https://images.unsplash.com/photo-1603557435578-5dd4c7667d34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "djschool",
    title: "DJ School",
    description: "Learn the art of DJing with our professional instructors. Master mixing, beatmatching, and performance techniques to start your DJ career.",
    icon: Headphones,
    price: "From $95/hour",
    color: "blue",
    image: "https://images.unsplash.com/photo-1571266028243-526a41cce4ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function EchoServices() {
  const { ref: titleRef, isIntersecting: isTitleVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  const { ref: servicesRef, isIntersecting: isServicesVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80; // Header height + some padding
      const top = contactSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-secondary to-transparent"></div>
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
            isTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4">Our Services</h2>
          <p className="text-muted-foreground">Comprehensive audio production services to help bring your creative vision to life.</p>
        </div>
        
        <div 
          ref={servicesRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className={cn(
                "overflow-hidden group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 bg-secondary border-0",
                "transition-all duration-700",
                isServicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { 
                  "delay-100": index % 3 === 0, 
                  "delay-200": index % 3 === 1, 
                  "delay-300": index % 3 === 2 
                }
              )}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent z-10"></div>
                <img 
                  src={service.image}
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {service.popular && (
                  <div className="absolute top-4 left-4 bg-primary/90 text-white text-sm font-medium py-1 px-3 rounded-full z-20">
                    Popular
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 bg-${service.color === 'primary' ? 'primary' : 'blue-400'}/20 rounded-full flex items-center justify-center mr-4`}>
                    <service.icon className={`text-${service.color === 'primary' ? 'primary' : 'blue-400'} h-5 w-5`} />
                  </div>
                  <h3 className="font-semibold text-xl">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`text-${service.color === 'primary' ? 'primary' : 'blue-400'} font-medium`}>{service.price}</span>
                  <button 
                    onClick={scrollToContact}
                    className="text-white hover:text-blue-400 transition-colors flex items-center"
                  >
                    Book Now 
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
