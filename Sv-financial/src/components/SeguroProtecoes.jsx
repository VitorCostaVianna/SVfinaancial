import React from "react";
import { Shield, HeartPulse, Hospital, Cross } from "lucide-react"; // Exemplos de ícones

const protecoes = [
  {
    id: 1,
    icon: <Shield className="w-12 h-12 text-[#d08c65]" />,
    title: "Invalidez por acidente",
    description: "Proteção financeira em caso de invalidez permanente causada por acidente.",
  },
  {
    id: 2,
    icon: <HeartPulse className="w-12 h-12 text-[#d08c65]" />,
    title: "Doenças graves",
    description: "Cobertura para diagnósticos de doenças graves, garantindo suporte financeiro.",
  },
  {
    id: 3,
    icon: <Hospital className="w-12 h-12 text-[#d08c65]" />,
    title: "Diária de internação hospitalar",
    description: "Receba um valor diário para cobrir despesas durante internações hospitalares.",
  },
  {
    id: 4,
    icon: <Cross className="w-12 h-12 text-[#d08c65]" />,
    title: "Morte natural",
    description: "Amparo financeiro para sua família em caso de falecimento por causas naturais.",
  },
];

const SeguroProtecoes = () => {
  return (
    <section className="bg-[#000000] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título da Seção */}
        <h2 className="text-4xl font-bold text-[#fff7f8] text-center mb-12">
          Conheça as Nossas Proteções
        </h2>

        {/* Layout em Colunas Alternadas */}
        <div className="space-y-12">
          {protecoes.map((protecao, index) => (
            <div
              key={protecao.id}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } gap-8`}
            >
              {/* Ícone */}
              <div className="flex-shrink-0">{protecao.icon}</div>

              {/* Texto */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-[#fff7f8] mb-2">
                  {protecao.title}
                </h3>
                <p className="text-[#fff7f8]">{protecao.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeguroProtecoes;