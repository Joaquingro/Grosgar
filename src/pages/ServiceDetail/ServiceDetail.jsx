import React from 'react'
import style from "../ServiceDetail/ServiceDetail.module.css";
import serviceInfo from './Service';
import Footer from '../../components/Footer/Footer';
import contract from "../../assets/contratar.png";
export default function ServiceDetail({isDarkMode}) {


  return (
    <div>

    
    <div className={isDarkMode ? style.dark : style.container}>
      <h1>¿Buscas algo en particular? Te presentamos nuestros servicios</h1>
        <p>Optimiza tu Éxito Financiero con Nuestros Servicios de Contabilidad de Alta Calidad: Expertos en Soluciones Personalizadas para Empresas y Particulares</p>

        <div className={isDarkMode ? style.dark1 : style.services}>
        {serviceInfo && serviceInfo.map((service, index) => (
  <div key={index} className={isDarkMode ? style.dark2 : style.service}>
    <img src={service.image} alt="image"/>
    <h3>{service.name}</h3>
    <p>{service.description}</p>

    <button
      type="button"
      className={"btn btn-success"}
      data-bs-toggle="modal"
      data-bs-target={`#exampleModal-${index}`} // Cambiado el ID del modal para que sea único
    >
      Más información
    </button>

    <div
      className={`modal fade ${style.modal}`}
      id={`exampleModal-${index}`} // Cambiado el ID del modal para que sea único
      tabIndex="-1"
      aria-labelledby={`exampleModalLabel-${index}`} // Cambiado el ID del modal para que sea único
      aria-hidden="true"
    >
      <div
        className="modal-dialog"
      >
        <div className={
          isDarkMode ? `modal-content ${style.dark3}` : `modal-content ${style.modalContainer}`
        }>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`exampleModalLabel-${index}`}>
              <h3>{service.name}</h3>
              </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className={isDarkMode ? `modal-body ${style.dark4}` : `modal-body ${style.modalText}`}>
            {service.resume}

          <h4>¿Te interesa contratar este servicio o saber más?</h4>
          <img src={contract} alt="" />
          </div>
          
          <div className="modal-footer">
          <a
            href={`https://wa.me/5532943994/?text=Hola, estoy interesado en el servicio de ${encodeURIComponent(service.name)}. ¿Puede proporcionarme más información?`}
          />
            <button type="button" className="btn btn-success">
            <i class="bi bi-whatsapp"></i> Contratar Servicio
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
))}

        </div>
    </div>
        <Footer/>
    </div>
  )
}
