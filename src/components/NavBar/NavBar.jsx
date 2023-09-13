import React, { useState } from 'react'
import style from "../NavBar/NavBar.module.css";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';


function NavBar({isDarkMode, handleDarkMode}) {



  return (
  
  <div className={isDarkMode ? `navbar navbar-expand-lg ${style.dark}` :`navbar navbar-expand-lg  ${style.nav}`}  >
  <div className={`container-fluid ${style.containerContent}`}>
    <div className={isDarkMode ? `${style.dark1}` : `${style.title}`  }>
      <img src={logo} alt="logo" />
      <h1>GrosGar</h1>
    </div>
    <button className={isDarkMode ? `navbar-toggler ${style.dark2}` : `navbar-toggler ${style.hamburguer}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className={`collapse navbar-collapse ${style.containerButtons}`} id="navbarSupportedContent">
    <div className={`collapse navbar-collapse ${style.buttons}`} id="navbarSupportedContent">
    <button type="button" className={`btn btn-dark ${style.darkMode}`} onClick={handleDarkMode}>
      {isDarkMode ? <i className="bi bi-brightness-high-fill"></i> : <i className="bi bi-moon-stars-fill"></i>}
        </button>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Link to="/">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"><button type="button" className="btn btn-light">Inicio</button></a>
            </li>
          </Link>

          <Link to="/services">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"> <button type="button" className="btn btn-light">Servicios</button></a>
            </li>
          </Link>

          <Link to="/about">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"><button type="button" className="btn btn-light">Nosotros</button></a>
            </li>
          </Link>
         <AnchorLink href="#contact">
            <li className="nav-item">
               <a className="nav-link active" aria-current="page"><button type="button" className="btn btn-success">Contáctanos</button></a>
            </li>
          </AnchorLink>
        </ul>
      </div>
    </div>
  </div>
</div>
    
  )
}

export default NavBar;