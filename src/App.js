import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import Inicio from "./components/Inicio";
import Proyectos from "./components/Proyectos";
import Sobremi from "./components/Sobremi";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/Portfolio" element ={<Inicio/>}/>
        <Route path="/proyectos" element= {<Proyectos/>}/>
        <Route path="/sobre_mi" element= {<Sobremi/>}/>
      </Routes>
    </Router>
  );
}

export default App;
