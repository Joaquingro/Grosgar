import React from 'react'
import style from "../Footer/Footer.module.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className={style.container}>
     <div className={style.sonContainer}>
      <div className={style.titleContainer}>

        <div className={style.title}>
          <img src={logo} alt="logo" />
          <h1>GrosGar</h1>
        </div>

        <div className={style.social}>
          <p>Siguenos en nuestras redes sociales</p>
          <i className= {`bi bi-twitter ${style.icons}`}></i>
          <i className= {`bi bi-facebook ${style.icon}`}></i>
          <i className= {`bi bi-linkedin ${style.icon}`}></i>
        </div>

      </div>

          <div className={style.miniFooter}>
            <p>® 2023 GrosGar. Asesoria Contable</p> 
          </div>
        </div>
    </div>
  )
}

export default Footer