import React from 'react'
import style from "../Process/Process.module.css";
import logo from "../../assets/logo.png";

export default function Process() {
  return (
    <div className={style.container}>
        <div className={style.containerSon}>
            <img src={logo} alt=''/>
            <div className={style.info}>
                <h4>BENEFICIOS</h4>
                <h1>ASESORÍA CONTABLE A SU SERVICIO</h1>
                <p>Entendemos que cada número cuenta y que detrás de cada cifra hay una historia única y valiosa. Somos un equipo comprometido de profesionales contables que se dedica a desbloquear el potencial financiero de su negocio.</p>

            </div>
        </div>

        <div className={style.containerSon2}>
            <div className={style.info}>
                <h4>BENEFICIOS</h4>
                    <h1>ASESORÍA CONTABLE A SU SERVICIO</h1>
                    <p>Entendemos que cada número cuenta y que detrás de cada cifra hay una historia única y valiosa. Somos un equipo comprometido de profesionales contables que se dedica a desbloquear el potencial financiero de su negocio.</p>
            </div>
            <img src={logo} alt=''/>
        </div>
        <div className={style.containerSon}>
            <img src={logo} alt=''/>
            <div className={style.info}>
                <h4>BENEFICIOS</h4>
                    <h1>ASESORÍA CONTABLE A SU SERVICIO</h1>
                    <p>Entendemos que cada número cuenta y que detrás de cada cifra hay una historia única y valiosa. Somos un equipo comprometido de profesionales contables que se dedica a desbloquear el potencial financiero de su negocio.</p>
            </div>
        </div>
        
    </div>
  )
}
