import React from 'react'
import style from "../Home/Home.module.css";
import NavBar from '../../components/NavBar/NavBar';
import ImageContent from '../../components/ImageContent/ImageContent';
import Info from '../../components/Info/Info';
import Services from '../../components/Services/Services';
import Footer from '../../components/Footer/Footer';
function Home() {
  return (
    <div>
      <NavBar/>
      <ImageContent/>
      <Info/>
      <Services/>
      <Footer/>
    </div>
    
  )
}

export default Home