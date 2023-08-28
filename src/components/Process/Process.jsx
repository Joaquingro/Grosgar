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
                <h3>Paso 1: Recopilación de información</h3>

                <div className={style.step1}>
                    <i class="bi bi-circle-fill"></i> 
                    <p><strong>Identificación del cliente:</strong> El cliente proporciona su perfil y datos financieros existentes</p>
                </div>

                <div className={style.step1}>
                    <i class="bi bi-circle-fill"></i>
                    <p><strong>Tipo de consulta:</strong> El cliente elige el tipo de consulta que desea realizar, como "Planificación de Impuestos", "Gestión de Gastos" o "Asesoramiento Financiero".</p>
                </div>

                <div className={style.step1}>
                    <i class="bi bi-circle-fill"></i>
                    <p><strong>Detalles relevantes:</strong> Solicita información específica relacionada con la consulta, como ingresos, gastos, objetivos financieros, etc. Cuanta más información proporcione el usuario, más precisa será la respuesta.</p>
                </div>

            </div>
        </div>

        <div 
        data-aos-duration="1000"
        data-aos="zoom-in-up" 
        className={style.containerSon2}>
            <div className={style.info2}>
            <h3>Paso 2: Análisis y recomendaciones personalizadas</h3>

                <div className={style.step1}>
                    <i class="bi bi-circle-fill"></i> 
                    <p><strong>Análisis instantáneo:</strong> Procesamos la información proporcionada por el usuario para generar una estadística de su situación financiera actual.</p>
                </div>

                <div className={style.step1}>
                    <i class="bi bi-circle-fill"></i>
                    <p><strong>Recomendaciones Accionables:</strong> Basado en el análisis, ofrece recomendaciones específicas y accionables para mejorar la situación financiera del usuario. Estas recomendaciones podrían incluir ajustes en el presupuesto, estrategias de inversión, formas de reducir gastos, etc.</p>
                </div>
            </div>
            <img src={aseso} alt=''/>
        </div>
        
        <div 
        data-aos-duration="1000"
        data-aos="zoom-in" 
        className={style.containerSon}>
            <img src={resumen} alt=''/>
            <div className={style.info}>
                <h3>Paso 3: Comunicación y seguimiento continuo</h3>

                <div className={style.step1}>
                    <i class="bi bi-circle-fill"></i> 
                    <p><strong>Chat en vivo:</strong>  Ofrecemos la opción de iniciar un chat en vivo con un asesor financiero o un representante de soporte para aclarar dudas y obtener más información.</p>
                </div>

                <div className={style.step1}>
                    <i class="bi bi-circle-fill"></i>
                    <p><strong>Notificaciones y Recordatorios:</strong>  Envíamos notificaciones periódicas recordando al usuario revisar sus recomendaciones y realizar las acciones sugeridas.</p>
                </div>

            </div>
        </div>
        
    </div>
  )
}
