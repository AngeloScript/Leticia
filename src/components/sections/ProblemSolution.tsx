"use client";

import { motion } from "framer-motion";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const problems = [
  "Dietas restritivas que te deixam com fome",
  "Efeito sanfona: perde peso e ganha tudo de novo",
  "Falta de tempo para preparar refeições complexas",
  "Baixa energia e indisposição no dia a dia",
  "Dificuldade em manter a constância",
];

const solutions = [
  "Receitas deliciosas e fáceis de preparar",
  "Emagrecimento sustentável e duradouro",
  "Pratos prontos em menos de 20 minutos",
  "Mais energia, saúde e autoestima",
  "Coma o que gosta, sem culpa",
];

export default function ProblemSolution() {
  return (
    <section className="py-16 px-6 bg-white border-b border-gray-100 dark:bg-dark-surface dark:border-gray-800">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Chega de sofrer para emagrecer!
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Você provavelmente já se frustrou tentando alcançar o corpo dos sonhos. E a culpa não é sua! O mercado te ensinou a fazer dietas malucas que não são sustentáveis.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-red-50 dark:bg-red-900/10 rounded-2xl p-6 md:p-8 shadow-sm border border-red-100 dark:border-red-900/20"
          >
            <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-6 flex items-center gap-2">
              <span className="text-2xl">❌</span> O Jeito Errado
            </h3>
            <ul className="space-y-4">
              {problems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircleIcon className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-primary/5 rounded-2xl p-6 md:p-8 shadow-sm border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5">
              {/* Optional: Add a subtle background pattern or icon here */}
            </div>
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2 relative z-10">
              <span className="text-2xl">✅</span> A Nossa Solução
            </h3>
            <ul className="space-y-4 relative z-10">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
