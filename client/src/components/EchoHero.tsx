import { Button } from "@/components/ui/button";
import EchoWaveform from "./EchoWaveform";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import videoBackground from "../video/video.mp4";

export default function EchoHero() {
  const { ref, isIntersecting } = useIntersectionObserver({
    rootMargin: "-100px 0px",
    threshold: 0.3,
  });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Header height + some padding
      const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      ref={ref}
      className="pt-28 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background to-secondary opacity-70 z-10"></div>
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src={videoBackground} type="video/mp4" />
        </video>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Ваша музыка — <span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">наше</span> искусство
          </h1>
          
          <p className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Записываем, сводим и мастерим музыку на профессиональном оборудовании. Команда опытных звукорежиссёров поможет воплотить ваши идеи.
          </p>
          
          <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center transition-all duration-1000 delay-500 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white btn-hover shadow-lg hover:shadow-primary/40"
              onClick={() => scrollToSection("services")}
            >
              Услуги студии
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white hover:border-blue-400 text-white hover:bg-white/5 btn-hover"
              onClick={() => scrollToSection("contact")}
            >
              Записаться
            </Button>
          </div>
        </div>
        
        {/* Audio Waveform Animation */}
        <div className={`mt-16 flex justify-center transition-all duration-1000 delay-700 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <EchoWaveform scale="lg" bars={14} />
        </div>
      </div>
    </section>
  );
}
