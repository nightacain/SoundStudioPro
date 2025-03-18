import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function setupGSAP() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Add custom animation for hover effects
  gsap.utils.toArray(".btn-hover").forEach((button: any) => {
    const btn = button;
    
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.3,
        ease: "power1.out"
      });
    });
    
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: "power1.out"
      });
    });
  });
}

// Create custom animations for elements
export function animateFrom(elem: Element, direction?: number) {
  direction = direction || 1;
  let x = 0,
      y = direction * 100;
  
  if (elem.classList.contains("from-left")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("from-right")) {
    x = 100;
    y = 0;
  }
  
  gsap.fromTo(
    elem,
    { x, y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto"
    }
  );
}

export function hide(elem: Element) {
  gsap.set(elem, { autoAlpha: 0 });
}

export const fadeInAnimation = (element: Element, delay: number = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      delay,
      ease: "power2.out" 
    }
  );
};

export const staggerAnimation = (elements: NodeListOf<Element>, staggerTime: number = 0.1) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      stagger: staggerTime,
      duration: 0.6, 
      ease: "power2.out" 
    }
  );
};
