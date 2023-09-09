import React from 'react'
import './Inicio.css'
import Typewriter from 'typewriter-effect'
import fondo from '../images/fondo_home.svg'


function Inicio() {
  return (
    <>
      <div className='container mx-auto px-2 w' >
        <div className="inicio " >
          <div className='typescript' >
            <Typewriter
              options={{
                strings: ['Developer', 'Designer', 'Programmer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          

          <div className='inicio_cont'>
            <div className='inicio_info'>

              <div className="titulo" data-aos="zoom-out">
                <h1 className='text-white'>Bienvenido!!</h1>
                <h1 className='text-white'>Soy <span> Cristian Capa </span></h1>
                <h2 className='text-white'>Estudiante de Ingeniería en Computación</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Inicio