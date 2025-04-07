import HeroImg from "../assets/hero.png"; 

function Hero() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Texto à esquerda */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#fff7f8] mb-6">
            Confiança e segurança para sua jornada financeira
          </h1>
          <p className="text-lg md:text-xl text-[#fff7f8] mb-8">
            Descubra como podemos ajudar você a alcançar seus objetivos financeiros com soluções personalizadas e suporte especializado.
          </p>
          <a
            href="#cta"
            className="bg-[#d08c65] text-[#fff7f8] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#b67554] transition"
          >
            Agende sua primeira consultoria grátis
          </a>
        </div>

        {/* Imagem à direita */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src={HeroImg} // Substitua pelo caminho da imagem real
            alt="Profissional confiante"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Elementos de confiança */}
      <div className="mt-16 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-[#1f1f1f] p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-[#d08c65]">Segurança</h3>
          <p className="text-sm text-[#fff7f8]">
            Seus dados e investimentos protegidos com tecnologia de ponta.
          </p>
        </div>
        <div className="bg-[#1f1f1f] p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-[#d08c65]">Experiência</h3>
          <p className="text-sm text-[#fff7f8]">
            Mais de 10 anos ajudando clientes a alcançar seus objetivos.
          </p>
        </div>
        <div className="bg-[#1f1f1f] p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-[#d08c65]">Suporte Especializado</h3>
          <p className="text-sm text-[#fff7f8]">
            Equipe pronta para atender você em todas as etapas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;