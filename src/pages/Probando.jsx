import React, { useState, useEffect } from 'react'
import './Proyectos.css'


import Card from '../components/Card'
import Navbar from '../components/Navbar'

const Probando = () => {

    const [proyectos, setProyectos] = useState({ paginas: [] });


    useEffect(() => {
        fetch('https://portafolio-backend-yoir-dev.fl0.io/get/paginas')
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
                <h1 data-aos="fade-down">Diseños Sitios Html</h1>
                <div className='cont-proyectos'>

                    <div className='proyecto'>
                        {proyectos.paginas.map(proyecto => (
                            <Card
                                key={proyecto._id}
                                title={proyecto.pagina}
                                img={proyecto.imagen}
                                enlaceSitio={proyecto.ruta}
                                botonSitio="Visitar Sitio"
                            />
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Probando;