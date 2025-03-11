import style from "./ImageContent.module.css";

export default function ImageContent() {
  return (
    <div className={style.fatherContainer}>
      <div className={style.container}>
        <div className={style.info}>
          <div className={style.infoSon}>
            <h4 className="text-2xl sm:text-3xl rwzr.-">
              TRANSFORMANDO NÚMEROS EN OPORTUNIDADES
            </h4>
            <h1 className="text-lg sm:text-xl my-5">
              ASESORÍA CONTABLE A SU SERVICIO | DESPACHO CONTABLE EN LÍNEA
            </h1>
            <p className="font-light rounded-xl text-sm sm:text-base">
              Entendemos que cada número cuenta y que detrás de cada cifra hay
              una historia única y valiosa. Somos un equipo comprometido de
              profesionales contables que se dedica a desbloquear el potencial
              financiero de su negocio. Ofrecemos{" "}
              <strong>asesoría contable en línea</strong>,{" "}
              <strong>consultoría financiera</strong>, y{" "}
              <strong>auditoría fiscal</strong> de forma personalizada para{" "}
              <strong>empresas</strong> y <strong>pymes</strong>. Si busca
              mejorar la gestión de su contabilidad, optimizar su{" "}
              <strong>fiscalidad</strong> o recibir un{" "}
              <strong>servicio contable en línea</strong>, está en el lugar
              correcto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
