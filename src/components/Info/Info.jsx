import React from 'react'
import style from "../Info/Info.module.css";
import Aos from "../../assets/Aos.jsx"

export default function Info() {
  return (
    <div className={style.container}>

      <div className={style.containerSon}>
        <div className={style.benefit}>
            <div className={style.benefitContent}  
            data-aos="flip-up" 
            data-aos-duration="1000">
              <p>Cumplimiento Legal y Fiscal</p>
              <i class="bi bi-check-circle-fill"></i>
            </div>

            <div className={style.benefitContent}
            data-aos="flip-up" 
            data-aos-duration="1000"
            >
              <p>Control de Gastos</p>
              <i class="bi bi-wallet2"></i>
            </div>
        </div>  

        <div className={style.benefit2}>
            <div className={style.benefitContent}
            data-aos="flip-up" 
            data-aos-duration="1000">
             <p>Crecimiento Sostenible</p> 
             <i class="bi bi-graph-up-arrow"></i>
            </div>

            <div className={style.benefitContent}
            data-aos="flip-up" 
            data-aos-duration="1000">
              <p>Planificación de Impuestos</p> 
              <i class="bi bi-list-check"></i>
              </div>
        </div>         
       </div>    

    
        <div 
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className={style.info}>
          <h4>BENEFICIOS</h4>
            <h1>¿Qué beneficios nos aporta?</h1>
            <p> Proporciona una imagen clara y detallada de todas las transacciones monetarias y actividades económicas que ocurren en el negocio. Aquí están las razones fundamentales por las que la contabilidad es crucial.</p>
            <button type="button" class={`btn btn-secondary ${style.button}`}>Conoce más</button>
        </div>


    </div>
  )
}
