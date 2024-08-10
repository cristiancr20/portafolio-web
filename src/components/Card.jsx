import React from 'react';

function Card({ title, img, enlaceSitio }) {
  return (
    <a
      href={enlaceSitio}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-800 text-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      data-aos="fade-up"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 " >{title}</h3>
        <p className="text-gray-400">Visita el sitio</p>
      </div>
    </a>
  );
}

export default Card;
