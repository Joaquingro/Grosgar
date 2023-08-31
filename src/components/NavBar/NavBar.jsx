import React, { useState } from 'react'
import style from "../NavBar/NavBar.module.css";
import logo from "../../assets/logo.png";
function NavBar({isDarkMode, handleDarkMode}) {



  return (
  
  <nav className={isDarkMode ? `navbar navbar-expand-lg ${style.dark}` :`navbar navbar-expand-lg  ${style.nav}`}  >
  <div className={`container-fluid ${style.containerContent}`}>
    <div className={isDarkMode ? `${style.dark}` : `${style.title}`  }>
      <img src={logo} alt="logo" />
      <h1>GrosGar</h1>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className={`collapse navbar-collapse ${style.containerButtons}`} id="navbarSupportedContent">
    <div className={`collapse navbar-collapse ${style.buttons}`} id="navbarSupportedContent">

    <button type="button" className="btn btn-dark" onClick={handleDarkMode}>
      {isDarkMode ? <i className="bi bi-brightness-high-fill"></i> : <i className="bi bi-moon-stars-fill"></i>}
        </button>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"><button type="button" className="btn btn-light">Inicio</button></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"> <button type="button" className="btn btn-light">Servicios</button></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"><button type="button" className="btn btn-light">Nosotros</button></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"><button type="button" className="btn btn-success">Contáctanos</button></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    
  )
}

export default NavBar;