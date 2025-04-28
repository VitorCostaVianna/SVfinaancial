import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProdutoHero from '../components/ProductHero';
import FinancialGoalsSection from '../components/FinancialGoalsSection';
import { Home, Gift, Plane, Car } from "lucide-react";
import FinancialBenefitsSection from '../components/FinancialSolutions';
import About from '../components/About';
import CallToAction from "../components/CallToAction";
import backgroundImage from "../assets/images/fundoPlanejamento.webp";

const Planejamento = () => {
  const heroProps = {
    title: "Planejamento Financeiro", // Adicione o título desejado
    subtitle: "Organize suas finanças e alcance seus objetivos.", // Adicione o subtítulo desejado
    buttonText: "Começar Planejamento", // Adicione o texto do botão
    backgroundImage: backgroundImage,
  };

  return (
    <>
      <Navbar />

      <ProdutoHero {...heroProps} />
      <FinancialGoalsSection
        title="Objetivos financeiros que se tornam realidade"
        subtitle="Transforme planos em conquistas com organização e estratégia"
        buttonText="Comece seu plano financeiro"
        backgroundColor="bg-[#ffffff]"
        textColor="text-[#000000]"
        goals={[
          {
            icon: <Home className="text-[#d08c65] w-10 h-10" />,
            title: "Conquistar a Casa Própria",
            description: "Com planejamento, a realização do sonho da casa própria fica mais próxima do que você imagina.",
          },
          {
            icon: <Gift className="text-[#d08c65] w-10 h-10" />,
            title: "Realizar Grandes Sonhos",
            description: "Seja um casamento, uma festa ou um projeto pessoal — tudo começa com um bom plano financeiro.",
          },
          {
            icon: <Plane className="text-[#d08c65] w-10 h-10" />,
            title: "Viajar com Tranquilidade",
            description: "Organize suas finanças para explorar o mundo sem preocupações e sem dívidas.",
          },
          {
            icon: <Car className="text-[#d08c65] w-10 h-10" />,
            title: "Trocar de Carro",
            description: "Defina metas e junte recursos com inteligência para dar um upgrade na sua mobilidade.",
          },
          {
            icon: <Home className="text-[#d08c65] w-10 h-10" />,
            title: "Investir no Futuro",
            description: "Crie reservas, invista com estratégia e garanta estabilidade para os próximos anos.",
          },
          {
            icon: <Gift className="text-[#d08c65] w-10 h-10" />,
            title: "Planejar Eventos Especiais",
            description: "Seja qual for a ocasião, nós te ajudamos a se preparar financeiramente para torná-la memorável.",
          },
        ]}
      />

      <FinancialBenefitsSection
        title="Benefícios de um bom planejamento"
        subtitle="Organização financeira que traz tranquilidade e liberdade"
        buttonText="Inicie seu planejamento"
        backgroundColor="bg-gray-200"
        textColor="text-[#000000]"
        benefits={[
          {
            title: "Liberdade Financeira",
            description: "Construa uma vida com mais escolhas e menos preocupações financeiras.",
          },
          {
            title: "Segurança em Tempos Difíceis",
            description: "Tenha uma reserva para emergências e imprevistos, sem comprometer sua qualidade de vida.",
          },
          {
            title: "Alcance de Metas",
            description: "Realize seus planos com clareza e disciplina, sabendo exatamente onde quer chegar.",
          },
          {
            title: "Melhor Controle dos Gastos",
            description: "Saiba onde seu dinheiro está indo e como usá-lo de forma mais eficiente.",
          },
          {
            title: "Aposentadoria Tranquila",
            description: "Planeje desde já para garantir um futuro confortável e sem preocupações.",
          },
          {
            title: "Mais Qualidade de Vida",
            description: "Com finanças organizadas, você vive com mais leveza e foco no que realmente importa.",
          },
        ]}
      />

      <About backgroundColor="bg-black" textColor="text-white" />
      <CallToAction
        title="Permita-se viver o futuro financeiro que você sempre quis"
        subtitle="Estamos aqui para tornar isso possível. Transforme seu futuro financeiro com o acompanhamento da consultoria número 1 do Brasil."
        buttonText="Comece Agora"
      />
      <hr className="border-t border-[#ffffff]" />
      <Footer />
    </>
  );
};

export default Planejamento;