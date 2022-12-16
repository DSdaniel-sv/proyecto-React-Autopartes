import React, { useEffect, useState } from 'react';
import imgCarrito from '../assets/img/images/carrito-de-compras.png'
import "../Components/Cart.css";

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
    };

    useEffect(() => {
        handlePrice();
    });



  return (
    <article className='box__cart'>
      <h1 className='carrito_h1'>Carrito de compras</h1>
      {cart.length === 0 ? 
      <div className='cont__cart'>
        <div className='box__cart-vacio'>
          <picture>
            <img src={imgCarrito} alt="" />
          </picture>
          <h2 className='carrito_h2'>CARRITO VACIO</h2>
        </div>
      </div>  
      : null}
  
      {cart.map((item) => (
        
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.mainCategory}</p>
            <p>{item.secondaryCategory}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span className='price price-1'>Monto total</span>
        <span className='price price-2'>S/  {price}</span>
        
      </div>
    </article>
  );
};

export default Cart;
