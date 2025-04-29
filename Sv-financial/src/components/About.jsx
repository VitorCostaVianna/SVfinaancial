import aboutImg from "../assets/images/about.webp";

const About = ({ backgroundColor = "bg-white", textColor = "text-[#1f1f1f]" }) => {
  return (
    <section id="sobre" className={`${backgroundColor} py-20`}>
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
        <div className={`md:w-1/2 text-left ${textColor}`}>
          <h2 className="text-4xl font-extrabold mb-6">Quem Somos</h2>
          <p className="text-lg mb-6">
            A SV Financial é uma empresa especializada em soluções de proteção e planejamento financeiro. Atuamos nos segmentos de seguro de vida, seguro empresarial, gestão de riscos e planejamento patrimonial, oferecendo serviços personalizados para pessoas físicas e empresas.
          </p>
          <p className="text-lg mb-6">
            Nosso compromisso é cuidar do que realmente importa: a segurança, o patrimônio e o futuro dos nossos clientes. Com expertise de mercado e atendimento consultivo, desenvolvemos estratégias sob medida para proteger e valorizar o que você conquistou.
          </p>
          <p className="text-lg mb-6">
            Mais do que seguros, entregamos tranquilidade, previsibilidade e proteção para você, sua família e seu negócio.
          </p>

          <a
            href="https://wa.me/message/HHQ6PYIIOYBAH1"
            className="inline-block bg-[#d08c65] text-[#fff7f8] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#b67554] transition"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;