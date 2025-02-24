import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { authApi } from "../../api/api-client";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logodoradoconfondo.jpeg";
import FormikInput from "../../components/ui/Input";
import background from "../../assets/register.jpg";
import { Divider } from "@mui/material";

const Register = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string().email("Correo inválido").required("Requerido"),
    firstName: Yup.string().required("Requerido"),
    lastName: Yup.string().required("Requerido"),
    phoneNumber: Yup.string().required("Requerido"),
    password: Yup.string()
      .min(6, "Mínimo 6 caracteres")
      .matches(/[A-Z]/, "Debe contener al menos una mayúscula")
      .matches(/\d/, "Debe contener al menos un número")
      .matches(/[\W_]/, "Debe contener al menos un símbolo (@, #, $, etc.)")
      .required("Requerido"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Requerido"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, ...requestData } = values;
    try {
      const data = await authApi.register(requestData);
      console.log("Registro exitoso", data);
      if (data.responseCode === 0) {
        toast.success(data.message);
        navigate("/auth/login");
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
    <div className="max-w-[1350px] w-full m-auto flex items-center justify-center h-auto sm:h-[750px] sm:justify-normal py-5 sm:py-0 bg-white rounded-lg">
      <div className="flex flex-col items-center w-full h-full max-w-[450px] m-auto py-4">
        <div className="flex w-full justify-center sm:justify-start ">
          <button
            className="bg-transparent hover:bg-transparent"
            onClick={() => navigate("/inicio")}
          >
            <img src={logo} alt="logo" className="w-[70px] rounded-lg" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-semibold mb-4">Regístrate</h2>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              password: "",
              confirmPassword: "",
              email: "",
              phoneNumber: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="px-6 py-3 rounded-lg w-full">
                <div className="flex items-center gap-3">
                  <FormikInput label="Nombre" name="firstName" type="text" />
                  <FormikInput label="Apellidos" name="lastName" type="text" />
                </div>
                <FormikInput
                  label="Contraseña"
                  name="password"
                  type="password"
                />
                <FormikInput
                  label="Confirmar contraseña"
                  name="confirmPassword"
                  type="password"
                />
                <FormikInput
                  label="Correo Electrónico"
                  name="email"
                  type="email"
                />
                <FormikInput
                  label="Número de Teléfono"
                  name="phoneNumber"
                  type="tel"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white py-2 rounded-3xl my-5"
                >
                  {isSubmitting ? "Cargando..." : "Registrarse"}
                </button>
                <Divider>
                  <p>o</p>
                </Divider>
              </Form>
            )}
          </Formik>
          <div className="flex justify-center space-x-4">
            <button
              disabled={true}
              className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              <FaGoogle className="mr-2" /> Google
            </button>
            <button
              disabled={true}
              className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
            >
              <FaFacebook className="mr-2" /> Facebook
            </button>
          </div>
          <button
            className="bg-transparent text-blue-500 hover:bg-transparent hover:underline"
            onClick={() => navigate("/auth/login")}
          >
            ¿Ya tienes cuenta?, ¡Inicia sesión!
          </button>
        </div>
      </div>
      <div
        className="hidden sm:block w-[65%] bg-cover bg-no-repeat bg-center h-full rounded-l-full"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
    </div>
  );
};

export default Register;
