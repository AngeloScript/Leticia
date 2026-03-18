import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Perdeu 4kg em 1 mês",
    content: "Sempre achei que dieta saudável era sem gosto. Esse e-book mudou minha visão! As receitas são fáceis, baratas e deliciosas. A torta de frango low carb é sucesso aqui em casa.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Juliana T.",
    role: "Mais energia e disposição",
    content: "Trabalho o dia todo e não tinha tempo de cozinhar. Com as dicas de organização do e-book, agora preparo minhas marmitas da semana em poucas horas. Me sinto muito mais disposta!",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Camila R.",
    role: "Recomendado pela nutri",
    content: "Minha nutricionista recomendou buscar opções variadas. Encontrei este material e tem sido um salvador. Consigo manter o foco na dieta sem sofrimento e sem gastar muito.",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-pink-50 dark:bg-pink-950/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Histórias Reais de Transformação
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Veja o que dizem as pessoas que já estão transformando sua alimentação com nossas receitas práticas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-dark-surface rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic mb-8 grow">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-primary dark:text-primary-light font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
