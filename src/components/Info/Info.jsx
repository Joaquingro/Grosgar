import React from 'react'
import style from "../Info/Info.module.css";
import Aos from "../../assets/Aos.jsx"

export default function Info({isDarkMode}) {

// JavaScript
if (window.innerWidth <= 391) { // Define el ancho máximo para activar el carrusel
  const swiperContainer = document.querySelector('container'); // Selecciona el contenedor actual

  if (swiperContainer) {
    const swiper = new Swiper(swiperContainer, {
      slidesPerView: 'auto', // Opciones de Swiper según tu necesidad
      // ...otras opciones...
    });
  }
}



  return (
    <div className={isDarkMode ? style.dark : style.container}>

      <div className={isDarkMode? style.dark1 : style.containerSon}>
        <div className={isDarkMode? style.dark2 : style.benefit}>
            <div className={isDarkMode? style.dark3 : style.benefitContent}  
            data-aos="flip-up" 
            data-aos-duration="1000">
              <p>Cumplimiento Legal y Fiscal</p>
              <i class="bi bi-check-circle-fill"></i>
            </div>

            <div className={isDarkMode? style.dark3 : style.benefitContent}
            data-aos="flip-up" 
            data-aos-duration="1000"
            >
              <p>Control de Gastos</p>
              <i class="bi bi-wallet2"></i>
            </div>
        </div>  

        <div className={isDarkMode? style.dark4 : style.benefit2}>
            <div className={isDarkMode? style.dark3 : style.benefitContent}
            data-aos="flip-up" 
            data-aos-duration="1000">
             <p>Crecimiento Sostenible</p> 
             <i class="bi bi-graph-up-arrow"></i>
            </div>

            <div className={isDarkMode ? style.dark3 : style.benefitContent}
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
        className={isDarkMode ? style.dark5 : style.info}>
          <h4>BENEFICIOS</h4>
            <h1>¿Qué beneficios nos aporta?</h1>
            <p> Proporciona una imagen clara y detallada de todas las transacciones monetarias y actividades económicas que ocurren en el negocio. Aquí están las razones fundamentales por las que la contabilidad es crucial.</p>
            <button type="button" class={isDarkMode? `btn btn-secondary ${style.dark6}` :`btn btn-secondary ${style.button}`}>Conoce más</button>
        </div>


    </div>
  )
}
