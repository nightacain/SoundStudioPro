import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Button
      id="backToTop"
      size="icon"
      className={cn(
        "fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary/90 text-white shadow-lg hover:bg-primary z-40",
        "transition-all duration-300 transform",
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
      onClick={scrollToTop}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
