import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import HeroSection from "../components/HeroSection";

const DuvidasFrequentes = () => {
    const vidaAcidentesFaq = [
        {
            question: "O que é um seguro de vida?",
            answer: "O seguro de vida é uma proteção financeira que garante suporte para você e sua família em caso de imprevistos, como falecimento ou invalidez.",
        },
        {
            question: "O seguro de vida cobre acidentes pessoais?",
            answer: "Sim, a maioria dos seguros de vida inclui cobertura para acidentes pessoais, mas é importante verificar os detalhes da apólice.",
        },
        {
            question: "Posso usar o seguro de vida em vida?",
            answer: "Sim, algumas apólices oferecem benefícios em vida, como coberturas para doenças graves ou invalidez permanente.",
        },
    ];

    const apolicesFaq = [
        {
            question: "O que é uma apólice de seguro?",
            answer: "A apólice é o contrato que formaliza o acordo entre você e a seguradora, detalhando as coberturas, prazos e condições do seguro.",
        },
        {
            question: "Quem pode ser o beneficiário de uma apólice?",
            answer: "O beneficiário pode ser qualquer pessoa indicada por você, como familiares, amigos ou até instituições.",
        },
        {
            question: "Quanto tempo dura uma apólice de seguro?",
            answer: "A duração depende do tipo de seguro contratado. Pode ser por prazo determinado ou vitalício, conforme especificado no contrato.",
        },
    ];

    const planejamentoFinanceiroFaq = [
        {
            question: "Por que devo fazer um planejamento financeiro?",
            answer: "O planejamento financeiro ajuda a organizar suas finanças, alcançar objetivos e garantir segurança para o futuro.",
        },
        {
            question: "Como funciona o processo de planejamento financeiro?",
            answer: "O processo envolve análise da sua situação atual, definição de metas e criação de estratégias para alcançá-las.",
        },
        {
            question: "Preciso ter muito dinheiro para fazer um planejamento financeiro?",
            answer: "Não, o planejamento financeiro é útil para qualquer pessoa, independentemente da renda, pois ajuda a gerenciar melhor os recursos disponíveis.",
        },
    ];

    const planejamentoPatrimonialFaq = [
        {
            question: "O que é planejamento patrimonial?",
            answer: "É o processo de organizar e proteger seus bens, garantindo que eles sejam transmitidos de forma eficiente para seus herdeiros.",
        },
        {
            question: "Como funciona o planejamento sucessório?",
            answer: "O planejamento sucessório define como seus bens serão distribuídos após o seu falecimento, evitando conflitos e custos desnecessários.",
        },
        {
            question: "Quais são os benefícios do planejamento patrimonial?",
            answer: "Os benefícios incluem proteção dos bens, redução de impostos e garantia de que seu patrimônio será gerido conforme sua vontade.",
        },
    ];

    return (
        <>
            <Navbar />
            <HeroSection/>

            {/* Seção: Vida e Acidentes Pessoais */}
            <Faq title="Vida e Acidentes Pessoais" 
                 faqData={vidaAcidentesFaq} 
                 backgroundColor="fff7f8"
                 textColor="#000000"/>

            {/* Seção: Apólices */}
            <Faq title="Apólices" faqData={apolicesFaq}
            backgroundColor="fff7f8"
            textColor="#000000" />

            {/* Seção: Planejamento Financeiro */}
            <Faq title="Planejamento Financeiro" faqData={planejamentoFinanceiroFaq} 
            backgroundColor="fff7f8"
            textColor="#000000"/>

            {/* Seção: Planejamento Patrimonial e Sucessório */}
            <Faq title="Planejamento Patrimonial e Sucessório" faqData={planejamentoPatrimonialFaq} 
            backgroundColor="fff7f8"
            textColor="#000000"/>

            <Footer />
        </>
    );
};

export default DuvidasFrequentes;