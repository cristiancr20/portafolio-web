import React, { useState } from 'react'
import Navbar from '../components/NavbarAdmin'
import Typewriter from 'typewriter-effect'
import './HomeAdmin.css'


const HomeAdmin = () => {
    return (
        <div className='container'>
            <Navbar />

            <div className="home-admin">
                <h1>Bienvenido
                    <div className="typescript">

                        <Typewriter
                            options={{
                                strings: ['CRCode', 'Cristian', 'Capita'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </h1>
            </div>


        </div>
    )

}

export default HomeAdmin;