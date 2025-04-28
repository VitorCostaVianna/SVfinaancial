import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CardWithImage from "./CardWithImaage";
import Button from "./Button";

import "swiper/css";
import "swiper/css/pagination";

const FinancialSolutionsSection = ({
  title = "Nossas Soluções",
  subtitle = "Os benefícios de se planejar financeiramente",
  buttonText = "Veja como funciona",
  benefits = [],
  backgroundColor = "bg-gray-200",
  textColor = "text-[#000000]",
}) => {
  return (
    <section className={`${backgroundColor} py-32`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <span className="text-lg font-medium text-[#d08c65]">{title}</span>
            <div className="w-10 h-1 bg-[#d08c65] mx-auto md:mx-0 my-2"></div>
            <h2 className={`text-4xl font-bold ${textColor}`}>{subtitle}</h2>
          </div>

          <div className="text-center">
            <Button text={buttonText} />
          </div>
        </div>

        {/* Carrossel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="my-16"
        >
          {benefits.map((benefit, index) => (
            <SwiperSlide key={index}>
              <CardWithImage
                image={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                className="mx-4"
              />
            </SwiperSlide>
          ))}
          {/* Bullets de Paginação */}
          <div className="mt-12">
           <div className="swiper-pagination mt-8"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default FinancialSolutionsSection;