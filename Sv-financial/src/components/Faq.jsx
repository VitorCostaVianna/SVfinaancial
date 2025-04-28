import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = ({ 
  title = "Ficou com alguma dúvida?", 
  faqData = [], 
  backgroundColor = "#000000", // Cor de fundo
  textColor = "#fff7f8" // Cor do texto
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-20" 
      style={{ backgroundColor }} // Aplicando a cor de fundo dinamicamente
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Título da Seção */}
        <h2 
          className="text-4xl font-bold text-center mb-12" 
          style={{ color: textColor }} // Aplicando a cor do texto dinamicamente
        >
          {title}
        </h2>

        {/* Lista de FAQs */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b pb-4" style={{ borderColor: textColor }}>
              {/* Pergunta */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left font-medium text-lg hover:text-[#d08c65] transition"
                style={{ color: textColor }} // Aplicando a cor do texto dinamicamente
              >
                {item.question}
                {activeIndex === index ? (
                  <ChevronUp className="w-6 h-6" style={{ color: "#d08c65" }} />
                ) : (
                  <ChevronDown className="w-6 h-6" style={{ color: textColor }} />
                )}
              </button>

              {/* Resposta */}
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
                <p 
                  className="p-4 rounded-lg mt-2" 
                  style={{ backgroundColor: "#1f1f1f", color:"#ffffff" }}
                >
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