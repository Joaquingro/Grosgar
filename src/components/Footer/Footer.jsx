import style from "../Footer/Footer.module.css";
import logo from "../../assets/logo.png";

function Footer({ isDarkMode }) {
  return (
    <div className={isDarkMode ? style.dark : style.container}>
      <div className={isDarkMode ? style.dark1 : style.sonContainer}>
        <div className={isDarkMode ? style.dark2 : style.titleContainer}>
          <div className={isDarkMode ? style.dark3 : style.title}>
            <img src={logo} alt="logo" />
          </div>

          <div className={isDarkMode ? style.dark4 : style.social}>
            <p>Siguenos en nuestras redes sociales</p>

            <a
              className={style.iconRedirect1}
              href="https://www.facebook.com/profile.php?id=100084660501983"
            >
              <i
                className={
                  isDarkMode
                    ? `bi bi-facebook ${style.dark6}`
                    : `bi bi-facebook ${style.icon}`
                }
              ></i>
            </a>

            <a
              className={style.iconRedirect}
              href="https://twitter.com/ContaGrosGar"
            >
              <i
                className={
                  isDarkMode
                    ? `bi bi-twitter ${style.dark5}`
                    : `bi bi-twitter ${style.icons}`
                }
              ></i>
            </a>

            <a className={style.iconRedirect} href="">
              <i
                className={
                  isDarkMode
                    ? `bi bi-linkedin ${style.dark6}`
                    : `bi bi-linkedin ${style.icon}`
                }
              ></i>
            </a>
          </div>
        </div>

        <div className={isDarkMode ? style.dark7 : style.miniFooter}>
          <p>® 2023 GrosGar. Asesoria Contable</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
