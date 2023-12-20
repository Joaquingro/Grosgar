import React, { useEffect, useState } from 'react'
import style from "../Contact/Contact.module.css";

export default function Contact({isDarkMode, id}) {
  
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

const handleSubmit = (e) => {
  e.preventDefault();
  const { message } = inputs;
  const subject = 'Nuevo mensaje de formulario de contacto';
  const body = message;



 setTimeout(() => {
    setInputs({
      name: "",
      email: "",
      message: "",
    })
 }, 1000);
};



  return (
    <div className={isDarkMode ? style.dark : style.container}>
        <div className={isDarkMode ? style.dark1 : style.title}>
          <h3>¿Preguntas sobre impuestos, contabilidad o planificación financiera? </h3>
          <h1>¡Contáctanos hoy!</h1>
        </div>

        <div className={isDarkMode ? style.dark2 : style.formContent}>

          <div id={id}  className={isDarkMode ? style.dark3 : style.infoForm}>

            <h1> Nuestro equipo está listo para brindar respuestas</h1>
            <div className={isDarkMode ? style.dark4 : style.iconDiv}>
              <i className={isDarkMode ? `bi bi-telephone ${style.dark5}` : `bi bi-telephone ${style.icon}`}></i>
              <div className={isDarkMode ? style.dark11 : style.infoDiv}>
                <h5>Nuestro teléfono</h5>
                <p>+52 5532943994</p>
              </div>
            </div>
            
            <div className={isDarkMode ? style.dark4 : style.iconDiv}>
              <i className={isDarkMode ? `bi bi-envelope-paper ${style.dark5}` : `bi bi-envelope-paper ${style.icon}`}></i>
              <div className={isDarkMode ? style.dark11 : style.infoDiv}>
                <h5>Nuestro correo electrónico</h5>
                <p>contabilidadivmg@gmail.com</p>
              </div>
            </div>

          </div>

          
        <div className={isDarkMode ? style.dark6 : style.divided}>
          <h1>Asesoramiento Gratuito</h1>
          <p>¿Tienes alguna duda? Háznolos saber</p>
          {/* <form 
          onSubmit={handleSubmit}
          class={"row g-3 needs-validation"} novalidate> */}
          <div className={isDarkMode ? style.dark7 : style.formFather}>
                <div className={isDarkMode ? style.dark8 : style.formContainer}>
                    <input 
                    className = "form-control form-control-lg" 
                    name="name" 
                    type="name" 
                    value = {inputs.name} 
                    onChange={handleInput}
                    placeholder="Tu nombre"
                    required
                    >
                    </input>
                </div>
                    <div className={isDarkMode ? style.dark8 : style.formContainer}>
                    <input 
                    className = "form-control form-control-lg" 
                    name = "email" 
                    type="email" 
                    value = {inputs.email} 
                    onChange={handleInput}
                    id="exampleFormControlInput1" placeholder="name@example.com"
                    required>
                    </input>
                </div>  
            </div>
            <div className={isDarkMode ? style.dark9 : style.formMessage}>
                <textarea 
                className = "form-control form-control-lg" 
                name="message" 
                type="message" 
                value = {inputs.message} 
                onChange={handleInput}
                placeholder="Cuéntame acerca de tu consulta..."
                required
                ></textarea>
            </div>
        
            <button 
            type="submit" 
            className={isDarkMode ? 
            `btn btn-secondary ${style.dark10}` : 
            `btn btn-secondary ${style.send}`}
            
            >Enviar</button>
            {/* </form> */}
            </div>
        </div>

    </div>

  )
}
