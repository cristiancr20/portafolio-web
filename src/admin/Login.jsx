import React from 'react'
import './Login.css'
//import { Redirect } from 'react-router-dom'; 

import login from '../images/admin/login.jpg'

//import {iniciarSesion} from '../core/apiCore'

function Login() {
/*
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false
    })

    const { email, password, loading, error, redirectToReferrer } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({ ...values, error: false, loading: true })
        iniciarSesion({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false })
            } else {
                autenticar(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    })
                })
            }
        })
    }

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    const redirectUser = () => {
        if (redirectToReferrer) {
            return <Redirect to="/admin/dashboard" />
        }
    }*/



    return (
        <>
            <div className="container">
                <div className="login">
                    <div className="login_container">

                        <div className="imagen">
                            <img src={login} alt="logo" />
                        </div>
                        <div className="form">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input 
                                    onChange={handleChange('email')}
                                    type="email"  
                                    placeholder="Enter email"
                                    value={email}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input 
                                    onChange={handleChange('password')}
                                    type="password"  
                                    placeholder="Password" 
                                    value={password}
                                    />
                                </div>
                            </form>
                            <button type="submit" className="button_login" >
                                {loading ? "Cargando.." : "Iniciar Sesión"}
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login