import ImageContent from "../../../components/dashboard/ImageContent/ImageContent";
import Contact from "../Contact/Contact";
import Carousel from "../../../components/dashboard/Carousel/Carousel";
import Whatsapp from "../../../components/dashboard/Whatsapp/Whatsapp";

// eslint-disable-next-line react/prop-types
function Home() {
  return (
    <div>
      <ImageContent />
      <Carousel />
      <Contact id="contact" />
      <Whatsapp/>
    </div>
  );
}

export default Home;
