import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar
        id="inicio"
      />
      <Whatsapp />
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path={"/inicio"} element={<Home />} />
        <Route path={"/nosotros"} element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
