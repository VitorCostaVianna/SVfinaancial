import React from "react";
import Button from "./Button";

const CallToAction = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Texto */}
        <div className="md:w-2/3">
        <span className="text-lg font-medium text-[#d08c65]">Dê o primeiro passo</span>
        <div className="w-10 h-1 bg-[#d08c65] mx-auto md:mx-0 my-2"></div>
          <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600 mt-4">{subtitle}</p>
        </div>

        {/* Botão reutilizável */}
        <div className="md:w-auto">
          <Button href={buttonLink} text={buttonText} />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;