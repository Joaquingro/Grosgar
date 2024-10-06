// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


import styles from './Carousel.module.css'

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
  ];

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
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
            disableOnInteraction: false
          }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className={styles.mySwipper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            maxWidth: '500px',
            height: '500px',
            transition: 'transform 0.3s',
           
          }}>
            {/* <img className={styles.imgSwiper} src={image} /> */}
            <div className={styles.swiperData}>
              <h3>Información</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolorem. Iure ipsa eius, itaque laboriosam quam unde nisi harum molestias in vero alias animi expedita maiores consequatur vel veniam reprehenderit!</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
