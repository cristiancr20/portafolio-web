import React from 'react'
import './Card.css'



function Card(props) {
    return (
        <>
            <a className='proyecto_card' data-aos="fade-up"  href={props.enlaceSitio}>
                <div className='title'>{props.title}</div>

                <div className='informacion_card'>
                    <div className='imagen_card'>
                        <img src={props.img} alt='img'></img>
                    </div>

                    <div className='info_card'>
                        <p>{props.info}</p>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Card