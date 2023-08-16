import React from 'react'
import style from "../NavBar/NavBar.module.css";
import logo from "../../assets/logo.png";
function NavBar() {
  return (
  
  <nav className={`navbar ${style.nav}`}  >
  <div className={`container-fluid`}>
    <div className={style.title}>
      <img src={logo} alt="logo" />
      <h1>GrosGar</h1>

    </div>
  <div className={style.buttons}>
    <button type="button" className="btn btn-light">Inicio</button>
    <button type="button" className="btn btn-light">Servicios</button>
    <button type="button" className="btn btn-light">Nosotros</button>
    <button type="button" className="btn btn-success">Contáctanos</button>
  </div>
  </div>
</nav>
    
  )
}

export default NavBar;