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


import Card from './Card'

function ProyectosHtml() {
    return (
        <>
            <div className='content'>
                <h1 data-aos="fade-down">Diseños Sitios Html</h1>
                <div className='cont-proyectos'>

                    <div className='proyecto'>

                        <Card title="Semillas de Amor"
                            img={img_semillitas}
                            info="Página web para una emisora de radio"

                            /* Enlace del sitio web */
                            enlaceSitio="https://web-site-emisora-radio.netlify.app/"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="C&F"
                            img={img_websiteCF}
                            info="Página web"

                            /* Enlace del sitio web */
                            enlaceSitio="https://web-site-proyect.netlify.app/"
                            botonSitio="Visitar Sitio"
                        />


                        <Card title="Cine Plus"
                            img={img_cineplus}
                            info="Página web para ver películas"

                            /* Enlace del sitio web */
                            enlaceSitio="https://cineplus-capita.netlify.app"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="Squid Game"
                            img={img_juegocalamar}
                            info="Página web de Squid Game"
                            enlaceSitio="https://squidgame-capita.netlify.app/"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="Tatto Salon"
                            img={img_tattosalon}
                            info="Página web para un salon de tatuajes"
                            enlaceSitio="https://tatto-salon.netlify.app"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="Starbucks"
                            img={img_starbucks}
                            info="Página web de Starbucks"
                            enlaceSitio="https://starbucks-web-design.netlify.app/"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="Tesla"
                            img={img_tesla}
                            info="Página web de Starbucks"
                            enlaceSitio="https://websitetesla.netlify.app/"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="Audifonos"
                            img={img_audifonos}
                            info="Página web de Starbucks"
                            enlaceSitio="https://headphonewebstore.netlify.app/"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="Login"
                            img={img_login}
                            info="Página web de un login"
                            enlaceSitio="https://design-login-proyect.netlify.app/"
                            botonSitio="Visitar Sitio"
                        />

                        <Card title="Contact Us"
                            img={img_contact}
                            info="Página web de contacto"
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