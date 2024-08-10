import React from 'react';
import Card from '../components/Card';

// Lista de proyectos
const proyectos = [
  {
    title: "Barber Shop",
    img: require('../images/sharp-cuts.png'),
    enlaceSitio: "https://sharp-cuts-barber.vercel.app/",
    botonSitio: "Visitar Sitio"
  },



];

function ProyectosNext() {
  return (
    <div className="p-5 min-h-screen bg-gray-900 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {proyectos.map((proyecto, index) => (
          <Card
            key={index}
            title={proyecto.title}
            img={proyecto.img}
            enlaceSitio={proyecto.enlaceSitio}
          />
        ))}
      </div>
    </div>
  );
}

export default ProyectosNext;
