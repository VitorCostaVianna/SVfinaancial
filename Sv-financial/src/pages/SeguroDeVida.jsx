import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProdutoHero from '../components/ProductHero';
import FinancialGoalsSection from '../components/FinancialGoalsSection';
import "../assets/css/swiper-custom.css";
import { Home, Gift, Plane, Car } from "lucide-react";
import About from '../components/About';
import CallToAction from "../components/CallToAction";
import backgroundImage from "../assets/images/fundoPlanejamento.webp";
import SeguroDeVidaAbout from '../components/SeguroDeVidaAbout';

const Planejamento = () => {
    const heroProps = {
        title: "Seguro de Vida", // Adicione o título desejado
        subtitle: "O investimento que protege o que você mais investe", // Adicione o subtítulo desejado
        buttonText: "Entre em contato", // Adicione o texto do botão
        buttonLink: "/planejamento/comecar", // Adicione o link do botão
        backgroundImage: backgroundImage,
    };

    return (
        <>
            <Navbar />

            <ProdutoHero {...heroProps} />
            <FinancialGoalsSection
                title="Proteção que faz a diferença"
                subtitle="Seguro de vida pensado para cuidar de você e de quem você ama"
                buttonText="Simule sua proteção"
                buttonLink="#planejar"
                backgroundColor="bg-[#000000]"
                textColor="text-[#ffffff]"
                arrowBgColor="bg-[#d08c65]" 
                goals={[
                    {
                        icon: <Home className="text-[#d08c65] w-10 h-10" />,
                        title: "Proteção para sua Família",
                        description:
                            "Garanta a segurança financeira dos seus entes queridos em momentos imprevistos, com cobertura completa e personalizada.",
                    },
                    {
                        icon: <Gift className="text-[#d08c65] w-10 h-10" />,
                        title: "Tranquilidade em Vida",
                        description:
                            "Tenha acesso a benefícios em vida, como coberturas para doenças graves, invalidez e assistência em emergências.",
                    },
                    {
                        icon: <Plane className="text-[#d08c65] w-10 h-10" />,
                        title: "Planejamento do Futuro",
                        description:
                            "Transforme o seguro em um instrumento de planejamento, garantindo estabilidade e bem-estar para quem mais importa.",
                    },
                    {
                        icon: <Car className="text-[#d08c65] w-10 h-10" />,
                        title: "Cobertura Personalizada",
                        description:
                            "Escolha planos sob medida para seu perfil e necessidades, com flexibilidade de valores e serviços adicionais.",
                    },
                    {
                        icon: <Home className="text-[#d08c65] w-10 h-10" />,
                        title: "Suporte nos Momentos Difíceis",
                        description:
                            "Conte com assistência completa para sua família quando ela mais precisar, com atendimento ágil e humanizado.",
                    },
                    {
                        icon: <Gift className="text-[#d08c65] w-10 h-10" />,
                        title: "Segurança para o Legado",
                        description:
                            "Assegure a continuidade do seu legado com planejamento sucessório facilitado e recursos garantidos para seus herdeiros.",
                    },
                ]}
            />
            <SeguroDeVidaAbout />
            <About backgroundColor="bg-white" textColor="text-black" />
            <CallToAction
                title="Cuide de quem importa em todos os momentos"
                subtitle="Com o seguro de vida certo, você garante proteção, tranquilidade e amparo para o presente e o futuro da sua família."
                buttonText="Simule seu seguro"
                buttonLink="/planejamento/comecar"
            />

            <hr className="border-t border-[#ffffff]" />
            <Footer />
        </>
    );
};

export default Planejamento;