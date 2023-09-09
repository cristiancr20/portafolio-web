import React from 'react'
import { Link } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
  return (
    <div className="notfound" >
      <div className="text-center">

        <div className='number' data-aos="flip-left">
          <p className='primero'>4</p>
          <p className='segundo'>0</p>
          <p className='tercero'>4</p>
        </div>

        <h1 >Página no encontrada</h1>
        <p >Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
        <div className='notfound_boton_back'>
          <Link  className='notfound_boton_back_link'
            to="/"
            >
            Regresar al inicio
          </Link>
          
        </div>
      </div>

    </div>
  )
}

export default NotFound