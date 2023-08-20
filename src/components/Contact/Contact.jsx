import React, { useEffect, useState } from 'react'
import style from "../Contact/Contact.module.css";

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
            <p>Nuestro teléfono: 2345453</p>
            <p>Nuestro correo electrónico: joaquinsgro@gmail.com</p>
          </div>
        <div>
          <div className={style.formFather}>
                <div className={style.formContainer}>
                    <label className="form-label"htmlFor="name">Nombre</label>
                    <input 
                    className = "form-control form-control-sm" 
                    name="name" 
                    type="name" 
                    value = {inputs.name} 
                    onChange={handleInput}
                    placeholder="Tu nombre"
                    >
                    </input>
                </div>
                    <div className={style.formContainer}>
                    <label className="form-label"htmlFor="email">Correo electrónico</label>
                    <input 
                    className = "form-control form-control-sm" 
                    name = "email" 
                    type="email" 
                    value = {inputs.email} 
                    onChange={handleInput}
                    id="exampleFormControlInput1" placeholder="name@example.com">
                    </input>
                </div>  
            </div>
            <div className={style.formMessage}>
                <label className="form-label" htmlFor="mensaje">Mensaje</label>
                <textarea 
                className = "form-control" 
                name="message" 
                type="message" 
                value = {inputs.message} 
                onChange={handleInput}
                placeholder="Cuéntame acerca de tu consulta..."
                
                ></textarea>
            </div>
        
            <button type="submit" className={style.send}>Enviar</button>
            </div>
        </div>


    </div>
    
   

  )
}
