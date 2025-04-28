/* components/SeguroDeVidaAbout.jsx */
import React from 'react';
import aboutImg from '../assets/images/about.webp';
import InfoSection from './InfoSection';

const SeguroDeVidaAbout = () => (
  <InfoSection
    id="sobre"
    highlightText="Assessoria exclusiva"
    subtitle="para auxiliar na simulação do seu seguro de vida"
    buttonText="Fale com um especialista"
    buttonLink="https://wa.me/message/HHQ6PYIIOYBAH1"
    imageSrc={aboutImg}
    imageAlt="Seguro de Vida"
    highlightColor="#d08c65"
    reverse={false}
  />
);

export default SeguroDeVidaAbout;