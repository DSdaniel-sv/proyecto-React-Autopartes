import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Contacto from '../Page/Contacto'
import Inicio from '../Page/Inicio'
import Ofertas from '../Page/Ofertas'
import Cart from '../Components/Cart'
import Descripcion from '../Page/description/Descripcion'
import { auth } from '../fire';
import { onAuthStateChanged } from 'firebase/auth'
import Home from '../pages/Home'
import Login from '../auth/Login'
import Register from '../auth/Register'
const Router = () => {
  
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [user, setUser] = React.useState(null);
  const [authState, setAuthState] = React.useState(null)

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    console.log (cart);
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
    
  };
 

  React.useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth,
      async authenticatedUser => {
        if(authenticatedUser) {
          setUser(authenticatedUser.email)
          setAuthState('home');
        } else {
          setUser(null);
          setAuthState('login')
        }
      })

      return unSubscribeAuth;
  }, [user])

  if(authState === null) return <div className='font-bold text-center text-5xl'>loading...</div>
  if(authState === 'login') return <Login setAuthState={setAuthState} setUser={setUser}/>
  if(authState === 'register') return <Register setAuthState={setAuthState} setUser={setUser}/> 
  if(user) return <Home user={user} setAuthState={setAuthState} setUser={setUser}/>

  
  return (
    <BrowserRouter>
    <Header setShow={setShow} size = {cart.length}/>


    <Routes>
    {show ? ( 
        <Route path='/' element={<Inicio handleClick={handleClick} />} /> 
        ) : ( 
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} /> 
      )}
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
        <Route path='/ofertas' element={<Ofertas/>} />
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/descripcion' element={<Descripcion/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Router
