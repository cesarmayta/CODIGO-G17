import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InicioSesion } from './modulos/autenticacion/pages/InicioSesion';
import { Registro } from './modulos/autenticacion/pages/Registro';
import { CursoIntro } from './modulos/cursos/pages/CursoIntro';
import { Cursos } from './modulos/cursos/pages/Cursos';
import { DataContextProvider } from './context/dataContext';

const App = () => {
  return (
    <DataContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Cursos />}>
          </Route>
          <Route path='/curso-intro' element={<CursoIntro />} />
          <Route path='/iniciar-sesion' element={<InicioSesion />} />
          <Route path='/registro' element={<Registro />} />
        </Routes>
      </Router>
    </DataContextProvider>
  )
}

export default App;
