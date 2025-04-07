import { ShieldCheck, DollarSign, Headphones } from "lucide-react";

const services = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-[#d08c65]" />,
    title: "Segurança",
    description: "Proteção total dos seus dados e movimentações financeiras.",
  },
  {
    icon: <DollarSign className="w-12 h-12 text-[#d08c65]" />,
    title: "Controle Financeiro",
    description: "Gerencie investimentos e gastos com facilidade.",
  },
  {
    icon: <Headphones className="w-12 h-12 text-[#d08c65]" />,
    title: "Suporte Especializado",
    description: "Conte com nossos especialistas sempre que precisar.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#fff7f8] mb-12">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-[#1f1f1f] rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#d08c65] mb-4">
                {service.title}
              </h3>
              <p className="text-[#fff7f8] mb-6">{service.description}</p>
              <a
                href="#"
                className="text-[#d08c65] font-medium hover:underline flex items-center justify-center"
              >
                Saiba mais
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;