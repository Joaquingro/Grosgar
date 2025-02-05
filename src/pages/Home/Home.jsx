import style from "../Home/Home.module.css";
import ImageContent from "../../components/ImageContent/ImageContent";
import Contact from "../Contact/Contact";
import Carousel from "../../components/Carousel/Carousel";

// eslint-disable-next-line react/prop-types
function Home({ isDarkMode }) {
  return (
    <div className={isDarkMode ? style.dark : style.white}>
      <ImageContent isDarkMode={isDarkMode} />
      <Carousel />
      {/* <Info isDarkMode={isDarkMode} /> */}
      {/* <Process isDarkMode={isDarkMode} /> */}
      {/* <Services isDarkMode={isDarkMode} /> */}
      <Contact id="contact" isDarkMode={isDarkMode} />
    </div>
  );
}

export default Home;
