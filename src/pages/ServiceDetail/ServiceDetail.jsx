import React from 'react'
import style from "../ServiceDetail/ServiceDetail.module.css";
import serviceInfo from './Service';

export default function ServiceDetail({isDarkMode}) {
  return (
    <div className={isDarkMode ? style.dark : style.container}>
        <h1>Nuestros Servicios</h1>

        <div className={isDarkMode ? style.dark1 : style.services}>
          {serviceInfo && serviceInfo.map((service, index) => 
          <div key={index} className={isDarkMode ? style.dark2 : style.service}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <div className={isDarkMode ? style.dark3 : style.loader}></div>
           </div>
          
          )}
        </div>

    </div>
  )
}
