import React, { useState } from 'react'
import { FaBars, FaTimes, FaAngleDown } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

import Dropdown from './pages/Dropdown';


function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    
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
                                    Inicio
                                </Link>
                            </li>
                            <li className='nav-item'
                                 onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave} 
                            >
                                <Link to='/proyectos/html' className='nav-links' onClick={closeMobileMenu}>
                                    Proyectos <FaAngleDown />
                                </Link>
                                {dropdown && <Dropdown />}
                            </li>
                            <li className='nav-item'>
                                <Link to='/sobre/mi' className='nav-links' onClick={closeMobileMenu}>
                                    Sobre Mi
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