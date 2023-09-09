import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BiHomeAlt2, BiCategory, BiUser } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>

                    <div className="navbar-container container">
                        <Link to='/' className='navbar-logo'
                            onClick={closeMobileMenu}>
                            C.Code
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    <BiHomeAlt2 className='icon_link'/>  Inicio
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/categorias' className='nav-links' onClick={closeMobileMenu}>
                                    <BiCategory className='icon_link'/> Categorías
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/sobre/mi' className='nav-links' onClick={closeMobileMenu}>
                                    <BiUser className='icon_link'/> Sobre Mi
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </IconContext.Provider>
        </>
    )
}

export default Navbar;