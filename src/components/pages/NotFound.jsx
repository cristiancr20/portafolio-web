import React from 'react'
import './NotFound.css'

function NotFound() {
  return (
    <div className="notfound" >
      <div className='number'  data-aos="flip-left">
        <p className='primero'>4</p>
        <p className='segundo'>0</p>
        <p className='tercero'>4</p>
      </div>

      <div className='text' data-aos="zoom-in-up">Dirección no encontrada</div>
    </div>
  )
}

export default NotFound