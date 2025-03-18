import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { Mic, SlidersHorizontal, Music, Disc, Radio, Guitar, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Services data
const services = [
  {
    id: "recording",
    title: "Запись музыки",
    description: "Записываем на профессиональном оборудовании. Опытные звукорежиссёры помогут добиться идеального звучания.",
    icon: Mic,
    price: "От 3000 ₽/час",
    popular: true,
    color: "primary",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mixing",
    title: "Сведение",
    description: "Сбалансируем звучание всех инструментов. Сделаем ваш трек профессиональным и конкурентным.",
    icon: SlidersHorizontal,
    price: "От 2500 ₽/час",
    color: "blue",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "production",
    title: "Продюсирование",
    description: "Создадим музыку с нуля. Поможем развить ваше звучание от идеи до готового мастера.",
    icon: Music,
    price: "Индивидуально",
    color: "primary",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mastering",
    title: "Мастеринг",
    description: "Сделаем ваш трек громким и сочным. Звук будет качественным на любых колонках и наушниках.",
    icon: Disc,
    price: "От 2000 ₽/трек",
    color: "blue",
    image: "https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "voiceover",
    title: "Запись голоса",
    description: "Записываем рекламу, аудиокниги и подкасты. Чистый звук без посторонних шумов.",
    icon: Radio,
    price: "От 2500 ₽/час",
    color: "primary",
    image: "/src/mic.jpg"
  },
  {
    id: "djschool",
    title: "Школа DJ",
    description: "Научим сводить треки и работать с аудиторией. Опытные преподаватели помогут освоить основы диджеинга.",
    icon: Headphones,
    price: "От 3500 ₽/час",
    color: "blue",
    image: "/src/dj.jpg"
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
          <h2 className="font-bold text-3xl md:text-4xl mb-4">Наши услуги</h2>
          <p className="text-muted-foreground">Полный цикл производства аудио: от записи до готового релиза</p>
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
                    Популярно
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
                    Записаться 
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
