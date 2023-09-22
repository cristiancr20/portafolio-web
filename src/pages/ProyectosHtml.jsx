import React from 'react'
import './Proyectos.css'

import img_semillitas from '../images/semillitas.png'
import img_websiteCF from '../images/websiteCF.png'
import img_cineplus from '../images/cinePlus.jpg'
import img_juegocalamar from '../images/juegocalamar.jpg'
import img_tattosalon from '../images/tatto-salon.jpg'
import img_starbucks from '../images/starbucks.png'
import img_audifonos from '../images/audifonos.PNG'
import img_tesla from '../images/tesla.PNG'
import img_login from '../images/login.png'
import img_contact from '../images/contact.png'


import Card from '../components/Card'
import Navbar from '../components/Navbar'

function ProyectosHtml() {
    return (
        <>
      <Navbar />

            <div className='content'>
                <h1 data-aos="fade-down">Diseños Sitios Html</h1>
                <div className='cont-proyectos'>

                    <div className='proyecto'>

                        <Card title="Semillas de Amor"
                            img={img_semillitas}
                            enlaceSitio="https://web-site-emisora-radio.netlify.app/"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="C&F"
                            img={img_websiteCF}
                            enlaceSitio="https://web-site-proyect.netlify.app/"
                            botonSitio="Visitar Sitio"
                        />


                        <Card title="Cine Plus"
                            img={img_cineplus}
                            enlaceSitio="https://cineplus-capita.netlify.app"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="Squid Game"
                            img={img_juegocalamar}
                            enlaceSitio="https://squidgame-capita.netlify.app/"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="Tatto Salon"
                            img={img_tattosalon}
                            enlaceSitio="https://tatto-salon.netlify.app"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="Starbucks"
                            img={img_starbucks}
                            enlaceSitio="https://starbucks-web-design.netlify.app/"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="Tesla"
                            img={img_tesla}
                            enlaceSitio="https://websitetesla.netlify.app/"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="Audifonos"
                            img={img_audifonos}
                            enlaceSitio="https://headphonewebstore.netlify.app/"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="Login"
                            img={img_login}
                            enlaceSitio="https://design-login-proyect.netlify.app/"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="Contact Us"
                            img={img_contact}
                            enlaceSitio="https://web-contactus.netlify.app/"
                            botonSitio="Visitar Sitio"
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProyectosHtml