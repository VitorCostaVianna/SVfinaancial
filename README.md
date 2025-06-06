# SV Financial - Landing Page

SV Financial é um projeto de front-end desenvolvido em React e Vite, criando uma landing page moderna, responsiva e animada para uma empresa de soluções financeiras. O site apresenta os serviços oferecidos, como seguros de vida, planejamento financeiro e planejamento patrimonial, com uma interface elegante e profissional.

## ✨ Principais Funcionalidades

-   **Design Responsivo**: Interface totalmente adaptada para desktops, tablets e dispositivos móveis.
-   **Animações Modernas**: Utiliza a biblioteca `framer-motion` para transições e animações suaves que melhoram a experiência do usuário.
-   **Navegação Multi-página**: O site é dividido em várias páginas utilizando `react-router-dom` para apresentar os diferentes serviços e informações:
    -   Página Inicial
    -   Seguro de Vida (Individual e Empresarial)
    -   Planejamento Financeiro
    -   Planejamento Patrimonial
    -   Dúvidas Frequentes (FAQ)
-   **Carrosséis Interativos**: Componentes de carrossel implementados com `Swiper.js` para exibir informações e diferenciais de forma dinâmica.
-   **Arquitetura Baseada em Componentes**: O projeto é estruturado com componentes React reutilizáveis, como `Navbar`, `Footer`, `Hero`, `CardWithIcon` e `Faq`, facilitando a manutenção e escalabilidade.
-   **Estilização com Tailwind CSS**: Utiliza o framework Tailwind CSS para uma estilização rápida e consistente.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias e bibliotecas:

-   **Framework**: React (v19)
-   **Build Tool**: Vite (v6)
-   **Estilização**: Tailwind CSS (v4)
-   **Roteamento**: React Router DOM (v7)
-   **Animações**: Framer Motion
-   **Ícones**: Lucide React
-   **Carrossel**: Swiper.js
-   **Linting**: ESLint

## 📂 Estrutura do Projeto

O código-fonte está organizado da seguinte forma:

/src
|-- /assets         # Contém imagens, fontes e arquivos CSS globais
|-- /components     # Componentes React reutilizáveis (Navbar, Footer, Cards, etc.)
|-- /pages          # Componentes que representam as páginas da aplicação
|-- App.jsx         # Componente principal da página inicial
|-- main.jsx        # Ponto de entrada da aplicação, onde as rotas são definidas
|-- index.css       # Estilos globais e importação de fontes

## 🚀 Como Executar o Projeto Localmente

Para executar este projeto em sua máquina local, siga os passos abaixo.

### Pré-requisitos

-   Node.js (versão 18 ou superior)
-   npm (geralmente vem com o Node.js)

### Instalação

1.  Clone o repositório para a sua máquina:
    ```bash
    git clone [https://github.com/vitorcostavianna/svfinaancial.git](https://github.com/vitorcostavianna/svfinaancial.git)
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd Sv-financial
    ```

3.  Instale as dependências do projeto:
    ```bash
    npm install
    ```

### Executando a Aplicação

Use o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
npm run dev
