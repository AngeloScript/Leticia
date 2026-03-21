"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingCart } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down a bit (past the hero CTA)
      const shouldShow = window.scrollY > 800;
      
      // Hide if at the very bottom where the final CTA is visible
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;

      setIsVisible(shouldShow && !isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-background/90 backdrop-blur-md border border-border shadow-2xl rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-auto">
              <div className="hidden md:block">
                <div className="text-sm font-medium text-muted-foreground">OFERTA ESPECIAL</div>
                <div className="font-bold text-foreground">NutriReceitas + 3 Bônus Exclusivos</div>
              </div>
              
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="text-right hidden sm:block">
                  <div className="text-sm line-through text-muted-foreground">R$ 67,00</div>
                  <div className="text-xl font-bold text-primary">R$ 17,99</div>
                </div>
                
                <a 
                  href="#oferta"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md bg-primary w-full sm:w-auto font-bold text-lg group shadow-xl shadow-primary/20"
                >
                  <ShoppingCart className="mr-2 w-5 h-5 group-hover:-rotate-12 transition-transform" />
                  Quero Acesso Agora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
