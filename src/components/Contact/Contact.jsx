import React, { useEffect, useState } from 'react'
import style from "../Contact/Contact.module.css";
import Background from '../Background/Background';

export default function Contact() {
  
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
})
const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputs({
        ...inputs,
        [name]: value,
    })

}

  return (
    <div className={style.container}>
        <div className={style.title}>
          <h1>Contactanos, somos tu mejor opción</h1>
        </div>

        <div className={style.formContent}>

          <div className={style.infoForm}>

            <h1>Ponte en contacto con nosotros</h1>
            <div className={style.iconDiv}>
              <i className={`bi bi-telephone ${style.icon}`}></i>
              <div className={style.infoDiv}>
                <h5>Nuestro teléfono</h5>
                <p>+52 5532943994</p>
              </div>
            </div>
            
            <div className={style.iconDiv}>
              <i className={`bi bi-envelope-paper ${style.icon}`}></i>
              <div className={style.infoDiv}>
                <h5>Nuestro correo electrónico</h5>
                <p>contabilidadivmg@gmail.com</p>
              </div>
            </div>

          </div>

          
        <div className={style.divided}>
          <h1>Asesoramiento Gratuito</h1>
          <p>¿Tienes alguna duda? Háznolos saber</p>
          <div className={style.formFather}>
                <div className={style.formContainer}>
                    <input 
                    className = "form-control form-control-lg" 
                    name="name" 
                    type="name" 
                    value = {inputs.name} 
                    onChange={handleInput}
                    placeholder="Tu nombre"
                    >
                    </input>
                </div>
                    <div className={style.formContainer}>
                    <input 
                    className = "form-control form-control-lg" 
                    name = "email" 
                    type="email" 
                    value = {inputs.email} 
                    onChange={handleInput}
                    id="exampleFormControlInput1" placeholder="name@example.com">
                    </input>
                </div>  
            </div>
            <div className={style.formMessage}>
                <textarea 
                className = "form-control form-control-lg" 
                name="message" 
                type="message" 
                value = {inputs.message} 
                onChange={handleInput}
                placeholder="Cuéntame acerca de tu consulta..."
                
                ></textarea>
            </div>
        
            <button type="submit" className={`btn btn-secondary ${style.send}`}>Enviar</button>
            </div>
        </div>

    </div>

  )
}
