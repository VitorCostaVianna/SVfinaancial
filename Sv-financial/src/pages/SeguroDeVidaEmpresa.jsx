import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProdutoHero from '../components/ProductHero';
import FinancialGoalsSection from '../components/FinancialGoalsSection';
import "../assets/css/swiper-custom.css";
import { Gift, ShieldCheck, Layers, LifeBuoy, Heart, Wallet, UserCheck, Sliders, Users, Clock, Award } from "lucide-react";
import CallToAction from "../components/CallToAction";
import backgroundImage from "../assets/images/fundoPlanejamento.webp";
import ListSeguro from "../components/ListSeguro";
import Faq from "../components/Faq";
import HighlightSection from "../components/HighlightSection";
import FinancialBenefitsSection from '../components/FinancialSolutions';
import { motion } from 'framer-motion';

const Planejamento = () => {
    const heroProps = {
        title: "Seguro de Vida e Acidentes Pessoais PME", // Adicione o título desejado
        subtitle: "Garantimos a segurança de seus funcionários, com soluções completas e acessíveis para sua empresa, enquanto você foca no crescimento do seu negócio.", // Adicione o subtítulo desejado
        buttonText: "Entre em contato", // Adicione o texto do botão
        backgroundImage: backgroundImage,
    };

    const faqData = [
        {
            question: "Quais são as coberturas oferecidas pelo Seguro de Vida Empresarial?",
            answer: "As coberturas podem incluir morte natural ou acidental, invalidez permanente, doenças graves e assistência funeral, dependendo do plano contratado."
        },
        {
            question: "Qual a diferença entre Seguro de Vida e Acidentes Pessoais PME?",
            answer: "O Seguro de Vida cobre eventos como morte natural e doenças graves, enquanto Acidentes Pessoais cobre apenas situações decorrentes de acidentes, como invalidez ou morte acidental."
        },
        {
            question: "Como funciona a contratação para pequenas e médias empresas?",
            answer: "A contratação é simplificada, com planos flexíveis que se ajustam ao número de funcionários e ao orçamento da empresa."
        },
        {
            question: "Existe carência para utilização das coberturas?",
            answer: "Algumas coberturas possuem carência, como a de doenças graves. Acidentes e morte acidental costumam ter cobertura imediata após a vigência do seguro."
        },
        {
            question: "Quais benefícios fiscais a empresa tem ao contratar esse seguro?",
            answer: "O valor pago pelo seguro pode ser deduzido como despesa operacional no imposto de renda, além de contribuir para retenção e valorização dos colaboradores."
        }
    ];

    const benefits = [
        {
            id: 1,
            icon: <ShieldCheck className="w-6 h-6 text-[#d08c65]" />,
            title: "Proteção e estabilidade",
            description: "Mais segurança financeira e tranquilidade emocional para você e seus funcionários em momentos delicados."
        },
        {
            id: 2,
            icon: <Layers className="w-6 h-6 text-[#d08c65]" />,
            title: "Soluções para empresas PME",
            description: "Planos desenhados sob medida para empresas com até 250 funcionários, com flexibilidade e facilidade na contratação."
        },
        {
            id: 3,
            icon: <LifeBuoy className="w-6 h-6 text-[#d08c65]" />,
            title: "Apoio em situações inesperadas",
            description: "Cobertura financeira em caso de acidentes ou situações emergenciais envolvendo seus colaboradores."
        },
        {
            id: 4,
            icon: <Heart className="w-6 h-6 text-[#d08c65]" />,
            title: "Menos processos trabalhistas",
            description: "Nosso seguro de vida atende convenções coletivas e sindicatos, reduzindo riscos jurídicos para sua empresa."
        },
        {
            id: 5,
            icon: <ShieldCheck className="w-6 h-6 text-[#d08c65]" />,
            title: "Vantagens fiscais",
            description: "Permite o abatimento de despesas no imposto de renda e melhora a retenção de talentos na sua equipe."
        }
    ];

    // Variantes de animação
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <ProdutoHero {...heroProps} />
            </motion.div>

            <ListSeguro title="Benefícios do Seguro" items={benefits} />

            {/* Financial Goals Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <FinancialGoalsSection
                    title="Soluções que sua empresa merece"
                    subtitle="Seguro de vida coletivo que protege seu negócio e valoriza sua equipe"
                    buttonText=""
                    backgroundColor="bg-[#ffffff]"
                    textColor="text-[#000000]"
                    arrowBgColor="bg-gray-400"
                    goals={[
                        {
                            icon: <Heart className="text-[#d08c65] w-10 h-10" />,
                            title: "Do jeito que sua empresa precisa",
                            description:
                                "Seguro de vida desenhado especialmente para as necessidades da sua equipe e convenções coletivas."
                        },
                        {
                            icon: <UserCheck className="text-[#d08c65] w-10 h-10" />,
                            title: "Simples e de fácil manutenção",
                            description:
                                "Facilita a gestão de benefícios e mantém seus funcionários motivados e engajados."
                        },
                        {
                            icon: <Layers className="text-[#d08c65] w-10 h-10" />,
                            title: "Garantia da continuidade do patrimônio",
                            description:
                                "Minimiza riscos financeiros e assegura segurança para sócios, herdeiros e a operação da empresa."
                        },
                        {
                            icon: <ShieldCheck className="text-[#d08c65] w-10 h-10" />,
                            title: "Menos riscos trabalhistas",
                            description:
                                "Cumpre com exigências sindicais e convenções coletivas, reduzindo a chance de processos judiciais."
                        },
                        {
                            icon: <Gift className="text-[#d08c65] w-10 h-10" />,
                            title: "Retenção de talentos",
                            description:
                                "Benefício valorizado pelos colaboradores, ajudando na atração e retenção de profissionais."
                        },
                        {
                            icon: <Wallet className="text-[#d08c65] w-10 h-10" />,
                            title: "Vantagens fiscais",
                            description:
                                "Permite dedução de despesas no imposto de renda da empresa, otimizando os resultados financeiros."
                        }
                    ]}
                />
            </motion.div>

            {/* Highlight Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
            >
                <HighlightSection />
            </motion.div>

            <FinancialBenefitsSection
                title="Por que a SV Financial ?"
                subtitle="Motivos que fazem a diferença no cuidado com o seu negócio e sua equipe"
                buttonText="Fale com nossos especialistas"
                backgroundColor="bg-gray-200"
                textColor="text-[#000000]"
                benefits={[
                    {
                        icon: <Sliders className="text-[#d08c65] w-10 h-10" />,
                        title: "Praticidade",
                        description:
                            "Soluções simples e eficientes, pensadas para facilitar a gestão de benefícios na sua empresa.",
                    },
                    {
                        icon: <Sliders className="text-[#d08c65] w-10 h-10" />,
                        title: "Flexibilidade",
                        description:
                            "Planos personalizáveis que se adaptam ao porte e às necessidades do seu negócio.",
                    },
                    {
                        icon: <Award className="text-[#d08c65] w-10 h-10" />,
                        title: "Experiência",
                        description:
                            "Anos de atuação no mercado, garantindo segurança e credibilidade nas soluções oferecidas.",
                    },
                    {
                        icon: <Users className="text-[#d08c65] w-10 h-10" />,
                        title: "Atendimento Consultivo",
                        description:
                            "Equipe especializada para orientar e acompanhar sua empresa em cada etapa.",
                    },
                    {
                        icon: <Clock className="text-[#d08c65] w-10 h-10" />,
                        title: "Rapidez",
                        description:
                            "Processos ágeis e descomplicados para contratação e manutenção dos serviços.",
                    },
                    {
                        icon: <ShieldCheck className="text-[#d08c65] w-10 h-10" />,
                        title: "Proteção Completa",
                        description:
                            "Cuide da empresa, sócios e colaboradores com soluções que garantem tranquilidade em qualquer cenário.",
                    },
                ]}
            />

            {/* Call to Action */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <CallToAction
                    title="Proteja seu negócio e valorize sua equipe"
                    subtitle="Com o seguro de vida empresarial certo, sua empresa garante segurança financeira, atratividade e continuidade para os seus colaboradores e sócios."
                    buttonText="Fale com um especialista"
                />
            </motion.div>

            {/* FAQ Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <Faq title="Perguntas Frequentes sobre Seguro de Vida" faqData={faqData} />
            </motion.div>

            <hr className="border-t border-[#ffffff]" />
            <Footer />
        </>
    );
};

export default Planejamento;