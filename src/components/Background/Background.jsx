import React from 'react'
import style from "../Background/Background.module.css";

export default function Background() {
 
 
  return (
    <div className={style.night}>
      {Array.from({ length: 20 }).map((_, index) => (
        <div className={style.shooting_star} key={index}></div>
      ))}
    </div>
  )
}
