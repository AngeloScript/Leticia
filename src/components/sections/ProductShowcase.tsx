"use client";

import { motion } from "framer-motion";
import { BookOpen, Smartphone, Utensils, HeartPulse } from "lucide-react";
import Image from "next/image";

const products = [
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "100+ Receitas Saudáveis",
    description:
      "Acesso imediato a dezenas de opções fáceis e rápidas para todas as refeições do dia.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Na Palma da Tua Mão",
    description:
      "Acede a tudo a partir do teu telemóvel, tablet ou computador. Lê as receitas enquanto cozinhas, sem complicações.",
  },
  {
    icon: <Utensils className="w-8 h-8 text-primary" />,
    title: "Plano Alimentar Inteligente",
    description:
      "Dicas e sugestões para organizares a tua semana e garantires que ficas no caminho certo.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-primary" />,
    title: "Resultados Duradouros",
    description:
      "Aprenda a comer de forma saudável sem dietas restritivas e alcance seus objetivos.",
  },
];

export function ProductShowcase() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            O que vais levar <span className="text-primary text-glow">hoje</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acesso completo ao nosso material premium, pensado para facilitar a tua vida e
            garantir resultados sem sofrimento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left: Product Image / Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl bg-card border border-border flex flex-col items-center justify-center p-8 text-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-full flex-1 relative mb-6 min-h-[300px]">
                {/* Image */}
                <div className="absolute inset-x-4 bottom-0 top-4 rounded-xl border border-primary/20 shadow-xl overflow-hidden">
                  <Image 
                    src="/images/premium_recipe_book.png" 
                    alt="ReceitasFit Premium"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">ReceitasFit Premium</h3>
              <p className="text-primary font-medium mt-1">Acesso Imediato</p>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-card dark:bg-zinc-800 p-4 rounded-xl shadow-xl border border-border flex items-center gap-4"
            >
              <div className="bg-primary/20 p-2 rounded-full">
                <HeartPulse className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">+5000</p>
                <p className="text-xs text-muted-foreground">Vidas transformadas</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Product Features */}
          <div className="space-y-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/50 hover:bg-card transition-colors shadow-sm"
              >
                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg border border-primary/20">
                  {product.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">{product.title}</h4>
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
