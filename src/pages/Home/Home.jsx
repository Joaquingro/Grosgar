import style from "../Home/Home.module.css";
import ImageContent from '../../components/ImageContent/ImageContent';
import Info from '../../components/Info/Info';
import Services from '../../components/Services/Services';
import Footer from '../../components/Footer/Footer';
import Process from '../../components/Process/Process';
import Contact from '../../components/Contact/Contact';
import Carousel from "../../components/Carousel/Carousel";

// eslint-disable-next-line react/prop-types
function Home({isDarkMode}) {
  return (
    <div className={isDarkMode ? style.dark : style.white}>
      <ImageContent  isDarkMode = {isDarkMode} />
      {/* <Carousel/> */}
      <Info isDarkMode = {isDarkMode}/>
      <Process isDarkMode = {isDarkMode} />
      <Services isDarkMode = {isDarkMode}/>
      <Contact id = "contact" isDarkMode = {isDarkMode}/>
      <Footer isDarkMode = {isDarkMode}/>

    </div>
    
  )
}

export default Home