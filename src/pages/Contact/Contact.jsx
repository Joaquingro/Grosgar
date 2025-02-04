/* eslint-disable react/prop-types */
import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

export default function Contact({ id }) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

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

  return (
    <div className="bg-secondary-100 w-full px-4 ms:px-20 ">
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
              <p>+52 5532943994</p>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <MdEmail />
              <p>contabilidadivmg@gmail.com</p>
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
          <p className="mb-4 font-semibold text-2xl">
            ¿Tienes alguna duda?
          </p>
          <p className="text-sm text-neutral-500 mb-11">
            Te atenderemos lo más pronto posible
          </p>

          <Box
            component="form"
            action="https://formspree.io/f/mleqrpva"
            method="POST"
            noValidate
          >
            <Box mb={2}>
              <TextField
                fullWidth
                label="Tu nombre"
                variant="outlined"
                name="name"
                value={inputs.name}
                onChange={handleInput}
                required
                size="small"
                sx={{
                  "& .MuiInputBase-root": {
                    minHeight: "36px",
                    borderRadius: "25px",
                  },
                }}
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Correo electrónico"
                variant="outlined"
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleInput}
                required
                size="small"
                sx={{
                  "& .MuiInputBase-root": {
                    minHeight: "36px",
                    borderRadius: "25px",
                  },
                }}
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Cuéntame acerca de tu consulta..."
                variant="outlined"
                name="message"
                value={inputs.message}
                onChange={handleInput}
                multiline
                rows={4}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "25px",
                  },
                }}
                required
              />
            </Box>

            <button className="w-full mt-8" type="submit">
              Enviar
            </button>
          </Box>
        </div>
      </div>
    </div>
  );
}
