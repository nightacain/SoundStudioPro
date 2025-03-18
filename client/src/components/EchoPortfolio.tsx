import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Portfolio projects data
const projects = [
  {
    id: "midnight",
    title: "Полночные отголоски",
    type: "Сведение и мастеринг",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "summer",
    title: "Летняя дымка",
    type: "Полный цикл",
    image: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "electric",
    title: "Электрическая душа",
    type: "Запись и сведение",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "neon",
    title: "Неоновые ночи",
    type: "Продакшн и мастеринг",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "acoustic",
    title: "Акустические сессии",
    type: "Живая запись",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "digital",
    title: "Цифровые мечты",
    type: "Электронная музыка",
    image: "https://images.unsplash.com/photo-1598387993281-ceccc4908367?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "vinyl",
    title: "Возрождение винила",
    type: "Винтажная запись",
    image: "https://images.unsplash.com/photo-1504509546545-e000b4a62425?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "rhythm",
    title: "Ритм-секция",
    type: "Запись ударных",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

export default function EchoPortfolio() {
  const { ref: titleRef, isIntersecting: isTitleVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  const { ref: projectsRef, isIntersecting: isProjectsVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  const { ref: buttonRef, isIntersecting: isButtonVisible } = useIntersectionObserver({
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
    <section id="portfolio" className="py-20 bg-secondary relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
            isTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4">Наши работы</h2>
          <p className="text-muted-foreground">Альбомы и проекты, над которыми мы недавно работали</p>
        </div>
        
        <div 
          ref={projectsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "group relative",
                "transition-all duration-700",
                isProjectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { 
                  "delay-100": index % 4 === 0, 
                  "delay-200": index % 4 === 1, 
                  "delay-300": index % 4 === 2,
                  "delay-400": index % 4 === 3
                }
              )}
            >
              <div className="aspect-square overflow-hidden rounded-xl">
                <img 
                  src={project.image}
                  alt={`Album: ${project.title}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="font-medium text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.type}</p>
                  <div className="mt-3 flex space-x-2">
                    <a href="#" className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors">
                      <svg className="h-4 w-4" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center hover:bg-blue-400/40 transition-colors">
                      <svg className="h-4 w-4" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.53 17.583H6.788V8.318h2.682v9.265zm-1.341-10.53h-.018c-.9 0-1.481-.622-1.481-1.397 0-.795.598-1.397 1.517-1.397.9 0 1.463.602 1.48 1.397 0 .776-.58 1.397-1.498 1.397zm11.474 10.53h-2.684v-4.96c0-1.086-.388-1.823-1.359-1.823-.74 0-1.18.498-1.366.98-.07.173-.087.415-.087.657v5.145H11.42V8.318h2.687v1.17c.418-.559 1.087-1.352 2.633-1.352 1.923 0 3.365 1.258 3.365 3.965v5.482z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          ref={buttonRef}
          className={cn(
            "text-center mt-12",
            "transition-all duration-1000 delay-500",
            isButtonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white btn-hover shadow-lg hover:shadow-primary/40"
            onClick={scrollToContact}
          >
            Начать проект
          </Button>
        </div>
      </div>
    </section>
  );
}
