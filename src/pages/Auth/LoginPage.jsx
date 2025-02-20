import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { authApi } from "../../api/api-client";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string().email("Correo inválido").required("Requerido"),
    password: Yup.string().min(6, "Mínimo 6 caracteres").required("Requerido"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const data = await authApi.login(values.email, values.password);
      console.log("Login exitoso", data);
      if (data.responseCode === 0) {
        toast.success(data.message);
        navigate("/inicio")
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
    <div className="max-w-[1350px] w-full m-auto flex items-center justify-center sm:justify-normal py-5 sm:py-0 bg-white rounded-lg">
      <div
        className="hidden sm:block w-2/3 bg-cover bg-no-repeat bg-center h-[700px]"
        style={{ backgroundImage: "url('/src/assets/login.jpg')" }}
      ></div>

      <div className="flex flex-col justify-center items-center w-full max-w-[400px] m-auto">
        <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="p-6 rounded-lg w-full">
              <div className="mb-4">
                <label className="block text-gray-700">
                  Correo Electrónico
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Contraseña</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white py-2 rounded-lg"
              >
                {isSubmitting ? "Cargando..." : "Iniciar Sesión"}
              </button>
              <div className="flex justify-center mt-4 space-x-4">
                <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  <FaGoogle className="mr-2" /> Google
                </button>
                <button className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                  <FaFacebook className="mr-2" /> Facebook
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
