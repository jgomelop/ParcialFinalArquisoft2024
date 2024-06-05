import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Proyectos } from './Proyectos.jsx'
import RegistrarProyecto from './components/RegistrarProyecto.jsx'
import NavbarProyectos from './components/NavbarProyectos.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarProyectos />
      <Routes>
        <Route path="/" element={<Proyectos />} />
        <Route path="/registrar-proyecto" element={<RegistrarProyecto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
