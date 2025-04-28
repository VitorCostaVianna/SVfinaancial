import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full h-[50vh] bg-black flex flex-col items-left justify-center text-left px-6">
      <h1 className="text-5xl font-extrabold mb-4 text-[#fff7f8]">
        Dúvidas Frequentes
      </h1>
      <p className="text-2xl mb-8 text-[#fff7f8] max-w-3xl">
        Encontre informações sobre nossas soluções aqui.
      </p>
    </section>
  );
};

export default HeroSection;