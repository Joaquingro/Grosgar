import style from "../ImageContent/ImageContent.module.css";

export default function ImageContent() {
  return (
    <div className={style.fatherContainer}>
      <div className={style.container}>
        <div className={style.info}>
          <div className={style.infoSon}>
            <h4 className="text-2xl sm:text-3xl rwzr.-">
              TRANSFORMANDO NÚMEROS EN OPORTUNIDADES
            </h4>
            <h1 className="text-lg sm:text-xl">
              ASESORÍA CONTABLE A SU SERVICIO
            </h1>
            <p className="font-light rounded-xl text-sm sm:text-base">
              Entendemos que cada número cuenta y que detrás de cada cifra hay
              una historia única y valiosa. Somos un equipo comprometido de
              profesionales contables que se dedica a desbloquear el potencial
              financiero de su negocio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
