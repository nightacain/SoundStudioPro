import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Medal, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

// Stats data
const stats = [
  { label: "Лет опыта", value: "12+", id: "years" },
  { label: "Записанных артистов", value: "500+", id: "artists" },
  { label: "Выпущенных альбомов", value: "200+", id: "albums" },
  { label: "Профессиональных наград", value: "15", id: "awards" }
];

export default function EchoAbout() {
  const { ref: sectionRef, isIntersecting: isSectionVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  const { ref: statsRef, isIntersecting: isStatsVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-secondary relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "transition-all duration-1000",
            isSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h2 className="font-bold text-3xl mb-6 inline-block relative">
              О студии SoundPort
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary"></span>
            </h2>
            <p className="text-muted-foreground mb-6">
              С 2010 года создаём качественные записи для музыкантов. Работаем в просторной студии с профессиональным оборудованием и акустикой.
            </p>
            <p className="text-muted-foreground mb-6">
              Наши звукорежиссёры помогут записать альбом, сингл или войсовер. Создадим именно то звучание, которое вы хотите.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Medal className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Признание</h3>
                  <p className="text-sm text-muted-foreground">Награды в индустрии</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mr-4">
                  <Headphones className="text-blue-400 h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Оборудование</h3>
                  <p className="text-sm text-muted-foreground">Топовые микрофоны и пульты</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "relative group transition-all duration-1000 delay-300",
            isSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-blue-400/30 rounded-lg blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <img 
                src="/src/main.jpg" 
                alt="Студия звукозаписи SoundPort" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className={cn(
                "text-center p-6 bg-background/50 rounded-lg hover:bg-background/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10",
                "transition-all duration-700",
                isStatsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "delay-100": index === 0, "delay-200": index === 1, "delay-300": index === 2, "delay-400": index === 3 }
              )}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
