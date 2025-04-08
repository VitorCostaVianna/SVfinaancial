import { ShieldCheck, DollarSign, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const services = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-[#d08c65]" />,
    title: "Segurança",
    description: "Proteção total dos seus dados e movimentações financeiras.",
    hoverText: "Proteja seu futuro financeiro com nossa tecnologia avançada.",
    cta: "Entenda nossa segurança",
    testimonials: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. - João D.",
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. - Maria S.",
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. - Carlos T.",
    ],
  },
  {
    icon: <DollarSign className="w-12 h-12 text-[#d08c65]" />,
    title: "Controle Financeiro",
    description: "Gerencie investimentos e gastos com facilidade.",
    cta: "Saiba mais",
  },
  {
    icon: <Headphones className="w-12 h-12 text-[#d08c65]" />,
    title: "lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cta: "Saiba mais",
  },
];

const Services = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % services[0].testimonials.length);
    }, 5000); // Rotação automática a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="servicos" className="py-20 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#fff7f8] mb-12">
          Produtos e serviços
        </h2>
        <p className="text-xl font-bold text-[#fff7f8] opacity-80 mt-4 mb-12">
          Tudo o que a XP oferece para você aproveitar as melhores oportunidades de investimentos
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-b from-[#1f1f1f] to-[#000000] rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#d08c65] mb-4">
                {service.title}
              </h3>
              <p className="text-[#fff7f8] mb-6 leading-relaxed">
                {service.description}
              </p>
              {service.hoverText && (
                <motion.p
                  className="text-sm text-[#fff7f8] opacity-0 hover:opacity-100 transition duration-300"
                >
                  {service.hoverText}
                </motion.p>
              )}
              <a
                href="#"
                className="text-[#d08c65] font-medium hover:underline flex items-center justify-center"
              >
                {service.cta}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              {index === 0 && (
                <div className="mt-6 text-[#d0d0d0] italic text-sm">
                  {services[0].testimonials[activeTestimonial]}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;