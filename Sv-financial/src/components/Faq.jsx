import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Como abrir uma conta na XP Investimentos?",
    answer: "Você pode abrir uma conta diretamente no site da XP Investimentos, preenchendo o formulário de cadastro e enviando os documentos necessários.",
  },
  {
    question: "Como funciona a assessoria na XP?",
    answer: "A assessoria da XP oferece suporte personalizado para ajudar você a tomar as melhores decisões de investimento, com base no seu perfil e objetivos financeiros.",
  },
  {
    question: "Como entrar em contato com a XP?",
    answer: "Você pode entrar em contato com a XP pelo telefone, e-mail ou chat disponível no site oficial.",
  },
  {
    question: "Quanto custa para investir na XP?",
    answer: "Os custos variam de acordo com o tipo de investimento. Consulte a tabela de tarifas no site da XP para mais informações.",
  },
  {
    question: "O que é a XP Inc.?",
    answer: "A XP Inc. é a holding que controla as operações da XP Investimentos e outras empresas do grupo, focadas em soluções financeiras.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#000000] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#fff7f8] text-center mb-12">
          Ficou com alguma dúvida?
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#1f1f1f] pb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left text-[#fff7f8] font-medium text-lg hover:text-[#d08c65] transition"
              >
                {item.question}
                {activeIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#d08c65]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#fff7f8]" />
                )}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  activeIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-[#fff7f8] bg-[#1f1f1f] p-4 rounded-lg mt-2">
                  {item.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;