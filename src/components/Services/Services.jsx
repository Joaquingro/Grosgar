import React from 'react'
import style from "../Services/Services.module.css";
import Aos from '../../assets/Aos';


export default function Services({isDarkMode}) {
  return (
    <section className={isDarkMode? style.dark : style.container}>
      <h1>¿Qué tipo de servicio buscas?</h1>
      <p>Ofrecemos una variedad de servicios relacionados con la contabilidad, finanzas y cumplimiento de obligaciones fiscales</p>
        <div className={isDarkMode? style.dark1 : style.containerServices}>

            <div
             data-aos="flip-left" 
             data-aos-duration="1000"
            >

              <h5>Contabilidad General</h5>
              <section className={isDarkMode? style.dark2 : style.serviceContent}>
                <i class="bi bi-calculator"></i>
                <p> Llevar registros contables precisos, mantener el libro mayor, registrar transacciones financieras y preparar estados financieros.</p>  
              </section> 
            </div>

            <div 
            data-aos="flip-left" 
            data-aos-duration="1000">

              <h5>Asesoramiento Fiscal</h5>
              <section className={isDarkMode? style.dark2 : style.serviceContent}>
                <i class="bi bi-journal-text"></i> 
                <p>Asesoramiento sobre estrategias fiscales para minimizar la carga tributaria legalmente, identificar deducciones y beneficios fiscales.</p> 
              </section> 
            </div>

            <div 
            data-aos="flip-left" 
            data-aos-duration="1000">

              <h5>Planificación Financiera</h5>
              <section className={isDarkMode? style.dark2 : style.serviceContent}>
                <i class="bi bi-lightbulb-fill"></i>
                <p>Ayudar a los clientes a establecer objetivos financieros, crear presupuestos y desarrollar estrategias para alcanzar metas financieras.</p>
              </section> 
            </div>

            <div 
            data-aos="flip-left" 
            data-aos-duration="1000">

              <h5>Consultoría Financiera</h5>
              <section className={isDarkMode? style.dark2 : style.serviceContent}>
                <i class="bi bi-building-fill-gear"></i>  
                <p>Brindar asesoramiento en temas financieros, como inversión, financiamiento, fusiones y adquisiciones.</p>
              </section> 
             </div> 

            <div 
            data-aos="flip-left" 
            data-aos-duration="1000">

              <h5>Registro de Empresas</h5>
              <section className={isDarkMode? style.dark2 : style.serviceContent}>
                <i class="bi bi-buildings"></i> 
                <p>Asistir en la creación y registro de empresas, así como en la obtención de permisos y licencias necesarios.</p>
              </section> 

            </div>

            <div 
            data-aos="flip-left" 
            data-aos-duration="1000">

                <h5>Revisión de Contratos</h5>
                <section className={isDarkMode? style.dark2 : style.serviceContent}>
                  <i class="bi bi-file-text-fill"></i>
                  <p>Evaluar contratos y acuerdos financieros para garantizar que cumplan con los requisitos legales y sean beneficiosos para la empresa.</p>
                </section>

            </div>

        </div>

    </section>
  )
}
