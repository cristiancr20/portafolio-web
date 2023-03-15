import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import Inicio from "./components/pages/Inicio";
import ProyectosHtml from "./components/pages/ProyectosHtml";
import ProyectosReact from "./components/pages/ProyectosReact";
import Proyectos from "./components/pages/Categorias";
import Sobremi from "./components/pages/Sobremi";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Inicio/>}/>
        <Route path="/proyectos" element= {<Proyectos/>}/>
        <Route path="/proyectos/html" element= {<ProyectosHtml/>}/>
        <Route path="/proyectos/react" element= {<ProyectosReact/>}/>
        <Route path="/sobre/mi" element= {<Sobremi/>}/>
      </Routes>
    </Router>
  );
}

export default App;
