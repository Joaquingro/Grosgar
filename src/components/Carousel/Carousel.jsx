// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Importa las imágenes correctamente
import financiera from "../../assets/financiera.jpg";
import fiscal from "../../assets/fiscal.jpg";
import costos from "../../assets/costos.jpg";
import pymes from "../../assets/pymes.jpg";
import freelance from "../../assets/freelance.jpg";
import micro from "../../assets/micro.jpg";
import gigEconomy from "../../assets/digital.jpg";

const accountingTypes = [
  {
    title: "Contabilidad Financiera",
    description:
      "Registra y reporta la situación financiera de una empresa para la toma de decisiones estratégicas.",
    image: financiera, // Usa la variable importada
  },
  {
    title: "Contabilidad Fiscal",
    description:
      "Asegura el cumplimiento de las obligaciones tributarias de una empresa según la legislación vigente.",
    image: fiscal,
  },
  {
    title: "Contabilidad de Costos",
    description:
      "Analiza y controla los costos de producción y operativos para mejorar la rentabilidad.",
    image: costos,
  },
  {
    title: "Contabilidad para PYMEs",
    description:
      "Adaptada a las pequeñas y medianas empresas para mejorar su control financiero y tributario.",
    image: pymes,
  },
  {
    title: "Contabilidad para Freelancers",
    description:
      "Optimiza la gestión de ingresos, gastos e impuestos para trabajadores independientes.",
    image: freelance,
  },
  {
    title: "Contabilidad de Microempresas",
    description:
      "Facilita el control financiero básico para pequeños negocios y emprendedores.",
    image: micro,
  },
  {
    title: "Contabilidad de Plataformas Digitales",
    description:
      "Optimiza la gestión de ingresos, gastos y declaraciones fiscales para conductores de Uber, repartidores de Rappi y otros trabajadores de la economía gig.",
    image: gigEconomy,
  },
];

export default function Carousel() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      speed={2000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      style={{ padding: "50px 15px" }}
    >
      {accountingTypes.map((item) => {
        const whatsappMessage = encodeURIComponent(
          `Hola, estoy interesado en más información sobre ${item.title}.`
        );

        return (
          <SwiperSlide
            key={item.title}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${item.image})`,
              maxWidth: "500px",
              height: "400px",
              transition: "transform 0.3s",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                color: "white",
                height: "350px",
                textAlign: "center",
              }}
              className="flex flex-col justify-center p-4 rounded-[10px] items-center"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              {/* Botón con enlace a WhatsApp */}
              <a
                href={`https://wa.me/5532943994?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                <button className="bg-green-500 text-white px-4 py-2 flex gap-2 rounded-md hover:bg-green-600 transition-all">
                  <i className="bi bi-chat-dots-fill "></i>Contratar
                </button>
              </a>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
