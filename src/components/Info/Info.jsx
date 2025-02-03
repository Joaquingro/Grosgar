import style from "../Info/Info.module.css";

// eslint-disable-next-line react/prop-types
export default function Info({ isDarkMode }) {
  return (
    <div className={isDarkMode ? style.dark : style.container}>
      <div className={isDarkMode ? style.dark1 : style.containerSon}>
        <div className={isDarkMode ? style.dark2 : style.benefit}>
          <div className={isDarkMode ? style.dark3 : style.benefitContent}>
            <p className="text-right">Cumplimiento Legal y Fiscal</p>
            <i className="bi bi-check-circle-fill"></i>
          </div>
          <div
            className={isDarkMode ? style.dark3 : style.benefitContent}
          
          >
            <p>Control de Gastos</p>
            <i className="bi bi-wallet2"></i>
          </div>
        </div>

        <div className={isDarkMode ? style.dark4 : style.benefit2}>
          <div
            className={isDarkMode ? style.dark3 : style.benefitContent}
          
          >
            <p>Crecimiento Sostenible</p>
            <i className="bi bi-graph-up-arrow"></i>
          </div>

          <div
            className={isDarkMode ? style.dark3 : style.benefitContent}
         
          >
            <p>Planificación de Impuestos</p>
            <i className="bi bi-list-check"></i>
          </div>
        </div>
      </div>

      <div
        className={isDarkMode ? style.dark5 : style.info}
      >
        <h4>BENEFICIOS</h4>
        <h1>¿Qué beneficios nos aporta?</h1>
        <p>
          {" "}
          Proporciona una imagen clara y detallada de todas las transacciones
          monetarias y actividades económicas que ocurren en el negocio. Aquí
          están las razones fundamentales por las que la contabilidad es
          crucial.
        </p>
        <button
          type="button"
          className={
            isDarkMode
              ? `btn btn-secondary ${style.dark6}`
              : `btn btn-secondary ${style.button}`
          }
        >
          Conoce más
        </button>
      </div>
    </div>
  );
}
