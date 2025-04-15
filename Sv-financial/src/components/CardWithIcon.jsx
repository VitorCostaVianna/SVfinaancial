import React from "react";

const CardWithIcon = ({ icon, title, description, className = "", titleClassName = "" }) => {
  return (
    <div
      className={`${className}`}
    >
      {/* Ícone e Título */}
      <div className={`flex items-center gap-5 mb-6 ${titleClassName}`}>
        <div className="text-2xl">{icon}</div>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>

      {/* Linha divisória */}
      <hr className="border-t border-gray-300" />

      {/* Descrição */}
      <p className="text-lg text-[#1f1f1f] mt-6">{description}</p>
    </div>
  );
};

export default CardWithIcon;