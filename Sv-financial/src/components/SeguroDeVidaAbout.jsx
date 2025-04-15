import aboutImg from "../assets/images/about.webp";

const SeguroDeVidaAbout = () => {
  return (
    <section id="sobre" className={`bg-black py-20`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Texto à direita */}
        <div className={`md:w-1/2 text-left text-white`}>
          <h2 className="text-6xl font-extrabold mb-4">
            <span className="text-[#d08c65]">Assessoria exclusiva</span>
          </h2>
          <p className="text-6xl mb-6">
            para auxiliar na simulação do seu seguro de vida
          </p>
          <a
            href="#"
            className="inline-block bg-[#d08c65] text-[#fff7f8] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#b67554] transition"
          >
            Abra sua conta
          </a>
        </div>

        {/* Imagem à esquerda */}
        <div className="md:w-1/2">
          <img
            src={aboutImg}
            alt="Seguro de Vida"
            className="rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default SeguroDeVidaAbout;