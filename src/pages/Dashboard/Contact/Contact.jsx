import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { supportApi } from "../../../api/api-client";
import { toast } from "react-toastify";
import FormikInput from "../../../components/ui/Input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import PropTypes from 'prop-types';
function Contact({ id }) {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("El nombre es obligatorio")
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .max(100, "El nombre no puede exceder los 100 caracteres"),

    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es obligatorio"),

    message: Yup.string()
      .required("El mensaje es obligatorio")
      .min(10, "El mensaje debe tener al menos 10 caracteres")
      .max(1000, "El mensaje no puede exceder los 1000 caracteres"),
  });

  const contactOptions = [
    {
      title: "Asesorías en línea",
      description:
        "Recibe orientación personalizada sobre nuestros servicios o procesos para resolver cualquier duda que tengas.",
    },
    {
      title: "Dudas generales",
      description:
        "Si necesitas más información sobre nuestras ofertas, funcionamiento de la plataforma o cualquier otro detalle, estamos aquí para ayudarte.",
    },
    {
      title: "Aclaraciones y soporte",
      description:
        "¿Tienes un problema con un pago o un servicio adquirido? Contáctanos para resolverlo de manera rápida y eficiente.",
    },
  ];

  const handleSubmit = async (values, { setSubmitting, resetForm  }) => {
    try {
      const data = await supportApi.supportEmail(values);
      console.log("Envío exitoso", data);
      if (data.responseCode === 0) {
        toast.success(data.message);
        resetForm();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
    setSubmitting(false);
  };

  return (
    <div className="relative w-full px-4 ms:px-20 bg-line bg-cover bg-no-repeat sm:bg-center">
      <div className="max-w-[1500px] w-full m-auto py-5 sm:p-20 flex justify-around gap-10 sm:gap-5 flex-wrap">
        <div
          id={id}
          className="flex flex-col justify-around text-white max-w-[700px]"
        >
          <div>
            <h1 className="text-4xl sm:text-[40px] mb-3">Contáctanos</h1>

            <h1 className="text-base font-light">
              {" "}
              Nuestro equipo está listo para brindar respuestas
            </h1>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <CiPhone />
              <p>+52 55 3294 3994 ó +52 55 3261 1698</p>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <MdEmail />
              <p>consultoriaempresarialcaim@gmail.com</p>
            </div>
          </div>

          <div className="items-start gap-5 hidden sm:flex">
            {contactOptions.map((option) => (
              <span key={option.title}>
                <p className="mb-3 font-bold">{option.title}</p>
                <p className="text-sm max-w-[250px] w-full">
                  {option.description}
                </p>
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white py-4 px-4 rounded-2xl max-w-[400px] w-full">
          <p className="mb-4 font-semibold text-2xl">¿Tienes alguna duda?</p>
          <p className="text-sm text-neutral-500 mb-5">
            Te atenderemos lo más pronto posible
          </p>

          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values, handleChange }) => (
              <Form className="rounded-lg w-full">
                <FormikInput
                  label="Tu nombre"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                />
                <FormikInput
                  label="Correo electrónico"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <FormikInput
                  label="Cuéntame acerca de tu consulta..."
                  name="message"
                  type="text"
                  value={values.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white py-2 rounded-3xl my-5"
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired, 
};

export default Contact;