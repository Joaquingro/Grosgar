import React from 'react'
import style from "../Services/Services.module.css";
import Aos from '../../assets/Aos';


export default function Services() {
  return (
    <div className={style.container}>
      <h1>Servicios que ofrecemos:</h1>
      <p>Entendemos que cada número cuenta y que detrás de cada cifra hay una historia única y valiosa. </p>
        <div className={style.containerServices}>
            <div
             data-aos="flip-left" 
             data-aos-duration="1000"
            >Un servicio</div>
            <div 
            data-aos="flip-left" 
             data-aos-duration="1000"
            >Un servicio</div>
            <div 
            data-aos="flip-left" 
             data-aos-duration="1000"
            >Un servicio</div>
            <div 
            data-aos="flip-left" 
             data-aos-duration="1000"
            >Un servicio</div>
            <div 
            data-aos="flip-left" 
             data-aos-duration="1000"
            >Un servicio</div>
            <div 
            data-aos="flip-left" 
             data-aos-duration="1000"
            >Un servicio</div>

        </div>

    </div>
  )
}
