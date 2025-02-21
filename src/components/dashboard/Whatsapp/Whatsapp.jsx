import { useEffect, useState } from 'react'
import style from "./Whatsapp.module.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaArrowCircleUp, FaWhatsapp } from 'react-icons/fa';

export default function Whatsapp() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

      setIsVisible(currentScrollTop > 20 && currentScrollTop > lastScrollTop);

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };



  return (
    <div className={style.container}>
      <a href="https://wa.me/5532943994" target="_blank" rel="noopener noreferrer">
        <button type="button" className={`bg-green-400 hover:bg-green-600 p-2 rounded-lg  ${style.button}`}>
          <FaWhatsapp size={35}/>
        </button>
      </a>

      {isVisible && (
        <AnchorLink href="#inicio">
          <a className={`nav-link active ${isVisible ? style.visible : style.hidden}`} aria-current="page">
          <button type="button" className={`bg-green-400 hover:bg-green-600 p-2 rounded-lg  ${style.upArrow}`} onClick={handleScrollToTop}>
          <FaArrowCircleUp size={35}/>
          </button>
        </a>
        </AnchorLink>
      )}
    </div>
  )
}
