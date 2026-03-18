"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Terei acompanhamento médico ou nutricional?",
    answer: "Este material não substitui acompanhamento médico. Ele é um guia de receitas práticas para te ajudar no dia a dia com opções saudáveis. Dúvidas devem sempre ser tiradas com seu profissional de saúde."
  },
  {
    question: "Como vou receber o e-book?",
    answer: "Assim que o pagamento for confirmado, você receberá um e-mail com o link para acessar e baixar todo o material na plataforma segura."
  },
  {
    question: "Os ingredientes são caros ou difíceis de achar?",
    answer: "De jeito nenhum! Focamos em ingredientes acessíveis, que você encontra em qualquer supermercado ou feira."
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem 7 dias de garantia incondicional. Se não gostar do material, basta enviar um e-mail que devolveremos 100% do seu dinheiro, sem perguntas."
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Sim! O e-book é em formato PDF otimizado para celulares, tablets e computadores, para você ler e levar pra cozinha."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Tire suas dúvidas e garanta sua transformação.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-gray-50 dark:bg-dark-surface"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDownIcon className="w-5 h-5 text-primary shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
