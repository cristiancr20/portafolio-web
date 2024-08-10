import React, { useState } from 'react';
import { FaBars, FaTimes, FaBuffer } from 'react-icons/fa';
import { BiHomeAlt2, BiCategory } from "react-icons/bi";

function Navbar({ activeSection, setActiveSection }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (section) => {
        setActiveSection(section);
        setMenuOpen(false);  // Cerrar menú al hacer clic en un elemento
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-gray-800 text-white sticky top-0 w-full z-50">
            <div className="flex items-center justify-between max-w-screen-lg mx-auto p-4">
                {/* Título */}
                <div className='text-2xl font-bold text-yellow-400'>
                    {activeSection}
                </div>

                {/* Icono de Menú para móviles */}
                <div className='lg:hidden cursor-pointer' onClick={toggleMenu}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>

                {/* Menú */}
                <ul className={`lg:flex lg:items-center lg:space-x-6 lg:static absolute lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto top-16 left-0 w-full lg:w-auto bg-gray-900 shadow-lg lg:shadow-none p-5 lg:p-2 lg:m-0 rounded-lg transform transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}>
                    <li className='nav-item'>
                        <button onClick={() => handleClick('Inicio')} className='flex items-center px-4 py-2 text-lg hover:bg-gray-700 w-full transition-colors rounded-lg'>
                            <BiHomeAlt2 className='mr-2' size={20} /> Inicio
                        </button>
                    </li>
                    <li className='nav-item'>
                        <button onClick={() => handleClick('Proyectos')} className='flex items-center px-4 py-2 text-lg hover:bg-gray-700 w-full transition-colors rounded-lg'>
                            <BiCategory className='mr-2' size={20} /> Proyectos
                        </button>
                    </li>
                    <li className='nav-item'>
                        <button onClick={() => handleClick('Historia')} className='flex items-center px-4 py-2 text-lg hover:bg-gray-700 w-full transition-colors rounded-lg'>
                            <FaBuffer className='mr-2' size={20} /> Historia
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
