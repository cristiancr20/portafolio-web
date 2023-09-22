import React, { useState } from 'react';
import './registrarPagina.css';
import Navbar from '../components/NavbarAdmin';
import { crearPagina } from "../core/apiCore"

const RegistrarPagina = () => {
    const [values, setValues] = useState({
        categoria: '',
        pagina: '', // Valor inicial para 'Página'
        imagen: '', // Valor inicial para 'Imagen'
        ruta: '',
        success: false,
        error: '',
        loading: false,
      });

  const { categoria, pagina, imagen, ruta, success, error, loading } = values; // Cambiado de 'titulo' a 'pagina' y 'img' a 'imagen'

  const handleChange = event => {
    setValues({ ...values, error: '', [event.target.name]: event.target.value });
  }

  const handleCategoriaChange = event => {
    setValues({ ...values, categoria: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: '', loading: true });

    const paginaData = { categoria, pagina, imagen, ruta }; // Cambiado de 'titulo' a 'pagina' y 'img' a 'imagen'
    
    crearPagina(paginaData)
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false, loading: false });
        } else {
          setValues({
            ...values,
            categoria: '',
            pagina: '', // Cambiado de 'titulo' a 'pagina'
            imagen: '', // Cambiado de 'img' a 'imagen'
            ruta: '',
            error: '',
            success: true,
            loading: false,
          });
        }
      })
      .catch(error => {
        setValues({ ...values, error: 'Hubo un problema con la solicitud.', success: false, loading: false });
      });
  }

  const registrarPaginaForm = () => (
    <div className="container">
      <Navbar />
      <div className="home-categoria">
        <div className="formulario">
          <h1>Registrar Página</h1>
          <form>
            <div className="form-group">
              <label>Categoria</label>
              <select
                className='combobox'
                name="categoria"
                value={categoria}
                onChange={handleCategoriaChange}
                required
              >
                <option value="">Selecciona una categoría</option>
                <option value="React JS">React JS</option>
                <option value="Html">Html</option>
                <option value="Node JS">Node JS</option>
                <option value="Next JS">Next JS</option>
              </select>
            </div>
            <div className="form-group">
              <label>Página </label>
              <input
                onChange={handleChange}
                value={pagina} // Cambiado de 'titulo' a 'pagina'
                type="text"
                name="pagina" // Cambiado de 'pagina' a 'titulo'
                placeholder="Titulo de la página"
                required
              />
            </div>
            <div className="form-group">
              <label>Imagen</label>
              <input
                onChange={handleChange}
                value={imagen} // Cambiado de 'imagen' a 'imagen'
                type="text" 
                name="imagen" // Cambiado de 'imagen' a 'imagen'
                placeholder="Imagen" 
                required 
              />
            </div>
            <div className="form-group">
              <label>Enlace</label>
              <input 
                onChange={handleChange}
                value={ruta}
                type="text" 
                name="ruta" 
                placeholder="Ruta de enlace" 
                required 
              />
            </div>
            <div className="boton">
              <button type="submit" onClick={clickSubmit}>
                {loading ? 'Cargando...' : 'Guardar página'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const showError = () => (
    <div className='alerta' style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div className='alerta' style={{ display: success ? '' : 'none' }}>
      Nueva página creada con éxito.
    </div>
  );

  return (
    <>
      {showSuccess()}
      {showError()}
      {registrarPaginaForm()}
    </>
  );
};

export default RegistrarPagina;
