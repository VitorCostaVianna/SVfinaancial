import React from "react";
import aboutImg from "../assets/images/about.webp";
import Button from "./Button";

const HighlightSection = () => {
  return (
    <section
  className="
    w-full
    flex flex-col          /* MOBILE + TABLET: coluna */
    items-center justify-center
    bg-[#f7f7f7]
    relative
    h-auto
    lg:flex-row           /* DESKTOP: linha a partir de 1024px */
    lg:h-[400px]          /* DESKTOP: sua altura fixa */
  "
>
  {/* Imagem */}
  <div
    className="
      w-full                /* MOBILE+TABLET: 100% */
      h-[200px]             /* MOBILE+TABLET: altura menor */
      mt-0
      relative z-10
      lg:w-100              /* DESKTOP: seu w-100 */
      lg:h-full             /* DESKTOP: h-full */
      lg:mt-50              /* DESKTOP: mt-50 */
    "
  >
    <img
      src={aboutImg}
      alt="Planejamento Financeiro e Gestão de Riscos"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Texto */}
  <div
    className="
      w-full                /* MOBILE+TABLET: 100% */
      h-auto
      mt-6                  /* MOBILE+TABLET: espaço abaixo da imagem */
      flex
      bg-gradient-to-b from-[#1f1f1f] to-[#000000]
      relative
      rounded-lg shadow-lg
      lg:w-1/2              /* DESKTOP: 50% */
      lg:h-[75]             /* DESKTOP: h-[75] */
      lg:mt-0               /* DESKTOP: sem margin-top */
      lg:-ml-16             /* DESKTOP: overlap */
      lg:mr-50              /* DESKTOP: overlap */
    "
  >
    <div className="p-8">
      <h2 className="text-[#fff7f8] text-2xl lg:text-3xl font-bold text-center mb-4">
        Custa pouco e vale muito
      </h2>
      <p className="text-[#e0e0e0] text-sm lg:text-base text-right mb-6">
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