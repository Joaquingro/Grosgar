import React, { useEffect, useState } from 'react'
import style from "../Whatsapp/Whatsapp.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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


  useEffect(() => {
   
    const timer = setTimeout(() => {
      toast('¡Comunicate con un asesor!', 
      { autoClose: 3000,
        hideProgressBar: true,
        bodyClassName: style['custom-toast-body'],
        className: style['custom-toast'],
        closeButton: false,
        zIndex: -1,
       });
    }, 2000); 
    return () => {
      clearTimeout(timer);
    };
  }, []);
  

  return (
    <div className={style.container}>
      <ToastContainer position="bottom-right"/>
      <a href="https://wa.me/5532943994">
      <button type="button" className={`btn btn-success     btn-lg ${style.button}`}>
        <i className="bi bi-chat-dots-fill"></i>
        </button>
      </a>
      
      {isVisible && (
        <AnchorLink href="#inicio">
          <a className={`nav-link active ${isVisible ? style.visible : style.hidden}`} aria-current="page">
          <button type="button" className={`btn btn-success ${style.upArrow}`} onClick={handleScrollToTop}>
            <i className="bi bi-arrow-up-circle"></i>
          </button>
        </a>
        </AnchorLink>
      )}
    </div>
  )
}
