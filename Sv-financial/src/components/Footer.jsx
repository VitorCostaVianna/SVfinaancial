import logoImg from "../assets/logo.png";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#000000] py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo e Navegação */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img src={logoImg} alt="Logo SV Financial" className="h-18 w-auto" />
          </div>

          {/* Links de Navegação */}
          <nav className="flex space-x-6">
            <a
              href="#investimentos"
              className="text-[#fff7f8] hover:text-[#d08c65] transition"
            >
              Investimentos
            </a>
            <a
              href="#sobre"
              className="text-[#fff7f8] hover:text-[#d08c65] transition"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-[#fff7f8] hover:text-[#d08c65] transition"
            >
              Contato
            </a>
          </nav>
        </div>

        {/* Informações de Contato e Mídias Sociais */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#1f1f1f] pt-6">
          {/* Informações de Contato */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-[#fff7f8]">
              E-mail: <a href="mailto:contato@svfinancial.com" className="hover:text-[#d08c65]">contato@svfinancial.com</a>
            </p>
            <p className="text-[#fff7f8]">
              Telefone: <a href="tel:+5511999999999" className="hover:text-[#d08c65]">+55 11 99999-9999</a>
            </p>
          </div>

          {/* Mídias Sociais */}
          <div className="flex space-x-4">
            <a href="#" className="text-[#fff7f8] hover:text-[#d08c65] transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#fff7f8] hover:text-[#d08c65] transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#fff7f8] hover:text-[#d08c65] transition">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm text-[#1f1f1f]">
          © 2025 SV Financial. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;