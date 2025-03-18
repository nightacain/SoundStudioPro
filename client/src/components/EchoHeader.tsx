import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import EchoWaveform from "./EchoWaveform";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function EchoHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on wider screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Header height + some padding
      const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header 
      id="mainHeader"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background bg-opacity-95 backdrop-blur-sm shadow-lg transition-all duration-300",
        isScrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <EchoWaveform scale="sm" className="mr-2" />
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="text-2xl font-bold"
          >
            <span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">Sound</span>Port
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {[
            { id: "home", label: "Главная" },
            { id: "about", label: "О нас" },
            { id: "services", label: "Услуги" },
            { id: "portfolio", label: "Портфолио" },
            { id: "contact", label: "Контакты" }
          ].map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
              className="nav-link font-medium hover:text-primary transition-colors"
            >
              {section.label}
            </a>
          ))}
          <Button
            className="ml-4 bg-primary hover:bg-primary/90 text-white btn-hover"
            onClick={() => scrollToSection("contact")}
          >
            Записаться
          </Button>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-secondary border-t border-muted/20 shadow-lg",
          !mobileMenuOpen && "hidden"
        )}
      >
        <div className="container mx-auto px-4 py-3">
          {[
            { id: "home", label: "Главная" },
            { id: "about", label: "О нас" },
            { id: "services", label: "Услуги" },
            { id: "portfolio", label: "Портфолио" },
            { id: "contact", label: "Контакты" }
          ].map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
              className="block py-3 px-4 hover:bg-muted/10 rounded-lg transition-colors"
            >
              {section.label}
            </a>
          ))}
          <Button
            className="w-full mt-2 bg-primary text-white"
            onClick={() => scrollToSection("contact")}
          >
            Записаться
          </Button>
        </div>
      </div>
    </header>
  );
}
