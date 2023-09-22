import React from 'react'
import './Proyectos.css'

import Card from '../components/Card'

import img_blocnotas from '../images/blocnotas.png'
import Navbar from '../components/Navbar'


function ProyectosReact() {
    return(
        <>
      <Navbar />

            <div className='content'>
                <h1 data-aos="fade-down">Diseños Sitios React</h1>
                <div className='cont-proyectos'>

                    <div className='proyecto'>

                        <Card title="Bloc de notas"
                            img={img_blocnotas}
                            enlaceSitio="https://react-bloc-notas.vercel.app/"
                            botonSitio="Visitar Sitio"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectosReact;