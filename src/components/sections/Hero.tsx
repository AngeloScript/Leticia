"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/10 translate-y-1/2 -translate-x-1/2 rounded-full blur-3xl z-0" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-sm border border-primary/20 text-primary font-medium text-sm rounded-full mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              Mais de +10.000 de Receitas Saudáveis
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-neutral-900 tracking-tight">
              210 Receitas <span className="text-primary italic font-serif">Sem Glúten</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Por Letícia Dias. Chega de sofrer ou comer sem sabor! Descubra como ter uma vida saudável, comendo pratos deliciosos e livres de glúten todos os dias.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#oferta" className="inline-flex items-center justify-center w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-full bg-primary text-white hover:bg-primary/90 transition-all shadow-lg active:scale-95">
                Quero Acessar Agora
              </a>
            </div>
            
            <p className="mt-4 text-sm text-neutral-500 flex items-center justify-center lg:justify-start gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Garantia Incondicional de 7 Dias
            </p>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* The main hero visual could be an attractive image of healthy food or a mock-up of the digital product */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] md:aspect-[3/4] lg:aspect-[3/4] bg-neutral-200">
              <img 
                src="/ebook.png" 
                alt="210 Receitas Sem Glúten"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-xl border border-neutral-100 hidden md:flex items-center gap-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=1" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=2" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=3" alt="User" />
              </div>
              <div>
                <div className="flex text-accent text-sm">★★★★★</div>
                <div className="font-bold text-sm text-neutral-800">10k+ alunas</div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
