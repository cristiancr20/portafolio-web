import React, {useState} from 'react'
import './Login.css'
import login from '../images/admin/login.jpg'
import { iniciarSesion } from '../core/apiCore'

const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
    })

    const { email, password, loading, error} = values;

    const handleChange = (name) => (event) => {
        setValues({ ...values, error: "", [name]: event.target.value });
    };

    const clickSubmit = async (event) => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });

        try {
            const data = await iniciarSesion({ email, password });
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                console.log("Inicio de sesión exitoso");
                redirectUser(data.user.rol);
            }
        } catch (error) {
            setValues({
                ...values,
                error: "Hubo un error en el inicio de sesión. Inténtalo de nuevo más tarde.",
                loading: false,
            });
        }
    };

    const redirectUser = (rol) => {
        if (rol === "admin") {
            window.location.href = "/admin/home";
        } else if (rol === "user") {
            window.location.href = "/admin";
        }
    };

    const showError = () => (
        <div className={`alerta ${error ? "" : "hidden"}`}>
            {error}
        </div>
    );

    const singInForm = () => (
        <div className="login">
            <div className="login_container">

                {/*<div className="imagen">
                    <img src={login} alt="logo" />
    </div>*/}
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
                    <button type="submit" className="button_login"  onClick={clickSubmit}>
                        {loading ? "Cargando.." : "Iniciar Sesión"}
                    </button>

                </div>
            </div>
        </div>
    );

    return (
        
            <div className="container">
                {showError()}
                {singInForm()}
            </div>
        
    )
}

export default Login;