import React from 'react'

import './CardCategorias.css'

function CardCategorias(props) {
  return (
    <>
      <a className="categorias__card" data-aos="fade-up" href={props.categoria}>
        <div className="categorias__icon" data-aos="flip-left">
          {props.icon}
        </div>
        <div className="categorias__info">
          <div className="categorias__titulo">
            {props.title}
          </div>
          <div className="categorias__descripcion">
            {props.descripcion}
          </div>
        </div>
      </a>
    </>
  )
}

export default CardCategorias