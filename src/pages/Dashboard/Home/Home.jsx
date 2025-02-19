import ImageContent from "../../../components/ImageContent/ImageContent";
import Contact from "../Contact/Contact";
import Carousel from "../../../components/Carousel/Carousel";

// eslint-disable-next-line react/prop-types
function Home() {
  return (
    <div>
      <ImageContent />
      <Carousel />
      <Contact id="contact" />
    </div>
  );
}

export default Home;
