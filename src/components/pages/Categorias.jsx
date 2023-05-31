import React from 'react'

import CardCategorias from '../CardCategorias'
import { FaHtml5, FaReact } from "react-icons/fa";

import './Categorias.css'

function Categorias() {
    return (
        <>
            <div className="categorias">
                <CardCategorias categoria="proyectos/html" icon={<FaHtml5 />} title="Html" descripcion="Lenguaje de Marcado de Hipertexto" />
                <CardCategorias categoria="proyectos/react" icon={<FaReact />} title="React" descripcion="Biblioteca de creación de interfaces de JavaScript" />
            </div>
        </>
    )
}

export default Categorias