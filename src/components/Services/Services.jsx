import React from 'react'
import style from "../Services/Services.module.css";

export default function Services() {
  return (
    <div className={style.container}>
      <h1>Servicios que ofrecemos:</h1>
      <p>Entendemos que cada número cuenta y que detrás de cada cifra hay una historia única y valiosa. </p>
        <div className={style.containerServices}>
            <div>Un servicio</div>
            <div>Un servicio</div>
            <div>Un servicio</div>
            <div>Un servicio</div>
            <div>Un servicio</div>
            <div>Un servicio</div>

        </div>

    </div>
  )
}
