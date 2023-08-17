import React from 'react'
import style from "../Info/Info.module.css";

export default function Info() {
  return (
    <div className={style.container}>

      <div className={style.containerSon}>
        <div className={style.benefit}>
            <div>Hola</div>
            <div>Beneficio</div>
        </div>  
        <div className={style.benefit2}>
            <div>Hola</div>
            <div>Beneficio</div>
        </div>         
       </div>    

    
        <div className={style.info}>
          <h4>BENEFICIOS</h4>
            <h1>ASESORÍA CONTABLE A SU SERVICIO</h1>
            <p>Entendemos que cada número cuenta y que detrás de cada cifra hay una historia única y valiosa. Somos un equipo comprometido de profesionales contables que se dedica a desbloquear el potencial financiero de su negocio.</p>
            <button type="button" class={`btn btn-secondary ${style.button}`}>Secondary</button>
        </div>


    </div>
  )
}
