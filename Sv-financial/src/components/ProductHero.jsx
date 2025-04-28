import React from 'react';
import Button from "./Button";

const ProdutoHero = ({ title, subtitle, buttonText, backgroundImage }) => {
  const heroStyles = {
    tabSize: 4,
    lineHeight: '1.15',
    WebkitTextSizeAdjust: '100%',
    fontSize: '10px',
    '--swiper-navigation-size': '44px',
    '--swiper-theme-color': '#007aff',
    boxSizing: 'border-box',
    fontFamily: 'XP Lighthouse, sans-serif', // Adicione um fallback caso a fonte não carregue
    backgroundImage: `url("${backgroundImage}")`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div className="relative w-full py-24 md:py-32 lg:py-48 text-white" style={heroStyles}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay preto para melhorar a legibilidade do texto */}
      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <span className="text-lg font-medium text-[#d08c65]">SV Financial</span>
        <div className="w-10 h-1 bg-[#d08c65] mx-auto md:mx-0 my-2"></div>
        {title && <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-8">{title}</h1>}
        {subtitle && <p className="text-lg md:text-xl mb-8">{subtitle}</p>}
        {buttonText && (
          <Button text={buttonText} />
        )}
      </div>
    </div>
  );
};

export default ProdutoHero;