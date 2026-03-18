export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8 text-center text-sm text-gray-500 dark:text-gray-400">
        
        <div className="space-y-4">
          <p className="font-semibold text-gray-900 dark:text-white">
            Nutri Recipes Digital
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs mt-2">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </div>

        <div className="text-xs leading-relaxed max-w-2xl mx-auto">
          <p className="font-bold underline mb-2">Aviso Legal Importante</p>
          <p>
            As informações disponibilizadas neste site e no material digital (e-book/receitas) possuem caráter exclusivamente educativo e informativo. Não substituem, de maneira alguma, o diagnóstico, tratamento ou acompanhamento de médicos, nutricionistas ou outros profissionais de saúde.
          </p>
          <p className="mt-2">
            Antes de iniciar qualquer dieta, alterar hábitos alimentares ou começar uma rotina de exercícios físicos, consulte um profissional de saúde qualificado para avaliar suas necessidades e condições individuais. Os resultados podem variar de pessoa para pessoa.
          </p>
          <p className="mt-2">
            Este produto não garante resultados específicos e a responsabilidade pelas escolhas alimentares e adoção das receitas é inteiramente do usuário.
          </p>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col items-center">
          <p>&copy; {new Date().getFullYear()} Nutri Recipes Digital. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
