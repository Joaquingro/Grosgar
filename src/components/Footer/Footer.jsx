import React from 'react'
import style from "../Footer/Footer.module.css";
import logo from "../../assets/logo.png";

function Footer({isDarkMode}) {
  return (
    <div className={isDarkMode ? style.dark : style.container}>
     <div className={isDarkMode ? style.dark1 : style.sonContainer}>
      <div className={isDarkMode ? style.dark2 : style.titleContainer}>

        <div className={isDarkMode ? style.dark3 : style.title}>
          <img src={logo} alt="logo" />
          <h1>GrosGar</h1>
        </div>

        <div className={isDarkMode ? style.dark4 : style.social}>
          <p>Siguenos en nuestras redes sociales</p>
          <i className= {isDarkMode ? `bi bi-twitter ${style.dark5}` :`bi bi-twitter ${style.icons}`}></i>
          <i className= {isDarkMode ? `bi bi-facebook ${style.dark6}` : `bi bi-facebook ${style.icon}`}></i>
          <i className= {isDarkMode ? `bi bi-linkedin ${style.dark6}` : `bi bi-linkedin ${style.icon}`}></i>
        </div>

      </div>

          <div className={isDarkMode ? style.dark7 : style.miniFooter}>
            <p>® 2023 GrosGar. Asesoria Contable</p> 
          </div>
        </div>
    </div>
  )
}

export default Footer