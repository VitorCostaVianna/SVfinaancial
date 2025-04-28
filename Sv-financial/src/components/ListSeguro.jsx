import React from "react";

const ListSeguro = ({ title = "Benefícios do Seguro", items = [] }) => {
  return (
    <section className="bg-[#ffffff] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título da Seção */}
        <h2 className="text-4xl font-bold text-[#0f0f0f] text-left mb-8">
          {title}
        </h2>

        {/* Lista de Benefícios */}
        <ul className="space-y-6">
          {items.map((item) => (
            <li key={item.id} className="flex items-start gap-4">
              {/* Ícone */}
              <div>{item.icon}</div>

              {/* Texto */}
              <div>
                <h3 className="text-lg font-semibold text-[#0f0f0f]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#0f0f0f]">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ListSeguro;