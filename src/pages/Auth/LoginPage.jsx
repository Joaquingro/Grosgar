import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { authApi } from "../../api/api-client";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logodoradoconfondo.jpeg";
import background from "../../assets/login.jpg";
import { Divider, Typography } from "@mui/material";
import useAuthStore from "../../stores/auth.store";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
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
        setUser(data.data.user);
        navigate("/inicio");
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
    <div className="max-w-[1350px] w-full m-auto flex items-center justify-center h-[700px] sm:justify-normal py-5 sm:py-0 bg-white rounded-lg">
      <div
        className="hidden sm:block w-2/3 bg-cover bg-no-repeat bg-center h-full rounded-r-full"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="flex flex-col items-center w-full h-full max-w-[400px] m-auto py-4">
        <div className="flex w-full justify-center sm:justify-end mb-16">
          <button
            className="bg-transparent hover:bg-transparent"
            onClick={() => navigate("/inicio")}
          >
            <img src={logo} alt="logo" className="w-[70px] rounded-lg" />
          </button>
        </div>
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
                className="w-full text-white py-2 rounded-3xl my-5"
              >
                {isSubmitting ? "Cargando..." : "Iniciar Sesión"}
              </button>
              <Divider>
                <Typography variant="body2" color="textSecondary">
                  o
                </Typography>
              </Divider>
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
        <button className="bg-transparent text-blue-500 hover:bg-transparent hover:underline" onClick={()=>navigate('/auth/register')}>
          ¿No tienes cuenta?, ¡Regístrate aqui!
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
