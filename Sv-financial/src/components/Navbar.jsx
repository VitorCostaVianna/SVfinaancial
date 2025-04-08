import React, { useState } from "react";
import { motion } from "framer-motion";
import logoImg from "../assets/logo.webp";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setActiveDropdown(null);
    }, 500); 
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="bg-black shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImg} alt="Logo SV Financial" className="h-20 w-auto" />
        </div>

        {/* Navegação */}
        <nav className="flex space-x-6">
          {/* Item com Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("sobre")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#sobre"
              className="text-[#fff7f8] font-medium relative"
            >
              Sobre a Sv Financial
              {activeDropdown === "sobre" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute left-0 mt-2 bg-[#1f1f1f] rounded-lg shadow-lg p-4 w-48"
                >
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#a-xp"
                        className="text-[#fff7f8] hover:text-[#d08c65] transition"
                      >
                        Sv Financial
                      </a>
                    </li>
                    <li>
                      <a
                        href="#atuacao"
                        className="text-[#fff7f8] hover:text-[#d08c65] transition"
                      >
                        Nossa atuação
                      </a>
                    </li>
                    <li>
                      <a
                        href="#trabalhe"
                        className="text-[#fff7f8] hover:text-[#d08c65] transition"
                      >
                        Trabalhe conosco
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </a>
            {/* Linha de Hover */}
            <motion.div
              layoutId="hover-line"
              className={`absolute bottom-0 left-0 h-[2px] bg-[#d08c65]`}
              style={{ width: activeDropdown === "sobre" ? "100%" : "0" }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Outros Links */}
          <a
            href="#produtos"
            className="text-[#fff7f8] hover:text-[#d08c65] font-medium relative"
          >
            Produtos e Serviços
          </a>
          <a
            href="#conteudos"
            className="text-[#fff7f8] hover:text-[#d08c65] font-medium relative"
          >
            Conteúdos
          </a>
          <a
            href="#contato"
            className="text-[#fff7f8] hover:text-[#d08c65] font-medium relative"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;