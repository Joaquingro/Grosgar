import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
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
    {/* <Whatsapp/> */}
    <Routes>
      <Route path={"/"} element={<Home isDarkMode = {isDarkMode} handleDarkMode = {handleDarkMode}/>} />
      <Route path={"/services"} element={<ServiceDetail />} />
      <Route path={"/about"} element={<About />} />

    </Routes>
    </>
  )
}

export default App
