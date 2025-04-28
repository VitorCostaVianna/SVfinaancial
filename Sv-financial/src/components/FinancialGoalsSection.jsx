import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect } from "react";
import CardWithIcon from "./CardWithIcon";
import Button from "./Button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FinancialGoalsSection = ({
  title = "Nossos diferenciais",
  subtitle = "Para cada objetivo, um caminho possível",
  buttonText = "Planeje seu futuro agora",
  goals = [],
  backgroundColor = "bg-[#fff7f8]",
  textColor = "text-[#000000]",
  arrowBgColor = "bg-gray-300", // Nova propriedade para a cor de fundo das setas
}) => {
  useEffect(() => {
    // Swiper re-render fix (for SSR/React strict mode issues)
  }, []);

  return (
    <section className={`${backgroundColor} py-32`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <span className={`text-lg font-medium text-[#d08c65]`}>{title}</span>
            <div className="w-10 h-1 bg-[#d08c65] mx-auto md:mx-0 my-2"></div>
            <h2 className={`text-4xl font-bold ${textColor}`}>{subtitle}</h2>
          </div>

          <div className="text-center">
            <Button text={buttonText} />
          </div>
        </div>

        {/* Carrossel de Objetivos */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="my-16"
          >
            {goals.map((goal, index) => (
              <SwiperSlide key={index}>
                <CardWithIcon
                  icon={goal.icon}
                  title={goal.title}
                  description={goal.description}
                  className="bg-white rounded-lg p-8 text-left mx-4 hover:shadow-lg transition duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navegação e paginação fora do Swiper */}
          <div className="flex flex-col items-center mt-10 space-y-4">
            <div className="swiper-pagination-custom flex justify-center space-x-2" />
            <div className="flex space-x-4">
              <button
                className={`swiper-button-prev-custom w-10 h-10 rounded-full ${arrowBgColor} text-white flex items-center justify-center hover:bg-gray-500 transition`}
              >
                &#8592;
              </button>
              <button
                className={`swiper-button-next-custom w-10 h-10 rounded-full ${arrowBgColor} text-white flex items-center justify-center hover:bg-gray-500 transition`}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialGoalsSection;