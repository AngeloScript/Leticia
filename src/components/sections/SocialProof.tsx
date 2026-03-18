import { Users, Star, TrendingUp, Heart } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Alunas Transformadas",
    value: "+10.000",
    icon: Users,
  },
  {
    id: 2,
    name: "Avaliações 5 Estrelas",
    value: "4.9/5",
    icon: Star,
  },
  {
    id: 3,
    name: "Receitas Testadas",
    value: "+100",
    icon: Heart,
  },
  {
    id: 4,
    name: "Resultados no 1º Mês",
    value: "98%",
    icon: TrendingUp,
  },
];

export default function SocialProof() {
  return (
    <section className="bg-white dark:bg-dark-surface border-y border-gray-100 dark:border-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-y-0 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center gap-y-3">
              <div className="flex bg-primary/10 dark:bg-primary/20 w-12 h-12 rounded-full items-center justify-center text-primary dark:text-primary-light">
                <stat.icon className="w-6 h-6" />
              </div>
              <dt className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                {stat.name}
              </dt>
              <dd className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
