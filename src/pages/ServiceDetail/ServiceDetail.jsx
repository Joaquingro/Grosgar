/* eslint-disable react/prop-types */
import style from "../ServiceDetail/ServiceDetail.module.css";
import serviceInfo from "./Service";
import contract from "../../assets/contratar.png";
export default function ServiceDetail({ isDarkMode }) {
  return (
    <div>
      <div className={isDarkMode ? style.dark : style.container}>
        <h1>¿Buscas algo en particular? Te presentamos nuestros servicios</h1>
        <p>
          Optimiza tu Éxito Financiero con Nuestros Servicios de Contabilidad de
          Alta Calidad: Expertos en Soluciones Personalizadas para Empresas y
          Particulares
        </p>

        <div className={isDarkMode ? style.dark1 : style.services}>
          {serviceInfo &&
            serviceInfo.map((service, index) => (
              <div
                key={index}
                className={isDarkMode ? style.dark2 : style.service}
              >
                <img src={service.image} alt="image" />
                <h3>{service.name}</h3>
                <p>{service.description}</p>

                <button
                  type="button"
                  className={"btn btn-success"}
                  data-bs-toggle="modal"
                  data-bs-target={`#exampleModal-${index}`}
                >
                  Más información
                </button>

                <div
                  className={`modal fade ${style.modal}`}
                  id={`exampleModal-${index}`}
                  tabIndex="-1"
                  aria-labelledby={`exampleModalLabel-${index}`}
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div
                      className={
                        isDarkMode
                          ? `modal-content ${style.dark3}`
                          : `modal-content ${style.modalContainer}`
                      }
                    >
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id={`exampleModalLabel-${index}`}
                        >
                          <h3>{service.name}</h3>
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div
                        className={
                          isDarkMode
                            ? `modal-body ${style.dark4}`
                            : `modal-body ${style.modalText}`
                        }
                      >
                        {service.resume}

                        <h4>
                          ¿Te interesa contratar este servicio o saber más?
                        </h4>
                        <img src={contract} alt="" />
                      </div>

                      <div className="modal-footer">
                        <a
                          href={`https://wa.me/5532943994/?text=Hola, estoy interesado en el servicio de ${encodeURIComponent(
                            service.name
                          )}. ¿Puede proporcionarme más información?`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button type="button" className="btn btn-success">
                            <i className="bi bi-whatsapp"></i> Contratar
                            Servicio
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
