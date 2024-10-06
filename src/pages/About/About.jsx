import style from "../About/About.module.css";
import mision from "../../assets/about.jpg";
import vision from "../../assets/aboutus.jpg";
import valores from "../../assets/exito.jpg";

export default function About() {
  return (
    <div className={style.containerAbout}>
      <div className={style.header}>
        <h1>Acerca de nosotros </h1>
        <h5>Conoce más de Grosgar</h5>
        <p className={style.color}>CONSULTORIA Y GESTIÓN EMPRESARIAL</p>
      </div>

      <div className={style.mision}>
        <span className={style.containerImgs}>
          <img
            src={mision}
            alt="mision imagen"
            className={style.misionImg}
            loading="lazy"
          />
          <img
            src={vision}
            alt="vision imagen"
            className={style.visionImg}
            loading="lazy"
          />
        </span>
        <div className={style.aboutContent}>
          <h4 className={style.title}>Misión</h4>
          <p>
            Nuestra misión es proporcionar soluciones integrales, estratégicas y
            personalizadas que impulsen el crecimiento y la sostenibilidad de
            las empresas mediante el asesoramiento experto en áreas clave como
            son; contabilidad, auditoría, cumplimiento fiscal, legal y gestión
            empresarial con un enfoque ético y profesional.
          </p>
          <h4 className={style.title}>Visión</h4>
          <p>
            Nuestra visión es ser reconocidos como líderes en consultoría
            empresarial, distinguiéndonos por nuestra capacidad de transformar
            desafíos en oportunidades. Aspiramos a ser el socio preferido de
            organizaciones en diversas industrias, ofreciendo soluciones
            innovadoras y personalizadas que fomenten el crecimiento y la
            excelencia operativa.
          </p>
        </div>
      </div>

      <div className={style.valores}>
        <div className={style.containerValores}>
          <h4 className={style.title}>Valores</h4>
          <ul>
            <li>
              <strong>Integridad:</strong> Actuamos con honestidad y
              transparencia en todos nuestros servicios.
            </li>
            <li>
              <strong>Confidencialidad:</strong> Respetamos la privacidad de
              nuestros clientes, asegurando que toda la información se maneje
              con el máximo cuidado.
            </li>
            <li>
              <strong>Compromiso:</strong> Estamos dedicados a entender las
              necesidades de nuestros clientes y a brindar soluciones
              personalizadas que los ayuden a alcanzar sus objetivos.
            </li>
            <li>
              <strong>Ética Profesional:</strong> Nos guiamos por principios
              éticos en cada aspecto de nuestro trabajo, garantizando un
              servicio transparente y claro.
            </li>
            <li>
              <strong>Responsabilidad:</strong> Respondemos ante las necesidades
              y preocupaciones de nuestros clientes, apoyándolos con la
              resolución de los mismos.
            </li>
            <li>
              <strong>Excelencia:</strong> Nos comprometemos a ofrecer servicios
              de alta calidad, buscando siempre la mejora constante para
              satisfacer las necesidades de nuestros clientes.
            </li>
            <li>
              <strong>Colaboración:</strong> Fomentamos un ambiente de trabajo
              en equipo, mediante el respeto y empatía tanto dentro de la
              consultora como con nuestros clientes.
            </li>
            <li>
              <strong>Innovación:</strong> Constantemente buscamos nuevas ideas
              y enfoques para resolver problemas, adaptándonos a las necesidades
              cambiantes del mercado.
            </li>
          </ul>
        </div>
        <img
          src={valores}
          alt="valores imagen"
          className={style.valoresImg}
          loading="lazy"
        />
      </div>
    </div>
  );
}
