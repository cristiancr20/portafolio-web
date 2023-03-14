import React from 'react'
import './Sobremi.css'
import Cristian from '../images/cristian.png'
import { FaGithub, FaInstagram, FaTiktok, FaYoutube, FaCodepen, FaLinkedin } from "react-icons/fa";

import code from '../images/ccode.jpg';

function Sobremi() {
    return (
        <>
            <div className='content_me' >
                <div className='content_me__info' data-aos="fade-right">

                    <div className='info__me' >
                        <div className="datos">
                            <p >Hola, soy <span> Cristian Capa </span></p>
                            <p >Estudiante de Ingeniería en Computación</p>
                            <p >Tengo 22 años </p>
                            <p >Me gusta el desarrollo web</p>
                            <p >Soy de Catamayo, Loja - Ecuador</p>
                        </div>

                        <div className='red_social'>
                            <div className='icon' >
                                <a href='https://github.com/cristiancr20'><FaGithub /></a>
                            </div>

                            <div className='icon' >
                                <a href='https://www.instagram.com/capita_cr/'><FaInstagram /></a>
                            </div>

                            <div className='icon' >
                                <a href='https://www.tiktok.com/@capitacr.code'><FaTiktok /></a>
                            </div>

                            <div className='icon' >
                                <a href='https://www.youtube.com/channel/UCA5siuRO1Ulb8OM35fXe-0Q'><FaYoutube /></a>
                            </div>

                            <div className='icon' >
                                <a href='https://codepen.io/cristian-capa'><FaCodepen /></a>
                            </div>

                            <div className='icon' >
                                <a href='https://www.linkedin.com/in/cristian-capa-834243205/'><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                    <div className='imagen_me' data-aos="fade-left">
                        <img src={Cristian} alt='imagen del creador'></img>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Sobremi