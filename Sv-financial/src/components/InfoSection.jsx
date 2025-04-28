/* components/InfoSection.jsx */
import React from 'react';

const InfoSection = ({
  id,
  highlightText,
  subtitle,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  highlightColor = '#d08c65',
  reverse = false,
}) => {
  // Dynamic classes for layout and ordering
  const containerClasses = `max-w-7xl mx-auto px-6 flex flex-col md:flex-row ${
    reverse ? 'md:flex-row-reverse' : ''
  } items-center gap-10`;

  return (
    <section id={id} className="bg-black py-20">
      <div className={containerClasses}>
        {/* Text Block */}
        <div className="md:w-1/2 text-left text-white">
          <h2 className="text-5xl font-extrabold mb-4">
            <span style={{ color: highlightColor }}>{highlightText}</span>
          </h2>
          <p className="text-4xl mb-6 font-extrabold">{subtitle}</p>
          <a
            href={buttonLink}
            className="inline-block text-[#fff7f8] px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition"
            style={{ backgroundColor: highlightColor }}
          >
            {buttonText}
          </a>
        </div>

        {/* Image Block */}
        <div className="md:w-1/2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;