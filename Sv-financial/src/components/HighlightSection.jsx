import React from "react";
import aboutImg from "../assets/images/about.webp";
import Button from "./Button";

const HighlightSection = () => {
  return (
    <section className="w-full h-[400px] flex items-center justify-center bg-[#f7f7f7] relative">
      {/* Imagem à Esquerda */}
      <div className="w-100 h-full mt-50 relative z-10">
        <img
          src={aboutImg}
          alt="Planejamento Financeiro e Gestão de Riscos"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bloco de Texto Sobreposto */}
      <div className="w-1/2 h-[75] flex bg-gradient-to-b from-[#1f1f1f] to-[#000000] relative -ml-16 z-0 mr-50 rounded-lg shadow-lg ">
        <div className="p-8">
           <h2 className="text-[#fff7f8] text-2xl md:text-3xl font-bold text-center mb-4">
            Custa pouco e vale muito
          </h2>
          <p className="text-[#e0e0e0] text-sm md:text-base text-right mb-6">
            Melhorar o pacote de benefícios oferecidos pela sua empresa ajuda a
            atrair e reter os profissionais mais qualificados, otimizando sua
            equipe.
          </p>

          <div className="text-center">
            <Button text="Saiba mais" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;