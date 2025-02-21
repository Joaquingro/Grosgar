import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { authApi } from "../../api/api-client";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logodoradoconfondo.jpeg";
import { Divider, Typography } from "@mui/material";
import useAuthStore from "../../stores/auth.store";
import FormikInput from "../../components/ui/Input";
import background from "../../assets/register.jpg";


const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const validationSchema = Yup.object({
    email: Yup.string().email("Correo inválido").required("Requerido"),
    password: Yup.string().min(6, "Mínimo 6 caracteres").required("Requerido"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const data = await authApi.register(values);
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
      <div className="flex flex-col items-center w-full h-full max-w-[400px] m-auto py-4">
        <div className="flex w-full justify-center sm:justify-start ">
          <button
            className="bg-transparent hover:bg-transparent"
            onClick={() => navigate("/inicio")}
          >
            <img src={logo} alt="logo" className="w-[70px] rounded-lg" />
          </button>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Regístrate</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="p-6 rounded-lg w-full">
              <FormikInput label="Nombre" name="firstName" type="text" />
              <FormikInput label="Apellidos" name="lastName" type="text" />
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
      </div>
      <div
        className="hidden sm:block w-2/3 bg-cover bg-no-repeat bg-center h-full rounded-l-full"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
    </div>
  );
};

export default Register;
