import { Outlet } from "react-router-dom";
import NavBar from "../components/dashboard/NavBar/NavBar";
import Footer from "../components/dashboard/Footer/Footer";
const DashboardLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashboardLayout;
