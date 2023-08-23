import React from 'react'
import style from "../Whatsapp/Whatsapp.module.css";
import whats from "../../assets/whats.png";

export default function Whatsapp() {
  return (
    <div className={style.container}>
      <a href="https://wa.me/5549511434">
      <button type="button" className={`btn btn-success btn-lg ${style.button}`}><i className="bi bi-whatsapp"></i>  WhatsApp</button>
      </a>
    </div>
  )
}
