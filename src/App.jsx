import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import NavBar from './components/NavBar/NavBar'
import Whatsapp from './components/Whatsapp/Whatsapp'

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
      <Route path={"/detail:id"} element={<Detail />} />
    </Routes>
    </>
  )
}

export default App
