import React from "react";

const CardWithImage = ({ image, title, description, className = "" }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 ${className}`}
    >
      {/* Parte superior com imagem e título */}
      <div className="bg-gray-300 p-6 flex flex-col items-center">
        <div className="mb-4">{image}</div>
        <h3 className="text-lg font-semibold text-gray-900 text-center">{title}</h3>
      </div>

      {/* Parte inferior com a descrição */}
      <div className="p-8 text-left">
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CardWithImage;