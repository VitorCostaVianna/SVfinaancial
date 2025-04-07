import aboutImg from "../assets/about.webp";

const About = () => {
  return (
    <section id="sobre" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Imagem */}
        <div className="md:w-1/2">
          <img
            src={aboutImg}
            alt="Sobre a empresa"
            className="rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-extrabold text-[#000000] mb-6">
            Quem Somos
          </h2>
          <p className="text-lg text-[#1f1f1f] mb-6">
            Somos uma empresa comprometida com a transformação financeira
            digital. Nosso objetivo é tornar os investimentos acessíveis e
            seguros para todos, com tecnologia de ponta e atendimento
            humanizado.
          </p>
          <p className="text-lg text-[#1f1f1f] mb-6">
            Com anos de experiência no mercado, oferecemos soluções completas
            para você investir com confiança e autonomia.
          </p>
          <a
            href="#"
            className="inline-block bg-[#d08c65] text-[#fff7f8] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#b67554] transition"
            loading="lazy"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;