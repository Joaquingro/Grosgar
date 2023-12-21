import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Whatsapp from './components/Whatsapp/Whatsapp'
import ServiceDetail from './pages/ServiceDetail/ServiceDetail'
import About from './pages/About/About'

function App() {

  
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
    <NavBar id = "inicio" isDarkMode = {isDarkMode} handleDarkMode = {handleDarkMode} />
    <Whatsapp/>
    <Routes>
      <Route path="/" element={<Navigate to="/inicio" />} />
      <Route path={"/inicio"} element={<Home isDarkMode = {isDarkMode} />} />
      <Route path={"/servicios"} element={<ServiceDetail isDarkMode = {isDarkMode} />} />
      <Route path={"/contacto"} element={<About />} />
    </Routes>

    </>
  )
}

export default App
