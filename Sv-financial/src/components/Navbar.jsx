/* components/Navbar.jsx */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/images/logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null); // Estado para controlar os submenus no mobile

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown((prev) => (prev === menu ? null : menu)); // Alterna entre abrir e fechar o submenu
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -2 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  return (
    <header className="bg-[#000000] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={logoImg} alt="Logo SV Financial" className="h-20 w-auto" />
          </Link>
        </div>


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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          {/* Soluções Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("solucoes")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#solucoes" className="text-[#fff7f8] font-medium relative">
              Soluções
            </a>
            <AnimatePresence>
              {activeDropdown === "solucoes" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="
                  absolute left-0 top-full 
                  bg-[#1f1f1f] shadow-md border-t border-[#d08c65] 
                  p-6 mt-0 
                  w-full              /* em telas pequenas ocupa 100% */
                  sm:w-auto           /* a partir de sm volta a usar largura automática */
                  sm:min-w-[300px]    /* no sm garantir no mínimo 300px */
                  md:min-w-[400px]    /* no md+ garantir 400px */
                  max-w-full          /* nunca ultrapassa 100% da viewport */
                  overflow-auto       /* habilita rolagem se o conteúdo passar */
                "
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    <div>
                      <h3 className="font-semibold text-[#d08c65] mb-2">Para Empresas</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/seguroDeVidaEmpresa"
                            className="block text-[#fff7f8] hover:text-[#d08c65] break-words"
                          >
                            Seguro de Vida e Acidentes pessoais PME
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Suporte Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("suporte")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#suporte" className="text-[#fff7f8] font-medium relative">
              Suporte
            </a>
            <AnimatePresence>
              {activeDropdown === "suporte" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute left-0 top-full bg-[#1f1f1f] shadow-md border-t border-[#d08c65] p-6 mt-0 min-w-[250px] max-w-full"
                >
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
                      <a
                        href="https://wa.me/5531999618881"
                        className="block text-[#fff7f8] hover:text-[#d08c65] break-words"
                      >
                        Fale Conosco
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sobre Nós Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("sobre-nos")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#sobre-nos" className="text-[#fff7f8] font-medium relative">
              Sobre Nós
            </a>
            <AnimatePresence>
              {activeDropdown === "sobre-nos" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute left-0 top-full bg-[#1f1f1f] shadow-md border-t border-[#d08c65] p-6 mt-0 min-w-[250px] max-w-full"
                >
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#historia"
                        className="block text-[#fff7f8] hover:text-[#d08c65] break-words"
                      >
                        Nossa História
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>


      {/* Mobile Menu */}
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
              {/* Soluções */}
              <li>
                <button
                  onClick={() => toggleMobileDropdown("solucoes")}
                  className="text-[#fff7f8] hover:text-[#d08c65] text-lg font-medium w-full text-left"
                >
                  Soluções
                </button>
                {mobileDropdown === "solucoes" && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <h3 className="text-[#d08c65] font-semibold">Para Você</h3>
                      <ul className="pl-2 space-y-1">
                        <li>
                          <Link
                            to="/seguroDeVida"
                            className="block text-[#fff7f8] hover:text-[#d08c65]"
                          >
                            Seguro de Vida e Acidentes Pessoais
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/planejamentoPatrimonial"
                            className="block text-[#fff7f8] hover:text-[#d08c65]"
                          >
                            Planejamento Patrimonial e Sucessório
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/planejamento"
                            className="block text-[#fff7f8] hover:text-[#d08c65]"
                          >
                            Planejamento Financeiro
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h3 className="text-[#d08c65] font-semibold">Para Empresas</h3>
                      <ul className="pl-2 space-y-1">
                        <li>
                          <Link
                            to="/seguroDeVidaEmpresa"
                            className="block text-[#fff7f8] hover:text-[#d08c65]"
                          >
                            Seguro de Vida e Acidentes Pessoais PME
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                )}
              </li>

              {/* Suporte */}
              <li>
                <button
                  onClick={() => toggleMobileDropdown("suporte")}
                  className="text-[#fff7f8] hover:text-[#d08c65] text-lg font-medium w-full text-left"
                >
                  Suporte
                </button>
                {mobileDropdown === "suporte" && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <Link
                        to="/duvidasFrequentes"
                        className="block text-[#fff7f8] hover:text-[#d08c65]"
                      >
                        Dúvidas Frequentes
                      </Link>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/5531999618881"
                        className="block text-[#fff7f8] hover:text-[#d08c65]"
                      >
                        Fale Conosco
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Sobre Nós */}
              <li>
                <button
                  onClick={() => toggleMobileDropdown("sobre-nos")}
                  className="text-[#fff7f8] hover:text-[#d08c65] text-lg font-medium w-full text-left"
                >
                  Sobre Nós
                </button>
                {mobileDropdown === "sobre-nos" && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <a
                        href="#historia"
                        className="block text-[#fff7f8] hover:text-[#d08c65]"
                      >
                        Nossa História
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
