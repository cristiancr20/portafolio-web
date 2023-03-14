import React from 'react'
import './Card.css'



function Card(props) {
    return (
        <>
            <div className='proyecto_card' data-aos="fade-up">
                <div className='title'>{props.title}</div>

                <div className='informacion_card'>
                    <div className='imagen_card'>
                        <img src={props.img} alt='img'></img>
                    </div>

                    <div className='info_card'>
                        <p>{props.info}</p>
                        <a href={props.enlaceSitio}>
                            {props.botonSitio}
                        </a>
                        <a href={props.enlaceCodigo}>
                            {props.botonCodigo} 
                        </a>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Card