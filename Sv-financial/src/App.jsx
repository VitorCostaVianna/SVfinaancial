import { motion } from "framer-motion";
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

  // Variantes elegantes e diferentes
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: "easeOut" },
    },
  };

  return (
    <>
      <Navbar />

      <Hero />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInLeft}
      >
        <Services />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInRight}
      >
        <About />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInDown}
      >
        <Faq title="Perguntas Frequentes" faqData={faqData} />
      </motion.div>

      <motion.hr
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="border-t border-[#ffffff]"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Footer />
      </motion.div>
    </>
  );
}

export default App;