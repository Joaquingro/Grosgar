import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logodoradoconfondo.jpeg";
import fail from "../../assets/cancelEmail.svg";
import check from "../../assets/checkEmail.svg";
import { useEffect, useState } from "react";
import { authApi } from "../../api/api-client";
const Verification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Obtener el token de la URL
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (token) {
      // Llamar al servicio de verificación con el token
      const verifyAccount = async () => {
        try {
          const response = await authApi.verify(token); // Usamos authApi para hacer la llamada

          // Verificación exitosa
          if (response.responseCode === 0) {
            setIsVerified(true);
            setMessage(response.message);
          } else {
            setMessage(response.message);
          }
        } catch (err) {
          console.error(err.response?.data?.message || err.message);
          setMessage(err.response?.data?.message || err.message);
        }
      };

      verifyAccount();
    }
  }, [location.search]);

  return (
    <div className="max-w-[450px] w-full m-auto flex items-center justify-center border border-primary-50 h-[700px] sm:justify-normal py-5 sm:py-0 bg-white rounded-lg">
      <div className="flex flex-col items-center w-full h-full max-w-[400px] m-auto py-4">
        <div className="flex w-full justify-center mb-16">
          <button
            className="bg-transparent hover:bg-transparent"
            onClick={() => navigate("/inicio")}
          >
            <img src={logo} alt="logo" className="w-[70px] rounded-lg" />
          </button>
        </div>
        <h1 className="text-2xl font-semibold">
          {isVerified ? " ¡Felicidades!" : "¡Ups, hubo un error!"}
        </h1>
        <img
          src={isVerified ? check : fail}
          alt="logo"
          className="w-[200px] rounded-lg mt-10 animate-check"
        />
        <p className="mt-10 text-center">{message}</p>
        <button className="mt-10" onClick={() => navigate("/auth/login")}>
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Verification;
