"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Gift, Lock } from "lucide-react";

const bonuses = [
  {
    title: "Guia de Sobremesas Saudáveis",
    description:
      "Aprenda a fazer doces incríveis sem açúcar refinado. Perfeito para quando bate aquela vontade de um doce.",
    value: "R$ 19,90",
    imagePlaceholder: "Sobremesas",
    image: "/images/healthy_desserts.png"
  },
  {
    title: "Lista de Compras Inteligente",
    description:
      "Vá ao supermercado sabendo exatamente o que comprar. Poupe tempo e dinheiro em todas as suas compras.",
    value: "R$ 14,90",
    imagePlaceholder: "Lista",
    image: "/images/smart_shopping_list.png"
  },
  {
    title: "Acesso à Comunidade VIP",
    description:
      "Grupo exclusivo onde você pode compartilhar resultados, tirar dúvidas e se manter motivada todos os dias.",
    value: "R$ 29,90",
    imagePlaceholder: "VIP",
    image: "/images/vip_community.png"
  },
];

export function Bonuses() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
            <Gift className="w-5 h-5" />
            <span>Bônus Exclusivos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Achou que era só isso?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ao garantir o seu acesso hoje, você leva também estes 3 bônus
            exclusivos <span className="font-bold text-foreground">totalmente grátis</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden group hover:border-primary/50 transition-colors"
            >
              {/* Image */}
              <div className="aspect-video bg-muted relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:scale-105 transition-transform duration-500 z-10" />
                <img src={bonus.image} alt={bonus.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-foreground">{bonus.title}</h3>
                <p className="text-muted-foreground mb-6 h-20">
                  {bonus.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="text-sm text-muted-foreground">Valor Normal:</div>
                  <div className="font-bold text-lg line-through text-destructive">
                    {bonus.value}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm font-medium text-foreground">HOJE:</div>
                  <div className="font-bold text-xl text-primary flex items-center gap-1">
                    <CheckCircle2 className="w-5 h-5" />
                    GRÁTIS
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-secondary/10 border border-secondary/20"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Lock className="w-5 h-5 text-secondary" />
            <span className="font-bold text-foreground text-xl">Mais de R$ 60 em Bônus</span>
          </div>
          <p className="text-muted-foreground">
            Estes bônus são limitados e podem ser retirados a qualquer momento. 
            Aproveita a oferta especial de hoje para garantires todos eles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


