import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Contacto from '../Page/Contacto'
import Inicio from '../Page/Inicio'

const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Router
