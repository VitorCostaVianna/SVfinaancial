import logoImg from "../assets/logo.png"; 

function Navbar() {
    return (
      <header className="bg-black shadow-md w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logoImg}
              alt="Logo SV Financial"
              className="h-32 w-auto"
            />
          </div>
  
          {/* Navegação */}
          <nav className="space-x-6">
            <a
              href="#investimentos"
              className="text-[#fff7f8] hover:text-[#d08c65] font-medium"
            >
              Investimentos
            </a>
            <a
              href="#sobre"
              className="text-[#fff7f8] hover:text-[#d08c65] font-medium"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-[#fff7f8] hover:text-[#d08c65] font-medium"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Navbar;