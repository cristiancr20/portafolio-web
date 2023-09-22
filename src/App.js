import React from "react";
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Inicio from "./pages/Inicio";
import ProyectosHtml from "./pages/ProyectosHtml";
import ProyectosReact from "./pages/ProyectosReact";
import Proyectos from "./pages/Categorias";
import Sobremi from "./pages/Sobremi";
import NotFound from "./pages/NotFound";

//RUTAS DE ADMIN
import Login from "./admin/Login";
import RegistrarPagina from "./admin/registrarPagina";
import HomeAdmin from "./admin/HomeAdmin";

function App() {
  return (
    <Router>
      <Routes>
        {/* RUTAS DE ADMIN*/}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/home" element={<HomeAdmin />} />
        <Route path="/admin/registrar/pagina" element={<RegistrarPagina />} />

        {/* RUTAS DE USER NORMAL*/}
        <Route path="/" element={<Inicio />} />
        <Route path="/categorias" element={<Proyectos />} />
        <Route path="/categorias/html" element={<ProyectosHtml />} />
        <Route path="/categorias/react" element={<ProyectosReact />} />
        <Route path="/sobre/mi" element={<Sobremi />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
