import React from 'react'
import style from "../Home/Home.module.css";
import NavBar from '../../components/NavBar/NavBar';
import ImageContent from '../../components/ImageContent/ImageContent';
import Info from '../../components/Info/Info';
import Services from '../../components/Services/Services';
import Footer from '../../components/Footer/Footer';
import Process from '../../components/Process/Process';
import Contact from '../../components/Contact/Contact';

function Home({isDarkMode, handleDarkMode}) {
  return (
    <div className={isDarkMode ? style.dark : style.white}>
      <NavBar isDarkMode = {isDarkMode} handleDarkMode = {handleDarkMode} />
      <ImageContent/>
      <Info isDarkMode = {isDarkMode}/>
      <Process isDarkMode = {isDarkMode} />
      <Services isDarkMode = {isDarkMode}/>
      <Contact isDarkMode = {isDarkMode}/>
      <Footer isDarkMode = {isDarkMode}/>

    </div>
    
  )
}

export default Home