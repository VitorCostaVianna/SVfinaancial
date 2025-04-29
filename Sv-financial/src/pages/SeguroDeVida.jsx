import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProdutoHero from '../components/ProductHero';
import FinancialGoalsSection from '../components/FinancialGoalsSection';
import "../assets/css/swiper-custom.css";
import { Home, Gift, Plane, Car, ShieldCheck, Layers, LifeBuoy, Heart } from "lucide-react";
import About from '../components/About';
import CallToAction from "../components/CallToAction";
import backgroundImage from "../assets/images/fundoPlanejamento.webp";
import SeguroDeVidaAbout from '../components/SeguroDeVidaAbout';
import ListSeguro from "../components/ListSeguro";
import SeguroProtecoes from "../components/SeguroProtecoes";
import Faq from "../components/Faq";
import { motion } from 'framer-motion';

const Planejamento = () => {
  const heroProps = {
    title: "Seguro de Vida e Acidentes", // Adicione o título desejado
    subtitle: "O investimento que protege o que você mais investe", // Adicione o subtítulo desejado
    buttonText: "Entre em contato", // Adicione o texto do botão
    backgroundImage: backgroundImage,
  };

  const faqData = [
    {
      question: "O que é um seguro de vida?",
      answer: "O seguro de vida é uma proteção financeira para você e sua família em caso de imprevistos.",
    },
    {
      question: "Quais são as coberturas disponíveis?",
      answer: "As coberturas incluem invalidez, doenças graves, morte natural e muito mais.",
    },
    {
      question: "Como contratar um seguro de vida?",
      answer: "Você pode contratar um seguro de vida entrando em contato com nossos consultores especializados.",
    },
  ];

  const benefits = [
    {
      id: 1,
      icon: <ShieldCheck className="w-6 h-6 text-[#d08c65]" />,
      title: "Coberturas personalizadas",
      description: "Escolha as coberturas que melhor atendem às suas necessidades específicas.",
    },
    {
      id: 2,
      icon: <Layers className="w-6 h-6 text-[#d08c65]" />,
      title: "Diversas opções de coberturas",
      description: "Encontre a solução ideal para proteger você e sua família.",
    },
    {
      id: 3,
      icon: <LifeBuoy className="w-6 h-6 text-[#d08c65]" />,
      title: "Assistências e serviços",
      description: "Aproveite serviços adicionais que facilitam o seu dia a dia.",
    },
    {
      id: 4,
      icon: <Heart className="w-6 h-6 text-[#d08c65]" />,
      title: "Proteção por toda a vida",
      description: "Garanta segurança e tranquilidade para você e seus entes queridos.",
    },
  ];

  // Variantes de animação
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <ProdutoHero {...heroProps} />
      </motion.div>

      <ListSeguro title="Benefícios do Seguro" items={benefits} />

      {/* Financial Goals Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <FinancialGoalsSection
          title="Proteção que faz a diferença"
          subtitle="Seguro de vida pensado para cuidar de você e de quem você ama"
          buttonText="Simule sua proteção"
          backgroundColor="bg-[#ffffff]"
          textColor="text-[#000000]"
          arrowBgColor="bg-gray-400"
          goals={[
            {
              icon: <Home className="text-[#d08c65] w-10 h-10" />,
              title: "Proteção para sua Família",
              description:
                "Garanta a segurança financeira dos seus entes queridos em momentos imprevistos, com cobertura completa e personalizada.",
            },
            {
              icon: <Gift className="text-[#d08c65] w-10 h-10" />,
              title: "Proteção para a vida toda",
              description:
                "Tenha acesso a benefícios em vida, como coberturas para doenças graves, invalidez e assistência em emergências.",
            },
            {
              icon: <Plane className="text-[#d08c65] w-10 h-10" />,
              title: "Planejamento do Futuro",
              description:
                "Transforme o seguro em um instrumento de planejamento, garantindo estabilidade e bem-estar para quem mais importa.",
            },
            {
              icon: <Car className="text-[#d08c65] w-10 h-10" />,
              title: "Proteção pelo tempo que precisar",
              description:
                "Escolha planos sob medida para seu perfil e necessidades, com flexibilidade de valores e serviços adicionais.",
            },
            {
              icon: <Home className="text-[#d08c65] w-10 h-10" />,
              title: "Suporte nos Momentos Difíceis",
              description:
                "Conte com assistência completa para sua família quando ela mais precisar, com atendimento ágil e humanizado.",
            },
            {
              icon: <Gift className="text-[#d08c65] w-10 h-10" />,
              title: "Segurança para o Legado",
              description:
                "Assegure a continuidade do seu legado com planejamento sucessório facilitado e recursos garantidos para seus herdeiros.",
            },
          ]}
        />
      </motion.div>

      {/* Seguro Proteções */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInRight}
      >
        <SeguroProtecoes />
      </motion.div>

      {/* Sobre Seguro de Vida */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInLeft}
      >
        <SeguroDeVidaAbout />
      </motion.div>


      <About backgroundColor="bg-white" textColor="text-black" />


      <CallToAction
        title="Cuide de quem importa em todos os momentos"
        subtitle="Com o seguro de vida certo, você garante proteção, tranquilidade e amparo para o presente e o futuro da sua família."
        buttonText="Simule seu seguro"
      />

      {/* FAQ Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <Faq title="Perguntas Frequentes sobre Seguro de Vida" faqData={faqData} />
      </motion.div>

      <hr className="border-t border-[#ffffff]" />
      <Footer />
    </>
  );
};

export default Planejamento;