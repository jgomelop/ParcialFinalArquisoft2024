import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavbarProyectos = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-search-proyect">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">TUS PROYECTOS APP</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active" aria-current="page">
                Buscar Proyectos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/registrar-proyecto" className="nav-link">
                Registrar Proyecto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarProyectos;