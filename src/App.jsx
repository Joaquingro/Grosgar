import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/detail:id"} element={<Detail />} />
    </Routes>
    </>
  )
}

export default App
