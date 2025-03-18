import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { setupGSAP } from "./lib/gsap";
import EchoHeader from "@/components/EchoHeader";
import EchoHero from "@/components/EchoHero";
import EchoAbout from "@/components/EchoAbout";
import EchoServices from "@/components/EchoServices";
import EchoPortfolio from "@/components/EchoPortfolio";
import EchoContact from "@/components/EchoContact";
import EchoFooter from "@/components/EchoFooter";
import BackToTop from "@/components/BackToTop";
import "./styles.css";

function App() {
  useEffect(() => {
    setupGSAP();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <EchoHeader />
        <main>
          <EchoHero />
          <EchoAbout />
          <EchoServices />
          <EchoPortfolio />
          <EchoContact />
        </main>
        <EchoFooter />
        <BackToTop />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
