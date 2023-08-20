import React, { useEffect } from 'react'
import style from "../Process/Process.module.css";
import enviar from "../../assets/Enviar.jpg";
import resumen from "../../assets/resumen.webp";
import aseso from "../../assets/asesoramiento.jpg";
import Aos from '../../assets/Aos';

export default function Process() {

    
  return (
    <div className={style.container}>
        <div 
        data-aos="zoom-in" 
        data-aos-duration="1000"

        className={style.containerSon}>
            <img src={enviar} alt=''/>
            <div className={style.info}>
                <h4>BENEFICIOS</h4>
                <h1>ASESORÍA CONTABLE A SU SERVICIO</h1>
                <p>Entendemos que cada número cuenta y que detrás de cada cifra hay una historia única y valiosa. Somos un equipo comprometido de profesionales contables que se dedica a desbloquear el potencial financiero de su negocio.</p>

            </div>
        </div>

        <div 
        data-aos-duration="1000"
        data-aos="zoom-in-up" 
        className={style.containerSon2}>
            <div className={style.info}>
                <h4>BENEFICIOS</h4>
                    <h1>ASESORÍA CONTABLE A SU SERVICIO</h1>
                    <p>Entendemos que cada número cuenta y que detrás de cada cifra hay una historia única y valiosa. Somos un equipo comprometido de profesionales contables que se dedica a desbloquear el potencial financiero de su negocio.</p>
            </div>
            <img src={aseso} alt=''/>
        </div>
        <div 
        data-aos-duration="1000"
        data-aos="zoom-in" 
        className={style.containerSon}>
            <img src={resumen} alt=''/>
            <div className={style.info}>
                <h4>BENEFICIOS</h4>
                    <h1>ASESORÍA CONTABLE A SU SERVICIO</h1>
                    <p>Entendemos que cada número cuenta y que detrás de cada cifra hay una historia única y valiosa. Somos un equipo comprometido de profesionales contables que se dedica a desbloquear el potencial financiero de su negocio.</p>
            </div>
        </div>
        
    </div>
  )
}
