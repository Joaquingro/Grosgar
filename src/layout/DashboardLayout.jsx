import { Outlet } from "react-router-dom";
import NavBar from "../components/dashboard/NavBar/NavBar";
import Footer from "../components/dashboard/Footer/Footer";
import { useEffect } from "react";
import { supportApi } from "../api/api-client";
const DashboardLayout = () => {

  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        const response = await supportApi.active();  
        console.log('Backend activo:', response);
      } catch (error) {
        console.error('Error al hacer el health check', error);
      }
    };

    checkBackendStatus();

    const intervalId = setInterval(() => {
      checkBackendStatus();
    }, 60000); 

    return () => {
      clearInterval(intervalId);
    };

  }, []); 
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashboardLayout;
