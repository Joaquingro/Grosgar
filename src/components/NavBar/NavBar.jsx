import React from 'react'
import style from "../NavBar/NavBar.module.css";
import logo from "../../assets/logo.png";
function NavBar() {
  return (
  
  <nav class={`navbar ${style.nav}`}  >
  <div class="container-fluid">
  <img src={logo} alt="logo" />
  <div className={style.buttons}>
    <button type="button" class="btn btn-light">Inicio</button>
    <button type="button" class="btn btn-light">Servicios</button>
    <button type="button" class="btn btn-success">Contáctanos</button>
  </div>
  </div>
</nav>
    
  )
}

export default NavBar;