import React, { useEffect } from 'react'
import style from "../ServiceDetail/ServiceDetail.module.css";
import serviceInfo from './Service';
import Footer from '../../components/Footer/Footer';

export default function ServiceDetail({isDarkMode}) {


  return (
    <div>

    
    <div className={isDarkMode ? style.dark : style.container}>
      <h1>¿Buscas algo en particular? Te presentamos nuestros servicios</h1>
        <p>Optimiza tu Éxito Financiero con Nuestros Servicios de Contabilidad de Alta Calidad: Expertos en Soluciones Personalizadas para Empresas y Particulares</p>

        <div className={isDarkMode ? style.dark1 : style.services}>
          {serviceInfo && serviceInfo.map((service, index) => 
          <div key={index} className={isDarkMode ? style.dark2 : style.service}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>

          
          <button type="button" className={"btn btn-success"} data-bs-toggle="modal" data-bs-target="#exampleModal">
            Más información
          </button>

          <div className={`modal fade ${style.modal}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={isDarkMode ? `modal-dialog ${style.dark4}` : `modal-dialog ${style.modalContainer}`}>
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
           </div>
          
          )}
        </div>
    </div>
        <Footer/>
    </div>
  )
}
