import React from 'react'
import style from "../Info/Info.module.css";
import Aos from "../../assets/Aos.jsx"

export default function Info() {
  return (
    <div className={style.container}>

      <div className={style.containerSon}>
        <div className={style.benefit}>
            <div 
            data-aos="flip-up" 
            data-aos-duration="1000">Hola</div>
            <div
            data-aos="flip-up" 
            data-aos-duration="1000"
            >Beneficio</div>
        </div>  
        <div className={style.benefit2}>
            <div
            data-aos="flip-up" 
            data-aos-duration="1000">Hola</div>
            <div
            data-aos="flip-up" 
            data-aos-duration="1000">Beneficio</div>
        </div>         
       </div>    

    
        <div 
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className={style.info}>
          <h4>BENEFICIOS</h4>
            <h1>ASESORÍA CONTABLE A SU SERVICIO</h1>
            <p>Entendemos que cada número cuenta y que detrás de cada cifra hay una historia única y valiosa. Somos un equipo comprometido de profesionales contables que se dedica a desbloquear el potencial financiero de su negocio.</p>
            <button type="button" class={`btn btn-secondary ${style.button}`}>Secondary</button>
        </div>


    </div>
  )
}
