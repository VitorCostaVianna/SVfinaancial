import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProdutoHero from '../components/ProductHero';
import FinancialGoalsSection from '../components/FinancialGoalsSection';
import "../assets/css/swiper-custom.css";
import FinancialBenefitsSection from '../components/FinancialSolutions';
import { Home, Gift, Plane, Car } from "lucide-react";
import About from '../components/About';
import CallToAction from "../components/CallToAction";
import backgroundImage from "../assets/images/bg2.webp";
import { motion } from 'framer-motion';

const Planejamento = () => {
    const heroProps = {
        title: "Planejamento Patrimonial e sucessório",
        subtitle: "Proteja seu patrimônio e planeje o futuro da sua família.",
        buttonText: "Começar Planejamento",
        backgroundImage: backgroundImage,
    };

    // Variantes de animação
    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
            >
                <ProdutoHero {...heroProps} />
            </motion.div>

            {/* Financial Goals Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <FinancialGoalsSection
                    title="Preservar e Perpetuar"
                    subtitle="Estratégias sob medida para o seu legado"
                    buttonText="Personalize seu plano"
                    backgroundColor="bg-[#ffffff]"
                    textColor="text-[#000000]"
                    goals={[
                        {
                            icon: <Home className="text-[#d08c65] w-10 h-10" />,
                            title: "Blindagem Patrimonial",
                            description:
                                "Proteja seus bens contra imprevistos jurídicos e financeiros, garantindo segurança para você e sua família.",
                        },
                        {
                            icon: <Gift className="text-[#d08c65] w-10 h-10" />,
                            title: "Planejamento Sucessório",
                            description:
                                "Evite conflitos e custos desnecessários ao definir como seu patrimônio será transmitido para as próximas gerações.",
                        },
                        {
                            icon: <Plane className="text-[#d08c65] w-10 h-10" />,
                            title: "Diversificação Internacional",
                            description:
                                "Explore oportunidades no exterior com segurança jurídica e fiscal, ampliando a proteção e o crescimento do seu patrimônio.",
                        },
                        {
                            icon: <Car className="text-[#d08c65] w-10 h-10" />,
                            title: "Proteção Familiar",
                            description:
                                "Garanta o bem-estar da sua família com seguros, previdência e outras estratégias de segurança financeira de longo prazo.",
                        },
                        {
                            icon: <Home className="text-[#d08c65] w-10 h-10" />,
                            title: "Gestão de Imóveis",
                            description:
                                "Organize e rentabilize seu patrimônio imobiliário com estratégias de longo prazo para valorização e sucessão.",
                        },
                        {
                            icon: <Gift className="text-[#d08c65] w-10 h-10" />,
                            title: "Constituição de Holding Familiar",
                            description:
                                "Centralize a administração dos bens da família, facilite o processo sucessório e otimize a carga tributária.",
                        },
                    ]}
                />
            </motion.div>

            <FinancialBenefitsSection
                title="Diferenciais em Planejamento Patrimonial"
                subtitle="Soluções estratégicas para proteger, organizar e perpetuar seu legado"
                buttonText="Planeje seu futuro agora"
                backgroundColor="bg-gray-200"
                textColor="text-[#000000]"
                benefits={[
                    {
                        icon: <Home className="text-[#d08c65] w-10 h-10" />,
                        title: "Proteção de Patrimônio",
                        description:
                            "Blindamos seus bens contra riscos e imprevistos, assegurando que sua riqueza esteja protegida a longo prazo.",
                    },
                    {
                        icon: <Gift className="text-[#d08c65] w-10 h-10" />,
                        title: "Transmissão Eficiente de Bens",
                        description:
                            "Facilitamos a sucessão do seu patrimônio com segurança jurídica, reduzindo burocracias e custos para seus herdeiros.",
                    },
                    {
                        icon: <Plane className="text-[#d08c65] w-10 h-10" />,
                        title: "Internacionalização de Ativos",
                        description:
                            "Expandimos fronteiras para proteger e diversificar seu patrimônio em diferentes jurisdições com respaldo legal.",
                    },
                    {
                        icon: <Car className="text-[#d08c65] w-10 h-10" />,
                        title: "Planejamento Tributário",
                        description:
                            "Estruturamos seu patrimônio para otimizar tributos e aumentar a eficiência na administração e sucessão dos bens.",
                    },
                    {
                        icon: <Home className="text-[#d08c65] w-10 h-10" />,
                        title: "Gestão Estratégica de Imóveis",
                        description:
                            "Ajudamos na organização, valorização e sucessão do patrimônio imobiliário, com foco em rentabilidade e legado.",
                    },
                    {
                        icon: <Gift className="text-[#d08c65] w-10 h-10" />,
                        title: "Criação de Holding Familiar",
                        description:
                            "Constituímos holdings para organizar e perpetuar o patrimônio familiar, com governança e sucessão planejadas.",
                    },
                ]}
            />

            {/* About Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
            >
                <About backgroundColor="bg-black" textColor="text-white" />
            </motion.div>

            {/* Call to Action */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
            >
                <CallToAction
                    title="A jornada do seu legado começa aqui"
                    subtitle="Faça o primeiro movimento em direção a um futuro mais seguro e próspero. A Sv Financial está pronta para guiá-lo em cada passo do caminho."
                    buttonText="Comece Agora"
                />
            </motion.div>

            <hr className="border-t border-[#ffffff]" />
            <Footer />
        </>
    );
};

export default Planejamento;