import React from 'react'

const Card = ({item,handleClick}) => {
    const {name, mainCategory, secondaryCategory, price, image} = item;
    
  return (
  
      <div className='box__card'>
        <picture>
          <img src={image} alt="" />
        </picture>
          <h4>{name}</h4>
          <p>{mainCategory}</p>
          <p>{secondaryCategory}</p>
          <p>S/ {price}</p>
          <button onClick={() =>handleClick(item)}>Agregar al Carrito</button>
        </div>
    
    // <div className='cards'>
    //     <div className='image_box'>
    //         <img src={image} alt="" />
    //     </div>
    //     <div className='details'>
    //         <p>{name}</p>
    //         <p>{mainCategory}</p>
    //         <p>{secondaryCategory}</p>
    //         <p>S/ {price}</p>
    //         <button onClick={() =>handleClick(item)}>Agregar al Carrito</button>
    //     </div>
    // </div>

        
        
  )
}

export default Card;
