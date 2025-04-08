import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Faq from './components/Faq';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Faq />
      {/* Linha divisória */}
      <hr className="border-t border-[#ffffff]" />
      <Footer />
    </>
  );
}

export default App;
