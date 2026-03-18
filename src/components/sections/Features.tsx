"use client";

import { motion } from "framer-motion";
import { 
  HeartIcon, 
  ClockIcon, 
  FaceSmileIcon, 
  FireIcon 
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "100+ Receitas Deliciosas",
    description: "Opções doces e salgadas, criadas para você comer bem sem sair da dieta.",
    icon: HeartIcon,
  },
  {
    title: "Preparo Rápido",
    description: "Receitas práticas que ficam prontas em menos de 20 minutos. Perfeito para o dia a dia corrido.",
    icon: ClockIcon,
  },
  {
    title: "Acelere seu Metabolismo",
    description: "Ingredientes estrategicamente combinados para ajudar na queima de gordura natural.",
    icon: FireIcon,
  },
  {
    title: "Sem Restrições Malucas",
    description: "Aprenda a fazer substituições inteligentes e continue comendo o que você ama.",
    icon: FaceSmileIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          >
            Tudo o que você precisa para <span className="text-primary">transformar seu corpo</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Desenvolvemos um método completo focado em sabor, praticidade e resultados reais.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white dark:bg-dark-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
