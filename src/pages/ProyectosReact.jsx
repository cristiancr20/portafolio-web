import React, { useState, useEffect } from 'react'

import './Proyectos.css'

import Card from '../components/Card'

import img_blocnotas from '../images/blocnotas.png'
import Navbar from '../components/Navbar'

const categoriaFiltrar = 'React JS'; 


const ProyectosReact = () => {

    const [proyectos, setProyectos] = useState({ paginas: [] });


    useEffect(() => {
        fetch('https://portafolio-backend-dev-hbbt.2.ie-1.fl0.io/get/paginas')
            .then(response => response.json())
            .then(data => {
                console.log('Datos obtenidos:', data);
                setProyectos(data);
            })
            .catch(error => console.error('Error al obtener proyectos:', error));
    }, []);

    return (
        <>
            <Navbar />

            <div className='content'>
                <h1 data-aos="fade-down">Diseños Sitios React</h1>
                <div className='cont-proyectos'>
                    <div className='proyecto'>
                        {proyectos.paginas.map(proyecto => {
                            // Filtrar proyectos por categoría
                            if (proyecto.categoria === categoriaFiltrar) {
                                return (
                                    <Card
                                        key={proyecto._id}
                                        title={proyecto.pagina}
                                        img={proyecto.imagen}
                                        enlaceSitio={proyecto.ruta}
                                        botonSitio="Visitar Sitio"
                                    />
                                );
                            }
                            return null; // No se muestra el proyecto si no coincide con la categoría
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectosReact;