import React from 'react'
import style from "../ImageContent/ImageContent.module.css";

export default function ImageContent({isDarkMode}) {

  return (
    <div className={isDarkMode ? style.dark : style.container}>
      <div className={isDarkMode ? style.dark1 : style.info}>
        <div className={isDarkMode ? style.dark2 : style.infoSon}>
          <h4>TRANSFORMANDO NÚMEROS EN OPORTUNIDADES</h4>
          <h1>ASESORÍA CONTABLE A SU SERVICIO</h1>
          <p>Entendemos que cada número cuenta y que detrás de cada cifra hay una historia única y valiosa. Somos un equipo comprometido de profesionales contables que se dedica a desbloquear el potencial financiero de su negocio.</p>

        </div>
      </div>

    </div>
  )
}
