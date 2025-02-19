import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { authApi } from "../../api/api-client";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="max-w-[1350px] w-full m-auto flex items-center bg-white rounded-lg">
      <div
        className="w-2/3 bg-cover bg-no-repeat bg-center h-[700px]"
        style={{ backgroundImage: "url('/src/assets/login.jpg')" }}
      ></div>

      <div className="flex flex-col justify-center items-center w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string().email("Correo inválido").required("Requerido"),
            password: Yup.string()
              .min(6, "Mínimo 6 caracteres")
              .required("Requerido"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const data = await authApi.login(values.email, values.password);
              console.log("Login exitoso", data);
            } catch (error) {
              setErrorMessage("Credenciales incorrectas");
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white p-6 rounded-lg w-80">
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
              {errorMessage && (
                <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
              )}
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
