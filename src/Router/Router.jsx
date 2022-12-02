import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Contacto from '../Page/Contacto'
import Inicio from '../Page/Inicio'
import Ofertas from '../Page/Ofertas'

const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='ofertas' element={<Ofertas />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Router
