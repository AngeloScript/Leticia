"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import ButtonCTA from '../ui/ButtonCTA';

const benefits = [
  "Acesso Imediato a +100 Receitas",
  "Opções para Café, Almoço, Jantar e Lanches",
  "Bônus: Guia de Supermercado",
  "Bônus: Chás Seca Barriga",
  "Acesso Vitalício ao Material",
  "Atualizações Gratuitas",
];

export default function Offer() {
  return (
    <section className="py-20 px-6 bg-primary/5 dark:bg-primary/10 border-b border-primary/10">
      <div id="oferta" className="max-w-4xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            A sua transformação começa <span className="text-primary italic">agora</span>.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Não deixe para amanhã a saúde que você pode conquistar hoje.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-dark-surface rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800 max-w-lg mx-auto"
        >
          <div className="bg-primary p-6 text-white text-center rounded-t-3xl">
            <span className="uppercase tracking-widest text-sm font-semibold opacity-90 block mb-2">Oferta Especial</span>
            <div className="text-5xl font-black mb-1 flex justify-center items-start">
              <span className="text-2xl mt-1 opacity-80">R$</span>
              <span className="tracking-tighter">17</span>
              <span className="text-xl self-end mb-2 opacity-80">,99</span>
            </div>
            <span className="text-sm opacity-90 block">Acesso Imediato</span>
          </div>

          <div className="p-8 space-y-6 text-left">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-gray-100 dark:border-gray-800 text-center space-y-4">
              <ButtonCTA href="https://pay.hotmart.com/I104962419M?off=bzs8bhtf&checkoutMode=10" variant="primary" pulse className="w-full text-lg font-bold shadow-xl shadow-primary/20">
                Quero Comprar Agora
              </ButtonCTA>
              
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span>🔒 Compra 100% Segura</span>
                <span>•</span>
                <span>✅ 7 Dias de Garantia</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
