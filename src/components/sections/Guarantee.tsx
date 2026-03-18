"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Garantia de Risco Zero
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Tenho tanta confiança de que vais adorar o{" "}
            <span className="font-bold text-foreground">NutriReceitas</span> que te
            ofereço <span className="font-bold text-primary">7 dias de garantia incondicional</span>.
          </p>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Se não gostares das receitas, achares que não é para ti, ou simplesmente
            mudares de ideias... basta enviar um email e devolvemos 100% do teu
            dinheiro. Sem perguntas, sem complicações.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
