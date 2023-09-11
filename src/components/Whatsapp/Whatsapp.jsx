import React, { useEffect } from 'react'
import style from "../Whatsapp/Whatsapp.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Whatsapp() {

  useEffect(() => {
   
    const timer = setTimeout(() => {
      toast('¡Comunicate con un asesor!', 
      { autoClose: 3000,
        hideProgressBar: true,
        bodyClassName: style['custom-toast-body'],
        className: style['custom-toast'],
        closeButton: false,
        zIndex: -1,
       });
    }, 2000); 
    return () => {
      clearTimeout(timer);
    };
  }, []);
  

  return (
    <div className={style.container}>
      <ToastContainer position="bottom-right"/>
      <a href="https://wa.me/5532943994">
      <button type="button" className={`btn btn-success     btn-lg ${style.button}`}>

        <i className="bi bi-chat-dots-fill"></i>
        </button>
      </a>
    </div>
  )
}
