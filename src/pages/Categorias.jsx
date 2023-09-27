import React from 'react'

import CardCategorias from '../components/CardCategorias'
import { FaHtml5, FaReact } from "react-icons/fa";

import './Categorias.css'
import Navbar from '../components/Navbar'

function Categorias() {
    return (
        <>
            <Navbar />

            <div className="categorias">
                <CardCategorias categoria="categorias/html" icon={<FaHtml5 />} title="Html" descripcion="Lenguaje de Marcado de Hipertexto" />
                <CardCategorias categoria="categorias/react" icon={<FaReact />} title="React" descripcion="Biblioteca de creación de interfaces de JavaScript" />
            </div>
        </>
    )
}

export default Categorias
