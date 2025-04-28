import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  const faqData = [
    {
      question: "Por que devo contratar um Seguro de Vida?",
      answer:
        "O Seguro de Vida garante proteção financeira para você e sua família em situações inesperadas, como acidentes ou doenças graves, além de oferecer coberturas em vida e assistência emergencial.",
    },
    {
      question: "O que o Seguro de Vida Empresarial oferece para minha equipe?",
      answer:
        "Ele protege colaboradores e suas famílias em caso de imprevistos, melhora o pacote de benefícios da empresa e ajuda na retenção de talentos, com cobertura para morte, invalidez e doenças graves.",
    },
    {
      question: "Qual a diferença entre Seguro de Vida e Seguro de Acidentes Pessoais?",
      answer:
        "O Seguro de Vida cobre morte natural, doenças e acidentes. Já o de Acidentes Pessoais cobre apenas situações decorrentes de acidentes, como invalidez ou morte acidental.",
    },
    {
      question: "Como funciona o Planejamento Financeiro na SV Financial?",
      answer:
        "Oferecemos estratégias personalizadas para organizar suas finanças, equilibrar gastos, investir de forma inteligente e construir uma reserva financeira para o futuro.",
    },
    {
      question: "Quais são as vantagens do Planejamento Patrimonial?",
      answer:
        "O planejamento protege seu patrimônio, facilita a sucessão entre herdeiros, reduz burocracias e otimiza impostos sobre bens e investimentos.",
    },
    {
      question: "Seguro de Vida tem carência para uso?",
      answer:
        "Sim, algumas coberturas, como doenças graves, podem ter carência. Já coberturas para acidentes e morte acidental costumam ser imediatas após o início da vigência.",
    },
    {
      question: "Posso contratar esses serviços como pessoa física e também para minha empresa?",
      answer:
        "Sim! Oferecemos planos personalizados para pessoas físicas, empresas de pequeno, médio e grande porte, com soluções adaptadas para cada necessidade.",
    },
  ];
  

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Faq title="Perguntas Frequentes" faqData={faqData} />
      {/* Linha divisória */}
      <hr className="border-t border-[#ffffff]" />
      <Footer />
    </>
  );
}

export default App;
