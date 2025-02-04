import * as FcIcons from "react-icons/fc";

export default function Info() {
  const items = [
    {
      title: "Cumplimiento Legal y Fiscal",
      description: "Asegura el cumplimiento de normativas legales y fiscales.",
      icon: <FcIcons.FcCollaboration size={70} />,
    },
    {
      title: "Control de Gastos",
      description: "Administra y optimiza los gastos de tu empresa.",
      icon: <FcIcons.FcDebt size={70} />,
    },
    {
      title: "Crecimiento Sostenible",
      description: "Estrategias para un crecimiento económico estable.",
      icon: <FcIcons.FcBullish size={70} />,
    },
    {
      title: "Planificación de Impuestos",
      description:
        "Optimiza el pago de impuestos con una planificación eficiente.",
      icon: <FcIcons.FcSalesPerformance size={70} />,
    },
  ];

  return (
    <div className="max-w-[1350px] w-full m-auto py-16 px-5">
      <div>
        <h1 className="text-2xl text-neutral-100">
          ¿Qué beneficios nos aporta?
        </h1>
        <p className="mt-5 max-w-[750px] w-full">
          {" "}
          Proporciona una imagen clara y detallada de todas las transacciones
          monetarias y actividades económicas que ocurren en el negocio. Aquí
          están las razones fundamentales por las que la contabilidad es
          crucial.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white h-[350px] shadow-md rounded-xl p-4 flex flex-col items-center justify-around text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <p className="text-lg font-light">{item.title}</p>
            <div className="text-3xl mb-2">{item.icon}</div>
            <p className="text-neutral-100 text-sm px-4">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
