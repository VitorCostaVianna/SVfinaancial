import logoImg from "../assets/images/logo.webp";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#000000] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo e Navegação */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link to="/">
              <img src={logoImg} alt="Logo SV Financial" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Links de Navegação */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Para Você */}
            <div>
              <h3 className="font-semibold text-[#d08c65] mb-2">Para Você</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/seguroDeVida"
                    className="block text-[#fff7f8] hover:text-[#d08c65] break-words"
                  >
                    Seguro de Vida e Acidentes Pessoais
                  </Link>
                </li>
                <li>
                  <Link
                    to="/planejamentoPatrimonial"
                    className="block text-[#fff7f8] hover:text-[#d08c65] break-words"
                  >
                    Planejamento Patrimonial e Sucessório
                  </Link>
                </li>
                <li>
                  <Link
                    to="/planejamento"
                    className="block text-[#fff7f8] hover:text-[#d08c65] break-words"
                  >
                    Planejamento Financeiro
                  </Link>
                </li>
              </ul>
            </div>

            {/* Para Empresas */}
            <div>
              <h3 className="font-semibold text-[#d08c65] mb-2">Para Empresas</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/seguroDeVidaEmpresa"
                    className="block text-[#fff7f8] hover:text-[#d08c65] break-words"
                  >
                    Seguro de Vida e Acidentes Pessoais PME
                  </Link>
                </li>
              </ul>
            </div>


            <div>
              <h3 className="font-semibold text-[#d08c65] mb-2">Suporte</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/duvidasFrequentes"
                    className="block text-[#fff7f8] hover:text-[#d08c65] break-words"
                  >
                    Dúvidas Frequentes
                  </Link>
                </li>
                <li>
                  <a href="https://wa.me/5531999618881" className="block text-[#fff7f8] hover:text-[#d08c65] break-words">Fale Conosco</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Informações de Contato e Mídias Sociais */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#1f1f1f] pt-6">
          {/* Informações de Contato */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="font-semibold text-[#d08c65] mb-2">Contato</h3>
            <p className="text-[#fff7f8]">
              E-mail:{" "}
              <a
                href="mailto:contato@svfinancial.com"
                className="hover:text-[#d08c65]"
              >
                sandrovianna@svfinancial.com.br
              </a>
            </p>
            <p className="text-[#fff7f8]">
              Telefone:{" "}
              <a
                href="tel:+5511999999999"
                className="hover:text-[#d08c65]"
              >
                +55 31 99961-8881
              </a>
            </p>
            <p className="text-[#fff7f8]">
              Endereço: Rodovia Stael Mary Bicalho Motta Magalhaes, 521, Sala 902 - Belvedere, Belo Horizonte - MG
            </p>
          </div>

          {/* Mídias Sociais */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fff7f8] hover:text-[#d08c65] transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fff7f8] hover:text-[#d08c65] transition"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fff7f8] hover:text-[#d08c65] transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fff7f8] hover:text-[#d08c65] transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm text-[#fff7f8]">
          © 2025 SV Financial. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;