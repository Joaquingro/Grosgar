import React from 'react'
import style from "../ServiceDetail/ServiceDetail.module.css";
import serviceInfo from './Service';

export default function ServiceDetail() {
  return (
    <div className={style.container}>
        <h1>Nuestros Servicios</h1>

        <div className={style.services}>
          {serviceInfo && serviceInfo.map((service, index) => 
          <div id={index} className={style.service}>
            <p>{service.name}</p>
           </div>
          
          )}
        </div>

    </div>
  )
}
