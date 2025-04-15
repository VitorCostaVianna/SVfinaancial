import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/images/logo.webp";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  return (
    <header className="bg-[#000000] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImg} alt="Logo SV Financial" className="h-20 w-auto" />
        </div>

        {/* Ícone do Menu Hambúrguer (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#fff7f8] focus:outline-none"
            aria-label="Abrir menu"
          >
            <div className="w-6 h-[2px] bg-[#d08c65] mb-1"></div>
            <div className="w-6 h-[2px] bg-[#d08c65] mb-1"></div>
            <div className="w-6 h-[2px] bg-[#d08c65]"></div>
          </button>
        </div>

        {/* Navegação Tradicional (Desktop) */}
        <nav className="hidden lg:flex space-x-6">
          {/* Soluções */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("solucoes")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#solucoes"
              className="text-[#fff7f8] font-medium relative"
            >
              Soluções
            </a>
            <AnimatePresence>
              {activeDropdown === "solucoes" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute left-0 top-full bg-[#1f1f1f] shadow-md border-t border-[#d08c65] p-6 grid grid-cols-2 gap-6 w-[600px]"
                >
                  <div>
                    <h3 className="font-semibold text-[#d08c65] mb-2">
                      Para Você
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/seguroDeVida" className="block text-[#fff7f8] hover:text-[#d08c65]">
                          Seguro de Vida e Acidentes Pessoais
                        </Link>
                      </li>
                      <li>
                        <Link to="/planejamentoPatrimonial" className="block text-[#fff7f8] hover:text-[#d08c65]">
                          Planejamento Patrimonial e Sucessório
                        </Link>
                      </li>

                      <li>
                      <Link to="/planejamento" className="block text-[#fff7f8] hover:text-[#d08c65]">
                        Planejamento Financeiro
                      </Link>
                      </li>

                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#d08c65] mb-2">
                      Para Empresas
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#empresas-vida"
                          className="block text-[#fff7f8] hover:text-[#d08c65]"
                        >
                          Seguro de Vida e Acidentes Pessoais
                        </a>
                      </li>
                      <li>
                        <a
                          href="#empresas-odontologico"
                          className="block text-[#fff7f8] hover:text-[#d08c65]"
                        >
                          Planos Odontológicos
                        </a>
                      </li>
                      <li>
                        <a
                          href="#grandes-empresas"
                          className="block text-[#fff7f8] hover:text-[#d08c65]"
                        >
                          Grandes Empresas
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Suporte */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("suporte")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#suporte"
              className="text-[#fff7f8] font-medium relative"
            >
              Suporte
            </a>
            <AnimatePresence>
              {activeDropdown === "suporte" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute left-0 top-full bg-[#1f1f1f] shadow-md border-t border-[#d08c65] p-6 w-[300px]"
                >
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#faq"
                        className="block text-[#fff7f8] hover:text-[#d08c65]"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contato"
                        className="block text-[#fff7f8] hover:text-[#d08c65]"
                      >
                        Fale Conosco
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sobre Nós */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("sobre-nos")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#sobre-nos"
              className="text-[#fff7f8] font-medium relative"
            >
              Sobre Nós
            </a>
            <AnimatePresence>
              {activeDropdown === "sobre-nos" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute left-0 top-full bg-[#1f1f1f] shadow-md border-t border-[#d08c65] p-6 w-[300px]"
                >
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#historia"
                        className="block text-[#fff7f8] hover:text-[#d08c65]"
                      >
                        Nossa História
                      </a>
                    </li>
                    <li>
                      <a
                        href="#valores"
                        className="block text-[#fff7f8] hover:text-[#d08c65]"
                      >
                        Valores
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="fixed top-0 right-0 w-3/4 h-full bg-[#1f1f1f] shadow-lg z-50"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#fff7f8] absolute top-4 right-4 text-2xl"
              aria-label="Fechar menu"
            >
              &times;
            </button>
            <ul className="mt-20 space-y-6 px-6">
              <li>
                <a
                  href="#solucoes"
                  className="text-[#fff7f8] hover:text-[#d08c65] text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Soluções
                </a>
              </li>
              <li>
                <a
                  href="#suporte"
                  className="text-[#fff7f8] hover:text-[#d08c65] text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Suporte
                </a>
              </li>
              <li>
                <a
                  href="#sobre-nos"
                  className="text-[#fff7f8] hover:text-[#d08c65] text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sobre Nós
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;