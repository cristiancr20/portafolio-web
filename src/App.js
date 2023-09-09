import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import Inicio from "./pages/Inicio";
import ProyectosHtml from "./pages/ProyectosHtml";
import ProyectosReact from "./pages/ProyectosReact";
import Proyectos from "./pages/Categorias";
import Sobremi from "./pages/Sobremi";
import NotFound from "./pages/NotFound";
//import Login from "./admin/Login";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Inicio/>}/>
        {/* RUTAS DE ADMIN*/}

        {/*<Route path="/login" element ={<Login/>}/>*/}

        {/* RUTAS DE USER NORMAL*/}
        <Route path="/proyectos" element= {<Proyectos/>}/>
        <Route path="/proyectos/html" element= {<ProyectosHtml/>}/>
        <Route path="/proyectos/react" element= {<ProyectosReact/>}/>
        <Route path="/sobre/mi" element= {<Sobremi/>}/>
        <Route path="*" element ={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
