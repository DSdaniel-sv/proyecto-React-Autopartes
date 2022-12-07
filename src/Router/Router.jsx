import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Contacto from '../Page/Contacto'
import Inicio from '../Page/Inicio'
import { Auth0Provider } from '@auth0/auth0-react'
import Ruteo from '../Login/Ruteo'

const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        
    </Routes>
    <Auth0Provider
      domain='dev-3smgjc3fy5y5n6yt.us.auth0.com'
      clientId='hFaEIEQ3PRO0vm7Kgv2RjCYduh4zYt0Z'
      redirectUri={window.location.origin}
    >
      <Ruteo />
    </Auth0Provider>
    <Footer/>

    </BrowserRouter>
  )
}

export default Router
